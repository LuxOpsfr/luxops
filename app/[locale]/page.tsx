import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { ArrowRight, BookOpen, Settings, Users } from 'lucide-react'
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
  const tProof = useTranslations('social_proof')
  const tCta = useTranslations('cta_section')
  const isEn = locale === 'en'

  return (
    <div className="pt-16">

      {/* Hero */}
      <section
        className="relative py-24 md:py-32 px-6 overflow-hidden border-b"
        style={{
          backgroundImage: 'radial-gradient(#c3c6d6 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
          borderColor: 'rgba(195,198,214,0.2)',
        }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 text-[#003d9b] font-bold text-[10px] uppercase tracking-widest"
              style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
            >
              <span className="w-2 h-2 bg-[#003d9b] rounded-full" />
              {tHero('badge')}
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter leading-none text-[#0a1d2e]">
              {tHero('title')}
            </h1>

            <p className="text-lg text-[#4f6074] max-w-xl leading-relaxed">
              {tHero('subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/playbooks`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold transition-all hover:opacity-90"
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold transition-all hover:bg-[#eef4ff]"
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

          {/* Right — stats preview */}
          <div className="flex-1 w-full max-w-sm lg:max-w-none">
            <div
              className="bg-white p-8"
              style={{
                borderRadius: '0.125rem',
                boxShadow: '0 20px 60px rgba(10,29,46,0.08)',
                border: '1px solid rgba(195,198,214,0.2)',
              }}
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#737685] mb-6">
                {isEn ? 'Operational Impact' : 'Impact Opérationnel'}
              </p>
              <div className="grid grid-cols-2 gap-1">
                {[
                  { v: '-40%', l: isEn ? 'Check-in Errors' : 'Erreurs Check-in' },
                  { v: '+22%', l: isEn ? 'Guest Satisfaction' : 'Satisfaction Client' },
                  { v: '-35%', l: isEn ? 'Inspection Time' : "Temps d'Inspection" },
                  { v: 'ROI 3x', l: isEn ? 'First Semester' : 'Premier Semestre' },
                ].map((s, i) => (
                  <div key={i} className="p-5 text-center" style={{ backgroundColor: '#f8f9ff' }}>
                    <div className="font-display text-2xl font-extrabold text-[#003d9b]">{s.v}</div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#4f6074] mt-1">{s.l}</div>
                  </div>
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
              { icon: <Settings size={20} style={{ color: '#003d9b' }} />, title: tOffers('audit_title'), desc: tOffers('audit_desc'), cta: tOffers('audit_cta'), href: `/${locale}/audit-qualite` },
              { icon: <Users size={20} style={{ color: '#003d9b' }} />, title: tOffers('training_title'), desc: tOffers('training_desc'), cta: tOffers('training_cta'), href: `/${locale}/formation` },
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

      {/* Stats */}
      <section style={{ backgroundColor: '#eef4ff' }}>
        <div className="max-w-screen-xl mx-auto px-6 py-24">
          <div className="max-w-xl mb-12">
            <h2 className="font-display text-4xl font-extrabold text-[#0a1d2e] tracking-tight">
              {tProof('title')}
            </h2>
          </div>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px"
            style={{ backgroundColor: 'rgba(195,198,214,0.2)' }}
          >
            {[tProof('stat1'), tProof('stat2'), tProof('stat3'), tProof('stat4')].map((stat, i) => (
              <div key={i} className="bg-white p-10 text-center">
                <div className="font-display font-bold text-sm text-[#0a1d2e]">{stat}</div>
              </div>
            ))}
          </div>
          {tProof('subtitle') && <p className="text-center text-[#737685] text-xs italic mt-6">{tProof('subtitle')}</p>}
        </div>
      </section>

      {/* Expertise — humanisation */}
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
