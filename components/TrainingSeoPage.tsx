import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

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
}: {
  locale: string
  data: TrainingSeoPageData
}) {
  return (
    <main className="bg-white pt-16">
      <section
        className="px-6 py-20 lg:py-24 border-b border-[#e8edf5]"
        style={{
          backgroundImage: 'radial-gradient(#c3c6d6 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
        }}
      >
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.82fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#eef4ff] text-[#003d9b] font-bold text-[10px] uppercase tracking-widest mb-7">
              <span className="w-2 h-2 rounded-full bg-[#003d9b]" />
              {data.badge}
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight leading-[0.98] text-[#0a1d2e] mb-6">
              {data.title}
            </h1>
            <p className="text-lg md:text-xl text-[#4f6074] leading-relaxed max-w-2xl mb-6">
              {data.intro}
            </p>
            <p className="text-sm text-[#737685] leading-relaxed max-w-2xl mb-8">
              {data.context}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={`/${locale}/formation`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#003d9b] text-white font-bold text-sm hover:bg-[#0a1d2e] transition-colors"
              >
                {data.primaryCta}
                <ArrowRight size={16} />
              </Link>
              <Link
                href={data.secondaryHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#0a1d2e] border border-[#d8deea] font-bold text-sm hover:border-[#003d9b] transition-colors"
              >
                {data.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="bg-white border border-[#d8deea] shadow-[0_24px_70px_rgba(10,29,46,0.10)] p-8 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#003d9b] mb-3">
              {data.overviewLabel}
            </p>
            <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-[#0a1d2e] tracking-tight mb-5">
              {data.overviewTitle}
            </h2>
            <p className="text-sm text-[#4f6074] leading-relaxed mb-7">{data.overviewText}</p>
            <div className="space-y-3">
              {data.outcomes.slice(0, 4).map((item) => (
                <div key={item} className="flex gap-3 text-sm text-[#0a1d2e] leading-relaxed">
                  <CheckCircle2 size={18} className="text-[#003d9b] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#003d9b] mb-3">
              {data.modulesLabel}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#0a1d2e] tracking-tight mb-4">
              {data.modulesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.modules.map((module) => (
              <article key={module.title} className="border border-[#e8edf5] bg-[#f8f9ff] p-6">
                <h3 className="font-display text-lg font-bold text-[#0a1d2e] mb-3">{module.title}</h3>
                <p className="text-sm text-[#4f6074] leading-relaxed">{module.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-[#f8f9ff]">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#003d9b] mb-3">
              {data.methodLabel}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#0a1d2e] tracking-tight mb-5">
              {data.methodTitle}
            </h2>
            <p className="text-[#4f6074] leading-relaxed">{data.methodText}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.outcomes.map((item) => (
              <div key={item} className="bg-white border border-[#e8edf5] p-6">
                <CheckCircle2 size={20} className="text-[#003d9b] mb-4" />
                <p className="text-sm text-[#4f6074] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pages-metier" className="px-6 py-20 bg-white scroll-mt-24">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#003d9b] mb-3">
              {data.relatedLabel}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#0a1d2e] tracking-tight">
              {data.relatedTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group border border-[#e8edf5] p-7 hover:border-[#003d9b] transition-colors"
              >
                <h3 className="font-display text-xl font-bold text-[#0a1d2e] mb-3 group-hover:text-[#003d9b] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4f6074] leading-relaxed mb-5">{item.text}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#003d9b]">
                  {locale === 'fr' ? 'Voir la page' : 'View page'}
                  <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-[#0a1d2e]">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              {data.finalTitle}
            </h2>
            <p className="text-[#cbd5e1] leading-relaxed max-w-2xl">{data.finalText}</p>
          </div>
          <Link
            href={`/${locale}/formation`}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#0a1d2e] font-bold text-sm hover:bg-[#eef4ff] transition-colors"
          >
            {data.finalCta}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}
