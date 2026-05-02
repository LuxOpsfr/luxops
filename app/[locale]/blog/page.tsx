import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { articles } from '@/content/blog/articles'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'Hotel Operations Resources & Guides | LuxOps Blog'
      : 'Ressources et Guides Opérations Hôtelières | Blog LuxOps',
    description: isEn
      ? 'Practical guides on hotel SOPs, service standards, housekeeping checklists, F&B procedures and operations playbooks. Written from real hotel operations experience.'
      : 'Guides pratiques sur les SOPs hôteliers, standards de service, checklists housekeeping, procédures F&B et playbooks opérationnels. Issus de l\'expérience terrain.',
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/blog`,
      languages: {
        'en': 'https://www.luxops.fr/en/blog',
        'fr': 'https://www.luxops.fr/fr/blog',
        'x-default': 'https://www.luxops.fr/en/blog',
      },
    },
  }
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const isEn = locale === 'en'
  const topicClusters = isEn ? [
    { href: '/hotel-sop', label: 'Hotel SOP Templates', desc: 'The main pillar page for standard operating procedures across departments.' },
    { href: '/front-office-sop', label: 'Front Office SOP', desc: 'Reception, check-in, billing, handover and night audit procedures.' },
    { href: '/housekeeping-sop', label: 'Housekeeping SOP', desc: 'Room cleaning, inspection, linen, quality control and supervisor routines.' },
    { href: '/training', label: 'Hotel Staff Training', desc: 'On-property training for SOP rollout and service standards.' },
  ] : [
    { href: '/hotel-sop', label: 'SOP Hôtel', desc: 'La page pilier pour structurer les procédures par département.' },
    { href: '/front-office-sop', label: 'SOP Réception', desc: 'Accueil, check-in, facturation, passation et audit de nuit.' },
    { href: '/housekeeping-sop', label: 'SOP Housekeeping', desc: 'Remise en état, inspection, linge, contrôle qualité et routines superviseur.' },
    { href: '/formation', label: 'Formation Hôtelière', desc: 'Formation sur site pour déployer SOPs et standards de service.' },
  ]

  return (
    <div className="pt-16">
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-[#111111] mb-4">
            {isEn ? 'Hotel Operations Guides' : 'Guides Opérations Hôtelières'}
          </h1>
          <p className="text-xl text-gray-400">
            {isEn
              ? 'Practical resources on SOPs, service standards and hotel operations management.'
              : 'Ressources pratiques sur les SOPs, standards de service et gestion opérationnelle hôtelière.'}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
              {isEn ? 'Core SEO clusters' : 'Clusters principaux'}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {topicClusters.map((cluster) => (
                <Link
                  key={cluster.href}
                  href={`/${locale}${cluster.href}`}
                  className="block border border-gray-100 rounded-xl p-5 hover:border-[#111111]/20 hover:shadow-sm transition-all"
                >
                  <h2 className="text-base font-bold text-[#111111] mb-2">{cluster.label}</h2>
                  <p className="text-sm text-gray-400 leading-relaxed">{cluster.desc}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            {articles.map((article) => {
              const content = isEn ? article.en : article.fr
              return (
                <Link
                  key={article.slug}
                  href={`/${locale}/blog/${article.slug}`}
                  className="block group border border-gray-100 rounded-2xl p-8 hover:border-[#111111]/20 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock size={12} />
                      {content.readTime}
                    </span>
                    <span className="text-xs text-gray-300">·</span>
                    <span className="text-xs text-gray-400">{content.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#111111] mb-3 group-hover:text-[#333333] transition-colors">
                    {content.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {content.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[#111111] font-medium text-sm group-hover:gap-3 transition-all">
                    {isEn ? 'Read article' : 'Lire l\'article'} <ArrowRight size={14} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
