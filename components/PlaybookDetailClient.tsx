'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Check, ChevronDown, FileText, Languages, Presentation, RefreshCw, ShoppingCart } from 'lucide-react'
import { PlaybookEntry } from '@/content/playbooks/data'
import { useCart } from '@/context/CartContext'
import { useCurrency } from '@/context/CurrencyContext'
import TrackedLink from '@/components/TrackedLink'
import ProductPreviewCarousel from '@/components/ProductPreviewCarousel'
import HousekeepingProductProof from '@/components/HousekeepingProductProof'
import ProductCredibility from '@/components/ProductCredibility'
import posthog from 'posthog-js'

interface Stat {
  value: string
  label: { en: string; fr: string }
}

interface FaqItem {
  q: { en: string; fr: string }
  a: { en: string; fr: string }
}

interface Props {
  playbook: PlaybookEntry
  stats: Stat[]
  faq: FaqItem[]
  locale: string
}

export default function PlaybookDetailClient({ playbook: pb, stats, faq, locale }: Props) {
  const isEn = locale === 'en'
  const lang = locale as 'en' | 'fr'
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const { addItem, items } = useCart()
  const { currency, priceFor, formatProductPrice } = useCurrency()

  const inCart = items.some((i) => i.priceId === pb.priceId)
  const starterPackHref =
    pb.id === 'fo'
      ? `/${locale}/playbooks/fo-starter-pack`
      : pb.id === 'hsk'
        ? `/${locale}/playbooks/hsk-starter-pack`
        : pb.id === 'fb'
          ? `/${locale}/playbooks/fb-starter-pack`
          : null

  const handleAddToCart = () => {
    if (!inCart) {
      addItem({
        priceId: pb.priceId,
        title: pb.title[lang],
        price: priceFor('playbook'),
        currency,
        productType: 'playbook',
      })
      posthog.capture('product_added_to_cart', {
        price_id: pb.priceId,
        title: pb.title[lang],
        price: priceFor('playbook'),
        currency,
        locale,
        product_type: 'playbook',
      })
      posthog.capture('playbook_added_to_cart', {
        price_id: pb.priceId,
        title: pb.title[lang],
        price: priceFor('playbook'),
        currency,
        locale,
        product_type: 'playbook',
      })
    }
  }

  const chapters = pb.chapters[lang]

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f1e9] pt-[var(--site-header-height)]">

      {/* Back link */}
      <div className="max-w-screen-xl mx-auto px-6 pt-8">
        <Link
          href={`/${locale}/playbooks`}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#687169] hover:text-[#0f211a] transition-colors"
        >
          <ArrowLeft size={14} />
          {isEn ? 'All SOP Manuals' : 'Tous les manuels SOP'}
        </Link>
      </div>

      {/* Hero */}
      <section
        className="relative py-14 md:py-24 px-5 md:px-6 overflow-hidden border-b"
        style={{
          backgroundImage: 'radial-gradient(rgba(165,134,88,0.22) 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
          borderColor: 'rgba(32,35,31,0.14)',
        }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          {/* Left */}
          <div className="flex-1 min-w-0 space-y-6 md:space-y-8 mt-4">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 text-[#0f211a] font-bold text-[10px] uppercase tracking-widest"
              style={{ backgroundColor: '#e7e0d5', borderRadius: '0.125rem' }}
            >
              <span className="w-2 h-2 bg-[#0f211a] rounded-full" />
              {pb.dept[lang]}
            </div>
            {pb.id === 'hsk' && (
              <span className="ml-2 inline-flex items-center border border-[#a58658] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#6c5535]">
                {isEn ? 'Best seller' : 'Top vente'}
              </span>
            )}

            <h1
              className="font-display text-[clamp(2.65rem,11vw,4.5rem)] lg:text-7xl font-extrabold tracking-tight md:tracking-tighter leading-[0.96] text-[#0f211a] max-w-full"
            >
              {pb.title[lang]}
            </h1>

            <p className="max-w-lg text-lg text-[#687169] leading-relaxed">
              {pb.desc[lang]}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={handleAddToCart}
                className="px-8 py-4 font-bold text-white transition-all hover:opacity-90 flex items-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #0f211a, #24362f)',
                  borderRadius: '0.125rem',
                }}
              >
                <ShoppingCart size={16} />
                {inCart
                  ? (isEn ? 'In Cart' : 'Ajouté')
                  : (isEn
                    ? `Buy SOP Manual · ${formatProductPrice('playbook')}`
                    : `Acheter le manuel SOP · ${formatProductPrice('playbook')}`)}
              </button>
              <a
                href="#document-previews"
                className="inline-flex items-center justify-center border border-[#0f211a] px-8 py-4 font-bold text-[#0f211a] transition-colors hover:bg-[#e7e0d5]"
              >
                {isEn ? 'Preview the Manual' : 'Voir un aperçu du manuel'}
              </a>
            </div>
            {starterPackHref && (
              <p className="text-sm text-[#687169]">
                {isEn ? 'Looking for a lighter starting point? ' : 'Besoin d’une première base plus ciblée ? '}
                <TrackedLink
                  href={starterPackHref}
                  eventName="starter_pack_cta_clicked"
                  eventProperties={{
                    source_page: `/${locale}/playbooks/${pb.id}`,
                    placement: 'playbook_hero',
                    product: `${pb.id}_starter_pack`,
                    cta_label: isEn
                      ? `View Starter Pack · ${formatProductPrice('starter_pack')}`
                      : `Voir le Starter Pack · ${formatProductPrice('starter_pack')}`,
                  }}
                  className="font-semibold text-[#0f211a] underline underline-offset-4"
                >
                  {isEn
                    ? `View Starter Pack · ${formatProductPrice('starter_pack')}`
                    : `Voir le Starter Pack · ${formatProductPrice('starter_pack')}`}
                </TrackedLink>
              </p>
            )}

            <p className="text-xs text-[#687169]">
              {isEn
                ? `Instant delivery · ${pb.pages} · PDF + PowerPoint · FR & EN included · Product revisions included while maintained`
                : `Livraison instantanée · ${pb.pages} · PDF + PowerPoint · FR & EN inclus · Révisions incluses tant que le produit est maintenu`}
            </p>
          </div>

          {/* Right - product preview */}
          <div className="flex-1 relative w-full">
            <ProductPreviewCarousel productId={pb.id} locale={locale} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#e7e0d5' }}>
        <div
          className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ backgroundColor: 'rgba(32,35,31,0.14)' }}
        >
          {stats.map((s, i) => (
            <div key={i} className="bg-white p-10 flex flex-col items-center text-center">
              <span className="font-display text-4xl font-extrabold text-[#0f211a] mb-2">
                {s.value}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#687169]">
                {s.label[lang]}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div id="document-previews" className="scroll-mt-24">
        <HousekeepingProductProof locale={locale} productId={pb.id} />
      </div>

      {/* Contents */}
      <section className="bg-[#fcfbf8] px-6 py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-[#0f211a] mb-10">
            {isEn ? 'Inside the manual' : 'Dans le manuel'}
          </h2>
          <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
            {chapters.map((chapter, index) => (
              <div key={chapter} className="flex gap-5 border-t border-[rgba(32,35,31,0.14)] py-5">
                <span className="font-display text-2xl text-[#a58658]">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="pt-1 text-base font-semibold leading-6 text-[#0f211a]">{chapter}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 px-6" style={{ backgroundColor: '#e7e0d5' }}>
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/3">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-[#0f211a] mb-6">
              {isEn ? 'What you’ll be able to standardise' : 'Ce que vous pourrez standardiser'}
            </h2>
            <p className="text-[#687169] mb-8 leading-relaxed">
              {isEn
                ? 'Every procedure is documented as an editable operating base. Adapt terminology, systems, roles, approval rules and brand standards before team rollout.'
                : 'Chaque procédure est documentée comme une base opérationnelle modifiable. Adaptez les termes, systèmes, rôles, règles de validation et standards de marque avant déploiement équipe.'}
            </p>
            <ul className="space-y-5">
              {pb.highlights[lang].map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#0f211a' }} />
                  <div>
                    <span className="font-bold text-sm text-[#0f211a] block">{h}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div className="flex-1">
            <h3 className="mb-6 font-display text-2xl text-[#0f211a]">{isEn ? 'What you receive' : 'Ce que vous recevez'}</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                icon: FileText,
                title: isEn ? 'Operational PDF' : 'PDF opérationnel',
                desc: isEn ? 'High-resolution, print-ready, with clickable table of contents.' : 'Haute résolution, prêt à imprimer, avec sommaire cliquable.',
              },
              {
                icon: Presentation,
                title: 'PowerPoint',
                desc: isEn ? 'Fully editable slides. Adapt to your brand and property standards.' : 'Slides entièrement modifiables. Adaptez à votre établissement.',
              },
              {
                icon: Languages,
                title: isEn ? 'FR & EN Versions' : 'Versions FR & EN',
                desc: isEn ? 'Both languages included. Switch seamlessly for international teams.' : 'Les deux langues incluses. Idéal pour les équipes internationales.',
              },
              {
                icon: RefreshCw,
                title: isEn ? 'Product Revisions' : 'Révisions produit',
                desc: isEn ? 'Future revisions included while this product is actively maintained.' : 'Révisions futures incluses tant que ce produit est activement maintenu.',
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="border border-[rgba(32,35,31,0.12)] bg-[#fcfbf8] p-6"
                  style={{ borderRadius: '0.125rem', boxShadow: '0 2px 8px rgba(15,33,26,0.05)' }}
                >
                  <Icon size={22} className="mb-4 text-[#a58658]" strokeWidth={1.6} />
                  <h4 className="mb-1 font-display font-bold text-[#0f211a]">{item.title}</h4>
                  <p className="text-xs leading-relaxed text-[#687169]">{item.desc}</p>
                </div>
              )
            })}
            </div>
          </div>
        </div>
      </section>

      <ProductCredibility locale={locale} />

      {/* FAQ */}
      <section className="bg-[#fcfbf8] px-6 py-14 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-[#0f211a] mb-8">
            {isEn ? 'Technical Specifications & FAQ' : 'Spécifications & FAQ'}
          </h2>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <div
                key={i}
                className="overflow-hidden"
                style={{ backgroundColor: '#fcfbf8', borderRadius: '0.125rem' }}
              >
                <button
                  className="w-full flex justify-between items-center px-5 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-bold text-sm uppercase tracking-tight text-[#0f211a]">
                    {item.q[lang]}
                  </span>
                  <ChevronDown
                    size={18}
                    className="flex-shrink-0 ml-4 transition-transform"
                    style={{
                      color: '#687169',
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-[#687169] leading-loose">{item.a[lang]}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-[#0f211a] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold tracking-tight mb-4">
            {isEn ? 'Ready to give your team a clearer operating standard?' : 'Prêt à donner à votre équipe un référentiel plus clair ?'}
          </h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
            {isEn
              ? 'Start with the complete department SOP manual and adapt it to your property.'
              : 'Commencez avec le manuel SOP complet de votre département et adaptez-le à votre établissement.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleAddToCart}
              className="px-10 py-4 bg-white text-[#0f211a] font-bold hover:bg-[#fcfbf8] transition-colors"
              style={{ borderRadius: '0.125rem' }}
            >
              {inCart
                ? (isEn ? '✓ In Cart' : '✓ Ajouté')
                : (isEn
                  ? `Buy SOP Manual · ${formatProductPrice('playbook')}`
                  : `Acheter le manuel SOP · ${formatProductPrice('playbook')}`)}
            </button>
            <Link
              href={`/${locale}/playbooks`}
              className="px-10 py-4 font-bold border transition-colors"
              style={{
                borderColor: 'rgba(255,255,255,0.4)',
                color: 'rgba(255,255,255,0.8)',
                borderRadius: '0.125rem',
              }}
            >
              {isEn ? 'View All SOP Manuals' : 'Voir tous les manuels SOP'}
            </Link>
          </div>
          <p className="mt-8 text-sm text-white/70">
            {isEn ? 'Need help implementing it with your team? ' : 'Besoin de le déployer avec votre équipe ? '}
            <Link href={isEn ? `/${locale}/training` : `/${locale}/formation`} className="font-semibold text-white underline underline-offset-4">
              {isEn ? 'Explore Training' : 'Découvrir la formation'}
            </Link>
          </p>
        </div>
      </section>

    </div>
  )
}
