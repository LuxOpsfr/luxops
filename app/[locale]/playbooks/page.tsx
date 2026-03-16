import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { Check, Clock } from 'lucide-react'

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
          'Check-in/out procedures, guest communication protocols, concierge standards, and complaint handling methods. ~250 pages.',
        offers: { '@type': 'Offer', price: '67', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Product',
        name: 'Housekeeping Playbook',
        description:
          'Room inspection checklists, linen management, turndown service protocols, and deep cleaning procedures. ~220 pages.',
        offers: { '@type': 'Offer', price: '67', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Product',
        name: 'F&B Playbook',
        description:
          'Restaurant service standards, bar operations, room service protocols, and banquet service procedures. ~280 pages.',
        offers: { '@type': 'Offer', price: '67', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Product',
        name: 'Spa & Wellness Playbook',
        description:
          'Treatment protocols, therapist standards, booking management, and wellness programme structure. ~200 pages.',
        offers: { '@type': 'Offer', price: '67', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
      },
    },
  ],
}

export default function PlaybooksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(playbooksSchema) }}
      />
      <PlaybooksContent />
    </>
  )
}

function PlaybooksContent() {
  const t = useTranslations('playbooks_page')

  const playbooks = [
    {
      title: t('playbook1_title'),
      dept: t('playbook1_dept'),
      desc: t('playbook1_desc'),
      pages: t('playbook1_pages'),
      highlights: [t('playbook1_h1'), t('playbook1_h2'), t('playbook1_h3'), t('playbook1_h4')],
    },
    {
      title: t('playbook2_title'),
      dept: t('playbook2_dept'),
      desc: t('playbook2_desc'),
      pages: t('playbook2_pages'),
      highlights: [t('playbook2_h1'), t('playbook2_h2'), t('playbook2_h3'), t('playbook2_h4')],
    },
    {
      title: t('playbook3_title'),
      dept: t('playbook3_dept'),
      desc: t('playbook3_desc'),
      pages: t('playbook3_pages'),
      highlights: [t('playbook3_h1'), t('playbook3_h2'), t('playbook3_h3'), t('playbook3_h4')],
    },
    {
      title: t('playbook4_title'),
      dept: t('playbook4_dept'),
      desc: t('playbook4_desc'),
      pages: t('playbook4_pages'),
      highlights: [t('playbook4_h1'), t('playbook4_h2'), t('playbook4_h3'), t('playbook4_h4')],
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-[#111111] mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-400 leading-relaxed">{t('subtitle')}</p>
        </div>
      </section>

      {/* Pricing Banner */}
      <section className="py-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="text-white text-center sm:text-left">
              <div className="text-xs text-gray-400 mb-0.5 uppercase tracking-wider">
                {t('individual_label')}
              </div>
              <div className="text-2xl font-bold">{t('individual_price')}</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/20" />
            <div className="text-white text-center sm:text-left">
              <div className="flex items-center gap-2 mb-0.5 justify-center sm:justify-start">
                <span className="text-xs text-gray-400 uppercase tracking-wider">
                  {t('bundle_label')}
                </span>
                <span className="px-2 py-0.5 bg-white/20 text-white text-xs rounded-full font-medium">
                  {t('bundle_badge')}
                </span>
              </div>
              <div className="text-2xl font-bold">
                {t('bundle_price')}{' '}
                <span className="text-sm font-normal text-gray-400">
                  — {t('bundle_desc')}
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-colors border border-white/20">
              {t('buy_individual')}
            </button>
            <button className="px-5 py-2.5 bg-white text-[#111111] text-sm font-bold rounded-lg hover:bg-gray-100 transition-colors">
              {t('buy_bundle')}
            </button>
          </div>
        </div>
      </section>

      {/* Playbooks Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {playbooks.map((pb, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-2xl p-8 hover:border-[#111111]/20 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-semibold text-[#111111] uppercase tracking-wider bg-[#111111]/8 px-3 py-1 rounded-full">
                      {pb.dept}
                    </span>
                    <h3 className="text-xl font-bold text-[#111111] mt-3">{pb.title}</h3>
                  </div>
                  <div className="flex items-center gap-1 text-gray-300 text-xs flex-shrink-0 ml-4">
                    <Clock size={12} />
                    {pb.pages}
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{pb.desc}</p>
                <ul className="space-y-2 mb-6">
                  {pb.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check size={14} className="text-[#111111] flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 bg-[#111111] text-white text-sm font-medium rounded-xl hover:bg-[#333333] transition-colors">
                  {t('buy_individual')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#111111]/8 rounded-full text-[#111111] text-sm font-medium mb-4">
            <Clock size={14} />
            {t('coming_soon_title')}
          </div>
          <p className="text-gray-400 text-sm">{t('coming_soon_text')}</p>
        </div>
      </section>
    </div>
  )
}
