'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Check, ChevronDown, ShoppingCart } from 'lucide-react'
import { PlaybookEntry } from '@/content/playbooks/data'
import { useCart } from '@/context/CartContext'

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
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { addItem, items } = useCart()

  const inCart = items.some((i) => i.priceId === pb.priceId)

  const handleAddToCart = () => {
    if (!inCart) {
      addItem({ priceId: pb.priceId, title: pb.title[lang], price: 67 })
    }
  }

  const chapters = pb.chapters[lang]

  // Build bento layout: first chapter wide, middle ones single, last group featured
  const featuredChapters = chapters.slice(-3)
  const mainChapters = chapters.slice(0, -3)

  return (
    <div className="pt-16 bg-white min-h-screen">

      {/* Back link */}
      <div className="max-w-screen-xl mx-auto px-6 pt-8">
        <Link
          href={`/${locale}/playbooks`}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#737685] hover:text-[#003d9b] transition-colors"
        >
          <ArrowLeft size={14} />
          {isEn ? 'All Playbooks' : 'Tous les Playbooks'}
        </Link>
      </div>

      {/* Hero */}
      <section
        className="relative py-24 px-6 overflow-hidden border-b"
        style={{
          backgroundImage: 'radial-gradient(#c3c6d6 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
          borderColor: 'rgba(195,198,214,0.2)',
        }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          {/* Left */}
          <div className="flex-1 space-y-8 mt-4">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 text-[#003d9b] font-bold text-[10px] uppercase tracking-widest"
              style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
            >
              <span className="w-2 h-2 bg-[#003d9b] rounded-full" />
              {pb.dept[lang]}
            </div>

            <h1
              className="font-display text-6xl lg:text-7xl font-extrabold tracking-tighter leading-none text-[#0a1d2e]"
            >
              {pb.title[lang].split(' ').slice(0, -1).join(' ')}{' '}
              <span style={{ color: '#003d9b' }}>
                {pb.title[lang].split(' ').slice(-1)[0]}
              </span>
            </h1>

            <p className="max-w-lg text-lg text-[#4f6074] leading-relaxed">
              {pb.desc[lang]}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={handleAddToCart}
                className="px-8 py-4 font-bold text-white transition-all hover:opacity-90 flex items-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #003d9b, #0052cc)',
                  borderRadius: '0.125rem',
                  boxShadow: '0 8px 24px rgba(0,61,155,0.25)',
                }}
              >
                <ShoppingCart size={16} />
                {inCart
                  ? (isEn ? 'In Cart' : 'Ajouté')
                  : (isEn ? 'Buy Playbook — €67' : 'Acheter — 67 €')}
              </button>
              <Link
                href={`/${locale}/contact`}
                className="px-8 py-4 font-bold text-[#0a1d2e] hover:bg-[#dae9ff] transition-colors"
                style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
              >
                {isEn ? 'Request Preview' : 'Demander un extrait'}
              </Link>
            </div>

            <p className="text-xs text-[#737685]">
              {pb.pages} · PDF + PowerPoint · {isEn ? 'FR & EN included' : 'FR & EN inclus'}
            </p>
          </div>

          {/* Right — blueprint card */}
          <div className="flex-1 relative w-full max-w-md lg:max-w-none">
            <div
              className="absolute -top-4 -right-4 w-full h-full"
              style={{ backgroundColor: 'rgba(0,61,155,0.08)', transform: 'rotate(2deg)', borderRadius: '0.125rem' }}
            />
            <div
              className="relative bg-white p-8"
              style={{
                borderRadius: '0.125rem',
                boxShadow: '0 20px 60px rgba(10,29,46,0.12)',
                border: '1px solid rgba(195,198,214,0.3)',
              }}
            >
              {/* SOP Preview mockup */}
              <div className="border-b pb-4 mb-5" style={{ borderColor: 'rgba(195,198,214,0.3)' }}>
                <p className="text-[10px] text-[#003d9b] font-bold uppercase tracking-widest mb-1">
                  Standard Operating Procedure · {pb.dept[lang]}
                </p>
                <h4 className="font-display font-bold text-lg uppercase text-[#0a1d2e]">
                  {pb.chapters[lang][0]}
                </h4>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="flex gap-3 items-start">
                    <span
                      className="text-white text-[10px] font-bold w-6 h-6 flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#003d9b', borderRadius: '0.125rem' }}
                    >
                      {String(n).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="font-bold text-xs uppercase tracking-tight text-[#0a1d2e] mb-0.5">
                        {pb.highlights[lang][n - 1]}
                      </p>
                      <div className="h-2 rounded-full" style={{ backgroundColor: '#eef4ff', width: `${80 - n * 10}%` }} />
                    </div>
                  </div>
                ))}
                <div className="flex gap-3 items-start opacity-30">
                  <span
                    className="text-white text-[10px] font-bold w-6 h-6 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#003d9b', borderRadius: '0.125rem' }}
                  >
                    04
                  </span>
                  <div className="w-full h-4 rounded" style={{ backgroundColor: '#eef4ff' }} />
                </div>
              </div>
              <div
                className="absolute bottom-6 right-6 p-3 text-right"
                style={{ backgroundColor: 'rgba(255,255,255,0.9)', border: '1px solid rgba(195,198,214,0.3)' }}
              >
                <p className="font-display font-bold text-[10px] text-[#0a1d2e] uppercase">EDITION 2025</p>
                <p className="text-[9px] text-[#737685] uppercase tracking-widest">LuxOps Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#eef4ff' }}>
        <div
          className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ backgroundColor: 'rgba(195,198,214,0.2)' }}
        >
          {stats.map((s, i) => (
            <div key={i} className="bg-white p-10 flex flex-col items-center text-center">
              <span className="font-display text-4xl font-extrabold text-[#003d9b] mb-2">
                {s.value}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#4f6074]">
                {s.label[lang]}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Bento Architecture */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-[#0a1d2e] mb-16">
            {isEn ? 'Playbook Architecture' : 'Architecture du Playbook'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* First chapter — wide */}
            {mainChapters.slice(0, 1).map((ch, i) => (
              <div
                key={i}
                className="md:col-span-2 p-8 group transition-colors"
                style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
              >
                <div className="flex justify-between items-start mb-10">
                  <span className="font-display font-bold text-4xl" style={{ color: 'rgba(0,61,155,0.2)' }}>01</span>
                </div>
                <h3 className="font-display font-bold text-xl text-[#0a1d2e] mb-2">{ch}</h3>
                <p className="text-sm text-[#4f6074]">{isEn ? 'Core standards and foundational procedures.' : 'Standards fondamentaux et procédures de base.'}</p>
              </div>
            ))}

            {/* Chapters 2-3 */}
            {mainChapters.slice(1, 3).map((ch, i) => (
              <div
                key={i + 1}
                className="p-8"
                style={{ backgroundColor: '#ffffff', border: '1px solid rgba(195,198,214,0.25)', borderRadius: '0.125rem' }}
              >
                <span className="font-display font-bold text-2xl" style={{ color: 'rgba(0,61,155,0.2)' }}>
                  {String(i + 2).padStart(2, '0')}
                </span>
                <h3 className="font-display font-bold text-base text-[#0a1d2e] mt-4 mb-2">{ch}</h3>
                <p className="text-xs text-[#4f6074]">{isEn ? 'Detailed protocols and operational templates.' : 'Protocoles détaillés et templates opérationnels.'}</p>
              </div>
            ))}

            {/* Remaining individual chapters */}
            {mainChapters.slice(3).map((ch, i) => (
              <div
                key={i + 3}
                className="p-8"
                style={{ backgroundColor: '#f8f9ff', borderRadius: '0.125rem' }}
              >
                <span className="font-display font-bold text-2xl" style={{ color: 'rgba(0,61,155,0.2)' }}>
                  {String(i + 4).padStart(2, '0')}
                </span>
                <h3 className="font-display font-bold text-base text-[#0a1d2e] mt-4 mb-2">{ch}</h3>
              </div>
            ))}

            {/* Featured last module — navy */}
            <div
              className="md:col-span-2 p-8 text-white relative overflow-hidden"
              style={{ backgroundColor: '#003d9b', borderRadius: '0.125rem' }}
            >
              <div className="absolute top-0 right-0 opacity-10 text-[120px] font-bold leading-none select-none pr-4">
                +
              </div>
              <div className="relative z-10">
                <span className="font-display font-bold text-4xl" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  {String(mainChapters.length + 1).padStart(2, '0')}–{String(chapters.length).padStart(2, '0')}
                </span>
                <h3 className="font-display font-bold text-2xl mt-4 mb-3 text-white">
                  {featuredChapters[0]}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  {isEn
                    ? 'Advanced modules covering the final operational standards, quality control and continuous improvement.'
                    : "Modules avancés couvrant les standards opérationnels finaux, le contrôle qualité et l'amélioration continue."}
                </p>
                <div className="mt-6 space-y-1">
                  {featuredChapters.slice(1).map((ch, i) => (
                    <p key={i} className="text-xs flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      <span style={{ color: 'rgba(255,255,255,0.4)' }}>→</span> {ch}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 px-6" style={{ backgroundColor: '#eef4ff' }}>
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/3">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-[#0a1d2e] mb-6">
              {isEn ? "What's Included" : 'Ce qui est inclus'}
            </h2>
            <p className="text-[#4f6074] mb-8 leading-relaxed">
              {isEn
                ? 'Every procedure is documented and ready to deploy immediately in your operations.'
                : 'Chaque procédure est documentée et prête à déployer immédiatement dans vos opérations.'}
            </p>
            <ul className="space-y-5">
              {pb.highlights[lang].map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#003d9b' }} />
                  <div>
                    <span className="font-bold text-sm text-[#0a1d2e] block">{h}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables card */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: '📄',
                title: isEn ? 'Interactive PDF' : 'PDF Interactif',
                desc: isEn ? 'High-resolution, print-ready, with clickable table of contents.' : 'Haute résolution, prêt à imprimer, avec sommaire cliquable.',
              },
              {
                icon: '📊',
                title: 'PowerPoint',
                desc: isEn ? 'Fully editable slides. Adapt to your brand and property standards.' : 'Slides entièrement modifiables. Adaptez à votre établissement.',
              },
              {
                icon: '🌍',
                title: isEn ? 'FR & EN Versions' : 'Versions FR & EN',
                desc: isEn ? 'Both languages included. Switch seamlessly for international teams.' : 'Les deux langues incluses. Idéal pour les équipes internationales.',
              },
              {
                icon: '🔄',
                title: isEn ? 'Lifetime Updates' : 'Mises à jour à vie',
                desc: isEn ? 'All future revisions included at no extra cost.' : 'Toutes les révisions futures incluses sans coût supplémentaire.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6"
                style={{ borderRadius: '0.125rem', boxShadow: '0 2px 8px rgba(10,29,46,0.05)' }}
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h4 className="font-display font-bold text-[#0a1d2e] mb-1">{item.title}</h4>
                <p className="text-xs text-[#4f6074] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-[#0a1d2e] mb-12 text-center">
            {isEn ? 'Technical Specifications & FAQ' : 'Spécifications & FAQ'}
          </h2>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <div
                key={i}
                className="overflow-hidden"
                style={{ backgroundColor: '#f8f9ff', borderRadius: '0.125rem' }}
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-bold text-sm uppercase tracking-tight text-[#0a1d2e]">
                    {item.q[lang]}
                  </span>
                  <ChevronDown
                    size={18}
                    className="flex-shrink-0 ml-4 transition-transform"
                    style={{
                      color: '#737685',
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-sm text-[#4f6074] leading-loose">{item.a[lang]}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-[#003d9b] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold tracking-tight mb-4">
            {isEn ? 'Ready to elevate your operations?' : 'Prêt à élever vos opérations ?'}
          </h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
            {isEn
              ? `${pb.pages} of field-tested procedures, ready to deploy.`
              : `${pb.pages} de procédures testées sur le terrain, prêtes à déployer.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleAddToCart}
              className="px-10 py-4 bg-white text-[#003d9b] font-bold hover:bg-[#f8f9ff] transition-colors"
              style={{ borderRadius: '0.125rem' }}
            >
              {inCart
                ? (isEn ? '✓ In Cart' : '✓ Ajouté')
                : (isEn ? 'Buy Playbook — €67' : 'Acheter le Playbook — 67 €')}
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
              {isEn ? 'View All Playbooks' : 'Voir tous les Playbooks'}
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
