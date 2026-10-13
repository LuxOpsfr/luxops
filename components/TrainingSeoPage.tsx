import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import EditorialRouteImage from './EditorialRouteImage'

export type TrainingSeoPageData = {
  badge: string
  title: string
  intro: string
  context: string
  primaryCta: string
  secondaryCta: string
  secondaryHref: string
  overviewLabel: string
  overviewTitle: string
  overviewText: string
  modulesLabel: string
  modulesTitle: string
  modules: Array<{
    title: string
    text: string
  }>
  methodLabel: string
  methodTitle: string
  methodText: string
  outcomes: string[]
  relatedLabel: string
  relatedTitle: string
  related: Array<{
    href: string
    title: string
    text: string
  }>
  finalTitle: string
  finalText: string
  finalCta: string
}

export default function TrainingSeoPage({
  locale,
  data,
  editorialRoute,
}: {
  locale: string
  data: TrainingSeoPageData
  editorialRoute?: string
}) {
  const trainingHref = locale === 'en' ? '/en/training' : '/fr/formation'

  return (
    <main className="bg-[#fcfbf8] pt-[var(--site-header-height)] text-[#0f211a]">
      <section
        className="border-b border-[#e7e1d7] bg-[#f5f1e9] px-6 py-16 lg:py-20"
        style={{
          backgroundImage: 'radial-gradient(rgba(165,134,88,.16) 0.5px, transparent 0.5px)',
          backgroundSize: '28px 28px',
        }}
      >
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.82fr] gap-12 items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e4d8c2] bg-[#fcfbf8] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#92734a]">
              <span className="h-2 w-2 rounded-full bg-[#a58658]" />
              {data.badge}
            </div>
            <h1 className="mb-6 max-w-3xl font-display text-4xl font-medium leading-[1.08] text-[#0f211a] sm:text-5xl md:text-[3.5rem]">
              {data.title}
            </h1>
            <p className="mb-6 max-w-2xl text-lg leading-relaxed text-[#687169] md:text-xl">
              {data.intro}
            </p>
            <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[#687169]">
              {data.context}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={trainingHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0f211a] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#24362f]"
              >
                {data.primaryCta}
                <ArrowRight size={16} />
              </Link>
              <Link
                href={data.secondaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e7e1d7] bg-white px-6 py-4 text-sm font-semibold text-[#24362f] transition-colors hover:border-[#cbb487]"
              >
                {data.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-[#e7e1d7] bg-[#fcfbf8] p-7 shadow-[0_20px_50px_rgba(40,40,30,.08)] lg:p-9">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#92734a]">
              {data.overviewLabel}
            </p>
            <h2 className="mb-5 font-display text-2xl font-medium text-[#0f211a] lg:text-3xl">
              {data.overviewTitle}
            </h2>
            <p className="mb-7 text-sm leading-relaxed text-[#687169]">{data.overviewText}</p>
            <div className="space-y-3">
              {data.outcomes.slice(0, 4).map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-relaxed text-[#314137]">
                  <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-[#a58658]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {editorialRoute && <EditorialRouteImage route={editorialRoute} alt={data.title} locale={locale} />}

      <section className="bg-[#fcfbf8] px-6 py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#92734a]">
              {data.modulesLabel}
            </p>
            <h2 className="mb-4 font-display text-3xl font-medium text-[#0f211a] md:text-4xl">
              {data.modulesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.modules.map((module) => (
              <article key={module.title} className="rounded-[1.25rem] border border-[#e7e1d7] bg-white p-6">
                <h3 className="mb-3 font-display text-lg font-medium text-[#24362f]">{module.title}</h3>
                <p className="text-sm leading-relaxed text-[#687169]">{module.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f1e9] px-6 py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#92734a]">
              {data.methodLabel}
            </p>
            <h2 className="mb-5 font-display text-3xl font-medium text-[#0f211a] md:text-4xl">
              {data.methodTitle}
            </h2>
            <p className="leading-relaxed text-[#687169]">{data.methodText}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.outcomes.map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-[#e7e1d7] bg-white p-6">
                <CheckCircle2 size={20} className="mb-4 text-[#a58658]" />
                <p className="text-sm leading-relaxed text-[#687169]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pages-metier" className="scroll-mt-24 bg-[#fcfbf8] px-6 py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#92734a]">
              {data.relatedLabel}
            </p>
            <h2 className="font-display text-3xl font-medium text-[#0f211a] md:text-4xl">
              {data.relatedTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
            {data.related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-[1.25rem] border border-[#e7e1d7] bg-white p-7 transition-colors hover:border-[#cbb487]"
              >
                <h3 className="mb-3 font-display text-xl font-medium text-[#24362f] transition-colors group-hover:text-[#705431]">
                  {item.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-[#687169]">{item.text}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#705431]">
                  {locale === 'fr' ? 'Voir la page' : 'View page'}
                  <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0f211a] px-6 py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <h2 className="mb-4 font-display text-3xl font-medium text-white md:text-4xl">
              {data.finalTitle}
            </h2>
            <p className="max-w-2xl leading-relaxed text-white/75">{data.finalText}</p>
          </div>
          <Link
            href={trainingHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f5f1e9] px-6 py-4 text-sm font-semibold text-[#24362f] transition-colors hover:bg-white"
          >
            {data.finalCta}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}
