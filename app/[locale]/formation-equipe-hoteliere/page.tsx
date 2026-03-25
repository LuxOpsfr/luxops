import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel Team Training — Giving Every Department the Same Level of Structure and Consistency | LuxOps'
      : "Formation Équipe Hôtelière — Donner à Chaque Département le Même Niveau de Cadre | LuxOps",
    description: isEN
      ? 'Hotel team training that builds consistency across departments. Onboarding, SOP deployment, cross-department coordination and a quality framework that holds between shifts.'
      : "Formation équipe hôtelière qui construit la régularité dans tous les départements. Intégration, déploiement des SOPs, coordination inter-départements et un cadre qualité qui tient entre les services.",
    keywords: isEN
      ? 'hotel team training, hotel operations training, hospitality team training, hotel onboarding training, hotel department training'
      : 'formation équipe hôtelière, formation collaborateurs hôtel, formation opérations hôtelières, formation staff hôtel, programme formation hôtellerie',
  }
}

const PILLARS_EN = [
  {
    title: 'Onboarding that builds the right habits',
    body: "In many hotels, onboarding is still limited to administrative steps, a property tour and a few days shadowing a colleague. That is not enough. Good onboarding lays out the working methods from the start, provides a clear reference for the first weeks and includes a validation step before solo working begins. The first weeks matter enormously. They are often where the habits that persist for months are formed.",
  },
  {
    title: 'SOPs that are actually explained, not just handed over',
    body: "SOPs are worthless if the team receives them as just another document. For them to be used, they need to be put in context, their logic explained, the link between each step and the guest outcome made clear, with space for questions. That is the step that turns a document into a working method.",
  },
  {
    title: 'Better coordination between departments',
    body: "Many guest problems do not come from poor individual execution. They come from the handover between departments. A room that is clean but not yet released. A guest request that never gets passed on. Information that arrives too late. Training a hotel team therefore means not only training each department separately. It also means clarifying the contact points between them and securing the moments where one depends on the other.",
  },
  {
    title: 'Briefings that actually serve the shift',
    body: "A useful briefing is not about reading through the day's programme. It aligns the team on priorities, flags sensitive points, resets the expected standard and prepares the team before service begins. Training managers and supervisors to do this well makes a real difference. A good briefing has an immediate impact on execution. A poor briefing quickly becomes just another routine.",
  },
  {
    title: 'Methods that hold despite turnover',
    body: "Turnover is part of hotel reality. The point is not to pretend it can be avoided entirely, but to stop it from permanently undermining the service level. When knowledge stays with individuals, every departure creates a gap. When methods are written, transmitted and reinforced in a structured way, they stay with the property. They do not leave with whoever last trained the newest team member.",
  },
]

const PILLARS_FR = [
  {
    title: 'Une intégration qui installe les bonnes habitudes',
    body: "Dans beaucoup d'hôtels, l'intégration se limite encore aux sujets administratifs, à la visite de l'établissement et à quelques jours passés à suivre un collègue. Cela ne suffit pas. Une bonne intégration pose d'emblée les méthodes de travail, donne un support clair pour les premières semaines, et prévoit une validation avant la mise en autonomie. Les premières semaines comptent énormément. C'est souvent là que se fixent les habitudes qui resteront ensuite pendant des mois.",
  },
  {
    title: 'Des SOP réellement expliquées, pas seulement remises',
    body: "Des SOP ne servent à rien si les équipes les reçoivent comme un document de plus. Pour qu'elles soient utilisées, il faut les remettre en contexte, expliquer leur logique, montrer le lien entre chaque étape et le résultat pour le client, puis laisser de la place aux questions. C'est ce passage-là qui transforme un document en méthode de travail.",
  },
  {
    title: 'Une meilleure coordination entre départements',
    body: "Beaucoup de problèmes clients ne viennent pas d'une mauvaise exécution isolée. Ils viennent du passage de relais entre services. Une chambre propre mais pas encore libérée. Une demande client qui ne remonte pas. Une information transmise trop tard. Former une équipe hôtelière, ce n'est donc pas seulement former chaque département séparément. C'est aussi clarifier les points de contact entre eux et sécuriser les moments où l'un dépend de l'autre.",
  },
  {
    title: 'Des briefings qui servent vraiment au service',
    body: "Un briefing utile ne consiste pas à relire le programme du jour. Il sert à rappeler les priorités, à signaler les points sensibles, à remettre le niveau attendu au bon endroit, et à préparer l'équipe avant le service. Former les managers et superviseurs à faire cela correctement change beaucoup. Un bon briefing a un effet immédiat sur l'exécution. Un mauvais briefing devient vite une routine de plus.",
  },
  {
    title: 'Des méthodes qui tiennent malgré le turnover',
    body: "Le turnover fait partie de la réalité hôtelière. Le vrai sujet, ce n'est pas de l'éviter complètement, c'est d'empêcher qu'il fragilise en permanence le niveau de service. Quand une équipe dépend trop des habitudes de quelques personnes, chaque départ crée un vide. Quand les méthodes sont écrites, transmises et reprises de manière structurée, elles restent dans l'établissement. Elles ne repartent pas avec celui ou celle qui a formé la dernière recrue.",
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
            {isEN ? 'Hotel Team Training' : 'Formation Équipe Hôtelière'}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {isEN
              ? "Hotel Team Training: giving every department the same level of structure and consistency"
              : "Formation Équipe Hôtelière : donner à chaque département le même niveau de cadre et de régularité"}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            {isEN
              ? "A hotel team does not become consistent because a few people are solid. It becomes consistent when everyone works with the same reference points, the same expectations and the same methods. Not after a quick onboarding visit or a few days of observation. But with clear procedures, supervised practice and a working framework the teams can rely on in their daily service."
              : "Une équipe hôtelière ne devient pas régulière parce que quelques personnes sont solides. Elle le devient quand chacun travaille avec les mêmes repères, les mêmes attentes et les mêmes méthodes. Pas après une simple visite d'intégration ou quelques jours d'observation. Mais avec des procédures claires, une pratique encadrée, et un cadre de travail que les équipes retrouvent ensuite dans leur service."}
          </p>
          <Link
            href={`/${locale}/formation`}
            className="inline-block bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
          >
            {isEN ? 'Discover Our On-Site Training' : 'Découvrir la Formation sur Site'}
          </Link>
        </div>
      </section>

      {/* Ce qui rend une équipe performante */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-6">
            {isEN ? 'What makes a hotel team consistently good' : 'Ce qui rend une équipe régulièrement performante'}
          </h2>
          {isEN ? (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                Consistency does not rest on individual talent. It rests on shared standards. When every team member, regardless of their role or experience level, knows what is expected and how to do it, the service holds over time. It holds from one shift to the next, from one manager to another, and it is far more resilient to turnover.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Building that consistency requires three things: written procedures that clearly set the expected level, training that transmits them within a structured framework, and daily follow-up capable of correcting gaps before they become habits.
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                {"La régularité ne repose pas sur le talent individuel. Elle repose sur des standards partagés. Quand chaque membre d'une équipe, quel que soit son poste ou son niveau d'expérience, sait ce qu'on attend de lui et comment le faire, le service tient mieux dans le temps. Il tient d'un shift à l'autre, d'un manager à l'autre, et résiste beaucoup mieux au turnover."}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {"Pour construire cette régularité, il faut trois choses. Des procédures écrites qui posent clairement le niveau attendu. Une formation qui les transmet dans un cadre structuré. Et un suivi quotidien capable de corriger les écarts avant qu'ils ne deviennent des habitudes."}
              </p>
            </>
          )}
        </div>
      </section>

      {/* Piliers */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-8">
            {isEN ? 'The pillars of effective hotel team training' : "Les piliers d'une formation équipe hôtelière efficace"}
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

      {/* Cross-sell */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-6">
            {isEN ? 'Training with tools the team keeps afterwards' : "Former avec des outils que l'équipe garde ensuite"}
          </h2>
          {isEN ? (
            <p className="text-gray-600 leading-relaxed mb-8">
              On-site training has far more value when it does not stop at the end of the session. At LuxOps, training sessions are built around playbooks and procedures that teams can use in their daily work afterwards. Every participant leaves with a written framework their department can continue to use, revisit, pass on and build on. The training installs the reflexes. The materials help maintain them.
            </p>
          ) : (
            <p className="text-gray-600 leading-relaxed mb-8">
              {"Une formation sur site a plus de valeur quand elle ne s'arrête pas à la fin de la session. Chez LuxOps, les formations sont construites autour de playbooks et de procédures que les équipes peuvent reprendre ensuite dans leur quotidien. Chaque participant repart avec un cadre écrit que son département peut continuer à utiliser, relire, transmettre et faire évoluer. La formation installe les réflexes. Les supports permettent de les maintenir."}
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
