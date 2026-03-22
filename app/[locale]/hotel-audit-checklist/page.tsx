import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel Audit Checklist — Quality Audit for Luxury Hotels | LuxOps'
      : 'Checklist Audit Hôtel — Audit Qualité pour Hôtels de Luxe | LuxOps',
    description: isEN
      ? 'Professional hotel audit checklist for luxury and boutique properties. Evaluate operations, guest experience, cleanliness and service standards across all departments.'
      : 'Checklist d\'audit hôtelier professionnel pour établissements de luxe et boutique. Évaluez les opérations, l\'expérience client, la propreté et les standards de service.',
    keywords: isEN
      ? 'hotel audit checklist, hotel quality audit, hotel inspection checklist, luxury hotel audit, hotel operations audit, hotel standards checklist'
      : 'audit hôtel, checklist audit hôtelier, audit qualité hôtel, inspection hôtel, audit opérations hôtelières',
  }
}

const AUDIT_AREAS_EN = [
  { area: 'Front Office', items: ['Greeting standards', 'Check-in speed', 'Billing accuracy', 'Upselling compliance', 'Guest communication'] },
  { area: 'Housekeeping', items: ['Room cleanliness score', 'Linen quality', 'Amenities replenishment', 'Turndown execution', 'Maintenance reporting'] },
  { area: 'Food & Beverage', items: ['Menu knowledge', 'Service sequence', 'Presentation standards', 'Hygiene compliance', 'Bar setup'] },
  { area: 'Guest Experience', items: ['Response times', 'Complaint handling', 'Personalisation', 'Departure experience', 'Review score tracking'] },
]

const AUDIT_AREAS_FR = [
  { area: 'Réception', items: ['Standards d\'accueil', 'Rapidité du check-in', 'Exactitude de facturation', 'Conformité upselling', 'Communication client'] },
  { area: 'Housekeeping', items: ['Score de propreté des chambres', 'Qualité du linge', 'Réapprovisionnement des amenités', 'Exécution du couverture', 'Signalement maintenance'] },
  { area: 'Food & Beverage', items: ['Connaissance de la carte', 'Séquence de service', 'Standards de présentation', 'Conformité hygiène', 'Mise en place du bar'] },
  { area: 'Expérience Client', items: ['Temps de réponse', 'Gestion des plaintes', 'Personnalisation', 'Expérience de départ', 'Suivi des scores d\'avis'] },
]

export default async function HotelAuditPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'
  const auditAreas = isEN ? AUDIT_AREAS_EN : AUDIT_AREAS_FR

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-[#1A2E44] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
            {isEN ? 'Hotel Quality Audit' : 'Audit Qualité Hôtel'}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {isEN
              ? 'Hotel Audit Checklist for Luxury Operations'
              : 'Checklist d\'Audit Hôtelier pour Opérations de Luxe'}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            {isEN
              ? 'Identify gaps, raise standards and drive consistent excellence across your hotel. A professional audit framework built for luxury and boutique properties.'
              : 'Identifiez les lacunes, relevez les standards et impulsez l\'excellence dans tout votre hôtel. Un cadre d\'audit professionnel conçu pour les établissements de luxe et boutique.'}
          </p>
          <Link
            href={`/${locale}/quality-audit`}
            className="inline-block bg-white text-[#1A2E44] font-semibold px-8 py-4 rounded-lg transition-colors hover:bg-gray-100 text-base"
          >
            {isEN ? 'Discover Our Audit Service' : 'Découvrir notre Service d\'Audit'}
          </Link>
        </div>
      </section>

      {/* What we audit */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-2 text-center">
            {isEN ? 'What a LuxOps Hotel Audit Covers' : 'Ce que couvre un Audit Hôtel LuxOps'}
          </h2>
          <p className="text-gray-500 text-center mb-12">
            {isEN ? 'A comprehensive review across all guest-facing departments.' : 'Une revue complète de tous les départements en contact avec le client.'}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {auditAreas.map((area) => (
              <div key={area.area} className="border border-gray-100 rounded-xl p-6">
                <h3 className="font-bold text-[#1A2E44] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1A2E44] inline-block" />
                  {area.area}
                </h3>
                <ul className="space-y-2">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-8 text-center">
            {isEN ? 'The Audit Process' : 'Le Processus d\'Audit'}
          </h2>
          <div className="space-y-6">
            {(isEN ? [
              { step: '01', title: 'Pre-audit briefing', body: 'We review your current standards, brand guidelines and key pain points before the audit begins.' },
              { step: '02', title: 'On-site evaluation', body: 'A structured inspection of all departments using our luxury hotel benchmark framework.' },
              { step: '03', title: 'Detailed report', body: 'A scored report with specific findings, benchmarks and prioritised recommendations for each department.' },
              { step: '04', title: 'Action plan', body: 'A clear, actionable improvement roadmap with timelines and responsible owners for each point.' },
            ] : [
              { step: '01', title: 'Briefing pré-audit', body: 'Nous examinons vos standards actuels, directives de marque et principaux points de douleur avant le début de l\'audit.' },
              { step: '02', title: 'Évaluation sur site', body: 'Une inspection structurée de tous les départements selon notre cadre de référence hôtellerie de luxe.' },
              { step: '03', title: 'Rapport détaillé', body: 'Un rapport noté avec des constats spécifiques, des benchmarks et des recommandations priorisées par département.' },
              { step: '04', title: 'Plan d\'action', body: 'Une feuille de route d\'amélioration claire et actionnable avec des délais et des responsables pour chaque point.' },
            ]).map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="text-3xl font-bold text-gray-100 flex-shrink-0 w-10">{item.step}</div>
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
            {isEN ? 'Know Exactly Where Your Hotel Stands.' : 'Sachez exactement où en est votre hôtel.'}
          </h2>
          <p className="text-gray-300 mb-8">
            {isEN
              ? 'A LuxOps quality audit gives you a clear picture of your operation: what is working, what is not, and exactly what to fix first.'
              : 'Un audit qualité LuxOps vous donne une vision claire de votre exploitation\u00a0: ce qui fonctionne, ce qui ne fonctionne pas et exactement quoi corriger en premier.'}
          </p>
          <Link
            href={`/${locale}/quality-audit`}
            className="inline-block bg-white text-[#1A2E44] font-semibold px-8 py-4 rounded-lg transition-colors hover:bg-gray-100"
          >
            {isEN ? 'Request an Audit' : 'Demander un Audit'}
          </Link>
        </div>
      </section>
    </main>
  )
}
