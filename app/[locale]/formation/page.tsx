import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays, Check, ClipboardCheck, Download, MapPin, MonitorPlay, UsersRound } from 'lucide-react'
import SamePageAnchor from '@/components/SamePageAnchor'
import TrackedLink from '@/components/TrackedLink'
import TrainingQuoteForm from '@/components/TrainingQuoteForm'
import { toActiveLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import { alternatesForRoute, localizedRoutePath, localizedRouteUrl } from '@/lib/localized-routes'
import { redirect } from 'next/navigation'

const trainingMetadata = {
  en: {
    title: 'Service Standards Training | LuxOps',
    description: 'On-site and remote training to help hotel managers and teams apply service standards in day-to-day operations.',
  },
  fr: {
    title: 'Formation aux standards de service | LuxOps',
    description: 'Formations sur site ou à distance pour aider les managers et équipes hôtelières à appliquer les standards de service au quotidien.',
  },
  es: {
    title: 'Formación en estándares de servicio | LuxOps',
    description: 'Formación presencial y a distancia para ayudar a managers y equipos hoteleros a aplicar estándares de servicio.',
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
    eyebrow: 'Formation · Excellence opérationnelle',
    title: 'Transformer les standards en réflexes.',
    intro: 'Des sessions opérationnelles pour aider vos équipes à comprendre, appliquer et maintenir des standards de service clairs. Sur site ou à distance, en français ou en anglais, pour managers et équipes.',
    mainCta: 'Demander une proposition',
    secondCta: 'Réserver un échange de 20 min',
    imageAlt: 'Équipe hôtelière en réunion de travail autour des standards opérationnels',
    imageCaption: 'Formation & alignement · Mise en pratique des standards',
    proof: ['Sur site ou à distance', 'Français · English', 'Managers et équipes'],
    momentsLabel: 'Déploiement opérationnel',
    momentsTitle: 'Les moments clés de votre établissement',
    momentsIntro: 'La formation s’adapte au calendrier de votre établissement et aux besoins de vos équipes.',
    moments: [
      { title: 'Pré-ouverture', text: 'Préparer les équipes aux standards et aux séquences de service avant l’accueil des premiers clients.', icon: MapPin },
      { title: 'Réouverture saisonnière', text: 'Réactiver les pratiques et accompagner l’intégration des équipes avant le début de saison.', icon: CalendarDays },
      { title: 'Validation des acquis', text: 'Reprendre les procédures et renforcer leur application dans les opérations quotidiennes.', icon: ClipboardCheck },
      { title: 'Accompagnement des chefs de service', text: 'Aider les managers à transmettre les standards et à accompagner leurs équipes dans la durée.', icon: UsersRound },
    ],
    methodLabel: 'Démarche pédagogique',
    methodTitle: 'Une méthode en quatre temps.',
    methodIntro: 'Le contenu se construit autour des priorités de votre établissement et des situations rencontrées par vos équipes.',
    steps: [
      { title: 'Cadrer', detail: 'Identifier les priorités, les équipes concernées et les standards à travailler.' },
      { title: 'Adapter', detail: 'Relier les contenus aux espaces, aux rôles et aux pratiques de l’établissement.' },
      { title: 'Pratiquer', detail: 'Mettre en situation les séquences de service et les gestes attendus.' },
      { title: 'Ancrer', detail: 'Remettre des fiches de synthèse et aide-mémoires pour soutenir les managers.' },
    ],
    experienceLabel: 'Expérience opérationnelle',
    experienceTitle: 'Une expertise forgée sur le terrain.',
    experienceText: 'LuxOps s’appuie sur une expérience réelle des opérations hôtelières haut de gamme et du management d’équipes. Les interventions portent sur la clarté des gestes, la transmission des standards et leur application au quotidien.',
    experienceStats: [
      { value: '15 ans', label: 'd’expérience opérationnelle' },
      { value: 'Terrain', label: 'process testés et déployés en établissement' },
      { value: 'Multi', label: 'départements intégrés' },
    ],
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
    programme: 'Télécharger le programme type (PDF)',
    manualsTitle: 'Vous cherchez aussi des supports opérationnels ?',
    manualsText: 'Les Manuels SOP peuvent servir de base de travail pour vos équipes.',
    manualsCta: 'Découvrir les Manuels SOP',
  },
  en: {
    eyebrow: 'Training · Operational excellence',
    title: 'Turn standards into everyday habits.',
    intro: 'Practical sessions to help your teams understand, apply and maintain clear service standards. On site or remotely, in French or English, for managers and teams.',
    mainCta: 'Request a proposal',
    secondCta: 'Book a 20-minute call',
    imageAlt: 'Hotel team discussing operational standards',
    imageCaption: 'Training & alignment · Standards in practice',
    proof: ['On site or remote', 'French · English', 'Managers and teams'],
    momentsLabel: 'Operational roll-out',
    momentsTitle: 'Key moments in your property',
    momentsIntro: 'Training adapts to your property’s calendar and your teams’ needs.',
    moments: [
      { title: 'Pre-opening', text: 'Prepare teams for the standards and service sequences before welcoming the first guests.', icon: MapPin },
      { title: 'Seasonal reopening', text: 'Refresh practices and support team onboarding before the season begins.', icon: CalendarDays },
      { title: 'Knowledge reinforcement', text: 'Review procedures and strengthen their use in day-to-day operations.', icon: ClipboardCheck },
      { title: 'Department head support', text: 'Help managers communicate standards and support their teams over time.', icon: UsersRound },
    ],
    methodLabel: 'Training approach',
    methodTitle: 'A four-step process.',
    methodIntro: 'The content is shaped around your property’s priorities and the situations your teams encounter.',
    steps: [
      { title: 'Frame', detail: 'Identify priorities, teams involved and standards to work on.' },
      { title: 'Adapt', detail: 'Connect the content to the property, its roles and current practices.' },
      { title: 'Practise', detail: 'Work through service sequences and expected behaviours.' },
      { title: 'Reinforce', detail: 'Provide reference sheets and quick guides to support managers.' },
    ],
    experienceLabel: 'Operational experience',
    experienceTitle: 'Expertise built in the field.',
    experienceText: 'LuxOps draws on real high-end hotel operations and team management experience. Sessions focus on clear behaviours, communicating standards and applying them day to day.',
    experienceStats: [
      { value: '15 years', label: 'of operational experience' },
      { value: 'In practice', label: 'processes tested and deployed in properties' },
      { value: 'Multi', label: 'departments integrated' },
    ],
    contactLabel: 'Start your project',
    contactTitle: 'Two simple ways to get started.',
    contactIntro: 'Have an initial conversation about your priorities or send us a proposal request with the project details.',
    meetingTitle: 'Introductory call · 20 min',
    meetingMode: 'Video or phone',
    meetingText: 'Discuss your training priorities and a suitable format for your team.',
    meetingPoints: ['Discuss your property and needs', 'A suggested format, with no commitment'],
    meetingCta: 'Book a 20-minute call',
    formTitle: 'Request a tailored proposal',
    formText: 'Tell us a little about the project and the teams involved.',
    programme: 'Download the sample programme (PDF)',
    manualsTitle: 'Looking for operational materials too?',
    manualsText: 'SOP Manuals can provide a working reference for your teams.',
    manualsCta: 'Explore SOP Manuals',
  },
  es: {
    eyebrow: 'Formación · Excelencia operativa',
    title: 'Convertir los estándares en hábitos.',
    intro: 'Sesiones prácticas para ayudar a los equipos a comprender, aplicar y mantener estándares de servicio claros. Presenciales o a distancia, en francés o inglés, para managers y equipos.',
    mainCta: 'Solicitar una propuesta',
    secondCta: 'Reservar una llamada de 20 min',
    imageAlt: 'Equipo hotelero trabajando sobre estándares operativos',
    imageCaption: 'Formación y alineación · Aplicación de estándares',
    proof: ['Presencial o a distancia', 'Francés · English', 'Managers y equipos'],
    momentsLabel: 'Despliegue operativo',
    momentsTitle: 'Momentos clave del establecimiento',
    momentsIntro: 'La formación se adapta al calendario del establecimiento y a las necesidades de los equipos.',
    moments: [
      { title: 'Preapertura', text: 'Preparar a los equipos para los estándares y secuencias de servicio antes de recibir a los primeros clientes.', icon: MapPin },
      { title: 'Reapertura de temporada', text: 'Actualizar prácticas y acompañar la integración de los equipos antes de la temporada.', icon: CalendarDays },
      { title: 'Validación de conocimientos', text: 'Revisar procedimientos y reforzar su aplicación en las operaciones diarias.', icon: ClipboardCheck },
      { title: 'Acompañamiento a jefes de departamento', text: 'Ayudar a los managers a transmitir estándares y apoyar a sus equipos.', icon: UsersRound },
    ],
    methodLabel: 'Enfoque pedagógico',
    methodTitle: 'Un método en cuatro etapas.',
    methodIntro: 'El contenido se construye a partir de las prioridades del establecimiento y las situaciones de los equipos.',
    steps: [
      { title: 'Definir', detail: 'Identificar prioridades, equipos y estándares que se trabajarán.' },
      { title: 'Adaptar', detail: 'Relacionar el contenido con el establecimiento, sus funciones y prácticas.' },
      { title: 'Practicar', detail: 'Trabajar secuencias de servicio y comportamientos esperados.' },
      { title: 'Consolidar', detail: 'Entregar fichas de síntesis y guías para apoyar a los managers.' },
    ],
    experienceLabel: 'Experiencia operativa',
    experienceTitle: 'Experiencia construida en el terreno.',
    experienceText: 'LuxOps se basa en experiencia real en operaciones hoteleras de alta gama y gestión de equipos. Las sesiones trabajan la claridad de los gestos, la transmisión de estándares y su aplicación diaria.',
    experienceStats: [
      { value: '15 años', label: 'de experiencia operativa' },
      { value: 'Terreno', label: 'procesos probados e implantados' },
      { value: 'Multi', label: 'departamentos integrados' },
    ],
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
    programme: 'Descargar el programa tipo (PDF)',
    manualsTitle: '¿Buscas también materiales operativos?',
    manualsText: 'Los Manuales SOP pueden servir como referencia de trabajo para los equipos.',
    manualsCta: 'Descubrir los Manuales SOP',
  },
}

const calendarUrl = 'https://calendly.com/contact-luxops/30min'

export function FormationContent({ locale }: { locale: string }) {
  const activeLocale = toActiveLocale(locale)
  const t = content[activeLocale as keyof typeof content] ?? content.en
  const programmeHref = activeLocale === 'fr'
    ? '/downloads/training/programme-formation-standards-service-luxops-fr.pdf'
    : '/downloads/training/service-standards-training-programme-luxops-en.pdf'

  return (
    <main className="bg-[#faf7f2] pt-[var(--site-header-height)] text-[#20231f]">
      <section className="px-5 pb-9 pt-7 sm:px-8 lg:px-10 lg:pb-11 lg:pt-8">
        <div className="mx-auto grid max-w-[1440px] items-center gap-7 lg:grid-cols-[.93fr_1.07fr] lg:gap-9 xl:gap-12">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e7e0d5] bg-[#f0ece4] px-3.5 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-[#795d32]">{t.eyebrow}</p>
            <h1 className="max-w-[600px] font-display text-[clamp(2.15rem,3.2vw,3.15rem)] font-medium leading-[1.08] tracking-[-.035em] text-[#0f211a]">{t.title}</h1>
            <p className="mt-4 max-w-[570px] text-[14px] leading-6 text-[#626b64] md:text-[15px] md:leading-7">{t.intro}</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <SamePageAnchor href="#training-contact" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0f211a] px-5 text-[11px] font-semibold text-white shadow-[0_7px_20px_rgba(16,37,29,.13)] transition hover:-translate-y-0.5 hover:bg-[#263d31]">{t.mainCta}<ArrowRight size={14} /></SamePageAnchor>
              <TrackedLink href={calendarUrl} eventName="training_consultation_clicked" eventProperties={{ locale: activeLocale, placement: 'training_hero' }} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#d7d1c5] bg-white/75 px-5 text-[11px] font-semibold text-[#24362f] transition hover:border-[#a58658] hover:bg-white"><CalendarDays size={14} />{t.secondCta}</TrackedLink>
              <TrackedLink href={programmeHref} download eventName="training_programme_download_clicked" eventProperties={{ locale: activeLocale, placement: 'training_hero' }} className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-[11px] font-semibold text-[#526056] underline decoration-[#b49a6d] underline-offset-4 transition hover:text-[#92734a]"><Download size={14} />{t.programme}</TrackedLink>
            </div>
            <div className="mt-5 flex max-w-[590px] flex-wrap gap-2">
              {t.proof.map((item) => <span key={item} className="inline-flex items-center gap-1.5 text-[10px] font-medium text-[#687169]"><Check size={12} className="text-[#a58658]" />{item}</span>)}
            </div>
          </div>
          <div className="relative mx-auto aspect-[1.32] w-full max-w-[680px] overflow-hidden rounded-[28px] border border-[#e8e0d3] bg-[#eee8dc] shadow-[0_18px_42px_rgba(78,63,40,.13)] sm:rounded-[34px] lg:max-w-none">
            <Image src="/images/editorial-hospitality/training-team-natural-v4.png" alt={t.imageAlt} fill priority sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover object-center transition-transform duration-700 hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f211a]/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-full border border-white/60 bg-[#fffdf8]/90 px-3.5 py-2 text-[10px] font-medium text-[#314137] shadow-sm backdrop-blur sm:bottom-5 sm:left-5">{t.imageCaption}</div>
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
              <TrackedLink href={programmeHref} eventName="training_programme_download_clicked" eventProperties={{ source_page: localizedRoutePath('training', activeLocale), placement: 'training_contact' }} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold text-[#34463a] underline decoration-[#b49a6d] underline-offset-4 transition hover:text-[#92734a]"><Download size={13} />{t.programme}</TrackedLink>
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
