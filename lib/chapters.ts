/**
 * Chapter configuration for all playbooks.
 * Paths are relative to the Supabase Storage bucket "playbooks".
 * Full URL = SUPABASE_URL/storage/v1/object/public/playbooks/{path}
 *
 * File naming convention: ch{01-12}-slug.pdf / .pptx
 * Folder structure: {playbook}/pdf/{locale}/ch{n}-slug.pdf
 */

export interface Chapter {
  number: number
  titleFr: string
  titleEn: string
  pdfFr: string
  pdfEn: string
  pptxFr: string
  pptxEn: string
}

export interface Playbook {
  id: string
  titleFr: string
  titleEn: string
  color: string
  chapters: Chapter[]
}

/** Map Stripe price_id → playbook id */
export const PRICE_TO_PLAYBOOK: Record<string, string> = {
  price_1TBZ94DVLJTOFkjUsH59B7x7: 'front-office',
  price_1TBZ9TDVLJTOFkjUwWnoKaGk: 'housekeeping',
  price_1TBZ9iDVLJTOFkjU3Os9VLRc: 'fb',
  price_1TBdcNDVLJTOFkjURLNAORmJ: 'spa', // test 0€
  price_1TBZ9vDVLJTOFkjUT1FHhqUi: 'spa',
  price_1TBZB5DVLJTOFkjUwmgvTPRW: 'bundle', // bundle = all 4
}

export const BUNDLE_PRICE_ID = 'price_1TBZB5DVLJTOFkjUwmgvTPRW'

export const PLAYBOOKS: Record<string, Playbook> = {
  'front-office': {
    id: 'front-office',
    titleFr: 'Playbook Front Office',
    titleEn: 'Front Office Playbook',
    color: '#0056D2',
    chapters: [
      {
        number: 1,
        titleFr: 'Introduction au manuel des procédures du front office',
        titleEn: 'Introduction',
        pdfFr: 'front-office/pdf/fr/ch01-introduction.pdf',
        pdfEn: 'front-office/pdf/en/ch01-introduction.pdf',
        pptxFr: 'front-office/pptx/fr/ch01-introduction.pptx',
        pptxEn: 'front-office/pptx/en/ch01-introduction.pptx',
      },
      {
        number: 2,
        titleFr: 'Procédure de check-in',
        titleEn: 'Check-in Procedure',
        pdfFr: 'front-office/pdf/fr/ch02-check-in.pdf',
        pdfEn: 'front-office/pdf/en/ch02-check-in.pdf',
        pptxFr: 'front-office/pptx/fr/ch02-check-in.pptx',
        pptxEn: 'front-office/pptx/en/ch02-check-in.pptx',
      },
      {
        number: 3,
        titleFr: 'Procédure de check-out',
        titleEn: 'Check-out Procedure',
        pdfFr: 'front-office/pdf/fr/ch03-check-out.pdf',
        pdfEn: 'front-office/pdf/en/ch03-check-out.pdf',
        pptxFr: 'front-office/pptx/fr/ch03-check-out.pptx',
        pptxEn: 'front-office/pptx/en/ch03-check-out.pptx',
      },
      {
        number: 4,
        titleFr: 'Communication client',
        titleEn: 'Guest Communication',
        pdfFr: 'front-office/pdf/fr/ch04-communication-client.pdf',
        pdfEn: 'front-office/pdf/en/ch04-guest-communication.pdf',
        pptxFr: 'front-office/pptx/fr/ch04-communication-client.pptx',
        pptxEn: 'front-office/pptx/en/ch04-guest-communication.pptx',
      },
      {
        number: 5,
        titleFr: "Techniques d'upselling",
        titleEn: 'Upselling Techniques',
        pdfFr: 'front-office/pdf/fr/ch05-upselling.pdf',
        pdfEn: 'front-office/pdf/en/ch05-upselling.pdf',
        pptxFr: 'front-office/pptx/fr/ch05-upselling.pptx',
        pptxEn: 'front-office/pptx/en/ch05-upselling.pptx',
      },
      {
        number: 6,
        titleFr: 'Systèmes et opérations PMS',
        titleEn: 'Systems and PMS Operations',
        pdfFr: 'front-office/pdf/fr/ch06-pms.pdf',
        pdfEn: 'front-office/pdf/en/ch06-pms.pdf',
        pptxFr: 'front-office/pptx/fr/ch06-pms.pptx',
        pptxEn: 'front-office/pptx/en/ch06-pms.pptx',
      },
      {
        number: 7,
        titleFr: 'Night Audit',
        titleEn: 'Night Audit',
        pdfFr: 'front-office/pdf/fr/ch07-night-audit.pdf',
        pdfEn: 'front-office/pdf/en/ch07-night-audit.pdf',
        pptxFr: 'front-office/pptx/fr/ch07-night-audit.pptx',
        pptxEn: 'front-office/pptx/en/ch07-night-audit.pptx',
      },
      {
        number: 8,
        titleFr: "Management de l'équipe",
        titleEn: 'Team Management',
        pdfFr: 'front-office/pdf/fr/ch08-management-equipe.pdf',
        pdfEn: 'front-office/pdf/en/ch08-team-management.pdf',
        pptxFr: 'front-office/pptx/fr/ch08-management-equipe.pptx',
        pptxEn: 'front-office/pptx/en/ch08-team-management.pptx',
      },
      {
        number: 9,
        titleFr: "Procédures d'urgence",
        titleEn: 'Emergency Procedures',
        pdfFr: 'front-office/pdf/fr/ch09-urgences.pdf',
        pdfEn: 'front-office/pdf/en/ch09-emergency.pdf',
        pptxFr: 'front-office/pptx/fr/ch09-urgences.pptx',
        pptxEn: 'front-office/pptx/en/ch09-emergency.pptx',
      },
      {
        number: 10,
        titleFr: 'Excellence et normes de qualité',
        titleEn: 'Excellence and Quality Standards',
        pdfFr: 'front-office/pdf/fr/ch10-excellence-qualite.pdf',
        pdfEn: 'front-office/pdf/en/ch10-excellence-quality.pdf',
        pptxFr: 'front-office/pptx/fr/ch10-excellence-qualite.pptx',
        pptxEn: 'front-office/pptx/en/ch10-excellence-quality.pptx',
      },
      {
        number: 11,
        titleFr: 'Concierge et services clients',
        titleEn: 'Concierge and Guest Services',
        pdfFr: 'front-office/pdf/fr/ch11-concierge.pdf',
        pdfEn: 'front-office/pdf/en/ch11-concierge.pdf',
        pptxFr: 'front-office/pptx/fr/ch11-concierge.pptx',
        pptxEn: 'front-office/pptx/en/ch11-concierge.pptx',
      },
      {
        number: 12,
        titleFr: 'Bagagistes et portiers',
        titleEn: 'Luggage and Porter Services',
        pdfFr: 'front-office/pdf/fr/ch12-bagagistes.pdf',
        pdfEn: 'front-office/pdf/en/ch12-luggage-porter.pdf',
        pptxFr: 'front-office/pptx/fr/ch12-bagagistes.pptx',
        pptxEn: 'front-office/pptx/en/ch12-luggage-porter.pptx',
      },
    ],
  },

  housekeeping: {
    id: 'housekeeping',
    titleFr: 'Playbook Housekeeping',
    titleEn: 'Housekeeping Playbook',
    color: '#2E7D32',
    chapters: [
      {
        number: 1,
        titleFr: "Introduction à l'excellence du housekeeping",
        titleEn: 'Introduction to Housekeeping Excellence',
        pdfFr: 'housekeeping/pdf/fr/ch01-introduction.pdf',
        pdfEn: 'housekeeping/pdf/en/ch01-introduction.pdf',
        pptxFr: 'housekeeping/pptx/fr/ch01-introduction-a-lexcellence-du-housekeeping.pptx',
        pptxEn: 'housekeeping/pptx/en/ch01-introduction-to-housekeeping-excellence.pptx',
      },
      {
        number: 2,
        titleFr: 'Standards et procédures de nettoyage des chambres',
        titleEn: 'Room Cleaning Standards and Procedures',
        pdfFr: 'housekeeping/pdf/fr/ch02-nettoyage-chambres.pdf',
        pdfEn: 'housekeeping/pdf/en/ch02-room-cleaning.pdf',
        pptxFr: 'housekeeping/pptx/fr/ch02-standards-and-procedures-de-nettoyage-des-chambres.pptx',
        pptxEn: 'housekeeping/pptx/en/ch02-room-cleaning-standards-and-procedures.pptx',
      },
      {
        number: 3,
        titleFr: 'Service du soir et Turndown',
        titleEn: 'Turndown and Evening Service',
        pdfFr: 'housekeeping/pdf/fr/ch03-turndown.pdf',
        pdfEn: 'housekeeping/pdf/en/ch03-turndown.pdf',
        pptxFr: 'housekeeping/pptx/fr/ch03-service-du-soir-and-turndown.pptx',
        pptxEn: 'housekeeping/pptx/en/ch03-turndown-and-evening-service.pptx',
      },
      {
        number: 4,
        titleFr: 'Parties communes et nettoyage spécialisé',
        titleEn: 'Public Areas and Specialty Cleaning',
        pdfFr: 'housekeeping/pdf/fr/ch04-parties-communes.pdf',
        pdfEn: 'housekeeping/pdf/en/ch04-public-areas.pdf',
        pptxFr: 'housekeeping/pptx/fr/ch04-parties-communes-et-nettoyage-specialise.pptx',
        pptxEn: 'housekeeping/pptx/en/ch04-public-areas-and-specialty-cleaning.pptx',
      },
      {
        number: 5,
        titleFr: 'Services aux clients et interactions',
        titleEn: 'Guest Services and Interaction',
        pdfFr: 'housekeeping/pdf/fr/ch05-services-clients.pdf',
        pdfEn: 'housekeeping/pdf/en/ch05-guest-services.pdf',
        pptxFr: 'housekeeping/pptx/fr/ch05-services-aux-clients-et-interactions.pptx',
        pptxEn: 'housekeeping/pptx/en/ch05-guest-services-and-interaction.pptx',
      },
      {
        number: 6,
        titleFr: 'Contrôle qualité et inspections',
        titleEn: 'Quality Control and Inspections',
        pdfFr: 'housekeeping/pdf/fr/ch06-controle-qualite.pdf',
        pdfEn: 'housekeeping/pdf/en/ch06-quality-control.pdf',
        pptxFr: 'housekeeping/pptx/fr/ch06-controle-qualite-and-inspections.pptx',
        pptxEn: 'housekeeping/pptx/en/ch06-quality-control-and-inspections.pptx',
      },
      {
        number: 7,
        titleFr: 'Gestion des stocks et approvisionnements',
        titleEn: 'Inventory and Supplies Management',
        pdfFr: 'housekeeping/pdf/fr/ch07-gestion-stocks.pdf',
        pdfEn: 'housekeeping/pdf/en/ch07-inventory.pdf',
        pptxFr: 'housekeeping/pptx/fr/ch07-gestion-des-stocks-and-approvisionnements.pptx',
        pptxEn: 'housekeeping/pptx/en/ch07-inventory-and-supplies-management.pptx',
      },
      {
        number: 8,
        titleFr: 'Management des équipes et planification',
        titleEn: 'Team Management and Scheduling',
        pdfFr: 'housekeeping/pdf/fr/ch08-management-equipe.pdf',
        pdfEn: 'housekeeping/pdf/en/ch08-team-management.pdf',
        pptxFr: 'housekeeping/pptx/fr/ch08-management-des-equipes-and-planification.pptx',
        pptxEn: 'housekeeping/pptx/en/ch08-team-management-and-scheduling.pptx',
      },
      {
        number: 9,
        titleFr: 'Santé, sécurité et conformité',
        titleEn: 'Health, Safety and Compliance',
        pdfFr: 'housekeeping/pdf/fr/ch09-sante-securite.pdf',
        pdfEn: 'housekeeping/pdf/en/ch09-health-safety.pdf',
        pptxFr: 'housekeeping/pptx/fr/ch09-sante-securite-and-conformite.pptx',
        pptxEn: 'housekeeping/pptx/en/ch09-health-safety-and-compliance.pptx',
      },
      {
        number: 10,
        titleFr: 'Développement durable et bonnes pratiques',
        titleEn: 'Sustainability and Best Practices',
        pdfFr: 'housekeeping/pdf/fr/ch10-developpement-durable.pdf',
        pdfEn: 'housekeeping/pdf/en/ch10-sustainability.pdf',
        pptxFr: 'housekeeping/pptx/fr/ch10-developpement-durable-et-bonnes-pratiques.pptx',
        pptxEn: 'housekeeping/pptx/en/ch10-sustainability-and-best-practices.pptx',
      },
    ],
  },

  fb: {
    id: 'fb',
    titleFr: 'Playbook F&B',
    titleEn: 'F&B Playbook',
    color: '#B45309',
    chapters: [
      {
        number: 1,
        titleFr: "L'Art de l'excellence F&B",
        titleEn: 'The Art of F&B Excellence',
        pdfFr: 'fb/pdf/fr/ch01-excellence-fb.pdf',
        pdfEn: 'fb/pdf/en/ch01-fb-excellence.pdf',
        pptxFr: 'fb/pptx/fr/ch01-excellence-fb.pptx',
        pptxEn: 'fb/pptx/en/ch01-the-art-of-fb-excellence.pptx',
      },
      {
        number: 2,
        titleFr: 'Séquence de service en restaurant',
        titleEn: 'Restaurant Service Standards',
        pdfFr: 'fb/pdf/fr/ch02-sequence-service.pdf',
        pdfEn: 'fb/pdf/en/ch02-restaurant-service.pdf',
        pptxFr: 'fb/pptx/fr/ch02-sequence-service.pptx',
        pptxEn: 'fb/pptx/en/ch02-restaurant-service-standards.pptx',
      },
      {
        number: 3,
        titleFr: 'Le service du petit-déjeuner',
        titleEn: 'Breakfast Service',
        pdfFr: 'fb/pdf/fr/ch03-petit-dejeuner.pdf',
        pdfEn: 'fb/pdf/en/ch03-breakfast.pdf',
        pptxFr: 'fb/pptx/fr/ch03-petit-dejeuner.pptx',
        pptxEn: 'fb/pptx/en/ch03-breakfast-service.pptx',
      },
      {
        number: 4,
        titleFr: 'Bar et service des boissons',
        titleEn: 'Bar and Beverage Service',
        pdfFr: 'fb/pdf/fr/ch04-bar-boissons.pdf',
        pdfEn: 'fb/pdf/en/ch04-bar-beverage.pdf',
        pptxFr: 'fb/pptx/fr/ch04-bar-boissons.pptx',
        pptxEn: 'fb/pptx/en/ch04-bar-and-beverage-service.pptx',
      },
      {
        number: 5,
        titleFr: 'Excellence du service du vin',
        titleEn: 'Wine Service Excellence',
        pdfFr: 'fb/pdf/fr/ch05-service-vin.pdf',
        pdfEn: 'fb/pdf/en/ch05-wine-service.pdf',
        pptxFr: 'fb/pptx/fr/ch05-service-vin.pptx',
        pptxEn: 'fb/pptx/en/ch05-wine-service-excellence.pptx',
      },
      {
        number: 6,
        titleFr: 'Room service',
        titleEn: 'Room Service & In-Room Dining',
        pdfFr: 'fb/pdf/fr/ch06-room-service.pdf',
        pdfEn: 'fb/pdf/en/ch06-room-service.pdf',
        pptxFr: 'fb/pptx/fr/ch06-room-service.pptx',
        pptxEn: 'fb/pptx/en/ch06-room-service---in-room-dining.pptx',
      },
      {
        number: 7,
        titleFr: 'Interaction client et gestion des réclamations',
        titleEn: 'Guest Interaction and Service Recovery',
        pdfFr: 'fb/pdf/fr/ch07-reclamations.pdf',
        pdfEn: 'fb/pdf/en/ch07-service-recovery.pdf',
        pptxFr: 'fb/pptx/fr/ch07-reclamations.pptx',
        pptxEn: 'fb/pptx/en/ch07-guest-interaction-and-service-recovery.pptx',
      },
      {
        number: 8,
        titleFr: 'Mise en place et gestion des stations',
        titleEn: 'Mise en Place and Station Management',
        pdfFr: 'fb/pdf/fr/ch08-mise-en-place.pdf',
        pdfEn: 'fb/pdf/en/ch08-mise-en-place.pdf',
        pptxFr: 'fb/pptx/fr/ch08-mise-en-place.pptx',
        pptxEn: 'fb/pptx/en/ch08-mise-en-place-and-station-management.pptx',
      },
      {
        number: 9,
        titleFr: "Gestion de l'équipe et opérations",
        titleEn: 'Team Management and Operations',
        pdfFr: 'fb/pdf/fr/ch09-gestion-equipe.pdf',
        pdfEn: 'fb/pdf/en/ch09-team-management.pdf',
        pptxFr: 'fb/pptx/fr/ch09-gestion-equipe.pptx',
        pptxEn: 'fb/pptx/en/ch09-team-management-and-operations.pptx',
      },
      {
        number: 10,
        titleFr: 'Standards qualité et conformité',
        titleEn: 'Quality Standards and Compliance',
        pdfFr: 'fb/pdf/fr/ch10-standards-qualite.pdf',
        pdfEn: 'fb/pdf/en/ch10-quality-standards.pdf',
        pptxFr: 'fb/pptx/fr/ch10-standards-qualite.pptx',
        pptxEn: 'fb/pptx/en/ch10-quality-standards-and-compliance.pptx',
      },
    ],
  },

  spa: {
    id: 'spa',
    titleFr: 'Playbook Spa & Wellness',
    titleEn: 'Spa & Wellness Playbook',
    color: '#7C3AED',
    chapters: [
      {
        number: 1,
        titleFr: "Introduction à l'Excellence du Spa & Bien-Être",
        titleEn: 'Introduction to Spa and Wellness Excellence',
        pdfFr: 'spa/pdf/fr/ch01-introduction.pdf',
        pdfEn: 'spa/pdf/en/ch01-introduction.pdf',
        pptxFr: 'spa/pptx/fr/ch01-introduction-a-lexcellence-du-spa-and-bien-etre.pptx',
        pptxEn: 'spa/pptx/en/ch01-introduction-to-spa-and-wellness-excellence.pptx',
      },
      {
        number: 2,
        titleFr: 'Standards et préparation de la salle de soins',
        titleEn: 'Treatment Room Standards',
        pdfFr: 'spa/pdf/fr/ch02-salle-de-soins.pdf',
        pdfEn: 'spa/pdf/en/ch02-treatment-room.pdf',
        pptxFr: 'spa/pptx/fr/ch02-standards-and-preparation-de-la-salle-de-soins.pptx',
        pptxEn: 'spa/pptx/en/ch02-treatment-room-standards.pptx',
      },
      {
        number: 3,
        titleFr: 'Le parcours client et les protocoles de service',
        titleEn: 'The Guest Journey and Service Protocol',
        pdfFr: 'spa/pdf/fr/ch03-parcours-client.pdf',
        pdfEn: 'spa/pdf/en/ch03-guest-journey.pdf',
        pptxFr: 'spa/pptx/fr/ch03-le-parcours-client-et-les-protocoles-de-service.pptx',
        pptxEn: 'spa/pptx/en/ch03-the-guest-journey-and-service-protocol.pptx',
      },
      {
        number: 4,
        titleFr: 'Carte de soins et techniques',
        titleEn: 'Treatment Menu and Techniques',
        pdfFr: 'spa/pdf/fr/ch04-carte-de-soins.pdf',
        pdfEn: 'spa/pdf/en/ch04-treatment-menu.pdf',
        pptxFr: 'spa/pptx/fr/ch04-carte-de-soins-et-techniques.pptx',
        pptxEn: 'spa/pptx/en/ch04-treatment-menu-and-techniques.pptx',
      },
      {
        number: 5,
        titleFr: 'Connaissance produit et vente retail',
        titleEn: 'Product Knowledge and Retail',
        pdfFr: 'spa/pdf/fr/ch05-vente-retail.pdf',
        pdfEn: 'spa/pdf/en/ch05-product-retail.pdf',
        pptxFr: 'spa/pptx/fr/ch05-connaissance-produit-et-vente-retail.pptx',
        pptxEn: 'spa/pptx/en/ch05-product-knowledge-and-retail.pptx',
      },
      {
        number: 6,
        titleFr: "Gestion des installations et des équipements spa",
        titleEn: 'Spa Facilities and Amenities Management',
        pdfFr: 'spa/pdf/fr/ch06-installations.pdf',
        pdfEn: 'spa/pdf/en/ch06-facilities.pdf',
        pptxFr: 'spa/pptx/fr/ch06-gestion-des-installations-et-des-equipements-spa.pptx',
        pptxEn: 'spa/pptx/en/ch06-spa-facilities-and-amenities-management.pptx',
      },
      {
        number: 7,
        titleFr: "Gestion de l'équipe et planification",
        titleEn: 'Team Management and Scheduling',
        pdfFr: 'spa/pdf/fr/ch07-gestion-equipe.pdf',
        pdfEn: 'spa/pdf/en/ch07-team-management.pdf',
        pptxFr: 'spa/pptx/fr/ch07-gestion-de-lequipe-et-planification.pptx',
        pptxEn: 'spa/pptx/en/ch07-team-management-and-scheduling.pptx',
      },
      {
        number: 8,
        titleFr: 'Contrôle qualité et satisfaction client',
        titleEn: 'Quality Control and Guest Satisfaction',
        pdfFr: 'spa/pdf/fr/ch08-controle-qualite.pdf',
        pdfEn: 'spa/pdf/en/ch08-quality-control.pdf',
        pptxFr: 'spa/pptx/fr/ch08-controle-qualite-et-satisfaction-client.pptx',
        pptxEn: 'spa/pptx/en/ch08-quality-control-and-guest-satisfaction.pptx',
      },
      {
        number: 9,
        titleFr: 'Standards professionnels et présentation',
        titleEn: 'Professional Standards and Grooming',
        pdfFr: 'spa/pdf/fr/ch09-standards-pro.pdf',
        pdfEn: 'spa/pdf/en/ch09-professional-standards.pdf',
        pptxFr: 'spa/pptx/fr/ch09-standards-professionnels-et-presentation.pptx',
        pptxEn: 'spa/pptx/en/ch09-professional-standards-and-grooming.pptx',
      },
    ],
  },
}

/** Returns the list of playbook IDs accessible for a given price_id */
export function getPlaybookIds(priceId: string): string[] {
  const id = PRICE_TO_PLAYBOOK[priceId]
  if (!id) return []
  if (id === 'bundle') return ['front-office', 'housekeeping', 'fb', 'spa']
  return [id]
}
