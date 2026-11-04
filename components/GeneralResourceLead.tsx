import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowRight, BookOpen, Check } from 'lucide-react'

type Props = {
  locale: 'en' | 'fr'
  eyebrow: string
  title: string
  intro: string
  answerTitle: string
  answerIntro: string
  points: string[]
  source: string
}

export default function GeneralResourceLead({ locale, eyebrow, title, intro, answerTitle, answerIntro, points, source }: Props) {
  const en = locale === 'en'
  const departments = [
    { image: 'dept-front-office-v2.jpg', alt: en ? 'Hotel front desk' : 'Réception d’hôtel' },
    { image: 'dept-housekeeping-v2.jpg', alt: en ? 'Hotel housekeeping' : 'Service housekeeping hôtelier' },
    { image: 'dept-food-beverage-v2.jpg', alt: en ? 'Hotel restaurant service' : 'Service de restauration hôtelière' },
  ]

  return (
    <>
      <section className="border-b border-[#e8e0d2] bg-[#fcfbf8] px-5 pb-12 pt-16 text-[#10251d] md:px-8 md:pb-16 md:pt-20">
        <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#96764a]">{eyebrow}</p>
            <h1 className="font-display max-w-[850px] text-[clamp(2.3rem,4.7vw,5rem)] leading-[1.04] tracking-[-0.045em]">{title}</h1>
            <p className="mt-6 max-w-[700px] text-lg leading-relaxed text-[#58645c] md:text-xl">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#practical-answer" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#10251d] px-6 text-sm font-semibold text-white transition hover:bg-[#244536]">
                {en ? 'See the practical answer' : 'Voir la réponse pratique'} <ArrowDown size={17} />
              </a>
              <Link href={`/${locale}/playbooks#department-playbooks`} className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#cbb998] bg-white px-6 text-sm font-semibold text-[#10251d] transition hover:bg-[#f4eee3]">
                {en ? 'Explore the SOP manuals' : 'Découvrir les manuels SOP'} <ArrowRight size={17} />
              </Link>
            </div>
            <p className="mt-5 text-xs text-[#68736a]">{en ? 'Five departments · Editable PDF & PowerPoint · English & French' : 'Cinq départements · PDF et PowerPoint modifiables · Français et anglais'}</p>
          </div>
          <div className="hidden overflow-hidden rounded-[30px] border border-[#ddceb8] bg-[#eee5d6] shadow-[0_25px_60px_rgba(16,37,29,0.08)] md:block">
            <div className="grid h-[260px] grid-cols-3 gap-1 overflow-hidden md:h-[340px]">
              {departments.map((department, index) => (
                <div key={department.image} className="relative overflow-hidden">
                  <Image src={`/images/editorial-hospitality/${department.image}`} alt={department.alt} fill sizes="(max-width: 1024px) 33vw, 220px" className="object-cover object-center" priority={index === 0} />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-6">
              <span className="flex items-center gap-2 text-sm font-semibold"><BookOpen size={17} className="text-[#96764a]" />{en ? 'Five department manuals' : 'Cinq manuels par département'}</span>
              <Link href={`/${locale}/playbooks#department-playbooks`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#10251d] underline decoration-[#cbb998] underline-offset-4">{en ? 'See the catalogue' : 'Voir le catalogue'} <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section id="practical-answer" className="scroll-mt-28 bg-[#f4efe6] px-5 py-12 text-[#10251d] md:px-8 md:py-16">
        <div id="article-offer-start" className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#96764a]">{en ? 'Start here' : 'Par où commencer'}</p>
            <h2 className="font-display text-3xl leading-tight tracking-[-0.035em] md:text-5xl">{answerTitle}</h2>
            <p className="mt-4 max-w-[800px] leading-relaxed text-[#58645c]">{answerIntro}</p>
            <ol className="mt-7 overflow-hidden rounded-[24px] border border-[#e6ddcf] bg-white shadow-[0_10px_30px_rgba(16,37,29,0.04)]">
              {points.map((point, index) => (
                <li key={point} className="grid grid-cols-[auto_1fr] gap-4 border-b border-[#eee9e0] px-5 py-4 last:border-0 md:px-7">
                  <span className="font-display text-lg leading-snug text-[#a88b62]">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-sm leading-relaxed text-[#34453b] md:text-base">{point}</span>
                </li>
              ))}
            </ol>
          </div>
          <aside className="rounded-[26px] border border-[#ddceb8] bg-[#fcfbf8] p-6 shadow-[0_12px_32px_rgba(16,37,29,0.05)] md:p-7 lg:sticky lg:top-28">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#96764a]">{en ? 'Put it into practice' : 'Passer à la pratique'}</span>
            <h3 className="font-display mt-3 text-2xl leading-tight">{en ? 'Give each team a clear operating reference.' : 'Donnez à chaque équipe une référence opérationnelle claire.'}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#58645c]">{en ? 'The LuxOps catalogue brings together five department SOP manuals and their practical tools. Read a sample, then choose the scope that fits your hotel.' : 'Le catalogue LuxOps réunit cinq manuels SOP départementaux et leurs outils pratiques. Consultez un extrait, puis choisissez le périmètre adapté à votre hôtel.'}</p>
            <ul className="mt-5 space-y-2 text-sm text-[#34453b]">
              {(en ? ['Procedures by department', 'Editable operational tools', 'French and English files'] : ['Procédures par département', 'Outils opérationnels modifiables', 'Fichiers français et anglais']).map((item) => <li key={item} className="flex items-start gap-2"><Check size={17} className="mt-0.5 shrink-0 text-[#96764a]" />{item}</li>)}
            </ul>
            <Link href={`/${locale}/playbooks#department-playbooks`} data-source={source} className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#10251d] px-5 text-sm font-semibold text-white transition hover:bg-[#244536]">{en ? 'Explore the five manuals' : 'Découvrir les cinq manuels'} <ArrowRight size={17} /></Link>
            <Link href={`/${locale}/free-hotel-procedures`} className="mt-3 inline-flex min-h-10 w-full items-center justify-center gap-2 text-sm font-semibold text-[#10251d] underline decoration-[#cbb998] underline-offset-4">{en ? 'Receive a free sample chapter' : 'Recevoir un chapitre gratuit'} <ArrowRight size={15} /></Link>
          </aside>
        </div>
      </section>
    </>
  )
}
