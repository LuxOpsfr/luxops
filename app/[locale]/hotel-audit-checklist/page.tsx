import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel Audit Checklist — Complete Quality Audit for Luxury Hotels | LuxOps'
      : 'Checklist Audit Hôtel — Audit qualité complet pour hôtels de luxe | LuxOps',
    description: isEN
      ? 'Free hotel audit checklist covering front office, housekeeping, F&B and guest experience. Scoring grid, inspection criteria and action framework for luxury and boutique properties.'
      : 'Checklist d\'audit hôtelier gratuite couvrant la réception, le housekeeping, le F&B et l\'expérience client. Grille de notation, critères d\'inspection et plan d\'action pour établissements de luxe.',
    keywords: isEN
      ? 'hotel audit checklist, hotel quality audit, hotel inspection checklist, luxury hotel audit, hotel operations audit, hotel quality control checklist, hotel quality assurance checklist'
      : 'audit hôtel, checklist audit hôtelier, audit qualité hôtel, inspection hôtel, grille audit hôtellerie, contrôle qualité hôtel',
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/hotel-audit-checklist`,
      languages: {
        'en': 'https://www.luxops.fr/en/hotel-audit-checklist',
        'fr': 'https://www.luxops.fr/fr/hotel-audit-checklist',
        'x-default': 'https://www.luxops.fr/en/hotel-audit-checklist',
      },
    },
  }
}

// ─── Audit scoring data ───────────────────────────────────────────────────────

type AuditItem = { area: string; criterion: string }

const AUDIT_ITEMS_EN: AuditItem[] = [
  // Front Office
  { area: 'Front Office', criterion: 'Greeting delivered within 30 seconds of guest arrival' },
  { area: 'Front Office', criterion: 'Agent uses guest name at least once during check-in' },
  { area: 'Front Office', criterion: 'Room type and rate confirmed verbally before key handover' },
  { area: 'Front Office', criterion: 'Pre-arrival requests confirmed and actioned in PMS' },
  { area: 'Front Office', criterion: 'Upsell attempt made without pressure during check-in' },
  { area: 'Front Office', criterion: 'Billing reviewed and discrepancies flagged before check-out' },
  { area: 'Front Office', criterion: 'Complaint logged, escalated and follow-up confirmed within shift' },
  { area: 'Front Office', criterion: 'Shift handover document completed before departure' },
  // Housekeeping
  { area: 'Housekeeping', criterion: 'No trace of previous guest: hair, item, odor' },
  { area: 'Housekeeping', criterion: 'Bed: linen spotless, pressed, even overhang both sides' },
  { area: 'Housekeeping', criterion: 'Bathroom: toilet, grout and shower glass inspected with torch' },
  { area: 'Housekeeping', criterion: 'Amenities: correct type, full quantity, correctly positioned' },
  { area: 'Housekeeping', criterion: 'Surfaces: no dust on top of wardrobe, behind TV, along skirting' },
  { area: 'Housekeeping', criterion: 'Minibar: restocked, consumption logged on room report' },
  { area: 'Housekeeping', criterion: 'Room temperature set to property standard on arrival' },
  { area: 'Housekeeping', criterion: 'Maintenance faults: none unreported in room' },
  // Food & Beverage
  { area: 'Food & Beverage', criterion: 'Table mise en place complete and to brand standard before service' },
  { area: 'Food & Beverage', criterion: 'Staff briefed on menu, specials and allergens before service opens' },
  { area: 'Food & Beverage', criterion: 'Greeting delivered within 60 seconds of guest being seated' },
  { area: 'Food & Beverage', criterion: 'Allergen procedure followed for all orders flagged by guest' },
  { area: 'Food & Beverage', criterion: 'Service sequence maintained: no courses skipped or reversed' },
  { area: 'Food & Beverage', criterion: 'Complaint handled at table level, manager notified within 5 min' },
  { area: 'Food & Beverage', criterion: 'Closing checklist completed and signed off before departure' },
  // Guest Experience
  { area: 'Guest Experience', criterion: 'Response to in-room request within 10 minutes' },
  { area: 'Guest Experience', criterion: 'Guest name used in at least two interactions during stay' },
  { area: 'Guest Experience', criterion: 'Complaint acknowledged and first response given within 15 min' },
  { area: 'Guest Experience', criterion: 'Departure experience: bill ready, farewell personalised' },
  { area: 'Guest Experience', criterion: 'Post-stay review platform monitored and responded to within 48h' },
]

const AUDIT_ITEMS_FR: AuditItem[] = [
  // Réception
  { area: 'Réception', criterion: 'Accueil délivré dans les 30 secondes suivant l\'arrivée du client' },
  { area: 'Réception', criterion: 'Nom du client utilisé au moins une fois pendant le check-in' },
  { area: 'Réception', criterion: 'Type de chambre et tarif confirmés verbalement avant remise de la clé' },
  { area: 'Réception', criterion: 'Demandes pré-arrivée confirmées et actées dans le PMS' },
  { area: 'Réception', criterion: 'Tentative d\'upsell effectuée sans pression lors du check-in' },
  { area: 'Réception', criterion: 'Facture relue, écarts signalés avant le check-out' },
  { area: 'Réception', criterion: 'Réclamation consignée, transmise et suivi confirmé dans le shift' },
  { area: 'Réception', criterion: 'Fiche de passation complétée avant fin de service' },
  // Housekeeping
  { area: 'Housekeeping', criterion: 'Aucune trace du client précédent : cheveu, objet, odeur' },
  { area: 'Housekeeping', criterion: 'Lit : linge impeccable, repassé, tombé identique des deux côtés' },
  { area: 'Housekeeping', criterion: 'Salle de bain : WC, joints et paroi de douche inspectés à la lampe' },
  { area: 'Housekeeping', criterion: 'Dotations : type correct, quantité complète, positionnement conforme' },
  { area: 'Housekeeping', criterion: 'Surfaces : aucune poussière au-dessus de l\'armoire, derrière la TV, le long des plinthes' },
  { area: 'Housekeeping', criterion: 'Minibar : réapprovisionné, consommation notée sur la feuille de route' },
  { area: 'Housekeeping', criterion: 'Température chambre réglée selon le standard de l\'établissement' },
  { area: 'Housekeeping', criterion: 'Pannes maintenance : aucune non signalée dans la chambre' },
  // Food & Beverage
  { area: 'Food & Beverage', criterion: 'Mise en place complète et conforme au standard avant l\'ouverture du service' },
  { area: 'Food & Beverage', criterion: 'Brief équipe : carte, suggestions du jour, allergènes avant service' },
  { area: 'Food & Beverage', criterion: 'Accueil délivré dans les 60 secondes suivant l\'installation du client' },
  { area: 'Food & Beverage', criterion: 'Procédure allergènes appliquée pour toute commande signalée' },
  { area: 'Food & Beverage', criterion: 'Séquence de service maintenue : aucun plat sauté ou inversé' },
  { area: 'Food & Beverage', criterion: 'Réclamation gérée en salle, manager prévenu en moins de 5 min' },
  { area: 'Food & Beverage', criterion: 'Checklist de fermeture complétée et validée avant départ de l\'équipe' },
  // Expérience Client
  { area: 'Expérience Client', criterion: 'Délai de réponse à une demande chambre : moins de 10 minutes' },
  { area: 'Expérience Client', criterion: 'Nom du client utilisé dans au moins deux interactions pendant le séjour' },
  { area: 'Expérience Client', criterion: 'Réclamation prise en charge et première réponse sous 15 minutes' },
  { area: 'Expérience Client', criterion: 'Départ : facture prête, au revoir personnalisé' },
  { area: 'Expérience Client', criterion: 'Avis post-séjour : plateforme suivie et réponse dans les 48h' },
]

const AREAS_EN = ['Front Office', 'Housekeeping', 'Food & Beverage', 'Guest Experience']
const AREAS_FR = ['Réception', 'Housekeeping', 'Food & Beverage', 'Expérience Client']

const FAQ_EN = [
  {
    q: 'What should a hotel audit checklist cover?',
    a: 'A complete hotel audit checklist should evaluate every guest-facing department: front office (greeting, check-in, billing, complaint handling), housekeeping (room cleanliness, linen, amenities, maintenance), food and beverage (service standards, hygiene, allergen compliance) and overall guest experience (response times, personalisation, review management). Each area should be scored consistently so results can be tracked over time.',
  },
  {
    q: 'How often should a hotel conduct a quality audit?',
    a: 'Internal audits should be conducted at a minimum monthly, with spot checks weekly. External audits — whether from an independent firm like LQA or Forbes or from a brand QA team — typically happen once or twice a year. The most effective approach combines frequent internal checks with periodic external benchmarking.',
  },
  {
    q: 'What is the difference between an internal hotel audit and an LQA audit?',
    a: 'An internal hotel audit is conducted by management or an in-house quality team using the property\'s own standards. An LQA (Leading Quality Assurance) audit is conducted by an independent third party using a standardised luxury benchmark of 600+ criteria. LQA auditors stay as anonymous guests and evaluate the full experience from pre-arrival to departure. The two are complementary: internal audits maintain daily standards, LQA audits provide external validation.',
  },
  {
    q: 'Who conducts a hotel quality audit?',
    a: 'Internal audits are typically run by department heads or a dedicated quality manager. Cross-department audits are often led by the General Manager or an operations director. External audits are conducted by specialist firms such as LQA, Forbes Travel Guide or brand QA teams. A third option is an independent consultancy audit, which provides external perspective without the constraints of a fixed benchmark.',
  },
]

const FAQ_FR = [
  {
    q: 'Que doit couvrir une checklist d\'audit hôtelier ?',
    a: 'Une checklist d\'audit hôtelier complète doit évaluer chaque département en contact avec le client : réception (accueil, check-in, facturation, gestion des réclamations), housekeeping (propreté des chambres, linge, dotations, maintenance), food & beverage (standards de service, hygiène, gestion des allergènes) et l\'expérience client globale (délais de réponse, personnalisation, gestion des avis). Chaque domaine doit être noté de façon cohérente pour suivre les résultats dans le temps.',
  },
  {
    q: 'À quelle fréquence un hôtel doit-il réaliser un audit qualité ?',
    a: 'Les audits internes doivent être réalisés au minimum chaque mois, avec des contrôles ponctuels chaque semaine. Les audits externes — qu\'ils proviennent d\'un cabinet indépendant comme LQA ou Forbes, ou d\'une équipe QA de marque — ont lieu généralement une à deux fois par an. L\'approche la plus efficace combine des contrôles internes fréquents et un benchmarking externe périodique.',
  },
  {
    q: 'Quelle est la différence entre un audit interne et un audit LQA ?',
    a: 'Un audit interne est réalisé par la direction ou une équipe qualité maison en utilisant les standards de l\'établissement. Un audit LQA (Leading Quality Assurance) est conduit par un tiers indépendant selon un référentiel luxe standardisé de plus de 600 critères. Les auditeurs LQA séjournent en clients anonymes et évaluent l\'expérience complète de la pré-arrivée au départ. Les deux sont complémentaires : les audits internes maintiennent les standards au quotidien, les audits LQA apportent une validation externe.',
  },
  {
    q: 'Qui réalise un audit qualité hôtelier ?',
    a: 'Les audits internes sont généralement menés par les chefs de département ou un responsable qualité dédié. Les audits inter-départements sont souvent pilotés par le Directeur Général ou un directeur des opérations. Les audits externes sont conduits par des cabinets spécialisés comme LQA, Forbes Travel Guide ou les équipes QA des groupes hôteliers. Une troisième option est l\'audit par un cabinet de conseil indépendant, qui apporte un regard externe sans les contraintes d\'un référentiel figé.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function HotelAuditPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'
  const auditItems = isEN ? AUDIT_ITEMS_EN : AUDIT_ITEMS_FR
  const areas = isEN ? AREAS_EN : AREAS_FR
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

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isEN ? 'Hotel Audit Checklist' : 'Checklist Audit Hôtel',
    description: isEN
      ? 'Professional hotel audit checklist for luxury and boutique properties. Evaluate operations, guest experience, cleanliness and service standards.'
      : 'Checklist d\'audit hôtelier professionnel pour établissements de luxe et boutique. Évaluez les opérations, l\'expérience client et les standards de service.',
    provider: { '@type': 'Organization', name: 'LuxOps', url: 'https://www.luxops.fr' },
    serviceType: 'Hotel Quality Audit',
    areaServed: 'Worldwide',
    url: `https://www.luxops.fr/${locale}/hotel-audit-checklist`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <main className="bg-white">

        {/* Hero */}
        <section className="bg-[#1A2E44] text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
              {isEN ? 'Hotel Quality Audit' : 'Audit qualité hôtel'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {isEN
                ? 'Hotel Audit Checklist: 28 Criteria Across All Departments'
                : 'Checklist Audit Hôtel : 28 critères sur tous les départements'}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              {isEN
                ? 'A complete hotel quality audit framework covering Front Office, Housekeeping, F&B and Guest Experience. Free to use. Built to LQA and Forbes standards.'
                : 'Un cadre d\'audit qualité hôtelier complet couvrant la réception, le housekeeping, le F&B et l\'expérience client. Gratuit. Conçu selon les standards LQA et Forbes.'}
            </p>
            <Link
              href={`/${locale}/quality-audit`}
              className="inline-block bg-white text-[#1A2E44] font-semibold px-8 py-4 rounded-lg transition-colors hover:bg-gray-100 text-base"
            >
              {isEN ? 'Discover Our Audit Service' : 'Découvrir notre service d\'audit'}
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
                  ? 'Download a free chapter from any department playbook'
                  : "Téléchargez un chapitre gratuit d'un playbook de votre choix"}
              </p>
              <p className="text-sm text-[#4f6074]">
                {isEN
                  ? 'See the full SOP and inspection framework behind these audit criteria.'
                  : 'Découvrez les procédures et grilles d\'inspection complètes derrière ces critères d\'audit.'}
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
        <section className="py-14 px-6 bg-gray-50 border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1A2E44] mb-4">
              {isEN ? 'How to use this audit checklist' : 'Comment utiliser cette grille d\'audit'}
            </h2>
            {isEN ? (
              <>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Score each criterion from 0 to 2: 0 for not met, 1 for partially met, 2 for fully met. Each department scores out of 16. The overall hotel score is out of 56. Audit benchmark: 50 to 56 — ready for external audit; 40 to 49 — monitor and coach; below 40 — immediate action required.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Run this audit at least monthly. Use results in a department-level debrief within 48 hours of the audit. Attach specific SOP or checklist references to each gap so the team knows exactly where to find the standard.
                </p>
              </>
            ) : (
              <>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Notez chaque critère de 0 à 2 : 0 si non atteint, 1 si partiellement atteint, 2 si pleinement atteint. Chaque département est noté sur 16. Le score global de l'hôtel est sur 56. Référentiel : 50 à 56 — prêt pour un audit externe ; 40 à 49 — surveiller et coacher ; en dessous de 40 — action immédiate requise.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Réalisez cet audit au minimum une fois par mois. Utilisez les résultats dans un débrief par département dans les 48 heures suivant l'audit. Associez à chaque écart la référence SOP ou checklist correspondante pour que l'équipe sache précisément où trouver le standard.
                </p>
              </>
            )}
          </div>
        </section>

        {/* Audit scoring grid */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1A2E44] mb-2 text-center">
              {isEN ? 'Hotel Quality Audit Scoring Grid' : 'Grille de notation — Audit qualité hôtel'}
            </h2>
            <p className="text-gray-500 text-center text-sm mb-10">
              {isEN ? 'Score 0–2 per criterion. 28 criteria total across 4 departments.' : 'Notation 0 à 2 par critère. 28 critères au total sur 4 départements.'}
            </p>
            {areas.map((area) => {
              const items = auditItems.filter((i) => i.area === area)
              return (
                <div key={area} className="mb-8">
                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-[#1A2E44] text-white">
                          <th className="text-left px-4 py-3 font-semibold">{area}</th>
                          <th className="text-center px-4 py-3 font-semibold w-24">
                            {isEN ? 'Score /2' : 'Note /2'}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item, i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F7FA]'}>
                            <td className="px-4 py-3 text-gray-700">{item.criterion}</td>
                            <td className="px-4 py-3 text-center text-gray-400 font-mono">/2</td>
                          </tr>
                        ))}
                        <tr className="bg-[#1A2E44] text-white font-bold">
                          <td className="px-4 py-3">{isEN ? `${area} subtotal` : `Sous-total ${area}`}</td>
                          <td className="px-4 py-3 text-center font-mono">/16</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )
            })}
            <div className="border border-[#1A2E44] rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="bg-[#1A2E44] text-white font-bold text-base">
                    <td className="px-4 py-4">{isEN ? 'Overall hotel score' : 'Score global hôtel'}</td>
                    <td className="px-4 py-4 text-center font-mono">/56</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm text-center">
              <div className="border border-green-200 rounded-xl p-4 bg-green-50">
                <p className="font-bold text-green-700 text-lg">50–56</p>
                <p className="text-green-700">{isEN ? 'Ready for external audit' : 'Prêt pour audit externe'}</p>
              </div>
              <div className="border border-yellow-200 rounded-xl p-4 bg-yellow-50">
                <p className="font-bold text-yellow-700 text-lg">40–49</p>
                <p className="text-yellow-700">{isEN ? 'Monitor and coach' : 'Surveiller et coacher'}</p>
              </div>
              <div className="border border-red-200 rounded-xl p-4 bg-red-50">
                <p className="font-bold text-red-700 text-lg">&lt;40</p>
                <p className="text-red-700">{isEN ? 'Immediate action required' : 'Action immédiate requise'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1A2E44] mb-8 text-center">
              {isEN ? 'How to run a hotel quality audit' : 'Comment conduire un audit qualité hôtel'}
            </h2>
            <div className="space-y-6">
              {(isEN ? [
                { step: '01', title: 'Prepare the audit scope', body: 'Define which departments will be audited and on what date. For a full property audit, block 2 to 4 hours. For a single department spot check, 45 to 60 minutes is sufficient. Confirm the audit is unannounced or semi-announced depending on whether you are assessing actual performance or training readiness.' },
                { step: '02', title: 'Conduct the audit as a guest would experience it', body: 'Walk the full guest journey: arrival, check-in, room inspection, public areas, F&B if applicable, check-out. Score each criterion immediately. Do not complete the form from memory after the audit — the details that matter most are the ones observed in the moment.' },
                { step: '03', title: 'Debrief within 48 hours', body: 'Share scores at department level, not individual level. Focus on patterns and trends, not isolated incidents. Attach the specific SOP, checklist or standard that applies to each gap so the team has a clear reference, not just a score.' },
                { step: '04', title: 'Track scores over time', body: 'A single audit score is a snapshot. Monthly tracking reveals whether standards are improving, declining, or plateauing. Review the trend at least quarterly and adjust training priorities accordingly.' },
              ] : [
                { step: '01', title: 'Préparer le périmètre d\'audit', body: 'Définissez les départements à auditer et la date. Pour un audit complet de l\'établissement, prévoyez 2 à 4 heures. Pour un contrôle ponctuel sur un seul département, 45 à 60 minutes suffisent. Précisez si l\'audit est réalisé à l\'improviste ou semi-annoncé selon que vous évaluez les performances réelles ou le niveau de préparation de l\'équipe.' },
                { step: '02', title: 'Conduire l\'audit comme le vivrait un client', body: 'Parcourez l\'intégralité du parcours client : arrivée, check-in, inspection de chambre, espaces communs, F&B le cas échéant, check-out. Notez chaque critère immédiatement. Ne complétez pas la grille de mémoire après l\'audit — les détails les plus importants sont ceux observés sur le moment.' },
                { step: '03', title: 'Débriefer sous 48 heures', body: 'Partagez les scores au niveau du département, pas de l\'individu. Concentrez-vous sur les tendances et les récurrences, pas sur les incidents isolés. Associez à chaque écart la procédure, la checklist ou le standard applicable pour que l\'équipe ait une référence claire, pas seulement un score.' },
                { step: '04', title: 'Suivre les scores dans le temps', body: 'Un score d\'audit unique est un instantané. Un suivi mensuel révèle si les standards progressent, régressent ou stagnent. Analysez la tendance au moins chaque trimestre et ajustez les priorités de formation en conséquence.' },
              ]).map((item) => (
                <div key={item.step} className="flex gap-5">
                  <div className="text-3xl font-bold text-gray-100 flex-shrink-0 w-10 pt-1">{item.step}</div>
                  <div>
                    <h3 className="font-semibold text-[#1A2E44] mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
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
          </div>
        </section>

        {/* Related resources */}
        <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
          <h2 className="text-xl font-bold text-[#1A2E44] mb-6">
            {isEN ? 'Related resources' : 'Ressources associées'}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
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
              {
                href: `/${locale}/hotel-checklist`,
                title: isEN ? 'Hotel Operational Checklists' : 'Checklists Opérationnelles Hôtel',
                desc: isEN ? 'What makes hotel checklists useful in practice' : 'Ce qui rend les checklists hôtelières utiles en pratique',
              },
              {
                href: `/${locale}/housekeeping-sop`,
                title: isEN ? 'Housekeeping SOP Guide' : 'Guide SOP Housekeeping',
                desc: isEN ? 'Standard operating procedures for housekeeping teams' : 'Procédures opérationnelles pour les équipes housekeeping',
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
        <section className="bg-[#1A2E44] py-16 px-6 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              {isEN ? 'Know Exactly Where Your Hotel Stands.' : 'Sachez exactement où en est votre hôtel.'}
            </h2>
            <p className="text-gray-300 mb-8">
              {isEN
                ? 'A LuxOps quality audit gives you a clear picture of your operation: what is working, what is not, and exactly what to fix first.'
                : 'Un audit qualité LuxOps vous donne une vision claire de votre exploitation : ce qui fonctionne, ce qui ne fonctionne pas et exactement quoi corriger en premier.'}
            </p>
            <Link
              href={`/${locale}/quality-audit`}
              className="inline-block bg-white text-[#1A2E44] font-semibold px-8 py-4 rounded-lg transition-colors hover:bg-gray-100"
            >
              {isEN ? 'Request an Audit' : 'Demander un audit'}
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}
