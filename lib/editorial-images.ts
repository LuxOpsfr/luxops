export const blogEditorialImages: Record<string, string> = {
  'preparer-rentree-hotel-recrutement-formation': '/Previews/front-office-chapter04/fr/page-02.png',
  'preparer-saison-hiver-hotel-formation-equipes': '/Previews/hsk-chapter04/fr/page-02.jpg',
  'intelligence-artificielle-hotellerie-formation-equipes': '/Previews/fb-chapter04/fr/page-02.jpg',
  'hotel-operations-playbook': '/Previews/front-office-chapter04/fr/page-01.png',
  'how-to-write-hotel-sops': '/Previews/front-office-chapter04/fr/page-03.png',
  'hotel-front-office-sop': '/Previews/front-office-chapter04/fr/page-04.png',
  'hotel-housekeeping-checklist': '/Previews/hsk-chapter04/fr/page-04.jpg',
  'hotel-fb-service-standards': '/Previews/fb-chapter04/fr/page-04.jpg',
  'hotel-front-office-procedures': '/Previews/front-office-chapter04/fr/page-05.png',
  'housekeeping-room-inspection': '/images/editorial-hospitality/housekeeping-cottonbro-6466482.jpg',
  'hotel-fb-restaurant-procedures': '/Previews/fb-chapter04/fr/page-05.jpg',
  'hotel-spa-wellness-sops': '/Previews/spa-chapter04/fr/page-04.jpg',
  'hotel-room-service-sops': '/Previews/fb-chapter04/fr/page-06.jpg',
  'hotel-standard-operating-procedures': '/Previews/hsk-chapter04/fr/page-01.jpg',
  'hotel-front-desk-procedures': '/images/editorial-hospitality/hero-reception-natural-v4.png',
  'hotel-staff-training-service-standards': '/Previews/spa-chapter04/fr/page-02.jpg',
  'hotel-staff-turnover-training': '/Previews/hsk-chapter04/fr/page-06.jpg',
  'hotel-new-hire-onboarding': '/Previews/front-office-chapter04/fr/page-07.png',
  'hotel-room-attendant-checklist': '/Previews/hsk-chapter04/fr/page-07.jpg',
  'hotel-front-desk-checklist': '/Previews/front-office-chapter04/fr/page-08.png',
  'hotel-dnd-procedure': '/Previews/hsk-chapter04/fr/page-08.jpg',
  'hotel-room-cleaning-checklist': '/Previews/hsk-chapter04/fr/page-09.jpg',
  'hotel-housekeeping-supervisor-checklist': '/Previews/hsk-chapter04/fr/page-10.jpg',
  'hotel-bathroom-cleaning-sop': '/Previews/hsk-chapter04/fr/page-11.jpg',
}

export const resourceEditorialImages: Record<string, string> = {
  resources: '/Previews/front-office-chapter04/fr/page-01.png',
  'housekeeping-sop': '/Previews/hsk-chapter04/fr/page-01.jpg',
  'front-office-sop': '/Previews/front-office-chapter04/fr/page-01.png',
  'hotel-fb-sop': '/Previews/fb-chapter04/fr/page-01.jpg',
  'sequence-service-restaurant-hotel': '/Previews/fb-chapter04/fr/page-04.jpg',
  'hotel-night-audit-checklist': '/Previews/front-office-chapter04/fr/page-08.png',
  'formation-pre-ouverture': '/Previews/hsk-chapter04/fr/page-02.jpg',
  'free-hotel-procedures': '/Previews/front-office-chapter04/fr/page-01.png',
}

export const editorialImageUrl = (file: string, locale = 'fr') => {
  if (!file.startsWith('/')) return `/images/editorial-hospitality/${file}`
  return file.replace('/fr/', `/${locale === 'en' ? 'en' : 'fr'}/`)
}
