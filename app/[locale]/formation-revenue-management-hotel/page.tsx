import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ChartNoAxesCombined, ClipboardList, Download, UsersRound } from 'lucide-react'
import TrackedLink from '@/components/TrackedLink'
import TrainingQuoteForm from '@/components/TrainingQuoteForm'
import { alternatesForRoute, localizedRouteUrl } from '@/lib/localized-routes'

const route = '/fr/formation-revenue-management-hotel'
const product = '/fr/playbooks/revenue-management'

export const metadata: Metadata = {
  title: 'Formation Revenue Management Hôtelier | LuxOps',
  description: 'Formez vos managers et vos équipes au revenue management, à la performance commerciale et à l’upselling hôtelier. Accompagnement adapté à vos opérations.',
  alternates: { canonical: localizedRouteUrl('trainingRevenueManagementHotel', 'fr'), languages: alternatesForRoute('trainingRevenueManagementHotel') },
  openGraph: {
    type: 'website', locale: 'fr_FR', url: localizedRouteUrl('trainingRevenueManagementHotel', 'fr'),
    title: 'Formation Revenue Management & Performance commerciale hôtelière | LuxOps',
    description: 'Développez les compétences commerciales de vos directions, réservations et équipes Front Office dans le contexte de votre établissement.',
  },
}

const formats = [
  {
    number: '01', title: 'Revenue Management, direction et managers',
    audience: 'Directions d’hôtel, Rooms Division Managers, responsables Revenue Management, Front Office Managers et responsables réservations.',
    points: [
      'Lire l’occupation, l’ADR, le RevPAR et la contribution après coûts de distribution.',
      'Analyser la demande, le pickup et les prévisions pour les dates prioritaires.',
      'Arbitrer tarifs, segments, disponibilité, canaux, groupes et contrats négociés.',
      'Organiser les yield meetings, suivre les décisions et exploiter PMS, RMS ou tableaux de bord selon les outils disponibles.',
    ],
    result: 'Renforcer l’autonomie des responsables dans l’analyse, la décision et le suivi des performances.',
    icon: ChartNoAxesCombined,
  },
  {
    number: '02', title: 'Upselling, réservations et Front Office',
    audience: 'Équipes réservations, réception, conciergerie, Guest Relations, chefs de brigade et managers de proximité.',
    points: [
      'Reconnaître les occasions de vente pertinentes pour chaque séjour.',
      'Présenter les catégories supérieures, surclassements et services par leurs bénéfices.',
      'Adapter les propositions au client, à la disponibilité et aux standards de service.',
      'Suivre les résultats et accompagner la progression des équipes sans vente insistante.',
    ],
    result: 'Développer la performance commerciale dans une relation client attentive et crédible.',
    icon: UsersRound,
  },
]

const method = [
  { title: 'Cadrer', detail: 'Comprendre les enjeux commerciaux, les équipes, les outils disponibles et les objectifs de l’établissement.' },
  { title: 'Adapter', detail: 'Construire les exercices à partir des métiers, des données autorisées et du niveau des participants.' },
  { title: 'Pratiquer', detail: 'Travailler forecast, prix, distribution, surclassement, vente additionnelle ou yield meeting sur des situations concrètes.' },
  { title: 'Ancrer', detail: 'Définir les routines, responsabilités et supports qui permettront de poursuivre le travail après la formation.' },
]

const faq = [
  { q: 'À qui s’adresse cette formation ?', a: 'Aux directions, responsables Revenue Management, managers hébergement, équipes réservations et collaborateurs Front Office. Le contenu est adapté aux responsabilités et au niveau des participants.' },
  { q: 'Peut-on former uniquement la réception à la vente additionnelle ?', a: 'Oui. L’intervention peut se concentrer sur les opportunités commerciales, la présentation des catégories et services, les mises en situation et les routines de suivi.' },
  { q: 'La formation peut-elle s’appuyer sur notre PMS ou notre RMS ?', a: 'Oui, selon les outils disponibles, le périmètre convenu et les conditions d’accès autorisées. Des données anonymisées ou pédagogiques peuvent aussi être utilisées.' },
  { q: 'La formation remplace-t-elle un Revenue Manager ?', a: 'Elle développe les compétences et l’autonomie des équipes. Elle ne remplace pas nécessairement une fonction spécialisée dans les hôtels qui requièrent un pilotage avancé.' },
  { q: 'Comment maintenir les acquis après la formation ?', a: 'Avec des routines de pilotage, des responsabilités définies, des supports partagés et des procédures mises à jour. LuxOps relie le développement des compétences à la structuration des méthodes.' },
]

const label = 'text-[10px] font-semibold uppercase tracking-[.18em] text-[#92734a]'
const heading = 'font-display text-3xl font-medium leading-tight text-[#0f211a] sm:text-4xl'

export default async function RevenueTrainingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== 'fr') notFound()

  return <main className="bg-[#faf7f2] pt-[var(--site-header-height)] text-[#20231f]">
    <section className="px-5 pb-12 pt-8 sm:px-8 lg:px-12 lg:pb-16 lg:pt-12">
      <div className="mx-auto grid max-w-[1400px] items-center gap-8 lg:grid-cols-[.97fr_1.03fr] lg:gap-12">
        <div>
          <Link href="/fr/formation" className="text-xs font-semibold text-[#806744] underline-offset-4 hover:underline">← Formations & accompagnement</Link>
          <p className={`${label} mt-7`}>Formation spécialisée · Hôtellerie</p>
          <h1 className="mt-3 max-w-[700px] font-display text-4xl font-medium leading-[1.08] tracking-[-.035em] text-[#0f211a] sm:text-5xl lg:text-[3.45rem]">Formation Revenue Management &amp; Performance commerciale hôtelière</h1>
          <p className="mt-5 max-w-[620px] text-base leading-7 text-[#425048]">Développez les compétences de vos équipes pour mieux piloter les revenus de votre hôtel.</p>
          <p className="mt-3 max-w-[620px] text-sm leading-7 text-[#626b64]">De la stratégie tarifaire à la vente additionnelle, LuxOps accompagne les directions, managers, réservations et Front Office. Analyse des performances, maîtrise des outils et mise en pratique s’articulent autour des opérations de votre établissement.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <TrackedLink href="#revenue-training-contact" eventName="training_revenue_contact_clicked" eventProperties={{ source_page: route, placement: 'hero', topic: 'revenue_management', locale: 'fr' }} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0f211a] px-6 text-xs font-semibold text-white transition hover:bg-[#263d31]">Échanger sur votre projet <ArrowRight size={15} /></TrackedLink>
            <a href="#formats" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#d7d1c5] bg-white px-6 text-xs font-semibold text-[#24362f] transition hover:border-[#a58658]">Découvrir les formats <ArrowRight size={15} /></a>
          </div>
        </div>
        <div className="relative aspect-[1.28] overflow-hidden rounded-[28px] border border-[#e8e0d3] bg-[#eee8dc] shadow-[0_18px_42px_rgba(78,63,40,.13)]">
          <Image src="/images/editorial-hospitality/dept-revenue-management-v1.png" alt="Espace de travail hôtelier pour l’analyse et le pilotage des revenus" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </div>
    </section>

    <section id="formats" className="scroll-mt-24 border-y border-[#e7e1d7] bg-white/65 px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[1400px]">
        <p className={label}>Deux approches complémentaires</p>
        <h2 className={`${heading} mt-2 max-w-3xl`}>Du pilotage des revenus à la performance sur le terrain.</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[#626b64]">La qualité des décisions tarifaires compte autant que la capacité des équipes à les comprendre et à les appliquer. Les deux formats peuvent être suivis séparément ou réunis selon vos priorités.</p>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {formats.map((format) => { const Icon = format.icon; return <article key={format.number} className="rounded-[1.4rem] border border-[#e8e2d7] bg-[#faf8f4] p-6 sm:p-8">
            <div className="flex items-center gap-3 text-[#92734a]"><Icon size={20} /><span className="font-display text-xl">{format.number}</span></div>
            <h3 className="mt-5 font-display text-2xl font-medium text-[#0f211a]">{format.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#626b64]"><strong className="text-[#263d31]">Pour qui · </strong>{format.audience}</p>
            <ul className="mt-5 space-y-3 border-t border-[#e2d9ca] pt-5">{format.points.map(point => <li key={point} className="flex gap-3 text-sm leading-6 text-[#4f5d54]"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a58658]" />{point}</li>)}</ul>
            <p className="mt-6 border-t border-[#e2d9ca] pt-4 text-sm leading-6 text-[#263d31]"><strong>Objectif · </strong>{format.result}</p>
          </article> })}
        </div>
      </div>
    </section>

    <section className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16"><div className="mx-auto max-w-[1400px]">
      <p className={label}>L’approche LuxOps</p><h2 className={`${heading} mt-2`}>Des compétences développées. Des méthodes qui restent.</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-[#626b64]">Une formation doit produire des changements visibles dans les opérations et laisser à l’établissement les moyens de poursuivre le travail. Notre méthode associe trois dimensions complémentaires.</p>
      <div className="mt-8 grid gap-6 border-t border-[#d8cfc1] pt-6 md:grid-cols-3 md:gap-10">
        <div><h3 className="font-display text-xl text-[#0f211a]">Humain</h3><p className="mt-2 text-sm leading-6 text-[#626b64]">Former managers et collaborateurs à comprendre leurs indicateurs, identifier les opportunités et exercer leurs responsabilités commerciales.</p></div>
        <div><h3 className="font-display text-xl text-[#0f211a]">Innovation</h3><p className="mt-2 text-sm leading-6 text-[#626b64]">S’appuyer sur les outils disponibles, les données et les méthodes de pilotage modernes pour améliorer la qualité des décisions.</p></div>
        <div><h3 className="font-display text-xl text-[#0f211a]">Référentiels</h3><p className="mt-2 text-sm leading-6 text-[#626b64]">Documenter règles de décision, routines et points de contrôle pour rendre les pratiques transmissibles aux nouveaux collaborateurs.</p></div>
      </div>
    </div></section>

    <section className="bg-[#f0ece4] px-5 py-12 sm:px-8 lg:px-12 lg:py-16"><div className="mx-auto max-w-[1400px]">
      <p className={label}>Mise en application</p><h2 className={`${heading} mt-2`}>Une formation construite autour de vos opérations.</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{method.map((step, index) => <article key={step.title} className="rounded-[1.2rem] border border-[#e2d9ca] bg-white p-6"><span className="font-display text-2xl text-[#b59b6c]">0{index + 1}</span><h3 className="mt-3 font-display text-xl text-[#0f211a]">{step.title}</h3><p className="mt-2 text-sm leading-6 text-[#626b64]">{step.detail}</p></article>)}</div>
    </div></section>

    <section className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16"><div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
      <div><p className={label}>Suivi des résultats</p><h2 className={`${heading} mt-2`}>Quels résultats suivre après la formation ?</h2></div>
      <div className="text-sm leading-7 text-[#626b64]"><p>Selon vos objectifs : qualité des prévisions, évolution du RevPAR, coûts de distribution, conversion des demandes ou revenus de vente additionnelle. Le choix des indicateurs se fait avec l’établissement.</p><p className="mt-4">Chaque résultat doit être lu dans son contexte : demande, saisonnalité, disponibilité, mix de clientèle et coûts associés. La formation vise à donner des méthodes pour identifier les opportunités, agir et mesurer ; elle ne garantit pas un gain chiffré.</p><Link href="/fr/blog/augmenter-chiffre-affaires-hotel" className="mt-5 inline-flex items-center gap-2 font-semibold text-[#173025] underline underline-offset-4 hover:text-[#806744]">Lire le guide : 8 leviers pour augmenter les revenus <ArrowRight size={14} /></Link></div>
    </div></section>

    <section className="bg-[#0f211a] px-5 py-12 text-white sm:px-8 lg:px-12 lg:py-16"><div className="mx-auto grid max-w-[1400px] items-center gap-8 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
      <div><p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#d3b77f]">Continuité opérationnelle</p><h2 className="mt-2 font-display text-3xl font-medium leading-tight sm:text-4xl">La formation transmet les compétences. Les référentiels permettent de les conserver.</h2><p className="mt-5 max-w-3xl text-sm leading-7 text-white/75">Les équipes évoluent et les outils changent. Pour maintenir les acquis, les méthodes de prévision, d’arbitrage et de suivi doivent pouvoir être consultées et reprises au-delà de la formation. LuxOps peut accompagner leur structuration dans le périmètre convenu avec l’établissement.</p></div>
      <div className="rounded-[1.4rem] border border-white/15 bg-white/[.055] p-6 sm:p-8"><ClipboardList className="text-[#d3b77f]" size={25} /><h3 className="mt-4 font-display text-xl">Le manuel Revenue Management &amp; Distribution</h3><p className="mt-3 text-sm leading-6 text-white/70">Un référentiel disponible séparément sur les prévisions, tarifs, disponibilités, distribution, groupes et yield meetings.</p><TrackedLink href={product} eventName="training_revenue_manual_clicked" eventProperties={{ source_page: route, placement: 'continuity', topic: 'revenue_management', locale: 'fr' }} className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#f4ead7] px-5 text-xs font-semibold text-[#173025] hover:bg-white">Découvrir le manuel <ArrowRight size={14} /></TrackedLink></div>
    </div></section>

    <section id="revenue-training-contact" className="scroll-mt-24 px-5 py-12 sm:px-8 lg:px-12 lg:py-16"><div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
      <div><p className={label}>Engager votre projet</p><h2 className={`${heading} mt-2`}>Parlons des compétences que vous souhaitez développer.</h2><p className="mt-4 max-w-lg text-sm leading-7 text-[#626b64]">Direction, réservations ou Front Office : nous définissons le format d’intervention à partir de vos priorités, de votre organisation et des ressources disponibles.</p><p className="mt-5 flex items-center gap-2 text-xs text-[#806744]"><Download size={14} /> Demande sans engagement commercial immédiat</p></div>
      <div className="rounded-[1.4rem] border border-[#e8e2d7] bg-white p-6 shadow-[0_12px_36px_rgba(40,40,30,.05)] sm:p-8"><h3 className="font-display text-2xl text-[#0f211a]">Échanger sur votre projet de formation</h3><p className="mb-6 mt-2 text-sm leading-6 text-[#626b64]">Décrivez l’établissement, les équipes concernées et les pratiques à renforcer.</p><TrainingQuoteForm locale="fr" topic="Revenue Management & Performance commerciale" /></div>
    </div></section>

    <section className="border-t border-[#e7e1d7] bg-white/65 px-5 py-12 sm:px-8 lg:px-12 lg:py-16"><div className="mx-auto max-w-[1000px]"><p className={label}>Questions fréquentes</p><h2 className={`${heading} mt-2`}>Précisions sur la formation</h2><div className="mt-6 divide-y divide-[#e7e1d7] border-t border-[#e7e1d7]">{faq.map(item => <div key={item.q} className="py-5"><h3 className="font-display text-lg text-[#0f211a]">{item.q}</h3><p className="mt-2 text-sm leading-6 text-[#626b64]">{item.a}</p></div>)}</div></div></section>
  </main>
}
