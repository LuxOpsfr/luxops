import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel Team Training — Structuring Working Methods for More Consistent Teams | LuxOps'
      : "Formation équipe hôtelière : structurer les méthodes de travail pour des équipes plus régulières | LuxOps",
    description: isEN
      ? 'Hotel team training that builds real operational consistency. Department-specific procedures, structured onboarding, supervisor training and methods that hold despite turnover.'
      : "Formation équipe hôtelière structurée autour des procédures par département, de l'intégration et du suivi terrain. Des méthodes claires pour des équipes plus régulières, même face au turnover.",
    keywords: isEN
      ? 'hotel staff training, hospitality team training, hotel employee training programme, hotel training methods, luxury hotel team training'
      : "formation équipe hôtelière, formation collaborateurs hôtel, programme formation hôtellerie, méthodes formation hôtelière, formation équipe hôtel de luxe",
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/hotel-staff-training`,
      languages: {
        'en': 'https://www.luxops.fr/en/hotel-staff-training',
        'fr': 'https://www.luxops.fr/fr/hotel-staff-training',
        'x-default': 'https://www.luxops.fr/en/hotel-staff-training',
      },
    },
  }
}

const TOPICS_EN = [
  {
    title: 'Department-specific procedure training',
    body: "A housekeeping team, a reception desk, a restaurant or a spa do not operate on the same logic. Each department has its own sequences, controls, priorities and moments of truth for the guest. Training by department means building methods adapted to each role, not just general principles. That is where real consistency begins. When procedures are written, explained and properly reinforced, teams hold the standard rather than simply approximating it.",
  },
  {
    title: 'Structured onboarding for new team members',
    body: "The first weeks determine far more than most people realise. It is often when poor habits form, or when the right reflexes take hold. Structured onboarding sets the expected level from day one, verifies competency step by step and gives the new team member a clear reference to return to independently. This removes the dependency on whichever colleagues happen to be most available or most experienced at that moment.",
  },
  {
    title: 'Training built to hold despite turnover',
    body: "Turnover is part of hotel reality. The point is not to pretend it can be avoided entirely, but to stop it from permanently destabilising the service level. When knowledge stays oral, every departure creates a loss. When methods are written, transmitted and reinforced within a structured framework, they stay with the property. A new team member can reach the right level faster, with fewer errors and less uncertainty.",
  },
  {
    title: 'Supervisor and manager training',
    body: "In many hotels, quality holds or falls depending on the level of supervision. A good supervisor does not just observe. They know what to check, how to address a gap, how to run a useful briefing and how to keep the team at the right level before a problem becomes visible to the guest. Training supervisors and managers means giving them the means to maintain standards every day, on the floor, without depending permanently on senior management.",
  },
  {
    title: 'Cross-department service standards',
    body: "A large part of quality gaps does not come from an isolated department, but from the handover between services. A room ready but not released in time. A guest request poorly communicated. An unclear coordination between reception, housekeeping, F&B or maintenance. Training a hotel team also means clarifying these contact points. When responsibilities are clear and teams know what to pass on, to whom and when, service becomes more fluid and far more reliable.",
  },
]

const TOPICS_FR = [
  {
    title: 'Formation aux procédures par département',
    body: "Une équipe housekeeping, une réception, un restaurant ou un spa ne travaillent pas sur la même logique. Chaque département a ses séquences, ses contrôles, ses priorités et ses moments de vérité pour le client. Former par département permet donc de poser des méthodes adaptées au poste, et pas seulement des principes généraux. C'est là que la régularité commence vraiment. Quand les procédures sont écrites, expliquées et reprises correctement, les équipes tiennent mieux le standard au lieu de simplement s'en rapprocher.",
  },
  {
    title: 'Intégration structurée pour les nouvelles recrues',
    body: "Les premières semaines déterminent beaucoup plus qu'on ne le pense. C'est souvent à ce moment-là que les mauvaises habitudes s'installent, ou au contraire que les bons réflexes prennent. Une intégration structurée permet de poser le niveau attendu dès le départ, de vérifier les acquis étape par étape, et de donner au nouveau collaborateur un support clair auquel revenir. Cela évite de dépendre uniquement des collègues les plus disponibles ou les plus expérimentés du moment.",
  },
  {
    title: 'Une formation pensée pour tenir malgré le turnover',
    body: "Le turnover fait partie de la réalité hôtelière. Le sujet n'est pas de prétendre l'éviter totalement, mais d'empêcher qu'il déstabilise en permanence le niveau d'exécution. Quand les savoir-faire restent oraux, chaque départ crée une perte. Quand les méthodes sont écrites, transmises et reprises dans un cadre structuré, elles restent dans l'établissement. Une nouvelle recrue peut alors monter plus vite en niveau, avec moins d'erreurs et moins de flottement.",
  },
  {
    title: 'Formation des superviseurs et managers',
    body: "Dans beaucoup d'hôtels, la qualité tient ou retombe en fonction du niveau de supervision. Un bon superviseur ne se contente pas de constater. Il sait quoi contrôler, comment reprendre un écart, comment faire un briefing utile, et comment maintenir l'équipe au bon niveau sans attendre qu'un problème devienne visible pour le client. Former les superviseurs et les managers, c'est leur donner les moyens de faire vivre les standards chaque jour, sur le terrain, sans dépendre en permanence de la direction.",
  },
  {
    title: 'Standards de service inter-départements',
    body: "Une grande partie des écarts de qualité ne vient pas d'un département isolé, mais du passage de relais entre services. Une chambre prête mais pas libérée à temps. Une demande client mal transmise. Une coordination floue entre réception, housekeeping, F&B ou maintenance. Former une équipe hôtelière, c'est aussi clarifier ces points de contact. Quand les responsabilités sont posées et que les équipes savent ce qu'elles doivent transmettre, à qui et à quel moment, le service devient plus fluide et beaucoup plus sûr.",
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
            {isEN ? 'Hotel Team Training' : 'Formation Équipe Hôtelière'}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {isEN
              ? "Hotel Team Training: structuring working methods for more consistent teams"
              : "Formation équipe hôtelière : structurer les méthodes de travail pour des équipes plus régulières"}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            {isEN
              ? "A hotel team does not gain consistency simply because it has good people. It improves when the methods are clear, shared and reinforced coherently from one shift to the next. Training a hotel team is therefore not just about passing on service principles. It is about giving each department a concrete framework to work from, onboard new arrivals, maintain the level and prevent everything from resting on a few key individuals."
              : "Une équipe hôtelière ne gagne pas en régularité simplement parce qu'elle a de bonnes personnes. Elle progresse quand les méthodes sont claires, partagées et reprises de façon cohérente d'un service à l'autre. Former une équipe hôtelière, ce n'est donc pas seulement transmettre des principes de service. C'est donner à chaque service un cadre concret pour travailler, intégrer les nouveaux, maintenir le niveau et éviter que tout repose sur quelques personnes clés."}
          </p>
          <Link
            href={`/${locale}/formation`}
            className="inline-block bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
          >
            {isEN ? 'Discover Our On-Site Training' : 'Découvrir la Formation sur Site'}
          </Link>
        </div>
      </section>

      {/* Ce qui distingue */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-6">
            {isEN
              ? 'What sets effective hotel team training apart from a more general course'
              : "Ce qui distingue une vraie formation d'équipe hôtelière d'un cours plus général"}
          </h2>
          {isEN ? (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                A general hospitality course can lay useful foundations. It covers service, attitude, guest experience. But it often remains too broad for a real operation. In a hotel, teams need far more than that. They need to know what to do, in what order, to what expected level and how to respond when the day does not go as planned.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Effective hotel team training is tied to the role, the department and the real workings of the property. It does not stop at raising awareness. It transmits working methods, clear sequences, checkpoints and shared reference points. That is what allows a team to hold a level over time, rather than depending entirely on observation or individual habits.
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                {"Une formation générale en hôtellerie peut poser des bases utiles. Elle parle de service, d'attitude, d'expérience client. Mais elle reste souvent trop large pour une exploitation réelle. Dans un hôtel, les équipes ont besoin de beaucoup plus que cela. Elles ont besoin de savoir quoi faire, dans quel ordre, avec quel niveau attendu, et comment réagir quand la journée ne se passe pas comme prévu."}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {"Une formation efficace d'équipe hôtelière est liée au poste, au service et au fonctionnement réel de l'établissement. Elle ne se contente pas de sensibiliser. Elle transmet des méthodes de travail, des séquences claires, des points de contrôle et des repères communs. C'est cela qui permet à une équipe de tenir un niveau dans le temps, au lieu de dépendre uniquement de l'observation ou des habitudes de chacun."}
              </p>
            </>
          )}
        </div>
      </section>

      {/* Topics */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-8">
            {isEN ? 'Key areas of hotel team training' : "Domaines clés de la formation d'équipe hôtelière"}
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
            {isEN
              ? 'On-site training built around your teams and your procedures'
              : "Une formation sur site construite autour de vos équipes et de vos procédures"}
          </h2>
          {isEN ? (
            <p className="text-gray-600 leading-relaxed mb-8">
              Training has far more value when it takes place in the property, with the teams involved, starting from the realities of the operation. At LuxOps, sessions are built around the department procedures, then supported by playbooks the team keeps as a written reference. The training installs the reflexes. The materials maintain them over time, even as the team evolves.
            </p>
          ) : (
            <p className="text-gray-600 leading-relaxed mb-8">
              {"Une formation a beaucoup plus de valeur quand elle se déroule dans l'établissement, avec les équipes concernées, à partir des réalités du terrain. Chez LuxOps, les sessions sont construites autour des procédures du département, puis appuyées par des playbooks que l'équipe garde ensuite comme référentiel écrit. La formation sert à installer les bons réflexes. Les supports permettent de les maintenir dans le temps, même lorsque les équipes évoluent."}
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
              {isEN ? 'View All Playbooks' : 'Voir tous les Playbooks'}
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
