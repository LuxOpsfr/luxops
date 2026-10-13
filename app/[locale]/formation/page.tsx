import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, CalendarDays, Check, ClipboardCheck, Download, GraduationCap, MapPin, MonitorPlay, Star, UsersRound, UserRoundCog, Workflow } from 'lucide-react'
import SamePageAnchor from '@/components/SamePageAnchor'
import TrackedLink from '@/components/TrackedLink'
import TrainingQuoteForm from '@/components/TrainingQuoteForm'
import { toActiveLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import { alternatesForRoute, localizedRoutePath, localizedRouteUrl } from '@/lib/localized-routes'
import { redirect } from 'next/navigation'

const trainingMetadata = {
  en: {
    title: 'Hotel Training & Operational Development | LuxOps',
    description: 'Tailored hotel training and operational support for service excellence, leadership, employee development, hotel systems and operational change.',
  },
  fr: {
    title: 'Formation et accompagnement opérationnel hôtelier | LuxOps',
    description: 'Formation et accompagnement hôtelier sur mesure : excellence de service, management, développement des équipes, outils et organisation.',
  },
  es: {
    title: 'Formación y desarrollo operativo hotelero | LuxOps',
    description: 'Formación y acompañamiento hotelero a medida en excelencia de servicio, liderazgo, desarrollo de equipos, sistemas y operaciones.',
  },
} satisfies Partial<Record<Locale, { title: string; description: string }>>

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const activeLocale = toActiveLocale(locale)
  const metadata = trainingMetadata[activeLocale as keyof typeof trainingMetadata] ?? trainingMetadata.en
  return {
    title: metadata.title,
    description: metadata.description,
    alternates: { canonical: localizedRouteUrl('training', activeLocale), languages: alternatesForRoute('training') },
  }
}

export default async function FormationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== 'fr') redirect(localizedRoutePath('training', locale))
  return <FormationContent locale={locale} />
}

const content = {
  fr: {
    eyebrow: 'Formations & accompagnement opérationnel hôtelier',
    title: 'Faites grandir vos équipes. Renforcez vos opérations. Élevez vos standards.',
    intro: 'De l’excellence de service à l’accompagnement managérial, du développement des compétences au déploiement des outils hôteliers, LuxOps propose des formations et un accompagnement sur mesure pour faire progresser vos équipes et optimiser vos opérations au quotidien.',
    introSecondary: 'Dans votre établissement ou à distance, en français ou en anglais, nos interventions s’adaptent à vos équipes, à votre organisation et à vos priorités opérationnelles.',
    mainCta: 'Demander une proposition sur mesure',
    imageAlt: 'Une formatrice accompagne une équipe hôtelière lors d’une session lumineuse dans un hôtel',
    expertiseLabel: 'Nos domaines d’expertise',
    expertiseTitle: 'Bien au-delà des standards de service.',
    expertiseIntro: 'La qualité de l’expérience client ne repose pas uniquement sur les standards. Elle dépend aussi de managers capables d’accompagner leurs équipes, de collaborateurs bien formés, de procédures opérationnelles efficaces et d’outils parfaitement maîtrisés. LuxOps accompagne les établissements hôteliers autour de six domaines complémentaires, en associant formation terrain, expertise opérationnelle et mise en application concrète.',
    expertise: [
      { title: 'Excellence de service et standards hôteliers', text: 'Parcours client, standards de service, accueil et prise en charge personnalisée, gestion des réclamations, traitement des situations délicates et harmonisation des pratiques entre les services.', icon: Star },
      { title: 'Accompagnement managérial et leadership', text: 'Accompagnement des chefs de service et des managers de proximité : posture managériale, animation des briefings, délégation, feedback, suivi de la performance et montée en compétences des équipes.', icon: UserRoundCog },
      { title: 'Développement des compétences', text: 'Intégration des nouveaux collaborateurs, formation aux métiers, développement de la polyvalence et de l’autonomie, accompagnement des évolutions internes et formation de formateurs internes.', icon: GraduationCap },
      { title: 'Outils et solutions hôtelières', text: 'Accompagnement au déploiement et à la prise en main des outils métiers : PMS, POS, logiciels de housekeeping, CRM, plateformes de gestion de la relation client et autres solutions opérationnelles. Des formations pratiques pour permettre aux équipes d’exploiter pleinement leurs outils au quotidien.', icon: MonitorPlay },
      { title: 'Procédures et organisation opérationnelle', text: 'Création et optimisation des procédures opérationnelles (SOP), checklists, circuits de communication, méthodes de contrôle et coordination interservices pour gagner en efficacité et en régularité.', icon: Workflow },
      { title: 'Ouvertures et accompagnement au changement', text: 'Accompagnement des préouvertures, réouvertures et lancements de saison : préparation des équipes, mise en place des méthodes de travail, déploiement de nouvelles procédures et accompagnement des évolutions organisationnelles.', icon: Building2 },
    ],
    momentsLabel: 'Déploiement opérationnel',
    momentsTitle: 'Les moments clés de votre établissement',
    momentsIntro: 'L’accompagnement s’adapte au calendrier de votre établissement et aux priorités de vos équipes.',
    moments: [
      { title: 'Pré-ouverture', text: 'Préparer les équipes, les procédures et les outils avant l’accueil des premiers clients.', icon: MapPin },
      { title: 'Réouverture saisonnière', text: 'Remobiliser les équipes et remettre en place des méthodes de travail efficaces avant la saison.', icon: CalendarDays },
      { title: 'Évolution des opérations', text: 'Accompagner le déploiement de nouveaux outils, procédures ou modes d’organisation.', icon: ClipboardCheck },
      { title: 'Développement des managers', text: 'Renforcer le leadership et donner aux responsables des repères pour faire progresser leurs équipes.', icon: UsersRound },
    ],
    methodLabel: 'Démarche pédagogique',
    methodTitle: 'Une méthode en quatre temps.',
    methodIntro: 'Chaque intervention part de vos priorités opérationnelles, des réalités du terrain et des situations vécues par vos équipes.',
    steps: [
      { title: 'Cadrer', detail: 'Identifier les enjeux, les équipes concernées et les résultats recherchés.' },
      { title: 'Adapter', detail: 'Relier le contenu aux rôles, aux outils et aux pratiques de l’établissement.' },
      { title: 'Pratiquer', detail: 'Mettre en pratique les compétences, procédures ou outils dans le contexte réel.' },
      { title: 'Ancrer', detail: 'Donner aux managers des repères concrets pour ancrer les changements dans le temps.' },
    ],
    experienceLabel: 'Expérience opérationnelle',
    experienceTitle: 'Une expertise forgée sur le terrain.',
    experienceText: 'LuxOps s’appuie sur une expérience réelle des opérations hôtelières haut de gamme, du management d’équipes et du déploiement de méthodes de travail sur le terrain.',
    experienceStats: [
      { value: '15 ans', label: 'd’expérience opérationnelle' },
      { value: 'Terrain', label: 'process testés et déployés en établissement' },
      { value: 'Multi', label: 'départements intégrés' },
    ],
    tailoredLabel: 'Une approche adaptée à votre établissement',
    tailoredTitle: 'Des formations concrètes, ancrées dans vos opérations.',
    tailoredText: 'Qu’il s’agisse d’une formation ciblée, d’un accompagnement managérial ou d’un projet de transformation opérationnelle, chaque intervention est construite autour des besoins réels de votre établissement. Notre objectif ne se limite pas à transmettre des connaissances. Nous aidons vos équipes à les mettre en pratique, à gagner en autonomie et à adopter des méthodes de travail durables.',
    approachTitle: 'Découvrez notre approche',
    brochureText: 'Consultez notre brochure Formations & Accompagnement opérationnel hôtelier pour découvrir nos domaines d’expertise, nos formats d’intervention et notre méthode d’accompagnement.',
    brochureCta: 'Télécharger notre brochure (PDF)',
    contactLabel: 'Engager votre projet',
    contactTitle: 'Deux façons simples de démarrer.',
    contactIntro: 'Un premier échange pour préciser vos enjeux ou une demande de proposition pour décrire directement votre besoin.',
    meetingTitle: 'Échange de cadrage · 20 min',
    meetingMode: 'Visio ou téléphone',
    meetingText: 'Faisons le point sur vos priorités de formation et le format adapté à votre équipe.',
    meetingPoints: ['Échange autour de votre établissement', 'Recommandation de format sans engagement'],
    meetingCta: 'Réserver un échange de 20 min',
    formTitle: 'Demande de proposition personnalisée',
    formText: 'Quelques informations suffisent pour nous présenter le projet et les équipes concernées.',
    programme: 'Découvrir notre brochure',
    manualsTitle: 'Vous cherchez aussi des supports opérationnels ?',
    manualsText: 'Les Manuels SOP peuvent servir de base de travail pour vos équipes.',
    manualsCta: 'Découvrir les Manuels SOP',
  },
  en: {
    eyebrow: 'Hotel Training & Operational Development',
    title: 'Stronger teams. Smarter operations. Better service.',
    intro: 'From service excellence and management coaching to employee development and hotel technology adoption, LuxOps provides practical, tailored support to help hotels strengthen their teams and improve daily operations.',
    introSecondary: 'On-site or remote, in English or French, our programmes are designed around your property, your people and your operational priorities.',
    mainCta: 'Request a Tailored Proposal',
    imageAlt: 'A trainer guiding a hotel team in a bright hotel setting',
    expertiseLabel: 'Our expertise',
    expertiseTitle: 'Beyond service standards.',
    expertiseIntro: 'Exceptional hospitality relies on confident managers, well-trained employees, efficient processes and systems that teams know how to use. LuxOps supports hotels across six complementary areas, combining hands-on training, operational expertise and practical implementation.',
    expertise: [
      { title: 'Service Excellence', text: 'Guest journey, luxury service standards, complaint handling, service recovery and consistent departmental practices.', icon: Star },
      { title: 'Management & Leadership Coaching', text: 'Practical support for department heads and supervisors, covering leadership, delegation, team briefings, feedback and performance management.', icon: UserRoundCog },
      { title: 'Employee Development', text: 'Staff onboarding, skills development, role-specific training, career progression and train-the-trainer programmes.', icon: GraduationCap },
      { title: 'Hotel Systems & Technology', text: 'Operational rollout and adoption of PMS, POS, housekeeping platforms and guest management systems, with practical training for confident use.', icon: MonitorPlay },
      { title: 'Operational Processes & SOPs', text: 'Development and optimisation of procedures, checklists, workflows and cross-department coordination to improve efficiency and consistency.', icon: Workflow },
      { title: 'Openings & Operational Change', text: 'Hands-on support for pre-openings, reopenings, seasonal transitions, new procedures and changes to existing operating methods.', icon: Building2 },
    ],
    momentsLabel: 'Operational roll-out',
    momentsTitle: 'Key moments in your property',
    momentsIntro: 'Support is shaped around your property’s calendar, operational priorities and team development needs.',
    moments: [
      { title: 'Pre-opening', text: 'Prepare teams, procedures and hotel systems before welcoming the first guests.', icon: MapPin },
      { title: 'Seasonal reopening', text: 'Rebuild team confidence and working routines ahead of a new season.', icon: CalendarDays },
      { title: 'Operational change', text: 'Support the rollout of new tools, procedures or ways of organising work.', icon: ClipboardCheck },
      { title: 'Manager development', text: 'Strengthen leadership and give department heads practical ways to develop their teams.', icon: UsersRound },
    ],
    methodLabel: 'Training approach',
    methodTitle: 'A four-step process.',
    methodIntro: 'Each intervention starts with your operational priorities, the realities on the ground and the situations your teams face.',
    steps: [
      { title: 'Frame', detail: 'Identify the challenge, teams involved and the outcomes you want to achieve.' },
      { title: 'Adapt', detail: 'Connect the content to your property, roles, tools and current practices.' },
      { title: 'Practise', detail: 'Apply new skills, procedures or systems in real working situations.' },
      { title: 'Embed', detail: 'Give managers practical ways to support lasting change after the session.' },
    ],
    experienceLabel: 'Operational experience',
    experienceTitle: 'Expertise built in the field.',
    experienceText: 'LuxOps brings first-hand experience of high-end hotel operations, team management and putting practical ways of working into place across hotel departments.',
    experienceStats: [
      { value: '15 years', label: 'of operational experience' },
      { value: 'In practice', label: 'processes tested and deployed in properties' },
      { value: 'Multi', label: 'departments integrated' },
    ],
    tailoredLabel: 'Tailored to your hotel',
    tailoredTitle: 'Practical expertise. Measurable progress.',
    tailoredText: 'Whether you need a focused training session, ongoing management coaching or broader operational support, every intervention starts with an understanding of your hotel’s challenges. Our objective is to help your teams apply what they learn, build confidence and establish working methods that last.',
    approachTitle: 'Discover our approach',
    brochureText: 'Explore our Hotel Training & Operational Development brochure for a detailed overview of our expertise, intervention formats and approach.',
    brochureCta: 'Download Our Brochure (PDF)',
    contactLabel: 'Start your project',
    contactTitle: 'Two simple ways to get started.',
    contactIntro: 'Have an initial conversation about your priorities or send us a proposal request with the project details.',
    meetingTitle: 'Introductory call · 20 min',
    meetingMode: 'Video or phone',
    meetingText: 'Discuss your hotel’s priorities and the right support for your teams.',
    meetingPoints: ['Discuss your property and needs', 'A suggested format, with no commitment'],
    meetingCta: 'Book a 20-minute call',
    formTitle: 'Request a tailored proposal',
    formText: 'Tell us a little about the project and the teams involved.',
    programme: 'Download Our Brochure (PDF)',
    manualsTitle: 'Looking for operational materials too?',
    manualsText: 'SOP Manuals can provide a working reference for your teams.',
    manualsCta: 'Explore SOP Manuals',
  },
  es: {
    eyebrow: 'Formación hotelera · Desarrollo operativo',
    title: 'Equipos más sólidos. Operaciones más ágiles. Mejor servicio.',
    intro: 'Desde la excelencia en el servicio y el coaching de managers hasta el desarrollo de empleados y la adopción de tecnología hotelera, LuxOps ofrece un acompañamiento práctico y adaptado para fortalecer los equipos y mejorar las operaciones diarias.',
    introSecondary: 'Presencial o a distancia, en inglés o francés, cada programa se adapta al establecimiento, a sus equipos y a sus prioridades operativas.',
    mainCta: 'Solicitar una propuesta',
    imageAlt: 'Una formadora acompaña a un equipo hotelero en un espacio luminoso',
    expertiseLabel: 'Nuestras áreas de experiencia',
    expertiseTitle: 'Más allá de los estándares de servicio.',
    expertiseIntro: 'Una hospitalidad excepcional requiere managers seguros, equipos bien formados, procesos eficaces y sistemas que todos sepan utilizar. LuxOps acompaña a los hoteles en seis áreas complementarias.',
    expertise: [
      { title: 'Excelencia en el servicio', text: 'Experiencia del huésped, estándares de lujo, gestión de reclamaciones, recuperación del servicio y prácticas coherentes entre departamentos.', icon: Star },
      { title: 'Coaching de management y liderazgo', text: 'Acompañamiento práctico para responsables y supervisores: liderazgo, delegación, reuniones de equipo, feedback y rendimiento.', icon: UserRoundCog },
      { title: 'Desarrollo de empleados', text: 'Integración, desarrollo de competencias, formación por función, progresión profesional y formación de formadores.', icon: GraduationCap },
      { title: 'Sistemas y tecnología hotelera', text: 'Implantación y adopción de PMS, POS, plataformas de housekeeping y sistemas de gestión de huéspedes.', icon: MonitorPlay },
      { title: 'Procesos operativos y SOP', text: 'Desarrollo y optimización de procedimientos, listas de control, flujos de trabajo y coordinación entre departamentos.', icon: Workflow },
      { title: 'Aperturas y cambio operativo', text: 'Apoyo en preaperturas, reaperturas, transiciones de temporada y cambios en los métodos de trabajo.', icon: Building2 },
    ],
    momentsLabel: 'Despliegue operativo',
    momentsTitle: 'Momentos clave del establecimiento',
    momentsIntro: 'El acompañamiento se adapta al calendario del hotel, a sus prioridades operativas y al desarrollo de sus equipos.',
    moments: [
      { title: 'Preapertura', text: 'Preparar equipos, procedimientos y sistemas antes de recibir a los primeros huéspedes.', icon: MapPin },
      { title: 'Reapertura de temporada', text: 'Reactivar equipos y métodos de trabajo antes del inicio de la temporada.', icon: CalendarDays },
      { title: 'Cambio operativo', text: 'Acompañar la implantación de nuevas herramientas, procedimientos o formas de organización.', icon: ClipboardCheck },
      { title: 'Desarrollo de managers', text: 'Reforzar el liderazgo y ofrecer a los responsables herramientas para desarrollar sus equipos.', icon: UsersRound },
    ],
    methodLabel: 'Enfoque pedagógico',
    methodTitle: 'Un método en cuatro etapas.',
    methodIntro: 'Cada intervención parte de las prioridades operativas, la realidad del establecimiento y las situaciones de los equipos.',
    steps: [
      { title: 'Definir', detail: 'Identificar el reto, los equipos implicados y los resultados esperados.' },
      { title: 'Adaptar', detail: 'Relacionar el contenido con el hotel, sus funciones, herramientas y prácticas.' },
      { title: 'Practicar', detail: 'Aplicar habilidades, procedimientos o sistemas en situaciones reales.' },
      { title: 'Consolidar', detail: 'Dar a los managers recursos prácticos para mantener el cambio.' },
    ],
    experienceLabel: 'Experiencia operativa',
    experienceTitle: 'Experiencia construida en el terreno.',
    experienceText: 'LuxOps aporta experiencia directa en operaciones hoteleras de alta gama, gestión de equipos y puesta en marcha de métodos de trabajo prácticos en distintos departamentos.',
    experienceStats: [
      { value: '15 años', label: 'de experiencia operativa' },
      { value: 'Terreno', label: 'procesos probados e implantados' },
      { value: 'Multi', label: 'departamentos integrados' },
    ],
    tailoredLabel: 'Adaptado a tu hotel',
    tailoredTitle: 'Experiencia práctica. Avances medibles.',
    tailoredText: 'Tanto si necesitas una sesión concreta, coaching continuado para managers o un acompañamiento operativo más amplio, cada intervención empieza por comprender los retos de tu hotel. Nuestro objetivo es que los equipos apliquen lo aprendido, ganen confianza y consoliden métodos de trabajo duraderos.',
    approachTitle: 'Descubre nuestro enfoque',
    brochureText: 'Descubre nuestro folleto en inglés de Formación hotelera y desarrollo operativo para conocer nuestras áreas de experiencia, formatos de intervención y metodología.',
    brochureCta: 'Descargar el folleto en inglés (PDF)',
    contactLabel: 'Iniciar tu proyecto',
    contactTitle: 'Dos maneras sencillas de empezar.',
    contactIntro: 'Puedes hablar de tus prioridades o enviarnos una solicitud con los detalles del proyecto.',
    meetingTitle: 'Llamada inicial · 20 min',
    meetingMode: 'Vídeo o teléfono',
    meetingText: 'Hablemos de tus prioridades y del formato adecuado para el equipo.',
    meetingPoints: ['Conversación sobre tu establecimiento', 'Propuesta de formato sin compromiso'],
    meetingCta: 'Reservar una llamada de 20 min',
    formTitle: 'Solicitar una propuesta personalizada',
    formText: 'Cuéntanos brevemente el proyecto y los equipos participantes.',
    programme: 'Descargar el folleto en inglés (PDF)',
    manualsTitle: '¿Buscas también materiales operativos?',
    manualsText: 'Los Manuales SOP pueden servir como referencia de trabajo para los equipos.',
    manualsCta: 'Descubrir los Manuales SOP',
  },
}

const calendarUrl = 'https://calendly.com/contact-luxops/30min'

export function FormationContent({ locale }: { locale: string }) {
  const activeLocale = toActiveLocale(locale)
  const t = content[activeLocale as keyof typeof content] ?? content.en
  const brochureHref = '/downloads/training/luxops-hotel-training-operational-development-en.pdf'
  const programmeHref = brochureHref

  return (
    <main className="bg-[#faf7f2] pt-[var(--site-header-height)] text-[#20231f]">
      <section className="px-5 pb-9 pt-7 sm:px-8 lg:px-10 lg:pb-11 lg:pt-8">
        <div className="mx-auto grid max-w-[1440px] items-center gap-7 lg:grid-cols-[.93fr_1.07fr] lg:gap-9 xl:gap-12">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e7e0d5] bg-[#f0ece4] px-3.5 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-[#795d32]">{t.eyebrow}</p>
            <h1 className="max-w-[600px] font-display text-4xl font-medium leading-[1.08] tracking-[-.035em] text-[#0f211a] sm:text-5xl md:text-[3.5rem]">{t.title}</h1>
            <p className="mt-4 max-w-[570px] text-[14px] leading-6 text-[#626b64] md:text-[15px] md:leading-7">{t.intro}</p>
            <p className="mt-3 max-w-[570px] text-[13px] leading-6 text-[#626b64] md:text-sm">{t.introSecondary}</p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <SamePageAnchor href="#training-contact" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0f211a] px-5 text-[11px] font-semibold text-white shadow-[0_7px_20px_rgba(16,37,29,.13)] transition hover:-translate-y-0.5 hover:bg-[#263d31]">{t.mainCta}<ArrowRight size={14} /></SamePageAnchor>
              <TrackedLink href={programmeHref} download eventName="training_programme_download_clicked" eventProperties={{ locale: activeLocale, placement: 'training_hero' }} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#d7d1c5] bg-white/75 px-5 text-[11px] font-semibold text-[#24362f] transition hover:border-[#a58658] hover:bg-white"><Download size={14} />{t.programme}</TrackedLink>
            </div>
          </div>
          <div className="relative mx-auto aspect-[1.32] w-full max-w-[680px] overflow-hidden rounded-[28px] border border-[#e8e0d3] bg-[#eee8dc] shadow-[0_18px_42px_rgba(78,63,40,.13)] sm:rounded-[34px] lg:max-w-none">
            <Image src="/images/editorial-hospitality/training-brochure-cover.jpg" alt={t.imageAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-center transition-transform duration-700 hover:scale-[1.025]" />
          </div>
        </div>
      </section>

      <section className="border-y border-[#e7e1d7] bg-white/65 px-5 py-11 sm:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-7 max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#92734a]">{t.expertiseLabel}</p>
            <h2 className="mt-2 font-display text-2xl font-medium leading-tight text-[#0f211a] sm:text-3xl">{t.expertiseTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-[#697169]">{t.expertiseIntro}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {t.expertise.map((item, index) => {
              const Icon = item.icon
              return <article key={item.title} className="rounded-[1.25rem] border border-[#e8e2d7] bg-[#faf8f4] p-5 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_28px_rgba(40,40,30,.07)] sm:p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#efe7d9] text-[#806744]"><Icon size={18} strokeWidth={1.7} /></div>
                <p className="mt-5 font-display text-sm text-[#b39a6c]">0{index + 1}</p>
                <h3 className="mt-1 font-display text-lg font-medium leading-tight text-[#0f211a]">{item.title}</h3>
                <p className="mt-2 text-[12px] leading-5 text-[#687169]">{item.text}</p>
              </article>
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-[#e7e1d7] bg-white/65 px-5 py-11 sm:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-6 max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#92734a]">{t.momentsLabel}</p>
            <h2 className="mt-2 font-display text-2xl font-medium leading-tight text-[#0f211a] sm:text-3xl">{t.momentsTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-[#697169]">{t.momentsIntro}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {t.moments.map((item, index) => {
              const Icon = item.icon
              return <article key={item.title} className="group rounded-[1.25rem] border border-[#e8e2d7] bg-[#faf8f4] p-5 shadow-[0_7px_22px_rgba(40,40,30,.035)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_15px_32px_rgba(40,40,30,.08)]">
                <div className="flex items-center justify-between"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#efe7d9] text-[#806744]"><Icon size={17} /></span><span className="font-display text-xl text-[#c0a878]">0{index + 1}</span></div>
                <h3 className="mt-5 font-display text-lg font-medium leading-tight text-[#0f211a]">{item.title}</h3>
                <p className="mt-2 text-[12px] leading-5 text-[#687169]">{item.text}</p>
              </article>
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-11 sm:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto grid max-w-[1400px] gap-7 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <div className="max-w-md">
            <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#92734a]">{t.methodLabel}</p>
            <h2 className="mt-2 font-display text-2xl font-medium leading-tight text-[#0f211a] sm:text-3xl">{t.methodTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-[#697169]">{t.methodIntro}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {t.steps.map((step, index) => <article key={step.title} className="relative overflow-hidden rounded-[1.15rem] border border-[#e7e1d7] bg-white px-4 py-4 shadow-[0_6px_20px_rgba(40,40,30,.035)]">
              <span className="font-display text-2xl text-[#b59b6c]">0{index + 1}</span>
              <h3 className="mt-2 font-display text-lg font-medium text-[#0f211a]">{step.title}</h3>
              <p className="mt-1.5 text-[11px] leading-5 text-[#687169]">{step.detail}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#0f211a] px-5 py-10 text-[#f8f6f0] sm:px-8 lg:px-12 lg:py-12">
        <div className="mx-auto grid max-w-[1400px] gap-7 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#d3b77f]">{t.experienceLabel}</p>
            <h2 className="mt-2 max-w-xl font-display text-2xl font-medium leading-tight sm:text-3xl">{t.experienceTitle}</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">{t.experienceText}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {t.experienceStats.map((stat) => <div key={stat.label} className="rounded-[1.1rem] border border-white/15 bg-white/[.055] px-4 py-4">
              <p className="font-display text-2xl text-[#d3b77f]">{stat.value}</p>
              <p className="mt-1 text-[11px] leading-5 text-white/75">{stat.label}</p>
            </div>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:px-12 lg:py-12">
        <div className="mx-auto grid max-w-[1400px] gap-6 overflow-hidden rounded-[1.6rem] bg-[#0f211a] p-6 text-[#f8f6f0] shadow-[0_16px_40px_rgba(16,37,29,.11)] sm:p-8 lg:grid-cols-[1.3fr_.7fr] lg:items-center lg:p-10">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#d3b77f]">{t.tailoredLabel}</p>
            <h2 className="mt-2 max-w-2xl font-display text-2xl font-medium leading-tight sm:text-3xl">{t.tailoredTitle}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-white/75">{t.tailoredText}</p>
            <h3 className="mt-5 font-display text-base font-medium">{t.approachTitle}</h3>
            <p className="mt-1.5 max-w-3xl text-[12px] leading-5 text-white/65">{t.brochureText}</p>
          </div>
          <div className="flex lg:justify-end">
            <TrackedLink href={brochureHref} download eventName="training_programme_download_clicked" eventProperties={{ locale: activeLocale, placement: 'training_brochure' }} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#f4ead7] px-5 text-xs font-semibold text-[#173025] transition hover:-translate-y-0.5 hover:bg-white"><Download size={14} />{t.brochureCta}</TrackedLink>
          </div>
        </div>
      </section>

      <section id="training-contact" className="scroll-mt-24 px-5 py-11 sm:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-6 max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#92734a]">{t.contactLabel}</p>
            <h2 className="mt-2 font-display text-2xl font-medium leading-tight text-[#0f211a] sm:text-3xl">{t.contactTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-[#697169]">{t.contactIntro}</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-[.8fr_1.2fr]">
            <article className="relative flex flex-col overflow-hidden rounded-[1.45rem] bg-[#0f211a] p-6 text-[#f8f6f0] shadow-[0_14px_35px_rgba(16,37,29,.12)] sm:p-7">
              <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#d3b77f]"><CalendarDays size={18} /></div>
              <div className="relative mt-5 flex items-center justify-between gap-3"><h3 className="font-display text-xl font-medium">{t.meetingTitle}</h3><span className="shrink-0 rounded-full border border-white/20 px-3 py-1 text-[9px] font-semibold uppercase tracking-[.12em] text-white/65">{t.meetingMode}</span></div>
              <p className="relative mt-2 text-sm leading-6 text-white/70">{t.meetingText}</p>
              <ul className="relative mt-5 space-y-2">
                {t.meetingPoints.map((point) => <li key={point} className="flex items-start gap-2 text-[11px] leading-5 text-white/75"><Check size={13} className="mt-0.5 shrink-0 text-[#d3b77f]" />{point}</li>)}
              </ul>
              <TrackedLink href={calendarUrl} eventName="training_consultation_clicked" eventProperties={{ locale: activeLocale, placement: 'training_contact' }} target="_blank" rel="noopener noreferrer" className="relative mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#f4ead7] px-5 text-xs font-semibold text-[#173025] transition hover:-translate-y-0.5 hover:bg-white">{t.meetingCta}<ArrowRight size={14} /></TrackedLink>
            </article>
            <article className="rounded-[1.45rem] border border-[#e7e1d7] bg-white p-5 shadow-[0_10px_30px_rgba(44,40,31,.055)] sm:p-7">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div><div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.14em] text-[#92734a]"><ClipboardCheck size={14} />{t.contactLabel}</div><h3 className="mt-2 font-display text-xl font-medium text-[#0f211a]">{t.formTitle}</h3><p className="mt-1.5 text-xs leading-5 text-[#697169]">{t.formText}</p></div>
                <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f2ede3] text-[#806744] sm:flex"><MonitorPlay size={17} /></span>
              </div>
              <TrainingQuoteForm locale={locale} />
            </article>
          </div>
          <div className="mt-5 flex flex-col gap-4 rounded-[1.25rem] border border-[#e8e2d7] bg-[#f3eee5] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div><h3 className="font-display text-base font-medium text-[#0f211a]">{t.manualsTitle}</h3><p className="mt-1 text-xs text-[#687169]">{t.manualsText}</p></div>
            <Link href={localizedRoutePath('playbooks', activeLocale)} className="inline-flex w-fit shrink-0 items-center gap-2 text-xs font-semibold text-[#263a30] hover:text-[#92734a]">{t.manualsCta}<ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
    </main>
  )
}
