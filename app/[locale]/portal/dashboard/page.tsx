'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import PortalShell from '@/components/portal/PortalShell'
import { Download, BookOpen, Package, ChevronDown, ChevronUp, FileText } from 'lucide-react'
import { PLAYBOOKS, PRICE_TO_PLAYBOOK, getPlaybookIds, type Playbook, type Chapter } from '@/lib/chapters'

interface Purchase {
  id: string
  product_name: string
  price_id: string
  download_url: string | null
  created_at: string
  locale: string
}

const SUPABASE_STORAGE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL + '/storage/v1/object/public/playbooks/'

function fileUrl(path: string) {
  return SUPABASE_STORAGE_URL + path
}

export default function DashboardPage() {
  const router = useRouter()
  const params = useParams()
  const locale = params.locale as string

  const [email, setEmail] = useState('')
  const [purchases, setPurchases] = useState<Purchase[]>([])
  const [loading, setLoading] = useState(true)
  const isFr = locale === 'fr'

  useEffect(() => {
    const load = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { router.replace(`/${locale}/portal/login`); return }
      setEmail(session.user.email ?? '')

      const { data } = await supabase
        .from('purchases')
        .select('*')
        .order('created_at', { ascending: false })

      setPurchases(data ?? [])
      setLoading(false)
    }
    load()
  }, [locale, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F7FA]">
        <div className="w-6 h-6 border-2 border-[#1A2E44] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  // Collect unique playbook IDs from all purchases
  const unlockedPlaybookIds = new Set<string>()
  for (const p of purchases) {
    for (const id of getPlaybookIds(p.price_id)) {
      unlockedPlaybookIds.add(id)
    }
  }

  const unlockedPlaybooks = Array.from(unlockedPlaybookIds)
    .map(id => PLAYBOOKS[id])
    .filter(Boolean)

  return (
    <PortalShell locale={locale} email={email}>
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
          {isFr ? 'Tableau de bord' : 'Dashboard'}
        </p>
        <h1 className="text-2xl font-bold text-[#1A2E44]">
          {isFr ? 'Bibliothèque opérationnelle' : 'Operational Library'}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {isFr
            ? 'Vos playbooks et ressources téléchargeables, organisés par chapitre.'
            : 'Your playbooks and downloadable resources, organised by chapter.'}
        </p>
      </div>

      {/* Stats */}
      {purchases.length > 0 && (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
              {isFr ? 'Playbooks achetés' : 'Purchased playbooks'}
            </p>
            <p className="text-3xl font-bold text-[#1A2E44]">{unlockedPlaybooks.length}</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
              {isFr ? 'Chapitres disponibles' : 'Available chapters'}
            </p>
            <p className="text-3xl font-bold text-[#2E7D32]">
              {unlockedPlaybooks.reduce((acc, p) => acc + p.chapters.length, 0)}
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-5 hidden lg:block">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
              {isFr ? 'Formats disponibles' : 'Available formats'}
            </p>
            <p className="text-3xl font-bold text-[#1A2E44]">PDF + PPT</p>
          </div>
        </div>
      )}

      {/* Empty state */}
      {unlockedPlaybooks.length === 0 ? (
        <div className="bg-white border border-gray-100 rounded-2xl p-12 text-center">
          <div className="w-14 h-14 bg-[#EEF2F7] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Package size={24} className="text-[#1A2E44]" />
          </div>
          <h2 className="text-base font-bold text-[#1A2E44] mb-2">
            {isFr ? 'Aucun achat trouvé' : 'No purchases found'}
          </h2>
          <p className="text-sm text-gray-500 mb-6 max-w-sm mx-auto">
            {isFr
              ? "Utilisez l'email avec lequel vous avez effectué votre achat, ou explorez nos playbooks."
              : 'Use the email you used for your purchase, or explore our playbooks.'}
          </p>
          <Link
            href={`/${locale}/playbooks`}
            className="inline-flex items-center px-5 py-2.5 bg-[#1A2E44] text-white text-sm font-semibold rounded-lg hover:bg-[#0f1e2e] transition-colors"
          >
            {isFr ? 'Voir les playbooks' : 'Browse playbooks'}
          </Link>
        </div>
      ) : (
        <div className="grid gap-5">
          {unlockedPlaybooks.map(playbook => (
            <PlaybookCard key={playbook.id} playbook={playbook} isFr={isFr} locale={locale} />
          ))}
        </div>
      )}

      {/* Support */}
      <div className="mt-10 pt-8 border-t border-gray-100 text-center">
        <p className="text-sm text-gray-400">
          {isFr ? 'Un problème avec votre accès ?' : 'Issue with your access?'}{' '}
          <Link href={`/${locale}/contact`} className="text-[#0056D2] hover:underline font-medium">
            {isFr ? 'Contactez-nous' : 'Contact us'}
          </Link>
        </p>
      </div>
    </PortalShell>
  )
}

function PlaybookCard({ playbook, isFr, locale }: { playbook: Playbook; isFr: boolean; locale: string }) {
  const [open, setOpen] = useState(true)

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
      {/* Playbook header */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${playbook.color}15` }}
          >
            <BookOpen size={18} style={{ color: playbook.color }} />
          </div>
          <div className="text-left">
            <h2 className="font-bold text-[#1A2E44] text-base">
              {isFr ? playbook.titleFr : playbook.titleEn}
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              {playbook.chapters.length} {isFr ? 'chapitres' : 'chapters'} · PDF + PPT
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full hidden sm:inline"
            style={{ backgroundColor: `${playbook.color}15`, color: playbook.color }}
          >
            {isFr ? 'Débloqué' : 'Unlocked'}
          </span>
          {open ? (
            <ChevronUp size={18} className="text-gray-400" />
          ) : (
            <ChevronDown size={18} className="text-gray-400" />
          )}
        </div>
      </button>

      {/* Chapters list */}
      {open && (
        <div className="border-t border-gray-100">
          {playbook.chapters.map((chapter, idx) => (
            <ChapterRow
              key={chapter.number}
              chapter={chapter}
              isFr={isFr}
              locale={locale}
              color={playbook.color}
              isLast={idx === playbook.chapters.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function ChapterRow({
  chapter,
  isFr,
  locale,
  color,
  isLast,
}: {
  chapter: Chapter
  isFr: boolean
  locale: string
  color: string
  isLast: boolean
}) {
  const pdfUrl = fileUrl(isFr ? chapter.pdfFr : chapter.pdfEn)
  const pptxUrl = fileUrl(isFr ? chapter.pptxFr : chapter.pptxEn)

  return (
    <div className={`flex items-center justify-between px-6 py-4 gap-4 hover:bg-gray-50 transition-colors ${!isLast ? 'border-b border-gray-50' : ''}`}>
      <div className="flex items-center gap-3 min-w-0">
        <span
          className="text-xs font-bold tabular-nums flex-shrink-0 w-7 text-center"
          style={{ color }}
        >
          {String(chapter.number).padStart(2, '0')}
        </span>
        <p className="text-sm font-medium text-[#1A2E44] truncate">
          {isFr ? chapter.titleFr : chapter.titleEn}
        </p>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors"
          style={{
            borderColor: `${color}40`,
            color: color,
            backgroundColor: `${color}08`,
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.backgroundColor = `${color}18`
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.backgroundColor = `${color}08`
          }}
        >
          <FileText size={12} />
          PDF
        </a>
        <a
          href={pptxUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors"
          style={{
            borderColor: '#64748b40',
            color: '#475569',
            backgroundColor: '#f8fafc',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.backgroundColor = '#f1f5f9'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.backgroundColor = '#f8fafc'
          }}
        >
          <Download size={12} />
          PPT
        </a>
      </div>
    </div>
  )
}
