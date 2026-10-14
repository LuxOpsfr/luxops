import Image from 'next/image'
import type { ReactNode } from 'react'

type ChecklistEditorialHeroProps = {
  eyebrow: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  imageAspect?: '4/3' | '3/2' | '16/10'
  children: ReactNode
}

export default function ChecklistEditorialHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  imageAspect = '4/3',
  children,
}: ChecklistEditorialHeroProps) {
  const aspectClass = {
    '4/3': 'aspect-[4/3]',
    '3/2': 'aspect-[3/2]',
    '16/10': 'aspect-[16/10]',
  }[imageAspect]

  return (
    <section className="bg-[#f5f1e9] px-5 pb-12 pt-[calc(var(--site-header-height)+2rem)] md:px-8 md:pb-16 md:pt-[calc(var(--site-header-height)+2.75rem)]">
      <div className="mx-auto grid max-w-[1320px] items-center gap-8 lg:grid-cols-[1.04fr_.96fr] lg:gap-14">
        <div className="max-w-[610px]">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#a58658] md:mb-5">
            {eyebrow}
          </p>
          <h1 className="mb-5 font-display text-[clamp(2.25rem,5vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.035em] text-[#0f211a]">
            {title}
          </h1>
          <p className="max-w-[590px] text-base leading-7 text-[#5d665f] md:text-lg md:leading-8">
            {description}
          </p>
          <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {children}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[680px] rounded-[1.75rem] border border-[#e7e1d7] bg-white p-2 shadow-[0_22px_54px_rgba(15,33,26,0.12)] lg:ml-auto">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1800}
            height={1200}
            priority
            sizes="(max-width: 1024px) 100vw, 42vw"
            className={`${aspectClass} w-full rounded-[1.35rem] object-cover`}
          />
        </div>
      </div>
    </section>
  )
}
