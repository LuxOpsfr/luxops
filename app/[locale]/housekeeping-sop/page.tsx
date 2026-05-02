import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Housekeeping SOP: Complete Guide to Hotel Housekeeping Procedures | LuxOps'
      : 'SOP Housekeeping : Guide complet des procédures housekeeping hôtel | LuxOps',
    description: isEN
      ? 'A complete guide to housekeeping SOPs in hotels. Covers room attendant procedures, bed making, bathroom deep clean, supervisor inspection, linen management and turndown service. Standard operating procedures for every role.'
      : 'Guide complet des SOPs housekeeping en hôtellerie. Séquence chambre départ, recouche, réfection du lit, nettoyage salle de bain, service de couverture, inspection superviseur et gestion du linge.',
    keywords: isEN
      ? 'housekeeping sop, housekeeping standard operating procedures, sop for housekeeping, hotel housekeeping procedures, sop full form housekeeping, standard operating procedure in housekeeping, hotel housekeeping standard operating procedures, hotel cleaning sop, luxury hotel housekeeping'
      : 'sop housekeeping, procédures housekeeping hôtel, SOP gouvernante, procédures opérationnelles housekeeping hôtel, procédures standard housekeeping hôtel de luxe',
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/housekeeping-sop`,
      languages: {
        'en': 'https://www.luxops.fr/en/housekeeping-sop',
        'fr': 'https://www.luxops.fr/fr/housekeeping-sop',
        'x-default': 'https://www.luxops.fr/en/housekeeping-sop',
      },
    },
  }
}

const SOP_EN = [
  {
    title: 'Departing room cleaning sequence',
    body: 'The most detailed SOP in any housekeeping system. Covers entry protocol (knock, announce, check DND status), ventilation, stripping the bed and trolley handling, bathroom deep clean sequence (top to bottom, clean to dirty), amenity replacement, surface dusting (ceiling to floor), bed making to brand standard, floor treatment and final walkthrough. The sequence is fixed. Deviating from it, even with good intentions, creates inconsistencies that compound across a shift.',
  },
  {
    title: 'Stay-over room service (recouche)',
    body: 'A lighter sequence, but one that demands more judgment from the attendant. The guest\'s belongings must not be rearranged. The bathroom is refreshed, not deep cleaned. Towels are replaced only according to the property\'s linen change policy. The bed is made to the same standard as a departing room, without linen change unless the guest has indicated otherwise. What distinguishes a well-executed recouche is precisely this: the attendant knows what to touch and what to leave.',
  },
  {
    title: 'Bed making to brand standard',
    body: 'The most visible element of room presentation and the most frequently cited defect in housekeeping inspections. The standard covers linen order, alignment, fold type and depth, pillow count per room category, pillow placement, decorative cushion placement and orientation. The difference between a departing room bed and a turndown bed must be defined separately.',
  },
  {
    title: 'Bathroom deep clean',
    body: 'A strict directional logic applies: top to bottom, clean surfaces before dirty ones. Typical sequence: ceiling, extractor, high tiles, shower or bath, chrome polishing, toilet (exterior first, interior last), floor. Each product is assigned to specific surfaces. Limescale treatment, mirror finishing and amenity placement are defined at product and positioning level, not left to interpretation.',
  },
  {
    title: 'Turndown service',
    body: 'Defines what happens to the room during the guest\'s absence in the evening. Covers lighting adjustments, bed preparation (fold type, angle, slippers if applicable), amenity top-up, removal of room service trays, bathroom conditioning (fresh towels, amenity check) and departure sequence. The standard for a VIP turndown must be defined separately: additional items, personalisation touches and specific timing.',
  },
  {
    title: 'Supervisor room inspection protocol',
    body: 'The structured inspection process run by a supervisor before a room is released as clean. Defines inspection sequence, sign-off criteria, defect logging and the process for returning a room to an attendant when it does not meet standard. The supervisor who inspected the room should not be the same person who cleaned it.',
  },
  {
    title: 'Shift handover and linen reconciliation',
    body: 'Often the least documented but among the most operationally critical procedures. Covers trolley inventory and reconciliation, linen bag handover and count, room status update in the PMS, defect log completion and handover to the incoming supervisor, lost property logging and secure storage. An informal handover creates direct exposure to inventory losses, unresolved defects passing to the next shift, and PMS statuses that do not reflect actual room readiness.',
  },
  {
    title: 'Lost property procedure',
    body: 'What to do when an item is found in a guest room or public area. Logging, secure storage, guest notification process and the timeline for retention before disposal.',
  },
]

const SOP_FR = [
  {
    title: 'Séquence de remise en état chambre départ',
    body: 'La procédure la plus détaillée du système housekeeping. Elle couvre le protocole d\'entrée (frapper, annoncer, vérifier le statut DND), la ventilation, le stripper le lit et la gestion du chariot, la séquence de nettoyage approfondi de la salle de bain (du haut vers le bas, du propre vers le sale), le remplacement des amenities, le dépoussiérage des surfaces (du plafond vers le sol), la réfection du lit selon le standard, le traitement des sols et le passage final. La séquence est fixe. S\'en écarter crée des incohérences qui s\'accumulent sur un shift.',
  },
  {
    title: 'Service de recouche',
    body: 'Une procédure plus légère, mais qui demande plus de jugement de la part de l\'équipier. Les effets personnels du client ne doivent pas être déplacés. La salle de bain est rafraîchie, pas nettoyée en profondeur. Les serviettes sont remplacées selon la politique de linge de l\'établissement uniquement. Le lit est refait selon le même standard qu\'une chambre départ, sans changement de linge sauf indication contraire du client. Ce qui distingue une bonne recouche : l\'équipier sait ce qu\'il faut toucher et ce qu\'il faut laisser.',
  },
  {
    title: 'Réfection du lit selon le standard de la marque',
    body: 'L\'élément le plus visible de la présentation d\'une chambre et le défaut le plus fréquemment relevé en inspection. Le standard couvre l\'ordre du linge, l\'alignement, le type et la profondeur du rabat, le nombre d\'oreillers par catégorie de chambre, leur placement, le positionnement et l\'orientation des coussins décoratifs. La différence entre un lit chambre départ et un lit service de couverture doit être définie séparément.',
  },
  {
    title: 'Nettoyage approfondi de la salle de bain',
    body: 'Une logique directionnelle stricte s\'applique : du haut vers le bas, des surfaces propres vers les surfaces sales. Séquence type : plafond, VMC, faïences hautes, bac de douche ou baignoire, polissage des éléments chromés, WC (extérieur en premier, intérieur en dernier), sol. Chaque produit est assigné à des surfaces spécifiques. Le traitement du tartre, la technique de finition miroir et le placement des amenities sont définis au niveau du produit et du positionnement, pas laissés à l\'interprétation.',
  },
  {
    title: 'Service de couverture',
    body: 'Définit ce qui se passe dans la chambre en l\'absence du client en soirée. Couvre les ajustements d\'éclairage, la réalisation de la couverture (type de pliage, angle, positionnement des chaussons le cas échéant), le contrôle et le réapprovisionnement des amenities, le retrait des plateaux room service, la préparation de la salle de bain pour la nuit et la séquence de sortie. Le standard d\'un service de couverture VIP doit être défini séparément.',
  },
  {
    title: "Protocole d'inspection chambre superviseur",
    body: 'Le processus d\'inspection structuré réalisé par un superviseur avant qu\'une chambre soit libérée comme propre. Définit la séquence d\'inspection, les critères de validation, la consignation des défauts et la procédure de retour à l\'équipier quand la chambre n\'est pas conforme. La personne qui inspecte ne doit pas être celle qui a nettoyé la chambre.',
  },
  {
    title: 'Passation de service et comptage du linge',
    body: 'Souvent la procédure la moins documentée, mais parmi les plus critiques opérationnellement. Couvre l\'inventaire et le contrôle du chariot, la remise et le comptage des sacs de linge sale, la mise à jour des statuts chambre dans le PMS, la finalisation du relevé de défauts et la passation au superviseur suivant, la consignation et la mise en sécurité des objets trouvés. Une passation informelle crée une exposition directe aux pertes d\'inventaire, aux défauts non résolus transmis au shift suivant et à des statuts PMS qui ne reflètent pas la disponibilité réelle des chambres.',
  },
  {
    title: 'Procédure objets trouvés',
    body: 'Ce qu\'il faut faire quand un objet est trouvé dans une chambre ou un espace commun. Consignation, mise en sécurité, processus de notification client et délai de conservation avant disposition.',
  },
]

const FAQ_EN = [
  {
    question: 'What does SOP stand for in housekeeping?',
    answer: 'SOP stands for Standard Operating Procedure. In a hotel housekeeping context, it refers to a written document defining step by step how a specific task should be performed: the sequence, the materials, the standard and the completion criteria. Common examples include the room cleaning SOP, the bed making SOP, the supervisor inspection protocol and the linen management SOP.',
  },
  {
    question: 'What is the difference between a housekeeping SOP and a checklist?',
    answer: 'The SOP defines the method. The checklist verifies the result. The room cleaning SOP tells the attendant exactly how to clean the room: the sequence, the products, the standard for each surface. The supervisor inspection checklist, used afterward, confirms the room was cleaned to that standard. An SOP without a control mechanism has no accountability. A checklist without an SOP has no defined standard to check against.',
  },
  {
    question: 'What are the main SOPs in a hotel housekeeping department?',
    answer: 'The core housekeeping SOPs typically cover: departing room cleaning sequence, stay-over (recouche) service, bed making to brand standard, bathroom deep clean, turndown service, supervisor room inspection protocol, trolley setup and daily allocation, linen management and end-of-shift reconciliation. Properties with spa or additional guest services will have supplementary SOPs for those areas.',
  },
  {
    question: 'Who is responsible for writing housekeeping SOPs in a hotel?',
    answer: 'In most properties, the Executive Housekeeper is responsible for writing, maintaining and updating SOPs. The initial framework is often developed with the support of a consultant or adapted from an existing operational structure. SOPs must reflect the property\'s specific room categories, linen type, amenity standards and PMS workflow. Generic templates that are not adapted to the property produce inconsistent results.',
  },
  {
    question: 'How often should housekeeping SOPs be reviewed?',
    answer: 'Housekeeping SOPs should be reviewed whenever the standard changes: new linen supplier, new amenity brand, room renovation or PMS update. Beyond specific triggers, an annual review is a reasonable minimum. The most common issue is not outdated content but SOPs that were written correctly and never properly trained on, or trained on once and never reinforced.',
  },
]

const FAQ_FR = [
  {
    question: "Qu'est-ce qu'un SOP en housekeeping ?",
    answer: "SOP signifie Standard Operating Procedure, soit procédure opérationnelle standard. Dans le contexte du housekeeping hôtelier, cela désigne un document écrit qui définit étape par étape comment une tâche spécifique doit être réalisée : la séquence, les produits, le standard et les critères d'achèvement. Les exemples courants incluent le SOP de remise en état chambre départ, le SOP de réfection du lit, le protocole d'inspection superviseur et le SOP de gestion du linge.",
  },
  {
    question: 'Quelle est la différence entre un SOP housekeeping et une checklist ?',
    answer: "Le SOP définit la méthode. La checklist vérifie le résultat. Le SOP de remise en état indique précisément à l'équipier comment nettoyer la chambre : séquence, produits, standard pour chaque surface. La checklist d'inspection superviseur, utilisée ensuite, confirme que la chambre a été nettoyée selon ce standard. Un SOP sans mécanisme de contrôle n'a pas de redevabilité. Une checklist sans SOP n'a pas de standard défini à vérifier.",
  },
  {
    question: "Quelles sont les principales procédures d'un département housekeeping ?",
    answer: "Les SOPs essentiels couvrent généralement : la séquence de remise en état chambre départ, le service de recouche, la réfection du lit selon le standard de la marque, le nettoyage approfondi de la salle de bain, le service de couverture, le protocole d'inspection chambre superviseur, la préparation et la dotation du chariot, la gestion du linge et le comptage en fin de service. Les établissements avec spa ou services additionnels auront des SOPs supplémentaires pour ces activités.",
  },
  {
    question: 'Qui rédige les SOPs housekeeping dans un hôtel ?',
    answer: "Dans la plupart des établissements, c'est la gouvernante générale qui est responsable de la rédaction, du maintien et de la mise à jour des SOPs. Le cadre initial est souvent développé avec l'appui d'un consultant ou adapté à partir d'une structure opérationnelle existante. Les SOPs doivent refléter les spécificités de l'établissement : catégories de chambres, type de linge, standards amenities et workflow PMS. Les modèles génériques non adaptés à l'établissement produisent des résultats incohérents.",
  },
  {
    question: 'À quelle fréquence réviser les SOPs housekeeping ?',
    answer: "Les SOPs doivent être révisés à chaque changement de standard : nouveau fournisseur de linge, nouvelle marque d'amenities, rénovation des chambres ou mise à jour du PMS. Au-delà de ces déclencheurs, une révision annuelle est un minimum raisonnable. Le problème le plus fréquent n'est pas un contenu obsolète, mais des SOPs correctement rédigés et jamais formés, ou formés une fois et jamais renforcés.",
  },
]

export default async function HousekeepingSopPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'
  const sops = isEN ? SOP_EN : SOP_FR
  const faqs = isEN ? FAQ_EN : FAQ_FR

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isEN
      ? 'Housekeeping SOP: Complete Guide to Hotel Housekeeping Procedures'
      : 'SOP Housekeeping : Guide complet des procédures housekeeping hôtel',
    description: isEN
      ? 'A complete guide to housekeeping SOPs in hotels. Covers room attendant procedures, bed making, bathroom deep clean, supervisor inspection and linen management.'
      : 'Guide complet des SOPs housekeeping en hôtellerie. Séquence chambre départ, recouche, réfection du lit, nettoyage salle de bain et inspection superviseur.',
    author: { '@type': 'Organization', name: 'LuxOps', url: 'https://www.luxops.fr' },
    publisher: {
      '@type': 'Organization',
      name: 'LuxOps',
      url: 'https://www.luxops.fr',
      logo: { '@type': 'ImageObject', url: 'https://www.luxops.fr/og-image.png' },
    },
    url: `https://www.luxops.fr/${locale}/housekeeping-sop`,
    inLanguage: locale,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="bg-white">

        {/* Hero */}
        <section className="bg-[#1A2E44] text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-[#2E7D32] text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
              {isEN ? 'Housekeeping SOP' : 'Procédures housekeeping'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {isEN
                ? 'Housekeeping SOP: What It Covers and How to Structure One'
                : 'Procédures housekeeping : ce que couvre un SOP et comment le structurer'}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              {isEN
                ? 'A housekeeping SOP tells the team how to do the work. The checklist confirms it was done correctly. Both are needed. Neither replaces the other.'
                : "Les procédures housekeeping indiquent à l'équipe comment réaliser le travail. La checklist confirme qu'il a été réalisé correctement. Les deux sont nécessaires. Aucun ne remplace l'autre."}
            </p>
            <Link
              href={`/${locale}/playbooks/hsk`}
              className="inline-block bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
            >
              {isEN ? 'View Housekeeping Playbook' : 'Voir le Playbook Housekeeping'}
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
                  ? 'Download a free chapter of the Housekeeping Playbook'
                  : 'Téléchargez un chapitre gratuit du Playbook Housekeeping'}
              </p>
              <p className="text-sm text-[#4f6074]">
                {isEN
                  ? 'See what structured housekeeping procedures look like in practice.'
                  : "Découvrez à quoi ressemblent des procédures housekeeping structurées."}
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

        {/* Playbook excerpt */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto rounded-xl border border-[#d8e6f7] bg-[#f4f8ff] p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2E7D32] mb-3">
              {isEN ? 'Adapted from the LuxOps Housekeeping Playbook' : 'Adapté du Playbook Housekeeping LuxOps'}
            </p>
            <h2 className="text-2xl font-bold text-[#1A2E44] mb-4">
              {isEN ? 'A complete SOP includes timing, status and exception rules' : 'Une SOP complète inclut timing, statuts et règles d’exception'}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {isEN
                ? 'The departure room SOP in the LuxOps playbook is built around a 7-phase sequence, a 45-60 minute standard for a 25m² room, and a hard rule: a room marked Clean by the attendant is not sellable until a supervisor marks it Inspected.'
                : "La SOP chambre départ du playbook LuxOps repose sur une séquence en 7 phases, un standard de 45 à 60 minutes pour une chambre de 25m², et une règle ferme : une chambre passée en propre par l'équipier n'est pas vendable tant qu'une gouvernante ne l'a pas passée en inspectée."}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {(isEN ? [
                ['7-phase sequence', 'Assessment, bathroom, bedroom, bed, closet, minibar, final presentation.'],
                ['Inspection rule', '100% of departures inspected; 20-30% of stayovers spot-checked daily.'],
                ['Quality scoring', 'Bathroom 35, Bedroom 35, Presentation 20, Maintenance 10.'],
                ['Exceptions', 'Lost item, DND, suspected bed bugs or maintenance fault trigger immediate escalation.'],
              ] : [
                ['Séquence 7 phases', 'Évaluation, salle de bain, chambre, lit, penderie, minibar, présentation finale.'],
                ['Règle inspection', '100% des départs inspectés; 20-30% des recouches contrôlées chaque jour.'],
                ['Score qualité', 'Salle de bain 35, chambre 35, présentation 20, maintenance 10.'],
                ['Exceptions', 'Objet trouvé, DND, suspicion punaises ou panne maintenance déclenchent une escalade immédiate.'],
              ]).map(([title, body]) => (
                <div key={title} className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-[#1A2E44] mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What is a housekeeping SOP */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1A2E44] mb-6">
              {isEN ? 'What Is a Housekeeping SOP?' : "Qu'est-ce qu'un SOP housekeeping ?"}
            </h2>
            {isEN ? (
              <>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A housekeeping SOP (Standard Operating Procedure) is a written document that defines exactly how a specific task should be performed in a hotel housekeeping department. Not what needs to be done. That is the role of the checklist. How: the sequence of steps, the materials and products required, the standard to reach, and the point at which the task is considered complete.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In practice, a housekeeping department does not run on a single SOP. It runs on a set of them. The room attendant cleaning a departing room follows a different procedure from the one servicing a recouche. The floor supervisor running a room inspection follows a different procedure from the one completing a shift handover. Each role, each moment and each room type requires its own document.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The most common mistake is to confuse the SOP with the checklist. The SOP is the method. The checklist is the control. One tells the team how to do the work. The other confirms it was done correctly.
                </p>
              </>
            ) : (
              <>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Un SOP housekeeping (Standard Operating Procedure) est un document écrit qui définit précisément comment une tâche spécifique doit être réalisée dans un département housekeeping. Non pas ce qui doit être fait, c&apos;est le rôle de la checklist, mais comment : la séquence des étapes, les produits et matériels utilisés, le standard à atteindre, et le moment auquel la tâche est considérée comme terminée.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  En pratique, un département housekeeping ne fonctionne pas avec un seul SOP. Il en faut plusieurs. L&apos;équipier qui fait une chambre départ suit une procédure différente de celle utilisée pour une recouche. La gouvernante d&apos;étage qui réalise une inspection chambre suit une procédure différente de celle utilisée pour la passation de service en fin de shift. Chaque rôle, chaque moment et chaque type de chambre nécessite son propre document.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  L&apos;erreur la plus fréquente est de confondre le SOP avec la checklist. Le SOP est la méthode. La checklist est le contrôle. L&apos;un indique à l&apos;équipe comment réaliser le travail. L&apos;autre confirme qu&apos;il a été réalisé correctement.
                </p>
              </>
            )}
          </div>
        </section>

        {/* Two levels of housekeeping procedures */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1A2E44] mb-6">
              {isEN ? 'Two levels of housekeeping procedures' : 'Deux niveaux de procédures housekeeping'}
            </h2>
            {isEN ? (
              <>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Housekeeping SOPs operate at two distinct levels. The first is the attendant level: how to clean a room, how to make a bed to standard, how to set up a trolley, how to handle a DND room or a guest request encountered during a service. The second is the supervisory level: how to inspect a room before release, how to conduct a public area round, how to manage the shift handover and linen reconciliation.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  These two levels require different documents. The room attendant does not need the supervisor inspection protocol. The supervisor does not use the room cleaning sequence. Combining them into one document, or ignoring one of them entirely, is where most generic SOP templates fall short.
                </p>
              </>
            ) : (
              <>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Les SOPs housekeeping fonctionnent à deux niveaux distincts. Le premier est le niveau équipier : comment nettoyer une chambre, comment faire un lit selon le standard, comment préparer un chariot, comment gérer une chambre en DND ou une demande client rencontrée pendant le service. Le second est le niveau superviseur : comment inspecter une chambre avant libération, comment effectuer une ronde des espaces communs, comment gérer la passation de service et le comptage du linge.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Ces deux niveaux nécessitent des documents différents. L&apos;équipier housekeeping n&apos;a pas besoin du protocole d&apos;inspection superviseur. Le superviseur n&apos;utilise pas la séquence de remise en état. Les regrouper dans un seul document, ou ignorer l&apos;un d&apos;eux, c&apos;est là que la plupart des modèles génériques échouent.
                </p>
              </>
            )}
          </div>
        </section>

        {/* Core housekeeping SOPs */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1A2E44] mb-8">
              {isEN ? 'Core housekeeping SOPs' : 'Les SOPs housekeeping essentiels'}
            </h2>
            <div className="space-y-6">
              {sops.map((item) => (
                <div key={item.title} className="bg-white border border-gray-100 rounded-lg p-6">
                  <h3 className="font-semibold text-[#1A2E44] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How SOPs and checklists work together */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1A2E44] mb-6">
              {isEN ? 'How SOPs and checklists work together' : 'Comment les SOPs et les checklists fonctionnent ensemble'}
            </h2>
            {isEN ? (
              <>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Every SOP in a housekeeping system has a corresponding control moment where a checklist confirms compliance. The room cleaning SOP tells the attendant exactly how to clean the room. The room inspection checklist, run by the supervisor afterward, verifies the result. The turndown SOP defines the sequence. The supervisor sign-off confirms it was followed.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Without the SOP, the checklist has no standard to verify against. Without the checklist, the SOP has no control mechanism. For housekeeping teams to operate consistently across shifts, properties need both.
                </p>
              </>
            ) : (
              <>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Chaque procédure housekeeping a un moment de contrôle correspondant où une checklist confirme la conformité. La procédure de remise en état indique précisément à l&apos;équipier comment nettoyer la chambre. La checklist d&apos;inspection superviseur, réalisée ensuite, vérifie le résultat. La procédure de couverture définit la séquence. La validation superviseur confirme qu&apos;elle a été respectée.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Sans le SOP, la checklist n&apos;a pas de standard à vérifier. Sans la checklist, le SOP n&apos;a pas de mécanisme de contrôle. Pour que les équipes housekeeping opèrent de façon cohérente entre les services, les établissements ont besoin des deux.
                </p>
              </>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1A2E44] mb-8">
              {isEN ? 'Frequently Asked Questions' : 'Foire aux questions'}
            </h2>
            <div className="space-y-6">
              {faqs.map((item) => (
                <div key={item.question} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <h3 className="font-semibold text-[#1A2E44] mb-2">{item.question}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1A2E44] py-16 px-6 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              {isEN ? 'The complete housekeeping system' : 'Le système housekeeping complet'}
            </h2>
            <p className="text-gray-300 mb-8">
              {isEN
                ? 'The LuxOps Housekeeping Playbook covers both levels: room attendant procedures and supervisory control protocols. 10 chapters, inspection frameworks, training guides and shift management tools. PDF and PowerPoint, EN and FR.'
                : "Le Playbook Housekeeping LuxOps couvre les deux niveaux : procédures équipier et protocoles de contrôle superviseur. 10 chapitres, grilles d'inspection, guides de formation et outils de gestion de service. PDF et PowerPoint, EN et FR."}
            </p>
            <Link
              href={`/${locale}/playbooks/hsk`}
              className="inline-block bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              {isEN ? 'View Housekeeping Playbook' : 'Voir le Playbook Housekeeping'}
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}
