import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check } from 'lucide-react'
import TrackedLink from '@/components/TrackedLink'
import TrackSectionExposure from '@/components/TrackSectionExposure'
import { alternatesForRoute, localizedRouteUrl } from '@/lib/localized-routes'

const route = '/fr/blog/augmenter-chiffre-affaires-hotel'
const training = '/fr/formation-revenue-management-hotel'
const manual = '/fr/playbooks/revenue-management'

export const metadata: Metadata = {
  title: 'Comment augmenter le CA d’un hôtel ? 8 leviers | LuxOps',
  description: 'Tarifs, RevPAR, distribution, upselling et routines commerciales : 8 leviers concrets pour améliorer les revenus et la rentabilité d’un hôtel.',
  alternates: { canonical: localizedRouteUrl('blogIncreaseHotelRevenue', 'fr'), languages: alternatesForRoute('blogIncreaseHotelRevenue') },
  openGraph: {
    type: 'article', locale: 'fr_FR', url: localizedRouteUrl('blogIncreaseHotelRevenue', 'fr'),
    title: 'Comment augmenter le chiffre d’affaires d’un hôtel ? 8 leviers concrets',
    description: 'Une méthode pratique pour travailler prix, demande, distribution, conversion et ventes additionnelles sans confondre chiffre d’affaires et bénéfice.',
  },
}

type Lever = {
  title: string
  paragraphs: string[]
  points?: string[]
  example: { title?: string; paragraphs: string[]; points?: string[] }
  action: string
}

const levers: Lever[] = [
  {
    title: 'Comprendre d’où vient réellement votre chiffre d’affaires',
    paragraphs: [
      'Avant d’agir, il faut savoir ce qui fait évoluer la performance. Le chiffre d’affaires hébergement correspond au nombre de chambres vendues multiplié par leur prix moyen, sur une période et un périmètre cohérents.',
      'Trois indicateurs permettent de lire cette dynamique. Le traitement des chambres hors service et les conventions de reporting doivent rester comparables d’une période à l’autre.',
    ],
    points: ['Taux d’occupation = chambres vendues ÷ chambres disponibles à la vente.', 'ADR = chiffre d’affaires chambres ÷ chambres vendues.', 'RevPAR = chiffre d’affaires chambres ÷ chambres disponibles à la vente.'],
    example: { paragraphs: [
      'Un hôtel dispose de 80 chambres disponibles à la vente pour une nuit. Il en vend 60 à un prix moyen de 150 € : son taux d’occupation est de 75 %, son chiffre d’affaires chambres de 9 000 € et son RevPAR de 112,50 €.',
      'À 155 € avec le même volume, le chiffre d’affaires serait de 9 300 €. Mais si deux chambres de moins sont vendues, 58 × 155 € = 8 990 €. Une hausse du prix moyen ne garantit donc pas une hausse du chiffre d’affaires. Ce scénario illustre un calcul, pas la réaction réelle de la demande.',
    ] },
    action: 'Reconstituez les performances par date de séjour, segment et canal avant de choisir le levier à travailler.',
  },
  {
    title: 'Anticiper la demande grâce au pickup et au forecast',
    paragraphs: [
      'Un hôtel ne devrait pas attendre la clôture du mois pour découvrir qu’une date aurait pu être mieux valorisée. Le pickup suit l’évolution des réservations pour une même date de séjour entre deux extractions comparables.',
      'Le forecast estime la demande ou le résultat futur à partir des réservations déjà enregistrées, des tendances passées et des informations disponibles.',
    ],
    example: { paragraphs: [
      'Pour une date future, un hôtel de 80 chambres compte 52 chambres réservées à J−14. Sur plusieurs dates comparables, le gain net entre J−14 et l’arrivée a été de 17 chambres. Une première hypothèse est 52 + 17 = 69 chambres, soit 86,25 % d’occupation prévisionnelle.',
      'Ce chiffre n’est pas une certitude : événements locaux, groupes, annulations, chambres hors service et différences entre dates comparées peuvent le modifier. Si la demande paraît forte, réexaminez tarifs, disponibilités et restrictions. Si elle paraît faible, vérifiez d’abord la visibilité des chambres avant de baisser les prix.',
    ] },
    action: 'Conservez des snapshots datés à J−30, J−14 et J−7 sur les dates prioritaires, puis confrontez chaque prévision au résultat réel.',
  },
  {
    title: 'Développer les revenus sans négliger les coûts de distribution',
    paragraphs: [
      'Deux réservations de même montant ne contribuent pas toujours de la même façon à la rentabilité. Commissions, acquisition, paiement et autres coûts varient selon le canal.',
    ],
    example: { paragraphs: [
      'Comparez deux réservations de chambre de 150 € sur une même base monétaire. Via une OTA avec une commission hypothétique de 18 %, soit 27 €, le revenu après cette commission est de 123 €. En direct, avec 8 € de coûts d’acquisition et de transaction retenus pour l’exemple, il est de 142 €. La différence est de 19 € dans ces hypothèses.',
      'Ces montants ne sont pas des bénéfices nets : les autres coûts d’exploitation sont exclus. Une OTA peut apporter une demande que l’hôtel n’aurait pas captée en direct. La bonne question est donc : quels canaux apportent une demande rentable, à quel moment et à quel coût réel ?',
    ] },
    action: 'Comparez le revenu après coûts d’acquisition de réservations équivalentes, puis identifiez les dates où un arbitrage est réellement possible.',
  },
  {
    title: 'Convertir davantage de demandes de réservation en ventes',
    paragraphs: [
      'Avant d’acheter davantage de trafic, vérifiez ce que l’hôtel fait des demandes déjà reçues par téléphone, email, formulaire ou moteur de réservation.',
      'Le délai de réponse, une proposition peu claire, une disponibilité mal présentée, l’absence d’alternative à une catégorie complète ou un suivi incomplet peuvent freiner la conversion.',
    ],
    example: { paragraphs: [
      'Sur 100 demandes commerciales comparables, 20 deviennent des réservations : le taux de conversion est de 20 %. Si le traitement des demandes en convertit 25, il passe à 25 %, soit cinq réservations supplémentaires dans cet exemple.',
      'Il faut ensuite vérifier la disponibilité, la valeur de ces réservations et leurs coûts pour mesurer la contribution réelle. Le suivi des demandes non finalisées doit respecter les autorisations et règles applicables.',
    ] },
    action: 'Définissez des standards de réponse, mesurez les délais, suivez les motifs de non-conversion et entraînez les équipes aux propositions alternatives.',
  },
  {
    title: 'Développer la vente additionnelle et les surclassements',
    paragraphs: [
      'Le Revenue Management se poursuit après la réservation. Les équipes Front Office et réservations peuvent présenter une catégorie supérieure, un surclassement payant, un late check-out compatible avec l’exploitation ou une expérience complémentaire.',
      'La proposition peut aussi intervenir avant l’arrivée, lorsque le client organise son séjour. Elle doit répondre à un besoin, sans pression commerciale.',
    ],
    example: { paragraphs: [
      'Un hôtel compte 400 arrivées éligibles à une proposition de surclassement pendant un mois. Si 12 % acceptent une offre moyenne de 25 €, le calcul est 400 × 12 % × 25 € = 1 200 € de chiffre d’affaires additionnel brut théorique.',
      'L’exemple suppose que toutes les offres acceptées peuvent être honorées. Il exclut coûts, disponibilité des catégories supérieures, substitution et autres effets commerciaux.',
    ] },
    action: 'Entraînez les équipes à reconnaître les occasions, expliquer les bénéfices et suivre la conversion des seules offres réellement éligibles.',
  },
  {
    title: 'Mieux valoriser les revenus des autres départements',
    paragraphs: [
      'Selon l’établissement, restauration, Spa, room service et expériences contribuent aussi au chiffre d’affaires. Leur vente demande une coordination : la réception doit connaître les offres disponibles ; les services concernés doivent pouvoir les délivrer ; les managers doivent en connaître les coûts.',
    ],
    example: { paragraphs: [
      'Vingt petits-déjeuners supplémentaires à 18 € génèrent 360 € de chiffre d’affaires brut. La contribution dépend ensuite du coût des denrées, de la main-d’œuvre additionnelle éventuelle, de la fiscalité et des autres dépenses.',
      'Une promotion qui augmente les ventes sans préserver suffisamment de marge n’est pas nécessairement une bonne décision.',
    ] },
    action: 'Repérez les services à forte valeur perçue, vérifiez la capacité de production et suivez revenus et coûts ensemble.',
  },
  {
    title: 'Évaluer les groupes et contrats selon leur contribution réelle',
    paragraphs: [
      'Un groupe sécurise un volume, mais peut occuper des chambres sur des dates où la demande individuelle aurait été forte. Évaluez les nuitées, tarifs, annulations, attrition, services annexes, commissions et ventes susceptibles d’être déplacées.',
    ],
    example: { paragraphs: [
      'Un groupe demande 20 chambres pendant deux nuits à 120 € : 20 × 2 × 120 € = 4 800 € de valeur hébergement. Si ces 40 nuitées pouvaient réellement être vendues individuellement à 150 €, leur valeur théorique serait de 6 000 € avant coûts.',
      'Il serait incorrect d’en déduire automatiquement qu’il faut refuser le groupe. La probabilité de vendre toutes les chambres autrement, les coûts de distribution, la restauration, les privatisations et les conditions contractuelles changent l’arbitrage.',
    ] },
    action: 'Établissez une méthode d’évaluation qui intègre revenu attendu, coûts, risque et solutions commerciales alternatives.',
  },
  {
    title: 'Faire du Revenue Management une routine collective',
    paragraphs: [
      'Un tableau de bord ne suffit pas si les décisions restent isolées. Direction, réservations, Front Office et autres services ont besoin de priorités communes et de responsabilités explicites.',
      'Une réunion commerciale courte et préparée peut examiner les écarts, les dates sensibles, quelques décisions et leur exécution dans les outils.',
    ],
    example: { title: 'Une réunion simplifiée de 30 minutes', points: [
      '5 min · Résultats et écarts par rapport aux prévisions.',
      '10 min · Pickup, demande future, annulations et dates prioritaires.',
      '10 min · Tarifs, canaux, restrictions, opportunités et décisions.',
      '5 min · Responsables, contrôles de mise en vente et prochain suivi.',
    ], paragraphs: ['Ce format est à adapter à la maturité de l’hôtel. Il ne remplace pas les revues Revenue Management, Finance et commerciales déjà en place.'] },
    action: 'Conservez un journal des décisions avec date, données examinées, action, responsable et résultat à vérifier.',
  },
]

const faq = [
  ['Comment augmenter le chiffre d’affaires d’un hôtel sans ajouter de chambres ?', 'Travaillez le prix moyen, l’occupation, les coûts de distribution, la conversion des demandes et les revenus complémentaires. Évaluez chaque levier selon la demande, la capacité et les coûts de l’établissement.'],
  ['Quelle différence entre chiffre d’affaires, RevPAR et rentabilité ?', 'Le chiffre d’affaires mesure les ventes. Le RevPAR rapporte le chiffre d’affaires chambres aux chambres disponibles à la vente. La rentabilité tient compte des coûts ; une hausse du RevPAR ne garantit donc pas un gain équivalent de bénéfice.'],
  ['Le Revenue Management est-il utile dans un petit hôtel ?', 'Oui. Même un petit établissement peut suivre pickup, demande et coûts de distribution. La fréquence et la complexité des analyses doivent rester proportionnées à ses ressources.'],
  ['Comment former une réception à l’upselling ?', 'Travaillez la connaissance des catégories, les situations de proposition, les bénéfices clients, les limites opérationnelles et le suivi des résultats, avec mises en situation et coaching.'],
  ['Comment conserver les bonnes pratiques malgré les départs ?', 'Reliez la formation à des procédures documentées, des responsabilités définies, des modèles de suivi et des contrôles réguliers. Les nouveaux arrivants peuvent ainsi reprendre les méthodes existantes.'],
]

const sectionTitle = 'font-display text-2xl font-medium leading-tight text-[#0f211a] sm:text-3xl'

function PathwayLink({ kind, placement, children, className }: { kind: 'training' | 'manual'; placement: string; children: React.ReactNode; className: string }) {
  const destination = kind === 'training' ? training : manual
  return <TrackedLink href={destination} eventName={kind === 'training' ? 'revenue_article_training_clicked' : 'revenue_article_manual_clicked'} eventProperties={{ source_page: route, destination_page: destination, placement, topic: 'revenue_management', locale: 'fr' }} className={className}>{children}<ArrowRight size={15} className="shrink-0" /></TrackedLink>
}

function ContextualCta({ kind, placement, title, description }: { kind: 'training' | 'manual'; placement: string; title: string; description: string }) {
  return <aside className="my-9 flex flex-col gap-4 rounded-[1.2rem] border border-[#dfd2bd] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6">
    <div><p className="text-[10px] font-semibold uppercase tracking-[.16em] text-[#92734a]">{kind === 'training' ? 'Formation Revenue Management' : 'Manuel SOP Revenue Management'}</p><h3 className="mt-1 font-display text-xl text-[#0f211a]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#626b64]">{description}</p></div>
    <PathwayLink kind={kind} placement={placement} className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#0f211a] px-5 text-xs font-semibold text-white hover:bg-[#263d31] sm:self-auto">{kind === 'training' ? 'Voir la formation' : 'Voir le manuel'}</PathwayLink>
  </aside>
}

const sidebarOffers = [
  {
    kind: 'training' as const,
    href: training,
    image: '/images/editorial-hospitality/training-roundtable-wide-v3.jpg',
    imageAlt: 'Équipe hôtelière réunie autour d’une formation',
    eyebrow: 'Former vos équipes',
    title: 'Formation Revenue Management',
    description: 'Managers, réservations et Front Office : travaillez vos décisions et vos pratiques commerciales.',
    cta: 'Découvrir la formation',
  },
  {
    kind: 'manual' as const,
    href: manual,
    image: '/images/editorial-hospitality/dept-revenue-management-v1.png',
    imageAlt: 'Espace de travail consacré au Revenue Management hôtelier',
    eyebrow: 'Structurer vos méthodes',
    title: 'Manuel SOP Revenue Management',
    description: 'Prévision, tarifs, distribution et suivi : un référentiel modifiable pour votre hôtel.',
    cta: 'Découvrir le manuel · 67 €',
  },
]

function VisualOfferCards({ placement }: { placement: string }) {
  return <div role="group" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1" aria-label="Solutions LuxOps pour le Revenue Management">
    {sidebarOffers.map(offer => <TrackedLink key={offer.kind} href={offer.href} eventName={offer.kind === 'training' ? 'revenue_article_training_clicked' : 'revenue_article_manual_clicked'} eventProperties={{ source_page: route, destination_page: offer.href, placement, topic: 'revenue_management', locale: 'fr' }} className="group grid min-w-0 grid-cols-[104px_minmax(0,1fr)] overflow-hidden rounded-[1.2rem] border border-[#dfd4c1] bg-white text-[#0f211a] shadow-[0_10px_28px_rgba(43,40,32,.08)] transition hover:-translate-y-0.5 hover:border-[#cdb78f] hover:shadow-[0_16px_34px_rgba(43,40,32,.13)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a58658] lg:block">
      <div className="relative min-h-[132px] overflow-hidden bg-[#e9e2d4] lg:h-[100px] lg:min-h-0"><Image src={offer.image} alt={offer.imageAlt} fill sizes="(min-width: 1024px) 285px, 104px" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" /></div>
      <div className="min-w-0 p-3.5 lg:p-4"><p className="text-[9px] font-semibold uppercase tracking-[.13em] text-[#92734a]">{offer.eyebrow}</p><h3 className="mt-1 font-display text-base leading-tight text-[#0f211a] lg:text-lg">{offer.title}</h3><p className="mt-2 hidden text-[11px] leading-5 text-[#59655b] lg:block">{offer.description}</p><span className="mt-3 inline-flex min-h-9 w-full items-center justify-between gap-1 rounded-full bg-[#f4f0e8] px-3 text-[10px] font-semibold leading-tight text-[#263a30] transition group-hover:bg-[#e9e0d2] lg:text-[11px]">{offer.cta}<ArrowRight size={13} className="shrink-0" /></span></div>
    </TrackedLink>)}
  </div>
}

function EditorialCta({ kind }: { kind: 'training' | 'manual' | 'final' }) {
  if (kind === 'manual') return <aside className="my-12 rounded-[1.4rem] border border-[#dfd2bd] bg-[#f5f0e7] p-6 sm:p-8">
    <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#92734a]">Continuité opérationnelle</p>
    <h3 className="mt-2 font-display text-2xl text-[#0f211a]">Un référentiel pour maintenir vos pratiques commerciales.</h3>
    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#626b64]">Le manuel SOP Revenue Management &amp; Distribution structure les procédures de prévision, tarification, disponibilité, distribution, groupes et suivi des résultats. Il est proposé séparément et peut être adapté à votre établissement.</p>
    <TrackedLink href={manual} eventName="revenue_article_manual_clicked" eventProperties={{ source_page: route, destination_page: manual, placement: 'methods', topic: 'revenue_management', locale: 'fr' }} className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-[#bda983] bg-white px-5 text-xs font-semibold text-[#173025] hover:bg-[#0f211a] hover:text-white">Consulter le manuel <ArrowRight size={15} /></TrackedLink>
  </aside>
  return <TrackSectionExposure eventName="revenue_article_training_cta_viewed" properties={{ source_page: route, placement: kind, topic: 'revenue_management', locale: 'fr' }}><aside className={`my-12 rounded-[1.4rem] p-6 sm:p-8 ${kind === 'final' ? 'bg-[#0f211a] text-white' : 'border border-[#dfd2bd] bg-[#f5f0e7] text-[#0f211a]'}`}>
    <p className={`text-[10px] font-semibold uppercase tracking-[.18em] ${kind === 'final' ? 'text-[#d3b77f]' : 'text-[#92734a]'}`}>Formation sur mesure</p>
    <h3 className="mt-2 font-display text-2xl">{kind === 'final' ? 'Développez la performance commerciale de vos équipes.' : 'Des opportunités commerciales aux compétences des équipes.'}</h3>
    <p className={`mt-3 max-w-2xl text-sm leading-7 ${kind === 'final' ? 'text-white/75' : 'text-[#626b64]'}`}>Tarification, réservations et vente additionnelle reposent sur des décisions et des pratiques complémentaires. LuxOps accompagne les directions et les équipes opérationnelles pour les développer dans le contexte de leur établissement.</p>
    <div className="mt-5 flex flex-wrap gap-3"><TrackedLink href={training} eventName="revenue_article_training_clicked" eventProperties={{ source_page: route, destination_page: training, placement: kind, topic: 'revenue_management', locale: 'fr' }} className={`inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-xs font-semibold ${kind === 'final' ? 'bg-[#f4ead7] text-[#173025] hover:bg-white' : 'bg-[#0f211a] text-white hover:bg-[#263d31]'}`}>Découvrir la formation Revenue Management <ArrowRight size={15} /></TrackedLink>{kind === 'final' && <TrackedLink href={manual} eventName="revenue_article_manual_clicked" eventProperties={{ source_page: route, destination_page: manual, placement: 'final', topic: 'revenue_management', locale: 'fr' }} className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-white/85 underline underline-offset-4 hover:text-white">Voir le manuel opérationnel</TrackedLink>}</div>
  </aside></TrackSectionExposure>
}

export default async function HotelRevenueArticle({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== 'fr') notFound()
  return <main className="bg-[#faf7f2] pt-[var(--site-header-height)] text-[#20231f]">
    <header className="border-b border-[#e7e1d7] px-5 pb-11 pt-9 sm:px-8 lg:px-12 lg:pb-14 lg:pt-14"><div className="mx-auto max-w-[1080px]">
      <Link href="/fr/blog" className="text-xs font-semibold text-[#806744] underline-offset-4 hover:underline">← Ressources LuxOps</Link>
      <p className="mt-7 text-[10px] font-semibold uppercase tracking-[.18em] text-[#92734a]">Revenue Management · Guide pratique</p>
      <h1 className="mt-3 max-w-4xl font-display text-4xl font-medium leading-[1.1] tracking-[-.035em] text-[#0f211a] sm:text-5xl lg:text-[3.6rem]">Comment augmenter le chiffre d’affaires d’un hôtel ? 8 leviers concrets</h1>
      <p className="mt-6 max-w-3xl text-base leading-8 text-[#4d5a51]">Augmenter les revenus ne consiste pas uniquement à augmenter le prix des chambres. Vendre au bon moment, anticiper la demande, choisir les bons canaux, convertir davantage de demandes et proposer des services pertinents sont des décisions complémentaires.</p>
      <div className="mt-6 flex flex-wrap gap-3"><PathwayLink kind="training" placement="article_hero" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0f211a] px-5 text-xs font-semibold text-white hover:bg-[#263d31]">Découvrir la formation</PathwayLink><PathwayLink kind="manual" placement="article_hero" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#bda983] bg-white px-5 text-xs font-semibold text-[#173025] hover:bg-[#f5f0e7]">Découvrir le manuel SOP</PathwayLink></div>
      <p className="mt-5 max-w-3xl text-sm leading-7 text-[#626b64]">Ces leviers concernent la direction et le Revenue Management, mais aussi les réservations, la réception et les autres départements. Les exemples ci-dessous sont illustratifs : l’enjeu est de préserver la contribution économique des ventes, au-delà du chiffre d’affaires brut.</p>
    </div></header>

    <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,1fr)_285px] lg:gap-12 lg:px-12 lg:py-14">
      <article className="min-w-0 max-w-[900px]">
        {levers.map((lever, index) => <div key={lever.title}>
          <section id={`levier-${index + 1}`} className="scroll-mt-28 border-b border-[#e7e1d7] py-11 sm:py-14">
            <p className="font-display text-2xl text-[#b59b6c]">0{index + 1}</p><h2 className={`${sectionTitle} mt-2`}>{lever.title}</h2>
            {lever.paragraphs.map(p => <p key={p} className="mt-4 text-[15px] leading-8 text-[#48564d]">{p}</p>)}
            {lever.points && <ul className="mt-5 space-y-2 pl-1">{lever.points.map(point => <li key={point} className="flex gap-3 text-sm leading-7 text-[#48564d]"><Check size={16} className="mt-1.5 shrink-0 text-[#a58658]" />{point}</li>)}</ul>}
            <div className="mt-7 rounded-[1.15rem] bg-[#f0ece4] p-5 sm:p-6"><h3 className="font-display text-lg text-[#0f211a]">{lever.example.title ?? 'Exemple pédagogique'}</h3>{lever.example.paragraphs.map(p => <p key={p} className="mt-3 text-sm leading-7 text-[#48564d]">{p}</p>)}{lever.example.points && <ul className="mt-3 space-y-1 text-sm leading-7 text-[#48564d]">{lever.example.points.map(point => <li key={point}>• {point}</li>)}</ul>}</div>
            <p className="mt-6 border-l-2 border-[#b59b6c] pl-4 text-sm leading-7 text-[#314238]"><strong>À faire · </strong>{lever.action}</p>
            {index === 0 && <p className="mt-5 text-sm leading-7 text-[#626b64]">Pour approfondir les définitions : <Link href="/fr/blog/calcul-revpar-adr-taux-occupation" className="font-semibold text-[#173025] underline underline-offset-4">calcul du RevPAR, de l’ADR et du taux d’occupation</Link>.</p>}
            {index === 1 && <p className="mt-5 text-sm leading-7 text-[#626b64]">Méthode détaillée : <Link href="/fr/blog/pickup-forecast-hotelier" className="font-semibold text-[#173025] underline underline-offset-4">suivre le pickup et construire un forecast</Link>.</p>}
          </section>
          {index === 0 && <div className="mt-8 lg:hidden"><VisualOfferCards placement="mobile_after_first_lever" /></div>}
          {index === 1 && <ContextualCta kind="manual" placement="after_forecast" title="Transformer le forecast en procédure suivie." description="Le manuel réunit les méthodes de prévision, de tarification et de contrôle des disponibilités pour votre établissement." />}
          {index === 3 && <ContextualCta kind="training" placement="after_conversion" title="Faire progresser les pratiques de vente des équipes." description="Une formation adaptée aux réservations et au Front Office pour mieux traiter les demandes et proposer les bonnes alternatives." />}
          {index === 4 && <EditorialCta kind="training" />}
          {index === 5 && <ContextualCta kind="manual" placement="after_other_departments" title="Relier les décisions commerciales aux opérations." description="Le manuel donne un cadre commun à la distribution, aux groupes et au suivi des résultats." />}
        </div>)}

        <section id="transmettre" className="scroll-mt-28 py-12"><h2 className={sectionTitle}>Former les équipes ne suffit pas : comment conserver les résultats ?</h2>
          <p className="mt-4 text-[15px] leading-8 text-[#48564d]">Une équipe peut apprendre à produire un forecast, animer un yield meeting ou proposer des surclassements. Si ces pratiques reposent uniquement sur les personnes en poste, elles risquent de disparaître lors d’un départ, d’un recrutement ou d’un changement de logiciel.</p>
          <p className="mt-4 text-[15px] leading-8 text-[#48564d]">La formation développe les compétences individuelles. Les référentiels structurent leur application collective : préparation du forecast, données à consulter avant une décision tarifaire, contrôles des tarifs et disponibilités diffusés, déroulé du yield meeting, responsabilités et indicateurs de suivi.</p>
          <p className="mt-4 text-[15px] leading-8 text-[#48564d]">Les outils complètent ces dimensions. Un PMS, un RMS ou un reporting peut automatiser certains calculs, mais ne remplace ni la compréhension des résultats ni la validation des décisions. LuxOps relie ainsi compétences humaines, outils et méthodes transmissibles.</p>
          <EditorialCta kind="manual" />
        </section>

        <section id="plan-30-jours" className="scroll-mt-28 border-t border-[#e7e1d7] py-12"><h2 className={sectionTitle}>Plan d’action : améliorer les revenus de votre hôtel en 30 jours</h2><p className="mt-4 text-sm leading-7 text-[#626b64]">Un cadre de travail pour lancer les premières actions, sans promesse d’augmentation chiffrée en trente jours.</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">{[
            ['Semaine 1 · Diagnostic', 'Réconcilier les données PMS, vérifier les indicateurs, repérer dates, canaux et segments prioritaires, recenser les opportunités de vente additionnelle.'],
            ['Semaine 2 · Choix des leviers', 'Sélectionner deux ou trois opportunités réalistes, attribuer les responsabilités, vérifier la capacité et les coûts, fixer les indicateurs de suivi.'],
            ['Semaine 3 · Mise en pratique', 'Former les équipes concernées, tester les procédures à petite échelle, documenter les décisions et vérifier leur application dans les outils.'],
            ['Semaine 4 · Mesure et stabilisation', 'Comparer les résultats au point de départ, tenir compte de la saisonnalité, corriger les méthodes et formaliser les routines à conserver.'],
          ].map(([title, text]) => <div key={title} className="rounded-[1.1rem] border border-[#e7e1d7] bg-white p-5"><h3 className="font-display text-lg text-[#0f211a]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#626b64]">{text}</p></div>)}</div>
        </section>

        <section className="border-t border-[#e7e1d7] py-12"><h2 className={sectionTitle}>Conclusion : les revenus progressent quand les décisions deviennent des pratiques</h2><p className="mt-4 text-[15px] leading-8 text-[#48564d]">Tarification, distribution, conversion, vente additionnelle et coordination se renforcent mutuellement. Il faut identifier les opportunités adaptées à l’établissement, développer les compétences et installer des méthodes de pilotage utilisables dans la durée.</p><p className="mt-4 text-[15px] leading-8 text-[#48564d]">Multiplier les outils n’est pas toujours nécessaire. Il faut surtout savoir quelles informations consulter, qui décide, comment les actions sont appliquées et comment leurs résultats sont mesurés.</p><EditorialCta kind="final" /></section>

        <section id="questions" className="scroll-mt-28 border-t border-[#e7e1d7] py-12"><h2 className={sectionTitle}>Questions fréquentes</h2><div className="mt-5 divide-y divide-[#e7e1d7]">{faq.map(([q, a]) => <div key={q} className="py-5"><h3 className="font-display text-lg text-[#0f211a]">{q}</h3><p className="mt-2 text-sm leading-7 text-[#626b64]">{a}</p></div>)}</div></section>
      </article>
      <aside className="hidden lg:block" aria-label="Solutions LuxOps pour aller plus loin"><div className="sticky top-28"><VisualOfferCards placement="sticky_visual_offers" /></div></aside>
    </div>
  </main>
}
