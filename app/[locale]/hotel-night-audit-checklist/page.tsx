import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel Night Audit Checklist — Step-by-Step Night Audit Procedure | LuxOps'
      : 'Checklist Audit de Nuit Hôtel — Procédure complète pour l\'auditeur de nuit | LuxOps',
    description: isEN
      ? 'Free hotel night audit checklist: pre-closing checks, system reconciliation, no-show management, report generation and morning handover. Built for hotel night auditors.'
      : 'Checklist audit de nuit hôtel gratuite : contrôles pré-fermeture, réconciliation système, gestion des no-shows, génération des rapports et passation matin.',
    keywords: isEN
      ? 'hotel night audit checklist, night audit procedure hotel, hotel night audit steps, night auditor hotel checklist, night audit process hotel, hotel night audit report'
      : 'checklist audit de nuit hôtel, procédure audit de nuit hôtel, auditeur de nuit hôtel, audit nuit hôtel checklist, clôture journalière hôtel',
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
    phase: 'Phase 1 : Contrôles pré-fermeture (avant le lancement du système)',
    intro: 'Complétez toutes les tâches pré-fermeture avant de lancer la clôture PMS. La clôture est une action à sens unique : les erreurs non corrigées avant nécessiteront des corrections manuelles le lendemain.',
    items: [
      'Vérifier que tous les départs sont check-out dans le PMS : aucune chambre occupée avec une date de départ à aujourd\'hui',
      'Contrôler les late checkout encore présents dans l\'établissement et confirmer que la retenue de facturation est active',
      'Poster toutes les charges non encore appliquées : minibar, room service, téléphone, parking',
      'Vérifier la clôture de tous les points de vente F&B : confirmer que les charges ont été transférées et postées sur les folios clients',
      'Examiner les litiges de facturation signalés dans la journée et noter leur statut pour le directeur du matin',
      'Extraire la liste des no-shows du PMS : réservations non arrivées et non annulées',
      'Appliquer les frais de no-show selon la politique tarifaire pour chaque no-show confirmé',
      'Envoyer la confirmation de no-show par email au client si le plan tarifaire l\'exige',
      'Consigner chaque no-show : numéro de réservation, charge appliquée, référence du plan tarifaire',
      'Comparer le rapport de statuts chambres PMS avec le dernier rapport de la gouvernante d\'étage',
      'Signaler les écarts : PMS affiche vacant-propre, housekeeping affiche occupé ou sale',
      'Confirmer que les arrivées VIP du lendemain ont les bonnes attributions de chambres et apparaissent propres dans le PMS',
    ],
  },
  {
    phase: 'Phase 2 : Clôture système et audit de nuit',
    intro: 'Lancer l\'audit de nuit uniquement après que tous les contrôles pré-fermeture sont terminés et tous les points de vente sont clôturés. Vérifier la séquence avec votre fournisseur PMS si c\'est la première clôture sur un nouveau système.',
    items: [
      'Confirmer que tous les rapports de points de vente sont clôturés avant de lancer la clôture',
      'Lancer l\'audit de nuit (clôture système) dans le PMS selon la séquence propre à l\'établissement',
      'Confirmer que la date système a basculé sur la nouvelle date opérationnelle',
      'Imprimer ou sauvegarder le résumé du rapport d\'audit de nuit : vérifier les chiffres de CA total, CA chambres et taux d\'occupation',
      'Générer le pack de rapports journaliers : liste des arrivées du jour, liste des départs, liste VIP, rapport soldes élevés',
      'Générer et classer le rapport de revenus de nuit pour la comptabilité',
      'Confirmer la sauvegarde ou l\'export si requis par la politique informatique de l\'établissement',
      'Consigner l\'heure de clôture et toute erreur système rencontrée pendant la clôture',
    ],
  },
  {
    phase: 'Phase 3 : Tâches de nuit en cours de service',
    intro: 'Ces tâches s\'effectuent en parallèle du service de nuit. Consigner toutes les activités et interactions clients dans le rapport de nuit du directeur de service.',
    items: [
      'Surveiller l\'entrée et gérer les arrivées tardives selon le protocole late check-in',
      'Traiter les check-ins en attente restant sur la liste des arrivées',
      'Effectuer les rondes de sécurité horaires selon le protocole de l\'établissement et consigner l\'heure et les observations à chaque passage',
      'Répondre aux demandes en chambre : consigner dans le PMS, traiter en moins de 15 minutes ou escalader au département concerné',
      'Surveiller le tableau incendie, la CCTV et toutes les alarmes de sécurité selon le protocole d\'urgence',
      'Signaler les pannes de maintenance découvertes pendant les rondes pour le brief technique du matin',
      'Examiner les alertes soldes élevés : contacter les clients dont le solde dépasse le seuil selon la politique de l\'établissement',
      'Consigner tous les incidents et interactions clients dans le rapport de nuit du directeur de service',
    ],
  },
  {
    phase: 'Phase 4 : Préparation du pack matin et passation',
    intro: 'L\'équipe du matin fonctionne entièrement sur la base de ce que l\'auditeur de nuit a préparé. Terminer cette phase avant l\'arrivée du premier réceptionniste du matin, pas après.',
    items: [
      'Imprimer la liste des arrivées du jour et surligner les VIP, early check-ins et chambres pré-attribuées',
      'Imprimer la liste des départs avec aperçu de facture pour chaque client en séjour',
      'Préparer le résumé de disponibilité des chambres pour l\'équipe de réception du matin',
      'Rédiger le rapport de nuit du directeur de service : incidents, événements inhabituels, points de suivi, résumé d\'occupation',
      'Confirmer le nombre de petits-déjeuners pour le F&B et transmettre à la cuisine si applicable',
      'Briefer le réceptionniste du matin en personne : ne pas quitter le poste sans passation verbale',
      'Consigner la passation dans le cahier de main courante avec l\'heure et la signature',
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
    q: 'En quoi consiste l\'audit de nuit dans un hôtel ?',
    a: 'L\'audit de nuit hôtelier est la procédure de clôture journalière qui réconcilie toutes les transactions financières, confirme les statuts des chambres, génère les rapports de direction et bascule le PMS sur la nouvelle date opérationnelle. Il est généralement réalisé entre minuit et 4h du matin par un auditeur de nuit qui gère également les arrivées tardives et la sécurité nocturne. La procédure se déroule en quatre phases : contrôles pré-fermeture, clôture système, tâches de nuit en cours et préparation du pack matin.',
  },
  {
    q: 'Quel est le rôle de l\'auditeur de nuit dans un hôtel ?',
    a: 'L\'auditeur de nuit réalise la clôture journalière financière, traite les no-shows, réconcilie les postings des points de vente F&B, lance la clôture PMS, gère les demandes clients nocturnes, effectue les rondes de sécurité et prépare le pack de rapports pour l\'équipe du matin. Le poste combine les responsabilités de la réception, d\'une comptabilité de base et du directeur de service. C\'est l\'un des rôles les moins documentés dans la plupart des hôtels malgré son importance opérationnelle.',
  },
  {
    q: 'Quels rapports l\'audit de nuit produit-il ?',
    a: 'Le pack standard de rapports d\'audit de nuit comprend : rapport de revenus journalier (chambres, F&B, total), rapport d\'occupation, listes d\'arrivées et départs du lendemain, rapport des soldes élevés et résumé d\'audit de nuit signé par l\'auditeur. Des rapports supplémentaires varient selon l\'établissement et le PMS. Le pack matin doit être prêt avant l\'arrivée du premier réceptionniste.',
  },
  {
    q: 'Que se passe-t-il si l\'audit de nuit n\'est pas réalisé ?',
    a: 'Si la clôture PMS n\'est pas réalisée, la date système ne bascule pas et les opérations du lendemain tournent sur la date précédente. Les charges de chambres ne sont pas postées, les arrivées ne peuvent pas être correctement traitées et les chiffres de revenus sont décalés. La plupart des PMS modernes signalent une clôture manquée, mais la correction nécessite toujours des ajustements manuels qui prennent beaucoup plus de temps que de réaliser la clôture correctement.',
  },
  {
    q: 'Combien de temps dure l\'audit de nuit dans un hôtel ?',
    a: 'La clôture système elle-même prend généralement 5 à 15 minutes selon le PMS et la taille de l\'établissement. La procédure complète d\'audit de nuit, comprenant les contrôles pré-fermeture, la clôture système et la préparation du pack matin, prend entre 60 et 90 minutes pour un hôtel avec services complets. L\'auditeur de nuit gère les rondes de sécurité et les demandes clients dans les intervalles.',
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
        <section className="bg-[#1A2E44] text-white py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-[#0056D2] text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
              {isEN ? 'Front Office — Night Operations' : 'Réception — Service de nuit'}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {isEN
                ? 'Hotel Night Audit Checklist: What to Close, Reconcile and Hand Over'
                : 'Checklist Audit de Nuit Hôtel : ce qu\'il faut clôturer, réconcilier et transmettre'}
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              {isEN
                ? 'A complete step-by-step night audit procedure. Pre-closing checks, system run, active night duties and morning pack. Free to download.'
                : 'Une procédure complète d\'audit de nuit étape par étape. Contrôles pré-fermeture, clôture système, tâches nocturnes et pack matin. Gratuit.'}
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
                  ? 'The full playbook includes the complete night audit SOP and all shift management procedures.'
                  : 'Le playbook complet inclut la procédure d\'audit de nuit complète et toutes les procédures de gestion des services.'}
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
              : 'Pourquoi l\'audit de nuit est le service le moins documenté'}
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
                L&apos;audit de nuit clôture la journée opérationnelle. Il réconcilie chaque transaction financière,
                confirme chaque statut de chambre, génère les rapports sur lesquels l&apos;équipe du matin va travailler
                et crée l&apos;enregistrement définitif de la journée. Quand il est bien réalisé, rien de la journée
                précédente ne se reporte incorrectement sur la suivante. Quand il est fait de mémoire, de petites
                erreurs s&apos;accumulent nuit après nuit jusqu&apos;à ce qu&apos;un écart devienne impossible à
                retrouver.
              </p>
              <p className="text-gray-600 leading-relaxed">
                La plupart des documents SOP réception couvrent le check-in et le check-out en détail. La section audit
                de nuit se résume souvent à un paragraphe ou à une liste de clics système. Cette checklist fournit la
                séquence complète en quatre phases que les établissements de luxe et indépendants utilisent pour
                clôturer, réconcilier et transmettre correctement chaque nuit.
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
                : 'Comment l\'audit de nuit conditionne les opérations du matin'}
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
                  L&apos;équipe de réception du matin fonctionne entièrement sur la base de ce que l&apos;auditeur de
                  nuit a préparé. La liste des arrivées, le résumé de disponibilité des chambres, les alertes soldes
                  élevés, le registre des no-shows : rien de tout cela n&apos;est exploitable par l&apos;équipe
                  entrante si l&apos;auditeur de nuit ne l&apos;a pas produit correctement et transmis en personne.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  L&apos;audit de nuit est aussi le dernier moment où les erreurs de la journée précédente peuvent être
                  corrigées avant de devenir des enregistrements financiers définitifs. C&apos;est pourquoi la séquence
                  compte : contrôles pré-fermeture en premier, clôture système en second, tâches de nuit en cours de
                  service, pack matin avant la passation. Inverser l&apos;une de ces étapes crée des erreurs
                  rattrapables mais chronophages.
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
                : 'Le Playbook Réception LuxOps couvre chaque service : ouverture, opérations de jour, audit de nuit et passation. 12 chapitres, PDF et PowerPoint, EN et FR.'}
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
