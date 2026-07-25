import type { Metadata } from 'next'
import PlaybooksContent from '@/components/PlaybooksContent'
import { breadcrumbSchema, localizedPath } from '@/lib/seo'
import { toActiveLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import { alternatesForRoute, localizedRouteUrl } from '@/lib/localized-routes'

const playbooksMetadata = {
  en: {
    title: 'Hotel SOP Playbooks for 5-Star Operations | LuxOps',
    description:
      'Professionally written hotel operations products for luxury hotel teams: starter packs from €29 and full SOP playbooks from €67.',
  },
  fr: {
    title: 'Playbooks SOP pour Hôtels 5 Étoiles | LuxOps',
    description:
      'Produits opérationnels pour équipes hôtelières haut de gamme : starter packs à partir de 29 € et playbooks SOP complets à partir de 67 €.',
  },
  es: {
    title: 'Playbooks SOP para operaciones hoteleras 5 estrellas | LuxOps',
    description:
      'Productos operativos para equipos hoteleros high-end: starter packs desde 29 € y playbooks SOP completos desde 67 €.',
  },
} satisfies Partial<Record<Locale, { title: string; description: string }>>

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const activeLocale = toActiveLocale(locale)
  const metadata = playbooksMetadata[activeLocale as keyof typeof playbooksMetadata] ?? playbooksMetadata.en
  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: localizedRouteUrl('playbooks', activeLocale),
      languages: alternatesForRoute('playbooks'),
    },
  }
}

const sharedOfferFields = {
  '@type': 'Offer',
  price: '67',
  priceCurrency: 'EUR',
  priceValidUntil: '2027-12-31',
  availability: 'https://schema.org/InStock',
  hasMerchantReturnPolicy: {
    '@type': 'MerchantReturnPolicy',
    applicableCountry: 'FR',
    returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
  },
  shippingDetails: {
    '@type': 'OfferShippingDetails',
    shippingDestination: {
      '@type': 'DefinedRegion',
      addressCountry: 'FR',
    },
    shippingRate: {
      '@type': 'MonetaryAmount',
      value: 0,
      currency: 'EUR',
    },
    deliveryTime: {
      '@type': 'ShippingDeliveryTime',
      handlingTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 0, unitCode: 'DAY' },
      transitTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 0, unitCode: 'DAY' },
    },
  },
}

const sharedBrand = { '@type': 'Brand', name: 'LuxOps' }
const sharedImage = 'https://www.luxops.fr/og-image.png'

function playbooksSchema(locale: string) {
  const activeLocale = toActiveLocale(locale)
  const isFr = activeLocale === 'fr'
  const isEs = activeLocale === 'es'
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        name: isFr
          ? 'Playbooks Opérationnels Hôteliers'
          : isEs
            ? 'Playbooks operativos hoteleros'
            : 'Hotel Operations Playbooks',
        description: isFr
          ? 'Playbooks opérationnels complets pour hôtels haut de gamme. Procédures, standards de service et SOPs pour la réception, le housekeeping, le F&B et le spa.'
          : isEs
            ? 'Playbooks operativos completos para hoteles high-end. Procedimientos, estándares de servicio y SOPs para Front Office, Housekeeping, F&B y Spa.'
            : 'Complete operational playbooks for high-end hotels. Documented procedures, service standards and SOPs for Front Office, Housekeeping, F&B and Spa departments.',
        url: localizedRouteUrl('playbooks', activeLocale),
        itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Product',
        name: 'Front Office Playbook',
        description:
          'Check-in/out procedures, guest communication protocols, upselling techniques, night audit, PMS systems and concierge standards. ~250 pages. PDF + PPT.',
        image: sharedImage,
        brand: sharedBrand,
        offers: sharedOfferFields,
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Product',
        name: 'Housekeeping Playbook',
        description:
          'Room inspection checklists, linen management, deep cleaning protocols, quality control and sustainability practices. ~220 pages. PDF + PPT.',
        image: sharedImage,
        brand: sharedBrand,
        offers: sharedOfferFields,
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Product',
        name: 'F&B Playbook',
        description:
          'Restaurant & bar service standards, wine service, room service protocols and mise en place procedures. ~280 pages. PDF + PPT.',
        image: sharedImage,
        brand: sharedBrand,
        offers: sharedOfferFields,
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Product',
        name: 'Spa & Wellness Playbook',
        description:
          'Treatment protocols, guest journey mapping, product knowledge, facilities management and therapist standards. ~200 pages. PDF + PPT.',
        image: sharedImage,
        brand: sharedBrand,
        offers: sharedOfferFields,
      },
    },
        ],
      },
      {
        '@type': 'Product',
        name: isFr
          ? 'Bundle complet SOP Hôtel'
          : isEs
            ? 'Pack completo SOP Hotel'
            : 'Complete Hotel SOP Bundle',
        description: isFr
          ? 'Les quatre playbooks opérationnels LuxOps : Front Office, Housekeeping, F&B et Spa. Formats PDF et PowerPoint.'
          : isEs
            ? 'Los cuatro playbooks operativos LuxOps: Front Office, Housekeeping, F&B y Spa. Formatos PDF y PowerPoint.'
            : 'All four LuxOps hotel operations playbooks: Front Office, Housekeeping, F&B and Spa. PDF and PowerPoint formats.',
        image: sharedImage,
        brand: sharedBrand,
        offers: {
          ...sharedOfferFields,
          price: '199',
          url: localizedRouteUrl('playbooks', activeLocale),
        },
      },
      breadcrumbSchema([
        { name: 'LuxOps', url: localizedPath(activeLocale) },
        { name: 'Playbooks', url: localizedRouteUrl('playbooks', activeLocale) },
      ]),
    ],
  }
}

export default async function PlaybooksPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(playbooksSchema(locale)) }}
      />
      <PlaybooksContent locale={locale} />
    </>
  )
}
