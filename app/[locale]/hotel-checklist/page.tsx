import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel Checklist — Complete Operations Checklists for Hotels | LuxOps'
      : 'Checklist Hôtel — Checklists Opérationnelles Complètes | LuxOps',
    description: isEN
      ? 'Free hotel checklists for daily operations, housekeeping, front desk, F&B and quality audits. Built for luxury and boutique hotels. Download the full SOP playbooks.'
      : 'Checklists hôtel gratuites pour les opérations quotidiennes, housekeeping, réception, F&B et audits qualité. Conçues pour les hôtels de luxe et boutique.',
    keywords: isEN
      ? 'hotel checklist, hotel operations checklist, hotel daily checklist, hotel cleanliness checklist, hotel inspection checklist, hotel management checklist, hotel opening checklist'
      : 'checklist hôtel, checklist opérations hôtel, checklist journalière hôtel, checklist propreté hôtel, checklist inspection hôtel, checklist gestion hôtelière',
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/hotel-checklist`,
    },
  }
}

const CHECKLISTS_EN = [
  {
    id: 'front-desk',
    title: 'Front Desk Daily Checklist',
    color: '#0056D2',
    icon: '🏨',
    items: [
      'Review arrivals list and flag VIP guests',
      'Check room allocation and special requests',
      'Confirm outstanding reservations and pre-authorisations',
      'Brief all front desk staff on key events of the day',
      'Verify lobby cleanliness and ambient conditions',
      'Check key inventory and key card stock',
      'Review previous night audit report',
      'Confirm transportation bookings and concierge requests',
    ],
  },
  {
    id: 'housekeeping',
    title: 'Housekeeping Daily Checklist',
    color: '#2E7D32',
    icon: '🛏️',
    items: [
      'Distribute room assignment sheets',
      'Check linen stock and laundry status',
      'Inspect room attendant trolleys before start',
      'Confirm priority rooms (early arrivals, VIPs)',
      'Review maintenance defect log from previous day',
      'Check public area cleaning schedule',
      'Inspect back-of-house corridors and storage',
      'Record and chase outstanding maintenance issues',
    ],
  },
  {
    id: 'food-beverage',
    title: 'Food & Beverage Daily Checklist',
    color: '#B45309',
    icon: '🍽️',
    items: [
      'Review covers forecast and prep requirements',
      'Check buffet setup and mise en place standards',
      'Verify bar stock and fridge temperatures',
      'Inspect uniform and personal hygiene standards',
      'Brief team on menu specials and allergen updates',
      'Check reservation list for dietary requirements',
      'Test all ordering systems (POS, printers)',
      'Complete opening hygiene log',
    ],
  },
  {
    id: 'quality',
    title: 'Quality & Guest Experience Checklist',
    color: '#7C3AED',
    icon: '✅',
    items: [
      'Review previous day guest satisfaction scores',
      'Respond to any new online reviews',
      'Log unresolved guest complaints and follow up',
      'Check lost property log and outstanding returns',
      'Verify all service recovery actions completed',
      'Inspect signage and printed materials across property',
      'Review in-house guest satisfaction if applicable',
      'Update shift handover log with all open items',
    ],
  },
]

const CHECKLISTS_FR = [
  {
    id: 'front-desk',
    title: 'Checklist journalière Réception',
    color: '#0056D2',
    icon: '🏨',
    items: [
      'Consulter la liste des arrivées et identifier les clients VIP',
      'Vérifier l\'affectation des chambres et les demandes spéciales',
      'Confirmer les réservations en attente et les pré-autorisations',
      'Briefer l\'équipe réception sur les événements du jour',
      'Vérifier la propreté et les conditions d\'ambiance du lobby',
      'Contrôler l\'inventaire des clés et les stocks de cartes',
      'Examiner le rapport de clôture de la nuit précédente',
      'Confirmer les réservations de transport et demandes conciergerie',
    ],
  },
  {
    id: 'housekeeping',
    title: 'Checklist journalière Housekeeping',
    color: '#2E7D32',
    icon: '🛏️',
    items: [
      'Distribuer les feuilles de travail aux équipiers',
      'Contrôler le stock de linge et l\'état de la blanchisserie',
      'Inspecter les chariots avant le début du service',
      'Identifier les chambres prioritaires (arrivées anticipées, VIPs)',
      'Consulter le carnet de défauts de la veille',
      'Vérifier le programme de nettoyage des espaces communs',
      'Inspecter les couloirs et zones de stockage back-of-house',
      'Enregistrer et relancer les maintenances en attente',
    ],
  },
  {
    id: 'food-beverage',
    title: 'Checklist journalière Food & Beverage',
    color: '#B45309',
    icon: '🍽️',
    items: [
      'Examiner les prévisions de couverts et besoins de préparation',
      'Contrôler la mise en place du buffet selon les standards',
      'Vérifier le stock bar et les températures des réfrigérateurs',
      'Inspecter les uniformes et l\'hygiène personnelle',
      'Briefer l\'équipe sur les spéciaux du jour et allergènes',
      'Vérifier les réservations pour les régimes alimentaires',
      'Tester les systèmes de commande (POS, imprimantes)',
      'Compléter le registre d\'hygiène d\'ouverture',
    ],
  },
  {
    id: 'quality',
    title: 'Checklist Qualité et Expérience Client',
    color: '#7C3AED',
    icon: '✅',
    items: [
      'Consulter les scores de satisfaction de la veille',
      'Répondre aux nouveaux avis en ligne',
      'Suivre les plaintes non résolues et relancer',
      'Vérifier le registre des objets trouvés',
      'Confirmer les actions de service recovery effectuées',
      'Inspecter la signalétique et les supports imprimés',
      'Consulter les retours clients en cours de séjour si applicable',
      'Mettre à jour le journal de passation de service',
    ],
  },
]

const RELATED_EN = [
  {
    href: '/hotel-housekeeping-checklist',
    title: 'Hotel Housekeeping Checklist',
    desc: 'Full room inspection checklist: bed, bathroom, surfaces, floors and final sign-off.',
    color: '#2E7D32',
  },
  {
    href: '/hotel-audit-checklist',
    title: 'Hotel Audit Checklist',
    desc: 'Quality audit framework covering all departments: front office, housekeeping, F&B and guest experience.',
    color: '#1A2E44',
  },
  {
    href: '/hotel-sop',
    title: 'Hotel SOP Templates',
    desc: 'Complete standard operating procedures for luxury hotel departments.',
    color: '#0056D2',
  },
  {
    href: '/front-office-sop',
    title: 'Front Office SOP',
    desc: '12-chapter front desk SOP playbook covering every guest interaction.',
    color: '#0056D2',
  },
]

const RELATED_FR = [
  {
    href: '/hotel-housekeeping-checklist',
    title: 'Checklist Housekeeping Hôtel',
    desc: 'Checklist complète d\'inspection de chambre : literie, salle de bain, surfaces, sols et contrôle final.',
    color: '#2E7D32',
  },
  {
    href: '/hotel-audit-checklist',
    title: 'Checklist Audit Hôtel',
    desc: 'Cadre d\'audit qualité couvrant tous les départements : réception, housekeeping, F&B et expérience client.',
    color: '#1A2E44',
  },
  {
    href: '/hotel-sop',
    title: 'Modèles SOP Hôtel',
    desc: 'Procédures opérationnelles standards complètes pour les départements d\'un hôtel de luxe.',
    color: '#0056D2',
  },
  {
    href: '/front-office-sop',
    title: 'SOP Réception Hôtel',
    desc: 'Playbook SOP réception en 12 chapitres couvrant chaque interaction client.',
    color: '#0056D2',
  },
]

export default async function HotelChecklistPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'
  const checklists = isEN ? CHECKLISTS_EN : CHECKLISTS_FR
  const related = isEN ? RELATED_EN : RELATED_FR

  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-[#1A2E44] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
            {isEN ? 'Free Hotel Checklists' : 'Checklists Hôtel Gratuites'}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {isEN
              ? 'Hotel Operations Checklist — Complete Daily Templates'
              : 'Checklist Hôtel — Modèles Opérationnels Quotidiens Complets'}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            {isEN
              ? 'Ready-to-use hotel checklists for every department. Front desk, housekeeping, F&B and quality control. Built to the standards of luxury and boutique hotel operations.'
              : 'Checklists hôtel prêtes à l\'emploi pour chaque département. Réception, housekeeping, F&B et contrôle qualité. Conçues selon les standards des hôtels de luxe et boutique.'}
          </p>
          <Link
            href={`/${locale}/playbooks`}
            className="inline-block bg-white text-[#1A2E44] font-semibold px-8 py-4 rounded-lg transition-colors hover:bg-gray-100"
          >
            {isEN ? 'View Complete SOP Playbooks' : 'Voir les Playbooks SOP Complets'}
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-4">
            {isEN ? 'Why hotel checklists matter' : 'Pourquoi les checklists hôtelières sont indispensables'}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            {isEN
              ? 'A hotel runs on hundreds of small decisions and tasks repeated every day, across every shift. When those tasks are undocumented, the results depend entirely on who is working. A good hotel checklist removes that dependency. It makes the expected outcome explicit, repeatable and verifiable.'
              : 'Un hôtel fonctionne sur des centaines de petites décisions et tâches répétées chaque jour, à chaque service. Quand ces tâches ne sont pas documentées, les résultats dépendent entièrement de qui est en poste. Une bonne checklist hôtelière supprime cette dépendance. Elle rend le résultat attendu explicite, reproductible et vérifiable.'}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {isEN
              ? 'The checklists below cover the four core operational areas of a hotel. They are designed to be used as daily briefing tools, not just inspection forms. For full standard operating procedures and training materials, see the LuxOps playbooks.'
              : 'Les checklists ci-dessous couvrent les quatre domaines opérationnels principaux d\'un hôtel. Elles sont conçues pour être utilisées comme outils de briefing quotidien, pas seulement comme fiches d\'inspection. Pour les procédures opérationnelles complètes et les supports de formation, consultez les playbooks LuxOps.'}
          </p>
        </div>
      </section>

      {/* Checklists */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-14">
          {checklists.map((checklist) => (
            <div key={checklist.id}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{checklist.icon}</span>
                <h2 className="text-xl font-bold text-[#1A2E44]">{checklist.title}</h2>
              </div>
              <div className="border border-gray-100 rounded-xl overflow-hidden">
                <ul className="divide-y divide-gray-100">
                  {checklist.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 px-6 py-4">
                      <span
                        className="mt-0.5 w-5 h-5 rounded border-2 flex-shrink-0"
                        style={{ borderColor: checklist.color }}
                      />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to use section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-8">
            {isEN ? 'How to use these hotel checklists' : 'Comment utiliser ces checklists hôtelières'}
          </h2>
          <div className="space-y-6">
            {(isEN ? [
              {
                title: 'Use them at the start of every shift',
                body: 'A checklist only works if it is used consistently. Assign a responsible person per checklist, per shift. The act of physically checking each item forces attention to areas that are easy to overlook when busy.',
              },
              {
                title: 'Adapt them to your property',
                body: 'These checklists are starting points. A 20-room boutique hotel has different priorities than a 200-room resort. Edit the items to reflect your actual setup, your brand standards and your team structure.',
              },
              {
                title: 'Pair them with SOPs',
                body: 'A checklist tells you what to check. An SOP tells you exactly how to do it. For teams that need full standard operating procedures with training content, the LuxOps playbooks provide the complete system.',
              },
            ] : [
              {
                title: 'Les utiliser à chaque prise de service',
                body: 'Une checklist ne fonctionne que si elle est utilisée de façon cohérente. Assignez un responsable par checklist, par service. Le fait de cocher chaque point force l\'attention sur des zones faciles à négliger en période chargée.',
              },
              {
                title: 'Les adapter à votre établissement',
                body: 'Ces checklists sont des points de départ. Un boutique-hôtel de 20 chambres a des priorités différentes d\'un resort de 200 chambres. Adaptez les points à votre configuration réelle, vos standards de marque et votre structure d\'équipe.',
              },
              {
                title: 'Les combiner avec les SOPs',
                body: 'Une checklist indique quoi vérifier. Un SOP indique exactement comment le faire. Pour les équipes qui ont besoin de procédures opérationnelles complètes avec du contenu de formation, les playbooks LuxOps fournissent le système complet.',
              },
            ]).map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#1A2E44] flex-shrink-0 mt-2" />
                <div>
                  <h3 className="font-semibold text-[#1A2E44] mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related resources */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1A2E44] mb-2">
            {isEN ? 'More hotel checklists and SOP templates' : 'Plus de checklists hôtel et modèles SOP'}
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            {isEN
              ? 'Go deeper with department-specific checklists and full SOP playbooks.'
              : 'Approfondissez avec des checklists spécifiques par département et des playbooks SOP complets.'}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {related.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                  <p className="font-semibold text-[#1A2E44] group-hover:underline text-sm">{item.title}</p>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A2E44] py-16 px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            {isEN ? 'Need the complete SOP system?' : 'Besoin du système SOP complet ?'}
          </h2>
          <p className="text-gray-300 mb-8">
            {isEN
              ? 'The LuxOps playbooks go beyond checklists. Full standard operating procedures, training content, audit templates and management tools for every department. PDF and PowerPoint, EN and FR included.'
              : 'Les playbooks LuxOps vont au-delà des checklists. Procédures opérationnelles standards complètes, contenu de formation, modèles d\'audit et outils de management pour chaque département. PDF et PowerPoint, EN et FR inclus.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/playbooks`}
              className="inline-block bg-white text-[#1A2E44] font-semibold px-8 py-4 rounded-lg transition-colors hover:bg-gray-100"
            >
              {isEN ? 'View All Playbooks' : 'Voir tous les Playbooks'}
            </Link>
            <Link
              href={`/${locale}/playbooks`}
              className="inline-block border border-white/40 text-white font-semibold px-8 py-4 rounded-lg transition-colors hover:bg-white/10"
            >
              {isEN ? 'Get the Bundle — €199' : 'Obtenir le Bundle — 199€'}
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
