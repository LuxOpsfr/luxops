import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import ExpertiseSection from '@/components/ExpertiseSection'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'About LuxOps | Hotel Operations Specialists'
      : 'À Propos de LuxOps | Spécialistes des Opérations Hôtelières',
    description: isEn
      ? 'LuxOps provides structured operational methods for high-end hotels. Playbooks, SOPs, audits and training built from years of real hotel operations experience.'
      : "LuxOps propose des méthodes opérationnelles structurées pour hôtels haut de gamme. Playbooks, SOPs, audits et formations issus de l'exploitation hôtelière réelle.",
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/about`,
      languages: {
        'en': 'https://www.luxops.fr/en/about',
        'fr': 'https://www.luxops.fr/fr/about',
        'x-default': 'https://www.luxops.fr/en/about',
      },
    },
  }
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <AboutContent locale={locale} />
}

function AboutContent({ locale }: { locale: string }) {
  const t = useTranslations('about_page')

  const expertise = [
    t('e1'), t('e2'), t('e3'), t('e4'), t('e5'), t('e6'),
  ]

  const values = [
    { title: t('v1_title'), desc: t('v1_desc') },
    { title: t('v2_title'), desc: t('v2_desc') },
    { title: t('v3_title'), desc: t('v3_desc') },
  ]

  return (
    <div className="pt-16 bg-white">

      {/* Hero */}
      <section
        className="relative py-24 px-6 overflow-hidden border-b"
        style={{
          backgroundImage: 'radial-gradient(#c3c6d6 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
          borderColor: 'rgba(195,198,214,0.2)',
        }}
      >
        <div className="max-w-screen-xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 text-[#003d9b] font-bold text-[10px] uppercase tracking-widest mb-8"
            style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
          >
            <span className="w-2 h-2 bg-[#003d9b] rounded-full" />
            LuxOps
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter leading-none text-[#0a1d2e] mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-[#4f6074] max-w-2xl leading-relaxed">{t('subtitle')}</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-[#0a1d2e] tracking-tight mb-8">
              {t('story_title')}
            </h2>
            <div className="space-y-6">
              <p className="text-[#4f6074] leading-relaxed text-lg">{t('story_p1')}</p>
              <p className="text-[#4f6074] leading-relaxed">{t('story_p2')}</p>
              <p
                className="font-display font-bold text-[#0a1d2e] text-lg leading-snug"
                style={{ borderLeft: '3px solid #003d9b', paddingLeft: '1.25rem' }}
              >
                {t('story_p3')}
              </p>
            </div>
          </div>

          <div>
            <div className="p-8" style={{ backgroundColor: '#f8f9ff', borderRadius: '0.125rem' }}>
              <h3 className="font-display text-xs font-bold uppercase tracking-widest text-[#737685] mb-6">
                {t('expertise_title')}
              </h3>
              <ul className="space-y-3">
                {expertise.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#0a1d2e]">
                    <div
                      className="w-1.5 h-1.5 flex-shrink-0"
                      style={{ backgroundColor: '#003d9b', borderRadius: '0.125rem' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6" style={{ backgroundColor: '#f8f9ff' }}>
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-display text-3xl font-extrabold text-[#0a1d2e] tracking-tight mb-12">
            {t('values_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <div key={i} className="p-8 bg-white" style={{ borderRadius: '0.125rem' }}>
                <div
                  className="w-8 h-8 flex items-center justify-center text-white text-xs font-bold mb-6"
                  style={{ backgroundColor: '#003d9b', borderRadius: '0.125rem' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display font-bold text-[#0a1d2e] mb-3">{v.title}</h3>
                <p className="text-[#4f6074] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise — humanisation */}
      <ExpertiseSection locale={locale} />
    </div>
  )
}
