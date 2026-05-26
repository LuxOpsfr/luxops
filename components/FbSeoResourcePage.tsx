import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  ConciergeBell,
  FileText,
  ListChecks,
  ShieldCheck,
  Sparkles,
  UtensilsCrossed,
} from 'lucide-react'
import TrackedLink from '@/components/TrackedLink'
import { breadcrumbSchema, faqSchema, localizedPath } from '@/lib/seo'

type Locale = 'en' | 'fr'
type ResourceKind = 'sequence' | 'roomService' | 'restaurantOpening' | 'barOpening' | 'restaurantClosing'

type Faq = {
  question: string
  answer: string
}

type Step = {
  label: string
  action: string
  timing: string
}

type ChecklistBlock = {
  title: string
  intro?: string
  items: string[]
}

type ResourceContent = {
  slug: string
  alternateSlug: string
  title: string
  metaTitle: string
  metaDescription: string
  keywords: string
  eyebrow: string
  h1: string
  subtitle: string
  sourceNote: string
  extractedFrom: string
  primaryCta: string
  secondaryCta: string
  freeChapterCta: string
  sectionLabel: string
  sectionTitle: string
  sectionIntro: string
  steps?: Step[]
  blocks: ChecklistBlock[]
  extractTitle: string
  extractText: string
  extractItems: string[]
  productTitle: string
  productText: string
  playbookTitle: string
  playbookText: string
  relatedTitle: string
  relatedText: string
  relatedHref: string
  relatedCta: string
  faqs: Faq[]
  finalTitle: string
  finalText: string
}

type ClusterLink = {
  kind?: ResourceKind
  href: string
  label: string
  text: string
}

const SEQUENCE_EN: ResourceContent = {
  slug: '/food-and-beverage-service-sequence',
  alternateSlug: '/sequence-service-restaurant-hotel',
  title: 'Food and Beverage Service Sequence',
  metaTitle: 'Food and Beverage Service Sequence for Hotels | LuxOps',
  metaDescription:
    'A hotel F&B service sequence adapted from the LuxOps F&B Playbook: 21 restaurant service steps, timing standards, briefing, mise en place and recovery rules.',
  keywords:
    'food and beverage service sequence, service sequence in serving food and beverage, hotel restaurant service sequence, F&B service procedure hotel',
  eyebrow: 'F&B service sequence',
  h1: 'Food and Beverage Service Sequence for Hotels',
  subtitle:
    'A practical 21-step restaurant service sequence for hotel teams that need a clear, repeatable service flow.',
  sourceNote:
    'This page summarizes one operational method used inside the LuxOps F&B products. The complete checklists and editable tools are available in the paid versions.',
  extractedFrom:
    'Extracted from the restaurant service, mise en place and guest recovery chapters of the LuxOps F&B Playbook.',
  primaryCta: 'View F&B Starter Pack',
  secondaryCta: 'View Full F&B Playbook',
  freeChapterCta: 'Download a Free Chapter',
  sectionLabel: '21-step service flow',
  sectionTitle: 'The sequence from guest arrival to farewell',
  sectionIntro:
    'The playbook treats service as a choreographed sequence, not as a random list of tasks. Each step connects naturally to the next, so the team can stay warm, precise and consistent.',
  steps: [
    { label: '01', action: 'Welcome and greet', timing: 'Within 10 seconds' },
    { label: '02', action: 'Escort to table', timing: 'Immediate' },
    { label: '03', action: 'Seat guests', timing: 'With chair assistance' },
    { label: '04', action: 'Present menus', timing: 'Within 30 seconds of seating' },
    { label: '05', action: 'Unfold napkins', timing: 'As guests settle' },
    { label: '06', action: 'Offer water and take drink order', timing: 'Within 2 minutes' },
    { label: '07', action: 'Serve drinks', timing: 'Within 5 minutes' },
    { label: '08', action: 'Present specials', timing: 'With drinks' },
    { label: '09', action: 'Take food order', timing: 'When guests are ready' },
    { label: '10', action: 'Serve bread or amuse-bouche', timing: 'After order taken' },
    { label: '11', action: 'Serve appetizers', timing: 'Within 10 minutes' },
    { label: '12', action: 'Clear appetizer plates', timing: 'When all guests have finished' },
    { label: '13', action: 'Serve main courses', timing: 'Within 10 minutes of clearing' },
    { label: '14', action: 'Check satisfaction', timing: '2 minutes after serving' },
    { label: '15', action: 'Clear main course', timing: 'When all guests have finished' },
    { label: '16', action: 'Offer dessert menu', timing: 'Within 2 minutes of clearing' },
    { label: '17', action: 'Take dessert or coffee order', timing: 'When guests are ready' },
    { label: '18', action: 'Serve dessert or coffee', timing: 'Within 10 minutes' },
    { label: '19', action: 'Clear dessert', timing: 'When finished' },
    { label: '20', action: 'Present check', timing: 'When requested or appropriate' },
    { label: '21', action: 'Farewell', timing: 'Warm, personalized and by name when possible' },
  ],
  blocks: [
    {
      title: 'Before the sequence starts',
      intro: 'The sequence only works if the shift is prepared before the first guest arrives.',
      items: [
        'Uniform, grooming, hygiene and service tools checked before briefing',
        'Menu, specials, unavailable items, VIP arrivals and allergies reviewed',
        'Tables, chairs, condiments, glassware, silverware, napkins and menus inspected',
        'Station stocked, floor clean, lighting appropriate and team in position',
      ],
    },
    {
      title: 'Order taking control points',
      intro: 'The order is not just transcribed. It is verified, clarified and communicated.',
      items: [
        'Ask clarifying questions on cooking temperatures, accompaniments and modifications',
        'Confirm allergies and dietary requirements before sending the order',
        'Repeat the complete order back to the guest',
        'Alert the kitchen clearly when a safety or allergy note is involved',
      ],
    },
    {
      title: 'Table maintenance standards',
      intro: 'Table maintenance is where the sequence stays elegant instead of feeling rushed.',
      items: [
        'Clear only when all guests have finished, unless the guest requests otherwise',
        'Clear from the right and never stack plates in front of guests',
        'Use the crumber discreetly after main courses if required',
        'Refill water and remove unnecessary items without interrupting the conversation',
      ],
    },
    {
      title: 'Recovery if timing slips',
      intro: 'The playbook uses a simple rule: the guest should hear from the team before frustration is visible.',
      items: [
        'Acknowledge the delay before the guest needs to ask',
        'Give a brief and honest update without defensive excuses',
        'Commit to a revised timing and follow through',
        'Escalate to the manager when the delay or complaint requires a recovery gesture',
      ],
    },
  ],
  extractTitle: 'Why the 21-step sequence matters',
  extractText:
    'Timing and order of service create consistency. The sequence is not designed to make the server robotic. It removes operational doubt so the team can focus on the guest.',
  extractItems: [
    'Greeting standard: guest recognized within 10 seconds',
    'Drink order standard: water and beverage order within 2 minutes',
    'Checkback standard: satisfaction checked 2 minutes after the main course',
    'Farewell standard: warm, personal and ideally by name',
  ],
  productTitle: 'F&B Starter Pack',
  productText:
    'Includes daily service checklist, restaurant opening checklist, restaurant closing checklist, service sequence SOP, briefing template, table inspection checklist, recovery scripts, allergen tracker and room service checklist.',
  playbookTitle: 'Full F&B Playbook',
  playbookText:
    'The complete reference for restaurant, breakfast, bar, wine, room service, guest interaction, mise en place, team management and quality standards.',
  relatedTitle: 'Need the room service version?',
  relatedText:
    'The room service checklist turns the same service logic into order taking, tray setup, delivery timing and collection controls.',
  relatedHref: '/hotel-room-service-checklist',
  relatedCta: 'View Room Service Checklist',
  faqs: [
    {
      question: 'What is a food and beverage service sequence?',
      answer:
        'It is the ordered flow of service from guest arrival to farewell. In a hotel restaurant, it includes greeting, seating, menu presentation, beverage order, food order, course service, checkback, clearing, dessert, check presentation and farewell.',
    },
    {
      question: 'Is this the same as a restaurant SOP?',
      answer:
        'The service sequence is one part of a restaurant SOP. A complete SOP also includes opening preparation, briefing, mise en place, order control, table maintenance, recovery, closing and handover.',
    },
    {
      question: 'Can this be used for training?',
      answer:
        'Yes. The sequence works well as a training reference because it gives new servers a clear order of service while still leaving room for natural hospitality.',
    },
  ],
  finalTitle: 'Turn the sequence into daily service tools',
  finalText:
    'Use the starter pack for ready-to-use checklists and the full playbook when you need the complete F&B department reference.',
}

const SEQUENCE_FR: ResourceContent = {
  slug: '/sequence-service-restaurant-hotel',
  alternateSlug: '/food-and-beverage-service-sequence',
  title: 'Séquence de service restaurant hôtel',
  metaTitle: 'Séquence de service restaurant hôtel | LuxOps',
  metaDescription:
    'Séquence de service restaurant hôtel adaptée du Playbook F&B LuxOps : 21 étapes, timing, briefing, mise en place, prise de commande et recovery client.',
  keywords:
    'séquence service restaurant hôtel, standards service F&B hôtel, procédure service restaurant, SOP restaurant hôtel, food and beverage hôtel',
  eyebrow: 'Séquence de service restaurant',
  h1: 'Séquence de service restaurant en hôtel',
  subtitle:
    'Une séquence de service en 21 étapes pour les équipes hôtelières qui veulent un déroulé clair, régulier et facile à transmettre.',
  sourceNote:
    'Cette page résume une méthode opérationnelle utilisée dans les produits F&B LuxOps. Les checklists complètes et outils modifiables sont disponibles dans les versions payantes.',
  extractedFrom:
    'Extrait des chapitres service restaurant, mise en place et recovery client du Playbook F&B LuxOps.',
  primaryCta: 'Voir le Starter Pack F&B',
  secondaryCta: 'Voir le Playbook F&B complet',
  freeChapterCta: 'Télécharger un chapitre gratuit',
  sectionLabel: 'Séquence en 21 étapes',
  sectionTitle: 'Le déroulé complet, de l’arrivée client au départ',
  sectionIntro:
    'Le playbook traite le service comme une séquence chorégraphiée, et non comme une succession de tâches isolées. Chaque étape s’enchaîne avec la suivante, ce qui permet à l’équipe de rester naturelle, précise et régulière.',
  steps: [
    { label: '01', action: 'Accueillir et saluer', timing: 'Dans les 10 secondes' },
    { label: '02', action: 'Accompagner à la table', timing: 'Immédiatement' },
    { label: '03', action: 'Installer les clients', timing: 'Avec aide à la chaise' },
    { label: '04', action: 'Présenter les cartes', timing: 'Dans les 30 secondes suivant l’installation' },
    { label: '05', action: 'Déposer les serviettes', timing: 'Pendant l’installation' },
    { label: '06', action: 'Proposer l’eau et prendre la commande de boissons', timing: 'Dans les 2 minutes' },
    { label: '07', action: 'Servir les boissons', timing: 'Dans les 5 minutes' },
    { label: '08', action: 'Présenter les suggestions du jour', timing: 'Avec les boissons' },
    { label: '09', action: 'Prendre la commande des plats', timing: 'Quand les clients sont prêts' },
    { label: '10', action: 'Servir le pain ou l’amuse-bouche', timing: 'Après la prise de commande' },
    { label: '11', action: 'Servir les entrées', timing: 'Dans les 10 minutes' },
    { label: '12', action: 'Débarrasser les entrées', timing: 'Quand tous les clients ont terminé' },
    { label: '13', action: 'Servir les plats principaux', timing: 'Dans les 10 minutes après débarrassage' },
    { label: '14', action: 'Vérifier la satisfaction', timing: '2 minutes après le service' },
    { label: '15', action: 'Débarrasser les plats principaux', timing: 'Quand tous les clients ont terminé' },
    { label: '16', action: 'Proposer la carte des desserts', timing: 'Dans les 2 minutes après débarrassage' },
    { label: '17', action: 'Prendre la commande desserts et cafés', timing: 'Quand les clients sont prêts' },
    { label: '18', action: 'Servir desserts et cafés', timing: 'Dans les 10 minutes' },
    { label: '19', action: 'Débarrasser les desserts', timing: 'Quand tous les clients ont terminé' },
    { label: '20', action: 'Présenter l’addition', timing: 'Sur demande ou au moment approprié' },
    { label: '21', action: 'Dire au revoir', timing: 'Chaleureusement, idéalement par le nom' },
  ],
  blocks: [
    {
      title: 'Avant le début de la séquence',
      intro: 'La séquence fonctionne seulement si le service est préparé avant l’arrivée du premier client.',
      items: [
        'Tenue, présentation, hygiène et outils de service contrôlés avant le briefing',
        'Carte, suggestions, articles indisponibles, VIP et allergies revus avec l’équipe',
        'Tables, chaises, condiments, verrerie, argenterie, serviettes et cartes inspectés',
        'Station approvisionnée, sol propre, éclairage adapté et équipe en position',
      ],
    },
    {
      title: 'Points de contrôle à la prise de commande',
      intro: 'La commande n’est pas simplement notée. Elle est vérifiée, clarifiée puis transmise correctement.',
      items: [
        'Poser les questions de précision sur cuissons, accompagnements et modifications',
        'Confirmer les allergies et régimes avant d’envoyer la commande',
        'Répéter la commande complète au client',
        'Alerter clairement la cuisine lorsqu’une note allergène ou sécurité est en jeu',
      ],
    },
    {
      title: 'Suivi de table pendant le service',
      intro: 'Le suivi de table permet à la séquence de rester élégante, sans donner une impression de précipitation.',
      items: [
        'Débarrasser seulement lorsque tous les clients ont terminé, sauf demande contraire',
        'Débarrasser par la droite et ne jamais empiler les assiettes devant les clients',
        'Utiliser le ramasse-miettes discrètement après les plats si nécessaire',
        'Remplir l’eau et retirer les éléments inutiles sans interrompre la conversation',
      ],
    },
    {
      title: 'Recovery si le timing se dégrade',
      intro: 'Le playbook suit une règle simple : le client doit recevoir une information avant que la frustration soit visible.',
      items: [
        'Reconnaître le retard avant que le client ait besoin de demander',
        'Donner une information brève et honnête, sans justification défensive',
        'Annoncer un nouveau délai précis et le tenir',
        'Escalader au manager lorsque le retard ou la réclamation nécessite un geste de recovery',
      ],
    },
  ],
  extractTitle: 'Pourquoi la séquence en 21 étapes compte',
  extractText:
    'Le timing et l’ordre du service créent la régularité. La séquence ne sert pas à rendre le serveur robotique. Elle retire le doute opérationnel pour permettre à l’équipe de se concentrer sur le client.',
  extractItems: [
    'Accueil : client reconnu dans les 10 secondes',
    'Boissons : eau et commande de boissons dans les 2 minutes',
    'Suivi : satisfaction vérifiée 2 minutes après le plat principal',
    'Départ : au revoir chaleureux, personnalisé et idéalement par le nom',
  ],
  productTitle: 'Starter Pack F&B',
  productText:
    'Inclut checklist service quotidien, checklist ouverture restaurant, checklist fermeture, SOP séquence de service, template de briefing, checklist inspection de table, scripts recovery, tracker allergènes et checklist room service.',
  playbookTitle: 'Playbook F&B complet',
  playbookText:
    'La référence complète pour restaurant, petit-déjeuner, bar, vin, room service, interaction client, mise en place, management équipe et standards qualité.',
  relatedTitle: 'Vous voulez la version room service ?',
  relatedText:
    'La checklist room service applique la même logique à la prise de commande, au dressage plateau, au timing de livraison et au débarrassage.',
  relatedHref: '/checklist-room-service-hotel',
  relatedCta: 'Voir la checklist room service',
  faqs: [
    {
      question: 'Qu’est-ce qu’une séquence de service restaurant ?',
      answer:
        'C’est le déroulé ordonné du service, depuis l’accueil jusqu’au départ du client. En restaurant hôtelier, elle couvre l’accueil, le placement, la présentation des cartes, les boissons, la prise de commande, le service des plats, le suivi de satisfaction, le débarrassage, le dessert, l’addition et l’au revoir.',
    },
    {
      question: 'Est-ce la même chose qu’une SOP restaurant ?',
      answer:
        'Non. La séquence de service est une partie de la SOP restaurant. Une SOP complète couvre aussi l’ouverture, le briefing, la mise en place, la prise de commande, le suivi de table, le recovery, la fermeture et la passation.',
    },
    {
      question: 'Cette séquence peut-elle servir à former une équipe ?',
      answer:
        'Oui. Elle fonctionne très bien comme support de formation, car elle donne aux nouveaux serveurs un ordre clair tout en laissant de la place à l’hospitalité naturelle.',
    },
  ],
  finalTitle: 'Transformer la séquence en outils de service quotidiens',
  finalText:
    'Utilisez le Starter Pack pour des checklists prêtes à l’emploi, puis le Playbook complet lorsque vous avez besoin de toute la référence F&B du département.',
}

const ROOM_SERVICE_EN: ResourceContent = {
  slug: '/hotel-room-service-checklist',
  alternateSlug: '/checklist-room-service-hotel',
  title: 'Hotel Room Service Checklist',
  metaTitle: 'Hotel Room Service Checklist and SOP | LuxOps',
  metaDescription:
    'A hotel room service checklist adapted from the LuxOps F&B Playbook: order taking, timing, tray and trolley setup, delivery protocol, delay recovery and tray collection.',
  keywords:
    'hotel room service checklist, hotel room service SOP, room service procedure, room service order taking procedures, in-room dining checklist',
  eyebrow: 'Room service checklist',
  h1: 'Hotel Room Service Checklist',
  subtitle:
    'A practical checklist for order taking, tray setup, delivery timing and in-room service.',
  sourceNote:
    'This page summarizes one operational method used inside the LuxOps F&B products. The complete room service tools are available in the paid versions.',
  extractedFrom:
    'Extracted from the room service, guest interaction, mise en place and quality chapters of the LuxOps F&B Playbook.',
  primaryCta: 'View F&B Starter Pack',
  secondaryCta: 'View Full F&B Playbook',
  freeChapterCta: 'Download a Free Chapter',
  sectionLabel: 'Operational checklist',
  sectionTitle: 'The room service flow from call to collection',
  sectionIntro:
    'Room service is not reduced restaurant service. It is the restaurant standard delivered into the guest’s private space, with one interaction to make the experience feel complete.',
  blocks: [
    {
      title: '1. Order taking checklist',
      intro: 'The call sets the expectation for timing, accuracy and personalization.',
      items: [
        'Answer within 3 rings with a calm room service greeting',
        'Confirm room number, guest name and number of guests',
        'Capture the complete order, cooking temperatures, condiments and beverages',
        'Ask about allergies, dietary requirements and special requests',
        'Suggest relevant additions without pressure',
        'Repeat the order and state the expected delivery time',
      ],
    },
    {
      title: '2. Timing standards',
      intro: 'The timing is promised directly to the guest, so it must be controlled.',
      items: [
        'Continental breakfast: 20 to 25 minutes',
        'Full breakfast: 25 to 30 minutes',
        'Lunch: 30 to 35 minutes',
        'Dinner: 35 to 45 minutes',
        'Beverages only: 15 to 20 minutes',
        'VIP orders: priority handling',
      ],
    },
    {
      title: '3. Tray and trolley setup',
      intro: 'The guest sees the tray before tasting the food. Presentation and completeness matter.',
      items: [
        'Use a tray for 1 to 2 guests, simple orders and beverages',
        'Use a trolley for 2 or more guests, multiple courses and hot items',
        'Check tray cloth, napkin, silverware, polished glassware and condiments',
        'Use cloches for hot items and protect temperature until delivery',
        'Include check presenter, working pen and complete place settings',
      ],
    },
    {
      title: '4. Delivery protocol',
      intro: 'Delivery must feel composed, discreet and complete.',
      items: [
        'Walk at a professional pace with tray or trolley controlled and silent',
        'Knock, announce room service and wait for permission before entering',
        'Ask where the guest would like the setup',
        'Present each item clearly and offer to pour beverages',
        'Confirm satisfaction, explain pickup and exit quietly',
      ],
    },
    {
      title: '5. Delay and recovery protocol',
      intro: 'Silence is what turns a delay into a complaint.',
      items: [
        'If the order is 5 to 10 minutes late, call the guest, apologize and give a new ETA',
        'If the delay is 10 minutes or more, notify the manager and consider recovery',
        'Document recurring delays by order type, kitchen station or delivery route',
        'Follow up after delivery when a delay or complaint occurred',
      ],
    },
  ],
  extractTitle: 'Room service timing standards',
  extractText:
    'Room service should be treated as an elevated private dining experience. The setting changes, but the restaurant standard should not drop.',
  extractItems: [
    'Breakfast orders need separate timing rules from lunch and dinner',
    'Tray or trolley choice depends on cover count, courses and temperature control',
    'The order must be repeated before the kitchen starts production',
    'Pickup is part of the standard, not an afterthought',
  ],
  productTitle: 'F&B Starter Pack',
  productText:
    'Includes a room service checklist, daily service checklist, opening and closing checklists, briefing template, service sequence SOP, recovery scripts and allergen tracker.',
  playbookTitle: 'Full F&B Playbook',
  playbookText:
    'The complete reference for room service philosophy, order taking, tray and trolley setup, timing standards, VIP in-room dining, troubleshooting and quality control.',
  relatedTitle: 'Need the restaurant service sequence?',
  relatedText:
    'Use the 21-step F&B service sequence to align restaurant service from greeting to farewell.',
  relatedHref: '/food-and-beverage-service-sequence',
  relatedCta: 'View F&B Service Sequence',
  faqs: [
    {
      question: 'What should a hotel room service checklist include?',
      answer:
        'It should include order taking, room number confirmation, guest name, number of guests, allergies, delivery timing, tray or trolley setup, condiments, beverage setup, in-room delivery protocol and tray collection.',
    },
    {
      question: 'What is the standard room service timing in hotels?',
      answer:
        'The LuxOps F&B Playbook uses reference targets: continental breakfast 20 to 25 minutes, full breakfast 25 to 30 minutes, lunch 30 to 35 minutes, dinner 35 to 45 minutes and beverages only 15 to 20 minutes.',
    },
    {
      question: 'Is room service part of the restaurant SOP?',
      answer:
        'It should be connected to the restaurant SOP, but it needs its own procedure because the service happens in the guest’s private space and must be complete in one interaction.',
    },
  ],
  finalTitle: 'Make room service easier to control',
  finalText:
    'Start with the checklist in the F&B Starter Pack, then use the full playbook when you need the complete room service SOP and quality control reference.',
}

const ROOM_SERVICE_FR: ResourceContent = {
  slug: '/checklist-room-service-hotel',
  alternateSlug: '/hotel-room-service-checklist',
  title: 'Checklist room service hôtel',
  metaTitle: 'Checklist room service hôtel et SOP | LuxOps',
  metaDescription:
    'Checklist room service hôtel adaptée du Playbook F&B LuxOps : prise de commande, timing, dressage plateau et chariot, livraison, recovery retard et débarrassage.',
  keywords:
    'checklist room service hôtel, SOP room service hôtel, procédure room service, prise de commande room service, service en chambre hôtel',
  eyebrow: 'Checklist room service',
  h1: 'Checklist room service en hôtel',
  subtitle:
    'Une checklist pratique pour la prise de commande, le dressage plateau, le timing de livraison et le service en chambre.',
  sourceNote:
    'Cette page résume une méthode opérationnelle utilisée dans les produits F&B LuxOps. Les outils room service complets sont disponibles dans les versions payantes.',
  extractedFrom:
    'Extrait des chapitres room service, interaction client, mise en place et qualité du Playbook F&B LuxOps.',
  primaryCta: 'Voir le Starter Pack F&B',
  secondaryCta: 'Voir le Playbook F&B complet',
  freeChapterCta: 'Télécharger un chapitre gratuit',
  sectionLabel: 'Checklist opérationnelle',
  sectionTitle: 'Le flux room service, de l’appel au débarrassage',
  sectionIntro:
    'Le room service n’est pas un service restaurant diminué. C’est le standard restaurant porté dans l’espace privé du client, avec une seule interaction pour donner une impression complète.',
  blocks: [
    {
      title: '1. Checklist de prise de commande',
      intro: 'L’appel fixe les attentes du client sur le délai, l’exactitude et la personnalisation.',
      items: [
        'Décrocher avant 3 sonneries avec une formule room service calme et professionnelle',
        'Confirmer le numéro de chambre, le nom du client et le nombre de couverts',
        'Noter la commande complète, les cuissons, les condiments et les boissons',
        'Vérifier allergies, régimes alimentaires et demandes spéciales',
        'Suggérer des compléments pertinents, sans pression',
        'Répéter la commande et annoncer le délai de livraison',
      ],
    },
    {
      title: '2. Standards de timing',
      intro: 'Le délai est annoncé directement au client. Il doit donc être maîtrisé.',
      items: [
        'Petit-déjeuner continental : 20 à 25 minutes',
        'Petit-déjeuner complet : 25 à 30 minutes',
        'Déjeuner : 30 à 35 minutes',
        'Dîner : 35 à 45 minutes',
        'Boissons seules : 15 à 20 minutes',
        'Commandes VIP : traitement prioritaire',
      ],
    },
    {
      title: '3. Dressage plateau et chariot',
      intro: 'Le client voit le plateau avant de goûter le plat. La présentation et la complétude comptent.',
      items: [
        'Utiliser un plateau pour 1 à 2 couverts, les commandes simples et les boissons',
        'Utiliser un chariot à partir de 2 couverts, pour plusieurs plats ou des préparations chaudes',
        'Contrôler nappe de plateau, serviette, couverts, verrerie polie et condiments',
        'Utiliser des cloches pour les plats chauds et protéger la température jusqu’à la livraison',
        'Inclure pochette addition, stylo fonctionnel et couverts complets',
      ],
    },
    {
      title: '4. Protocole de livraison',
      intro: 'La livraison doit paraître posée, discrète et complète.',
      items: [
        'Avancer à une allure professionnelle avec un plateau ou chariot stable et silencieux',
        'Frapper, annoncer room service et attendre l’autorisation avant d’entrer',
        'Demander où le client souhaite l’installation',
        'Présenter chaque élément clairement et proposer de servir les boissons',
        'Confirmer la satisfaction, expliquer le débarrassage et sortir discrètement',
      ],
    },
    {
      title: '5. Protocole retard et recovery',
      intro: 'Le silence transforme un retard en réclamation.',
      items: [
        'Si la commande a 5 à 10 minutes de retard, appeler le client, s’excuser et donner un nouveau délai',
        'À partir de 10 minutes de retard, prévenir le manager et envisager un geste de recovery',
        'Documenter les retards récurrents par type de commande, station cuisine ou circuit de livraison',
        'Faire un suivi après livraison lorsqu’un retard ou une réclamation a eu lieu',
      ],
    },
  ],
  extractTitle: 'Standards de timing room service',
  extractText:
    'Le room service doit être traité comme une expérience de restauration privée élevée. Le cadre change, mais le standard restaurant ne doit pas baisser.',
  extractItems: [
    'Les commandes petit-déjeuner demandent des délais distincts du déjeuner et du dîner',
    'Le choix plateau ou chariot dépend du nombre de couverts, des plats et du maintien en température',
    'La commande doit être répétée avant que la cuisine lance la production',
    'Le débarrassage fait partie du standard, ce n’est pas un détail secondaire',
  ],
  productTitle: 'Starter Pack F&B',
  productText:
    'Inclut checklist room service, checklist service quotidien, checklists ouverture et fermeture, template de briefing, SOP séquence de service, scripts recovery et tracker allergènes.',
  playbookTitle: 'Playbook F&B complet',
  playbookText:
    'La référence complète pour philosophie room service, prise de commande, dressage plateau et chariot, standards de timing, VIP in-room dining, troubleshooting et contrôle qualité.',
  relatedTitle: 'Besoin de la séquence restaurant ?',
  relatedText:
    'Utilisez la séquence de service F&B en 21 étapes pour aligner le service restaurant, de l’accueil jusqu’au départ.',
  relatedHref: '/sequence-service-restaurant-hotel',
  relatedCta: 'Voir la séquence de service F&B',
  faqs: [
    {
      question: 'Que doit contenir une checklist room service hôtel ?',
      answer:
        'Elle doit couvrir la prise de commande, la confirmation du numéro de chambre, le nom du client, le nombre de couverts, les allergies, le délai de livraison, le dressage plateau ou chariot, les condiments, les boissons, le protocole en chambre et le débarrassage.',
    },
    {
      question: 'Quels sont les délais standard du room service ?',
      answer:
        'Le Playbook F&B LuxOps utilise ces repères : petit-déjeuner continental 20 à 25 minutes, petit-déjeuner complet 25 à 30 minutes, déjeuner 30 à 35 minutes, dîner 35 à 45 minutes et boissons seules 15 à 20 minutes.',
    },
    {
      question: 'Le room service fait-il partie de la SOP restaurant ?',
      answer:
        'Il doit être relié à la SOP restaurant, mais il a besoin de sa propre procédure, car le service se déroule dans l’espace privé du client et doit être complet en une seule interaction.',
    },
  ],
  finalTitle: 'Rendre le room service plus facile à contrôler',
  finalText:
    'Commencez avec la checklist du Starter Pack F&B, puis utilisez le Playbook complet lorsque vous avez besoin de toute la procédure room service et du contrôle qualité.',
}

const RESTAURANT_OPENING_EN: ResourceContent = {
  slug: '/restaurant-opening-checklist',
  alternateSlug: '/checklist-ouverture-restaurant',
  title: 'Restaurant Opening Checklist',
  metaTitle: 'Restaurant Opening Checklist | LuxOps',
  metaDescription:
    'A restaurant opening checklist adapted from LuxOps F&B tools: personal readiness, room setup, table inspection, terrace checks, POS, briefing and final inspection.',
  keywords:
    'restaurant opening checklist, restaurant pre service checklist, restaurant setup checklist, F&B opening checklist, coffee shop opening checklist',
  eyebrow: 'Restaurant opening checklist',
  h1: 'Restaurant Opening Checklist',
  subtitle:
    'A practical pre-service checklist for preparing the dining room, terrace, team, POS and final inspection before opening.',
  sourceNote:
    'This page summarizes one operational method used inside the LuxOps F&B products. The complete checklists and editable tools are available in the paid versions.',
  extractedFrom:
    'Based on the restaurant opening checklist, table inspection checklist, service briefing and mise en place standards from LuxOps F&B resources.',
  primaryCta: 'View F&B Starter Pack',
  secondaryCta: 'View Full F&B Playbook',
  freeChapterCta: 'Download a Free Chapter',
  sectionLabel: 'Pre-service flow',
  sectionTitle: 'What to check before opening the restaurant',
  sectionIntro:
    'A strong restaurant opening sequence prevents service problems before the guest arrives. The checklist should move from personal readiness to room setup, table inspection, briefing and final positioning.',
  blocks: [
    {
      title: '1. Personal readiness, T-90',
      intro: 'The team should be ready before the room is inspected.',
      items: [
        'Uniform clean, pressed and complete with all required accessories',
        'Hair neat, nails clean, discreet fragrance and fresh breath',
        'Hands clean before handling menus, glassware, silverware or napkins',
        'Service tools ready: wine key, pen, crumber and notepad',
        'Menu, specials, unavailable items, VIP arrivals and allergies reviewed',
      ],
    },
    {
      title: '2. Dining room and terrace, T-60',
      intro: 'The room should feel ready before the team begins detailed table checks.',
      items: [
        'Tables set according to the property standard',
        'Chairs aligned, clean and stable',
        'Floor clean and dry, lighting appropriate and music set',
        'Temperature comfortable and no unwanted odor present',
        'Terrace checked if applicable: shade, wind, candles, heaters and weather plan',
      ],
    },
    {
      title: '3. Table setup and polishing',
      intro: 'Table quality is checked before service, not corrected after the first guest sits down.',
      items: [
        'Show plate centered, 2.5 cm from the edge of the table',
        'Fork positioned 2.5 cm from the plate and knife blade facing the plate',
        'Glasses placed above the knife tip and checked for chips',
        'Silverware polished, aligned and handled away from the contact surface',
        'Minimum 60 cm between covers when the setup allows it',
      ],
    },
    {
      title: '4. Reservations and station stock',
      intro: 'Operational pressure is easier to manage when reservations and stations are clear before briefing.',
      items: [
        'Floor plan printed or visible to the team',
        'Reservations checked in the system with special requests noted',
        'VIP tables identified and prepared',
        'Server sections assigned before doors open',
        'Menus, condiments, service napkins, bar tools and backup stock ready',
      ],
    },
    {
      title: '5. POS, briefing and final inspection',
      intro: 'The last checks align the team before the host welcomes the first guest.',
      items: [
        'POS tested, printers working and payment terminals ready',
        'Cash float checked and signed where applicable',
        'Briefing held on time, with covers, VIPs, menu changes, wine focus and sections',
        'Final inspection completed at T-20: tables, stations, uniforms, ambiance and positions',
        'Host in position at the entrance before opening',
      ],
    },
  ],
  extractTitle: 'The opening sequence protects the service',
  extractText:
    'Most restaurant issues begin before the guest arrives: incomplete mise en place, unclear sections, missing tools, unavailable items not briefed or tables inspected too late.',
  extractItems: [
    'T-90: team readiness and knowledge of the day',
    'T-60: dining room, terrace and stations ready',
    'T-40: briefing with reservations, VIPs and menu changes',
    'T-20: final inspection before the doors open',
  ],
  productTitle: 'F&B Starter Pack',
  productText:
    'Includes restaurant opening checklist, closing checklist, daily service checklist, briefing template, table inspection checklist, service sequence SOP and recovery scripts.',
  playbookTitle: 'Full F&B Playbook',
  playbookText:
    'The complete reference for restaurant service, breakfast, bar, wine, room service, guest interaction, mise en place, team management and quality standards.',
  relatedTitle: 'Need the full service sequence?',
  relatedText:
    'Use the 21-step service sequence to connect the opening checklist with the actual guest journey.',
  relatedHref: '/food-and-beverage-service-sequence',
  relatedCta: 'View F&B Service Sequence',
  faqs: [
    {
      question: 'What should a restaurant opening checklist include?',
      answer:
        'It should include team readiness, menu knowledge, unavailable items, room setup, terrace checks, table setup, glassware and silverware polishing, reservation review, VIP notes, station stock, POS checks, briefing and final inspection.',
    },
    {
      question: 'When should a restaurant opening checklist start?',
      answer:
        'The LuxOps F&B format starts around 90 minutes before opening, then moves through room setup at T-60, briefing at T-40 and final inspection around T-20.',
    },
    {
      question: 'Is this checklist only for large F&B teams?',
      answer:
        'It is built from LuxOps F&B standards, and the structure works for resorts, independent restaurants, coffee shops and any venue that needs a clearer pre-service routine.',
    },
  ],
  finalTitle: 'Prepare the restaurant before pressure starts',
  finalText:
    'Use the starter pack for ready-to-use restaurant opening tools and the full playbook when you need the complete F&B operating reference.',
}

const RESTAURANT_OPENING_FR: ResourceContent = {
  slug: '/checklist-ouverture-restaurant',
  alternateSlug: '/restaurant-opening-checklist',
  title: 'Checklist ouverture restaurant',
  metaTitle: 'Checklist ouverture restaurant | LuxOps',
  metaDescription:
    'Checklist ouverture restaurant adaptée des outils F&B LuxOps : préparation équipe, salle, terrasse, dressage, polissage, POS, briefing et inspection finale.',
  keywords:
    'checklist ouverture restaurant, checklist avant service restaurant, checklist mise en place restaurant, ouverture restaurant F&B, checklist coffee shop',
  eyebrow: 'Checklist ouverture restaurant',
  h1: 'Checklist d’ouverture restaurant',
  subtitle:
    'Une checklist pré-service pour préparer la salle, la terrasse, l’équipe, le POS et le dernier tour de contrôle avant l’arrivée des premiers clients.',
  sourceNote:
    'Cette page reprend une méthode opérationnelle utilisée dans les produits F&B LuxOps. Les checklists complètes et les supports modifiables sont disponibles dans les versions payantes.',
  extractedFrom:
    'Adapté de la checklist d’ouverture restaurant, de la checklist inspection de table, du briefing pré-service et des standards de mise en place des ressources F&B LuxOps.',
  primaryCta: 'Voir le Starter Pack F&B',
  secondaryCta: 'Voir le Playbook F&B complet',
  freeChapterCta: 'Télécharger un chapitre gratuit',
  sectionLabel: 'Flux pré-service',
  sectionTitle: 'Ce qu’il faut contrôler avant d’ouvrir le restaurant',
  sectionIntro:
    'Une ouverture bien tenue évite beaucoup de corrections pendant le service. L’idée n’est pas de cocher mécaniquement une liste, mais de vérifier que l’équipe, la salle, les stations et les informations du jour sont alignées avant que le rythme commence.',
  blocks: [
    {
      title: '1. Préparation personnelle, T-90',
      intro: 'Avant de regarder la salle, il faut d’abord vérifier que l’équipe est prête à entrer en service.',
      items: [
        'Uniforme propre, repassé, complet avec tous les accessoires nécessaires',
        'Cheveux soignés, ongles propres, parfum discret et haleine fraîche',
        'Mains propres avant de manipuler cartes, verrerie, argenterie ou serviettes',
        'Outils de service prêts : limonadier, stylo, ramasse-miettes et bloc-notes',
        'Carte, suggestions, articles indisponibles, réservations importantes et allergies revus avec l’équipe',
      ],
    },
    {
      title: '2. Salle et terrasse, T-60',
      intro: 'À ce stade, la salle doit déjà donner une impression de maîtrise, avant même les contrôles de détail.',
      items: [
        'Tables dressées selon le standard de l’établissement',
        'Chaises alignées, propres et stables',
        'Sol propre et sec, éclairage approprié et musique réglée',
        'Température confortable et absence d’odeur parasite',
        'Terrasse contrôlée si applicable : ombre, vent, bougies, chauffages, météo et solution de repli',
      ],
    },
    {
      title: '3. Dressage et polissage',
      intro: 'Le dressage se corrige avant l’ouverture. Une fois le client installé, il est déjà trop tard pour reprendre les bases sans perdre en fluidité.',
      items: [
        'Assiette de présentation centrée, à 2,5 cm du bord de table',
        'Fourchette positionnée à 2,5 cm de l’assiette et couteau avec lame vers l’assiette',
        'Verres placés au-dessus de la pointe du couteau et vérifiés sans éclat',
        'Argenterie polie, alignée et manipulée sans toucher la partie de consommation',
        '60 cm minimum entre deux couverts lorsque la configuration le permet',
      ],
    },
    {
      title: '4. Réservations et stock des stations',
      intro: 'Le service démarre plus sereinement lorsque le plan, les rangs et les stations sont clairs avant le briefing.',
      items: [
        'Plan de salle imprimé ou visible par l’équipe',
        'Réservations vérifiées dans le système avec demandes spéciales notées',
        'Tables importantes identifiées et préparées',
        'Rangs attribués aux serveurs avant l’ouverture',
        'Cartes, condiments, serviettes de service, outils bar, consommables et stock de secours prêts',
      ],
    },
    {
      title: '5. POS, briefing et inspection finale',
      intro: 'Les derniers contrôles servent à aligner tout le monde avant que l’hôte, l’hôtesse ou le responsable accueille le premier client.',
      items: [
        'POS testé, imprimantes fonctionnelles et terminaux de paiement prêts',
        'Fonds de caisse vérifié et signé si applicable',
        'Briefing tenu à l’heure, avec couverts attendus, réservations sensibles, changements de carte, focus vin et rangs',
        'Inspection finale réalisée à T-20 : tables, stations, uniformes, ambiance et positions',
        'Accueil en position avant ouverture, avec le plan de salle et les informations du jour',
      ],
    },
  ],
  extractTitle: 'L’ouverture protège le service',
  extractText:
    'La plupart des difficultés en salle commencent avant l’arrivée du client : mise en place incomplète, rangs mal définis, outils manquants, articles indisponibles non annoncés ou tables contrôlées trop tard.',
  extractItems: [
    'T-90 : équipe prête et connaissance du jour validée',
    'T-60 : salle, terrasse et stations en place',
    'T-40 : briefing avec réservations, VIP et changements de carte',
    'T-20 : inspection finale avant ouverture',
  ],
  productTitle: 'Starter Pack F&B',
  productText:
    'Inclut checklist d’ouverture restaurant, checklist de fermeture, checklist service quotidien, template de briefing, checklist inspection de table, SOP séquence de service et scripts recovery.',
  playbookTitle: 'Playbook F&B complet',
  playbookText:
    'La référence complète pour service restaurant, petit-déjeuner, bar, vin, room service, interaction client, mise en place, management d’équipe et standards qualité.',
  relatedTitle: 'Besoin de la séquence de service complète ?',
  relatedText:
    'Utilisez la séquence de service en 21 étapes pour relier l’ouverture du restaurant au parcours client réel.',
  relatedHref: '/sequence-service-restaurant-hotel',
  relatedCta: 'Voir la séquence de service F&B',
  faqs: [
    {
      question: 'Que doit contenir une checklist d’ouverture restaurant ?',
      answer:
        'Elle doit couvrir la préparation de l’équipe, la connaissance de la carte, les articles indisponibles, la salle, la terrasse, le dressage de table, le polissage, les réservations, les points sensibles du jour, le stock des stations, le POS, le briefing et l’inspection finale.',
    },
    {
      question: 'Quand commencer la checklist d’ouverture restaurant ?',
      answer:
        'Le format F&B LuxOps démarre environ 90 minutes avant l’ouverture, puis avance vers la préparation salle à T-60, le briefing à T-40 et l’inspection finale autour de T-20.',
    },
    {
      question: 'Cette checklist est-elle réservée aux grandes équipes F&B ?',
      answer:
        'Non. Elle part des standards F&B LuxOps, mais la structure fonctionne aussi pour un resort, un restaurant indépendant, un coffee shop ou tout point de vente qui veut clarifier sa routine pré-service.',
    },
  ],
  finalTitle: 'Préparer le restaurant avant que la pression commence',
  finalText:
    'Utilisez le Starter Pack pour des outils d’ouverture prêts à l’emploi, puis le Playbook complet lorsque vous avez besoin de toute la référence opérationnelle F&B.',
}

const BAR_OPENING_EN: ResourceContent = {
  slug: '/bar-opening-checklist',
  alternateSlug: '/checklist-ouverture-bar',
  title: 'Bar Opening Checklist',
  metaTitle: 'Bar Opening Checklist | LuxOps',
  metaDescription:
    'A practical bar opening checklist for station setup, glassware, garnish prep, stock control, POS checks, briefing and final pre-service inspection.',
  keywords:
    'bar opening checklist, bar setup checklist, bar mise en place checklist, bar opening procedure, bar SOP checklist',
  eyebrow: 'Bar opening checklist',
  h1: 'Bar Opening Checklist',
  subtitle:
    'A practical pre-service checklist for preparing the bar station, glassware, garnishes, stock, POS and team before service.',
  sourceNote:
    'This page summarizes one operational method used inside the LuxOps F&B products. The complete checklists and editable PPTX tools are available in the paid versions.',
  extractedFrom:
    'Adapted from the bar operations, mise en place, responsible service, stock control and quality chapters of the LuxOps F&B Playbook.',
  primaryCta: 'View F&B Starter Pack',
  secondaryCta: 'View Full F&B Playbook',
  freeChapterCta: 'Download a Free Chapter',
  sectionLabel: 'Pre-service bar setup',
  sectionTitle: 'What to check before opening the bar',
  sectionIntro:
    'A bar opening checklist protects speed, presentation and consistency before the first guest orders. The station should be ready enough for the bartender to work cleanly, serve with presence and avoid leaving the bar during pressure.',
  blocks: [
    {
      title: '1. Briefing, grooming and service focus',
      intro: 'The bar opens with information first, not only with bottles on the station.',
      items: [
        'Uniform, grooming, hygiene and service tools checked before handling glassware or garnishes',
        'Daily specials, unavailable items, reservations, VIPs, events and service notes reviewed',
        'Responsible service expectations, signs of intoxication and escalation points confirmed',
        'Shift handover reviewed, including open issues, guest preferences and maintenance points',
      ],
    },
    {
      title: '2. Bar station and mise en place',
      intro: 'The station should be complete, fresh and organized before production starts.',
      items: [
        'Shakers, strainers, jiggers, muddlers, bar spoons, knives and peelers clean and accessible',
        'Ice wells clean, filled and protected, with service ice separated from any cleaning task',
        'Speed rail organized by house standard, with bottles clean, full enough and facing correctly',
        'Cutting board, bar towels, sanitizer, waste bins and service napkins positioned correctly',
        'Menus clean, current and available at the bar, lounge tables and service points',
      ],
    },
    {
      title: '3. Glassware, garnishes and fresh preparations',
      intro: 'The drink presentation starts before the first order is taken.',
      items: [
        'Glassware polished, chip-free, checked against light and stocked by drink type',
        'Fresh juices, syrups, bitters and mixers checked for quality, shelf life and par level',
        'Citrus, herbs, olives, cherries, cocktail onions and picks prepared to expected par',
        'Garnishes covered, labelled when required and stored at the correct temperature',
        'Coasters, napkins and stirrers stocked at each guest-facing and service point',
      ],
    },
    {
      title: '4. Stock, par levels and backups',
      intro: 'Running out of basic stock during service creates avoidable pressure.',
      items: [
        'House spirits, premium spirits, wines by the glass, draft beer and bottled beer checked against par',
        'Non-alcoholic options prepared with the same presentation standard as alcoholic drinks',
        'Backup stock identified and accessible without leaving the bar unattended',
        'Low stock, breakage, flat draft beer, missing items and 86’d items logged before opening',
      ],
    },
    {
      title: '5. POS, cash and final inspection',
      intro: 'The final walk-through confirms the bar can open without operational friction.',
      items: [
        'POS, printers, payment terminals and tab procedures tested before the first order',
        'Cash float checked, reset to opening level and signed if used',
        'Bar counter, back bar, shelves, floor, guest stools and visible surfaces inspected',
        'Lighting, music, temperature, smell and overall atmosphere checked',
        'Bartender in position before opening, with station complete and manager walk-through done',
      ],
    },
  ],
  extractTitle: 'The bar opening sequence protects service speed',
  extractText:
    'The bar is often the first or last F&B contact of the day. When mise en place is incomplete, service slows down, drinks become inconsistent and the bartender loses guest presence.',
  extractItems: [
    'Station ready, fresh and organized before service starts',
    'Glassware polished, chip-free and organized by drink type',
    'Garnishes, juices and mixers prepared to par and protected',
    'POS, cash float, payment tools and tab procedures tested before the first order',
  ],
  productTitle: 'F&B Starter Pack',
  productText:
    'Includes restaurant and bar service tools, daily service checklist, opening and closing checklists, briefing template, service sequence SOP, recovery scripts and allergen tracker.',
  playbookTitle: 'Full F&B Playbook',
  playbookText:
    'The complete reference for restaurant, breakfast, bar, wine, room service, guest interaction, mise en place, team management and quality standards.',
  relatedTitle: 'Need the restaurant opening checklist?',
  relatedText:
    'Use the restaurant opening checklist to align the room, terrace, table setup, POS and briefing before the first guest arrives.',
  relatedHref: '/restaurant-opening-checklist',
  relatedCta: 'View Restaurant Opening Checklist',
  faqs: [
    {
      question: 'What should a bar opening checklist include?',
      answer:
        'It should include briefing notes, bartender readiness, station tools, ice, glassware, garnishes, juices, mixers, menus, stock par levels, backup stock, responsible service checks, POS, cash, payment terminals and a final guest-facing inspection.',
    },
    {
      question: 'Is a bar opening checklist useful for small venues?',
      answer:
        'Yes. The smaller the team, the more important it is to have the station ready before pressure starts. The checklist can be adapted to a hotel bar, restaurant bar, coffee shop or cocktail outlet.',
    },
    {
      question: 'What is the difference between bar opening and bar closing?',
      answer:
        'Opening prepares the station for speed and guest service. Closing protects hygiene, stock control, cash control, cleaning, handover and readiness for the next shift.',
    },
  ],
  finalTitle: 'Prepare the bar before service pressure starts',
  finalText:
    'Use the starter pack for ready-to-use F&B tools and the full playbook when you need the complete bar and service operating reference.',
}

const BAR_OPENING_FR: ResourceContent = {
  slug: '/checklist-ouverture-bar',
  alternateSlug: '/bar-opening-checklist',
  title: 'Checklist ouverture bar',
  metaTitle: 'Checklist ouverture bar | LuxOps',
  metaDescription:
    'Checklist ouverture bar : mise en place du poste, verrerie, garnitures, stock, POS, service responsable, briefing et dernier contrôle avant service.',
  keywords:
    'checklist ouverture bar, checklist mise en place bar, procédure ouverture bar, SOP bar, checklist bar',
  eyebrow: 'Checklist ouverture bar',
  h1: 'Checklist d’ouverture bar',
  subtitle:
    'Une checklist pré-service pour préparer le poste bar, la verrerie, les garnitures, le stock, le POS et l’équipe avant l’arrivée des premiers clients.',
  sourceNote:
    'Cette page reprend une méthode opérationnelle utilisée dans les produits F&B LuxOps. Les checklists complètes et supports PPTX modifiables sont disponibles dans les versions payantes.',
  extractedFrom:
    'Adapté des chapitres bar, mise en place, service responsable, contrôle stock et qualité du Playbook F&B LuxOps.',
  primaryCta: 'Voir le Starter Pack F&B',
  secondaryCta: 'Voir le Playbook F&B complet',
  freeChapterCta: 'Télécharger un chapitre gratuit',
  sectionLabel: 'Mise en place pré-service',
  sectionTitle: 'Ce qu’il faut contrôler avant d’ouvrir le bar',
  sectionIntro:
    'Une ouverture de bar bien tenue protège la vitesse, la présentation et la régularité avant la première commande. Le poste doit être suffisamment prêt pour que l’équipe bar travaille proprement, garde sa présence client et n’ait pas à quitter le comptoir au mauvais moment.',
  blocks: [
    {
      title: '1. Briefing, présentation et posture de service',
      intro: 'L’ouverture du bar commence par les informations du jour, pas seulement par les bouteilles sur le poste.',
      items: [
        'Tenue, présentation, hygiène et outils de service contrôlés avant de manipuler verrerie ou garnitures',
        'Suggestions, articles indisponibles, réservations, VIP, événements et consignes du jour revus',
        'Règles de service responsable, signes d’ivresse et points d’escalade confirmés avec le manager',
        'Passation du service précédent relue : préférences client, incidents, maintenance et points de vigilance',
      ],
    },
    {
      title: '2. Poste bar et mise en place',
      intro: 'Le poste doit être complet, frais et organisé avant le début de la production.',
      items: [
        'Shakers, passoires, jiggers, pilons, cuillères à bar, couteaux et économes propres et accessibles',
        'Bacs à glace propres, remplis et protégés, avec une glace de service séparée de toute tâche de nettoyage',
        'Speed rail organisé selon le standard, avec bouteilles propres, suffisamment remplies et bien orientées',
        'Planche, torchons, désinfectant, poubelles et serviettes de service placés au bon endroit',
        'Cartes propres, à jour et disponibles au bar, en lounge et aux points de service',
      ],
    },
    {
      title: '3. Verrerie, garnitures et préparations fraîches',
      intro: 'La présentation d’une boisson commence avant même la première commande.',
      items: [
        'Verrerie polie, sans éclat, vérifiée à contre-jour et rangée par type de boisson',
        'Jus frais, sirops, bitters et mixers contrôlés sur la qualité, la conservation et le niveau de par',
        'Agrumes, herbes, olives, cerises, oignons cocktail et pics préparés au niveau attendu',
        'Garnitures couvertes, étiquetées si nécessaire et conservées à la bonne température',
        'Sous-verres, serviettes et mélangeurs disponibles à chaque point client et point de service',
      ],
    },
    {
      title: '4. Stock, par et réserves',
      intro: 'Manquer d’un basique pendant le service crée une pression évitable.',
      items: [
        'Spiritueux maison, premium, vins au verre, bière pression et bières bouteille contrôlés selon les niveaux de par',
        'Options sans alcool préparées avec le même soin de présentation que les boissons alcoolisées',
        'Stock de secours identifié et accessible sans laisser les clients sans présence au bar',
        'Articles bas, casse, bière pression plate, manquants et items 86’d notés avant l’ouverture',
      ],
    },
    {
      title: '5. POS, caisse et inspection finale',
      intro: 'Le dernier tour confirme que le bar peut ouvrir sans friction opérationnelle.',
      items: [
        'POS, imprimantes, terminaux de paiement et procédure d’ouverture des notes testés',
        'Fonds de caisse vérifié, remis au niveau de départ et signé si utilisé',
        'Comptoir, back bar, étagères, sol, tabourets et surfaces visibles par le client inspectés',
        'Éclairage, musique, température, odeur et ambiance générale contrôlés',
        'Équipe bar en position avant l’ouverture, avec poste complet et dernier tour manager réalisé',
      ],
    },
  ],
  extractTitle: 'L’ouverture bar protège la vitesse du service',
  extractText:
    'Le bar est souvent le premier ou le dernier contact F&B de la journée. Lorsque la mise en place est incomplète, le service ralentit, les boissons deviennent irrégulières et l’équipe perd en présence client.',
  extractItems: [
    'Poste prêt, frais et organisé avant le début du service',
    'Verrerie polie, sans éclat et organisée par type de boisson',
    'Garnitures, jus et mixers préparés au niveau de par et protégés',
    'POS, fonds de caisse, terminaux et procédure d’ouverture des notes testés avant la première commande',
  ],
  productTitle: 'Starter Pack F&B',
  productText:
    'Inclut outils restaurant et bar, checklist service quotidien, checklists ouverture et fermeture, template de briefing, SOP séquence de service, scripts recovery et tracker allergènes.',
  playbookTitle: 'Playbook F&B complet',
  playbookText:
    'La référence complète pour restaurant, petit-déjeuner, bar, vin, room service, interaction client, mise en place, management équipe et standards qualité.',
  relatedTitle: 'Besoin de la checklist ouverture restaurant ?',
  relatedText:
    'Utilisez la checklist ouverture restaurant pour aligner salle, terrasse, dressage, POS et briefing avant l’arrivée des premiers clients.',
  relatedHref: '/checklist-ouverture-restaurant',
  relatedCta: 'Voir la checklist ouverture restaurant',
  faqs: [
    {
      question: 'Que doit contenir une checklist d’ouverture bar ?',
      answer:
        'Elle doit couvrir le briefing, la présentation de l’équipe, les outils de poste, la glace, la verrerie, les garnitures, les jus, les mixers, les cartes, les niveaux de stock, les réserves, le service responsable, le POS, la caisse, les terminaux de paiement et le dernier contrôle côté client.',
    },
    {
      question: 'Cette checklist est-elle utile pour un petit point de vente ?',
      answer:
        'Oui. Plus l’équipe est réduite, plus le poste doit être prêt avant la pression du service. La checklist peut s’adapter à un bar d’hôtel, un bar de restaurant, un coffee shop ou un point de vente cocktail.',
    },
    {
      question: 'Quelle différence entre ouverture et fermeture bar ?',
      answer:
        'L’ouverture prépare le poste pour la vitesse et le service client. La fermeture protège l’hygiène, le stock, la caisse, le nettoyage, la passation et la préparation du prochain shift.',
    },
  ],
  finalTitle: 'Préparer le bar avant la pression du service',
  finalText:
    'Utilisez le Starter Pack pour des outils F&B prêts à l’emploi, puis le Playbook complet lorsque vous avez besoin de toute la référence opérationnelle bar et service.',
}

const RESTAURANT_CLOSING_EN: ResourceContent = {
  slug: '/restaurant-closing-checklist',
  alternateSlug: '/checklist-fermeture-restaurant',
  title: 'Restaurant Closing Checklist',
  metaTitle: 'Restaurant Closing Checklist | LuxOps',
  metaDescription:
    'A restaurant closing checklist for end-of-service reset, POS and cash controls, cleaning, stock, handover and next-shift readiness.',
  keywords:
    'restaurant closing checklist, restaurant closing procedure, closing checklist restaurant, F&B closing checklist, restaurant end of service checklist',
  eyebrow: 'Restaurant closing checklist',
  h1: 'Restaurant Closing Checklist',
  subtitle:
    'A practical end-of-service checklist for resetting the dining room, closing POS and cash, controlling stock, cleaning stations and preparing the next shift.',
  sourceNote:
    'This page summarizes one operational method used inside the LuxOps F&B products. The complete checklists and editable PPTX tools are available in the paid versions.',
  extractedFrom:
    'Adapted from the Restaurant Closing Checklist, service handover, mise en place, stock control and quality chapters of the LuxOps F&B Playbook.',
  primaryCta: 'View F&B Starter Pack',
  secondaryCta: 'View Full F&B Playbook',
  freeChapterCta: 'Download a Free Chapter',
  sectionLabel: 'End-of-service flow',
  sectionTitle: 'What to check before closing the restaurant',
  sectionIntro:
    'Closing is not only cleaning. A good restaurant closing checklist protects revenue, stock, hygiene, guest recovery follow-up and the next service. The room should be left as deliberately as it was prepared before opening.',
  blocks: [
    {
      title: '1. End of dining room service',
      intro: 'The room should be reset for the next shift, not simply cleared at the end of the night.',
      items: [
        'Tables broken down and reset for the next service when applicable',
        'Soiled linen collected and placed in the designated bin',
        'Stations wiped, reorganized and returned to standard position',
        'Remaining glassware and silverware polished, counted where needed and stored',
        'Condiments checked, emptied or topped up according to protocol, with FIFO rotation applied',
        'Clean menus stored, counted and removed from guest-facing areas',
      ],
    },
    {
      title: '2. Cleaning and guest-facing areas',
      intro: 'Cleaning should leave the restaurant ready for inspection, not only acceptable from a distance.',
      items: [
        'Floor swept and washed, with corners and baseboards checked',
        'Tables, service counters and work surfaces sanitized',
        'Guest restrooms checked and left clean if they belong to the outlet closing scope',
        'Bar area cleaned and sanitized, including visible guest-facing surfaces',
        'Bins emptied, liners replaced and entrance steps or terrace checked before departure',
      ],
    },
    {
      title: '3. POS, cash drawer and financial closing',
      intro: 'Financial closing should be completed while the details of the service are still clear.',
      items: [
        'Cash drawer counted and reconciled against POS totals',
        'Cash float reset to opening level and signed according to property process',
        'All sales, room charges, card payments, voids and discounts closed in the POS',
        'Tips handled according to property policy',
        'Billing disputes, discrepancies or pending approvals documented and handed to the manager',
      ],
    },
    {
      title: '4. Stock, kitchen and bar coordination',
      intro: 'The next team should not discover missing products or unclear 86’d items during opening.',
      items: [
        'Quick inventory completed for sensitive stock, wines by the glass, draft beer and high-rotation items',
        'Reorder thresholds checked and next-day order placed if required',
        'FIFO rotation applied to condiments, perishable items and prepared products',
        'Final communication with kitchen on 86’d items to carry over',
        'Bar cleared, ice discarded if required, garnishes, juices and fresh preparations checked for next day',
      ],
    },
    {
      title: '5. Security, incidents and handover',
      intro: 'The last walk-through validates that the outlet is secure and that the next manager has the right information.',
      items: [
        'Heat sources off, electrical equipment secured and HVAC set to night mode',
        'Exterior lighting, terrace, doors, windows and alarm checked according to property process',
        'Guest complaints, technical incidents, losses, breakage and allergy traceability documented',
        'Shift notes written in the communication log with reservations, VIPs, events and expected deliveries',
        'Base mise en place, light polishing and clean linen prepared for opening when timing allows',
        'Closing checklist signed by the responsible supervisor or manager after final walk-through',
      ],
    },
  ],
  extractTitle: 'Closing protects tomorrow’s service',
  extractText:
    'A weak closing creates the next day’s problems: missing stock, unclear cash discrepancies, forgotten guest follow-ups, dirty stations, unresolved 86’d items and opening teams forced to repair the previous shift.',
  extractItems: [
    'Cash drawer counted, reconciled and reset to opening level',
    'Condiments, perishable products and prepared items controlled with FIFO rotation',
    'Kitchen and bar aligned on 86’d items, ice, garnishes and next-day preparation',
    'Communication log completed before the manager signs off',
  ],
  productTitle: 'F&B Starter Pack',
  productText:
    'Includes restaurant opening and closing checklists, daily service checklist, briefing template, service sequence SOP, table inspection checklist, recovery scripts and allergen tracker.',
  playbookTitle: 'Full F&B Playbook',
  playbookText:
    'The complete reference for restaurant service, breakfast, bar, wine, room service, guest interaction, mise en place, team management and quality standards.',
  relatedTitle: 'Need the opening version?',
  relatedText:
    'Use the restaurant opening checklist to prepare the room, stations, POS and team before service starts.',
  relatedHref: '/restaurant-opening-checklist',
  relatedCta: 'View Restaurant Opening Checklist',
  faqs: [
    {
      question: 'What should a restaurant closing checklist include?',
      answer:
        'It should include dining room reset, linen collection, station reset, condiment control, cleaning, guest restrooms, bar area, POS closing, cash reconciliation, tips, stock checks, kitchen and bar coordination, safety checks, incident reporting, handover notes and final manager sign-off.',
    },
    {
      question: 'Who should sign the restaurant closing checklist?',
      answer:
        'The responsible supervisor, assistant manager or manager should sign it after the final walk-through. The point is not paperwork. It confirms the next shift will not inherit unresolved issues.',
    },
    {
      question: 'Is closing part of the restaurant SOP?',
      answer:
        'Yes. Closing should be treated as part of the restaurant SOP because it protects revenue control, hygiene, stock accuracy, guest recovery and readiness for the next service.',
    },
  ],
  finalTitle: 'Close the restaurant with the next service in mind',
  finalText:
    'Use the starter pack for ready-to-use F&B closing tools and the full playbook when you need the complete restaurant operating reference.',
}

const RESTAURANT_CLOSING_FR: ResourceContent = {
  slug: '/checklist-fermeture-restaurant',
  alternateSlug: '/restaurant-closing-checklist',
  title: 'Checklist fermeture restaurant',
  metaTitle: 'Checklist fermeture restaurant | LuxOps',
  metaDescription:
    'Checklist fermeture restaurant : remise en ordre, clôture POS et caisse, nettoyage, stock, passation et préparation du prochain service.',
  keywords:
    'checklist fermeture restaurant, procédure fermeture restaurant, checklist clôture restaurant, checklist fin de service restaurant, SOP restaurant',
  eyebrow: 'Checklist fermeture restaurant',
  h1: 'Checklist de fermeture restaurant',
  subtitle:
    'Une checklist de fin de service pour remettre la salle en ordre, clôturer le POS et la caisse, contrôler le stock, nettoyer les stations et préparer le shift suivant.',
  sourceNote:
    'Cette page reprend une méthode opérationnelle utilisée dans les produits F&B LuxOps. Les checklists complètes et supports PPTX modifiables sont disponibles dans les versions payantes.',
  extractedFrom:
    'Adapté de la checklist fermeture restaurant, des sections passation, mise en place, contrôle stock et qualité du Playbook F&B LuxOps.',
  primaryCta: 'Voir le Starter Pack F&B',
  secondaryCta: 'Voir le Playbook F&B complet',
  freeChapterCta: 'Télécharger un chapitre gratuit',
  sectionLabel: 'Flux de fin de service',
  sectionTitle: 'Ce qu’il faut contrôler avant de fermer le restaurant',
  sectionIntro:
    'La fermeture ne se résume pas au nettoyage. Une bonne checklist protège le revenu, le stock, l’hygiène, les suivis client et le service suivant. La salle doit être laissée avec autant de rigueur qu’elle a été préparée avant l’ouverture.',
  blocks: [
    {
      title: '1. Fin de service salle',
      intro: 'La salle doit être remise en état pour le shift suivant, pas simplement débarrassée en fin de soirée.',
      items: [
        'Tables démontées et remises en place pour le service suivant si applicable',
        'Linge sale collecté et déposé dans le bac désigné',
        'Stations essuyées, réorganisées et remises en position standard',
        'Verrerie et argenterie restantes polies, rangées et comptées si nécessaire',
        'Condiments contrôlés, vidés ou complétés selon le protocole, avec rotation FIFO appliquée',
        'Cartes propres rangées, comptées et retirées des zones visibles par le client',
      ],
    },
    {
      title: '2. Nettoyage et zones visibles',
      intro: 'Le nettoyage doit laisser le restaurant prêt pour un contrôle, pas seulement correct de loin.',
      items: [
        'Sol balayé puis lavé, avec coins et plinthes vérifiés',
        'Tables, consoles, guéridons et plans de travail désinfectés',
        'Toilettes clients vérifiées et laissées propres si elles relèvent du périmètre de fermeture',
        'Zone bar nettoyée et désinfectée, y compris les surfaces visibles par le client',
        'Poubelles vidées, sacs remplacés, marches d’entrée et terrasse vérifiées avant départ',
      ],
    },
    {
      title: '3. POS, caisse et clôture financière',
      intro: 'La clôture financière doit être faite tant que les détails du service sont encore clairs.',
      items: [
        'Caisse comptée et rapprochée avec les totaux du POS',
        'Fonds de caisse remis au niveau de départ et signé selon le process de l’établissement',
        'Encaissements, notes chambre, paiements carte, annulations et remises clôturés dans le POS',
        'Pourboires répartis selon la politique de l’établissement',
        'Litiges de facturation, écarts ou validations en attente documentés et transmis au manager',
      ],
    },
    {
      title: '4. Stock, cuisine et bar',
      intro: 'L’équipe suivante ne doit pas découvrir les manques ou les items 86’d au moment de l’ouverture.',
      items: [
        'Inventaire rapide des produits sensibles, vins au verre, bière pression et articles à forte rotation',
        'Seuils de réapprovisionnement vérifiés et commande passée si nécessaire pour le lendemain',
        'Rotation FIFO appliquée aux condiments, produits périssables et préparations',
        'Communication finale avec la cuisine sur les items 86’d à reconduire',
        'Bar débarrassé, glaces évacuées si nécessaire, garnitures, jus et préparations fraîches contrôlés pour le lendemain',
      ],
    },
    {
      title: '5. Sécurité, incidents et passation',
      intro: 'Le dernier tour valide que le point de vente est sécurisé et que le manager suivant a les bonnes informations.',
      items: [
        'Sources de chaleur éteintes, équipements électriques sécurisés et climatisation ou chauffage réglé en mode nuit',
        'Éclairage extérieur, terrasse, portes, fenêtres et alarme contrôlés selon le process de l’établissement',
        'Réclamations clients, incidents techniques, pertes, casses et traçabilité allergènes documentés',
        'Notes du shift rédigées dans le journal de communication avec réservations, VIP, événements et livraisons attendues',
        'Mise en place de base, polissage léger et linge propre préparés pour l’ouverture si l’horaire le permet',
        'Checklist signée par le superviseur ou le manager responsable après le dernier tour',
      ],
    },
  ],
  extractTitle: 'La fermeture protège le service du lendemain',
  extractText:
    'Une fermeture faible crée les problèmes du lendemain : stock manquant, écarts caisse flous, suivis client oubliés, stations sales, items 86’d non transmis et équipe d’ouverture obligée de réparer le shift précédent.',
  extractItems: [
    'Caisse comptée, rapprochée et fonds de caisse remis au niveau de départ',
    'Condiments, produits périssables et préparations contrôlés avec rotation FIFO',
    'Cuisine et bar alignés sur les items 86’d, la glace, les garnitures et la préparation du lendemain',
    'Journal de communication complété avant signature manager',
  ],
  productTitle: 'Starter Pack F&B',
  productText:
    'Inclut checklists ouverture et fermeture restaurant, checklist service quotidien, template de briefing, SOP séquence de service, checklist inspection de table, scripts recovery et tracker allergènes.',
  playbookTitle: 'Playbook F&B complet',
  playbookText:
    'La référence complète pour service restaurant, petit-déjeuner, bar, vin, room service, interaction client, mise en place, management équipe et standards qualité.',
  relatedTitle: 'Besoin de la version ouverture ?',
  relatedText:
    'Utilisez la checklist ouverture restaurant pour préparer salle, stations, POS et équipe avant le début du service.',
  relatedHref: '/checklist-ouverture-restaurant',
  relatedCta: 'Voir la checklist ouverture restaurant',
  faqs: [
    {
      question: 'Que doit contenir une checklist de fermeture restaurant ?',
      answer:
        'Elle doit couvrir la remise en ordre de la salle, le linge, les stations, les condiments, le nettoyage, les toilettes clients, la zone bar, la clôture POS, la caisse, les pourboires, le stock, la coordination cuisine et bar, la sécurité, les incidents, la passation et la signature manager.',
    },
    {
      question: 'Qui doit signer la checklist de fermeture ?',
      answer:
        'Le superviseur, l’assistant manager ou le manager responsable doit la signer après le dernier tour. Le but n’est pas administratif : il s’agit de confirmer que le prochain shift ne récupère pas des problèmes non traités.',
    },
    {
      question: 'La fermeture fait-elle partie de la SOP restaurant ?',
      answer:
        'Oui. La fermeture doit faire partie de la SOP restaurant, car elle protège le contrôle revenu, l’hygiène, l’exactitude du stock, le recovery client et la préparation du prochain service.',
    },
  ],
  finalTitle: 'Fermer le restaurant en pensant au prochain service',
  finalText:
    'Utilisez le Starter Pack pour des outils F&B prêts à l’emploi, puis le Playbook complet lorsque vous avez besoin de toute la référence opérationnelle restaurant.',
}

const CONTENT: Record<ResourceKind, Record<Locale, ResourceContent>> = {
  sequence: { en: SEQUENCE_EN, fr: SEQUENCE_FR },
  roomService: { en: ROOM_SERVICE_EN, fr: ROOM_SERVICE_FR },
  restaurantOpening: { en: RESTAURANT_OPENING_EN, fr: RESTAURANT_OPENING_FR },
  barOpening: { en: BAR_OPENING_EN, fr: BAR_OPENING_FR },
  restaurantClosing: { en: RESTAURANT_CLOSING_EN, fr: RESTAURANT_CLOSING_FR },
}

function getFbClusterLinks(locale: Locale, currentKind: ResourceKind): ClusterLink[] {
  const links: Record<Locale, ClusterLink[]> = {
    en: [
      {
        href: '/en/hotel-fb-sop',
        label: 'F&B SOP hub',
        text: 'Central page for F&B SOPs, starter pack and playbook links.',
      },
      {
        kind: 'restaurantOpening',
        href: '/en/restaurant-opening-checklist',
        label: 'Restaurant opening',
        text: 'Pre-service setup, room inspection, POS and briefing.',
      },
      {
        kind: 'restaurantClosing',
        href: '/en/restaurant-closing-checklist',
        label: 'Restaurant closing',
        text: 'End-of-service reset, cash, stock, cleaning and handover.',
      },
      {
        kind: 'barOpening',
        href: '/en/bar-opening-checklist',
        label: 'Bar opening',
        text: 'Bar station, glassware, garnishes, stock, POS and final walk-through.',
      },
      {
        kind: 'sequence',
        href: '/en/food-and-beverage-service-sequence',
        label: 'Service sequence',
        text: 'The service flow from guest arrival to farewell.',
      },
      {
        kind: 'roomService',
        href: '/en/hotel-room-service-checklist',
        label: 'Room service',
        text: 'Order taking, tray setup, delivery timing and pickup.',
      },
    ],
    fr: [
      {
        href: '/fr/hotel-fb-sop',
        label: 'Hub SOP F&B',
        text: 'Page centrale pour les SOP F&B, le starter pack et le playbook.',
      },
      {
        kind: 'restaurantOpening',
        href: '/fr/checklist-ouverture-restaurant',
        label: 'Ouverture restaurant',
        text: 'Mise en place, inspection salle, POS et briefing avant service.',
      },
      {
        kind: 'restaurantClosing',
        href: '/fr/checklist-fermeture-restaurant',
        label: 'Fermeture restaurant',
        text: 'Remise en ordre, caisse, stock, nettoyage et passation.',
      },
      {
        kind: 'barOpening',
        href: '/fr/checklist-ouverture-bar',
        label: 'Ouverture bar',
        text: 'Poste bar, verrerie, garnitures, stock, POS et dernier tour.',
      },
      {
        kind: 'sequence',
        href: '/fr/sequence-service-restaurant-hotel',
        label: 'Séquence de service',
        text: 'Le déroulé du service, de l’arrivée client au départ.',
      },
      {
        kind: 'roomService',
        href: '/fr/checklist-room-service-hotel',
        label: 'Room service',
        text: 'Prise de commande, dressage plateau, timing et débarrassage.',
      },
    ],
  }

  return links[locale].filter((link) => link.kind !== currentKind)
}

export function getFbSeoMetadata(kind: ResourceKind, locale: Locale): Metadata {
  const content = CONTENT[kind][locale]

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: content.keywords,
    alternates: {
      canonical: `https://www.luxops.fr/${locale}${content.slug}`,
      languages: {
        en: `https://www.luxops.fr/en${CONTENT[kind].en.slug}`,
        fr: `https://www.luxops.fr/fr${CONTENT[kind].fr.slug}`,
        'x-default': `https://www.luxops.fr/en${CONTENT[kind].en.slug}`,
      },
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://www.luxops.fr/${locale}${content.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: content.metaTitle,
      description: content.metaDescription,
    },
  }
}

export function FbSeoResourcePage({ kind, locale }: { kind: ResourceKind; locale: Locale }) {
  const content = CONTENT[kind][locale]
  const isEN = locale === 'en'
  const sourcePage = `/${locale}${content.slug}`
  const checklistHref = kind === 'roomService'
    ? isEN ? '/downloads/checklists/en/room-service-checklist.pdf' : '/downloads/checklists/fr/checklist-room-service.pdf'
    : kind === 'restaurantOpening'
      ? isEN ? '/downloads/checklists/en/restaurant-opening-checklist.pdf' : '/downloads/checklists/fr/checklist-ouverture-restaurant.pdf'
      : kind === 'barOpening'
        ? isEN ? '/downloads/checklists/en/bar-opening-checklist.pdf' : '/downloads/checklists/fr/checklist-ouverture-bar.pdf'
        : kind === 'restaurantClosing'
          ? isEN ? '/downloads/checklists/en/restaurant-closing-checklist.pdf' : '/downloads/checklists/fr/checklist-fermeture-restaurant.pdf'
          : null
  const checklistCta = isEN ? 'Download a free printable PDF copy' : 'Télécharger le PDF gratuit à imprimer'
  const clusterLinks = getFbClusterLinks(locale, kind)

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: content.h1,
        description: content.metaDescription,
        author: { '@id': 'https://www.luxops.fr/#organization' },
        publisher: { '@id': 'https://www.luxops.fr/#organization' },
        mainEntityOfPage: localizedPath(locale, content.slug),
      },
      breadcrumbSchema([
        { name: 'LuxOps', url: localizedPath(locale) },
        { name: content.title, url: localizedPath(locale, content.slug) },
      ]),
      faqSchema(content.faqs),
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="bg-white">
        <section className="bg-[#1A2E44] text-white px-6 pt-36 md:pt-40 pb-18 md:pb-20">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
              <UtensilsCrossed size={15} />
              {content.eyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{content.h1}</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-5">
              {content.subtitle}
            </p>
            <p className="text-sm text-blue-100/90 max-w-3xl mx-auto leading-relaxed mb-9">
              {content.sourceNote}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <TrackedLink
                href={`/${locale}/playbooks/fb-starter-pack`}
                eventName="fb_starter_pack_cta_clicked"
                eventProperties={{ source_page: sourcePage, position: 'hero' }}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1A2E44] px-7 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {content.primaryCta}
                <ArrowRight size={18} />
              </TrackedLink>
              <TrackedLink
                href={`/${locale}/playbooks/fb`}
                eventName="fb_playbook_cta_clicked"
                eventProperties={{ source_page: sourcePage, position: 'hero' }}
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                {content.secondaryCta}
              </TrackedLink>
              <TrackedLink
                href={checklistHref ?? `/${locale}/free-hotel-procedures`}
                {...(checklistHref ? { download: true } : {})}
                eventName={checklistHref ? 'free_checklist_download_clicked' : 'free_chapter_cta_clicked'}
                eventProperties={checklistHref ? {
                  source_page: sourcePage,
                  checklist_name: kind,
                  department: 'fb',
                  locale,
                  placement: 'hero',
                } : { source_page: sourcePage, position: 'hero' }}
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                {checklistHref ? checklistCta : content.freeChapterCta}
              </TrackedLink>
            </div>
          </div>
        </section>

        <section className="py-10 px-6 bg-[#F6F8FB] border-b border-gray-100">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-5 md:items-center">
            <div className="w-12 h-12 rounded-full bg-[#E7F0FF] flex items-center justify-center flex-shrink-0">
              <FileText size={22} className="text-[#0056D2]" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#0056D2] mb-2">
                {isEN ? 'Source note' : 'Note source'}
              </p>
              <p className="text-gray-700 leading-relaxed">{content.extractedFrom}</p>
              {checklistHref ? (
                <p className="text-sm text-[#4f6074] leading-relaxed mt-3">
                  {isEN
                    ? 'You can also browse every printable checklist in one place.'
                    : 'Vous pouvez aussi retrouver toutes les checklists prêtes à imprimer au même endroit.'}{' '}
                  <Link
                    href={isEN ? '/en/free-hotel-checklists' : '/fr/checklists-hotel-gratuites'}
                    className="font-semibold text-[#003d9b] hover:underline"
                  >
                    {isEN ? 'View the free checklist hub' : 'Voir le hub des checklists gratuites'}
                  </Link>
                </p>
              ) : null}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#0056D2] mb-4">
                {content.sectionLabel}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
                {content.sectionTitle}
              </h2>
              <p className="text-gray-600 leading-relaxed">{content.sectionIntro}</p>
            </div>

            {content.steps ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {content.steps.map((step) => (
                  <div key={step.label} className="border border-gray-200 rounded-xl p-5 bg-white">
                    <div className="flex items-start gap-4">
                      <span className="w-10 h-10 rounded-lg bg-[#0056D2] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                        {step.label}
                      </span>
                      <div>
                        <h3 className="font-bold text-[#111111] mb-1">{step.action}</h3>
                        <p className="text-sm text-gray-500">{step.timing}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {content.blocks.map((block) => (
                  <ChecklistCard key={block.title} block={block} />
                ))}
              </div>
            )}
          </div>
        </section>

        {content.steps ? (
          <section className="pb-16 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
              {content.blocks.map((block) => (
                <ChecklistCard key={block.title} block={block} />
              ))}
            </div>
          </section>
        ) : null}

        <section className="py-16 px-6 bg-[#F6F8FB] border-y border-gray-100">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#0056D2] mb-4">
                {isEN ? 'Operational reference' : 'Repère opérationnel'}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
                {content.extractTitle}
              </h2>
              <p className="text-gray-600 leading-relaxed">{content.extractText}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="space-y-4">
                {content.extractItems.map((item) => (
                  <div key={item} className="flex gap-3 text-gray-700 leading-relaxed">
                    <CheckCircle2 size={18} className="text-[#0056D2] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
            <div className="border border-[#D7E4F7] bg-[#F4F8FF] rounded-xl p-8">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5">
                <ClipboardCheck size={24} className="text-[#0056D2]" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#0056D2] mb-4">
                {isEN ? 'Practical toolkit' : 'Kit pratique'}
              </p>
              <h2 className="text-3xl font-bold text-[#111111] mb-4">{content.productTitle}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{content.productText}</p>
              <TrackedLink
                href={`/${locale}/playbooks/fb-starter-pack`}
                eventName="fb_starter_pack_cta_clicked"
                eventProperties={{ source_page: sourcePage, position: 'product_block' }}
                className="inline-flex items-center gap-2 bg-[#0056D2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0046B8] transition-colors"
              >
                {content.primaryCta}
                <ArrowRight size={17} />
              </TrackedLink>
            </div>
            <div className="border border-gray-200 rounded-xl p-8">
              <div className="w-12 h-12 rounded-xl bg-[#F6F8FB] flex items-center justify-center mb-5">
                <ListChecks size={24} className="text-[#1A2E44]" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                {isEN ? 'Full reference' : 'Référence complète'}
              </p>
              <h2 className="text-3xl font-bold text-[#111111] mb-4">{content.playbookTitle}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{content.playbookText}</p>
              <TrackedLink
                href={`/${locale}/playbooks/fb`}
                eventName="fb_playbook_cta_clicked"
                eventProperties={{ source_page: sourcePage, position: 'product_block' }}
                className="inline-flex items-center gap-2 border border-[#1A2E44] text-[#1A2E44] px-6 py-3 rounded-lg font-semibold hover:bg-[#1A2E44] hover:text-white transition-colors"
              >
                {content.secondaryCta}
                <ArrowRight size={17} />
              </TrackedLink>
            </div>
          </div>
        </section>

        <section className="py-14 px-6 bg-white">
          <div className="max-w-5xl mx-auto border border-gray-200 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#0056D2] mb-3">
                {isEN ? 'Related resource' : 'Ressource liée'}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-3">{content.relatedTitle}</h2>
              <p className="text-gray-600 leading-relaxed max-w-2xl">{content.relatedText}</p>
            </div>
            <Link
              href={`/${locale}${content.relatedHref}`}
              className="inline-flex items-center justify-center gap-2 border border-[#1A2E44] text-[#1A2E44] px-6 py-3 rounded-lg font-semibold hover:bg-[#1A2E44] hover:text-white transition-colors flex-shrink-0"
            >
              {content.relatedCta}
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <section className="py-16 px-6 bg-[#F6F8FB] border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#0056D2] mb-3">
                {isEN ? 'F&B resources' : 'Ressources F&B'}
              </p>
              <h2 className="text-3xl font-bold text-[#111111] mb-3">
                {isEN ? 'Continue with the right F&B checklist' : 'Continuer avec la bonne checklist F&B'}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {isEN
                  ? 'Use these linked pages to move between opening, closing, bar, room service and service sequence procedures.'
                  : 'Ces pages relient les procédures ouverture, fermeture, bar, room service et séquence de service pour garder un parcours clair.'}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {clusterLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group border border-gray-200 bg-white rounded-xl p-5 hover:border-[#0056D2] hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-[#111111] mb-2 group-hover:text-[#0056D2] transition-colors">
                        {link.label}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{link.text}</p>
                    </div>
                    <ArrowRight size={17} className="text-[#0056D2] flex-shrink-0 mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[#F6F8FB] border-y border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#111111] mb-8">
              {isEN ? 'Frequently asked questions' : 'Questions fréquentes'}
            </h2>
            <div className="space-y-6">
              {content.faqs.map((faq) => (
                <div key={faq.question} className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-[#111111] mb-2">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[#111111] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-3 mb-6">
              <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Clock3 size={21} />
              </span>
              <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <ShieldCheck size={21} />
              </span>
              <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Sparkles size={21} />
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4">{content.finalTitle}</h2>
            <p className="text-gray-300 leading-relaxed mb-8">{content.finalText}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <TrackedLink
                href={`/${locale}/playbooks/fb-starter-pack`}
                eventName="fb_starter_pack_cta_clicked"
                eventProperties={{ source_page: sourcePage, position: 'final' }}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#111111] px-7 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {content.primaryCta}
                <ArrowRight size={18} />
              </TrackedLink>
              <TrackedLink
                href={checklistHref ?? `/${locale}/free-hotel-procedures`}
                {...(checklistHref ? { download: true } : {})}
                eventName={checklistHref ? 'free_checklist_download_clicked' : 'free_chapter_cta_clicked'}
                eventProperties={checklistHref ? {
                  source_page: sourcePage,
                  checklist_name: kind,
                  department: 'fb',
                  locale,
                  placement: 'final',
                } : { source_page: sourcePage, position: 'final' }}
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                {checklistHref ? checklistCta : content.freeChapterCta}
              </TrackedLink>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

function ChecklistCard({ block }: { block: ChecklistBlock }) {
  return (
    <article className="border border-gray-200 rounded-xl p-6 bg-white">
      <div className="flex gap-3 items-start mb-4">
        <div className="w-10 h-10 rounded-lg bg-[#F4F8FF] flex items-center justify-center flex-shrink-0">
          <ConciergeBell size={20} className="text-[#0056D2]" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#111111]">{block.title}</h3>
          {block.intro ? <p className="text-sm text-gray-500 leading-relaxed mt-2">{block.intro}</p> : null}
        </div>
      </div>
      <div className="space-y-3">
        {block.items.map((item) => (
          <div key={item} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
            <CheckCircle2 size={16} className="text-[#0056D2] flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </article>
  )
}
