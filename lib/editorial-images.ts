const image = (filename: string) => `/images/editorial-hospitality/${filename}`

export const blogEditorialImages: Record<string, string> = {
  'preparer-rentree-hotel-recrutement-formation': image('training-team-natural-v4.png'),
  'preparer-saison-hiver-hotel-formation-equipes': image('team-briefing-european-v2.jpg'),
  'intelligence-artificielle-hotellerie-formation-equipes': image('front-desk-training-european-v2.jpg'),
  'hotel-operations-playbook': image('hero-hotel-operations-briefing-hd.png'),
  'how-to-write-hotel-sops': image('playbook-table-natural-v2.jpg'),
  'hotel-front-office-sop': image('front-desk-training-european-v2.jpg'),
  'hotel-housekeeping-checklist': image('housekeeping-cottonbro-6466482.jpg'),
  'hotel-fb-service-standards': image('fb-breakfast-buffet.png'),
  'hotel-front-office-procedures': image('hero-reception-natural-v4.png'),
  'housekeeping-room-inspection': image('housekeeping-cottonbro-6466482.jpg'),
  'hotel-fb-restaurant-procedures': image('dept-food-beverage-v2.jpg'),
  'hotel-spa-wellness-sops': image('dept-spa-wellness-v2.jpg'),
  'hotel-room-service-sops': image('fb-room-service.png'),
  'hotel-standard-operating-procedures': image('hero-lobby-operations-wide-v3.jpg'),
  'hotel-front-desk-procedures': image('hero-reception-natural-v4.png'),
  'hotel-staff-training-service-standards': image('training-meeting-natural-v2.jpg'),
  'hotel-staff-turnover-training': image('training-team-natural-v4.png'),
  'hotel-new-hire-onboarding': image('team-briefing-european-v2.jpg'),
  'hotel-room-attendant-checklist': image('housekeeping-cottonbro-6466482.jpg'),
  'hotel-front-desk-checklist': image('front-desk-training-european-v2.jpg'),
  'hotel-dnd-procedure': image('housekeeping.jpg'),
  'hotel-room-cleaning-checklist': image('housekeeping-cottonbro-6466482.jpg'),
  'hotel-housekeeping-supervisor-checklist': image('dept-housekeeping-v2.jpg'),
  'hotel-bathroom-cleaning-sop': image('housekeeping-cottonbro-6466482.jpg'),
}

export const resourceEditorialImages: Record<string, string> = {
  resources: image('hero-lobby-operations-wide-v3.jpg'),
  'housekeeping-sop': image('dept-housekeeping-v2.jpg'),
  'front-office-sop': image('dept-front-office-v2.jpg'),
  'hotel-fb-sop': image('dept-food-beverage-v2.jpg'),
  'sequence-service-restaurant-hotel': image('fb-breakfast-buffet.png'),
  'hotel-night-audit-checklist': image('hero-hotel-operations-briefing-hd.png'),
  'formation-pre-ouverture': image('team-briefing-european-v2.jpg'),
  'free-hotel-procedures': image('hero-lobby-operations-wide-v3.jpg'),
}

export const editorialImageUrl = (file: string, _locale = 'fr') => file
