import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel Operational Checklists: What Actually Makes Them Useful | LuxOps'
      : 'Checklists Opérationnelles Hôtel : Ce qui les rend vraiment utiles | LuxOps',
    description: isEN
      ? 'Hotel checklists only work when built around a role, a shift, and a specific control point. This guide explains what makes operational checklists useful in practice.'
      : "Une checklist hôtelière n'est utile que si elle est construite autour d'un rôle, d'un moment et d'un point de contrôle précis. Ce guide explique ce qui les rend efficaces en pratique.",
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/hotel-checklist`,
      languages: {
        'en': 'https://www.luxops.fr/en/hotel-checklist',
        'fr': 'https://www.luxops.fr/fr/hotel-checklist',
        'x-default': 'https://www.luxops.fr/en/hotel-checklist',
      },
    },
  }
}

const WHY_FAIL_EN = [
  {
    title: 'They are not attached to a responsibility',
    body: 'A checklist without an owner is rarely completed properly. When the same list is shared across a whole department, no one is clearly accountable for each item.',
  },
  {
    title: 'They ignore timing',
    body: 'An opening checklist and a closing checklist serve completely different purposes. A generic daily checklist that collapses both into one document gives the team nothing useful to act on.',
  },
  {
    title: 'They do not reflect the operational moment',
    body: 'Room readiness before a VIP arrival is a different check from a standard clean verification. A supervisor inspection after a complaint is different from a routine floor round. The same checklist cannot serve all these situations.',
  },
  {
    title: 'They help teams tick boxes, not act',
    body: 'A checklist should prompt action or verification at a precise point in the operation. If it is too broad, it becomes a formality rather than a control tool.',
  },
]

const WHY_FAIL_FR = [
  {
    title: 'Elles ne sont rattachées à aucune responsabilité',
    body: "Une checklist sans propriétaire est rarement complétée correctement. Quand la même liste est partagée à l'ensemble d'un département, personne n'est clairement responsable de chaque point.",
  },
  {
    title: 'Elles ignorent le moment de la journée',
    body: "Une checklist d'ouverture et une checklist de fermeture n'ont pas les mêmes objectifs. Un document quotidien générique qui regroupe les deux ne donne à l'équipe rien d'opérationnel sur lequel s'appuyer.",
  },
  {
    title: 'Elles ne reflètent pas le moment opérationnel',
    body: "La préparation d'une chambre avant une arrivée VIP n'est pas le même contrôle qu'une vérification de remise en état standard. Une inspection superviseur après une plainte n'est pas la même chose qu'une ronde de couloir habituelle. Une seule checklist ne peut pas couvrir toutes ces situations.",
  },
  {
    title: 'Elles aident les équipes à cocher des cases, pas à agir',
    body: "Une checklist doit déclencher une action ou une vérification à un moment précis de l'opération. Si elle est trop large, elle devient une formalité plutôt qu'un outil de contrôle.",
  },
]

const PRINCIPLES_EN = [
  {
    title: 'Role',
    body: 'Who uses this checklist and what they are responsible for. A room attendant checklist is not a supervisor checklist. The person using it determines what the list needs to cover.',
  },
  {
    title: 'Timing',
    body: 'When in the shift or service sequence does this checklist get used. Opening, mid-shift, handover, closing, post-incident. The timing shapes what must be on it.',
  },
  {
    title: 'Objective',
    body: 'What must be secured by completing this checklist. Room readiness, service standard compliance, stock levels, safety. The objective determines the level of detail required.',
  },
  {
    title: 'Control point',
    body: 'What must be verified before moving on. The sign-off moment. A checklist without a defined control point is often completed but not acted on.',
  },
]

const PRINCIPLES_FR = [
  {
    title: 'Le rôle',
    body: "Qui utilise cette checklist et de quoi cette personne est responsable. Une checklist d'équipier n'est pas une checklist superviseur. La personne qui l'utilise détermine ce que la liste doit couvrir.",
  },
  {
    title: 'Le moment',
    body: "À quel moment du service cette checklist est utilisée. Ouverture, milieu de service, passation, fermeture, post-incident. Le moment détermine ce qui doit y figurer.",
  },
  {
    title: "L'objectif",
    body: "Ce qui doit être sécurisé en complétant cette checklist. Disponibilité des chambres, conformité aux standards, niveaux de stock, sécurité. L'objectif détermine le niveau de détail requis.",
  },
  {
    title: 'Le point de contrôle',
    body: "Ce qui doit être vérifié avant de passer à l'étape suivante. Le moment de validation. Une checklist sans point de contrôle défini est souvent complétée sans être exploitée.",
  },
]

const MOMENTS_EN = [
  {
    title: 'Opening checklist',
    description:
      'Used at the start of a shift or service period to confirm that all conditions are in place before the operation begins. Covers equipment, stock, staffing and any carry-over items from the previous shift.',
  },
  {
    title: 'Shift handover checklist',
    description:
      'Structured transfer of information between outgoing and incoming shift. Captures open tasks, guest requests, pending maintenance, and anything requiring follow-up. One of the most critical documents in day-to-day operations.',
  },
  {
    title: 'Supervisor inspection checklist',
    description:
      'Used by a manager or team leader to verify work completed by the team. Not a task list. A targeted quality control tool focused on standard compliance and exception flagging.',
  },
  {
    title: 'Closing checklist',
    description:
      'End-of-service verification that all tasks have been completed, areas secured, and the operation handed over or closed correctly. Varies significantly by department.',
  },
  {
    title: 'VIP preparation checklist',
    description:
      'A dedicated sequence for high-priority arrivals. Covers room readiness, amenities placement, pre-arrival communication, and any specific guest instructions confirmed by the front office.',
  },
  {
    title: 'Room readiness checklist',
    description:
      'Used by a room attendant or supervisor before releasing a room as clean and available. More specific than a general cleaning task list. Focused on the final state of the room against the property standard.',
  },
  {
    title: 'Incident follow-up checklist',
    description:
      'Structured response tool used after a guest complaint, maintenance failure or service issue. Ensures follow-up actions are tracked, communicated and signed off.',
  },
]

const MOMENTS_FR = [
  {
    title: "Checklist d'ouverture",
    description:
      "Utilisée au début d'un service pour confirmer que toutes les conditions sont réunies avant le début de l'opération. Couvre l'équipement, les stocks, la présence des équipes et les points en suspens du service précédent.",
  },
  {
    title: 'Checklist de passation de service',
    description:
      "Transfert structuré d'informations entre le service sortant et le service entrant. Capture les tâches ouvertes, les demandes clients, les maintenances en attente et tout ce qui nécessite un suivi. L'un des documents les plus importants dans les opérations quotidiennes.",
  },
  {
    title: "Checklist d'inspection superviseur",
    description:
      "Utilisée par un manager ou un chef d'équipe pour vérifier le travail réalisé par l'équipe. Pas une liste de tâches. Un outil de contrôle qualité ciblé sur la conformité aux standards et la détection des écarts.",
  },
  {
    title: 'Checklist de fermeture',
    description:
      "Vérification en fin de service que toutes les tâches ont été réalisées, les espaces sécurisés et l'opération transmise ou fermée correctement. Varie significativement selon le département.",
  },
  {
    title: 'Checklist de préparation VIP',
    description:
      "Séquence dédiée aux arrivées prioritaires. Couvre la disponibilité de la chambre, le placement des amenités, la communication pré-arrivée et les instructions spécifiques confirmées par la réception.",
  },
  {
    title: 'Checklist de disponibilité chambre',
    description:
      "Utilisée par un équipier housekeeping ou un superviseur avant de libérer une chambre comme propre et disponible. Plus précise qu'une liste de tâches de nettoyage. Centrée sur l'état final de la chambre par rapport au standard de l'établissement.",
  },
  {
    title: 'Checklist de suivi post-incident',
    description:
      "Outil de réponse structuré utilisé après une plainte client, une défaillance technique ou un problème de service. Assure le suivi des actions, leur communication et leur validation.",
  },
]

const ROLES_EN = [
  {
    role: 'Front desk agent',
    note: 'Check-in sequences, billing verification, pre-arrival preparation, shift opening tasks.',
  },
  {
    role: 'Housekeeping room attendant',
    note: 'Room cleaning sequence, trolley setup, amenities replenishment, room status update.',
  },
  {
    role: 'F&B shift leader',
    note: 'Service opening, mise en place verification, team briefing, closing and handover.',
  },
  {
    role: 'Housekeeping or floor supervisor',
    note: 'Room inspection sign-off, public area rounds, team task allocation, complaint follow-up.',
  },
  {
    role: 'Duty manager or department head',
    note: 'Cross-department handover, incident review, VIP coordination, end-of-day reporting.',
  },
]

const ROLES_FR = [
  {
    role: 'Réceptionniste',
    note: "Séquences de check-in, vérification de facturation, préparation pré-arrivée, ouverture de service.",
  },
  {
    role: 'Équipier housekeeping',
    note: "Séquence de remise en état, préparation du chariot, réapprovisionnement des amenités, mise à jour du statut chambre.",
  },
  {
    role: 'Chef de rang ou responsable de service F&B',
    note: "Ouverture de service, vérification de la mise en place, briefing d'équipe, fermeture et passation.",
  },
  {
    role: 'Gouvernante d\'étage ou superviseur housekeeping',
    note: "Validation d'inspection chambre, rondes des espaces communs, répartition des tâches, suivi des réclamations.",
  },
  {
    role: 'Directeur de service ou chef de département',
    note: "Passation inter-départements, revue des incidents, coordination VIP, reporting de fin de journée.",
  },
]

export default async function HotelChecklistPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'

  const whyFail = isEN ? WHY_FAIL_EN : WHY_FAIL_FR
  const principles = isEN ? PRINCIPLES_EN : PRINCIPLES_FR
  const moments = isEN ? MOMENTS_EN : MOMENTS_FR
  const roles = isEN ? ROLES_EN : ROLES_FR

  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-[#1A2E44] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
            {isEN ? 'Hotel Operations' : 'Opérations hôtelières'}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {isEN
              ? 'Hotel Operational Checklists: What Actually Makes Them Useful'
              : 'Checklists Hôtel : Ce qui les rend vraiment utiles'}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            {isEN
              ? 'Most hotel checklists fail because they are too generic. A useful checklist is always tied to a role, a shift, and a specific operational need.'
              : "La plupart des checklists hôtelières échouent parce qu'elles sont trop génériques. Une checklist utile est toujours liée à un rôle, un moment et un besoin opérationnel précis."}
          </p>
          <Link
            href={`/${locale}/playbooks`}
            className="inline-block bg-white text-[#1A2E44] font-semibold px-8 py-4 rounded-lg transition-colors hover:bg-gray-100"
          >
            {isEN ? 'View Complete SOP Playbooks' : 'Voir les Playbooks complets'}
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-4">
            {isEN
              ? 'Generic checklists rarely match how hotels actually run'
              : 'Une checklist générique ne reflète pas la façon dont un hôtel fonctionne réellement'}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            {isEN
              ? 'In real hotel operations, a checklist is only useful when it belongs to someone at a specific moment in the day. A front desk opening checklist is not the same document as a shift handover checklist. A room attendant sequence card is not the same as a supervisor inspection form. Treating them as interchangeable is where most generic templates fall apart.'
              : "Dans les opérations hôtelières réelles, une checklist n'est utile que lorsqu'elle appartient à quelqu'un, à un moment précis de la journée. La checklist d'ouverture de la réception n'est pas le même document que la fiche de passation de service. La séquence de travail d'un équipier housekeeping n'est pas la même chose qu'une grille d'inspection superviseur. Traiter ces outils comme interchangeables, c'est là que la plupart des modèles génériques échouent."}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {isEN
              ? 'The checklists that teams actually use are built around a shift, a handover, a service opening, or a control point that matters to a specific person. When those conditions are met, a checklist becomes a real operational tool. When they are not, it sits on a shelf.'
              : "Les checklists que les équipes utilisent réellement sont construites autour d'un service, d'une passation, d'une ouverture de point de vente ou d'un point de contrôle qui compte pour une personne précise. Quand ces conditions sont réunies, une checklist devient un vrai outil opérationnel. Sinon, elle reste dans un tiroir."}
          </p>
        </div>
      </section>

      {/* Why generic checklists fail */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-2">
            {isEN
              ? 'Why generic hotel checklists usually fail'
              : 'Pourquoi les checklists hôtelières génériques échouent généralement'}
          </h2>
          <p className="text-gray-500 text-sm mb-10">
            {isEN
              ? 'Four patterns that make a checklist ineffective in practice.'
              : 'Quatre raisons qui rendent une checklist inefficace en pratique.'}
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {whyFail.map((item) => (
              <div key={item.title} className="border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-[#1A2E44] mb-2 text-base">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 px-6 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-2">
            {isEN
              ? 'What a useful hotel checklist is built around'
              : 'Sur quoi repose une checklist hôtelière vraiment utile'}
          </h2>
          <p className="text-gray-500 text-sm mb-10">
            {isEN
              ? 'Four conditions that make the difference between a checklist that is used and one that is ignored.'
              : "Quatre conditions qui font la différence entre une checklist utilisée et une checklist ignorée."}
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {principles.map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#0056D2] flex-shrink-0" />
                  <h3 className="font-semibold text-[#1A2E44] text-base">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples by moment */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-2">
            {isEN
              ? 'Examples of operational checklists by moment'
              : 'Exemples de checklists opérationnelles par moment'}
          </h2>
          <p className="text-gray-500 text-sm mb-10">
            {isEN
              ? 'Each of these serves a different purpose. They are not interchangeable.'
              : "Chacune de ces checklists a un objectif différent. Elles ne sont pas interchangeables."}
          </p>
          <div className="space-y-4">
            {moments.map((item) => (
              <div key={item.title} className="border border-gray-100 rounded-xl px-6 py-5">
                <h3 className="font-semibold text-[#1A2E44] mb-1 text-sm">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples by role */}
      <section className="py-16 px-6 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-2">
            {isEN ? 'Examples by role' : 'Exemples par rôle'}
          </h2>
          <p className="text-gray-500 text-sm mb-10">
            {isEN
              ? 'The role determines the scope and depth of the checklist.'
              : "Le rôle détermine le périmètre et le niveau de détail de la checklist."}
          </p>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
            {roles.map((item) => (
              <div key={item.role} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 bg-white px-6 py-5">
                <span className="text-sm font-semibold text-[#1A2E44] sm:w-56 flex-shrink-0">{item.role}</span>
                <span className="text-sm text-gray-600 leading-relaxed">{item.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist vs procedure */}
      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-4">
            {isEN ? 'A checklist is not a procedure' : "Une checklist n'est pas une procédure"}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            {isEN
              ? 'This distinction matters in practice. A checklist tells the team what must be verified at a given moment. It does not explain the full method. The procedure, SOP, or playbook sits behind it. When a room attendant checks that the bathroom meets standard, the checklist captures the sign-off. The SOP explains exactly how the bathroom should be cleaned to reach that standard.'
              : "Cette distinction a des conséquences concrètes. Une checklist indique à l'équipe ce qui doit être vérifié à un moment donné. Elle n'explique pas la méthode complète. La procédure, la SOP ou le playbook se trouve derrière. Quand un équipier housekeeping valide que la salle de bain est conforme au standard, la checklist capture la validation. La procédure explique exactement comment la salle de bain doit être nettoyée pour atteindre ce standard."}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {isEN
              ? 'A checklist without a procedure behind it is often too shallow to be reliable. A procedure without a checklist to verify it is difficult to control consistently. The two tools work together. Neither replaces the other.'
              : "Une checklist sans procédure derrière elle est souvent trop superficielle pour être fiable. Une procédure sans checklist pour la contrôler est difficile à piloter de façon cohérente. Les deux outils fonctionnent ensemble. Aucun ne remplace l'autre."}
          </p>
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
                ? 'See what role-specific, shift-ready hotel checklists look like in practice.'
                : 'Découvrez à quoi ressemblent des checklists hôtelières par rôle et par moment de service.'}
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

      {/* CTA */}
      <section className="bg-[#1A2E44] py-16 px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            {isEN
              ? 'Operational tools built to be used by teams'
              : 'Des outils opérationnels conçus pour être utilisés par les équipes'}
          </h2>
          <p className="text-gray-300 mb-8">
            {isEN
              ? 'The LuxOps playbooks include the procedures, service standards, checklists, and control tools that support consistent day-to-day execution. Built for front office, housekeeping, F&B and spa departments.'
              : "Les playbooks LuxOps intègrent les procédures, les standards de service, les checklists et les outils de contrôle qui soutiennent une exécution quotidienne cohérente. Conçus pour la réception, le housekeeping, le F&B et le spa."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/playbooks`}
              className="inline-block bg-white text-[#1A2E44] font-semibold px-8 py-4 rounded-lg transition-colors hover:bg-gray-100"
            >
              {isEN ? 'View All Playbooks' : 'Voir tous les Playbooks'}
            </Link>
            <Link
              href={`/${locale}/playbooks`}
              className="inline-block border border-white/40 text-white font-semibold px-8 py-4 rounded-lg transition-colors hover:bg-white/10"
            >
              {isEN ? 'Get the Bundle · €199' : 'Obtenir le Bundle · 199€'}
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
