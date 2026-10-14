import type { Metadata } from 'next'
import Link from 'next/link'
import LeadMagnetForm from '@/components/LeadMagnetForm'
import EditorialRouteImage from '@/components/EditorialRouteImage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'Free SOP Manual Sample | LuxOps'
      : 'Extrait gratuit des manuels SOP | LuxOps',
    description: isEn
      ? 'Explore a practical sample from the LuxOps hotel operations playbooks. Choose Front Office, Housekeeping, Food & Beverage or Spa, and receive it in English and French.'
      : 'Découvrez un extrait opérationnel des playbooks LuxOps. Choisissez Front Office, Housekeeping, Food & Beverage ou Spa, en français et en anglais.',
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
        'A focused operational topic from the department you choose',
        'Practical procedures and standards drawn from the corresponding playbook',
        'A first look at the level of detail used in the complete SOP reference',
      ]
    : [
        'Un sujet opérationnel ciblé dans le département choisi',
        'Des procédures et standards pratiques issus du playbook correspondant',
        'Un aperçu du niveau de détail de la référence SOP complète',
      ]

  return (
    <div className="bg-[#fbf8f2] text-[#172822]">

      {/* Hero */}
      <section
        className="relative py-20 px-6 overflow-hidden border-b border-[#ded8cd]"
      >
        <div className="max-w-screen-xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 text-[#775d39] text-[11px] uppercase tracking-widest mb-8"
            style={{ backgroundColor: '#eee8dc' }}
          >
            <span className="w-2 h-2 bg-[#775d39] rounded-full" />
            {isEn ? 'Free resource' : 'Ressource gratuite'}
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-medium leading-tight text-[#172822] mb-6 max-w-4xl mx-auto">
            {isEn ? 'Preview our hotel SOP manuals' : 'Découvrez un extrait de nos manuels SOP'}
          </h1>
          <p className="text-xl text-[#59645f] max-w-2xl mx-auto leading-relaxed">
            {isEn
              ? 'Choose a department to receive a practical sample from its LuxOps playbook, in English and French.'
              : 'Choisissez un département pour recevoir un extrait opérationnel de son playbook LuxOps, en français et en anglais.'}
          </p>
        </div>
      </section>

      <EditorialRouteImage
        route="free-hotel-procedures"
        locale={locale}
        alt={isEn ? 'A hotel housekeeper arranging a guest-room pillow' : 'Une femme de chambre arrange un oreiller dans une chambre d’hôtel'}
      />

      {/* Stats bar */}
      <section className="py-10 px-6 bg-white border-b border-[#ded8cd]">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center max-w-lg mx-auto">
            {[
              { value: '4', label: isEn ? 'Departments' : 'Départements' },
              { value: 'EN+FR', label: isEn ? 'Languages' : 'Langues' },
              { value: '100%', label: isEn ? 'Free' : 'Gratuit' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="font-display text-3xl font-medium text-[#172822] mb-1">{stat.value}</p>
                <p className="text-xs text-[#59645f] uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="font-display text-3xl font-medium text-[#172822] mb-4">
              {isEn ? 'Choose your department' : 'Choisissez votre département'}
            </h2>
            <p className="text-[#59645f] leading-relaxed">
              {isEn
                ? 'Get a complimentary sample featuring practical procedures from your chosen department. Enter your email to access both language versions.'
                : 'Recevez un extrait gratuit présentant des procédures concrètes du département choisi. Indiquez votre email pour accéder aux deux versions linguistiques.'}
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
            style={{ backgroundColor: '#f3eee5' }}
          >
            <div className="max-w-2xl mb-8">
              <p className="text-[11px] uppercase tracking-widest text-[#775d39] mb-3">
                {isEn ? 'Next step' : 'Étape suivante'}
              </p>
              <h2 className="font-display text-3xl font-medium text-[#172822] mb-3">
                {isEn
                  ? 'Looking for practical tools to go further?'
                  : 'Besoin d’outils pratiques pour aller plus loin ?'}
              </h2>
              <p className="text-[#59645f] leading-relaxed">
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
                <p className="text-[11px] uppercase tracking-widest text-[#775d39] mb-3">
                  {isEn ? 'Starter Packs' : 'Starter Packs'}
                </p>
                <h3 className="font-display text-xl font-medium text-[#172822] mb-3">
                  {isEn ? 'Focused operational kits' : 'Kits opérationnels ciblés'}
                </h3>
                <p className="text-sm text-[#59645f] leading-relaxed mb-5">
                  {isEn
                    ? 'Checklists, templates and scripts designed for fast implementation by front office and housekeeping teams.'
                    : 'Checklists, modèles et scripts conçus pour une mise en place rapide par les équipes réception et housekeeping.'}
                </p>
                <span className="text-sm font-semibold text-[#172822] group-hover:underline">
                  {isEn ? 'Explore starter packs' : 'Voir les starter packs'}
                </span>
              </Link>

              <Link
                href={`/${locale}/playbooks#department-playbooks`}
                className="group bg-white border border-gray-100 p-6 hover:shadow-md transition-all"
                style={{ borderRadius: '0.125rem' }}
              >
                <p className="text-[11px] uppercase tracking-widest text-[#775d39] mb-3">
                  {isEn ? 'Full Playbooks' : 'Playbooks complets'}
                </p>
                <h3 className="font-display text-xl font-medium text-[#172822] mb-3">
                  {isEn ? 'Complete SOP references' : 'Références SOP complètes'}
                </h3>
                <p className="text-sm text-[#59645f] leading-relaxed mb-5">
                  {isEn
                    ? 'Department-level SOP systems for Front Office, Housekeeping, Food & Beverage and Spa operations.'
                    : 'Systèmes SOP par département pour la réception, le housekeeping, le Food & Beverage et les opérations spa.'}
                </p>
                <span className="text-sm font-semibold text-[#172822] group-hover:underline">
                  {isEn ? 'View full playbooks' : 'Voir les playbooks complets'}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is inside */}
      <section className="py-24 px-6 bg-[#f3eee5]">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-medium text-[#172822] mb-8">
              {isEn
                ? 'A practical sample from your chosen department'
                : 'Un aperçu concret de votre département'}
            </h2>
            <div className="space-y-4">
              {whatIsInside.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 flex-shrink-0 mt-2"
                    style={{ backgroundColor: '#775d39' }}
                  />
                  <p className="text-[#59645f] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-sm text-[#59645f] leading-relaxed">
                {isEn
                  ? 'The sample is selected to give you a direct, practical view of the procedures available in the full department playbook.'
                  : 'Cet extrait vous donne un aperçu direct et concret des procédures réunies dans le playbook complet de votre département.'}
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
