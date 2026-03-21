import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'Hotel Quality Audit | Operational Gap Analysis & Improvement Roadmap | LuxOps'
      : 'Audit Qualité Hôtelier | Analyse des Écarts Opérationnels et Feuille de Route | LuxOps',
    description: isEn
      ? '2-day on-site hotel audit covering 100+ operational criteria. Clear gap analysis by department and a prioritised improvement roadmap for management. Available on-property.'
      : "Audit hôtelier sur 2 jours. Plus de 100 critères évalués, analyse des écarts par département et feuille de route priorisée pour la direction. Demandez un devis.",
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
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-end gap-12">

          {/* Left */}
          <div className="flex-1">
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
            <p className="text-xl text-[#4f6074] max-w-2xl leading-relaxed mb-4">{t('subtitle')}</p>
            <p className="text-sm text-[#737685] max-w-xl leading-relaxed mb-10">{t('subtitle_context')}</p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="font-display text-4xl font-extrabold text-[#003d9b]">{t('price')}</div>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold transition-all hover:opacity-90"
                style={{
                  background: 'linear-gradient(135deg, #003d9b, #0052cc)',
                  borderRadius: '0.125rem',
                  boxShadow: '0 8px 24px rgba(0,61,155,0.2)',
                }}
              >
                {t('cta')} <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right — what this produces */}
          <div className="lg:w-80 flex-shrink-0">
            <div
              className="p-8 bg-white"
              style={{
                borderRadius: '0.125rem',
                boxShadow: '0 20px 60px rgba(10,29,46,0.08)',
                border: '1px solid rgba(195,198,214,0.2)',
              }}
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#737685] mb-6">
                {isEn ? 'What this produces' : 'Ce que cela produit'}
              </p>
              <ul className="space-y-3">
                {(isEn ? [
                  'A clear picture of where standards are applied and where they are not',
                  'A prioritised list of what to fix, in what order',
                  'A working roadmap management can act on immediately',
                ] : [
                  "Une vision claire de là où les standards sont appliqués et là où ils ne le sont pas",
                  "Une liste priorisée de ce qui doit être corrigé, dans quel ordre",
                  "Une feuille de route opérationnelle sur laquelle la direction peut agir immédiatement",
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#0a1d2e]">
                    <div
                      className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5 text-white font-bold text-[9px]"
                      style={{ backgroundColor: '#003d9b', borderRadius: '0.125rem' }}
                    >
                      {i + 1}
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Key metrics */}
      <section style={{ backgroundColor: '#eef4ff' }}>
        <div
          className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ backgroundColor: 'rgba(195,198,214,0.2)' }}
        >
          {[
            { v: '2', l: isEn ? 'Days on property' : 'Jours sur site' },
            { v: '100+', l: isEn ? 'Criteria evaluated' : 'Critères évalués' },
            { v: '4+', l: isEn ? 'Operational areas' : 'Domaines opérationnels' },
            { v: '1', l: isEn ? 'Structured roadmap' : 'Feuille de route structurée' },
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
          <div className="max-w-2xl mb-16">
            <h2 className="font-display text-4xl font-extrabold text-[#0a1d2e] tracking-tight mb-4">
              {t('process_title')}
            </h2>
            <p className="text-[#4f6074] leading-relaxed">
              {isEn
                ? 'Four structured stages, from initial documentation review through to final roadmap delivery. Each stage builds directly on the previous one.'
                : "Quatre étapes structurées, de la revue initiale de la documentation jusqu'à la remise de la feuille de route. Chaque étape s'appuie directement sur la précédente."}
            </p>
          </div>
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

      {/* What we look at */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f8f9ff' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-2xl font-extrabold text-[#0a1d2e] tracking-tight mb-4">
              {t('what_we_review_title')}
            </h2>
            <p className="text-sm text-[#4f6074] leading-relaxed">{t('what_we_review_intro')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[t('wr1'), t('wr2'), t('wr3'), t('wr4')].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-5 bg-white"
                style={{ borderRadius: '0.125rem' }}
              >
                <div
                  className="w-5 h-5 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: '#003d9b', borderRadius: '0.125rem' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <span className="text-sm text-[#0a1d2e] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables + CTA */}
      <section className="py-24 px-6" style={{ backgroundColor: '#eef4ff' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Deliverables */}
          <div>
            <h2 className="font-display text-3xl font-extrabold text-[#0a1d2e] tracking-tight mb-3">
              {t('deliverables_title')}
            </h2>
            <p className="text-sm text-[#4f6074] leading-relaxed mb-8">{t('deliverables_intro')}</p>
            <ul className="space-y-4">
              {deliverables.map((d, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#0a1d2e]">
                  <Check size={16} style={{ color: '#003d9b' }} className="flex-shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA card */}
          <div
            className="bg-[#003d9b] text-white p-10 flex flex-col justify-between"
            style={{ borderRadius: '0.125rem' }}
          >
            <div>
              <div className="font-display text-4xl font-extrabold mb-6">{t('price')}</div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                {t('cta_subtitle')}
              </p>
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
