import { toActiveLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'

interface Props {
  locale: string
}

const expertiseCopy = {
  en: {
    tags: ['Front Office Operations', 'Multi-Department Management', 'SOP Design', 'Team Training & Briefings'],
    founder: 'Founder, LuxOps',
    badge: 'The Expertise Behind LuxOps',
    title: 'Built through day-to-day hotel operations.',
    intro:
      'LuxOps comes from years spent managing departments, supporting teams, and building structure where operations could not rely on improvisation. The procedures and tools presented here were developed in working hotels, under real service pressure, with the aim of making standards clearer, execution steadier, and onboarding easier.',
    proof:
      'They exist because they solved real operational needs, and they remain useful because they were built to be used by teams, not just reviewed by management.',
  },
  fr: {
    tags: ['Opérations Front Office', 'Management Multi-Départements', 'Conception de SOPs', 'Formation & Briefings Équipes'],
    founder: 'Fondateur, LuxOps',
    badge: 'L’Expertise Derrière LuxOps',
    title: 'Construit au fil des opérations hôtelières quotidiennes.',
    intro:
      'LuxOps vient d’années passées à gérer des départements, accompagner des équipes et construire des structures là où l’exploitation ne pouvait pas reposer sur l’improvisation. Les procédures et outils présentés ici ont été développés dans des hôtels en activité, sous une vraie pression de service, avec pour objectif de rendre les standards plus clairs, l’exécution plus stable et l’intégration plus simple.',
    proof:
      'Ils existent parce qu’ils répondaient à de vrais besoins opérationnels, et ils restent utiles parce qu’ils ont été conçus pour être utilisés par les équipes, pas seulement consultés par le management.',
  },
  es: {
    tags: ['Operaciones Front Office', 'Gestión multi-departamento', 'Diseño de SOPs', 'Formación y briefings de equipo'],
    founder: 'Fundador, LuxOps',
    badge: 'La experiencia detrás de LuxOps',
    title: 'Construido desde la operación hotelera diaria.',
    intro:
      'LuxOps nace de años gestionando departamentos, acompañando equipos y creando estructura donde la operación no podía depender de la improvisación. Los procedimientos y herramientas presentados aquí se desarrollaron en hoteles en funcionamiento, bajo presión real de servicio, con el objetivo de hacer los estándares más claros, la ejecución más estable y el onboarding más sencillo.',
    proof:
      'Existen porque resolvieron necesidades operativas reales, y siguen siendo útiles porque fueron diseñados para ser usados por los equipos, no solo revisados por la dirección.',
  },
} satisfies Partial<Record<Locale, {
  tags: string[]
  founder: string
  badge: string
  title: string
  intro: string
  proof: string
}>>

export default function ExpertiseSection({ locale }: Props) {
  const activeLocale = toActiveLocale(locale)
  const copy = expertiseCopy[activeLocale as keyof typeof expertiseCopy] ?? expertiseCopy.en

  return (
    <section className="border-t border-[rgba(32,35,31,0.14)] bg-[#f5f1e9] px-6 py-24 md:px-16">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div className="border-y border-[rgba(32,35,31,0.14)] py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">
            {copy.badge}
          </p>
          <p className="mt-10 font-display text-[5rem] italic leading-none text-[rgba(15,33,26,0.12)] md:text-[8rem]">
            15
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#687169]">
            {copy.founder}
          </p>
        </div>

        <div>
          <h2 className="font-display text-[2.55rem] font-medium leading-[1.08] text-[#0f211a] md:text-[3.45rem]">
            {copy.title}
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-8 text-[#5d665f]">
            <p>{copy.intro}</p>
            <p className="border-l border-[#a58658] pl-6 font-display text-2xl italic leading-snug text-[#0f211a]">
              {copy.proof}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {copy.tags.map((tag, i) => (
              <span
                key={i}
                className="border border-[rgba(36,54,47,0.22)] px-3 py-2 text-xs font-semibold text-[#4f5a52]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
