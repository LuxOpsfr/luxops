import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { ArrowRight, Clock, Users, Check } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn ? 'Hotel Staff Training | On-Property Operational Training | LuxOps' : 'Formation Hôtelière | Formation Opérationnelle en Établissement | LuxOps',
    description: isEn ? 'On-property training for hotel teams. Operational procedures, service standards and SOP implementation. Half-day or full-day sessions for up to 15 participants.' : 'Formation opérationnelle en établissement. Standards de service et SOPs pour équipes hôtelières. Formats demi-journée ou journée entière, 15 participants.',
  }
}

export default async function FormationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <FormationContent locale={locale} />
}

function FormationContent({ locale }: { locale: string }) {
  const t = useTranslations('training_page')
  const isEn = locale === 'en'

  const topics = [t('t1'), t('t2'), t('t3'), t('t4'), t('t5'), t('t6')]

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
            {isEn ? 'On-Property Training' : 'Formation en établissement'}
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter leading-none text-[#0a1d2e] mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-[#4f6074] max-w-2xl leading-relaxed">{t('subtitle')}</p>
        </div>
      </section>

      {/* Formats */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-display text-3xl font-extrabold text-[#0a1d2e] tracking-tight mb-12">
            {isEn ? 'Training Formats' : 'Formats de Formation'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">

            {/* Half day */}
            <div className="p-10" style={{ backgroundColor: '#f8f9ff', borderRadius: '0.125rem' }}>
              <div className="flex items-center gap-2 mb-6">
                <Clock size={14} style={{ color: '#003d9b' }} />
                <span className="text-xs font-bold uppercase tracking-widest text-[#003d9b]">{t('duration_half')}</span>
              </div>
              <h3 className="font-display text-2xl font-extrabold text-[#0a1d2e] mb-3">{t('half_day')}</h3>
              <div className="font-display text-4xl font-extrabold text-[#003d9b] mb-4">{t('half_price')}</div>
              <div className="flex items-center gap-2 text-sm text-[#4f6074]">
                <Users size={13} />
                {t('max_participants')}
              </div>
            </div>

            {/* Full day */}
            <div
              className="p-10 text-white"
              style={{ backgroundColor: '#003d9b', borderRadius: '0.125rem' }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Clock size={14} style={{ color: 'rgba(255,255,255,0.7)' }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.7)' }}>{t('duration_full')}</span>
              </div>
              <h3 className="font-display text-2xl font-extrabold text-white mb-3">{t('full_day')}</h3>
              <div className="font-display text-4xl font-extrabold text-white mb-4">{t('full_price')}</div>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <Users size={13} />
                {t('max_participants')}
              </div>
            </div>
          </div>

          {/* Topics */}
          <h2 className="font-display text-3xl font-extrabold text-[#0a1d2e] tracking-tight mb-8">
            {t('topics_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {topics.map((topic, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 text-sm text-[#0a1d2e] font-medium"
                style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
              >
                <Check size={14} style={{ color: '#003d9b' }} className="flex-shrink-0" />
                {topic}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#003d9b] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold text-white tracking-tight mb-8">
            {t('cta_title')}
          </h2>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#003d9b] font-bold hover:bg-[#f8f9ff] transition-colors"
            style={{ borderRadius: '0.125rem' }}
          >
            {t('cta')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
