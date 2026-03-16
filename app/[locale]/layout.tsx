import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '../globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'LuxOps — Hotel Operations Playbooks, SOPs & Training',
  description:
    'Operational playbooks, SOP frameworks and on-property training for high-end hotels. Front Office, Housekeeping, F&B, Spa. Built from real hotel operations.',
  verification: {
    google: 'WSMYWLKVx8J9gq1vEj6wiRBqmej4G1StcRmx4W830SU',
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
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
