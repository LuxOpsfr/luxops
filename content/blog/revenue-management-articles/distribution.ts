import type { RevenueDraftArticle } from '../revenue-management-drafts'
import { revenueReferences as ref } from './references'

export const distributionArticle: RevenueDraftArticle = {
  slug: 'distribution-hoteliere-ota-direct',
  fr: {
    title: 'Distribution hôtelière : OTA, channel manager et coûts',
    seoTitle: 'Distribution hôtelière : OTA, direct et channel manager',
    description: 'Comparez vente directe et OTA après coûts d’acquisition, comprenez le channel manager et adaptez le mix selon la demande.',
    intro: 'Une réservation directe et une réservation OTA à 180 € de revenu hébergement HT ne laissent pas nécessairement le même montant après coûts de distribution. Pourtant, écarter le canal le plus coûteux sans regarder la demande qu’il apporte peut laisser une chambre vide. La distribution se pilote par date, par clientèle et par contribution attendue, pas par un taux de commission isolé.',
    sections: [
      {
        id: 'roles',
        heading: 'Quel rôle donner aux OTA et à la vente directe ?',
        paragraphs: [
          'Les OTA apportent visibilité, accès à certains marchés et une infrastructure de réservation. La vente directe permet de maîtriser davantage la relation et les conditions de vente, mais demande un site performant, un moteur de réservation, de la visibilité marketing et parfois du temps d’équipe. Le bon mix change entre une semaine creuse et une nuit de forte compression.',
          'Le canal indique où le client réserve ; le segment décrit la clientèle selon les règles de l’hôtel ; le plan tarifaire associe prix, prestations et conditions. Un voyageur d’affaires individuel peut réserver directement ou via une OTA sous des plans différents. Analysez ces trois dimensions séparément avant d’attribuer une variation au canal.',
        ],
        related: [{ slug: 'revenue-management-hotelier-guide', label: 'Situer la distribution dans la revue commerciale' }],
      },
      {
        id: 'channel-manager',
        heading: 'Ce que fait — et ne fait pas — un channel manager',
        paragraphs: [
          'Selon les connexions de l’hôtel, le channel manager transmet aux canaux les tarifs, disponibilités et règles prises en charge, puis reçoit créations, modifications et annulations de réservations. Le PMS conserve les dossiers utilisés par les équipes ; le moteur du site permet la réservation directe. Ne supposez pas qu’une connexion transmet toutes les restrictions ou tous les suppléments.',
          'Avant d’ouvrir un canal ou un plan, contrôlez le mapping des catégories, occupations et tarifs, puis la réception des réservations dans le PMS avec le dispositif prévu par l’hôtel. Après une modification, vérifiez le statut de transmission et refaites une recherche comme un client jusqu’au récapitulatif du séjour. Une offre visible dans le PMS mais fermée en ligne n’est pas correctement mise en vente.',
        ],
      },
      {
        id: 'couts',
        heading: 'Mettre les coûts d’acquisition dans le bon panier',
        paragraphs: [
          'Partez du revenu hébergement HT pour une même période de séjour. Relevez commissions, frais de paiement, frais de moteur, dépenses publicitaires attribuables et coûts fixes répartis selon une méthode écrite. Vérifiez la base contractuelle de chaque commission : HT ou TTC, chambre seule ou prestations incluses. Une remise déjà déduite du revenu, ou une commission déjà retenue d’un versement net, ne se déduit pas une seconde fois.',
          'Le revenu après ces seuls coûts de distribution n’est ni la contribution complète ni le bénéfice : il reste les coûts nécessaires au séjour et les autres charges. Pour décider d’une promotion ou d’un groupe, comparez ensuite les contributions attendues sur les mêmes dates, avec les coûts de service pertinents.',
        ],
        related: [{ slug: 'calcul-revpar-adr-taux-occupation', label: 'Comprendre le NetRevPAR et son périmètre' }],
      },
      {
        id: 'comparaison',
        heading: 'Exemple fictif : une nuitée à 180 € HT sur deux canaux',
        paragraphs: [
          'Supposons deux réservations comparables de même catégorie et mêmes conditions, chacune à 180 € de revenu hébergement HT. Pour isoler l’effet du canal, supposons que les 6 % du direct comprennent 3 % de marketing attribué, 2 % de frais de moteur et 1 % de paiement ; les 18 % de l’OTA comprennent 16 % de commission sur cette base HT et 2 % de paiement. Ces postes ne se recouvrent pas et ne sont pas ajoutés une seconde fois au total. Ce sont des hypothèses fictives, pas des moyennes de marché ni des contrats réels. Le direct laisse 21,60 € de plus après ces seuls coûts.',
        ],
        table: { headings: ['Élément', 'Direct — hypothèse', 'OTA — hypothèse'], rows: [['Revenu hébergement HT', '180 €', '180 €'], ['Coût d’acquisition retenu', '6 % = 10,80 €', '18 % = 32,40 €'], ['Revenu après acquisition', '169,20 €', '147,60 €']] },
        note: 'Ce calcul compare deux ventes réalisées. Il ne démontre pas qu’une réservation OTA donnée aurait pu être gagnée en direct.',
      },
      {
        id: 'saison',
        heading: 'Deux dates, deux arbitrages possibles',
        paragraphs: [
          'En basse saison, un mardi avec 25 chambres prévues sur 60 peut justifier de maintenir une OTA active malgré sa commission, si elle apporte une demande additionnelle et que le revenu après acquisition couvre les coûts pertinents du séjour. Avant de baisser le prix public, contrôlez les restrictions, la présentation de l’offre et la conversion du site direct.',
          'Pour un samedi de salon avec 55 chambres déjà au portefeuille et une forte demande encore probable, l’hôtel peut réduire une promotion peu contributive ou limiter l’inventaire sur certains canaux, sous réserve des contrats et règles de parité applicables. Ce n’est pas une consigne universelle : annulations, groupes, durée de séjour et valeur des clients attendus peuvent changer la décision.',
        ],
        related: [{ slug: 'strategie-tarifaire-hotel', label: 'Suivre un arbitrage commercial lors d’un salon' }],
      },
      {
        id: 'revue',
        heading: 'Une revue mensuelle du mix qui conduit à une action',
        paragraphs: [
          'Pour le bilan réalisé, partez des nuitées effectivement séjournées dans le mois, de leur revenu hébergement HT et des coûts rattachés ; gardez les annulations et frais éventuels distincts des nuitées occupées. Pour piloter les dates futures, suivez séparément les réservations au portefeuille. Croisez canal, segment et plan tarifaire : une part OTA en hausse peut refléter une clientèle loisirs plus présente, pas seulement un problème de site direct.',
          'Choisissez une intervention mesurable — corriger une restriction, améliorer le parcours direct, revoir une promotion — et notez l’effet attendu sur le mix et le revenu après acquisition. Recontrôlez au relevé suivant ; une seule semaine ne suffit pas toujours à juger.',
        ],
      },
    ],
    manualNote: 'Synthèse pratique du chapitre 5 (§§ 5.1 à 5.4) du manuel LuxOps Revenue Management & Distribution. Le calcul Direct/OTA à 6 % et 18 % et les deux dates de saison sont des scénarios fictifs créés pour cet article.',
    sources: [ref.distribution, ref.netRevpar, ref.metrics],
  },
  en: {
    title: 'Hotel distribution: OTAs, channel managers and acquisition costs',
    seoTitle: 'Hotel distribution: direct, OTAs and channel-manager costs',
    description: 'Compare direct and OTA bookings after acquisition cost, understand channel-manager functions and adapt channel mix to demand.',
    intro: 'A direct booking and an OTA booking at €180 before tax may leave different revenue after acquisition. Yet dropping the more expensive channel without asking whether it brought incremental demand can leave a room empty. Distribution works by stay date, guest segment and contribution, not commission rate alone.',
    sections: [
      {
        id: 'roles',
        heading: 'Different jobs for OTAs and direct sales',
        paragraphs: [
          'OTAs bring visibility, access to certain markets and a booking platform. Direct sales offer more control of the relationship and selling conditions, but require a functioning website, booking engine, marketing reach and sometimes staff time. The useful mix changes between a soft weekday and a compressed event night.',
          'A channel is how a booking reaches the hotel; a segment describes the customer according to hotel rules; a rate plan combines price, inclusions and conditions. A business traveller may book direct or through an OTA under different plans. Analyse all three separately.',
        ],
        related: [{ slug: 'revenue-management-hotelier-guide', label: 'Place distribution in the commercial review' }],
      },
      {
        id: 'channel-manager',
        heading: 'What a channel manager does — and does not do',
        paragraphs: [
          'Subject to each integration, a channel manager sends supported rates, availability and rules to connected channels and receives booking creations, changes and cancellations. The PMS holds the operational guest records; the website booking engine handles direct reservations. Never assume every restriction or supplement travels over every connection.',
          'Before opening a channel or plan, check room-type, occupancy and rate-plan mapping and verify reservation return to the PMS using the hotel’s approved test process. After a change, inspect transmission status and search like a guest through the booking summary. A rate visible in the PMS but closed online is not properly on sale.',
        ],
      },
      {
        id: 'costs',
        heading: 'Keep acquisition costs in separate buckets',
        paragraphs: [
          'Start from room revenue before tax for the same stay period. Separate commissions, payment charges, booking-engine fees, attributable marketing spend and fixed charges allocated under a documented rule. Check whether commission applies to pre- or post-tax value and whether it covers extras. Do not deduct a discount already removed from revenue or a commission already withheld from net settlement twice.',
          'Revenue after these distribution costs is neither full contribution nor profit: stay-service costs and other expenses remain. A promotion or group decision needs a like-for-like contribution comparison on the same dates.',
        ],
        related: [{ slug: 'calcul-revpar-adr-taux-occupation', label: 'See how NetRevPAR uses a stated cost scope' }],
      },
      {
        id: 'comparison',
        heading: 'Fictional example: the same €180 room night',
        paragraphs: ['Assume two comparable bookings with the same room type and conditions, each producing €180 in room revenue before tax. The fictional direct cost of 6% consists of 3% attributable marketing, 2% booking-engine fee and 1% payment fee. The fictional OTA cost of 18% consists of 16% commission on that pre-tax room base and 2% payment fee. These non-overlapping items are included in the totals once only; they are not market averages or real contracts. Direct leaves €21.60 more after these costs alone.'],
        table: { headings: ['Item', 'Direct — assumed', 'OTA — assumed'], rows: [['Room revenue before tax', '€180', '€180'], ['Acquisition cost included', '6% = €10.80', '18% = €32.40'], ['Revenue after acquisition', '€169.20', '€147.60']] },
        note: 'This compares two completed sales. It does not establish that a given OTA guest would otherwise have booked direct.',
      },
      {
        id: 'seasons',
        heading: 'Two dates can call for different channel choices',
        paragraphs: [
          'On a soft Tuesday with 25 rooms forecast in a 60-room hotel, retaining an OTA may make sense if it brings incremental demand and the resulting revenue covers relevant stay costs. Check restrictions, offer presentation and direct-site conversion before lowering the public rate.',
          'On a trade-fair Saturday with 55 rooms already on the books and strong demand still expected, the hotel may reduce a low-contribution promotion or limit inventory on selected channels, subject to contracts and applicable parity rules. Cancellations, groups, stay length and expected guest value can reverse that judgement.',
        ],
        related: [{ slug: 'strategie-tarifaire-hotel', label: 'Follow a trade-fair commercial decision' }],
      },
      {
        id: 'review',
        heading: 'A monthly channel review with a measurable next step',
        paragraphs: [
          'For an actual monthly review, start with room nights stayed in the month, their room revenue before tax and linked distribution costs; keep cancellations and associated fees apart from occupied room nights. Track bookings on the books separately for future-date decisions. Cross-tab channel, segment and rate plan. A rising OTA share may reflect more leisure demand rather than a failing direct site.',
          'Choose one measurable intervention — fix a restriction, improve the direct path or revise a promotion — and record its expected effect on mix and revenue after acquisition. Check again at the next snapshot; a single week may be too noisy.',
        ],
      },
    ],
    manualNote: 'A practical synthesis of chapter 5 (§§ 5.1–5.4) of the LuxOps Revenue Management & Distribution handbook. The 6%/18% direct-versus-OTA calculation and seasonal dates are fictional scenarios created for this article.',
    sources: [ref.distribution, ref.netRevpar, ref.metrics],
  },
}
