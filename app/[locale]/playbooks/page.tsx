import type { Metadata } from 'next'
import PlaybooksContent from '@/components/PlaybooksContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'Hotel Operations Playbooks | Front Office, Housekeeping, F&B, Spa SOPs | LuxOps'
      : 'Playbooks Opérationnels Hôteliers | SOPs Front Office, Housekeeping, F&B, Spa | LuxOps',
    description: isEn
      ? 'Complete operational playbooks for high-end hotels. Documented procedures, service standards and SOPs for Front Office, Housekeeping, F&B and Spa departments.'
      : 'Playbooks opérationnels complets pour les hôtels haut de gamme. Procédures documentées, standards de service et SOPs pour tous les départements clés.',
  }
}

const playbooksSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Hotel Operations Playbooks',
  description:
    'Complete operational playbooks for high-end hotels. Documented procedures, service standards and SOPs for Front Office, Housekeeping, F&B and Spa departments.',
  url: 'https://www.luxops.fr/en/playbooks',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Product',
        name: 'Front Office Playbook',
        description:
          'Check-in/out procedures, guest communication protocols, upselling techniques, night audit, PMS systems and concierge standards. ~250 pages. PDF + PPT.',
        offers: {
          '@type': 'Offer',
          price: '67',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
        },
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
        offers: {
          '@type': 'Offer',
          price: '67',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
        },
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
        offers: {
          '@type': 'Offer',
          price: '67',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
        },
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
        offers: {
          '@type': 'Offer',
          price: '67',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
        },
      },
    },
  ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(playbooksSchema) }}
      />
      <PlaybooksContent locale={locale} />
    </>
  )
}
