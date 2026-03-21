'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Check, Clock, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import AddToCartButton from '@/components/AddToCartButton'
import PlaybookModal from '@/components/PlaybookModal'
import { PLAYBOOKS, BUNDLE_PRICE_ID } from '@/content/playbooks/data'

export default function PlaybooksContent({ locale }: { locale: string }) {
  const t = useTranslations('playbooks_page')
  const isEn = locale === 'en'
  const lang = locale as 'en' | 'fr'

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-[#111111] mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-400 leading-relaxed">{t('subtitle')}</p>
        </div>
      </section>

      {/* Pricing Banner */}
      <section className="py-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="text-white text-center sm:text-left">
              <div className="text-xs text-gray-400 mb-0.5 uppercase tracking-wider">
                {t('individual_label')}
              </div>
              <div className="text-2xl font-bold">{t('individual_price')}</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/20" />
            <div className="text-white text-center sm:text-left">
              <div className="flex items-center gap-2 mb-0.5 justify-center sm:justify-start">
                <span className="text-xs text-gray-400 uppercase tracking-wider">
                  {t('bundle_label')}
                </span>
                <span className="px-2 py-0.5 bg-white/20 text-white text-xs rounded-full font-medium">
                  {t('bundle_badge')}
                </span>
              </div>
              <div className="text-2xl font-bold">
                {t('bundle_price')}{' '}
                <span className="text-sm font-normal text-gray-400">
                  — {t('bundle_desc')}
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <AddToCartButton
              item={{
                priceId: PLAYBOOKS[0].priceId,
                title: PLAYBOOKS[0].title[lang],
                price: 67,
              }}
              addedLabel={isEn ? 'In Cart' : 'Ajouté'}
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-colors border border-white/20"
            >
              {t('buy_individual')}
            </AddToCartButton>
            <AddToCartButton
              item={{
                priceId: BUNDLE_PRICE_ID,
                title: isEn ? 'Complete Bundle — All 4 Playbooks' : 'Bundle Complet — 4 Playbooks',
                price: 199,
              }}
              addedLabel={isEn ? 'In Cart' : 'Ajouté'}
              className="px-5 py-2.5 bg-white text-[#111111] text-sm font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              {t('buy_bundle')}
            </AddToCartButton>
          </div>
        </div>
      </section>

      {/* Playbooks Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PLAYBOOKS.map((pb, i) => (
              <button
                key={pb.id}
                onClick={() => setOpenIndex(i)}
                className="text-left border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                {/* Image Hero */}
                <div className="relative h-56 w-full bg-gray-100 overflow-hidden">
                  {pb.previewImage ? (
                    <Image
                      src={pb.previewImage}
                      alt={pb.title[lang]}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized={pb.previewImage.startsWith('http')}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#1A2E44] to-[#0056D2]" />
                  )}
                  {/* Overlay badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-[#1A2E44] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                      {pb.dept[lang]}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/40 backdrop-blur-sm text-white text-xs px-2.5 py-1.5 rounded-full">
                    <Clock size={11} />
                    {pb.pages}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-xl font-bold text-[#111111] mb-2">{pb.title[lang]}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{pb.desc[lang]}</p>

                  <ul className="space-y-2 mb-6">
                    {pb.highlights[lang].slice(0, 3).map((h, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check size={14} className="text-[#2E7D32] flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-[#111111] font-bold text-xl">€67</span>
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-[#0056D2] group-hover:gap-2.5 transition-all">
                      {isEn ? 'View Details' : 'Voir les détails'}
                      <ChevronRight size={16} />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#111111]/8 rounded-full text-[#111111] text-sm font-medium mb-4">
            <Clock size={14} />
            {t('coming_soon_title')}
          </div>
          <p className="text-gray-400 text-sm">{t('coming_soon_text')}</p>
        </div>
      </section>

      {/* Modal */}
      <PlaybookModal
        isOpen={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        locale={locale}
        playbook={openIndex !== null ? PLAYBOOKS[openIndex] : null}
      />
    </div>
  )
}
