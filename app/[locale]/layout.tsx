import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import Script from 'next/script'
import '../globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import SiteShell from '@/components/SiteShell'
import { CartProvider } from '@/context/CartContext'
import { Analytics } from '@vercel/analytics/next'
import { organizationSchema } from '@/lib/seo'

const GA_ID = 'G-0CDGZY9FPZ'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-display', weight: ['400', '600', '700', '800'] })

export const metadata: Metadata = {
  title: 'LuxOps | Standardizing Excellence in High-End Hospitality',
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
  openGraph: {
    type: 'website',
    siteName: 'LuxOps',
    title: 'LuxOps | Standardizing Excellence in High-End Hospitality',
    description:
      'Operational playbooks, SOP frameworks and on-property training for high-end hotels. Front Office, Housekeeping, F&B, Spa. Built from real hotel operations.',
    url: 'https://www.luxops.fr',
    images: [
      {
        url: 'https://www.luxops.fr/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LuxOps: Standardizing Excellence in High-End Hospitality',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LuxOps | Hotel Operations Playbooks & SOPs',
    description:
      'Operational playbooks, SOP frameworks and on-property training for high-end hotels.',
    images: ['https://www.luxops.fr/og-image.png'],
  },
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
  const orgSchema = organizationSchema(locale)

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${manrope.variable} font-sans`}>
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

        {/* Apollo Website Visitor Tracking */}
        <Script id="apollo-tracker" strategy="afterInteractive">
          {`
            function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
            o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
            o.onload=function(){window.trackingFunctions.onLoad({appId:"69c50488b690580011e8c6f5"})},
            document.head.appendChild(o)}initApollo();
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />

        <NextIntlClientProvider messages={messages}>
          <CartProvider>
            <SiteShell locale={locale}>
              {children}
            </SiteShell>
          </CartProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
