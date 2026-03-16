import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { ArrowRight, BookOpen, Settings, Users } from 'lucide-react'

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
      : 'Playbooks opérationnels, procédures et formation pour les hôtels haut de gamme. Front Office, Housekeeping, F&B, Spa. Issus de l\'exploitation réelle.',
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <HomeContent locale={locale} />
}

function HomeContent({ locale }: { locale: string }) {
  const tHero = useTranslations('hero')
  const tProblem = useTranslations('problem')
  const tSolution = useTranslations('solution')
  const tOffers = useTranslations('offers')
  const tProof = useTranslations('social_proof')
  const tCta = useTranslations('cta_section')

  return (
    <div className="pt-16">
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-[#111111]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#111111]/3 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#111111]/8 rounded-full text-[#111111] text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 bg-[#111111] rounded-full" />
            {tHero('badge')}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-[#111111] leading-tight mb-6 tracking-tight">
            {tHero('title')}
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            {tHero('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/playbooks`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#111111] text-white font-medium rounded-xl hover:bg-[#333333] transition-all hover:shadow-lg text-base"
            >
              {tHero('cta_primary')}
              <ArrowRight size={18} />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#111111] text-[#111111] font-medium rounded-xl hover:bg-[#111111]/5 transition-colors text-base"
            >
              {tHero('cta_secondary')}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#111111] mb-4">
              {tProblem('title')}
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {tProblem('text')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: '⚠️',
                title: tProblem('point1_title'),
                text: tProblem('point1_text'),
              },
              {
                emoji: '📋',
                title: tProblem('point2_title'),
                text: tProblem('point2_text'),
              },
              {
                emoji: '🔄',
                title: tProblem('point3_title'),
                text: tProblem('point3_text'),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 border border-gray-100 rounded-2xl hover:border-[#111111]/20 hover:shadow-sm transition-all"
              >
                <div className="text-3xl mb-4">{item.emoji}</div>
                <h3 className="text-lg font-semibold text-[#111111] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution ── */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{tSolution('title')}</h2>
          <p className="text-xl text-gray-300 leading-relaxed font-light">
            {tSolution('text')}
          </p>
        </div>
      </section>

      {/* ── Offers ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#111111]">{tOffers('title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                icon: <BookOpen size={22} className="text-[#111111]" />,
                title: tOffers('digital_title'),
                desc: tOffers('digital_desc'),
                cta: tOffers('digital_cta'),
                href: `/${locale}/playbooks`,
              },
              {
                icon: <Settings size={22} className="text-[#111111]" />,
                title: tOffers('audit_title'),
                desc: tOffers('audit_desc'),
                cta: tOffers('audit_cta'),
                href: `/${locale}/audit-qualite`,
              },
              {
                icon: <Users size={22} className="text-[#111111]" />,
                title: tOffers('training_title'),
                desc: tOffers('training_desc'),
                cta: tOffers('training_cta'),
                href: `/${locale}/formation`,
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-[#111111]/8 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#111111]/15 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-3">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{card.desc}</p>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1.5 text-[#111111] font-medium text-sm hover:gap-3 transition-all"
                >
                  {card.cta} <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-2">
            {locale === 'en'
              ? <>New to hotel SOPs? Visit our <Link href={`/${locale}/resources`} className="underline text-[#111111] hover:text-[#333333]">Resources page</Link> for operational guidance.</>
              : <>Découvrir les SOPs hôteliers ? Consultez notre <Link href={`/${locale}/resources`} className="underline text-[#111111] hover:text-[#333333]">page Ressources</Link>.</>}
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#111111] mb-4">
              {tProof('title')}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              tProof('stat1'),
              tProof('stat2'),
              tProof('stat3'),
              tProof('stat4'),
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 border border-gray-100 rounded-2xl"
              >
                <div className="text-sm font-semibold text-[#111111]">{stat}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-300 text-sm italic">{tProof('subtitle')}</p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 bg-gradient-to-br from-[#111111] to-[#333333]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">{tCta('title')}</h2>
          <p className="text-xl text-gray-300 mb-10 font-light">{tCta('text')}</p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#111111] font-semibold rounded-xl hover:bg-gray-100 transition-colors text-base"
          >
            {tCta('cta')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
