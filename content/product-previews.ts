export type PreviewProductId =
  | 'fo'
  | 'hsk'
  | 'fb'
  | 'spa'
  | 'fo-starter-pack'
  | 'hsk-starter-pack'
  | 'fb-starter-pack'

export interface ProductPreviewPage {
  src: string
  alt: string
}

export const PRODUCT_PREVIEWS: Record<
  PreviewProductId,
  Record<'en' | 'fr', ProductPreviewPage[]>
> = {
  fo: {
    en: [
      { src: '/product-previews/fo/en/01-check-in-process.webp', alt: 'Front Office Playbook check-in registration process' },
      { src: '/product-previews/fo/en/02-complaint-management.webp', alt: 'Front Office Playbook complaint management framework' },
      { src: '/product-previews/fo/en/03-night-shift-timeline.webp', alt: 'Front Office Playbook night shift timeline' },
    ],
    fr: [
      { src: '/product-previews/fo/fr/01-processus-check-in.webp', alt: 'Processus de check-in du Playbook Front Office' },
      { src: '/product-previews/fo/fr/02-suivi-reclamations.webp', alt: 'Suivi des réclamations du Playbook Front Office' },
      { src: '/product-previews/fo/fr/03-chronologie-night-shift.webp', alt: 'Chronologie du night shift du Playbook Front Office' },
    ],
  },
  hsk: {
    en: [
      { src: '/product-previews/hsk/en/01-room-cleaning.webp', alt: 'Housekeeping Playbook departure room cleaning sequence' },
      { src: '/product-previews/hsk/en/02-quality-control.webp', alt: 'Housekeeping Playbook departure room inspection checklist' },
      { src: '/product-previews/hsk/en/03-supervisor-checklist.webp', alt: 'Housekeeping Playbook supervisor checklist and performance metrics' },
    ],
    fr: [
      { src: '/product-previews/hsk/fr/01-tableau-bord-qualite.webp', alt: 'Tableau de bord qualité du Playbook Housekeeping' },
      { src: '/product-previews/hsk/fr/02-productivite-binome.webp', alt: 'Productivité et coordination en binôme du Playbook Housekeeping' },
      { src: '/product-previews/hsk/fr/03-calcul-effectifs.webp', alt: 'Gestion des affectations du Playbook Housekeeping' },
    ],
  },
  fb: {
    en: [
      { src: '/product-previews/fb/en/01-service-sequence.webp', alt: 'Food and Beverage Playbook 21-step restaurant service sequence' },
      { src: '/product-previews/fb/en/02-cocktail-standards.webp', alt: 'Food and Beverage Playbook classic cocktail standards' },
      { src: '/product-previews/fb/en/03-trolley-checklist.webp', alt: 'Food and Beverage Playbook room service trolley checklist' },
    ],
    fr: [
      { src: '/product-previews/fb/fr/01-sequence-service.webp', alt: 'Séquence de service en 21 étapes du Playbook F&B' },
      { src: '/product-previews/fb/fr/02-standards-cocktails.webp', alt: 'Recettes de cocktails classiques du Playbook F&B' },
      { src: '/product-previews/fb/fr/03-delais-room-service.webp', alt: 'Standards de délais du room service du Playbook F&B' },
    ],
  },
  spa: {
    en: [
      { src: '/product-previews/spa/en/01-guest-journey.webp', alt: 'Spa Playbook guest journey standards' },
      { src: '/product-previews/spa/en/02-room-inspection.webp', alt: 'Spa Playbook treatment room self-inspection checklist' },
      { src: '/product-previews/spa/en/03-quality-standards.webp', alt: 'Spa Playbook quality standards overview' },
    ],
    fr: [
      { src: '/product-previews/spa/fr/01-parcours-client.webp', alt: 'Standards du parcours client du Playbook Spa' },
      { src: '/product-previews/spa/fr/02-inspection-cabine.webp', alt: 'Checklist d’auto-inspection de la cabine du Playbook Spa' },
      { src: '/product-previews/spa/fr/03-standards-qualite.webp', alt: 'Vue d’ensemble des standards qualité du Playbook Spa' },
    ],
  },
  'fo-starter-pack': {
    en: [
      { src: '/product-previews/fo-starter-pack/en/01-check-in-sop.webp', alt: 'Front Office Starter Pack check-in SOP' },
      { src: '/product-previews/fo-starter-pack/en/02-shift-handover.webp', alt: 'Front Office Starter Pack shift handover template' },
      { src: '/product-previews/fo-starter-pack/en/03-vip-arrival.webp', alt: 'Front Office Starter Pack VIP arrival checklist' },
    ],
    fr: [
      { src: '/product-previews/fo-starter-pack/fr/01-sop-check-in.webp', alt: 'SOP de check-in du Starter Pack Front Office' },
      { src: '/product-previews/fo-starter-pack/fr/02-passation-shift.webp', alt: 'Template de passation du Starter Pack Front Office' },
      { src: '/product-previews/fo-starter-pack/fr/03-arrivee-vip.webp', alt: 'Checklist arrivée VIP du Starter Pack Front Office' },
    ],
  },
  'hsk-starter-pack': {
    en: [
      { src: '/product-previews/hsk-starter-pack/en/01-departure-inspection.webp', alt: 'Housekeeping Inspection Kit departure room checklist' },
      { src: '/product-previews/hsk-starter-pack/en/02-supervisor-control.webp', alt: 'Housekeeping Inspection Kit supervisor control sheet' },
      { src: '/product-previews/hsk-starter-pack/en/03-common-defects.webp', alt: 'Housekeeping Inspection Kit common defects checklist' },
    ],
    fr: [
      { src: '/product-previews/hsk-starter-pack/fr/01-inspection-depart.webp', alt: 'Checklist inspection chambre départ du Kit Housekeeping' },
      { src: '/product-previews/hsk-starter-pack/fr/02-controle-superviseur.webp', alt: 'Feuille de contrôle superviseur du Kit Housekeeping' },
      { src: '/product-previews/hsk-starter-pack/fr/03-defauts-frequents.webp', alt: 'Checklist des défauts fréquents du Kit Housekeeping' },
    ],
  },
  'fb-starter-pack': {
    en: [
      { src: '/product-previews/fb-starter-pack/en/01-restaurant-opening.webp', alt: 'F&B Starter Pack restaurant opening checklist' },
      { src: '/product-previews/fb-starter-pack/en/02-service-sequence.webp', alt: 'F&B Starter Pack service sequence SOP' },
      { src: '/product-previews/fb-starter-pack/en/03-table-inspection.webp', alt: 'F&B Starter Pack table inspection checklist' },
    ],
    fr: [
      { src: '/product-previews/fb-starter-pack/fr/01-ouverture-restaurant.webp', alt: 'Checklist ouverture restaurant du Starter Pack F&B' },
      { src: '/product-previews/fb-starter-pack/fr/02-sequence-service.webp', alt: 'Séquence de service du Starter Pack F&B' },
      { src: '/product-previews/fb-starter-pack/fr/03-inspection-table.webp', alt: 'Checklist inspection table du Starter Pack F&B' },
    ],
  },
}
