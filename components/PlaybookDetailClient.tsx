'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Check, ChevronDown, Download, FileText, Gift, Languages, Presentation, RefreshCw, ShoppingCart } from 'lucide-react'
import { BUNDLE_PRICE_ID, PlaybookEntry } from '@/content/playbooks/data'
import { getStarterPack } from '@/content/starter-packs/data'
import { useCart } from '@/context/CartContext'
import { useCurrency } from '@/context/CurrencyContext'
import TrackedLink from '@/components/TrackedLink'
import ProductPreviewCarousel from '@/components/ProductPreviewCarousel'
import HousekeepingProductProof from '@/components/HousekeepingProductProof'
import ProductCredibility from '@/components/ProductCredibility'
import FrontOfficeExcerptDialog from '@/components/FrontOfficeExcerptDialog'
import { ManualPracticeContent, ManualPromoGallery } from '@/components/ManualPracticeSection'
import posthog from 'posthog-js'

interface Stat {
  value: string
  label: { en: string; fr: string }
}

interface FaqItem {
  q: { en: string; fr: string }
  a: { en: string; fr: string }
}

interface Props {
  playbook: PlaybookEntry
  stats: Stat[]
  faq: FaqItem[]
  locale: string
}

const FRONT_OFFICE_CHAPTER_DESCRIPTIONS = {
  fr: [
    'Objectif du manuel, structure et conseils d’utilisation.',
    'Parcours d’arrivée, accueil VIP, attribution des chambres et attentions en chambre.',
    'Départ, vérification du folio, check-out express, départ tardif et bagages.',
    'Contact avant l’arrivée, messages pendant le séjour, réclamations et service recovery.',
    'Surclassements, revenus annexes, scripts de vente et suivi des résultats.',
    'Opérations PMS, gestion des canaux, paiements, packages tiers et pannes système.',
    'Clôture de journée, rapprochements, rapports et opérations nocturnes.',
    'Organisation, intégration, formation et développement de l’équipe.',
    'Incendie, évacuation, urgences médicales ou techniques et gestion de crise.',
    'Standards de service, comportements relationnels, suivi qualité et amélioration continue.',
    'Réservations, transferts, colis, accueil VIP, facturation et passations de service.',
    'Accueil et départ, préparation des véhicules, stockage des bagages et checklists.',
  ],
  en: [
    'Purpose, structure and guidance on using the manual.',
    'Arrival workflows, VIP programmes, room assignment and in-room amenities.',
    'Departures, folio review, express checkout, late checkout and luggage handling.',
    'Pre-arrival contact, in-stay messaging, complaints and service recovery.',
    'Room upgrades, ancillary revenue, sales scripts and performance tracking.',
    'PMS operations, channel management, payments, third-party packages and system failures.',
    'End-of-day procedures, reconciliation, reports and overnight operations.',
    'Organisation, onboarding, training and team development.',
    'Fire, evacuation, medical or technical emergencies and crisis management.',
    'Service standards, interpersonal behaviours, quality monitoring and continuous improvement.',
    'Reservations, transfers, parcels, VIP service, billing and shift handovers.',
    'Arrivals and departures, vehicle preparation, luggage storage and checklists.',
  ],
}

export default function PlaybookDetailClient({ playbook: pb, stats, faq, locale }: Props) {
  const isEn = locale === 'en'
  const lang = locale as 'en' | 'fr'
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [selectedOffer, setSelectedOffer] = useState<'manual' | 'bundle'>('manual')
  const [showExcerpt, setShowExcerpt] = useState(false)
  const [excerptStartPage, setExcerptStartPage] = useState(1)
  const { addItem, items, openCart } = useCart()
  const { currency, priceFor, formatProductPrice } = useCurrency()
  const isEditorialManual = ['fo', 'hsk', 'fb', 'spa'].includes(pb.id)
  const starterPack = getStarterPack(`${pb.id}-starter-pack`)
  const includesStarterPack = Boolean(starterPack)
  const starterToolCount = starterPack?.tools[lang].length ?? 0
  const previewProductId = pb.id === 'fo' ? 'front-office' : pb.id
  const previewRoot = `/Previews/${previewProductId}-chapter${String(pb.previewChapter.number).padStart(2, '0')}/${lang}`
  const previewExtension = pb.id === 'fo' ? 'png' : 'jpg'
  const previewPages = [
    { page: '01', label: isEn ? 'Cover' : 'Couverture' },
    { page: '02', label: isEn ? 'Contents' : 'Sommaire' },
    { page: '07', label: isEn ? 'Procedure' : 'Procédure' },
    { page: '11', label: isEn ? 'Application' : 'Application' },
  ].map((page) => ({ ...page, src: `${previewRoot}/page-${page.page}.${previewExtension}` }))

  const inCart = items.some((i) => i.priceId === pb.priceId)
  const starterPackHref =
    pb.id === 'fo'
      ? `/${locale}/playbooks/fo-starter-pack`
      : pb.id === 'hsk'
        ? `/${locale}/playbooks/hsk-starter-pack`
        : pb.id === 'fb'
          ? `/${locale}/playbooks/fb-starter-pack`
          : null

  const handleAddToCart = () => {
    if (inCart) {
      openCart()
      return
    }
    addItem({
      priceId: pb.priceId,
      title: pb.title[lang],
      price: priceFor('playbook'),
      currency,
      productType: 'playbook',
    })
    posthog.capture('product_added_to_cart', {
      price_id: pb.priceId,
      title: pb.title[lang],
      price: priceFor('playbook'),
      currency,
      locale,
      product_type: 'playbook',
    })
    posthog.capture('playbook_added_to_cart', {
      price_id: pb.priceId,
      title: pb.title[lang],
      price: priceFor('playbook'),
      currency,
      locale,
      product_type: 'playbook',
    })
  }

  const handleAddBundle = () => {
    const price = priceFor('bundle')
    const title = isEn ? 'Complete Bundle · 5 SOP Manuals' : 'Bundle complet · 5 manuels SOP'
    const inBundleCart = items.some((item) => item.priceId === BUNDLE_PRICE_ID)
    if (inBundleCart) {
      openCart()
      return
    }
    addItem({ priceId: BUNDLE_PRICE_ID, title, price, currency, productType: 'bundle' })
    posthog.capture('product_added_to_cart', {
      price_id: BUNDLE_PRICE_ID,
      title,
      price,
      currency,
      locale,
      product_type: 'bundle',
    })
  }

  const chapters = pb.chapters[lang]
  const previewChapterIndex = pb.previewChapter.number - 1

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fcfbf8] pt-[var(--site-header-height)]">

      {/* Back link */}
      {!isEditorialManual && <div className="max-w-screen-xl mx-auto px-6 pt-8">
        <Link
          href={`/${locale}/playbooks`}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#687169] hover:text-[#0f211a] transition-colors"
        >
          <ArrowLeft size={14} />
          {isEn ? 'All SOP Manuals' : 'Tous les manuels SOP'}
        </Link>
      </div>}

      {/* Hero */}
      {isEditorialManual ? (
        <section className="relative px-5 pb-12 pt-5 md:px-7 md:pb-16 md:pt-6">
          <div className="relative mx-auto grid w-full items-start gap-7 lg:grid-cols-[1.05fr_.95fr] lg:gap-9">
            <div className="min-w-0 lg:sticky lg:top-24">
              <button type="button" onClick={() => { setExcerptStartPage(1); setShowExcerpt(true) }} aria-label={isEn ? 'Open the chapter sample' : 'Ouvrir l’extrait du chapitre'} className="fo-book-stage group relative flex w-full cursor-pointer flex-col items-center overflow-hidden rounded-[24px] border border-[#e8dece] px-5 pb-4 pt-9 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#b89760] focus-visible:ring-offset-4 sm:rounded-[28px] sm:px-7 sm:pb-5 sm:pt-10">
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-[#d8bd91]/30 bg-[#10251d] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[.08em] text-[#d8bd91] sm:left-5 sm:top-5 sm:px-3.5 sm:text-[10px]">
                  <BookOpen size={12} />{isEn ? 'Read a sample' : 'Feuilleter un extrait'}
                </span>
                <span className="absolute right-4 top-4 rounded-full border border-[#24362f]/15 bg-white/70 px-3 py-1.5 text-[9px] font-semibold text-[#24362f] sm:right-5 sm:top-5 sm:px-3.5 sm:text-[10px]">
                  {isEn ? 'Chapter' : 'Chapitre'} {String(pb.previewChapter.number).padStart(2, '0')}
                </span>
                <span className="relative my-2.5 block h-[260px] w-[185px] [perspective:1200px] sm:h-[315px] sm:w-[224px] lg:h-[385px] lg:w-[274px]">
                  <span aria-hidden="true" className="fo-book-pages absolute -right-2.5 top-2 h-[96%] w-[calc(100%+10px)] rounded-r-[9px]" />
                  <span className="fo-book-cover absolute inset-0 block overflow-hidden rounded-[4px_9px_9px_4px] bg-[#10251d] shadow-[0_20px_34px_rgba(15,33,26,.2)]">
                    <Image src={previewPages[0].src} alt={`${isEn ? 'Chapter' : 'Chapitre'} ${String(pb.previewChapter.number).padStart(2, '0')} · ${pb.previewChapter.title[lang]}`} fill priority unoptimized sizes="(min-width: 1024px) 24vw, 55vw" className="object-cover" />
                    <span aria-hidden="true" className="fo-book-spine absolute inset-y-0 left-0 w-[7%]" />
                  </span>
                </span>
                <span className="preview-cta-chip inline-flex min-h-10 items-center gap-2 rounded-full border border-[#b89760] bg-[#10251d] px-4 text-[11px] font-semibold text-[#f5f1e9] shadow-[0_8px_18px_-4px_rgba(15,33,26,.35)] transition group-hover:bg-[#0f211a] sm:px-5 sm:text-xs">
                  <BookOpen size={14} className="text-[#d8bd91]" />{isEn ? `Read Chapter ${String(pb.previewChapter.number).padStart(2, '0')}` : `Lire le chapitre ${String(pb.previewChapter.number).padStart(2, '0')}`} <span aria-hidden="true">→</span>
                </span>
              </button>

              <div className="mt-3 flex flex-col gap-2.5 rounded-[18px] border border-[#e4dac8] bg-white/80 px-4 py-3.5 shadow-[0_5px_18px_rgba(45,39,28,.045)] sm:mt-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1ede5] text-[#927345]"><Download size={15} /></span>
                  <span>
                    <span className="block text-[11px] font-semibold text-[#273a30] sm:text-xs">{isEn ? `Download Chapter ${String(pb.previewChapter.number).padStart(2, '0')} in full` : `Télécharger le chapitre ${String(pb.previewChapter.number).padStart(2, '0')} complet`}</span>
                    <span className="mt-0.5 block text-[10px] leading-4 text-[#777970]">{pb.previewChapter.pages[lang]} {isEn ? 'pages · PDF · by email' : 'pages · PDF · par e-mail'}</span>
                  </span>
                </div>
                <button type="button" onClick={() => { setExcerptStartPage(12); setShowExcerpt(true) }} className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-[#10251d] px-4 text-[10px] font-semibold text-white shadow-[0_5px_14px_rgba(16,37,29,.12)] transition hover:-translate-y-0.5 hover:bg-[#263d31] sm:min-h-11 sm:px-5 sm:text-[11px]">
                  {isEn ? 'Get the complete PDF' : 'Recevoir le PDF complet'} <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>

            <div className="pt-1 lg:pt-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-full bg-[#e9e2d5] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.1em] text-[#293d31]">{isEn ? '2027 edition' : 'Édition 2027'}</span>
                <span className="text-xs text-[#72766e]">{pb.dept[lang]}</span>
              </div>
              <h1 className="mt-2.5 font-display text-[clamp(1.9rem,2.5vw,2.2rem)] font-medium leading-[1.12] tracking-[-.015em] text-[#10251d]">
                {pb.title[lang]}
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-[1.55] text-[#697169] md:text-[14px]">
                {pb.desc[lang]}
              </p>

              {includesStarterPack && starterPack && starterPackHref && <div id="included-tools" className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-[17px] border border-[#d6bd8e] bg-[#f5efe2] px-4 py-3 sm:flex-nowrap">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e4d0ab] text-[#493923]"><Gift size={20} /></span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#765a33]">{isEn ? `${starterToolCount} practical tools included` : `${starterToolCount} outils opérationnels inclus`}</p>
                  <p className="text-[11px] leading-5 text-[#344b3c] sm:text-xs">{isEn ? `${starterPack.subtitle.en} Included with your manual at no extra cost.` : `${starterPack.subtitle.fr} Inclus avec votre manuel, sans supplément.`}</p>
                </div>
                <TrackedLink href={starterPackHref} eventName="starter_pack_details_clicked" eventProperties={{ source_page: `/${locale}/playbooks/${pb.id}`, placement: 'manual_offer_bonus', product: starterPack.id }} className="shrink-0 text-xs font-semibold text-[#274433] underline decoration-[#b99b69] underline-offset-4 hover:text-[#10251d]">{isEn ? `Explore the ${starterToolCount} tools` : `Découvrir les ${starterToolCount} outils`} <span aria-hidden="true">→</span></TrackedLink>
              </div>}

              <div className="mt-3 space-y-2" role="radiogroup" aria-label={isEn ? 'Choose a product' : 'Choisir un produit'}>
                <article onClick={() => setSelectedOffer('manual')} className={`group/offer cursor-pointer rounded-[17px] border px-3.5 py-3 transition duration-200 hover:border-[#a58658] hover:shadow-[0_10px_24px_rgba(40,35,24,.1)] sm:px-4 sm:py-3.5 ${selectedOffer === 'manual' ? 'border-[#c7a76e] bg-white shadow-[0_6px_18px_rgba(40,35,24,.06)]' : 'border-[#e6e1d8] bg-white/85'}`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-2.5">
                      <button type="button" role="radio" aria-checked={selectedOffer === 'manual'} aria-label={pb.title[lang]} onClick={() => setSelectedOffer('manual')} className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#b89760] focus-visible:ring-offset-2"><span className={`flex h-4 w-4 items-center justify-center rounded-full border ${selectedOffer === 'manual' ? 'border-[#a58658]' : 'border-[#c9c4b9]'}`}>{selectedOffer === 'manual' && <span className="h-2 w-2 rounded-full bg-[#10251d]" />}</span></button>
                      <h2 className="truncate text-[12px] font-semibold text-[#25382d] sm:text-[13px]">{pb.title[lang]}</h2>
                    </div>
                    <span className="shrink-0 font-display text-lg font-semibold leading-none text-[#25382d] sm:text-xl">{formatProductPrice('playbook')} <small className="font-sans text-[9px] font-normal text-[#85867f]">TTC</small></span>
                  </div>
                  <p className="ml-[26px] mt-1 text-[10px] leading-[1.4] text-[#74766e] sm:text-[11px]">{includesStarterPack ? (isEn ? `${chapters.length} chapters · PDF and editable PowerPoint · ${starterToolCount} practical tools included.` : `${chapters.length} chapitres · PDF et PowerPoint modifiable · ${starterToolCount} outils inclus.`) : (isEn ? `Complete manual · ${chapters.length} chapters · PDF and editable PowerPoint.` : `Manuel complet · ${chapters.length} chapitres · PDF et PowerPoint modifiable.`)}</p>
                  <div className="ml-[26px] mt-2 flex items-center justify-between gap-3 border-t border-dashed border-[#e8e2d7] pt-2">
                    <span className="text-[9px] text-[#81827b]">{isEn ? 'Instant delivery' : 'Livraison instantanée'}</span>
                    <button type="button" onClick={handleAddToCart} className="inline-flex min-h-8 items-center gap-1.5 rounded-full bg-[#10251d] px-3.5 text-[10px] font-semibold text-white transition hover:bg-[#2a4335] sm:text-[11px]">
                      <ShoppingCart size={12} />{inCart ? (isEn ? 'Open cart' : 'Voir le panier') : (isEn ? 'Add to cart' : 'Ajouter au panier')}
                    </button>
                  </div>
                </article>

                <article onClick={() => setSelectedOffer('bundle')} className={`group/offer cursor-pointer rounded-[17px] border px-3.5 py-3 transition duration-200 hover:border-[#c7a76e] hover:shadow-[0_8px_20px_rgba(40,35,24,.08)] sm:px-4 sm:py-3.5 ${selectedOffer === 'bundle' ? 'border-[#c7a76e] bg-white shadow-[0_6px_18px_rgba(40,35,24,.06)]' : 'border-[#e6e1d8] bg-white/85'}`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-2.5"><button type="button" role="radio" aria-checked={selectedOffer === 'bundle'} aria-label={isEn ? 'Bundle · 5 SOP manuals' : 'Bundle · 5 manuels SOP'} onClick={() => setSelectedOffer('bundle')} className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#b89760] focus-visible:ring-offset-2"><span className={`flex h-4 w-4 items-center justify-center rounded-full border ${selectedOffer === 'bundle' ? 'border-[#a58658]' : 'border-[#c9c4b9]'}`}>{selectedOffer === 'bundle' && <span className="h-2 w-2 rounded-full bg-[#10251d]" />}</span></button><h2 className="truncate text-[12px] font-semibold text-[#25382d] sm:text-[13px]">{isEn ? 'Bundle · 5 SOP manuals' : 'Bundle · 5 manuels SOP'}</h2></div>
                    <span className="shrink-0 font-display text-lg font-semibold leading-none text-[#25382d] sm:text-xl">{formatProductPrice('bundle')} <small className="font-sans text-[9px] font-normal text-[#85867f]">TTC</small></span>
                  </div>
                  <p className="ml-[26px] mt-1 text-[10px] leading-[1.4] text-[#74766e] sm:text-[11px]">Front Office · Housekeeping · F&B · Spa · Revenue Management</p>
                  <p className="ml-[26px] mt-1 text-[10px] font-medium leading-[1.4] text-[#6b5738] sm:text-[11px]">{isEn ? '3 Starter Packs included: Front Office, Housekeeping and F&B.' : '3 Starter Packs inclus : Front Office, Housekeeping et F&B.'}</p>
                  <div className="ml-[26px] mt-2 flex items-center justify-between gap-3 border-t border-dashed border-[#e8e2d7] pt-2">
                    <span className="text-[9px] font-medium text-[#9a7948]">{isEn ? 'Same €199 price' : 'Tarif maintenu à 199 €'}</span>
                    <button type="button" onClick={handleAddBundle} className="inline-flex min-h-8 items-center gap-1.5 rounded-full border border-[#d8d2c7] bg-white px-3.5 text-[10px] font-semibold text-[#25382d] transition hover:border-[#10251d] hover:bg-[#f8f6f1] sm:text-[11px]">
                      <ShoppingCart size={12} />{items.some((item) => item.priceId === BUNDLE_PRICE_ID) ? (isEn ? 'Open cart' : 'Voir le panier') : (isEn ? 'Add' : 'Ajouter')}
                    </button>
                  </div>
                </article>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5 rounded-[15px] border border-[#e9e3d9] bg-white/55 px-3.5 py-2.5 sm:px-4">
                {[
                  isEn ? `${chapters.length} chapters · ${pb.pages}` : `${chapters.length} chapitres · ${pb.pages}`,
                  isEn ? 'PDF + editable PowerPoint' : 'PDF + PowerPoint modifiable',
                  isEn ? 'French & English included' : 'FR & EN inclus',
                  isEn ? 'Product revisions included while maintained' : 'Révisions incluses tant que le produit est maintenu',
                ].map((fact, index) => (
                  <span key={fact} className="flex items-center gap-2 text-[10px] leading-4 text-[#46554b] sm:text-[11px]">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f1ede5] text-[#a17f49]">{index === 1 ? <Presentation size={11} /> : index === 2 ? <Languages size={11} /> : <Check size={11} />}</span>{fact}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-center text-[9px] text-[#81827b]">{isEn ? 'Secure payment via Stripe' : 'Paiement sécurisé via Stripe'}</p>
            </div>
          </div>
        </section>
      ) : (
      <section
        className="relative py-14 md:py-24 px-5 md:px-6 overflow-hidden border-b"
        style={{
          backgroundImage: 'radial-gradient(rgba(165,134,88,0.22) 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
          borderColor: 'rgba(32,35,31,0.14)',
        }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          {/* Left */}
          <div className="flex-1 min-w-0 space-y-6 md:space-y-8 mt-4">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 text-[#0f211a] font-bold text-[10px] uppercase tracking-widest"
              style={{ backgroundColor: '#e7e0d5', borderRadius: '0.125rem' }}
            >
              <span className="w-2 h-2 bg-[#0f211a] rounded-full" />
              {pb.dept[lang]}
            </div>
            {pb.id === 'hsk' && (
              <span className="ml-2 inline-flex items-center border border-[#a58658] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#6c5535]">
                {isEn ? 'Best seller' : 'Top vente'}
              </span>
            )}

            <h1
              className="font-display text-[clamp(2.65rem,11vw,4.5rem)] lg:text-7xl font-extrabold tracking-tight md:tracking-tighter leading-[0.96] text-[#0f211a] max-w-full"
            >
              {pb.title[lang]}
            </h1>

            <p className="max-w-lg text-lg text-[#687169] leading-relaxed">
              {pb.desc[lang]}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={handleAddToCart}
                className="px-8 py-4 font-bold text-white transition-all hover:opacity-90 flex items-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #0f211a, #24362f)',
                  borderRadius: '0.125rem',
                }}
              >
                <ShoppingCart size={16} />
                {inCart
                  ? (isEn ? 'In Cart' : 'Ajouté')
                  : (isEn
                    ? `Buy SOP Manual · ${formatProductPrice('playbook')}`
                    : `Acheter le manuel SOP · ${formatProductPrice('playbook')}`)}
              </button>
              {isEditorialManual ? (
                <button
                  type="button"
                  onClick={() => { setExcerptStartPage(1); setShowExcerpt(true) }}
                  className="inline-flex items-center justify-center border border-[#0f211a] px-8 py-4 font-bold text-[#0f211a] transition-colors hover:bg-[#e7e0d5]"
                >
                  {isEn ? `Preview Chapter ${String(pb.previewChapter.number).padStart(2, '0')} · ${pb.previewChapter.title.en}` : `Découvrir le chapitre ${String(pb.previewChapter.number).padStart(2, '0')} · ${pb.previewChapter.title.fr}`}
                </button>
              ) : (
                <a
                  href="#document-previews"
                  className="inline-flex items-center justify-center border border-[#0f211a] px-8 py-4 font-bold text-[#0f211a] transition-colors hover:bg-[#e7e0d5]"
                >
                  {isEn ? 'Preview the Manual' : 'Voir un aperçu du manuel'}
                </a>
              )}
            </div>
            {starterPackHref && (
              <p className="text-sm text-[#687169]">
                {isEn ? 'Explore the practical tools included with this manual: ' : 'Découvrir les outils pratiques inclus avec ce manuel : '}
                <TrackedLink
                  href={starterPackHref}
                  eventName="starter_pack_details_clicked"
                  eventProperties={{
                    source_page: `/${locale}/playbooks/${pb.id}`,
                    placement: 'playbook_hero',
                    product: `${pb.id}_starter_pack`,
                    cta_label: isEn
                      ? 'View included tools'
                      : 'Voir les outils inclus',
                  }}
                  className="font-semibold text-[#0f211a] underline underline-offset-4"
                >
                  {isEn
                    ? 'View included tools'
                    : 'Voir les outils inclus'}
                </TrackedLink>
              </p>
            )}

            <p className="text-xs text-[#687169]">
              {isEn
                ? `Instant delivery · ${pb.pages} · PDF + PowerPoint · FR & EN included · Product revisions included while maintained`
                : `Livraison instantanée · ${pb.pages} · PDF + PowerPoint · FR & EN inclus · Révisions incluses tant que le produit est maintenu`}
            </p>
          </div>

          {/* Right - product preview */}
          <div className="flex-1 relative w-full">
            <ProductPreviewCarousel productId={pb.id} locale={locale} />
          </div>
        </div>
      </section>
      )}

      {/* Stats */}
      {!isEditorialManual && <section style={{ backgroundColor: '#e7e0d5' }}>
        <div
          className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ backgroundColor: 'rgba(32,35,31,0.14)' }}
        >
          {stats.map((s, i) => (
            <div key={i} className="bg-white p-10 flex flex-col items-center text-center">
              <span className="font-display text-4xl font-extrabold text-[#0f211a] mb-2">
                {s.value}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#687169]">
                {s.label[lang]}
              </span>
            </div>
          ))}
        </div>
      </section>}

      {!isEditorialManual && <div id="document-previews" className="scroll-mt-24">
        <HousekeepingProductProof locale={locale} productId={pb.id} />
      </div>}

      {/* Contents */}
      <section className="bg-[#fcfbf8] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1320px]">
          {pb.id === 'fo' ? (
            <>
              <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end lg:gap-16">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#a58658]">{isEn ? 'The manual in practice' : 'Le manuel en pratique'}</p>
                  <h2 className="mt-3 max-w-xl font-display text-3xl font-medium leading-[1.15] tracking-tight text-[#10251d] md:text-4xl">
                    {isEn ? 'An operating reference for a better-organised front desk' : 'Un référentiel opérationnel pour une réception mieux organisée'}
                  </h2>
                </div>
                <p className="max-w-2xl text-sm leading-7 text-[#626b64] md:text-base">
                  {isEn
                    ? 'From first contact to departure, every guest interaction involves procedures, tools and several team members. This manual brings essential Front Office standards together in a structured reference to align practices, support training and guide teams in their daily work.'
                    : 'Du premier contact au départ du client, chaque interaction mobilise des procédures, des outils et plusieurs collaborateurs. Ce manuel réunit les standards essentiels du Front Office dans un référentiel structuré, pour harmoniser les pratiques, faciliter la formation et accompagner les équipes dans leur travail quotidien.'}
                </p>
              </div>
              <div className="mt-8 grid gap-3 md:grid-cols-3">
                {[
                  {
                    number: '01',
                    title: isEn ? 'Who it is for' : 'À qui il s’adresse',
                    body: isEn
                      ? 'Designed for hotel directors, Rooms Division Managers, front desk managers and their teams. A shared resource to set expectations, onboard new colleagues and give staff clear guidance at every experience level.'
                      : 'Conçu pour les directions d’hôtel, Rooms Division Managers, responsables de réception et leurs équipes. Un support commun pour définir les attentes, accompagner les nouvelles recrues et donner aux collaborateurs des repères clairs, quel que soit leur niveau d’expérience.',
                  },
                  {
                    number: '02',
                    title: isEn ? 'What it contains' : 'Ce qu’il contient',
                    body: isEn
                      ? '12 chapters cover core front desk operations: arrivals and departures, guest communication, complaint handling, upselling, PMS, night audit, management and quality control. Detailed procedures, scripts and reference tools in French and English, as PDF and editable PowerPoint files. The included Starter Pack adds 12 practical tools.'
                      : '12 chapitres couvrant les principales opérations de réception : arrivées et départs, communication client, gestion des réclamations, upselling, PMS, night audit, management et contrôle qualité. Des procédures détaillées, scripts et outils de référence, disponibles en français et en anglais, aux formats PDF et PowerPoint modifiable. Le Starter Pack inclus ajoute 12 outils pratiques.',
                  },
                  {
                    number: '03',
                    title: isEn ? 'How to use it' : 'Comment l’utiliser',
                    body: isEn
                      ? 'Consult the procedures as a daily reference, adapt them to your systems and standards, then use them to train staff, structure briefings and support managers. The editable format lets the reference evolve with your property.'
                      : 'Consultez les procédures comme référence au quotidien, adaptez-les à vos outils et à vos standards, puis utilisez-les pour former vos collaborateurs, structurer vos briefings et accompagner les managers. Le format modifiable permet de faire évoluer le référentiel avec les besoins de votre établissement.',
                  },
                ].map((item) => (
                  <article key={item.number} className="rounded-[18px] border border-[#e8e1d6] bg-white px-5 py-5 shadow-[0_5px_18px_rgba(40,35,24,.035)]">
                    <span className="font-display text-xl text-[#b89760]">{item.number}</span>
                    <h3 className="mt-2 font-display text-xl font-medium text-[#10251d]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#626b64]">{item.body}</p>
                  </article>
                ))}
              </div>
              <details className="group mt-6 rounded-[18px] border border-[#e8e1d6] bg-[#f5f1e9]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 marker:hidden sm:px-6 [&::-webkit-details-marker]:hidden">
                  <span>
                    <span className="block text-[10px] font-bold uppercase tracking-[.16em] text-[#94734b]">{isEn ? 'Contents' : 'Sommaire'}</span>
                    <span className="mt-1 block font-display text-lg font-medium text-[#10251d] sm:text-xl">{isEn ? 'Explore the 12 chapters' : 'Explorer les 12 chapitres'}</span>
                  </span>
                  <ChevronDown size={20} className="shrink-0 text-[#10251d] transition-transform group-open:rotate-180" />
                </summary>
                <div className="grid gap-x-8 border-t border-[#e2dacd] px-5 py-3 sm:grid-cols-2 sm:px-6">
                  {chapters.map((chapter, index) => (
                    <div key={chapter} className="flex min-h-16 items-start gap-3 border-b border-[#e8e1d6] py-3 last:border-b-0">
                      <span className="w-7 shrink-0 font-display text-lg text-[#b89760]">{String(index + 1).padStart(2, '0')}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-medium text-[#26392e]">{chapter}</span>
                        <span className="mt-1 block text-xs leading-5 text-[#72766e]">{FRONT_OFFICE_CHAPTER_DESCRIPTIONS[lang][index]}</span>
                      </span>
                      {index === previewChapterIndex && <button type="button" onClick={() => { setExcerptStartPage(1); setShowExcerpt(true) }} className="shrink-0 rounded-full bg-[#10251d] px-3 py-1.5 text-[10px] font-semibold text-white transition hover:bg-[#2a4335]">{isEn ? 'Read sample' : 'Lire l’extrait'}</button>}
                    </div>
                  ))}
                </div>
              </details>
            </>
          ) : (
            <ManualPracticeContent id={pb.id} locale={lang} chapters={chapters} sampleIndex={previewChapterIndex} onReadSample={() => { setExcerptStartPage(1); setShowExcerpt(true) }} />
          )}
        </div>
      </section>

      <ManualPromoGallery id={pb.id} locale={lang} />

      {/* What's included */}
      {!isEditorialManual && <section className="py-24 px-6" style={{ backgroundColor: '#e7e0d5' }}>
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/3">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-[#0f211a] mb-6">
              {isEn ? 'What you’ll be able to standardise' : 'Ce que vous pourrez standardiser'}
            </h2>
            <p className="text-[#687169] mb-8 leading-relaxed">
              {isEn
                ? 'Every procedure is documented as an editable operating base. Adapt terminology, systems, roles, approval rules and brand standards before team rollout.'
                : 'Chaque procédure est documentée comme une base opérationnelle modifiable. Adaptez les termes, systèmes, rôles, règles de validation et standards de marque avant déploiement équipe.'}
            </p>
            <ul className="space-y-5">
              {pb.highlights[lang].map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#0f211a' }} />
                  <div>
                    <span className="font-bold text-sm text-[#0f211a] block">{h}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div className="flex-1">
            <h3 className="mb-6 font-display text-2xl text-[#0f211a]">{isEn ? 'What you receive' : 'Ce que vous recevez'}</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                icon: FileText,
                title: isEn ? 'Operational PDF' : 'PDF opérationnel',
                desc: isEn ? 'High-resolution, print-ready, with clickable table of contents.' : 'Haute résolution, prêt à imprimer, avec sommaire cliquable.',
              },
              {
                icon: Presentation,
                title: 'PowerPoint',
                desc: isEn ? 'Fully editable slides. Adapt to your brand and property standards.' : 'Slides entièrement modifiables. Adaptez à votre établissement.',
              },
              {
                icon: Languages,
                title: isEn ? 'FR & EN Versions' : 'Versions FR & EN',
                desc: isEn ? 'Both languages included. Switch seamlessly for international teams.' : 'Les deux langues incluses. Idéal pour les équipes internationales.',
              },
              {
                icon: RefreshCw,
                title: isEn ? 'Product Revisions' : 'Révisions produit',
                desc: isEn ? 'Future revisions included while this product is actively maintained.' : 'Révisions futures incluses tant que ce produit est activement maintenu.',
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="border border-[rgba(32,35,31,0.12)] bg-[#fcfbf8] p-6"
                  style={{ borderRadius: '0.125rem', boxShadow: '0 2px 8px rgba(15,33,26,0.05)' }}
                >
                  <Icon size={22} className="mb-4 text-[#a58658]" strokeWidth={1.6} />
                  <h4 className="mb-1 font-display font-bold text-[#0f211a]">{item.title}</h4>
                  <p className="text-xs leading-relaxed text-[#687169]">{item.desc}</p>
                </div>
              )
            })}
            </div>
          </div>
        </div>
      </section>}

      {!isEditorialManual && <ProductCredibility locale={locale} />}

      {starterPack && pb.id === 'fo' && (
        <>
          <section className="border-y border-[#d8d0c3] bg-[#f1ede5] px-5 py-8 md:px-8">
            <div className="mx-auto flex max-w-screen-xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-[#997a47]">{isEn ? 'Support with implementation' : 'Accompagnement au déploiement'}</p>
                <p className="mt-1 text-sm leading-6 text-[#46554b]">{isEn ? 'Need help adapting the standards and putting them into practice with your team?' : 'Besoin d’aide pour adapter les standards et les faire appliquer dans votre établissement ?'}</p>
              </div>
              <Link href={isEn ? '/en/training' : '/fr/formation'} className="inline-flex min-h-11 shrink-0 items-center justify-center border border-[#10251d] px-4 py-2 text-sm font-semibold text-[#10251d] transition-colors hover:bg-white">
                {isEn ? 'Explore on-site training' : 'Découvrir la formation sur site'}
              </Link>
            </div>
          </section>
        </>
      )}

      {/* FAQ */}
      <section className="bg-[#fcfbf8] px-5 py-8 md:px-6 md:py-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 font-display text-2xl font-semibold tracking-tight text-[#0f211a] md:text-3xl">
            {isEn ? 'Technical Specifications & FAQ' : 'Spécifications & FAQ'}
          </h2>
          <div className="space-y-2">
            {faq.map((item, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-[#e8e2d7] bg-white/70"
              >
                <button
                  className="flex w-full items-center justify-between px-4 py-3 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-xs font-semibold text-[#0f211a] md:text-[13px]">
                    {item.q[lang]}
                  </span>
                  <ChevronDown
                    size={18}
                    className="flex-shrink-0 ml-4 transition-transform"
                    style={{
                      color: '#687169',
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4">
                    <p className="text-xs leading-6 text-[#687169] md:text-[13px]">{item.a[lang]}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      {!isEditorialManual && <section className="py-20 px-6 bg-[#0f211a] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold tracking-tight mb-4">
            {isEn ? 'Ready to give your team a clearer operating standard?' : 'Prêt à donner à votre équipe un référentiel plus clair ?'}
          </h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
            {isEn
              ? 'Start with the complete department SOP manual and adapt it to your property.'
              : 'Commencez avec le manuel SOP complet de votre département et adaptez-le à votre établissement.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleAddToCart}
              className="px-10 py-4 bg-white text-[#0f211a] font-bold hover:bg-[#fcfbf8] transition-colors"
              style={{ borderRadius: '0.125rem' }}
            >
              {inCart
                ? (isEn ? '✓ In Cart' : '✓ Ajouté')
                : (isEn
                  ? `Buy SOP Manual · ${formatProductPrice('playbook')}`
                  : `Acheter le manuel SOP · ${formatProductPrice('playbook')}`)}
            </button>
            <Link
              href={`/${locale}/playbooks`}
              className="px-10 py-4 font-bold border transition-colors"
              style={{
                borderColor: 'rgba(255,255,255,0.4)',
                color: 'rgba(255,255,255,0.8)',
                borderRadius: '0.125rem',
              }}
            >
              {isEn ? 'View All SOP Manuals' : 'Voir tous les manuels SOP'}
            </Link>
          </div>
          <p className="mt-8 text-sm text-white/70">
            {isEn ? 'Need help implementing it with your team? ' : 'Besoin de le déployer avec votre équipe ? '}
            <Link href={isEn ? `/${locale}/training` : `/${locale}/formation`} className="font-semibold text-white underline underline-offset-4">
              {isEn ? 'Explore Training' : 'Découvrir la formation'}
            </Link>
          </p>
        </div>
      </section>}

      {showExcerpt && isEditorialManual && (
        <FrontOfficeExcerptDialog
          locale={locale}
          startPage={excerptStartPage}
          productId={pb.id}
          chapterNumber={pb.previewChapter.number}
          chapterTitle={pb.previewChapter.title[lang]}
          chapterPages={pb.previewChapter.pages[lang]}
          onClose={() => setShowExcerpt(false)}
        />
      )}

    </div>
  )
}
