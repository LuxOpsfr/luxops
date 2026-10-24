import Link from 'next/link'
import Image from 'next/image'
import type { RevenueDraftArticle } from '@/content/blog/revenue-management-drafts'
import { revenueManagementDrafts } from '@/content/blog/revenue-management-drafts'
import RevenueMetricsCalculator from '@/components/RevenueMetricsCalculator'
import { REVENUE_PRODUCT_PATH } from '@/content/revenue-management-product'
import { breadcrumbSchema } from '@/lib/seo'

export default function RevenueManagementDraftPage({
  article,
  locale,
}: {
  article: RevenueDraftArticle
  locale: 'fr' | 'en'
}) {
  const isFr = locale === 'fr'
  const content = article[locale]
  const otherArticles = revenueManagementDrafts.filter((item) => item.slug !== article.slug)
  const articleImages: Record<string, { src: string; alt: { fr: string; en: string } }> = {
    'calcul-revpar-adr-taux-occupation': { src: '/images/editorial-hospitality/revenue-article-forecast-reports.png', alt: { fr: 'Analyse de rapports de réservation et de performance hôtelière', en: 'Reviewing hotel reservation and performance reports' } },
    'revenue-management-hotelier-guide': { src: '/images/editorial-hospitality/revenue-article-review.png', alt: { fr: 'Réunion de pilotage commercial dans un hôtel', en: 'Commercial planning review in a hotel' } },
    'apprendre-revenue-management-hotelier': { src: '/images/editorial-hospitality/revenue-article-manager-at-pms.png', alt: { fr: 'Professionnelle étudiant un planning de réservations', en: 'Hotel professional reviewing a reservation calendar' } },
    'pickup-forecast-hotelier': { src: '/images/editorial-hospitality/revenue-article-forecast-reports.png', alt: { fr: 'Lecture de rapports de réservation et de prévision', en: 'Reviewing reservation and forecast reports' } },
    'distribution-hoteliere-ota-direct': { src: '/images/editorial-hospitality/revenue-article-manager-at-pms.png', alt: { fr: 'Contrôle des disponibilités sur un écran hôtelier', en: 'Checking hotel availability on screen' } },
    'strategie-tarifaire-hotel': { src: '/images/editorial-hospitality/revenue-article-review.png', alt: { fr: 'Discussion d’une décision tarifaire en équipe', en: 'Team discussion of a hotel pricing decision' } },
  }
  const heroImage = articleImages[article.slug]
  const breadcrumbs = breadcrumbSchema([
    { name: 'LuxOps', url: `https://www.luxops.fr/${locale}` },
    { name: 'Blog', url: `https://www.luxops.fr/${locale}/blog` },
    { name: content.title, url: `https://www.luxops.fr/${locale}/blog/${article.slug}` },
  ])

  return (
    <article className="bg-[#fcfbf8] pb-16 pt-[calc(var(--site-header-height)+2rem)] text-[#0f211a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <nav aria-label={isFr ? 'Fil d’Ariane' : 'Breadcrumb'} className="mb-8 flex flex-wrap gap-2 text-sm text-[#687169]">
          <Link href={`/${locale}`} className="hover:underline">LuxOps</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/${locale}/blog`} className="hover:underline">Blog</Link>
          <span aria-hidden="true">/</span>
          <span>{isFr ? 'Revenue Management' : 'Revenue management'}</span>
        </nav>

        <header className="max-w-4xl border-b border-[#e7e1d7] pb-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-[#92734a]">
            {isFr ? 'Ressources Revenue Management' : 'Revenue management resources'}
          </p>
          <h1 className="font-display text-4xl font-medium leading-tight sm:text-5xl">{content.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#536057]">{content.intro}</p>
          <p className="mt-5 text-sm text-[#687169]">
            {isFr ? 'Par LuxOps' : 'By LuxOps'}
          </p>
          <Link href={`/${locale}${REVENUE_PRODUCT_PATH}`} className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#10271e] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#244330]">
            {isFr ? 'Découvrir le manuel Revenue Management' : 'Explore the Revenue Management manual'}<span aria-hidden="true">→</span>
          </Link>
        </header>

        {heroImage && <div className="relative mt-8 aspect-[1.65] overflow-hidden rounded-[22px] border border-[#e7e1d7] bg-[#e7e1d7] sm:aspect-[2.25]">
          <Image src={heroImage.src} alt={heroImage.alt[locale]} fill priority sizes="(min-width: 1120px) 1050px, 100vw" className="object-cover object-center" />
        </div>}

        <div className="grid gap-12 py-10 lg:grid-cols-[minmax(0,1fr)_250px]">
          <div className="order-2 min-w-0 lg:order-1">
            {article.slug === 'calcul-revpar-adr-taux-occupation' && <RevenueMetricsCalculator locale={locale} />}

            {content.sections.map((section) => (
              <section key={section.id} id={section.id} className="mb-12 scroll-mt-28">
                <h2 className="mb-5 font-display text-2xl font-medium leading-snug sm:text-3xl">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mb-4 text-base leading-8 text-[#37483e]">{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="my-5 list-disc space-y-2 pl-6 text-base leading-7 text-[#37483e]">
                    {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                )}
                {section.related && (
                  <p className="my-5 text-sm leading-6 text-[#536057]">
                    {section.related.map((related, index) => (
                      <span key={related.slug}>
                        {index > 0 && ' · '}
                        <Link href={`/${locale}/blog/${related.slug}`} className="font-medium text-[#315e47] underline underline-offset-2 hover:text-[#0f211a]">{related.label}</Link>
                      </span>
                    ))}
                  </p>
                )}
                {section.table && (
                  <div className="my-6 overflow-x-auto rounded-xl border border-[#e4dccf]" role="region" aria-label={section.heading} tabIndex={0}>
                    <table className="min-w-full border-collapse text-left text-sm">
                      <thead className="bg-[#eef0ea] text-[#20392b]">
                        <tr>{section.table.headings.map((heading) => <th key={heading} scope="col" className="min-w-32 px-4 py-3 font-semibold">{heading}</th>)}</tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, index) => (
                          <tr key={`${section.id}-${index}`} className="border-t border-[#e4dccf] bg-white even:bg-[#fbfaf7]">
                            {row.map((cell, cellIndex) => cellIndex === 0
                              ? <th key={cellIndex} scope="row" className="px-4 py-3 align-top font-medium text-[#20392b]">{cell}</th>
                              : <td key={cellIndex} className="px-4 py-3 align-top text-[#37483e]">{cell}</td>)}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.note && <p className="rounded-r-lg border-l-2 border-[#b49668] bg-[#f6f2e9] px-4 py-3 text-sm leading-6 text-[#536057]">{section.note}</p>}
              </section>
            ))}

            {content.takeaway && (
              <div className="rounded-2xl bg-[#0f211a] p-6 text-[#f5f1e9] sm:p-8">
                <h2 className="mb-3 font-display text-2xl">{isFr ? 'À retenir' : 'Key takeaway'}</h2>
                <p className="leading-7 text-[#d8dfd8]">{content.takeaway}</p>
              </div>
            )}

            {content.manualNote && <aside className="mt-8 rounded-r-lg border-l-2 border-[#b49668] bg-[#f6f2e9] px-5 py-4 text-sm leading-6 text-[#536057]" aria-label={isFr ? 'Lien avec le manuel LuxOps' : 'About the LuxOps handbook'}>{content.manualNote}</aside>}

            {content.sources && (
              <section className="mt-10" aria-labelledby="revenue-sources">
                <h2 id="revenue-sources" className="mb-3 text-lg font-semibold">{isFr ? 'Sources professionnelles' : 'Professional references'}</h2>
                <ul className="space-y-2 text-sm">
                  {content.sources.map((source) => (
                    <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer" className="text-[#315e47] underline underline-offset-2 hover:text-[#0f211a]">{source.label}</a></li>
                  ))}
                </ul>
              </section>
            )}
            <section className="mt-8 border-t border-[#e7e1d7] pt-5 text-sm leading-6 text-[#536057]" aria-label={isFr ? 'À propos de l’auteur' : 'About the author'}>
              <p><span className="font-semibold text-[#20392b]">LuxOps.</span> {isFr
                ? 'Ressources et outils opérationnels pour les équipes hôtelières.'
                : 'Operational resources and tools for hotel teams.'}</p>
            </section>
          </div>

          <aside className="order-1 lg:order-2 lg:sticky lg:top-28 lg:self-start" aria-label={isFr ? 'Sommaire de l’article' : 'Article contents'}>
            <div className="rounded-2xl border border-[#e7e1d7] bg-white p-5">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[.14em] text-[#92734a]">{isFr ? 'Dans ce guide' : 'In this guide'}</p>
              <ul className="space-y-3 text-sm leading-5">
                {content.sections.map((section) => (
                  <li key={section.id}><a href={`#${section.id}`} className="text-[#536057] hover:text-[#0f211a] hover:underline">{section.heading}</a></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <section className="border-t border-[#e7e1d7] pt-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[.14em] text-[#92734a]">{isFr ? 'Continuer la lecture' : 'Continue reading'}</p>
          <h2 className="mb-5 font-display text-xl sm:text-2xl">{isFr ? 'Dans la même collection' : 'From the same collection'}</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {otherArticles.map((item) => (
              <Link key={item.slug} href={`/${locale}/blog/${item.slug}`} className="rounded-lg border border-[#e7e1d7] bg-white p-4 text-sm transition-colors hover:border-[#b49668] hover:bg-[#f8f5ed]">
                <span className="font-medium text-[#0f211a]">{item[locale].title}</span>
                <span aria-hidden="true" className="ml-2 text-[#92734a]">↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-[#d9c9aa] bg-[#f8f5ed] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[.14em] text-[#92734a]">{isFr ? 'Pour aller plus loin' : 'Go further'}</p>
          <h2 className="mt-2 font-display text-2xl">Revenue Management &amp; Distribution</h2>
          <p className="mt-3 max-w-2xl leading-7 text-[#536057]">
            {isFr
              ? 'Ces articles restent gratuits. Le manuel LuxOps réunit huit chapitres consacrés aux responsabilités, procédures et contrôles nécessaires à la mise en œuvre du revenue management dans l’hôtel.'
              : 'These articles remain free. The LuxOps manual brings together eight chapters on the responsibilities, procedures and checks required to put revenue management into practice at a hotel.'}
          </p>
          <Link href={`/${locale}${REVENUE_PRODUCT_PATH}`} className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#10271e] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#244330]">
            {isFr ? 'Découvrir le manuel et ses chapitres' : 'Explore the handbook and its chapters'}<span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </article>
  )
}
