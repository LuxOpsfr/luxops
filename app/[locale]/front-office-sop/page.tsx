import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel Front Office SOP Templates: Download & Deploy Immediately | LuxOps'
      : 'Procédures de réception hôtelière : modèles opérationnels | LuxOps',
    description: isEN
      ? 'Front office SOP system for luxury hotels. Built around shift structure, guest journey, exception handling and handover. Not a list of topics. A working operational framework.'
      : 'Procédures de réception pour hôtels de luxe. Check-in, check-out, gestion des réclamations, passation de service et audit de nuit. Un cadre opérationnel concret, applicable immédiatement.',
    keywords: isEN
      ? 'front office sop, hotel front desk procedures, front office hotel training, hotel reception sop, front desk standard operating procedures'
      : 'procédures réception hôtel, guide réception hôtel, procédures accueil hôtel, formation réception hôtel',
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/front-office-sop`,
      languages: {
        'en': 'https://www.luxops.fr/en/front-office-sop',
        'fr': 'https://www.luxops.fr/fr/front-office-sop',
        'x-default': 'https://www.luxops.fr/en/front-office-sop',
      },
    },
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
    title: 'Accueil selon le type de client',
    body: 'Standard, VIP, groupe, long séjour, walk-in et arrivée tardive ne se gèrent pas de la même façon. Un même réceptionniste doit pouvoir traiter chaque cas avec le même niveau de qualité, sans avoir à improviser selon son expérience personnelle.',
  },
  {
    title: 'Check-out et facturation',
    body: 'Les contestations de facture au départ sont parmi les réclamations les plus fréquentes. Une procédure de check-out structurée, avec relecture de la facture la veille, conduite à tenir en cas de litige et gestion des reçus, permet de réduire sensiblement ces situations.',
  },
  {
    title: 'Gestion des réservations et des modifications',
    body: 'Comment les réservations sont créées, modifiées, annulées et transmises aux autres services. Cela inclut le contact pré-arrivée, la logique d\'attribution des chambres et la gestion des demandes particulières.',
  },
  {
    title: 'Ouverture de service et passation',
    body: 'La réception change d\'équipe plusieurs fois par jour. Une routine d\'ouverture claire et un support de passation structuré permettent de ne pas perdre les points en cours, les arrivées VIP et les suivis entre deux services.',
  },
  {
    title: 'Gestion des réclamations et service recovery',
    body: 'La procédure pour recueillir, consigner, transmettre et résoudre une réclamation à la réception. Ce que le réceptionniste peut gérer seul, ce qui remonte au responsable, et comment la résolution est tracée.',
  },
  {
    title: 'Audit de nuit',
    body: 'La séquence nocturne qui clôture la journée opérationnelle, équilibre les comptes, génère les rapports et prépare la réception pour la prise de poste du matin. Souvent le process le moins documenté dans un hôtel.',
  },
  {
    title: 'Urgences, sécurité et gestion des incidents',
    body: 'Incendie, urgence médicale, incident de sécurité : chaque situation nécessite un protocole défini. Ces procédures sont souvent supposées connues de tous. Les mettre par écrit garantit une réponse cohérente quelle que soit l\'équipe en poste.',
  },
]

export default async function FrontOfficeSopPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'
  const sopAreas = isEN ? SOP_AREAS_EN : SOP_AREAS_FR

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isEN ? 'Hotel Front Office SOP' : 'Procédures de réception hôtelière',
    description: isEN
      ? 'Front office SOP system for luxury hotels. Built around shift structure, guest journey, exception handling and handover.'
      : 'Procédures de réception pour hôtels de luxe. Check-in, check-out, gestion des réclamations, passation de service et audit de nuit.',
    provider: { '@type': 'Organization', name: 'LuxOps', url: 'https://www.luxops.fr' },
    serviceType: 'Hotel Operations Consulting',
    areaServed: 'Worldwide',
    url: `https://www.luxops.fr/${locale}/front-office-sop`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-[#1A2E44] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#0056D2] text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
            {isEN ? 'Front Office SOP' : 'Procédures réception'}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {isEN
              ? 'Front Office SOPs: Built Around How the Desk Actually Works'
              : 'Procédures de réception hôtelière : construites pour le fonctionnement réel du service'}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            {isEN
              ? 'A front office SOP system is not a list of topics. It is a structured set of procedures that covers the guest journey, handles exceptions, and gives every shift a clear framework to work from.'
              : 'Un guide de procédures pour la réception, ce n\'est pas une liste de bonnes intentions. C\'est un ensemble de protocoles structurés qui couvre le parcours client, prépare l\'équipe aux situations difficiles et donne à chaque service un cadre clair sur lequel s\'appuyer.'}
          </p>
          <Link
            href={`/${locale}/playbooks`}
            className="inline-block bg-[#0056D2] hover:bg-[#0041A3] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
          >
            {isEN ? 'View Front Office Playbook' : 'Voir le Playbook réception'}
          </Link>
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
                ? 'Download a free chapter of the Front Office Playbook'
                : 'Téléchargez un chapitre gratuit du Playbook Réception'}
            </p>
            <p className="text-sm text-[#4f6074]">
              {isEN
                ? 'See what structured front office procedures look like in practice.'
                : 'Découvrez à quoi ressemblent des procédures de réception structurées.'}
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

      {/* What a front office SOP system actually covers */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-6">
            {isEN
              ? 'What a front office SOP system actually covers'
              : 'Ce que doivent couvrir les procédures de réception'}
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
                Les procédures de réception se structurent à trois niveaux. Les situations courantes : check-in, check-out, gestion des réservations, standards téléphoniques. Le cadre opérationnel du service : ouverture de poste, passation entre équipes, audit de nuit, reportings. La gestion des situations hors standard : réclamations clients, litiges de facturation, protocoles VIP, arrivées tardives, no-shows, incidents de sécurité.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Les guides génériques couvrent souvent correctement le premier niveau. Les deux suivants sont là où la plupart des équipes de réception fonctionnent encore à l&apos;instinct, sans procédure écrite. C&apos;est là que naissent les incohérences de service.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Core procedure areas */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-8">
            {isEN
              ? 'Core procedure areas in a front office SOP'
              : 'Les procédures essentielles d\'une réception hôtelière'}
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
            {isEN ? 'Why this needs to be documented' : 'Pourquoi ces procédures doivent être écrites'}
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
                Les équipes de réception font face à un turnover élevé, des horaires décalés et des situations qui demandent une décision rapide. Un réceptionniste expérimenté construit ses réflexes avec le temps. Un nouveau collaborateur n&apos;a pas cette base. Quand une procédure n&apos;existe que dans la tête de quelqu&apos;un, elle part avec lui.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Des procédures écrites, c&apos;est aussi un outil de management. Quand une erreur de facturation se produit, qu&apos;une réclamation n&apos;est pas transmise correctement ou qu&apos;une chambre VIP n&apos;est pas prête à temps, un système documenté permet d&apos;identifier précisément où la rupture s&apos;est produite et de la corriger.
              </p>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A2E44] py-16 px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            {isEN ? 'The complete front office SOP system' : 'Le playbook réception complet'}
          </h2>
          <p className="text-gray-300 mb-8">
            {isEN
              ? 'The LuxOps Front Office Playbook covers the full procedure set for a luxury hotel reception: guest interactions, shift structure, exception handling, night audit and reporting. 12 chapters, PDF and PowerPoint, EN and FR.'
              : 'Le Playbook Réception LuxOps couvre l\'ensemble des procédures pour une réception hôtelière haut de gamme : accueil client, organisation des services, gestion des situations difficiles, audit de nuit et reportings. 12 chapitres, PDF et PowerPoint, en français et en anglais.'}
          </p>
          <Link
            href={`/${locale}/playbooks`}
            className="inline-block bg-[#0056D2] hover:bg-[#0041A3] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            {isEN ? 'View Front Office Playbook' : 'Voir le Playbook réception'}
          </Link>
        </div>
      </section>

    </main>
    </>
  )
}
