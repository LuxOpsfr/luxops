import type { RevenueDraftArticle } from '../revenue-management-drafts'
import { revenueReferences as ref } from './references'

export const pricingArticle: RevenueDraftArticle = {
  slug: 'strategie-tarifaire-hotel',
  fr: {
    title: 'Stratégie tarifaire hôtelière : décider sur une nuit de salon',
    seoTitle: 'Stratégie tarifaire hôtel : cas pratique de J-21 à J-7',
    description: 'Un cas fictif de 60 chambres pour arbitrer BAR, remises et disponibilité pendant un salon, puis contrôler la décision à J-14 et J-7.',
    intro: 'À J-21 d’un salon professionnel, un hôtel fictif de 60 chambres en a déjà 40 au portefeuille. L’an dernier, pour une édition comparable, il n’en avait que 24 au même délai. Faut-il augmenter la BAR ? Peut-être. Mais 20 chambres restent à vendre, les blocs de groupe et les tarifs contractuels doivent encore être examinés, et le prix affiché du comp set ne révèle pas sa demande réelle.',
    sections: [
      {
        id: 'situation',
        heading: 'À J-21 : établir la situation avant de toucher au prix',
        paragraphs: [
          'Le responsable extrait du PMS les 40 chambres OTB pour la nuit du salon, le chiffre d’affaires hébergement associé, le pickup récent et les annulations. Il vérifie si les blocs de groupe confirmés sont déjà comptés dans ces 40 chambres : les ajouter une seconde fois fausserait le forecast. Il rapproche les disponibilités par catégorie, les chambres hors service et la capacité utilisable ; les 60 chambres de l’exemple sont supposées commercialisables. Affaires, loisirs et groupes sont des segments ; direct, OTA et agences sont des canaux.',
          'La comparaison N-1 porte sur la même nuit du salon à J-21, pas simplement sur la même date du calendrier. L’édition antérieure peut avoir eu un autre jour de semaine, une autre fréquentation ou des chambres fermées. Les 24 OTB N-1 signalent un écart, mais ne constituent pas à eux seuls un forecast.',
        ],
        table: { headings: ['Indicateur fictif à J-21', 'Cette édition', 'Édition N-1 comparable'], rows: [['Capacité vendable', '60', '60'], ['Chambres OTB', '40', '24'], ['Chambres encore non réservées', '20', '36']] },
      },
      {
        id: 'rythme',
        heading: 'Le rythme récent et la demande encore probable',
        paragraphs: [
          'À J-28, cette même nuit comptait 30 chambres OTB. Le pickup net jusqu’à J-21 est donc +10, après nouvelles réservations et annulations. Ce rythme est plus utile que l’écart N-1 isolé, à condition de vérifier qu’un groupe n’a pas simplement été saisi en bloc. Pour trois salons analogues, supposons un gain net final de +12, +14 et +15 chambres après J-21 ; leur médiane est +14.',
          'Le forecast de travail devient 40 + 14 = 54 chambres, soit 90 % d’occupation prévisionnelle et six chambres potentiellement invendues. Il reste physiquement 20 chambres à J-21. Les deux nombres ne se contredisent pas : l’un est le stock actuel, l’autre une estimation de la demande nette future. Un programme de conférence prolongé, un gros groupe incertain ou une hausse d’annulations obligeraient à revoir le +14.',
        ],
        related: [{ slug: 'pickup-forecast-hotelier', label: 'Détailler la méthode de pickup et de forecast' }],
      },
      {
        id: 'marche',
        heading: 'Comparer la structure tarifaire, pas seulement une BAR affichée',
        paragraphs: [
          'Le tarif public flexible sert ici de référence. Avant de le relever, regardez les catégories et disponibilités restantes, puis les plans ouverts : remises anticipées, tarif membre, forfait avec petit-déjeuner, contrats affaires et durée minimale de séjour. Comparez les offres concurrentes à dates, catégorie, occupation, flexibilité, inclusions et taxes comparables. Une offre non trouvée pour cette recherche ne prouve pas que le concurrent est complet.',
          'Demandez quels segments peuvent encore réserver à J-21 : individuels affaires tardifs, exposants, prolongations de séjour ou groupes libérant leur bloc. Leur booking window et leurs conditions de vente ne sont pas identiques. Une remise ouverte sur tout l’inventaire peut déplacer des réservations qui seraient venues à la BAR ; une fermeture trop large peut perdre une demande utile.',
        ],
        related: [{ slug: 'distribution-hoteliere-ota-direct', label: 'Examiner le coût et le rôle de chaque canal' }],
      },
      {
        id: 'arbitrage',
        heading: 'L’arbitrage retenu : une action limitée et réversible',
        paragraphs: [
          'Dans ce cas fictif, après examen du portefeuille, du forecast, des chambres restantes et des offres comparables, l’équipe propose de suspendre pour la seule nuit du salon une remise publique peu contributive sur la catégorie standard. La personne habilitée valide la décision ; le tarif public flexible et les contrats engagés restent inchangés. La consigne précise date de séjour, catégorie, plan, occupation, canaux, responsable et date de réexamen. Vérifiez la transmission du channel manager puis la recherche client sur le moteur direct et les canaux concernés, sans fermer les autres plans.',
          'Une hausse de BAR serait une autre option si le forecast, les demandes refusées et le positionnement le justifiaient. À l’inverse, si le salon a réduit sa taille ou si les 40 OTB incluent un groupe fragile, conserver la remise peut être plus prudent. Le pickup accéléré n’ordonne pas automatiquement une hausse de prix.',
        ],
      },
      {
        id: 'suivi',
        heading: 'À J-14 puis J-7 : contrôler sans réécrire l’histoire',
        paragraphs: [
          'Supposons 48 chambres OTB à J-14. Le pickup net depuis J-21 est +8. Sur des dates analogues, le gain médian de J-14 à l’arrivée est de +7 : le forecast est révisé à 55 chambres. L’équipe regarde le revenu OTB, l’ADR des réservations nouvelles, les annulations et la conversion par canal. Elle ne peut pas attribuer les huit chambres à la fermeture de la remise sans analyse plus fine.',
          'À J-7, l’OTB atteint 54 chambres. Si la référence de gain net restant est +3, le forecast passe à 57. Il reste six chambres non réservées, mais seulement trois ventes nettes attendues. Une hausse de prix pourrait encore être pertinente ou non ; les demandes, catégories restantes et contrats tranchent. Après chaque décision, vérifiez nouvelles réservations, prix, annulations et vente en ligne. Conservez les forecasts datés 54, 55 et 57 pour comparer au réalisé, sans attribuer tout le pickup à la seule fermeture de l’offre.',
        ],
        table: { headings: ['Relevé fictif', 'OTB', 'Gain net futur retenu', 'Forecast', 'Contrôle'], rows: [['J-21', '40', '+14', '54', 'Fermer une remise standard, garder la BAR.'], ['J-14', '48', '+7', '55', 'Vérifier pickup, annulations, ADR et canal.'], ['J-7', '54', '+3', '57', 'Réévaluer les dernières catégories et demandes.']] },
      },
      {
        id: 'rms',
        heading: 'RMS et IA : accélérer l’analyse, garder l’arbitrage',
        paragraphs: [
          'Un RMS peut rapprocher historiques, réservations et signaux de demande pour proposer prix ou contrôles d’inventaire. Sa recommandation dépend du paramétrage des catégories, des segments, des restrictions et de la qualité des données. Dans ce cas de salon, vérifiez notamment comment il traite l’événement et le bloc de groupe avant d’accepter une variation automatique.',
          'Si l’équipe déroge à la recommandation, elle note l’anomalie ou la raison commerciale, puis contrôle l’effet sur le pickup et le revenu. L’IA n’efface ni les contrats, ni la connaissance locale, ni la responsabilité du décideur.',
        ],
      },
    ],
    manualNote: 'Cas pédagogique fondé principalement sur le chapitre 3 (§ 3.3), avec les contrôles des chapitres 2, 4 et 5 du manuel LuxOps Revenue Management & Distribution. Le salon, l’hôtel de 60 chambres et ses chiffres sont entièrement fictifs ; ils ne figurent pas dans le manuel.',
    sources: [ref.costar, ref.distribution, ref.rms],
  },
  en: {
    title: 'Hotel pricing strategy: a trade-fair night from D-21 to D-7',
    seoTitle: 'Hotel room pricing strategy: a D-21 to D-7 case study',
    description: 'A fictional 60-room trade-fair case for weighing BAR, discounts and inventory, then checking the decision at D-14 and D-7.',
    intro: 'At D-21 before a trade fair, a fictional 60-room hotel has 40 rooms on the books. At the same lead time for a comparable edition last year, it had 24. Should it raise BAR? Perhaps — but 20 rooms remain unbooked, group commitments need checking, and a competitor set’s advertised rate says little about its actual demand.',
    sections: [
      {
        id: 'position',
        heading: 'D-21: establish the position before changing a rate',
        paragraphs: [
          'Export the 40 rooms on the books (OTB), their room revenue, recent net pickup and cancellations from the PMS. Check whether confirmed group rooms are already among those 40; do not add them twice. Reconcile remaining inventory by room type, out-of-order rooms and usable capacity: this example assumes all 60 rooms can be sold. Business transient, leisure and group are segments; direct, OTA and agency are channels.',
          'The prior-year comparison is for the fair night at the same D-21 lead time, not simply the same calendar date. Weekday, event scale or out-of-order rooms may differ. Last year’s 24 OTB rooms signal a change but do not form a forecast on their own.',
        ],
        table: { headings: ['Illustrative D-21 measure', 'This edition', 'Comparable prior edition'], rows: [['Sellable rooms', '60', '60'], ['Rooms OTB', '40', '24'], ['Rooms not yet booked', '20', '36']] },
      },
      {
        id: 'pace',
        heading: 'Recent pace and demand still to come',
        paragraphs: [
          'The same night had 30 OTB rooms at D-28. Net pickup to D-21 is therefore +10, after bookings and cancellations. Check that the move was not merely a single group block entered at once. Assume three analogous trade fairs gained +12, +14 and +15 net rooms after D-21; their median is +14.',
          'The working forecast is 40 + 14 = 54 rooms, or 90% forecast occupancy, leaving six potentially unsold. There are still 20 physically unbooked rooms at D-21; the smaller number estimates likely future net demand. A shortened conference, uncertain group or rising cancellations would change the +14 assumption.',
        ],
        related: [{ slug: 'pickup-forecast-hotelier', label: 'Work through net pickup and forecast calculation' }],
      },
      {
        id: 'market',
        heading: 'Compare rate structures, not just a displayed BAR',
        paragraphs: [
          'The public flexible rate is the reference rate plan here. Check remaining room types and inventory before reviewing open advance-purchase discounts, member rates, breakfast packages, corporate contracts and minimum stays. Compare competitor offers on stay dates, room type, occupancy, flexibility, inclusions and taxes. No offer found for one search does not prove a competitor is full.',
          'Which segments might still book at D-21 — late business travellers, exhibitors, extended stays, or a group release? Their booking windows and terms differ. A discount open across all rooms may displace BAR demand; closing too much inventory may lose useful business.',
        ],
        related: [{ slug: 'distribution-hoteliere-ota-direct', label: 'Review channel roles and acquisition cost' }],
      },
      {
        id: 'choice',
        heading: 'One limited, reversible decision',
        paragraphs: [
          'In this fictional case, after reviewing OTB, forecast, remaining rooms and comparable offers, the team proposes suspending one low-contribution public discount for the fair night and standard category only. An authorised person approves it; the flexible public rate and existing contracts stay unchanged. The instruction states stay date, category, plan, occupancy, channels, owner and review date. Check channel-manager transmission and search the direct engine and relevant channels to ensure the intended plan is closed while other plans remain available.',
          'Raising BAR would be another option if the forecast, denied demand and market position supported it. If the fair has shrunk or the 40 OTB rooms include a fragile group, retaining the discount may be wiser. Faster pickup is not an automatic instruction to raise rates.',
        ],
      },
      {
        id: 'review',
        heading: 'D-14 and D-7: check the outcome without rewriting the past',
        paragraphs: [
          'Suppose OTB reaches 48 at D-14: net pickup since D-21 is +8. A median +7 from analogous D-14 dates gives a revised forecast of 55. Review OTB revenue, ADR of new bookings, cancellations and channel conversion. Eight more rooms cannot simply be credited to the discount closure.',
          'At D-7, OTB reaches 54. If comparable remaining gain is +3, forecast becomes 57. Six rooms are unbooked, but only three further net sales are expected. Whether to lift rates depends on enquiries, remaining room types and contracts. After each decision, check new bookings, their rates, cancellations and live availability. Keep dated forecasts of 54, 55 and 57 for review against actuals without crediting all pickup to the single offer closure.',
        ],
        table: { headings: ['Illustrative snapshot', 'OTB', 'Further net gain', 'Forecast', 'Check'], rows: [['D-21', '40', '+14', '54', 'Close one standard discount; hold BAR.'], ['D-14', '48', '+7', '55', 'Check pickup, cancellations, ADR and channel.'], ['D-7', '54', '+3', '57', 'Review remaining room types and enquiries.']] },
      },
      {
        id: 'rms',
        heading: 'RMS and AI: faster analysis, accountable judgement',
        paragraphs: [
          'An RMS can combine history, bookings and demand signals to recommend rates or inventory controls. Its output depends on room-type, segment and rule configuration and on data quality. For this fair, check how it treats the event and the group block before accepting an automatic move.',
          'If the team overrides a recommendation, record the data anomaly or commercial reason and check the effect on pickup and revenue. AI does not remove contracts, local knowledge or decision ownership.',
        ],
      },
    ],
    manualNote: 'A teaching case based chiefly on chapter 3 (§ 3.3), with checks from chapters 2, 4 and 5 of the LuxOps Revenue Management & Distribution handbook. The trade fair, 60-room hotel and all figures are entirely fictional and do not appear in the handbook.',
    sources: [ref.costar, ref.distribution, ref.rms],
  },
}
