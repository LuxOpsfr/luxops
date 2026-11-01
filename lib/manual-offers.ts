export type ManualOfferId = 'fo' | 'hsk' | 'fb' | 'spa' | 'revenue' | 'bundle'
export type OfferLocale = 'fr' | 'en'

const offers = {
  fo: {
    path: '/playbooks/fo', image: '/images/editorial-hospitality/dept-front-office-v2.jpg',
    department: 'Front Office',
    title: { fr: 'Manuel SOP Front Office', en: 'Front Office SOP Manual' },
    mobileTitle: 'Front Office',
    description: { fr: 'Parcours client, check-in, communication et procédures de réception pour le quotidien.', en: 'Guest journey, check-in, communication and front desk procedures for daily operations.' },
    note: { fr: 'Starter Pack Front Office inclus.', en: 'Front Office Starter Pack included.' },
    imageAlt: { fr: 'Réception d’un hôtel haut de gamme', en: 'Luxury hotel front desk' },
  },
  hsk: {
    path: '/playbooks/hsk', image: '/images/editorial-hospitality/dept-housekeeping-v2.jpg',
    department: 'Housekeeping',
    title: { fr: 'Manuel SOP Housekeeping', en: 'Housekeeping SOP Manual' },
    mobileTitle: 'Housekeeping',
    description: { fr: 'Nettoyage, inspection des chambres, linge et contrôle qualité pour les équipes d’étage.', en: 'Room cleaning, inspections, linen and quality control for housekeeping teams.' },
    note: { fr: 'Starter Pack Housekeeping inclus.', en: 'Housekeeping Starter Pack included.' },
    imageAlt: { fr: 'Chambre d’hôtel préparée pour un client', en: 'Prepared hotel guest room' },
  },
  fb: {
    path: '/playbooks/fb', image: '/images/editorial-hospitality/dept-food-beverage-v2.jpg',
    department: 'Food & Beverage',
    title: { fr: 'Manuel SOP F&B', en: 'F&B SOP Manual' },
    mobileTitle: 'Food & Beverage',
    description: { fr: 'Séquences de service, restaurant, bar, petit-déjeuner et room service.', en: 'Service sequences for restaurant, bar, breakfast and room service.' },
    note: { fr: 'Starter Pack F&B inclus.', en: 'F&B Starter Pack included.' },
    imageAlt: { fr: 'Table de restaurant hôtelier dressée', en: 'Hotel restaurant table setting' },
  },
  spa: {
    path: '/playbooks/spa', image: '/images/editorial-hospitality/dept-spa-wellness-v2.jpg',
    department: 'Spa & Wellness',
    title: { fr: 'Manuel SOP Spa & Wellness', en: 'Spa & Wellness SOP Manual' },
    mobileTitle: 'Spa & Wellness',
    description: { fr: 'Protocoles de soins, parcours client, réservations et standards des espaces bien-être.', en: 'Treatment protocols, guest journey, bookings and wellness service standards.' },
    note: { fr: '', en: '' },
    imageAlt: { fr: 'Espace de soins spa dans un hôtel', en: 'Hotel spa treatment space' },
  },
  revenue: {
    path: '/playbooks/revenue-management', image: '/images/editorial-hospitality/dept-revenue-management-v1.png',
    department: 'Revenue Management',
    title: { fr: 'Manuel Revenue Management', en: 'Revenue Management Manual' },
    mobileTitle: 'Revenue Management',
    description: { fr: 'Forecast, tarifs, disponibilités et distribution : des procédures pour piloter les décisions commerciales.', en: 'Forecasting, rates, availability and distribution: procedures for commercial decisions.' },
    note: { fr: '', en: '' },
    imageAlt: { fr: 'Espace de travail Revenue Management dans un hôtel', en: 'Hotel revenue management workspace' },
  },
  bundle: {
    path: '/playbooks#bundle', image: '/images/editorial-hospitality/playbooks-flatlay.jpg',
    department: 'LuxOps',
    title: { fr: 'Catalogue complet', en: 'Complete catalogue' },
    mobileTitle: { fr: 'Les 5 manuels SOP', en: 'All 5 SOP manuals' },
    description: { fr: 'Les cinq départements et les trois Starter Packs réunis dans le bundle.', en: 'All five departments and three Starter Packs in one bundle.' },
    note: { fr: '', en: '' },
    imageAlt: { fr: 'Collection des manuels SOP LuxOps', en: 'LuxOps SOP manual collection' },
  },
} as const

export function getManualOffer(id: ManualOfferId, locale: OfferLocale, routeLocale: string = locale) {
  const item = offers[id]
  return {
    href: `/${routeLocale}${item.path}`,
    image: item.image,
    department: item.department,
    title: item.title[locale],
    mobileTitle: typeof item.mobileTitle === 'string' ? item.mobileTitle : item.mobileTitle[locale],
    description: item.description[locale],
    note: item.note[locale],
    imageAlt: item.imageAlt[locale],
    priceType: id === 'bundle' ? 'bundle' as const : 'playbook' as const,
  }
}

const blogDepartments: Record<string, ManualOfferId> = {
  'hotel-operations-playbook': 'bundle',
  'how-to-write-hotel-sops': 'bundle',
  'hotel-front-office-sop': 'fo',
  'hotel-housekeeping-checklist': 'hsk',
  'hotel-fb-service-standards': 'fb',
  'hotel-front-office-procedures': 'fo',
  'housekeeping-room-inspection': 'hsk',
  'hotel-fb-restaurant-procedures': 'fb',
  'hotel-spa-wellness-sops': 'spa',
  'hotel-room-service-sops': 'fb',
  'hotel-standard-operating-procedures': 'bundle',
  'hotel-front-desk-procedures': 'fo',
  'hotel-staff-training-service-standards': 'bundle',
  'hotel-staff-turnover-training': 'bundle',
  'hotel-new-hire-onboarding': 'bundle',
  'hotel-room-attendant-checklist': 'hsk',
  'hotel-front-desk-checklist': 'fo',
  'hotel-dnd-procedure': 'hsk',
  'hotel-room-cleaning-checklist': 'hsk',
  'hotel-housekeeping-supervisor-checklist': 'hsk',
  'hotel-bathroom-cleaning-sop': 'hsk',
}

export function manualOfferForBlog(slug: string): ManualOfferId {
  return blogDepartments[slug] ?? 'bundle'
}

const resourceDepartments: Record<string, ManualOfferId> = {
  blog: 'bundle', resources: 'bundle',
  'hotel-sop': 'bundle', 'manuel-procedure-hotellerie': 'bundle',
  'hotel-operations-playbook': 'bundle', 'hotel-management-routines': 'bundle',
  'rituels-management-hotelier': 'bundle', 'how-to-improve-hotel-operations': 'bundle',
  'hotel-checklist': 'bundle', 'hotel-audit-checklist': 'bundle',
  'audit-qualite': 'bundle', 'quality-audit': 'bundle',
  'free-hotel-procedures': 'bundle', 'free-hotel-checklists': 'bundle',
  'checklists-hotel-gratuites': 'bundle',
  'front-office-sop': 'fo', 'hotel-front-office-checklist': 'fo',
  'hotel-night-audit-checklist': 'fo', 'front-desk-shift-handover-template': 'fo',
  'modele-passation-reception': 'fo', 'guest-complaint-handling-sop': 'fo',
  'procedure-reclamation-client': 'fo',
  'housekeeping-sop': 'hsk', 'hotel-housekeeping-checklist': 'hsk',
  'housekeeping-deep-cleaning-checklist': 'hsk', 'deep-cleaning-chambre': 'hsk',
  'room-status-discrepancy-report': 'hsk', 'rapport-ecart-statut-chambre': 'hsk',
  'hotel-fb-sop': 'fb', 'food-and-beverage-service-sequence': 'fb',
  'sequence-service-restaurant-hotel': 'fb', 'hotel-room-service-checklist': 'fb',
  'checklist-room-service-hotel': 'fb', 'breakfast-service-checklist': 'fb',
  'checklist-service-petit-dejeuner': 'fb', 'restaurant-opening-checklist': 'fb',
  'hotel-restaurant-opening-checklist': 'fb', 'checklist-ouverture-restaurant': 'fb',
  'checklist-ouverture-restaurant-hotel': 'fb', 'bar-opening-checklist': 'fb',
  'checklist-ouverture-bar': 'fb', 'restaurant-closing-checklist': 'fb',
  'checklist-fermeture-restaurant': 'fb',
}

export function manualOfferForResourcePath(pathname: string): ManualOfferId | null {
  const segments = pathname.split('/').filter(Boolean)
  if (segments.length !== 2) return null
  return resourceDepartments[segments[1]] ?? null
}
