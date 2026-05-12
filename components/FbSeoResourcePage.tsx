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
type ResourceKind = 'sequence' | 'roomService'

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

const CONTENT: Record<ResourceKind, Record<Locale, ResourceContent>> = {
  sequence: { en: SEQUENCE_EN, fr: SEQUENCE_FR },
  roomService: { en: ROOM_SERVICE_EN, fr: ROOM_SERVICE_FR },
}

export function getFbSeoMetadata(kind: ResourceKind, locale: Locale): Metadata {
  const content = CONTENT[kind][locale]
  const alternate = CONTENT[kind][locale === 'en' ? 'fr' : 'en']

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
                href={`/${locale}/free-hotel-procedures`}
                eventName="free_chapter_cta_clicked"
                eventProperties={{ source_page: sourcePage, position: 'hero' }}
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                {content.freeChapterCta}
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
                href={`/${locale}/free-hotel-procedures`}
                eventName="free_chapter_cta_clicked"
                eventProperties={{ source_page: sourcePage, position: 'final' }}
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                {content.freeChapterCta}
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
