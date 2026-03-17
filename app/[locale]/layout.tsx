import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import '../globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'
import { CartProvider } from '@/context/CartContext'

const GA_ID = 'G-0CDGZY9FPZ'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'LuxOps — Hotel Operations Playbooks, SOPs & Training',
  description:
    'Operational playbooks, SOP frameworks and on-property training for high-end hotels. Front Office, Housekeeping, F&B, Spa. Built from real hotel operations.',
  keywords: [
    'hotel operations playbook',
    'hotel SOP',
    'hotel standard operating procedures',
    'hotel procedures',
    'front office playbook',
    'housekeeping SOP',
    'F&B service standards',
    'spa wellness protocols',
    'hotel operations management',
    'hotel training manual',
    'luxury hotel standards',
    'hotel staff training',
    'hotel quality audit',
    'playbook hôtelier',
    'procédures hôtel',
    'SOP hôtel',
    'gestion opérations hôtelières',
    'formation hôtelière',
    'standards service hôtel',
    'audit qualité hôtel',
  ],
  verification: {
    google: 'WSMYWLKVx8J9gq1vEj6wiRBqmej4G1StcRmx4W830SU',
    other: {
      'msvalidate.01': 'FE2299AE3313B0416274A9AEB4820B05',
    },
  },
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        <NextIntlClientProvider messages={messages}>
          <CartProvider>
            <Header locale={locale} />
            <main>{children}</main>
            <Footer locale={locale} />
            <CartDrawer locale={locale} />
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
