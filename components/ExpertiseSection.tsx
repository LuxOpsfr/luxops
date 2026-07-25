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
    <section
      className="py-24 px-6 bg-white border-t"
      style={{ borderColor: 'rgba(195,198,214,0.15)' }}
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left - portrait + signature */}
        <div className="flex flex-col items-center lg:items-start gap-10">

          {/* Photo placeholder */}
          <div className="relative">
            <div
              className="w-52 h-52 flex items-center justify-center select-none"
              style={{
                backgroundColor: '#003d9b',
                borderRadius: '50%',
                boxShadow: '0 24px 64px rgba(0,61,155,0.22)',
              }}
            >
              {/* Abstract silhouette suggestion */}
              <svg viewBox="0 0 80 80" width="72" height="72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="28" r="14" fill="rgba(255,255,255,0.18)" />
                <path
                  d="M 12 72 C 12 52 28 44 40 44 C 52 44 68 52 68 72"
                  fill="rgba(255,255,255,0.14)"
                />
              </svg>
            </div>
            {/* Offset accent */}
            <div
              className="absolute -bottom-4 -right-4 w-20 h-20 pointer-events-none"
              style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem', zIndex: -1 }}
            />
          </div>

          {/* Signature + name */}
          <div>
            <svg
              viewBox="0 0 220 64"
              width="220"
              height="64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-3"
              aria-hidden="true"
            >
              {/* Main signature stroke */}
              <path
                d="M 8 48 C 14 24 22 18 32 32 C 40 44 48 22 58 28 C 67 34 70 46 80 38 C 90 30 94 16 106 22 C 118 28 122 50 134 34 C 144 20 154 38 168 30 C 180 23 186 40 198 34 C 206 30 210 38 214 34"
                stroke="#0a1d2e"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Underline accent */}
              <path
                d="M 28 54 C 70 60 140 57 200 52"
                stroke="#003d9b"
                strokeWidth="0.8"
                strokeLinecap="round"
                opacity="0.35"
              />
            </svg>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#737685]">
              {copy.founder}
            </p>
          </div>
        </div>

        {/* Right - bio */}
        <div className="space-y-6">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 text-[#003d9b] font-bold text-[10px] uppercase tracking-widest"
            style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
          >
            <span className="w-2 h-2 bg-[#003d9b] rounded-full" />
            {copy.badge}
          </div>

          <h2 className="font-display text-3xl lg:text-4xl font-extrabold tracking-tighter leading-tight text-[#0a1d2e]">
            {copy.title}
          </h2>

          <div className="space-y-4 text-[#4f6074] leading-relaxed">
            <p>{copy.intro}</p>
            <p
              className="font-display font-bold text-[#0a1d2e] text-base leading-snug"
              style={{ borderLeft: '3px solid #003d9b', paddingLeft: '1.25rem' }}
            >
              {copy.proof}
            </p>
          </div>

          {/* Credential tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {copy.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-xs font-bold text-[#003d9b]"
                style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
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
