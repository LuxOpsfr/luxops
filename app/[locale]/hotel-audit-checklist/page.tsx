import { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ClipboardCheck,
  FileCheck2,
  ListChecks,
  SearchCheck,
  Target,
} from 'lucide-react'
import SamePageAnchor from '@/components/SamePageAnchor'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'

  return {
    title: isEN
      ? 'Hotel Audit Checklist: Quality Control Grid | LuxOps'
      : 'Checklist audit hôtel : grille de contrôle qualité | LuxOps',
    description: isEN
      ? 'Free hotel audit checklist for front office, housekeeping, F&B and guest experience. Use a practical scoring grid to identify quality gaps and action priorities.'
      : 'Checklist d’audit hôtelier gratuite pour la réception, le housekeeping, le F&B et l’expérience client. Utilisez une grille de contrôle claire pour identifier les écarts qualité.',
    keywords: isEN
      ? 'hotel audit checklist, hotel quality audit, hotel inspection checklist, hotel operations audit, hotel quality control checklist, hotel quality assurance checklist'
      : 'audit hôtel, checklist audit hôtelier, audit qualité hôtel, inspection hôtel, grille audit hôtellerie, contrôle qualité hôtel',
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/hotel-audit-checklist`,
      languages: {
        en: 'https://www.luxops.fr/en/hotel-audit-checklist',
        fr: 'https://www.luxops.fr/fr/hotel-audit-checklist',
        'x-default': 'https://www.luxops.fr/en/hotel-audit-checklist',
      },
    },
  }
}

type AuditItem = { area: string; criterion: string }

const AUDIT_ITEMS_EN: AuditItem[] = [
  { area: 'Front Office', criterion: 'Greeting delivered within 30 seconds of guest arrival' },
  { area: 'Front Office', criterion: 'Agent uses guest name at least once during check-in' },
  { area: 'Front Office', criterion: 'Room type and rate confirmed verbally before key handover' },
  { area: 'Front Office', criterion: 'Pre-arrival requests confirmed and actioned in the PMS' },
  { area: 'Front Office', criterion: 'Upsell attempt made naturally during check-in, without pressure' },
  { area: 'Front Office', criterion: 'Billing reviewed and discrepancies flagged before check-out' },
  { area: 'Front Office', criterion: 'Complaint logged, escalated and followed up before end of shift' },
  { area: 'Front Office', criterion: 'Shift handover document completed before departure' },
  { area: 'Housekeeping', criterion: 'No trace of previous guest: hair, item, odor or visible mark' },
  { area: 'Housekeeping', criterion: 'Bed linen spotless, pressed and aligned with even overhang' },
  { area: 'Housekeeping', criterion: 'Bathroom inspected: toilet, grout, glass, drain, mirror and floor' },
  { area: 'Housekeeping', criterion: 'Amenities complete, correctly positioned and matching room standard' },
  { area: 'Housekeeping', criterion: 'High and low dust points checked: wardrobe, TV, skirting, corners' },
  { area: 'Housekeeping', criterion: 'Minibar restocked and consumption logged on the room report' },
  { area: 'Housekeeping', criterion: 'Room temperature and lighting set to arrival standard' },
  { area: 'Housekeeping', criterion: 'Maintenance faults identified and reported before room release' },
  { area: 'Food & Beverage', criterion: 'Table mise en place complete before service starts' },
  { area: 'Food & Beverage', criterion: 'Team briefed on menu, specials, allergens and unavailable items' },
  { area: 'Food & Beverage', criterion: 'Guest welcomed within 60 seconds of being seated' },
  { area: 'Food & Beverage', criterion: 'Allergen procedure followed whenever the guest flags a need' },
  { area: 'Food & Beverage', criterion: 'Service sequence maintained without skipped or reversed steps' },
  { area: 'Food & Beverage', criterion: 'Complaint handled at table level, with manager informed quickly' },
  { area: 'Food & Beverage', criterion: 'Closing checklist completed and signed off before departure' },
  { area: 'Guest Experience', criterion: 'In-room request acknowledged and actioned within expected timing' },
  { area: 'Guest Experience', criterion: 'Guest name used naturally in key interactions during the stay' },
  { area: 'Guest Experience', criterion: 'Complaint acknowledged and first response given within 15 minutes' },
  { area: 'Guest Experience', criterion: 'Departure experience prepared: bill ready, farewell personalised' },
  { area: 'Guest Experience', criterion: 'Post-stay reviews monitored and answered within 48 hours' },
]

const AUDIT_ITEMS_FR: AuditItem[] = [
  { area: 'Réception', criterion: 'Accueil délivré dans les 30 secondes suivant l’arrivée du client' },
  { area: 'Réception', criterion: 'Nom du client utilisé au moins une fois pendant le check-in' },
  { area: 'Réception', criterion: 'Type de chambre et tarif confirmés verbalement avant remise de la clé' },
  { area: 'Réception', criterion: 'Demandes pré-arrivée confirmées et actées dans le PMS' },
  { area: 'Réception', criterion: 'Proposition d’upsell effectuée naturellement, sans pression' },
  { area: 'Réception', criterion: 'Facture relue et écarts signalés avant le check-out' },
  { area: 'Réception', criterion: 'Réclamation consignée, transmise et suivie avant la fin du shift' },
  { area: 'Réception', criterion: 'Fiche de passation complétée avant fin de service' },
  { area: 'Housekeeping', criterion: 'Aucune trace du client précédent : cheveu, objet, odeur ou marque visible' },
  { area: 'Housekeeping', criterion: 'Linge de lit impeccable, repassé et aligné avec un tombé régulier' },
  { area: 'Housekeeping', criterion: 'Salle de bain contrôlée : WC, joints, paroi, siphon, miroir et sol' },
  { area: 'Housekeeping', criterion: 'Dotations complètes, bien positionnées et conformes au standard chambre' },
  { area: 'Housekeeping', criterion: 'Points hauts et bas vérifiés : armoire, TV, plinthes, angles' },
  { area: 'Housekeeping', criterion: 'Minibar réapprovisionné et consommation notée sur la feuille de route' },
  { area: 'Housekeeping', criterion: 'Température et éclairage réglés selon le standard d’arrivée' },
  { area: 'Housekeeping', criterion: 'Pannes maintenance identifiées et signalées avant libération chambre' },
  { area: 'Food & Beverage', criterion: 'Mise en place complète avant le début du service' },
  { area: 'Food & Beverage', criterion: 'Brief équipe réalisé sur la carte, les suggestions, les allergènes et les indisponibilités' },
  { area: 'Food & Beverage', criterion: 'Client accueilli dans les 60 secondes suivant son installation' },
  { area: 'Food & Beverage', criterion: 'Procédure allergènes appliquée dès qu’un client signale un besoin' },
  { area: 'Food & Beverage', criterion: 'Séquence de service respectée, sans étape sautée ou inversée' },
  { area: 'Food & Beverage', criterion: 'Réclamation traitée en salle, avec information rapide du manager' },
  { area: 'Food & Beverage', criterion: 'Checklist de fermeture complétée et validée avant départ de l’équipe' },
  { area: 'Expérience client', criterion: 'Demande en chambre prise en charge dans le délai attendu' },
  { area: 'Expérience client', criterion: 'Nom du client utilisé naturellement lors des interactions clés du séjour' },
  { area: 'Expérience client', criterion: 'Réclamation reconnue et première réponse donnée sous 15 minutes' },
  { area: 'Expérience client', criterion: 'Départ préparé : facture prête et au revoir personnalisé' },
  { area: 'Expérience client', criterion: 'Avis post-séjour suivis et répondus sous 48 heures' },
]

const AREAS_EN = ['Front Office', 'Housekeeping', 'Food & Beverage', 'Guest Experience']
const AREAS_FR = ['Réception', 'Housekeeping', 'Food & Beverage', 'Expérience client']

const FAQ_EN = [
  {
    q: 'What should a hotel audit checklist cover?',
    a: 'A hotel audit checklist should cover the main guest-facing areas: front office, housekeeping, food and beverage and guest experience. The value comes from using the same scoring logic every time so management can see whether standards are improving or slipping.',
  },
  {
    q: 'How often should a hotel run a quality audit?',
    a: 'A practical rhythm is one full internal audit per month, supported by smaller weekly spot checks. The important point is to review results quickly and turn every recurring gap into a training, process or checklist action.',
  },
  {
    q: 'What is the difference between an internal audit and an external quality audit?',
    a: 'An internal audit is run by the property using its own standards. An external audit brings a neutral view and benchmarks execution against a broader hospitality standard. Both are useful, but they serve different purposes.',
  },
  {
    q: 'Who should use this audit checklist?',
    a: 'This checklist can be used by general managers, operations managers, quality managers and department heads who need a simple way to review standards across departments.',
  },
]

const FAQ_FR = [
  {
    q: 'Que doit couvrir une checklist d’audit hôtelier ?',
    a: 'Une checklist d’audit hôtelier doit couvrir les principaux points de contact client : réception, housekeeping, food & beverage et expérience client. Sa valeur vient surtout d’une notation régulière, toujours avec la même logique, pour voir si les standards progressent ou se dégradent.',
  },
  {
    q: 'À quelle fréquence réaliser un audit qualité ?',
    a: 'Un bon rythme consiste à réaliser un audit interne complet chaque mois, complété par des contrôles ponctuels chaque semaine. L’essentiel est de relire rapidement les résultats et de transformer chaque écart récurrent en action de formation, de process ou de checklist.',
  },
  {
    q: 'Quelle différence entre audit interne et audit qualité externe ?',
    a: 'Un audit interne est réalisé par l’établissement avec ses propres standards. Un audit externe apporte un regard neutre et compare l’exécution à un référentiel plus large. Les deux approches sont utiles, mais elles ne répondent pas au même besoin.',
  },
  {
    q: 'Qui peut utiliser cette checklist ?',
    a: 'Cette checklist peut être utilisée par une direction générale, une direction des opérations, un responsable qualité ou des chefs de service qui souhaitent contrôler les standards avec une méthode simple.',
  },
]

const scoreCards = [
  { score: '50 to 56', scoreFr: '50 à 56', tone: 'green', labelEn: 'Ready for external audit', labelFr: 'Prêt pour un audit externe' },
  { score: '40 to 49', scoreFr: '40 à 49', tone: 'amber', labelEn: 'Monitor and coach', labelFr: 'Surveiller et accompagner' },
  { score: 'Below 40', scoreFr: 'Moins de 40', tone: 'red', labelEn: 'Immediate action required', labelFr: 'Action immédiate requise' },
]

function toneClasses(tone: string) {
  if (tone === 'green') return 'border-emerald-200 bg-emerald-50 text-emerald-800'
  if (tone === 'amber') return 'border-amber-200 bg-amber-50 text-amber-800'
  return 'border-red-200 bg-red-50 text-red-800'
}

export default async function HotelAuditPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'
  const auditItems = isEN ? AUDIT_ITEMS_EN : AUDIT_ITEMS_FR
  const areas = isEN ? AREAS_EN : AREAS_FR
  const faq = isEN ? FAQ_EN : FAQ_FR
  const qualityAuditHref = isEN ? '/en/quality-audit' : '/fr/audit-qualite'
  const checklistsHref = isEN ? '/en/free-hotel-checklists' : '/fr/checklists-hotel-gratuites'

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isEN ? 'Hotel Audit Checklist' : 'Checklist audit hôtel',
    description: isEN
      ? 'A practical hotel quality audit checklist for operations teams.'
      : 'Une checklist d’audit qualité pratique pour les équipes opérationnelles.',
    author: { '@type': 'Organization', name: 'LuxOps', url: 'https://www.luxops.fr' },
    publisher: { '@type': 'Organization', name: 'LuxOps', url: 'https://www.luxops.fr' },
    inLanguage: locale,
    url: `https://www.luxops.fr/${locale}/hotel-audit-checklist`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="pt-16 bg-white">
        <section
          className="px-6 py-20 lg:py-24 border-b border-[#e8edf5]"
          style={{
            backgroundImage: 'radial-gradient(#c3c6d6 0.5px, transparent 0.5px)',
            backgroundSize: '24px 24px',
          }}
        >
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#eef4ff] text-[#003d9b] font-bold text-[10px] uppercase tracking-widest mb-7">
                <span className="w-2 h-2 rounded-full bg-[#003d9b]" />
                {isEN ? 'Quality audit checklist' : 'Checklist audit qualité'}
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight leading-[0.98] text-[#0a1d2e] mb-6">
                {isEN ? 'Hotel audit checklist' : 'Checklist audit hôtel'}
              </h1>
              <p className="text-lg md:text-xl text-[#4f6074] leading-relaxed max-w-2xl mb-6">
                {isEN
                  ? 'A practical scoring grid to review front office, housekeeping, F&B and guest experience standards.'
                  : 'Une grille de contrôle simple pour évaluer la réception, le housekeeping, le F&B et l’expérience client.'}
              </p>
              <p className="text-sm text-[#737685] leading-relaxed max-w-2xl mb-8">
                {isEN
                  ? 'Use it as a monthly internal audit, a department review tool or a preparation step before an external quality visit.'
                  : 'À utiliser comme audit interne mensuel, support de revue par département ou préparation avant un contrôle qualité externe.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <SamePageAnchor
                  href="#audit-grid"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#003d9b] text-white font-bold text-sm hover:bg-[#0a1d2e] transition-colors"
                >
                  {isEN ? 'Use the checklist' : 'Voir la checklist'}
                  <ArrowRight size={16} />
                </SamePageAnchor>
                <Link
                  href={qualityAuditHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#0a1d2e] border border-[#d8deea] font-bold text-sm hover:border-[#003d9b] transition-colors"
                >
                  {isEN ? 'Request a quality audit' : 'Demander un audit qualité'}
                </Link>
              </div>
            </div>

            <div className="bg-white border border-[#d8deea] shadow-[0_24px_70px_rgba(10,29,46,0.10)] p-8 lg:p-10">
              <div className="flex items-start gap-4 mb-7">
                <div className="w-12 h-12 bg-[#eef4ff] flex items-center justify-center flex-shrink-0">
                  <SearchCheck size={24} className="text-[#003d9b]" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-extrabold text-[#0a1d2e] tracking-tight mb-2">
                    {isEN ? 'What this checklist is for' : 'À quoi sert cette checklist'}
                  </h2>
                  <p className="text-sm text-[#4f6074] leading-relaxed">
                    {isEN
                      ? 'It gives management a quick but structured way to identify visible quality gaps, recurring service friction and standards that need follow-up.'
                      : 'Elle donne à la direction une lecture rapide mais structurée des écarts visibles, des points de friction récurrents et des standards à reprendre.'}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  isEN ? '28 criteria' : '28 critères',
                  isEN ? '4 areas' : '4 périmètres',
                  isEN ? '0 to 2 scoring' : 'Notation 0 à 2',
                  isEN ? 'Action priorities' : 'Priorités d’action',
                ].map((item) => (
                  <div key={item} className="border border-[#e8edf5] bg-[#f8f9ff] p-4">
                    <p className="text-sm font-bold text-[#0a1d2e]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-white">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: <ClipboardCheck size={20} className="text-[#003d9b]" />,
                title: isEN ? 'Score each point' : 'Noter chaque point',
                text: isEN
                  ? 'Use 0 when the standard is not met, 1 when partially met and 2 when fully met.'
                  : 'Utilisez 0 si le standard n’est pas atteint, 1 s’il est partiel et 2 s’il est pleinement atteint.',
              },
              {
                icon: <Target size={20} className="text-[#003d9b]" />,
                title: isEN ? 'Read patterns, not incidents' : 'Lire les tendances',
                text: isEN
                  ? 'One isolated miss matters less than a repeated gap across shifts, rooms or service moments.'
                  : 'Un incident isolé compte moins qu’un écart répété sur plusieurs shifts, chambres ou moments de service.',
              },
              {
                icon: <FileCheck2 size={20} className="text-[#003d9b]" />,
                title: isEN ? 'Turn gaps into actions' : 'Transformer les écarts en actions',
                text: isEN
                  ? 'Each gap should lead to a process, checklist, training or management follow-up action.'
                  : 'Chaque écart doit déboucher sur un process, une checklist, une formation ou un suivi managérial.',
              },
            ].map((item) => (
              <div key={item.title} className="border border-[#e8edf5] bg-[#f8f9ff] p-7">
                <div className="w-10 h-10 bg-white flex items-center justify-center mb-5">{item.icon}</div>
                <h2 className="font-display text-xl font-bold text-[#0a1d2e] mb-3">{item.title}</h2>
                <p className="text-sm text-[#4f6074] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="audit-grid" className="px-6 py-20 bg-[#f8f9ff] scroll-mt-28">
          <div className="max-w-screen-xl mx-auto">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-bold uppercase tracking-widest text-[#003d9b] mb-3">
                {isEN ? 'Scoring grid' : 'Grille de notation'}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#0a1d2e] tracking-tight mb-4">
                {isEN ? '28 criteria across the main guest-facing areas' : '28 critères sur les principaux points de contact client'}
              </h2>
              <p className="text-[#4f6074] leading-relaxed">
                {isEN
                  ? 'The goal is not to replace a full audit report. It is to create a consistent first read of where standards are holding and where follow-up is needed.'
                  : 'L’objectif n’est pas de remplacer un rapport d’audit complet. Il s’agit d’obtenir une première lecture cohérente des standards qui tiennent et des points à reprendre.'}
              </p>
            </div>

            <div className="space-y-6">
              {areas.map((area) => {
                const items = auditItems.filter((item) => item.area === area)
                return (
                  <div key={area} className="bg-white border border-[#d8deea]">
                    <div className="flex items-center justify-between gap-4 bg-[#0a1d2e] text-white px-5 py-4">
                      <h3 className="font-display font-bold text-lg">{area}</h3>
                      <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                        {isEN ? 'Subtotal /16' : 'Sous-total /16'}
                      </span>
                    </div>
                    <div className="divide-y divide-[#e8edf5]">
                      {items.map((item, index) => (
                        <div key={item.criterion} className="grid grid-cols-[1fr_90px] gap-4 px-5 py-4">
                          <div className="flex gap-3">
                            <span className="text-xs font-bold text-[#003d9b] mt-1">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <p className="text-sm text-[#4f6074] leading-relaxed">{item.criterion}</p>
                          </div>
                          <div className="text-center text-sm font-mono text-[#737685] border border-[#e8edf5] py-2">
                            /2
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {scoreCards.map((card) => (
                <div key={card.score} className={`border p-5 ${toneClasses(card.tone)}`}>
                  <p className="font-display text-2xl font-extrabold mb-1">
                    {isEN ? card.score : card.scoreFr}
                  </p>
                  <p className="text-sm font-semibold">{isEN ? card.labelEn : card.labelFr}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 bg-white">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#003d9b] mb-3">
                {isEN ? 'Audit method' : 'Méthode d’audit'}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#0a1d2e] tracking-tight mb-5">
                {isEN ? 'Use the score to decide what happens next' : 'Utiliser le score pour décider de la suite'}
              </h2>
              <p className="text-[#4f6074] leading-relaxed">
                {isEN
                  ? 'The score is useful only if it leads to follow-up. Review the results within 48 hours, assign each recurring gap to an owner and connect it to a procedure, checklist or training action.'
                  : 'Le score n’a de valeur que s’il déclenche une suite. Relisez les résultats sous 48 heures, attribuez chaque écart récurrent à un responsable et reliez-le à une procédure, une checklist ou une action de formation.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(isEN ? [
                { title: 'Prepare the scope', text: 'Define the departments, date, expected standard and whether the audit is announced or unannounced.' },
                { title: 'Observe the guest journey', text: 'Follow the experience as a guest would see it: arrival, room, service moments, requests and departure.' },
                { title: 'Debrief quickly', text: 'Review scores by department and focus on repeated gaps instead of isolated mistakes.' },
                { title: 'Track monthly', text: 'Use the same grid over time to see whether standards improve, slip or remain unstable.' },
              ] : [
                { title: 'Préparer le périmètre', text: 'Définir les départements, la date, le standard attendu et le niveau d’annonce de l’audit.' },
                { title: 'Observer le parcours client', text: 'Suivre l’expérience telle qu’un client la vit : arrivée, chambre, service, demandes et départ.' },
                { title: 'Débriefer rapidement', text: 'Relire les scores par département et se concentrer sur les écarts récurrents, pas sur les erreurs isolées.' },
                { title: 'Suivre chaque mois', text: 'Utiliser la même grille dans le temps pour voir si les standards progressent, baissent ou restent instables.' },
              ]).map((item) => (
                <div key={item.title} className="border border-[#e8edf5] bg-[#f8f9ff] p-6">
                  <ListChecks size={20} className="text-[#003d9b] mb-4" />
                  <h3 className="font-display font-bold text-[#0a1d2e] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#4f6074] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 bg-[#f8f9ff]">
          <div className="max-w-screen-xl mx-auto">
            <div className="max-w-2xl mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-[#003d9b] mb-3">
                {isEN ? 'Related tools' : 'Outils liés'}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#0a1d2e] tracking-tight mb-4">
                {isEN ? 'When the audit reveals a gap, use the right operational support' : 'Quand l’audit révèle un écart, utilisez le bon support opérationnel'}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  href: checklistsHref,
                  title: isEN ? 'Free checklists' : 'Checklists gratuites',
                  desc: isEN ? 'Printable PDF checklists for housekeeping, front office and F&B.' : 'PDF à imprimer pour le housekeeping, la réception et le F&B.',
                },
                {
                  href: `/${locale}/hotel-housekeeping-checklist`,
                  title: isEN ? 'Housekeeping checklist' : 'Checklist housekeeping',
                  desc: isEN ? 'Room checks, supervisor control and housekeeping quality standards.' : 'Contrôles chambre, inspection gouvernante et standards housekeeping.',
                },
                {
                  href: `/${locale}/hotel-sop`,
                  title: isEN ? 'Hotel SOP hub' : 'Hub SOP hôtel',
                  desc: isEN ? 'Department procedures and playbook structure for recurring gaps.' : 'Procédures par département et structure playbook pour les écarts récurrents.',
                },
                {
                  href: qualityAuditHref,
                  title: isEN ? 'Quality audit service' : 'Audit qualité sur site',
                  desc: isEN ? 'A full on-site review when you need an external operational view.' : 'Une revue terrain complète lorsque vous avez besoin d’un regard externe.',
                },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="bg-white border border-[#e8edf5] p-6 hover:border-[#003d9b] transition-colors">
                  <p className="font-display text-lg font-bold text-[#0a1d2e] mb-3">{link.title}</p>
                  <p className="text-sm text-[#4f6074] leading-relaxed">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-extrabold text-[#0a1d2e] tracking-tight mb-8">
              {isEN ? 'Frequently asked questions' : 'Questions fréquentes'}
            </h2>
            <div className="space-y-5">
              {faq.map(({ q, a }) => (
                <div key={q} className="border border-[#e8edf5] p-6">
                  <h3 className="font-display font-bold text-[#0a1d2e] mb-3">{q}</h3>
                  <p className="text-sm text-[#4f6074] leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 bg-[#0a1d2e]">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#8fb7ff] mb-3">
                {isEN ? 'Need a deeper review?' : 'Besoin d’une analyse plus complète ?'}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-5">
                {isEN ? 'A checklist gives a first read. An audit gives the roadmap.' : 'Une checklist donne une première lecture. Un audit donne la feuille de route.'}
              </h2>
              <p className="text-[#cbd5e1] leading-relaxed">
                {isEN
                  ? 'When the issue is not one checklist item but recurring inconsistency across departments, the on-site quality audit gives you priorities, root causes and practical next steps.'
                  : 'Quand le sujet ne se limite pas à un point de checklist mais à des écarts récurrents entre services, l’audit qualité sur site permet d’identifier les priorités, les causes et les prochaines actions.'}
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-7 lg:p-8">
              <h3 className="font-display text-2xl font-extrabold text-white tracking-tight mb-4">
                {isEN ? 'Request a quality audit' : 'Demander un audit qualité'}
              </h3>
              <p className="text-sm text-[#cbd5e1] leading-relaxed mb-6">
                {isEN
                  ? 'Share a few details about your property and the departments you want to review.'
                  : 'Partagez quelques informations sur votre établissement et les départements à auditer.'}
              </p>
              <Link
                href={qualityAuditHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#0a1d2e] font-bold text-sm hover:bg-[#eef4ff] transition-colors"
              >
                {isEN ? 'View quality audit' : 'Voir l’audit qualité'}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
