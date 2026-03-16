import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { ArrowRight, Clock, Users, Check } from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'Hotel Staff Training | On-Property Operational Training | LuxOps'
      : 'Formation Hôtelière | Formation Opérationnelle en Établissement | LuxOps',
    description: isEn
      ? 'On-property training for hotel teams. Operational procedures, service standards and SOP implementation. Half-day or full-day sessions for up to 15 participants.'
      : 'Formation opérationnelle en établissement. Standards de service et SOPs pour équipes hôtelières. Formats demi-journée ou journée entière, 15 participants.',
  }
}

export default async function FormationPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <FormationContent locale={locale} />
}

function FormationContent({ locale }: { locale: string }) {
  const t = useTranslations('training_page')

  const topics = [
    t('t1'), t('t2'), t('t3'), t('t4'), t('t5'), t('t6'),
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

      {/* Formats */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Half day */}
            <div className="border-2 border-gray-100 rounded-2xl p-8 hover:border-[#111111]/30 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-[#111111]" />
                <span className="text-sm font-semibold text-[#111111]">
                  {t('duration_half')}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-2">{t('half_day')}</h3>
              <div className="text-3xl font-bold text-[#111111] mb-4">{t('half_price')}</div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Users size={14} />
                {t('max_participants')}
              </div>
            </div>

            {/* Full day */}
            <div className="border-2 border-[#111111] rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-[#111111]" />
                <span className="text-sm font-semibold text-[#111111]">
                  {t('duration_full')}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-2">{t('full_day')}</h3>
              <div className="text-3xl font-bold text-[#111111] mb-4">{t('full_price')}</div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Users size={14} />
                {t('max_participants')}
              </div>
            </div>
          </div>

          {/* Topics */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-[#111111] mb-6 text-center">
              {t('topics_title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {topics.map((topic, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl text-sm text-gray-700 border border-gray-100"
                >
                  <Check size={14} className="text-[#111111] flex-shrink-0" />
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">{t('cta_title')}</h2>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#111111] font-semibold rounded-xl hover:bg-gray-100 transition-colors"
          >
            {t('cta')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
