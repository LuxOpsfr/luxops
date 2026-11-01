'use client'

import { usePathname } from 'next/navigation'
import ArticleManualCard from '@/components/ArticleManualCard'
import ReadingOfferBar from '@/components/ReadingOfferBar'
import { getManualOffer, manualOfferForResourcePath } from '@/lib/manual-offers'

export default function ContextualResourceOffer({ routeLocale }: { routeLocale: string }) {
  const pathname = usePathname()
  const id = manualOfferForResourcePath(pathname)
  if (!id) return null

  const locale = routeLocale === 'en' ? 'en' : 'fr'
  const offer = getManualOffer(id, locale, routeLocale)
  const articleSlug = pathname.split('/').filter(Boolean).at(-1) ?? 'resources'

  return (
    <>
      <aside className="fixed right-4 top-[calc(var(--site-header-height)+2rem)] z-20 hidden w-[238px] min-[1800px]:block" aria-label={locale === 'fr' ? 'Manuel lié à cette ressource' : 'Manual related to this resource'}>
        <ArticleManualCard locale={locale} articleSlug={articleSlug} sourcePage={pathname} {...offer} />
      </aside>
      <div className="min-[1800px]:hidden">
        <ReadingOfferBar
          locale={locale}
          articleSlug={articleSlug}
          sourcePage={pathname}
          benefit={offer.note || offer.description}
          {...offer}
        />
      </div>
    </>
  )
}
