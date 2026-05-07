import type { Metadata } from 'next'
import Link from 'next/link'
import LeadMagnetForm from '@/components/LeadMagnetForm'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'Free Hotel Procedures | Download an Introduction Chapter | LuxOps'
      : "Procédures hôtelières gratuites | Télécharger un chapitre d'introduction | LuxOps",
    description: isEn
      ? 'Download a free introduction chapter from the LuxOps hotel operations playbooks. Choose your department: Front Office, Housekeeping, Food & Beverage or Spa. Available in English and French.'
      : "Téléchargez gratuitement un chapitre d'introduction des playbooks opérationnels LuxOps. Choisissez votre département : Front Office, Housekeeping, F&B ou Spa. Disponible en français et en anglais.",
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/free-hotel-procedures`,
      languages: {
        en: 'https://www.luxops.fr/en/free-hotel-procedures',
        fr: 'https://www.luxops.fr/fr/free-hotel-procedures',
        'x-default': 'https://www.luxops.fr/en/free-hotel-procedures',
      },
    },
  }
}

export default async function FreeHotelProceduresPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const isEn = locale === 'en'

  const whatIsInside = isEn
    ? [
        'The 5 core operating principles of the department',
        'How to use the playbook with your team',
        'Adaptation guide by property type and size',
        'Quality standards and regulatory framework (LQA, Forbes)',
        'Quick-start guide by role: new staff, experienced staff, trainers',
      ]
    : [
        'Les 5 principes fondamentaux du département',
        "Comment utiliser le playbook avec votre équipe",
        "Guide d'adaptation par type et taille d'établissement",
        'Référentiel qualité et cadre réglementaire (LQA, Forbes)',
        'Guide de démarrage rapide par rôle : nouveau collaborateur, expérimenté, formateur',
      ]

  return (
    <div className="pt-16 bg-white">

      {/* Hero */}
      <section
        className="relative py-24 px-6 overflow-hidden border-b"
        style={{
          backgroundImage: 'radial-gradient(#c3c6d6 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
          borderColor: 'rgba(195,198,214,0.2)',
        }}
      >
        <div className="max-w-screen-xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 text-[#003d9b] font-bold text-[10px] uppercase tracking-widest mb-8"
            style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
          >
            <span className="w-2 h-2 bg-[#003d9b] rounded-full" />
            {isEn ? 'Free resource' : 'Ressource gratuite'}
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter leading-none text-[#0a1d2e] mb-6 max-w-4xl mx-auto">
            {isEn ? 'Free Hotel Procedures' : 'Procédures hôtelières gratuites'}
          </h1>
          <p className="text-xl text-[#4f6074] max-w-2xl mx-auto leading-relaxed">
            {isEn
              ? 'Choose your department and download the introduction chapter of the corresponding LuxOps playbook. Free, in English and French.'
              : "Choisissez votre département et téléchargez le chapitre d'introduction du playbook LuxOps correspondant. Gratuit, en français et en anglais."}
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 px-6 bg-white border-b" style={{ borderColor: 'rgba(195,198,214,0.2)' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center max-w-lg mx-auto">
            {[
              { value: '4', label: isEn ? 'Departments' : 'Départements' },
              { value: 'EN+FR', label: isEn ? 'Languages' : 'Langues' },
              { value: '100%', label: isEn ? 'Free' : 'Gratuit' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="font-display text-3xl font-extrabold text-[#003d9b] mb-1">{stat.value}</p>
                <p className="text-xs text-[#4f6074] uppercase tracking-widest font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="font-display text-3xl font-extrabold text-[#0a1d2e] tracking-tight mb-4">
              {isEn ? 'Choose your department' : 'Choisissez votre département'}
            </h2>
            <p className="text-[#4f6074] leading-relaxed">
              {isEn
                ? 'Each introduction chapter covers the philosophy, principles and structure behind the full playbook. Enter your email and download both language versions immediately.'
                : "Chaque chapitre d'introduction couvre la philosophie, les principes et la structure du playbook complet. Entrez votre email et téléchargez immédiatement les deux versions linguistiques."}
            </p>
          </div>
          <LeadMagnetForm locale={locale} />
        </div>
      </section>

      {/* Product paths */}
      <section className="pb-24 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div
            className="max-w-4xl mx-auto border border-gray-100 p-8 md:p-10"
            style={{ borderRadius: '0.125rem', backgroundColor: '#f8f9ff' }}
          >
            <div className="max-w-2xl mb-8">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#003d9b] mb-3">
                {isEn ? 'Next step' : 'Étape suivante'}
              </p>
              <h2 className="font-display text-3xl font-extrabold text-[#0a1d2e] tracking-tight mb-3">
                {isEn
                  ? 'Need practical tools after the free chapter?'
                  : 'Besoin d’outils pratiques après le chapitre gratuit ?'}
              </h2>
              <p className="text-[#4f6074] leading-relaxed">
                {isEn
                  ? 'Continue with focused starter packs for immediate daily use, or browse the full department playbooks when you need the complete SOP reference.'
                  : 'Continuez avec des starter packs ciblés pour une utilisation immédiate, ou consultez les playbooks complets par département lorsque vous avez besoin de la référence SOP complète.'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href={`/${locale}/playbooks#starter-packs`}
                className="group bg-white border border-gray-100 p-6 hover:shadow-md transition-all"
                style={{ borderRadius: '0.125rem' }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#003d9b] mb-3">
                  {isEn ? 'Starter Packs' : 'Starter Packs'}
                </p>
                <h3 className="font-display text-xl font-extrabold text-[#0a1d2e] mb-3">
                  {isEn ? 'Focused operational kits' : 'Kits opérationnels ciblés'}
                </h3>
                <p className="text-sm text-[#4f6074] leading-relaxed mb-5">
                  {isEn
                    ? 'Checklists, templates and scripts designed for fast implementation by front office and housekeeping teams.'
                    : 'Checklists, modèles et scripts conçus pour une mise en place rapide par les équipes réception et housekeeping.'}
                </p>
                <span className="text-sm font-bold text-[#003d9b] group-hover:underline">
                  {isEn ? 'Explore starter packs' : 'Voir les starter packs'}
                </span>
              </Link>

              <Link
                href={`/${locale}/playbooks#department-playbooks`}
                className="group bg-white border border-gray-100 p-6 hover:shadow-md transition-all"
                style={{ borderRadius: '0.125rem' }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#003d9b] mb-3">
                  {isEn ? 'Full Playbooks' : 'Playbooks complets'}
                </p>
                <h3 className="font-display text-xl font-extrabold text-[#0a1d2e] mb-3">
                  {isEn ? 'Complete SOP references' : 'Références SOP complètes'}
                </h3>
                <p className="text-sm text-[#4f6074] leading-relaxed mb-5">
                  {isEn
                    ? 'Department-level SOP systems for Front Office, Housekeeping, Food & Beverage and Spa operations.'
                    : 'Systèmes SOP par département pour la réception, le housekeeping, le Food & Beverage et les opérations spa.'}
                </p>
                <span className="text-sm font-bold text-[#003d9b] group-hover:underline">
                  {isEn ? 'View full playbooks' : 'Voir les playbooks complets'}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is inside */}
      <section className="py-24 px-6" style={{ backgroundColor: '#f8f9ff' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold text-[#0a1d2e] tracking-tight mb-8">
              {isEn
                ? 'What is inside the introduction chapter?'
                : "Qu'est-ce que contient le chapitre d'introduction ?"}
            </h2>
            <div className="space-y-4">
              {whatIsInside.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 flex-shrink-0 mt-2"
                    style={{ backgroundColor: '#003d9b', borderRadius: '0.125rem' }}
                  />
                  <p className="text-[#4f6074] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-sm text-[#4f6074] leading-relaxed">
                {isEn
                  ? 'The full playbook continues with 9 to 11 additional chapters covering department-specific procedures in detail: cleaning protocols, service sequences, inspection criteria, onboarding guides and shift management.'
                  : "Le playbook complet se poursuit avec 9 à 11 chapitres supplémentaires couvrant les procédures du département en détail : protocoles de nettoyage, séquences de service, critères d'inspection, guides d'intégration et gestion des shifts."}
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
