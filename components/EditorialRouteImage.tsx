import Image from 'next/image'
import { editorialImageUrl, resourceEditorialImages } from '@/lib/editorial-images'

export default function EditorialRouteImage({ route, alt, locale = 'fr' }: { route: string; alt: string; locale?: string }) {
  if (route === 'resources' || route === 'free-hotel-procedures') {
    const language = locale === 'en' ? 'en' : 'fr'
    const samples = language === 'fr'
      ? [
          '/product-previews/fo/fr/01-processus-check-in.webp',
          '/product-previews/hsk/fr/01-tableau-bord-qualite.webp',
          '/product-previews/fb/fr/01-sequence-service.webp',
        ]
      : [
          '/product-previews/fo/en/01-check-in-process.webp',
          '/product-previews/hsk/en/02-quality-control.webp',
          '/product-previews/fb/en/01-service-sequence.webp',
        ]

    return (
      <figure className="mx-auto my-12 w-full max-w-[900px] px-6">
        <div className="grid grid-cols-3 gap-2 bg-[#e7e0d5] p-3 sm:gap-4 sm:p-7">
          {samples.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`${alt} ${index + 1}`}
              width={1000}
              height={1413}
              sizes="(max-width: 900px) 30vw, 270px"
              className="aspect-[1000/1413] w-full bg-white object-cover"
            />
          ))}
        </div>
      </figure>
    )
  }

  const file = resourceEditorialImages[route]
  if (!file) return null

  return (
    <figure className="mx-auto my-12 w-full max-w-[900px] px-6">
      <Image
        src={editorialImageUrl(file)}
        alt={alt}
        width={1080}
        height={675}
        sizes="(max-width: 900px) 100vw, 900px"
        className="aspect-[16/10] w-full object-cover"
      />
    </figure>
  )
}
