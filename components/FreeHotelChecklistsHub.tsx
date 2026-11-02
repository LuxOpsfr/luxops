import FreeChecklistsHubProposal from '@/components/FreeChecklistsHubProposal'
import { SITE_URL, breadcrumbSchema, faqSchema, localizedPath } from '@/lib/seo'

type Locale = 'en' | 'fr'

type ChecklistItem = {
  title: string
  role: string
  body: string
  href: string
  available: boolean
  sourceHref: string
}

type Department = {
  id: string
  label: string
  title: string
  intro: string
  playbookHref: string
  playbookLabel: string
  items: ChecklistItem[]
}

const CONTENT = {
  en: {
    slug: '/free-hotel-checklists',
    alternateSlug: '/checklists-hotel-gratuites',
    metaTitle: 'Free Printable Hotel Checklists PDF | LuxOps',
    metaDescription:
      'Download free printable hotel checklists for housekeeping, front office, night audit, restaurant opening and room service.',
    eyebrow: 'Free PDF resources',
    h1: 'Free Printable Hotel Checklists',
    subtitle:
      'Practical PDF checklists adapted from LuxOps operational resources and organized by department for quick local adaptation on the floor.',
    intro:
      'Start with a free printable checklist, then explore the complete department manual for editable procedures and practical tools.',
    downloadLabel: 'Download PDF',
    availableLabel: 'Available now',
    preparingLabel: 'PDF being prepared',
    playbookPrefix: 'Need the full SOP reference?',
    sourceLabel: 'View related guide',
    departments: [
      {
        id: 'housekeeping',
        label: 'Housekeeping',
        title: 'Housekeeping checklists',
        intro:
          'Room cleaning, floor supervision, public areas and inspection controls for daily HSK operations.',
        playbookHref: '/en/playbooks/hsk',
        playbookLabel: 'View Housekeeping Playbook',
        items: [
          {
            title: 'Public Area Attendant Checklist',
            role: 'Public areas and houseperson tasks',
            body:
              'Lobby, corridors, elevators, public restrooms, pantries, guest requests and shift handover.',
            href: '/downloads/housekeeping-checklists/en/public-area-attendant-checklist.pdf',
            available: true,
            sourceHref: '/en/hotel-housekeeping-checklist',
          },
          {
            title: 'Room Attendant Checklist',
            role: 'Departure rooms and stayovers',
            body:
              'Trolley setup, room entry, departure room sequence, bathroom checks, stayover service and final self-inspection.',
            href: '/downloads/housekeeping-checklists/en/room-attendant-checklist.pdf',
            available: true,
            sourceHref: '/en/hotel-housekeeping-checklist',
          },
          {
            title: 'Housekeeping Supervisor Checklist',
            role: 'Floor inspection and release',
            body:
              'Room assignments, departure inspections, VIP checks, Clean vs Inspected release and quality coaching.',
            href: '/downloads/housekeeping-checklists/en/floor-housekeeping-supervisor-checklist.pdf',
            available: true,
            sourceHref: '/en/hotel-housekeeping-checklist',
          },
          {
            title: 'Bathroom Cleaning Checklist',
            role: 'Bathroom cleaning and inspection',
            body:
              'Toilet, shower, basin, mirror, floor corners, amenities, glassware and final bathroom self-check.',
            href: '/downloads/checklists/en/hotel-bathroom-cleaning-checklist.pdf',
            available: true,
            sourceHref: '/en/blog/hotel-bathroom-cleaning-sop',
          },
          {
            title: 'Departure Room Cleaning Checklist',
            role: 'Departure room reset',
            body:
              'Departure room reset sequence from first scan to final presentation, with lost property, linen, minibar and PMS status controls.',
            href: '/downloads/checklists/en/departure-room-cleaning-checklist.pdf',
            available: true,
            sourceHref: '/en/blog/hotel-room-cleaning-checklist',
          },
        ],
      },
      {
        id: 'front-office',
        label: 'Front Office',
        title: 'Front Office checklists',
        intro:
          'Reception checklists for shift opening, desk readiness, guest flow, handover and night audit controls.',
        playbookHref: '/en/playbooks/fo',
        playbookLabel: 'View Front Office Playbook',
        items: [
          {
            title: 'Front Desk Daily Checklist',
            role: 'Reception shift basics',
            body:
              'Shift opening, arrivals review, room readiness, billing checks, desk systems and first-hour priorities.',
            href: '/downloads/checklists/en/front-desk-daily-checklist.pdf',
            available: true,
            sourceHref: '/en/hotel-front-office-checklist',
          },
          {
            title: 'Night Audit Checklist',
            role: 'Night audit and morning handover',
            body:
              'Pre-closing checks, PMS run, VCC, cash control, reports, night log and AM shift handover.',
            href: '/downloads/checklists/en/night-audit-checklist.pdf',
            available: true,
            sourceHref: '/en/hotel-night-audit-checklist',
          },
        ],
      },
      {
        id: 'fb',
        label: 'Food and Beverage',
        title: 'F&B checklists',
        intro:
          'Restaurant, bar and room service checklists for service readiness, timing, setup, closing and handover.',
        playbookHref: '/en/playbooks/fb',
        playbookLabel: 'View F&B Playbook',
        items: [
          {
            title: 'Restaurant Opening Checklist',
            role: 'Pre-service restaurant opening',
            body:
              'Team readiness, dining room setup, terrace checks, table inspection, POS, briefing and final walk-through.',
            href: '/downloads/checklists/en/restaurant-opening-checklist.pdf',
            available: true,
            sourceHref: '/en/restaurant-opening-checklist',
          },
          {
            title: 'Bar Opening Checklist',
            role: 'Pre-service bar setup',
            body:
              'Bar station setup, ice, garnishes, glassware, par levels, POS, cash float and final walk-through.',
            href: '/downloads/checklists/en/bar-opening-checklist.pdf',
            available: true,
            sourceHref: '/en/bar-opening-checklist',
          },
          {
            title: 'Restaurant Closing Checklist',
            role: 'End-of-service closing',
            body:
              'Dining room reset, cleaning, POS and cash closing, stock control, kitchen and bar handover.',
            href: '/downloads/checklists/en/restaurant-closing-checklist.pdf',
            available: true,
            sourceHref: '/en/restaurant-closing-checklist',
          },
          {
            title: 'Room Service Checklist',
            role: 'In-room dining operations',
            body:
              'Order taking, timing standards, tray and trolley setup, delivery protocol, delay recovery and collection.',
            href: '/downloads/checklists/en/room-service-checklist.pdf',
            available: true,
            sourceHref: '/en/hotel-room-service-checklist',
          },
        ],
      },
    ] satisfies Department[],
    faqs: [
      {
        question: 'Are these checklists free?',
        answer:
          'Yes. The PDFs on this page are free printable resources and are available for direct download without email registration.',
      },
      {
        question: 'Can I edit them?',
        answer:
          'The free files are printable PDFs. The corresponding SOP manual provides editable files and practical tools for the department.',
      },
      {
        question: 'What is the difference with a full SOP manual?',
        answer:
          'The free PDFs are simple floor tools. The complete manual includes department procedures and editable files; Front Office, Housekeeping and F&B manuals also include practical tool packs.',
      },
      {
        question: 'Are they suitable for independent hotels?',
        answer:
          'Yes. They are written for practical use in independent hotels, boutique properties, resorts and small hospitality groups.',
      },
      {
        question: 'Can I use them for staff training?',
        answer:
          'Yes. They can support onboarding and coaching, especially alongside the complete department manual.',
      },
    ],
  },
  fr: {
    slug: '/checklists-hotel-gratuites',
    alternateSlug: '/free-hotel-checklists',
    metaTitle: 'Checklists gratuites PDF | LuxOps',
    metaDescription:
      'Téléchargez des checklists gratuites à imprimer pour housekeeping, réception, night audit, ouverture restaurant et room service.',
    eyebrow: 'Ressources PDF gratuites',
    h1: 'Checklists prêtes à imprimer',
    subtitle:
      'Des checklists PDF pratiques issues des ressources opérationnelles LuxOps, organisées par département et pensées pour le terrain.',
    intro:
      'Commencez avec une checklist PDF gratuite, puis découvrez le manuel complet du département pour les procédures modifiables et les outils pratiques.',
    downloadLabel: 'Télécharger le PDF',
    availableLabel: 'Disponible',
    preparingLabel: 'PDF en préparation',
    playbookPrefix: 'Besoin de la référence SOP complète ?',
    sourceLabel: 'Voir le guide lié',
    departments: [
      {
        id: 'housekeeping',
        label: 'Housekeeping',
        title: 'Checklists housekeeping',
        intro:
          'Nettoyage chambre, inspection gouvernante, lieux publics et contrôles qualité pour les opérations HSK quotidiennes.',
        playbookHref: '/fr/playbooks/hsk',
        playbookLabel: 'Voir le Playbook Housekeeping',
        items: [
          {
            title: 'Checklist Équipier Lieux Publics',
            role: 'Lieux publics et zones communes',
            body:
              'Hall, couloirs, ascenseurs, sanitaires publics, offices, demandes clients et passation de service.',
            href: '/downloads/housekeeping-checklists/fr/checklist-equipier-lieux-publics.pdf',
            available: true,
            sourceHref: '/fr/hotel-housekeeping-checklist',
          },
          {
            title: 'Checklist Femme / Valet de Chambre',
            role: 'Chambre à blanc et recouche',
            body:
              'Chariot, protocole d’entrée, chambre à blanc, salle de bain, recouche et auto-contrôle final.',
            href: '/downloads/housekeeping-checklists/fr/checklist-femme-valet-de-chambre.pdf',
            available: true,
            sourceHref: '/fr/hotel-housekeeping-checklist',
          },
          {
            title: 'Checklist Gouvernante d’Étage',
            role: 'Inspection étage et libération chambre',
            body:
              'Feuilles de route, inspection chambre départ, chambres importantes, libération PMS et coaching qualité.',
            href: '/downloads/housekeeping-checklists/fr/checklist-gouvernante-etage-superviseur.pdf',
            available: true,
            sourceHref: '/fr/hotel-housekeeping-checklist',
          },
          {
            title: 'Checklist Nettoyage Salle de Bain',
            role: 'Nettoyage et inspection salle de bain',
            body:
              'Toilettes, douche, vasque, miroir, angles du sol, amenities, verrerie et auto-contrôle salle de bain.',
            href: '/downloads/checklists/fr/checklist-nettoyage-salle-de-bain-hotel.pdf',
            available: true,
            sourceHref: '/fr/blog/hotel-bathroom-cleaning-sop',
          },
          {
            title: 'Checklist Chambre à Blanc',
            role: 'Remise en état chambre départ',
            body:
              'Séquence chambre départ, objets trouvés, linge, minibar, présentation finale et statut PMS.',
            href: '/downloads/checklists/fr/checklist-chambre-a-blanc.pdf',
            available: true,
            sourceHref: '/fr/blog/hotel-room-cleaning-checklist',
          },
        ],
      },
      {
        id: 'front-office',
        label: 'Front Office',
        title: 'Checklists réception',
        intro:
          'Checklists réception pour ouverture de service, préparation du desk, flux client, passation et Night Audit.',
        playbookHref: '/fr/playbooks/fo',
        playbookLabel: 'Voir le Playbook Front Office',
        items: [
          {
            title: 'Checklist Quotidienne Réception',
            role: 'Bases du shift réception',
            body:
              'Ouverture de service, arrivées, chambres disponibles, facturation, systèmes du desk et priorités de la première heure.',
            href: '/downloads/checklists/fr/checklist-quotidienne-reception.pdf',
            available: true,
            sourceHref: '/fr/hotel-front-office-checklist',
          },
          {
            title: 'Checklist Night Audit',
            role: 'Clôture nuit et passation matin',
            body:
              'Contrôles avant clôture, lancement PMS, VCC, caisse, rapports, main courante et Shift Handover AM.',
            href: '/downloads/checklists/fr/checklist-night-audit.pdf',
            available: true,
            sourceHref: '/fr/hotel-night-audit-checklist',
          },
        ],
      },
      {
        id: 'fb',
        label: 'Food and Beverage',
        title: 'Checklists F&B',
        intro:
          'Checklists restaurant, bar et room service pour préparer le service, contrôler le timing, fermer proprement et sécuriser la passation.',
        playbookHref: '/fr/playbooks/fb',
        playbookLabel: 'Voir le Playbook F&B',
        items: [
          {
            title: 'Checklist Ouverture Restaurant',
            role: 'Pré-service restaurant',
            body:
              'Équipe prête, salle, terrasse, inspection de table, POS, briefing et dernier tour de contrôle.',
            href: '/downloads/checklists/fr/checklist-ouverture-restaurant.pdf',
            available: true,
            sourceHref: '/fr/checklist-ouverture-restaurant',
          },
          {
            title: 'Checklist Ouverture Bar',
            role: 'Mise en place pré-service',
            body:
              'Poste bar, glace, garnitures, verrerie, niveaux de par, POS, fonds de caisse et dernier tour de contrôle.',
            href: '/downloads/checklists/fr/checklist-ouverture-bar.pdf',
            available: true,
            sourceHref: '/fr/checklist-ouverture-bar',
          },
          {
            title: 'Checklist Fermeture Restaurant',
            role: 'Fermeture de service',
            body:
              'Remise en ordre de la salle, nettoyage, clôture POS et caisse, contrôle stock, passation cuisine et bar.',
            href: '/downloads/checklists/fr/checklist-fermeture-restaurant.pdf',
            available: true,
            sourceHref: '/fr/checklist-fermeture-restaurant',
          },
          {
            title: 'Checklist Room Service',
            role: 'Opérations room service',
            body:
              'Prise de commande, standards de timing, dressage plateau ou chariot, livraison, recovery retard et débarrassage.',
            href: '/downloads/checklists/fr/checklist-room-service.pdf',
            available: true,
            sourceHref: '/fr/checklist-room-service-hotel',
          },
        ],
      },
    ] satisfies Department[],
    faqs: [
      {
        question: 'Ces checklists sont-elles gratuites ?',
        answer:
          'Oui. Les PDF de cette page sont des ressources gratuites à imprimer et disponibles en téléchargement direct, sans demande d’email.',
      },
      {
        question: 'Puis-je les modifier ?',
        answer:
          'Les fichiers gratuits sont des PDF à imprimer. Le manuel SOP correspondant fournit des fichiers modifiables et des outils pratiques pour le département.',
      },
      {
        question: 'Quelle différence avec un manuel SOP complet ?',
        answer:
          'Les PDF gratuits sont des outils simples pour le terrain. Le manuel complet réunit les procédures et les fichiers modifiables ; les manuels Front Office, Housekeeping et F&B incluent aussi des packs d’outils pratiques.',
      },
      {
        question: 'Est-ce adapté aux établissements indépendants ?',
        answer:
          'Oui. Les checklists sont conçues pour les établissements indépendants, boutique hôtels, resorts, restaurants et petits groupes hôteliers.',
      },
      {
        question: 'Peut-on les utiliser pour former les équipes ?',
        answer:
          'Oui. Elles peuvent soutenir l’intégration et la formation, surtout avec le manuel complet du département.',
      },
    ],
  },
} satisfies Record<Locale, {
  slug: string
  alternateSlug: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  h1: string
  subtitle: string
  intro: string
  downloadLabel: string
  availableLabel: string
  preparingLabel: string
  playbookPrefix: string
  sourceLabel: string
  departments: Department[]
  faqs: { question: string; answer: string }[]
}>

export function getFreeHotelChecklistsMetadata(locale: Locale) {
  const content = CONTENT[locale]
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `https://www.luxops.fr/${locale}${content.slug}`,
      languages: {
        en: `https://www.luxops.fr/en${CONTENT.en.slug}`,
        fr: `https://www.luxops.fr/fr${CONTENT.fr.slug}`,
        'x-default': `https://www.luxops.fr/en${CONTENT.en.slug}`,
      },
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://www.luxops.fr/${locale}${content.slug}`,
      type: 'website',
    },
  }
}

export default function FreeHotelChecklistsHub({ locale }: { locale: Locale }) {
  const content = CONTENT[locale]
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: content.h1,
        description: content.metaDescription,
        url: localizedPath(locale, content.slug),
        mainEntity: content.departments.flatMap(department => department.items.map(item => ({
          '@type': 'DigitalDocument',
          name: item.title,
          description: item.body,
          url: `${SITE_URL}${item.href}`,
        }))),
      },
      breadcrumbSchema([
        { name: 'LuxOps', url: localizedPath(locale) },
        { name: content.h1, url: localizedPath(locale, content.slug) },
      ]),
      faqSchema(content.faqs),
    ],
  }

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <FreeChecklistsHubProposal locale={locale} departments={content.departments} faqs={content.faqs} />
  </>
}
