import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel Housekeeping Checklist — Free Inspection Template | LuxOps'
      : 'Checklist Housekeeping Hôtel — Modèle d\'Inspection Gratuit | LuxOps',
    description: isEN
      ? 'Free hotel housekeeping checklist covering room inspection, cleanliness standards, laundry and public areas. Used by luxury hotels across Europe. Download the full playbook.'
      : 'Checklist housekeeping hôtel gratuite : inspection des chambres, propreté, linge, espaces communs. Utilisée par les hôtels de luxe en Europe. Téléchargez le playbook complet.',
    keywords: isEN
      ? 'hotel housekeeping checklist, hotel housekeeping inspection, hotel cleanliness checklist, hotel room housekeeping checklist, housekeeping inspection form, hotel cleaning checklist'
      : 'checklist housekeeping hotel, inspection housekeeping hôtel, checklist nettoyage chambre hotel, procédures housekeeping, contrôle qualité housekeeping',
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/hotel-housekeeping-checklist`,
    },
  }
}

const checklistEN = [
  {
    category: 'Room Entry & Initial Inspection',
    icon: '🚪',
    items: [
      'Knock and announce before entering',
      'Check overall room condition on entry',
      'Open curtains and inspect natural light',
      'Note any damage or maintenance issues',
      'Check DND (Do Not Disturb) status logged',
    ],
  },
  {
    category: 'Bed & Linen',
    icon: '🛏️',
    items: [
      'Strip and replace all bed linen',
      'Check mattress protector condition',
      'Inspect pillows and pillow cases',
      'Ensure hospital corners or brand standard folding',
      'Check duvet alignment and symmetry',
      'Place decorative cushions per brand standard',
    ],
  },
  {
    category: 'Bathroom Inspection',
    icon: '🚿',
    items: [
      'Clean and disinfect toilet, seat and base',
      'Scrub shower/bath and remove limescale',
      'Polish all chrome fixtures to shine',
      'Clean mirror with streak-free product',
      'Replace all amenities (shampoo, soap, gel)',
      'Replace towels — count and fold per standard',
      'Clean and dry all surfaces',
      'Check grout and report if discoloured',
    ],
  },
  {
    category: 'Bedroom Surfaces & Furniture',
    icon: '🪑',
    items: [
      'Dust all surfaces including behind furniture',
      'Wipe TV screen and remote control',
      'Clean minibar exterior and restock if needed',
      'Check all drawers and wardrobe interior',
      'Inspect and clean telephone handset',
      'Polish wooden furniture',
      'Replace stationery and guest information',
    ],
  },
  {
    category: 'Floor & Air Quality',
    icon: '🧹',
    items: [
      'Vacuum carpet or mop hard floors',
      'Check under bed for lost items or dust',
      'Inspect skirting boards and corners',
      'Check air conditioning filter (monthly)',
      'Ensure no odours — use approved freshener',
    ],
  },
  {
    category: 'Final Quality Inspection',
    icon: '✅',
    items: [
      'Cross-check against room standard photo',
      'Verify all lights functional',
      'Check TV channels and remote batteries',
      'Confirm safe is reset and functional',
      'Sign off room inspection card',
      'Update room status in PMS',
    ],
  },
]

const checklistFR = [
  {
    category: 'Entrée et inspection initiale',
    icon: '🚪',
    items: [
      'Frapper et annoncer son entrée',
      'Évaluer l\'état général de la chambre',
      'Ouvrir les rideaux et inspecter la luminosité',
      'Signaler les dommages ou problèmes de maintenance',
      'Vérifier l\'état DND enregistré en système',
    ],
  },
  {
    category: 'Literie et linge',
    icon: '🛏️',
    items: [
      'Retirer et remplacer toute la literie',
      'Vérifier l\'état du protège-matelas',
      'Inspecter oreillers et taies',
      'Plis d\'hôpital ou pliage selon la norme de la marque',
      'Vérifier alignement et symétrie de la couette',
      'Disposer les coussins décoratifs selon le standard',
    ],
  },
  {
    category: 'Salle de bain',
    icon: '🚿',
    items: [
      'Nettoyer et désinfecter WC, abattant et base',
      'Récurer douche/baignoire et détartrer',
      'Faire briller tous les éléments chromés',
      'Nettoyer le miroir sans traces',
      'Remplacer tous les produits (shampooing, savon, gel)',
      'Remplacer les serviettes selon le pliage standard',
      'Nettoyer et sécher toutes les surfaces',
      'Vérifier les joints et signaler si décolorés',
    ],
  },
  {
    category: 'Surfaces et mobilier',
    icon: '🪑',
    items: [
      'Dépoussiérer toutes les surfaces et derrière les meubles',
      'Essuyer l\'écran TV et la télécommande',
      'Nettoyer le minibar et réapprovisionner si nécessaire',
      'Vérifier tiroirs et intérieur de l\'armoire',
      'Inspecter et nettoyer le combiné téléphonique',
      'Lustrer le mobilier en bois',
      'Remplacer la papeterie et les informations client',
    ],
  },
  {
    category: 'Sol et qualité de l\'air',
    icon: '🧹',
    items: [
      'Aspirer la moquette ou laver le sol dur',
      'Vérifier sous le lit (objets oubliés, poussière)',
      'Inspecter les plinthes et les coins',
      'Contrôler le filtre climatiseur (mensuel)',
      'S\'assurer de l\'absence d\'odeurs (désodorisant approuvé)',
    ],
  },
  {
    category: 'Contrôle qualité final',
    icon: '✅',
    items: [
      'Comparer avec la photo standard de la chambre',
      'Vérifier le bon fonctionnement de tous les éclairages',
      'Tester les chaînes TV et les piles de la télécommande',
      'Confirmer le bon fonctionnement du coffre-fort',
      'Signer la fiche de contrôle chambre',
      'Mettre à jour le statut chambre dans le PMS',
    ],
  },
]

export default async function HotelHousekeepingChecklist({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'
  const checklist = isEN ? checklistEN : checklistFR

  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-[#1A2E44] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-[#2E7D32] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            {isEN ? 'Free Resource' : 'Ressource Gratuite'}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {isEN
              ? 'Hotel Housekeeping Checklist'
              : 'Checklist Housekeeping Hôtel'}
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            {isEN
              ? 'A complete room inspection checklist used by luxury hotels across Europe. Free to use — upgrade to the full Housekeeping Playbook for SOPs, training guides and audit templates.'
              : 'Une checklist d\'inspection de chambre complète, utilisée par des hôtels de luxe en Europe. Gratuite — passez au Housekeeping Playbook complet pour les SOPs, guides de formation et modèles d\'audit.'}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-[#1A2E44] mb-4">
          {isEN ? 'Why use a housekeeping checklist?' : 'Pourquoi utiliser une checklist housekeeping ?'}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEN
            ? 'A structured hotel housekeeping checklist eliminates inconsistency across your team. Whether you manage a boutique property or a multi-outlet luxury hotel, a room inspection checklist ensures every room meets the same standard — every time, regardless of who is on shift.'
            : 'Une checklist housekeeping structurée élimine les incohérences au sein de votre équipe. Que vous gériez un boutique-hôtel ou un établissement de luxe multi-services, une fiche d\'inspection garantit que chaque chambre respecte le même standard, à chaque fois, quel que soit le personnel en poste.'}
        </p>
        <p className="text-gray-600 leading-relaxed">
          {isEN
            ? 'This hotel housekeeping inspection checklist covers all key areas: bedding, bathroom, surfaces, floors and final quality sign-off. It is structured to match the flow of a room service, saving time and reducing errors.'
            : 'Cette checklist d\'inspection housekeeping couvre tous les points clés : literie, salle de bain, surfaces, sols et contrôle qualité final. Elle est structurée pour suivre le flux d\'une remise en état de chambre, permettant de gagner du temps et de réduire les erreurs.'}
        </p>
      </section>

      {/* Checklist */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold text-[#1A2E44] mb-8">
          {isEN ? 'Complete Room Inspection Checklist' : 'Checklist complète d\'inspection de chambre'}
        </h2>

        <div className="space-y-6">
          {checklist.map((section, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-[#F5F7FA] px-5 py-4 flex items-center gap-3">
                <span className="text-xl">{section.icon}</span>
                <h3 className="font-semibold text-[#1A2E44]">{section.category}</h3>
              </div>
              <ul className="divide-y divide-gray-100">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 px-5 py-3 text-sm text-gray-700">
                    <span className="mt-0.5 w-4 h-4 rounded border-2 border-gray-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F7FA] py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-4">
            {isEN ? 'Want the complete Housekeeping system?' : 'Vous voulez le système Housekeeping complet ?'}
          </h2>
          <p className="text-gray-600 mb-8">
            {isEN
              ? 'The LuxOps Housekeeping Playbook includes 10 chapters, 40+ SOPs, audit templates, staff training guides and full PDF + PowerPoint files — ready to use on day one.'
              : 'Le Housekeeping Playbook LuxOps comprend 10 chapitres, 40+ SOPs, modèles d\'audit, guides de formation et fichiers PDF + PowerPoint complets, prêts à l\'emploi dès le premier jour.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}#playbooks`}
              className="bg-[#1A2E44] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#0f1e2e] transition-colors"
            >
              {isEN ? 'View Housekeeping Playbook — €67' : 'Voir le Housekeeping Playbook — 67€'}
            </Link>
            <Link
              href={`/${locale}#playbooks`}
              className="border-2 border-[#1A2E44] text-[#1A2E44] px-8 py-4 rounded-xl font-semibold hover:bg-[#1A2E44] hover:text-white transition-colors"
            >
              {isEN ? 'View All Playbooks' : 'Voir tous les Playbooks'}
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold text-[#1A2E44] mb-6">
          {isEN ? 'Related resources' : 'Ressources associées'}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href={`/${locale}/housekeeping-sop`} className="border border-gray-200 rounded-xl p-5 hover:border-[#1A2E44] transition-colors group">
            <p className="font-semibold text-[#1A2E44] group-hover:underline">
              {isEN ? 'Housekeeping SOP Guide' : 'Guide SOP Housekeeping'}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {isEN ? 'Standard operating procedures for housekeeping teams' : 'Procédures opérationnelles standard pour les équipes housekeeping'}
            </p>
          </Link>
          <Link href={`/${locale}/hotel-audit-checklist`} className="border border-gray-200 rounded-xl p-5 hover:border-[#1A2E44] transition-colors group">
            <p className="font-semibold text-[#1A2E44] group-hover:underline">
              {isEN ? 'Hotel Audit Checklist' : 'Checklist Audit Hôtelier'}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {isEN ? 'Quality audit templates for luxury hotels' : 'Modèles d\'audit qualité pour hôtels de luxe'}
            </p>
          </Link>
        </div>
      </section>

    </main>
  )
}
