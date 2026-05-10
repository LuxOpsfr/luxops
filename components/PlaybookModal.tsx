'use client'

import { useState, useEffect } from 'react'
import { X, Check, FileText, Globe, ChevronDown, ChevronUp } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import type { PlaybookEntry } from '@/content/playbooks/data'

interface PlaybookModalProps {
  isOpen: boolean
  onClose: () => void
  locale: string
  playbook: PlaybookEntry | null
}

export default function PlaybookModal({ isOpen, onClose, locale, playbook }: PlaybookModalProps) {
  const [selectedLang, setSelectedLang] = useState<'en' | 'fr'>(locale as 'en' | 'fr')
  const [chaptersExpanded, setChaptersExpanded] = useState(false)
  const { addItem, items, openCart } = useCart()
  const isEn = locale === 'en'
  const PREVIEW_COUNT = 5

  // Reset state when playbook changes
  useEffect(() => {
    setSelectedLang(locale as 'en' | 'fr')
    setChaptersExpanded(false)
  }, [playbook, locale])

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen || !playbook) return null

  const inCart = items.some(i => i.priceId === playbook.priceId)
  const title = playbook.title[selectedLang]
  const chapters = playbook.chapters[selectedLang]
  const desc = playbook.desc[selectedLang]

  function handleAddToCart() {
    if (inCart) {
      openCart()
      onClose()
    } else {
      addItem({
        priceId: playbook!.priceId,
        title: `${title} (${selectedLang.toUpperCase()})`,
        price: 67,
      })
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Preview image / placeholder */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 h-40 rounded-t-2xl flex items-center justify-center overflow-hidden">
          {playbook.previewImage ? (
            <img
              src={playbook.previewImage}
              alt={title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="text-center select-none">
              <div className="text-5xl mb-2">
                {playbook.id === 'fo' && '🏨'}
                {playbook.id === 'hsk' && '🛏️'}
                {playbook.id === 'fb' && '🍽️'}
                {playbook.id === 'spa' && '💆'}
              </div>
              <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                {playbook.dept[locale as 'en' | 'fr']}
              </span>
            </div>
          )}
        </div>

        <div className="p-6">

          {/* Header */}
          <div className="mb-5">
            <span className="text-xs font-semibold text-[#111111] uppercase tracking-wider bg-[#111111]/8 px-3 py-1 rounded-full">
              {playbook.dept[locale as 'en' | 'fr']}
            </span>
            <div className="flex items-start justify-between mt-3">
              <h2 className="text-xl font-bold text-[#111111] pr-4 leading-tight">{title}</h2>
              <div className="flex-shrink-0 text-right">
                <span className="text-2xl font-bold text-[#111111]">€67</span>
                <div className="text-xs text-gray-400">{playbook.pages}</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mt-2">{desc}</p>
          </div>

          {/* What's included */}
          <div className="bg-gray-50 rounded-xl p-4 mb-4">
            <p className="text-xs font-semibold text-[#111111] uppercase tracking-wider mb-3">
              {isEn ? "What's included" : 'Ce qui est inclus'}
            </p>
            <div className="space-y-2.5">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <FileText size={15} className="text-[#111111] flex-shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold">{isEn ? 'PDF Version' : 'Version PDF'}</span>
                  <span className="text-gray-500">
                    {isEn
                      ? ' · Print-ready, immediately applicable at your property'
                      : ' · Prêt à imprimer, applicable immédiatement dans votre hôtel'}
                  </span>
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 mt-0.5 text-[#111111]"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
                <span>
                  <span className="font-semibold">PowerPoint (PPT)</span>
                  <span className="text-gray-500">
                    {isEn
                      ? ' · Fully editable, customise every slide for your brand'
                      : ' · Entièrement modifiable, adaptez chaque slide à votre image'}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Language selector */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2.5">
              <Globe size={14} className="text-gray-500" />
              <p className="text-xs font-semibold text-[#111111] uppercase tracking-wider">
                {isEn ? 'Choose playbook language' : 'Langue du playbook'}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedLang('en')}
                className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                  selectedLang === 'en'
                    ? 'bg-[#111111] text-white border-[#111111]'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'
                }`}
              >
                🇬🇧 English
              </button>
              <button
                onClick={() => setSelectedLang('fr')}
                className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                  selectedLang === 'fr'
                    ? 'bg-[#111111] text-white border-[#111111]'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'
                }`}
              >
                🇫🇷 Français
              </button>
            </div>
          </div>

          {/* Chapters */}
          <div className="mb-6">
            <button
              onClick={() => setChaptersExpanded(!chaptersExpanded)}
              className="flex items-center justify-between w-full mb-3"
            >
              <p className="text-xs font-semibold text-[#111111] uppercase tracking-wider">
                {isEn
                  ? `${chapters.length} chapters covered`
                  : `${chapters.length} chapitres couverts`}
              </p>
              {chaptersExpanded ? (
                <ChevronUp size={14} className="text-gray-400" />
              ) : (
                <ChevronDown size={14} className="text-gray-400" />
              )}
            </button>

            <div className="space-y-2">
              {(chaptersExpanded ? chapters : chapters.slice(0, PREVIEW_COUNT)).map((ch, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="text-[10px] font-bold text-gray-300 mt-0.5 w-5 flex-shrink-0 text-right">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{ch}</span>
                </div>
              ))}

              {!chaptersExpanded && chapters.length > PREVIEW_COUNT && (
                <button
                  onClick={() => setChaptersExpanded(true)}
                  className="text-xs text-gray-400 hover:text-[#111111] transition-colors ml-7 mt-1"
                >
                  +{chapters.length - PREVIEW_COUNT}{' '}
                  {isEn ? 'more chapters' : 'chapitres supplémentaires'} →
                </button>
              )}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={handleAddToCart}
            className="w-full py-4 bg-[#111111] text-white text-sm font-bold rounded-xl hover:bg-[#333333] transition-colors flex items-center justify-center gap-2"
          >
            {inCart ? (
              <>
                <Check size={15} />
                {isEn ? 'In Cart · View Cart' : 'Ajouté · Voir le Panier'}
              </>
            ) : isEn ? (
              `Add to Cart · €67 · ${selectedLang === 'en' ? 'English' : 'Français'}`
            ) : (
              `Ajouter au Panier · 67€ · ${selectedLang === 'en' ? 'English' : 'Français'}`
            )}
          </button>

          <p className="text-center text-xs text-gray-400 mt-2">
            {isEn
              ? 'Instant download after payment'
              : 'Téléchargement immédiat après paiement'}
          </p>
        </div>
      </div>
    </div>
  )
}
