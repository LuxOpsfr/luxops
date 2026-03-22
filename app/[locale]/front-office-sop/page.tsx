import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel Front Office SOP — Front Desk Standard Operating Procedures | LuxOps'
      : 'SOP Réception Hôtel — Procédures Opérationnelles Front Office | LuxOps',
    description: isEN
      ? 'Complete front office SOP for luxury hotels. Standard operating procedures for check-in, check-out, reservations, guest relations and front desk operations.'
      : 'SOP réception hôtel complet pour établissements de luxe. Procédures pour check-in, check-out, réservations, relation client et opérations front office.',
    keywords: isEN
      ? 'front office sop, hotel front desk procedures, front office hotel training, hotel reception sop, front desk standard operating procedures'
      : 'sop réception hôtel, procédures front office hôtel, formation réception hôtel, SOP accueil hôtel',
  }
}

const CHECKLIST_EN = [
  'Check-in procedure (VIP, standard, group)',
  'Check-out and billing process',
  'Reservation handling and modification SOP',
  'Phone etiquette and communication standards',
  'Guest complaint resolution procedure',
  'Night audit process',
  'Concierge and upselling guidelines',
  'Lost & found and key management',
  'Inter-department communication protocol',
  'Emergency and security procedures',
  'Daily reporting and handover checklist',
  'Loyalty program handling',
]

const CHECKLIST_FR = [
  'Procédure de check-in (VIP, standard, groupe)',
  'Processus de check-out et facturation',
  'SOP gestion et modification des réservations',
  'Standards de communication téléphonique',
  'Procédure de résolution des plaintes clients',
  'Procédure d\'audit de nuit',
  'Directives de conciergerie et d\'upselling',
  'Gestion des objets trouvés et des clés',
  'Protocole de communication inter-départements',
  'Procédures d\'urgence et de sécurité',
  'Checklist de rapport journalier et passation',
  'Gestion des programmes de fidélité',
]

export default async function FrontOfficeSopPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'
  const checklist = isEN ? CHECKLIST_EN : CHECKLIST_FR

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
              ? 'Hotel Front Office Standard Operating Procedures'
              : 'Procédures Opérationnelles Standards Réception Hôtel'}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            {isEN
              ? 'A complete front office SOP playbook for luxury hotels. 12 chapters covering every front desk procedure, from check-in to night audit, built to 5-star standards.'
              : 'Un playbook SOP réception complet pour hôtels de luxe. 12 chapitres couvrant chaque procédure front office, du check-in à l\'audit de nuit, selon les standards 5 étoiles.'}
          </p>
          <Link
            href={`/${locale}/playbooks`}
            className="inline-block bg-[#0056D2] hover:bg-[#0041A3] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
          >
            {isEN ? 'Get the Front Office Playbook — €67' : 'Obtenir le Playbook Réception — 67€'}
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {(isEN ? [
            { value: '12', label: 'SOP chapters', sub: 'covering the full guest journey' },
            { value: '80+', label: 'procedures', sub: 'ready to implement immediately' },
            { value: '5★', label: 'standard', sub: 'built for luxury hotel operations' },
          ] : [
            { value: '12', label: 'chapitres SOP', sub: 'couvrant le parcours client complet' },
            { value: '80+', label: 'procédures', sub: 'prêtes à être mises en place' },
            { value: '5★', label: 'standard', sub: 'conçu pour l\'hôtellerie de luxe' },
          ]).map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-bold text-[#1A2E44]">{s.value}</div>
              <div className="font-semibold text-gray-800 mt-1">{s.label}</div>
              <div className="text-sm text-gray-500 mt-1">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-2">
            {isEN ? "What's Inside the Front Office SOP Playbook" : 'Ce que contient le Playbook SOP Réception'}
          </h2>
          <p className="text-gray-500 mb-8">
            {isEN ? '12 detailed chapters for a world-class front desk operation.' : '12 chapitres détaillés pour une réception de niveau international.'}
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {checklist.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-lg p-4">
                <div className="w-6 h-6 rounded-full bg-[#0056D2] flex items-center justify-center flex-shrink-0 mt-0.5">
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

      {/* Why */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-8">
            {isEN ? 'Why Your Front Office Needs Structured SOPs' : 'Pourquoi votre réception a besoin de SOPs structurés'}
          </h2>
          <div className="space-y-6">
            {(isEN ? [
              { title: 'Every guest interaction handled correctly', body: 'From the first greeting to check-out, SOPs ensure your team delivers a consistent, professional experience every time.' },
              { title: 'Reduce front desk errors', body: 'Billing mistakes, missed requests, miscommunication: structured procedures eliminate the most common and costly front office errors.' },
              { title: 'Train new staff in days', body: 'A documented SOP system means new front desk agents can be operational quickly without relying on tribal knowledge.' },
              { title: 'Protect your online reputation', body: 'Front office performance directly drives review scores. A well-run reception is your most powerful marketing tool.' },
            ] : [
              { title: 'Chaque interaction client correctement gérée', body: 'Du premier accueil au check-out, les SOPs garantissent une expérience cohérente et professionnelle à chaque fois.' },
              { title: 'Réduire les erreurs de réception', body: 'Erreurs de facturation, demandes manquées, mauvaise communication : des procédures structurées éliminent les erreurs les plus fréquentes.' },
              { title: 'Former le personnel en quelques jours', body: 'Un système SOP documenté permet aux nouveaux agents de réception d\'être opérationnels rapidement.' },
              { title: 'Protéger votre réputation en ligne', body: 'La performance de la réception impacte directement les scores d\'avis. Une réception bien gérée est votre meilleur outil marketing.' },
            ]).map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#0056D2] flex-shrink-0 mt-2" />
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
            {isEN ? 'Stop Improvising. Start Operating.' : 'Arrêtez d\'improviser. Commencez à opérer.'}
          </h2>
          <p className="text-gray-300 mb-8">
            {isEN
              ? 'The LuxOps Front Office Playbook gives your team a clear, professional SOP system built for luxury hotel operations. Available in English and French.'
              : 'Le Playbook Réception LuxOps donne à votre équipe un système SOP clair et professionnel, conçu pour l\'hôtellerie de luxe. Disponible en anglais et en français.'}
          </p>
          <Link
            href={`/${locale}/playbooks`}
            className="inline-block bg-[#0056D2] hover:bg-[#0041A3] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            {isEN ? 'Get the Front Office Playbook — €67' : 'Obtenir le Playbook Réception — 67€'}
          </Link>
          <p className="text-gray-400 text-sm mt-4">
            {isEN ? 'PDF + PowerPoint · EN & FR · Instant access' : 'PDF + PowerPoint · EN & FR · Accès immédiat'}
          </p>
        </div>
      </section>
    </main>
  )
}
