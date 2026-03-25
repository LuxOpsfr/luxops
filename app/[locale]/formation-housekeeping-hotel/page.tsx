import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel Housekeeping Training — Building a Consistent Cleaning Team | LuxOps'
      : 'Formation Housekeeping Hôtel — Ce qu\'il Faut Vraiment Transmettre à une Équipe | LuxOps',
    description: isEN
      ? 'Practical hotel housekeeping training methods. How to train room attendants, supervisors and housekeeping teams on SOPs, inspection protocols and quality standards.'
      : 'Formation housekeeping hôtel structurée autour des séquences de service, des standards écrits et de l\'encadrement terrain. Méthodes concrètes pour installer un niveau qui tient dans le temps.',
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
    body: "Former une équipe housekeeping, ce n'est pas seulement montrer comment nettoyer une chambre. C'est transmettre un ordre de travail clair. Une chambre départ, une recouche et un service de couverture n'ont ni la même logique, ni le même rythme, ni les mêmes points de vigilance. Une bonne formation apprend aux équipiers à suivre une séquence stable, à gérer leur temps, et à contrôler ce qui doit l'être avant de quitter la chambre. C'est ce qui fait gagner en régularité et en efficacité.",
  },
  {
    title: 'Standards salle de bain et surfaces',
    body: "La salle de bain reste l'une des zones que le client remarque le plus vite. C'est souvent là que se voient les écarts de niveau. La formation doit donc couvrir de façon très concrète les produits à utiliser, l'ordre de traitement des surfaces, la gestion du tartre et du chrome, la remise en place des produits d'accueil, et les points que le client perçoit immédiatement. Quand ces standards sont bien transmis, l'impact sur la qualité perçue est immédiat.",
  },
  {
    title: 'Gestion du linge et organisation du chariot',
    body: "Une équipe peut perdre énormément de temps sur un mauvais chargement de chariot ou une gestion du linge mal maîtrisée. Il faut donc former les équipiers à préparer leur matériel, charger le chariot avec logique, trier correctement le linge, compter ce qui entre et ce qui sort, et garder une organisation simple jusqu'à la fin du service. Une mauvaise méthode ici crée très vite des retards, des oublis et des pertes évitables.",
  },
  {
    title: "Protocole d'inspection superviseur",
    body: "Contrôler une chambre ne consiste pas seulement à repérer des défauts. Il faut aussi savoir quoi vérifier, dans quel ordre, et comment faire un retour utile à l'équipier. La formation superviseur doit donc inclure la séquence d'inspection, l'identification des écarts, la manière de reprendre une chambre, et la façon de transformer le contrôle en outil de progression. Un bon superviseur ne se contente pas de constater, il aide à stabiliser le niveau.",
  },
  {
    title: 'Interaction client pendant le service',
    body: "Le housekeeping n'est pas seulement un département technique. C'est aussi un département que le client croise, observe et juge. Savoir saluer dans un couloir, répondre à une demande simple, gérer une chambre en DND ou adopter la bonne posture face à un client fait partie du métier. Ces interactions paraissent mineures, mais elles influencent directement la perception du service et de l'établissement. Elles doivent donc être intégrées à la formation.",
  },
  {
    title: 'Contrôle qualité et briefings quotidiens',
    body: "La qualité ne tient pas uniquement grâce aux inspections. Elle tient parce que les équipes savent ce qui est attendu, comprennent pourquoi cela compte, et sont reprises régulièrement sur les écarts. Un bon programme de formation housekeeping doit donc inclure les briefings de début de service, la lecture des résultats d'inspection, et la manière de coacher une équipe dans le temps. C'est ce qui permet de maintenir le standard au lieu de seulement le rappeler.",
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
              : "Formation Housekeeping Hôtel : ce qu'il faut vraiment transmettre à une équipe, et comment l'organiser"}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            {isEN
              ? 'A housekeeping team that works consistently is trained consistently. That means documented methods, structured modules and supervisors who know how to reinforce the standard on the floor.'
              : "Une équipe housekeeping régulière ne se construit pas avec quelques jours d'observation. Elle se construit avec une méthode claire, des standards écrits, des séquences de travail compréhensibles et un encadrement capable de reprendre, corriger et faire progresser les équipes sur le terrain. Lorsqu'une formation est bien structurée, les chambres sortent plus régulièrement, les écarts diminuent et les superviseurs passent moins de temps à compenser ce qui n'a jamais été vraiment transmis."}
          </p>
          <Link
            href={`/${locale}/formation`}
            className="inline-block bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
          >
            {isEN ? 'Discover Our On-Site Training' : 'Découvrir la Formation sur Site'}
          </Link>
        </div>
      </section>

      {/* Pourquoi ça ne tient pas */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-6">
            {isEN ? 'Why most housekeeping training does not hold' : 'Pourquoi la plupart des formations housekeeping ne tiennent pas'}
          </h2>
          {isEN ? (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                The most common pattern in hotel housekeeping training is a brief induction, a few days working alongside an experienced attendant and then solo rooms. The experienced attendant passes on their habits, which may or may not align with the property&apos;s standard. The supervisor inspects occasionally. Over time, standards drift.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Structured housekeeping training works differently. It begins with written procedures that define the standard precisely. It moves through supervised practice where the trainee demonstrates competency before working alone. It is reinforced by daily briefings and consistent inspections. The result is a team that holds a standard because they were trained to a standard, not to a person&apos;s habits.
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                {"Dans beaucoup d'hôtels, la formation housekeeping repose encore sur le même schéma : quelques jours en doublon avec un équipier expérimenté, puis une mise en autonomie rapide. Le problème, c'est que l'équipier transmet surtout ses habitudes, pas toujours le standard exact de l'établissement. Le superviseur repasse ensuite derrière, corrige ce qu'il peut, puis recommence avec la personne suivante. Avec le temps, les méthodes se déforment, les niveaux varient, et le service perd en régularité."}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {"Une formation housekeeping plus solide commence autrement. Elle pose d'abord des bases écrites. Elle distingue clairement les différents types de service. Elle prévoit une pratique encadrée avant l'autonomie. Et elle s'appuie sur des contrôles réguliers, des briefings courts et une reprise précise des écarts constatés. C'est ce qui permet d'installer un standard qui tient dans le temps, au lieu de dépendre uniquement des personnes présentes dans l'équipe."}
              </p>
            </>
          )}
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-8">
            {isEN ? 'Core modules in a housekeeping training programme' : "Modules essentiels d'un programme de formation housekeeping"}
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

      {/* Cross-sell */}
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
              {"Une formation sur site permet de transmettre la méthode et de corriger les gestes. Mais pour que cela tienne dans le temps, l'équipe doit aussi garder un référentiel clair. Le Playbook Housekeeping sert à cela. Il donne aux équipiers, aux superviseurs et aux managers une base écrite qu'ils peuvent reprendre après la session, utiliser à l'intégration, et relire lorsque le niveau commence à bouger. Il couvre les procédures équipier, les protocoles superviseur, la gestion du linge et le contrôle qualité, avec les supports inclus en PDF et PowerPoint, en français et en anglais."}
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
