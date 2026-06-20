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
  variant?: 'hero' | 'card'
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

  if (variant === 'card') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#dae9ff]">
        <div
          className="absolute inset-0 opacity-30 transition-opacity duration-300 group-hover:opacity-45"
          style={{
            backgroundImage: 'radial-gradient(#003d9b 0.5px, transparent 0.5px)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="absolute left-[17%] top-[14%] h-[78%] w-[34%] rotate-[-4deg] overflow-hidden border border-white bg-white shadow-[0_10px_24px_rgba(10,29,46,0.18)] transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:-translate-x-1">
          <Image
            src={pages[1].src}
            alt=""
            fill
            sizes="180px"
            className="object-contain"
          />
        </div>
        <div className="absolute right-[17%] top-[9%] h-[82%] w-[36%] rotate-[3deg] overflow-hidden border border-white bg-white shadow-[0_14px_30px_rgba(10,29,46,0.22)] transition-transform duration-300 group-hover:rotate-[5deg] group-hover:translate-x-1">
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
      className="group relative w-full max-w-[460px] mx-auto lg:mr-0"
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
      <div className="absolute -right-4 -top-4 h-full w-full rotate-2 bg-[#003d9b]/[0.08]" />
      <div className="relative border border-[#c3c6d6]/40 bg-[#eef4ff] p-4 md:p-6 shadow-[0_20px_60px_rgba(10,29,46,0.12)]">
        <div className="relative mx-auto aspect-[0.707] max-h-[620px] overflow-hidden bg-white shadow-[0_12px_35px_rgba(10,29,46,0.16)]">
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
          className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center bg-white text-[#0a1d2e] shadow-[0_6px_20px_rgba(10,29,46,0.18)] transition-all hover:bg-[#003d9b] hover:text-white md:opacity-0 md:-translate-x-2 md:group-hover:translate-x-0 md:group-hover:opacity-100"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label={lang === 'en' ? 'Next preview' : 'Aperçu suivant'}
          className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center bg-white text-[#0a1d2e] shadow-[0_6px_20px_rgba(10,29,46,0.18)] transition-all hover:bg-[#003d9b] hover:text-white md:opacity-0 md:translate-x-2 md:group-hover:translate-x-0 md:group-hover:opacity-100"
        >
          <ChevronRight size={22} />
        </button>

        <div className="flex items-center justify-center gap-2 pt-4 md:pt-5">
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
                  ? 'w-7 bg-[#003d9b]'
                  : 'w-1.5 bg-[#9baac0] hover:bg-[#003d9b]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
