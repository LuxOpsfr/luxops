import type { RevenueDraftArticle } from '../revenue-management-drafts'
import { revenueReferences as ref } from './references'

export const pickupArticle: RevenueDraftArticle = {
  slug: 'pickup-forecast-hotelier',
  fr: {
    title: 'Pickup et forecast hôtelier : méthode de prévision des réservations',
    seoTitle: 'Pickup hôtelier et forecast : calcul et tableau de suivi',
    description: 'Mesurez le pickup net sur une même date de séjour et construisez un forecast à J-30, J-14 et J-7 à partir d’un export PMS.',
    intro: 'Pour le samedi étudié, un hôtel fictif de 60 chambres a 28 chambres au portefeuille à J-21, puis 38 à J-14. Le pickup net de la semaine est de +10 chambres. Ce constat ne dit pas encore combien seront vendues à l’arrivée : cette seconde question relève du forecast.',
    sections: [
      {
        id: 'definitions',
        heading: 'Pickup brut, pickup net et booking pace : préciser ce que l’on compte',
        paragraphs: [
          'Un rapport de « pick-up » peut désigner les nouvelles réservations prises depuis le relevé précédent. Pour piloter le portefeuille, utilisez aussi sa variation nette : chambres OTB au relevé récent moins chambres OTB au relevé ancien, pour la même date de séjour. Cette différence intègre nouvelles réservations, annulations et modifications de séjour. Certains PMS traitent séparément les changements de catégorie ou les blocs de groupe ; vérifiez leur logique avant de comparer.',
          'Exemple fictif entre J-21 et J-14 : 13 nouvelles chambres-nuits et 3 annulées produisent un pickup net de +10. On retrouve 28 + 13 − 3 = 38 chambres OTB. Le booking pace consiste à suivre ce rythme à plusieurs lead times — délais entre le relevé et l’arrivée — plutôt qu’à regarder seulement l’occupation du jour.',
        ],
        table: { headings: ['Même samedi de séjour', 'OTB', 'Ce qui a changé'], rows: [['J-21', '28', 'Point de départ'], ['J-14', '38', '+13 nouvelles, −3 annulées = +10 net']] },
      },
      {
        id: 'comparables',
        heading: 'Choisir des dates historiques vraiment comparables',
        paragraphs: [
          'Exportez, pour plusieurs samedis passés, le portefeuille tel qu’il était à J-14 puis le réalisé final. Gardez le même jour de semaine, une saison proche, une capacité stable et des conditions de vente comparables. Écartez ou annotez les dates affectées par un salon exceptionnel, un bloc de groupe hors norme, des travaux ou une modification majeure de politique d’annulation.',
          'Supposons quatre samedis illustratifs dont le gain net entre J-14 et l’arrivée a été de +12, +14, +16 et +14 chambres. La médiane est +14. Ce n’est pas une promesse : elle donne une base à corriger avec les informations connues aujourd’hui. Si un groupe de 12 chambres menace d’annuler, le risque doit apparaître séparément, pas disparaître dans la moyenne.',
        ],
        table: { headings: ['Date analogue fictive', 'OTB J-14', 'Chambres réalisées', 'Gain net restant'], rows: [['A', '37', '49', '+12'], ['B', '36', '50', '+14'], ['C', '39', '55', '+16'], ['D', '35', '49', '+14']] },
      },
      {
        id: 'forecast',
        heading: 'Construire la prévision de chambres vendues',
        paragraphs: [
          'Dans le cas étudié, +14 désigne le gain net futur global entre J-14 et l’arrivée : nouvelles ventes futures diminuées de leurs annulations, moins les pertes futures sur les 38 chambres déjà au portefeuille. Le forecast central est donc 38 OTB + 14 = 52 chambres prévues. Ne retranchez pas encore une fois les annulations du portefeuille. Sur 60 chambres disponibles, cela représente 86,7 % d’occupation prévisionnelle. Il reste 22 chambres non réservées à J-14, dont 14 constituent le gain net attendu, et non nécessairement 14 nouvelles réservations brutes.',
          'L’autre présentation, celle du manuel, détaille les composantes : chambres prévues = portefeuille actuel − pertes futures attendues sur ce portefeuille + ventes futures supplémentaires déjà nettes de leurs propres annulations. Par exemple, si l’on estime 4 pertes sur les 38 OTB et 18 ventes futures nettes de leurs propres annulations, on retrouve 38 − 4 + 18 = 52. Ces valeurs de décomposition sont fictives et ne s’ajoutent pas au +14 : elles l’expliquent.',
          'Pour éviter la fausse précision, ajoutez deux variantes : un scénario prudent si les annulations augmentent ou si un événement se réduit ; un scénario haut si les demandes qualifiées se confirment. Le forecast opérationnel reste une estimation plafonnée par la capacité vendable, distincte de l’occupation réalisée.',
        ],
        note: 'Tous les chiffres de cette page sont fictifs et servent à expliquer la méthode ; ils ne représentent pas un benchmark sectoriel.',
      },
      {
        id: 'suivi',
        heading: 'Le suivi à J-30, J-14 et J-7',
        paragraphs: [
          'Conservez chaque export plutôt que d’écraser le précédent. Le relevé J-21 intermédiaire montre ici 28 chambres ; il explique le passage de 18 OTB à J-30 à 38 à J-14. À J-7, supposons 45 OTB. Si des dates comparables ont gagné encore +6, +7, +8 et +7 chambres entre J-7 et l’arrivée, la médiane de +7 confirme une prévision de 52. Le forecast reste identique, mais son fondement a été réexaminé.',
        ],
        table: {
          headings: ['Relevé', 'OTB', 'Pickup depuis relevé précédent', 'Gain net futur retenu', 'Forecast chambres'],
          rows: [['J-30', '18', '—', 'À instruire', '—'], ['J-21', '28', '+10', 'À instruire', '—'], ['J-14', '38', '+10', '+14', '52'], ['J-7', '45', '+7', '+7', '52']],
        },
        related: [{ slug: 'apprendre-revenue-management-hotelier', label: 'Faire de ce suivi un exercice de prise en main' }],
      },
      {
        id: 'pms',
        heading: 'Reproduire la méthode avec un export PMS ou Excel',
        paragraphs: [
          'Dans un fichier, créez une ligne par date de séjour et par date de relevé : la date à laquelle une réservation est enregistrée ne remplace pas la nuit étudiée. Conservez séparément la capacité utilisable, le dénominateur des indicateurs, l’OTB chambres, le revenu hébergement OTB, les annulations, les options et une note sur les groupes. Calculez le pickup net par différence d’OTB entre deux relevés identiques en périmètre. Ajoutez ensuite l’hypothèse de gain net futur, sa source historique et les raisons d’un ajustement ; gardez le budget dans une colonne distincte.',
          'Contrôlez les doublons, les séjours qui couvrent plusieurs nuits et les blocs non confirmés. Les chambres nominatives d’un groupe déjà dans l’OTB ne sont pas à ajouter de nouveau ; n’ajoutez que le complément attendu non compté, et traitez les options à part. Un export de réservations par dossier n’est pas toujours un export de nuitées-chambres par date de séjour.',
        ],
      },
      {
        id: 'decision',
        heading: 'Que faire de la prévision, puis de son erreur ?',
        paragraphs: [
          'Si 52 chambres sont attendues, il reste huit chambres probablement invendues dans le scénario central. Le responsable peut vérifier visibilité, restrictions et segments susceptibles de réserver tard. Si le scénario haut approche 60, il revoit plutôt la disponibilité des offres peu contributives. Le choix dépend aussi de l’ADR et du coût d’acquisition ; le volume seul ne prescrit pas un prix.',
          'Supposons finalement 50 chambres réalisées. L’erreur du forecast J-14 est de +2 chambres. Gardez la prévision initiale, notez les annulations ou demandes manquantes qui expliquent l’écart, puis ajustez la méthode pour les dates suivantes. Évitez de réécrire a posteriori l’hypothèse de +14.',
        ],
        related: [{ slug: 'strategie-tarifaire-hotel', label: 'Voir comment traduire une prévision en décision tarifaire' }],
      },
    ],
    manualNote: 'Méthode pédagogique adaptée du chapitre 2 (§§ 2.2 et 2.4) du manuel LuxOps Revenue Management & Distribution. Le suivi à J-30/J-14/J-7, les médianes et tous les chiffres de l’hôtel de 60 chambres sont des exemples créés pour ce blog, non des tableaux ou cas du manuel.',
    sources: [ref.pickup, ref.metrics, ref.rms],
  },
  en: {
    title: 'Hotel pickup and forecasting: a booking-pace method',
    seoTitle: 'Hotel pickup and forecast: calculations and tracking table',
    description: 'Measure net pickup for the same stay date and build a D-30, D-14 and D-7 room forecast from PMS snapshots.',
    intro: 'For one Saturday, an illustrative 60-room hotel has 28 rooms on the books at D-21 and 38 at D-14. The week’s net pickup is ten rooms. That observation does not say how many rooms will be sold by arrival; answering that requires a forecast.',
    sections: [
      {
        id: 'terms',
        heading: 'Gross pickup, net pickup and booking pace',
        paragraphs: [
          'Some pickup reports count new bookings made since the last report. For inventory control, also calculate the net change: rooms on the books (OTB) in the recent snapshot minus OTB in the earlier one, for the same stay date. It captures new bookings, cancellations and stay changes. PMS treatment of room-type changes and group blocks may vary; verify it first.',
          'In this fictional week, 13 new room nights and three cancellations produce net pickup of ten. The books move from 28 to 38. Booking pace follows this pattern at several lead times — intervals from snapshot to arrival — rather than treating today’s OTB as the full story.',
        ],
        table: { headings: ['Same Saturday stay date', 'OTB', 'Movement'], rows: [['D-21', '28', 'Starting position'], ['D-14', '38', '+13 new, −3 cancelled = +10 net']] },
      },
      {
        id: 'comparables',
        heading: 'Find genuinely comparable historical dates',
        paragraphs: [
          'For past Saturdays, recover both the D-14 OTB snapshot and final actual rooms sold. Match weekday, season, capacity and selling conditions. Flag an exceptional trade fair, unusual group block, renovation or major policy change before using the date as a reference.',
          'Suppose four illustrative Saturdays gained +12, +14, +16 and +14 rooms from D-14 to arrival. The median is +14. It is a starting assumption, not a promise. A current group at risk of cancelling needs its own adjustment rather than being hidden in the average.',
        ],
        table: { headings: ['Illustrative analogue', 'OTB D-14', 'Final rooms sold', 'Remaining net gain'], rows: [['A', '37', '49', '+12'], ['B', '36', '50', '+14'], ['C', '39', '55', '+16'], ['D', '35', '49', '+14']] },
      },
      {
        id: 'forecast',
        heading: 'Turn the assumption into a rooms forecast',
        paragraphs: [
          'Here +14 is the overall future net gain from D-14 to arrival: later sales after their own cancellations, less future losses on the 38 rooms already on the books. The forecast is 38 OTB + 14 = 52 rooms; do not deduct existing-booking cancellations a second time. Against 60 available rooms, this is 86.7% forecast occupancy. Twenty-two rooms remain unbooked at D-14; +14 is not necessarily fourteen gross new bookings.',
          'The handbook also shows the components explicitly: forecast rooms = current OTB − expected future losses on current OTB + further sales net of their own future cancellations. For example, four losses from the 38 OTB rooms and eighteen further net sales give 38 − 4 + 18 = 52. Those fictional components explain the +14 rather than being added to it.',
          'Add a cautious and a high case when cancellation or event demand could materially change. Keep the working forecast within sellable capacity and revisit it at the next snapshot.',
        ],
        note: 'Every figure here is fictional and illustrates a method, not an industry benchmark.',
      },
      {
        id: 'timeline',
        heading: 'A D-30, D-14 and D-7 tracking view',
        paragraphs: [
          'Archive snapshots instead of overwriting them. The intermediate D-21 count of 28 explains the move from 18 OTB at D-30 to 38 at D-14. Suppose D-7 OTB reaches 45. If comparable dates then gained +6, +7, +8 and +7 between D-7 and arrival, a median +7 supports a revised 52-room forecast. The number is unchanged, but its basis has been checked again.',
        ],
        table: { headings: ['Snapshot', 'OTB', 'Net pickup since prior', 'Further net gain assumed', 'Forecast rooms'], rows: [['D-30', '18', '—', 'To assess', '—'], ['D-21', '28', '+10', 'To assess', '—'], ['D-14', '38', '+10', '+14', '52'], ['D-7', '45', '+7', '+7', '52']] },
        related: [{ slug: 'apprendre-revenue-management-hotelier', label: 'Use the tracking file as a training exercise' }],
      },
      {
        id: 'spreadsheet',
        heading: 'Rebuild it from a PMS export or spreadsheet',
        paragraphs: [
          'Keep one record per stay date and snapshot date: the date a booking was made is not the stay night being analysed. Track usable capacity, the metric denominator, room OTB, OTB room revenue, cancellations, options and group notes separately. Net pickup is the difference between matching OTB snapshots. Add the overall future net-gain assumption and keep budget in its own column.',
          'Check duplicates, multi-night stays and unconfirmed group blocks. Do not add group rooms already counted in OTB a second time; add only expected volume not yet recorded and keep options separate. A reservation-level export is not necessarily a room-night-by-stay-date export.',
        ],
      },
      {
        id: 'decision',
        heading: 'Use the forecast — and learn from its error',
        paragraphs: [
          'At 52 expected rooms, the central case leaves eight rooms likely unsold. Check visibility, restrictions and late-booking segments. If the high case approaches 60, review low-contribution offers. ADR and acquisition cost still matter; a volume forecast is not a rate instruction.',
          'If the final actual is 50 rooms, the D-14 forecast was two rooms high. Keep the original estimate, identify cancellations or missing demand and revise the method for the next comparable dates. Do not rewrite the +14 assumption after the fact.',
        ],
        related: [{ slug: 'strategie-tarifaire-hotel', label: 'See a forecast used in a rate decision' }],
      },
    ],
    manualNote: 'A teaching adaptation of chapter 2 (§§ 2.2 and 2.4) of the LuxOps Revenue Management & Distribution handbook. The D-30/D-14/D-7 tracking view, medians and all 60-room figures were created for this blog, not taken from handbook tables or cases.',
    sources: [ref.pickup, ref.metrics, ref.rms],
  },
}
