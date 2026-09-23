'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  PRODUCT_PREVIEWS,
  PreviewProductId,
} from '@/content/product-previews'

interface Props {
  productId: PreviewProductId
  locale: string
  variant?: 'hero' | 'compactHero' | 'card'
}

export default function ProductPreviewCarousel({
  productId,
  locale,
  variant = 'hero',
}: Props) {
  const lang = locale === 'fr' ? 'fr' : 'en'
  const pages = PRODUCT_PREVIEWS[productId][lang]
  const [activePage, setActivePage] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const isCompactHero = variant === 'compactHero'

  if (variant === 'card') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#e7e0d5]">
        <div
          className="absolute inset-0 opacity-35 transition-opacity duration-300 group-hover:opacity-55"
          style={{
            backgroundImage: 'radial-gradient(#a58658 0.5px, transparent 0.5px)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="absolute left-[17%] top-[14%] h-[78%] w-[34%] rotate-[-4deg] overflow-hidden border border-[#fcfbf8] bg-[#fcfbf8] shadow-[0_10px_24px_rgba(15,33,26,0.16)] transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:-translate-x-1">
          <Image
            src={pages[1].src}
            alt=""
            fill
            sizes="180px"
            className="object-contain"
          />
        </div>
        <div className="absolute right-[17%] top-[9%] h-[82%] w-[36%] rotate-[3deg] overflow-hidden border border-[#fcfbf8] bg-[#fcfbf8] shadow-[0_14px_30px_rgba(15,33,26,0.22)] transition-transform duration-300 group-hover:rotate-[5deg] group-hover:translate-x-1">
          <Image
            src={pages[0].src}
            alt={pages[0].alt}
            fill
            sizes="190px"
            className="object-contain"
          />
        </div>
      </div>
    )
  }

  const previous = () => {
    setActivePage((current) => (current - 1 + pages.length) % pages.length)
  }

  const next = () => {
    setActivePage((current) => (current + 1) % pages.length)
  }

  return (
    <div
      className={`group relative mx-auto w-full lg:mr-0 ${isCompactHero ? 'max-w-[360px]' : 'max-w-[460px]'}`}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return
        const endX = event.changedTouches[0]?.clientX ?? touchStartX.current
        const distance = endX - touchStartX.current
        if (Math.abs(distance) > 45) {
          if (distance > 0) previous()
          else next()
        }
        touchStartX.current = null
      }}
    >
      <div className="absolute -right-4 -top-4 h-full w-full rotate-2 bg-[#a58658]/[0.12]" />
      <div className={`relative border border-[rgba(32,35,31,0.14)] bg-[#e7e0d5] shadow-[0_20px_60px_rgba(15,33,26,0.12)] ${isCompactHero ? 'p-3 md:p-4' : 'p-4 md:p-6'}`}>
        <div className={`relative mx-auto aspect-[0.707] overflow-hidden bg-[#fcfbf8] shadow-[0_12px_35px_rgba(15,33,26,0.16)] ${isCompactHero ? 'max-h-[500px]' : 'max-h-[620px]'}`}>
          {pages.map((page, index) => (
            <Image
              key={page.src}
              src={page.src}
              alt={page.alt}
              fill
              priority={index === 0}
              sizes="(min-width: 1024px) 38vw, 88vw"
              className={`object-contain transition-opacity duration-300 ${
                index === activePage ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={previous}
          aria-label={lang === 'en' ? 'Previous preview' : 'Aperçu précédent'}
          className="absolute left-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-[#fcfbf8] text-[#0f211a] shadow-[0_6px_20px_rgba(15,33,26,0.18)] transition-all hover:bg-[#0f211a] hover:text-[#f5f1e9] md:left-2 md:-translate-x-2 md:opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label={lang === 'en' ? 'Next preview' : 'Aperçu suivant'}
          className="absolute right-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-[#fcfbf8] text-[#0f211a] shadow-[0_6px_20px_rgba(15,33,26,0.18)] transition-all hover:bg-[#0f211a] hover:text-[#f5f1e9] md:right-2 md:translate-x-2 md:opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100"
        >
          <ChevronRight size={22} />
        </button>

        <div className={`flex items-center justify-center gap-2 ${isCompactHero ? 'pt-3' : 'pt-4 md:pt-5'}`}>
          {pages.map((page, index) => (
            <button
              type="button"
              key={page.src}
              onClick={() => setActivePage(index)}
              aria-label={
                lang === 'en'
                  ? `Show preview ${index + 1}`
                  : `Afficher l’aperçu ${index + 1}`
              }
              className={`h-1.5 transition-all ${
                index === activePage
                  ? 'w-7 bg-[#0f211a]'
                  : 'w-1.5 bg-[#9da99e] hover:bg-[#0f211a]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
