export type StarterPackId = 'fo-starter-pack' | 'hsk-starter-pack' | 'fb-starter-pack'

export interface StarterPackEntry {
  id: StarterPackId
  priceId: string
  price: number
  category: { en: string; fr: string }
  title: { en: string; fr: string }
  shortTitle: { en: string; fr: string }
  description: { en: string; fr: string }
  subtitle: { en: string; fr: string }
  supportLine: { en: string; fr: string }
  toolsIntro: { en: string; fr: string }
  tools: { en: string[]; fr: string[] }
  bullets: { en: string[]; fr: string[] }
  benefits: { en: string[]; fr: string[] }
  formats: { en: string[]; fr: string[] }
  starterComparison: { en: string; fr: string }
  fullComparison: { en: string; fr: string }
  fullPlaybookId: 'fo' | 'hsk' | 'fb'
  fullPlaybookTitle: { en: string; fr: string }
  faq: {
    question: { en: string; fr: string }
    answer: { en: string; fr: string }
  }[]
  finalText: { en: string; fr: string }
  seo: { title: string; description: string }
}

export const FO_STARTER_PACK_PRICE_ID =
  process.env.NEXT_PUBLIC_STRIPE_FO_STARTER_PACK_PRICE_ID ||
  'price_1TUONHDVLJTOFkjUjE391FrX'

export const HSK_STARTER_PACK_PRICE_ID =
  process.env.NEXT_PUBLIC_STRIPE_HSK_STARTER_PACK_PRICE_ID ||
  'price_1TUONXDVLJTOFkjUYvR8PUiS'

export const FB_STARTER_PACK_PRICE_ID =
  process.env.NEXT_PUBLIC_STRIPE_FB_STARTER_PACK_PRICE_ID ||
  'price_1TVugvDVLJTOFkjUXI0cngur'

export const STARTER_PACKS: StarterPackEntry[] = [
  {
    id: 'fo-starter-pack',
    priceId: FO_STARTER_PACK_PRICE_ID,
    price: 29,
    category: { en: 'Front Office', fr: 'Front Office' },
    title: {
      en: 'Hotel Front Office Starter Pack',
      fr: 'Starter Pack Front Office',
    },
    shortTitle: {
      en: 'Front Office Starter Pack',
      fr: 'Starter Pack Front Office',
    },
    description: {
      en: 'Ready-to-use front desk checklists, handover templates and guest communication tools designed to structure the daily basics of reception operations.',
      fr: 'Checklists réception, templates de passation et outils de communication client prêts à utiliser pour structurer les bases quotidiennes des opérations Front Office.',
    },
    subtitle: {
      en: 'Ready-to-use front desk checklists, handover templates and guest communication tools.',
      fr: 'Checklists réception, templates de passation et outils de communication client prêts à utiliser.',
    },
    supportLine: {
      en: 'For Front Office Managers, Reception Supervisors and Hotel Managers who want practical tools their team can use immediately.',
      fr: 'Pour les Front Office Managers, chefs de réception et directeurs d’hôtel qui veulent des outils concrets utilisables immédiatement par l’équipe.',
    },
    toolsIntro: {
      en: '12 practical tools designed for immediate front desk use.',
      fr: '12 outils pratiques conçus pour une utilisation immédiate à la réception.',
    },
    tools: {
      en: [
        'Front Desk Daily Checklist',
        'Check-in SOP',
        'Check-out SOP',
        'Shift Handover Template',
        'Guest Request Tracker',
        'Complaint Handling Scripts',
        'Pre-arrival Checklist',
        'VIP Arrival Checklist',
        'Front Office Onboarding Checklist',
        'Phone & Email Scripts',
        'Upselling Cheat Sheet',
        'Service Standards Quick Reference',
      ],
      fr: [
        'Checklist quotidienne réception',
        'SOP check-in',
        'SOP check-out',
        'Template de passation de shift',
        'Suivi des demandes clients',
        'Scripts de gestion des réclamations',
        'Checklist pré-arrivée',
        'Checklist arrivée VIP',
        'Checklist onboarding Front Office',
        'Scripts téléphone et email',
        'Fiche mémo upselling',
        'Référence rapide standards de service',
      ],
    },
    bullets: {
      en: [
        'Check-in / check-out SOPs',
        'Shift handover template',
        'Complaint and guest communication scripts',
      ],
      fr: [
        'SOP check-in / check-out',
        'Template de passation de shift',
        'Scripts réclamation et communication client',
      ],
    },
    benefits: {
      en: [
        'Standardise front desk basics',
        'Improve shift handovers',
        'Handle guest requests more consistently',
        'Give teams ready-to-use scripts',
        'Speed up onboarding',
        'Support upselling and service standards',
      ],
      fr: [
        'Standardiser les bases de la réception',
        'Améliorer les passations de shift',
        'Traiter les demandes clients plus régulièrement',
        'Donner des scripts prêts à utiliser aux équipes',
        'Accélérer l’onboarding',
        'Soutenir l’upselling et les standards de service',
      ],
    },
    formats: {
      en: [
        'Printable PDF',
        'Editable PPTX files',
        'English and French versions included',
      ],
      fr: [
        'PDF imprimable',
        'Fichiers PPTX modifiables',
        'Versions française et anglaise incluses',
      ],
    },
    starterComparison: {
      en: 'Practical tools, templates, scripts and checklists for immediate daily use.',
      fr: 'Outils, templates, scripts et checklists pour une utilisation quotidienne immédiate.',
    },
    fullComparison: {
      en: 'Full SOP reference with detailed procedures, standards, management structure, guest journey logic and department-wide operational guidance.',
      fr: 'Référence SOP complète avec procédures détaillées, standards, structure de management, logique de parcours client et guidance opérationnelle du département.',
    },
    fullPlaybookId: 'fo',
    fullPlaybookTitle: {
      en: 'Full Front Office Playbook',
      fr: 'Playbook Front Office complet',
    },
    faq: [
      {
        question: { en: 'Who is this for?', fr: 'Pour qui est ce pack ?' },
        answer: {
          en: 'It is built for Front Office Managers, reception supervisors and hotel managers who need practical tools for daily desk operations.',
          fr: 'Il est conçu pour les Front Office Managers, chefs de réception et directeurs d’hôtel qui ont besoin d’outils pratiques pour les opérations quotidiennes de la réception.',
        },
      },
      {
        question: { en: 'Is this editable?', fr: 'Est-ce modifiable ?' },
        answer: {
          en: 'Yes. The pack includes editable files so you can adapt wording, standards and tracking tools to your property.',
          fr: 'Oui. Le pack inclut des fichiers modifiables pour adapter les formulations, standards et outils de suivi à votre établissement.',
        },
      },
      {
        question: {
          en: 'Is it suitable for independent hotels?',
          fr: 'Est-ce adapté aux hôtels indépendants ?',
        },
        answer: {
          en: 'Yes. The tools are designed to be practical for independent hotels, boutique properties and small groups.',
          fr: 'Oui. Les outils sont pensés pour les hôtels indépendants, boutique hôtels et petits groupes.',
        },
      },
      {
        question: {
          en: 'Is it a training document or an operational tool?',
          fr: 'Est-ce un support de formation ou un outil opérationnel ?',
        },
        answer: {
          en: 'It is primarily an operational toolkit. It can support training, but it is designed to be used during real shifts.',
          fr: 'C’est d’abord une boîte à outils opérationnelle. Elle peut soutenir la formation, mais elle est conçue pour être utilisée pendant les vrais shifts.',
        },
      },
      {
        question: {
          en: 'What is the difference with the full playbook?',
          fr: 'Quelle différence avec le playbook complet ?',
        },
        answer: {
          en: 'The Starter Pack gives you ready-to-use daily tools. The full playbook gives you the complete SOP reference and operational structure behind the department.',
          fr: 'Le Starter Pack donne des outils quotidiens prêts à utiliser. Le playbook complet apporte la référence SOP complète et la structure opérationnelle du département.',
        },
      },
    ],
    finalText: {
      en: 'A practical toolkit to structure the daily basics of your reception operations.',
      fr: 'Une boîte à outils pratique pour structurer les bases quotidiennes de vos opérations réception.',
    },
    seo: {
      title: 'Hotel Front Office Starter Pack | LuxOps',
      description:
        'Ready-to-use front desk checklists, handover templates and guest communication tools for hotel reception teams.',
    },
  },
  {
    id: 'hsk-starter-pack',
    priceId: HSK_STARTER_PACK_PRICE_ID,
    price: 29,
    category: { en: 'Housekeeping', fr: 'Housekeeping' },
    title: {
      en: 'Hotel Housekeeping Inspection Kit',
      fr: 'Kit Inspection Housekeeping',
    },
    shortTitle: {
      en: 'Housekeeping Inspection Kit',
      fr: 'Kit Inspection Housekeeping',
    },
    description: {
      en: 'Ready-to-use room inspection checklists, control sheets and defect tracking tools for housekeeping teams looking to improve daily consistency.',
      fr: 'Checklists d’inspection chambre, feuilles de contrôle et outils de suivi des défauts prêts à utiliser pour améliorer la régularité quotidienne en housekeeping.',
    },
    subtitle: {
      en: 'Ready-to-use room inspection checklists and control tools for housekeeping teams.',
      fr: 'Checklists d’inspection chambre et outils de contrôle prêts à utiliser pour les équipes housekeeping.',
    },
    supportLine: {
      en: 'For Housekeeping Managers, Executive Housekeepers and Floor Supervisors who want practical tools to improve inspection consistency and reduce missed details.',
      fr: 'Pour les gouvernantes générales, managers housekeeping et gouvernantes d’étage qui veulent améliorer la régularité des inspections et réduire les détails manqués.',
    },
    toolsIntro: {
      en: '9 practical housekeeping tools designed for immediate operational use.',
      fr: '9 outils housekeeping pratiques conçus pour une utilisation opérationnelle immédiate.',
    },
    tools: {
      en: [
        'Room Inspection Checklist',
        'Bathroom Inspection Checklist',
        'Bedroom Inspection Checklist',
        'Arrival Room Readiness Checklist',
        'Supervisor Control Sheet',
        'Maintenance Issue Report',
        'Minibar & Amenities Checklist',
        'Common Defects Checklist',
        'Housekeeping Training Checklist',
      ],
      fr: [
        'Checklist inspection chambre',
        'Checklist inspection salle de bain',
        'Checklist inspection chambre et lit',
        'Checklist chambre prête pour arrivée',
        'Feuille de contrôle superviseur',
        'Rapport défaut maintenance',
        'Checklist minibar et amenities',
        'Checklist défauts fréquents',
        'Checklist formation housekeeping',
      ],
    },
    bullets: {
      en: [
        'Room inspection checklists',
        'Supervisor control sheet',
        'Common defects and maintenance tracking',
      ],
      fr: [
        'Checklists inspection chambre',
        'Feuille de contrôle superviseur',
        'Suivi défauts fréquents et maintenance',
      ],
    },
    benefits: {
      en: [
        'Standardise room inspections',
        'Reduce missed details',
        'Support supervisor follow-up',
        'Track recurring defects',
        'Improve room readiness',
        'Train new housekeeping team members faster',
      ],
      fr: [
        'Standardiser les inspections chambre',
        'Réduire les détails manqués',
        'Soutenir le suivi superviseur',
        'Suivre les défauts récurrents',
        'Améliorer la disponibilité des chambres',
        'Former plus vite les nouveaux équipiers',
      ],
    },
    formats: {
      en: [
        'Printable PDF',
        'Editable PPTX files',
        'English and French versions included',
      ],
      fr: [
        'PDF imprimable',
        'Fichiers PPTX modifiables',
        'Versions française et anglaise incluses',
      ],
    },
    starterComparison: {
      en: 'Daily tools, room inspection checklists and control sheets.',
      fr: 'Outils quotidiens, checklists d’inspection chambre et feuilles de contrôle.',
    },
    fullComparison: {
      en: 'Complete department SOPs, standards, room procedures, team structure, linen/product logic and operational guidance.',
      fr: 'SOPs complets du département, standards, procédures chambre, structure d’équipe, logique linge/produits et guidance opérationnelle.',
    },
    fullPlaybookId: 'hsk',
    fullPlaybookTitle: {
      en: 'Full Housekeeping Playbook',
      fr: 'Playbook Housekeeping complet',
    },
    faq: [
      {
        question: { en: 'Who is this kit for?', fr: 'Pour qui est ce kit ?' },
        answer: {
          en: 'It is built for Housekeeping Managers, Executive Housekeepers and floor supervisors who need a clearer inspection structure.',
          fr: 'Il est conçu pour les gouvernantes générales, managers housekeeping et gouvernantes d’étage qui ont besoin d’une structure d’inspection plus claire.',
        },
      },
      {
        question: {
          en: 'Can I print and edit the files?',
          fr: 'Puis-je imprimer et modifier les fichiers ?',
        },
        answer: {
          en: 'Yes. The kit includes printable files and editable versions so you can adapt criteria to your property.',
          fr: 'Oui. Le kit inclut des fichiers imprimables et des versions modifiables pour adapter les critères à votre établissement.',
        },
      },
      {
        question: {
          en: 'Is it suitable for small hotels?',
          fr: 'Est-ce adapté aux petits hôtels ?',
        },
        answer: {
          en: 'Yes. The structure is practical for small hotels, boutique properties and larger teams that need a shared inspection baseline.',
          fr: 'Oui. La structure convient aux petits hôtels, boutique hôtels et équipes plus larges qui ont besoin d’une base d’inspection commune.',
        },
      },
      {
        question: {
          en: 'Is this enough for training?',
          fr: 'Est-ce suffisant pour former une équipe ?',
        },
        answer: {
          en: 'It helps with training, but it is not a full training manual. It gives the team the checklists and control points used in daily work.',
          fr: 'Il aide à la formation, mais ce n’est pas un manuel complet. Il donne à l’équipe les checklists et points de contrôle utilisés au quotidien.',
        },
      },
      {
        question: {
          en: 'What is the difference with the full playbook?',
          fr: 'Quelle différence avec le playbook complet ?',
        },
        answer: {
          en: 'The kit focuses on inspection tools and control sheets. The full playbook covers the whole housekeeping department and its SOP structure.',
          fr: 'Le kit se concentre sur les outils d’inspection et les feuilles de contrôle. Le playbook complet couvre l’ensemble du département housekeeping et sa structure SOP.',
        },
      },
    ],
    finalText: {
      en: 'A practical operational kit for room inspections, supervisor controls and housekeeping consistency.',
      fr: 'Un kit opérationnel pratique pour les inspections chambre, contrôles superviseur et la régularité housekeeping.',
    },
    seo: {
      title: 'Hotel Housekeeping Inspection Kit | LuxOps',
      description:
        'Ready-to-use room inspection checklists, supervisor control sheets and housekeeping tools for hotel teams.',
    },
  },
  {
    id: 'fb-starter-pack',
    priceId: FB_STARTER_PACK_PRICE_ID,
    price: 29,
    category: { en: 'Food & Beverage', fr: 'Food & Beverage' },
    title: {
      en: 'Hotel F&B Service Starter Pack',
      fr: 'Starter Pack F&B',
    },
    shortTitle: {
      en: 'F&B Service Starter Pack',
      fr: 'Starter Pack F&B',
    },
    description: {
      en: 'Ready-to-use restaurant, bar and room service tools designed to structure daily F&B service basics with practical checklists, scripts and control points.',
      fr: 'Outils restaurant, bar et room service prêts à utiliser pour structurer les bases quotidiennes du service F&B avec checklists, scripts et points de contrôle concrets.',
    },
    subtitle: {
      en: 'Ready-to-use restaurant, bar and room service checklists, scripts and control tools.',
      fr: 'Checklists, scripts et outils de contrôle prêts à utiliser pour le restaurant, le bar et le room service.',
    },
    supportLine: {
      en: 'For F&B Managers, Restaurant Managers, Outlet Supervisors and Hotel Managers who want practical tools their teams can use immediately.',
      fr: 'Pour les F&B Managers, responsables restaurant, superviseurs de point de vente et directeurs d’hôtel qui veulent des outils utilisables immédiatement par les équipes.',
    },
    toolsIntro: {
      en: '12 practical F&B tools designed for immediate operational use.',
      fr: '12 outils F&B pratiques conçus pour une utilisation opérationnelle immédiate.',
    },
    tools: {
      en: [
        'F&B Daily Service Checklist',
        'Restaurant Opening Checklist',
        'Restaurant Closing Checklist',
        'Service Sequence SOP',
        'F&B Briefing Template',
        'Table Inspection Checklist',
        'Guest Complaint Recovery Scripts',
        'Allergen and Dietary Request Tracker',
        'Room Service Checklist',
        'Upselling Cheat Sheet',
        'F&B Onboarding Checklist',
        'Service Standards Quick Reference',
      ],
      fr: [
        'F&B Daily Service Checklist',
        'Checklist ouverture restaurant',
        'Checklist fermeture restaurant',
        'SOP séquence de service',
        'Template briefing F&B',
        'Checklist inspection table',
        'Scripts de gestion des réclamations',
        'Tracker allergies et demandes alimentaires',
        'Checklist room service',
        'Fiche mémo upselling',
        'Checklist onboarding F&B',
        'Référence rapide standards de service',
      ],
    },
    bullets: {
      en: [
        'Daily service, opening and closing checklists',
        'Room service and table inspection tools',
        'Guest recovery, allergen and upselling scripts',
      ],
      fr: [
        'Checklists service quotidien, ouverture et fermeture',
        'Outils room service et inspection table',
        'Scripts recovery client, allergènes et upselling',
      ],
    },
    benefits: {
      en: [
        'Standardise pre-service preparation',
        'Improve restaurant shift briefings',
        'Keep service sequence consistent',
        'Reduce room service mistakes',
        'Support allergen communication',
        'Improve closing handovers',
      ],
      fr: [
        'Standardiser la préparation avant service',
        'Améliorer les briefings restaurant',
        'Stabiliser la séquence de service',
        'Réduire les erreurs room service',
        'Soutenir la communication allergènes',
        'Améliorer les passations de clôture',
      ],
    },
    formats: {
      en: [
        'Printable PDF',
        'Editable PPTX files',
        'English and French versions included',
      ],
      fr: [
        'PDF imprimable',
        'Fichiers PPTX modifiables',
        'Versions française et anglaise incluses',
      ],
    },
    starterComparison: {
      en: 'Daily F&B tools, checklists, scripts and control sheets for restaurant, bar and room service operations.',
      fr: 'Outils F&B quotidiens, checklists, scripts et feuilles de contrôle pour le restaurant, le bar et le room service.',
    },
    fullComparison: {
      en: 'Complete F&B SOP reference with detailed service standards, restaurant sequence, bar operations, wine service, room service, recovery methods and team management guidance.',
      fr: 'Référence SOP F&B complète avec standards de service détaillés, séquence restaurant, opérations bar, service du vin, room service, recovery et guidance de management.',
    },
    fullPlaybookId: 'fb',
    fullPlaybookTitle: {
      en: 'Full F&B Playbook',
      fr: 'Playbook F&B complet',
    },
    faq: [
      {
        question: { en: 'Who is this pack for?', fr: 'Pour qui est ce pack ?' },
        answer: {
          en: 'It is built for F&B Managers, restaurant managers, outlet supervisors and hotel managers who need practical tools for daily service execution.',
          fr: 'Il est conçu pour les F&B Managers, responsables restaurant, superviseurs de point de vente et directeurs d’hôtel qui ont besoin d’outils pratiques pour l’exécution quotidienne du service.',
        },
      },
      {
        question: { en: 'Is this editable?', fr: 'Est-ce modifiable ?' },
        answer: {
          en: 'Yes. The pack includes editable PPTX files so you can adapt wording, station checks and scripts to your restaurant, bar or room service operation.',
          fr: 'Oui. Le pack inclut des fichiers PPTX modifiables pour adapter les formulations, contrôles de poste et scripts à votre restaurant, bar ou room service.',
        },
      },
      {
        question: {
          en: 'Does it cover room service?',
          fr: 'Le room service est-il couvert ?',
        },
        answer: {
          en: 'Yes. The pack includes room service order taking, tray and trolley setup, delivery control points and handover logic.',
          fr: 'Oui. Le pack inclut la prise de commande room service, le dressage plateau et trolley, les points de contrôle de livraison et la logique de passation.',
        },
      },
      {
        question: {
          en: 'Is it suitable for independent hotels?',
          fr: 'Est-ce adapté aux hôtels indépendants ?',
        },
        answer: {
          en: 'Yes. The tools are designed for independent hotels, boutique properties and small hotel groups that need a clear F&B operating baseline.',
          fr: 'Oui. Les outils sont pensés pour les hôtels indépendants, boutique hôtels et petits groupes qui ont besoin d’une base opérationnelle F&B claire.',
        },
      },
      {
        question: {
          en: 'What is the difference with the full playbook?',
          fr: 'Quelle différence avec le playbook complet ?',
        },
        answer: {
          en: 'The Starter Pack gives you practical daily tools. The full playbook gives you the complete F&B SOP structure, detailed standards and broader department guidance.',
          fr: 'Le Starter Pack donne des outils quotidiens pratiques. Le playbook complet apporte la structure SOP F&B complète, les standards détaillés et la guidance globale du département.',
        },
      },
    ],
    finalText: {
      en: 'A practical toolkit to structure restaurant, bar and room service basics.',
      fr: 'Une boîte à outils pratique pour structurer les bases restaurant, bar et room service.',
    },
    seo: {
      title: 'Hotel F&B Service Starter Pack | LuxOps',
      description:
        'Ready-to-use restaurant, bar and room service checklists, scripts and control tools for hotel F&B teams.',
    },
  },
]

export function getStarterPack(id: string) {
  return STARTER_PACKS.find((pack) => pack.id === id)
}
