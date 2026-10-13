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
import { useCurrency } from '@/context/CurrencyContext'
import TrackedLink from '@/components/TrackedLink'
import StarterPackCoverVisual from '@/components/StarterPackCoverVisual'

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
  const { addItem, items, openCart } = useCart()
  const { currency, priceFor, formatProductPrice } = useCurrency()

  const inCart = items.some((item) => item.priceId === pack.priceId)
  const fullPlaybookHref = `/${locale}/playbooks/${pack.fullPlaybookId}`

  function handleAddToCart() {
    if (inCart) {
      openCart()
      return
    }
    addItem({
      priceId: pack.priceId,
      title: pack.shortTitle[lang],
      price: priceFor('starter_pack'),
      currency,
      productType: 'starter_pack',
    })
    posthog.capture('product_added_to_cart', {
      price_id: pack.priceId,
      title: pack.shortTitle[lang],
      price: priceFor('starter_pack'),
      currency,
      locale,
      product_type: 'starter_pack',
    })
    posthog.capture('starter_pack_added_to_cart', {
      price_id: pack.priceId,
      title: pack.shortTitle[lang],
      price: priceFor('starter_pack'),
      currency,
      locale,
      product_type: 'starter_pack',
    })
  }

  return (
    <div className="min-h-screen bg-[#f5f1e9] pt-[var(--site-header-height)]">
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <Link
          href={`/${locale}/playbooks`}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#687169] hover:text-[#0f211a] transition-colors"
        >
          <ArrowLeft size={14} />
          {isEn ? 'All SOP manuals' : 'Tous les produits'}
        </Link>
      </div>

      <section className="relative overflow-hidden px-5 pb-16 pt-8 md:px-8 md:pb-20 md:pt-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_at_18%_25%,rgba(184,151,96,.12),transparent_56%)]" />
        <div className="relative mx-auto grid max-w-[1320px] items-center gap-9 lg:grid-cols-[.94fr_1.06fr] lg:gap-16">
          <div className="mx-auto w-full max-w-[500px]">
            <StarterPackCoverVisual pack={pack} locale={locale} />
          </div>

          <div className="max-w-2xl">
            <div className="text-[10px] font-semibold uppercase tracking-[.14em] text-[#795d32]">
              {pack.category[lang]} · Starter Pack
            </div>
            <h1 className="mt-5 font-display text-[clamp(2.5rem,5vw,4.6rem)] font-medium leading-[1.02] tracking-[-.035em] text-[#10251d]">
              {pack.title[lang]}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#626b64] md:text-lg md:leading-8">{pack.subtitle[lang]}</p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#72766e]">{pack.supportLine[lang]}</p>

            <div className="mt-6 grid grid-cols-2 gap-2 rounded-[20px] border border-[#e9e3d9] bg-white/70 p-4 text-xs text-[#46554b]">
              {pack.formats[lang].map((format) => <span key={format} className="flex items-center gap-2"><CheckCircle2 size={15} className="shrink-0 text-[#a58658]" />{format}</span>)}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="font-display text-3xl font-semibold text-[#10251d]">{formatProductPrice('starter_pack')}</span>
              <button onClick={handleAddToCart} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#10251d] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(16,37,29,.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2a4335] hover:shadow-[0_12px_24px_rgba(16,37,29,.22)]">
                <ShoppingCart size={16} />{inCart ? (isEn ? 'Open cart' : 'Voir le panier') : (isEn ? 'Add to cart' : 'Ajouter au panier')}
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
                className="text-sm font-medium text-[#46554b] underline decoration-[#c4af8c] underline-offset-4 transition hover:text-[#10251d]"
              >{isEn ? `See ${pack.fullPlaybookTitle.en}` : `Voir le ${pack.fullPlaybookTitle.fr}`}</TrackedLink>
            </div>
            <p className="mt-3 text-[11px] text-[#81827b]">{isEn ? 'Instant download · Editable files included' : 'Téléchargement immédiat · Fichiers modifiables inclus'}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#fcfbf8] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0f211a] mb-4">
              {isEn ? 'Included tools' : 'Outils inclus'}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[#0f211a] tracking-tight mb-4">
              {isEn ? "What's inside" : 'Ce qui est inclus'}
            </h2>
            <p className="text-[#687169] leading-relaxed">
              {pack.toolsIntro[lang]}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pack.tools[lang].map((tool, index) => (
              <div
                key={tool}
                className="border border-[rgba(32,35,31,0.12)] bg-white p-5"
                style={{ borderRadius: '1rem' }}
              >
                <p className="mb-3 text-[10px] font-bold text-[#a58658]">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="font-display text-lg font-bold text-[#0f211a]">
                  {tool}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#e7e0d5]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0f211a] mb-4">
              {isEn ? 'Why it helps' : 'Pourquoi ça aide'}
            </p>
            <h2 className="font-display text-4xl font-extrabold text-[#0f211a] tracking-tight">
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
                    borderRadius: '1rem',
                    boxShadow: '0 2px 8px rgba(15,33,26,0.05)',
                  }}
                >
                  <Icon size={22} className="mb-5 text-[#a58658]" strokeWidth={1.6} />
                  <h3 className="font-display text-lg font-bold text-[#0f211a]">
                    {benefit}
                  </h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(32,35,31,0.14)] bg-[#fcfbf8] px-6 py-9">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-[0.42fr_1.58fr] md:items-center md:gap-10">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#a58658]">
            {isEn ? 'Built from the same operational experience' : 'Issu de la même expérience opérationnelle'}
          </p>
          <p className="max-w-4xl text-sm leading-7 text-[#5d665f]">
            {isEn
              ? 'LuxOps Starter Packs draw on the same 15 years of luxury hotel operations and SOP implementation experience as the full manuals, distilled into the tools managers are most likely to need immediately.'
              : 'Les Starter Packs LuxOps s’appuient sur les mêmes 15 années d’expérience en opérations hôtelières et déploiement de SOP que les manuels complets, concentrées dans les outils dont les managers ont le plus souvent besoin immédiatement.'}
          </p>
        </div>
      </section>

      <section className="bg-[#fcfbf8] px-6 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#0f211a] mb-4">
              {isEn ? 'Formats included' : 'Formats inclus'}
            </p>
            <h2 className="font-display text-4xl font-extrabold text-[#0f211a] tracking-tight mb-5">
              {isEn
                ? 'Ready to print, edit and deploy'
                : 'Prêt à imprimer, modifier et déployer'}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {pack.formats[lang].map((format) => (
              <div
                key={format}
                className="flex gap-3 border border-[rgba(32,35,31,0.12)] bg-white p-5"
                style={{ borderRadius: '1rem' }}
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 flex-shrink-0 text-[#a58658]"
                />
                <p className="text-sm font-bold text-[#0f211a]">{format}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f1e9] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0f211a] mb-4">
              {isEn
                ? 'Starter Pack and complete SOP manual'
                : 'Starter Pack et manuel SOP complet'}
            </p>
            <h2 className="font-display text-4xl font-extrabold text-[#0f211a] tracking-tight">
              {isEn
                ? 'Choose the right level of structure'
                : 'Choisir le bon niveau de structure'}
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="border border-[rgba(32,35,31,0.12)] bg-[#fcfbf8] p-7" style={{ borderRadius: '1rem' }}>
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display text-2xl font-bold text-[#0f211a]">
                  {pack.shortTitle[lang]}
                </h3>
                <span className="font-display text-3xl font-extrabold text-[#0f211a]">
                  {formatProductPrice('starter_pack')}
                </span>
              </div>
              <p className="text-[#687169] leading-relaxed">
                {pack.starterComparison[lang]}
              </p>
            </div>
            <div
              className="bg-[#0f211a] text-white p-7"
              style={{ borderRadius: '1rem' }}
            >
              <div className="flex items-center justify-between gap-4 mb-5">
                <h3 className="font-display text-2xl font-bold">
                  {pack.fullPlaybookTitle[lang]}
                </h3>
                <span className="font-display text-3xl font-extrabold">
                  {formatProductPrice('playbook')}
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

      <section className="bg-[#fcfbf8] px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold text-[#0f211a] tracking-tight mb-10 text-center">
            FAQ
          </h2>
          <div className="space-y-3">
            {pack.faq.map((item, index) => (
              <div
                key={item.question.en}
                className="border border-[rgba(32,35,31,0.12)] bg-white"
                style={{ borderRadius: '1rem' }}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-bold text-sm uppercase tracking-tight text-[#0f211a]">
                    {item.question[lang]}
                  </span>
                  <ChevronDown
                    size={18}
                    className="flex-shrink-0 text-[#687169] transition-transform"
                    style={{
                      transform:
                        openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-sm text-[#687169] leading-relaxed">
                      {item.answer[lang]}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
