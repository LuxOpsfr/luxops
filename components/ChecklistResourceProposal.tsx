'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, BookOpen, Check, ChevronDown, Download } from 'lucide-react'
import FrontOfficeExcerptDialog from '@/components/FrontOfficeExcerptDialog'
import PriceDisplay from '@/components/PriceDisplay'
import TrackedLink from '@/components/TrackedLink'

type Section = { title: string; intro?: string; items: string[] }
type FAQ = { q: string; a: string }

export default function ChecklistResourceProposal({ locale, kind, title, intro, pdf, sections, faq }: {
  locale: 'fr' | 'en'
  kind: 'front-office' | 'night-audit'
  title: string
  intro: string
  pdf: string
  sections: Section[]
  faq: FAQ[]
}) {
  const [readerOpen, setReaderOpen] = useState(false)
  const [downloaded, setDownloaded] = useState(false)
  const isEn = locale === 'en'
  const productHref = `/${locale}/playbooks/fo`
  const cover = `/Previews/front-office-chapter04/${locale}/page-01.png`
  const isNight = kind === 'night-audit'
  return <main className="min-h-screen bg-[#fcfbf8] pb-20 text-[#10251d]">
    <section className="border-b border-[#e8dfd1] bg-[#f5f1e9] px-5 pb-9 pt-[calc(var(--site-header-height)+2rem)] sm:px-8 lg:pb-12">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#96764a]">{isEn ? 'Free Front Office PDF' : 'PDF réception gratuit'}</p>
        <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.25rem,4.8vw,3.9rem)] font-medium leading-[1.04] tracking-[-.03em]">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#5b665e]">{intro}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a href="#free-checklist" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#10251d] px-6 py-3 text-sm font-semibold text-white hover:bg-[#263c31]">{isEn ? 'Get the free checklist' : 'Obtenir la checklist gratuite'}<ArrowRight size={16} /></a>
          <TrackedLink href={productHref} eventName="playbook_cta_clicked" eventProperties={{ product: "front_office_playbook" }} className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-[#244437] underline decoration-[#ad9061] underline-offset-4">{isEn ? 'See the complete Front Office manual' : 'Voir le manuel Front Office complet'}<ArrowRight size={15} /></TrackedLink>
        </div>
      </div>
    </section>

    <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,1fr)_310px] lg:gap-8">
      <div className="min-w-0">
        <section id="free-checklist" className="scroll-mt-24 rounded-[20px] border border-[#e5dccf] bg-white p-6 sm:p-8">
          <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#96764a]">{isEn ? 'Direct download' : 'Téléchargement direct'}</p>
          <h2 className="mt-2 font-display text-3xl">{isNight ? (isEn ? 'Night Audit checklist PDF' : 'Checklist Night Audit PDF') : (isEn ? 'Front Desk daily checklist PDF' : 'Checklist quotidienne réception PDF')}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#5b665e]">{isNight ? (isEn ? 'A printable sequence for the night shift, PMS close and morning handover.' : 'Une séquence imprimable pour le service de nuit, la clôture PMS et la passation du matin.') : (isEn ? 'A printable tool for opening the front desk, following arrivals and handing over to the next shift.' : 'Un outil imprimable pour ouvrir la réception, suivre les arrivées et transmettre les points en suspens.')}</p>
          <TrackedLink href={pdf} eventName="free_checklist_download_clicked" eventProperties={{ department: "front_office", checklist_name: kind, placement: "resource_page" }} download onClick={() => setDownloaded(true)} className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#10251d] px-5 py-3 text-sm font-semibold text-white hover:bg-[#263c31]"><Download size={16} />{isEn ? 'Download the free PDF' : 'Télécharger le PDF gratuit'}</TrackedLink>
          {downloaded && <p role="status" className="mt-4 text-xs text-[#526257]">{isEn ? 'For the full method and editable tools, explore the' : 'Pour la méthode complète et les outils modifiables, consultez le'} <Link className="font-semibold underline underline-offset-2" href={productHref}>{isEn ? 'Front Office manual' : 'manuel Front Office'}</Link>.</p>}
        </section>

        <section className="mt-12 rounded-[23px] border border-[#d8c8ad] bg-[#f3eee4] p-6 sm:p-8">
          <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#96764a]">{isEn ? 'For the whole department' : 'Pour tout le service'}</p>
          <h2 className="mt-2 max-w-xl font-display text-[clamp(1.8rem,3vw,2.5rem)] leading-tight">{isEn ? 'The checklist covers the checks. The manual explains the procedure.' : 'La checklist couvre les contrôles. Le manuel explique la procédure.'}</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#526257]">{isEn ? 'See how reception teams handle guest communication, shift routines and handovers within one shared reference.' : 'Découvrez comment les équipes de réception structurent la communication client, les routines de service et les passations dans un même référentiel.'}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <TrackedLink href={productHref} eventName="playbook_cta_clicked" eventProperties={{ product: "front_office_playbook" }} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#10251d] px-5 py-3 text-xs font-semibold text-white hover:bg-[#263c31]">{isEn ? 'Explore the complete manual' : 'Découvrir le manuel complet'} · <PriceDisplay productType="playbook" /><ArrowRight size={15} /></TrackedLink>
            <button type="button" onClick={() => setReaderOpen(true)} className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#bea77f] bg-white px-5 py-3 text-xs font-semibold text-[#10251d] hover:bg-[#fcfaf6]"><BookOpen size={16} />{isEn ? 'Read the sample chapter' : 'Lire le chapitre extrait'}</button>
          </div>
        </section>

        <section className="mt-14"><p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#96764a]">{isEn ? 'Practical guidance' : 'Conseils pratiques'}</p><h2 className="mt-2 font-display text-3xl">{isNight ? (isEn ? 'How to run a hotel Night Audit' : 'Comment conduire le Night Audit') : (isEn ? 'How to use the Front Desk checklist' : 'Comment utiliser la checklist réception')}</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-[#5b665e]">{isEn ? 'Open the steps below for the detailed checks used on this page.' : 'Ouvrez les étapes ci-dessous pour retrouver les contrôles détaillés de cette page.'}</p><div className="mt-5 space-y-3">{sections.map(section => <details key={section.title} className="group rounded-[17px] border border-[#e5dccf] bg-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-5 text-sm font-semibold marker:hidden [&::-webkit-details-marker]:hidden">{section.title}<ChevronDown size={18} className="shrink-0 transition-transform group-open:rotate-180" /></summary><div className="border-t border-[#eae2d6] px-5 pb-5 pt-4">{section.intro && <p className="text-xs leading-6 text-[#5b665e]">{section.intro}</p>}<ul className="mt-3 space-y-2">{section.items.map(item => <li key={item} className="flex gap-2 text-xs leading-6 text-[#405247]"><Check size={13} className="mt-1 shrink-0 text-[#a58658]" />{item}</li>)}</ul></div></details>)}</div></section>

        <section className="mt-12"><h2 className="font-display text-3xl">{isEn ? 'Frequently asked questions' : 'Questions fréquentes'}</h2><div className="mt-4 space-y-3">{faq.map(item => <details key={item.q} className="group rounded-[17px] border border-[#e5dccf] bg-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-5 text-sm font-semibold marker:hidden [&::-webkit-details-marker]:hidden">{item.q}<ChevronDown size={18} className="shrink-0 transition-transform group-open:rotate-180" /></summary><p className="border-t border-[#eae2d6] px-5 pb-5 pt-4 text-xs leading-6 text-[#5b665e]">{item.a}</p></details>)}</div></section>

        <section className="mt-12"><h2 className="font-display text-2xl">{isEn ? 'Related Front Office resources' : 'Ressources réception associées'}</h2><div className="mt-4 grid gap-2 sm:grid-cols-2">{[
          { href: `/${locale}/front-office-sop`, title: isEn ? 'Front Office SOP procedures' : 'Procédures SOP réception' },
          { href: `/${locale}/${isNight ? 'hotel-front-office-checklist' : 'hotel-night-audit-checklist'}`, title: isNight ? (isEn ? 'Front Desk daily checklist' : 'Checklist quotidienne réception') : (isEn ? 'Night Audit checklist' : 'Checklist Night Audit') },
          { href: isEn ? '/en/free-hotel-checklists' : '/fr/checklists-hotel-gratuites', title: isEn ? 'All free hotel checklists' : 'Toutes les checklists hôtel gratuites' },
          { href: `/${locale}/free-hotel-procedures`, title: isEn ? 'Free SOP sample chapters' : 'Chapitres SOP gratuits' },
        ].map(item => <Link key={item.href} href={item.href} className="inline-flex min-h-11 items-center justify-between gap-3 rounded-xl border border-[#e5dccf] bg-white px-4 py-3 text-xs font-semibold text-[#244437] hover:border-[#ad9061]">{item.title}<ArrowRight size={14} className="shrink-0" /></Link>)}</div></section>
      </div>

      <aside className="hidden self-start lg:sticky lg:top-[calc(var(--site-header-height)+1rem)] lg:block"><div className="overflow-hidden rounded-[22px] border border-[#d8c8ad] bg-white shadow-[0_12px_32px_rgba(20,37,29,.08)]"><button type="button" onClick={() => setReaderOpen(true)} className="group flex w-full flex-col items-center bg-[#eee6d7] px-6 pb-4 pt-5 text-left"><span className="relative block h-[275px] w-[195px] overflow-hidden rounded-[3px_9px_9px_3px] border border-[#d3c5aa] bg-[#10251d] shadow-[11px_14px_20px_rgba(19,33,24,.17)]"><Image src={cover} alt={isEn ? 'Real Front Office chapter sample' : 'Vrai chapitre extrait Front Office'} fill sizes="195px" className="object-cover" /></span><span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#183529]"><BookOpen size={15} />{isEn ? 'Read chapter 04' : 'Lire le chapitre 04'}<ArrowRight size={14} /></span></button><div className="p-5"><p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#96764a]">{isEn ? 'Front Office SOP Manual' : 'Manuel SOP Front Office'}</p><h2 className="mt-2 font-display text-[1.5rem] leading-tight">{isEn ? 'One standard at every desk and shift' : 'Un même standard à chaque service'}</h2><p className="mt-2 text-xs leading-5 text-[#5b665e]">{isEn ? 'Procedures, guest communication and editable tools for reception teams.' : 'Procédures, communication client et outils modifiables pour la réception.'}</p><TrackedLink href={productHref} eventName="playbook_cta_clicked" eventProperties={{ product: "front_office_playbook" }} className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#10251d] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#263c31]">{isEn ? 'View the complete manual' : 'Voir le manuel complet'} · <PriceDisplay productType="playbook" /><ArrowRight size={14} /></TrackedLink></div></div></aside>
    </div>
    {readerOpen && <FrontOfficeExcerptDialog locale={locale} startPage={1} productId="fo" chapterNumber={4} chapterTitle={isEn ? 'Guest Communication' : 'Communication client'} chapterPages={isEn ? 28 : 29} presentation="document" onClose={() => setReaderOpen(false)} />}
  </main>
}
