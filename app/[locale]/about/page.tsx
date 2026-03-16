import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'

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
      : 'LuxOps propose des méthodes opérationnelles structurées pour les hôtels haut de gamme. Playbooks, SOPs, audits et formations issus de l\'exploitation hôtelière réelle.',
  }
}

export default function AboutPage() {
  return <AboutContent />
}

function AboutContent() {
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
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-[#111111] mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-400">{t('subtitle')}</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#111111] mb-8">{t('story_title')}</h2>
          <div className="space-y-5">
            {[t('story_p1'), t('story_p2'), t('story_p3')].map((para, i) => (
              <p key={i} className="text-gray-400 leading-relaxed text-lg">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise + Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-[#111111] mb-6">
              {t('expertise_title')}
            </h2>
            <ul className="space-y-3">
              {expertise.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                  <div className="w-1.5 h-1.5 bg-[#111111] rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#111111] mb-6">
              {t('values_title')}
            </h2>
            <div className="space-y-6">
              {values.map((v, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-[#111111] mb-1">{v.title}</h3>
                  <p className="text-gray-400 text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
