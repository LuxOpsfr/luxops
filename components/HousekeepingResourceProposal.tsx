'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, BookOpen, Check, ChevronDown, Download } from 'lucide-react'
import FrontOfficeExcerptDialog from '@/components/FrontOfficeExcerptDialog'
import PriceDisplay from '@/components/PriceDisplay'
import TrackedLink from '@/components/TrackedLink'

type ChecklistRole = { role: string; intro: string; sections: { title: string; items: string[] }[] }
type DownloadItem = { title: string; role: string; body: string; href: string }
type AuditRow = { category: string; checkpoint: string }
type FAQItem = { q: string; a: string }
type Step = { title: string; body: string }

type Props = {
  locale: 'en' | 'fr'
  downloads: DownloadItem[]
  roles: ChecklistRole[]
  auditRows: AuditRow[]
  faq: FAQItem[]
  sopSteps: Step[]
}

export default function HousekeepingResourceProposal({ locale, downloads, roles, auditRows, faq, sopSteps }: Props) {
  const [readerOpen, setReaderOpen] = useState(false)
  const [downloadedHref, setDownloadedHref] = useState<string | null>(null)
  const isEn = locale === 'en'
  const productHref = `/${locale}/playbooks/hsk`
  const sampleCover = `/Previews/hsk-chapter04/${locale}/page-01.jpg`

  return <main className="min-h-screen bg-[#fcfbf8] pb-20 text-[#10251d]">
    <section className="border-b border-[#e8dfd1] bg-[#f5f1e9] px-5 pb-9 pt-[calc(var(--site-header-height)+2rem)] sm:px-8 lg:pb-12">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#96764a]">{isEn ? 'Free housekeeping PDFs' : 'PDF housekeeping gratuits'}</p>
        <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.25rem,4.8vw,3.9rem)] font-medium leading-[1.04] tracking-[-.03em]">{isEn ? 'Hotel Housekeeping Checklist' : 'Checklist housekeeping en hôtel'}</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#5b665e]">{isEn ? 'Five printable checklists for room attendants, supervisors and room inspection. Choose the PDF you need for today’s shift.' : 'Cinq checklists à imprimer pour les équipes d’étage, les gouvernantes et l’inspection des chambres. Choisissez le PDF utile pour votre vacation.'}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a href="#free-housekeeping-pdfs" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#10251d] px-6 py-3 text-sm font-semibold text-white hover:bg-[#263c31]">{isEn ? 'Choose a free PDF' : 'Choisir un PDF gratuit'}<ArrowRight size={16} /></a>
          <TrackedLink href={productHref} eventName="playbook_cta_clicked" eventProperties={{ product: "housekeeping_playbook" }} className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-[#244437] underline decoration-[#ad9061] underline-offset-4">{isEn ? 'How do you apply these checks? See the manual' : 'Comment appliquer ces contrôles ? Voir le manuel'}<ArrowRight size={15} /></TrackedLink>
        </div>
      </div>
    </section>

    <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,1fr)_310px] lg:gap-8">
      <div className="min-w-0">
        <section id="free-housekeeping-pdfs" className="scroll-mt-24">
          <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#96764a]">{isEn ? 'Download now' : 'Téléchargement immédiat'}</p>
          <h2 className="mt-2 font-display text-3xl font-medium">{isEn ? 'Choose your checklist' : 'Choisissez votre checklist'}</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {downloads.map(item => <article key={item.href} className="flex flex-col rounded-[18px] border border-[#e5dccf] bg-white p-5 shadow-[0_4px_16px_rgba(20,37,29,.035)]">
              <h3 className="font-display text-xl leading-snug">{item.title}</h3>
              <p className="mt-1 text-xs text-[#6b756c]">{item.role}</p>
              <p className="mt-2 text-xs leading-5 text-[#526257]">{item.body}</p>
              <TrackedLink href={item.href} eventName="free_checklist_download_clicked" eventProperties={{ department: "housekeeping", checklist_name: item.title, placement: "resource_card" }} download onClick={() => setDownloadedHref(item.href)} className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full border border-[#ccba9b] px-4 py-2 text-xs font-semibold text-[#153026] hover:border-[#10251d] hover:bg-[#f5f1e9]"><Download size={15} />{isEn ? 'Download free PDF' : 'Télécharger le PDF gratuit'}</TrackedLink>
              {downloadedHref === item.href && <div role="status" className="mt-3 border-t border-[#eae2d6] pt-3"><TrackedLink href={productHref} eventName="playbook_cta_clicked" eventProperties={{ product: "housekeeping_playbook" }} className="inline-flex items-center gap-1 text-xs font-semibold text-[#244437] underline underline-offset-2">{isEn ? 'Need the full procedure behind this check? View the manual' : 'Besoin de la procédure complète ? Voir le manuel'}<ArrowRight size={13} /></TrackedLink></div>}
            </article>)}
          </div>
        </section>

        <section className="mt-12 rounded-[23px] border border-[#d8c8ad] bg-[#f3eee4] p-6 sm:p-8">
          <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#96764a]">{isEn ? 'For the whole department' : 'Pour tout le service'}</p>
          <h2 className="mt-2 max-w-xl font-display text-[clamp(1.8rem,3vw,2.5rem)] leading-tight">{isEn ? 'The checklist tells you what to check. The manual shows how to do it.' : 'La checklist dit quoi contrôler. Le manuel montre comment procéder.'}</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#526257]">{isEn ? 'Move from individual checks to one shared method for room preparation, inspections and team training.' : 'Passez de contrôles ponctuels à une méthode commune pour la préparation des chambres, les inspections et la formation des équipes.'}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <TrackedLink href={productHref} eventName="playbook_cta_clicked" eventProperties={{ product: "housekeeping_playbook" }} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#10251d] px-5 py-3 text-xs font-semibold text-white hover:bg-[#263c31]">{isEn ? 'Explore the complete manual' : 'Découvrir le manuel complet'} · <PriceDisplay productType="playbook" /><ArrowRight size={15} /></TrackedLink>
            <button type="button" onClick={() => setReaderOpen(true)} className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#bea77f] bg-white px-5 py-3 text-xs font-semibold text-[#10251d] hover:bg-[#fcfaf6]"><BookOpen size={16} />{isEn ? 'Read the sample chapter' : 'Lire le chapitre extrait'}</button>
          </div>
        </section>

        <section className="mt-14" aria-labelledby="housekeeping-howto-title">
          <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#96764a]">{isEn ? 'Practical guidance' : 'Conseils pratiques'}</p>
          <h2 id="housekeeping-howto-title" className="mt-2 font-display text-3xl font-medium">{isEn ? 'How to use these housekeeping checklists' : 'Comment utiliser ces checklists housekeeping'}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#5b665e]">{isEn ? 'A room attendant checks the room after cleaning; a supervisor inspects departure rooms before they return to sale. Use the PDFs by role, then adapt the detailed points below to your property.' : 'La femme ou le valet de chambre contrôle la chambre après nettoyage ; la gouvernante inspecte les chambres en départ avant leur remise en vente. Utilisez le PDF de chaque poste, puis adaptez les points détaillés ci-dessous à votre établissement.'}</p>
          <div className="mt-5 space-y-3">
            {roles.map(role => <details key={role.role} className="group rounded-[17px] border border-[#e5dccf] bg-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-5 text-sm font-semibold marker:hidden [&::-webkit-details-marker]:hidden">{role.role}<ChevronDown size={18} className="shrink-0 transition-transform group-open:rotate-180" /></summary><div className="border-t border-[#eae2d6] px-5 pb-5 pt-4"><p className="text-xs leading-5 text-[#5b665e]">{role.intro}</p>{role.sections.map(section => <div key={section.title} className="mt-4"><h3 className="text-sm font-semibold">{section.title}</h3><ul className="mt-2 space-y-1.5 text-xs leading-5 text-[#405247]">{section.items.map(item => <li key={item} className="flex gap-2"><Check size={13} className="mt-1 shrink-0 text-[#a58658]" />{item}</li>)}</ul></div>)}</div></details>)}
            <details className="group rounded-[17px] border border-[#e5dccf] bg-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-5 text-sm font-semibold marker:hidden [&::-webkit-details-marker]:hidden">{isEn ? 'How to release a room after inspection' : 'Quand libérer une chambre après inspection'}<ChevronDown size={18} className="shrink-0 transition-transform group-open:rotate-180" /></summary><div className="border-t border-[#eae2d6] px-5 pb-5 pt-4"><h2 className="font-display text-xl">{isEn ? 'The inspection rule that protects check-in quality' : 'La règle d’inspection qui protège la qualité des arrivées'}</h2><p className="mt-2 text-xs leading-6 text-[#405247]">{isEn ? 'A departure room moves from Dirty to Clean, then to Inspected. The room attendant marks it Clean after service, but Front Office cannot assign it yet. A supervisor or manager releases it only after a physical inspection. If a defect remains, correct it, inspect again and record it for coaching.' : 'Une chambre départ passe de sale à propre, puis à inspectée. La femme ou le valet de chambre la passe en propre après le service, mais la réception ne peut pas encore l’attribuer. La gouvernante ou le manager la libère après inspection physique. En cas d’écart, corrigez, réinspectez et tracez le défaut pour le coaching.'}</p></div></details>
            <details className="group rounded-[17px] border border-[#e5dccf] bg-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-5 text-sm font-semibold marker:hidden [&::-webkit-details-marker]:hidden">{isEn ? 'Room quality audit: checkpoints and score' : 'Audit qualité chambre : points de contrôle et note'}<ChevronDown size={18} className="shrink-0 transition-transform group-open:rotate-180" /></summary><div className="border-t border-[#eae2d6] px-5 pb-5 pt-4"><h2 className="font-display text-xl">{isEn ? 'Short quality audit scoring grid' : 'Grille courte de notation qualité'}</h2><p className="mt-2 text-xs leading-6 text-[#405247]">{isEn ? 'Score each of the ten checkpoints from 0 to 2, for a total out of 20. Use this short grid for internal room inspections; the complete manual has a separate weighted 100-point model.' : 'Notez chacun des dix points de 0 à 2, pour un total sur 20. Cette grille courte sert aux inspections internes ; le manuel complet comporte un modèle distinct sur 100 points avec catégories pondérées.'}</p><ul className="mt-4 grid gap-2 sm:grid-cols-2">{auditRows.map((row, index) => <li key={`${row.category}-${index}`} className="text-xs leading-5 text-[#405247]"><strong>{row.category} :</strong> {row.checkpoint} <span className="whitespace-nowrap text-[#96764a]">/ 2</span></li>)}</ul></div></details>
            <details className="group rounded-[17px] border border-[#e5dccf] bg-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-5 text-sm font-semibold marker:hidden [&::-webkit-details-marker]:hidden">{isEn ? 'Build a Housekeeping SOP from these checklists' : 'Construire une SOP housekeeping à partir de ces checklists'}<ChevronDown size={18} className="shrink-0 transition-transform group-open:rotate-180" /></summary><div className="border-t border-[#eae2d6] px-5 pb-5 pt-4"><h2 className="font-display text-xl">{isEn ? 'Putting a Housekeeping SOP into practice' : 'Mettre une SOP housekeeping en pratique'}</h2><ol className="mt-3 space-y-3">{sopSteps.map((step, index) => <li key={step.title} className="text-xs leading-6 text-[#405247]"><strong>{index + 1}. {step.title}</strong> — {step.body}</li>)}</ol></div></details>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="housekeeping-faq-title"><h2 id="housekeeping-faq-title" className="font-display text-3xl">{isEn ? 'Housekeeping checklist FAQ' : 'FAQ checklist housekeeping'}</h2><div className="mt-4 space-y-3">{faq.map(item => <details key={item.q} className="group rounded-[17px] border border-[#e5dccf] bg-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-5 text-sm font-semibold marker:hidden [&::-webkit-details-marker]:hidden">{item.q}<ChevronDown size={18} className="shrink-0 transition-transform group-open:rotate-180" /></summary><p className="border-t border-[#eae2d6] px-5 pb-5 pt-4 text-xs leading-6 text-[#5b665e]">{item.a}</p></details>)}</div></section>

        <section className="mt-12" aria-labelledby="housekeeping-related-title"><h2 id="housekeeping-related-title" className="font-display text-2xl">{isEn ? 'Related Housekeeping resources' : 'Ressources Housekeeping associées'}</h2><div className="mt-4 grid gap-2 sm:grid-cols-2">{[
          { href: `/${locale}/housekeeping-sop`, title: isEn ? 'Housekeeping SOP procedures' : 'Procédures SOP housekeeping' },
          { href: `/${locale}/blog/hotel-room-cleaning-checklist`, title: isEn ? 'Hotel room cleaning checklist' : 'Checklist nettoyage de chambre' },
          { href: `/${locale}/blog/hotel-housekeeping-supervisor-checklist`, title: isEn ? 'Supervisor inspection checklist' : 'Checklist inspection gouvernante' },
          { href: `/${locale}/hotel-audit-checklist`, title: isEn ? 'Hotel quality audit checklist' : 'Checklist audit qualité hôtel' },
          { href: isEn ? '/en/housekeeping-deep-cleaning-checklist' : '/fr/deep-cleaning-chambre', title: isEn ? 'Room deep cleaning checklist' : 'Checklist deep cleaning chambre' },
          { href: isEn ? '/en/room-status-discrepancy-report' : '/fr/rapport-ecart-statut-chambre', title: isEn ? 'Room status discrepancy report' : 'Rapport écart de statut chambre' },
        ].map(item => <Link key={item.href} href={item.href} className="inline-flex min-h-11 items-center justify-between gap-3 rounded-xl border border-[#e5dccf] bg-white px-4 py-3 text-xs font-semibold text-[#244437] hover:border-[#ad9061]">{item.title}<ArrowRight size={14} className="shrink-0" /></Link>)}</div></section>
      </div>

      <aside className="hidden self-start lg:sticky lg:top-[calc(var(--site-header-height)+1rem)] lg:block">
        <div className="overflow-hidden rounded-[22px] border border-[#d8c8ad] bg-white shadow-[0_12px_32px_rgba(20,37,29,.08)]">
          <button type="button" onClick={() => setReaderOpen(true)} className="group flex w-full flex-col items-center bg-[#eee6d7] px-6 pb-4 pt-5 text-left focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#a58658]">
            <span className="relative block h-[275px] w-[195px] overflow-hidden rounded-[3px_9px_9px_3px] border border-[#d3c5aa] bg-[#10251d] shadow-[11px_14px_20px_rgba(19,33,24,.17)]"><Image src={sampleCover} alt={isEn ? 'Cover of the real Housekeeping chapter 04 sample' : 'Couverture du vrai chapitre extrait 04 Housekeeping'} fill sizes="195px" className="object-cover" /></span>
            <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#183529]"><BookOpen size={15} />{isEn ? 'Read 12 pages of chapter 04' : 'Lire 12 pages du chapitre 04'}<ArrowRight size={14} /></span>
          </button>
          <div className="p-5"><p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#96764a]">{isEn ? 'Housekeeping SOP Manual' : 'Manuel SOP Housekeeping'}</p><h2 className="mt-2 font-display text-[1.5rem] leading-tight">{isEn ? 'One standard for every room and shift' : 'Un même standard pour chaque chambre et vacation'}</h2><p className="mt-2 text-xs leading-5 text-[#5b665e]">{isEn ? 'Procedures, inspection methods and editable tools for the whole team.' : 'Procédures, méthodes d’inspection et outils modifiables pour toute l’équipe.'}</p><TrackedLink href={productHref} eventName="playbook_cta_clicked" eventProperties={{ product: "housekeeping_playbook" }} className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#10251d] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#263c31]">{isEn ? 'View the complete manual' : 'Voir le manuel complet'} · <PriceDisplay productType="playbook" /><ArrowRight size={14} /></TrackedLink></div>
        </div>
      </aside>
    </div>

    {readerOpen && <FrontOfficeExcerptDialog locale={locale} startPage={1} productId="hsk" chapterNumber={4} chapterTitle={isEn ? 'Public Areas & Specialty Cleaning' : 'Espaces communs & nettoyages spéciaux'} chapterPages={isEn ? 33 : 41} presentation="document" onClose={() => setReaderOpen(false)} />}
  </main>
}
