import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel Reception Training: Standards, Procedures and Service Reflexes for Front Office Teams | LuxOps'
      : 'Formation Réception Hôtel : Standards, Procédures et Réflexes de Service | LuxOps',
    description: isEN
      ? 'Hotel reception training built around check-in and check-out procedures, PMS operation, guest communication, upselling and complaint handling. Practical methods for front office teams.'
      : "Formation réception hôtel pour les équipes de front office. Procédures check-in et check-out, utilisation du PMS, standards de communication, techniques d'upsell et gestion des réclamations.",
    keywords: isEN
      ? 'hotel reception training, front office team training, hotel check-in training, hotel front desk training, hotel guest service training'
      : 'formation réception hôtel, formation front office hôtel, formation réceptionniste hôtel, formation accueil hôtel, formation équipe réception',
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/formation-reception-hotel`,
      languages: {
        'en': 'https://www.luxops.fr/en/formation-reception-hotel',
        'fr': 'https://www.luxops.fr/fr/formation-reception-hotel',
        'x-default': 'https://www.luxops.fr/en/formation-reception-hotel',
      },
    },
  }
}

const MODULES_EN = [
  {
    title: 'Check-in and first impressions',
    body: "Check-in sets the tone for the stay immediately. Training must cover the full sequence: greeting, verification, confirmation, key handover, orientation and how to close the interaction. But beyond the procedure, it also means training rhythm, posture, quality of presence and the ability to adapt to the guest in front of you. A successful check-in is not just a correct check-in. It is a moment that reassures, flows naturally and builds confidence.",
  },
  {
    title: 'Check-out and guest departure',
    body: "Departure is often treated as a simple administrative step, yet it strongly shapes the guest's final memory of the stay. The team must know how to handle express check-outs, standard departures, billing discrepancies, disputes and final interactions with calm and precision. The tone matters as much as the process. Good training helps the team stay composed and precise, even when a guest is leaving frustrated or in a hurry.",
  },
  {
    title: 'PMS operation and reservation management',
    body: "PMS proficiency remains essential. Training should give the team greater confidence on arrivals, departures, extensions, room changes, rate adjustments and stay management. More importantly, it should reduce the errors that create downstream problems: incorrect billing, poor communication with housekeeping, wrong room status or incomplete guest profiles. Service quality often depends on this technical foundation.",
  },
  {
    title: 'Guest communication standards',
    body: "The language of the front desk strongly shapes the guest's perception of the property. Knowing how to greet, rephrase, respond to a request, announce a delay or explain a constraint is part of the role. A well-trained front office team does not recite phrases. It maintains a clear, professional and appropriate tone in person, on the phone and in writing. Every channel of communication must reflect the same level of service.",
  },
  {
    title: 'Upselling at check-in',
    body: "Upselling is not about a learned phrase. It is about how the offer is framed. Good training helps teams identify the right moment, present the proposition naturally, communicate the value clearly and accept a refusal without creating awkwardness. Results vary significantly depending on how well the team has been prepared. When upselling is properly integrated, it becomes more fluid, more credible and more effective.",
  },
  {
    title: 'Complaint handling and service recovery',
    body: "A well-handled complaint can strengthen the relationship rather than damage it. The team needs a clear sequence: listen, acknowledge the problem, apologise, act and follow up. Training must also help receptionists distinguish what they can resolve themselves, what needs to be escalated and what deserves particular attention from management. At the front desk, the quality of service recovery is often decided in a matter of minutes.",
  },
]

const MODULES_FR = [
  {
    title: 'Check-in et premières impressions',
    body: "Le check-in donne immédiatement le ton du séjour. La formation doit couvrir la séquence complète : accueil, vérification, confirmation, remise des clés, orientation dans l'établissement, et manière de conclure l'échange. Mais au-delà de la procédure, il faut aussi former le rythme, la posture, la qualité de présence et la capacité à s'adapter au client en face. Un check-in réussi, ce n'est pas seulement un check-in correct. C'est un moment qui rassure, fluidifie et met en confiance.",
  },
  {
    title: 'Check-out et départ client',
    body: "Le départ est souvent traité comme une simple étape administrative, alors qu'il influence fortement le souvenir final du séjour. L'équipe doit savoir gérer les départs express, les check-outs standards, les écarts de facturation, les litiges, et les derniers échanges avec calme et précision. C'est aussi un moment où la qualité du ton compte autant que la qualité du traitement. Une bonne formation aide l'équipe à garder de la justesse, même lorsque le client part contrarié ou pressé.",
  },
  {
    title: 'Utilisation du PMS et gestion des réservations',
    body: "La maîtrise du PMS reste indispensable. La formation doit permettre à l'équipe de travailler avec plus de confiance sur les arrivées, départs, prolongations, changements de chambre, ajustements de tarifs et suivi du séjour. Mais elle doit surtout réduire les erreurs qui créent ensuite des problèmes plus loin : facturation fausse, mauvaise communication avec le housekeeping, mauvais statut de chambre, ou informations incomplètes dans le dossier client. La qualité de service dépend souvent de cette base technique.",
  },
  {
    title: 'Standards de communication client',
    body: "Le langage de la réception façonne fortement la perception de l'établissement. Savoir accueillir, reformuler, répondre à une demande, annoncer un délai ou expliquer une contrainte fait partie du métier. Une équipe front office bien formée ne récite pas des phrases. Elle sait garder un ton juste, clair et professionnel, à l'oral comme à l'écrit. Les appels, les emails, les messages et les échanges au desk doivent tous refléter le même niveau de service.",
  },
  {
    title: 'Upsell au check-in',
    body: "L'upsell ne tient pas à une phrase apprise, mais à la manière dont l'offre est présentée. Une bonne formation aide les équipes à repérer le bon moment, à formuler la proposition sans gêne, à présenter la valeur de manière naturelle, et à accepter un refus sans créer de malaise. Les résultats varient beaucoup selon la manière dont l'équipe a été préparée. Quand l'upsell est bien intégré, il devient plus fluide, plus crédible et plus efficace.",
  },
  {
    title: 'Gestion des réclamations et reprise de service',
    body: "Une réclamation bien gérée peut renforcer la relation au lieu de l'abîmer. Encore faut-il que l'équipe sache comment réagir. La formation doit poser une séquence claire : écouter, reconnaître le problème, présenter des excuses, agir, puis faire un suivi. Elle doit aussi aider les réceptionnistes à distinguer ce qu'ils peuvent résoudre eux-mêmes, ce qui doit être escaladé, et ce qui mérite une attention particulière de la direction. À la réception, la qualité du service recovery se joue souvent en quelques minutes.",
  },
]

export default async function FormationReceptionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'
  const modules = isEN ? MODULES_EN : MODULES_FR

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-[#1A2E44] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#2E7D32] text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
            {isEN ? 'Front Desk Training' : 'Formation Réception'}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {isEN
              ? "Hotel Reception Training: standards, procedures and service reflexes for front office teams"
              : "Formation Réception Hôtel : standards, procédures et réflexes de service pour les équipes de front office"}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            {isEN
              ? "Reception is often the guest's first real contact with the hotel, and often the last. Training a reception team is not just about learning to use a PMS or follow a check-in procedure. It is also about passing on service reflexes, a way of handling arrivals, requests, tensions, waiting times and departures without letting perceived quality drop. When training is well structured, the team gains confidence, interactions flow more smoothly and the guest experience becomes more consistent."
              : "La réception est souvent le premier vrai contact avec l'hôtel, et souvent le dernier. Former une équipe de réception ne consiste pas seulement à apprendre à utiliser un PMS ou à suivre une procédure de check-in. Il s'agit aussi de transmettre des réflexes de service, une manière de gérer les arrivées, les demandes, les tensions, les temps d'attente et les départs sans faire retomber la qualité perçue. Quand la formation est bien construite, l'équipe gagne en assurance, les échanges sont plus fluides et l'expérience client devient plus régulière."}
          </p>
          <Link
            href={`/${locale}/formation`}
            className="inline-block bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
          >
            {isEN ? 'Discover Our On-Site Training' : 'Découvrir la Formation sur Site'}
          </Link>
        </div>
      </section>

      {/* Ce qui manque */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-6">
            {isEN ? 'What is missing from most hotel reception training' : 'Ce qui manque dans beaucoup de formations réception'}
          </h2>
          {isEN ? (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                In many properties, reception training focuses on the technical side: opening a reservation, adjusting a rate, printing a registration card, closing a folio. All of that is necessary. But it is not enough to keep a front desk running in real conditions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The real challenge is what happens when the desk is under pressure. Welcoming a tired guest after a long journey. Managing a queue without losing tone or pace. Delivering bad news without breaking confidence. Responding clearly, calming quickly, directing without confusion. That is where many teams lack a framework. Good reception training must work on both: technical precision and service execution. Both can be learned. Both need to be clearly transmitted.
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                {"Dans beaucoup d'établissements, la formation réception se concentre sur la partie technique : ouvrir une réservation, modifier un tarif, imprimer une fiche de police, clôturer un folio. Tout cela est nécessaire, bien sûr. Mais ce n'est pas ce qui suffit à faire tenir une réception dans la vraie vie."}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {"Le vrai sujet, c'est ce qui se passe quand le desk est sous pression. Accueillir un client fatigué après un long voyage. Gérer une file d'attente sans perdre le ton ni le rythme. Annoncer une mauvaise nouvelle sans casser la confiance. Répondre clairement, calmer vite, orienter sans confusion. C'est là que beaucoup d'équipes manquent de cadre. Une bonne formation réception doit travailler les deux : la précision technique et l'exécution du service. Les deux s'apprennent. Les deux doivent être transmis clairement."}
              </p>
            </>
          )}
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-8">
            {isEN ? 'Core modules in a hotel reception training programme' : "Modules essentiels d'un programme de formation réception"}
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
            {isEN ? 'Procedures the team keeps after the training' : "Des procédures que l'équipe garde après la formation"}
          </h2>
          {isEN ? (
            <p className="text-gray-600 leading-relaxed mb-8">
              On-site training passes on the right reflexes, corrects gaps and clarifies the expected level. But for it to hold over time, the team also needs a clear written reference to fall back on. The Front Office Playbook serves that purpose. It gives the team a written framework they can use day to day, refer to during onboarding and revisit when standards start to drift. It covers all reception operations, from check-in to night audit, with PDF and PowerPoint included in English and French.
            </p>
          ) : (
            <p className="text-gray-600 leading-relaxed mb-8">
              {"La formation sur site permet de transmettre les bons réflexes, de corriger les écarts et de clarifier le niveau attendu. Mais pour que cela tienne dans le temps, l'équipe doit aussi pouvoir s'appuyer sur un référentiel clair. Le Playbook Front Office sert à cela. Il donne à l'équipe un cadre écrit qu'elle peut reprendre au quotidien, utiliser pendant l'intégration, et relire quand les standards commencent à se décaler. Il couvre l'ensemble des opérations réception, du check-in au night audit, avec les supports inclus en PDF et PowerPoint, en français et en anglais."}
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
              {isEN ? 'View Front Office Playbook' : 'Voir le Playbook Front Office'}
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
