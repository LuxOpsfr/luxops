'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ProductPreviewCarousel from '@/components/ProductPreviewCarousel'
import { PLAYBOOKS } from '@/content/playbooks/data'
import { useCurrency } from '@/context/CurrencyContext'
import { localizedRoutePath } from '@/lib/localized-routes'

const copy = {
  fr: {
    manual: 'Manuel SOP complet',
    view: 'Voir le manuel',
  },
  en: {
    manual: 'Full SOP manual',
    view: 'View manual',
  },
  es: {
    manual: 'Manual SOP completo',
    view: 'Ver manual',
  },
}

export default function HomeManuals({ locale, allResourcesLabel }: { locale: string; allResourcesLabel: string }) {
  const lang = locale === 'fr' ? 'fr' : locale === 'es' ? 'es' : 'en'
  const labels = copy[lang]
  const { formatProductPrice } = useCurrency()
  const catalogHref = localizedRoutePath('playbooks', lang)
  const detailsHref = localizedRoutePath('playbooks', lang === 'fr' ? 'fr' : 'en')

  return (
    <>
      <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
        {PLAYBOOKS.map((product) => (
          <Link
            key={product.id}
            href={`${detailsHref}/${product.id}`}
            className="group block min-w-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#24362f]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <ProductPreviewCarousel productId={product.id} locale={locale} variant="card" />
              {product.id === 'hsk' && <span className="absolute left-3 top-3 bg-[#0f211a] px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white">{lang === 'fr' ? 'Top vente' : 'Best seller'}</span>}
            </div>
            <h3 className="mt-5 text-2xl font-medium leading-tight text-[#0f211a]">
              {product.id === 'spa' ? 'Spa & Wellness' : product.dept[lang === 'fr' ? 'fr' : 'en']}
            </h3>
            <p className="mt-2 text-sm text-[#5d665f]">{labels.manual}</p>
            <div className="mt-5 flex items-center justify-between gap-3 border-t border-[rgba(32,35,31,0.14)] pt-4">
              <span className="font-display text-2xl text-[#0f211a]">{formatProductPrice('playbook')}</span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#24362f] group-hover:underline">
                {labels.view}<ArrowRight size={16} strokeWidth={1.5} />
              </span>
            </div>
          </Link>
        ))}
      </div>
      <Link href={catalogHref} className="mt-8 inline-flex items-center gap-2 border-b border-[#24362f] pb-1 text-sm font-semibold text-[#24362f]">
        {allResourcesLabel}<ArrowRight size={16} strokeWidth={1.5} />
      </Link>
    </>
  )
}
