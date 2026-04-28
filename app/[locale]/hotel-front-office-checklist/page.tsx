import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel Front Office Checklist — Shift Opening, Check-in & Handover | LuxOps'
      : 'Checklist Réception Hôtel — Ouverture, Check-in et Passation de Service | LuxOps',
    description: isEN
      ? 'Free hotel front office checklist: shift opening sequence, check-in and check-out procedure, billing verification and shift handover. Printable and ready to use.'
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
    role: 'Front Desk Agent: Shift Opening Checklist',
    intro:
      'Complete this checklist before taking the desk. Every item must be verified before the first guest interaction of the shift.',
    sections: [
      {
        title: 'Handover and arrivals',
        items: [
          'Read the handover report from the outgoing agent in full before approaching the desk',
          'Check arrivals list: total count, room assignments, VIP flags, pre-arrival requests',
          'Verify all pre-assigned rooms are clean and available in PMS',
          'Cross-check VIP arrivals against housekeeping and concierge confirmations',
          'Confirm any special setups (amenities, welcome letters, flowers) are actioned or in progress',
        ],
      },
      {
        title: 'Desk and systems',
        items: [
          'Log in to PMS, telephone system and any upsell or messaging tool',
          'Confirm cash float is at the correct amount and counted before first transaction',
          'Check printer, key encoder and card terminal are operational',
          'Review any open maintenance or follow-up tickets from previous shift',
          'Note any ongoing complaints or service recovery cases from handover',
        ],
      },
      {
        title: 'First-hour priorities',
        items: [
          'Contact housekeeping to confirm first departures and early check-in priority rooms',
          'Flag any no-shows from the previous night to the duty manager',
          'Review departure list: identify early checkouts or express checkout requests',
          'Confirm restaurant and breakfast service times, note any F&B holds for guests',
          'Brief any other agents coming on shift on VIP movements and sensitive guest cases',
        ],
      },
    ],
  },
  {
    role: 'Front Desk Agent: Check-in Sequence',
    intro:
      'Follow this sequence for every arrival: standard, VIP, walk-in and late arrival. The sequence is fixed. Adapt the tone, not the steps.',
    sections: [
      {
        title: 'Before the guest reaches the desk',
        items: [
          'Room assigned in PMS, status confirmed clean and available',
          'Pre-arrival requests noted on reservation and communicated to the relevant department',
          'VIP flag: welcome letter prepared, room personally inspected if applicable',
        ],
      },
      {
        title: 'At the desk',
        items: [
          'Greet guest by name within 30 seconds of arrival',
          'Verify identity document per property policy',
          'Confirm room type, rate and length of stay verbally before proceeding',
          'Present upsell option naturally, once, without pressure',
          'Collect payment method and pre-authorise card per property policy',
          'Explain key amenities: Wi-Fi, restaurant times, any current promotions',
          'Hand keys with both hands, confirm room number without announcing it aloud',
          'Offer assistance with luggage and directions to the room',
        ],
      },
      {
        title: 'After check-in',
        items: [
          'Update PMS: reservation to Checked In, room status to Occupied',
          'Log any special requests confirmed during check-in for follow-up',
          'Notify housekeeping or concierge immediately for any special requests not yet actioned',
        ],
      },
    ],
  },
  {
    role: 'Front Desk Agent: Billing Verification and Check-out',
    intro:
      'Billing errors at departure are among the most common sources of guest complaints. This checklist runs the evening before and at the desk on departure day.',
    sections: [
      {
        title: 'Evening before departure',
        items: [
          'Print preview folio for each departure and check against the reservation',
          'Flag any discrepancies: rate, extras, F&B charges, incidental holds',
          'Contact guest the evening before for VIP or long-stay departures to confirm departure time',
        ],
      },
      {
        title: 'At check-out',
        items: [
          'Present folio proactively before the guest asks',
          'Walk through charges if the guest requests, stay composed on disputed items',
          'Follow dispute protocol: guest signs folio with a note if unresolved, escalate to duty manager',
          'Confirm post-stay contact details if not already in PMS',
          'Release room in PMS immediately after key return',
          'Log any issues or complaints for the incoming shift handover',
        ],
      },
    ],
  },
  {
    role: 'Duty Manager: Shift Handover Checklist',
    intro:
      'Complete this before the end of every shift. Both outgoing and incoming managers sign off. Verbal handovers are not sufficient.',
    sections: [
      {
        title: 'Reservations and rooms',
        items: [
          'All open reservations and room assignments reviewed and up to date in PMS',
          'VIP arrivals for next shift: room confirmed, setup in progress or complete',
          'Room status reconciliation: PMS count matches physical availability',
          'No-shows and late cancellations logged per revenue policy',
        ],
      },
      {
        title: 'Operations and follow-up',
        items: [
          'Outstanding complaints: status, last action taken, expected resolution noted',
          'Pending maintenance tickets: status noted, urgent items escalated to engineering',
          'Cash float counted and reconciled, any discrepancy noted with explanation',
          'Handover signed off between outgoing and incoming duty manager',
        ],
      },
    ],
  },
]

// ─── FR Checklists ────────────────────────────────────────────────────────────

const ROLES_FR: ChecklistRole[] = [
  {
    role: 'Réceptionniste : Checklist d\'ouverture de service',
    intro:
      'Complétez cette checklist avant de prendre le poste. Chaque point doit être vérifié avant la première interaction client du service.',
    sections: [
      {
        title: 'Passation et arrivées',
        items: [
          'Lire la fiche de passation du réceptionniste sortant en intégralité avant de prendre le poste',
          'Vérifier la liste des arrivées : nombre total, attributions de chambres, signalements VIP, demandes pré-arrivée',
          'Confirmer que toutes les chambres pré-attribuées sont propres et disponibles dans le PMS',
          'Croiser les arrivées VIP avec les confirmations housekeeping et conciergerie',
          'Confirmer que les mises en place spéciales (amenities, lettres d\'accueil, fleurs) sont actées ou en cours',
        ],
      },
      {
        title: 'Poste et systèmes',
        items: [
          'Se connecter au PMS, au système téléphonique et à tout outil d\'upsell ou de messagerie',
          'Vérifier que le fond de caisse est au montant correct et le compter avant la première transaction',
          'Contrôler l\'imprimante, l\'encodeur de clés et le terminal de paiement',
          'Consulter les tickets de maintenance ou de suivi ouverts du service précédent',
          'Noter les réclamations en cours ou les cas de service recovery transmis en passation',
        ],
      },
      {
        title: 'Priorités de la première heure',
        items: [
          'Contacter le housekeeping pour confirmer les premiers départs et les chambres prioritaires pour early check-in',
          'Signaler au directeur de service les no-shows de la nuit précédente',
          'Parcourir la liste des départs : identifier les départs anticipés ou les demandes de check-out express',
          'Confirmer les horaires de restaurant et petit-déjeuner, noter les retenues F&B pour les clients',
          'Briefer les autres réceptionnistes prenant le service sur les mouvements VIP et les cas sensibles',
        ],
      },
    ],
  },
  {
    role: 'Réceptionniste : Séquence de check-in',
    intro:
      'Appliquez cette séquence pour chaque arrivée : standard, VIP, walk-in et arrivée tardive. La séquence est fixe. Adaptez le ton, pas les étapes.',
    sections: [
      {
        title: 'Avant que le client arrive au comptoir',
        items: [
          'Chambre attribuée dans le PMS, statut confirmé propre et disponible',
          'Demandes pré-arrivée notées sur la réservation et transmises au département concerné',
          'Signalement VIP : lettre d\'accueil préparée, chambre inspectée personnellement si applicable',
        ],
      },
      {
        title: 'Au comptoir',
        items: [
          'Accueillir le client par son nom dans les 30 secondes suivant son arrivée',
          'Vérifier le document d\'identité selon la politique de l\'établissement',
          'Confirmer verbalement le type de chambre, le tarif et la durée du séjour avant de procéder',
          'Proposer un upsell naturellement, une seule fois, sans insistance',
          'Encaisser le moyen de paiement et effectuer la pré-autorisation selon la politique de l\'établissement',
          'Présenter les équipements clés : Wi-Fi, horaires restaurant, promotions en cours',
          'Remettre les clés à deux mains, confirmer le numéro de chambre sans l\'annoncer à voix haute',
          'Proposer l\'aide aux bagages et indiquer le chemin vers la chambre',
        ],
      },
      {
        title: 'Après le check-in',
        items: [
          'Mettre à jour le PMS : réservation en Arrivé, statut chambre en Occupé',
          'Consigner les demandes particulières confirmées pendant le check-in pour suivi',
          'Notifier immédiatement le housekeeping ou la conciergerie pour toute demande non encore traitée',
        ],
      },
    ],
  },
  {
    role: 'Réceptionniste : Vérification de facturation et check-out',
    intro:
      'Les erreurs de facturation au départ figurent parmi les réclamations les plus fréquentes. Cette checklist s\'applique la veille au soir et au comptoir le jour du départ.',
    sections: [
      {
        title: 'La veille au soir',
        items: [
          'Imprimer la facture prévisionnelle de chaque départ et la vérifier par rapport à la réservation',
          'Signaler les écarts : tarif, extras, charges F&B, retenues d\'incidentals',
          'Contacter le client la veille pour les départs VIP ou longue durée afin de confirmer l\'heure de départ',
        ],
      },
      {
        title: 'Au check-out',
        items: [
          'Présenter la facture de façon proactive avant que le client la demande',
          'Détailler les charges si le client le demande, rester calme en cas de litige',
          'Appliquer le protocole de contestation : le client signe la facture avec mention si non résolu, escalade au directeur de service',
          'Confirmer les coordonnées post-séjour si elles ne sont pas déjà dans le PMS',
          'Libérer la chambre dans le PMS immédiatement après la remise des clés',
          'Consigner les problèmes ou réclamations pour la passation au service suivant',
        ],
      },
    ],
  },
  {
    role: 'Directeur de service : Checklist de passation',
    intro:
      'À compléter avant la fin de chaque service. Le directeur sortant et le directeur entrant signent tous les deux. Une passation verbale ne suffit pas.',
    sections: [
      {
        title: 'Réservations et chambres',
        items: [
          'Toutes les réservations ouvertes et attributions de chambres vérifiées et à jour dans le PMS',
          'Arrivées VIP pour le service suivant : chambre confirmée, mise en place en cours ou terminée',
          'Réconciliation des statuts chambres : comptage PMS conforme à la disponibilité physique',
          'No-shows et annulations tardives consignés selon la politique revenue',
        ],
      },
      {
        title: 'Opérations et suivi',
        items: [
          'Réclamations en cours : statut, dernière action, résolution attendue notés',
          'Tickets de maintenance en attente : statut noté, urgences transmises aux services techniques',
          'Fond de caisse compté et réconcilié, tout écart noté avec explication',
          'Passation signée par le directeur sortant et le directeur entrant',
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
            <span className="inline-block bg-[#0056D2] text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
              {isEN ? 'Front Office Standard' : 'Standard réception'}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {isEN
                ? 'The Complete Hotel Front Office Checklist'
                : 'La Checklist Réception Hôtelière Complète'}
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              {isEN
                ? 'Shift opening, check-in sequence, billing verification and shift handover. Role-specific checklists for front desk agents and duty managers.'
                : 'Ouverture de service, séquence check-in, vérification facturation et passation. Checklists par rôle pour réceptionnistes et directeurs de service.'}
            </p>
            <Link
              href={`/${locale}/front-office-sop`}
              className="inline-block bg-white text-[#1A2E44] px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              {isEN ? 'View Front Office SOP Guide' : 'Voir le guide SOP réception'}
            </Link>
          </div>
        </section>

        {/* Lead magnet */}
        <section
          className="py-10 border-b"
          style={{ backgroundColor: '#eef4ff', borderColor: 'rgba(195,198,214,0.3)' }}
        >
          <div className="max-w-screen-xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#003d9b] mb-2">
                {isEN ? 'Free resource' : 'Ressource gratuite'}
              </p>
              <p className="font-bold text-[#0a1d2e] text-lg mb-1">
                {isEN
                  ? 'Download a free chapter of the Front Office Playbook'
                  : 'Téléchargez un chapitre gratuit du Playbook Réception'}
              </p>
              <p className="text-sm text-[#4f6074]">
                {isEN
                  ? 'See what structured front office procedures look like in practice.'
                  : 'Découvrez à quoi ressemblent des procédures de réception structurées.'}
              </p>
            </div>
            <Link
              href={`/${locale}/free-hotel-procedures`}
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-bold text-sm flex-shrink-0 hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(135deg, #003d9b, #0052cc)', borderRadius: '0.125rem' }}
            >
              {isEN ? 'Download free' : 'Télécharger gratuitement'} <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* Intro */}
        <section className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-4">
            {isEN ? 'One standard, applied at every handover' : 'Un standard, appliqué à chaque passation'}
          </h2>
          {isEN ? (
            <p className="text-gray-600 leading-relaxed">
              A hotel front office checklist is only useful when it belongs to a specific moment. A shift opening
              checklist is not a check-in checklist. A billing verification is not a handover document. This page gives
              you free, printable checklists for each critical control point in a front office day: opening the desk,
              running a check-in, verifying a billing before checkout and closing the shift. Each checklist follows the
              operational standards used by front office teams in LQA and Forbes-rated properties.
            </p>
          ) : (
            <p className="text-gray-600 leading-relaxed">
              Une checklist réception hôtel n&apos;est utile que lorsqu&apos;elle appartient à un moment précis. La
              checklist d&apos;ouverture n&apos;est pas la checklist de check-in. La vérification de facturation
              n&apos;est pas la fiche de passation. Cette page met à votre disposition des checklists gratuites et
              imprimables pour chaque point de contrôle critique de la journée à la réception : ouverture du service,
              check-in, vérification de facturation avant départ et passation de service. Chaque checklist respecte les
              standards opérationnels des établissements certifiés LQA et Forbes.
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
            {isEN ? 'Front Office Quality Scoring Grid' : 'Grille de notation qualité réception'}
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

        {/* SOP implementation */}
        <section className="max-w-3xl mx-auto px-6 py-12 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-6">
            {isEN
              ? 'How to implement front office checklists that actually get used'
              : 'Comment mettre en place des checklists réception réellement utilisées'}
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
            {isEN ? 'Frequently Asked Questions' : 'Questions fréquentes'}
          </h2>
          <div className="space-y-6">
            {faq.map(({ q, a }, i) => (
              <div key={i} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <h3 className="font-semibold text-[#1A2E44] mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related resources */}
        <section className="max-w-3xl mx-auto px-6 py-12 border-t border-gray-100">
          <h2 className="text-xl font-bold text-[#1A2E44] mb-6">
            {isEN ? 'Related resources' : 'Ressources associées'}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                href: `/${locale}/front-office-sop`,
                title: isEN ? 'Front Office SOP Guide' : 'Guide SOP Réception',
                desc: isEN ? 'Standard operating procedures for hotel reception teams' : 'Procédures opérationnelles pour les équipes de réception',
              },
              {
                href: `/${locale}/hotel-night-audit-checklist`,
                title: isEN ? 'Night Audit Checklist' : 'Checklist Audit de Nuit',
                desc: isEN ? 'Step-by-step night audit procedure and morning handover' : 'Séquence complète d\'audit de nuit et passation matin',
              },
              {
                href: `/${locale}/hotel-housekeeping-checklist`,
                title: isEN ? 'Hotel Housekeeping Checklist' : 'Checklist Housekeeping Hôtel',
                desc: isEN ? '30-point room inspection, supervisor rounds and LQA scoring grid' : 'Inspection chambre 30 points, tournée superviseur et grille LQA',
              },
              {
                href: `/${locale}/hotel-sop`,
                title: isEN ? 'Hotel SOP Templates' : 'Modèles de SOP Hôtel',
                desc: isEN ? 'Complete standard operating procedures for all departments' : 'Procédures opérationnelles complètes pour tous les départements',
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

        {/* CTA */}
        <section className="bg-[#1A2E44] py-16 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              {isEN ? 'The complete front office system' : 'Le système réception complet'}
            </h2>
            <p className="text-blue-100 mb-8">
              {isEN
                ? 'The LuxOps Front Office Playbook includes the full SOP documentation, inspection frameworks, training guides and shift management tools. 12 chapters, PDF and PowerPoint, EN and FR.'
                : "Le Playbook Réception LuxOps comprend l'ensemble de la documentation SOP, les grilles d'inspection, les guides de formation et les outils de gestion des services. 12 chapitres, PDF et PowerPoint, EN et FR."}
            </p>
            <Link
              href={`/${locale}/playbooks`}
              className="inline-block bg-white text-[#1A2E44] px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              {isEN ? 'View Front Office Playbook' : 'Voir le Playbook Réception'}
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}
