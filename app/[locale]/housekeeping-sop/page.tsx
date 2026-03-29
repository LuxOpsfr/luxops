import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel Housekeeping SOP — Procedures for Every Role and Moment | LuxOps'
      : 'Procédures housekeeping hôtel — pour chaque rôle et chaque moment de service | LuxOps',
    description: isEN
      ? 'Housekeeping SOP system for luxury hotels. Covers room attendant procedures, supervisor inspection protocols, linen management, turndown service and quality control frameworks.'
      : 'Procédures housekeeping pour hôtels de luxe. Couvre les séquences de remise en état, les protocoles d\'inspection superviseur, la gestion du linge, le service de couverture et le contrôle qualité.',
    keywords: isEN
      ? 'housekeeping sop, housekeeping standard operating procedures, hotel housekeeping procedures, sop for housekeeping, hotel cleaning sop, luxury hotel housekeeping'
      : 'sop housekeeping, procédures housekeeping hôtel, SOP ménage hôtel, procédures opérationnelles housekeeping, housekeeping hôtel de luxe',
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/housekeeping-sop`,
      languages: {
        'en': 'https://www.luxops.fr/en/housekeeping-sop',
        'fr': 'https://www.luxops.fr/fr/housekeeping-sop',
        'x-default': 'https://www.luxops.fr/en/housekeeping-sop',
      },
    },
  }
}

const SOP_EN = [
  {
    title: 'Room cleaning sequence — departing room',
    body: 'The full step-by-step method for cleaning and preparing a departed guest\'s room to arrival standard. Covers entry protocol, linen change, bathroom clean, surface dusting, floor treatment and final verification.',
  },
  {
    title: 'Room cleaning sequence — stay-over room',
    body: 'A lighter sequence for occupied rooms: refresh service, towel replacement, amenity check, and surfaces. Includes what should and should not be moved or changed when a guest is in-house.',
  },
  {
    title: 'Bed making to brand standard',
    body: 'The precise method for making a bed according to the property\'s standard: linen alignment, fold type, pillow placement and decorative cushions. Includes the difference between a departing room and a turndown service.',
  },
  {
    title: 'Bathroom deep clean',
    body: 'Step-by-step bathroom procedure covering product selection, surface order (clean to dirty), chrome polishing, limescale treatment, amenity placement and final inspection points.',
  },
  {
    title: 'Turndown service procedure',
    body: 'The sequence and standard for an evening turndown service: what is adjusted, what is added, what must be removed or repositioned. Timing guidelines and the difference between a standard turndown and a VIP turndown.',
  },
  {
    title: 'Supervisor room inspection protocol',
    body: 'The structured inspection process run by a supervisor before a room is released as clean. Defines inspection sequence, sign-off criteria, defect logging and the process for returning a room to an attendant when it does not meet standard.',
  },
  {
    title: 'Linen management and laundry handling',
    body: 'Procedures for counting, transporting, sorting and tracking linen throughout the shift. Includes damaged linen reporting, linen reconciliation at end of shift, and coordination with the laundry team or external provider.',
  },
  {
    title: 'Lost property procedure',
    body: 'What to do when an item is found in a guest room or public area. Logging, secure storage, guest notification process and the timeline for retention before disposal.',
  },
]

const SOP_FR = [
  {
    title: 'Séquence de remise en état — chambre départ',
    body: 'La méthode complète pas à pas pour nettoyer et préparer une chambre à l\'arrivée d\'un nouveau client. Couvre le protocole d\'entrée, le changement de linge, le nettoyage de la salle de bain, le dépoussiérage, le traitement des sols et la vérification finale.',
  },
  {
    title: 'Séquence de remise en état — chambre recouche',
    body: 'Une séquence allégée pour les chambres occupées : service de rafraîchissement, remplacement des serviettes, contrôle des amenités et surfaces. Inclut ce qui doit et ne doit pas être modifié quand un client est en séjour.',
  },
  {
    title: 'Réfection du lit selon le standard de la marque',
    body: 'La méthode précise pour faire un lit selon le standard de l\'établissement : alignement du linge, type de pliage, placement des oreillers et coussins décoratifs. Inclut la différence entre une chambre départ et un service de couverture.',
  },
  {
    title: 'Nettoyage approfondi de la salle de bain',
    body: 'Procédure salle de bain pas à pas couvrant la sélection des produits, l\'ordre de traitement des surfaces (du propre au sale), le polissage des éléments chromés, le traitement du tartre, le placement des amenités et les points de contrôle final.',
  },
  {
    title: 'Procédure de service de couverture',
    body: 'La séquence et le standard d\'un service de couverture en soirée : ce qui est ajusté, ce qui est ajouté, ce qui doit être retiré ou repositionné. Indications de timing et différence entre une couverture standard et une couverture VIP.',
  },
  {
    title: 'Protocole d\'inspection chambre superviseur',
    body: 'Le processus d\'inspection structuré réalisé par un superviseur avant qu\'une chambre soit libérée comme propre. Définit la séquence d\'inspection, les critères de validation, la consignation des défauts et la procédure de retour à l\'équipier quand la chambre n\'est pas conforme.',
  },
  {
    title: 'Gestion du linge et de la blanchisserie',
    body: 'Procédures de comptage, transport, tri et suivi du linge tout au long du service. Inclut le signalement du linge endommagé, le bilan de linge en fin de service et la coordination avec l\'équipe blanchisserie ou le prestataire externe.',
  },
  {
    title: 'Procédure objets trouvés',
    body: 'Ce qu\'il faut faire quand un objet est trouvé dans une chambre ou un espace commun. Consignation, mise en sécurité, processus de notification client et délai de conservation avant disposition.',
  },
]

export default async function HousekeepingSopPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'
  const sops = isEN ? SOP_EN : SOP_FR

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isEN ? 'Hotel Housekeeping SOP' : 'Procédures housekeeping hôtel',
    description: isEN
      ? 'Housekeeping SOP system for luxury hotels. Covers room attendant procedures, supervisor inspection, linen management and quality control.'
      : 'Procédures housekeeping pour hôtels de luxe. Couvre les séquences de remise en état, l\'inspection superviseur, la gestion du linge et le contrôle qualité.',
    provider: { '@type': 'Organization', name: 'LuxOps', url: 'https://www.luxops.fr' },
    serviceType: 'Hotel Operations Consulting',
    areaServed: 'Worldwide',
    url: `https://www.luxops.fr/${locale}/housekeeping-sop`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-[#1A2E44] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#2E7D32] text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
            {isEN ? 'Housekeeping SOP' : 'Procédures housekeeping'}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {isEN
              ? 'Housekeeping SOPs: The Method Behind the Checklist'
              : 'Procédures housekeeping : la méthode derrière la checklist'}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            {isEN
              ? 'A housekeeping SOP tells the team how to do the work. The checklist confirms it was done correctly. Both are needed. Neither replaces the other.'
              : 'Les procédures housekeeping indiquent à l\'équipe comment réaliser le travail. La checklist confirme qu\'il a été réalisé correctement. Les deux sont nécessaires. Aucun ne remplace l\'autre.'}
          </p>
          <Link
            href={`/${locale}/playbooks`}
            className="inline-block bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
          >
            {isEN ? 'View Housekeeping Playbook' : 'Voir le Playbook Housekeeping'}
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
                ? 'Download a free chapter of the Housekeeping Playbook'
                : 'Téléchargez un chapitre gratuit du Playbook Housekeeping'}
            </p>
            <p className="text-sm text-[#4f6074]">
              {isEN
                ? 'See what structured housekeeping procedures look like in practice.'
                : 'Découvrez à quoi ressemblent des procédures housekeeping structurées.'}
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

      {/* Two levels of housekeeping procedures */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-6">
            {isEN ? 'Two levels of housekeeping procedures' : 'Deux niveaux de procédures housekeeping'}
          </h2>
          {isEN ? (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                Housekeeping SOPs operate at two distinct levels. The first is the attendant level: how to clean a room, how to make a bed to standard, how to set up a trolley, how to handle a DND room or a guest request encountered during a service. The second is the supervisory level: how to inspect a room before release, how to conduct a public area round, how to manage the shift handover and linen reconciliation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                These two levels require different documents. The room attendant does not need the supervisor inspection protocol. The supervisor does not use the room cleaning sequence. Combining them into one document, or ignoring one of them entirely, is where most generic SOP templates fall short.
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                Les SOPs housekeeping fonctionnent à deux niveaux distincts. Le premier est le niveau équipier : comment nettoyer une chambre, comment faire un lit selon le standard, comment préparer un chariot, comment gérer une chambre en DND ou une demande client rencontrée pendant le service. Le second est le niveau superviseur : comment inspecter une chambre avant libération, comment effectuer une ronde des espaces communs, comment gérer la passation de service et le comptage du linge.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ces deux niveaux nécessitent des documents différents. L&apos;équipier housekeeping n&apos;a pas besoin du protocole d&apos;inspection superviseur. Le superviseur n&apos;utilise pas la séquence de remise en état. Les regrouper dans un seul document, ou ignorer l&apos;un d&apos;eux, c&apos;est là que la plupart des modèles génériques échouent.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Core housekeeping SOPs */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-8">
            {isEN ? 'Core housekeeping SOPs' : 'Les SOPs housekeeping essentiels'}
          </h2>
          <div className="space-y-6">
            {sops.map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-lg p-6">
                <h3 className="font-semibold text-[#1A2E44] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How SOPs and checklists work together */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-6">
            {isEN ? 'How SOPs and checklists work together' : 'Comment les SOPs et les checklists fonctionnent ensemble'}
          </h2>
          {isEN ? (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every SOP in a housekeeping system has a corresponding control moment where a checklist confirms compliance. The room cleaning SOP tells the attendant exactly how to clean the room. The room inspection checklist, run by the supervisor afterward, verifies the result. The turndown SOP defines the sequence. The supervisor sign-off confirms it was followed.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Without the SOP, the checklist has no standard to verify against. Without the checklist, the SOP has no control mechanism. For housekeeping teams to operate consistently across shifts, properties need both.
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                Chaque procédure housekeeping a un moment de contrôle correspondant où une checklist confirme la conformité. La procédure de remise en état indique précisément à l&apos;équipier comment nettoyer la chambre. La checklist d&apos;inspection superviseur, réalisée ensuite, vérifie le résultat. La procédure de couverture définit la séquence. La validation superviseur confirme qu&apos;elle a été respectée.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Sans le SOP, la checklist n&apos;a pas de standard à vérifier. Sans la checklist, le SOP n&apos;a pas de mécanisme de contrôle. Pour que les équipes housekeeping opèrent de façon cohérente entre les services, les établissements ont besoin des deux.
              </p>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A2E44] py-16 px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            {isEN ? 'The complete housekeeping system' : 'Le système housekeeping complet'}
          </h2>
          <p className="text-gray-300 mb-8">
            {isEN
              ? 'The LuxOps Housekeeping Playbook covers both levels: room attendant procedures and supervisory control protocols. 10 chapters, inspection frameworks, training guides and shift management tools. PDF and PowerPoint, EN and FR.'
              : 'Le Playbook Housekeeping LuxOps couvre les deux niveaux : procédures équipier et protocoles de contrôle superviseur. 10 chapitres, grilles d\'inspection, guides de formation et outils de gestion de service. PDF et PowerPoint, EN et FR.'}
          </p>
          <Link
            href={`/${locale}/playbooks`}
            className="inline-block bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            {isEN ? 'View Housekeeping Playbook' : 'Voir le Playbook Housekeeping'}
          </Link>
        </div>
      </section>

    </main>
    </>
  )
}
