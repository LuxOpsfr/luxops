import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel Front Office SOP — Procedures Built for How Reception Actually Works | LuxOps'
      : 'SOP Réception Hôtel — Procédures Construites Pour le Fonctionnement Réel | LuxOps',
    description: isEN
      ? 'Front office SOP system for luxury hotels. Built around shift structure, guest journey, exception handling and handover. Not a list of topics. A working operational framework.'
      : 'Système SOP réception pour hôtels de luxe. Construit autour de la structure du service, du parcours client, de la gestion des exceptions et de la passation. Un cadre opérationnel concret.',
    keywords: isEN
      ? 'front office sop, hotel front desk procedures, front office hotel training, hotel reception sop, front desk standard operating procedures'
      : 'sop réception hôtel, procédures front office hôtel, formation réception hôtel, SOP accueil hôtel',
  }
}

const SOP_AREAS_EN = [
  {
    title: 'Check-in procedure by guest type',
    body: 'Standard, VIP, group, long-stay, walk-in and late arrival each require a different sequence. The same desk agent should be able to handle all of them with the same quality, without relying on experience alone.',
  },
  {
    title: 'Check-out and billing',
    body: 'Billing disputes at departure are one of the most common sources of guest complaints. A structured check-out procedure that includes pre-departure billing review, disputed charges protocol, and receipt handling reduces these incidents significantly.',
  },
  {
    title: 'Reservation handling and modifications',
    body: 'How reservations are created, modified, cancelled and communicated to other departments. This includes pre-arrival guest contact, room assignment logic, and special request management.',
  },
  {
    title: 'Shift opening and handover',
    body: 'The desk opens or changes hands multiple times per day. A consistent opening sequence and a structured handover document ensure that open items, VIP arrivals, and pending follow-ups are not lost between shifts.',
  },
  {
    title: 'Guest complaint and service recovery',
    body: 'The procedure for receiving, logging, escalating and resolving complaints at the front desk. Includes what the agent can resolve independently, what requires a manager, and how the resolution is documented.',
  },
  {
    title: 'Night audit process',
    body: 'The overnight sequence that closes the operational day, reconciles accounts, generates reports and sets the desk for the incoming morning shift. Often the least documented process in a hotel front office.',
  },
  {
    title: 'Emergency, security and incident handling',
    body: 'Fire, medical, security and operational incidents each require a defined response. These procedures are often assumed to be known. Documenting them ensures the team responds consistently regardless of who is on shift.',
  },
]

const SOP_AREAS_FR = [
  {
    title: 'Procédure de check-in par type de client',
    body: 'Standard, VIP, groupe, long séjour, walk-in et arrivée tardive nécessitent chacun une séquence différente. Un même agent de réception doit pouvoir les gérer tous avec la même qualité, sans s\'appuyer uniquement sur l\'expérience.',
  },
  {
    title: 'Check-out et facturation',
    body: 'Les litiges de facturation au départ sont l\'une des sources les plus fréquentes de réclamations clients. Une procédure de check-out structurée incluant une revue de facturation pré-départ, un protocole de contestation et la gestion des reçus réduit significativement ces incidents.',
  },
  {
    title: 'Gestion des réservations et modifications',
    body: 'Comment les réservations sont créées, modifiées, annulées et communiquées aux autres départements. Inclut le contact pré-arrivée client, la logique d\'affectation des chambres et la gestion des demandes spéciales.',
  },
  {
    title: 'Ouverture de service et passation',
    body: 'La réception ouvre ou change de main plusieurs fois par jour. Une séquence d\'ouverture cohérente et un document de passation structuré garantissent que les points ouverts, les arrivées VIP et les suivis en attente ne se perdent pas entre les services.',
  },
  {
    title: 'Gestion des plaintes et service recovery',
    body: 'La procédure pour recevoir, consigner, escalader et résoudre les plaintes à la réception. Inclut ce que l\'agent peut résoudre seul, ce qui nécessite un manager et comment la résolution est documentée.',
  },
  {
    title: 'Procédure d\'audit de nuit',
    body: 'La séquence nocturne qui clôture la journée opérationnelle, réconcilie les comptes, génère les rapports et prépare la réception pour le service du matin entrant. Souvent le processus le moins documenté dans une réception hôtelière.',
  },
  {
    title: 'Gestion des urgences, de la sécurité et des incidents',
    body: 'Les incendies, urgences médicales, incidents de sécurité et opérationnels nécessitent chacun une réponse définie. Ces procédures sont souvent supposées connues. Les documenter garantit une réponse cohérente quelle que soit l\'équipe en poste.',
  },
]

export default async function FrontOfficeSopPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'
  const sopAreas = isEN ? SOP_AREAS_EN : SOP_AREAS_FR

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-[#1A2E44] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#0056D2] text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
            {isEN ? 'Front Office SOP' : 'SOP Réception'}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {isEN
              ? 'Front Office SOPs: Built Around How the Desk Actually Works'
              : 'SOPs Réception : Construits Autour du Fonctionnement Réel de la Réception'}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            {isEN
              ? 'A front office SOP system is not a list of topics. It is a structured set of procedures that covers the guest journey, handles exceptions, and gives every shift a clear framework to work from.'
              : 'Un système SOP réception n\'est pas une liste de sujets. C\'est un ensemble structuré de procédures qui couvre le parcours client, gère les exceptions et donne à chaque service un cadre clair.'}
          </p>
          <Link
            href={`/${locale}/playbooks`}
            className="inline-block bg-[#0056D2] hover:bg-[#0041A3] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
          >
            {isEN ? 'View Front Office Playbook' : 'Voir le Playbook Réception'}
          </Link>
        </div>
      </section>

      {/* What a front office SOP system actually covers */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-6">
            {isEN
              ? 'What a front office SOP system actually covers'
              : 'Ce que couvre réellement un système SOP réception'}
          </h2>
          {isEN ? (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                Front office procedures exist at three levels. The standard interaction: check-in, check-out, reservation handling, telephone etiquette. The operational framework: shift opening, handover, night audit, reporting. The exception layer: complaint handling, billing disputes, VIP protocols, late arrivals, no-shows, security incidents.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Generic SOP lists usually cover the first level well. The second and third levels are where most front desk teams operate on habit and instinct rather than documented procedure. That gap is where service inconsistency comes from.
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                Les procédures réception existent à trois niveaux. L&apos;interaction standard : check-in, check-out, gestion des réservations, standards téléphoniques. Le cadre opérationnel : ouverture de service, passation, audit de nuit, reporting. La couche d&apos;exception : gestion des plaintes, litiges de facturation, protocoles VIP, arrivées tardives, no-shows, incidents de sécurité.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Les listes SOP génériques couvrent généralement bien le premier niveau. Les deuxième et troisième niveaux sont là où la plupart des équipes réception fonctionnent par habitude et instinct plutôt que par procédure documentée. C&apos;est ce manque qui génère les incohérences de service.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Core procedure areas */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-8">
            {isEN ? 'Core procedure areas in a front office SOP' : 'Les domaines de procédures essentiels dans un SOP réception'}
          </h2>
          <div className="space-y-6">
            {sopAreas.map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-lg p-6">
                <h3 className="font-semibold text-[#1A2E44] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why this needs to be documented */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-6">
            {isEN ? 'Why this needs to be documented' : 'Pourquoi cela doit être documenté'}
          </h2>
          {isEN ? (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                Front office teams face high turnover, irregular shift patterns, and situations that require fast independent judgement. An experienced agent builds this over time. A new hire does not have that foundation. When a procedure exists only in someone&apos;s head, it leaves with them.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Documented procedures also create accountability. When a billing error happens, or a complaint is not escalated correctly, or a VIP room is not ready on time, a documented system makes it possible to identify where the breakdown occurred and correct it.
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                Les équipes réception font face à un turnover élevé, des horaires irréguliers et des situations qui nécessitent un jugement rapide et indépendant. Un agent expérimenté développe cela avec le temps. Un nouvel arrivant n&apos;a pas cette base. Quand une procédure n&apos;existe que dans la tête de quelqu&apos;un, elle part avec lui.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Les procédures documentées créent aussi de la responsabilité. Quand une erreur de facturation se produit, ou qu&apos;une plainte n&apos;est pas correctement escaladée, ou qu&apos;une chambre VIP n&apos;est pas prête à temps, un système documenté permet d&apos;identifier où la rupture s&apos;est produite et de la corriger.
              </p>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A2E44] py-16 px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            {isEN ? 'The complete front office SOP system' : 'Le système SOP réception complet'}
          </h2>
          <p className="text-gray-300 mb-8">
            {isEN
              ? 'The LuxOps Front Office Playbook covers the full procedure set for a luxury hotel reception: guest interactions, shift structure, exception handling, night audit and reporting. 12 chapters, PDF and PowerPoint, EN and FR.'
              : 'Le Playbook Réception LuxOps couvre l\'ensemble des procédures pour une réception d\'hôtel de luxe : interactions clients, structure de service, gestion des exceptions, audit de nuit et reporting. 12 chapitres, PDF et PowerPoint, EN et FR.'}
          </p>
          <Link
            href={`/${locale}/playbooks`}
            className="inline-block bg-[#0056D2] hover:bg-[#0041A3] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            {isEN ? 'View Front Office Playbook' : 'Voir le Playbook Réception'}
          </Link>
        </div>
      </section>

    </main>
  )
}
