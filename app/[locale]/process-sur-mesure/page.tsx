import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'Custom Hotel SOP Creation | Property-Specific Operational Procedures | LuxOps'
      : 'Création de Process Hôteliers Sur-Mesure | Procédures Opérationnelles Spécifiques | LuxOps',
    description: isEn
      ? 'Custom operational procedures for any hotel department. Property-specific SOPs written around your standards, team structure, and daily operations. PDF and Notion formats.'
      : "Procédures opérationnelles sur-mesure pour tout département hôtelier. SOPs construits autour de vos standards, de votre structure d'équipe et de votre fonctionnement quotidien.",
  }
}

export default async function ProcessPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <ProcessContent locale={locale} />
}

function ProcessContent({ locale }: { locale: string }) {
  const t = useTranslations('process_page')
  const isEn = locale === 'en'

  const departments = [t('d1'), t('d2'), t('d3'), t('d4'), t('d5'), t('d6'), t('d7'), t('d8')]

  const phases = isEn ? [
    {
      n: '01',
      title: 'Existing Audit',
      desc: "We review what already exists: how teams currently work, what is documented, and where the real gaps are. Before writing anything.",
    },
    {
      n: '02',
      title: 'Custom Drafting',
      desc: "Procedures are written around your standards, service sequences, team structure, and daily operating reality. Not adapted from a generic template.",
    },
    {
      n: '03',
      title: 'Review & Delivery',
      desc: "Everything is reviewed with your team before final delivery, so the output is accurate, practical, and ready to use from day one.",
    },
  ] : [
    {
      n: '01',
      title: "Analyse de l'Existant",
      desc: "Revue de ce qui existe déjà : comment les équipes travaillent actuellement, ce qui est documenté et où se trouvent les vrais écarts. Avant d'écrire quoi que ce soit.",
    },
    {
      n: '02',
      title: 'Rédaction Sur-Mesure',
      desc: "Les procédures sont rédigées autour de vos standards, de vos séquences de service, de votre structure d'équipe et de votre fonctionnement réel. Pas adaptées d'un modèle générique.",
    },
    {
      n: '03',
      title: 'Validation & Livraison',
      desc: "Tout est revu avec votre équipe avant la livraison finale, pour que le résultat soit précis, utilisable et prêt à être mis en place dès le premier jour.",
    },
  ]

  const steps = isEn ? [
    {
      title: 'Audit',
      desc: "Review the current state: existing documents, how teams work day to day, and where inconsistencies exist.",
    },
    {
      title: 'Analysis',
      desc: "Identify what needs to be standardised, clarified, or built from the ground up before drafting begins.",
    },
    {
      title: 'Drafting',
      desc: "Full procedures written around the property, with review points at each stage so nothing is finalised without your team's input.",
    },
    {
      title: 'Delivery',
      desc: "Final PDF and/or Notion workspace delivered with a structured handover and guidance on how to roll it out.",
    },
  ] : [
    {
      title: 'Cadrage',
      desc: "Revue de l'état actuel : documents existants, façon de travailler des équipes au quotidien et points d'incohérence.",
    },
    {
      title: 'Analyse',
      desc: "Identification de ce qui doit être standardisé, clarifié ou construit depuis le départ avant de commencer la rédaction.",
    },
    {
      title: 'Rédaction',
      desc: "Procédures complètes rédigées autour de l'établissement, avec des points de validation à chaque étape pour que rien ne soit finalisé sans l'accord de votre équipe.",
    },
    {
      title: 'Livraison',
      desc: "PDF final et/ou espace Notion livré avec une remise structurée et des repères pour faciliter le déploiement.",
    },
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
            <p className="text-sm text-[#737685] max-w-lg leading-relaxed mb-8">{t('subtitle_context')}</p>
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

          {/* Right 1/3 — pull-quote */}
          <div
            className="lg:w-80 pb-2 text-lg text-[#4f6074] leading-relaxed"
            style={{ borderLeft: '4px solid #003d9b', paddingLeft: '1.5rem' }}
          >
            {t('subtitle')}
          </div>

        </div>
      </section>

      {/* 3 numbered phases — How it works */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-display text-3xl font-extrabold text-[#0a1d2e] tracking-tight mb-16">
            {isEn ? 'How it works' : 'Comment ça se passe'}
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-px"
            style={{ backgroundColor: 'rgba(195,198,214,0.15)' }}
          >
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

          {/* Impact statement */}
          <div
            className="mt-1 p-12 lg:p-16 relative overflow-hidden"
            style={{ backgroundColor: '#003d9b' }}
          >
            <div className="relative z-10 max-w-2xl">
              <h3 className="font-display text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
                {isEn
                  ? 'The goal is not to produce documentation for its own sake.'
                  : "L'objectif n'est pas de produire de la documentation pour elle-même."}
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {isEn
                  ? "The goal is to give teams procedures they can actually follow, apply in their daily work, and maintain over time."
                  : "L'objectif est de donner à vos équipes des procédures qu'elles peuvent réellement suivre, appliquer dans leur travail quotidien et maintenir dans le temps."}
              </p>
            </div>
            <div
              className="absolute -bottom-8 -right-4 font-display font-extrabold text-[200px] leading-none select-none pointer-events-none"
              style={{ color: 'rgba(255,255,255,0.06)' }}
            >
              SOP
            </div>
          </div>
        </div>
      </section>

      {/* Creation process timeline + sticky CTA */}
      <section className="py-24 px-6" style={{ backgroundColor: '#f8f9ff' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Timeline */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-extrabold text-[#0a1d2e] tracking-tight mb-16">
              {isEn ? 'The creation process' : 'Le déroulé de création'}
            </h2>
            <div
              className="relative pl-14 border-l-2"
              style={{ borderColor: 'rgba(195,198,214,0.4)' }}
            >
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
            <div
              className="p-10 bg-white"
              style={{ borderRadius: '0.125rem', boxShadow: '0 8px 32px rgba(10,29,46,0.08)' }}
            >
              <div className="font-display text-xs font-bold uppercase tracking-widest text-[#737685] mb-2">
                {isEn ? 'Ready to start?' : 'Prêt à commencer ?'}
              </div>
              <div className="font-display text-3xl font-extrabold text-[#003d9b] mb-6">{t('price')}</div>
              <p className="text-sm text-[#4f6074] leading-relaxed mb-8">
                {isEn
                  ? "One department, fully documented and built around the way your property operates, not adapted from a generic template."
                  : "Un département, entièrement documenté et construit autour du fonctionnement réel de votre établissement, pas adapté d'un modèle générique."}
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
                style={{
                  background: 'linear-gradient(135deg, #003d9b, #0052cc)',
                  borderRadius: '0.125rem',
                }}
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

          {/* When useful */}
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

          {/* What we build */}
          <div>
            <h2 className="font-display text-2xl font-extrabold text-[#0a1d2e] tracking-tight mb-3">
              {t('what_we_build_title')}
            </h2>
            <p className="text-sm text-[#4f6074] leading-relaxed mb-8">{t('what_we_build_intro')}</p>
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

      {/* Final CTA */}
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
