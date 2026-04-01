import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel Housekeeping Checklist: Room Inspection, SOP and Quality Audit | LuxOps'
      : 'Checklist Housekeeping Hôtel : Inspection de Chambre, SOP et Audit Qualité | LuxOps',
    description: isEN
      ? 'Free printable hotel housekeeping checklist for room attendants, supervisors and quality audits. 30-point room inspection, supervisor rounds and LQA-ready audit grid.'
      : 'Checklist housekeeping hôtel gratuite et imprimable pour femmes de chambre, gouvernantes d\'étage et audits qualité. Inspection 30 points, tournée superviseur et grille audit LQA.',
    keywords: isEN
      ? 'hotel housekeeping checklist, hotel room inspection checklist, hotel quality assurance checklist, hotel quality control checklist, housekeeping SOP checklist, housekeeping audit, hotel inspection'
      : 'checklist housekeeping hôtel, checklist inspection chambre hôtel, audit qualité housekeeping, gouvernante étage checklist, SOP housekeeping hôtel, contrôle qualité housekeeping',
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

// ─── EN Data ──────────────────────────────────────────────────────────────────

const ROLES_EN: ChecklistRole[] = [
  {
    role: 'Room Attendant Checklist',
    intro:
      'Use this sequence for every checkout and occupied room service. 30 control points covering cleanliness, amenities, maintenance and guest experience.',
    sections: [
      {
        title: 'Entry and setup',
        items: [
          'Knock and announce "Housekeeping", wait 10 seconds, knock again',
          'Check DND sign and room status in PMS before entering',
          'Position trolley to block doorway, place wet floor sign',
          'Open curtains and windows to air the room',
        ],
      },
      {
        title: 'Bedroom',
        items: [
          'Strip bed linen, check sheets for stains and damage and note on report',
          'Check under pillows and mattress for lost items',
          'Dust all surfaces top to bottom: lamps, headboard, nightstands, desk',
          'Wipe all glass and mirrors to a streak-free finish',
          'Empty and reline all bins',
          'Check and restock minibar, note consumption on room report',
          'Check all lighting, TV, remote control and A/C, report any faults immediately',
          'Make beds: tight hospital corners or duvet fold per property standard',
          'Arrange cushions and decorative items to brand standard',
          'Vacuum or mop floors including under the bed',
        ],
      },
      {
        title: 'Bathroom',
        items: [
          'Replace used towels with a fresh set folded to standard',
          'Clean toilet bowl, seat (inside and outside), lid, base and behind',
          'Scrub sink, faucets and overflow drain, dry and polish',
          'Clean shower or bathtub: tiles, grout, glass door and showerhead',
          'Polish all chrome and mirrors, no water marks',
          'Restock amenities: shampoo, conditioner, soap, cotton, dental kit',
          'Replace toilet paper roll, fold to point or apply band',
          'Mop bathroom floor, check grout for mold',
        ],
      },
      {
        title: 'Final inspection',
        items: [
          'Check room temperature set to property standard',
          'Smell test: no odors (smoking, cleaning product, humidity)',
          'Scan floor for dust, hair, debris',
          'Confirm all drawers and wardrobe are empty of previous guest items',
          'Lock safe, close all drawers',
          'Final visual sweep from the doorway, as a guest seeing the room for the first time',
          'Update room status in PMS and inform floor supervisor',
        ],
      },
    ],
  },
  {
    role: 'Floor Supervisor Checklist',
    intro:
      'Quality control starts after the room attendant has finished. Use this checklist before releasing a room for check-in.',
    sections: [
      {
        title: 'Morning briefing (8:00 to 8:30)',
        items: [
          'Review departure, arrival and VIP list for the day',
          'Assign room blocks and priorities to each attendant',
          'Verify trolley setup: correct linen counts, amenity stock, chemicals',
          'Check attendance and redistribute workload if short-staffed',
        ],
      },
      {
        title: 'Room quality inspection (minimum 20% of rooms)',
        items: [
          'Bed making: no lumps or wrinkles, even overhang on both sides',
          'Bathroom: toilet and shower glass inspected with torch',
          'Mirrors and surfaces: touch test for dust',
          'Smell test: enter and assess before touching anything',
          'Amenities: correct type, quantity and placement',
          'Maintenance: check for unreported faults (dripping tap, broken hinge, wall stain)',
          'Floor and skirting boards: check corners and under furniture',
          'Result: Pass / Re-clean required / Maintenance ticket raised',
        ],
      },
      {
        title: 'End of shift',
        items: [
          'Update room inspection log',
          'Debrief with room attendants, address quality issues without blame',
          'Prepare handover report for afternoon supervisor',
          'Secure linen room and chemical storage',
        ],
      },
    ],
  },
]

const AUDIT_ROWS_EN: AuditRow[] = [
  { category: 'Arrival', checkpoint: 'Room at correct temperature on arrival' },
  { category: 'Arrival', checkpoint: 'No trace of previous guest: hair, item or odor' },
  { category: 'Bed', checkpoint: 'Linen spotless, pressed, free of pilling' },
  { category: 'Bed', checkpoint: 'Pillows firm, uniform and correctly arranged' },
  { category: 'Bathroom', checkpoint: 'Toilet: no limescale, no residue' },
  { category: 'Bathroom', checkpoint: 'Amenities full, correctly positioned and unexpired' },
  { category: 'Bathroom', checkpoint: 'Grout and tile: no mold, no soap scum' },
  { category: 'Surfaces', checkpoint: 'No dust on top of wardrobe, behind TV, along skirting' },
  { category: 'Maintenance', checkpoint: 'No unreported faults in room' },
  { category: 'Details', checkpoint: 'Complimentary items arranged to standard' },
]

const FAQ_EN: FAQItem[] = [
  {
    q: 'What should be on a hotel room inspection checklist?',
    a: 'A complete hotel room inspection checklist covers four areas: bedroom cleanliness and presentation, bathroom hygiene and amenities, technical checks (lighting, A/C, TV) and maintenance reporting. The LuxOps standard uses 30 checkpoints for room attendants and a separate 15-point quality sign-off for supervisors.',
  },
  {
    q: 'What is a housekeeping SOP checklist?',
    a: 'A housekeeping SOP (Standard Operating Procedure) checklist defines the exact sequence of tasks, time allocation and quality standard for each step of the room cleaning process. It ensures every guest receives the same level of service regardless of which team member cleans the room.',
  },
  {
    q: 'How do hotels do quality control in housekeeping?',
    a: 'Hotels use a two-layer quality control system: room attendants self-check using their room checklist before marking a room clean, and supervisors do a spot inspection on a minimum percentage of rooms, typically 20% daily and 100% on VIP and check-in rooms.',
  },
  {
    q: 'What is an LQA hotel inspection?',
    a: 'LQA (Leading Quality Assurance) is an independent hospitality auditing company used by luxury hotels to measure service standards. Their housekeeping inspection covers 60+ criteria including cleanliness, presentation, amenities and staff interaction. LuxOps checklists are designed to meet or exceed LQA standards.',
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
    q: "Que doit contenir une checklist d'inspection de chambre d'hôtel ?",
    a: "Une checklist d'inspection complète couvre quatre domaines : la propreté et la présentation de la chambre, l'hygiène et les dotations de la salle de bain, les vérifications techniques (éclairage, climatisation, TV) et la remontée des pannes maintenance. Le standard LuxOps applique 30 points de contrôle pour la femme de chambre et une validation en 15 points pour la gouvernante d'étage.",
  },
  {
    q: "Qu'est-ce qu'une SOP housekeeping ?",
    a: "Une SOP (Standard Operating Procedure) housekeeping définit la séquence exacte des tâches, le temps alloué et le niveau de qualité attendu pour chaque étape du nettoyage. Elle garantit que chaque client bénéficie du même niveau de service, quel que soit l'agent qui assure la prestation.",
  },
  {
    q: 'Comment les hôtels assurent-ils le contrôle qualité en housekeeping ?',
    a: "Les hôtels fonctionnent avec un système de contrôle qualité à deux niveaux : la femme de chambre valide elle-même sa checklist avant de passer la chambre en BSH, puis la gouvernante d'étage effectue une inspection sur un pourcentage minimum de chambres, généralement 20% par jour et 100% sur les chambres VIP et les entrées du jour.",
  },
  {
    q: "Qu'est-ce qu'un audit LQA dans un hôtel ?",
    a: "LQA (Leading Quality Assurance) est une société d'audit indépendante utilisée par les hôtels de luxe pour évaluer leurs standards de service. Leur inspection housekeeping couvre plus de 60 critères : propreté, présentation, dotations et interaction du personnel. Les checklists LuxOps sont conçues pour atteindre ou dépasser les exigences LQA.",
  },
]

// ─── SOP Steps ────────────────────────────────────────────────────────────────

const SOP_STEPS_EN = [
  {
    title: 'Define your room types and service levels',
    body: 'Checkout rooms, occupied rooms, suites and VIP rooms each require a specific protocol and time allocation. Start by mapping your room categories before writing your SOP.',
  },
  {
    title: 'Set time standards per room category',
    body: 'A well-run housekeeping department knows exactly how long each service type takes. Industry benchmarks: 20 to 30 minutes for an occupied room service, 35 to 45 minutes for a checkout room, 60 to 90 minutes for a suite.',
  },
  {
    title: 'Train to the checklist, not from memory',
    body: 'New room attendants who learn from observation will reproduce the habits, good and bad, of whoever trained them. A written SOP checklist breaks that cycle and sets a consistent baseline for the entire team.',
  },
  {
    title: 'Use inspection scores as coaching tools, not punishment',
    body: 'Quality control only works when it is safe to report problems. Share inspection scores in a weekly briefing. Focus on trends, not individuals. A team that improves together stays together.',
  },
]

const SOP_STEPS_FR = [
  {
    title: 'Définir les catégories de chambres et les niveaux de service',
    body: 'Départ, recouche, suite, chambre VIP : chaque type de prestation a ses propres exigences et son propre temps de passage. Commencez par cartographier vos catégories avant de rédiger votre SOP.',
  },
  {
    title: 'Fixer des temps de passage par type de chambre',
    body: 'Un département housekeeping performant sait exactement combien de temps prend chaque prestation. Repères sectoriels : 20 à 30 minutes pour une recouche, 35 à 45 minutes pour un départ, 60 à 90 minutes pour une suite.',
  },
  {
    title: 'Former sur la checklist, pas de mémoire',
    body: "Une femme de chambre formée uniquement par observation reproduira les habitudes, bonnes ou mauvaises, de celle qui l'a formée. Une SOP écrite brise ce cycle et établit un niveau de référence uniforme pour toute l'équipe.",
  },
  {
    title: "Utiliser les scores d'inspection comme outil de coaching, pas de sanction",
    body: "Le contrôle qualité ne fonctionne que dans un climat de confiance. Partagez les scores d'inspection lors d'un brief hebdomadaire. Travaillez sur les tendances, pas sur les individus. Une équipe qui progresse ensemble reste ensemble.",
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function HotelHousekeepingChecklist({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'
  const roles = isEN ? ROLES_EN : ROLES_FR
  const auditRows = isEN ? AUDIT_ROWS_EN : AUDIT_ROWS_FR
  const faq = isEN ? FAQ_EN : FAQ_FR
  const sopSteps = isEN ? SOP_STEPS_EN : SOP_STEPS_FR

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-white">

        {/* Hero */}
        <section className="bg-[#1A2E44] text-white py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
              {isEN ? 'Hotel Quality Standard' : 'Standard qualité hôtel'}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {isEN
                ? 'The Complete Hotel Housekeeping Checklist'
                : 'La Checklist Housekeeping Hôtelière Complète'}
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              {isEN
                ? 'Room inspection, supervisor rounds and quality audit in one place. 30-point room attendant checklist, floor supervisor inspection and an LQA-ready scoring grid.'
                : "Inspection de chambre, tournée gouvernante d'étage et audit qualité au même endroit. Checklist 30 points femme de chambre, inspection superviseur et grille de notation prête pour l'audit LQA."}
            </p>
            <Link
              href={`/${locale}#playbooks`}
              className="inline-block bg-white text-[#1A2E44] px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              {isEN ? 'View Housekeeping Playbook' : 'Voir le Playbook Housekeeping'}
            </Link>
          </div>
        </section>

        {/* Intro */}
        <section className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-4">
            {isEN ? 'One standard, applied at every step' : 'Un standard, appliqué à chaque étape'}
          </h2>
          {isEN ? (
            <p className="text-gray-600 leading-relaxed">
              A hotel housekeeping checklist is the backbone of consistent room quality. Whether you are a head
              housekeeper standardizing your team&apos;s SOP, a floor supervisor running daily room inspections, or a
              hotel manager preparing for a quality audit, the right checklist turns invisible excellence into a
              repeatable standard. This page gives you free, printable checklists for every role: room attendants,
              floor supervisors (gouvernantes d&apos;étage) and quality auditors. Each checklist follows the hotel
              quality control standards used by LQA and Forbes-rated properties.
            </p>
          ) : (
            <p className="text-gray-600 leading-relaxed">
              Une checklist housekeeping, c&apos;est la colonne vertébrale d&apos;une qualité de chambre constante.
              Que vous soyez gouvernante générale en train de structurer les SOP de votre équipe, gouvernante
              d&apos;étage qui effectue ses tournées d&apos;inspection, ou directeur d&apos;hôtel qui prépare un audit
              qualité, la bonne checklist transforme l&apos;excellence invisible en standard reproductible. Cette page
              met à votre disposition des checklists gratuites et imprimables pour chaque poste : femmes de chambre,
              valets de chambre, gouvernantes d&apos;étage et auditeurs qualité. Chaque checklist respecte les
              standards de contrôle qualité des établissements certifiés LQA et Forbes.
            </p>
          )}
        </section>

        {/* Role-based checklists */}
        {roles.map((role, ri) => (
          <section key={ri} className="max-w-3xl mx-auto px-6 pb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#1A2E44] mb-2">{role.role}</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{role.intro}</p>
            </div>
            <div className="space-y-4">
              {role.sections.map((sec, si) => (
                <div key={si} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-[#F5F7FA] px-5 py-3">
                    <h3 className="font-semibold text-[#1A2E44] text-sm uppercase tracking-wide">{sec.title}</h3>
                  </div>
                  <ul className="divide-y divide-gray-100">
                    {sec.items.map((item, ii) => (
                      <li key={ii} className="flex items-start gap-3 px-5 py-3 text-sm text-gray-700">
                        <span className="mt-0.5 w-4 h-4 rounded border-2 border-gray-300 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Audit scoring grid */}
        <section className="max-w-3xl mx-auto px-6 pb-12">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-2">
            {isEN ? 'Quality Audit Scoring Grid' : 'Grille de Notation Audit Qualité'}
          </h2>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            {isEN
              ? 'Score each point 0 to 2. Total out of 20. Use this to prepare for LQA, Forbes or internal brand audits. 18 to 20: ready for audit. 14 to 17: monitor. Below 14: immediate action required.'
              : "Notez chaque point de 0 à 2. Total sur 20. Utilisez cette grille pour préparer un audit LQA, Forbes ou un audit interne. 18 à 20 : prêt pour l'audit. 14 à 17 : à surveiller. En dessous de 14 : action immédiate requise."}
          </p>
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A2E44] text-white">
                  <th className="text-left px-4 py-3 font-semibold w-1/4">
                    {isEN ? 'Category' : 'Catégorie'}
                  </th>
                  <th className="text-left px-4 py-3 font-semibold">
                    {isEN ? 'Checkpoint' : 'Point de contrôle'}
                  </th>
                  <th className="text-center px-4 py-3 font-semibold w-20">
                    {isEN ? 'Score' : 'Note'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {auditRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F7FA]'}>
                    <td className="px-4 py-3 text-gray-500 text-xs font-medium">{row.category}</td>
                    <td className="px-4 py-3 text-gray-700">{row.checkpoint}</td>
                    <td className="px-4 py-3 text-center text-gray-400 font-mono">/2</td>
                  </tr>
                ))}
                <tr className="bg-[#1A2E44] text-white font-bold">
                  <td className="px-4 py-3" colSpan={2}>Total</td>
                  <td className="px-4 py-3 text-center font-mono">/20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Lead magnet */}
        <section className="bg-[#F5F7FA] py-12 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#1A2E44] mb-3">
              {isEN ? 'Download the Full Checklist Pack' : 'Téléchargez le Pack Complet de Checklists'}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {isEN
                ? 'These checklists are an extract from the LuxOps Housekeeping Operations Playbook, a complete 10-chapter SOP manual. The full pack includes gouvernante morning and evening checklists, equipier shift checklists, linen room inspection, VIP room and turndown service checklist, and monthly deep cleaning checklist.'
                : "Ces checklists sont extraites du Playbook Housekeeping LuxOps, un manuel SOP complet en 10 chapitres. Le pack complet comprend les checklists gouvernante d'étage matin et soir, les checklists équipier par vacation, la checklist lingère et office de linge, la checklist chambre VIP et service de couverture, et la checklist grand nettoyage mensuel."}
            </p>
            <Link
              href={`/${locale}#playbooks`}
              className="inline-block bg-[#1A2E44] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#243d57] transition-colors"
            >
              {isEN ? 'Get the Full Playbook' : 'Obtenir le Playbook Complet'}
            </Link>
          </div>
        </section>

        {/* SOP implementation */}
        <section className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-6">
            {isEN
              ? 'How to implement a housekeeping SOP in your hotel'
              : 'Comment mettre en place une SOP housekeeping dans votre hôtel'}
          </h2>
          <div className="space-y-6">
            {sopSteps.map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="text-3xl font-bold text-gray-100 flex-shrink-0 w-10 pt-1">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A2E44] mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-6 py-12 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-8">
            {isEN ? 'Frequently Asked Questions' : 'Questions Fréquentes'}
          </h2>
          <div className="space-y-6">
            {faq.map(({ q, a }, i) => (
              <div key={i}>
                <h3 className="font-semibold text-[#1A2E44] mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1A2E44] py-16 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              {isEN ? 'The complete housekeeping system' : 'Le système housekeeping complet'}
            </h2>
            <p className="text-blue-100 mb-8">
              {isEN
                ? 'The LuxOps Housekeeping Playbook includes the full SOP documentation, inspection frameworks, training guides and control tools used by housekeeping teams across luxury and boutique properties. 10 chapters, ready to use.'
                : "Le Playbook Housekeeping LuxOps comprend l'ensemble de la documentation SOP, les grilles d'inspection, les guides de formation et les outils de contrôle utilisés par les équipes housekeeping des établissements de luxe et boutique. 10 chapitres, prêts à l'emploi."}
            </p>
            <Link
              href={`/${locale}#playbooks`}
              className="inline-block bg-white text-[#1A2E44] px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              {isEN ? 'View Housekeeping Playbook' : 'Voir le Playbook Housekeeping'}
            </Link>
          </div>
        </section>

        {/* Related resources */}
        <section className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="text-xl font-bold text-[#1A2E44] mb-6">
            {isEN ? 'Related resources' : 'Ressources associées'}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                href: `/${locale}/housekeeping-sop`,
                title: isEN ? 'Housekeeping SOP Guide' : 'Guide des procédures housekeeping',
                desc: isEN
                  ? 'Standard operating procedures for housekeeping teams'
                  : 'Procédures opérationnelles standard pour les équipes housekeeping',
              },
              {
                href: `/${locale}/hotel-audit-checklist`,
                title: isEN ? 'Hotel Audit Checklist' : 'Checklist Audit Hôtel',
                desc: isEN
                  ? 'Full quality audit framework for luxury properties'
                  : "Grille d'audit qualité complète pour les établissements de luxe",
              },
              {
                href: `/${locale}/hotel-checklist`,
                title: isEN ? 'Hotel Operational Checklists' : 'Checklists Opérationnelles Hôtel',
                desc: isEN
                  ? 'What makes hotel checklists actually useful in practice'
                  : 'Ce qui rend les checklists hôtelières réellement utiles en pratique',
              },
              {
                href: `/${locale}/hotel-staff-training`,
                title: isEN ? 'Hotel Staff Training' : 'Formation du Personnel Hôtelier',
                desc: isEN
                  ? 'Training programs for luxury hotel teams'
                  : 'Programmes de formation pour les équipes hôtelières de luxe',
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border border-gray-200 rounded-xl p-5 hover:border-[#1A2E44] transition-colors group"
              >
                <p className="font-semibold text-[#1A2E44] group-hover:underline">{link.title}</p>
                <p className="text-sm text-gray-500 mt-1">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>

      </main>
    </>
  )
}
