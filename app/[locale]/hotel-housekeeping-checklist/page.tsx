import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel Housekeeping Checklists: By Role, Shift and Control Point | LuxOps'
      : 'Checklists Housekeeping Hôtel : Par Rôle, Service et Point de Contrôle | LuxOps',
    description: isEN
      ? 'Housekeeping checklists for hotels built around role and shift, not generic categories. Room attendant sequence, supervisor inspection, shift handover and public area rounds.'
      : 'Checklists housekeeping hôtel construites autour du rôle et du service. Séquence équipier, inspection superviseur, passation de service et rondes espaces communs.',
    keywords: isEN
      ? 'hotel housekeeping checklist, housekeeping inspection checklist, room attendant checklist, supervisor inspection hotel, housekeeping shift handover, public area checklist hotel'
      : 'checklist housekeeping hotel, inspection superviseur housekeeping, séquence femme de chambre, passation de service housekeeping, contrôle espaces communs hôtel',
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

type ChecklistSection = {
  title: string
  context: string
  items: string[]
}

const SECTIONS_EN: ChecklistSection[] = [
  {
    title: 'Trolley and linen room setup — start of shift',
    context:
      'Used by the room attendant before leaving the linen room. Confirms everything needed for the full room block is on the trolley before the first room is entered.',
    items: [
      'Linen count matches assigned room block',
      'Towel stock loaded per property standard',
      'Amenity basket fully stocked',
      'Cleaning products checked and labelled',
      'Protective equipment available on trolley',
      'Maintenance request pad and pen on trolley',
      'Room assignment sheet received and reviewed',
      'Priority rooms (early arrivals, VIPs) identified',
    ],
  },
  {
    title: 'Room attendant cleaning sequence — standard room',
    context:
      'The step-by-step sequence for a departing or stay-over room clean. Follows a fixed order to ensure nothing is missed and time is used efficiently.',
    items: [
      'Knock, announce and check DND status before entry',
      'Open windows or ventilate, check overall room condition',
      'Strip bed linen, check mattress protector',
      'Clear bathroom: remove used amenities and towels',
      'Clean bathroom following sequence from clean to dirty zones',
      'Replace amenities and towels per fold and placement standard',
      'Make bed following brand standard (hospital corners or fold)',
      'Dust all surfaces: headboard, furniture, skirting boards',
      'Wipe TV screen, remote, telephone handset',
      'Vacuum or mop floor including under bed',
      'Final visual check against room photo standard',
      'Update room status on room sheet or PMS device',
    ],
  },
  {
    title: 'Supervisor room inspection — before room release',
    context:
      'Run by the floor supervisor or head housekeeper after the room attendant has completed the room. Not a cleaning checklist. A targeted quality verification tool.',
    items: [
      'Bed: alignment, fold standard, no creases',
      'Bathroom: no streaks on mirror, fixtures polished, no water marks',
      'Amenities: placement and quantity per standard',
      'Towels: fold correct, count correct',
      'Minibar: stocked and exterior clean',
      'All lights functioning',
      'Safe reset and functional',
      'No maintenance issues outstanding (if found, log immediately)',
      'Room scent: neutral, no cleaning product smell',
      'Confirm room status updated to clean and inspected',
    ],
  },
  {
    title: 'Public area and corridor check — morning round',
    context:
      'Used by the housekeeping team leader or supervisor during the morning shift. Covers all guest-facing areas outside rooms.',
    items: [
      'Lift interiors: mirrors clean, floors free of debris',
      'Corridors: no trolleys left unattended, no room service trays',
      'Stairwells: swept, no obstructions',
      'Lobby toilets: stocked, surfaces clean, no odour',
      'Pool or gym area (if applicable): towels folded, surfaces dry',
      'Back-of-house corridors: no linen bags blocking exits',
      'Log any maintenance issues found and report immediately',
    ],
  },
  {
    title: 'End of shift handover',
    context:
      'Completed by the outgoing supervisor or team leader before leaving. Ensures nothing falls through between shifts.',
    items: [
      'All assigned rooms completed or status noted',
      'Outstanding rooms flagged with reason (DND, maintenance, late departure)',
      'Maintenance requests logged and submitted',
      'Linen count completed and discrepancies noted',
      'Lost property found during shift logged and secured',
      'Any guest complaint or incident from the shift documented',
      'Incoming supervisor briefed verbally and document signed off',
    ],
  },
]

const SECTIONS_FR: ChecklistSection[] = [
  {
    title: 'Préparation du chariot et du linge — début de service',
    context:
      "Utilisée par la femme de chambre avant de quitter l'office. Confirme que tout le nécessaire pour le bloc de chambres assigné est sur le chariot avant d'entrer dans la première chambre.",
    items: [
      'Stock de linge correspondant au bloc de chambres assigné',
      "Serviettes chargées selon le standard de l'établissement",
      "Panier d'amenités complètement approvisionné",
      'Produits de nettoyage vérifiés et étiquetés',
      'Équipements de protection disponibles sur le chariot',
      'Bloc-notes et stylo pour les demandes de maintenance',
      "Feuille d'affectation des chambres reçue et consultée",
      'Chambres prioritaires identifiées (arrivées anticipées, VIPs)',
    ],
  },
  {
    title: 'Séquence de remise en état — chambre standard',
    context:
      "La séquence pas à pas pour une chambre départ ou recouche. Suit un ordre fixe pour s'assurer que rien n'est oublié et que le temps est utilisé efficacement.",
    items: [
      "Frapper, annoncer et vérifier l'état DND avant d'entrer",
      "Ouvrir les fenêtres ou aérer, évaluer l'état général de la chambre",
      'Retirer la literie, vérifier le protège-matelas',
      "Débarrasser la salle de bain : amenités usagées et serviettes",
      'Nettoyer la salle de bain en suivant la séquence du propre au sale',
      'Remplacer les amenités et serviettes selon le pliage et le placement standard',
      "Faire le lit selon le standard de la marque (plis d'hôpital ou rabat)",
      'Dépoussiérer toutes les surfaces : tête de lit, mobilier, plinthes',
      "Essuyer l'écran TV, la télécommande, le combiné téléphonique",
      'Aspirer ou laver le sol, y compris sous le lit',
      'Contrôle visuel final selon la photo standard de la chambre',
      "Mettre à jour le statut chambre sur la feuille ou l'appareil PMS",
    ],
  },
  {
    title: 'Inspection superviseur — avant libération de la chambre',
    context:
      "Réalisée par le superviseur d'étage ou la gouvernante après que la femme de chambre a terminé la chambre. Pas une checklist de nettoyage. Un outil de vérification qualité ciblé.",
    items: [
      'Literie : alignement, standard de pliage, sans faux plis',
      "Salle de bain : pas de traces sur le miroir, éléments chromés brillants, pas de traces d'eau",
      'Amenités : placement et quantité conformes au standard',
      'Serviettes : pliage correct, nombre correct',
      'Minibar : approvisionné et extérieur propre',
      'Tous les éclairages fonctionnels',
      'Coffre-fort réinitialisé et fonctionnel',
      'Pas de maintenances en attente (si constatées, signalement immédiat)',
      "Odeur de la chambre : neutre, pas d'odeur de produit ménager",
      'Confirmer la mise à jour du statut chambre : propre et inspecté',
    ],
  },
  {
    title: 'Contrôle des espaces communs et couloirs — ronde matinale',
    context:
      "Utilisée par le chef d'équipe ou superviseur housekeeping pendant le service du matin. Couvre tous les espaces à accès client hors chambres.",
    items: [
      'Ascenseurs : miroirs propres, sols sans débris',
      'Couloirs : pas de chariots laissés sans surveillance, pas de plateaux room service',
      "Cages d'escalier : balayées, sans obstruction",
      'Toilettes du lobby : approvisionnées, surfaces propres, sans odeur',
      'Espace piscine ou fitness (si applicable) : serviettes pliées, surfaces sèches',
      "Couloirs back-of-house : pas de sacs de linge bloquant les sorties",
      'Consigner et signaler immédiatement tout problème de maintenance',
    ],
  },
  {
    title: 'Passation de service en fin de journée',
    context:
      "Complétée par le superviseur sortant ou le chef d'équipe avant de partir. Garantit que rien n'est perdu entre deux services.",
    items: [
      'Toutes les chambres assignées terminées ou statut noté',
      'Chambres en suspens signalées avec la raison (DND, maintenance, départ tardif)',
      'Demandes de maintenance consignées et transmises',
      'Comptage du linge effectué et les écarts notés',
      'Objets trouvés pendant le service consignés et sécurisés',
      'Toute plainte ou incident du service documenté',
      'Superviseur entrant briefé verbalement et document validé',
    ],
  },
]

export default async function HotelHousekeepingChecklist({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'
  const sections = isEN ? SECTIONS_EN : SECTIONS_FR

  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-[#1A2E44] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {isEN
              ? 'Housekeeping Checklists That Reflect How the Department Actually Works'
              : 'Des Checklists Housekeeping qui Reflètent le Fonctionnement Réel du Département'}
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            {isEN
              ? 'A housekeeping department does not run on one checklist. It runs on several, each tied to a specific role, a specific moment, and a specific control point.'
              : 'Un département housekeeping ne fonctionne pas avec une seule checklist. Il en utilise plusieurs, chacune liée à un rôle précis, un moment précis et un point de contrôle précis.'}
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
          {isEN ? 'One checklist is not enough' : 'Une seule checklist ne suffit pas'}
        </h2>
        {isEN ? (
          <>
            <p className="text-gray-600 leading-relaxed mb-4">
              A room attendant starting her shift needs a trolley setup checklist. When she enters a room, she follows a
              cleaning sequence card. When the room is ready, a supervisor runs a separate inspection checklist before
              releasing the room status in the PMS. At the end of the shift, a handover document captures everything
              still open. These are four different tools. Each one serves a different purpose, belongs to a different
              person, and happens at a different moment.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Generic housekeeping checklists collapse all of this into one document. That is convenient to print and
              useless in practice. The sections below reflect how a housekeeping department actually operates.
            </p>
          </>
        ) : (
          <>
            <p className="text-gray-600 leading-relaxed mb-4">
              Une femme de chambre qui commence son service a besoin d&apos;une checklist de préparation du chariot.
              Quand elle entre dans une chambre, elle suit une séquence de remise en état. Quand la chambre est prête,
              un superviseur effectue une inspection distincte avant de libérer le statut dans le PMS. En fin de
              service, une passation documente tout ce qui reste en suspens. Ce sont quatre outils différents. Chacun
              sert un objectif différent, appartient à une personne différente et intervient à un moment différent.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Les checklists housekeeping génériques réduisent tout cela à un seul document. C&apos;est pratique à
              imprimer et inutile en pratique. Les sections ci-dessous reflètent le fonctionnement réel d&apos;un
              département housekeeping.
            </p>
          </>
        )}
      </section>

      {/* Checklist sections */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="space-y-8">
          {sections.map((section, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-[#F5F7FA] px-5 py-4">
                <h3 className="font-semibold text-[#1A2E44] text-base">{section.title}</h3>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">{section.context}</p>
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

      {/* Procedure section */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-gray-100">
        <h2 className="text-2xl font-bold text-[#1A2E44] mb-4">
          {isEN ? 'The procedure behind each checklist' : 'La procédure derrière chaque checklist'}
        </h2>
        {isEN ? (
          <>
            <p className="text-gray-600 leading-relaxed mb-4">
              Each of these checklists points to a method that sits behind it. The cleaning sequence card tells the room
              attendant what to do in order. The SOP explains how each task should be performed, what products to use,
              what the standard looks like when it is done correctly.
            </p>
            <p className="text-gray-600 leading-relaxed">
              A checklist confirms compliance. The SOP defines the standard being verified. For housekeeping teams that
              need both, the LuxOps Housekeeping Playbook covers the full system.
            </p>
          </>
        ) : (
          <>
            <p className="text-gray-600 leading-relaxed mb-4">
              Chacune de ces checklists renvoie à une méthode qui se trouve derrière elle. La séquence de remise en
              état indique à la femme de chambre ce qu&apos;elle doit faire et dans quel ordre. Le SOP explique comment
              chaque tâche doit être réalisée, quels produits utiliser, à quoi ressemble le standard quand il est
              correctement atteint.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Une checklist confirme la conformité. Le SOP définit le standard qui est vérifié. Pour les équipes
              housekeeping qui ont besoin des deux, le Playbook Housekeeping LuxOps couvre l&apos;ensemble du système.
            </p>
          </>
        )}
      </section>

      {/* CTA */}
      <section className="bg-[#1A2E44] py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            {isEN ? 'The complete housekeeping system' : 'Le système housekeeping complet'}
          </h2>
          <p className="text-blue-100 mb-8">
            {isEN
              ? 'The LuxOps Housekeeping Playbook includes the full SOP documentation, inspection frameworks, training guides, and control tools used by housekeeping teams across luxury and boutique properties. 10 chapters, ready to use.'
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

      {/* Related */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold text-[#1A2E44] mb-6">
          {isEN ? 'Related resources' : 'Ressources associées'}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href={`/${locale}/housekeeping-sop`}
            className="border border-gray-200 rounded-xl p-5 hover:border-[#1A2E44] transition-colors group"
          >
            <p className="font-semibold text-[#1A2E44] group-hover:underline">
              {isEN ? 'Housekeeping SOP Guide' : 'Guide SOP Housekeeping'}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {isEN
                ? 'Standard operating procedures for housekeeping teams'
                : 'Procédures opérationnelles standard pour les équipes housekeeping'}
            </p>
          </Link>
          <Link
            href={`/${locale}/hotel-checklist`}
            className="border border-gray-200 rounded-xl p-5 hover:border-[#1A2E44] transition-colors group"
          >
            <p className="font-semibold text-[#1A2E44] group-hover:underline">
              {isEN ? 'Hotel Operational Checklists' : 'Checklists Opérationnelles Hôtel'}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {isEN
                ? 'What makes hotel checklists actually useful in practice'
                : 'Ce qui rend les checklists hôtelières réellement utiles en pratique'}
            </p>
          </Link>
        </div>
      </section>

    </main>
  )
}
