'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import PortalShell from '@/components/portal/PortalShell'
import { Download, Lock, BookOpen, Package } from 'lucide-react'

interface Purchase {
  id: string
  product_name: string
  price_id: string
  download_url: string | null
  created_at: string
  locale: string
}

const DEPT_COLORS: Record<string, string> = {
  'Front Office': '#0056D2',
  'Housekeeping': '#2E7D32',
  'F&B': '#B45309',
  'Spa & Wellness': '#7C3AED',
  'Bundle': '#1A2E44',
}

const DEPT_MAP: Record<string, string> = {
  'front office': 'Front Office',
  'housekeeping': 'Housekeeping',
  'f&b': 'F&B',
  'spa': 'Spa & Wellness',
  'bundle': 'Bundle',
}

function getDept(name: string): string {
  const lower = name.toLowerCase()
  for (const key of Object.keys(DEPT_MAP)) {
    if (lower.includes(key)) return DEPT_MAP[key]
  }
  return 'Ressource'
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

  const available = purchases.filter(p => p.download_url && !p.download_url.startsWith('PLACEHOLDER'))
  const pending = purchases.filter(p => !p.download_url || p.download_url.startsWith('PLACEHOLDER'))

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
            ? 'Vos playbooks et ressources téléchargeables.'
            : 'Your playbooks and downloadable resources.'}
        </p>
      </div>

      {/* Stats */}
      {purchases.length > 0 && (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
              {isFr ? 'Ressources achetées' : 'Purchased resources'}
            </p>
            <p className="text-3xl font-bold text-[#1A2E44]">{purchases.length}</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
              {isFr ? 'Disponibles' : 'Available'}
            </p>
            <p className="text-3xl font-bold text-[#2E7D32]">{available.length}</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-5 hidden lg:block">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
              {isFr ? 'À venir' : 'Coming soon'}
            </p>
            <p className="text-3xl font-bold text-gray-300">{pending.length}</p>
          </div>
        </div>
      )}

      {/* Empty state */}
      {purchases.length === 0 ? (
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
        <div className="grid gap-4">
          {purchases.map(purchase => (
            <PurchaseCard key={purchase.id} purchase={purchase} isFr={isFr} />
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

function PurchaseCard({ purchase, isFr }: { purchase: Purchase; isFr: boolean }) {
  const dept = getDept(purchase.product_name)
  const color = DEPT_COLORS[dept] ?? '#1A2E44'
  const hasDownload = purchase.download_url && !purchase.download_url.startsWith('PLACEHOLDER')
  const date = new Date(purchase.created_at).toLocaleDateString(
    isFr ? 'fr-FR' : 'en-GB',
    { day: 'numeric', month: 'long', year: 'numeric' }
  )

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center justify-between gap-4 hover:shadow-sm transition-shadow">
      <div className="flex items-center gap-4 min-w-0">
        {/* Dept color dot */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${color}15` }}
        >
          <BookOpen size={18} style={{ color }} />
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span
              className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
              style={{ backgroundColor: `${color}15`, color }}
            >
              {dept}
            </span>
          </div>
          <h3 className="font-semibold text-[#1A2E44] text-sm">{purchase.product_name}</h3>
          <p className="text-xs text-gray-400 mt-0.5">
            {isFr ? 'Acheté le' : 'Purchased'} {date}
          </p>
        </div>
      </div>

      <div className="flex-shrink-0">
        {hasDownload ? (
          <a
            href={purchase.download_url!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#2E7D32] text-white text-sm font-semibold rounded-lg hover:bg-[#236127] transition-colors"
          >
            <Download size={15} />
            {isFr ? 'Télécharger' : 'Download'}
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-400 text-sm font-medium rounded-lg">
            <Lock size={14} />
            {isFr ? 'Bientôt' : 'Coming soon'}
          </span>
        )}
      </div>
    </div>
  )
}
