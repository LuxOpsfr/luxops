import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn ? 'Hotel Quality Audit | Operational Standards Assessment | LuxOps' : 'Audit Qualité Hôtelier | Évaluation des Standards Opérationnels | LuxOps',
    description: isEn ? '2-day hotel quality audit covering 100+ operational criteria. Detailed gap analysis by department and a structured improvement roadmap. Available on-property.' : 'Audit qualité hôtelier sur 2 jours. Plus de 100 critères évalués, analyse des écarts par département et feuille de route priorisée. Demandez un devis.',
  }
}

export default async function AuditPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <AuditContent locale={locale} />
}

function AuditContent({ locale }: { locale: string }) {
  const t = useTranslations('audit_page')
  const isEn = locale === 'en'

  const steps = [
    { title: t('step1_title'), desc: t('step1_desc') },
    { title: t('step2_title'), desc: t('step2_desc') },
    { title: t('step3_title'), desc: t('step3_desc') },
    { title: t('step4_title'), desc: t('step4_desc') },
  ]

  const deliverables = [t('d1'), t('d2'), t('d3'), t('d4'), t('d5'), t('d6')]

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
            {isEn ? 'On-Property Service' : 'Prestation sur site'}
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter leading-none text-[#0a1d2e] mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-[#4f6074] max-w-2xl leading-relaxed mb-10">{t('subtitle')}</p>
          <div className="flex flex-wrap items-center gap-6">
            <div>
              <div className="font-display text-4xl font-extrabold text-[#003d9b]">{t('price')}</div>
              <div className="text-sm text-[#737685] mt-1">{t('price_note')}</div>
            </div>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #003d9b, #0052cc)', borderRadius: '0.125rem', boxShadow: '0 8px 24px rgba(0,61,155,0.2)' }}
            >
              {t('cta')} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#eef4ff' }}>
        <div
          className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ backgroundColor: 'rgba(195,198,214,0.2)' }}
        >
          {[
            { v: '2', l: isEn ? 'Days On-Site' : 'Jours sur site' },
            { v: '100+', l: isEn ? 'Criteria Evaluated' : 'Critères évalués' },
            { v: '4', l: isEn ? 'Departments' : 'Départements' },
            { v: '1', l: isEn ? 'Roadmap Delivered' : 'Feuille de route' },
          ].map((s, i) => (
            <div key={i} className="bg-white p-10 flex flex-col items-center text-center">
              <span className="font-display text-4xl font-extrabold text-[#003d9b] mb-2">{s.v}</span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#4f6074]">{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold text-[#0a1d2e] tracking-tight mb-16">
            {t('process_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex gap-6 p-8"
                style={{ backgroundColor: '#f8f9ff', borderRadius: '0.125rem' }}
              >
                <div
                  className="w-8 h-8 text-white flex items-center justify-center flex-shrink-0 font-bold text-xs"
                  style={{ backgroundColor: '#003d9b', borderRadius: '0.125rem' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#0a1d2e] mb-2">{step.title}</h3>
                  <p className="text-[#4f6074] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables + CTA */}
      <section className="py-24 px-6" style={{ backgroundColor: '#eef4ff' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-[#0a1d2e] tracking-tight mb-8">
              {t('deliverables_title')}
            </h2>
            <ul className="space-y-4">
              {deliverables.map((d, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#0a1d2e]">
                  <Check size={16} style={{ color: '#003d9b' }} className="flex-shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="bg-[#003d9b] text-white p-10 flex flex-col justify-between"
            style={{ borderRadius: '0.125rem' }}
          >
            <div>
              <div className="font-display text-4xl font-extrabold mb-2">{t('price')}</div>
              <div className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>{t('price_note')}</div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>{t('cta_subtitle')}</p>
            </div>
            <Link
              href={`/${locale}/contact`}
              className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#003d9b] font-bold hover:bg-[#f8f9ff] transition-colors text-sm"
              style={{ borderRadius: '0.125rem' }}
            >
              {t('cta')} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
