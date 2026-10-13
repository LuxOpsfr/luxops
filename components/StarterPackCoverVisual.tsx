'use client'

import Image from 'next/image'
import { StarterPackEntry } from '@/content/starter-packs/data'

export default function StarterPackCoverVisual({
  pack,
  locale,
}: {
  pack: StarterPackEntry
  locale: string
}) {
  const lang = locale === 'fr' ? 'fr' : 'en'
  const department = pack.id.replace('-starter-pack', '')
  const coverPath = `/product-previews/2027-starter-packs/${department}/${lang}/page-01.webp`

  return (
    <div className="group relative mx-auto aspect-square w-full overflow-hidden rounded-[30px] border border-[#e5ddcf] bg-[radial-gradient(ellipse_at_50%_42%,#fffefa_0%,#f3ecdf_68%,#e9e0d0_100%)] shadow-[0_24px_60px_rgba(50,42,30,.16)] sm:rounded-[36px]">
      <div className="pointer-events-none absolute inset-x-[12%] bottom-[9%] h-[12%] rounded-full bg-[#26372c]/15 blur-2xl" />
      <div className="absolute left-[23%] top-[7%] h-[86%] w-[64%] rounded-[5px] bg-[#f9f6ef] shadow-[10px_14px_26px_rgba(32,35,31,.12)]" />
      <div className="absolute left-[22%] top-[6.5%] h-[87%] w-[64%] rounded-[5px] bg-[#eee9df] shadow-[5px_12px_22px_rgba(32,35,31,.12)]" />
      <div className="absolute left-[20%] top-[6%] h-[88%] w-[62%] overflow-hidden rounded-[6px] bg-[#10251d] shadow-[0_24px_42px_rgba(15,33,26,.28)] transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:rotate-[-1deg]">
        <Image
          src={coverPath}
          alt={pack.title[lang]}
          fill
          priority
          sizes="(min-width: 1024px) 32vw, 90vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[3.5%] bg-gradient-to-r from-black/20 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[1.2%] bg-white/20" />
      </div>
    </div>
  )
}
