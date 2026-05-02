import type { Metadata } from 'next'
import PlaybooksContent from '@/components/PlaybooksContent'
import { breadcrumbSchema, localizedPath } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'Hotel SOP Playbooks for 5-Star Operations | LuxOps'
      : 'Playbooks SOP pour Hôtels 5 Étoiles | LuxOps',
    description: isEn
      ? 'Professionally written SOP playbooks for luxury hotel teams — Front Office, Housekeeping, F&B and Spa. Download in PDF and PowerPoint. From €67.'
      : 'Playbooks SOP rédigés pour les équipes hôtelières haut de gamme — Front Office, Housekeeping, F&B et Spa. Téléchargement PDF et PowerPoint. À partir de 67 €.',
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/playbooks`,
      languages: {
        'en': 'https://www.luxops.fr/en/playbooks',
        'fr': 'https://www.luxops.fr/fr/playbooks',
        'x-default': 'https://www.luxops.fr/en/playbooks',
      },
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
  const isEn = locale === 'en'
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        name: isEn ? 'Hotel Operations Playbooks' : 'Playbooks Opérationnels Hôteliers',
        description: isEn
          ? 'Complete operational playbooks for high-end hotels. Documented procedures, service standards and SOPs for Front Office, Housekeeping, F&B and Spa departments.'
          : 'Playbooks opérationnels complets pour hôtels haut de gamme. Procédures, standards de service et SOPs pour la réception, le housekeeping, le F&B et le spa.',
        url: localizedPath(locale, '/playbooks'),
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
        name: isEn ? 'Complete Hotel SOP Bundle' : 'Bundle complet SOP Hôtel',
        description: isEn
          ? 'All four LuxOps hotel operations playbooks: Front Office, Housekeeping, F&B and Spa. PDF and PowerPoint formats.'
          : 'Les quatre playbooks opérationnels LuxOps : Front Office, Housekeeping, F&B et Spa. Formats PDF et PowerPoint.',
        image: sharedImage,
        brand: sharedBrand,
        offers: {
          ...sharedOfferFields,
          price: '199',
          url: localizedPath(locale, '/playbooks'),
        },
      },
      breadcrumbSchema([
        { name: 'LuxOps', url: localizedPath(locale) },
        { name: isEn ? 'Playbooks' : 'Playbooks', url: localizedPath(locale, '/playbooks') },
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
