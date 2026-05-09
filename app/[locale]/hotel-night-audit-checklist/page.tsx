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
      : 'Checklist Night Audit Hôtel | Clôture PMS, VCC, caisse et passation | LuxOps',
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
    phase: 'Phase 1: Pre-closing checks (before system run)',
    intro: 'Complete all pre-closing tasks before initiating the PMS night audit run. The system run is a one-way action: errors not caught before it require manual corrections the following day.',
    items: [
      'Confirm all departures are checked out in PMS: no occupied rooms with a departure date of today',
      'Review late checkouts still in the building and confirm billing hold is active on each',
      'Post any room charges not yet applied: minibar reports, room service, telephone, parking',
      'Verify all F&B outlet closings: confirm outlet charges transferred and posted to guest folios',
      'Review disputed charges flagged during the day and note their status for the morning manager',
      'Pull no-show list from PMS: reservations not checked in and not cancelled',
      'Apply no-show charge per rate plan policy for each confirmed no-show',
      'Send no-show confirmation to guest email where required by rate plan',
      'Log each no-show: reservation number, charge applied, rate plan reference',
      'Compare PMS room status report against the last housekeeping supervisor floor report',
      'Flag any discrepancies: PMS shows vacant-clean, housekeeping shows occupied or dirty',
      'Confirm VIP arrivals for next day have correct room assignments and show clean in PMS',
    ],
  },
  {
    phase: 'Phase 2: System run and daily closing',
    intro: 'Run the night audit only after all pre-closing checks are complete and all outlets are closed. Confirm the sequence with your PMS provider if this is your first time running on a new system.',
    items: [
      'Confirm all outlet reports are closed before initiating the audit run',
      'Run the night audit (system close) in PMS per the property-specific sequence',
      'Confirm system date has rolled to the new operational date',
      'Print or save the night audit report summary: verify total revenue, room revenue and occupancy figures',
      'Run the daily report package: arrivals list for today, departures list for today, VIP list, high-balance report',
      'Generate and file the night revenue report for accounting',
      'Confirm backup or export completed if required by property IT policy',
      'Log audit run time and any system errors encountered during the run',
    ],
  },
  {
    phase: 'Phase 3: Active night duties',
    intro: 'These tasks run in parallel with the night shift. Log all activities and guest interactions in the duty manager night report.',
    items: [
      'Monitor front entrance and respond to late arrivals per the late check-in protocol',
      'Process any remaining late check-ins from the arrivals list',
      'Run hourly security rounds per property protocol and log time and findings each time',
      'Respond to in-room requests: log in PMS, action within 15 minutes or escalate to relevant department',
      'Monitor fire panel, CCTV and any security alerts per the emergency protocol',
      'Flag any maintenance issues discovered during rounds for the morning engineering briefing',
      'Review high-balance alerts: contact guests with balance above threshold per property policy',
      'Log all incidents and guest interactions in the duty manager night report',
    ],
  },
  {
    phase: 'Phase 4: Morning pack and handover',
    intro: 'The morning team runs entirely on what the night auditor prepared. Complete this phase before the first morning agent arrives, not after.',
    items: [
      'Print arrivals list for today and highlight VIPs, early check-ins and pre-assigned rooms',
      'Print departure list with folio preview for each checked-in guest',
      'Prepare room availability summary for the morning front desk team',
      'Write duty manager night report: incidents, unusual events, follow-up items, occupancy summary',
      'Confirm breakfast count for F&B and pass to kitchen if applicable',
      'Brief the incoming morning agent in person: do not leave without a verbal handover',
      'Log handover completed in the duty manager logbook with time and signature',
    ],
  },
]

// ─── FR Data ──────────────────────────────────────────────────────────────────

const PHASES_FR: ChecklistSection[] = [
  {
    phase: 'Phase 1 : Contrôles avant clôture PMS',
    intro: 'Le Night Audit commence avant le lancement de la clôture. Le Night Auditor doit sécuriser les départs, les folios, les points de vente, les no-shows, les statuts chambres et les comptes clients avant de basculer la date PMS.',
    items: [
      'Vérifier que tous les départs du jour sont bien passés en Check-out dans le PMS',
      'Contrôler les Late Check-out encore présents et vérifier que la garantie de paiement couvre les extras',
      'Vérifier que toutes les charges sont postées sur les bons folios : F&B, minibar, spa, parking, téléphone, Room Service',
      'S’assurer que les points de vente F&B sont clôturés et que les additions ont bien été transférées vers les folios clients',
      'Relire les litiges de facturation ou ajustements du jour et préparer une note claire pour le Shift AM',
      'Sortir la liste des no-shows : réservations non arrivées et non annulées',
      'Appliquer les frais de no-show selon la politique tarifaire et documenter réservation, montant et règle appliquée',
      'Comparer les statuts chambres PMS avec le dernier état housekeeping : sale, propre, inspectée, occupée',
      'Identifier les écarts de statut chambre et les mettre en passation pour la réception et la gouvernante',
      'Contrôler les arrivées VIP du lendemain : attribution chambre, demandes spéciales, fiche d’enregistrement et Pre-Authorization',
    ],
  },
  {
    phase: 'Phase 2 : Lancement du Night Audit et clôture journalière',
    intro: 'La clôture PMS ne se lance qu’une fois les contrôles terminés. Selon le PMS, cette étape bascule la date opérationnelle, poste les nuitées, ferme la journée comptable et génère les rapports nécessaires au management.',
    items: [
      'Confirmer que les outlets et terminaux de paiement concernés sont clôturés avant lancement',
      'Lancer le Night Audit dans le PMS selon la procédure propre à l’établissement',
      'Vérifier que la date PMS a bien basculé sur la nouvelle journée opérationnelle',
      'Sauvegarder ou imprimer le Daily Report : chiffre d’affaires total, room revenue, occupation, ADR, RevPAR',
      'Préparer le Night Report avec les incidents, écarts, demandes clients et points de suivi',
      'Générer le Pick-up Report et les listes du jour : arrivées, départs, VIP, soldes élevés',
      'Consigner l’heure de clôture, les éventuels messages PMS et toute anomalie système',
      'Classer les rapports selon la procédure comptabilité et direction de l’établissement',
    ],
  },
  {
    phase: 'Phase 3 : Contrôle crédit, VCC, caisse et opérations de nuit',
    intro: 'Le Night Shift ne se limite pas à la clôture PMS. Le Night Auditor protège aussi l’exposition financière de l’hôtel, traite les VCC, contrôle les espèces et assure la continuité de service pendant la nuit.',
    items: [
      'Lancer le rapport de limite de crédit et identifier les comptes en vert, orange ou rouge selon le seuil de l’établissement',
      'Vérifier que les Pre-Authorizations couvrent le séjour restant et les extras prévisibles',
      'Signaler au Shift AM les cartes expirant pendant le séjour ou les autorisations insuffisantes',
      'Identifier les réservations OTA prepaid avec VCC à traiter après Check-in',
      'Débiter les VCC au montant exact indiqué par l’OTA et enregistrer la référence de transaction dans le PMS',
      'Documenter les VCC refusées : montant incorrect, activation trop tôt, carte déjà débitée, carte expirée ou incident technique',
      'Comparer les reçus TPE/POS avec le rapport de paiements PMS et corriger les modes de paiement mal saisis',
      'Vérifier le fonds de caisse avec le réceptionniste PM ; tout écart doit être documenté',
      'Gérer les arrivées tardives, Walk-ins, Wake-up calls, demandes clients et rondes de sécurité selon la main courante',
    ],
  },
  {
    phase: 'Phase 4 : Préparation AM et Shift Handover',
    intro: 'Le travail du Night Auditor prépare directement la réussite du Shift AM. Le réceptionniste du matin doit retrouver des départs préparés, des arrivées lisibles, des folios propres et une passation exploitable.',
    items: [
      'Préparer les départs : ETD, folios pré-vérifiés, charges en attente, facturation directe et split bills',
      'Identifier les départs sensibles : litige tarifaire, solde élevé, paiement manquant, client avec réclamation active',
      'Imprimer ou préparer les fiches d’enregistrement des arrivées du jour avec montant de Pre-Authorization',
      'Organiser les arrivées par heure prévue, avec early check-ins et VIP en priorité',
      'Préparer la liste VIP et les demandes spéciales pour Guest Relations, Housekeeping et F&B',
      'Transmettre les prévisions petit-déjeuner ou informations F&B utiles au service concerné',
      'Rédiger le Night Report : occupation, incidents, sécurité, paiements, VCC, no-shows et points à suivre',
      'Faire un Shift Handover verbal avec l’équipe AM et compléter la main courante avec heure et signature',
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
        <section className="bg-[#1A2E44] text-white px-6 pt-32 pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-[#0056D2] text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
              {isEN ? 'Front Office Night Operations' : 'Réception Service de nuit'}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {isEN
                ? 'Hotel Night Audit Checklist: What to Close, Reconcile and Hand Over'
                : 'Checklist Night Audit Hôtel : clôture PMS, VCC, caisse et passation'}
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              {isEN
                ? 'A complete step-by-step night audit procedure. Pre-closing checks, system run, active night duties and morning pack. Free to download.'
                : 'Une checklist terrain pour réceptionniste de nuit et Night Auditor : contrôles avant clôture, Pre-Authorizations, VCC, caisse, rapports et Shift Handover.'}
            </p>
            <Link
              href={`/${locale}/front-office-sop`}
              className="inline-block bg-white text-[#1A2E44] px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              {isEN ? 'View Front Office SOP Guide' : 'Voir le guide SOP réception'}
            </Link>
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
                  ? 'The full playbook includes the complete night audit SOP and all shift management procedures.'
                  : 'Le playbook complet inclut la SOP Night Audit, la gestion des shifts, les check-ins tardifs, les départs, les VCC et les passations.'}
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
                title: isEN ? 'Hotel Front Office Checklist' : 'Checklist Réception Hôtel',
                desc: isEN ? 'Shift opening, check-in, billing and handover checklists' : 'Ouverture, check-in, facturation et passation de service',
              },
              {
                href: `/${locale}/front-office-sop`,
                title: isEN ? 'Front Office SOP Guide' : 'Guide SOP Réception',
                desc: isEN ? 'Complete standard operating procedures for hotel reception' : 'Procédures opérationnelles complètes pour la réception',
              },
              {
                href: `/${locale}/hotel-sop`,
                title: isEN ? 'Hotel SOP Templates' : 'Modèles de SOP Hôtel',
                desc: isEN ? 'SOP system for all four hotel departments' : 'Système de procédures pour les quatre départements hôteliers',
              },
              {
                href: `/${locale}/hotel-audit-checklist`,
                title: isEN ? 'Hotel Quality Audit Checklist' : 'Checklist Audit Qualité Hôtel',
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
