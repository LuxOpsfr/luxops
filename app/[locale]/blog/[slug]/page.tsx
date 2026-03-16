import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock } from 'lucide-react'
import { articles } from '@/content/blog/articles'

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
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
  return {
    title: content.title + ' | LuxOps',
    description: content.description,
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
    publisher: {
      '@type': 'Organization',
      name: 'LuxOps',
      url: 'https://www.luxops.fr',
    },
    inLanguage: locale,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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

        {/* Article body */}
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
                          <h3 className="text-lg font-semibold text-[#111111] mb-2">
                            {item.heading}
                          </h3>
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
            </div>
          </div>
        </section>

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
