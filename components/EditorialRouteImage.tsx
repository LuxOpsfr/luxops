import Image from 'next/image'
import { editorialImageUrl, resourceEditorialImages } from '@/lib/editorial-images'

export default function EditorialRouteImage({ route, alt, locale = 'fr' }: { route: string; alt: string; locale?: string }) {
  const file = resourceEditorialImages[route]
  if (!file) return null

  return (
    <figure className="mx-auto my-12 w-full max-w-[900px] px-6">
      <Image
        src={editorialImageUrl(file, locale)}
        alt={alt}
        width={1080}
        height={675}
        sizes="(max-width: 900px) 100vw, 900px"
        className="aspect-[16/10] w-full rounded-[1.5rem] border border-[#e7e1d7] object-cover shadow-[0_18px_42px_rgba(40,40,30,.08)]"
      />
    </figure>
  )
}
