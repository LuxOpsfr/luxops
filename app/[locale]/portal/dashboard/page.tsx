'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { Download, LogOut, BookOpen, Lock } from 'lucide-react'

interface Purchase {
  id: string
  product_name: string
  price_id: string
  download_url: string | null
  created_at: string
  locale: string
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

      if (!session) {
        router.replace(`/${locale}/portal/login`)
        return
      }

      setEmail(session.user.email ?? '')

      const { data, error } = await supabase
        .from('purchases')
        .select('*')
        .order('created_at', { ascending: false })

      if (!error && data) {
        setPurchases(data)
      }

      setLoading(false)
    }

    load()
  }, [locale, router])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push(`/${locale}/portal/login`)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#1A2E44] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <header className="bg-[#1A2E44] text-white">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href={`/${locale}`} className="font-bold text-lg tracking-widest">
            LuxOps
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/70 hidden sm:block">{email}</span>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors"
            >
              <LogOut size={15} />
              {isFr ? 'Déconnexion' : 'Sign out'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#1A2E44] mb-1">
            {isFr ? 'Mes ressources' : 'My resources'}
          </h1>
          <p className="text-sm text-gray-500">
            {isFr
              ? 'Retrouvez ici tous vos playbooks et ressources téléchargeables.'
              : 'Find all your playbooks and downloadable resources here.'}
          </p>
        </div>

        {/* Purchases */}
        {purchases.length === 0 ? (
          <div className="bg-white border border-gray-100 rounded-2xl p-10 text-center">
            <div className="w-12 h-12 bg-[#EEF2F7] rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen size={22} className="text-[#1A2E44]" />
            </div>
            <h2 className="text-base font-semibold text-[#1A2E44] mb-2">
              {isFr ? 'Aucun achat trouvé' : 'No purchases found'}
            </h2>
            <p className="text-sm text-gray-500 mb-5">
              {isFr
                ? 'Assurez-vous d\'utiliser l\'email avec lequel vous avez effectué votre achat.'
                : 'Make sure you are using the same email you used for your purchase.'}
            </p>
            <Link
              href={`/${locale}/playbooks`}
              className="inline-flex items-center px-5 py-2.5 bg-[#1A2E44] text-white text-sm font-medium rounded-lg hover:bg-[#0f1e2e] transition-colors"
            >
              {isFr ? 'Découvrir les playbooks' : 'Browse playbooks'}
            </Link>
          </div>
        ) : (
          <div className="grid gap-4">
            {purchases.map(purchase => (
              <PurchaseCard
                key={purchase.id}
                purchase={purchase}
                isFr={isFr}
              />
            ))}
          </div>
        )}

        {/* Support */}
        <div className="mt-10 pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500">
            {isFr ? 'Un problème ?' : 'Need help?'}{' '}
            <Link href={`/${locale}/contact`} className="text-[#0056D2] hover:underline">
              {isFr ? 'Contactez-nous' : 'Contact us'}
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}

function PurchaseCard({ purchase, isFr }: { purchase: Purchase; isFr: boolean }) {
  const date = new Date(purchase.created_at).toLocaleDateString(
    isFr ? 'fr-FR' : 'en-GB',
    { day: 'numeric', month: 'long', year: 'numeric' }
  )

  const hasDownload = purchase.download_url && !purchase.download_url.startsWith('PLACEHOLDER')

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center justify-between gap-4 hover:shadow-sm transition-shadow">
      <div className="flex items-center gap-4 min-w-0">
        <div className="w-10 h-10 bg-[#EEF2F7] rounded-xl flex items-center justify-center flex-shrink-0">
          <BookOpen size={18} className="text-[#1A2E44]" />
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-[#1A2E44] text-sm truncate">{purchase.product_name}</h3>
          <p className="text-xs text-gray-400 mt-0.5">
            {isFr ? 'Acheté le' : 'Purchased on'} {date}
          </p>
        </div>
      </div>

      <div className="flex-shrink-0">
        {hasDownload ? (
          <a
            href={purchase.download_url!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#2E7D32] text-white text-sm font-medium rounded-lg hover:bg-[#236127] transition-colors"
          >
            <Download size={15} />
            {isFr ? 'Télécharger' : 'Download'}
          </a>
        ) : (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-400 text-sm font-medium rounded-lg cursor-not-allowed">
            <Lock size={15} />
            {isFr ? 'Bientôt disponible' : 'Coming soon'}
          </div>
        )}
      </div>
    </div>
  )
}
