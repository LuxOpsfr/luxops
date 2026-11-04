import { Metadata } from 'next'
import HotelAuditChecklistContent from '@/components/HotelAuditChecklistContent'

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
  { score: '50 to 56', scoreFr: '50 à 56', tone: 'green', labelEn: 'Review the remaining gaps', labelFr: 'Vérifier les derniers écarts' },
  { score: '40 to 49', scoreFr: '40 à 49', tone: 'amber', labelEn: 'Prioritise recurring gaps', labelFr: 'Prioriser les écarts récurrents' },
  { score: 'Below 40', scoreFr: 'Moins de 40', tone: 'red', labelEn: 'Clarify the operating standards', labelFr: 'Clarifier les standards opérationnels' },
]

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
      <HotelAuditChecklistContent
        locale={locale}
        auditItems={auditItems}
        areas={areas}
        faq={faq}
        scoreCards={scoreCards}
      />
    </>
  )
}
