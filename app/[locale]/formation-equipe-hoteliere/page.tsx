import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel Team Training — Structuring Operational Excellence Across Departments | LuxOps'
      : 'Formation Equipe Hôtelière — Structurer l\'Excellence Opérationnelle dans Tous les Départements | LuxOps',
    description: isEN
      ? 'Hotel team training that builds consistency across departments. Onboarding, SOP integration, cross-department coordination and a quality framework that holds between management shifts.'
      : 'Formation équipe hôtelière qui construit la régularité dans tous les départements. Intégration, déploiement des SOPs, coordination inter-départements et un cadre qualité qui tient entre les services.',
    keywords: isEN
      ? 'hotel team training, hotel staff training programme, hotel operations training, hotel employee training, hospitality team training'
      : 'formation équipe hôtelière, formation personnel hôtel, formation opérations hôtelières, formation staff hôtel, programme formation hôtellerie',
  }
}

const PILLARS_EN = [
  {
    title: 'Onboarding that builds operational habits',
    body: 'Most hotel onboarding programmes focus on administrative steps and a property tour. A structured onboarding programme goes further: it introduces new team members to the procedures of their role, gives them a written reference for their first weeks on the floor and pairs them with a supervisor who validates competency before solo operation begins. The first 30 days determine how a team member works for the next three years.',
  },
  {
    title: 'SOP integration across roles and departments',
    body: 'SOPs are only effective when the teams using them understand why each step exists. Training that introduces written procedures as a reference rather than a constraint creates better adoption. This means presenting SOPs in context, explaining the link between each step and the guest outcome, and giving teams the space to ask questions before the procedure becomes a daily habit.',
  },
  {
    title: 'Cross-department coordination',
    body: 'The most common source of guest dissatisfaction in hotels is not poor individual performance. It is the gap between departments: the room that is clean but not ready because housekeeping and reception did not communicate. The breakfast request that did not reach the kitchen. Training cross-department coordination means making the handover points explicit and giving each team a clear protocol for the moments that require joint action.',
  },
  {
    title: 'Shift briefings and daily quality reinforcement',
    body: 'A ten-minute pre-shift briefing, run consistently, is the most cost-effective quality tool in a hotel operation. It aligns the team before service begins, flags the day\'s priorities and gives the supervisor a daily opportunity to reinforce the standard. Training managers and supervisors to run effective briefings creates a multiplication effect: one trained supervisor reinforces the standard for an entire team, every day.',
  },
  {
    title: 'Turnover and knowledge transfer',
    body: 'High turnover is a structural reality in hospitality. A hotel team that depends on individuals to carry operational knowledge is permanently at risk. Structured training programmes reduce this risk by making the knowledge transferable: written procedures, documented standards and a training pathway that can be repeated for each new team member without relying on the memory of whoever trained last.',
  },
]

const PILLARS_FR = [
  {
    title: 'Une intégration qui construit des habitudes opérationnelles',
    body: 'La plupart des programmes d\'intégration hôteliers se concentrent sur les étapes administratives et la visite de l\'établissement. Un programme structuré va plus loin : il introduit les nouveaux membres au procédures de leur poste, leur donne un référentiel écrit pour leurs premières semaines sur le terrain et les associe à un superviseur qui valide la compétence avant que le travail en autonomie commence. Les 30 premiers jours déterminent comment un collaborateur travaillera pendant les trois années suivantes.',
  },
  {
    title: 'Déploiement des SOPs dans chaque rôle et département',
    body: 'Les SOPs ne sont efficaces que lorsque les équipes qui les utilisent comprennent pourquoi chaque étape existe. Une formation qui présente les procédures écrites comme un référentiel plutôt qu\'une contrainte crée une meilleure adoption. Cela signifie présenter les SOPs en contexte, expliquer le lien entre chaque étape et le résultat pour le client, et donner aux équipes l\'espace pour poser des questions avant que la procédure devienne une habitude quotidienne.',
  },
  {
    title: 'Coordination inter-départements',
    body: 'La source la plus fréquente d\'insatisfaction client dans les hôtels n\'est pas une mauvaise performance individuelle. C\'est le fossé entre les départements : la chambre propre mais pas prête parce que le housekeeping et la réception n\'ont pas communiqué. La demande de petit-déjeuner qui n\'est pas arrivée en cuisine. Former la coordination inter-départements signifie rendre explicites les points de passation et donner à chaque équipe un protocole clair pour les moments qui nécessitent une action conjointe.',
  },
  {
    title: 'Briefings de service et renforcement quotidien de la qualité',
    body: 'Un briefing pré-service de dix minutes, animé régulièrement, est l\'outil qualité le plus rentable dans une exploitation hôtelière. Il aligne l\'équipe avant le début du service, signale les priorités du jour et donne au superviseur une opportunité quotidienne de renforcer le standard. Former les managers et superviseurs à animer des briefings efficaces crée un effet de multiplication : un superviseur formé renforce le standard pour toute une équipe, chaque jour.',
  },
  {
    title: 'Turnover et transmission des savoir-faire',
    body: 'Un fort turnover est une réalité structurelle dans l\'hôtellerie. Une équipe hôtelière qui dépend d\'individus pour porter les savoir-faire opérationnels est en permanence fragilisée. Des programmes de formation structurés réduisent ce risque en rendant les connaissances transmissibles : procédures écrites, standards documentés et parcours de formation reproductible pour chaque nouveau collaborateur, sans dépendre de la mémoire de la personne qui a formé en dernier.',
  },
]

export default async function FormationEquipeHotelierePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'
  const pillars = isEN ? PILLARS_EN : PILLARS_FR

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-[#1A2E44] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#2E7D32] text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
            {isEN ? 'Hotel Team Training' : 'Formation Equipe Hôtelière'}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {isEN
              ? 'Hotel Team Training: Building Consistency Across Every Department'
              : 'Formation Equipe Hôtelière : Construire la Régularité dans Chaque Département'}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            {isEN
              ? 'A hotel team performs consistently when every member has been trained to the same standard. Not trained once and left to figure it out. Trained with written procedures, supervised practice and a quality framework that holds between shifts.'
              : 'Une équipe hôtelière performe avec régularité quand chaque membre a été formé au même standard. Pas formé une fois puis laissé se débrouiller. Formé avec des procédures écrites, une pratique supervisée et un cadre qualité qui tient entre les services.'}
          </p>
          <Link
            href={`/${locale}/formation`}
            className="inline-block bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
          >
            {isEN ? 'Discover Our On-Site Training' : 'Découvrir la Formation sur Site'}
          </Link>
        </div>
      </section>

      {/* What makes a hotel team consistent */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-6">
            {isEN ? 'What makes a hotel team consistently good' : 'Ce qui rend une équipe hôtelière régulièrement performante'}
          </h2>
          {isEN ? (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                Consistency in a hotel team is not a product of individual talent. It is a product of shared standards. When every team member, regardless of experience level or shift, knows exactly what is expected and how to deliver it, the result is a guest experience that holds across time, across managers and across the inevitable turnover of hospitality work.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Building that consistency requires three things: written procedures that define the standard clearly, training that introduces those procedures in a structured and supervised way, and a daily reinforcement mechanism that keeps the standard active rather than allowing it to drift. None of these three elements works without the other two.
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                La régularité d\'une équipe hôtelière n\'est pas le produit du talent individuel. C\'est le produit de standards partagés. Quand chaque membre de l\'équipe, quel que soit son niveau d\'expérience ou son service, sait exactement ce qui est attendu et comment le produire, le résultat est une expérience client qui tient dans le temps, entre les managers et malgré le turnover inhérent au travail hôtelier.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Construire cette régularité nécessite trois choses : des procédures écrites qui définissent le standard clairement, une formation qui introduit ces procédures de façon structurée et supervisée, et un mécanisme de renforcement quotidien qui maintient le standard actif plutôt que de le laisser dériver. Aucun de ces trois éléments ne fonctionne sans les deux autres.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Five pillars */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-8">
            {isEN ? 'Five pillars of effective hotel team training' : 'Cinq piliers d\'une formation équipe hôtelière efficace'}
          </h2>
          <div className="space-y-6">
            {pillars.map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-lg p-6">
                <h3 className="font-semibold text-[#1A2E44] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-6">
            {isEN ? 'Training your team with the tools they keep' : 'Former votre équipe avec les outils qu\'elle conserve'}
          </h2>
          {isEN ? (
            <p className="text-gray-600 leading-relaxed mb-8">
              LuxOps on-site training sessions are structured around the playbooks and procedures your team will use after the session ends. Every participant leaves with access to the written reference for their department. The training builds the habit. The playbook maintains it.
            </p>
          ) : (
            <p className="text-gray-600 leading-relaxed mb-8">
              Les sessions de formation sur site LuxOps sont structurées autour des playbooks et procédures que votre équipe utilisera après la fin de la session. Chaque participant repart avec l\'accès au référentiel écrit de son département. La formation construit l\'habitude. Le playbook la maintient.
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
              {isEN ? 'View All Playbooks' : 'Voir Tous les Playbooks'}
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
