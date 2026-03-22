export type PlaybookId = 'fo' | 'hsk' | 'fb' | 'spa'

export interface PlaybookEntry {
  id: PlaybookId
  title: { en: string; fr: string }
  dept: { en: string; fr: string }
  desc: { en: string; fr: string }
  pages: string
  highlights: { en: string[]; fr: string[] }
  chapters: { en: string[]; fr: string[] }
  priceId: string
  previewImage?: string
}

export const PLAYBOOKS: PlaybookEntry[] = [
  {
    id: 'fo',
    priceId: 'price_1TBZ94DVLJTOFkjUsH59B7x7',
    previewImage: '/Previews/fo-preview.jpg.png',
    title: { en: 'Front Office Playbook', fr: 'Playbook Front Office' },
    dept: { en: 'Front Office', fr: 'Front Office' },
    desc: {
      en: 'Service sequences, guest communication, complaint handling, upselling, night audit, and the procedural structure that keeps a front desk consistent across every shift.',
      fr: "Séquences de service, communication client, gestion des réclamations, vente additionnelle, night audit, et la base procédurale qui assure la constance d'une réception sur chaque service.",
    },
    pages: '~250 pages',
    highlights: {
      en: [
        'Check-in/out SOPs',
        'Guest communication templates',
        'Upselling techniques',
        'Concierge standards',
        'Complaint resolution',
        'Night audit procedures',
      ],
      fr: [
        'Procédures check-in/check-out',
        'Templates communication client',
        'Techniques de vente additionnelle',
        'Standards concierge',
        'Gestion des réclamations',
        'Procédures night audit',
      ],
    },
    chapters: {
      en: [
        'Introduction to Front Office Excellence',
        'Check-in Procedures',
        'Check-out Procedures',
        'Guest Communication Standards',
        'Upselling Techniques',
        'PMS Systems & Tools',
        'Night Audit',
        'Team Management & Leadership',
        'Emergency Procedures',
        'Service Excellence & Quality Control',
        'Concierge & Guest Services',
        'Luggage & Porter Services',
      ],
      fr: [
        'Introduction',
        'Procédures de Check-in',
        'Procédures de Check-out',
        'Communication Client',
        'Techniques de Vente Additionnelle',
        'Systèmes PMS',
        'Night Audit',
        "Management d'Équipe & Leadership",
        "Procédures d'Urgence",
        'Excellence Qualité & Contrôle',
        'Concierge & Services aux Clients',
        'Services Bagages & Portier',
      ],
    },
  },
  {
    previewImage: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=500&fit=crop&q=80',
    id: 'hsk',
    priceId: 'price_1TBZ9TDVLJTOFkjUwWnoKaGk',
    title: { en: 'Housekeeping Playbook', fr: 'Playbook Housekeeping' },
    dept: { en: 'Housekeeping', fr: 'Housekeeping' },
    desc: {
      en: 'Room inspection checklists, linen and product management, cleaning protocols, and quality control standards, structured to maintain the same operational level from the first room to the last.',
      fr: "Checklists d'inspection des chambres, gestion du linge et des produits, protocoles de nettoyage et standards de contrôle qualité, structurés pour maintenir le même niveau opérationnel de la première chambre à la dernière.",
    },
    pages: '~220 pages',
    highlights: {
      en: [
        'Room inspection checklists',
        'Linen management SOPs',
        'Turndown procedures',
        'Quality control methods',
        'Digital systems integration',
        'Sustainability standards',
      ],
      fr: [
        "Checklists d'inspection des chambres",
        'Procédures gestion du linge',
        'Protocoles couverture',
        'Méthodes de contrôle qualité',
        'Intégration systèmes digitaux',
        'Standards développement durable',
      ],
    },
    chapters: {
      en: [
        'Introduction to Housekeeping Excellence',
        'Room Cleaning Protocols & Standards',
        'Digital Housekeeping & Systems Management',
        'Public Areas & Special Cleaning',
        'Guest Services & Interactions',
        'Quality Control & Inspections',
        'Stock & Supplies Management',
        'Team Management & Scheduling',
        'Health, Safety & Compliance',
        'Sustainability & Best Practices',
      ],
      fr: [
        "Introduction à l'Excellence du Housekeeping",
        'Protocoles de Nettoyage des Chambres',
        'Housekeeping Numérique & Gestion des Systèmes',
        'Espaces Communs & Nettoyages Spéciaux',
        'Services aux Clients & Interactions',
        'Contrôle Qualité & Inspections',
        'Gestion des Stocks & des Fournitures',
        "Gestion de l'Équipe & Planning",
        'Santé, Sécurité & Conformité',
        'Développement Durable & Bonnes Pratiques',
      ],
    },
  },
  {
    id: 'fb',
    priceId: 'price_1TBZ9iDVLJTOFkjU3Os9VLRc',
    previewImage: '/Previews/fb-preview.jpg.png',
    title: { en: 'F&B Playbook', fr: 'Playbook F&B' },
    dept: { en: 'Food & Beverage', fr: 'Food & Beverage' },
    desc: {
      en: 'Service sequences and standards for restaurant, bar, breakfast, and room service, a procedural framework that gives teams clarity on every guest interaction, every cover, and every service.',
      fr: 'Séquences de service et standards pour le restaurant, le bar, le petit-déjeuner et le room service, un cadre procédural qui donne aux équipes une base claire pour chaque interaction client, chaque couvert et chaque service.',
    },
    pages: '~280 pages',
    highlights: {
      en: [
        'Restaurant service standards',
        'Bar operations guide',
        'Wine service protocols',
        'Room service SOPs',
        'Mise en place procedures',
        'Service recovery methods',
      ],
      fr: [
        'Standards service restaurant',
        'Guide opérations bar',
        'Protocoles service du vin',
        'Procédures room service',
        'Mise en place & stations',
        'Service recovery',
      ],
    },
    chapters: {
      en: [
        'Introduction to F&B Excellence',
        'Restaurant Service Standards',
        'Breakfast Service Operations',
        'Bar & Beverage Service',
        'Wine Service Excellence',
        'Room Service Standards',
        'Guest Interaction & Service Recovery',
        'Mise en Place & Station Management',
        'Team Management & Operations',
        'Quality Standards & Compliance',
      ],
      fr: [
        'Introduction',
        'Service Restaurant',
        'Service du Petit-Déjeuner',
        'Bar & Service des Boissons',
        'Excellence du Service du Vin',
        'Room Service',
        'Interaction Client & Service Recovery',
        'Mise en Place & Gestion des Stations',
        "Gestion de l'Équipe & Opérations",
        'Standards Qualité & Conformité',
      ],
    },
  },
  {
    previewImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=500&fit=crop&q=80',
    id: 'spa',
    priceId: 'price_1TBZ9vDVLJTOFkjUT1FHhqUi',
    title: { en: 'Spa & Wellness Playbook', fr: 'Playbook Spa & Wellness' },
    dept: { en: 'Spa & Wellness', fr: 'Spa & Wellness' },
    desc: {
      en: 'Treatment protocols, guest journey standards, therapist conduct, retail procedures, and booking management, built for a spa where consistency and guest experience drive performance.',
      fr: "Protocoles de soins, standards du parcours client, conduite des thérapeutes, procédures retail et gestion des réservations, conçu pour un spa où la constance et l'expérience client sont les principaux facteurs de performance.",
    },
    pages: '~200 pages',
    highlights: {
      en: [
        'Treatment protocols',
        'Room preparation standards',
        'Guest journey mapping',
        'Product knowledge & retail',
        'Therapist grooming standards',
        'Quality control methods',
      ],
      fr: [
        'Protocoles de soins',
        'Standards préparation des salles',
        'Parcours client',
        'Connaissance produits & retail',
        'Standards présentation thérapeutes',
        'Méthodes de contrôle qualité',
      ],
    },
    chapters: {
      en: [
        'Introduction to Spa & Wellness Excellence',
        'Treatment Room Standards & Preparation',
        'Guest Journey & Service Protocols',
        'Treatment Menu & Techniques',
        'Product Knowledge & Retail',
        'Spa Facilities & Equipment Management',
        'Team Management & Scheduling',
        'Quality Control & Guest Satisfaction',
        'Professional Standards & Grooming',
      ],
      fr: [
        "Introduction à l'Excellence du Spa & Bien-Être",
        'Standards & Préparation de la Salle de Soins',
        'Le Parcours Client & Protocoles de Service',
        'Menu de Soins & Techniques',
        'Connaissance Produits & Retail',
        'Gestion des Installations & Équipements Spa',
        "Gestion de l'Équipe & Planning",
        'Contrôle Qualité & Satisfaction Client',
        'Standards Professionnels & Présentation',
      ],
    },
  },
]

export const BUNDLE_PRICE_ID = 'price_1TBZB5DVLJTOFkjUwmgvTPRW'
