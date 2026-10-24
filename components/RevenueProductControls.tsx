'use client'

import { useState } from 'react'
import Image from 'next/image'
import { BookOpen, Download, ShoppingCart } from 'lucide-react'
import FrontOfficeExcerptDialog from '@/components/FrontOfficeExcerptDialog'
import { BUNDLE_PRICE_ID } from '@/content/playbooks/data'
import { REVENUE_PRICE_ID, REVENUE_PRODUCT_CHAPTERS, revenueChapterCover } from '@/content/revenue-management-product'
import AddToCartButton from '@/components/AddToCartButton'
import { useCart } from '@/context/CartContext'
import { useCurrency } from '@/context/CurrencyContext'

type Locale = 'fr' | 'en'

export function RevenuePreviewStage({ locale }: { locale: Locale }) {
  const [startPage, setStartPage] = useState<number | null>(null)
  const isFr = locale === 'fr'
  const chapter = REVENUE_PRODUCT_CHAPTERS[1]

  return <div className="min-w-0 lg:sticky lg:top-24">
    <button type="button" onClick={() => setStartPage(1)} aria-label={isFr ? 'Ouvrir l’extrait du chapitre 02' : 'Open the Chapter 02 sample'} className="fo-book-stage group relative flex w-full cursor-pointer flex-col items-center overflow-hidden rounded-[24px] border border-[#e8dece] px-5 pb-4 pt-9 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#b89760] focus-visible:ring-offset-4 sm:rounded-[28px] sm:px-7 sm:pb-5 sm:pt-10">
      <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-[#d8bd91]/30 bg-[#10251d] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[.08em] text-[#d8bd91] sm:left-5 sm:top-5 sm:px-3.5 sm:text-[10px]"><BookOpen size={12} /><span className="sm:hidden">{isFr ? 'Extrait' : 'Sample'}</span><span className="hidden sm:inline">{isFr ? 'Feuilleter un extrait' : 'Read a sample'}</span></span>
      <span className="absolute right-4 top-4 rounded-full border border-[#24362f]/15 bg-white/70 px-3 py-1.5 text-[9px] font-semibold text-[#24362f] sm:right-5 sm:top-5 sm:px-3.5 sm:text-[10px]">{isFr ? 'Chapitre' : 'Chapter'} 02</span>
      <span className="relative my-2.5 block h-[260px] w-[185px] [perspective:1200px] sm:h-[315px] sm:w-[224px] lg:h-[385px] lg:w-[274px]">
        <span aria-hidden="true" className="fo-book-pages absolute -right-2.5 top-2 h-[96%] w-[calc(100%+10px)] rounded-r-[9px]" />
        <span className="fo-book-cover absolute inset-0 block overflow-hidden rounded-[4px_9px_9px_4px] bg-[#10251d] shadow-[0_20px_34px_rgba(15,33,26,.2)]"><Image src={revenueChapterCover('02', locale)} alt={`${isFr ? 'Chapitre' : 'Chapter'} 02 · ${chapter.title[locale]}`} fill priority sizes="(min-width: 1024px) 24vw, 55vw" className="object-cover" /><span aria-hidden="true" className="fo-book-spine absolute inset-y-0 left-0 w-[7%]" /></span>
      </span>
      <span className="preview-cta-chip inline-flex min-h-10 items-center gap-2 rounded-full border border-[#b89760] bg-[#10251d] px-4 text-[11px] font-semibold text-[#f5f1e9] shadow-[0_8px_18px_-4px_rgba(15,33,26,.35)] transition group-hover:bg-[#0f211a] sm:px-5 sm:text-xs"><BookOpen size={14} className="text-[#d8bd91]" />{isFr ? 'Lire le chapitre 02' : 'Read Chapter 02'}<span aria-hidden="true">→</span></span>
    </button>
    <div className="mt-3 flex flex-col gap-2.5 rounded-[18px] border border-[#e4dac8] bg-white/80 px-4 py-3.5 shadow-[0_5px_18px_rgba(45,39,28,.045)] sm:mt-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
      <div className="flex items-start gap-2.5"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1ede5] text-[#927345]"><Download size={15} /></span><span><span className="block text-[11px] font-semibold text-[#273a30] sm:text-xs">{isFr ? 'Télécharger le chapitre 02 complet' : 'Download Chapter 02 in full'}</span><span className="mt-0.5 block text-[10px] leading-4 text-[#777970]">16 {isFr ? 'pages · PDF · par e-mail' : 'pages · PDF · by email'}</span></span></div>
      <button type="button" onClick={() => setStartPage(12)} className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-[#10251d] px-4 text-[10px] font-semibold text-white shadow-[0_5px_14px_rgba(16,37,29,.12)] transition hover:-translate-y-0.5 hover:bg-[#263d31] sm:min-h-11 sm:px-5 sm:text-[11px]">{isFr ? 'Recevoir le PDF complet' : 'Get the complete PDF'}<span aria-hidden="true">→</span></button>
    </div>
    {startPage !== null && <FrontOfficeExcerptDialog locale={locale} startPage={startPage} productId="revenue" chapterTitle={chapter.title[locale]} chapterNumber={2} chapterPages={16} onClose={() => setStartPage(null)} />}
  </div>
}

export function RevenueOfferSelector({ locale }: { locale: Locale }) {
  const isFr = locale === 'fr'
  const [selectedOffer, setSelectedOffer] = useState<'manual' | 'bundle'>('manual')
  const { addItem, items, openCart } = useCart()
  const { currency, priceFor, formatProductPrice } = useCurrency()
  const inCart = items.some((item) => item.priceId === BUNDLE_PRICE_ID)

  function handleAddBundle() {
    if (inCart) { openCart(); return }
    addItem({ priceId: BUNDLE_PRICE_ID, title: isFr ? 'Bundle complet · 5 manuels SOP' : 'Complete bundle · 5 SOP manuals', price: priceFor('bundle'), currency, productType: 'bundle' })
  }

  return <div className="mt-3 space-y-2" role="radiogroup" aria-label={isFr ? 'Choisir un produit' : 'Choose a product'}>
    <article onClick={() => setSelectedOffer('manual')} className={`group/offer cursor-pointer rounded-[17px] border bg-white px-3.5 py-3 transition duration-200 hover:border-[#a58658] hover:shadow-[0_10px_24px_rgba(40,35,24,.1)] sm:px-4 sm:py-3.5 ${selectedOffer === 'manual' ? 'border-[#c7a76e] shadow-[0_6px_18px_rgba(40,35,24,.06)]' : 'border-[#e6e1d8]'}`}>
      <div className="flex items-center justify-between gap-3"><div className="flex min-w-0 items-center gap-2.5"><button type="button" role="radio" aria-checked={selectedOffer === 'manual'} aria-label={isFr ? 'Manuel Revenue Management & Distribution' : 'Revenue Management & Distribution SOP Manual'} onClick={() => setSelectedOffer('manual')} className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#b89760] focus-visible:ring-offset-2"><span className={`flex h-4 w-4 items-center justify-center rounded-full border ${selectedOffer === 'manual' ? 'border-[#a58658]' : 'border-[#c9c4b9]'}`}>{selectedOffer === 'manual' && <span className="h-2 w-2 rounded-full bg-[#10251d]" />}</span></button><h2 className="text-[12px] font-semibold text-[#25382d] sm:text-[13px]">{isFr ? 'Manuel Revenue Management & Distribution' : 'Revenue Management & Distribution SOP Manual'}</h2></div><RevenueManualPrice /></div>
      <p className="ml-[26px] mt-1 text-[10px] leading-[1.4] text-[#74766e] sm:text-[11px]">{isFr ? 'Manuel complet · 8 chapitres · ~115 pages · PDF et PowerPoint modifiable.' : 'Complete manual · 8 chapters · ~115 pages · PDF and editable PowerPoint.'}</p>
      <div className="ml-[26px] mt-2 flex justify-end border-t border-dashed border-[#e8e2d7] pt-2"><RevenueManualCartButton locale={locale} /></div>
    </article>
    <article onClick={() => setSelectedOffer('bundle')} className={`group/offer cursor-pointer rounded-[17px] border bg-white/85 px-3.5 py-3 transition duration-200 hover:border-[#c7a76e] hover:shadow-[0_8px_20px_rgba(40,35,24,.08)] sm:px-4 sm:py-3.5 ${selectedOffer === 'bundle' ? 'border-[#c7a76e] shadow-[0_6px_18px_rgba(40,35,24,.06)]' : 'border-[#e6e1d8]'}`}>
      <div className="flex items-center justify-between gap-3"><div className="flex min-w-0 items-center gap-2.5"><button type="button" role="radio" aria-checked={selectedOffer === 'bundle'} aria-label={isFr ? 'Bundle · 5 manuels SOP' : 'Bundle · 5 SOP manuals'} onClick={() => setSelectedOffer('bundle')} className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#b89760] focus-visible:ring-offset-2"><span className={`flex h-4 w-4 items-center justify-center rounded-full border ${selectedOffer === 'bundle' ? 'border-[#a58658]' : 'border-[#c9c4b9]'}`}>{selectedOffer === 'bundle' && <span className="h-2 w-2 rounded-full bg-[#10251d]" />}</span></button><h2 className="text-[12px] font-semibold text-[#25382d] sm:text-[13px]">{isFr ? 'Bundle · 5 manuels SOP' : 'Bundle · 5 SOP manuals'}</h2></div><span className="shrink-0 font-display text-lg font-semibold leading-none text-[#25382d] sm:text-xl">{formatProductPrice('bundle')} <small className="font-sans text-[9px] font-normal text-[#85867f]">TTC</small></span></div>
      <p className="ml-[26px] mt-1 text-[10px] leading-[1.4] text-[#74766e] sm:text-[11px]">Front Office · Housekeeping · F&B · Spa · Revenue Management</p>
      <div className="ml-[26px] mt-2 flex items-center justify-between gap-3 border-t border-dashed border-[#e8e2d7] pt-2"><span className="text-[9px] font-medium text-[#9a7948]">{isFr ? 'Tarif maintenu à 199 €' : 'Same €199 price'}</span><button type="button" onClick={handleAddBundle} className="inline-flex min-h-8 items-center gap-1.5 rounded-full border border-[#d8d2c7] bg-white px-3.5 text-[10px] font-semibold text-[#25382d] transition hover:border-[#10251d] hover:bg-[#f8f6f1] sm:text-[11px]"><ShoppingCart size={12} />{inCart ? (isFr ? 'Voir le panier' : 'Open cart') : (isFr ? 'Ajouter' : 'Add')}</button></div>
    </article>
  </div>
}

export function RevenueChapterList({ locale }: { locale: Locale }) {
  const [sampleOpen, setSampleOpen] = useState(false)
  const isFr = locale === 'fr'
  const sampleChapter = REVENUE_PRODUCT_CHAPTERS[1]

  return <section id="chapters" className="scroll-mt-24 bg-[#fcfbf8] px-5 py-16 md:px-8 md:py-20">
    <div className="mx-auto max-w-[1320px]">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#a58658]">{isFr ? 'Structure du manuel' : 'Manual structure'}</p>
          <h2 className="font-display text-3xl font-medium tracking-tight text-[#10251d] md:text-4xl">{isFr ? 'Les 8 chapitres opérationnels' : '8 operational chapters'}</h2>
        </div>
        <p className="max-w-lg text-sm leading-6 text-[#72766e]">{isFr ? 'Un parcours de la lecture des réservations à la revue des décisions et des résultats. Environ 115 pages au total.' : 'A route from understanding reservations to reviewing decisions and results. Approximately 115 pages in total.'}</p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {REVENUE_PRODUCT_CHAPTERS.map((chapter) => <article key={chapter.number} className={`group/chapter relative flex min-h-[92px] flex-col justify-between rounded-[18px] border bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(40,35,24,.07)] sm:p-5 ${chapter.number === '02' ? 'border-[#c7a76e] shadow-[0_5px_18px_rgba(40,35,24,.05)]' : 'border-[#ece6dc] hover:border-[#d9c59f]'}`}>
          <span className="font-display text-xl text-[#b89760]">{chapter.number}</span>
          <div className="mt-2 flex items-end justify-between gap-3">
            <h3 className="text-sm font-semibold leading-5 text-[#26392e]">{chapter.title[locale]}</h3>
            {chapter.number === '02' && <button type="button" onClick={() => setSampleOpen(true)} className="shrink-0 rounded-full bg-[#10251d] px-3 py-1.5 text-[10px] font-semibold text-white transition hover:bg-[#2a4335]">{isFr ? 'Lire l’extrait' : 'Read sample'}</button>}
          </div>
          {chapter.number === '02' && <span className="absolute -top-2.5 right-3 rounded-full bg-[#10251d] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide text-[#f7f4ec]">{isFr ? 'Extrait' : 'Sample'}</span>}
        </article>)}
      </div>
    </div>
    {sampleOpen && <FrontOfficeExcerptDialog locale={locale} startPage={1} productId="revenue" chapterTitle={sampleChapter.title[locale]} chapterNumber={2} chapterPages={16} onClose={() => setSampleOpen(false)} />}
  </section>
}

export function RevenueManualCartButton({ locale }: { locale: Locale }) {
  const { currency, priceFor, formatProductPrice } = useCurrency()
  return <AddToCartButton
    openCartOnAdd
    item={{
      priceId: REVENUE_PRICE_ID,
      title: locale === 'fr' ? 'Manuel SOP Revenue Management & Distribution' : 'Revenue Management & Distribution SOP Manual',
      price: priceFor('playbook'),
      currency,
      productType: 'playbook',
    }}
    addedLabel={locale === 'fr' ? 'Dans le panier' : 'In cart'}
    className="inline-flex min-h-8 items-center gap-1.5 rounded-full bg-[#10251d] px-3.5 text-[10px] font-semibold text-white transition hover:bg-[#2a4335] sm:text-[11px]"
  >
    <ShoppingCart size={12} />{locale === 'fr' ? `Ajouter le manuel · ${formatProductPrice('playbook')}` : `Add the manual · ${formatProductPrice('playbook')}`}
  </AddToCartButton>
}

export function RevenueManualPrice() {
  const { formatProductPrice } = useCurrency()
  return <span className="shrink-0 font-display text-base font-semibold text-[#25382d] sm:text-lg">{formatProductPrice('playbook')}</span>
}
