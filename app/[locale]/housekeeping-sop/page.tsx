import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'

  return {
    title: isEN
      ? 'Hotel Housekeeping SOP — Standard Operating Procedures | LuxOps'
      : 'SOP Housekeeping Hôtel — Procédures Opérationnelles Standards | LuxOps',
    description: isEN
      ? 'Ready-to-use housekeeping SOP templates for luxury hotels. Complete standard operating procedures covering room cleaning, turndown service, laundry, inspections and quality control.'
      : 'Modèles de SOP housekeeping prêts à l\'emploi pour hôtels de luxe. Procédures complètes : nettoyage des chambres, service de couverture, linge, inspections et contrôle qualité.',
    keywords: isEN
      ? 'housekeeping sop, housekeeping standard operating procedures, hotel housekeeping procedures, sop for housekeeping, hotel cleaning sop, luxury hotel housekeeping'
      : 'sop housekeeping, procédures housekeeping hôtel, SOP ménage hôtel, procédures opérationnelles housekeeping, housekeeping hôtel de luxe',
    openGraph: {
      title: isEN ? 'Hotel Housekeeping SOP | LuxOps' : 'SOP Housekeeping Hôtel | LuxOps',
      description: isEN
        ? 'Ready-to-use housekeeping SOP templates for luxury hotels.'
        : 'Modèles de SOP housekeeping prêts à l\'emploi pour hôtels de luxe.',
    },
  }
}

const CHECKLIST_EN = [
  'Pre-cleaning room inspection protocol',
  'Bed making and linen change standards',
  'Bathroom deep-clean procedure (step-by-step)',
  'In-room amenities replenishment checklist',
  'Turndown service sequence',
  'Lost & found handling procedure',
  'Supervisor quality inspection form',
  'Laundry and linen management SOP',
  'Cleaning product usage and safety guidelines',
  'Guest complaint escalation procedure',
]

const CHECKLIST_FR = [
  'Protocole d\'inspection de la chambre avant nettoyage',
  'Standards de refection des lits et changement de linge',
  'Procédure de nettoyage approfondi de la salle de bain',
  'Checklist de réapprovisionnement des amenités',
  'Séquence du service de couverture',
  'Procédure de gestion des objets trouvés',
  'Grille d\'inspection qualité superviseur',
  'SOP gestion du linge et de la blanchisserie',
  'Utilisation des produits nettoyants et règles de sécurité',
  'Procédure d\'escalade des plaintes clients',
]

const STATS_EN = [
  { value: '10', label: 'SOP chapters', sub: 'covering every department touchpoint' },
  { value: '68+', label: 'procedures', sub: 'ready to implement immediately' },
  { value: '5★', label: 'standard', sub: 'built for luxury & boutique hotels' },
]

const STATS_FR = [
  { value: '10', label: 'chapitres SOP', sub: 'couvrant chaque point de contact' },
  { value: '68+', label: 'procédures', sub: 'prêtes à être mises en place' },
  { value: '5★', label: 'standard', sub: 'conçu pour l\'hôtellerie de luxe' },
]

export default async function HousekeepingSopPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'

  const checklist = isEN ? CHECKLIST_EN : CHECKLIST_FR
  const stats = isEN ? STATS_EN : STATS_FR

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-[#1A2E44] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#2E7D32] text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
            {isEN ? 'Housekeeping SOP' : 'SOP Housekeeping'}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {isEN
              ? 'Hotel Housekeeping Standard Operating Procedures'
              : 'Procédures Opérationnelles Standards Housekeeping Hôtel'}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            {isEN
              ? 'A complete, ready-to-use SOP playbook for luxury hotel housekeeping teams. Covers every procedure from room cleaning to laundry management, built to 5-star standards.'
              : 'Un playbook SOP complet et prêt à l\'emploi pour les équipes housekeeping d\'hôtels de luxe. Couvre chaque procédure, du nettoyage des chambres à la gestion du linge, selon les standards 5 étoiles.'}
          </p>
          <Link
            href={`/${locale}/playbooks`}
            className="inline-block bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
          >
            {isEN ? 'Get the Housekeeping Playbook — €67' : 'Obtenir le Playbook Housekeeping — 67€'}
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-bold text-[#1A2E44]">{s.value}</div>
              <div className="font-semibold text-gray-800 mt-1">{s.label}</div>
              <div className="text-sm text-gray-500 mt-1">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What is a Housekeeping SOP */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-4">
            {isEN ? 'What is a Housekeeping SOP?' : 'Qu\'est-ce qu\'un SOP Housekeeping ?'}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            {isEN
              ? 'A housekeeping Standard Operating Procedure (SOP) is a documented, step-by-step guide that defines exactly how every cleaning and maintenance task should be performed in a hotel. It ensures consistency, quality and compliance across your entire housekeeping team — regardless of experience level or shift.'
              : 'Un SOP Housekeeping (Standard Operating Procedure) est un guide documenté, étape par étape, qui définit exactement comment chaque tâche de nettoyage et d\'entretien doit être réalisée dans un hôtel. Il garantit la cohérence, la qualité et la conformité dans toute l\'équipe housekeeping, quel que soit le niveau d\'expérience ou le shift.'}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {isEN
              ? 'For luxury and boutique hotels, having a robust housekeeping SOP is non-negotiable. Guests expect a flawless, consistent experience every single stay. A well-structured SOP is the foundation that makes this possible — reducing errors, cutting training time, and protecting your brand reputation.'
              : 'Pour les hôtels de luxe et boutique, disposer d\'un SOP housekeeping solide est indispensable. Les clients attendent une expérience impeccable et cohérente à chaque séjour. Un SOP bien structuré est la base qui rend cela possible — réduisant les erreurs, diminuant le temps de formation et protégeant la réputation de votre établissement.'}
          </p>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-2">
            {isEN ? 'What\'s Included in Our Housekeeping SOP Playbook' : 'Ce que contient notre Playbook SOP Housekeeping'}
          </h2>
          <p className="text-gray-500 mb-8">
            {isEN
              ? '10 detailed chapters covering the full scope of hotel housekeeping operations.'
              : '10 chapitres détaillés couvrant l\'intégralité des opérations housekeeping hôtelières.'}
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {checklist.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-lg p-4">
                <div className="w-6 h-6 rounded-full bg-[#2E7D32] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-8">
            {isEN ? 'Why Luxury Hotels Need Structured Housekeeping SOPs' : 'Pourquoi les hôtels de luxe ont besoin de SOPs Housekeeping structurés'}
          </h2>
          <div className="space-y-6">
            {(isEN ? [
              { title: 'Consistency across every shift', body: 'SOPs ensure the same high standard whether it\'s a seasoned housekeeper or a new hire. Every room, every time.' },
              { title: 'Faster onboarding', body: 'New team members get up to speed in days, not weeks. Clear procedures eliminate guesswork and reduce training costs.' },
              { title: 'Guest satisfaction', body: 'Cleanliness is consistently the #1 driver of hotel reviews. A structured SOP directly impacts your guest scores and repeat bookings.' },
              { title: 'Reduced errors and complaints', body: 'Documented procedures create accountability. When something goes wrong, you have a clear process to review and improve.' },
            ] : [
              { title: 'Cohérence sur chaque shift', body: 'Les SOPs garantissent le même niveau d\'exigence, que ce soit une femme de chambre expérimentée ou une nouvelle recrue.' },
              { title: 'Intégration plus rapide', body: 'Les nouveaux membres d\'équipe deviennent opérationnels en quelques jours. Des procédures claires éliminent les approximations.' },
              { title: 'Satisfaction client', body: 'La propreté est constamment le premier critère des avis hôteliers. Un SOP structuré impacte directement vos scores et fidélisation.' },
              { title: 'Moins d\'erreurs et de plaintes', body: 'Des procédures documentées créent de la responsabilité. En cas de problème, vous avez un processus clair à revoir.' },
            ]).map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#2E7D32] flex-shrink-0 mt-2" />
                <div>
                  <h3 className="font-semibold text-[#1A2E44] mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A2E44] py-16 px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            {isEN ? 'Ready-to-Use. Immediately Deployable.' : 'Prêt à l\'emploi. Déployable immédiatement.'}
          </h2>
          <p className="text-gray-300 mb-8">
            {isEN
              ? 'Stop building SOPs from scratch. The LuxOps Housekeeping Playbook gives you a complete, professionally structured SOP system built for 4 and 5-star hotel operations.'
              : 'Arrêtez de construire vos SOPs from scratch. Le Playbook Housekeeping LuxOps vous donne un système SOP complet et structuré professionnellement, conçu pour les opérations hôtelières 4 et 5 étoiles.'}
          </p>
          <Link
            href={`/${locale}/playbooks`}
            className="inline-block bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            {isEN ? 'Get the Housekeeping Playbook — €67' : 'Obtenir le Playbook Housekeeping — 67€'}
          </Link>
          <p className="text-gray-400 text-sm mt-4">
            {isEN ? 'PDF + PowerPoint · Available in EN & FR · Instant access' : 'PDF + PowerPoint · Disponible EN & FR · Accès immédiat'}
          </p>
        </div>
      </section>

    </main>
  )
}
