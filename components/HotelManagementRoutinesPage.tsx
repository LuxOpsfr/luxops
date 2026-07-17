import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ClipboardCheck, Eye, Layers, MessageSquareText, RefreshCw, ShieldCheck, Users2 } from 'lucide-react'
import TrackedLink from '@/components/TrackedLink'

type Locale = 'en' | 'fr'

type Routine = {
  title: string
  body: string
  points: string[]
}

type LinkCard = {
  href: string
  label: string
  title: string
  body: string
}

type FAQItem = {
  question: string
  answer: string
}

const CONTENT = {
  en: {
    slug: '/hotel-management-routines',
    title: 'Hotel Management Routines: Briefings, Standards and Floor Leadership | LuxOps',
    description:
      'A practical guide to hotel management routines: briefings, floor presence, feedback, quality control, handovers and standards follow-up for department heads.',
    keywords:
      'hotel management routines, hotel leadership, hotel department manager, hotel briefing, hotel service standards, hotel operational management, hotel team coaching',
    eyebrow: 'Hotel operational leadership',
    h1: 'Hotel Management Routines: Briefings, Standards and Floor Leadership',
    intro:
      'Strong hotel management is not only personality or experience. It is a set of visible routines repeated every day: briefing, floor presence, quality control, feedback, handover and follow-up. When those routines are clear, teams know what matters and standards are easier to maintain.',
    primaryCta: 'View department leadership training',
    secondaryCta: 'View operational playbooks',
    definitionTitle: 'What is operational management in hospitality?',
    definition:
      'Operational management in hospitality is the ability to translate standards into daily behavior. A manager is not only present to solve problems. They create rhythm, clarify priorities, check the sensitive points, support collaborators and make sure the same standard survives pressure, turnover and shift changes.',
    routinesTitle: 'The management routines that hold service together',
    methodTitle: 'A practical method for department heads',
    methodIntro:
      'The goal is not to add meetings or control for the sake of control. The goal is to give managers a simple operating rhythm they can repeat without becoming distant from the floor.',
    productTitle: 'Connect management routines to LuxOps resources',
    finalTitle: 'Need to support your department heads?',
    finalBody:
      'Use training when managers need help turning standards into daily routines. Use playbooks when the procedures and control points need to be documented by department.',
    relatedTitle: 'Related pages',
    faqTitle: 'Frequently asked questions',
  },
  fr: {
    slug: '/rituels-management-hotelier',
    title: 'Rituels de management hôtelier : briefing, standards et leadership terrain | LuxOps',
    description:
      'Guide pratique des rituels de management hôtelier : briefing, présence terrain, feedback, contrôle qualité, passation manager et maintien des standards.',
    keywords:
      'management hôtelier, rituels management hôtelier, leadership hôtelier, chef de service hôtel, briefing hôtel, standards de service hôtel, management opérationnel hôtelier, coaching équipe hôtel',
    eyebrow: 'Management opérationnel hôtelier',
    h1: 'Rituels de management hôtelier : briefing, standards et leadership terrain',
    intro:
      'Le management hôtelier ne repose pas seulement sur la personnalité ou l’expérience. Il repose sur des rituels visibles, répétés chaque jour : briefing, présence terrain, contrôle qualité, feedback, passation et suivi. Lorsque ces routines sont claires, les équipes savent ce qui compte et les standards tiennent mieux dans la durée.',
    primaryCta: 'Voir la formation chefs de service',
    secondaryCta: 'Voir les playbooks opérationnels',
    definitionTitle: 'Qu’est-ce que le management opérationnel en hôtellerie ?',
    definition:
      'Le management opérationnel en hôtellerie consiste à transformer les standards en comportements quotidiens. Un manager n’est pas seulement là pour résoudre les problèmes. Il donne le rythme, clarifie les priorités, contrôle les points sensibles, accompagne les collaborateurs et s’assure que le même niveau tient malgré la pression, le turnover et les changements de shift.',
    routinesTitle: 'Les rituels qui maintiennent le niveau de service',
    methodTitle: 'Une méthode pratique pour les chefs de service',
    methodIntro:
      'L’objectif n’est pas d’ajouter des réunions ou du contrôle pour le contrôle. L’objectif est de donner aux managers un rythme simple, répétable et utile sans les éloigner du terrain.',
    productTitle: 'Relier les rituels de management aux ressources LuxOps',
    finalTitle: 'Besoin d’accompagner vos chefs de service ?',
    finalBody:
      'Utilisez la formation lorsque les managers doivent transformer les standards en routines quotidiennes. Utilisez les playbooks lorsque les procédures et points de contrôle doivent être documentés par département.',
    relatedTitle: 'Pages liées',
    faqTitle: 'Questions fréquentes',
  },
}

const routines: Record<Locale, Routine[]> = {
  en: [
    {
      title: 'Briefing before service',
      body: 'The briefing gives direction before pressure starts. It should be short, precise and connected to the actual service ahead.',
      points: ['Occupancy, arrivals and VIP notes', 'Sensitive guests or open complaints', 'Operational priorities and standards of the day'],
    },
    {
      title: 'Floor presence',
      body: 'Floor presence is not walking around without purpose. The manager knows where to stand, what to observe and when to intervene.',
      points: ['Observe guest touchpoints', 'Check team posture and timing', 'Intervene before a small gap becomes visible'],
    },
    {
      title: 'Quality control',
      body: 'Standards must become observable control points. Without control points, standards remain intentions.',
      points: ['Room inspection or table inspection', 'Desk readiness and handover checks', 'Service sequence and recovery follow-up'],
    },
    {
      title: 'Feedback and coaching',
      body: 'A useful correction is clear, factual and immediate enough to be understood. It supports progress instead of only pointing out failure.',
      points: ['Name the observed gap', 'Explain the expected standard', 'Agree on the next behavior to repeat'],
    },
    {
      title: 'Manager handover',
      body: 'Managers need handovers too. Open issues, team follow-up, sensitive guests and pending decisions must not depend on memory.',
      points: ['Open guest cases', 'Team members to support', 'Decisions or escalations pending'],
    },
    {
      title: 'Standards follow-up',
      body: 'A standard holds when it is revisited. The manager returns to the same points until they become normal operating behavior.',
      points: ['Weekly standards focus', 'Repeated gap tracking', 'Short follow-up with heads of department'],
    },
  ],
  fr: [
    {
      title: 'Briefing avant service',
      body: 'Le briefing donne une direction avant que la pression ne commence. Il doit être court, précis et relié au service qui arrive réellement.',
      points: ['Occupation, arrivées et notes VIP', 'Clients sensibles ou réclamations ouvertes', 'Priorités opérationnelles et standard du jour'],
    },
    {
      title: 'Présence terrain',
      body: 'La présence terrain ne consiste pas à circuler sans objectif. Le manager sait où se placer, quoi observer et quand intervenir.',
      points: ['Observer les points de contact client', 'Contrôler posture, timing et coordination', 'Intervenir avant qu’un petit écart devienne visible'],
    },
    {
      title: 'Contrôle qualité',
      body: 'Les standards doivent devenir des points de contrôle observables. Sans points de contrôle, les standards restent des intentions.',
      points: ['Inspection chambre ou inspection de table', 'Readiness desk et contrôle de passation', 'Séquence de service et suivi recovery'],
    },
    {
      title: 'Feedback et coaching',
      body: 'Une correction utile est claire, factuelle et assez proche de la situation pour être comprise. Elle aide à progresser au lieu de seulement signaler l’écart.',
      points: ['Nommer l’écart observé', 'Rappeler le standard attendu', 'Valider le comportement à répéter ensuite'],
    },
    {
      title: 'Passation manager',
      body: 'Les managers ont aussi besoin de passations. Les dossiers ouverts, suivis équipe, clients sensibles et décisions en attente ne doivent pas dépendre de la mémoire.',
      points: ['Dossiers client ouverts', 'Collaborateurs à accompagner', 'Décisions ou escalades en attente'],
    },
    {
      title: 'Suivi des standards',
      body: 'Un standard tient lorsqu’il est repris dans le temps. Le manager revient sur les mêmes points jusqu’à ce qu’ils deviennent un comportement normal.',
      points: ['Focus standard hebdomadaire', 'Suivi des écarts répétés', 'Point court avec les chefs de service'],
    },
  ],
}

const methodSteps: Record<Locale, string[]> = {
  en: [
    'Choose one priority standard for the week instead of correcting everything at once.',
    'Brief the standard before service with one expected behavior and one point to watch.',
    'Observe the standard on the floor during the shift, not after the fact.',
    'Give short factual feedback when the gap appears.',
    'Record repeated gaps and decide whether the issue is training, procedure, staffing or communication.',
    'Close the loop during the next manager handover.',
  ],
  fr: [
    'Choisir un standard prioritaire pour la semaine au lieu de corriger tout en même temps.',
    'Briefer le standard avant service avec un comportement attendu et un point à observer.',
    'Observer ce standard sur le terrain pendant le shift, pas après coup.',
    'Donner un feedback court et factuel lorsque l’écart apparaît.',
    'Tracer les écarts répétés et déterminer si le sujet relève de la formation, de la procédure, de l’effectif ou de la communication.',
    'Fermer la boucle lors de la prochaine passation manager.',
  ],
}

const resourceLinks: Record<Locale, LinkCard[]> = {
  en: [
    {
      href: '/en/formation-chefs-de-service',
      label: 'Training',
      title: 'Department leadership training',
      body: 'On-site training for briefings, floor leadership, quality control and team follow-up.',
    },
    {
      href: '/en/training',
      label: 'Service standards',
      title: 'Service standards training',
      body: 'Training for teams and managers around procedures, standards and operational habits.',
    },
    {
      href: '/en/playbooks',
      label: 'Playbooks',
      title: 'Operational playbooks',
      body: 'Department SOP references for Front Office, Housekeeping, F&B and Spa.',
    },
    {
      href: '/en/hotel-operations-playbook',
      label: 'Procedures',
      title: 'Hotel operations playbook',
      body: 'How procedures, checklists, training and standards work together.',
    },
  ],
  fr: [
    {
      href: '/fr/formation-chefs-de-service',
      label: 'Formation',
      title: 'Formation chefs de service',
      body: 'Formation sur site autour du briefing, leadership terrain, contrôle qualité et accompagnement des équipes.',
    },
    {
      href: '/fr/formation',
      label: 'Standards de service',
      title: 'Formation standards de service',
      body: 'Former équipes et managers autour des procédures, standards et réflexes opérationnels.',
    },
    {
      href: '/fr/playbooks',
      label: 'Playbooks',
      title: 'Playbooks opérationnels',
      body: 'Références SOP par département pour Réception, Housekeeping, F&B et Spa.',
    },
    {
      href: '/fr/manuel-procedure-hotellerie',
      label: 'Procédures',
      title: 'Manuel de procédures hôtelières',
      body: 'Comprendre comment procédures, checklists, formation et standards fonctionnent ensemble.',
    },
  ],
}

const relatedLinks: Record<Locale, LinkCard[]> = {
  en: [
    {
      href: '/en/front-office-sop',
      label: 'Front Office',
      title: 'Front Office SOP',
      body: 'Reception routines, handovers, complaints, night audit and desk standards.',
    },
    {
      href: '/en/housekeeping-sop',
      label: 'Housekeeping',
      title: 'Housekeeping SOP',
      body: 'Room standards, inspection controls, supervisor routines and floor handovers.',
    },
    {
      href: '/en/hotel-fb-sop',
      label: 'F&B',
      title: 'F&B SOP',
      body: 'Service sequence, briefing, opening, closing, recovery and manager controls.',
    },
    {
      href: '/en/quality-audit',
      label: 'Audit',
      title: 'Quality audit',
      body: 'Structured review of standards, execution gaps and operational follow-up.',
    },
  ],
  fr: [
    {
      href: '/fr/front-office-sop',
      label: 'Réception',
      title: 'SOP réception',
      body: 'Routines réception, passations, réclamations, Night Audit et standards du desk.',
    },
    {
      href: '/fr/housekeeping-sop',
      label: 'Housekeeping',
      title: 'SOP housekeeping',
      body: 'Standards chambre, contrôles inspection, routines gouvernante et passations aux étages.',
    },
    {
      href: '/fr/hotel-fb-sop',
      label: 'F&B',
      title: 'SOP F&B',
      body: 'Séquence de service, briefing, ouverture, fermeture, recovery et contrôles manager.',
    },
    {
      href: '/fr/audit-qualite',
      label: 'Audit',
      title: 'Audit qualité',
      body: 'Revue structurée des standards, écarts d’exécution et suivis opérationnels.',
    },
  ],
}

const faqs: Record<Locale, FAQItem[]> = {
  en: [
    {
      question: 'What are the most important hotel management routines?',
      answer:
        'The most important routines are pre-service briefing, floor presence, quality control, factual feedback, manager handover and weekly standards follow-up. They create rhythm and keep standards visible during real operations.',
    },
    {
      question: 'How can a department head improve team consistency?',
      answer:
        'A department head improves consistency by making expectations visible, observing the service at the right moments, correcting gaps early and using written procedures as the reference rather than personal preference.',
    },
    {
      question: 'Is leadership training useful for hotel managers?',
      answer:
        'Yes, when it is connected to real service situations. The useful training is not abstract leadership theory. It works on briefings, feedback, floor control, escalation, handovers and maintaining standards under pressure.',
    },
    {
      question: 'How do playbooks support managers?',
      answer:
        'Playbooks give managers a written reference for procedures, standards and control points. This helps them brief, inspect, coach and correct from a shared standard instead of relying only on memory or individual habits.',
    },
  ],
  fr: [
    {
      question: 'Quels sont les rituels de management les plus importants en hôtellerie ?',
      answer:
        'Les rituels les plus importants sont le briefing avant service, la présence terrain, le contrôle qualité, le feedback factuel, la passation manager et le suivi hebdomadaire des standards. Ils donnent du rythme et rendent les standards visibles pendant l’exploitation réelle.',
    },
    {
      question: 'Comment un chef de service peut-il améliorer la régularité de son équipe ?',
      answer:
        'Un chef de service améliore la régularité en rendant les attentes visibles, en observant le service aux bons moments, en corrigeant les écarts rapidement et en utilisant les procédures écrites comme référence plutôt qu’une préférence personnelle.',
    },
    {
      question: 'La formation leadership est-elle utile pour les managers hôteliers ?',
      answer:
        'Oui, si elle reste reliée aux situations de service. La formation utile n’est pas une théorie abstraite du leadership. Elle travaille les briefings, le feedback, le contrôle terrain, l’escalade, les passations et le maintien des standards sous pression.',
    },
    {
      question: 'Comment les playbooks aident-ils les managers ?',
      answer:
        'Les playbooks donnent aux managers une référence écrite pour les procédures, standards et points de contrôle. Ils permettent de briefer, contrôler, coacher et corriger à partir d’un standard partagé plutôt que de dépendre seulement de la mémoire ou des habitudes individuelles.',
    },
  ],
}

export function getHotelManagementRoutinesMetadata(locale: Locale): Metadata {
  const content = CONTENT[locale]

  return {
    title: content.title,
    description: content.description,
    keywords: content.keywords,
    alternates: {
      canonical: `https://www.luxops.fr/${locale}${content.slug}`,
      languages: {
        en: 'https://www.luxops.fr/en/hotel-management-routines',
        fr: 'https://www.luxops.fr/fr/rituels-management-hotelier',
        'x-default': 'https://www.luxops.fr/en/hotel-management-routines',
      },
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `https://www.luxops.fr/${locale}${content.slug}`,
      type: 'article',
      locale,
      alternateLocale: locale === 'en' ? 'fr' : 'en',
    },
  }
}

export function HotelManagementRoutinesPage({ locale }: { locale: Locale }) {
  const content = CONTENT[locale]
  const isEN = locale === 'en'
  const currentRoutines = routines[locale]
  const currentResources = resourceLinks[locale]
  const currentRelated = relatedLinks[locale]
  const currentFaqs = faqs[locale]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: currentFaqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.h1,
    description: content.description,
    author: { '@type': 'Organization', name: 'LuxOps', url: 'https://www.luxops.fr' },
    publisher: {
      '@type': 'Organization',
      name: 'LuxOps',
      url: 'https://www.luxops.fr',
      logo: { '@type': 'ImageObject', url: 'https://www.luxops.fr/og-image.png' },
    },
    url: `https://www.luxops.fr/${locale}${content.slug}`,
    inLanguage: locale,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="min-h-screen bg-white">
        <section
          className="px-6 pt-32 pb-20"
          style={{
            backgroundImage: 'radial-gradient(#c3c6d6 0.5px, transparent 0.5px)',
            backgroundSize: '24px 24px',
          }}
        >
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <p className="mb-6 inline-flex items-center gap-2 bg-[#eef4ff] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#003d9b]">
                <span className="h-2 w-2 rounded-full bg-[#003d9b]" />
                {content.eyebrow}
              </p>
              <h1 className="mb-6 font-display text-4xl font-extrabold leading-[0.98] tracking-tight text-[#0a1d2e] md:text-6xl">
                {content.h1}
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[#4f6074]">
                {content.intro}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <TrackedLink
                  href={isEN ? '/en/formation-chefs-de-service' : '/fr/formation-chefs-de-service'}
                  eventName="training_cta_clicked"
                  eventProperties={{
                    source_page: `/${locale}${content.slug}`,
                    placement: 'hero',
                    cta_label: content.primaryCta,
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-[#003d9b] px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-[#0a1d2e]"
                >
                  {content.primaryCta} <ArrowRight size={16} />
                </TrackedLink>
                <TrackedLink
                  href={`/${locale}/playbooks`}
                  eventName="playbook_cta_clicked"
                  eventProperties={{
                    source_page: `/${locale}${content.slug}`,
                    placement: 'hero',
                    cta_label: content.secondaryCta,
                  }}
                  className="inline-flex items-center justify-center gap-2 border border-[#d8deea] bg-white px-6 py-4 text-sm font-bold text-[#0a1d2e] transition-colors hover:border-[#003d9b]"
                >
                  {content.secondaryCta} <ArrowRight size={16} />
                </TrackedLink>
              </div>
            </div>

            <div className="border border-[#d8deea] bg-white p-8 shadow-[0_24px_70px_rgba(10,29,46,0.10)] lg:p-10">
              <div className="mb-7 flex h-12 w-12 items-center justify-center bg-[#eef4ff] text-[#003d9b]">
                <Users2 size={24} />
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#003d9b]">
                {isEN ? 'Core idea' : 'Idée centrale'}
              </p>
              <h2 className="mb-5 font-display text-2xl font-extrabold tracking-tight text-[#0a1d2e]">
                {content.definitionTitle}
              </h2>
              <p className="text-sm leading-relaxed text-[#4f6074]">{content.definition}</p>
            </div>
          </div>
        </section>

        <section className="border-y border-[#e8edf5] bg-white px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#003d9b]">
                {isEN ? 'Daily rhythm' : 'Rythme quotidien'}
              </p>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0a1d2e] md:text-4xl">
                {content.routinesTitle}
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {currentRoutines.map((routine, index) => {
                const icons = [MessageSquareText, Eye, ClipboardCheck, ShieldCheck, RefreshCw, Layers]
                const Icon = icons[index] ?? ClipboardCheck
                return (
                  <article key={routine.title} className="border border-[#e8edf5] bg-[#f8f9ff] p-6">
                    <Icon size={22} className="mb-5 text-[#003d9b]" />
                    <h3 className="mb-3 font-display text-lg font-bold text-[#0a1d2e]">{routine.title}</h3>
                    <p className="mb-5 text-sm leading-relaxed text-[#4f6074]">{routine.body}</p>
                    <ul className="space-y-2">
                      {routine.points.map((point) => (
                        <li key={point} className="flex gap-2 text-sm leading-relaxed text-[#4f6074]">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#003d9b]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#f8f9ff] px-6 py-16">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#003d9b]">
                {isEN ? 'Method' : 'Méthode'}
              </p>
              <h2 className="mb-5 font-display text-3xl font-extrabold tracking-tight text-[#0a1d2e]">
                {content.methodTitle}
              </h2>
              <p className="leading-relaxed text-[#4f6074]">{content.methodIntro}</p>
            </div>
            <div className="border border-[#d8deea] bg-white p-6">
              <ol className="space-y-4">
                {methodSteps[locale].map((step, index) => (
                  <li key={step} className="grid grid-cols-[36px_1fr] gap-3 text-sm leading-relaxed text-[#4f6074]">
                    <span className="flex h-8 w-8 items-center justify-center bg-[#003d9b] text-xs font-bold text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#003d9b]">
                {isEN ? 'Resources' : 'Ressources'}
              </p>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0a1d2e]">
                {content.productTitle}
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {currentResources.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group border border-[#e8edf5] p-7 transition-colors hover:border-[#003d9b]"
                >
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#003d9b]">{link.label}</p>
                  <h3 className="mb-3 font-display text-xl font-bold text-[#0a1d2e] group-hover:text-[#003d9b]">
                    {link.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-[#4f6074]">{link.body}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#003d9b]">
                    {isEN ? 'Open page' : 'Voir la page'} <ArrowRight size={15} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#e8edf5] bg-[#f8f9ff] px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 font-display text-3xl font-extrabold tracking-tight text-[#0a1d2e]">
              {content.relatedTitle}
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {currentRelated.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border border-[#e8edf5] bg-white p-6 transition-colors hover:border-[#003d9b]"
                >
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#003d9b]">{link.label}</p>
                  <h3 className="mb-2 font-display font-bold text-[#0a1d2e]">{link.title}</h3>
                  <p className="text-sm leading-relaxed text-[#4f6074]">{link.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#003d9b]">FAQ</p>
            <h2 className="mb-8 font-display text-3xl font-extrabold tracking-tight text-[#0a1d2e]">
              {content.faqTitle}
            </h2>
            <div className="space-y-6">
              {currentFaqs.map((item) => (
                <article key={item.question} className="border-b border-[#e8edf5] pb-6 last:border-b-0">
                  <h3 className="mb-2 font-bold text-[#0a1d2e]">{item.question}</h3>
                  <p className="text-sm leading-relaxed text-[#4f6074]">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0a1d2e] px-6 py-16 text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#8fb7ff]">
                {isEN ? 'Next step' : 'Prochaine étape'}
              </p>
              <h2 className="mb-4 font-display text-3xl font-extrabold tracking-tight">
                {content.finalTitle}
              </h2>
              <p className="leading-relaxed text-[#cbd5e1]">{content.finalBody}</p>
            </div>
            <TrackedLink
              href={isEN ? '/en/formation-chefs-de-service' : '/fr/formation-chefs-de-service'}
              eventName="training_cta_clicked"
              eventProperties={{
                source_page: `/${locale}${content.slug}`,
                placement: 'final_cta',
                cta_label: content.primaryCta,
              }}
              className="inline-flex flex-shrink-0 items-center justify-center gap-2 bg-white px-6 py-4 text-sm font-bold text-[#0a1d2e] transition-colors hover:bg-[#eef4ff]"
            >
              {content.primaryCta} <ArrowRight size={16} />
            </TrackedLink>
          </div>
        </section>
      </main>
    </>
  )
}
