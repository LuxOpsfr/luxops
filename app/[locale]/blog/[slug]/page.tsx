import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, CheckCircle2 } from 'lucide-react'
import { articles } from '@/content/blog/articles'
import { breadcrumbSchema, faqSchema as buildFaqSchema, localizedPath } from '@/lib/seo'

// Keywords per article — improves indexation signals for Google
const KEYWORDS_EN: Record<string, string> = {
  'hotel-operations-playbook': 'hotel operations playbook, hotel SOP, hotel procedures manual, hotel operations guide, luxury hotel management',
  'how-to-write-hotel-sops': 'how to write hotel SOPs, hotel standard operating procedures, hotel SOP template, hotel procedure writing',
  'hotel-front-office-sop': 'hotel front office SOP, hotel reception procedures, front desk standard operating procedures, check-in SOP hotel',
  'hotel-housekeeping-checklist': 'hotel housekeeping checklist, housekeeping SOP, room attendant checklist, hotel cleaning checklist',
  'hotel-fb-service-standards': 'hotel F&B service standards, hotel restaurant service procedures, food and beverage SOP hotel',
  'hotel-front-office-procedures': 'hotel front office procedures, hotel reception SOP, check-in check-out procedures hotel',
  'housekeeping-room-inspection': 'hotel room inspection checklist, housekeeping supervisor inspection, room inspection checklist, inspection checklist in housekeeping, room inspection meaning, room inspection procedure hotel, quality control housekeeping',
  'hotel-fb-restaurant-procedures': 'hotel restaurant service procedures, F&B procedures hotel, restaurant SOP hotel, sequence of service hotel',
  'hotel-spa-wellness-sops': 'hotel spa SOP, wellness procedures hotel, spa standard operating procedures, spa treatment protocol hotel',
  'hotel-room-service-sops': 'hotel room service SOP, in-room dining procedures, room service standards hotel',
  'hotel-standard-operating-procedures': 'hotel standard operating procedures, hotel SOP, hotel SOP template, hotel operations procedures, how to write hotel SOPs',
  'hotel-front-desk-procedures': 'hotel front desk procedures, front desk SOP hotel, hotel check-in procedures, hotel check-out SOP, hotel front desk checklist',
  'hotel-staff-training-service-standards': 'hotel staff training, hotel service standards training, how to train hotel staff, on-property hotel training, hotel training program, luxury hotel training',
  'hotel-staff-turnover-training': 'hotel staff turnover, reduce hotel staff turnover, hotel employee retention, hotel training retention, hospitality staff turnover, on-property hotel training, hotel turnover reduction, hotel staff attrition',
  'hotel-new-hire-onboarding': 'hotel new hire onboarding, hotel onboarding program, hotel staff first 90 days, hotel employee onboarding, hospitality onboarding, hotel onboarding checklist, new hotel employee integration, hotel staff retention onboarding',
}

const KEYWORDS_FR: Record<string, string> = {
  'hotel-operations-playbook': 'playbook opérations hôtel, SOP hôtel, procédures hôtelières, guide opérations hôtel, gestion hôtel luxe',
  'how-to-write-hotel-sops': 'rédiger SOP hôtel, procédures opérationnelles hôtel, modèle SOP hôtelier, écrire procédures hôtel',
  'hotel-front-office-sop': 'SOP réception hôtel, procédures front office hôtel, standard opérationnel réception hôtel',
  'hotel-housekeeping-checklist': 'checklist housekeeping hôtel, SOP housekeeping, checklist femme de chambre, procédures ménage hôtel',
  'hotel-fb-service-standards': 'standards service F&B hôtel, procédures restaurant hôtel, SOP restauration hôtel',
  'hotel-front-office-procedures': 'procédures réception hôtel, SOP front office, procédures check-in check-out hôtel',
  'housekeeping-room-inspection': 'inspection chambre hôtel, checklist inspection superviseur, checklist inspection housekeeping, procédure inspection chambre hôtel, gouvernante étage inspection, contrôle qualité housekeeping',
  'hotel-fb-restaurant-procedures': 'procédures service restaurant hôtel, SOP restauration hôtel, séquence service restaurant hôtel',
  'hotel-spa-wellness-sops': 'SOP spa hôtel, procédures bien-être hôtel, standard opérationnel spa hôtel, protocole soin spa hôtel',
  'hotel-room-service-sops': 'SOP room service hôtel, procédures service en chambre, standards room service hôtel',
  'hotel-standard-operating-procedures': 'procédures opérationnelles hôtelières, SOP hôtel, modèle SOP hôtelières, procédures opérations hôtel',
  'hotel-front-desk-procedures': 'procédures réception hôtel, SOP réception hôtelière, procédures check-in hôtel, SOP check-out hôtel, checklist réception hôtel',
  'hotel-staff-training-service-standards': 'formation personnel hôtelier, formation standards de service hôtel, former équipes hôtelières, formation sur site hôtel, programme formation hôtelière, formation hôtel luxe',
  'hotel-staff-turnover-training': 'turn-over hôtelier, réduire turn-over hôtel, fidélisation équipes hôtelières, formation hôtelière rétention, formation sur site hôtel, stabilité équipes hôtel, turn-over hôtellerie restauration',
  'hotel-new-hire-onboarding': 'onboarding hôtelier, intégration nouvelles recrues hôtel, programme onboarding hôtel, intégration collaborateurs hôtellerie, fidélisation nouvelles recrues hôtel, 90 premiers jours hôtel, onboarding structuré hôtel',
}

const CONTENT_UPGRADES: Record<string, {
  en: { title: string; intro: string; items: string[] }
  fr: { title: string; intro: string; items: string[] }
}> = {
  'hotel-standard-operating-procedures': {
    en: {
      title: 'Manager checklist before writing SOPs',
      intro: 'Before documenting procedures, align the operational standard. This prevents the SOP from becoming a description of bad habits.',
      items: [
        'List the five highest-volume tasks in the department',
        'Define who owns each task, who approves exceptions and who records completion',
        'Document the normal sequence and the most common failure cases',
        'Add the evidence required: checklist, PMS note, handover line, inspection score or manager sign-off',
      ],
    },
    fr: {
      title: 'Checklist manager avant de rédiger des SOPs',
      intro: "Avant d'écrire les procédures, alignez le standard opérationnel. Cela évite de documenter simplement les mauvaises habitudes existantes.",
      items: [
        'Lister les cinq tâches les plus fréquentes du département',
        "Définir qui réalise, qui valide les exceptions et qui trace l'exécution",
        'Documenter la séquence normale et les cas de rupture les plus fréquents',
        'Ajouter la preuve attendue : checklist, note PMS, ligne de passation, score inspection ou validation manager',
      ],
    },
  },
  'hotel-front-desk-procedures': {
    en: {
      title: 'Front desk procedures that should never stay informal',
      intro: 'These routines create the highest risk when they depend only on memory or individual experience.',
      items: [
        'Room not ready at arrival',
        'Guest disputes a charge at check-out',
        'VIP request missing from the handover',
        'Late arrival during night audit',
        'Walk-in request when the hotel is close to full occupancy',
      ],
    },
    fr: {
      title: 'Procédures réception à ne jamais laisser informelles',
      intro: "Ces routines créent le plus de risque lorsqu'elles reposent uniquement sur la mémoire ou l'expérience individuelle.",
      items: [
        "Chambre non prête à l'arrivée",
        'Client qui conteste une facturation au départ',
        'Demande VIP absente de la passation',
        "Arrivée tardive pendant l'audit de nuit",
        "Walk-in lorsque l'hôtel est presque complet",
      ],
    },
  },
  'housekeeping-room-inspection': {
    en: {
      title: 'Room inspection criteria worth tracking',
      intro: 'A supervisor checklist should make quality measurable, not just visible.',
      items: [
        'Guest-facing defects: hair, dust, stains, fingerprints and odours',
        'Operational defects: missing amenities, incorrect linen count, maintenance issues',
        'Brand defects: setup, presentation, spacing and welcome details',
        'Follow-up defects: items that require maintenance, minibar, laundry or front office action',
      ],
    },
    fr: {
      title: "Critères d'inspection chambre à suivre",
      intro: 'Une checklist superviseur doit rendre la qualité mesurable, pas seulement visible.',
      items: [
        'Défauts visibles client : cheveux, poussière, taches, traces et odeurs',
        'Défauts opérationnels : amenities manquants, linge incorrect, maintenance',
        'Défauts de marque : mise en place, présentation, espacement et attentions',
        'Suivis requis : maintenance, minibar, pressing ou action réception',
      ],
    },
  },
  'hotel-staff-training-service-standards': {
    en: {
      title: 'Signals that service standards training is working',
      intro: 'Training should change what happens on shift, not only what people can repeat in a room.',
      items: [
        'Supervisors hear the same service language across different shifts',
        'New hires can explain why the standard exists, not only recite it',
        'Guest recovery decisions follow the same escalation rules',
        'Briefings reference real situations from the previous day',
      ],
    },
    fr: {
      title: 'Signaux qu’une formation aux standards fonctionne',
      intro: 'La formation doit changer ce qui se passe en service, pas seulement ce que les équipes savent répéter en salle.',
      items: [
        'Les superviseurs entendent le même langage de service selon les shifts',
        'Les nouvelles recrues expliquent pourquoi le standard existe',
        "Les décisions de service recovery suivent les mêmes règles d'escalade",
        'Les briefings s’appuient sur des situations réelles de la veille',
      ],
    },
  },
}

export async function generateStaticParams() {
  const locales = ['en', 'fr']
  return articles.flatMap((article) =>
    locales.map((locale) => ({ locale, slug: article.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}
  const content = locale === 'en' ? article.en : article.fr
  const keywords = locale === 'en' ? KEYWORDS_EN[slug] : KEYWORDS_FR[slug]
  return {
    title: content.title + ' | LuxOps',
    description: content.description,
    ...(keywords && { keywords }),
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/blog/${slug}`,
      languages: {
        'en': `https://www.luxops.fr/en/blog/${slug}`,
        'fr': `https://www.luxops.fr/fr/blog/${slug}`,
        'x-default': `https://www.luxops.fr/en/blog/${slug}`,
      },
    },
  }
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const isEn = locale === 'en'
  const content = isEn ? article.en : article.fr

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.title,
    description: content.description,
    datePublished: content.date,
    dateModified: content.date,
    url: `https://www.luxops.fr/${locale}/blog/${slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.luxops.fr/${locale}/blog/${slug}`,
    },
    author: {
      '@type': 'Organization',
      name: 'LuxOps',
      url: 'https://www.luxops.fr',
    },
    publisher: {
      '@type': 'Organization',
      name: 'LuxOps',
      url: 'https://www.luxops.fr',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.luxops.fr/og-image.png',
      },
    },
    inLanguage: locale,
  }

  const faqJsonLd = content.faqs && content.faqs.length > 0
    ? buildFaqSchema(content.faqs)
    : null
  const breadcrumbs = breadcrumbSchema([
    { name: 'LuxOps', url: localizedPath(locale) },
    { name: isEn ? 'Blog' : 'Guides', url: localizedPath(locale, '/blog') },
    { name: content.title, url: localizedPath(locale, `/blog/${slug}`) },
  ])
  const upgrade = CONTENT_UPGRADES[slug]?.[isEn ? 'en' : 'fr']

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <div className="pt-16">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-3xl mx-auto px-6">
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#111111] transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              {isEn ? 'All articles' : 'Tous les articles'}
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Clock size={12} />
                {content.readTime}
              </span>
              <span className="text-xs text-gray-300">·</span>
              <span className="text-xs text-gray-400">{content.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight mb-6">
              {content.title}
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">{content.intro}</p>
          </div>
        </section>

        {/* Lead magnet — right after intro, before any H2 */}
        {(() => {
          const DEPT_MAP: Record<string, { titleEn: string; titleFr: string }> = {
            'housekeeping-room-inspection': {
              titleEn: 'Download a free chapter of the Housekeeping Playbook',
              titleFr: 'Téléchargez un chapitre gratuit du Playbook Housekeeping',
            },
            'hotel-front-office-sop': {
              titleEn: 'Download a free chapter of the Front Office Playbook',
              titleFr: 'Téléchargez un chapitre gratuit du Playbook Réception',
            },
            'hotel-front-office-procedures': {
              titleEn: 'Download a free chapter of the Front Office Playbook',
              titleFr: 'Téléchargez un chapitre gratuit du Playbook Réception',
            },
          }
          const lm = DEPT_MAP[slug] ?? {
            titleEn: 'Download a free introductory chapter',
            titleFr: "Téléchargez un chapitre d'introduction gratuit",
          }
          return (
            <section
              className="py-10 border-t border-b"
              style={{ backgroundColor: '#eef4ff', borderColor: 'rgba(195,198,214,0.3)' }}
            >
              <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#003d9b] mb-2">
                    {isEn ? 'Free resource' : 'Ressource gratuite'}
                  </p>
                  <p className="font-bold text-[#0a1d2e] text-lg mb-1">
                    {isEn ? lm.titleEn : lm.titleFr}
                  </p>
                  <p className="text-sm text-[#4f6074]">
                    {isEn
                      ? 'See what structured hotel procedures look like in practice.'
                      : 'Découvrez à quoi ressemblent des procédures hôtelières structurées.'}
                  </p>
                </div>
                <Link
                  href={`/${locale}/free-hotel-procedures`}
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-bold text-sm flex-shrink-0 hover:opacity-90 transition-opacity"
                  style={{ background: 'linear-gradient(135deg, #003d9b, #0052cc)', borderRadius: '0.125rem' }}
                >
                  {isEn ? 'Download free' : 'Télécharger gratuitement'} <ArrowRight size={16} />
                </Link>
              </div>
            </section>
          )
        })()}

        {/* Article body — all sections */}
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="prose-style">
              <nav className="mb-12 rounded-xl border border-gray-100 bg-gray-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                  {isEn ? 'In this guide' : 'Dans ce guide'}
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {content.sections.map((section) => (
                    <a key={section.h2} href={`#${section.h2.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="text-sm font-medium text-[#111111] hover:underline">
                      {section.h2}
                    </a>
                  ))}
                </div>
              </nav>
              {content.sections.map((section, i) => (
                <div key={i} id={section.h2.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-[#111111] mb-4">{section.h2}</h2>
                  {section.content && (
                    <p className="text-gray-500 leading-relaxed mb-6">{section.content}</p>
                  )}
                  {section.h3Items && (
                    <div className="space-y-6">
                      {section.h3Items.map((item, j) => (
                        <div key={j}>
                          <h3 className="text-lg font-semibold text-[#111111] mb-2">{item.heading}</h3>
                          <p className="text-gray-500 leading-relaxed">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {upgrade && (
                <div className="mb-12 rounded-xl border border-[#dbe8ff] bg-[#f4f8ff] p-8">
                  <h2 className="text-2xl font-bold text-[#111111] mb-3">{upgrade.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{upgrade.intro}</p>
                  <div className="space-y-3">
                    {upgrade.items.map((item) => (
                      <div key={item} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                        <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-[#003d9b]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* Conclusion */}
              <div className="mb-12 p-8 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-gray-600 leading-relaxed italic">{content.conclusion}</p>
              </div>

              {/* FAQ section */}
              {content.faqs && content.faqs.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#111111] mb-8">
                    {isEn ? 'Frequently Asked Questions' : 'Foire aux questions'}
                  </h2>
                  <div className="space-y-6">
                    {content.faqs.map((faq, i) => (
                      <div key={i} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                        <h3 className="text-lg font-semibold text-[#111111] mb-2">{faq.question}</h3>
                        <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Related resources */}
        {(() => {
          const RELATED: Record<string, { href: string; labelEn: string; labelFr: string; descEn: string; descFr: string }[]> = {
            'hotel-operations-playbook': [
              { href: '/hotel-sop', labelEn: 'Hotel SOP Templates', labelFr: 'Modèles SOP Hôtel', descEn: 'Complete standard operating procedures for every hotel department.', descFr: 'Procédures opérationnelles complètes pour chaque département hôtelier.' },
              { href: '/hotel-checklist', labelEn: 'Hotel Operational Checklists', labelFr: 'Checklists Opérationnelles Hôtel', descEn: 'What makes a hotel checklist actually useful in practice.', descFr: 'Ce qui rend une checklist hôtelière vraiment utile en pratique.' },
            ],
            'how-to-write-hotel-sops': [
              { href: '/hotel-sop', labelEn: 'Hotel SOP Templates', labelFr: 'Modèles SOP Hôtel', descEn: 'Complete standard operating procedures for every hotel department.', descFr: 'Procédures opérationnelles complètes pour chaque département hôtelier.' },
              { href: '/front-office-sop', labelEn: 'Front Office SOP', labelFr: 'SOP Réception Hôtel', descEn: 'Procedures built around how the front desk actually works.', descFr: 'Procédures construites autour du fonctionnement réel de la réception.' },
            ],
            'hotel-front-office-sop': [
              { href: '/front-office-sop', labelEn: 'Front Office SOP', labelFr: 'SOP Réception Hôtel', descEn: 'Procedures built around how the front desk actually works.', descFr: 'Procédures construites autour du fonctionnement réel de la réception.' },
              { href: '/hotel-checklist', labelEn: 'Hotel Operational Checklists', labelFr: 'Checklists Opérationnelles Hôtel', descEn: 'What makes a hotel checklist actually useful in practice.', descFr: 'Ce qui rend une checklist hôtelière vraiment utile en pratique.' },
            ],
            'hotel-housekeeping-checklist': [
              { href: '/hotel-housekeeping-checklist', labelEn: 'Housekeeping Checklists', labelFr: 'Checklists Housekeeping', descEn: 'Checklists by role and shift: trolley setup, room sequence, supervisor inspection, handover.', descFr: 'Checklists par rôle et service : chariot, remise en état, inspection superviseur, passation.' },
              { href: '/housekeeping-sop', labelEn: 'Housekeeping SOP', labelFr: 'SOP Housekeeping', descEn: 'The procedures behind every housekeeping checklist.', descFr: 'Les procédures derrière chaque checklist housekeeping.' },
            ],
            'hotel-fb-service-standards': [
              { href: '/hotel-sop', labelEn: 'Hotel SOP Templates', labelFr: 'Modèles SOP Hôtel', descEn: 'Complete standard operating procedures for every hotel department.', descFr: 'Procédures opérationnelles complètes pour chaque département hôtelier.' },
              { href: '/hotel-checklist', labelEn: 'Hotel Operational Checklists', labelFr: 'Checklists Opérationnelles Hôtel', descEn: 'What makes a hotel checklist actually useful in practice.', descFr: 'Ce qui rend une checklist hôtelière vraiment utile en pratique.' },
            ],
            'hotel-front-office-procedures': [
              { href: '/front-office-sop', labelEn: 'Front Office SOP', labelFr: 'SOP Réception Hôtel', descEn: 'Procedures built around how the front desk actually works.', descFr: 'Procédures construites autour du fonctionnement réel de la réception.' },
              { href: '/hotel-checklist', labelEn: 'Hotel Operational Checklists', labelFr: 'Checklists Opérationnelles Hôtel', descEn: 'What makes a hotel checklist actually useful in practice.', descFr: 'Ce qui rend une checklist hôtelière vraiment utile en pratique.' },
            ],
            'housekeeping-room-inspection': [
              { href: '/housekeeping-sop', labelEn: 'Housekeeping SOP Templates', labelFr: 'Procédures housekeeping', descEn: 'The procedures behind every room inspection, from trolley setup to supervisor sign-off.', descFr: 'Les procédures derrière chaque inspection de chambre, du chariot à la validation superviseur.' },
              { href: '/hotel-housekeeping-checklist', labelEn: 'Housekeeping Checklists', labelFr: 'Checklists housekeeping', descEn: 'Checklists by role and shift: room attendant, supervisor inspection, handover.', descFr: 'Checklists par rôle et service : équipier, inspection superviseur, passation.' },
            ],
            'hotel-staff-turnover-training': [
              { href: '/training', labelEn: 'On-property training', labelFr: 'Formation sur site', descEn: 'Structured training formats built around your actual procedures and service standards.', descFr: 'Formats de formation structurés autour de vos propres procédures et standards de service.' },
              { href: '/hotel-sop', labelEn: 'Hotel SOP templates', labelFr: 'Modèles SOP hôtel', descEn: 'The documented procedures that give your team a consistent standard to work from.', descFr: 'Les procédures documentées qui donnent à vos équipes un référentiel commun.' },
            ],
            'hotel-new-hire-onboarding': [
              { href: '/training', labelEn: 'On-property training', labelFr: 'Formation sur site', descEn: 'Build the structured onboarding system your new hires need to stay past 90 days.', descFr: "Construisez le système d'onboarding structuré dont vos nouvelles recrues ont besoin pour rester au-delà de 90 jours." },
              { href: '/hotel-sop', labelEn: 'Hotel SOP templates', labelFr: 'Modèles SOP hôtel', descEn: 'The written procedures library every new hire should have access to from day one.', descFr: 'La bibliothèque de procédures écrites que chaque nouvelle recrue devrait pouvoir consulter dès le premier jour.' },
            ],
          }
          const links = RELATED[slug]
          if (!links) return null
          return (
            <section className="py-12 bg-gray-50 border-t border-gray-100">
              <div className="max-w-3xl mx-auto px-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
                  {isEn ? 'Related resources' : 'Ressources associées'}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {links.map((item) => (
                    <Link
                      key={item.href}
                      href={`/${locale}${item.href}`}
                      className="group block border border-gray-200 rounded-xl p-5 bg-white hover:border-[#1A2E44] hover:shadow-sm transition-all"
                    >
                      <p className="font-semibold text-[#111111] group-hover:underline text-sm mb-1">
                        {isEn ? item.labelEn : item.labelFr}
                      </p>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {isEn ? item.descEn : item.descFr}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )
        })()}

        {/* CTA */}
        <section className="py-16 bg-[#111111]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">
              {isEn ? 'Ready to structure your operations?' : 'Prêt à structurer vos opérations ?'}
            </h2>
            <Link
              href={`/${locale}${content.cta.href.replace('/en', '').replace('/fr', '')}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#111111] font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              {content.cta.text} <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
