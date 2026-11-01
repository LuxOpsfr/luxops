'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import TrackedLink from '@/components/TrackedLink'
import PriceDisplay from '@/components/PriceDisplay'

type ReadingOfferBarProps = {
  locale: 'fr' | 'en'
  href: string
  articleSlug: string
  sourcePage?: string
  title: string
  mobileTitle: string
  benefit: string
  image: string
  imageAlt: string
  priceType?: 'playbook' | 'bundle'
  mobileOnly?: boolean
}

export default function ReadingOfferBar({ locale, href, articleSlug, sourcePage, title, mobileTitle, benefit, image, imageAlt, priceType = 'playbook', mobileOnly = false }: ReadingOfferBarProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = () => {
      const articleBody = document.getElementById('article-reading-start')
      const earlyOffer = document.getElementById('article-offer-start')
      const finalOffer = document.getElementById('article-final-offer')
      const footer = document.querySelector('footer')
      const readingStarted = earlyOffer
        ? earlyOffer.getBoundingClientRect().bottom < window.innerHeight * 0.18
        : articleBody
        ? articleBody.getBoundingClientRect().top < window.innerHeight * 0.7
        : window.scrollY > 650
      const finalOfferReached = ((finalOffer ?? footer)?.getBoundingClientRect().top ?? Infinity) < window.innerHeight * 0.9
      const formInView = [...document.querySelectorAll('form')].some((form) => {
        const rect = form.getBoundingClientRect()
        return rect.top < window.innerHeight && rect.bottom > window.innerHeight * 0.55
      })
      setVisible(readingStarted && !finalOfferReached && !formInView)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  if (!visible) return null

  return (
    <aside
      aria-label={locale === 'fr' ? 'Découvrir le manuel associé' : 'Explore the related manual'}
      className={`fixed inset-x-3 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] z-30 mx-auto max-w-[760px] rounded-[1rem] border border-[#d9c9aa] bg-[#fcfbf8]/95 px-3 py-2 shadow-[0_14px_38px_rgba(15,33,26,.18)] backdrop-blur-md sm:bottom-5 sm:p-4 ${mobileOnly ? 'lg:hidden' : ''}`}
    >
      <div className="flex items-center gap-3 sm:gap-5">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-[#e9e2d4] sm:h-16 sm:w-16">
          <Image src={image} alt={imageAlt} fill sizes="64px" className="object-cover" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="hidden text-[10px] font-bold uppercase tracking-[.14em] text-[#92734a] sm:block">
            {locale === 'fr' ? 'Le manuel associé à ce guide' : 'The manual behind this guide'}
          </p>
          <p className="truncate text-sm font-semibold text-[#0f211a] sm:mt-1 sm:text-base"><span className="sm:hidden">{mobileTitle}</span><span className="hidden sm:inline">{title}</span></p>
          <p className="truncate text-[10px] leading-4 text-[#536057] sm:text-xs sm:leading-5">{benefit}</p>
        </div>
        <div className="flex shrink-0 items-center gap-2 text-right sm:block">
          <p className="text-base font-semibold text-[#0f211a] sm:text-lg"><PriceDisplay productType={priceType} /></p>
          <TrackedLink
            href={href}
            eventName="playbook_cta_clicked"
            eventProperties={{ source_page: sourcePage ?? `/${locale}/blog/${articleSlug}`, placement: 'sticky_article_offer', article_slug: articleSlug }}
            className="inline-flex min-h-9 items-center justify-center rounded-full bg-[#0f211a] px-3 text-xs font-semibold text-white hover:bg-[#244330] sm:mt-1 sm:min-h-10 sm:px-5 sm:text-sm"
          >
            <span className="sm:hidden">{locale === 'fr' ? 'Voir' : 'View'}</span>
            <span className="hidden sm:inline">{locale === 'fr' ? 'Voir le manuel' : 'View manual'}</span>
            <span aria-hidden="true" className="ml-1">→</span>
          </TrackedLink>
        </div>
      </div>
    </aside>
  )
}
