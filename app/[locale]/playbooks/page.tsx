import type { Metadata } from 'next'
import PlaybooksContent from '@/components/PlaybooksContent'
import { breadcrumbSchema, localizedPath } from '@/lib/seo'
import { toActiveLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import { alternatesForRoute, localizedRouteUrl } from '@/lib/localized-routes'

const playbooksMetadata = {
  en: {
    title: 'Hotel SOP Manuals for Luxury Operations | LuxOps',
    description: 'Operational SOP manuals and practical starter packs for hotel teams, available in English and French.',
  },
  fr: {
    title: 'Manuels SOP pour l’hôtellerie haut de gamme | LuxOps',
    description: 'Manuels SOP opérationnels et Starter Packs pratiques pour les équipes hôtelières, en français et en anglais.',
  },
  es: {
    title: 'Manuales SOP para operaciones hoteleras | LuxOps',
    description: 'Manuales SOP operativos y Starter Packs para equipos hoteleros, disponibles en francés e inglés.',
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
          ? 'Manuels SOP Opérationnels Hôteliers'
          : isEs
            ? 'Manuales SOP operativos hoteleros'
            : 'Hotel Operations SOP Manuals',
        description: isFr
          ? 'Manuels SOP opérationnels pour hôtels haut de gamme : procédures, standards de service et outils pour la réception, le housekeeping, le F&B et le spa.'
          : isEs
            ? 'Manuales SOP operativos para hoteles de alta gama: procedimientos, estándares de servicio y herramientas para Front Office, Housekeeping, F&B y Spa.'
            : 'Operational SOP manuals for high-end hotels, with procedures and service standards for Front Office, Housekeeping, F&B and Spa departments.',
        url: localizedRouteUrl('playbooks', activeLocale),
        itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Product',
        name: 'Front Office SOP Manual',
        description:
          'Check-in/out procedures, guest communication protocols, upselling techniques, night audit, PMS systems and concierge standards. Approximately 300 pages. PDF + PPT.',
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
        name: 'Housekeeping SOP Manual',
        description:
          'Room inspection checklists, linen management, deep cleaning protocols, quality control and sustainability practices. Approximately 300 pages. PDF + PPT.',
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
        name: 'Food & Beverage SOP Manual',
        description:
          'Restaurant & bar service standards, wine service, room service protocols and mise en place procedures. Approximately 175 pages. PDF + PPT.',
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
        name: 'Spa & Wellness SOP Manual',
        description:
          'Treatment protocols, guest journey mapping, product knowledge, facilities management and therapist standards. Approximately 150 pages. PDF + PPT.',
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
          ? 'Bundle complet des Manuels SOP Hôtel'
          : isEs
            ? 'Paquete completo de Manuales SOP de hotel'
            : 'Complete Hotel SOP Manuals Bundle',
        description: isFr
          ? 'Les quatre Manuels SOP LuxOps : Front Office, Housekeeping, Food & Beverage et Spa & Wellness. Formats PDF et PowerPoint modifiables, en français et en anglais.'
          : isEs
            ? 'Los cuatro Manuales SOP LuxOps: Front Office, Housekeeping, Food & Beverage y Spa & Wellness. Formatos PDF y PowerPoint editables, en francés e inglés.'
            : 'All four LuxOps SOP manuals: Front Office, Housekeeping, Food & Beverage and Spa & Wellness. Editable PDF and PowerPoint in English and French.',
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
        { name: 'Manuels SOP', url: localizedRouteUrl('playbooks', activeLocale) },
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
