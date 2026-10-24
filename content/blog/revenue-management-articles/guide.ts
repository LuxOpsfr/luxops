import type { RevenueDraftArticle } from '../revenue-management-drafts'
import { revenueReferences as ref } from './references'

export const guideArticle: RevenueDraftArticle = {
  slug: 'revenue-management-hotelier-guide',
  fr: {
    title: 'Revenue Management hôtelier : méthode pratique pour piloter les chambres',
    seoTitle: 'Revenue Management hôtelier : méthode, indicateurs et décisions',
    description: 'Une méthode de Revenue Management pour hôtel indépendant : lire l’OTB, prévoir la demande, piloter tarifs, disponibilité et distribution.',
    intro: 'Le lundi matin, le tableau de bord affiche 70 % d’occupation au portefeuille pour samedi prochain. Faut-il relever la BAR, rouvrir une offre ou ne rien changer ? Ce chiffre seul ne tranche rien. Le Revenue Management consiste à rapprocher le portefeuille de réservations, la demande encore attendue, les conditions de vente et le coût des canaux avant de décider.',
    sections: [
      {
        id: 'perimetre',
        heading: 'Ce que pilote réellement le Revenue Management',
        paragraphs: [
          'Une chambre invendue pour la nuit passée ne se reporte pas au lendemain. Le Revenue Management travaille donc par date de séjour et par type de demande : quels clients sont déjà réservés, lesquels peuvent encore venir, à quelles conditions et par quel canal ? La décision peut porter sur le tarif, une remise, une restriction de séjour, un allotement ou la visibilité d’une catégorie de chambre.',
          'Le Yield Management désigne souvent la partie tactique du prix et de l’inventaire. Le pricing fixe et ajuste la structure tarifaire. Le Revenue Management est plus large : il relie prévision, segmentation, distribution et contrôle du résultat. Ces termes se recouvrent dans la pratique ; le point important est de savoir quelle décision l’équipe prend et sur quelles données.',
        ],
        related: [{ slug: 'strategie-tarifaire-hotel', label: 'Voir un cas de décision tarifaire à J-21, J-14 et J-7' }],
      },
      {
        id: 'lecture-quotidienne',
        heading: 'Le relevé quotidien : quatre chiffres et leur contexte',
        paragraphs: [
          'Sur les prochaines dates sensibles, commencez par les chambres disponibles, les chambres vendues ou déjà au portefeuille (on the books, OTB), le chiffre d’affaires hébergement HT et le prix moyen chambre (ADR). Le taux d’occupation réalisé concerne une nuit passée ; pour une date future, on parle d’occupation au portefeuille ou prévisionnelle. Le RevPAR réalisé rapporte le revenu hébergement à toutes les chambres disponibles. Une projection de RevPAR doit rester clairement identifiée comme telle.',
          'Une hausse de l’ADR peut masquer moins de chambres vendues. Regardez aussi le pickup net depuis le dernier relevé, les annulations, les blocs de groupe et les chambres hors service. Le budget et N-1 servent de repères seulement si la capacité, le jour de semaine, le calendrier d’événements et le périmètre des revenus sont comparables.',
        ],
        related: [{ slug: 'calcul-revpar-adr-taux-occupation', label: 'Calculer et interpréter occupation, ADR et RevPAR' }],
      },
      {
        id: 'demande',
        heading: 'Lire la demande sans confondre segment et canal',
        paragraphs: [
          'Un segment décrit le motif ou le type de clientèle — individuel affaires, loisirs, groupe, contrat. Un canal décrit où la réservation arrive : vente directe, OTA, GDS, agence ou autre intermédiaire. Un même segment peut réserver par plusieurs canaux. Cette distinction évite d’attribuer à une OTA une évolution qui tient en réalité à la clientèle ou au calendrier.',
          'Pour chaque date atypique, regardez le booking pace : combien de chambres étaient au portefeuille au même délai avant arrivée l’an dernier ou sur des dates réellement analogues ? Notez les changements qui biaisent la comparaison : salon déplacé, vacances scolaires, fermeture d’un concurrent, travaux ou nouvelle politique d’annulation. Le tarif visible d’un ensemble concurrentiel (comp set) renseigne sur le marché, pas sur son occupation réelle.',
        ],
      },
      {
        id: 'forecast',
        heading: 'Du pickup au forecast : écrire l’hypothèse restante',
        paragraphs: [
          'Le pickup net est la différence entre deux relevés portant sur les mêmes dates de séjour. Le forecast part de l’OTB actuel, retire les pertes futures attendues sur ce portefeuille et ajoute les ventes futures attendues, déjà nettes de leurs propres annulations. Si l’on utilise à la place un seul gain net futur global, il inclut aussi les pertes attendues sur l’OTB : on ne les soustrait pas encore une fois. Dates comparables, événement, groupes et capacité servent à étayer cette hypothèse.',
          'Une prévision de 52 chambres sur une capacité de 60 n’est pas un constat de 87 % d’occupation réalisée. C’est une hypothèse à revoir au prochain relevé. Gardez l’ancienne version : l’écart forecast–réalisé est la matière première de l’apprentissage.',
        ],
        related: [{ slug: 'pickup-forecast-hotelier', label: 'Reproduire une première prévision à partir des exports PMS' }],
      },
      {
        id: 'prix-distribution',
        heading: 'Choisir une action sur prix, disponibilité ou distribution',
        paragraphs: [
          'Si la demande probable dépasse la capacité encore vendable, vérifiez les tarifs ouverts, la BAR (meilleur tarif flexible public de référence), les remises, les minimum stays et les contrats déjà engagés. Fermer une offre peu contributive peut être plus pertinent qu’augmenter tous les prix. Si la demande paraît faible, examinez d’abord les restrictions involontaires, le contenu des offres et les canaux actifs : une baisse de prix n’aide pas une chambre invisible à la vente.',
          'Le canal n’est pas gratuit parce qu’il est direct. Commissions OTA, publicité, frais de paiement, moteur de réservation et temps commercial n’ont pas la même nature ni la même imputabilité. Comparez des réservations équivalentes et distinguez revenu après acquisition et marge opérationnelle.',
        ],
        related: [{ slug: 'distribution-hoteliere-ota-direct', label: 'Comparer les coûts des canaux et le rôle du channel manager' }],
      },
      {
        id: 'reunion',
        heading: 'Deux rendez-vous hebdomadaires, ou un format simplifié pour une petite équipe',
        paragraphs: [
          'Le cadre complet du manuel distingue un rapport de pickup quotidien sans réunion, une revue hebdomadaire des résultats de 15 à 20 minutes consacrée à la semaine écoulée et au pickup des dates futures, puis, deux à trois jours plus tard, un yield meeting de 30 à 45 minutes pour décider sur ces dates. Après rapprochement avec la Finance vient l’analyse mensuelle. Le réalisé, le pickup et le forecast ne s’additionnent pas : ils répondent à trois questions différentes.',
          'Dans une petite structure où les mêmes personnes assurent plusieurs fonctions, le tableau ci-dessous propose une séance condensée de 30 minutes. Elle garde distincts le constat des résultats et l’arbitrage sur les ventes futures, sans prétendre remplacer la séquence complète. Préparez les exports PMS, les deux relevés OTB, le forecast daté, les groupes, événements, chambres hors service et conditions de vente avant d’entrer en réunion.',
        ],
        table: {
          headings: ['Temps', 'À regarder', 'Décision et contrôle'],
          rows: [
            ['5 min', 'Réalisé de la semaine contre forecast archivé et budget.', 'Isoler un écart à expliquer.'],
            ['10 min', 'Pickup net sur les séjours futurs, groupes, annulations et forecast.', 'Choisir deux ou trois dates à décider.'],
            ['10 min', 'Catégories restantes, tarifs, restrictions, canaux et coûts.', 'Décider une action limitée, son responsable et son contrôle de mise en vente.'],
            ['5 min', 'Décisions précédentes et nouvelles informations.', 'Fixer l’échéance de réexamen et transmettre les consignes.'],
          ],
        },
      },
      {
        id: 'independant',
        heading: 'Démarrer sans Revenue Manager dédié',
        paragraphs: [
          'Un hôtel indépendant peut commencer avec trois horizons — J-30, J-14 et J-7 — sur les dates qui comptent vraiment. Nommez une personne responsable du fichier, verrouillez les définitions utilisées et archivez chaque relevé. Une extraction PMS et un tableur suffisent pour rendre visible un écart de rythme ; un RMS devient utile lorsque le volume de décisions et la qualité des données le justifient.',
          'Pour former l’équipe, prenez une seule date passée et demandez à chacun de reconstituer ce que l’on savait à J-14, ce que l’on prévoyait et ce qui s’est produit. Cette discussion révèle plus vite les erreurs de périmètre qu’un tableau de bord chargé.',
        ],
        related: [{ slug: 'apprendre-revenue-management-hotelier', label: 'Parcours de découverte des compétences Revenue Management' }],
      },
    ],
    manualNote: 'Synthèse éditoriale des chapitres 1 à 5 et 8 du manuel LuxOps Revenue Management & Distribution. Le format condensé de 30 minutes est une proposition pour petite équipe, non la procédure hebdomadaire complète du manuel.',
    sources: [ref.costar, ref.metrics, ref.pickup, ref.distribution],
  },
  en: {
    title: 'Hotel revenue management: an operating method for room decisions',
    seoTitle: 'Hotel revenue management: metrics, forecasts and decisions',
    description: 'A practical revenue management routine for independent hotels: read the books, forecast demand, and manage rates, inventory and channels.',
    intro: 'It is Monday morning and next Saturday shows 70% occupancy on the books. Should the hotel lift its best available rate, reopen an offer, or hold steady? The percentage cannot answer that question. Revenue management brings booking pace, demand still to come, selling conditions and channel costs into the same decision.',
    sections: [
      {
        id: 'scope',
        heading: 'What revenue management actually controls',
        paragraphs: [
          'An unsold room night cannot be carried into tomorrow. Decisions therefore start with the stay date: who is already booked, which guests may still book, under what conditions, and through which channel? The answer may change a rate, a discount, a length-of-stay rule, a group allocation or the visibility of a room type.',
          'Yield management is often used for the tactical control of price and inventory. Pricing deals with the rate structure and its changes. Revenue management connects those choices with forecasting, segmentation, distribution and outcome review. In practice the labels overlap; clarity about the actual decision matters more.',
        ],
        related: [{ slug: 'strategie-tarifaire-hotel', label: 'Follow a rate decision from D-21 to D-7' }],
      },
      {
        id: 'daily-read',
        heading: 'A daily read: four figures in context',
        paragraphs: [
          'For sensitive dates, bring together available rooms, rooms sold or on the books (OTB), room revenue before tax and average daily rate (ADR). Occupancy for a past night is an actual; a future date has on-the-books or forecast occupancy. Actual RevPAR divides room revenue by all available rooms. A projected RevPAR must be labelled as a forecast.',
          'Higher ADR can still accompany fewer room nights. Add net pickup since the previous snapshot, cancellations, group blocks and out-of-order rooms. Budget and prior year are useful only when capacity, day of week, event calendar and revenue scope are comparable.',
        ],
        related: [{ slug: 'calcul-revpar-adr-taux-occupation', label: 'Calculate occupancy, ADR and RevPAR' }],
      },
      {
        id: 'demand',
        heading: 'Separate customer segment from booking channel',
        paragraphs: [
          'A segment describes the guest or reason for travel: business transient, leisure, group or contract. A channel describes where the booking arrives: direct, OTA, GDS, agency or another intermediary. The same segment may book through several channels. Treating an OTA as a customer segment hides what actually changed.',
          'Compare booking pace at the same lead time before arrival, using last year or genuinely similar dates. Annotate a moved trade fair, school holidays, competitor closure or a new cancellation policy. A competitor set’s displayed rates offer context, not a view of its true occupancy.',
        ],
      },
      {
        id: 'forecast',
        heading: 'From observed pickup to an explicit forecast',
        paragraphs: [
          'Net pickup is the change between snapshots for the same stay dates. A forecast starts with current OTB, subtracts expected future losses from that OTB, then adds expected further sales already net of cancellations on those new bookings. Alternatively, one overall future net-gain estimate can include both effects; do not deduct existing-booking losses again. Comparable dates, events, groups and capacity help support the assumption.',
          'A forecast of 52 rooms in a 60-room hotel is not 87% actual occupancy. Keep the previous forecast and compare it with the eventual result; the error is useful evidence for the next decision.',
        ],
        related: [{ slug: 'pickup-forecast-hotelier', label: 'Build a first forecast from PMS exports' }],
      },
      {
        id: 'commercial-choice',
        heading: 'Act on rates, availability or distribution',
        paragraphs: [
          'When expected demand presses against sellable capacity, review the best available rate (BAR), discounts, minimum stays and existing contracts. Closing a low-contribution offer may be more appropriate than increasing every rate. When demand looks weak, check unintended restrictions, offer content and open channels before discounting; a room that cannot be found will not sell at a lower price.',
          'Direct bookings still incur costs. OTA commission, paid media, payment fees, booking-engine costs and sales time have different cost behaviours. Compare equivalent reservations and do not confuse revenue after acquisition with operating margin.',
        ],
        related: [{ slug: 'distribution-hoteliere-ota-direct', label: 'Review channel costs and the channel manager’s role' }],
      },
      {
        id: 'meeting',
        heading: 'Two weekly meetings — or a simplified small-team format',
        paragraphs: ['The full handbook routine has a daily pickup report without a meeting, a 15–20 minute weekly performance review of actual results and future pickup, followed two or three days later by a 30–45 minute yield meeting for decisions. A monthly review follows Finance reconciliation. Actuals, pickup and forecast answer different questions and must not be added together.', 'Where a small team combines roles, the 30-minute schedule below is an editorial simplification, not the handbook’s full procedure. Prepare dated PMS snapshots, forecast, group commitments, events, out-of-order rooms and selling conditions before the discussion.'],
        table: {
          headings: ['Time', 'Evidence', 'Decision and follow-up'],
          rows: [
            ['5 min', 'Last week’s actuals against archived forecast and budget.', 'Identify an unexplained variance.'],
            ['10 min', 'Future-stay net pickup, groups, cancellations and forecast.', 'Select two or three dates for decisions.'],
            ['10 min', 'Remaining room types, rates, restrictions, channels and costs.', 'Assign a limited action, owner and live-sale check.'],
            ['5 min', 'Previous decisions and new information.', 'Set the review date and brief the teams.'],
          ],
        },
      },
      {
        id: 'independent',
        heading: 'Start in an independent property without a dedicated specialist',
        paragraphs: [
          'Start with three horizons — D-30, D-14 and D-7 — on the dates that matter most. Give one person ownership of the file, agree definitions and archive each snapshot. A PMS export and spreadsheet can reveal a change in pace. An RMS is useful when decision volume and data quality justify it.',
          'Take one completed stay date and reconstruct what the team knew at D-14, what it forecast and what happened. This exercise exposes data-scope errors faster than another crowded dashboard.',
        ],
        related: [{ slug: 'apprendre-revenue-management-hotelier', label: 'Explore a practical learning path' }],
      },
    ],
    manualNote: 'An editorial synthesis of chapters 1–5 and 8 of the LuxOps Revenue Management & Distribution handbook. The condensed 30-minute meeting is a small-team suggestion, not the handbook’s full weekly procedure.',
    sources: [ref.costar, ref.metrics, ref.pickup, ref.distribution],
  },
}
