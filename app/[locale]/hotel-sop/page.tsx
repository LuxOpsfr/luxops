import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel SOP Templates — Standard Operating Procedures for Hotels | LuxOps'
      : 'Modèles SOP Hôtel — Procédures Opérationnelles Standards | LuxOps',
    description: isEN
      ? 'Ready-to-use hotel SOP templates for luxury and boutique properties. Complete standard operating procedures for Front Office, Housekeeping, F&B and Spa departments.'
      : 'Modèles SOP hôtel prêts à l\'emploi pour établissements de luxe et boutique. Procédures complètes pour Réception, Housekeeping, F&B et Spa.',
    keywords: isEN
      ? 'hotel sop, hotel sop template, hotel standard operating procedures, hotel sop sample, hotel operations manual template, luxury hotel sop'
      : 'sop hôtel, modèle sop hôtel, procédures opérationnelles hôtel, manuel opérations hôtel, procédures hôtelières',
  }
}

const DEPARTMENTS_EN = [
  { name: 'Front Office', color: '#0056D2', chapters: 12, desc: 'Check-in, check-out, reservations, guest relations, night audit', href: '/en/front-office-sop' },
  { name: 'Housekeeping', color: '#2E7D32', chapters: 10, desc: 'Room cleaning, turndown, laundry, inspections, quality control', href: '/en/housekeeping-sop' },
  { name: 'Food & Beverage', color: '#B45309', chapters: 10, desc: 'Restaurant service, bar operations, banqueting, kitchen coordination' },
  { name: 'Spa & Wellness', color: '#7C3AED', chapters: 9, desc: 'Treatment protocols, reception, hygiene standards, retail management' },
]

const DEPARTMENTS_FR = [
  { name: 'Réception', color: '#0056D2', chapters: 12, desc: 'Check-in, check-out, réservations, relation client, audit de nuit', href: '/fr/front-office-sop' },
  { name: 'Housekeeping', color: '#2E7D32', chapters: 10, desc: 'Nettoyage des chambres, couverture, linge, inspections, contrôle qualité', href: '/fr/housekeeping-sop' },
  { name: 'Food & Beverage', color: '#B45309', chapters: 10, desc: 'Service restaurant, bar, banqueting, coordination cuisine' },
  { name: 'Spa & Wellness', color: '#7C3AED', chapters: 9, desc: 'Protocoles de soins, réception, hygiène, gestion retail' },
]

export default async function HotelSopPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'
  const departments = isEN ? DEPARTMENTS_EN : DEPARTMENTS_FR

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-[#1A2E44] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
            {isEN ? 'Hotel SOP Templates' : 'Modèles SOP Hôtel'}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {isEN
              ? 'Hotel Standard Operating Procedures — Complete SOP Library'
              : 'Procédures Opérationnelles Standards Hôtel — Bibliothèque SOP Complète'}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            {isEN
              ? '4 complete SOP playbooks covering every department of a luxury hotel. Built by hospitality professionals, ready to deploy on day one.'
              : '4 playbooks SOP complets couvrant chaque département d\'un hôtel de luxe. Conçus par des professionnels de l\'hôtellerie, prêts à être déployés dès le premier jour.'}
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

      {/* Departments */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-2 text-center">
            {isEN ? '4 Department SOP Playbooks' : '4 Playbooks SOP par Département'}
          </h2>
          <p className="text-gray-500 text-center mb-12">
            {isEN ? 'Each playbook is a complete, standalone SOP system for its department.' : 'Chaque playbook est un système SOP complet et autonome pour son département.'}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {departments.map((dept) => (
              <div key={dept.name} className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full" style={{ background: dept.color }} />
                  <h3 className="font-bold text-[#1A2E44] text-lg">{dept.name}</h3>
                  <span className="ml-auto text-xs text-gray-400 font-medium">{dept.chapters} {isEN ? 'chapters' : 'chapitres'}</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{dept.desc}</p>
                <Link
                  href={`/${locale}/playbooks`}
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

      {/* Why SOPs */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-4">
            {isEN ? 'What Makes a Good Hotel SOP?' : 'Qu\'est-ce qui fait un bon SOP hôtelier ?'}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            {isEN
              ? 'A hotel SOP (Standard Operating Procedure) is only effective if it\'s specific, actionable and actually used by your team. Generic templates pulled from the internet rarely reflect the reality of luxury hotel operations. They miss the nuances, the brand standards, and the practical know-how that separates a 3-star from a 5-star experience.'
              : 'Un SOP hôtelier n\'est efficace que s\'il est spécifique, actionnable et réellement utilisé par votre équipe. Les modèles génériques trouvés sur internet reflètent rarement la réalité des opérations hôtelières de luxe. Ils manquent les nuances, les standards de marque et le savoir-faire pratique qui fait la différence entre une expérience 3 étoiles et 5 étoiles.'}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {isEN
              ? 'The LuxOps playbooks are built by hospitality professionals with direct experience in luxury and boutique hotel operations. Each SOP is practical, precise and immediately deployable, with no customisation required to get started.'
              : 'Les playbooks LuxOps sont conçus par des professionnels de l\'hôtellerie avec une expérience directe dans les opérations d\'hôtels de luxe et boutique. Chaque SOP est pratique, précis et immédiatement déployable.'}
          </p>
        </div>
      </section>

      {/* Bundle CTA */}
      <section className="bg-[#1A2E44] py-16 px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <div className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
            {isEN ? 'Best Value' : 'Meilleur rapport qualité/prix'}
          </div>
          <h2 className="text-2xl font-bold mb-4">
            {isEN ? 'Get All 4 SOP Playbooks — €199' : 'Obtenir les 4 Playbooks SOP — 199€'}
          </h2>
          <p className="text-gray-300 mb-8">
            {isEN
              ? 'Front Office + Housekeeping + F&B + Spa. Save €69 vs buying individually. PDF + PowerPoint, EN & FR versions included.'
              : 'Réception + Housekeeping + F&B + Spa. Économisez 69€ par rapport à l\'achat individuel. PDF + PowerPoint, versions EN & FR incluses.'}
          </p>
          <Link
            href={`/${locale}/playbooks`}
            className="inline-block bg-white text-[#1A2E44] font-semibold px-8 py-4 rounded-lg transition-colors hover:bg-gray-100"
          >
            {isEN ? 'Get the Complete Bundle' : 'Obtenir le Bundle Complet'}
          </Link>
        </div>
      </section>
    </main>
  )
}
