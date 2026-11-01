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
  variant?: 'standard' | 'wide'
  placement?: string
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
  variant = 'standard',
  placement = 'sticky_article_offer',
}: ArticleManualCardProps) {
  const wide = variant === 'wide'
  return (
    <TrackedLink
      href={href}
      eventName="playbook_cta_clicked"
      eventProperties={{ source_page: sourcePage ?? `/${locale}/blog/${articleSlug}`, placement, article_slug: articleSlug }}
      aria-label={`${locale === 'fr' ? 'Voir l’offre' : 'View offer'} ${department}`}
      className={`group overflow-hidden rounded-[1.35rem] border border-[#dfd4c1] bg-white text-[#0f211a] shadow-[0_10px_28px_rgba(43,40,32,.09)] transition duration-300 hover:-translate-y-0.5 hover:border-[#cdb78f] hover:shadow-[0_16px_34px_rgba(43,40,32,.14)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a58658] ${wide ? 'grid grid-cols-[112px_minmax(0,1fr)] sm:grid-cols-[220px_minmax(0,1fr)]' : 'block'}`}
    >
      <div className={`relative overflow-hidden bg-[#e9e2d4] ${wide ? 'min-h-full' : 'aspect-[1.8]'}`}>
        <Image src={image} alt={imageAlt} fill sizes={wide ? '(max-width: 640px) 224px, 440px' : '480px'} className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(16,31,24,.82), rgba(16,31,24,.08) 62%, transparent)' }} />
        <span className={`absolute left-3 top-3 rounded-full border border-white/40 bg-[#faf7f2]/90 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[.1em] text-[#263a30] backdrop-blur-sm ${wide ? 'max-sm:hidden' : ''}`}>{department}</span>
        <span className={`absolute bottom-3 left-3 right-3 font-display font-medium leading-tight text-white ${wide ? 'hidden text-lg sm:block' : 'text-lg'}`}>{title}</span>
      </div>
      <div className={wide ? 'min-w-0 p-3 sm:p-5' : 'p-4'}>
        {wide && <p className="mb-1 font-display text-base font-medium leading-tight text-[#0f211a] sm:hidden">{title}</p>}
        <p className={`leading-[1.55] text-[#59655b] ${wide ? 'text-xs sm:text-sm' : 'text-[11px]'}`}>{description}</p>
        {note && <p className={`mt-2 font-semibold leading-4 text-[#806138] ${wide ? 'text-xs' : 'text-[10px]'}`}>{note}</p>}
        <p className={`mt-2 leading-4 text-[#59655b] ${wide ? 'text-xs' : 'text-[10px]'}`}>{locale === 'fr' ? 'PDF et PPTX modifiables · FR et EN' : 'Editable PDF and PPTX · EN and FR'}</p>
        <div className={`mt-3 flex items-center justify-between border-t border-[#eee9e0] pt-2.5 ${wide ? 'text-xs' : 'text-[11px]'}`}>
          <span className="text-[#59655b]">{priceType === 'bundle' ? (locale === 'fr' ? 'Bundle complet' : 'Complete bundle') : (locale === 'fr' ? 'Manuel SOP complet' : 'Complete SOP manual')}</span>
          <PriceDisplay productType={priceType} className="font-semibold text-[#25382d]" />
        </div>
        <span className={`mt-3 flex min-h-9 items-center justify-between rounded-full bg-[#f4f0e8] px-3.5 font-semibold text-[#263a30] transition-colors group-hover:bg-[#e9e0d2] ${wide ? 'text-xs' : 'text-[11px]'}`}>
          {priceType === 'bundle' ? (locale === 'fr' ? 'Voir le bundle' : 'View bundle') : (locale === 'fr' ? 'Voir le manuel' : 'View manual')} <span aria-hidden="true">→</span>
        </span>
      </div>
    </TrackedLink>
  )
}
