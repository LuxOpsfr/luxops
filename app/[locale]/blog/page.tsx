import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, BookOpen, Clock, FileText, Hotel } from 'lucide-react'
import { articles } from '@/content/blog/articles'
import { blogEditorialImages, editorialImageUrl } from '@/lib/editorial-images'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'Hotel Operations Resources & Guides | LuxOps Blog'
      : 'Ressources et Guides Opérations Hôtelières | Blog LuxOps',
    description: isEn
      ? 'Practical guides on hotel SOPs, service standards, housekeeping checklists, F&B procedures and SOP manuals. Written from real hotel operations experience.'
      : 'Guides pratiques sur les SOPs hôteliers, standards de service, checklists housekeeping, procédures F&B et Manuels SOP opérationnels. Issus de l\'expérience terrain.',
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/blog`,
      languages: {
        'en': 'https://www.luxops.fr/en/blog',
        'fr': 'https://www.luxops.fr/fr/blog',
        'x-default': 'https://www.luxops.fr/en/blog',
      },
    },
  }
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const isEn = locale === 'en'
  const topicClusters = isEn ? [
    { href: '/hotel-sop', label: 'Hotel SOP Templates', desc: 'The main pillar page for standard operating procedures across departments.' },
    { href: '/front-office-sop', label: 'Front Office SOP', desc: 'Reception, check-in, billing, handover and night audit procedures.' },
    { href: '/housekeeping-sop', label: 'Housekeeping SOP', desc: 'Room cleaning, inspection, linen, quality control and supervisor routines.' },
    { href: '/training', label: 'Hotel Staff Training', desc: 'On-property training for SOP rollout and service standards.' },
  ] : [
    { href: '/hotel-sop', label: 'SOP Hôtel', desc: 'La page pilier pour structurer les procédures par département.' },
    { href: '/front-office-sop', label: 'SOP Réception', desc: 'Accueil, check-in, facturation, passation et audit de nuit.' },
    { href: '/housekeeping-sop', label: 'SOP Housekeeping', desc: 'Remise en état, inspection, linge, contrôle qualité et routines superviseur.' },
    { href: '/formation', label: 'Formation Hôtelière', desc: 'Formation sur site pour déployer SOPs et standards de service.' },
  ]
  const visibleArticles = articles.filter(
    (article) => !['hotel-housekeeping-checklist', 'hotel-front-office-procedures'].includes(article.slug)
  )

  return (
    <div className="bg-[#f5f1e9] pt-[var(--site-header-height)] text-[#0f211a]">
      <section className="border-b border-[#e7e1d7] px-6 py-14 md:px-16 md:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-[1.1fr_.9fr] md:items-end">
          <div>
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[.18em] text-[#92734a]">LuxOps · {isEn ? 'Field notes' : 'Regards terrain'}</p>
          <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.08] text-[#0f211a] sm:text-5xl md:text-[3.5rem]">
            {isEn ? 'Hotel Operations Guides' : 'Guides Opérations Hôtelières'}
          </h1>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#687169] md:justify-self-end md:text-lg">
            {isEn
              ? 'Practical resources on SOPs, service standards and hotel operations management.'
              : 'Ressources pratiques sur les SOPs, standards de service et gestion opérationnelle hôtelière.'}
          </p>
        </div>
      </section>

      <section className="bg-[#fcfbf8] px-6 py-10 md:px-16 md:py-14">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.18em] text-[#92734a]">
              {isEn ? 'Essential guides' : 'Guides essentiels'}
            </p>
            <h2 className="font-display text-2xl font-medium text-[#0f211a] md:text-3xl">{isEn ? 'Start with a department' : 'Choisir un sujet opérationnel'}</h2>
              </div>
              <BookOpen className="mb-1 hidden text-[#a58658] sm:block" size={22} strokeWidth={1.5} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {topicClusters.map((cluster) => (
                <Link
                  key={cluster.href}
                  href={`/${locale}${cluster.href}`}
                  className="group flex min-h-[124px] items-start justify-between gap-4 rounded-[1.25rem] border border-[#e7e1d7] bg-[#f8f6f1] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#cbb487] hover:bg-white hover:shadow-[0_12px_26px_rgba(40,40,30,.07)]"
                >
                  <div><h3 className="mb-2 font-display text-lg font-medium text-[#24362f]">{cluster.label}</h3>
                  <p className="max-w-lg text-sm leading-6 text-[#687169]">{cluster.desc}</p></div>
                  <ArrowUpRight size={17} className="mt-1 shrink-0 text-[#a58658] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mb-5 flex items-end justify-between gap-5">
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.18em] text-[#92734a]">{isEn ? 'Ideas for the field' : 'Conseils et méthodes'}</p>
              <h2 className="font-display text-2xl font-medium text-[#0f211a] md:text-3xl">{isEn ? 'Latest articles' : 'Articles récents'}</h2>
            </div>
            <span className="hidden items-center gap-2 text-xs text-[#687169] sm:inline-flex"><FileText size={15} className="text-[#a58658]" />{visibleArticles.length} {isEn ? 'articles' : 'articles'}</span>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleArticles.map((article) => {
              const content = isEn ? article.en : article.fr
              const image = blogEditorialImages[article.slug]
              return (
                <Link
                  key={article.slug}
                  href={`/${locale}/blog/${article.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-[#e7e1d7] bg-white shadow-[0_7px_22px_rgba(40,40,30,.035)] transition duration-300 hover:-translate-y-1 hover:border-[#d3c09a] hover:shadow-[0_18px_38px_rgba(40,40,30,.09)]"
                >
                  <div className="relative aspect-[1.72] overflow-hidden bg-[#e7e0d5]">
                    {image && <Image src={editorialImageUrl(image, locale)} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" />}
                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-[#fcfbf8]/90 px-3 py-1.5 text-[10px] font-medium text-[#314137] shadow-sm backdrop-blur"><Hotel size={12} className="text-[#92734a]" />{isEn ? 'Hotel operations' : 'Opérations hôtelières'}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex items-center gap-1 text-[11px] text-[#7b817b]">
                      <Clock size={12} />
                      {content.readTime}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-[#c8b48d]" />
                    <span className="text-[11px] text-[#7b817b]">{content.date}</span>
                  </div>
                  <h3 className="mb-3 font-display text-xl font-medium leading-tight text-[#0f211a] transition-colors group-hover:text-[#705431]">
                    {content.title}
                  </h3>
                  <p className="mb-5 line-clamp-3 text-sm leading-6 text-[#687169]">
                    {content.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#314137] transition-all group-hover:gap-3">
                    {isEn ? 'Read article' : 'Lire l\'article'} <ArrowRight size={14} />
                  </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
