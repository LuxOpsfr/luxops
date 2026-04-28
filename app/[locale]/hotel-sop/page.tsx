import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel SOP Templates — Complete Standard Operating Procedures | LuxOps'
      : 'Procédures opérationnelles hôtelières — complètes et prêtes à l\'emploi | LuxOps',
    description: isEN
      ? 'Complete hotel SOP system covering front office, housekeeping, F&B and spa. Built by hospitality professionals. Practical, structured and ready to use on day one.'
      : 'Procédures opérationnelles complètes couvrant la réception, le housekeeping, le F&B et le spa. Conçues par des professionnels de l\'hôtellerie. Pratiques, structurées et prêtes à l\'emploi.',
    keywords: isEN
      ? 'hotel sop, hotel sop template, hotel standard operating procedures, hotel sop sample, hotel operations manual template, luxury hotel sop'
      : 'sop hôtel, modèle sop hôtel, procédures opérationnelles hôtel, manuel opérations hôtel, procédures hôtelières',
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/hotel-sop`,
      languages: {
        'en': 'https://www.luxops.fr/en/hotel-sop',
        'fr': 'https://www.luxops.fr/fr/hotel-sop',
        'x-default': 'https://www.luxops.fr/en/hotel-sop',
      },
    },
  }
}

const DEPARTMENTS_EN = [
  {
    name: 'Front Office',
    color: '#0056D2',
    chapters: 12,
    desc: 'Check-in variations, check-out and billing, reservation handling, shift handover, complaint procedure, night audit, emergency protocols',
    href: '/en/front-office-sop',
  },
  {
    name: 'Housekeeping',
    color: '#2E7D32',
    chapters: 10,
    desc: 'Room cleaning sequences, supervisor inspection, turndown service, linen management, lost property, shift handover',
    href: '/en/housekeeping-sop',
  },
  {
    name: 'Food & Beverage',
    color: '#B45309',
    chapters: 10,
    desc: 'Service opening sequences, table service standards, bar procedures, complaint handling, allergen management, closing and handover',
  },
  {
    name: 'Spa & Wellness',
    color: '#7C3AED',
    chapters: 9,
    desc: 'Treatment reception, therapist protocols, hygiene standards, booking management, guest journey, retail and upsell',
  },
]

const DEPARTMENTS_FR = [
  {
    name: 'Réception',
    color: '#0056D2',
    chapters: 12,
    desc: 'Variations de check-in, check-out et facturation, gestion des réservations, passation de service, procédure plainte, audit de nuit, protocoles d\'urgence',
    href: '/fr/front-office-sop',
  },
  {
    name: 'Housekeeping',
    color: '#2E7D32',
    chapters: 10,
    desc: 'Séquences de remise en état, inspection superviseur, service de couverture, gestion du linge, objets trouvés, passation de service',
    href: '/fr/housekeeping-sop',
  },
  {
    name: 'Food & Beverage',
    color: '#B45309',
    chapters: 10,
    desc: 'Séquences d\'ouverture de service, standards de service en salle, procédures bar, gestion des plaintes, gestion des allergènes, fermeture et passation',
  },
  {
    name: 'Spa & Wellness',
    color: '#7C3AED',
    chapters: 9,
    desc: 'Accueil en spa, protocoles thérapeute, standards d\'hygiène, gestion des réservations, parcours client, retail et upsell',
  },
]

export default async function HotelSopPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'
  const departments = isEN ? DEPARTMENTS_EN : DEPARTMENTS_FR

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isEN ? 'Hotel SOP Templates' : 'Procédures opérationnelles hôtelières',
    description: isEN
      ? 'Complete hotel SOP system covering front office, housekeeping, F&B and spa. Built by hospitality professionals.'
      : 'Procédures opérationnelles complètes couvrant la réception, le housekeeping, le F&B et le spa. Conçues par des professionnels de l\'hôtellerie.',
    provider: { '@type': 'Organization', name: 'LuxOps', url: 'https://www.luxops.fr' },
    serviceType: 'Hotel Operations Consulting',
    areaServed: 'Worldwide',
    url: `https://www.luxops.fr/${locale}/hotel-sop`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-[#1A2E44] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
            {isEN ? 'Hotel SOP Templates' : 'Procédures opérationnelles hôtelières'}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {isEN
              ? 'Hotel Standard Operating Procedures: Built for How Hotels Actually Run'
              : 'Procédures opérationnelles hôtelières : conçues pour le fonctionnement réel'}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            {isEN
              ? 'A complete SOP system for four hotel departments. Each playbook covers the full procedure set for its area: standard interactions, shift structure, exceptions and quality controls.'
              : 'Des procédures opérationnelles complètes pour quatre départements hôteliers. Chaque playbook couvre l\'ensemble des procédures de son domaine : interactions standards, structure de service, cas d\'exception et contrôles qualité.'}
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
                ? 'Download a free chapter from any department playbook'
                : "Téléchargez un chapitre gratuit d'un playbook de votre choix"}
            </p>
            <p className="text-sm text-[#4f6074]">
              {isEN
                ? 'Front Office, Housekeeping, F&B or Spa — see what structured hotel SOPs look like in practice.'
                : 'Réception, Housekeeping, F&B ou Spa — découvrez à quoi ressemblent des procédures hôtelières structurées.'}
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

      {/* What makes hotel SOPs useful or not */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-8">
            {isEN ? 'What makes a hotel SOP useful' : 'Ce qui rend un SOP hôtelier utile'}
          </h2>
          {isEN ? (
            <>
              <p className="text-gray-600 leading-relaxed mb-5">
                A hotel SOP (Standard Operating Procedure) is a documented, step-by-step procedure that defines how a specific task or interaction should be handled. When it works, it gives every team member a clear reference regardless of experience level. It reduces errors, shortens onboarding time, and makes it possible to identify where a breakdown occurred when something goes wrong.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                The problem with most generic SOP templates is that they document the obvious and skip the difficult parts. Check-in: greet the guest, verify ID, assign room. That is not an SOP. It is a summary. A real front office SOP covers what happens when the assigned room is not ready, when the guest disputes a charge, when a walk-in arrives during peak occupancy, when a VIP's pre-arrival request was not communicated to housekeeping.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The same applies in every department. A housekeeping SOP that only covers the cleaning sequence misses the supervisor inspection protocol, the DND escalation procedure, the linen reconciliation process. An F&B SOP that covers service flow but not complaint handling or allergen management is incomplete in practice.
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-600 leading-relaxed mb-5">
                Un SOP hôtelier (Standard Operating Procedure) est une procédure documentée, pas à pas, qui définit comment une tâche ou une interaction spécifique doit être gérée. Quand il fonctionne, il donne à chaque membre de l'équipe une référence claire quelle que soit son expérience. Il réduit les erreurs, raccourcit le temps d'intégration et permet d'identifier où une rupture s'est produite quand quelque chose tourne mal.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Le problème avec la plupart des modèles génériques est qu'ils documentent l'évident et omettent les parties difficiles. Check-in : accueillir le client, vérifier la pièce d'identité, attribuer la chambre. Ce n'est pas une procédure. C'est un résumé. Une vraie procédure réception couvre ce qui se passe quand la chambre attribuée n'est pas prête, quand le client conteste une facturation, quand un walk-in arrive en période de fort taux d'occupation, quand la demande pré-arrivée d'un VIP n'a pas été transmise au housekeeping.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Il en va de même dans chaque département. Des procédures housekeeping qui ne couvrent que la séquence de remise en état manquent le protocole d'inspection superviseur, la gestion des chambres en DND, le bilan linge. Des procédures F&B qui couvrent le déroulement du service mais pas la gestion des plaintes ou des allergènes sont incomplètes en pratique.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Department cards */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-2 text-center">
            {isEN ? '4 Department SOP Playbooks' : '4 playbooks par département'}
          </h2>
          <p className="text-gray-500 text-center mb-12">
            {isEN
              ? 'Each playbook is a complete, standalone SOP system for its department.'
              : 'Chaque playbook est un système de procédures complet et autonome pour son département.'}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {departments.map((dept) => (
              <div key={dept.name} className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full" style={{ background: dept.color }} />
                  <h3 className="font-bold text-[#1A2E44] text-lg">{dept.name}</h3>
                  <span className="ml-auto text-xs text-gray-400 font-medium">
                    {dept.chapters} {isEN ? 'chapters' : 'chapitres'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{dept.desc}</p>
                <Link
                  href={dept.href ?? `/${locale}/playbooks`}
                  className="text-sm font-semibold hover:underline"
                  style={{ color: dept.color }}
                >
                  {isEN ? 'View playbook →' : 'Voir le playbook →'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the system fits together */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-8">
            {isEN ? 'How the four playbooks fit together' : 'Comment les quatre playbooks s\'articulent'}
          </h2>
          {isEN ? (
            <>
              <p className="text-gray-600 leading-relaxed mb-5">
                Each playbook is a standalone SOP system for its department. A front office team can deploy the front office playbook without needing the others. The same is true for housekeeping, F&B and spa.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Where properties run multiple departments under the same management, the bundle provides a consistent framework across the operation. Procedures, inspection standards and handover formats are aligned across departments, which reduces the friction that comes from teams using incompatible formats.
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-600 leading-relaxed mb-5">
                Chaque playbook est un système de procédures autonome pour son département. Une équipe réception peut déployer le playbook réception sans avoir besoin des autres. Il en va de même pour le housekeeping, le F&B et le spa.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Pour les établissements qui gèrent plusieurs départements sous la même direction, le bundle fournit un cadre cohérent pour l'ensemble de l'opération. Les procédures, les standards d'inspection et les formats de passation sont alignés entre les départements, ce qui réduit les frictions liées à l'utilisation de formats incompatibles.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Bundle CTA */}
      <section className="bg-[#1A2E44] py-16 px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <div className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
            {isEN ? 'Best Value' : 'Meilleur rapport qualité/prix'}
          </div>
          <h2 className="text-2xl font-bold mb-4">
            {isEN ? 'All four departments, one system' : 'Les quatre départements, un seul système'}
          </h2>
          <p className="text-gray-300 mb-8">
            {isEN
              ? 'Front Office, Housekeeping, F&B and Spa. All four playbooks at once. Aligned formats, consistent standards, ready to deploy across the whole operation.'
              : 'Réception, Housekeeping, F&B et Spa. Les quatre playbooks en une seule fois. Formats alignés, standards cohérents, prêts à déployer sur l\'ensemble de l\'opération.'}
          </p>
          <Link
            href={`/${locale}/playbooks`}
            className="inline-block bg-white text-[#1A2E44] font-semibold px-8 py-4 rounded-lg transition-colors hover:bg-gray-100"
          >
            {isEN ? 'Get the Complete Bundle' : 'Obtenir le bundle complet'}
          </Link>
        </div>
      </section>

    </main>
    </>
  )
}
