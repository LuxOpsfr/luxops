'use client'

import { useState } from 'react'
import Link from 'next/link'
import posthog from 'posthog-js'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  FileText,
  Layers3,
  MessageSquareText,
  ShoppingCart,
  Table2,
} from 'lucide-react'
import { StarterPackEntry } from '@/content/starter-packs/data'
import { useCart } from '@/context/CartContext'
import TrackedLink from '@/components/TrackedLink'

const benefitIcons = [
  ClipboardCheck,
  Layers3,
  MessageSquareText,
  CheckCircle2,
  FileText,
  Table2,
]

interface Props {
  pack: StarterPackEntry
  locale: string
}

export default function StarterPackDetailClient({ pack, locale }: Props) {
  const isEn = locale === 'en'
  const lang = locale as 'en' | 'fr'
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { addItem, items } = useCart()

  const inCart = items.some((item) => item.priceId === pack.priceId)
  const fullPlaybookHref = `/${locale}/playbooks/${pack.fullPlaybookId}`

  function handleAddToCart() {
    if (!inCart) {
      addItem({
        priceId: pack.priceId,
        title: pack.shortTitle[lang],
        price: pack.price,
        productType: 'starter_pack',
      })
      posthog.capture('product_added_to_cart', {
        price_id: pack.priceId,
        title: pack.shortTitle[lang],
        price: pack.price,
        locale,
        product_type: 'starter_pack',
      })
      posthog.capture('starter_pack_added_to_cart', {
        price_id: pack.priceId,
        title: pack.shortTitle[lang],
        price: pack.price,
        locale,
        product_type: 'starter_pack',
      })
    }
  }

  return (
    <div className="pt-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <Link
          href={`/${locale}/playbooks`}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#737685] hover:text-[#003d9b] transition-colors"
        >
          <ArrowLeft size={14} />
          {isEn ? 'All Playbooks' : 'Tous les produits'}
        </Link>
      </div>

      <section
        className="relative px-6 py-20 border-b overflow-hidden"
        style={{
          backgroundImage: 'radial-gradient(#c3c6d6 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
          borderColor: 'rgba(195,198,214,0.22)',
        }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_0.72fr] gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 text-[#003d9b] font-bold text-[10px] uppercase tracking-widest mb-6"
              style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
            >
              <span className="w-2 h-2 bg-[#003d9b] rounded-full" />
              {pack.category[lang]} · {isEn ? 'Starter Pack' : 'Starter Pack'}
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-[#0a1d2e] mb-6">
              {pack.title[lang]}
            </h1>
            <p className="text-xl text-[#4f6074] leading-relaxed max-w-2xl mb-4">
              {pack.subtitle[lang]}
            </p>
            <p className="text-sm text-[#4f6074] leading-relaxed max-w-2xl mb-8">
              {pack.supportLine[lang]}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <button
                onClick={handleAddToCart}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#003d9b] text-white font-bold text-sm hover:bg-[#002d7a] transition-colors"
                style={{ borderRadius: '0.125rem' }}
              >
                <ShoppingCart size={16} />
                {inCart
                  ? isEn
                    ? 'In Cart'
                    : 'Ajouté'
                  : isEn
                    ? 'Add to cart · €29'
                    : 'Ajouter au panier · 29€'}
              </button>
              <TrackedLink
                href={fullPlaybookHref}
                eventName="playbook_cta_clicked"
                eventProperties={{
                  source_page: `/${locale}/playbooks/${pack.id}`,
                  placement: 'starter_pack_hero',
                  product: pack.fullPlaybookTitle.en,
                  cta_label: isEn ? `See ${pack.fullPlaybookTitle.en}` : `Voir le ${pack.fullPlaybookTitle.fr}`,
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#c3c6d6] text-[#0a1d2e] font-bold text-sm hover:border-[#003d9b] hover:text-[#003d9b] transition-colors"
                style={{ borderRadius: '0.125rem' }}
              >
                {isEn
                  ? `See ${pack.fullPlaybookTitle.en}`
                  : `Voir le ${pack.fullPlaybookTitle.fr}`}
              </TrackedLink>
            </div>

            <p className="text-xs text-[#737685]">
              €29 · {isEn ? 'Instant download' : 'Téléchargement instantané'} ·{' '}
              {isEn ? 'Editable files included' : 'Fichiers modifiables inclus'}
            </p>
          </div>

          <div
            className="bg-[#f8f9ff] p-6 md:p-8"
            style={{ borderRadius: '0.125rem' }}
          >
            <div
              className="bg-white p-7 shadow-sm"
              style={{ borderRadius: '0.125rem' }}
            >
              <div className="flex items-center justify-between mb-8">
                <p className="text-xs font-bold uppercase tracking-widest text-[#003d9b]">
                  {isEn ? 'Operational toolkit' : 'Kit opérationnel'}
                </p>
                <span className="font-display text-4xl font-extrabold text-[#0a1d2e]">
                  €29
                </span>
              </div>
              <div
                className="relative overflow-hidden p-6 mb-7"
                style={{ backgroundColor: '#dae9ff', borderRadius: '0.125rem' }}
              >
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      'radial-gradient(#003d9b 0.5px, transparent 0.5px)',
                    backgroundSize: '18px 18px',
                  }}
                />
                <div className="relative border border-[rgba(0,61,155,0.18)] bg-white/45 p-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#003d9b] mb-4">
                    {pack.category[lang]}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {pack.tools[lang].map((tool, index) => (
                      <div key={tool} className="flex items-center gap-3">
                        <span className="w-5 h-5 bg-[#003d9b] text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-[10px] font-bold text-[#0a1d2e] uppercase leading-snug">
                          {tool}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <ul className="space-y-3">
                {pack.formats[lang].map((format) => (
                  <li
                    key={format}
                    className="flex gap-3 text-sm text-[#4f6074]"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[#003d9b] flex-shrink-0 mt-0.5"
                    />
                    <span>{format}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#003d9b] mb-4">
              {isEn ? 'Included tools' : 'Outils inclus'}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[#0a1d2e] tracking-tight mb-4">
              {isEn ? "What's inside" : 'Ce qui est inclus'}
            </h2>
            <p className="text-[#4f6074] leading-relaxed">
              {pack.toolsIntro[lang]}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pack.tools[lang].map((tool, index) => (
              <div
                key={tool}
                className="p-5 bg-[#f8f9ff]"
                style={{ borderRadius: '0.125rem' }}
              >
                <p className="text-[10px] font-bold text-[#003d9b] mb-3">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="font-display text-lg font-bold text-[#0a1d2e]">
                  {tool}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#eef4ff]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#003d9b] mb-4">
              {isEn ? 'Why it helps' : 'Pourquoi ça aide'}
            </p>
            <h2 className="font-display text-4xl font-extrabold text-[#0a1d2e] tracking-tight">
              {isEn
                ? 'Built for daily operational use'
                : 'Conçu pour l’usage opérationnel quotidien'}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pack.benefits[lang].map((benefit, index) => {
              const Icon = benefitIcons[index] || CheckCircle2
              return (
                <div
                  key={benefit}
                  className="bg-white p-6"
                  style={{
                    borderRadius: '0.125rem',
                    boxShadow: '0 2px 8px rgba(10,29,46,0.05)',
                  }}
                >
                  <Icon size={22} className="text-[#003d9b] mb-5" />
                  <h3 className="font-display text-lg font-bold text-[#0a1d2e]">
                    {benefit}
                  </h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#003d9b] mb-4">
              {isEn ? 'Formats included' : 'Formats inclus'}
            </p>
            <h2 className="font-display text-4xl font-extrabold text-[#0a1d2e] tracking-tight mb-5">
              {isEn
                ? 'Ready to print, edit and deploy'
                : 'Prêt à imprimer, modifier et déployer'}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {pack.formats[lang].map((format) => (
              <div
                key={format}
                className="flex gap-3 p-5 bg-[#f8f9ff]"
                style={{ borderRadius: '0.125rem' }}
              >
                <CheckCircle2
                  size={18}
                  className="text-[#003d9b] flex-shrink-0 mt-0.5"
                />
                <p className="text-sm font-bold text-[#0a1d2e]">{format}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#003d9b] mb-4">
              {isEn
                ? 'Starter Pack vs Full Playbook'
                : 'Starter Pack vs Playbook complet'}
            </p>
            <h2 className="font-display text-4xl font-extrabold text-[#0a1d2e] tracking-tight">
              {isEn
                ? 'Choose the right level of structure'
                : 'Choisir le bon niveau de structure'}
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white p-7" style={{ borderRadius: '0.125rem' }}>
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display text-2xl font-bold text-[#0a1d2e]">
                  {pack.shortTitle[lang]}
                </h3>
                <span className="font-display text-3xl font-extrabold text-[#003d9b]">
                  €29
                </span>
              </div>
              <p className="text-[#4f6074] leading-relaxed">
                {pack.starterComparison[lang]}
              </p>
            </div>
            <div
              className="bg-[#0a1d2e] text-white p-7"
              style={{ borderRadius: '0.125rem' }}
            >
              <div className="flex items-center justify-between gap-4 mb-5">
                <h3 className="font-display text-2xl font-bold">
                  {pack.fullPlaybookTitle[lang]}
                </h3>
                <span className="font-display text-3xl font-extrabold">
                  €67
                </span>
              </div>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                {pack.fullComparison[lang]}
              </p>
              <TrackedLink
                href={fullPlaybookHref}
                eventName="playbook_cta_clicked"
                eventProperties={{
                  source_page: `/${locale}/playbooks/${pack.id}`,
                  placement: 'comparison_block',
                  product: pack.fullPlaybookTitle.en,
                  cta_label: isEn
                    ? `Need the complete reference? View the ${pack.fullPlaybookTitle.en}`
                    : `Besoin de la référence complète ? Voir le ${pack.fullPlaybookTitle.fr}`,
                }}
                className="inline-flex items-center gap-2 text-sm font-bold text-white underline underline-offset-4"
              >
                {isEn
                  ? `Need the complete reference? View the ${pack.fullPlaybookTitle.en}`
                  : `Besoin de la référence complète ? Voir le ${pack.fullPlaybookTitle.fr}`}
                <ArrowRight size={15} />
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold text-[#0a1d2e] tracking-tight mb-10 text-center">
            FAQ
          </h2>
          <div className="space-y-3">
            {pack.faq.map((item, index) => (
              <div
                key={item.question.en}
                className="bg-[#f8f9ff]"
                style={{ borderRadius: '0.125rem' }}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-bold text-sm uppercase tracking-tight text-[#0a1d2e]">
                    {item.question[lang]}
                  </span>
                  <ChevronDown
                    size={18}
                    className="flex-shrink-0 text-[#737685] transition-transform"
                    style={{
                      transform:
                        openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-sm text-[#4f6074] leading-relaxed">
                      {item.answer[lang]}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#003d9b] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold tracking-tight mb-4">
            {isEn
              ? `Get the ${pack.shortTitle.en}`
              : `Obtenir le ${pack.shortTitle.fr}`}
          </h2>
          <p
            className="text-lg mb-8"
            style={{ color: 'rgba(255,255,255,0.75)' }}
          >
            {pack.finalText[lang]}
          </p>
          <button
            onClick={handleAddToCart}
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-[#003d9b] font-bold hover:bg-[#f8f9ff] transition-colors"
            style={{ borderRadius: '0.125rem' }}
          >
            <ShoppingCart size={16} />
            {inCart
              ? isEn
                ? 'In Cart'
                : 'Ajouté'
              : isEn
                ? 'Add to cart · €29'
                : 'Ajouter au panier · 29€'}
          </button>
        </div>
      </section>
    </div>
  )
}
