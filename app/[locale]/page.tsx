import type { Metadata } from 'next'
import HomeLanding from '@/components/HomeLanding'
import { ACTIVE_LOCALES, toActiveLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import { alternatesForRoute, localizedRouteUrl } from '@/lib/localized-routes'

const homeMetadata = {
  en: {
    title: 'LuxOps | Hotel SOP Manuals & Training',
    description: 'Operational manuals and practical training to help high-end hotels structure and apply their service standards.',
  },
  fr: {
    title: 'LuxOps | Manuels SOP et formation hôtelière',
    description: 'Manuels opérationnels et formations pour aider les hôtels haut de gamme à structurer et appliquer leurs standards de service.',
  },
  es: {
    title: 'LuxOps | Manuales SOP y formación hotelera',
    description: 'Manuales operativos y formación práctica para ayudar a hoteles de alta gama a estructurar y aplicar sus estándares de servicio.',
  },
} satisfies Partial<Record<Locale, { title: string; description: string }>>

const orgSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.luxops.fr/#organization',
      name: 'LuxOps',
      url: 'https://www.luxops.fr',
      description: 'Operational SOP manuals and hotel training.',
      contactPoint: { '@type': 'ContactPoint', email: 'contact@luxops.fr', contactType: 'customer service' },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.luxops.fr/#website',
      name: 'LuxOps',
      url: 'https://www.luxops.fr',
      publisher: { '@id': 'https://www.luxops.fr/#organization' },
      inLanguage: [...ACTIVE_LOCALES],
    },
  ],
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const activeLocale = toActiveLocale(locale)
  const metadata = homeMetadata[activeLocale as keyof typeof homeMetadata] ?? homeMetadata.en
  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: localizedRouteUrl('home', activeLocale),
      languages: alternatesForRoute('home'),
    },
  }
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const activeLocale = toActiveLocale(locale)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <HomeLanding locale={activeLocale} />
    </>
  )
}
