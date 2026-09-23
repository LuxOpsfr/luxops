import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { toActiveLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import { alternatesForRoute, localizedRouteUrl } from '@/lib/localized-routes'

const aboutMetadata = {
  en: {
    title: 'About LuxOps | Hotel Operations Specialists',
    description:
      'LuxOps provides structured operational methods for high-end hotels. Playbooks, SOPs, audits and training built from years of real hotel operations experience.',
  },
  fr: {
    title: 'À Propos de LuxOps | Spécialistes des Opérations Hôtelières',
    description:
      "LuxOps propose des méthodes opérationnelles structurées pour hôtels haut de gamme. Playbooks, SOPs, audits et formations issus de l'exploitation hôtelière réelle.",
  },
  es: {
    title: 'Sobre LuxOps | Especialistas en operaciones hoteleras',
    description:
      'LuxOps ofrece métodos operativos estructurados para hoteles high-end: playbooks, SOPs, auditorías y formación creados desde años de experiencia real en operaciones hoteleras.',
  },
} satisfies Partial<Record<Locale, { title: string; description: string }>>

const experienceCopy = {
  en: {
    eyebrow: 'The experience behind the methods',
    title: '15 years of operations turned into practical frameworks.',
    paragraphs: [
      'LuxOps was built from 15 years spent in luxury hotel operations and management, including experience with Four Seasons and La Réserve, managing departments, developing teams and building the procedures required to maintain consistent service in demanding environments.',
      'Over those years, SOPs were not simply written. They were implemented, explained to teams, tested during real operations, challenged by exceptions, adjusted when necessary and reinforced by managers.',
      'That experience also included developing and training teams around demanding quality benchmarks such as LQA, Forbes Travel Guide and American Express Fine Hotels + Resorts program expectations, using these frameworks to understand service expectations, observe execution and strengthen consistency.',
      'LuxOps translates that operating experience into independently authored manuals and training resources designed to give hotels a structured starting point they can adapt to their own identity, standards and operating model.',
    ],
    proof: ['15 years in luxury hospitality', 'Teams of 100+ employees', 'Multi-department management', 'SOP implementation & team development'],
  },
  fr: {
    eyebrow: 'L’expérience derrière les méthodes',
    title: '15 années d’opérations transformées en cadres pratiques.',
    paragraphs: [
      'LuxOps est né de 15 années passées dans les opérations et le management hôtelier haut de gamme, notamment chez Four Seasons et La Réserve, à manager des départements, développer les équipes et construire les procédures nécessaires pour maintenir un niveau de service constant dans des environnements exigeants.',
      'Durant ces années, les SOP n’ont pas simplement été rédigées. Elles ont été déployées, expliquées aux équipes, testées dans les opérations quotidiennes, confrontées aux cas particuliers, ajustées lorsque nécessaire et maintenues par les managers.',
      'Cette expérience comprend également le développement et la formation des équipes autour de référentiels de qualité exigeants tels que LQA, Forbes Travel Guide et les attentes du programme American Express Fine Hotels + Resorts, utilisés comme cadres de référence pour comprendre les attentes de service, observer l’exécution et renforcer la régularité.',
      'LuxOps transpose cette expérience dans des manuels et supports de formation rédigés de manière indépendante, afin de donner aux hôtels une base structurée qu’ils peuvent adapter à leur identité, à leurs standards et à leur propre modèle opérationnel.',
    ],
    proof: ['15 ans dans l’hôtellerie haut de gamme', 'Équipes de plus de 100 collaborateurs', 'Management multi-départements', 'Déploiement SOP & développement des équipes'],
  },
  es: {
    eyebrow: 'La experiencia detrás de los métodos',
    title: '15 años de operaciones convertidos en marcos prácticos.',
    paragraphs: [
      'LuxOps nace de 15 años en operaciones y gestión hotelera de lujo, incluyendo experiencia en Four Seasons y La Réserve, liderando departamentos, desarrollando equipos y creando los procedimientos necesarios para mantener un servicio consistente en entornos exigentes.',
      'Durante esos años, los SOP no se limitaron a ser redactados. Se implantaron, explicaron a los equipos, probaron en operaciones reales, confrontaron con excepciones, ajustaron cuando fue necesario y reforzaron a través de los managers.',
      'La experiencia también incluyó desarrollar y formar equipos alrededor de referencias de calidad exigentes, utilizadas para comprender las expectativas de servicio, observar la ejecución y reforzar la consistencia.',
      'LuxOps convierte esa experiencia operativa en manuales y recursos de formación de autoría independiente, diseñados para dar a los hoteles una base estructurada que puedan adaptar a su identidad, estándares y modelo operativo.',
    ],
    proof: ['15 años en hotelería de lujo', 'Equipos de más de 100 empleados', 'Gestión multi-departamento', 'Implantación de SOP y desarrollo de equipos'],
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const activeLocale = toActiveLocale(locale)
  const metadata = aboutMetadata[activeLocale as keyof typeof aboutMetadata] ?? aboutMetadata.en
  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: localizedRouteUrl('about', activeLocale),
      languages: alternatesForRoute('about'),
    },
  }
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <AboutContent locale={locale} />
}

function AboutContent({ locale }: { locale: string }) {
  const t = useTranslations('about_page')
  const activeLocale = toActiveLocale(locale)
  const experience = experienceCopy[activeLocale as keyof typeof experienceCopy] ?? experienceCopy.en

  const values = [
    { title: t('v1_title'), desc: t('v1_desc') },
    { title: t('v2_title'), desc: t('v2_desc') },
    { title: t('v3_title'), desc: t('v3_desc') },
  ]

  return (
    <div className="bg-[#f5f1e9] pt-[var(--site-header-height)] text-[#0f211a]">
      <section className="border-b border-[rgba(32,35,31,0.14)] px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-[1320px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">LuxOps</p>
          <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.04] md:text-7xl">{t('title')}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5d665f]">{t('subtitle')}</p>
        </div>
      </section>
      <section className="bg-[#fcfbf8] px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">{experience.eyebrow}</p>
            <h2 className="mt-5 font-display text-[2.4rem] font-medium leading-[1.08] text-[#0f211a] md:text-[3.2rem]">{experience.title}</h2>
          </div>
          <div>
            <div className="space-y-5 text-base leading-8 text-[#5d665f]">
              {experience.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-9 grid gap-px bg-[rgba(32,35,31,0.14)] sm:grid-cols-2">
              {experience.proof.map((item, index) => (
                <div key={item} className="bg-[#fcfbf8] px-5 py-5">
                  <span className="text-[0.68rem] font-semibold text-[#a58658]">{String(index + 1).padStart(2, '0')}</span>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#24362f]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="font-display text-4xl font-medium">{t('values_title')}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <div key={value.title} className="border-t border-[rgba(32,35,31,0.2)] pt-5">
                <span className="text-xs font-semibold text-[#a58658]">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-display text-2xl">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5d665f]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
