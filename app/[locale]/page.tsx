import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import HomeManuals from '@/components/HomeManuals'
import { ACTIVE_LOCALES, toActiveLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import { alternatesForRoute, localizedRoutePath, localizedRouteUrl } from '@/lib/localized-routes'

const imageBase = '/images/editorial-hospitality'

const homeMetadata = {
  en: {
    title: 'LuxOps | Hotel Operations Playbooks & Training',
    description:
      'Operational playbooks and on-site or remote training to help high-end hotels structure, communicate and apply their standards across Front Office, Housekeeping, F&B and Spa teams.',
  },
  fr: {
    title: 'LuxOps | Playbooks opérationnels et formation hôtelière',
    description:
      'Playbooks opérationnels et formations sur site ou à distance pour aider les hôtels haut de gamme à structurer, transmettre et appliquer leurs standards en Front Office, Housekeeping, F&B et Spa.',
  },
  es: {
    title: 'LuxOps | Playbooks operativos y formación hotelera',
    description:
      'Playbooks operativos y formación presencial o remota para ayudar a hoteles high-end a estructurar, comunicar y aplicar sus estándares en Front Office, Housekeeping, F&B y Spa.',
  },
} satisfies Partial<Record<Locale, { title: string; description: string }>>

type HomeCopy = {
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    primary: string
    secondary: string
  }
  paths: {
    title: string
    text: string
    cta: string
  }[]
  departments: {
    eyebrow: string
    title: string
    text: string
    items: {
      title: string
      text: string
    }[]
  }
  problem: {
    eyebrow: string
    title: string
    points: {
      title: string
      text: string
    }[]
  }
  products: {
    eyebrow: string
    title: string
    cta: string
  }
  services: {
    eyebrow: string
    title: string
    text: string[]
    items: {
      title: string
      text: string
    }[]
    cta: string
  }
  expertise: {
    eyebrow: string
    title: string
    text: string[]
    proof: string[]
  }
  cta: {
    title: string
    text: string
    primary: string
    secondary: string
  }
}

const homeCopy = {
  en: {
    hero: {
      eyebrow: 'Hotel SOPs · Operational training',
      title: 'Clearer standards. Better prepared teams.',
      subtitle:
        'Ready-to-adapt operational manuals and practical training for hotel teams. Save time building procedures, strengthen day-to-day execution and give managers a clearer framework to train, coach and maintain service standards.',
      primary: 'Explore SOP Manuals',
      secondary: 'Explore Training',
    },
    paths: [
      {
        title: 'I need ready-to-use operating standards.',
        text: 'SOP manuals, procedures, checklists and scripts designed to give managers a structured starting point without rebuilding everything from scratch.',
        cta: 'Explore SOP Manuals',
      },
      {
        title: 'I need my team to apply it consistently.',
        text: 'On-site or remote training to turn standards into behaviours, strengthen management routines and improve consistency on the floor.',
        cta: 'Explore Training',
      },
    ],
    departments: {
      eyebrow: 'Expertise by department',
      title: 'Operational standards built for each department.',
      text: 'Front Office standards are not delivered in the same way as Housekeeping, restaurant or Spa standards. Our content reflects the pace, control points and service expectations of each discipline.',
      items: [
        {
          title: 'Front Office',
          text: 'Arrivals and departures, shift handovers, guest communication, upselling, Night Audit, Guest Relations, Concierge and Porter Services.',
        },
        {
          title: 'Housekeeping',
          text: 'Room standards, cleaning sequences, inspections, turndown, task allocation and supervisor controls.',
        },
        {
          title: 'F&B',
          text: 'Mise en place, service sequences, table standards, upselling, team briefings and quality control.',
        },
        {
          title: 'Spa & Wellness',
          text: 'Guest journey, consultation, treatment room preparation, hygiene, therapist standards and experience follow-up.',
        },
      ],
    },
    problem: {
      eyebrow: 'From expectation to execution',
      title: 'Excellence should not depend on who is on shift.',
      points: [
        {
          title: 'Save management time',
          text: 'Start from a structured operating base instead of creating procedures, training tools and checklists from scratch.',
        },
        {
          title: 'Align the team',
          text: 'Give managers and team members one shared reference for expectations, routines and service standards.',
        },
        {
          title: 'Improve consistency',
          text: 'Reduce variations between shifts, supervisors and individual ways of working.',
        },
      ],
    },
    products: {
      eyebrow: 'Operational SOP manuals',
      title: 'Ready to use. Built to adapt.',
      cta: 'View all operational resources',
    },
    services: {
      eyebrow: 'On-site or remote training',
      title: 'Turn standards into daily practice.',
      text: [
        'Practical training built around your property, your teams and the realities of hotel operations.',
      ],
      items: [
        {
          title: 'Service standards training',
          text: 'Align teams around the expected behaviours, service sequences and control points.',
        },
        {
          title: 'SOP implementation',
          text: 'Adapt LuxOps content to your organisation, systems, roles and service identity.',
        },
        {
          title: 'Onboarding and refreshers',
          text: 'Structure new-hire training and bring existing teams back to a shared operating standard.',
        },
        {
          title: 'Manager coaching',
          text: 'Give department leaders the tools to brief, observe, correct and reinforce standards every day.',
        },
      ],
      cta: 'Discuss Your Training Needs',
    },
    expertise: {
      eyebrow: 'The experience behind LuxOps',
      title: 'Built in hotels, not in theory.',
      text: [
        'LuxOps draws on 15 years of experience in luxury hotel operations and management, including Four Seasons and La Réserve.',
        'Over those years, procedures were written, tested, implemented and refined with teams in real operating conditions, while managers and employees were trained around demanding service frameworks including LQA, Forbes Travel Guide and American Express Fine Hotels + Resorts program expectations.',
        'LuxOps turns that experience into independently authored, structured operational resources designed to be adapted to each property.',
      ],
      proof: ['15 years in luxury hospitality', '100+ team environments', 'Multi-department operations', 'Luxury service frameworks & SOP implementation'],
    },
    cta: {
      title: 'What does your hotel need to standardise?',
      text: 'Start with a ready-to-adapt SOP manual, or speak with us about training your managers and teams.',
      primary: 'Explore SOP Manuals',
      secondary: 'Discuss Training',
    },
  },
  fr: {
    hero: {
      eyebrow: 'SOP hôtelières · Formation opérationnelle',
      title: 'Des standards plus clairs. Des équipes mieux préparées.',
      subtitle:
        'Des manuels opérationnels prêts à adapter et des formations conçues pour les équipes hôtelières. Gagnez du temps dans la structuration de vos procédures, renforcez l’exécution au quotidien et donnez aux managers un cadre plus clair pour former et maintenir les standards de service.',
      primary: 'Découvrir les manuels SOP',
      secondary: 'Découvrir les formations',
    },
    paths: [
      {
        title: 'Je veux structurer mes procédures.',
        text: 'Des manuels SOP, procédures, checklists et scripts pour donner aux managers une base claire sans tout reconstruire à partir d’une page blanche.',
        cta: 'Découvrir les manuels SOP',
      },
      {
        title: 'Je veux les faire appliquer sur le terrain.',
        text: 'Des formations sur site ou à distance pour transformer les standards en comportements, renforcer les pratiques managériales et gagner en régularité opérationnelle.',
        cta: 'Découvrir les formations',
      },
    ],
    departments: {
      eyebrow: 'Une expertise par département',
      title: 'Des standards conçus pour la réalité de chaque département.',
      text: 'Les standards d’un Front Office ne se structurent pas comme ceux du Housekeeping, du restaurant ou du Spa. Nos contenus reprennent les rythmes, les points de contrôle, les responsabilités et les moments de vérité propres à chaque département.',
      items: [
        {
          title: 'Front Office',
          text: 'Préparation des arrivées, check-in et check-out, passations de consignes, communication client, upselling, Night Audit, Guest Relations, conciergerie et bagagerie.',
        },
        {
          title: 'Housekeeping',
          text: 'Standards chambre, séquences de nettoyage, inspections, service de couverture, répartition des tâches, statuts de chambre et contrôles superviseur.',
        },
        {
          title: 'F&B',
          text: 'Mise en place, séquences de service, standards de table, vente additionnelle, briefings, gestion des réclamations et contrôle de la qualité.',
        },
        {
          title: 'Spa & Wellness',
          text: 'Parcours client, consultation, préparation cabine, hygiène, standards thérapeutes, prise en charge et suivi de l’expérience.',
        },
      ],
    },
    problem: {
      eyebrow: 'De la consigne au réflexe',
      title: 'Le niveau de service ne devrait jamais dépendre de l’équipe en poste.',
      points: [
        {
          title: 'Gagner du temps managérial',
          text: 'Partez d’une base opérationnelle structurée au lieu de reconstruire procédures, supports et checklists.',
        },
        {
          title: 'Aligner les équipes',
          text: 'Donnez aux managers et aux collaborateurs un référentiel commun sur les pratiques et les attentes.',
        },
        {
          title: 'Gagner en régularité',
          text: 'Réduisez les écarts entre shifts, managers et façons individuelles de travailler.',
        },
      ],
    },
    products: {
      eyebrow: 'Manuels de procédures opérationnelles',
      title: 'Prêts à l’emploi. Conçus pour être adaptés.',
      cta: 'Voir toutes les ressources opérationnelles',
    },
    services: {
      eyebrow: 'Formation sur site ou à distance',
      title: 'Faire passer les standards du document au terrain.',
      text: [
        'Des formations concrètes, adaptées à votre établissement, à vos équipes et à la réalité de votre exploitation.',
      ],
      items: [
        {
          title: 'Formation aux standards de service',
          text: 'Aligner les équipes sur les comportements attendus, les séquences de service et les points de contrôle propres à leur département.',
        },
        {
          title: 'Déploiement des procédures',
          text: 'Adapter les contenus LuxOps à votre organisation, vos systèmes, vos rôles, vos procédures internes et votre identité de service.',
        },
        {
          title: 'Intégration et remise à niveau',
          text: 'Structurer l’onboarding des nouvelles recrues et remettre les équipes en poste autour d’un référentiel commun.',
        },
        {
          title: 'Accompagnement des managers',
          text: 'Donner aux chefs de département les outils nécessaires pour briefer, observer, corriger et renforcer les standards au quotidien.',
        },
      ],
      cta: 'Parler de mon besoin de formation',
    },
    expertise: {
      eyebrow: 'L’expérience derrière LuxOps',
      title: 'Conçu sur le terrain, pas dans la théorie.',
      text: [
        'LuxOps s’appuie sur 15 années d’expérience dans les opérations et le management hôtelier haut de gamme, notamment chez Four Seasons et La Réserve.',
        'Au fil de ces années, des procédures ont été rédigées, testées, déployées et améliorées avec les équipes en conditions réelles, tandis que managers et collaborateurs étaient formés autour de référentiels de service exigeants, notamment les critères LQA, Forbes Travel Guide et les attentes du programme American Express Fine Hotels + Resorts.',
        'LuxOps transforme cette expérience en ressources opérationnelles rédigées de manière indépendante, structurées et conçues pour être adaptées à chaque établissement.',
      ],
      proof: ['15 ans dans l’hôtellerie haut de gamme', 'Management d’équipes de 100+ collaborateurs', 'Opérations multi-départements', 'Standards de service & déploiement SOP'],
    },
    cta: {
      title: 'Que souhaitez-vous mieux structurer dans votre établissement ?',
      text: 'Commencez avec un manuel SOP prêt à adapter, ou échangeons sur la formation de vos managers et de vos équipes.',
      primary: 'Découvrir les manuels SOP',
      secondary: 'Parler de formation',
    },
  },
  es: {
    hero: {
      eyebrow: 'Playbooks operativos · Formación hotelera',
      title: 'Estándares claros. Equipos alineados. Ejecución constante.',
      subtitle:
        'Playbooks listos para adaptar y formación presencial o remota para estructurar prácticas, comunicar exigencias de servicio y fijar los buenos hábitos en cada departamento.',
      primary: 'Explorar Playbooks',
      secondary: 'Formar al equipo',
    },
    paths: [
      {
        title: 'Necesito estructurar mis estándares.',
        text: 'Playbooks completos para documentar procedimientos, aclarar responsabilidades y dar a los managers una referencia operativa lista para usar.',
        cta: 'Explorar Playbooks',
      },
      {
        title: 'Necesito que el equipo los aplique.',
        text: 'Formación presencial o remota para alinear equipos, trabajar comportamientos esperados y convertir estándares en prácticas diarias.',
        cta: 'Explorar Formación',
      },
    ],
    departments: {
      eyebrow: 'Expertise por departamento',
      title: 'Cada disciplina tiene su propia realidad operativa.',
      text: 'Los estándares de Front Office no se estructuran igual que los de Housekeeping, restaurante o Spa. Nuestro contenido refleja los ritmos, controles y momentos clave de cada departamento.',
      items: [
        {
          title: 'Front Office',
          text: 'Llegadas y salidas, handovers, comunicación con huéspedes, upselling, Night Audit, Guest Relations, Concierge y Porter Services.',
        },
        {
          title: 'Housekeeping',
          text: 'Estándares de habitación, secuencias de limpieza, inspecciones, turndown, reparto de tareas y controles de supervisión.',
        },
        {
          title: 'F&B',
          text: 'Mise en place, secuencias de servicio, estándares de mesa, upselling, briefings y control de calidad.',
        },
        {
          title: 'Spa & Wellness',
          text: 'Guest journey, consulta, preparación de cabinas, higiene, estándares de terapeutas y seguimiento de la experiencia.',
        },
      ],
    },
    problem: {
      eyebrow: 'De la consigna a la ejecución',
      title: 'El nivel de servicio no debería depender del equipo de turno.',
      points: [
        {
          title: 'Una referencia común',
          text: 'Dé a cada colaborador una visión clara de lo que se espera en cada etapa del servicio.',
        },
        {
          title: 'Transmisión estructurada',
          text: 'Use los mismos estándares en onboarding, briefings, refreshers y coaching en la operación.',
        },
        {
          title: 'Ejecución más constante',
          text: 'Ayude a los managers a observar prácticas, corregir brechas y mantener el nivel en el tiempo.',
        },
      ],
    },
    products: {
      eyebrow: 'Playbooks operativos',
      title: 'Deje de construir estándares desde una página en blanco.',
      cta: 'Explorar Playbooks',
    },
    services: {
      eyebrow: 'Formación presencial o remota',
      title: 'Un estándar solo crea valor cuando se convierte en comportamiento.',
      text: [
        'Convertimos estándares en sesiones de formación prácticas, adaptadas a su propiedad, sus equipos y la realidad del servicio.',
        'El objetivo no es solo presentar procedimientos. Es aclarar expectativas, practicar comportamientos y dar a los managers herramientas para mantenerlos en el tiempo.',
      ],
      items: [
        {
          title: 'Formación en estándares de servicio',
          text: 'Alinear equipos alrededor de comportamientos, secuencias de servicio y puntos de control.',
        },
        {
          title: 'Implementación de playbooks',
          text: 'Adaptar los contenidos LuxOps a su organización, sistemas, roles e identidad de servicio.',
        },
        {
          title: 'Onboarding y refreshers',
          text: 'Estructurar la formación de nuevos perfiles y realinear equipos existentes.',
        },
        {
          title: 'Coaching para managers',
          text: 'Dar a los responsables herramientas para briefeos, observación, corrección y refuerzo diario.',
        },
      ],
      cta: 'Hablar de formación',
    },
    expertise: {
      eyebrow: 'La experiencia detrás de LuxOps',
      title: 'Creado en hoteles, no en la teoría.',
      text: [
        'LuxOps se apoya en 15 años de experiencia en operaciones y gestión hotelera de lujo, incluyendo Four Seasons y La Réserve.',
        'Durante esos años, los procedimientos se redactaron, probaron, implantaron y mejoraron con los equipos en condiciones operativas reales, mientras managers y colaboradores trabajaban con marcos de servicio exigentes.',
        'LuxOps convierte esa experiencia en recursos operativos de autoría independiente, estructurados y diseñados para adaptarse a cada establecimiento.',
      ],
      proof: ['15 años en hotelería de lujo', 'Entornos de más de 100 colaboradores', 'Operaciones multi-departamento', 'Estándares de servicio e implantación de SOP'],
    },
    cta: {
      title: '¿Qué estándares necesita estructurar o reforzar en su propiedad?',
      text: 'Empiece con un playbook listo para adaptar, o construyamos un recorrido de formación para sus managers y equipos.',
      primary: 'Explorar Playbooks',
      secondary: 'Hablar de formación',
    },
  },
} satisfies Partial<Record<Locale, HomeCopy>>

const orgSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.luxops.fr/#organization',
      name: 'LuxOps',
      url: 'https://www.luxops.fr',
      description: 'Operational playbooks, SOP frameworks and on-property training for high-end hotels.',
      contactPoint: { '@type': 'ContactPoint', email: 'contact@luxops.fr', contactType: 'customer service' },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.luxops.fr/#website',
      name: 'LuxOps',
      url: 'https://www.luxops.fr',
      publisher: { '@id': 'https://www.luxops.fr/#organization' },
      inLanguage: [...ACTIVE_LOCALES],
    },
  ],
}

const departmentImages = [
  {
    src: `${imageBase}/dept-front-office-v2.jpg`,
    alt: 'Luxury hotel front desk prepared for guest arrivals.',
  },
  {
    src: `${imageBase}/dept-housekeeping-v2.jpg`,
    alt: 'Prepared luxury guest room with calm housekeeping cues.',
  },
  {
    src: `${imageBase}/dept-food-beverage-v2.jpg`,
    alt: 'Fine dining restaurant table prepared before service.',
  },
  {
    src: `${imageBase}/dept-spa-wellness-v2.jpg`,
    alt: 'Luxury spa treatment room prepared before opening.',
  },
]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const activeLocale = toActiveLocale(locale)
  const metadata = homeMetadata[activeLocale as keyof typeof homeMetadata] ?? homeMetadata.en
  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: localizedRouteUrl('home', activeLocale),
      languages: alternatesForRoute('home'),
    },
  }
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const activeLocale = toActiveLocale(locale)
  const copy = homeCopy[activeLocale as keyof typeof homeCopy] ?? homeCopy.en

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <div className="bg-[#f5f1e9] pt-[var(--site-header-height)] text-[#20231f]">
        <section className="hero-viewport grid border-b border-[rgba(32,35,31,0.14)] lg:grid-cols-[42%_58%]">
          <div className="flex flex-col justify-center px-6 py-12 md:px-16 lg:py-6 xl:px-16 2xl:px-20">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658] lg:mb-4 xl:mb-6">
              {copy.hero.eyebrow}
            </p>
            <h1 className="max-w-[650px] font-display text-[2.65rem] font-medium leading-[1.04] text-[#0f211a] md:text-[3.15rem] lg:text-[2.55rem] xl:text-[3.15rem] 2xl:text-[4rem]">
              {copy.hero.title}
            </h1>
            <p className="mt-6 max-w-[560px] text-lg leading-8 text-[#5d665f] md:text-xl lg:mt-5 lg:text-base lg:leading-7 xl:mt-6 xl:text-xl xl:leading-8">
              {copy.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col flex-wrap gap-4 sm:flex-row lg:mt-6 xl:mt-8">
              <Link
                href={localizedRoutePath('playbooks', activeLocale)}
                className="inline-flex items-center justify-center gap-2 bg-[#0f211a] px-6 py-4 text-sm font-semibold text-[#f5f1e9] transition-colors hover:bg-[#24362f] sm:whitespace-nowrap"
              >
                {copy.hero.primary}
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
              <Link
                href={localizedRoutePath('training', activeLocale)}
                className="inline-flex items-center justify-center border border-[#24362f] px-6 py-4 text-sm font-semibold text-[#24362f] transition-colors hover:bg-[#e7e0d5] sm:whitespace-nowrap"
              >
                {copy.hero.secondary}
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center px-6 py-10 md:px-16 lg:px-5 lg:py-6 xl:px-8">
            <div className="relative w-full max-w-[1120px]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{ backgroundColor: '#e7e0d5', transform: 'translate(10px, 14px)' }}
              />
              <div className="relative aspect-[1896/830] overflow-hidden">
                <Image
                  src={`${imageBase}/hero-reception-natural-v4.png`}
                  alt="Hotel operations team discussing service standards in a luxury lobby before service."
                  fill
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[rgba(32,35,31,0.14)]">
          <div className="grid md:grid-cols-2">
            {copy.paths.map((path, index) => (
              <Link
                key={path.title}
                href={index === 0 ? localizedRoutePath('playbooks', activeLocale) : localizedRoutePath('training', activeLocale)}
                className="group relative min-h-[520px] overflow-hidden border-t border-[rgba(32,35,31,0.14)] md:min-h-[600px] md:border-r"
              >
                <Image
                  src={index === 0 ? `${imageBase}/playbooks-flatlay.jpg` : `${imageBase}/training-team-natural-v4.png`}
                  alt={index === 0 ? 'Hotel operational playbooks and procedure checklists prepared for a team briefing.' : 'Hotel team gathered around a table for an operational training session.'}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 bg-[rgba(9,18,14,0.16)] transition-colors duration-500 group-hover:bg-[rgba(9,18,14,0.25)]" />
                <span className="absolute inset-x-0 bottom-0 h-[78%] bg-gradient-to-t from-[rgba(6,14,10,0.94)] via-[rgba(6,14,10,0.56)] to-transparent" />
                <span className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[rgba(6,14,10,0.28)] to-transparent" />
                <span className="image-card-copy absolute inset-x-0 bottom-0 flex min-h-[300px] flex-col justify-end p-8 text-[#fcfbf8] md:p-14 lg:p-16">
                  <span className="block min-h-[6.4rem] max-w-[700px] font-display text-[2.15rem] font-medium leading-[1.06] md:text-[2.65rem] 2xl:text-[3.05rem]">
                    {path.title}
                  </span>
                  <span className="mt-4 block min-h-[5.8rem] max-w-[600px] text-sm leading-6 text-[rgba(252,251,248,0.9)] md:text-base md:leading-7">
                    {path.text}
                  </span>
                  <span className="mt-7 inline-flex w-fit items-center gap-2 border-b border-[rgba(252,251,248,0.82)] pb-1 text-sm font-semibold text-[#fcfbf8]">
                    {path.cta}
                    <ArrowRight size={15} strokeWidth={1.5} />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="viewport-section px-6 py-14 md:px-16 md:py-18 lg:py-16">
          <div className="mx-auto max-w-[1680px]">
            <div className="mb-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">
                  {copy.departments.eyebrow}
                </p>
                <h2 className="font-display text-[2.35rem] font-medium leading-[1.08] text-[#0f211a] md:text-[3.25rem]">
                  {copy.departments.title}
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5d665f]">
                  {copy.departments.text}
                </p>
              </div>
              <div className="hidden h-px w-72 bg-[rgba(32,35,31,0.14)] lg:block" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {copy.departments.items.map((department, index) => (
                <Link
                  key={department.title}
                  href={localizedRoutePath('playbooks', activeLocale)}
                  className={`group block ${index % 2 === 1 ? 'lg:mt-10' : ''}`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#e7e0d5]">
                    <Image
                      src={departmentImages[index].src}
                      alt={departmentImages[index].alt}
                      fill
                      loading="eager"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[rgba(15,33,26,0.74)] to-transparent" />
                    <span className="absolute bottom-5 left-5 right-5 font-display text-2xl font-medium leading-tight text-[#fcfbf8] md:text-3xl">
                      {department.title}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#5d665f]">
                    {department.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[rgba(32,35,31,0.14)] bg-[#e7e0d5] px-6 py-20 md:px-16 md:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">
              {copy.problem.eyebrow}
            </p>
            <h2 className="mx-auto max-w-4xl text-center font-display text-[2.45rem] font-medium leading-[1.1] text-[#0f211a] md:text-[3.55rem]">
              {copy.problem.title}
            </h2>
            <div className="mt-16 grid gap-10 md:grid-cols-3">
              {copy.problem.points.map((point, index) => (
                <div key={point.title} className="border-t border-[rgba(32,35,31,0.18)] pt-7">
                  <span className="font-display text-5xl italic text-[rgba(15,33,26,0.18)]">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-[#24362f]">
                    {point.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#5d665f]">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sop-manuals" className="scroll-mt-24 px-6 py-16 md:px-16 md:py-20">
          <div className="mx-auto max-w-[1500px]">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">
                {copy.products.eyebrow}
              </p>
              <h2 className="mt-6 font-display text-[2.45rem] font-medium leading-[1.1] text-[#0f211a] md:text-[3.25rem]">
                {copy.products.title}
              </h2>
            </div>
            <HomeManuals locale={activeLocale} allResourcesLabel={copy.products.cta} />
          </div>
        </section>

        <section className="border-y border-[rgba(32,35,31,0.14)] bg-[#fcfbf8] px-6 py-14 md:px-16 lg:py-0">
          <div className="viewport-section mx-auto grid max-w-[1680px] gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#e7e0d5] lg:aspect-[4/3]">
              <Image
                src={`${imageBase}/training-team-natural-v4.png`}
                alt="Hotel team gathered around a table during an operational training session."
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center lg:py-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">
                {copy.services.eyebrow}
              </p>
              <h2 className="mt-5 font-display text-[2.25rem] font-medium leading-[1.1] text-[#0f211a] md:text-[3rem]">
                {copy.services.title}
              </h2>
              <div className="mt-5 max-w-2xl space-y-4 text-base leading-7 text-[#5d665f] md:text-lg md:leading-8">
                {copy.services.text.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8">
                {copy.services.items.map((item, index) => (
                  <div key={item.title} className="grid grid-cols-[4rem_1fr] border-t border-[rgba(32,35,31,0.14)] py-4 last:border-b">
                    <span className="font-display italic text-[#a58658]">{String(index + 1).padStart(2, '0')}.</span>
                    <span>
                      <span className="block font-semibold text-[#24362f]">{item.title}</span>
                      <span className="mt-1.5 block text-sm leading-6 text-[#5d665f]">{item.text}</span>
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href={localizedRoutePath('training', activeLocale)}
                className="mt-8 inline-flex w-fit items-center gap-2 border border-[#24362f] px-8 py-4 text-sm font-semibold text-[#24362f] transition-colors hover:bg-[#24362f] hover:text-[#f5f1e9]"
              >
                {copy.services.cta}
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-16 md:py-24">
          <div className="mx-auto max-w-[1320px]">
            <div className="grid gap-10 border-y border-[rgba(32,35,31,0.14)] py-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-20 lg:py-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">
                  {copy.expertise.eyebrow}
                </p>
                <h2 className="mt-6 max-w-xl font-display text-[2.4rem] font-medium leading-[1.08] text-[#0f211a] md:text-[3.35rem]">
                  {copy.expertise.title}
                </h2>
              </div>
              <div>
                <div className="max-w-3xl space-y-5 text-base leading-8 text-[#5d665f] md:text-lg">
                {copy.expertise.text.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                </div>
              </div>
            </div>
            <div className="grid gap-px bg-[rgba(32,35,31,0.14)] sm:grid-cols-2 lg:grid-cols-4">
              {copy.expertise.proof.map((item, index) => (
                <div key={item} className="bg-[#f5f1e9] px-5 py-6">
                  <span className="text-[0.68rem] font-semibold text-[#a58658]">{String(index + 1).padStart(2, '0')}</span>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[#24362f]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0f211a] px-6 py-20 text-center text-[#f5f1e9] md:px-16 md:py-28">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display text-[2.45rem] font-medium leading-[1.08] md:text-[3.7rem]">
              {copy.cta.title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[rgba(245,241,233,0.72)]">
              {copy.cta.text}
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href={localizedRoutePath('playbooks', activeLocale)}
                className="inline-flex items-center justify-center gap-2 bg-[#f5f1e9] px-8 py-4 text-sm font-semibold text-[#0f211a] transition-colors hover:bg-[#fcfbf8]"
              >
                {copy.cta.primary}
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
              <Link
                href={localizedRoutePath('training', activeLocale)}
                className="inline-flex items-center justify-center border border-[#f5f1e9] px-8 py-4 text-sm font-semibold text-[#f5f1e9] transition-colors hover:bg-[#24362f]"
              >
                {copy.cta.secondary}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
