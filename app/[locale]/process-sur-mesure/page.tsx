import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn ? 'Custom Hotel SOP Creation | Tailored Operations Manuals | LuxOps' : 'Création de SOPs Hôteliers Sur-Mesure | Procédures Opérationnelles | LuxOps',
    description: isEn ? 'Custom operational process creation for hotel departments. Property-specific SOPs, procedures and operations manuals tailored to your brand and team.' : 'Création de process opérationnels sur-mesure pour les départements hôteliers. SOPs, procédures et manuels adaptés à votre établissement et vos standards.',
  }
}

export default async function ProcessPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <ProcessContent locale={locale} />
}

function ProcessContent({ locale }: { locale: string }) {
  const t = useTranslations('process_page')
  const isEn = locale === 'en'

  const formats = [t('f1'), t('f2'), t('f3')]
  const departments = [t('d1'), t('d2'), t('d3'), t('d4'), t('d5'), t('d6'), t('d7'), t('d8')]

  const phases = isEn ? [
    { n: '01', title: 'Existing Audit', desc: 'We review what's already in place — existing docs, team habits, gaps — before writing a single line.' },
    { n: '02', title: 'Custom Drafting', desc: 'Procedures written around your property's actual standards, service sequences and team structure.' },
    { n: '03', title: 'Review & Delivery', desc: 'Iteration with your team until the output is accurate, usable, and ready to deploy immediately.' },
  ] : [
    { n: '01', title: "Analyse de l'Existant", desc: "Revue de ce qui est déjà en place — documents, habitudes d'équipe, écarts — avant d'écrire quoi que ce soit." },
    { n: '02', title: 'Rédaction Sur-Mesure', desc: "Procédures rédigées autour des standards réels de votre établissement, de vos séquences de service et de votre structure d'équipe." },
    { n: '03', title: 'Validation & Livraison', desc: "Itérations avec votre équipe jusqu'à ce que le rendu soit précis, utilisable, et prêt à être déployé immédiatement." },
  ]

  const steps = isEn ? [
    { title: 'Briefing', desc: 'We discuss the department, existing standards, team size and delivery format.' },
    { title: 'Analysis', desc: 'We review any existing documentation and identify gaps before drafting.' },
    { title: 'Drafting', desc: 'Full procedures written around your property. You review at each stage.' },
    { title: 'Delivery', desc: 'Final PDF and/or Notion workspace delivered with a structured handover.' },
  ] : [
    { title: 'Briefing', desc: "Nous échangeons sur le département, les standards existants, la taille de l'équipe et le format de livraison." },
    { title: 'Analyse', desc: "Revue des documents existants et identification des lacunes avant la rédaction." },
    { title: 'Rédaction', desc: "Procédures complètes rédigées autour de votre établissement. Vous validez à chaque étape." },
    { title: 'Livraison', desc: "PDF final et/ou espace Notion livré avec une remise structurée." },
  ]

  return (
    <div className="pt-16 bg-white">

      {/* Hero — asymmetric */}
      <section
        className="relative py-24 px-6 overflow-hidden border-b"
        style={{
          backgroundImage: 'radial-gradient(#c3c6d6 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
          borderColor: 'rgba(195,198,214,0.2)',
        }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-end gap-10">
          {/* Left 2/3 */}
          <div className="flex-1">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 text-[#003d9b] font-bold text-[10px] uppercase tracking-widest mb-8"
              style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
            >
              <span className="w-2 h-2 bg-[#003d9b] rounded-full" />
              {isEn ? 'Bespoke Service' : 'Prestation sur-mesure'}
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter leading-none text-[#0a1d2e] mb-6">
              {t('title')}
            </h1>
            <div className="flex flex-wrap items-center gap-6 mt-8">
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
          {/* Right 1/3 — pull-quote */}
          <div
            className="lg:w-80 pb-2 text-lg text-[#4f6074] leading-relaxed"
            style={{ borderLeft: '4px solid #003d9b', paddingLeft: '1.5rem' }}
          >
            {t('subtitle')}
          </div>
        </div>
      </section>

      {/* 3 numbered phases */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-display text-3xl font-extrabold text-[#0a1d2e] tracking-tight mb-16">
            {isEn ? 'How it works' : 'Comment ça se passe'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(195,198,214,0.15)' }}>
            {phases.map((p, i) => (
              <div
                key={i}
                className="bg-white p-10 hover:bg-[#f8f9ff] transition-colors duration-300"
              >
                <div
                  className="font-display font-extrabold text-6xl mb-6"
                  style={{ color: '#003d9b', opacity: 0.12 }}
                >
                  {p.n}
                </div>
                <h3 className="font-display font-bold text-[#0a1d2e] text-xl mb-4">{p.title}</h3>
                <p className="text-[#4f6074] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Navy impact block */}
          <div
            className="mt-1 p-12 lg:p-16 relative overflow-hidden"
            style={{ backgroundColor: '#003d9b' }}
          >
            <div className="relative z-10 max-w-2xl">
              <h3 className="font-display text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
                {isEn
                  ? 'Every procedure we write is reviewed with your team before delivery.'
                  : 'Chaque procédure rédigée est validée avec votre équipe avant livraison.'}
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {isEn
                  ? "We don't deliver documents that sit in a drawer. We deliver procedures your teams will actually use."
                  : "Nous ne livrons pas des documents qui dorment dans un tiroir. Nous livrons des procédures que vos équipes utilisent réellement."}
              </p>
            </div>
            {/* Ghost number */}
            <div
              className="absolute -bottom-8 -right-4 font-display font-extrabold text-[200px] leading-none select-none pointer-events-none"
              style={{ color: 'rgba(255,255,255,0.06)' }}
            >
              SOP
            </div>
          </div>
        </div>
      </section>

      {/* Methodology timeline + sticky CTA */}
      <section className="py-24 px-6" style={{ backgroundColor: '#f8f9ff' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Timeline */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-extrabold text-[#0a1d2e] tracking-tight mb-16">
              {isEn ? 'The creation process' : 'Le déroulé de création'}
            </h2>
            <div className="relative pl-14 border-l-2" style={{ borderColor: 'rgba(195,198,214,0.4)' }}>
              {steps.map((step, i) => (
                <div key={i} className="mb-14 relative last:mb-0">
                  <div
                    className="absolute -left-[57px] top-0 w-10 h-10 flex items-center justify-center text-white text-xs font-bold font-display"
                    style={{ backgroundColor: '#003d9b', borderRadius: '0.125rem' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h4 className="font-display font-bold text-[#0a1d2e] text-lg mb-2">{step.title}</h4>
                  <p className="text-[#4f6074] text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky CTA sidebar */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="p-10 bg-white" style={{ borderRadius: '0.125rem', boxShadow: '0 8px 32px rgba(10,29,46,0.08)' }}>
              <div className="font-display text-xs font-bold uppercase tracking-widest text-[#737685] mb-2">
                {isEn ? 'Ready to start?' : 'Prêt à commencer ?'}
              </div>
              <div className="font-display text-3xl font-extrabold text-[#003d9b] mb-1">{t('price')}</div>
              <div className="text-sm text-[#737685] mb-6">{t('price_note')}</div>
              <p className="text-sm text-[#4f6074] leading-relaxed mb-8">
                {isEn
                  ? 'A single department, fully documented. Built around your property, not a generic template.'
                  : "Un département, entièrement documenté. Construit autour de votre établissement, pas d'un template générique."}
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  isEn ? 'Full department SOP coverage' : 'Couverture SOP complète du département',
                  isEn ? 'PDF and/or Notion format' : 'Format PDF et/ou Notion',
                  isEn ? 'Review included at each stage' : 'Validation incluse à chaque étape',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#0a1d2e]">
                    <Check size={13} style={{ color: '#003d9b' }} className="flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 text-white font-bold transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #003d9b, #0052cc)', borderRadius: '0.125rem' }}
              >
                {t('cta')} <ArrowRight size={16} />
              </Link>
              <p className="text-center text-[10px] uppercase tracking-widest text-[#737685] mt-4">
                {isEn ? 'Response within one business day' : 'Réponse sous un jour ouvré'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When useful + What we build */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-[#0a1d2e] tracking-tight mb-8">
              {t('when_useful_title')}
            </h2>
            <div className="space-y-3">
              {[t('wu1'), t('wu2'), t('wu3'), t('wu4')].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5"
                  style={{ backgroundColor: '#f8f9ff', borderRadius: '0.125rem' }}
                >
                  <div
                    className="w-6 h-6 flex items-center justify-center text-white text-[10px] font-bold font-display flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: '#003d9b', borderRadius: '0.125rem' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <span className="text-sm text-[#0a1d2e] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-extrabold text-[#0a1d2e] tracking-tight mb-8">
              {t('what_we_build_title')}
            </h2>
            <div className="space-y-2">
              {[t('wb1'), t('wb2'), t('wb3'), t('wb4'), t('wb5')].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#003d9b]"
                  style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
                >
                  <span
                    className="w-1.5 h-1.5 flex-shrink-0 bg-[#003d9b]"
                    style={{ borderRadius: '0.125rem' }}
                  />
                  {item}
                </div>
              ))}
            </div>

            {/* Departments */}
            <h3 className="font-display font-bold text-[#0a1d2e] text-xs uppercase tracking-widest mt-10 mb-4">
              {t('depts_title')}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {departments.map((d, i) => (
                <div
                  key={i}
                  className="px-4 py-3 text-sm font-medium text-[#737685]"
                  style={{ backgroundColor: '#f8f9ff', borderRadius: '0.125rem' }}
                >
                  {d}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formats + CTA */}
      <section className="py-20 px-6 bg-[#003d9b] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold text-white tracking-tight mb-4">
            {t('cta_title')}
          </h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            {isEn ? 'PDF · Notion · Both formats available' : 'PDF · Notion · Les deux formats disponibles'}
          </p>
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
