'use client'

import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { MANUAL_PRACTICE, type PracticeManualId } from '@/content/playbooks/practice'

type Locale = 'fr' | 'en'

export function ManualPracticeContent({ id, locale, chapters, sampleIndex, onReadSample }: {
  id: PracticeManualId
  locale: Locale
  chapters: string[]
  sampleIndex: number
  onReadSample: () => void
}) {
  const copy = MANUAL_PRACTICE[id][locale]
  const isEn = locale === 'en'

  return <>
    <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end lg:gap-16">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#a58658]">{isEn ? 'The manual in practice' : 'Le manuel en pratique'}</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-medium leading-[1.15] tracking-tight text-[#10251d] md:text-4xl">{copy.title}</h2>
      </div>
      <p className="max-w-2xl text-sm leading-7 text-[#626b64] md:text-base">{copy.intro}</p>
    </div>
    <div className="mt-8 grid gap-3 md:grid-cols-3">
      {([
        { number: '01', title: isEn ? 'Who it is for' : 'À qui il s’adresse', body: copy.audience },
        { number: '02', title: isEn ? 'What it contains' : 'Ce qu’il contient', body: copy.contents },
        { number: '03', title: isEn ? 'How to use it' : 'Comment l’utiliser', body: copy.usage },
      ]).map((item) => <article key={item.number} className="rounded-[18px] border border-[#e8e1d6] bg-white px-5 py-5 shadow-[0_5px_18px_rgba(40,35,24,.035)]">
        <span className="font-display text-xl text-[#b89760]">{item.number}</span>
        <h3 className="mt-2 font-display text-xl font-medium text-[#10251d]">{item.title}</h3>
        <p className="mt-2 text-sm leading-6 text-[#626b64]">{item.body}</p>
      </article>)}
    </div>
    <details className="group mt-6 rounded-[18px] border border-[#e8e1d6] bg-[#f5f1e9]">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 marker:hidden sm:px-6 [&::-webkit-details-marker]:hidden">
        <span>
          <span className="block text-[10px] font-bold uppercase tracking-[.16em] text-[#94734b]">{isEn ? 'Contents' : 'Sommaire'}</span>
          <span className="mt-1 block font-display text-lg font-medium text-[#10251d] sm:text-xl">{isEn ? `Explore the ${chapters.length} chapters` : `Explorer les ${chapters.length} chapitres`}</span>
        </span>
        <ChevronDown size={20} className="shrink-0 text-[#10251d] transition-transform group-open:rotate-180" />
      </summary>
      <div className="grid gap-x-8 border-t border-[#e2dacd] px-5 py-3 sm:grid-cols-2 sm:px-6">
        {chapters.map((chapter, index) => <div key={chapter} className="flex min-h-16 items-start gap-3 border-b border-[#e8e1d6] py-3 last:border-b-0">
          <span className="w-7 shrink-0 font-display text-lg text-[#b89760]">{String(index + 1).padStart(2, '0')}</span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-medium text-[#26392e]">{chapter}</span>
            <span className="mt-1 block text-xs leading-5 text-[#72766e]">{copy.chapterDescriptions[index]}</span>
          </span>
          {index === sampleIndex && <button type="button" onClick={onReadSample} className="shrink-0 rounded-full bg-[#10251d] px-3 py-1.5 text-[10px] font-semibold text-white transition hover:bg-[#2a4335]">{isEn ? 'Read sample' : 'Lire l’extrait'}</button>}
        </div>)}
      </div>
    </details>
  </>
}

export function ManualPromoGallery({ id, locale }: { id: PracticeManualId | 'fo'; locale: Locale }) {
  const isEn = locale === 'en'
  const folder = id === 'fo' ? 'front-office' : id === 'hsk' ? 'housekeeping' : id
  const captions = id === 'fo'
    ? (isEn ? ['A shared reference', 'Procedures to adapt', 'Practical tools for teams'] : ['Un référentiel commun', 'Des procédures à adapter', 'Des outils pratiques pour les équipes'])
    : MANUAL_PRACTICE[id][locale].captions
  const images = [
    { file: 'manual-on-desk.jpg', alt: isEn ? 'Illustrative manual on a desk' : 'Mise en situation d’un manuel sur un bureau' },
    { file: 'manual-open.jpg', alt: isEn ? 'Illustrative open operating manual' : 'Mise en situation d’un manuel opérationnel ouvert' },
    { file: id === 'fo' ? 'opening-checklist.jpg' : 'checklist.jpg', alt: isEn ? 'Illustrative operational checklist' : 'Mise en situation d’une checklist opérationnelle' },
  ]

  return <section className="border-y border-[#e8e1d6] bg-[#f4f0e8] px-5 py-14 md:px-8 md:py-18">
    <div className="mx-auto max-w-[1320px]">
      <div className="mb-7 max-w-2xl">
        <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#a58658]">{isEn ? 'In daily practice' : 'Au quotidien'}</p>
        <h2 className="mt-2 font-display text-3xl font-medium leading-tight text-[#10251d] md:text-4xl">{isEn ? 'From reference to daily practice' : 'Du référentiel à la pratique quotidienne'}</h2>
        <p className="mt-3 text-sm leading-7 text-[#626b64] md:text-base">{id === 'fo'
          ? (isEn ? 'Procedures to consult, adapt and share with front desk teams. The images below are illustrative scenarios.' : 'Des procédures à consulter, adapter et partager avec les équipes de réception. Les images ci-dessous sont des mises en situation illustratives.')
          : (isEn ? 'Procedures to consult, adapt and share with your team. The images below are illustrative scenarios.' : 'Des procédures à consulter, adapter et partager avec vos équipes. Les images ci-dessous sont des mises en situation illustratives.')}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {images.map((visual, index) => <figure key={visual.file} className="overflow-hidden rounded-[18px] border border-[#e5dccf] bg-white">
          <div className="relative aspect-[4/5] overflow-hidden"><Image src={`/images/product-promo/${folder}/${visual.file}`} alt={visual.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" /></div>
          <figcaption className="px-5 py-4 font-display text-lg text-[#10251d]">{captions[index]}</figcaption>
        </figure>)}
      </div>
    </div>
  </section>
}
