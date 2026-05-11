import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { breadcrumbSchema, faqSchema, localizedPath } from '@/lib/seo'
import TrackedLink from '@/components/TrackedLink'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'
  return {
    title: isEN
      ? 'Hotel SOP Templates and Starter Packs | LuxOps'
      : 'Procédures opérationnelles hôtelières et starter packs | LuxOps',
    description: isEN
      ? 'Hotel SOP templates, starter packs and department playbooks for front office, housekeeping, F&B and spa. Practical hotel procedures, checklists and SOP examples ready to adapt.'
      : 'Modèles de SOP hôtel, starter packs et playbooks par département pour la réception, le housekeeping, le F&B et le spa. Procédures, checklists et exemples prêts à adapter.',
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
    href: '/en/hotel-fb-sop',
  },
  {
    name: 'Spa & Wellness',
    color: '#7C3AED',
    chapters: 9,
    desc: 'Treatment reception, therapist protocols, hygiene standards, booking management, guest journey, retail and upsell',
    href: '/en/playbooks/spa',
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
    href: '/fr/hotel-fb-sop',
  },
  {
    name: 'Spa & Wellness',
    color: '#7C3AED',
    chapters: 9,
    desc: 'Accueil en spa, protocoles thérapeute, standards d\'hygiène, gestion des réservations, parcours client, retail et upsell',
    href: '/fr/playbooks/spa',
  },
]

const STARTER_PACKS_EN = [
  {
    label: 'Front Office',
    title: 'Front Office Starter Pack',
    price: '€29',
    href: '/en/playbooks/fo-starter-pack',
    desc: 'Front desk checklists, handover template and guest communication scripts for daily reception operations.',
    points: ['Check-in and check-out basics', 'Shift handover template', 'Complaint scripts'],
  },
  {
    label: 'Housekeeping',
    title: 'Housekeeping Inspection Kit',
    price: '€29',
    href: '/en/playbooks/hsk-starter-pack',
    desc: 'Room inspection checklists, supervisor control sheets and defect tracking tools for housekeeping consistency.',
    points: ['Room inspection checklists', 'Supervisor control sheet', 'Defect tracking'],
  },
  {
    label: 'Food & Beverage',
    title: 'F&B Service Starter Pack',
    price: '€29',
    href: '/en/playbooks/fb-starter-pack',
    desc: 'Restaurant, bar and room service checklists, scripts and control tools for daily F&B execution.',
    points: ['Service checklists', 'Room service flow', 'Recovery scripts'],
  },
]

const STARTER_PACKS_FR = [
  {
    label: 'Réception',
    title: 'Starter Pack Front Office',
    price: '29 €',
    href: '/fr/playbooks/fo-starter-pack',
    desc: 'Checklists réception, modèle de passation et scripts de communication client pour structurer les bases du service.',
    points: ['Bases check-in et check-out', 'Modèle de passation', 'Scripts réclamation'],
  },
  {
    label: 'Housekeeping',
    title: 'Kit Inspection Housekeeping',
    price: '29 €',
    href: '/fr/playbooks/hsk-starter-pack',
    desc: 'Checklists inspection chambre, feuilles de contrôle gouvernante et suivi des défauts pour renforcer la régularité.',
    points: ['Checklists inspection chambre', 'Feuille de contrôle gouvernante', 'Suivi des défauts'],
  },
  {
    label: 'Food & Beverage',
    title: 'Starter Pack F&B',
    price: '29 €',
    href: '/fr/playbooks/fb-starter-pack',
    desc: 'Checklists restaurant, bar et room service, scripts et outils de contrôle pour l’exécution quotidienne.',
    points: ['Checklists service', 'Flux room service', 'Scripts recovery'],
  },
]

const FAQS_EN = [
  {
    question: 'Do hotel SOP templates work for boutique hotels?',
    answer:
      'Yes, if the procedures are structured as an operational framework rather than a rigid script. Boutique hotels usually need clear standards even more because small teams cover multiple roles. LuxOps SOPs can be adapted to property size, service level and local routines.',
  },
  {
    question: 'What is included in a complete hotel SOP system?',
    answer:
      'A complete system covers guest-facing interactions, back-of-house routines, handovers, quality checks, escalation rules and department-specific exceptions. For a hotel, that normally means Front Office, Housekeeping, F&B and Spa or Wellness procedures.',
  },
  {
    question: 'Can SOPs be customized for independent hotels?',
    answer:
      'Yes. Ready-made SOPs should be treated as a professional operating base. Independent hotels can adapt names, timing, room categories, PMS references, approval flows and brand standards without rewriting every procedure from scratch.',
  },
  {
    question: 'How quickly can a hotel deploy SOP templates?',
    answer:
      'A department can usually start with priority procedures within a few days: check-in, shift handover, room inspection or complaint handling. A full rollout works best department by department, with manager review and team training.',
  },
]

const FAQS_FR = [
  {
    question: 'Les modèles de SOP fonctionnent-ils pour les boutique hotels ?',
    answer:
      "Oui, si les procédures sont construites comme un cadre opérationnel et non comme un script figé. Les boutique hotels ont souvent encore plus besoin de standards clairs, car les équipes sont réduites et couvrent plusieurs rôles.",
  },
  {
    question: 'Que contient un système complet de procédures hôtelières ?',
    answer:
      "Un système complet couvre les interactions client, les routines back-of-house, les passations, les contrôles qualité, les règles d'escalade et les exceptions propres à chaque département. Pour un hôtel, cela inclut généralement la réception, le housekeeping, le F&B et le spa.",
  },
  {
    question: 'Les SOPs peuvent-ils être adaptés à un hôtel indépendant ?',
    answer:
      "Oui. Les SOPs prêts à l'emploi doivent servir de base professionnelle. Un hôtel indépendant peut adapter les noms, horaires, catégories de chambres, références PMS, circuits de validation et standards de marque sans tout réécrire.",
  },
  {
    question: 'En combien de temps un hôtel peut-il déployer des SOPs ?',
    answer:
      "Un département peut démarrer en quelques jours sur les procédures prioritaires : check-in, passation, inspection chambre ou gestion des réclamations. Un déploiement complet fonctionne mieux département par département, avec validation manager et formation équipe.",
  },
]

export default async function HotelSopPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'
  const departments = isEN ? DEPARTMENTS_EN : DEPARTMENTS_FR
  const starterPacks = isEN ? STARTER_PACKS_EN : STARTER_PACKS_FR
  const faqs = isEN ? FAQS_EN : FAQS_FR

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: isEN ? 'Hotel SOP Templates' : 'Procédures opérationnelles hôtelières',
        description: isEN
          ? 'Complete hotel SOP system covering front office, housekeeping, F&B and spa. Built by hospitality professionals.'
          : 'Procédures opérationnelles complètes couvrant la réception, le housekeeping, le F&B et le spa. Conçues par des professionnels de l\'hôtellerie.',
        provider: { '@id': 'https://www.luxops.fr/#organization' },
        serviceType: 'Hotel Standard Operating Procedures',
        areaServed: 'Worldwide',
        url: localizedPath(locale, '/hotel-sop'),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: isEN ? 'Hotel SOP playbooks by department' : 'Playbooks SOP par département',
          itemListElement: [
            ...starterPacks.map((pack) => ({
              '@type': 'Offer',
              price: isEN ? '29' : '29',
              priceCurrency: 'EUR',
              itemOffered: {
                '@type': 'CreativeWork',
                name: pack.title,
                description: pack.desc,
                url: `${localizedPath(locale)}${pack.href.replace(`/${locale}`, '')}`,
              },
            })),
            ...departments.map((department) => ({
              '@type': 'Offer',
              price: isEN ? '67' : '67',
              priceCurrency: 'EUR',
              itemOffered: {
                '@type': 'CreativeWork',
                name: `${department.name} SOP Playbook`,
                description: department.desc,
                url: `${localizedPath(locale)}${department.href ? department.href.replace(`/${locale}`, '') : '/playbooks'}`,
              },
            })),
          ],
        },
      },
      breadcrumbSchema([
        { name: 'LuxOps', url: localizedPath(locale) },
        { name: isEN ? 'Hotel SOP Templates' : 'SOP hôtel', url: localizedPath(locale, '/hotel-sop') },
      ]),
      faqSchema(faqs),
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-[#1A2E44] text-white px-6 pt-32 pb-20">
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
              ? 'Practical hotel SOP documents by department. Start with a focused starter pack for daily tools, or move to a complete department playbook when you need the full procedure reference.'
              : 'Des documents SOP hôteliers pratiques par département. Commencez par un starter pack ciblé pour les outils du quotidien, ou passez au playbook complet lorsque vous avez besoin de toute la référence procédure.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedLink
              href="#starter-packs"
              eventName="starter_pack_cta_clicked"
              eventProperties={{
                source_page: `/${locale}/hotel-sop`,
                placement: 'hero',
                product: 'starter_packs_section',
                cta_label: isEN ? 'Start with Starter Packs' : 'Commencer avec les starter packs',
              }}
              className="inline-block bg-white text-[#1A2E44] font-semibold px-8 py-4 rounded-lg transition-colors hover:bg-gray-100"
            >
              {isEN ? 'Start with Starter Packs' : 'Commencer avec les starter packs'}
            </TrackedLink>
            <TrackedLink
              href="#department-playbooks"
              eventName="playbook_cta_clicked"
              eventProperties={{
                source_page: `/${locale}/hotel-sop`,
                placement: 'hero',
                product: 'department_playbooks_section',
                cta_label: isEN ? 'View Department Playbooks' : 'Voir les playbooks',
              }}
              className="inline-block border border-white/40 text-white font-semibold px-8 py-4 rounded-lg transition-colors hover:bg-white/10"
            >
              {isEN ? 'View Department Playbooks' : 'Voir les playbooks'}
            </TrackedLink>
            <TrackedLink
              href={`/${locale}/free-hotel-procedures`}
              eventName="free_chapter_cta_clicked"
              eventProperties={{
                source_page: `/${locale}/hotel-sop`,
                placement: 'hero',
                cta_label: isEN ? 'Download Free Chapter' : 'Télécharger un chapitre gratuit',
              }}
              className="inline-block border border-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-colors hover:bg-white/10"
            >
              {isEN ? 'Download Free Chapter' : 'Télécharger un chapitre gratuit'}
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* Starter packs */}
      <section id="starter-packs" className="py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#003d9b] mb-2">
                {isEN ? 'New' : 'Nouveau'}
              </p>
              <h2 className="text-2xl font-bold text-[#1A2E44] mb-3">
                {isEN ? 'Start with practical SOP tools' : 'Commencer avec des outils SOP pratiques'}
              </h2>
              <p className="text-gray-600 max-w-2xl">
                {isEN
                  ? 'Focused checklists, templates and scripts your team can use immediately.'
                  : 'Des checklists, modèles et scripts ciblés que vos équipes peuvent utiliser immédiatement.'}
              </p>
            </div>
            <p className="text-sm font-semibold text-[#1A2E44]">
              {isEN ? 'From €29' : 'À partir de 29 €'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {starterPacks.map((pack) => (
              <article key={pack.href} className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#003d9b] mb-2">
                      {pack.label}
                    </p>
                    <h3 className="text-xl font-bold text-[#1A2E44]">{pack.title}</h3>
                  </div>
                  <span className="text-xl font-bold text-[#1A2E44]">{pack.price}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{pack.desc}</p>
                <ul className="space-y-2 mb-6">
                  {pack.points.map((point) => (
                    <li key={point} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-[#003d9b]">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <TrackedLink
                  href={pack.href}
                  eventName="starter_pack_cta_clicked"
                  eventProperties={{
                    source_page: `/${locale}/hotel-sop`,
                    placement: 'starter_pack_card',
                    product: pack.title,
                    cta_label: isEN ? 'View Starter Pack' : 'Voir le starter pack',
                  }}
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-white font-bold text-sm hover:opacity-90 transition-opacity"
                  style={{ background: 'linear-gradient(135deg, #003d9b, #0052cc)', borderRadius: '0.125rem' }}
                >
                  {isEN ? 'View Starter Pack' : 'Voir le starter pack'}
                </TrackedLink>
              </article>
            ))}
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
                ? 'Front Office, Housekeeping, F&B or Spa. See what structured hotel SOPs look like in practice.'
                : 'Réception, Housekeeping, F&B ou Spa. Découvrez à quoi ressemblent des procédures hôtelières structurées.'}
            </p>
          </div>
          <TrackedLink
            href={`/${locale}/free-hotel-procedures`}
            eventName="free_chapter_cta_clicked"
            eventProperties={{
              source_page: `/${locale}/hotel-sop`,
              placement: 'lead_magnet_band',
              cta_label: isEN ? 'Download free' : 'Télécharger gratuitement',
            }}
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-bold text-sm flex-shrink-0 hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(135deg, #003d9b, #0052cc)', borderRadius: '0.125rem' }}
          >
            {isEN ? 'Download free' : 'Télécharger gratuitement'} <ArrowRight size={18} />
          </TrackedLink>
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
                {'A hotel SOP (Standard Operating Procedure) is a documented, step-by-step procedure that defines how a specific task or interaction should be handled. When it works, it gives every team member a clear reference regardless of experience level. It reduces errors, shortens onboarding time, and makes it possible to identify where a breakdown occurred when something goes wrong.'}
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                {"The problem with most generic SOP templates is that they document the obvious and skip the difficult parts. Check-in: greet the guest, verify ID, assign room. That is not an SOP. It is a summary. A real front office SOP covers what happens when the assigned room is not ready, when the guest disputes a charge, when a walk-in arrives during peak occupancy, when a VIP's pre-arrival request was not communicated to housekeeping."}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {'The same applies in every department. A housekeeping SOP that only covers the cleaning sequence misses the supervisor inspection protocol, the DND escalation procedure, the linen reconciliation process. An F&B SOP that covers service flow but not complaint handling or allergen management is incomplete in practice.'}
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-600 leading-relaxed mb-5">
                {"Un SOP hôtelier (Standard Operating Procedure) est une procédure documentée, pas à pas, qui définit comment une tâche ou une interaction spécifique doit être gérée. Quand il fonctionne, il donne à chaque membre de l'équipe une référence claire quelle que soit son expérience. Il réduit les erreurs, raccourcit le temps d'intégration et permet d'identifier où une rupture s'est produite quand quelque chose tourne mal."}
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                {"Le problème avec la plupart des modèles génériques est qu'ils documentent l'évident et omettent les parties difficiles. Check-in : accueillir le client, vérifier la pièce d'identité, attribuer la chambre. Ce n'est pas une procédure. C'est un résumé. Une vraie procédure réception couvre ce qui se passe quand la chambre attribuée n'est pas prête, quand le client conteste une facturation, quand un walk-in arrive en période de fort taux d'occupation, quand la demande pré-arrivée d'un VIP n'a pas été transmise au housekeeping."}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {"Il en va de même dans chaque département. Des procédures housekeeping qui ne couvrent que la séquence de remise en état manquent le protocole d'inspection superviseur, la gestion des chambres en DND, le bilan linge. Des procédures F&B qui couvrent le déroulement du service mais pas la gestion des plaintes ou des allergènes sont incomplètes en pratique."}
              </p>
            </>
          )}
        </div>
      </section>

      {/* Department cards */}
      <section id="department-playbooks" className="py-16 px-6">
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
                <TrackedLink
                  href={dept.href ?? `/${locale}/playbooks`}
                  eventName="playbook_cta_clicked"
                  eventProperties={{
                    source_page: `/${locale}/hotel-sop`,
                    placement: 'department_playbook_card',
                    product: `${dept.name} SOP Playbook`,
                    cta_label: isEN ? 'View playbook' : 'Voir le playbook',
                  }}
                  className="text-sm font-semibold hover:underline"
                  style={{ color: dept.color }}
                >
                  {isEN ? 'View playbook →' : 'Voir le playbook →'}
                </TrackedLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical sample */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl font-bold text-[#1A2E44] mb-4">
              {isEN ? 'What a real SOP should specify' : 'Ce qu\'une vraie procédure doit préciser'}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {isEN
                ? 'A useful hotel SOP removes ambiguity. It tells the team what to do, who owns the action, when to escalate and what evidence should be left behind for the next shift.'
                : "Une procédure hôtelière utile enlève l'ambiguïté. Elle indique quoi faire, qui est responsable, quand escalader et quelle trace laisser pour le service suivant."}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden">
            {(isEN ? [
              { label: 'Trigger', value: 'Guest disputes a minibar charge during check-out' },
              { label: 'Owner', value: 'Front desk agent validates the item, then escalates above the approved adjustment limit' },
              { label: 'Record', value: 'Billing note, adjustment reason, manager approval and housekeeping follow-up if stock count is unclear' },
            ] : [
              { label: 'Déclencheur', value: 'Un client conteste une consommation minibar au check-out' },
              { label: 'Responsable', value: "Le réceptionniste vérifie l'élément, puis escalade au-delà du seuil d'ajustement autorisé" },
              { label: 'Trace', value: 'Note de facturation, motif d\'ajustement, validation manager et suivi housekeeping si le stock est incertain' },
            ]).map((item) => (
              <div key={item.label} className="bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#0056D2] mb-3">{item.label}</p>
                <p className="text-sm leading-relaxed text-gray-700">{item.value}</p>
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
                Where properties run multiple departments under the same management, using the same playbook structure creates a consistent framework across the operation. Procedures, inspection standards and handover formats are aligned across departments, which reduces the friction that comes from teams using incompatible formats.
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-600 leading-relaxed mb-5">
                Chaque playbook est un système de procédures autonome pour son département. Une équipe réception peut déployer le playbook réception sans avoir besoin des autres. Il en va de même pour le housekeeping, le F&B et le spa.
              </p>
              <p className="text-gray-600 leading-relaxed">
                {"Pour les établissements qui gèrent plusieurs départements sous la même direction, utiliser la même structure de playbook crée un cadre cohérent pour l'ensemble de l'opération. Les procédures, les standards d'inspection et les formats de passation sont alignés entre les départements, ce qui réduit les frictions liées à l'utilisation de formats incompatibles."}
              </p>
            </>
          )}
        </div>
      </section>

      {/* Internal cluster */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-8">
            {isEN ? 'Build your SOP library by department' : 'Construire votre bibliothèque SOP par département'}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                href: `/${locale}/front-office-sop`,
                title: isEN ? 'Front Office SOP' : 'SOP réception',
                body: isEN ? 'Check-in, check-out, guest recovery, night audit and shift handover.' : 'Check-in, check-out, réclamations, audit de nuit et passation.',
              },
              {
                href: `/${locale}/housekeeping-sop`,
                title: isEN ? 'Housekeeping SOP' : 'SOP housekeeping',
                body: isEN ? 'Room cleaning, inspection, linen, DND rooms, lost property and supervisor controls.' : 'Remise en état, inspection, linge, DND, objets trouvés et contrôles superviseur.',
              },
              {
                href: `/${locale}/blog/hotel-fb-restaurant-procedures`,
                title: isEN ? 'F&B service procedures' : 'Procédures F&B',
                body: isEN ? 'Restaurant sequence of service, room service, mise en place and service recovery.' : 'Séquence de service, room service, mise en place et gestion des incidents.',
              },
              {
                href: `/${locale}/blog/hotel-spa-wellness-sops`,
                title: isEN ? 'Spa & Wellness SOP' : 'SOP spa & wellness',
                body: isEN ? 'Treatment room setup, guest journey, therapist conduct and quality checks.' : 'Préparation cabine, parcours client, conduite thérapeute et contrôles qualité.',
              },
              {
                href: `/${locale}/blog/hotel-front-desk-procedures`,
                title: isEN ? 'Front Desk Procedures' : 'Procédures réception',
                body: isEN ? 'Daily front desk routines, handover, guest requests, check-in and check-out control.' : 'Routines réception, passation, demandes client, contrôle check-in et check-out.',
              },
              {
                href: `/${locale}/hotel-housekeeping-checklist`,
                title: isEN ? 'Housekeeping Checklist' : 'Checklist housekeeping',
                body: isEN ? 'Printable role-based checklists for room attendants, public areas and floor supervisors.' : 'Checklists imprimables par poste pour femme de chambre, équipier lieux publics et gouvernante.',
              },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="border border-gray-100 rounded-lg p-6 hover:border-[#1A2E44] hover:shadow-sm transition-all">
                <h3 className="font-semibold text-[#1A2E44] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E44] mb-8">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white border border-gray-100 rounded-lg p-6">
                <h3 className="font-semibold text-[#1A2E44] mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1A2E44] py-16 px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <div className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
            {isEN ? 'Choose your SOP format' : 'Choisir votre format SOP'}
          </div>
          <h2 className="text-2xl font-bold mb-4">
            {isEN ? 'Start with a focused SOP pack' : 'Commencer avec un pack SOP ciblé'}
          </h2>
          <p className="text-gray-300 mb-8">
            {isEN
              ? 'If you need practical hotel SOP tools quickly, start with a €29 starter pack. If you need the full procedure reference, choose the department playbook at €67.'
              : 'Si vous avez besoin rapidement d\'outils SOP pratiques, commencez par un starter pack à 29 €. Si vous cherchez la référence procédure complète, choisissez le playbook département à 67 €.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedLink
              href="#starter-packs"
              eventName="starter_pack_cta_clicked"
              eventProperties={{
                source_page: `/${locale}/hotel-sop`,
                placement: 'final_cta',
                product: 'starter_packs_section',
                cta_label: isEN ? 'View Starter Packs' : 'Voir les starter packs',
              }}
              className="inline-block bg-white text-[#1A2E44] font-semibold px-8 py-4 rounded-lg transition-colors hover:bg-gray-100"
            >
              {isEN ? 'View Starter Packs' : 'Voir les starter packs'}
            </TrackedLink>
            <TrackedLink
              href="#department-playbooks"
              eventName="playbook_cta_clicked"
              eventProperties={{
                source_page: `/${locale}/hotel-sop`,
                placement: 'final_cta',
                product: 'department_playbooks_section',
                cta_label: isEN ? 'View Playbooks' : 'Voir les playbooks',
              }}
              className="inline-block border border-white/40 text-white font-semibold px-8 py-4 rounded-lg transition-colors hover:bg-white/10"
            >
              {isEN ? 'View Playbooks' : 'Voir les playbooks'}
            </TrackedLink>
          </div>
        </div>
      </section>

    </main>
    </>
  )
}
