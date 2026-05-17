import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import TrackedLink from '@/components/TrackedLink'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel Night Audit Checklist | Step-by-Step Night Audit Procedure | LuxOps'
      : 'Checklist Night Audit | Clôture PMS, VCC, caisse et passation | LuxOps',
    description: isEN
      ? 'Free hotel night audit checklist: pre-closing checks, system reconciliation, no-show management, report generation and morning handover. Built for hotel night auditors.'
      : 'Checklist Night Audit hôtel : clôture PMS, contrôle crédit, Pre-Authorizations, VCC, caisse, no-shows, rapports et Shift Handover matin.',
    keywords: isEN
      ? 'hotel night audit checklist, night audit procedure hotel, hotel night audit steps, night auditor hotel checklist, night audit process hotel, hotel night audit report'
      : 'checklist night audit hôtel, procédure night audit hôtel, night auditor hôtel, réceptionniste de nuit hôtel, clôture PMS hôtel, clôture journalière hôtel, VCC hôtel',
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/hotel-night-audit-checklist`,
      languages: {
        'en': 'https://www.luxops.fr/en/hotel-night-audit-checklist',
        'fr': 'https://www.luxops.fr/fr/hotel-night-audit-checklist',
        'x-default': 'https://www.luxops.fr/en/hotel-night-audit-checklist',
      },
    },
  }
}

// ─── Types ────────────────────────────────────────────────────────────────────

type ChecklistSection = {
  phase: string
  intro: string
  items: string[]
}

type FAQItem = { q: string; a: string }

// ─── EN Data ──────────────────────────────────────────────────────────────────

const PHASES_EN: ChecklistSection[] = [
  {
    phase: '1. Shift takeover, 22:45 to 23:15',
    intro: 'The Night Auditor takes control of the desk before the property closes the day. The first priority is to understand what is still open, sensitive or financially exposed.',
    items: [
      'Receive a verbal and written handover from the PM shift',
      'Review arrivals still expected, late departures, room moves and guest complaints',
      'Check the cashier float and document any variance before taking responsibility',
      'Log in to PMS, payment terminal, email, phone system and night reporting tools',
      'Review the in-house guest list, VIPs, wake-up calls and special requests',
      'Confirm emergency contacts, duty manager contact and security procedure for the night',
    ],
  },
  {
    phase: '2. Early-night service controls',
    intro: 'Before the PMS close, the Night Auditor continues normal reception service while preparing the operational day for closing.',
    items: [
      'Process late check-ins with ID, payment guarantee and PMS update completed immediately',
      'Handle walk-ins only after confirming availability, rate and payment conditions',
      'Review remaining departures and verify that checked-out rooms are correctly closed in PMS',
      'Log guest requests, incidents, room moves and recovery actions in the night report',
      'Coordinate with security or duty manager for unusual noise, safety or guest welfare situations',
    ],
  },
  {
    phase: '3. Credit control and VCC processing',
    intro: 'The financial exposure of the property should be controlled before the system rolls to the next business date.',
    items: [
      'Run the high-balance or credit limit report and identify accounts above threshold',
      'Verify that pre-authorizations cover room, tax and expected extras',
      'Flag expired cards, insufficient guarantees and missing payment methods for the AM shift',
      'Identify prepaid OTA reservations requiring VCC processing after check-in',
      'Charge VCCs for the exact amount required and record the transaction reference in PMS',
      'Document declined VCCs with reason, amount and action required for follow-up',
    ],
  },
  {
    phase: '4. PMS audit run and daily close, 01:00 to 04:00',
    intro: 'The Night Audit run should only begin once outlets are closed, charges are posted and room status issues are understood.',
    items: [
      'Confirm restaurant, bar, spa, parking and room service charges are posted to the correct folios',
      'Review no-shows and apply charges according to the rate plan and property policy',
      'Compare PMS room status with the latest housekeeping report and flag discrepancies',
      'Run the PMS Night Audit according to the property sequence',
      'Confirm that the PMS date has rolled to the new operational day',
      'Save or print the Daily Report, revenue reports, occupancy report and payment reconciliation',
      'Log audit run time, system warnings and any manual corrections required',
    ],
  },
  {
    phase: '5. Next-day preparation',
    intro: 'The morning team should arrive to clear lists, clean folios and a readable operating picture.',
    items: [
      'Prepare arrivals list with VIPs, early check-ins, pre-assigned rooms and special requests highlighted',
      'Prepare departures list with folio preview, payment status and sensitive cases identified',
      'Summarize room availability, out-of-order rooms and room status discrepancies',
      'Prepare breakfast count, wake-up calls, transport requests and guest follow-ups',
      'Write the night report with incidents, complaints, financial issues and operational notes',
    ],
  },
  {
    phase: '6. Shift transition, 06:00 to 07:00',
    intro: 'The Night Audit is complete only when the AM team has received a usable handover, not when the reports have been printed.',
    items: [
      'Brief the AM agent or supervisor verbally before leaving the desk',
      'Hand over VIPs, early arrivals, unresolved complaints, high balances and VCC issues',
      'Confirm wake-up calls, transport, breakfast notes and room moves still pending',
      'Sign the handover or complete the logbook according to property procedure',
      'Leave the desk clean, reports filed and systems ready for the AM shift',
    ],
  },
]

// ─── FR Data ──────────────────────────────────────────────────────────────────

const PHASES_FR: ChecklistSection[] = [
  {
    phase: '1. Prise de shift, 22h45 à 23h15',
    intro: 'Le Night Auditor prend le contrôle du desk avant la clôture de la journée. La priorité est de comprendre ce qui reste ouvert, sensible ou exposé financièrement.',
    items: [
      'Recevoir une passation écrite et verbale du shift PM',
      'Revoir les arrivées encore attendues, late departures, room moves et réclamations clients',
      'Compter le fonds de caisse et documenter tout écart avant de prendre la responsabilité du desk',
      'Se connecter au PMS, au TPE, aux emails, au téléphone et aux outils de reporting nuit',
      'Contrôler la liste des clients in-house, les VIP, les Wake-up calls et les demandes spéciales',
      'Confirmer les contacts d’urgence, le manager de duty et la procédure sécurité de nuit',
    ],
  },
  {
    phase: '2. Contrôles de début de nuit',
    intro: 'Avant la clôture PMS, le Night Auditor continue le service réception tout en préparant la journée opérationnelle à fermer proprement.',
    items: [
      'Traiter les late check-ins avec document d’identité, garantie de paiement et mise à jour PMS immédiate',
      'Accepter les walk-ins seulement après confirmation de la disponibilité, du tarif et des conditions de paiement',
      'Revoir les départs restants et vérifier que les chambres check-out sont bien clôturées dans le PMS',
      'Consigner demandes clients, incidents, room moves et actions de recovery dans le Night Report',
      'Coordonner avec la sécurité ou le manager de duty en cas de bruit, situation sensible ou vigilance client',
    ],
  },
  {
    phase: '3. Contrôle crédit et traitement des VCC',
    intro: 'L’exposition financière de l’établissement doit être contrôlée avant le basculement de la date PMS.',
    items: [
      'Sortir le rapport soldes élevés ou credit limit et identifier les comptes au-dessus du seuil',
      'Vérifier que les Pre-Authorizations couvrent chambre, taxes et extras prévisibles',
      'Signaler au shift AM les cartes expirées, garanties insuffisantes et moyens de paiement manquants',
      'Identifier les réservations OTA prepaid qui nécessitent un traitement VCC après check-in',
      'Débiter les VCC au montant exact requis et enregistrer la référence de transaction dans le PMS',
      'Documenter les VCC refusées avec raison, montant et action attendue pour le suivi',
    ],
  },
  {
    phase: '4. Lancement du Night Audit et clôture PMS, 01h00 à 04h00',
    intro: 'Le lancement du Night Audit commence seulement lorsque les points de vente sont clôturés, les charges postées et les écarts de statut chambre identifiés.',
    items: [
      'Confirmer que restaurant, bar, spa, parking et room service ont posté les charges sur les bons folios',
      'Revoir les no-shows et appliquer les frais selon le plan tarifaire et la politique de l’établissement',
      'Comparer les statuts chambres PMS avec le dernier rapport housekeeping et signaler les écarts',
      'Lancer le Night Audit dans le PMS selon la séquence propre à l’établissement',
      'Vérifier que la date PMS a bien basculé sur la nouvelle journée opérationnelle',
      'Sauvegarder ou imprimer Daily Report, rapports revenu, occupation et réconciliation paiement',
      'Consigner l’heure de clôture, les alertes système et les corrections manuelles nécessaires',
    ],
  },
  {
    phase: '5. Préparation de la journée suivante',
    intro: 'L’équipe du matin doit retrouver des listes propres, des folios lisibles et une vision claire des priorités opérationnelles.',
    items: [
      'Préparer la liste des arrivées avec VIP, early check-ins, chambres pré-attribuées et demandes spéciales en évidence',
      'Préparer la liste des départs avec folio pré-vérifié, statut paiement et dossiers sensibles identifiés',
      'Résumer disponibilité chambres, chambres hors service et écarts de statut chambre',
      'Préparer prévisions petit-déjeuner, Wake-up calls, demandes transport et suivis clients',
      'Rédiger le Night Report avec incidents, réclamations, points financiers et notes opérationnelles',
    ],
  },
  {
    phase: '6. Transition de shift, 06h00 à 07h00',
    intro: 'Le Night Audit est terminé seulement lorsque l’équipe AM reçoit une passation exploitable, pas uniquement lorsque les rapports sont imprimés.',
    items: [
      'Faire une passation verbale au réceptionniste ou superviseur AM avant de quitter le desk',
      'Transmettre VIP, early arrivals, réclamations ouvertes, soldes élevés et incidents VCC',
      'Confirmer Wake-up calls, transports, informations petit-déjeuner et room moves encore en attente',
      'Signer la passation ou compléter la main courante selon la procédure de l’établissement',
      'Laisser le desk propre, les rapports classés et les systèmes prêts pour le shift AM',
    ],
  },
]

const FAQ_EN: FAQItem[] = [
  {
    q: 'What is the hotel night audit process?',
    a: 'The hotel night audit is the daily closing procedure that reconciles all financial transactions, confirms room statuses, generates management reports and rolls the PMS to the next operational date. It is typically run between midnight and 4am by a night auditor who also handles late arrivals and overnight security. The sequence has four phases: pre-closing checks, system run, active night duties and morning pack preparation.',
  },
  {
    q: 'What does a hotel night auditor do?',
    a: 'A hotel night auditor closes the financial day, processes no-shows, reconciles F&B outlet postings, runs the PMS audit, handles any overnight guest requests, completes security rounds and prepares the morning report pack for the incoming shift. The role combines front desk, basic accounting and duty manager responsibilities. It is one of the least documented roles in most hotels despite being operationally critical.',
  },
  {
    q: 'What reports does the hotel night audit produce?',
    a: 'The standard night audit report package includes: daily revenue report (rooms, F&B, total), occupancy report, arrivals and departures lists for the next day, high-balance report and a night audit summary signed by the auditor. Additional reports vary by property and PMS. The morning pack should be ready before the first front desk agent arrives.',
  },
  {
    q: 'What happens if the hotel night audit is not run?',
    a: 'If the PMS night audit is not run, the system date does not roll and the next day\'s operations run on the previous date. Room charges are not posted, arrivals cannot be properly processed and revenue figures are misaligned. Most modern PMS systems flag a missed audit, but recovery always involves manual corrections that take significantly longer than running the audit correctly in the first place.',
  },
  {
    q: 'How long does the hotel night audit take?',
    a: 'The system run itself typically takes 5 to 15 minutes depending on the PMS and property size. The full night audit procedure, including pre-closing checks, the system run and morning pack preparation, takes between 60 and 90 minutes for a full-service property. Night auditors handle security rounds and guest requests in between.',
  },
]

const FAQ_FR: FAQItem[] = [
  {
    q: 'En quoi consiste le Night Audit dans un hôtel ?',
    a: 'Le Night Audit est la clôture journalière de l’hôtel. Le Night Auditor ferme la journée PMS, réconcilie paiements et folios, contrôle les Pre-Authorizations, traite les VCC, vérifie la caisse, prépare les rapports et organise la passation du Shift AM. Dans beaucoup d’établissements, ce rôle est tenu par le réceptionniste de nuit.',
  },
  {
    q: 'Quel est le rôle du Night Auditor ?',
    a: 'Le Night Auditor fait le pont entre la journée comptable qui se termine et celle qui commence. Il combine réception, contrôle financier, rapports, sécurité et service client : late check-ins, early check-outs, Walk-ins, Wake-up calls, rondes, Daily Report, Night Report, Pick-up Report et Shift Handover.',
  },
  {
    q: 'Quels rapports le Night Audit produit-il ?',
    a: 'Le pack standard comprend généralement le Daily Report, le Night Report, le Pick-up Report, le rapport d’occupation, les listes arrivées/départs, la liste VIP, le rapport soldes élevés, le rapport paiements et les écarts à suivre. Le contenu exact dépend du PMS et des standards de l’établissement.',
  },
  {
    q: 'Que se passe-t-il si la clôture PMS n’est pas lancée ?',
    a: 'Si la clôture PMS n’est pas lancée, la date opérationnelle ne bascule pas correctement. Les nuitées peuvent ne pas être postées, les arrivées du jour peuvent être bloquées ou incohérentes, et les chiffres de revenu deviennent difficiles à réconcilier. La correction passe souvent par des ajustements manuels chronophages.',
  },
  {
    q: 'Combien de temps prend un Night Audit ?',
    a: 'Le lancement système prend souvent 5 à 15 minutes selon le PMS, mais la procédure complète prend plutôt 60 à 90 minutes dans un hôtel avec services complets. Ce temps inclut les contrôles avant clôture, le lancement PMS, les VCC, la caisse, les rapports et la préparation du Shift Handover.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function HotelNightAuditChecklistPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'
  const phases = isEN ? PHASES_EN : PHASES_FR
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-white">

        {/* Hero */}
        <section className="bg-[#1A2E44] text-white px-6 pt-36 md:pt-40 pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-[#0056D2] text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
              {isEN ? 'Front Office Night Operations' : 'Réception Service de nuit'}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {isEN
                ? 'Hotel Night Audit Checklist: What to Close, Reconcile and Hand Over'
                : 'Checklist Night Audit : clôture PMS, VCC, caisse et passation'}
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              {isEN
                ? 'A printable Night Audit checklist for shift takeover, credit control, VCC processing, PMS close, next-day preparation and AM handover. Adapted from the LuxOps Front Office Playbook.'
                : 'Une checklist Night Audit imprimable pour la prise de shift, le contrôle crédit, les VCC, la clôture PMS, la préparation AM et la passation. Adaptée du Playbook Front Office LuxOps.'}
            </p>
            <TrackedLink
              href={isEN ? '/downloads/checklists/en/night-audit-checklist.pdf' : '/downloads/checklists/fr/checklist-night-audit.pdf'}
              download
              eventName="free_checklist_download_clicked"
              eventProperties={{
                source_page: "/" + locale + "/hotel-night-audit-checklist",
                checklist_name: isEN ? 'night_audit_checklist' : 'checklist_night_audit',
                department: 'front_office',
                locale,
                placement: 'hero',
              }}
              className="inline-block bg-white text-[#1A2E44] px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              {isEN ? 'Download a free printable PDF copy' : 'Télécharger le PDF gratuit à imprimer'}
            </TrackedLink>
          </div>
        </section>

        {/* Product paths */}
        <section className="py-10 px-6 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#003d9b] mb-3">
              {isEN ? 'Front Office tools' : 'Outils réception'}
            </p>
            <h2 className="text-2xl font-bold text-[#1A2E44] mb-3">
              {isEN ? 'Need practical night audit tools?' : 'Besoin d’outils pratiques pour le Night Audit ?'}
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto mb-7">
              {isEN
                ? 'Start with the Front Office Starter Pack for daily checklists and handovers, or use the full Front Office Playbook for the complete SOP reference.'
                : 'Commencez avec le Starter Pack Front Office pour les checklists et passations du quotidien, ou utilisez le Playbook Front Office complet pour toute la référence SOP.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <TrackedLink
                href={`/${locale}/playbooks/fo-starter-pack`}
                eventName="starter_pack_cta_clicked"
                eventProperties={{
                  source_page: `/${locale}/hotel-night-audit-checklist`,
                  placement: 'product_paths',
                  product: 'front_office_starter_pack',
                  cta_label: isEN ? 'View the Front Office Starter Pack' : 'Voir le Starter Pack Front Office',
                }}
                className="inline-flex min-w-[240px] items-center justify-center gap-2 rounded-lg bg-[#003d9b] px-5 py-3 text-sm font-semibold text-white hover:bg-[#002d7a] transition-colors"
              >
                {isEN ? 'View the Front Office Starter Pack' : 'Voir le Starter Pack Front Office'} <ArrowRight size={16} />
              </TrackedLink>
              <TrackedLink
                href={`/${locale}/playbooks/fo`}
                eventName="playbook_cta_clicked"
                eventProperties={{
                  source_page: `/${locale}/hotel-night-audit-checklist`,
                  placement: 'product_paths',
                  product: 'front_office_playbook',
                  cta_label: isEN ? 'View the Front Office Playbook' : 'Voir le Playbook Front Office',
                }}
                className="inline-flex min-w-[240px] items-center justify-center gap-2 rounded-lg border border-[#003d9b] px-5 py-3 text-sm font-semibold text-[#003d9b] hover:bg-[#eef4ff] transition-colors"
              >
                {isEN ? 'View the Front Office Playbook' : 'Voir le Playbook Front Office'} <ArrowRight size={16} />
              </TrackedLink>
            </div>
          </div>
        </section>

        {/* Checklist hub link */}
        <section
          className="py-8 border-b"
          style={{ backgroundColor: '#eef4ff', borderColor: 'rgba(195,198,214,0.3)' }}
        >
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-sm text-[#4f6074] leading-relaxed">
              {isEN
                ? 'Need more printable resources? View the full checklist hub for front office, housekeeping, restaurant opening and room service.'
                : 'Besoin d’autres ressources prêtes à imprimer ? Consultez le hub complet des checklists : réception, housekeeping, ouverture restaurant et room service.'}{' '}
              <Link href={isEN ? '/en/free-hotel-checklists' : '/fr/checklists-hotel-gratuites'} className="font-semibold text-[#003d9b] hover:underline">
                {isEN ? 'View all free checklists' : 'Voir toutes les checklists gratuites'}
              </Link>
            </p>
          </div>
        </section>

        {/* Why night audit matters */}
        <section className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-4">
            {isEN
              ? 'Why the night audit is the most under-documented shift'
              : 'Pourquoi le Night Audit est souvent le shift le moins documenté'}
          </h2>
          {isEN ? (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                The night audit closes the operational day. It reconciles every financial transaction, confirms every
                room status, generates the reports the morning team runs on and creates the permanent record for the
                date. When it is done correctly, nothing from the previous day carries over incorrectly into the next.
                When it is done from memory, small errors compound across nights until a discrepancy becomes impossible
                to trace.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Most front office SOP documents cover check-in and check-out in detail. The night audit section is
                often reduced to a paragraph or a list of system clicks. This checklist provides the complete four-phase
                sequence that luxury and independent properties use to close, reconcile and hand over correctly every
                night.
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                Le Night Audit clôture la journée comptable et prépare la suivante. Le Night Auditor, souvent
                réceptionniste de nuit selon les établissements, réconcilie paiements et folios, vérifie les
                Pre-Authorizations, traite les VCC, contrôle la caisse, prépare les rapports et transmet les points
                sensibles au Shift AM. Quand cette routine est faite de mémoire, les écarts deviennent vite difficiles
                à retrouver.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Beaucoup de SOP réception détaillent le check-in et le check-out, mais laissent le Night Audit en
                simple liste de clics PMS. C’est une erreur : le Night Shift porte à la fois le contrôle financier, la
                sécurité, les arrivées tardives, les Wake-up calls, les no-shows, les VCC et la passation du matin.
                Cette checklist remet la procédure dans l’ordre hôtelier réel.
              </p>
            </>
          )}
        </section>

        {/* Phase checklists */}
        {phases.map((phase, pi) => (
          <section key={pi} className="max-w-3xl mx-auto px-6 pb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#1A2E44] mb-2">{phase.phase}</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{phase.intro}</p>
            </div>
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <ul className="divide-y divide-gray-100">
                {phase.items.map((item, ii) => (
                  <li key={ii} className="flex items-start gap-3 px-5 py-3 text-sm text-gray-700">
                    <span className="mt-0.5 w-4 h-4 rounded border-2 border-gray-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        {/* How night audit connects to morning */}
        <section className="py-14 px-6 bg-gray-50 border-t border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1A2E44] mb-4">
              {isEN
                ? 'How the night audit connects to morning operations'
                : 'Comment le Night Audit conditionne le Shift AM'}
            </h2>
            {isEN ? (
              <>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The morning front desk team runs entirely on what the night auditor prepared. The arrivals list, the
                  room availability summary, the high-balance flags, the no-show log: none of this is usable for the
                  incoming team unless the night auditor produced it correctly and handed it over in person.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The night audit is also the last moment when errors from the previous day can be corrected before
                  they become permanent financial records. This is why the sequence matters: pre-closing checks first,
                  system run second, active duties during the night, morning pack before handover. Reversing any of
                  these creates recoverable but time-consuming errors.
                </p>
              </>
            ) : (
              <>
                <p className="text-gray-600 leading-relaxed mb-4">
                  L&apos;équipe AM dépend directement de ce que le Night Auditor a préparé. Les arrivées, les départs,
                  les VIP, les soldes élevés, les no-shows, les VCC non résolues, les écarts caisse et les réclamations
                  actives doivent être lisibles dès la prise de poste. Une passation vague oblige le réceptionniste du
                  matin à reconstruire la nuit au lieu de servir les clients.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  La logique LuxOps est simple : contrôles avant clôture, lancement PMS, contrôle crédit et VCC, caisse,
                  préparation des départs et arrivées, puis Shift Handover. Inverser cette séquence crée des erreurs
                  rattrapables, mais coûteuses en temps et en crédibilité.
                </p>
              </>
            )}
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
                href: `/${locale}/hotel-front-office-checklist`,
                title: isEN ? 'Hotel Front Office Checklist' : 'Checklist réception',
                desc: isEN ? 'Shift opening, check-in, billing and handover checklists' : 'Ouverture, check-in, facturation et passation de service',
              },
              {
                href: `/${locale}/front-office-sop`,
                title: isEN ? 'Front Office SOP Guide' : 'Guide SOP Réception',
                desc: isEN ? 'Complete standard operating procedures for hotel reception' : 'Procédures opérationnelles complètes pour la réception',
              },
              {
                href: `/${locale}/hotel-sop`,
                title: isEN ? 'Hotel SOP Templates' : 'Modèles de SOP',
                desc: isEN ? 'SOP system for all four hotel departments' : 'Système de procédures pour les quatre départements hôteliers',
              },
              {
                href: `/${locale}/hotel-audit-checklist`,
                title: isEN ? 'Hotel Quality Audit Checklist' : 'Checklist audit qualité',
                desc: isEN ? '28-criteria scoring grid across all departments' : 'Grille de notation 28 critères sur tous les départements',
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
                ? 'The LuxOps Front Office Playbook covers every shift: opening, day operations, night audit and handover. 12 chapters, PDF and PowerPoint, EN and FR.'
                : 'Le Playbook Réception LuxOps couvre chaque shift : ouverture, opérations de jour, Night Audit, contrôle crédit, VCC, caisse et passation. 12 chapitres, PDF et PowerPoint, EN et FR.'}
            </p>
            <TrackedLink
              href={`/${locale}/playbooks/fo`}
              eventName="playbook_cta_clicked"
              eventProperties={{
                source_page: `/${locale}/hotel-night-audit-checklist`,
                placement: 'final_cta',
                product: 'front_office_playbook',
                cta_label: isEN ? 'View Front Office Playbook' : 'Voir le Playbook Réception',
              }}
              className="inline-block bg-white text-[#1A2E44] px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              {isEN ? 'View Front Office Playbook' : 'Voir le Playbook Réception'}
            </TrackedLink>
          </div>
        </section>

      </main>
    </>
  )
}
