import Image from 'next/image'
import PriceDisplay from '@/components/PriceDisplay'
import TrackedLink from '@/components/TrackedLink'

type ArticleManualCardProps = {
  locale: 'fr' | 'en'
  href: string
  articleSlug: string
  sourcePage?: string
  department: string
  title: string
  description: string
  image: string
  imageAlt: string
  note?: string
  priceType?: 'playbook' | 'bundle'
}

export default function ArticleManualCard({
  locale,
  href,
  articleSlug,
  sourcePage,
  department,
  title,
  description,
  image,
  imageAlt,
  note,
  priceType = 'playbook',
}: ArticleManualCardProps) {
  return (
    <TrackedLink
      href={href}
      eventName="playbook_cta_clicked"
      eventProperties={{ source_page: sourcePage ?? `/${locale}/blog/${articleSlug}`, placement: 'sticky_article_offer', article_slug: articleSlug }}
      aria-label={`${locale === 'fr' ? 'Voir l’offre' : 'View offer'} ${department}`}
      className="group block overflow-hidden rounded-[1.35rem] border border-[#dfd4c1] bg-white text-[#0f211a] shadow-[0_10px_28px_rgba(43,40,32,.09)] transition duration-300 hover:-translate-y-0.5 hover:border-[#cdb78f] hover:shadow-[0_16px_34px_rgba(43,40,32,.14)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a58658]"
    >
      <div className="relative aspect-[1.8] overflow-hidden bg-[#e9e2d4]">
        <Image src={image} alt={imageAlt} fill sizes="250px" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(16,31,24,.82), rgba(16,31,24,.08) 62%, transparent)' }} />
        <span className="absolute left-3 top-3 rounded-full border border-white/40 bg-[#faf7f2]/90 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[.1em] text-[#263a30] backdrop-blur-sm">{department}</span>
        <span className="absolute bottom-3 left-3 right-3 font-display text-lg font-medium leading-tight text-white">{title}</span>
      </div>
      <div className="p-4">
        <p className="text-[11px] leading-[1.55] text-[#59655b]">{description}</p>
        {note && <p className="mt-2 text-[10px] font-semibold leading-4 text-[#806138]">{note}</p>}
        <p className="mt-2 text-[10px] leading-4 text-[#59655b]">{locale === 'fr' ? 'PDF et PPTX modifiables · FR et EN' : 'Editable PDF and PPTX · EN and FR'}</p>
        <div className="mt-3 flex items-center justify-between border-t border-[#eee9e0] pt-2.5 text-[11px]">
          <span className="text-[#59655b]">{priceType === 'bundle' ? (locale === 'fr' ? 'Bundle complet' : 'Complete bundle') : (locale === 'fr' ? 'Manuel SOP complet' : 'Complete SOP manual')}</span>
          <PriceDisplay productType={priceType} className="font-semibold text-[#25382d]" />
        </div>
        <span className="mt-3 flex min-h-9 items-center justify-between rounded-full bg-[#f4f0e8] px-3.5 text-[11px] font-semibold text-[#263a30] transition-colors group-hover:bg-[#e9e0d2]">
          {priceType === 'bundle' ? (locale === 'fr' ? 'Voir le bundle' : 'View bundle') : (locale === 'fr' ? 'Voir le manuel' : 'View manual')} <span aria-hidden="true">→</span>
        </span>
      </div>
    </TrackedLink>
  )
}
