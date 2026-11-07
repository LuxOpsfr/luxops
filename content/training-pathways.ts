import { spaTrainingPathway } from './spa-training'
export const trainingCalendar = 'https://calendly.com/contact-luxops/30min'
export type TrainingDepartment = 'hsk' | 'fo' | 'fb' | 'spa'
export const trainingPathways = {
  spa: spaTrainingPathway,
  "hsk": {
    "slug": "formation-housekeeping-hotel",
    "image": "/images/training-concept/luxops-training-housekeeping-01.png",
    "manualImage": "/images/editorial-hospitality/housekeeping-cottonbro-6466482.jpg",
    "articles": [
      "hotel-housekeeping-supervisor-checklist",
      "housekeeping-room-inspection"
    ],
    "fr": {
      "name": "Formation Housekeeping",
      "title": "Formation Housekeeping : l’excellence dans chaque détail.",
      "promise": "Affinez le regard qualité, développez l’autonomie des équipes et faites vivre les standards cinq étoiles à chaque étage.",
      "audience": "Femmes et valets de chambre, équipiers, gouvernantes et responsables Housekeeping souhaitant perfectionner leurs pratiques et leur encadrement.",
      "exercise": "À partir d’une chambre prête à accueillir un client, croiser le regard de l’équipier, de la gouvernante et du client. Ajuster les détails de présentation, anticiper une préférence et transformer les observations en coaching utile.",
      "measures": [
        "Précision et cohérence des inspections qualité",
        "Autonomie face aux demandes particulières",
        "Qualité du feedback et du suivi par les gouvernantes"
      ],
      "articles": [
        "Checklist superviseur Housekeeping",
        "Inspection de chambre"
      ],
      "imageAlt": "Accompagnement d’une équipe Housekeeping dans une chambre d’hôtel"
    },
    "en": {
      "name": "Housekeeping training",
      "title": "Housekeeping training: excellence in every detail.",
      "promise": "Sharpen your team’s eye for quality, develop professional judgement and bring five-star standards to every floor.",
      "audience": "Room attendants, public area teams, supervisors and Housekeeping managers looking to refine their practice and leadership.",
      "exercise": "Review a guest-ready room from the attendant’s, supervisor’s and guest’s perspectives. Refine presentation details, anticipate a preference and turn observations into useful coaching.",
      "measures": [
        "Precision and consistency of quality inspections",
        "Confidence in responding to individual guest needs",
        "Quality of supervisor feedback and follow-up"
      ],
      "articles": [
        "Housekeeping supervisor checklist",
        "Room inspection"
      ],
      "imageAlt": "Housekeeping team coaching in a hotel guest room"
    }
  },
  "fo": {
    "slug": "formation-reception-hotel",
    "image": "/images/training-concept/luxops-training-front-office-01.png",
    "manualImage": "/images/editorial-hospitality/dept-front-office-v2.jpg",
    "articles": [
      "hotel-front-desk-procedures",
      "hotel-front-office-sop"
    ],
    "fr": {
      "name": "Formation réception & Front Office",
      "title": "Formation réception : faire de chaque échange une expérience.",
      "promise": "Renforcez l’aisance relationnelle, l’anticipation et le discernement de vos équipes pour incarner les standards d’un accueil cinq étoiles.",
      "audience": "Réceptionnistes, chefs de brigade, responsables réception, réservations et Guest Relations qui souhaitent affiner la qualité de leur accompagnement client.",
      "exercise": "Un client régulier arrive avec une attente inhabituelle en pleine période d’affluence. Personnaliser la prise en charge, mobiliser les informations du PMS et du CRM, coordonner les services et expliquer ses choix sans réciter un script.",
      "measures": [
        "Personnalisation et fluidité du parcours client",
        "Qualité des décisions et du suivi des demandes",
        "Continuité de service entre les équipes"
      ],
      "articles": [
        "Procédures de réception",
        "Standards et SOP Front Office"
      ],
      "imageAlt": "Équipe Front Office accompagnée au comptoir de réception"
    },
    "en": {
      "name": "Front Office training",
      "title": "Front Office training: make every interaction count.",
      "promise": "Strengthen confidence, anticipation and professional judgement so your team delivers the care expected of five-star hospitality.",
      "audience": "Receptionists, shift leaders, Front Office managers, reservations and Guest Relations teams looking to refine the guest experience.",
      "exercise": "A returning guest arrives with an unusual request during a busy period. Personalise the welcome, use PMS and CRM information, coordinate departments and explain decisions without relying on a script.",
      "measures": [
        "Personalisation and flow of the guest journey",
        "Quality of decisions and guest request follow-up",
        "Service continuity across shifts"
      ],
      "articles": [
        "Front desk procedures",
        "Front Office standards and SOPs"
      ],
      "imageAlt": "Front Office team development at a hotel reception desk"
    }
  },
  "fb": {
    "slug": "formation-fb-restaurant",
    "image": "/images/training-concept/luxops-training-fb-01.png",
    "manualImage": "/images/editorial-hospitality/dept-food-beverage-v2.jpg",
    "articles": [
      "hotel-fb-restaurant-procedures",
      "hotel-fb-service-standards"
    ],
    "fr": {
      "name": "Formation F&B & restauration",
      "title": "Formation F&B : précision du service, justesse de l’attention.",
      "promise": "Développez la présence en salle, la qualité du conseil et la coordination de vos équipes pour une expérience de restauration à la hauteur d’un hôtel cinq étoiles.",
      "audience": "Équipes de restaurant, bar, petit-déjeuner et room service, chefs de rang, maîtres d’hôtel et responsables F&B souhaitant perfectionner leur service.",
      "exercise": "Pendant un service rythmé, une table exprime des attentes différentes sur le conseil, le timing et une demande alimentaire. Ajuster la recommandation, coordonner la cuisine et préserver une attention naturelle, puis débriefer les décisions avec le manager.",
      "measures": [
        "Qualité du conseil et de la personnalisation",
        "Fluidité du service et coordination salle-cuisine",
        "Capacité des responsables à faire progresser leurs équipes"
      ],
      "articles": [
        "Procédures restaurant et F&B",
        "Standards de service F&B"
      ],
      "imageAlt": "Briefing et accompagnement d’une équipe de restauration hôtelière"
    },
    "en": {
      "name": "F&B & restaurant training",
      "title": "F&B training: precise service, thoughtful attention.",
      "promise": "Develop service presence, confident recommendations and team coordination for a dining experience worthy of five-star hospitality.",
      "audience": "Restaurant, bar, breakfast and room service teams, supervisors, restaurant managers and F&B leaders looking to refine service delivery.",
      "exercise": "During a busy service, one table has differing expectations about recommendations, timing and a dietary request. Adapt the advice, coordinate with the kitchen and maintain natural attention, then discuss decisions with the manager.",
      "measures": [
        "Quality of recommendations and personalisation",
        "Service flow and restaurant-kitchen coordination",
        "Managers’ ability to develop their teams"
      ],
      "articles": [
        "Restaurant and F&B procedures",
        "F&B service standards"
      ],
      "imageAlt": "Hotel restaurant team briefing and service coaching"
    }
  }
} as const
export const trainingArticleTopics: Record<string, TrainingDepartment | 'general'> = {
  'hotel-staff-training-service-standards': 'general',
  'hotel-staff-turnover-training': 'general',
  'hotel-new-hire-onboarding': 'general',
  ...Object.fromEntries(Object.entries(trainingPathways).flatMap(([key, value]) => value.articles.map(slug => [slug, key as TrainingDepartment]))),
}
