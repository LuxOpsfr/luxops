import type { RevenueDraftArticle } from '../revenue-management-drafts'
import { revenueReferences as ref } from './references'

export const learningArticle: RevenueDraftArticle = {
  slug: 'apprendre-revenue-management-hotelier',
  fr: {
    title: 'Se former au Revenue Management hôtelier : compétences et parcours',
    seoTitle: 'Formation Revenue Management hôtelier : compétences à acquérir',
    description: 'Par où commencer en Revenue Management hôtelier ? Prérequis, exercices PMS, première méthode de forecast et différence entre formation et manuel.',
    intro: 'Une responsable des réservations peut apprendre à construire un forecast sans porter immédiatement le titre de Revenue Manager. Elle connaît déjà les demandes clients, les annulations et les contraintes du PMS. La prochaine étape est de transformer ces observations en relevés comparables, puis en décisions vérifiables.',
    sections: [
      {
        id: 'prerequis',
        heading: 'Peut-on débuter sans poste de Revenue Manager ?',
        paragraphs: [
          'Oui. Réception, réservations, direction, commercial et contrôle de gestion disposent chacun d’une partie de l’information. Les prérequis utiles sont modestes : savoir extraire un portefeuille par date de séjour, distinguer date de réservation et date d’arrivée, lire un tarif avec ses conditions, et manipuler un tableur sans écraser les relevés précédents. Les statistiques avancées viennent plus tard.',
          'L’accès aux données n’autorise pas à tout diffuser. Travaillez sur des exports anonymisés si l’exercice sort de l’établissement, et faites valider toute modification de prix ou de disponibilité par la personne qui en a la responsabilité.',
        ],
      },
      {
        id: 'competences',
        heading: 'Quatre compétences à acquérir dans l’ordre',
        paragraphs: ['Chaque étape doit produire une trace vérifiable, pas seulement une définition apprise.'],
        table: {
          headings: ['Compétence', 'Ce que l’on doit pouvoir faire', 'Preuve simple'],
          rows: [
            ['Indicateurs', 'Calculer occupation, ADR et RevPAR sur un périmètre expliqué.', 'Retrouver le chiffre du PMS à partir des données sources.'],
            ['Booking pace', 'Comparer l’OTB d’une même date à deux relevés et à un lead time comparable.', 'Séparer nouvelles réservations et annulations.'],
            ['Forecast', 'Estimer le gain net encore probable et noter les facteurs de correction.', 'Comparer la prévision conservée au réalisé.'],
            ['Décision commerciale', 'Lire BAR, segments, canaux et restrictions avant d’agir.', 'Expliquer une action, son responsable et son contrôle.'],
          ],
        },
        related: [{ slug: 'calcul-revpar-adr-taux-occupation', label: 'S’exercer sur les indicateurs et le simulateur RevPAR' }],
      },
      {
        id: 'forecast-exercice',
        heading: 'Premier exercice de forecast : partir de ce qui est réservé',
        paragraphs: [
          'Choisissez une date future et exportez à J-14 les chambres au portefeuille (on the books, OTB). Récupérez ensuite trois à cinq dates passées proches en jour de semaine, saison et type d’événement. Pour chacune, calculez le gain net observé entre J-14 et l’arrivée. La médiane de ces gains constitue une base de discussion, pas une formule à appliquer aveuglément.',
          'Écartez ou annotez un bloc de groupe exceptionnel, une fermeture de chambres et un salon déplacé. Ajustez l’hypothèse, calculez OTB + gain net futur attendu, puis vérifiez que le total ne dépasse pas la capacité vendable. Conservez le fichier daté : à l’arrivée, vous pourrez mesurer l’erreur de prévision.',
        ],
        related: [{ slug: 'pickup-forecast-hotelier', label: 'Voir la méthode complète de pickup et de prévision' }],
      },
      {
        id: 'quatre-semaines',
        heading: 'Quatre semaines pour découvrir et pratiquer les fondamentaux',
        paragraphs: ['Ce parcours gratuit est une proposition éditoriale de LuxOps : il ne provient pas du manuel, n’est ni une certification ni la promesse de maîtriser le Revenue Management en un mois. Il donne une première expérience encadrée sur quelques dates de séjour.'],
        table: {
          headings: ['Semaine', 'Travail', 'Livrable'],
          rows: [
            ['1', 'Périmètre PMS, chambres disponibles, revenu hébergement HT ; trois indicateurs.', 'Une date réconciliée avec le reporting.'],
            ['2', 'Deux instantanés OTB sur les mêmes dates ; annulations et pickup net.', 'Un tableau de booking pace daté.'],
            ['3', 'Dates historiques comparables, hypothèse de gain net et forecast.', 'Une prévision avec ses réserves écrites.'],
            ['4', 'Écart prévision/réalisé ; lecture BAR, restrictions et canal.', 'Une courte note de décision revue par un responsable.'],
          ],
        },
      },
      {
        id: 'ressources',
        heading: 'Formation, accompagnement, RMS et manuel : à quoi servent-ils ?',
        paragraphs: [
          'Une formation structurée prévoit des objectifs pédagogiques, des exercices, un encadrement et, parfois, une évaluation ou un certificat. L’accompagnement applique la méthode au contexte d’un hôtel avec un professionnel. Un RMS (Revenue Management System) aide à prévoir et à recommander des actions, mais dépend de la configuration et des données. Un manuel opérationnel sert de référence pour refaire les gestes correctement ; il ne remplace ni une formation, ni l’arbitrage commercial.',
          'Le manuel LuxOps Revenue Management & Distribution peut accompagner la mise en pratique avec ses procédures et contrôles. Il ne remplace ni une formation, ni un apprentissage professionnel, ni l’expérience. Aucune certification Revenue Management LuxOps n’est annoncée ici.',
        ],
      },
      {
        id: 'validation',
        heading: 'Comment savoir si la compétence est utilisable dans l’hôtel ?',
        paragraphs: [
          'Demandez à la personne d’expliquer une date sans le tableau de bord déjà commenté : d’où vient le chiffre de capacité, ce qui s’est vendu depuis le dernier relevé, pourquoi elle attend encore tel volume et ce qui ferait changer sa prévision. Si elle peut justifier ses hypothèses et reconnaître une erreur de périmètre, l’apprentissage commence à devenir opérationnel.',
          'La maîtrise vient ensuite de cycles répétés, sur des saisons et des situations différentes, avec revue par une personne responsable de la performance commerciale.',
        ],
        related: [{ slug: 'revenue-management-hotelier-guide', label: 'Intégrer ces compétences à une revue commerciale hebdomadaire' }],
      },
    ],
    sources: [ref.learning, ref.metrics, ref.rms],
  },
  en: {
    title: 'Learning hotel revenue management: skills and a practical pathway',
    seoTitle: 'Hotel revenue management training: skills to build first',
    description: 'Start learning hotel revenue management with PMS exercises, a first forecast method and a clear distinction between courses, software and handbooks.',
    intro: 'A reservations manager can learn to build a forecast before becoming a revenue manager. They already see guest enquiries, cancellations and the limits of the PMS. The next step is to turn that knowledge into comparable snapshots and decisions that can be checked later.',
    sections: [
      {
        id: 'entry',
        heading: 'Do you need a revenue-manager title to start?',
        paragraphs: [
          'No. Front office, reservations, sales, finance and management each hold part of the picture. The useful prerequisites are practical: export bookings by stay date, distinguish booking date from arrival date, read a rate with its conditions, and keep earlier spreadsheet snapshots intact. Advanced statistics can wait.',
          'Use anonymised data when an exercise leaves the property. A learner should not alter rates or inventory without the hotel’s normal approval.',
        ],
      },
      {
        id: 'skills',
        heading: 'Four skills, each with evidence of progress',
        paragraphs: ['A definition remembered is not yet a decision you can make on shift.'],
        table: {
          headings: ['Skill', 'What you should be able to do', 'Simple evidence'],
          rows: [
            ['Metrics', 'Calculate occupancy, ADR and RevPAR within a stated scope.', 'Reconcile one date to the PMS report.'],
            ['Booking pace', 'Compare the same stay date across snapshots and matching lead times.', 'Separate new bookings from cancellations.'],
            ['Forecast', 'Estimate further net gain and record the reasons.', 'Keep a forecast to compare with actuals.'],
            ['Commercial decision', 'Read BAR, segments, channels and restrictions before acting.', 'Explain an action, owner and review point.'],
          ],
        },
        related: [{ slug: 'calcul-revpar-adr-taux-occupation', label: 'Practise the core metrics with the RevPAR calculator' }],
      },
      {
        id: 'forecast-exercise',
        heading: 'A first forecast exercise starts with rooms on the books',
        paragraphs: [
          'Select a future stay date and export rooms on the books (OTB) at D-14. Find three to five completed dates similar in weekday, season and event profile. For each, calculate the net change from D-14 to arrival. The median is a starting point for discussion, not an automatic answer.',
          'Flag unusual group blocks, room closures or a moved event. Adjust the assumption, add expected further net gain to current OTB, and check against sellable capacity. Keep the dated forecast so you can assess its error after the stay.',
        ],
        related: [{ slug: 'pickup-forecast-hotelier', label: 'Work through the full pickup and forecast method' }],
      },
      {
        id: 'four-weeks',
        heading: 'Four weeks to explore the fundamentals',
        paragraphs: ['This free four-week pathway is a LuxOps editorial suggestion, not a handbook programme, certificate or promise of mastery in a month. Work on a few stay dates with someone who can review the result.'],
        table: {
          headings: ['Week', 'Work', 'Output'],
          rows: [
            ['1', 'PMS scope, available rooms, room revenue and three metrics.', 'One reconciled stay date.'],
            ['2', 'Two OTB snapshots; cancellations and net pickup.', 'A dated booking-pace table.'],
            ['3', 'Comparable dates, further-net-gain assumption and forecast.', 'A forecast with written caveats.'],
            ['4', 'Forecast error, BAR, restrictions and channel.', 'A brief decision note reviewed by a manager.'],
          ],
        },
      },
      {
        id: 'options',
        heading: 'A course, coaching, RMS and handbook do different jobs',
        paragraphs: [
          'A structured course has learning objectives, guided exercises and sometimes assessment or certification. Coaching applies a method to one property with a practitioner. A revenue management system (RMS) supports forecasting and recommendations but depends on setup and input quality. A handbook gives the team a repeatable reference; it is not a course or a commercial decision-maker.',
          'The LuxOps Revenue Management & Distribution manual can support practical application through its procedures and checks. It does not replace a course, supervised learning or experience. No LuxOps revenue-management certification is offered here.',
        ],
      },
      {
        id: 'proof',
        heading: 'Can the learner apply it at the hotel?',
        paragraphs: [
          'Ask them to explain a stay date without a pre-annotated dashboard: where capacity comes from, what changed since the last snapshot, why more bookings are expected, and what would revise the forecast. Being able to defend the assumptions and spot a scope error is more useful than reciting an acronym.',
          'Competence develops over repeated cycles and different seasons, with review by whoever owns commercial performance.',
        ],
        related: [{ slug: 'revenue-management-hotelier-guide', label: 'Put these skills into a weekly commercial review' }],
      },
    ],
    sources: [ref.learning, ref.metrics, ref.rms],
  },
}
