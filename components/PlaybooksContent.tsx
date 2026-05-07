'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  PackageCheck,
  Sparkles,
  UtensilsCrossed,
  Waves,
} from 'lucide-react'
import Link from 'next/link'
import AddToCartButton from '@/components/AddToCartButton'
import { PLAYBOOKS, BUNDLE_PRICE_ID } from '@/content/playbooks/data'
import { STARTER_PACKS } from '@/content/starter-packs/data'

const DEPT_ICONS = {
  fo: Building2,
  hsk: Sparkles,
  fb: UtensilsCrossed,
  spa: Waves,
}

const STARTER_PACK_ICONS = {
  'fo-starter-pack': Building2,
  'hsk-starter-pack': Sparkles,
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

  const filteredPlaybooks =
    activeFilter === 'all' ? PLAYBOOKS : PLAYBOOKS.filter((pb) => pb.id === activeFilter)

  const starterCopy = isEn
    ? ['Practical templates', 'PDF + PPTX', 'FR & EN included']
    : ['Templates pratiques', 'PDF + PPTX', 'FR & EN inclus']

  const playbookCopy = isEn
    ? ['Complete SOP reference', 'PDF + PowerPoint', 'FR & EN included']
    : ['Référence SOP complète', 'PDF + PowerPoint', 'FR & EN inclus']

  return (
    <div className="pt-16 bg-white">
      {/* Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <h1 className="font-display text-5xl md:text-6xl font-extrabold text-[#0a1d2e] mb-5 leading-tight tracking-tight">
                {t('title')}
              </h1>
              <p className="text-lg text-[#4f6074] leading-relaxed max-w-2xl mb-8">
                {t('subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <a
                  href="#starter-packs"
                  className="inline-flex justify-center items-center gap-2 px-7 py-4 bg-[#003d9b] text-white font-bold text-sm hover:bg-[#002d7a] transition-colors"
                  style={{ borderRadius: '0.125rem' }}
                >
                  {isEn ? 'View starter packs at €29' : 'Voir les starter packs à 29€'}
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#department-playbooks"
                  className="inline-flex justify-center items-center gap-2 px-7 py-4 border border-[#c3c6d6] text-[#0a1d2e] font-bold text-sm hover:border-[#003d9b] hover:text-[#003d9b] transition-colors"
                  style={{ borderRadius: '0.125rem' }}
                >
                  {isEn ? 'View playbooks at €67' : 'Voir les playbooks à 67€'}
                </a>
                <a
                  href={`/${locale}/free-hotel-procedures`}
                  className="inline-flex justify-center items-center gap-2 px-7 py-4 border border-[#c3c6d6] text-[#0a1d2e] font-bold text-sm hover:border-[#003d9b] hover:text-[#003d9b] transition-colors"
                  style={{ borderRadius: '0.125rem' }}
                >
                  {isEn ? 'Download free chapter' : 'Télécharger un chapitre gratuit'}
                </a>
              </div>
            </div>

            <div className="bg-[#f8f9ff] p-8" style={{ borderRadius: '0.125rem' }}>
              <div className="grid gap-4">
                <div className="bg-white p-7 shadow-sm" style={{ borderRadius: '0.125rem' }}>
                  <div className="mb-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#003d9b]">
                      {isEn ? 'New · Starter Pack' : 'Nouveau · Starter Pack'}
                    </p>
                  </div>
                  <div className="flex items-end gap-3 mb-6">
                    <span className="font-display text-6xl font-extrabold text-[#0a1d2e]">€29</span>
                    <span className="text-sm text-[#4f6074] pb-3">
                      {isEn ? 'practical tools' : 'outils pratiques'}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {starterCopy.map((item) => (
                      <div key={item} className="flex gap-3 text-sm text-[#4f6074]">
                        <CheckCircle2 size={18} className="text-[#003d9b] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/70 p-6 border border-[#e3e8f4]" style={{ borderRadius: '0.125rem' }}>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#737685] mb-4">
                    {isEn ? 'Full Playbook' : 'Playbook complet'}
                  </p>
                  <div className="flex items-end gap-3 mb-5">
                    <span className="font-display text-4xl font-extrabold text-[#0a1d2e]">€67</span>
                    <span className="text-sm text-[#4f6074] pb-2">
                      {isEn ? 'per playbook' : 'par playbook'}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {playbookCopy.map((item) => (
                      <div key={item} className="flex gap-3 text-sm text-[#4f6074]">
                        <CheckCircle2 size={16} className="text-[#003d9b] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free chapter banner */}
      <section className="px-6 pb-10">
        <div
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-7 py-5"
          style={{ backgroundColor: '#eef4ff', borderLeft: '3px solid #003d9b', borderRadius: '0.125rem' }}
        >
          <p className="text-sm text-[#0a1d2e] font-medium">
            {isEn
              ? 'Not ready to buy? Download a free introduction chapter before choosing a playbook.'
              : "Pas encore prêt à acheter ? Téléchargez un chapitre d'introduction gratuit avant de choisir un playbook."}
          </p>
          <Link
            href={`/${locale}/free-hotel-procedures`}
            className="flex-shrink-0 text-xs font-bold text-[#003d9b] underline underline-offset-4 hover:text-[#002d7a] transition-colors whitespace-nowrap"
          >
            {isEn ? 'Download free chapter →' : 'Télécharger un chapitre →'}
          </Link>
        </div>
      </section>

      {/* Department playbooks */}
      <main className="max-w-7xl mx-auto px-6 py-16 flex flex-col">
        <div
          id="department-playbooks"
          className="scroll-mt-28 flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#003d9b] mb-4">
              {filteredPlaybooks.length} {isEn ? 'Playbooks' : 'Playbooks'}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[#0a1d2e] mb-4 tracking-tight">
              {isEn ? 'All Playbooks' : 'Tous les Playbooks'}
            </h2>
            <p className="text-[#4f6074] leading-relaxed">{t('product_intro')}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className="px-4 py-2 text-sm font-bold transition-all"
                style={{
                  color: activeFilter === cat.key ? '#ffffff' : '#4f6074',
                  backgroundColor: activeFilter === cat.key ? '#003d9b' : '#f8f9ff',
                  border: activeFilter === cat.key ? '1px solid #003d9b' : '1px solid rgba(195,198,214,0.55)',
                  borderRadius: '0.125rem',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {filteredPlaybooks.map((pb) => {
            const Icon = DEPT_ICONS[pb.id]

            return (
              <article
                key={pb.id}
                className="bg-white flex flex-col transition-all duration-300 hover:shadow-2xl"
                style={{ boxShadow: '0 2px 12px rgba(10,29,46,0.06)', borderRadius: '0.125rem' }}
              >
                <Link href={`/${locale}/playbooks/${pb.id}`} className="block group">
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
                      className="absolute inset-7 flex flex-col items-center justify-center"
                      style={{ border: '1px solid rgba(0,61,155,0.15)' }}
                    >
                      <Icon size={46} className="mb-3" style={{ color: '#003d9b', opacity: 0.28 }} />
                      <div
                        className="text-[10px] uppercase font-bold"
                        style={{ letterSpacing: '0.2em', color: '#003d9b', opacity: 0.45 }}
                      >
                        {pb.dept[lang]}
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 text-[#003d9b]"
                      style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
                    >
                      {pb.dept[lang]}
                    </span>
                    <span className="font-display text-2xl font-extrabold text-[#0a1d2e]">
                      {isEn ? '€67' : '67€'}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#0a1d2e] mb-2">
                    {pb.title[lang]}
                  </h3>
                  <p className="text-sm text-[#4f6074] leading-relaxed mb-5 flex-1">{pb.desc[lang]}</p>

                  <ul className="space-y-2 mb-6">
                    {pb.highlights[lang].slice(0, 3).map((highlight) => (
                      <li key={highlight} className="flex gap-2 text-xs text-[#4f6074]">
                        <CheckCircle2 size={14} className="text-[#003d9b] flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <AddToCartButton
                      item={{
                        priceId: pb.priceId,
                        title: pb.title[lang],
                        price: 67,
                      }}
                      addedLabel={isEn ? 'In Cart' : 'Ajouté'}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-[#003d9b] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#002d7a] transition-colors rounded-[2px]"
                    >
                      {isEn ? 'Add to cart · €67' : 'Ajouter au panier · 67€'}
                    </AddToCartButton>
                    <Link
                      href={`/${locale}/playbooks/${pb.id}`}
                      className="w-full flex items-center justify-center gap-2 py-3 text-[#003d9b] font-bold text-xs uppercase tracking-widest hover:bg-[#eef4ff] transition-colors"
                      style={{ border: '1px solid #003d9b', borderRadius: '0.125rem' }}
                    >
                      <span>{isEn ? 'View details' : 'Voir les détails'}</span>
                      <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <section id="starter-packs" className="pb-20" style={{ order: -1 }}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
            <div className="max-w-2xl">
              <p className="inline-flex items-center px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#003d9b] bg-[#eef4ff] mb-4">
                {isEn ? 'New' : 'Nouveau'}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[#0a1d2e] mb-4 tracking-tight">
                {isEn ? 'Starter Packs' : 'Starter Packs'}
              </h2>
              <p className="text-[#4f6074] leading-relaxed">
                {isEn
                  ? 'Practical checklists, templates and scripts designed for immediate operational use.'
                  : 'Checklists, templates et scripts pratiques conçus pour un usage opérationnel immédiat.'}
              </p>
            </div>
            <a
              href="#bundle"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#003d9b] underline underline-offset-4 hover:text-[#002d7a] transition-colors"
            >
              {isEn ? 'Need the full set?' : 'Besoin du set complet ?'}
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {STARTER_PACKS.map((pack) => {
              const Icon = STARTER_PACK_ICONS[pack.id]

              return (
                <article
                  key={pack.id}
                  className="bg-white flex flex-col transition-all duration-300 hover:shadow-2xl"
                  style={{ boxShadow: '0 2px 12px rgba(10,29,46,0.06)', borderRadius: '0.125rem' }}
                >
                  <Link href={`/${locale}/playbooks/${pack.id}`} className="block group">
                    <div
                      className="relative overflow-hidden"
                      style={{ aspectRatio: '16/7', backgroundColor: '#dae9ff' }}
                    >
                      <div
                        className="absolute inset-0 opacity-25 group-hover:opacity-40 transition-opacity duration-300"
                        style={{
                          backgroundImage: 'radial-gradient(#003d9b 0.5px, transparent 0.5px)',
                          backgroundSize: '20px 20px',
                        }}
                      />
                      <div
                        className="absolute inset-7 flex flex-col items-center justify-center"
                        style={{ border: '1px solid rgba(0,61,155,0.15)' }}
                      >
                        <Icon size={44} className="mb-3" style={{ color: '#003d9b', opacity: 0.3 }} />
                        <div
                          className="text-[10px] uppercase font-bold"
                          style={{ letterSpacing: '0.2em', color: '#003d9b', opacity: 0.48 }}
                        >
                          {pack.category[lang]}
                        </div>
                      </div>
                    </div>
                  </Link>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 text-[#003d9b]"
                        style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
                      >
                        {pack.category[lang]}
                      </span>
                      <span className="font-display text-2xl font-extrabold text-[#0a1d2e]">
                        {isEn ? '€29' : '29€'}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#0a1d2e] mb-2">
                      {pack.shortTitle[lang]}
                    </h3>
                    <p className="text-sm text-[#4f6074] leading-relaxed mb-5 flex-1">{pack.description[lang]}</p>

                    <ul className="space-y-2 mb-6">
                      {pack.bullets[lang].map((bullet) => (
                        <li key={bullet} className="flex gap-2 text-xs text-[#4f6074]">
                          <CheckCircle2 size={14} className="text-[#003d9b] flex-shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-3">
                      <AddToCartButton
                        item={{
                          priceId: pack.priceId,
                          title: pack.shortTitle[lang],
                          price: 29,
                        }}
                        addedLabel={isEn ? 'In Cart' : 'Ajouté'}
                        className="w-full flex items-center justify-center gap-2 py-3 bg-[#003d9b] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#002d7a] transition-colors rounded-[2px]"
                      >
                        {isEn ? 'Add to cart · €29' : 'Ajouter au panier · 29€'}
                      </AddToCartButton>
                      <Link
                        href={`/${locale}/playbooks/${pack.id}`}
                        className="w-full flex items-center justify-center gap-2 py-3 text-[#003d9b] font-bold text-xs uppercase tracking-widest hover:bg-[#eef4ff] transition-colors"
                        style={{ border: '1px solid #003d9b', borderRadius: '0.125rem' }}
                      >
                        <span>{isEn ? 'View details' : 'Voir les détails'}</span>
                        <ChevronRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      </main>

      {/* Bundle upgrade */}
      <section id="bundle" className="py-18 px-6 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto">
          <div
            className="grid lg:grid-cols-[1fr_0.72fr] gap-10 bg-white p-8 md:p-10"
            style={{ borderRadius: '0.125rem', boxShadow: '0 2px 12px rgba(10,29,46,0.06)' }}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#003d9b] mb-4">{t('bundle_label')}</p>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#0a1d2e] mb-4">
                {t('bundle_desc')}
              </h2>
              <p className="text-[#4f6074] leading-relaxed max-w-2xl mb-7">
                {t('bundle_subtitle')}
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  isEn ? '4 department playbooks' : '4 playbooks département',
                  isEn ? 'PDF + PowerPoint' : 'PDF + PowerPoint',
                  isEn ? 'FR & EN included' : 'FR & EN inclus',
                ].map((item) => (
                  <div key={item} className="flex gap-2 text-sm text-[#4f6074]">
                    <PackageCheck size={17} className="text-[#003d9b] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#003d9b] text-white p-7 flex flex-col justify-between" style={{ borderRadius: '0.125rem' }}>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-3">
                  {isEn ? 'Bundle price' : 'Prix bundle'}
                </p>
                <div className="flex items-end gap-3 mb-3">
                  <span className="font-display text-5xl font-extrabold">{isEn ? '€199' : '199€'}</span>
                  <span className="text-sm opacity-75 pb-2">{isEn ? 'instead of €268' : 'au lieu de 268€'}</span>
                </div>
                <p className="text-sm opacity-75 mb-7">
                  {isEn ? 'Save €69 when you need the full set.' : 'Économisez 69€ si vous avez besoin de l’ensemble.'}
                </p>
              </div>
              <AddToCartButton
                item={{
                  priceId: BUNDLE_PRICE_ID,
                  title: isEn ? 'Complete Bundle · All 4 Playbooks' : 'Bundle Complet · 4 Playbooks',
                  price: 199,
                }}
                addedLabel={isEn ? 'In Cart' : 'Ajouté'}
                className="w-full px-5 py-3 bg-white text-[#003d9b] text-sm font-bold hover:bg-[#f8f9ff] transition-colors rounded-[2px]"
              >
                {t('buy_bundle')}
              </AddToCartButton>
            </div>
          </div>
        </div>
      </section>

      {/* Custom SOP CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div
            className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8"
            style={{ backgroundColor: '#0a1d2e', borderRadius: '0.125rem' }}
          >
            <div className="text-white max-w-2xl">
              <p className="font-display font-bold text-2xl mb-3">
                {isEn ? 'Need something more specific?' : 'Besoin de quelque chose de plus spécifique ?'}
              </p>
              <p className="text-sm opacity-80 leading-relaxed">
                {isEn
                  ? 'We can build department-specific SOPs around your property, your standards, and the way your teams operate.'
                  : 'Nous pouvons construire des procédures sur-mesure autour de votre établissement, de vos standards et du fonctionnement de vos équipes.'}
              </p>
            </div>
            <Link
              href={`/${locale}/process-sur-mesure`}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-[#0a1d2e] font-bold text-sm hover:bg-[#f8f9ff] transition-colors"
              style={{ borderRadius: '0.125rem' }}
            >
              {isEn ? 'Learn more' : 'En savoir plus'}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white" style={{ borderTop: '1px solid rgba(195,198,214,0.2)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#4f6074] mb-10">
            {isEn ? 'What professionals say' : 'Ce que disent les professionnels'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                quote: isEn
                  ? 'The procedures clearly reflect real hotel experience. You can tell it was built from the floor up.'
                  : 'Les procédures reflètent une vraie expérience du terrain. Ça se sent immédiatement.',
                role: isEn ? 'Operations Manager' : 'Responsable des opérations',
              },
              {
                quote: isEn
                  ? 'Applicable from day one, regardless of property type or size.'
                  : "Applicable dès le premier jour, quel que soit le type ou la taille de l'établissement.",
                role: isEn ? 'Executive Housekeeper' : 'Gouvernante Générale',
              },
              {
                quote: isEn
                  ? 'We used it across two very different properties. It worked for both.'
                  : "Nous l'avons utilisé dans deux établissements très différents. Ça a fonctionné dans les deux cas.",
                role: isEn ? 'Hotel Group Manager' : 'Directeur de groupe hôtelier',
              },
              {
                quote: isEn
                  ? 'Solid procedures you can actually adapt to your own standards without rewriting everything.'
                  : "Des procédures solides que l'on peut adapter à ses propres standards sans tout réécrire.",
                role: isEn ? 'General Manager' : 'Directeur Général',
              },
            ].map((item) => (
              <div
                key={item.role}
                className="flex flex-col justify-between p-6"
                style={{ backgroundColor: '#f8f9ff', borderRadius: '0.125rem' }}
              >
                <p className="text-sm text-[#0a1d2e] leading-relaxed mb-6">&quot;{item.quote}&quot;</p>
                <p className="text-xs font-bold text-[#4f6074] uppercase tracking-widest">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
