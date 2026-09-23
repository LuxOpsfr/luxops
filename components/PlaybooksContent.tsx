'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  PackageCheck,
  ShieldCheck,
} from 'lucide-react'
import AddToCartButton from '@/components/AddToCartButton'
import ProductPreviewCarousel from '@/components/ProductPreviewCarousel'
import SamePageAnchor from '@/components/SamePageAnchor'
import { PLAYBOOKS, BUNDLE_PRICE_ID } from '@/content/playbooks/data'
import { STARTER_PACKS } from '@/content/starter-packs/data'
import { useCurrency } from '@/context/CurrencyContext'
import { toActiveLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import { formatCurrencyAmount } from '@/lib/pricing'
import { localizedRoutePath } from '@/lib/localized-routes'

type PlaybooksPageCopy = {
  heroEyebrow: string
  heroTitle: string
  heroText: string
  heroPrimary: (price: string) => string
  heroSecondary: (price: string) => string
  freeChapter: string
  heroProof: string[]
  heroNote: string
  heroPreviewLabel: string
  heroPagesLabel: string
  starterLabel: string
  starterTitle: string
  starterText: string
  starterValueProps: string[]
  playbooksLabel: string
  playbooksTitle: string
  playbooksText: string
  allFilter: string
  playbookValueProps: string[]
  credibilityLabel: string
  credibilityTitle: string
  credibilityText: string[]
  addedLabel: string
  addStarterPack: (price: string) => string
  addPlaybook: (price: string) => string
  viewDetails: string
  priceIdNeeded: string
  bundleLabel: string
  bundleTitle: string
  bundleText: string
  bundleFeatures: string[]
  bundlePriceLabel: string
  savings: (price: string) => string
  bundleCartTitle: string
  bundleCta: (price: string) => string
  scenariosLabel: string
  scenariosTitle: string
  scenarios: { title: string; text: string }[]
  trainingLabel: string
  trainingTitle: string
  trainingText: string
  trainingCta: string
}

const pageCopy = {
  en: {
    heroEyebrow: 'Hotel SOP manuals & operational tools',
    heroTitle: 'Ready-to-use hotel standards, without the blank page.',
    heroText:
      'LuxOps SOP manuals give managers the procedures, service scripts, checklists and training support they need to align teams faster and reduce improvisation on the floor.',
    heroPrimary: (price: string) => `Explore SOP Manuals · ${price}`,
    heroSecondary: (price: string) => `Explore Starter Packs · ${price}`,
    freeChapter: 'Preview a free chapter',
    heroProof: ['PDF + editable PowerPoint', 'English and French included', 'Instant download', 'Built for daily operations'],
    heroNote: 'A practical base your managers can adapt to the language, tools and service identity of your property.',
    heroPreviewLabel: 'Front Office sample preview',
    heroPagesLabel: 'pages',
    starterLabel: 'Start fast',
    starterTitle: 'Starter packs for immediate operational wins.',
    starterText:
      'Use these when a team needs practical tools now: checklists, scripts, handover templates and control sheets that managers can adapt in minutes.',
    starterValueProps: ['Practical templates', 'PDF + PPTX', 'FR & EN included'],
    playbooksLabel: 'Full department SOP manuals',
    playbooksTitle: 'A complete operating reference for each department.',
    playbooksText:
      'Each full playbook gives the department a structured reference: service sequences, SOPs, scripts, manager checkpoints and training material.',
    allFilter: 'All',
    playbookValueProps: ['Complete SOP reference', 'PDF + PowerPoint', 'FR & EN included'],
    credibilityLabel: 'Built from operational experience',
    credibilityTitle: 'A practical starting point shaped by 15 years on the floor.',
    credibilityText: [
      'LuxOps manuals are independently authored from experience designing, implementing, training and refining procedures in luxury hotel operations. That experience includes working with demanding quality frameworks such as LQA, Forbes Travel Guide and American Express Fine Hotels + Resorts program expectations.',
      'Each manual is deliberately structured as a neutral, editable base that can be adapted to your property, brand standards, systems and local requirements.',
    ],
    addedLabel: 'In Cart',
    addStarterPack: (price: string) => `Add to cart · ${price}`,
    addPlaybook: (price: string) => `Add to cart · ${price}`,
    viewDetails: 'View details',
    priceIdNeeded: 'Price ID needed',
    bundleLabel: 'Best value',
    bundleTitle: 'Build one shared operating base across the hotel.',
    bundleText:
      'The complete bundle brings Front Office, Housekeeping, F&B and Spa into one coherent standard library for managers and teams.',
    bundleFeatures: ['4 department playbooks', 'PDF + PowerPoint', 'FR & EN included'],
    bundlePriceLabel: 'Bundle price',
    savings: (price: string) => `Save ${price} when purchased together`,
    bundleCartTitle: 'Complete Bundle · All 4 Playbooks',
    bundleCta: (price: string) => `Get the bundle · ${price}`,
    scenariosLabel: 'Where they fit',
    scenariosTitle: 'Useful when standards need to become visible, not theoretical.',
    scenarios: [
      {
        title: 'New manager',
        text: 'Give the department a clear base instead of rebuilding procedures from memory.',
      },
      {
        title: 'Seasonal team',
        text: 'Onboard faster with checklists, scripts and shared operating expectations.',
      },
      {
        title: 'Uneven execution',
        text: 'Help managers observe the same control points and correct gaps consistently.',
      },
      {
        title: 'Pre-opening',
        text: 'Start with a mature operating structure before adapting it to the property.',
      },
    ],
    trainingLabel: 'Operational training',
    trainingTitle: 'Bought the standards. Need help putting them into practice?',
    trainingText:
      'On-site or remote training helps managers and teams understand, adapt and apply the standards in daily operations.',
    trainingCta: 'Explore training',
  },
  fr: {
    heroEyebrow: 'Manuels SOP & outils opérationnels',
    heroTitle: 'Des standards hôteliers prêts à déployer, sans repartir de zéro.',
    heroText:
      'Les manuels SOP LuxOps donnent aux managers des procédures, des scripts, des checklists et des supports de formation pour aligner les équipes plus vite et réduire l’improvisation sur le terrain.',
    heroPrimary: (price: string) => `Découvrir les manuels SOP · ${price}`,
    heroSecondary: (price: string) => `Découvrir les Starter Packs · ${price}`,
    freeChapter: 'Consulter un chapitre gratuit',
    heroProof: ['PDF + PowerPoint modifiable', 'Français et anglais inclus', 'Téléchargement immédiat', 'Conçu pour l’exploitation'],
    heroNote: 'Une base pratique que vos managers peuvent adapter au vocabulaire, aux outils et à l’identité de service de votre établissement.',
    heroPreviewLabel: 'Aperçu Front Office',
    heroPagesLabel: 'pages',
    starterLabel: 'Démarrer vite',
    starterTitle: 'Des starter packs pour gagner immédiatement en structure.',
    starterText:
      'À utiliser lorsqu’une équipe a besoin d’outils concrets tout de suite : checklists, scripts, templates de passation et feuilles de contrôle adaptables en quelques minutes.',
    starterValueProps: ['Templates pratiques', 'PDF + PPTX', 'FR & EN inclus'],
    playbooksLabel: 'Manuels SOP complets par département',
    playbooksTitle: 'Un référentiel opérationnel complet pour chaque métier.',
    playbooksText:
      'Chaque playbook complet donne au département une référence structurée : séquences de service, SOPs, scripts, points de contrôle manager et supports de formation.',
    allFilter: 'Tous',
    playbookValueProps: ['Référence SOP complète', 'PDF + PowerPoint', 'FR & EN inclus'],
    credibilityLabel: 'Issu de l’expérience terrain',
    credibilityTitle: 'Une base opérationnelle façonnée par 15 années de terrain.',
    credibilityText: [
      'Les manuels LuxOps sont rédigés de manière indépendante à partir de l’expérience acquise dans la conception, le déploiement, la formation et l’amélioration de procédures en hôtellerie haut de gamme. Cette expérience comprend le travail avec des référentiels de qualité exigeants tels que LQA, Forbes Travel Guide et les attentes du programme American Express Fine Hotels + Resorts.',
      'Chaque manuel constitue volontairement une base neutre et modifiable, conçue pour être adaptée à votre établissement, à vos standards de marque, à vos outils et à vos contraintes locales.',
    ],
    addedLabel: 'Ajouté',
    addStarterPack: (price: string) => `Ajouter au panier · ${price}`,
    addPlaybook: (price: string) => `Ajouter au panier · ${price}`,
    viewDetails: 'Voir les détails',
    priceIdNeeded: 'Price ID requis',
    bundleLabel: 'Les quatre départements réunis',
    bundleTitle: 'Créer une base opérationnelle commune dans tout l’hôtel.',
    bundleText:
      'Le bundle complet réunit Front Office, Housekeeping, F&B et Spa dans une bibliothèque de standards cohérente pour les managers et les équipes.',
    bundleFeatures: ['4 playbooks département', 'PDF + PowerPoint', 'FR & EN inclus'],
    bundlePriceLabel: 'Prix de l’ensemble',
    savings: (price: string) => `Économisez ${price} en achetant l’ensemble`,
    bundleCartTitle: 'Bundle Complet · 4 Playbooks',
    bundleCta: (price: string) => `Ajouter les 4 manuels au panier · ${price}`,
    scenariosLabel: 'Cas d’usage',
    scenariosTitle: 'Utile lorsque les standards doivent devenir visibles, pas théoriques.',
    scenarios: [
      {
        title: 'Nouveau manager',
        text: 'Donner au département une base claire au lieu de reconstruire les procédures de mémoire.',
      },
      {
        title: 'Équipe saisonnière',
        text: 'Accélérer l’intégration avec des checklists, scripts et attentes opérationnelles communes.',
      },
      {
        title: 'Exécution irrégulière',
        text: 'Aider les managers à observer les mêmes points de contrôle et à corriger les écarts.',
      },
      {
        title: 'Pré-ouverture',
        text: 'Partir d’une structure mature avant de l’adapter à l’établissement.',
      },
    ],
    trainingLabel: 'Formation opérationnelle',
    trainingTitle: 'Vos standards sont prêts. Comment les faire vivre sur le terrain ?',
    trainingText:
      'Sur site ou à distance, la formation aide vos managers et vos équipes à comprendre, adapter et appliquer les standards au quotidien.',
    trainingCta: 'Découvrir la formation',
  },
} satisfies Partial<Record<Locale, PlaybooksPageCopy>>

const playbookListingEs = {
  fo: {
    title: 'Playbook Front Office',
    dept: 'Front Office',
    desc:
      'Secuencias de servicio, comunicación con huéspedes, gestión de quejas, upselling, night audit y la estructura procedural que mantiene una recepción consistente en cada turno.',
    highlights: [
      'SOPs de check-in/check-out',
      'Plantillas de comunicación con huéspedes',
      'Técnicas de upselling',
    ],
  },
  hsk: {
    title: 'Playbook Housekeeping',
    dept: 'Housekeeping',
    desc:
      'Checklists de inspección de habitaciones, gestión de ropa blanca y productos, protocolos de limpieza y estándares de control de calidad.',
    highlights: [
      'Checklists de inspección',
      'SOPs de gestión de ropa blanca',
      'Control de calidad',
    ],
  },
  fb: {
    title: 'Playbook F&B',
    dept: 'Food & Beverage',
    desc:
      'Secuencias y estándares de servicio para restaurante, bar, desayuno y room service, con un marco procedural claro para cada interacción.',
    highlights: [
      'Estándares de restaurante',
      'Operaciones de bar',
      'Room service',
    ],
  },
  spa: {
    title: 'Playbook Spa & Wellness',
    dept: 'Spa & Wellness',
    desc:
      'Protocolos de tratamientos, estándares del recorrido del huésped, conducta de terapeutas, retail y gestión de reservas.',
    highlights: [
      'Protocolos de tratamientos',
      'Preparación de salas',
      'Guest journey',
    ],
  },
}

const starterPackListingEs = {
  'fo-starter-pack': {
    category: 'Front Office',
    shortTitle: 'Starter Pack Front Office',
    description:
      'Checklists de recepción, plantillas de handover y herramientas de comunicación con huéspedes listas para usar.',
    bullets: ['SOPs de check-in / check-out', 'Plantilla de handover', 'Scripts de comunicación'],
  },
  'hsk-starter-pack': {
    category: 'Housekeeping',
    shortTitle: 'Kit de inspección Housekeeping',
    description:
      'Checklists de inspección de habitaciones, hojas de control y herramientas de seguimiento listas para usar.',
    bullets: ['Checklists de inspección', 'Hoja de control', 'Seguimiento de defectos'],
  },
  'fb-starter-pack': {
    category: 'Food & Beverage',
    shortTitle: 'Starter Pack F&B',
    description:
      'Checklists, scripts et plantillas de servicio F&B para restaurante, bar y room service.',
    bullets: ['Secuencias de servicio', 'Briefing y mise en place', 'Service recovery'],
  },
}

export default function PlaybooksContent({ locale }: { locale: string }) {
  const activeLocale = toActiveLocale(locale)
  const copy = pageCopy[activeLocale as keyof typeof pageCopy] ?? pageCopy.en
  const lang = activeLocale === 'fr' ? 'fr' : 'en'
  const detailLocale = activeLocale === 'fr' ? 'fr' : 'en'
  const { currency, priceFor, formatProductPrice } = useCurrency()
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const detailPlaybooksHref = localizedRoutePath('playbooks', detailLocale)
  const freeChapterHref = localizedRoutePath('freeHotelProcedures', activeLocale)
  const bundleSavings = formatCurrencyAmount(priceFor('playbook') * 4 - priceFor('bundle'), currency, locale)
  const starterPacksForDisplay = [...STARTER_PACKS].sort((a, b) => {
    if (a.id === 'fb-starter-pack') return -1
    if (b.id === 'fb-starter-pack') return 1
    return 0
  })
  const categories = [
    { key: 'all', label: copy.allFilter },
    { key: 'fo', label: 'Front Office' },
    { key: 'hsk', label: 'Housekeeping' },
    { key: 'fb', label: 'F&B' },
    { key: 'spa', label: 'Spa & Wellness' },
  ]
  const filteredPlaybooks =
    activeFilter === 'all' ? PLAYBOOKS : PLAYBOOKS.filter((playbook) => playbook.id === activeFilter)

  return (
    <div className="flex flex-col bg-[#f5f1e9] pt-[var(--site-header-height)] text-[#20231f]">
      <section className="subpage-hero-viewport grid border-b border-[rgba(32,35,31,0.14)] lg:grid-cols-[54%_46%]">
        <div className="flex flex-col justify-center px-6 py-12 md:px-16 lg:px-12 lg:py-6 xl:px-16 2xl:px-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">
            {copy.heroEyebrow}
          </p>
          <h1 className="max-w-[670px] font-display text-[2.35rem] font-medium leading-[1.04] text-[#0f211a] md:text-[2.7rem] xl:text-[3rem] 2xl:text-[3.35rem]">
            {copy.heroTitle}
          </h1>
          <p className="mt-4 max-w-[610px] text-base leading-7 text-[#5d665f] xl:text-lg xl:leading-8">
            {copy.heroText}
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <SamePageAnchor
              href="#department-playbooks"
              className="inline-flex items-center justify-center gap-2 bg-[#0f211a] px-6 py-3.5 text-sm font-semibold text-[#f5f1e9] transition-colors hover:bg-[#24362f]"
            >
              {copy.heroPrimary(formatProductPrice('playbook'))}
              <ArrowRight size={16} strokeWidth={1.5} />
            </SamePageAnchor>
            <SamePageAnchor
              href="#starter-packs"
              className="inline-flex items-center justify-center border border-[#24362f] px-6 py-3.5 text-sm font-semibold text-[#24362f] transition-colors hover:bg-[#e7e0d5]"
            >
              {copy.heroSecondary(formatProductPrice('starter_pack'))}
            </SamePageAnchor>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              <SamePageAnchor href="#bundle" className="inline-flex items-center gap-1 border-b border-[#24362f] py-2 text-sm font-semibold text-[#24362f]">
                {lang === 'fr' ? `Bundle 4 manuels · ${formatProductPrice('bundle')}` : `Four-manual bundle · ${formatProductPrice('bundle')}`}
                <ArrowRight size={14} strokeWidth={1.5} />
              </SamePageAnchor>
              <Link
                href={freeChapterHref}
                className="inline-flex items-center gap-1 border-b border-[#24362f] py-2 text-sm font-semibold text-[#24362f] hover:text-[#0f211a]"
              >
                {copy.freeChapter}<ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
          <div className="mt-5 grid max-w-[640px] grid-cols-2 gap-x-5 gap-y-2 border-y border-[rgba(32,35,31,0.14)] py-3 lg:grid-cols-4">
            {copy.heroProof.map((item) => (
              <div key={item} className="flex gap-2 text-[0.7rem] font-semibold leading-4 text-[#24362f]">
                <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0 text-[#a58658]" strokeWidth={1.7} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[500px] items-center justify-center overflow-hidden bg-[#e7e0d5] px-6 py-8 md:px-12">
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#a58658 0.55px, transparent 0.55px)', backgroundSize: '24px 24px' }} />
          <div className="relative grid w-full max-w-[680px] gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div className="border-y border-[rgba(32,35,31,0.18)] py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">
                {copy.heroPreviewLabel}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div><p className="font-display text-[2.8rem] leading-none text-[#0f211a]">12</p><p className="mt-2 text-xs font-semibold uppercase text-[#3d4a41]">{lang === 'fr' ? 'chapitres' : 'chapters'}</p></div>
                <div><p className="font-display text-[2.8rem] leading-none text-[#0f211a]">250</p><p className="mt-2 text-xs font-semibold uppercase text-[#3d4a41]">{copy.heroPagesLabel}</p></div>
              </div>
              <p className="mt-6 text-sm leading-7 text-[#5d665f]">
                {copy.heroNote}
              </p>
            </div>
            <ProductPreviewCarousel productId="fo" locale={locale} variant="compactHero" />
          </div>
        </div>
      </section>

      <section id="starter-packs" className="order-4 scroll-mt-24 border-t border-[rgba(32,35,31,0.14)] px-6 py-12 md:px-16 md:py-14">
        <div className="mx-auto max-w-[1680px]">
          <div className="mb-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">
                {copy.starterLabel}
              </p>
              <h2 className="font-display text-[2rem] font-medium leading-[1.08] text-[#0f211a] md:text-[2.5rem]">
                {copy.starterTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5d665f]">
                {copy.starterText}
              </p>
            </div>
            <SamePageAnchor
              href="#bundle"
              className="inline-flex w-fit items-center gap-2 border-b border-[#24362f] pb-1 text-sm font-semibold text-[#24362f]"
            >
              {copy.bundleTitle}
              <ArrowRight size={15} strokeWidth={1.5} />
            </SamePageAnchor>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {starterPacksForDisplay.map((pack) => {
              const isPurchasable = Boolean(pack.priceId)
              const esListing = activeLocale === 'es' ? starterPackListingEs[pack.id] : undefined
              const packCategory = esListing?.category ?? pack.category[lang]
              const packTitle = esListing?.shortTitle ?? pack.shortTitle[lang]
              const packDescription = esListing?.description ?? pack.description[lang]
              const packBullets = esListing?.bullets ?? pack.bullets[lang]

              return (
                <article key={pack.id} className="group flex flex-col border border-[rgba(32,35,31,0.14)] bg-[#fcfbf8]">
                  <Link href={`${detailPlaybooksHref}/${pack.id}`} className="block">
                    <div className="relative aspect-[16/6] overflow-hidden border-b border-[rgba(32,35,31,0.14)]">
                      <ProductPreviewCarousel productId={pack.id} locale={locale} variant="card" />
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#a58658]">
                        {packCategory}
                      </p>
                      <p className="font-display text-3xl font-medium text-[#0f211a]">
                        {formatProductPrice('starter_pack')}
                      </p>
                    </div>
                    <h3 className="mt-5 min-h-[3.6rem] font-display text-[1.45rem] font-medium leading-[1.1] text-[#0f211a]">
                      {packTitle}
                    </h3>
                    <p className="mt-4 min-h-[5.6rem] text-sm leading-7 text-[#5d665f]">
                      {packDescription}
                    </p>
                    <div className="mt-5 space-y-3 border-y border-[rgba(32,35,31,0.12)] py-5">
                      {[...copy.starterValueProps, ...packBullets].slice(0, 3).map((item) => (
                        <div key={item} className="flex gap-3 text-sm text-[#24362f]">
                          <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-[#a58658]" strokeWidth={1.7} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 grid gap-3">
                      {isPurchasable ? (
                        <AddToCartButton
                          item={{
                            priceId: pack.priceId,
                            title: packTitle,
                            price: priceFor('starter_pack'),
                            currency,
                            productType: 'starter_pack',
                          }}
                          addedLabel={copy.addedLabel}
                          className="inline-flex w-full items-center justify-center gap-2 bg-[#0f211a] px-5 py-3.5 text-sm font-semibold text-[#f5f1e9] transition-colors hover:bg-[#24362f]"
                        >
                          {copy.addStarterPack(formatProductPrice('starter_pack'))}
                        </AddToCartButton>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="inline-flex w-full cursor-not-allowed items-center justify-center bg-[#9da99e] px-5 py-3.5 text-sm font-semibold text-[#f5f1e9]"
                        >
                          {copy.priceIdNeeded}
                        </button>
                      )}
                      <Link
                        href={`${detailPlaybooksHref}/${pack.id}`}
                        className="inline-flex w-full items-center justify-center gap-2 border border-[#24362f] px-5 py-3.5 text-sm font-semibold text-[#24362f] transition-colors hover:bg-[#e7e0d5]"
                      >
                        {copy.viewDetails}
                        <ChevronRight size={15} strokeWidth={1.5} />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="department-playbooks" className="order-1 scroll-mt-24 border-y border-[rgba(32,35,31,0.14)] bg-[#e7e0d5] px-6 py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-[1680px]">
          <div className="mb-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">
                {copy.playbooksLabel}
              </p>
              <h2 className="font-display text-[2.35rem] font-medium leading-[1.08] text-[#0f211a] md:text-[3.25rem]">
                {copy.playbooksTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5d665f]">
                {copy.playbooksText}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => setActiveFilter(category.key)}
                  className={`border px-4 py-2 text-sm font-semibold transition-colors ${
                    activeFilter === category.key
                      ? 'border-[#0f211a] bg-[#0f211a] text-[#f5f1e9]'
                      : 'border-[rgba(36,54,47,0.24)] text-[#24362f] hover:bg-[#f5f1e9]'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {filteredPlaybooks.map((playbook) => {
              const esListing = activeLocale === 'es' ? playbookListingEs[playbook.id] : undefined
              const playbookTitle = esListing?.title ?? playbook.title[lang]
              const playbookDept = esListing?.dept ?? playbook.dept[lang]
              const playbookDesc = esListing?.desc ?? playbook.desc[lang]
              const playbookHighlights = esListing?.highlights ?? playbook.highlights[lang]

              return (
                <article key={playbook.id} className="group flex h-full flex-col border border-[rgba(32,35,31,0.14)] bg-[#fcfbf8]">
                  <Link href={`${detailPlaybooksHref}/${playbook.id}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-[rgba(32,35,31,0.14)]">
                      <ProductPreviewCarousel productId={playbook.id} locale={locale} variant="card" />
                      {playbook.id === 'hsk' && <span className="absolute left-4 top-4 bg-[#0f211a] px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white">{lang === 'fr' ? 'Top vente' : 'Best seller'}</span>}
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#a58658]">
                        {playbookDept}
                      </p>
                      <p className="font-display text-3xl font-medium text-[#0f211a]">
                        {formatProductPrice('playbook')}
                      </p>
                    </div>
                    <h3 className="mt-5 min-h-[3.5rem] font-display text-[1.55rem] font-medium leading-[1.1] text-[#0f211a]">
                      {playbookTitle}
                    </h3>
                    <p className="mt-4 min-h-[5.4rem] flex-1 text-sm leading-6 text-[#5d665f]">
                      {playbookDesc}
                    </p>
                    <div className="mt-5 space-y-3 border-y border-[rgba(32,35,31,0.12)] py-5">
                      {[...copy.playbookValueProps.slice(0, 1), ...playbookHighlights.slice(0, 2)].map((item) => (
                        <div key={item} className="flex gap-3 text-sm text-[#24362f]">
                          <PackageCheck size={16} className="mt-0.5 flex-shrink-0 text-[#a58658]" strokeWidth={1.7} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto grid gap-3 pt-6">
                      <AddToCartButton
                        item={{
                          priceId: playbook.priceId,
                          title: playbookTitle,
                          price: priceFor('playbook'),
                          currency,
                          productType: 'playbook',
                        }}
                        addedLabel={copy.addedLabel}
                        className="inline-flex w-full items-center justify-center gap-2 bg-[#0f211a] px-5 py-3.5 text-sm font-semibold text-[#f5f1e9] transition-colors hover:bg-[#24362f]"
                      >
                        {copy.addPlaybook(formatProductPrice('playbook'))}
                      </AddToCartButton>
                      <Link
                        href={`${detailPlaybooksHref}/${playbook.id}`}
                        className="inline-flex w-full items-center justify-center gap-2 border border-[#24362f] px-5 py-3.5 text-sm font-semibold text-[#24362f] transition-colors hover:bg-[#f5f1e9]"
                      >
                        {copy.viewDetails}
                        <ChevronRight size={15} strokeWidth={1.5} />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="order-2 border-b border-[rgba(32,35,31,0.14)] bg-[#fcfbf8] px-6 py-11 md:px-16 md:py-12">
        <div className="mx-auto grid max-w-[1380px] gap-7 md:grid-cols-[0.72fr_1.28fr] md:gap-12 lg:grid-cols-[0.6fr_1.4fr] lg:items-start">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#a58658]">
              {copy.credibilityLabel}
            </p>
            <h2 className="mt-4 max-w-lg font-display text-[1.8rem] font-medium leading-[1.12] text-[#0f211a] md:text-[2.1rem]">
              {copy.credibilityTitle}
            </h2>
          </div>
          <div className="max-w-3xl space-y-3 text-sm leading-7 text-[#5d665f] md:text-base">
            {copy.credibilityText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section id="bundle" className="order-3 scroll-mt-24 px-6 py-16 md:px-16 md:py-20">
        <div className="mx-auto grid max-w-[1380px] border border-[rgba(32,35,31,0.14)] bg-[#fcfbf8] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="p-8 md:p-12">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">
              {copy.bundleLabel}
            </p>
            <h2 className="max-w-3xl font-display text-[2.35rem] font-medium leading-[1.08] text-[#0f211a] md:text-[3.25rem]">
              {copy.bundleTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5d665f]">
              {copy.bundleText}
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {copy.bundleFeatures.map((feature) => (
                <div key={feature} className="border-t border-[rgba(32,35,31,0.14)] pt-5">
                  <ShieldCheck size={20} className="mb-4 text-[#a58658]" strokeWidth={1.6} />
                  <p className="text-sm font-semibold text-[#24362f]">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between bg-[#0f211a] p-8 text-[#f5f1e9] md:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[rgba(245,241,233,0.6)]">
                {copy.bundlePriceLabel}
              </p>
              <div className="mt-7 flex flex-wrap items-end gap-4">
                <span className="font-display text-[4rem] font-medium leading-none">
                  {formatProductPrice('bundle')}
                </span>
                <span className="pb-2 text-sm text-[rgba(245,241,233,0.66)]">
                  {copy.savings(bundleSavings)}
                </span>
              </div>
            </div>
            <AddToCartButton
              item={{
                priceId: BUNDLE_PRICE_ID,
                title: copy.bundleCartTitle,
                price: priceFor('bundle'),
                currency,
                productType: 'bundle',
              }}
              addedLabel={copy.addedLabel}
              className="mt-10 inline-flex w-full items-center justify-center bg-[#f5f1e9] px-6 py-4 text-sm font-semibold text-[#0f211a] transition-colors hover:bg-[#fcfbf8]"
            >
              {copy.bundleCta(formatProductPrice('bundle'))}
            </AddToCartButton>
          </div>
        </div>
      </section>

      <section className="order-5 border-y border-[rgba(32,35,31,0.14)] bg-[#fcfbf8] px-6 py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-[1680px]">
          <div className="mb-10 max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">
              {copy.scenariosLabel}
            </p>
            <h2 className="font-display text-[2.35rem] font-medium leading-[1.08] text-[#0f211a] md:text-[3.25rem]">
              {copy.scenariosTitle}
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {copy.scenarios.map((scenario, index) => (
              <div key={scenario.title} className="border-t border-[rgba(32,35,31,0.16)] pt-6">
                <p className="font-display text-5xl italic text-[rgba(15,33,26,0.18)]">
                  {String(index + 1).padStart(2, '0')}.
                </p>
                <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#24362f]">
                  {scenario.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5d665f]">
                  {scenario.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="order-6 bg-[#0f211a] px-6 py-16 text-[#f5f1e9] md:px-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">
              {copy.trainingLabel}
            </p>
            <h2 className="font-display text-[2.25rem] font-medium leading-[1.1] md:text-[3rem]">
              {copy.trainingTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[rgba(245,241,233,0.72)]">
              {copy.trainingText}
            </p>
            <Link
              href={localizedRoutePath('training', activeLocale)}
              className="mt-9 inline-flex items-center gap-2 border-b border-[#f5f1e9] pb-1 text-sm font-semibold text-[#f5f1e9]"
            >
              {copy.trainingCta}
              <ArrowRight size={15} strokeWidth={1.5} />
            </Link>
          </div>
      </section>
    </div>
  )
}
