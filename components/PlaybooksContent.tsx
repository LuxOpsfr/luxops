'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Building2, Sparkles, UtensilsCrossed, Waves, ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import AddToCartButton from '@/components/AddToCartButton'
import { PLAYBOOKS, BUNDLE_PRICE_ID } from '@/content/playbooks/data'

const DEPT_ICONS = {
  fo: Building2,
  hsk: Sparkles,
  fb: UtensilsCrossed,
  spa: Waves,
}

export default function PlaybooksContent({ locale }: { locale: string }) {
  const t = useTranslations('playbooks_page')
  const isEn = locale === 'en'
  const lang = locale as 'en' | 'fr'

  const [activeFilter, setActiveFilter] = useState<string>('all')

  const categories = [
    { key: 'all', label: isEn ? 'All Playbooks' : 'Tous les Playbooks' },
    { key: 'fo', label: 'Front Office' },
    { key: 'hsk', label: 'Housekeeping' },
    { key: 'fb', label: 'F&B' },
    { key: 'spa', label: 'Spa & Wellness' },
  ]

  const filteredPlaybooks = activeFilter === 'all'
    ? PLAYBOOKS
    : PLAYBOOKS.filter(pb => pb.id === activeFilter)

  return (
    <div className="pt-16 bg-white">

      {/* Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-display text-5xl md:text-6xl font-extrabold text-[#0a1d2e] mb-4 leading-tight tracking-tight">
            {t('title')}
          </h1>
          <p className="text-lg text-[#4f6074] leading-relaxed max-w-2xl">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Bundle Banner */}
      <section className="py-6 bg-[#003d9b]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <div className="flex items-center gap-2 text-sm mb-1">
              <span className="font-bold">{t('bundle_label')}</span>
              <span className="opacity-50">·</span>
              <span className="opacity-80">{t('bundle_desc')}</span>
              <span className="opacity-50">·</span>
              <span className="font-bold">{t('bundle_price')}</span>
            </div>
            <p className="text-xs opacity-65">{t('bundle_subtitle')}</p>
          </div>
          <AddToCartButton
            item={{
              priceId: BUNDLE_PRICE_ID,
              title: isEn ? 'Complete Bundle — All 4 Playbooks' : 'Bundle Complet — 4 Playbooks',
              price: 199,
            }}
            addedLabel={isEn ? 'In Cart' : 'Ajouté'}
            className="px-5 py-2.5 bg-white text-[#003d9b] text-sm font-bold rounded-sm hover:bg-[#f8f9ff] transition-colors whitespace-nowrap flex-shrink-0"
          >
            {t('buy_bundle')}
          </AddToCartButton>
        </div>
      </section>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Sidebar */}
          <aside className="w-full lg:w-60 flex-shrink-0 space-y-10">

            {/* Categories */}
            <div>
              <h3 className="font-display text-xs font-bold uppercase tracking-widest text-[#4f6074] mb-5">
                {isEn ? 'Categories' : 'Catégories'}
              </h3>
              <ul className="space-y-1">
                {categories.map((cat) => (
                  <li key={cat.key}>
                    <button
                      onClick={() => setActiveFilter(cat.key)}
                      className="w-full flex items-center justify-between text-sm font-medium px-3 py-2.5 transition-all"
                      style={{
                        color: activeFilter === cat.key ? '#003d9b' : '#4f6074',
                        backgroundColor: activeFilter === cat.key ? '#eef4ff' : 'transparent',
                        borderRadius: '0.125rem',
                      }}
                    >
                      {cat.label}
                      {activeFilter === cat.key && <ArrowRight size={14} />}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Custom SOP CTA */}
            <div style={{ borderTop: '1px solid rgba(195,198,214,0.3)', paddingTop: '1.5rem' }}>
              <div className="bg-[#003d9b] text-white p-6" style={{ borderRadius: '0.125rem' }}>
                <p className="font-display font-bold text-base mb-2">
                  {isEn ? 'Need something more specific?' : 'Besoin de quelque chose de plus spécifique ?'}
                </p>
                <p className="text-xs opacity-80 mb-5 leading-relaxed">
                  {isEn
                    ? 'We can build department-specific SOPs around your property, your standards, and the way your teams operate.'
                    : "Nous pouvons construire des procédures sur-mesure autour de votre établissement, de vos standards et du fonctionnement de vos équipes."}
                </p>
                <Link
                  href={`/${locale}/process-sur-mesure`}
                  className="block w-full py-2 bg-white text-[#003d9b] font-bold text-xs text-center hover:bg-[#f8f9ff] transition-colors"
                  style={{ borderRadius: '0.125rem' }}
                >
                  {isEn ? 'Learn More' : 'En savoir plus'}
                </Link>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">

            {/* Bar */}
            <div
              className="flex items-center justify-between mb-8 pb-4"
              style={{ borderBottom: '1px solid rgba(195,198,214,0.25)' }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-[#737685]">
                {filteredPlaybooks.length} {isEn ? 'Playbooks' : 'Playbooks'}
              </p>
            </div>

            {/* Product intro */}
            <p className="text-sm text-[#4f6074] leading-relaxed mb-8 max-w-2xl">{t('product_intro')}</p>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPlaybooks.map((pb) => {
                const Icon = DEPT_ICONS[pb.id]

                return (
                  <Link
                    key={pb.id}
                    href={`/${locale}/playbooks/${pb.id}`}
                    className="block text-left bg-white group transition-all duration-300 hover:shadow-2xl cursor-pointer"
                    style={{ boxShadow: '0 2px 12px rgba(10,29,46,0.05)', borderRadius: '0.125rem' }}
                  >
                    {/* Blueprint area */}
                    <div
                      className="relative overflow-hidden"
                      style={{ aspectRatio: '16/10', backgroundColor: '#dae9ff' }}
                    >
                      <div
                        className="absolute inset-0 opacity-25 group-hover:opacity-40 transition-opacity duration-300"
                        style={{
                          backgroundImage: 'radial-gradient(#003d9b 0.5px, transparent 0.5px)',
                          backgroundSize: '20px 20px',
                        }}
                      />
                      <div
                        className="absolute inset-8 flex flex-col items-center justify-center"
                        style={{ border: '1px solid rgba(0,61,155,0.15)' }}
                      >
                        <Icon size={52} className="mb-3" style={{ color: '#003d9b', opacity: 0.28 }} />
                        <div
                          className="text-[10px] uppercase font-bold"
                          style={{ letterSpacing: '0.25em', color: '#003d9b', opacity: 0.45 }}
                        >
                          {isEn ? 'Standard Operating Procedure' : 'Procédure Opérationnelle'}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 text-[#003d9b]"
                          style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
                        >
                          {pb.dept[lang]}
                        </span>
                        <span className="font-display text-lg font-bold text-[#0a1d2e]">€67</span>
                      </div>

                      <h3 className="font-display text-xl font-bold text-[#0a1d2e] mb-2 group-hover:text-[#003d9b] transition-colors">
                        {pb.title[lang]}
                      </h3>

                      <p className="text-sm text-[#4f6074] mb-7 leading-relaxed line-clamp-2">
                        {pb.desc[lang]}
                      </p>

                      <div
                        className="w-full flex items-center justify-center gap-2 py-3 text-[#003d9b] font-bold text-xs uppercase tracking-widest transition-all duration-200 group-hover:bg-[#003d9b] group-hover:text-white"
                        style={{ border: '1px solid #003d9b', borderRadius: '0.125rem' }}
                      >
                        <span>{isEn ? 'View Details' : 'Voir les détails'}</span>
                        <ChevronRight size={14} />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Cross-sell Formation */}
      <section className="py-16 px-6" style={{ backgroundColor: '#f8f9ff' }}>
        <div className="max-w-7xl mx-auto">
          <div
            className="flex flex-col lg:flex-row items-center gap-10 p-10"
            style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem', borderLeft: '4px solid #003d9b' }}
          >
            <div className="flex-1">
              <div className="text-xs font-bold uppercase tracking-widest text-[#003d9b] mb-4">
                {isEn ? 'Go further' : 'Aller plus loin'}
              </div>
              <h2 className="font-display text-2xl font-extrabold text-[#0a1d2e] mb-3">
                {isEn
                  ? 'Deploy your playbooks with a trainer on site'
                  : 'Déployez vos playbooks avec un formateur sur site'}
              </h2>
              <p className="text-[#4f6074] leading-relaxed text-sm max-w-xl">
                {isEn
                  ? 'Buying the playbooks is a strong first step. To make sure your teams understand them, apply them from day one and build lasting habits, our on-site training sessions go through each procedure with the team. Playbooks included and handed to every participant at the end of the session.'
                  : "Acquérir les playbooks est une excellente première étape. Pour s'assurer que vos équipes les comprennent vraiment, les appliquent dès le premier service et construisent des habitudes durables, nos formations sur site parcourent chaque procédure avec l'équipe. Les playbooks sont remis à chaque participant en fin de session."}
              </p>
            </div>
            <Link
              href={locale === 'en' ? '/en/training' : '/fr/formation'}
              className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-[#003d9b] text-white font-bold text-sm hover:bg-[#002d7a] transition-colors"
              style={{ borderRadius: '0.125rem' }}
            >
              {isEn ? 'Discover on-site training' : 'Découvrir la formation sur site'}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
