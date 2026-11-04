import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowRight, Check, ClipboardCheck, FileText } from 'lucide-react'
import PriceDisplay from '@/components/PriceDisplay'
import SamePageAnchor from '@/components/SamePageAnchor'
import TrackedLink from '@/components/TrackedLink'

type AuditItem = { area: string; criterion: string }
type FaqItem = { q: string; a: string }
type ScoreCard = {
  score: string
  scoreFr: string
  tone: string
  labelEn: string
  labelFr: string
}

export default function HotelAuditChecklistContent({
  locale,
  auditItems,
  areas,
  faq,
  scoreCards,
}: {
  locale: string
  auditItems: AuditItem[]
  areas: string[]
  faq: FaqItem[]
  scoreCards: ScoreCard[]
}) {
  const en = locale === 'en'
  const bundleHref = `/${locale}/playbooks#bundle`
  const areaManuals = ['fo', 'hsk', 'fb']
  const trainingHref = en ? '/en/training' : '/fr/formation'
  const auditHref = en ? '/en/quality-audit' : '/fr/audit-qualite'

  return (
    <main className="bg-[#fcfbf8] text-[#10251d]">
      <section className="border-b border-[#e8e0d2] px-5 pb-12 pt-16 md:px-8 md:pb-16 md:pt-20">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(330px,0.75fr)] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#96764a]">
                {en ? 'Hotel quality audit · Free resource' : 'Audit qualité hôtelier · Ressource gratuite'}
              </p>
              <h1 className="font-display max-w-[880px] text-[clamp(2.8rem,5vw,5.3rem)] leading-[1.04] tracking-[-0.045em]">
                {en ? 'Hotel audit checklist' : 'Checklist audit hôtel'}
              </h1>
              <p className="mt-6 max-w-[750px] text-lg leading-relaxed text-[#58645c] md:text-xl">
                {en
                  ? 'What should you inspect in a hotel? Start with these 28 concrete checkpoints across front office, housekeeping, food and beverage, and guest experience.'
                  : 'Que faut-il contrôler dans un hôtel ? Commencez par ces 28 points concrets, de la réception au housekeeping, en passant par le F&B et l’expérience client.'}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <SamePageAnchor href="#audit-grid" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#10251d] px-6 text-sm font-semibold text-white transition hover:bg-[#244536]">
                  {en ? 'See the 28 checkpoints' : 'Voir les 28 points à auditer'} <ArrowDown size={17} />
                </SamePageAnchor>
                <TrackedLink
                  href={bundleHref}
                  eventName="resource_bundle_cta_clicked"
                  eventProperties={{ resource: 'hotel-audit-checklist', placement: 'hero' }}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#cbb998] bg-white px-6 text-sm font-semibold text-[#10251d] transition hover:bg-[#f4eee3]"
                >
                  {en ? 'Explore the complete catalogue' : 'Découvrir le catalogue complet'} <ArrowRight size={17} />
                </TrackedLink>
              </div>
            </div>
            <div className="hidden rounded-[28px] border border-[#ded4c3] bg-[#f4efe6] p-6 md:p-8 lg:block">
              <div className="flex items-center gap-3 text-[#96764a]">
                <ClipboardCheck size={24} strokeWidth={1.6} />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">{en ? 'At a glance' : 'En un coup d’œil'}</span>
              </div>
              <p className="font-display mt-6 text-3xl leading-tight">
                {en ? 'Four areas. One consistent standard.' : 'Quatre périmètres. Un même niveau d’exigence.'}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#58645c]">
                {en
                  ? 'Score every checkpoint from 0 to 2. Compare departments, document gaps, then decide which procedures need to be clarified.'
                  : 'Notez chaque point de 0 à 2. Comparez les services, consignez les écarts, puis identifiez les procédures à clarifier.'}
              </p>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-[#ded4c3] pt-5">
                {[en ? '28 checkpoints' : '28 points', en ? '4 areas' : '4 périmètres', en ? '56 points max' : '56 points max'].map((item) => (
                  <span key={item} className="rounded-full border border-[#d8c9b1] bg-[#fcfbf8] px-3 py-1.5 text-xs font-semibold">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="audit-grid" className="scroll-mt-28 px-5 py-12 md:px-8 md:py-16">
        <div id="article-offer-start" className="mx-auto max-w-[1360px]">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#96764a]">
                {en ? 'The audit grid' : 'La grille d’audit'}
              </p>
              <h2 className="font-display text-3xl tracking-[-0.035em] md:text-5xl">
                {en ? 'What to inspect, department by department' : 'Quoi auditer, service par service'}
              </h2>
            </div>
            <p className="max-w-[390px] text-sm leading-relaxed text-[#58645c]">
              <strong className="font-semibold text-[#10251d]">0</strong> {en ? 'not met' : 'non conforme'} · <strong className="font-semibold text-[#10251d]">1</strong> {en ? 'partly met' : 'partiellement conforme'} · <strong className="font-semibold text-[#10251d]">2</strong> {en ? 'fully met' : 'conforme'}
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {areas.map((area, areaIndex) => {
              const items = auditItems.filter((item) => item.area === area)
              return (
                <section key={area} className="overflow-hidden rounded-[25px] border border-[#e6ddcf] bg-white shadow-[0_10px_30px_rgba(16,37,29,0.04)]">
                  <header className="flex items-center justify-between gap-4 border-b border-[#e6ddcf] bg-[#f4efe6] px-5 py-5 md:px-7">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-xl text-[#b69c74]">0{areaIndex + 1}</span>
                      <h3 className="font-display text-2xl md:text-[1.7rem]">{area}</h3>
                    </div>
                    <span className="shrink-0 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#58645c]">
                      {items.length} {en ? 'checks' : 'points'} · /{items.length * 2}
                    </span>
                  </header>
                  <ol className="divide-y divide-[#eee9e0]">
                    {items.map((item, index) => (
                      <li key={item.criterion} className="grid grid-cols-[auto_1fr_auto] items-start gap-3 px-5 py-3.5 md:gap-4 md:px-7">
                        <span className="pt-0.5 text-xs font-semibold tabular-nums text-[#a88b62]">{String(index + 1).padStart(2, '0')}</span>
                        <span className="text-sm leading-[1.55] text-[#34453b]">{item.criterion}</span>
                        <span className="min-w-[44px] border-b border-[#cfc5b4] text-right text-xs text-[#7a827a]">/ 2</span>
                      </li>
                    ))}
                  </ol>
                  <div className="flex items-center justify-between border-t border-[#e6ddcf] px-5 py-4 text-sm font-semibold md:px-7">
                    <span>{en ? 'Department subtotal' : 'Sous-total du service'}</span>
                    <span>____ / {items.length * 2}</span>
                  </div>
                </section>
              )
            })}
          </div>

          <div className="mt-6 rounded-[25px] border border-[#cdb890] bg-[#f4efe6] px-6 py-6 md:flex md:items-center md:justify-between md:gap-6 md:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#96764a]">{en ? 'Overall score' : 'Score global'}</p>
              <p className="font-display mt-2 text-2xl">{en ? 'Add the four subtotals' : 'Additionnez les quatre sous-totaux'}</p>
            </div>
            <p className="mt-4 text-2xl font-semibold tabular-nums md:mt-0">____ / 56</p>
          </div>
          <p className="mt-4 max-w-[900px] text-xs leading-relaxed text-[#68736a]">
            {en
              ? 'These checkpoints are a starting point. Adapt timings and criteria to your property’s own standards, then verify each score with an observation or a record.'
              : 'Ces points sont une base de travail. Adaptez les délais et les critères aux standards de votre établissement, puis justifiez chaque note par une observation ou une trace.'}
          </p>
        </div>
      </section>

      <section className="bg-[#f4efe6] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#96764a]">{en ? 'From audit to action' : 'De l’audit à l’action'}</p>
            <h2 className="font-display text-4xl leading-tight tracking-[-0.035em] md:text-5xl">
              {en ? 'A score identifies the gap. A clear procedure helps close it.' : 'Une note révèle l’écart. Une procédure claire aide à le corriger.'}
            </h2>
            <p className="mt-5 max-w-[600px] leading-relaxed text-[#58645c]">
              {en
                ? 'If a handover is missed, a room fails inspection or a service step varies between shifts, the audit alone does not tell the team what to do tomorrow. Document the expected sequence, assign ownership and check again.'
                : 'Si une passation manque, qu’une chambre échoue au contrôle ou qu’une étape de service varie selon le shift, la grille seule ne dit pas quoi faire demain. Il faut formaliser la séquence attendue, désigner un responsable et contrôler de nouveau.'}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[#34453b]">
              {(
                en
                  ? ['Locate the recurring gap', 'Write or update the department SOP', 'Train the team, then audit the same point again']
                  : ['Repérer l’écart récurrent', 'Rédiger ou actualiser la procédure du service', 'Former l’équipe, puis réauditer le même point']
              ).map((step) => <li key={step} className="flex items-center gap-3"><Check size={17} className="shrink-0 text-[#96764a]" />{step}</li>)}
            </ul>
          </div>
          <div className="overflow-hidden rounded-[30px] border border-[#ddceb8] bg-white shadow-[0_25px_60px_rgba(16,37,29,0.09)]">
            <div className="grid h-[250px] grid-cols-3 gap-1 overflow-hidden bg-[#e8dfce] md:h-[340px]">
              {(['front-office', 'housekeeping', 'fb'] as const).map((department) => (
                <div key={department} className="relative overflow-hidden">
                  <Image
                    src={`/images/product-promo/${department}/manual-on-desk.jpg`}
                    alt={en ? `${department} SOP manual example` : `Exemple de manuel SOP ${department}`}
                    fill
                    sizes="(max-width: 1024px) 33vw, 220px"
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </div>
            <div className="p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#96764a]">{en ? 'Complete LuxOps catalogue' : 'Catalogue LuxOps complet'}</p>
              <div className="mt-2 flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl md:text-3xl">{en ? 'A procedure base for every department' : 'Une base de procédures pour chaque service'}</h3>
                <PriceDisplay productType="bundle" className="font-display text-2xl font-semibold" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#58645c]">
                {en
                  ? 'Five department manuals and three Starter Packs: ready-to-use SOPs and editable tools to turn audit findings into consistent daily practice.'
                  : 'Cinq manuels par département et trois Starter Packs : des procédures et outils modifiables pour transformer les constats d’audit en pratiques communes.'}
              </p>
              <TrackedLink
                href={bundleHref}
                eventName="resource_bundle_cta_clicked"
                eventProperties={{ resource: 'hotel-audit-checklist', placement: 'audit_to_action' }}
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#10251d] px-6 text-sm font-semibold text-white transition hover:bg-[#244536]"
              >
                {en ? 'Explore all five SOP manuals' : 'Découvrir les cinq manuels SOP'} <ArrowRight size={17} />
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#96764a]">{en ? 'Make the audit useful' : 'Exploiter le résultat'}</p>
              <h2 className="font-display text-3xl leading-tight tracking-[-0.035em] md:text-4xl">{en ? 'How to use this hotel audit checklist' : 'Comment utiliser cette checklist d’audit hôtelier'}</h2>
              <p className="mt-5 leading-relaxed text-[#58645c]">
                {en
                  ? 'Choose a representative date and follow the guest journey. Check both what guests see and the records behind the service. Reuse the same grid so results remain comparable over time.'
                  : 'Choisissez une date représentative et suivez le parcours client. Vérifiez ce que le client voit, mais aussi les traces de service. Réutilisez la même grille pour comparer les résultats dans le temps.'}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {(en
                ? [
                    ['01', 'Prepare the scope', 'Define the departments, date and your property’s expected standard.'],
                    ['02', 'Observe the journey', 'Review arrival, room, service, requests and departure.'],
                    ['03', 'Debrief promptly', 'Compare departments and focus on recurring gaps, not isolated misses.'],
                    ['04', 'Check again', 'Assign a process owner and repeat the same controls after action.'],
                  ]
                : [
                    ['01', 'Préparer le périmètre', 'Définissez les services, la date et les standards de votre établissement.'],
                    ['02', 'Observer le parcours', 'Contrôlez l’arrivée, la chambre, les services, les demandes et le départ.'],
                    ['03', 'Débriefer rapidement', 'Comparez les services et ciblez les écarts récurrents plutôt que les incidents isolés.'],
                    ['04', 'Contrôler de nouveau', 'Attribuez chaque action et reprenez les mêmes points après correction.'],
                  ]).map(([number, title, description]) => (
                <div key={number} className="rounded-[22px] border border-[#e6ddcf] bg-white p-5 md:p-6">
                  <span className="font-display text-2xl text-[#b69c74]">{number}</span>
                  <h3 className="font-display mt-3 text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#58645c]">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {scoreCards.map((card) => (
              <div key={card.score} className="rounded-[20px] border border-[#e6ddcf] bg-[#f7f3ed] p-5">
                <p className="font-display text-2xl">{en ? card.score : card.scoreFr}<span className="ml-1 text-sm text-[#68736a]">/ 56</span></p>
                <p className="mt-2 text-sm font-medium text-[#58645c]">{en ? card.labelEn : card.labelFr}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 max-w-[900px] text-xs leading-relaxed text-[#68736a]">
            {en
              ? 'These ranges are practical reading guides for this grid, not a certification or a substitute for a full external audit.'
              : 'Ces seuils sont des repères de lecture pour cette grille, pas une certification ni un substitut à un audit externe complet.'}
          </p>
        </div>
      </section>

      <section className="border-y border-[#e6ddcf] bg-[#f4efe6] px-5 py-14 md:px-8">
        <div className="mx-auto max-w-[1360px]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#96764a]">{en ? 'Continue by department' : 'Aller plus loin par service'}</p>
          <h2 className="font-display text-3xl tracking-[-0.035em] md:text-4xl">{en ? 'Find the procedure behind each checkpoint' : 'Retrouvez les procédures derrière chaque point de contrôle'}</h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area, index) => (
              <Link key={area} href={index < areaManuals.length ? `/${locale}/playbooks/${areaManuals[index]}` : bundleHref} className="group flex min-h-24 items-center justify-between gap-3 rounded-[20px] border border-[#ded4c3] bg-white p-5 transition hover:border-[#b69c74] hover:shadow-md">
                <span className="font-display text-xl">{area}</span><ArrowRight size={18} className="shrink-0 text-[#96764a] transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
          <p className="mt-4 text-xs text-[#68736a]">{en ? 'Guest experience standards span the front office and other guest-facing teams.' : 'Les standards d’expérience client concernent notamment la réception et les autres équipes en contact avec le client.'}</p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[920px]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#96764a]">FAQ</p>
          <h2 className="font-display text-3xl tracking-[-0.035em] md:text-4xl">{en ? 'Questions about hotel quality audits' : 'Questions sur l’audit qualité hôtelier'}</h2>
          <div className="mt-8 divide-y divide-[#e6ddcf] border-y border-[#e6ddcf]">
            {faq.map(({ q, a }) => (
              <div key={q} className="py-6">
                <h3 className="font-display text-xl">{q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#58645c]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#10251d] px-5 py-14 text-white md:px-8 md:py-16">
        <div className="mx-auto grid max-w-[1360px] gap-7 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#c7a774]">{en ? 'Next step' : 'Étape suivante'}</p>
            <h2 className="font-display text-3xl md:text-4xl">{en ? 'Make your standards clear across every team.' : 'Rendez vos standards clairs pour toutes les équipes.'}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{en ? 'Explore the five SOP manuals and three included Starter Packs in the complete catalogue.' : 'Découvrez les cinq manuels SOP et les trois Starter Packs inclus dans le catalogue complet.'}</p>
          </div>
          <TrackedLink href={bundleHref} eventName="resource_bundle_cta_clicked" eventProperties={{ resource: 'hotel-audit-checklist', placement: 'footer' }} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f4efe6] px-6 text-sm font-semibold text-[#10251d] transition hover:bg-white">
            {en ? 'Explore the catalogue' : 'Voir le catalogue'} <ArrowRight size={17} />
          </TrackedLink>
        </div>
      </section>
      <div className="bg-[#10251d] px-5 pb-10 text-center text-xs text-white/55 md:px-8">
        <FileText size={15} className="mr-1 inline" />
        {en ? 'Need a full on-site review?' : 'Besoin d’un regard extérieur sur site ?'}{' '}
        <Link href={auditHref} className="underline underline-offset-4 hover:text-white">{en ? 'Explore quality audits' : 'Découvrir les audits qualité'}</Link>
        <span className="mx-2">·</span>
        <Link href={trainingHref} className="underline underline-offset-4 hover:text-white">{en ? 'Explore team training' : 'Découvrir la formation'}</Link>
      </div>
    </main>
  )
}
