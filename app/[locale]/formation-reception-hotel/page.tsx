import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel Front Desk Training — Standards and Procedures for Reception Teams | LuxOps'
      : 'Formation Réception Hôtel — Standards et Procédures pour les Équipes de Réception | LuxOps',
    description: isEN
      ? 'Front desk training for hotel reception teams. Check-in and check-out procedures, PMS operation, guest communication standards, upselling techniques and complaint handling.'
      : 'Formation réception hôtel pour les équipes de front office. Procédures check-in et check-out, utilisation du PMS, standards de communication client, techniques d\'upselling et gestion des réclamations.',
    keywords: isEN
      ? 'hotel front desk training, hotel reception training, front office training hotel, hotel check-in training, hotel guest service training'
      : 'formation réception hôtel, formation front office hôtel, formation réceptionniste hôtel, formation accueil hôtel, formation équipe réception',
  }
}

const MODULES_EN = [
  {
    title: 'Check-in procedure and first impressions',
    body: 'The check-in is the first moment of physical contact between the guest and the team. Training covers the full sequence from greeting to room assignment: identity verification, room confirmation, key handover, orientation to the property and the closing phrase that sets the tone for the stay. Each step has a standard. Each standard can be trained.',
  },
  {
    title: 'Check-out procedure and guest departure',
    body: 'How to handle express check-outs, standard check-outs, bill queries and disputes. Includes the post-stay communication sequence, how to handle a guest who is unhappy at departure and how to close a folio accurately in the PMS without creating downstream accounting issues.',
  },
  {
    title: 'PMS operation and reservation management',
    body: 'Training reception teams to use the property management system with confidence and accuracy. Covers daily operations: arrivals, departures, in-house movements, rate adjustments and room changes. Particular focus on reducing input errors that affect billing, housekeeping communication and reporting.',
  },
  {
    title: 'Guest communication standards',
    body: 'The language used by reception defines the guest\'s perception of the property. Training covers the vocabulary of hospitality: how to phrase requests, how to respond to enquiries, how to communicate a delay or a limitation without creating friction. Telephone standards and written communication are included.',
  },
  {
    title: 'Upselling at check-in',
    body: 'Upselling is a service skill before it is a revenue skill. Training covers when to offer an upgrade, how to frame the offer so it feels like a recommendation rather than a sales pitch, and how to handle a refusal without creating awkwardness. Results depend entirely on how the team is trained to present the offer.',
  },
  {
    title: 'Complaint handling and service recovery',
    body: 'A complaint handled well becomes a loyalty moment. Training covers the four-step recovery sequence: acknowledge, apologise, act, follow up. Includes how to handle a guest who is visibly upset at the desk, what can be offered and what must be escalated to management.',
  },
]

const MODULES_FR = [
  {
    title: 'Procédure de check-in et premières impressions',
    body: 'Le check-in est le premier moment de contact physique entre le client et l\'équipe. La formation couvre la séquence complète de l\'accueil à la remise des clés : vérification d\'identité, confirmation de la chambre, remise des clés, orientation dans l\'établissement et phrase de clôture qui donne le ton du séjour. Chaque étape a un standard. Chaque standard se forme.',
  },
  {
    title: 'Procédure de check-out et départ client',
    body: 'Comment gérer les départs express, les check-outs standards, les contestations de facture et les litiges. Inclut la séquence de communication post-séjour, comment gérer un client insatisfait au départ et comment clôturer un folio avec précision dans le PMS sans créer de problèmes comptables en aval.',
  },
  {
    title: 'Utilisation du PMS et gestion des réservations',
    body: 'Former les équipes de réception à utiliser le logiciel de gestion hôtelière avec confiance et précision. Couvre les opérations quotidiennes : arrivées, départs, mouvements en séjour, ajustements de tarifs et changements de chambre. Accent particulier sur la réduction des erreurs de saisie qui affectent la facturation, la communication avec le housekeeping et les rapports.',
  },
  {
    title: 'Standards de communication client',
    body: 'Le langage utilisé par la réception définit la perception du client sur l\'établissement. La formation couvre le vocabulaire de l\'hospitalité : comment formuler une demande, comment répondre à une question, comment communiquer un délai ou une contrainte sans créer de friction. Les standards téléphoniques et la communication écrite sont inclus.',
  },
  {
    title: 'Upselling au check-in',
    body: 'L\'upselling est une compétence de service avant d\'être une compétence commerciale. La formation couvre le moment opportun pour proposer une surclasse, comment formuler l\'offre pour qu\'elle ressemble à une recommandation plutôt qu\'à un argumentaire de vente, et comment gérer un refus sans créer de gêne. Les résultats dépendent entièrement de la façon dont l\'équipe est formée à présenter la proposition.',
  },
  {
    title: 'Gestion des réclamations et service recovery',
    body: 'Une réclamation bien gérée devient un moment de fidélisation. La formation couvre la séquence de reprise en quatre étapes : reconnaître, s\'excuser, agir, faire un suivi. Inclut comment gérer un client visiblement contrarié à la réception, ce qui peut être proposé et ce qui doit être escaladé à la direction.',
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
              ? 'Hotel Reception Training: Procedures, Standards and Service Skills'
              : 'Formation Réception Hôtel : Procédures, Standards et Savoir-Faire de Service'}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            {isEN
              ? 'Reception is where the guest\'s experience begins and ends. Training a front desk team means going beyond the PMS login and the welcome phrase. It means building consistent habits for every moment that matters.'
              : 'La réception est là où l\'expérience client commence et se termine. Former une équipe de réception dépasse la connexion au PMS et la phrase d\'accueil. C\'est construire des habitudes cohérentes pour chaque moment qui compte.'}
          </p>
          <Link
            href={`/${locale}/formation`}
            className="inline-block bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
          >
            {isEN ? 'Discover Our On-Site Training' : 'Découvrir la Formation sur Site'}
          </Link>
        </div>
      </section>

      {/* The gap in reception training */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-6">
            {isEN ? 'The gap in most hotel reception training' : 'Le manque dans la plupart des formations réception hôtel'}
          </h2>
          {isEN ? (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most front desk training covers the technical side: how to use the PMS, where to find the rate plan, how to print a registration card. What it often does not cover is the service side: how to greet a guest who has had a difficult journey, how to handle a queue at peak check-in time, how to deliver bad news without losing the guest's confidence.
              </p>
              <p className="text-gray-600 leading-relaxed">
                A complete reception training programme addresses both. The technical foundation ensures accuracy and efficiency. The service layer ensures the guest's experience at the desk reflects the property's positioning. Both are trainable. Both require documented standards and supervised practice.
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                La plupart des formations réception couvrent le côté technique : comment utiliser le PMS, où trouver le plan tarifaire, comment imprimer une fiche de police. Ce qu'elles ne couvrent souvent pas, c'est le côté service : comment accueillir un client qui a eu un voyage difficile, comment gérer une file d'attente en pic d'arrivées, comment annoncer une mauvaise nouvelle sans perdre la confiance du client.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Un programme de formation réception complet adresse les deux. La base technique garantit la précision et l'efficacité. La couche service garantit que l'expérience du client à la réception reflète le positionnement de l'établissement. Les deux se forment. Les deux nécessitent des standards documentés et une pratique supervisée.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Training modules */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-8">
            {isEN ? 'Core modules in a hotel reception training programme' : 'Modules essentiels d\'un programme de formation réception hôtel'}
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
            {isEN ? 'Procedures your team keeps after the training' : 'Des procédures que votre équipe conserve après la formation'}
          </h2>
          {isEN ? (
            <p className="text-gray-600 leading-relaxed mb-8">
              On-site training builds the skill. The Front Office Playbook gives your team the written reference they use on the job. 12 chapters covering every aspect of front desk operations, from check-in to night audit. PDF and PowerPoint included, in English and French.
            </p>
          ) : (
            <p className="text-gray-600 leading-relaxed mb-8">
              La formation sur site construit la compétence. Le Playbook Front Office donne à votre équipe le référentiel écrit qu'elle utilise au quotidien. 12 chapitres couvrant chaque aspect des opérations de réception, du check-in au night audit. PDF et PowerPoint inclus, en français et en anglais.
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
