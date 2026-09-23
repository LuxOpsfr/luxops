import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Download,
  GraduationCap,
  Hotel,
  ShieldCheck,
  Users2,
} from 'lucide-react'
import SamePageAnchor from '@/components/SamePageAnchor'
import TrackedLink from '@/components/TrackedLink'
import TrainingQuoteForm from '@/components/TrainingQuoteForm'
import { toActiveLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import { alternatesForRoute, localizedRoutePath, localizedRouteUrl } from '@/lib/localized-routes'

const imageBase = '/images/editorial-hospitality'
const calendlyUrl = 'https://calendly.com/contact-luxops/30min'

const trainingMetadata = {
  en: {
    title: 'Service Standards Training | LuxOps',
    description:
      'On-property service standards training for hotel teams, pre-openings, seasonal reopenings, process rollout and department leadership.',
  },
  fr: {
    title: 'Formation standards de service | LuxOps',
    description:
      'Formation sur site aux standards de service pour équipes hôtelières, pré-ouverture, réouverture saisonnière, mise en place des process et leadership des chefs de service.',
  },
  es: {
    title: 'Formación en estándares de servicio | LuxOps',
    description:
      'Formación en el hotel para equipos hoteleros: preaperturas, reaperturas estacionales, despliegue de procesos, estándares de servicio y liderazgo de departamento.',
  },
} satisfies Partial<Record<Locale, { title: string; description: string }>>

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const activeLocale = toActiveLocale(locale)
  const metadata = trainingMetadata[activeLocale as keyof typeof trainingMetadata] ?? trainingMetadata.en

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: localizedRouteUrl('training', activeLocale),
      languages: alternatesForRoute('training'),
    },
  }
}

export default async function FormationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== 'fr') redirect(localizedRoutePath('training', locale))
  return <FormationContent locale={locale} />
}

type TrainingPageContent = {
  badge: string
  title: string
  subtitle: string
  context: string
  primaryCta: string
  secondaryCta: string
  proof: string[]
  formTitle: string
  formIntro: string
  imageAlt: string
  situationsLabel: string
  situationsTitle: string
  situationsIntro: string
  situations: {
    icon: ReactNode
    title: string
    text: string
  }[]
  methodLabel: string
  methodTitle: string
  methodIntro: string
  methodPoints: { title: string; text: string }[]
  trainerLabel: string
  trainerTitle: string
  trainerText: string[]
  trainerProof: string[]
  trainerPrimary: string
  trainerSecondary: string
  engagementLabel: string
  engagementTitle: string
  engagementSteps: { title: string; text: string }[]
  playbooksLink: string
  methodPageLink: string
  programmeLink: string
  programmeHref: string
  departmentsLabel: string
  departmentsTitle: string
  departmentsIntro: string
  departments: { title: string; items: string[] }[]
  outcomesLabel: string
  outcomesTitle: string
  outcomes: { title: string; text: string }[]
  flexLabel: string
  flexTitle: string
  flexText: string
  contactTitle: string
  contactText: string
  contactCta: string
  schemaName: string
  schemaServiceType: string
}

export function FormationContent({ locale }: { locale: string }) {
  const activeLocale = toActiveLocale(locale)
  const page = trainingContent[activeLocale as keyof typeof trainingContent] ?? trainingContent.en

  return (
    <div className="bg-[#f5f1e9] pt-[var(--site-header-height)] text-[#20231f]">
      <section className="grid min-h-[calc(100svh-var(--site-header-height))] border-b border-[rgba(32,35,31,0.14)] lg:grid-cols-[48%_52%]">
        <div className="flex flex-col justify-center px-6 py-12 md:px-16 lg:py-8 xl:px-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">
            {page.badge}
          </p>
          <h1 className="max-w-[660px] font-display text-[2.45rem] font-medium leading-[1.04] text-[#0f211a] md:text-[2.95rem] xl:text-[3.45rem]">
            {page.title}
          </h1>
          <p className="mt-5 max-w-[600px] text-base leading-7 text-[#5d665f] md:text-lg md:leading-8">
            {page.subtitle}
          </p>
          <p className="mt-4 max-w-[600px] text-sm leading-7 text-[#687169]">
            {page.context}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <TrackedLink
              href={calendlyUrl}
              eventName="training_consultation_clicked"
              eventProperties={{ locale: activeLocale, placement: 'training_hero' }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#0f211a] px-6 py-4 text-sm font-semibold text-[#f5f1e9] transition-colors hover:bg-[#24362f]"
            >
              <CalendarDays size={16} strokeWidth={1.5} />
              {page.primaryCta}
            </TrackedLink>
            <SamePageAnchor
              href="#training-quote"
              className="inline-flex items-center justify-center border border-[#24362f] px-6 py-4 text-sm font-semibold text-[#24362f] transition-colors hover:bg-[#e7e0d5]"
            >
              {page.secondaryCta}
              <ArrowRight size={16} strokeWidth={1.5} />
            </SamePageAnchor>
          </div>
          <div className="mt-7 grid max-w-[610px] grid-cols-2 gap-x-5 gap-y-3 border-y border-[rgba(32,35,31,0.14)] py-4 lg:grid-cols-4">
            {page.proof.map((item) => (
              <div key={item} className="flex gap-2 text-xs font-semibold leading-5 text-[#24362f]">
                <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0 text-[#a58658]" strokeWidth={1.7} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col bg-[#e7e0d5]">
          <div className="relative order-2 min-h-[260px] lg:order-1 lg:min-h-[180px] lg:flex-[0_0_24%]">
            <Image
              src={`${imageBase}/training-team-natural-v4.png`}
              alt={page.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 53vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div id="training-quote" className="order-1 scroll-mt-24 px-6 py-8 md:px-10 lg:order-2 lg:flex-1 lg:py-5">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a58658]">{page.formTitle}</p>
            <p className="mb-5 text-sm leading-6 text-[#5d665f] lg:mb-3">{page.formIntro}</p>
            <TrainingQuoteForm locale={locale} />
            <p className="mt-4 text-xs text-[#5d665f]">
              {activeLocale === 'fr' ? 'Contact direct : ' : 'Direct contact: '}
              <a href="https://wa.me/33652084739" target="_blank" rel="noreferrer" className="font-semibold text-[#24362f] underline decoration-[#a58658] underline-offset-4">
                WhatsApp · +33 6 52 08 47 39
              </a>
            </p>
          </div>
        </div>
      </section>

      <section aria-label={activeLocale === 'fr' ? 'Références terrain' : 'Property experience'} className="overflow-hidden border-b border-[rgba(32,35,31,0.14)] bg-[#fcfbf8] py-5">
        <div className="mx-auto max-w-[1500px]">
          <p className="px-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#0f211a] md:px-16">
            {activeLocale === 'fr' ? 'Nos terrains d’intervention' : 'Where we work'}
          </p>
          <p className="mt-1 px-6 text-xs leading-5 text-[#3d4a41] md:px-16">
            {activeLocale === 'fr' ? 'Palaces, maisons Relais & Châteaux, hôtels classés et établissements distingués par le Guide Michelin.' : 'Palace hotels, Relais & Châteaux properties, classified hotels and properties recognised by the Michelin Guide.'}
          </p>
          <div className="mt-4 overflow-hidden" aria-label={activeLocale === 'fr' ? 'Distinctions et catégories d’établissements' : 'Property distinctions and categories'}>
            <div className="hospitality-logo-track flex w-max items-center gap-14 motion-reduce:animate-none">
              {[0, 1].map((copy) => (
                <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center gap-14">
                  <Image src="/images/hospitality-labels/palace.jpg" alt="Distinction Palace" width={130} height={54} className="h-12 w-[130px] object-contain" />
                  <Image src="/images/hospitality-labels/relais-chateaux.png" alt="Relais & Châteaux" width={65} height={60} className="h-14 w-[65px] object-contain" />
                  <Image src="/images/hospitality-labels/hotel-four-star.jpg" alt={activeLocale === 'fr' ? 'Classement hôtel quatre étoiles' : 'Four-star hotel classification'} width={55} height={55} className="h-14 w-14 object-cover object-top" />
                  <Image src="/images/hospitality-labels/hotel-five-star.jpeg" alt={activeLocale === 'fr' ? 'Classement hôtel cinq étoiles' : 'Five-star hotel classification'} width={55} height={55} className="h-14 w-14 object-cover object-top" />
                  <Image src="/images/hospitality-labels/michelin-star.jpg" alt={activeLocale === 'fr' ? 'Distinction Clef Michelin' : 'Michelin Key distinction'} width={75} height={54} className="h-14 w-[75px] object-contain" />
                  <Image src="/images/hospitality-labels/michelin-guide-2026.png" alt="Guide Michelin 2026" width={56} height={56} className="h-14 w-14 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="training-situations" className="scroll-mt-24 px-6 py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-[1680px]">
          <div className="mb-10 max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">
              {page.situationsLabel}
            </p>
            <h2 className="font-display text-[2.35rem] font-medium leading-[1.08] text-[#0f211a] md:text-[3.25rem]">
              {page.situationsTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5d665f]">
              {page.situationsIntro}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {page.situations.map((item, index) => (
              <div key={item.title} className="border border-[rgba(32,35,31,0.14)] bg-[#fcfbf8] p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center bg-[#e7e0d5] text-[#24362f]">
                    {item.icon}
                  </div>
                  <span className="font-display text-4xl italic text-[rgba(15,33,26,0.16)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-6 min-h-[3rem] font-display text-[1.35rem] font-medium leading-tight text-[#0f211a]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5d665f]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[rgba(32,35,31,0.14)] bg-[#fcfbf8] px-6 py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-[1500px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">{page.engagementLabel}</p>
          <h2 className="max-w-3xl font-display text-[2.35rem] font-medium leading-[1.08] text-[#0f211a] md:text-[3.25rem]">{page.engagementTitle}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {page.engagementSteps.map((step, index) => (
              <div key={step.title} className="border-t border-[#a58658] pt-5">
                <span className="text-xs font-semibold text-[#a58658]">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-display text-xl text-[#0f211a]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5d665f]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(32,35,31,0.14)] bg-[#e7e0d5] px-6 py-16 md:px-16 md:py-20">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">
              {page.methodLabel}
            </p>
            <h2 className="font-display text-[2.35rem] font-medium leading-[1.08] text-[#0f211a] md:text-[3.25rem]">
              {page.methodTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5d665f]">
              {page.methodIntro}
            </p>
            <div className="mt-9 flex flex-col gap-4">
              <Link
                href={localizedRoutePath('playbooks', activeLocale)}
                className="inline-flex w-fit items-center gap-2 border-b border-[#24362f] pb-1 text-sm font-semibold text-[#24362f]"
              >
                {page.playbooksLink}
                <ArrowRight size={15} strokeWidth={1.5} />
              </Link>
              <Link
                href={activeLocale === 'fr' ? '/fr/methode-formation-luxops' : '/en/luxops-training-method'}
                className="inline-flex w-fit items-center gap-2 border-b border-[#24362f] pb-1 text-sm font-semibold text-[#24362f]"
              >
                {page.methodPageLink}
                <ArrowRight size={15} strokeWidth={1.5} />
              </Link>
              <TrackedLink
                href={page.programmeHref}
                eventName="training_programme_download_clicked"
                eventProperties={{
                  source_page: localizedRoutePath('training', activeLocale),
                  placement: 'method_section',
                  cta_label: page.programmeLink,
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 border-b border-[#24362f] pb-1 text-sm font-semibold text-[#24362f]"
              >
                {page.programmeLink}
                <Download size={15} strokeWidth={1.5} />
              </TrackedLink>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {page.methodPoints.map((item) => (
              <div key={item.title} className="border border-[rgba(32,35,31,0.14)] bg-[#fcfbf8] p-6">
                <ShieldCheck size={21} className="mb-5 text-[#a58658]" strokeWidth={1.6} />
                <h3 className="font-display text-[1.35rem] font-medium text-[#0f211a]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5d665f]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(32,35,31,0.14)] bg-[#fcfbf8] px-6 py-16 md:px-16 md:py-20">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">
              {page.trainerLabel}
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-[2.35rem] font-medium leading-[1.08] text-[#0f211a] md:text-[3.25rem]">
              {page.trainerTitle}
            </h2>
            <div className="mt-7 max-w-3xl space-y-5 text-base leading-8 text-[#5d665f] md:text-lg">
              {page.trainerText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <TrackedLink
                href={calendlyUrl}
                eventName="training_consultation_clicked"
                eventProperties={{ locale: activeLocale, placement: 'trainer_section' }}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0f211a] px-6 py-4 text-sm font-semibold text-[#f5f1e9] transition-colors hover:bg-[#24362f]"
              >
                <CalendarDays size={16} strokeWidth={1.5} />
                {page.trainerPrimary}
              </TrackedLink>
              <SamePageAnchor
                href="#training-quote"
                className="inline-flex items-center justify-center gap-2 border border-[#24362f] px-6 py-4 text-sm font-semibold text-[#24362f] transition-colors hover:bg-[#e7e0d5]"
              >
                {page.trainerSecondary}
                <ArrowRight size={16} strokeWidth={1.5} />
              </SamePageAnchor>
            </div>
          </div>
          <div className="border-y border-[rgba(32,35,31,0.14)]">
            {page.trainerProof.map((item, index) => (
              <div key={item} className="grid grid-cols-[3.2rem_1fr] border-b border-[rgba(32,35,31,0.14)] py-5 last:border-b-0 md:py-6">
                <span className="font-display text-xl italic text-[#a58658]">{String(index + 1).padStart(2, '0')}.</span>
                <p className="text-sm font-semibold leading-6 text-[#24362f] md:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-[1680px]">
          <div className="mb-10 max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">
              {page.departmentsLabel}
            </p>
            <h2 className="font-display text-[2.35rem] font-medium leading-[1.08] text-[#0f211a] md:text-[3.25rem]">
              {page.departmentsTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5d665f]">
              {page.departmentsIntro}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {page.departments.map((department) => (
              <div key={department.title} className="border border-[rgba(32,35,31,0.14)] bg-[#fcfbf8] p-7">
                <h3 className="font-display text-[1.55rem] font-medium text-[#0f211a]">
                  {department.title}
                </h3>
                <ul className="mt-6 space-y-4">
                  {department.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-[#5d665f]">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-[#a58658]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(32,35,31,0.14)] bg-[#fcfbf8] px-6 py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-[1680px]">
          <div className="mb-10 max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">
              {page.outcomesLabel}
            </p>
            <h2 className="font-display text-[2.35rem] font-medium leading-[1.08] text-[#0f211a] md:text-[3.25rem]">
              {page.outcomesTitle}
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {page.outcomes.map((item, index) => (
              <div key={item.title} className="border-t border-[rgba(32,35,31,0.16)] pt-6">
                <p className="font-display text-5xl italic text-[rgba(15,33,26,0.18)]">
                  {String(index + 1).padStart(2, '0')}.
                </p>
                <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#24362f]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5d665f]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="bg-[#0f211a] px-6 py-16 text-[#f5f1e9] md:px-16 md:py-20">
          <div className="mx-auto max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">
              {page.flexLabel}
            </p>
            <h2 className="font-display text-[2.25rem] font-medium leading-[1.1] md:text-[3rem]">
              {page.flexTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[rgba(245,241,233,0.72)]">
              {page.flexText}
            </p>
          </div>
        </div>
        <div className="bg-[#e7e0d5] px-6 py-16 md:px-16 md:py-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-display text-[2.25rem] font-medium leading-[1.1] text-[#0f211a] md:text-[3rem]">
              {page.contactTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5d665f]">
              {page.contactText}
            </p>
            <Link
              href="#training-quote"
              className="mt-9 inline-flex items-center gap-2 bg-[#0f211a] px-7 py-4 text-sm font-semibold text-[#f5f1e9] transition-colors hover:bg-[#24362f]"
            >
              {page.contactCta}
              <ArrowRight size={15} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: page.schemaName,
            provider: {
              '@type': 'Organization',
              name: 'LuxOps',
              url: 'https://www.luxops.fr',
            },
            serviceType: page.schemaServiceType,
            areaServed: ['France', 'Belgium', 'Switzerland', 'Luxembourg', 'Monaco'],
            availableLanguage: ['French', 'English', 'Spanish'],
          }),
        }}
      />
    </div>
  )
}

const frenchContent: TrainingPageContent = {
  badge: 'Formation hôtelière',
  title: 'Transformer les standards en réflexes.',
  subtitle:
    'Des sessions terrain pour aider vos collaborateurs à comprendre, appliquer et maintenir des standards de service clairs.',
  context:
    'LuxOps accompagne les établissements dans le déploiement de leurs standards : procédures, valeurs de marque, séquences de service, posture managériale et réflexes opérationnels.',
  primaryCta: 'Réserver un échange de 20 minutes',
  secondaryCta: 'Demander une proposition',
  proof: ['Sur site ou à distance', 'FR ou EN', 'Managers et équipes', 'Supports inclus'],
  formTitle: 'Parlez-nous de votre besoin formation',
  formIntro:
    'Vous préférez nous écrire ? Quelques informations suffisent pour comprendre votre contexte et vous recommander le format de formation le plus pertinent.',
  imageAlt: 'Equipe hôtelière réunie autour d’une table pour une session de formation opérationnelle.',
  situationsLabel: 'Quand former',
  situationsTitle: 'Utile quand les standards doivent tenir dans le vrai service.',
  situationsIntro:
    'La formation n’est pas pensée comme un cours générique. Elle sert à installer des méthodes visibles pendant le service, clarifier les attentes et aider les managers à faire vivre les standards dans la durée.',
  situations: [
    {
      icon: <Hotel size={20} strokeWidth={1.5} />,
      title: 'Pré-ouverture',
      text: 'Structurer les réflexes avant l’arrivée des premiers clients : accueil, parcours client, coordination entre services, standards et valeurs de l’établissement.',
    },
    {
      icon: <BriefcaseBusiness size={20} strokeWidth={1.5} />,
      title: 'Réouverture saisonnière',
      text: 'Remettre les équipes en rythme avant la saison, harmoniser les méthodes et sécuriser les points sensibles dès les premiers jours.',
    },
    {
      icon: <ClipboardCheck size={20} strokeWidth={1.5} />,
      title: 'Validation des acquis',
      text: 'Revoir les fondamentaux en cours d’année, contrôler la compréhension des standards et corriger les écarts avant qu’ils deviennent des habitudes.',
    },
    {
      icon: <Users2 size={20} strokeWidth={1.5} />,
      title: 'Chefs de service',
      text: 'Former les responsables à mieux briefer, accompagner, contrôler et faire progresser les équipes sans transformer le management en simple rappel à l’ordre.',
    },
    {
      icon: <GraduationCap size={20} strokeWidth={1.5} />,
      title: 'Déploiement de playbook',
      text: 'Faire comprendre les standards, les adapter au terrain et donner aux managers les routines nécessaires pour les maintenir.',
    },
  ],
  methodLabel: 'Méthode',
  methodTitle: 'Expliquer. Pratiquer. Ancrer.',
  methodIntro:
    'La session part toujours du réel : vos équipes, vos points de contact client, vos procédures existantes et les écarts observés. Les supports LuxOps servent de base structurée, mais la formation peut aussi s’appuyer sur vos propres process et valeurs internes.',
  playbooksLink: 'Voir les playbooks opérationnels',
  methodPageLink: 'Voir la méthode de formation LuxOps',
  programmeLink: 'Télécharger le programme PDF',
  programmeHref: '/downloads/training/programme-formation-standards-service-luxops-fr.pdf',
  methodPoints: [
    {
      title: 'Comprendre',
      text: 'Les collaborateurs comprennent pourquoi le standard existe, pas seulement ce qu’il faut faire.',
    },
    {
      title: 'Pratiquer',
      text: 'Les séquences sont travaillées à partir de situations vécues : accueil, demande client, réclamation, passation, inspection ou service.',
    },
    {
      title: 'Observer',
      text: 'Les managers repèrent les écarts entre le standard et son application pendant le service.',
    },
    {
      title: 'Renforcer',
      text: 'Les chefs de service repartent avec des repères concrets pour maintenir le niveau après la session.',
    },
  ],
  trainerLabel: 'Votre formateur',
  trainerTitle: 'Une expérience du management hôtelier derrière chaque formation.',
  trainerText: [
    'Chaque formation LuxOps est délivrée personnellement par le fondateur de LuxOps, avec 15 années d’expérience dans les opérations et le management hôtelier haut de gamme, notamment chez Four Seasons et La Réserve.',
    'Son parcours comprend le management d’équipes multidisciplinaires de plus de 100 collaborateurs, le développement des managers, l’intégration et l’accompagnement des équipes, le déploiement de SOP ainsi que la formation des collaborateurs autour de référentiels exigeants du service haut de gamme, notamment les critères LQA, Forbes Travel Guide et les attentes du programme American Express Fine Hotels + Resorts.',
    'L’objectif n’est pas de dispenser une formation hôtelière théorique et générique. Les sessions portent sur la manière dont les standards sont compris, pratiqués, observés et maintenus dans les opérations quotidiennes, tout en donnant aux managers des méthodes concrètes pour les faire vivre après la formation.',
  ],
  trainerProof: ['15 ans d’opérations hôtelières', 'Équipes de plus de 100 collaborateurs', 'Management multi-départements', 'Déploiement SOP & développement des équipes'],
  trainerPrimary: 'Réserver un échange de 20 minutes',
  trainerSecondary: 'Demander un devis formation',
  engagementLabel: 'Déroulé',
  engagementTitle: 'Une formation construite autour de vos priorités.',
  engagementSteps: [
    { title: 'Cadrer', text: 'Nous identifions les standards, les équipes et les situations à travailler.' },
    { title: 'Adapter', text: 'Les exemples et exercices sont préparés à partir de votre établissement.' },
    { title: 'Pratiquer', text: 'Les équipes appliquent les standards sur des situations de service concrètes.' },
    { title: 'Ancrer', text: 'Les managers repartent avec des repères pour suivre les progrès.' },
  ],
  departmentsLabel: 'Périmètre',
  departmentsTitle: 'Des modules construits autour des vrais moments de service.',
  departmentsIntro:
    'Le contenu est défini selon vos priorités. Une session peut cibler un département précis ou travailler les points de liaison entre plusieurs services.',
  departments: [
    {
      title: 'Réception et relation client',
      items: ['Accueil et première impression', 'Gestion des demandes et réclamations', 'Passations et communication inter-services'],
    },
    {
      title: 'Housekeeping et qualité chambre',
      items: ['Standards de chambre', 'Inspection et auto-contrôle', 'Coordination avec la réception et la maintenance'],
    },
    {
      title: 'F&B et service',
      items: ['Séquence de service', 'Posture en salle et communication client', 'Briefings, mise en place et gestion des imprévus'],
    },
    {
      title: 'Spa & Wellness',
      items: ['Accueil et parcours client', 'Standards de soin et de service', 'Coordination des équipes et suivi qualité'],
    },
  ],
  outcomesLabel: 'Résultats attendus',
  outcomesTitle: 'Ce que la formation doit changer dans l’exploitation.',
  outcomes: [
    {
      title: 'Attentes plus claires',
      text: 'Chaque collaborateur sait ce qui est attendu, dans quel ordre et avec quel niveau de détail.',
    },
    {
      title: 'Managers mieux équipés',
      text: 'Les responsables disposent de repères pour briefer, observer, corriger et renforcer les standards.',
    },
    {
      title: 'Exécution plus régulière',
      text: 'Les pratiques importantes deviennent visibles, répétables et plus faciles à maintenir dans le temps.',
    },
  ],
  flexLabel: 'Accompagnement flexible',
  flexTitle: 'Un format adapté à votre réalité terrain.',
  flexText:
    'La formation peut être centrée sur les standards de service, la mise en place de process, l’accompagnement des chefs de service, l’intégration des collaborateurs ou un besoin plus spécifique lié à votre établissement.',
  contactTitle: 'Un besoin différent ?',
  contactText:
    'Décrivez votre contexte, vos priorités et le format recherché. Nous vous orienterons vers la bonne combinaison : formation, déploiement de playbooks ou accompagnement ciblé.',
  contactCta: 'Parler de votre formation',
  schemaName: 'Formation standards de service',
  schemaServiceType: 'Formation sur site aux standards de service',
}

const englishContent: TrainingPageContent = {
  badge: 'Hotel training',
  title: 'Turn standards into service habits.',
  subtitle:
    'Hands-on sessions that help your teams understand, apply and maintain clear service standards.',
  context:
    'LuxOps supports properties with the rollout of LuxOps processes or their own internal standards: procedures, brand values, service sequences, management posture and operational habits.',
  primaryCta: 'Book a 20-minute consultation',
  secondaryCta: 'Request a training proposal',
  proof: ['On site or remote', 'English or French', 'Managers and teams', 'Adaptable support'],
  formTitle: 'Tell us about your training need',
  formIntro:
    'Prefer to write? A few details are enough to understand your priorities and recommend the most relevant training format.',
  imageAlt: 'Hotel team gathered around a table during an operational training session.',
  situationsLabel: 'When to train',
  situationsTitle: 'Useful when standards need to hold in real service.',
  situationsIntro:
    'The training is not a generic classroom session. It is designed to install working methods, clarify expectations and help managers keep standards alive over time.',
  situations: [
    {
      icon: <Hotel size={20} strokeWidth={1.5} />,
      title: 'Pre-opening',
      text: 'Structure team habits before the first guests arrive: welcome, guest journey, interdepartment coordination, standards and property values.',
    },
    {
      icon: <BriefcaseBusiness size={20} strokeWidth={1.5} />,
      title: 'Seasonal reopening',
      text: 'Bring teams back into rhythm before the season, align methods and secure sensitive service points from day one.',
    },
    {
      icon: <ClipboardCheck size={20} strokeWidth={1.5} />,
      title: 'Skills validation',
      text: 'Review core standards during the year, confirm understanding and correct gaps before they become habits.',
    },
    {
      icon: <Users2 size={20} strokeWidth={1.5} />,
      title: 'Department leadership',
      text: 'Help managers brief, coach, control and support their teams without reducing management to repeated reminders.',
    },
    {
      icon: <GraduationCap size={20} strokeWidth={1.5} />,
      title: 'Playbook rollout',
      text: 'Help teams understand the standards, adapt them to the floor and give managers routines to maintain them.',
    },
  ],
  methodLabel: 'Method',
  methodTitle: 'Explain. Practise. Reinforce.',
  methodIntro:
    'The session starts from reality: your teams, your guest touchpoints, your existing procedures and the gaps you see on the floor. LuxOps materials provide structure, but training can also be built around your own internal processes and values.',
  playbooksLink: 'View operational playbooks',
  methodPageLink: 'View the LuxOps training method',
  programmeLink: 'Download the PDF programme',
  programmeHref: '/downloads/training/service-standards-training-programme-luxops-en.pdf',
  methodPoints: [
    {
      title: 'Understand',
      text: 'Team members understand why the standard exists, not only what they are expected to do.',
    },
    {
      title: 'Practise',
      text: 'Sequences are worked through using real situations: welcome, guest request, complaint, handover, inspection or service.',
    },
    {
      title: 'Observe',
      text: 'Managers identify gaps between the standard and its execution during service.',
    },
    {
      title: 'Reinforce',
      text: 'Department heads leave with clear ways to maintain standards after the session.',
    },
  ],
  trainerLabel: 'Your trainer',
  trainerTitle: 'Hotel management experience behind every session.',
  trainerText: [
    'Every LuxOps training session is delivered personally by the founder of LuxOps, drawing on 15 years of luxury hotel operations and management experience, including Four Seasons and La Réserve.',
    'His experience includes managing multidisciplinary teams of more than 100 employees, developing managers, onboarding and coaching teams, implementing SOPs and training employees around demanding luxury-service frameworks including LQA, Forbes Travel Guide and American Express Fine Hotels + Resorts program expectations.',
    'The objective is not to deliver generic hospitality theory. Sessions focus on how standards are understood, practised, observed and reinforced in day-to-day hotel operations, while giving managers practical methods to maintain them after the training.',
  ],
  trainerProof: ['15 years in hotel operations', 'Teams of 100+ employees', 'Multi-department management', 'SOP implementation & team development'],
  trainerPrimary: 'Book a 20-minute consultation',
  trainerSecondary: 'Request a training quote',
  engagementLabel: 'How it works',
  engagementTitle: 'Training shaped around your priorities.',
  engagementSteps: [
    { title: 'Understand', text: 'We identify the standards, teams and service moments that matter most.' },
    { title: 'Adapt', text: 'Examples and exercises are prepared around your property.' },
    { title: 'Practise', text: 'Teams apply the standards to real service situations.' },
    { title: 'Reinforce', text: 'Managers leave with clear ways to track and sustain progress.' },
  ],
  departmentsLabel: 'Scope',
  departmentsTitle: 'Modules built around real service moments.',
  departmentsIntro:
    'Content is defined according to your priorities. A session can target one department or focus on the handovers between departments.',
  departments: [
    {
      title: 'Front Office and guest relations',
      items: ['Welcome and first impression', 'Requests and complaint handling', 'Handovers and interdepartment communication'],
    },
    {
      title: 'Housekeeping and room quality',
      items: ['Room standards', 'Inspection and self-control', 'Coordination with reception and maintenance'],
    },
    {
      title: 'F&B and service',
      items: ['Service sequence', 'Floor posture and guest communication', 'Briefings, setup and service recovery'],
    },
    {
      title: 'Spa & Wellness',
      items: ['Welcome and guest journey', 'Treatment and service standards', 'Team coordination and quality follow-up'],
    },
  ],
  outcomesLabel: 'Expected outcomes',
  outcomesTitle: 'What training should change in daily operations.',
  outcomes: [
    {
      title: 'Clearer expectations',
      text: 'Every team member knows what is expected, in which sequence and with which level of detail.',
    },
    {
      title: 'Better equipped managers',
      text: 'Department leaders have reference points to brief, observe, correct and reinforce standards.',
    },
    {
      title: 'More consistent execution',
      text: 'Important practices become visible, repeatable and easier to maintain over time.',
    },
  ],
  flexLabel: 'Flexible support',
  flexTitle: 'A format adapted to your operational reality.',
  flexText:
    'Training can focus on service standards, process rollout, department leadership, team onboarding or a more specific need linked to your property.',
  contactTitle: 'Need something different?',
  contactText:
    'Share your context, priorities and preferred format. We will point you toward the right combination: training, playbook rollout or targeted operational support.',
  contactCta: 'Discuss My Training Needs',
  schemaName: 'Service standards training',
  schemaServiceType: 'On-property service standards training',
}

const spanishContent: TrainingPageContent = {
  ...englishContent,
  badge: 'Formación hotelera',
  title: 'Convertir estándares en hábitos de servicio.',
  primaryCta: 'Reservar una consulta de 20 minutos',
  secondaryCta: 'Solicitar una propuesta',
  contactCta: 'Contactar',
  schemaName: 'Formación en estándares de servicio',
  schemaServiceType: 'Formación en sitio sobre estándares de servicio',
}

const trainingContent = {
  en: englishContent,
  fr: frenchContent,
  es: spanishContent,
}
