import { Metadata } from 'next'
import ChecklistResourceProposal from '@/components/ChecklistResourceProposal'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel Front Office Checklist: Shift Opening, Check-in & Handover | LuxOps'
      : 'Checklist réception : ouverture, check-in et passation de service | LuxOps',
    description: isEN
      ? 'Free hotel front office checklist: shift opening sequence, check-in and check-out procedure, billing verification and shift handover. Printable and editable.'
      : 'Checklist réception hôtel gratuite : ouverture de service, séquence check-in, vérification facturation et passation. Prête à imprimer et à utiliser.',
    keywords: isEN
      ? 'hotel front office checklist, front desk checklist hotel, hotel reception checklist, front office daily checklist hotel, hotel front desk daily checklist, front desk standard operating procedure'
      : 'checklist réception hôtel, checklist front office hôtel, ouverture réception hôtel, checklist accueil hôtel, procédures réception hôtel, fiche de poste réception hôtel',
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/hotel-front-office-checklist`,
      languages: {
        'en': 'https://www.luxops.fr/en/hotel-front-office-checklist',
        'fr': 'https://www.luxops.fr/fr/hotel-front-office-checklist',
        'x-default': 'https://www.luxops.fr/en/hotel-front-office-checklist',
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

type FAQItem = { q: string; a: string }

// ─── EN Checklists ────────────────────────────────────────────────────────────

const ROLES_EN: ChecklistRole[] = [
  {
    role: 'Front Desk Daily Checklist',
    intro:
      'Adapted from the LuxOps Front Office Playbook and aligned with the printable Front Desk Daily Checklist. Use it to structure the shift before service starts, during live operations and before handover.',
    sections: [
      {
        title: 'Before the shift starts',
        items: [
          'Arrive 10 minutes before the scheduled shift start',
          'Review the shift handover from the previous team before taking the desk',
          'Check grooming, name badge, uniform, pen, notepad and access keys',
          'Log in to PMS, email, phone system, key encoder and payment terminal',
          'Confirm cash float and document any discrepancy before the first transaction',
        ],
      },
      {
        title: 'Shift opening controls',
        items: [
          'Review the Night Audit Daily Report or previous shift report',
          'Check today’s arrivals, departures, in-house guests, VIPs and special requests',
          'Confirm PMS working date, room status and expected availability with housekeeping',
          'Review early check-ins, late check-outs, room moves and pending traces',
          'Identify billing issues, high balances, declined payments and missing guarantees',
        ],
      },
      {
        title: 'During the shift',
        items: [
          'Greet each guest promptly and use the guest name when available',
          'Keep the desk clear, calm and ready for the next interaction',
          'Log guest requests with owner, time and follow-up status',
          'Update PMS immediately after check-in, check-out, room move or payment action',
          'Escalate complaints using the property recovery process before the guest has to repeat the issue',
        ],
      },
      {
        title: 'VIP and special arrivals',
        items: [
          'Verify room assignment, arrival time and preference notes',
          'Confirm the room is inspected before the VIP is expected',
          'Check welcome amenities, letter, key preparation and any special setup',
          'Inform housekeeping, concierge and F&B of relevant arrival details',
        ],
      },
      {
        title: 'Mid-shift operational check',
        items: [
          'Recheck arrivals not yet checked in and departures not yet completed',
          'Review room status discrepancies with housekeeping',
          'Follow up pending guest requests and open complaints',
          'Verify billing, deposits, pre-authorizations and payment issues',
          'Prepare notes for the next shift before the desk becomes busy again',
        ],
      },
      {
        title: 'Shift transition',
        items: [
          'Prepare written handover with pending arrivals, departures, room moves and guest issues',
          'List unresolved complaints, maintenance issues and billing follow-ups',
          'Hand over VIP movements, wake-up calls, transport requests and special arrangements',
          'Confirm cash float, payments and any discrepancy before leaving the desk',
        ],
      },
      {
        title: 'End of shift',
        items: [
          'Sign off the handover with the incoming agent or supervisor',
          'Close systems only after the next shift has accepted the handover',
          'Leave the desk clean, stocked and ready for the next team',
          'Escalate any unresolved sensitive case to the duty manager before leaving',
        ],
      },
    ],
  },
]

// ─── FR Checklists ────────────────────────────────────────────────────────────

const ROLES_FR: ChecklistRole[] = [
  {
    role: 'Checklist quotidienne réception',
    intro:
      'Adaptée du Playbook Front Office LuxOps et alignée avec la checklist PDF imprimable. Elle structure la prise de poste, le suivi du shift, les arrivées sensibles et la passation.',
    sections: [
      {
        title: 'Avant la prise de poste',
        items: [
          'Arriver 10 minutes avant le début du shift',
          'Lire la passation de l’équipe précédente avant de prendre le desk',
          'Contrôler tenue, badge, stylo, carnet, clés et accès nécessaires',
          'Se connecter au PMS, aux emails, au téléphone, à l’encodeur de clés et au terminal de paiement',
          'Compter le fonds de caisse et documenter tout écart avant la première transaction',
        ],
      },
      {
        title: 'Contrôles d’ouverture du shift',
        items: [
          'Relire le Daily Report du Night Audit ou le rapport du shift précédent',
          'Contrôler les arrivées, départs, clients in-house, VIP et demandes spéciales du jour',
          'Vérifier la date PMS, les statuts chambres et les disponibilités prévues avec le housekeeping',
          'Identifier les early check-ins, late check-outs, room moves et traces en attente',
          'Repérer les litiges de facturation, soldes élevés, paiements refusés et garanties manquantes',
        ],
      },
      {
        title: 'Pendant le shift',
        items: [
          'Accueillir chaque client rapidement et utiliser son nom quand il est disponible',
          'Garder le desk propre, calme et prêt pour l’interaction suivante',
          'Tracer les demandes clients avec responsable, heure et statut de suivi',
          'Mettre à jour le PMS immédiatement après chaque check-in, check-out, room move ou action de paiement',
          'Escalader les réclamations avec la méthode de recovery de l’établissement avant que le client ait à répéter le problème',
        ],
      },
      {
        title: 'Arrivées VIP et demandes spéciales',
        items: [
          'Vérifier l’attribution chambre, l’heure d’arrivée et les préférences client',
          'Confirmer que la chambre est inspectée avant l’arrivée prévue',
          'Contrôler amenities, lettre d’accueil, préparation des clés et mise en place spécifique',
          'Informer housekeeping, conciergerie et F&B des détails utiles pour l’arrivée',
        ],
      },
      {
        title: 'Contrôle opérationnel en milieu de shift',
        items: [
          'Recontrôler les arrivées non effectuées et les départs encore ouverts',
          'Revoir les écarts de statut chambre avec le housekeeping',
          'Suivre les demandes clients en attente et les réclamations ouvertes',
          'Vérifier facturation, dépôts, Pre-Authorizations et incidents de paiement',
          'Préparer les notes pour le shift suivant avant que le desk ne redevienne chargé',
        ],
      },
      {
        title: 'Transition de shift',
        items: [
          'Préparer une passation écrite avec arrivées, départs, room moves et points clients en attente',
          'Lister réclamations non résolues, problèmes de maintenance et suivis de facturation',
          'Transmettre mouvements VIP, Wake-up calls, demandes transport et arrangements particuliers',
          'Confirmer fonds de caisse, paiements et éventuels écarts avant de quitter le desk',
        ],
      },
      {
        title: 'Fin de shift',
        items: [
          'Valider la passation avec le réceptionniste ou superviseur entrant',
          'Fermer les systèmes seulement après acceptation de la passation par le shift suivant',
          'Laisser le desk propre, approvisionné et prêt pour l’équipe suivante',
          'Escalader tout dossier sensible non résolu au manager de duty avant de partir',
        ],
      },
    ],
  },
]

// ─── Audit grid ───────────────────────────────────────────────────────────────

const AUDIT_ROWS_EN: AuditRow[] = [
  { category: 'Arrival', checkpoint: 'Agent greets guest by name within 30 seconds' },
  { category: 'Arrival', checkpoint: 'Room confirmed clean and available before check-in begins' },
  { category: 'Check-in', checkpoint: 'Rate and room type confirmed verbally before key handover' },
  { category: 'Check-in', checkpoint: 'Upsell offered once, naturally, without pressure' },
  { category: 'Billing', checkpoint: 'Folio reviewed the evening before departure for all checkouts' },
  { category: 'Billing', checkpoint: 'No billing discrepancies at checkout: rate, extras, F&B' },
  { category: 'Complaint', checkpoint: 'Complaint logged in PMS with status and last action taken' },
  { category: 'Handover', checkpoint: 'Handover document completed and signed before end of shift' },
  { category: 'VIP', checkpoint: 'VIP room inspected personally before arrival' },
  { category: 'Systems', checkpoint: 'PMS room status matches physical availability at shift end' },
]

const AUDIT_ROWS_FR: AuditRow[] = [
  { category: 'Arrivée', checkpoint: 'Client accueilli par son nom dans les 30 secondes' },
  { category: 'Arrivée', checkpoint: 'Chambre confirmée propre et disponible avant le début du check-in' },
  { category: 'Check-in', checkpoint: 'Tarif et type de chambre confirmés verbalement avant remise des clés' },
  { category: 'Check-in', checkpoint: 'Upsell proposé une fois, naturellement, sans insistance' },
  { category: 'Facturation', checkpoint: 'Facture vérifiée la veille pour tous les départs' },
  { category: 'Facturation', checkpoint: 'Aucun écart de facturation au check-out : tarif, extras, F&B' },
  { category: 'Réclamation', checkpoint: 'Réclamation consignée dans le PMS avec statut et dernière action' },
  { category: 'Passation', checkpoint: 'Fiche de passation complétée et signée avant fin de service' },
  { category: 'VIP', checkpoint: 'Chambre VIP inspectée personnellement avant l\'arrivée' },
  { category: 'Systèmes', checkpoint: 'Statuts PMS conformes à la disponibilité physique en fin de service' },
]

// ─── SOP steps ────────────────────────────────────────────────────────────────

const SOP_STEPS_EN = [
  {
    title: 'Assign each checklist to one person at one moment',
    body: 'A checklist shared across the whole desk has no owner and gets ignored. The shift opening checklist belongs to the first agent on duty. The handover belongs to the duty manager. Ownership determines accountability.',
  },
  {
    title: 'Tie the sign-off to a specific action',
    body: 'A checklist is only complete when a defined action happens: the float is counted, the handover is signed, the PMS is reconciled. Ticking a box without completing the action is how checklists become formalities.',
  },
  {
    title: 'Use missed items as training triggers, not disciplinary tools',
    body: 'When the same checklist item is consistently skipped, the problem is usually structural: the step is unclear, the information is hard to find or the timing is wrong. Fix the checklist before correcting the person.',
  },
  {
    title: 'Brief the team at the start of every shift, not at the end',
    body: 'A three-minute opening briefing covering VIP arrivals, pending follow-ups and room availability is more effective than a debrief after something goes wrong. Quality control happens before the guest experience, not after.',
  },
]

const SOP_STEPS_FR = [
  {
    title: 'Attribuer chaque checklist à une personne, à un moment précis',
    body: 'Une checklist partagée à tout le service n\'a pas de propriétaire et finit par être ignorée. La checklist d\'ouverture appartient au premier agent en poste. La passation appartient au directeur de service. La responsabilité suit l\'attribution.',
  },
  {
    title: 'Lier la validation à une action concrète',
    body: 'Une checklist n\'est complète que quand une action définie a eu lieu : le fond de caisse est compté, la passation est signée, le PMS est réconcilié. Cocher une case sans avoir réalisé l\'action, c\'est ce qui transforme les checklists en formalités.',
  },
  {
    title: 'Utiliser les points manqués comme déclencheurs de formation',
    body: 'Quand le même point est systématiquement sauté, le problème est généralement structurel : l\'étape est floue, l\'information est difficile à trouver ou le timing est inadapté. Corriger la checklist avant de corriger la personne.',
  },
  {
    title: 'Briefer l\'équipe en début de service, pas en fin',
    body: 'Un brief de trois minutes en ouverture couvrant les arrivées VIP, les suivis en attente et la disponibilité des chambres est plus efficace qu\'un débrief après un incident. Le contrôle qualité se fait avant l\'expérience client, pas après.',
  },
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const FAQ_EN: FAQItem[] = [
  {
    q: 'What should a hotel front office checklist include?',
    a: 'A complete front office checklist covers four moments: shift opening (systems, float, arrivals list), guest interactions (check-in sequence, billing verification), exception handling (complaint logging, dispute protocol) and shift handover (open items, PMS reconciliation). Each moment requires a separate, role-specific document rather than one combined daily list.',
  },
  {
    q: 'What is a front desk daily checklist?',
    a: 'A front desk daily checklist is the set of tasks and verifications an agent must complete at the start, during and end of a shift. In practice, the most effective approach splits this into three separate checklists: opening, active shift and handover. A single combined daily list rarely works in practice because it tries to serve too many roles at once.',
  },
  {
    q: 'How do hotels ensure consistent front office standards?',
    a: 'Consistency at the front office comes from three elements working together: written SOPs that define how each interaction should be handled, role-specific checklists that verify compliance at defined control points, and regular coaching based on inspection results. Training new staff to the written standard rather than by observation is the most reliable way to maintain consistency across shifts.',
  },
  {
    q: 'What is the difference between a front office SOP and a checklist?',
    a: 'The SOP defines the method: how to handle a walk-in check-in, how to manage a billing dispute, how to open the desk. The checklist confirms it was done: pre-arrival requests actioned, float counted, handover signed. The SOP is training material. The checklist is an operational control tool. Neither replaces the other.',
  },
]

const FAQ_FR: FAQItem[] = [
  {
    q: 'Que doit contenir une checklist de réception hôtel ?',
    a: 'Une checklist réception complète couvre quatre moments : l\'ouverture de service (systèmes, fond de caisse, liste des arrivées), les interactions clients (séquence check-in, vérification de facturation), la gestion des situations hors standard (consignation des réclamations, protocole de litige) et la passation de service (points en suspens, réconciliation PMS). Chaque moment nécessite un document distinct par rôle plutôt qu\'une liste quotidienne unique.',
  },
  {
    q: 'Qu\'est-ce qu\'une checklist journalière de réception ?',
    a: 'Une checklist journalière de réception regroupe les tâches et vérifications qu\'un réceptionniste doit effectuer en début, pendant et en fin de service. En pratique, l\'approche la plus efficace consiste à diviser en trois checklists distinctes : ouverture, service actif et passation. Une liste quotidienne unique qui regroupe tout fonctionne rarement car elle cherche à servir trop de rôles à la fois.',
  },
  {
    q: 'Comment les hôtels assurent-ils des standards de réception cohérents ?',
    a: 'La cohérence à la réception repose sur trois éléments : des procédures écrites qui définissent comment chaque interaction doit être gérée, des checklists par rôle qui vérifient la conformité à des points de contrôle définis, et un coaching régulier basé sur les résultats d\'inspection. Former les nouveaux collaborateurs au standard écrit plutôt que par observation est le moyen le plus fiable de maintenir la cohérence d\'un service à l\'autre.',
  },
  {
    q: 'Quelle est la différence entre un SOP réception et une checklist ?',
    a: 'Le SOP définit la méthode : comment gérer un walk-in, comment traiter un litige de facturation, comment ouvrir le service. La checklist confirme que c\'est fait : demandes pré-arrivée actées, fond de caisse compté, passation signée. Le SOP est un support de formation. La checklist est un outil de contrôle opérationnel. Aucun ne remplace l\'autre.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function HotelFrontOfficeChecklistPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'
  const roles = isEN ? ROLES_EN : ROLES_FR
  const auditRows = isEN ? AUDIT_ROWS_EN : AUDIT_ROWS_FR
  const sopSteps = isEN ? SOP_STEPS_EN : SOP_STEPS_FR
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
    <ChecklistResourceProposal
      locale={isEN ? 'en' : 'fr'}
      kind="front-office"
      title={isEN ? 'Front Desk Daily Checklist' : 'Checklist quotidienne réception'}
      intro={isEN ? 'A clear shift routine for desk opening, guest arrivals, billing checks and a reliable handover.' : 'Une routine de shift claire pour l’ouverture du desk, les arrivées, le contrôle de la facturation et une passation fiable.'}
      pdf={isEN ? '/downloads/checklists/en/front-desk-daily-checklist.pdf' : '/downloads/checklists/fr/checklist-quotidienne-reception.pdf'}
      sections={[
        ...roles.flatMap(role => role.sections.map(section => ({ title: section.title, intro: role.intro, items: section.items }))),
        { title: isEN ? 'Front Office quality audit points' : 'Points d’audit qualité réception', items: auditRows.map(row => `${row.category} — ${row.checkpoint}`) },
        ...sopSteps.map(step => ({ title: step.title, items: [step.body] })),
      ]}
      faq={faq}
    />
  </>
}
