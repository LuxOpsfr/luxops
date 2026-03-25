import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel Staff Training — Practical Methods for Hospitality Teams | LuxOps'
      : 'Formation du Personnel Hôtelier — Méthodes Pratiques pour les Équipes | LuxOps',
    description: isEN
      ? 'Hotel staff training methods that build real operational consistency. From onboarding to department-specific SOPs, structured training that reduces turnover impact and raises service standards.'
      : 'Méthodes de formation du personnel hôtelier qui construisent une vraie régularité opérationnelle. De l\'intégration aux SOPs par département, une formation structurée qui réduit l\'impact du turnover et élève les standards de service.',
    keywords: isEN
      ? 'hotel staff training, hospitality staff training, hotel employee training programme, hotel training methods, luxury hotel staff training'
      : 'formation personnel hôtelier, formation staff hôtelier, programme formation personnel hôtel, méthodes formation hôtelière, formation personnel hôtel de luxe',
  }
}

const TOPICS_EN = [
  {
    title: 'Department-specific procedure training',
    body: 'Generic hospitality training covers broad principles. Department-specific training is where consistency is actually built. A room attendant needs a different training programme than a receptionist or a spa therapist. Each role has distinct procedures, distinct quality indicators and distinct moments where the guest experience depends on what the team member does next. Training at the role level, with written procedures as the foundation, creates teams that hold a standard rather than approximate it.',
  },
  {
    title: 'Structured onboarding for new hires',
    body: 'The first weeks of a new team member\'s employment determine their long-term habits. A structured onboarding programme introduces the property\'s standards before informal habits form. It pairs the new hire with a supervisor who validates competency at each stage, rather than assuming it. And it gives the new hire a written reference they can consult independently without repeatedly interrupting colleagues.',
  },
  {
    title: 'Training that accounts for turnover',
    body: 'Hotel operations face consistent staff turnover. A training programme that relies on experienced team members to pass on knowledge informally is fragile: when those people leave, the knowledge leaves with them. Structured training solves this by making procedures explicit and documented. A new hire trained to a written standard reaches operational proficiency faster and more reliably than one trained by observation alone.',
  },
  {
    title: 'Supervisory and management training',
    body: 'Front-line teams perform to the level their supervisors reinforce. Training supervisors to run effective pre-shift briefings, conduct structured room or area inspections and coach individuals in the moment creates a daily quality reinforcement mechanism that operates without requiring management intervention. The supervisor is the most important training lever in a hotel operation.',
  },
  {
    title: 'Cross-department service standards',
    body: 'Guest satisfaction gaps are most often created at the intersection of departments rather than within them. The handover from housekeeping to reception when a room is ready. The communication between reception and F&B for in-room dining. Training cross-department coordination means making these handover points visible, giving each team a clear protocol and creating accountability for the moments that fall between job descriptions.',
  },
]

const TOPICS_FR = [
  {
    title: 'Formation aux procédures par département',
    body: 'La formation générale en hôtellerie couvre des principes larges. La formation par département est là où la régularité se construit réellement. Une équipière a besoin d\'un programme de formation différent d\'un réceptionniste ou d\'un thérapeute spa. Chaque rôle a des procédures distinctes, des indicateurs qualité distincts et des moments où l\'expérience client dépend de ce que le collaborateur fait ensuite. Former au niveau du poste, avec des procédures écrites comme base, crée des équipes qui tiennent un standard plutôt que de l\'approximer.',
  },
  {
    title: 'Intégration structurée pour les nouvelles recrues',
    body: 'Les premières semaines d\'un nouveau collaborateur déterminent ses habitudes à long terme. Un programme d\'intégration structuré introduit les standards de l\'établissement avant que des habitudes informelles ne se forment. Il associe le nouveau venu à un superviseur qui valide la compétence à chaque étape, plutôt que de la supposer. Et il donne au nouveau collaborateur un référentiel écrit qu\'il peut consulter de façon autonome sans interrompre constamment ses collègues.',
  },
  {
    title: 'Une formation qui prend en compte le turnover',
    body: 'Les exploitations hôtelières font face à un turnover constant. Un programme de formation qui repose sur des membres expérimentés pour transmettre les savoir-faire informellement est fragile : quand ces personnes partent, les connaissances partent avec elles. La formation structurée résout ce problème en rendant les procédures explicites et documentées. Un nouveau collaborateur formé à un standard écrit atteint la maîtrise opérationnelle plus rapidement et plus sûrement que celui formé par observation seule.',
  },
  {
    title: 'Formation des superviseurs et managers',
    body: 'Les équipes de terrain performent au niveau que leurs superviseurs renforcent. Former les superviseurs à animer des briefings pré-service efficaces, conduire des inspections structurées de chambres ou d\'espaces et coacher les individus en temps réel crée un mécanisme de renforcement quotidien de la qualité qui fonctionne sans nécessiter l\'intervention de la direction. Le superviseur est le levier de formation le plus important dans une exploitation hôtelière.',
  },
  {
    title: 'Standards de service inter-départements',
    body: 'Les écarts de satisfaction client se créent le plus souvent à l\'intersection des départements plutôt qu\'en leur sein. La passation du housekeeping à la réception quand une chambre est prête. La communication entre la réception et le F&B pour le room service. Former la coordination inter-départements signifie rendre ces points de passation visibles, donner à chaque équipe un protocole clair et créer une responsabilité pour les moments qui se situent entre les fiches de poste.',
  },
]

export default async function HotelStaffTrainingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'
  const topics = isEN ? TOPICS_EN : TOPICS_FR

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-[#1A2E44] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#2E7D32] text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
            {isEN ? 'Hotel Staff Training' : 'Formation Personnel Hôtelier'}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {isEN
              ? 'Hotel Staff Training: From Onboarding to Operational Excellence'
              : 'Formation du Personnel Hôtelier : De l\'Intégration à l\'Excellence Opérationnelle'}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            {isEN
              ? 'Hospitality training that stays with the team after the session. Written procedures, structured modules and on-site delivery designed for the realities of hotel operations: high turnover, multi-department coordination and service standards that must hold across every shift.'
              : 'Une formation hôtelière qui reste avec l\'équipe après la session. Procédures écrites, modules structurés et déploiement sur site conçus pour les réalités des opérations hôtelières : fort turnover, coordination multi-départements et standards de service qui doivent tenir à chaque service.'}
          </p>
          <Link
            href={`/${locale}/formation`}
            className="inline-block bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
          >
            {isEN ? 'Discover Our On-Site Training' : 'Découvrir la Formation sur Site'}
          </Link>
        </div>
      </section>

      {/* What separates effective training */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-6">
            {isEN ? 'What separates effective hotel staff training from generic hospitality courses' : 'Ce qui distingue une formation du personnel hôtelier efficace des cours d\'hôtellerie génériques'}
          </h2>
          {isEN ? (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                Generic hospitality training builds awareness. It introduces service principles, covers broad etiquette and gives participants a framework for thinking about guest experience. It is useful as a foundation. It is not sufficient as a training programme for a hotel operation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Effective hotel staff training is role-specific, procedure-based and delivered in the property where the work happens. It trains the exact sequence a room attendant follows to prepare a departing room. It trains the exact phrase a receptionist uses to offer an upgrade. It trains the inspection routine a supervisor runs before releasing a floor. Specificity is what makes training transferable into consistent daily performance.
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                La formation générale en hôtellerie développe la sensibilisation. Elle introduit les principes de service, couvre l\'étiquette générale et donne aux participants un cadre pour réfléchir à l\'expérience client. Elle est utile comme base. Elle n\'est pas suffisante comme programme de formation pour une exploitation hôtelière.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Une formation efficace du personnel hôtelier est spécifique au rôle, basée sur des procédures et délivrée dans l\'établissement où le travail se déroule. Elle forme la séquence exacte qu\'une équipière suit pour préparer une chambre départ. Elle forme la phrase exacte qu\'un réceptionniste utilise pour proposer une surclasse. Elle forme la routine d\'inspection qu\'un superviseur effectue avant de libérer un étage. La spécificité est ce qui rend la formation transférable en performance quotidienne régulière.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Topics */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-8">
            {isEN ? 'Key areas of hotel staff training' : 'Domaines clés de la formation du personnel hôtelier'}
          </h2>
          <div className="space-y-6">
            {topics.map((item) => (
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
            {isEN ? 'On-site training built around your team and your procedures' : 'Une formation sur site construite autour de votre équipe et de vos procédures'}
          </h2>
          {isEN ? (
            <p className="text-gray-600 leading-relaxed mb-8">
              LuxOps training sessions are delivered on-site, structured around the department playbooks your team receives at the end of the session. Each participant leaves with a written reference for their role. The training builds the habit. The playbook maintains it between sessions and through staff changes.
            </p>
          ) : (
            <p className="text-gray-600 leading-relaxed mb-8">
              Les sessions de formation LuxOps sont délivrées sur site, structurées autour des playbooks de département que votre équipe reçoit à la fin de la session. Chaque participant repart avec un référentiel écrit pour son poste. La formation construit l\'habitude. Le playbook la maintient entre les sessions et malgré les changements d\'équipe.
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
