import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock } from 'lucide-react'
import { articles } from '@/content/blog/articles'

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

  const faqSchema = content.faqs && content.faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: content.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }
    : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
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
              {content.sections.map((section, i) => (
                <div key={i} className="mb-12">
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
