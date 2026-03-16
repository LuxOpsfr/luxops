import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'Hotel Quality Audit | Operational Standards Assessment | LuxOps'
      : 'Audit Qualité Hôtelier | Évaluation des Standards Opérationnels | LuxOps',
    description: isEn
      ? '2-day hotel quality audit covering 100+ operational criteria. Detailed gap analysis by department and a structured improvement roadmap. Available on-property.'
      : 'Audit qualité hôtelier sur 2 jours. Plus de 100 critères évalués, analyse des écarts par département et feuille de route priorisée. Demandez un devis.',
  }
}

export default async function AuditPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <AuditContent locale={locale} />
}

function AuditContent({ locale }: { locale: string }) {
  const t = useTranslations('audit_page')

  const steps = [
    { title: t('step1_title'), desc: t('step1_desc') },
    { title: t('step2_title'), desc: t('step2_desc') },
    { title: t('step3_title'), desc: t('step3_desc') },
    { title: t('step4_title'), desc: t('step4_desc') },
  ]

  const deliverables = [
    t('d1'), t('d2'), t('d3'), t('d4'), t('d5'), t('d6'),
  ]

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-[#111111] mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-400 mb-8">{t('subtitle')}</p>
          <div className="inline-block">
            <div className="text-4xl font-bold text-[#111111]">{t('price')}</div>
            <div className="text-sm text-gray-400 mt-1">{t('price_note')}</div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#111111] mb-12 text-center">
            {t('process_title')}
          </h2>
          <div className="space-y-5">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex gap-6 p-6 border border-gray-100 rounded-2xl hover:border-[#111111]/20 transition-colors"
              >
                <div className="w-10 h-10 bg-[#111111] text-white rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-[#111111] mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables + CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#111111] mb-6">
              {t('deliverables_title')}
            </h2>
            <ul className="space-y-3">
              {deliverables.map((d, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                  <Check size={16} className="text-[#111111] flex-shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#111111] text-white rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="text-3xl font-bold mb-2">{t('price')}</div>
              <div className="text-gray-400 text-sm mb-6">{t('price_note')}</div>
              <p className="text-gray-300 text-sm leading-relaxed">{t('cta_subtitle')}</p>
            </div>
            <Link
              href={`/${locale}/contact`}
              className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#111111] font-semibold rounded-xl hover:bg-gray-100 transition-colors text-sm"
            >
              {t('cta')} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
