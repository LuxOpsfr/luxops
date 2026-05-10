import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { CheckCircle } from 'lucide-react'
import CheckoutSuccessTracker from '@/components/CheckoutSuccessTracker'

export const metadata: Metadata = {
  title: 'Order Confirmed | LuxOps',
  robots: { index: false },
}

export default async function SuccessPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const isEn = locale === 'en'

  return (
    <>
    <CheckoutSuccessTracker locale={locale} />
    <Script id="google-ads-purchase" strategy="afterInteractive">
      {`gtag('event', 'conversion_event_purchase', {});`}
    </Script>
    <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 text-center py-24">
        <div className="flex justify-center mb-6">
          <CheckCircle size={64} className="text-[#111111]" strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl font-bold text-[#111111] mb-4">
          {isEn ? 'Order Confirmed!' : 'Commande confirmée !'}
        </h1>
        <p className="text-gray-500 leading-relaxed mb-8">
          {isEn
            ? 'Thank you for your purchase. You will receive your playbook by email within a few minutes. Check your spam folder if needed.'
            : 'Merci pour votre achat. Vous recevrez votre playbook par e-mail dans quelques minutes. Vérifiez vos spams si nécessaire.'}
        </p>
        <Link
          href={`/${locale}/playbooks`}
          className="inline-block px-8 py-3 bg-[#111111] text-white font-medium rounded-xl hover:bg-[#333333] transition-colors"
        >
          {isEn ? 'Back to Playbooks' : 'Retour aux Playbooks'}
        </Link>
      </div>
    </div>
    </>
  )
}
