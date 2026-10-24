import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, BookOpen, Check, Languages, Presentation } from 'lucide-react'
import { REVENUE_PRODUCT_CHAPTERS, REVENUE_PRODUCT_PATH } from '@/content/revenue-management-product'
import { revenueManagementDrafts } from '@/content/blog/revenue-management-drafts'
import { breadcrumbSchema } from '@/lib/seo'
import { RevenueBundleOffer, RevenueManualCartButton, RevenueManualPrice, RevenuePreviewStage } from '@/components/RevenueProductControls'

const copy = {
  fr: {
    title: 'Manuel Revenue Management & Distribution',
    seoTitle: 'Manuel Revenue Management hôtelier & Distribution 2027 | LuxOps',
    description: 'Découvrez les huit chapitres du manuel LuxOps Revenue Management & Distribution : forecast, tarifs, disponibilités, distribution, groupes et suivi des résultats.',
    department: 'Revenue Management & Distribution',
    intro: 'Un référentiel opérationnel pour relier réservations, forecast, tarifs, disponibilités et distribution aux décisions commerciales de l’hôtel.',
    productLabel: 'Manuel Revenue Management & Distribution',
    productDetail: 'Manuel complet · 8 chapitres · ~115 pages · PDF et PowerPoint modifiable.',
    facts: ['8 chapitres · ~115 pages', 'Français & anglais inclus', 'PDF + PowerPoint modifiable', 'Extrait du chapitre 02'],
    structureLabel: 'Structure du manuel',
    chaptersTitle: 'Les 8 chapitres opérationnels',
    chaptersIntro: 'Un parcours de la lecture des réservations à la revue des décisions et des résultats.',
    aboutTitle: 'Une méthode conçue pour les opérations hôtelières',
    aboutText: 'Le manuel organise le travail de la direction, des réservations, du commercial, du Revenue Manager et des services qui appliquent les décisions. Il distingue les données observées, les prévisions, les arbitrages et les contrôles à effectuer.',
    scopeTitle: 'Ce que couvrent les chapitres',
    scope: ['Réservations, demande et forecast', 'Tarifs, offres et conditions de vente', 'Disponibilités et distribution', 'Groupes, privatisations et yield meetings'],
    relatedTitle: 'Ressources Revenue Management',
    relatedText: 'Six articles gratuits pour découvrir les indicateurs et méthodes avant de consulter le manuel. Leurs exemples chiffrés sont des cas pédagogiques, pas des extraits du produit.',
    faqTitle: 'Spécifications & FAQ',
    faqs: [
      { q: 'Combien de pages contient le manuel ?', a: 'Le manuel compte environ 115 pages, réparties en huit chapitres. Le chapitre 02 proposé en extrait compte 16 pages.' },
      { q: 'Le manuel est-il inclus dans le bundle ?', a: 'Oui. La nouvelle composition du bundle réunit Front Office, Housekeeping, Food & Beverage, Spa et Revenue Management, au tarif maintenu de 199 €.' },
      { q: 'Puis-je acheter le manuel Revenue séparément ?', a: 'Oui. Le manuel Revenue Management est disponible séparément à 67 €, ou dans le bundle des cinq manuels à 199 €.' },
    ],
  },
  en: {
    title: 'Revenue Management & Distribution SOP Manual',
    seoTitle: 'Hotel Revenue Management & Distribution SOP Manual 2027 | LuxOps',
    description: 'Explore the eight chapters of the LuxOps Revenue Management & Distribution handbook: forecasting, rates, availability, distribution, groups and results.',
    department: 'Revenue Management & Distribution',
    intro: 'An operational reference connecting reservations, forecasts, rates, availability and distribution to hotel commercial decisions.',
    productLabel: 'Revenue Management & Distribution SOP Manual',
    productDetail: 'Complete manual · 8 chapters · ~115 pages · PDF and editable PowerPoint.',
    facts: ['8 chapters · ~115 pages', 'English & French included', 'PDF + editable PowerPoint', 'Chapter 02 sample'],
    structureLabel: 'Manual structure',
    chaptersTitle: '8 operational chapters',
    chaptersIntro: 'A route from understanding reservations to reviewing decisions and results.',
    aboutTitle: 'A method designed for hotel operations',
    aboutText: 'The handbook organises the work of leadership, reservations, sales, revenue management and the departments applying each decision. It separates observed data, forecasts, decisions and the checks that follow.',
    scopeTitle: 'What the chapters cover',
    scope: ['Reservations, demand and forecasting', 'Rates, offers and booking conditions', 'Availability and distribution', 'Groups, exclusive use and yield meetings'],
    relatedTitle: 'Revenue management resources',
    relatedText: 'Six free articles introducing the metrics and methods before exploring the handbook. Their numerical examples are teaching cases, not product excerpts.',
    faqTitle: 'Specifications & FAQ',
    faqs: [
      { q: 'How many pages are in the manual?', a: 'The manual contains approximately 115 pages across eight chapters. The downloadable Chapter 02 sample has 16 pages.' },
      { q: 'Is this manual included in the bundle?', a: 'Yes. The updated bundle contains Front Office, Housekeeping, Food & Beverage, Spa and Revenue Management at the same €199 price.' },
      { q: 'Can I buy the Revenue manual separately?', a: 'Yes. The Revenue Management manual is available separately for €67, or as part of the five-manual bundle for €199.' },
    ],
  },
} as const

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (locale !== 'fr' && locale !== 'en') return {}
  const text = copy[locale]
  return {
    title: text.seoTitle,
    description: text.description,
    alternates: {
      canonical: `https://www.luxops.fr/${locale}${REVENUE_PRODUCT_PATH}`,
      languages: {
        fr: `https://www.luxops.fr/fr${REVENUE_PRODUCT_PATH}`,
        en: `https://www.luxops.fr/en${REVENUE_PRODUCT_PATH}`,
        'x-default': `https://www.luxops.fr/en${REVENUE_PRODUCT_PATH}`,
      },
    },
  }
}

export default async function RevenueManagementProductPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== 'fr' && locale !== 'en') notFound()
  const text = copy[locale]
  const breadcrumbs = breadcrumbSchema([
    { name: 'LuxOps', url: `https://www.luxops.fr/${locale}` },
    { name: locale === 'fr' ? 'Manuels SOP' : 'SOP Manuals', url: `https://www.luxops.fr/${locale}/playbooks` },
    { name: text.title, url: `https://www.luxops.fr/${locale}${REVENUE_PRODUCT_PATH}` },
  ])

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fcfbf8] pt-[var(--site-header-height)] text-[#10251d]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <section className="relative px-5 pb-12 pt-5 md:px-7 md:pb-16 md:pt-6">
        <div className="relative mx-auto grid w-full items-start gap-7 lg:grid-cols-[1.05fr_.95fr] lg:gap-9">
          <RevenuePreviewStage locale={locale} />

          <div className="pt-1">
            <div className="flex flex-wrap items-center gap-2.5"><span className="rounded-full bg-[#e9e2d5] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.1em] text-[#293d31]">{locale === 'fr' ? 'Édition 2027' : '2027 edition'}</span><span className="text-xs text-[#72766e]">{text.department}</span></div>
            <h1 className="mt-2.5 font-display text-[clamp(1.9rem,2.5vw,2.2rem)] font-medium leading-[1.12] tracking-[-.015em] text-[#10251d]">{text.title}</h1>
            <p className="mt-2 max-w-2xl text-sm leading-[1.55] text-[#697169] md:text-[14px]">{text.intro}</p>

            <div className="mt-3 space-y-2">
              <article className="rounded-[17px] border border-[#c7a76e] bg-white px-3.5 py-3 shadow-[0_6px_18px_rgba(40,35,24,.06)] sm:px-4 sm:py-3.5">
                <div className="flex items-center justify-between gap-3"><div className="flex min-w-0 items-center gap-2.5"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"><span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#a58658]"><span className="h-2 w-2 rounded-full bg-[#10251d]" /></span></span><h2 className="text-[12px] font-semibold text-[#25382d] sm:text-[13px]">{text.productLabel}</h2></div><RevenueManualPrice /></div>
                <p className="ml-[26px] mt-1 text-[10px] leading-[1.4] text-[#74766e] sm:text-[11px]">{text.productDetail}</p>
                <div className="ml-[26px] mt-2 flex justify-end border-t border-dashed border-[#e8e2d7] pt-2"><RevenueManualCartButton locale={locale} /></div>
              </article>
              <RevenueBundleOffer locale={locale} />
            </div>

            <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5 rounded-[15px] border border-[#e9e3d9] bg-white/55 px-3.5 py-2.5 sm:px-4">
              {text.facts.map((fact, index) => <span key={fact} className="flex items-center gap-2 text-[10px] leading-4 text-[#46554b] sm:text-[11px]"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f1ede5] text-[#a17f49]">{index === 0 ? <BookOpen size={11} /> : index === 1 ? <Languages size={11} /> : index === 2 ? <Presentation size={11} /> : <Check size={11} />}</span>{fact}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="chapters" className="scroll-mt-24 bg-[#fcfbf8] px-5 py-16 md:px-8 md:py-20"><div className="mx-auto max-w-[1320px]"><div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="mb-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#a58658]">{text.structureLabel}</p><h2 className="font-display text-3xl font-medium tracking-tight text-[#10251d] md:text-4xl">{text.chaptersTitle}</h2></div><p className="max-w-lg text-sm leading-6 text-[#72766e]">{text.chaptersIntro} {locale === 'fr' ? 'Environ 115 pages au total.' : 'Approximately 115 pages in total.'}</p></div><div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">{REVENUE_PRODUCT_CHAPTERS.map((chapter) => <article key={chapter.number} className={`relative flex min-h-[92px] flex-col justify-between rounded-[18px] border bg-white p-4 sm:p-5 ${chapter.number === '02' ? 'border-[#c7a76e] shadow-[0_5px_18px_rgba(40,35,24,.05)]' : 'border-[#ece6dc]'}`}><span className="font-display text-xl text-[#b89760]">{chapter.number}</span><h3 className="mt-2 text-sm font-semibold leading-5 text-[#26392e]">{chapter.title[locale]}</h3></article>)}</div></div></section>

      <section className="border-y border-[#e8e2d7] bg-[#f1ede5] px-5 py-14 md:px-8 md:py-18"><div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><h2 className="font-display text-3xl font-medium text-[#10251d] md:text-4xl">{text.aboutTitle}</h2><p className="mt-5 text-sm leading-7 text-[#687169]">{text.aboutText}</p></div><div className="rounded-[22px] border border-[#e4dac8] bg-white p-6 sm:p-8"><h3 className="font-display text-2xl text-[#10251d]">{text.scopeTitle}</h3><ul className="mt-5 grid gap-4 sm:grid-cols-2">{text.scope.map((item) => <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-[#46554b]"><Check size={16} className="mt-1 shrink-0 text-[#a58658]" />{item}</li>)}</ul></div></div></section>

      <section className="bg-[#fcfbf8] px-5 py-14 md:px-8"><div className="mx-auto max-w-[1320px]"><h2 className="font-display text-2xl font-medium text-[#10251d] md:text-3xl">{text.relatedTitle}</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-[#687169]">{text.relatedText}</p><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{revenueManagementDrafts.map((article) => <Link key={article.slug} href={`/${locale}/blog/${article.slug}`} className="flex items-center justify-between gap-3 rounded-[17px] border border-[#e8e2d7] bg-white px-5 py-4 text-sm font-medium text-[#26392e] transition hover:border-[#c7a76e]">{article[locale].title}<ArrowRight size={15} className="shrink-0 text-[#a58658]" /></Link>)}</div></div></section>

      <section className="bg-[#fcfbf8] px-5 pb-16 pt-3 md:px-8"><div className="mx-auto max-w-4xl"><h2 className="mb-4 font-display text-2xl font-semibold tracking-tight text-[#0f211a] md:text-3xl">{text.faqTitle}</h2><div className="space-y-2">{text.faqs.map((item) => <details key={item.q} className="group rounded-2xl border border-[#e8e2d7] bg-white/70 px-4 py-3"><summary className="cursor-pointer text-xs font-semibold text-[#0f211a] md:text-[13px]">{item.q}</summary><p className="mt-3 text-xs leading-6 text-[#687169] md:text-[13px]">{item.a}</p></details>)}</div></div></section>
    </main>
  )
}
