import type { RevenueDraftArticle } from '../revenue-management-drafts'
import { revenueReferences as ref } from './references'

export const revparArticle: RevenueDraftArticle = {
  slug: 'calcul-revpar-adr-taux-occupation',
  fr: {
    title: 'RevPAR : définition, formule, calcul et simulateur hôtelier',
    seoTitle: 'Calcul RevPAR hôtel : formule, exemple et simulateur gratuit',
    description: 'Calculez le RevPAR hôtelier : formule, exemple de 50 chambres et simulateur. Vérifiez gratuités, usage interne et chambres hors service.',
    intro: 'Le RevPAR, pour Revenue Per Available Room, mesure le chiffre d’affaires hébergement généré par chambre disponible sur une période donnée. Il rapproche le prix moyen du volume vendu. Pour une nuit : 5 700 € de revenu hébergement HT sur 50 chambres disponibles donnent un RevPAR de 114 €.',
    sections: [
      {
        id: 'deux-formules',
        heading: 'Les deux façons de calculer le RevPAR',
        paragraphs: [
          'La formule directe est : chiffre d’affaires hébergement ÷ chambres disponibles. La formule de contrôle est : ADR × taux d’occupation exprimé en décimal. Elles donnent le même résultat lorsque revenu, chambres vendues et chambres disponibles couvrent exactement les mêmes dates et le même périmètre.',
          'L’ADR (Average Daily Rate, prix moyen chambre) divise le revenu hébergement par les chambres vendues. Le taux d’occupation divise les chambres vendues par les chambres disponibles. Si aucune chambre n’a été vendue, l’ADR n’est pas défini ; le RevPAR peut être nul si le revenu hébergement est nul et que la capacité disponible est positive.',
        ],
        table: {
          headings: ['Indicateur', 'Calcul', 'Dénominateur'],
          rows: [
            ['Taux d’occupation', 'Chambres vendues ÷ chambres disponibles × 100', 'Toutes les chambres disponibles'],
            ['ADR / prix moyen', 'Revenu hébergement HT ÷ chambres vendues', 'Chambres effectivement vendues'],
            ['RevPAR — méthode 1', 'Revenu hébergement HT ÷ chambres disponibles', 'Toutes les chambres disponibles'],
            ['RevPAR — méthode 2', 'ADR × taux d’occupation en décimal', 'Même période et même périmètre'],
          ],
        },
      },
      {
        id: 'exemple',
        heading: 'Exemple fictif : 50 chambres, 38 vendues, 5 700 € HT',
        paragraphs: [
          'Pour cette nuit illustrée, l’occupation réalisée est de 38 ÷ 50 = 76 %. L’ADR atteint 5 700 ÷ 38 = 150 €. Le RevPAR vaut 5 700 ÷ 50 = 114 €, ce que confirme 150 × 0,76 = 114. Les résultats se réconcilient sans mélanger hébergement et restauration.',
        ],
        table: {
          headings: ['Mesure', 'Opération', 'Résultat'],
          rows: [['Occupation réalisée', '38 ÷ 50', '76 %'], ['ADR', '5 700 € ÷ 38', '150 €'], ['RevPAR', '5 700 € ÷ 50', '114 €']],
        },
      },
      {
        id: 'capacite',
        heading: 'Quelles chambres compter comme disponibles ?',
        paragraphs: [
          'Sur une nuit, utilisez le nombre de chambres disponibles du périmètre de reporting retenu. Sur plusieurs nuits, additionnez les nuitées-chambres disponibles : ne divisez pas le revenu du mois par les 50 chambres physiques comptées une seule fois. La capacité réellement utilisable, le stock encore à vendre et le dénominateur des indicateurs sont trois chiffres distincts.',
          'Vérifiez le traitement des chambres gratuites, des chambres utilisées en interne et des chambres hors service dans le PMS et avec la Finance. Une gratuité ou un usage interne peut occuper une chambre sans générer de revenu hébergement. Si le taux d’occupation inclut ces chambres mais que l’ADR utilise seulement les chambres payantes, ADR × occupation ne retrouve plus le RevPAR : recalculez les deux indicateurs sur le même nombre de nuitées-chambres vendues. Une chambre hors service peut être exclue du stock utilisable alors qu’un benchmark externe applique une autre convention au dénominateur. Notez les deux bases lorsqu’elles diffèrent.',
          'Le revenu doit être celui des chambres, net des remises retenues dans votre reporting, sur une base fiscale constante. Une formule incluant petit-déjeuner, spa ou restauration nécessite une ventilation cohérente. Le TRevPAR utilise le revenu total de l’établissement ; ce n’est pas un autre nom du RevPAR.',
        ],
      },
      {
        id: 'bon-revpar',
        heading: 'Quel est un bon RevPAR pour un hôtel ?',
        paragraphs: [
          'Il n’existe pas de seuil universel. Un RevPAR de 114 € peut être remarquable en basse saison et insuffisant un soir de salon. Comparez d’abord la même date ou un jour de semaine comparable avec le budget, le réalisé N-1 et le rythme observé au même lead time. Si un benchmark de comp set est disponible, vérifiez aussi que les établissements comparés sont proches en positionnement et que leurs définitions de données sont compatibles.',
          'Le RevPAR ne décrit ni les coûts d’acquisition, ni la marge opérationnelle, ni le revenu du restaurant. Il aide à repérer un écart ; l’explication vient du mix de clientèle, du calendrier, de l’ADR et des canaux.',
        ],
        related: [{ slug: 'pickup-forecast-hotelier', label: 'Utiliser le pickup pour interpréter une date future' }],
      },
      {
        id: 'adr-contre-revpar',
        heading: 'Quand l’ADR monte et que le RevPAR baisse',
        paragraphs: [
          'Prenons deux nuits fictives de même capacité, 50 chambres. La première vend 40 chambres à 150 € : 6 000 € de revenu et 120 € de RevPAR. La seconde vend 35 chambres à 165 € : l’ADR progresse de 10 %, mais le revenu tombe à 5 775 € et le RevPAR à 115,50 €. Cinq chambres perdues ont plus que compensé le gain de prix moyen.',
          'Le constat ne prouve pas que la hausse tarifaire a causé la baisse des ventes : la demande ou le calendrier ont pu changer. Il oblige simplement à regarder volume et prix ensemble avant de conclure.',
        ],
        table: {
          headings: ['Nuit fictive', 'Chambres vendues', 'ADR', 'Revenu hébergement', 'RevPAR'],
          rows: [['A', '40 / 50', '150 €', '6 000 €', '120 €'], ['B', '35 / 50', '165 €', '5 775 €', '115,50 €']],
        },
      },
      {
        id: 'netrevpar',
        heading: 'NetRevPAR : revenu après coûts d’acquisition, pas bénéfice',
        paragraphs: [
          'Le NetRevPAR est une notion complémentaire documentée par HSMAI, non définie comme indicateur distinct dans le manuel LuxOps actuel. Ici, il retire du revenu hébergement les coûts d’acquisition retenus — par exemple commissions, frais transactionnels et dépenses marketing attribuables — avant de diviser par les chambres disponibles. Précisez toujours le périmètre de coûts et évitez de déduire deux fois une commission déjà retenue dans un versement net.',
          'Si les coûts d’acquisition du premier exemple sont hypothétiquement de 570 €, le NetRevPAR indicatif est (5 700 € − 570 €) ÷ 50 = 102,60 €. Ce calcul ne retranche ni ménage, ni personnel, ni énergie : il ne représente donc pas le profit de la nuit.',
        ],
        related: [{ slug: 'distribution-hoteliere-ota-direct', label: 'Décomposer les coûts de vente directe et des OTA' }],
      },
      {
        id: 'erreurs',
        heading: 'Les vérifications avant de partager le chiffre',
        paragraphs: ['Si les deux méthodes de calcul ne se rejoignent pas, cherchez d’abord une différence de périmètre plutôt qu’un effet commercial.'],
        bullets: [
          'Diviser par les chambres vendues produit l’ADR, pas le RevPAR.',
          'Comparer du HT avec du TTC ou un mois avec un nombre incomplet de chambres-nuits fausse l’écart.',
          'Un revenu de forfait mal ventilé gonfle le chiffre d’affaires hébergement.',
          'Une occupation prévisionnelle ne doit pas être présentée comme un réalisé.',
        ],
      },
    ],
    manualNote: 'Guide pédagogique fondé sur les conventions de reporting des chapitres 1 (§ 1.6) et 2 (§ 2.4) du manuel LuxOps Revenue Management & Distribution. Le simulateur et les exemples chiffrés ont été créés pour cet article ; le NetRevPAR est expliqué à partir d’une source externe, sans être attribué au manuel.',
    sources: [ref.costar, ref.metrics, ref.netRevpar],
  },
  en: {
    title: 'Hotel RevPAR: definition, formula and free calculator',
    seoTitle: 'Hotel RevPAR calculator: formula and worked example',
    description: 'Calculate hotel RevPAR two ways, check a 50-room example, and avoid common errors in room supply and revenue scope.',
    intro: 'RevPAR means Revenue Per Available Room. It tells you how much room revenue each available room generated over a stated period, bringing price and volume together. One night with €5,700 in room revenue and 50 available rooms produces €114 RevPAR.',
    sections: [
      {
        id: 'two-formulas',
        heading: 'Two ways to calculate RevPAR',
        paragraphs: [
          'The direct method is room revenue divided by rooms available. The cross-check is average daily rate (ADR) multiplied by occupancy as a decimal. They agree only when revenue, sold rooms and available rooms cover exactly the same period and reporting scope.',
          'ADR divides room revenue by rooms sold. Occupancy divides rooms sold by rooms available. With no rooms sold, ADR is undefined; RevPAR can be zero when room revenue is zero and available-room supply is positive.',
        ],
        table: {
          headings: ['Metric', 'Calculation', 'Denominator'],
          rows: [
            ['Occupancy', 'Rooms sold ÷ rooms available × 100', 'All available rooms'],
            ['ADR', 'Room revenue ÷ rooms sold', 'Rooms actually sold'],
            ['RevPAR — direct', 'Room revenue ÷ rooms available', 'All available rooms'],
            ['RevPAR — cross-check', 'ADR × occupancy as a decimal', 'Matched period and scope'],
          ],
        },
      },
      {
        id: 'worked-example',
        heading: 'Illustrative night: 50 rooms, 38 sold, €5,700 room revenue',
        paragraphs: ['Actual occupancy is 38 ÷ 50 = 76%. ADR is €5,700 ÷ 38 = €150. RevPAR is €5,700 ÷ 50 = €114; the cross-check is €150 × 0.76 = €114. The figures reconcile without mixing rooms with restaurant revenue.'],
        table: { headings: ['Metric', 'Operation', 'Result'], rows: [['Actual occupancy', '38 ÷ 50', '76%'], ['ADR', '€5,700 ÷ 38', '€150'], ['RevPAR', '€5,700 ÷ 50', '€114']] },
      },
      {
        id: 'room-supply',
        heading: 'Define available-room supply before comparing results',
        paragraphs: [
          'For one night, use available rooms within the stated reporting scope. Across several nights, add available room nights rather than counting the physical rooms once. Operationally usable capacity, rooms still for sale and the metric denominator are different figures.',
          'Check with Finance and the PMS how complimentary rooms, rooms used internally and out-of-order rooms are treated. Complimentary or internal occupancy may generate no room revenue. If occupancy includes those rooms but ADR counts only paid rooms, ADR × occupancy will not reconcile to RevPAR: align the sold-room denominator. An out-of-order room may leave sellable supply while an external benchmark applies a different denominator convention; document both when they differ.',
          'Keep revenue to the room component, after the rebates included in your reporting, on the same tax basis. A room-and-breakfast package needs a consistent allocation. TRevPAR uses total property revenue; it is not another term for RevPAR.',
        ],
      },
      {
        id: 'good-revpar',
        heading: 'What is a good RevPAR?',
        paragraphs: [
          'There is no universal threshold. €114 may be excellent in a soft week and disappointing on a trade-fair night. Compare like-for-like stay dates with budget, prior-year actuals and booking pace at the same lead time. If you have competitor-set data, first check that the set and reporting definitions are meaningful for your property.',
          'RevPAR omits acquisition cost, operating profit and restaurant revenue. It flags a movement; customer mix, the calendar, ADR and channels help explain it.',
        ],
        related: [{ slug: 'pickup-forecast-hotelier', label: 'Use booking pickup to interpret future dates' }],
      },
      {
        id: 'adr-example',
        heading: 'ADR can rise while RevPAR falls',
        paragraphs: [
          'Consider two fictional nights with 50 available rooms. Night A sells 40 at €150 ADR: €6,000 revenue and €120 RevPAR. Night B sells 35 at €165 ADR: the rate rises 10%, but revenue falls to €5,775 and RevPAR to €115.50. Five lost room nights outweigh the gain in average rate.',
          'That does not prove the rate rise caused the volume loss; demand may have changed. It does show why price and occupancy must be read together.',
        ],
        table: { headings: ['Illustrative night', 'Rooms sold', 'ADR', 'Room revenue', 'RevPAR'], rows: [['A', '40 / 50', '€150', '€6,000', '€120'], ['B', '35 / 50', '€165', '€5,775', '€115.50']] },
      },
      {
        id: 'net-revpar',
        heading: 'NetRevPAR: after acquisition cost, not net profit',
        paragraphs: [
          'NetRevPAR is a complementary measure covered by HSMAI; it is not explicitly defined as a separate metric in the current LuxOps handbook. Here it deducts defined acquisition costs — such as commission, transaction fees and attributable marketing spend — from room revenue before dividing by available rooms. Publish the cost scope and do not deduct a commission twice when it is already withheld from a net settlement.',
          'With a hypothetical €570 acquisition cost in the first example, indicative NetRevPAR is (€5,700 − €570) ÷ 50 = €102.60. Housekeeping, payroll and energy have not been deducted; this is not profit.',
        ],
        related: [{ slug: 'distribution-hoteliere-ota-direct', label: 'Break down direct and OTA acquisition costs' }],
      },
      {
        id: 'checks',
        heading: 'Checks before a dashboard goes out',
        paragraphs: ['If the two RevPAR methods disagree, look for a scope mismatch before drawing a commercial conclusion.'],
        bullets: [
          'Room revenue divided by rooms sold is ADR, not RevPAR.',
          'Mixing tax bases or incomplete available-room nights distorts comparisons.',
          'Unallocated package revenue can inflate the room numerator.',
          'Forecast occupancy must not be reported as an actual.',
        ],
      },
    ],
    manualNote: 'This educational guide follows the reporting conventions in chapters 1 (§ 1.6) and 2 (§ 2.4) of the LuxOps Revenue Management & Distribution handbook. The calculator and figures were created for this article. NetRevPAR relies on an external source and is not attributed to the handbook.',
    sources: [ref.costar, ref.metrics, ref.netRevpar],
  },
}
