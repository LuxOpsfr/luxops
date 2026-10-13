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
      { src: '/Previews/front-office-chapter04/en/page-01.png', alt: 'Front Office SOP Manual 2027: Chapter 04 cover' },
      { src: '/Previews/front-office-chapter04/en/page-02.png', alt: 'Front Office SOP Manual 2027: Chapter 04 contents' },
      { src: '/Previews/front-office-chapter04/en/page-03.png', alt: 'Front Office SOP Manual 2027: communication principles' },
    ],
    fr: [
      { src: '/Previews/front-office-chapter04/fr/page-01.png', alt: 'Manuel SOP Front Office 2027 : couverture du chapitre 04' },
      { src: '/Previews/front-office-chapter04/fr/page-02.png', alt: 'Manuel SOP Front Office 2027 : sommaire du chapitre 04' },
      { src: '/Previews/front-office-chapter04/fr/page-03.png', alt: 'Manuel SOP Front Office 2027 : principes de communication' },
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
      { src: '/product-previews/2027-starter-packs/fo/en/page-01.webp', alt: 'Front Office Starter Pack 2027 cover' },
      { src: '/product-previews/2027-starter-packs/fo/en/page-02.webp', alt: 'Front Office Starter Pack 2027 contents' },
      { src: '/product-previews/2027-starter-packs/fo/en/page-04.webp', alt: 'Front Office Starter Pack 2027 daily reception checklist' },
    ],
    fr: [
      { src: '/product-previews/2027-starter-packs/fo/fr/page-01.webp', alt: 'Couverture du Starter Pack Front Office 2027' },
      { src: '/product-previews/2027-starter-packs/fo/fr/page-02.webp', alt: 'Sommaire du Starter Pack Front Office 2027' },
      { src: '/product-previews/2027-starter-packs/fo/fr/page-04.webp', alt: 'Checklist quotidienne de la réception 2027' },
    ],
  },
  'hsk-starter-pack': {
    en: [
      { src: '/product-previews/2027-starter-packs/hsk/en/page-01.webp', alt: 'Housekeeping Starter Pack 2027 cover' },
      { src: '/product-previews/2027-starter-packs/hsk/en/page-02.webp', alt: 'Housekeeping Starter Pack 2027 contents' },
      { src: '/product-previews/2027-starter-packs/hsk/en/page-04.webp', alt: 'Housekeeping Starter Pack 2027 room inspection checklist' },
    ],
    fr: [
      { src: '/product-previews/2027-starter-packs/hsk/fr/page-01.webp', alt: 'Couverture du Starter Pack Housekeeping 2027' },
      { src: '/product-previews/2027-starter-packs/hsk/fr/page-02.webp', alt: 'Sommaire du Starter Pack Housekeeping 2027' },
      { src: '/product-previews/2027-starter-packs/hsk/fr/page-04.webp', alt: 'Checklist d’inspection d’une chambre 2027' },
    ],
  },
  'fb-starter-pack': {
    en: [
      { src: '/product-previews/2027-starter-packs/fb/en/page-01.webp', alt: 'F&B Starter Pack 2027 cover' },
      { src: '/product-previews/2027-starter-packs/fb/en/page-02.webp', alt: 'F&B Starter Pack 2027 contents' },
      { src: '/product-previews/2027-starter-packs/fb/en/page-04.webp', alt: 'F&B Starter Pack 2027 daily service checklist' },
    ],
    fr: [
      { src: '/product-previews/2027-starter-packs/fb/fr/page-01.webp', alt: 'Couverture du Starter Pack F&B 2027' },
      { src: '/product-previews/2027-starter-packs/fb/fr/page-02.webp', alt: 'Sommaire du Starter Pack F&B 2027' },
      { src: '/product-previews/2027-starter-packs/fb/fr/page-04.webp', alt: 'Checklist quotidienne de service F&B 2027' },
    ],
  },
}
