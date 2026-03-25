import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel Housekeeping Training — Building a Consistent Cleaning Team | LuxOps'
      : 'Formation Housekeeping Hôtel — Structurer une Équipe de Ménage Performante | LuxOps',
    description: isEN
      ? 'Practical hotel housekeeping training methods. How to train room attendants, supervisors and housekeeping teams on SOPs, inspection protocols and quality standards.'
      : 'Méthodes concrètes de formation housekeeping hôtel. Former les équipiers, superviseurs et gouvernantes aux SOPs, protocoles d\'inspection et standards qualité.',
    keywords: isEN
      ? 'hotel housekeeping training, housekeeping staff training, hotel cleaning team training, housekeeping sop training, hotel housekeeping management'
      : 'formation housekeeping hôtel, former équipe housekeeping, formation ménage hôtel, formation gouvernante, formation équipe étages',
  }
}

const MODULES_EN = [
  {
    title: 'Room cleaning sequence and methods',
    body: 'Training room attendants on the exact sequence for a departing room, a stay-over room and a turndown service. Each has a different priority, a different time allocation and a different set of touch points. Teams that learn all three as variations of the same method work faster and more consistently than those trained on generic cleaning routines.',
  },
  {
    title: 'Bathroom and surface standards',
    body: 'The bathroom is the room guests inspect most carefully. Training covers product selection, surface order (clean to dirty), limescale and chrome protocol, amenity placement and the five points guests notice immediately. Consistent bathroom standards are among the highest-impact areas in a housekeeping training programme.',
  },
  {
    title: 'Linen handling and trolley organisation',
    body: 'How the trolley is loaded, how linen is counted and sorted, and how end-of-shift reconciliation is managed. Errors in linen management create downstream problems for the entire housekeeping operation. Training this process correctly from the start prevents avoidable losses and delays.',
  },
  {
    title: 'Supervisor inspection protocol',
    body: 'Inspecting a room before it is released is a skill that requires a structured approach. Training supervisors covers inspection sequence, defect identification, documentation and the process for returning a non-compliant room to the attendant without creating a service delay.',
  },
  {
    title: 'Guest interaction during service',
    body: 'What to say when a guest is encountered in the corridor, how to handle a DND room, how to respond to a request made directly to a room attendant. These micro-interactions shape the guest\'s perception of the team and the property. They are trainable, and they are often untrained.',
  },
  {
    title: 'Quality control and daily briefings',
    body: 'How to run a productive pre-shift briefing, how to use inspection results to coach individuals, and how to track room quality over time. Housekeeping quality is not maintained by inspection alone. It is maintained by teams who understand the standard and have a supervisor who reinforces it daily.',
  },
]

const MODULES_FR = [
  {
    title: 'Séquence de nettoyage et méthodes de remise en état',
    body: 'Former les équipiers à la séquence exacte pour une chambre départ, une chambre recouche et un service de couverture. Chacune a des priorités différentes, une allocation de temps différente et des points de vérification distincts. Les équipes formées sur les trois séquences comme des variations d\'une même méthode travaillent plus vite et plus régulièrement que celles formées sur des routines génériques.',
  },
  {
    title: 'Standards salle de bain et surfaces',
    body: 'La salle de bain est la zone que les clients inspectent le plus attentivement. La formation couvre la sélection des produits, l\'ordre de traitement des surfaces (du propre au sale), le protocole tartre et chrome, le placement des amenités et les cinq points que les clients repèrent immédiatement. Les standards salle de bain sont parmi les leviers les plus impactants d\'un programme de formation housekeeping.',
  },
  {
    title: 'Gestion du linge et organisation du chariot',
    body: 'Comment charger le chariot, compter et trier le linge, et gérer le bilan en fin de service. Les erreurs de gestion du linge créent des problèmes en cascade pour l\'ensemble de l\'exploitation housekeeping. Former ce processus correctement dès le départ prévient les pertes et les retards évitables.',
  },
  {
    title: 'Protocole d\'inspection superviseur',
    body: 'Inspecter une chambre avant libération est une compétence qui nécessite une approche structurée. La formation superviseur couvre la séquence d\'inspection, l\'identification des défauts, la documentation et le processus de retour d\'une chambre non conforme à l\'équipier sans créer de retard de service.',
  },
  {
    title: 'Interaction client pendant le service',
    body: 'Quoi dire quand un client est croisé dans le couloir, comment gérer une chambre en DND, comment répondre à une demande faite directement à l\'équipier. Ces micro-interactions façonnent la perception du client sur l\'équipe et l\'établissement. Elles se forment, et elles sont souvent ignorées.',
  },
  {
    title: 'Contrôle qualité et briefings quotidiens',
    body: 'Comment animer un briefing pré-service productif, comment utiliser les résultats d\'inspection pour coacher individuellement, et comment suivre la qualité des chambres dans le temps. La qualité housekeeping ne se maintient pas par l\'inspection seule. Elle se maintient par des équipes qui comprennent le standard et un superviseur qui le renforce quotidiennement.',
  },
]

export default async function FormationHousekeepingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'
  const modules = isEN ? MODULES_EN : MODULES_FR

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-[#1A2E44] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#2E7D32] text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
            {isEN ? 'Housekeeping Training' : 'Formation Housekeeping'}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {isEN
              ? 'Hotel Housekeeping Training: What to Cover and How to Structure It'
              : 'Formation Housekeeping Hôtel : Ce qu\'il Faut Couvrir et Comment la Structurer'}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            {isEN
              ? 'A housekeeping team that works consistently is trained consistently. That means documented methods, structured modules and supervisors who know how to reinforce the standard on the floor.'
              : 'Une équipe housekeeping qui travaille avec régularité est une équipe formée avec méthode. Cela suppose des procédures documentées, des modules structurés et des superviseurs capables de faire respecter le standard sur le terrain.'}
          </p>
          <Link
            href={`/${locale}/formation`}
            className="inline-block bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
          >
            {isEN ? 'Discover Our On-Site Training' : 'Découvrir la Formation sur Site'}
          </Link>
        </div>
      </section>

      {/* Why training fails */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-6">
            {isEN ? 'Why most housekeeping training does not hold' : 'Pourquoi la plupart des formations housekeeping ne tiennent pas'}
          </h2>
          {isEN ? (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                The most common pattern in hotel housekeeping training is a brief induction, a few days working alongside an experienced attendant and then solo rooms. The experienced attendant passes on their habits, which may or may not align with the property's standard. The supervisor inspects occasionally. Over time, standards drift.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Structured housekeeping training works differently. It begins with written procedures that define the standard precisely. It moves through supervised practice where the trainee demonstrates competency before working alone. It is reinforced by daily briefings and consistent inspections. The result is a team that holds a standard because they were trained to a standard, not to a person's habits.
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                Le schéma le plus courant en formation housekeeping hôtel est une induction courte, quelques jours aux côtés d'un équipier expérimenté, puis des chambres en autonomie. L'équipier expérimenté transmet ses habitudes, qui correspondent ou non au standard de l'établissement. Le superviseur contrôle occasionnellement. Avec le temps, les standards dérivent.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Une formation housekeeping structurée fonctionne différemment. Elle commence par des procédures écrites qui définissent le standard avec précision. Elle progresse par une pratique supervisée où le stagiaire démontre sa compétence avant de travailler seul. Elle est renforcée par des briefings quotidiens et des inspections régulières. Le résultat est une équipe qui tient un standard parce qu'elle a été formée à un standard, pas aux habitudes d'une personne.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Training modules */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-8">
            {isEN ? 'Core modules in a housekeeping training programme' : 'Modules essentiels d\'un programme de formation housekeeping'}
          </h2>
          <div className="space-y-6">
            {modules.map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-lg p-6">
                <h3 className="font-semibold text-[#1A2E44] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Playbook cross-sell */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-6">
            {isEN ? 'Training works better with written procedures' : 'La formation fonctionne mieux avec des procédures écrites'}
          </h2>
          {isEN ? (
            <p className="text-gray-600 leading-relaxed mb-8">
              An on-site training session covers the method and the practice. The Housekeeping Playbook gives your team the written reference they keep after the session. 10 chapters covering attendant procedures, supervisor protocols, linen management and quality control. PDF and PowerPoint included, in English and French.
            </p>
          ) : (
            <p className="text-gray-600 leading-relaxed mb-8">
              Une session de formation sur site couvre la méthode et la pratique. Le Playbook Housekeeping donne à votre équipe le référentiel écrit qu'elle conserve après la session. 10 chapitres couvrant les procédures équipier, les protocoles superviseur, la gestion du linge et le contrôle qualité. PDF et PowerPoint inclus, en français et en anglais.
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/${locale}/formation`}
              className="inline-block bg-[#1A2E44] hover:bg-[#16263a] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-center"
            >
              {isEN ? 'Book an On-Site Training' : 'Réserver une Formation sur Site'}
            </Link>
            <Link
              href={`/${locale}/playbooks`}
              className="inline-block border border-[#1A2E44] text-[#1A2E44] hover:bg-gray-50 font-semibold px-6 py-3 rounded-lg transition-colors text-center"
            >
              {isEN ? 'View Housekeeping Playbook' : 'Voir le Playbook Housekeeping'}
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
