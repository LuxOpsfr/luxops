import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { ArrowRight, BookOpen, ClipboardCheck, Clock, Settings, Star, Users } from 'lucide-react'
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
      ? 'LuxOps | Hotel Operations Playbooks, SOPs & Training'
      : 'LuxOps | Playbooks, SOPs et Formation Hôtelière',
    description: isEn
      ? 'Operational playbooks, SOP frameworks and on-property training for high-end hotels. Front Office, Housekeeping, F&B, Spa. Built from real hotel operations.'
      : "Playbooks opérationnels, procédures et formation pour les hôtels haut de gamme. Front Office, Housekeeping, F&B, Spa. Issus de l'exploitation réelle.",
    alternates: {
      canonical: `https://www.luxops.fr/${locale}`,
      languages: {
        'en': 'https://www.luxops.fr/en',
        'fr': 'https://www.luxops.fr/fr',
        'x-default': 'https://www.luxops.fr/en',
      },
    },
  }
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.luxops.fr/#organization',
      name: 'LuxOps',
      url: 'https://www.luxops.fr',
      description: 'Operational playbooks, SOP frameworks and on-property training for high-end hotels.',
      contactPoint: { '@type': 'ContactPoint', email: 'contact@luxops.fr', contactType: 'customer service' },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.luxops.fr/#website',
      name: 'LuxOps',
      url: 'https://www.luxops.fr',
      publisher: { '@id': 'https://www.luxops.fr/#organization' },
      inLanguage: ['en', 'fr'],
    },
  ],
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <HomeContent locale={locale} />
    </>
  )
}

function HomeContent({ locale }: { locale: string }) {
  const tHero = useTranslations('hero')
  const tProblem = useTranslations('problem')
  const tSolution = useTranslations('solution')
  const tOffers = useTranslations('offers')
  const tCta = useTranslations('cta_section')
  const isEn = locale === 'en'

  return (
    <div className="pt-16">

      {/* Hero */}
      <section
        className="relative px-6 pt-10 pb-16 md:pt-14 md:pb-20 overflow-hidden border-b"
        style={{
          backgroundImage: 'radial-gradient(#c3c6d6 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
          borderColor: 'rgba(195,198,214,0.2)',
        }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-8">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 text-[#003d9b] font-bold text-[10px] uppercase tracking-widest"
              style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
            >
              <span className="w-2 h-2 bg-[#003d9b] rounded-full" />
              {tHero('badge')}
            </div>

            <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.96] text-[#0a1d2e]">
              {tHero('title')}
            </h1>

            <p className="text-lg text-[#4f6074] max-w-xl leading-relaxed">
              {tHero('subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/playbooks`}
                className="inline-flex flex-shrink-0 items-center justify-center gap-2 px-8 py-4 text-white font-bold transition-all hover:opacity-90 sm:whitespace-nowrap"
                style={{
                  background: 'linear-gradient(135deg, #003d9b, #0052cc)',
                  borderRadius: '0.125rem',
                  boxShadow: '0 8px 24px rgba(0,61,155,0.2)',
                }}
              >
                {tHero('cta_primary')} <ArrowRight size={18} />
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex flex-shrink-0 items-center justify-center gap-2 px-8 py-4 font-bold transition-all hover:bg-[#eef4ff] sm:whitespace-nowrap"
                style={{
                  border: '1px solid #003d9b',
                  color: '#003d9b',
                  borderRadius: '0.125rem',
                }}
              >
                {tHero('cta_secondary')}
              </Link>
            </div>
          </div>

          {/* Right - commercial offer overview */}
          <div className="flex-1 w-full max-w-sm lg:max-w-none">
            <div
              className="bg-white p-8 md:p-9"
              style={{
                borderRadius: '0.125rem',
                boxShadow: '0 20px 60px rgba(10,29,46,0.08)',
                border: '1px solid rgba(195,198,214,0.2)',
              }}
            >
              <div className="flex items-start justify-between gap-6 mb-7">
                <div>
                  <p className="text-[#003d9b] text-[10px] font-bold uppercase tracking-widest mb-2">
                    {isEn ? 'What you can use now' : 'Ce que vous pouvez utiliser'}
                  </p>
                  <h2 className="font-display font-extrabold text-[#0a1d2e] text-2xl leading-tight">
                    {isEn ? 'Choose the right format for your need' : 'Choisir le bon format selon votre besoin'}
                  </h2>
                </div>
                <div className="hidden sm:flex items-center justify-center w-11 h-11 bg-[#eef4ff] text-[#003d9b] flex-shrink-0" style={{ borderRadius: '0.125rem' }}>
                  <BookOpen size={22} strokeWidth={1.5} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  icon: <ClipboardCheck size={18} strokeWidth={1.5} />,
                  title: isEn ? 'Starter Packs' : 'Starter Packs',
                  desc: isEn
                    ? 'Practical checklists, scripts and control tools for immediate use.'
                    : 'Checklists, scripts et outils de contrôle pour un usage immédiat.',
                  href: `/${locale}/playbooks#starter-packs`,
                },
                {
                  icon: <BookOpen size={18} strokeWidth={1.5} />,
                  title: isEn ? 'Playbooks' : 'Playbooks',
                  desc: isEn
                    ? 'Full SOP references for Front Office, Housekeeping, F&B and Spa.'
                    : 'Références SOP complètes pour Front Office, Housekeeping, F&B et Spa.',
                  href: `/${locale}/playbooks#department-playbooks`,
                },
                {
                  icon: <Users size={18} strokeWidth={1.5} />,
                  title: isEn ? 'Training' : 'Formation',
                  desc: isEn
                    ? 'On-property sessions to help teams apply service standards.'
                    : 'Sessions sur site pour aider les équipes à appliquer les standards.',
                  href: isEn ? '/en/training' : '/fr/formation',
                },
                {
                  icon: <Settings size={18} strokeWidth={1.5} />,
                  title: isEn ? 'Audit' : 'Audit',
                  desc: isEn
                    ? 'A structured review of standards, execution and operating gaps.'
                    : 'Une revue structurée des standards, de l’exécution et des écarts.',
                  href: isEn ? '/en/quality-audit' : '/fr/audit-qualite',
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex flex-col gap-4 p-5 bg-[#f8f9ff] hover:bg-[#eef4ff] transition-colors"
                  style={{ borderRadius: '0.125rem', border: '1px solid rgba(195,198,214,0.24)' }}
                >
                  <div
                    className="w-9 h-9 flex items-center justify-center text-[#003d9b] bg-white"
                    style={{ border: '1px solid rgba(0,61,155,0.15)', borderRadius: '50%' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-display font-bold text-[#0a1d2e] text-sm mb-1">{item.title}</p>
                    <p className="text-[#4f6074] text-xs leading-relaxed mb-3">{item.desc}</p>
                    <span className="inline-flex items-center gap-1 text-[#003d9b] text-xs font-bold">
                      {isEn ? 'View' : 'Voir'} <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24" style={{ backgroundColor: '#f8f9ff' }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl font-extrabold text-[#0a1d2e] mb-4 tracking-tight">
              {tProblem('title')}
            </h2>
            <p className="text-lg text-[#4f6074] leading-relaxed">{tProblem('text')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { emoji: '⚠️', title: tProblem('point1_title'), text: tProblem('point1_text') },
              { emoji: '📋', title: tProblem('point2_title'), text: tProblem('point2_text') },
              { emoji: '🔄', title: tProblem('point3_title'), text: tProblem('point3_text') },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8" style={{ borderRadius: '0.125rem', boxShadow: '0 2px 8px rgba(10,29,46,0.04)' }}>
                <div className="text-3xl mb-5">{item.emoji}</div>
                <h3 className="font-display font-bold text-[#0a1d2e] mb-3">{item.title}</h3>
                <p className="text-[#4f6074] text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20" style={{ backgroundColor: '#0a1d2e' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-extrabold text-white mb-6 tracking-tight">
            {tSolution('title')}
          </h2>
          <p className="text-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            {tSolution('text')}
          </p>
        </div>
      </section>

      {/* Offers */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="font-display text-4xl font-extrabold text-[#0a1d2e] tracking-tight">
              {tOffers('title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: <BookOpen size={20} style={{ color: '#003d9b' }} />, title: tOffers('digital_title'), desc: tOffers('digital_desc'), cta: tOffers('digital_cta'), href: `/${locale}/playbooks` },
              { icon: <Settings size={20} style={{ color: '#003d9b' }} />, title: tOffers('audit_title'), desc: tOffers('audit_desc'), cta: tOffers('audit_cta'), href: isEn ? '/en/quality-audit' : '/fr/audit-qualite' },
              { icon: <Users size={20} style={{ color: '#003d9b' }} />, title: tOffers('training_title'), desc: tOffers('training_desc'), cta: tOffers('training_cta'), href: isEn ? '/en/training' : '/fr/formation' },
            ].map((card, i) => (
              <div key={i} className="p-8 group transition-all hover:shadow-lg" style={{ backgroundColor: '#f8f9ff', borderRadius: '0.125rem' }}>
                <div className="w-10 h-10 flex items-center justify-center mb-6" style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}>
                  {card.icon}
                </div>
                <h3 className="font-display font-bold text-[#0a1d2e] mb-3">{card.title}</h3>
                <p className="text-[#4f6074] text-sm leading-relaxed mb-6">{card.desc}</p>
                <Link href={card.href} className="inline-flex items-center gap-1.5 text-[#003d9b] font-bold text-sm hover:gap-3 transition-all">
                  {card.cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Goals */}
      <section
        className="py-32 bg-white border-t border-b"
        style={{ borderColor: 'rgba(195,198,214,0.2)' }}
      >
        <div className="max-w-screen-xl mx-auto px-6">

          {/* Header */}
          <div className="max-w-2xl mb-24">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#003d9b] mb-6">
              {isEn ? 'Our Goals' : 'Notre Engagement'}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[#0a1d2e] tracking-tight leading-tight">
              {isEn
                ? 'Three outcomes.\nEvery engagement.'
                : 'Trois engagements.\nSur chaque mission.'}
            </h2>
          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[rgba(195,198,214,0.35)]">
            {[
              {
                ordinal: '01',
                icon: <Star size={22} strokeWidth={1.25} />,
                title: isEn ? 'Service Excellence' : 'Excellence du Service',
                desc: isEn
                  ? 'Ensuring a consistent, flawless guest experience at every interaction, regardless of who is on shift.'
                  : "Créer les conditions d'une exécution plus régulière, plus lisible, et plus fiable pour le client.",
              },
              {
                ordinal: '02',
                icon: <Users size={22} strokeWidth={1.25} />,
                title: isEn ? 'Team Stability' : 'Stabilit\u00e9 des \u00c9quipes',
                desc: isEn
                  ? 'Streamlining onboarding to reduce turnover and help your people grow with confidence.'
                  : "Donner aux équipes une base de travail claire, plus simple à transmettre, à expliquer et à reprendre.",
              },
              {
                ordinal: '03',
                icon: <Clock size={22} strokeWidth={1.25} />,
                title: isEn ? 'Operational Efficiency' : 'Efficacit\u00e9 Op\u00e9rationnelle',
                desc: isEn
                  ? 'Freeing up management time by making know-how transferable, documented, and always available.'
                  : "Mettre en place des supports qui rendent les méthodes plus accessibles, plus durables et plus faciles à piloter.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-8 py-10 md:py-0"
                style={{ padding: i === 0 ? '0 3rem 0 0' : i === 2 ? '0 0 0 3rem' : '0 3rem' }}
              >
                {/* Ordinal + icon */}
                <div className="flex items-center justify-between">
                  <span
                    className="font-display font-extrabold text-[#0a1d2e]"
                    style={{ fontSize: '3rem', lineHeight: 1, opacity: 0.06 }}
                  >
                    {item.ordinal}
                  </span>
                  <div
                    className="w-11 h-11 flex items-center justify-center text-[#003d9b]"
                    style={{
                      border: '1px solid rgba(0,61,155,0.18)',
                      borderRadius: '50%',
                    }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Thin separator */}
                <div style={{ height: '1px', backgroundColor: 'rgba(195,198,214,0.4)' }} />

                {/* Text */}
                <div className="flex flex-col gap-3">
                  <h3
                    className="font-display font-bold text-[#0a1d2e] tracking-tight"
                    style={{ fontSize: '1.2rem', lineHeight: 1.3 }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#4f6074] leading-relaxed" style={{ fontSize: '0.9rem' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Expertise - humanisation */}
      <ExpertiseSection locale={locale} />

      {/* Final CTA */}
      <section className="py-24 bg-[#003d9b] text-white text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold tracking-tight mb-4">{tCta('title')}</h2>
          <p className="text-xl mb-10" style={{ color: 'rgba(255,255,255,0.75)' }}>{tCta('text')}</p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#003d9b] font-bold hover:bg-[#f8f9ff] transition-colors"
            style={{ borderRadius: '0.125rem' }}
          >
            {tCta('cta')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
