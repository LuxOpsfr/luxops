import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { trainingPathways } from '@/content/training-pathways'

export default function TrainingPathwayCards({ locale }: { locale: string }) {
  if (locale !== 'fr' && locale !== 'en') return null
  const fr = locale === 'fr'
  const names = { fo: 'Front Office', hsk: 'Housekeeping', fb: 'F&B', spa: 'Spa' }
  const programmes = [
    ...(['fo', 'hsk', 'fb', 'spa'] as const).map(key => ({
      href: `/${locale}/${trainingPathways[key].slug}`,
      title: names[key],
      image: trainingPathways[key].image,
      alt: trainingPathways[key][locale].imageAlt,
      text: trainingPathways[key][locale].promise,
    })),
    {
      href: fr ? '/fr/formation-revenue-management-hotel' : '/en/hotel-revenue-management-training',
      title: 'Revenue Management',
      image: '/images/editorial-hospitality/training-roundtable-wide-v3.jpg',
      alt: fr ? 'Équipe hôtelière réunie autour de ses méthodes de travail' : 'Hotel team discussing working methods',
      text: fr ? 'Reliez stratégie tarifaire, analyse de la demande et développement commercial pour mieux décider et agir ensemble.' : 'Connect pricing strategy, demand insights and commercial development to make better decisions and act together.',
    },
  ]
  return <section id="department-training" className="scroll-mt-28 border-y border-[#e7e1d7] bg-[#f3efe7] px-5 py-12 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-[1440px]">
      <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#92734a]">{fr ? 'Formations par département' : 'Training by department'}</p>
      <h2 className="mt-2 font-display text-3xl leading-tight text-[#0f211a] sm:text-4xl">{fr ? 'Faites progresser chaque métier de votre hôtel.' : 'Develop excellence across your hotel.'}</h2>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">{programmes.map(programme => <Link key={programme.href} href={programme.href} className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#e4ded3] bg-white shadow-[0_10px_28px_rgba(25,42,32,.04)] transition hover:border-[#a58658] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#92734a]">
        <div className="relative aspect-[1.45] overflow-hidden"><Image src={programme.image} alt={programme.alt} fill sizes="(min-width: 1280px) 270px, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"/><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"/><h3 className="absolute bottom-4 left-4 right-3 font-display text-[1.4rem] leading-tight text-white">{programme.title}</h3></div>
        <div className="flex flex-1 flex-col p-5"><p className="text-sm leading-6 text-[#626b64]">{programme.text}</p><span className="mt-auto pt-6"><span className="flex min-h-11 items-center justify-between gap-2 rounded-full bg-[#f3efe7] px-4 py-3 text-xs font-semibold text-[#173025] transition group-hover:bg-[#173025] group-hover:text-white">{fr ? 'Découvrir la formation' : 'Explore the training'}<ArrowRight size={15} className="shrink-0"/></span></span></div>
      </Link>)}</div>
    </div>
  </section>
}
