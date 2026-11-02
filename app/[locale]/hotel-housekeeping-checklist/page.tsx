import { Metadata } from 'next'
import HousekeepingResourceProposal from '@/components/HousekeepingResourceProposal'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel Housekeeping Checklist PDF: Room Attendant & Supervisor | LuxOps'
      : 'Checklist housekeeping PDF : chambre à blanc et inspection | LuxOps',
    description: isEN
      ? 'Download printable hotel housekeeping checklist PDFs adapted from the LuxOps Housekeeping Playbook: public area attendant, room attendant and housekeeping supervisor checklists.'
      : 'Téléchargez les PDF imprimables issus du Playbook Housekeeping LuxOps : checklist équipier lieux publics, femme/valet de chambre et gouvernante d’étage.',
    keywords: isEN
      ? 'hotel housekeeping checklist, hotel room cleaning checklist, hotel room inspection checklist, room attendant checklist, housekeeping supervisor checklist, housekeeping SOP checklist, hotel cleaning SOP'
      : 'checklist pour service de housekeeping hôtel, checklist chambre à blanc hôtel, checklist inspection chambre hôtel, checklist pour gouvernante hôtel, checklist femme de chambre hôtel, SOP de housekeeping hôtel, contrôle qualité en housekeeping',
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/hotel-housekeeping-checklist`,
      languages: {
        'en': 'https://www.luxops.fr/en/hotel-housekeeping-checklist',
        'fr': 'https://www.luxops.fr/fr/hotel-housekeeping-checklist',
        'x-default': 'https://www.luxops.fr/en/hotel-housekeeping-checklist',
      },
    },
  }
}

// ─── Types ────────────────────────────────────────────────────────────────────

type ChecklistRole = {
  role: string
  intro: string
  sections: { title: string; items: string[] }[]
}

type AuditRow = {
  category: string
  checkpoint: string
}

type FAQItem = {
  q: string
  a: string
}

type DownloadItem = {
  title: string
  role: string
  body: string
  href: string
}

// ─── EN Data ──────────────────────────────────────────────────────────────────

const ROLES_EN: ChecklistRole[] = [
  {
    role: 'Room Attendant Checklist',
    intro:
      'Adapted from the LuxOps Housekeeping Playbook. Use this sequence for departure rooms, stayovers and VIP priority rooms. It combines cleaning order, self-inspection and room status control.',
    sections: [
      {
        title: 'Entry and setup',
        items: [
          'Review room status, VIP notes, special requests and maintenance alerts before entering',
          'Park the trolley against the wall without blocking the corridor',
          'Knock three times, announce "Housekeeping", wait 10 seconds, repeat, then open 6 to 8 inches before entering',
          'Place the service sign and complete a first scan for guest belongings, damage, odor or maintenance issues',
        ],
      },
      {
        title: 'Departure room: 7-phase sequence',
        items: [
          'Initial assessment: open curtains and lights, scan for lost items, remove trash and used items',
          'Bathroom deep clean: work clean to dirty, top to bottom, then complete the full amenity setup',
          'Bedroom cleaning: high-to-low dusting, surfaces, technology check, mirrors and floor edges',
          'Bed making: inspect mattress protector, apply tight sheets, center duvet, position pillows symmetrically',
          'Closet and storage: hangers even, safe open and empty, robes and slippers fresh, extra linen verified',
          'Minibar and beverage area: remove used items, polish glasses, restock items forward-facing',
          'Final presentation: stationery aligned, curtains at arrival standard, climate set around 21 to 22°C',
        ],
      },
      {
        title: 'Bathroom self-inspection',
        items: [
          'Toilet clean inside, under rim, exterior, base and behind',
          'Basin, counter and faucet dry-polished with no water spots',
          'Shower or bath free of soap residue, hair, scale, mould or mildew',
          'Mirror streak-free from multiple angles',
          'Floor fully dry, corners clean, no hair anywhere',
          'Towels folded uniformly and positioned per standard',
          'Amenities complete, aligned, labels facing forward and packaging intact',
          'Glasses polished, tissues available, toilet paper folded and spare roll present',
        ],
      },
      {
        title: 'Final self-check before leaving',
        items: [
          'Stand at the entry door and view the room as the next guest would',
          'Bed smooth, symmetrical and inviting with no visible wrinkles',
          'All surfaces dust-free, glass streak-free and curtains hanging evenly',
          'Floor clean with no debris, footprints or spots under bed edges',
          'Pleasant neutral scent, no chemical smell, dampness or smoke odor',
          'No guest belongings left behind; if found, stop and follow Lost & Found procedure',
          'Update PMS to "Clean" only; the room is not sellable until supervisor marks it "Inspected"',
        ],
      },
    ],
  },
  {
    role: 'Floor Supervisor Checklist',
    intro:
      'Adapted from the LuxOps Quality Control chapter. Departure rooms require 100% supervisor inspection before release. Stayover rooms should be spot-checked daily.',
    sections: [
      {
        title: 'Start of shift',
        items: [
          'Review departure, arrival and VIP list for the day',
          'Assign room blocks and priorities to each attendant',
          'Verify trolley setup: linen, amenities, chemicals and color-coded microfiber cloths',
          'Check attendance and redistribute workload if short-staffed',
        ],
      },
      {
        title: 'Departure inspection before release',
        items: [
          'Entry assessment: temperature comfortable, scent neutral, first impression welcoming',
          'Bedroom: bed smooth and symmetrical, pillows arranged, desk and nightstands clear',
          'Wardrobe: safe open and empty, hangers even, robes present, drawers empty and clean',
          'Bathroom: toilet, sink, shower, floor corners and behind toilet inspected for hair and residue',
          'Technology: lights, TV, remote, clock, phone and HVAC checked',
          'Final verification: door interior, hallway view, minibar, stationery and maintenance issues',
          'Result: Pass = mark "Inspected"; 1-2 minor issues = correct and re-inspect; 3+ issues = re-clean and coach',
        ],
      },
      {
        title: 'Daily quality control',
        items: [
          'Inspect 100% of departure rooms before they are released to Front Office',
          'Spot-check 20 to 30% of stayover rooms, prioritising new attendants, VIP rooms and previous complaints',
          'Track deficiency type, room number, attendant, shift and time',
          'Review the top three recurring issues weekly and turn them into coaching topics',
          'Prepare handover report for afternoon supervisor',
        ],
      },
    ],
  },
]

const AUDIT_ROWS_EN: AuditRow[] = [
  { category: 'Bathroom', checkpoint: 'No hair anywhere: floor, corners, shower, behind toilet and bath mat area' },
  { category: 'Bathroom', checkpoint: 'Toilet bowl, under rim, exterior, base and behind toilet fully clean' },
  { category: 'Bathroom', checkpoint: 'Faucets, mirror and shower fixtures polished with no water spots' },
  { category: 'Bathroom', checkpoint: 'Amenities complete, aligned, labels forward and packaging intact' },
  { category: 'Bedroom', checkpoint: 'Bed crisp, wrinkle-free, symmetrical and professionally finished' },
  { category: 'Bedroom', checkpoint: 'All surfaces dust-free: lamps, headboard, TV unit, desk, skirting and frames' },
  { category: 'Bedroom', checkpoint: 'Wardrobe empty, hangers uniform, safe open, drawers clean' },
  { category: 'Presentation', checkpoint: 'Pleasant temperature around 21-22°C and neutral scent with no chemical smell' },
  { category: 'Presentation', checkpoint: 'Stationery, remote, minibar and guest directory positioned to standard' },
  { category: 'Maintenance', checkpoint: 'No unreported faults: lights, HVAC, remote, phone, leaks, hinges or stains' },
]

const FAQ_EN: FAQItem[] = [
  {
    q: 'What should be on a hotel room inspection checklist?',
    a: 'A complete hotel room inspection checklist covers bedroom, bathroom, presentation and maintenance. The LuxOps Housekeeping Playbook uses a 100-point model: bathroom 35 points, bedroom 35 points, presentation 20 points and maintenance 10 points.',
  },
  {
    q: 'What is a housekeeping SOP checklist?',
    a: 'A housekeeping SOP (Standard Operating Procedure) checklist defines the exact sequence of tasks, time allocation and quality standard for each step of the room cleaning process. It ensures every guest receives the same level of service regardless of which team member cleans the room.',
  },
  {
    q: 'How do hotels do quality control in housekeeping?',
    a: 'A strong hotel housekeeping quality system has three layers: every room attendant self-inspects before marking the room clean, supervisors inspect 100% of departure rooms before release, and 20 to 30% of stayover rooms are spot-checked daily.',
  },
  {
    q: 'What is an LQA hotel inspection?',
    a: 'LQA (Leading Quality Assurance) is an independent hospitality auditing company used by luxury hotels to measure service standards. LuxOps checklists are designed around common luxury-hotel inspection principles and can support internal preparation work. LuxOps is not affiliated with LQA or Forbes Travel Guide, and the checklist is not a certification tool.',
  },
]

// ─── FR Data ──────────────────────────────────────────────────────────────────

const ROLES_FR: ChecklistRole[] = [
  {
    role: 'Checklist Femme de Chambre et Valet de Chambre',
    intro:
      "Utilisez cette séquence pour chaque chambre en départ et chaque recouche. 30 points de contrôle couvrant la propreté, les dotations, la maintenance et les standards d'expérience client.",
    sections: [
      {
        title: 'Entrée et mise en place',
        items: [
          'Frapper et annoncer "Housekeeping", attendre 10 secondes, refrapper',
          "Vérifier le panneau DND et le statut de la chambre dans le PMS avant d'entrer",
          "Positionner le chariot pour bloquer l'entrée, poser le panneau sol mouillé",
          'Ouvrir rideaux et fenêtres pour aérer la chambre',
        ],
      },
      {
        title: 'Chambre',
        items: [
          'Stripper le lit : taches et accrocs à noter sur la feuille de route',
          'Contrôler sous les oreillers et le matelas pour objets oubliés',
          'Épousseter toutes les surfaces de haut en bas : luminaires, tête de lit, tables de chevet, bureau',
          'Nettoyer miroirs et vitres sans laisser de traces',
          'Vider et changer les sacs des corbeilles',
          'Vérifier et réapprovisionner le minibar, noter la consommation sur la feuille de route',
          'Tester éclairages, TV, télécommande, climatisation et signaler immédiatement toute panne',
          "Faire le lit : coins au carré ou pli de duvet selon le standard de l'établissement",
          'Disposer coussins et éléments décoratifs selon le standard de la marque',
          'Aspirer ou laver le sol, y compris sous le lit',
        ],
      },
      {
        title: 'Salle de bain',
        items: [
          'Remplacer les serviettes usagées par un jeu propre plié selon le standard',
          "Nettoyer la cuvette WC (intérieur et extérieur), l'abattant, le pied et l'arrière",
          'Récurer lavabo, robinetterie et siphon, sécher et polir',
          'Nettoyer douche ou baignoire : carrelage, joints, paroi en verre, pommeau de douche',
          "Polir tous les éléments chromés et miroirs sans laisser de traces d'eau",
          'Réapprovisionner les dotations : shampooing, après-shampooing, gel douche, coton, kit dentaire',
          'Changer le rouleau de papier toilette, plier en pointe ou poser une banderole',
          'Laver le sol et contrôler les joints pour traces de moisissure',
        ],
      },
      {
        title: 'Inspection finale',
        items: [
          "Vérifier que la température est réglée selon le standard de l'établissement",
          "Test olfactif : absence d'odeurs (tabac, produits ménagers, humidité)",
          'Balayage visuel du sol : poussière, cheveux, débris',
          'Confirmer que tiroirs et penderie ne contiennent aucun effet du client précédent',
          'Verrouiller le coffre-fort, fermer tous les tiroirs',
          'Regard final depuis le pas de porte, comme si vous étiez le client découvrant la chambre pour la première fois',
          "Passer la chambre en BSH dans le PMS et informer la gouvernante d'étage",
        ],
      },
    ],
  },
  {
    role: "Checklist Gouvernante d'Étage",
    intro:
      "Le rôle de la gouvernante d'étage, c'est le contrôle qualité. Utilisez cette checklist après que la femme de chambre a terminé sa prestation, avant de libérer la chambre pour l'arrivée client.",
    sections: [
      {
        title: 'Brief du matin (8h00 à 8h30)',
        items: [
          'Consulter la liste des départs, arrivées et clients VIP du jour',
          "Distribuer les feuilles de route et définir les priorités pour chaque agent",
          'Vérifier la mise en place des chariots : comptage du linge, stock dotations, produits',
          "Contrôler les présences et redistribuer la charge en cas d'absence",
        ],
      },
      {
        title: 'Inspection des chambres (minimum 20% du secteur)',
        items: [
          'Confection du lit : pas de creux ni de plis, tombé identique des deux côtés',
          'Salle de bain : WC et paroi de douche inspectés avec lampe torche',
          'Miroirs et surfaces : test tactile poussière',
          "Test olfactif à l'entrée avant tout contact",
          'Dotations : type, quantité et positionnement corrects',
          'Maintenance : identifier les pannes non signalées (robinet qui goutte, charnière cassée, tache murale)',
          'Sol et plinthes : vérifier les angles et sous les meubles',
          'Résultat : BSH / Remise en recouche requise / Bon de travail émis',
        ],
      },
      {
        title: 'Fin de vacation',
        items: [
          "Mettre à jour le registre d'inspection",
          "Débriefer avec l'équipe sur les points qualité, sans relever les erreurs individuellement",
          "Rédiger la passation pour la gouvernante d'étage de l'après-midi",
          "Sécuriser l'office et le local produits",
        ],
      },
    ],
  },
]

const AUDIT_ROWS_FR: AuditRow[] = [
  { category: 'Arrivée', checkpoint: "Chambre à la bonne température à l'arrivée" },
  { category: 'Arrivée', checkpoint: 'Aucune trace du client précédent : cheveu, objet ou odeur' },
  { category: 'Literie', checkpoint: 'Linge impeccable, repassé, sans boulochage' },
  { category: 'Literie', checkpoint: 'Oreillers fermes, uniformes, disposés selon le standard' },
  { category: 'Salle de bain', checkpoint: 'WC inspectés : pas de calcaire ni de résidus' },
  { category: 'Salle de bain', checkpoint: 'Dotations complètes, bien positionnées, non périmées' },
  { category: 'Salle de bain', checkpoint: 'Carrelage et joints : pas de moisissures ni de savon incrusté' },
  { category: 'Surfaces', checkpoint: "Aucune poussière au-dessus de l'armoire, derrière la TV, le long des plinthes" },
  { category: 'Maintenance', checkpoint: 'Aucune panne non signalée dans la chambre' },
  { category: 'Détails', checkpoint: "Articles de courtoisie disposés selon le standard de l'établissement" },
]

const FAQ_FR: FAQItem[] = [
  {
    q: "Que doit contenir une checklist d'inspection de chambre ?",
    a: "Une checklist d'inspection complète couvre la première impression, le lit, les surfaces, la salle de bain, les amenities, le minibar, la maintenance et le statut PMS. Le standard LuxOps applique un modèle 100 points : salle de bain 35, chambre 35, présentation 20 et maintenance 10.",
  },
  {
    q: "Qu'est-ce qu'une SOP housekeeping ?",
    a: "Une SOP housekeeping définit la méthode : qui intervient, dans quel ordre, avec quels produits, quel timing et quel standard de sortie. Pour une chambre à blanc, la SOP LuxOps suit 7 phases : évaluation initiale, salle de bain, chambre, lit, penderie, minibar et présentation finale.",
  },
  {
    q: 'Comment les hôtels assurent-ils le contrôle qualité en housekeeping ?',
    a: "Un système qualité solide fonctionne à trois niveaux : auto-contrôle du Room Attendant sur chaque chambre, inspection gouvernante sur 100% des chambres départ avant libération, et contrôles aléatoires de 20 à 30% des recouches chaque jour.",
  },
  {
    q: "Qu'est-ce qu'un audit LQA dans un hôtel ?",
    a: "LQA (Leading Quality Assurance) est une société d'audit indépendante utilisée par les hôtels de luxe pour évaluer leurs standards de service. Les checklists LuxOps sont construites autour de principes d'inspection courants dans l'hôtellerie haut de gamme et peuvent aider une préparation interne. LuxOps n'est pas affilié à LQA ni à Forbes Travel Guide, et la checklist n'est pas un outil de certification.",
  },
]

// ─── Printable PDF Downloads ─────────────────────────────────────────────────

const DOWNLOADS_EN: DownloadItem[] = [
  {
    title: 'Public Area Attendant Checklist',
    role: 'Houseperson / public areas',
    body: 'A printable PDF for lobby, corridors, elevators, public restrooms, pantries, guest requests and shift handover.',
    href: '/downloads/housekeeping-checklists/en/public-area-attendant-checklist.pdf',
  },
  {
    title: 'Room Attendant Checklist',
    role: 'Departure rooms and stayovers',
    body: 'A printable PDF for trolley setup, room entry, departure room sequence, bathroom checks, stayover service and final self-inspection.',
    href: '/downloads/housekeeping-checklists/en/room-attendant-checklist.pdf',
  },
  {
    title: 'Housekeeping Supervisor Checklist',
    role: 'Floor supervisor / inspection',
    body: 'A printable PDF for room assignments, departure inspections, VIP checks, Clean vs Inspected release and quality coaching.',
    href: '/downloads/housekeeping-checklists/en/floor-housekeeping-supervisor-checklist.pdf',
  },
  {
    title: 'Bathroom Cleaning Checklist',
    role: 'Bathroom cleaning sequence',
    body: 'A printable PDF for mirrors, vanity, shower or bath, toilet, floor, amenities and final bathroom verification.',
    href: '/downloads/checklists/en/hotel-bathroom-cleaning-checklist.pdf',
  },
  {
    title: 'Departure Room Cleaning Checklist',
    role: 'Departure room / room cleaning',
    body: 'A printable PDF for the full departure room flow: first scan, strip-out, bathroom, bedroom, bed, minibar and final room status.',
    href: '/downloads/checklists/en/departure-room-cleaning-checklist.pdf',
  },
]

const DOWNLOADS_FR: DownloadItem[] = [
  {
    title: 'Checklist Équipier Lieux Publics',
    role: 'Équipier / zones communes',
    body: 'PDF imprimable pour le hall, les couloirs, les ascenseurs, les sanitaires publics, les offices, les demandes clients et la passation.',
    href: '/downloads/housekeeping-checklists/fr/checklist-equipier-lieux-publics.pdf',
  },
  {
    title: 'Checklist Femme / Valet de Chambre',
    role: 'Chambre à blanc et recouche',
    body: 'PDF imprimable pour le chariot, le protocole d’entrée, la chambre à blanc, la salle de bain, la recouche et l’auto-contrôle final.',
    href: '/downloads/housekeeping-checklists/fr/checklist-femme-valet-de-chambre.pdf',
  },
  {
    title: 'Checklist Gouvernante d’Étage',
    role: 'Supervision / inspection',
    body: 'PDF imprimable pour les feuilles de route, l’inspection chambre départ, les chambres VIP, la libération PMS et le coaching qualité.',
    href: '/downloads/housekeeping-checklists/fr/checklist-gouvernante-etage-superviseur.pdf',
  },
  {
    title: 'Checklist Nettoyage Salle de Bain',
    role: 'Séquence salle de bain',
    body: 'PDF imprimable pour les miroirs, le plan vasque, la douche ou baignoire, les toilettes, le sol, les amenities et le contrôle final.',
    href: '/downloads/checklists/fr/checklist-nettoyage-salle-de-bain-hotel.pdf',
  },
  {
    title: 'Checklist Chambre à Blanc',
    role: 'Chambre départ / nettoyage complet',
    body: 'PDF imprimable pour la chambre départ : premier contrôle, retrait, salle de bain, chambre, lit, minibar et statut final.',
    href: '/downloads/checklists/fr/checklist-chambre-a-blanc.pdf',
  },
]

// ─── SOP Steps ────────────────────────────────────────────────────────────────

const SOP_STEPS_EN = [
  {
    title: 'Separate departure, stayover, suite and deep clean standards',
    body: 'The LuxOps Housekeeping Playbook uses indicative time ranges for high-end properties: 45-60 minutes for a standard departure, 25-35 minutes for a standard stayover and 90-120 minutes for a deep clean. These ranges must be adapted to room size, layout, linen setup, equipment, staffing and brand standard.',
  },
  {
    title: 'Protect the Clean to Inspected workflow',
    body: 'A room marked Clean by the attendant is not ready for sale. Only the supervisor or manager can mark the room Inspected. Front Office should only assign rooms in Inspected status.',
  },
  {
    title: 'Use the checklist as a coaching tool',
    body: 'Inspection scores should identify patterns: repeated hair in bathrooms, water spots, dust on lamps, uneven beds, incomplete amenities or recurring maintenance faults. The goal is targeted coaching, not blame.',
  },
  {
    title: 'Link checklist, stock and timing',
    body: 'A checklist fails if the trolley is short on linen, amenities or chemicals. Define par levels for floor pantries and trolleys, then review usage against occupancy and room assignment every day.',
  },
]

const SOP_STEPS_FR = [
  {
    title: 'Séparer chambre à blanc, recouche, suite et deep cleaning',
    body: 'Le Playbook LuxOps distingue des repères de temps indicatifs pour les établissements haut de gamme : 45-60 minutes pour une chambre à blanc standard, 25-35 minutes pour une recouche, 75-90 minutes pour une suite en départ et 90-120 minutes pour un deep cleaning. Ces repères doivent être adaptés à la surface, la configuration, le linge, les équipements, les effectifs et le standard de marque.',
  },
  {
    title: 'Protéger le workflow Clean vers Inspected',
    body: 'Une chambre passée en Clean par le Room Attendant n’est pas vendable. Seule une chambre contrôlée et passée en Inspected par la gouvernante ou le manager peut être attribuée par la réception.',
  },
  {
    title: 'Utiliser la checklist comme outil de coaching',
    body: 'Les scores d’inspection doivent révéler les tendances : cheveux en salle de bain, traces d’eau, poussière, lit irrégulier, amenities incomplets ou défauts maintenance. Le but est de coacher précisément, pas de sanctionner.',
  },
  {
    title: 'Relier checklist, chariot, stock et timing',
    body: 'Une checklist échoue si le chariot manque de linge, amenities, microfibres ou produits. Définissez les par levels des offices et chariots, puis comparez chaque jour les consommations à l’occupation et aux feuilles de route.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function HotelHousekeepingChecklist({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'
  const faq = isEN ? FAQ_EN : FAQ_FR
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <HousekeepingResourceProposal
      locale={isEN ? 'en' : 'fr'}
      downloads={isEN ? DOWNLOADS_EN : DOWNLOADS_FR}
      roles={isEN ? ROLES_EN : ROLES_FR}
      auditRows={isEN ? AUDIT_ROWS_EN : AUDIT_ROWS_FR}
      faq={faq}
      sopSteps={isEN ? SOP_STEPS_EN : SOP_STEPS_FR}
    />
  </>
}
