import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BriefcaseBusiness, CheckCircle2, ClipboardCheck, Eye, GraduationCap, Users2 } from 'lucide-react'
import TrackedLink from '@/components/TrackedLink'

type Locale = 'en' | 'fr'

const CONTENT = {
  en: {
    slug: '/luxops-training-method',
    title: 'LuxOps Training Method: Field-Based Hospitality Training | LuxOps',
    description:
      'How LuxOps designs on-site hospitality training from real operations: standards, scenarios, department routines, manager follow-up and written supports.',
    eyebrow: 'Training method',
    h1: 'A field-based method for hospitality training',
    intro:
      'LuxOps training starts from the operation itself: the standards already in place, the moments where service becomes inconsistent, and the routines managers need to maintain the level after the session.',
    primaryCta: 'View service standards training',
    secondaryCta: 'View F&B audit and training',
    proofTitle: 'Training built from hotel operations, not generic service theory',
    proofText:
      'The work is designed for teams already in service. The objective is not to deliver abstract excellence language, but to make standards easier to understand, practise and repeat during real shifts.',
    sectionsTitle: 'What makes the method different',
    stepsTitle: 'How an intervention is prepared',
    resourcesTitle: 'Connect the method to a training need',
    finalTitle: 'Need a programme adapted to your property?',
    finalText:
      'Use the training page for a direct quote request, or share your context if the need combines audit, standards, playbooks and team support.',
  },
  fr: {
    slug: '/methode-formation-luxops',
    title: 'Méthode de formation LuxOps : formation hôtelière terrain | LuxOps',
    description:
      'Comment LuxOps construit une formation hôtelière sur site à partir du terrain : standards, cas pratiques, routines par département, suivi manager et supports écrits.',
    eyebrow: 'Méthode de formation',
    h1: 'Une méthode de formation construite à partir du terrain',
    intro:
      'La formation LuxOps part de l’exploitation réelle : les standards déjà en place, les moments où le service perd en régularité, et les routines dont les managers ont besoin pour maintenir le niveau après la session.',
    primaryCta: 'Voir la formation standards de service',
    secondaryCta: 'Voir audit et formation F&B',
    proofTitle: 'Une formation issue de l’exploitation, pas d’un module générique',
    proofText:
      'Le travail est pensé pour des équipes déjà en service. L’objectif n’est pas de dérouler un discours abstrait sur l’excellence, mais de rendre les standards plus faciles à comprendre, pratiquer et répéter pendant les vrais shifts.',
    sectionsTitle: 'Ce qui différencie la méthode',
    stepsTitle: 'Comment une intervention est préparée',
    resourcesTitle: 'Relier la méthode à un besoin formation',
    finalTitle: 'Besoin d’un programme adapté à votre établissement ?',
    finalText:
      'Utilisez la page formation pour une demande de devis directe, ou partagez votre contexte si le besoin combine audit, standards, playbooks et accompagnement des équipes.',
  },
}

const pillars = {
  en: [
    {
      icon: Eye,
      title: 'Start from visible service moments',
      text: 'Welcome, handover, complaint, inspection, table follow-up or room service delivery are used as practical training situations.',
    },
    {
      icon: ClipboardCheck,
      title: 'Turn standards into behaviours',
      text: 'The session links written procedures to gestures, phrases, timing, escalation points and control routines.',
    },
    {
      icon: Users2,
      title: 'Support managers after the session',
      text: 'Department heads receive a clearer language to brief, correct, coach and keep the standard alive.',
    },
  ],
  fr: [
    {
      icon: Eye,
      title: 'Partir des moments visibles du service',
      text: 'Accueil, passation, réclamation, inspection, suivi de table ou livraison room service deviennent des situations concrètes de formation.',
    },
    {
      icon: ClipboardCheck,
      title: 'Transformer les standards en comportements',
      text: 'La session relie les procédures écrites aux gestes, formulations, timings, points d’escalade et routines de contrôle.',
    },
    {
      icon: Users2,
      title: 'Accompagner les managers après la session',
      text: 'Les chefs de service repartent avec un langage plus clair pour briefer, corriger, coacher et maintenir le standard.',
    },
  ],
}

const steps = {
  en: [
    'Understand the property context, standards, departments involved and operational pressure points.',
    'Select the service situations that need to be worked through in priority.',
    'Build practical scenarios and written supports aligned with the property’s codes.',
    'Train through short explanations, role play, correction and repetition.',
    'Close with manager follow-up points and written references to keep the standard active.',
  ],
  fr: [
    'Comprendre le contexte de l’établissement, les standards, les départements concernés et les points de tension opérationnels.',
    'Sélectionner les situations de service à travailler en priorité.',
    'Construire des cas pratiques et supports écrits alignés avec les codes de l’établissement.',
    'Former par explication courte, mise en situation, correction et répétition.',
    'Clôturer avec des points de suivi manager et des références écrites pour maintenir le standard actif.',
  ],
}

const links = {
  en: [
    {
      href: '/en/training',
      label: 'Main training page',
      title: 'Service standards training',
      text: 'The central page for on-site standards training, quote request and format selection.',
    },
    {
      href: '/en/formation-pre-ouverture',
      label: 'Pre-opening',
      title: 'Pre-opening training',
      text: 'Prepare standards, guest journey and team routines before launch or seasonal restart.',
    },
    {
      href: '/en/fb-audit-training',
      label: 'F&B',
      title: 'F&B audit and training',
      text: 'Observe restaurant, bar or room service, then train on the gaps that matter.',
    },
  ],
  fr: [
    {
      href: '/fr/formation',
      label: 'Page formation principale',
      title: 'Formation standards de service',
      text: 'La page centrale pour la formation sur site, la demande de devis et le choix du format.',
    },
    {
      href: '/fr/formation-pre-ouverture',
      label: 'Pré-ouverture',
      title: 'Formation pré-ouverture',
      text: 'Préparer standards, parcours client et routines équipe avant lancement ou reprise saisonnière.',
    },
    {
      href: '/fr/audit-formation-fb',
      label: 'F&B',
      title: 'Audit et formation F&B',
      text: 'Observer restaurant, bar ou room service, puis former sur les écarts qui comptent.',
    },
  ],
}

export function getLuxOpsTrainingMethodMetadata(locale: Locale): Metadata {
  const content = CONTENT[locale]

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `https://www.luxops.fr/${locale}${content.slug}`,
      languages: {
        en: 'https://www.luxops.fr/en/luxops-training-method',
        fr: 'https://www.luxops.fr/fr/methode-formation-luxops',
        'x-default': 'https://www.luxops.fr/en/luxops-training-method',
      },
    },
  }
}

export default function LuxOpsTrainingMethodPage({ locale }: { locale: Locale }) {
  const content = CONTENT[locale]
  const isEn = locale === 'en'
  const trainingHref = isEn ? '/en/training' : '/fr/formation'
  const fbTrainingHref = isEn ? '/en/fb-audit-training' : '/fr/audit-formation-fb'

  return (
    <main className="bg-white pt-16">
      <section
        className="border-b border-[#e8edf5] px-6 py-20 lg:py-24"
        style={{
          backgroundImage: 'radial-gradient(#c3c6d6 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
        }}
      >
        <div className="mx-auto grid max-w-screen-xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 bg-[#eef4ff] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#003d9b]">
              <span className="h-2 w-2 rounded-full bg-[#003d9b]" />
              {content.eyebrow}
            </div>
            <h1 className="mb-6 font-display text-4xl font-extrabold leading-[0.98] tracking-tight text-[#0a1d2e] md:text-6xl">
              {content.h1}
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[#4f6074]">{content.intro}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href={trainingHref}
                eventName="training_cta_clicked"
                eventProperties={{
                  source_page: `/${locale}${content.slug}`,
                  placement: 'hero',
                  cta_label: content.primaryCta,
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#003d9b] px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-[#0a1d2e]"
              >
                {content.primaryCta}
                <ArrowRight size={16} />
              </TrackedLink>
              <TrackedLink
                href={fbTrainingHref}
                eventName="training_cta_clicked"
                eventProperties={{
                  source_page: `/${locale}${content.slug}`,
                  placement: 'hero_secondary',
                  cta_label: content.secondaryCta,
                }}
                className="inline-flex items-center justify-center gap-2 border border-[#d8deea] bg-white px-6 py-4 text-sm font-bold text-[#0a1d2e] transition-colors hover:border-[#003d9b]"
              >
                {content.secondaryCta}
              </TrackedLink>
            </div>
          </div>

          <div className="border border-[#d8deea] bg-white p-8 shadow-[0_24px_70px_rgba(10,29,46,0.10)]">
            <GraduationCap className="mb-6 text-[#003d9b]" size={30} />
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#003d9b]">
              {isEn ? 'Positioning' : 'Positionnement'}
            </p>
            <h2 className="mb-5 font-display text-2xl font-extrabold tracking-tight text-[#0a1d2e]">
              {content.proofTitle}
            </h2>
            <p className="text-sm leading-relaxed text-[#4f6074]">{content.proofText}</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#003d9b]">
              {isEn ? 'Principles' : 'Principes'}
            </p>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0a1d2e] md:text-4xl">
              {content.sectionsTitle}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {pillars[locale].map((pillar) => {
              const Icon = pillar.icon
              return (
                <article key={pillar.title} className="border border-[#e8edf5] bg-[#f8f9ff] p-7">
                  <Icon className="mb-5 text-[#003d9b]" size={24} />
                  <h3 className="mb-3 font-display text-xl font-bold text-[#0a1d2e]">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed text-[#4f6074]">{pillar.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9ff] px-6 py-20">
        <div className="mx-auto grid max-w-screen-xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <BriefcaseBusiness className="mb-5 text-[#003d9b]" size={28} />
            <h2 className="mb-5 font-display text-3xl font-extrabold tracking-tight text-[#0a1d2e]">
              {content.stepsTitle}
            </h2>
            <p className="text-sm leading-relaxed text-[#4f6074]">
              {isEn
                ? 'The preparation phase matters as much as the session itself. It keeps the training connected to the property instead of becoming a generic hospitality module.'
                : 'La préparation compte autant que la session elle-même. Elle évite que la formation devienne un module générique déconnecté de l’établissement.'}
            </p>
          </div>
          <ol className="space-y-4">
            {steps[locale].map((step, index) => (
              <li key={step} className="grid grid-cols-[42px_1fr] gap-4 border border-[#e8edf5] bg-white p-5">
                <span className="flex h-9 w-9 items-center justify-center bg-[#003d9b] text-xs font-bold text-white">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-[#4f6074]">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#003d9b]">
              {isEn ? 'Training offers' : 'Offres formation'}
            </p>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0a1d2e] md:text-4xl">
              {content.resourcesTitle}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {links[locale].map((item) => (
              <Link key={item.href} href={item.href} className="group border border-[#e8edf5] p-7 hover:border-[#003d9b]">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#003d9b]">{item.label}</p>
                <h3 className="mb-3 font-display text-xl font-bold text-[#0a1d2e] group-hover:text-[#003d9b]">
                  {item.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-[#4f6074]">{item.text}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#003d9b]">
                  {isEn ? 'Open page' : 'Voir la page'}
                  <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a1d2e] px-6 py-20 text-white">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#8fb7ff]">
              {isEn ? 'Next step' : 'Prochaine étape'}
            </p>
            <h2 className="mb-4 font-display text-3xl font-extrabold tracking-tight">{content.finalTitle}</h2>
            <p className="leading-relaxed text-[#cbd5e1]">{content.finalText}</p>
          </div>
          <Link
            href={trainingHref}
            className="inline-flex items-center justify-center gap-2 bg-white px-6 py-4 text-sm font-bold text-[#0a1d2e] transition-colors hover:bg-[#eef4ff]"
          >
            {isEn ? 'Request a quote' : 'Demander un devis'}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}
