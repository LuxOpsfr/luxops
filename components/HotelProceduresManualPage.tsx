import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, ClipboardCheck, GraduationCap, Layers, ShieldCheck } from 'lucide-react'
import TrackedLink from '@/components/TrackedLink'

type Locale = 'en' | 'fr'

type SectionBlock = {
  title: string
  body: string
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
    slug: '/hotel-operations-playbook',
    alternateSlug: '/manuel-procedure-hotellerie',
    title: 'Hotel Operations Playbook: SOPs, Standards and Procedures | LuxOps',
    description:
      'Understand what a hotel operations playbook is, how it differs from SOPs, checklists and training manuals, and how to structure procedures by department.',
    keywords:
      'hotel operations playbook, hotel operations manual, hotel SOP manual, hotel procedures manual, hotel standards manual, hotel playbook, hotel SOP system',
    eyebrow: 'Hotel operations manual',
    h1: 'Hotel Operations Playbook: SOPs, Standards and Department Procedures',
    intro:
      'A hotel operations playbook is the practical reference that connects procedures, service standards, checklists, training and daily management. It is not a generic manual stored in a folder. It is the document teams use to run the operation with consistency.',
    primaryCta: 'View department playbooks',
    secondaryCta: 'Start with starter packs',
    productIntro:
      'If you need daily tools first, start with a Starter Pack. If you need the full department reference, use the complete Playbook.',
    whatTitle: 'What is a hotel operations playbook?',
    whatBody:
      'A hotel operations playbook is a structured set of operating procedures for one or several departments. It explains how the work should be done, who owns each step, when to escalate, how information is handed over, and how quality is checked. It gives managers, supervisors and team members one shared reference instead of relying on memory, habits or verbal transmission.',
    differenceTitle: 'SOP, checklist, training manual or playbook: what is the difference?',
    blocks: [
      {
        title: 'SOP',
        body: 'A Standard Operating Procedure explains how one task or situation must be handled. Example: check-in, room inspection, billing dispute, restaurant opening or complaint recovery.',
      },
      {
        title: 'Checklist',
        body: 'A checklist verifies that the work has been done correctly. It does not replace the SOP. It controls the result against a clear standard.',
      },
      {
        title: 'Training manual',
        body: 'A training manual helps a collaborator learn the standard. It should be based on the SOPs, not on individual habits or shadowing only.',
      },
      {
        title: 'Playbook',
        body: 'A playbook connects SOPs, checklists, handovers, service standards and management routines into one operational system for a department.',
      },
    ] as SectionBlock[],
    whyTitle: 'Why it matters in hotel operations',
    whyItems: [
      'Reduce service variation between shifts and collaborators',
      'Shorten onboarding because the expected method is written',
      'Protect handovers between Front Office, Housekeeping and F&B',
      'Give supervisors a clear basis for coaching and inspection',
      'Make audits and training easier because the standard is visible',
      'Keep operational knowledge inside the property when teams change',
    ],
    structureTitle: 'What a good hotel procedures manual should include',
    structureIntro:
      'A useful hotel procedures manual should be structured by department and by moment of operation. The goal is not to list every possible topic. The goal is to make the most important routines easy to find, easy to apply and easy to update.',
    structureItems: [
      'Department standards and service philosophy',
      'Core SOPs by role and shift moment',
      'Exception procedures for guest complaints, delays, room status gaps and billing issues',
      'Shift handover templates and communication rules',
      'Quality control points, inspection forms and sign-off logic',
      'Training sequence for new collaborators and seasonal refreshers',
      'Escalation paths for managers and heads of department',
    ],
    departmentsTitle: 'Build the manual by department',
    productTitle: 'Choose the right LuxOps format',
    finalTitle: 'Need a procedure system your teams can actually use?',
    finalBody:
      'Start with a practical pack if you need immediate tools. Move to the full playbooks when you need complete SOP references by department.',
    faqTitle: 'Frequently asked questions',
    relatedTitle: 'Related pages',
  },
  fr: {
    slug: '/manuel-procedure-hotellerie',
    alternateSlug: '/hotel-operations-playbook',
    title: 'Manuel de procédures hôtellerie : SOP, standards et playbooks | LuxOps',
    description:
      'Comprendre ce qu’est un manuel de procédures hôtellerie, comment structurer les SOP, standards, checklists, passations et formations par département.',
    keywords:
      'manuel procédure hôtellerie, manuel de procédures hôtelières, procédures hôtel, SOP hôtel, manuel opérationnel hôtelier, standards de service hôtel, playbook hôtel',
    eyebrow: 'Manuel de procédures hôtellerie',
    h1: 'Manuel de procédures hôtelières : structurer les SOP, standards et passations',
    intro:
      'Un manuel de procédures hôtelières est la référence opérationnelle qui relie les procédures, les standards de service, les checklists, la formation et le management quotidien. Ce n’est pas un document générique rangé dans un dossier. C’est un support que les équipes peuvent utiliser pour travailler avec plus de régularité.',
    primaryCta: 'Voir les playbooks',
    secondaryCta: 'Voir les starter packs',
    productIntro:
      'Si vous avez d’abord besoin d’outils du quotidien, commencez avec un Starter Pack. Si vous cherchez une référence complète par département, utilisez le Playbook complet.',
    whatTitle: 'Qu’est-ce qu’un manuel de procédures hôtelières ?',
    whatBody:
      'Un manuel de procédures hôtelières est un ensemble structuré de procédures opérationnelles pour un ou plusieurs départements. Il explique comment le travail doit être réalisé, qui est responsable de chaque étape, quand escalader, comment transmettre l’information et comment contrôler la qualité. Il donne aux managers, superviseurs et collaborateurs une référence commune au lieu de dépendre de la mémoire, des habitudes ou de la transmission orale.',
    differenceTitle: 'SOP, checklist, support de formation ou playbook : quelle différence ?',
    blocks: [
      {
        title: 'SOP',
        body: 'Une SOP décrit comment une tâche ou une situation doit être traitée. Exemple : check-in, inspection chambre, litige de facturation, ouverture restaurant ou recovery client.',
      },
      {
        title: 'Checklist',
        body: 'Une checklist vérifie que le travail a été fait correctement. Elle ne remplace pas la SOP. Elle contrôle le résultat par rapport à un standard clair.',
      },
      {
        title: 'Support de formation',
        body: 'Un support de formation aide un collaborateur à apprendre le standard. Il doit s’appuyer sur les SOP, pas uniquement sur l’observation ou les habitudes individuelles.',
      },
      {
        title: 'Playbook',
        body: 'Un playbook relie les SOP, checklists, passations, standards de service et routines managériales dans un système opérationnel complet pour un département.',
      },
    ] as SectionBlock[],
    whyTitle: 'Pourquoi c’est important dans les opérations hôtelières',
    whyItems: [
      'Réduire les écarts de service entre les shifts et les collaborateurs',
      'Accélérer l’intégration parce que la méthode attendue est écrite',
      'Sécuriser les passations entre réception, housekeeping et F&B',
      'Donner aux superviseurs une base claire pour coacher et contrôler',
      'Faciliter les audits et la formation parce que le standard est visible',
      'Conserver le savoir opérationnel dans l’établissement malgré les changements d’équipe',
    ],
    structureTitle: 'Ce qu’un bon manuel de procédures doit contenir',
    structureIntro:
      'Un manuel utile doit être structuré par département et par moment opérationnel. L’objectif n’est pas de lister tous les sujets possibles. L’objectif est de rendre les routines importantes faciles à trouver, faciles à appliquer et faciles à mettre à jour.',
    structureItems: [
      'Standards du département et philosophie de service',
      'SOP principales par rôle et moment de shift',
      'Procédures d’exception pour réclamations, retards, écarts de statut chambre et litiges de facturation',
      'Modèles de passation et règles de communication',
      'Points de contrôle qualité, fiches d’inspection et logique de validation',
      'Séquence de formation pour nouveaux collaborateurs et remise à niveau saisonnière',
      'Chemins d’escalade pour managers et chefs de service',
    ],
    departmentsTitle: 'Construire le manuel par département',
    productTitle: 'Choisir le bon format LuxOps',
    finalTitle: 'Besoin d’un système de procédures vraiment utilisable ?',
    finalBody:
      'Commencez avec un pack pratique si vous avez besoin d’outils immédiats. Passez aux playbooks complets si vous cherchez une référence SOP complète par département.',
    faqTitle: 'Questions fréquentes',
    relatedTitle: 'Pages liées',
  },
}

const departmentLinks: Record<Locale, LinkCard[]> = {
  en: [
    {
      href: '/en/front-office-sop',
      label: 'Front Office',
      title: 'Front Office SOP',
      body: 'Check-in, check-out, handover, complaint handling, night audit and guest communication.',
    },
    {
      href: '/en/housekeeping-sop',
      label: 'Housekeeping',
      title: 'Housekeeping SOP',
      body: 'Room cleaning, inspection, linen, turndown, defects, room status and supervisor controls.',
    },
    {
      href: '/en/hotel-fb-sop',
      label: 'F&B',
      title: 'F&B SOP',
      body: 'Restaurant, bar, room service, breakfast, opening, closing and recovery standards.',
    },
    {
      href: '/en/playbooks/spa',
      label: 'Spa',
      title: 'Spa & Wellness Playbook',
      body: 'Spa reception, treatment sequence, hygiene, therapist standards and retail routines.',
    },
  ],
  fr: [
    {
      href: '/fr/front-office-sop',
      label: 'Réception',
      title: 'SOP réception',
      body: 'Check-in, check-out, passation, réclamation, Night Audit et communication client.',
    },
    {
      href: '/fr/housekeeping-sop',
      label: 'Housekeeping',
      title: 'SOP housekeeping',
      body: 'Chambre, inspection, linge, couverture, défauts, statut chambre et contrôles gouvernante.',
    },
    {
      href: '/fr/hotel-fb-sop',
      label: 'F&B',
      title: 'SOP F&B',
      body: 'Restaurant, bar, room service, petit déjeuner, ouverture, fermeture et standards recovery.',
    },
    {
      href: '/fr/playbooks/spa',
      label: 'Spa',
      title: 'Playbook Spa & Wellness',
      body: 'Accueil spa, séquence soin, hygiène, standards thérapeute et routines retail.',
    },
  ],
}

const productLinks: Record<Locale, LinkCard[]> = {
  en: [
    {
      href: '/en/playbooks',
      label: 'Products',
      title: 'Starter Packs and Playbooks',
      body: 'Compare practical starter packs and complete department playbooks in one place.',
    },
    {
      href: '/en/free-hotel-procedures',
      label: 'Free chapter',
      title: 'Download a free procedure chapter',
      body: 'Preview how LuxOps procedures are structured before choosing a product.',
    },
    {
      href: '/en/bespoke-process',
      label: 'Custom',
      title: 'Custom process documentation',
      body: 'Turn your own standards, values and service rituals into operational procedures.',
    },
    {
      href: '/en/training',
      label: 'Training',
      title: 'On-site service standards training',
      body: 'Use procedures and standards as training material for managers and operational teams.',
    },
  ],
  fr: [
    {
      href: '/fr/playbooks',
      label: 'Produits',
      title: 'Starter packs et playbooks',
      body: 'Comparer les starter packs pratiques et les playbooks complets par département.',
    },
    {
      href: '/fr/free-hotel-procedures',
      label: 'Chapitre gratuit',
      title: 'Télécharger un chapitre de procédure',
      body: 'Voir comment les procédures LuxOps sont structurées avant de choisir un produit.',
    },
    {
      href: '/fr/process-sur-mesure',
      label: 'Sur mesure',
      title: 'Documentation process sur mesure',
      body: 'Transformer vos standards, valeurs et rituels de service en procédures opérationnelles.',
    },
    {
      href: '/fr/formation',
      label: 'Formation',
      title: 'Formation standards de service sur site',
      body: 'Utiliser les procédures et standards comme support de formation pour managers et équipes opérationnelles.',
    },
  ],
}

const relatedLinks: Record<Locale, LinkCard[]> = {
  en: [
    {
      href: '/en/hotel-sop',
      label: 'SOP',
      title: 'Hotel SOP templates',
      body: 'A commercial overview of LuxOps SOP documents, starter packs and playbooks.',
    },
    {
      href: '/en/how-to-improve-hotel-operations',
      label: 'Operations',
      title: 'How to improve hotel operations',
      body: 'Five practical levers for SOPs, handovers, quality control and training.',
    },
    {
      href: '/en/hotel-checklist',
      label: 'Checklist',
      title: 'Hotel operational checklists',
      body: 'Understand where checklists fit inside a broader procedure system.',
    },
  ],
  fr: [
    {
      href: '/fr/hotel-sop',
      label: 'SOP',
      title: 'Modèles de SOP hôtel',
      body: 'Vue d’ensemble commerciale des documents SOP, starter packs et playbooks LuxOps.',
    },
    {
      href: '/fr/how-to-improve-hotel-operations',
      label: 'Opérations',
      title: 'Améliorer les opérations hôtelières',
      body: 'Cinq leviers pratiques pour procédures, passations, contrôle qualité et formation.',
    },
    {
      href: '/fr/hotel-checklist',
      label: 'Checklist',
      title: 'Checklists opérationnelles',
      body: 'Comprendre la place des checklists dans un système de procédures plus large.',
    },
  ],
}

const faqs: Record<Locale, FAQItem[]> = {
  en: [
    {
      question: 'Is a hotel operations playbook the same as an SOP manual?',
      answer:
        'No. An SOP manual usually lists procedures. A playbook goes further by connecting procedures with checklists, handovers, quality controls, training logic and manager routines. It is more practical for daily operation.',
    },
    {
      question: 'Do independent hotels need a procedures manual?',
      answer:
        'Yes. Independent hotels often need it even more because their standards are not always supported by a corporate brand manual. A clear procedure manual helps protect service consistency as teams change.',
    },
    {
      question: 'Should procedures be written by department or by guest journey?',
      answer:
        'Both are useful, but the operational base should be written by department first. Front Office, Housekeeping, F&B and Spa each need their own routines, controls and escalation rules. The guest journey can then connect those departments.',
    },
    {
      question: 'What is the first procedure to write?',
      answer:
        'Start with the moments where errors are visible to guests or create rework: shift handover, room status discrepancy, complaint handling, room inspection, billing dispute and service opening checks.',
    },
  ],
  fr: [
    {
      question: 'Un manuel de procédures hôtelières est-il la même chose qu’un manuel SOP ?',
      answer:
        'Pas exactement. Un manuel SOP liste généralement les procédures. Un playbook va plus loin en reliant procédures, checklists, passations, contrôles qualité, logique de formation et routines managériales. Il est plus utile pour l’exploitation quotidienne.',
    },
    {
      question: 'Un hôtel indépendant a-t-il besoin d’un manuel de procédures ?',
      answer:
        'Oui. Les hôtels indépendants en ont souvent encore plus besoin, car leurs standards ne sont pas toujours soutenus par un manuel de marque corporate. Un manuel clair aide à maintenir la régularité du service lorsque les équipes changent.',
    },
    {
      question: 'Faut-il écrire les procédures par département ou par parcours client ?',
      answer:
        'Les deux approches sont utiles, mais la base opérationnelle doit d’abord être structurée par département. Réception, housekeeping, F&B et spa ont chacun leurs routines, contrôles et règles d’escalade. Le parcours client peut ensuite relier ces départements.',
    },
    {
      question: 'Quelle procédure écrire en premier ?',
      answer:
        'Commencez par les moments où les erreurs sont visibles pour le client ou créent du re-travail : passation de service, écart de statut chambre, gestion des réclamations, inspection chambre, litige de facturation et contrôles d’ouverture de service.',
    },
  ],
}

export function getHotelProceduresManualMetadata(locale: Locale): Metadata {
  const content = CONTENT[locale]
  const alternate = CONTENT[locale === 'en' ? 'fr' : 'en']

  return {
    title: content.title,
    description: content.description,
    keywords: content.keywords,
    alternates: {
      canonical: `https://www.luxops.fr/${locale}${content.slug}`,
      languages: {
        en: 'https://www.luxops.fr/en/hotel-operations-playbook',
        fr: 'https://www.luxops.fr/fr/manuel-procedure-hotellerie',
        'x-default': 'https://www.luxops.fr/en/hotel-operations-playbook',
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
    other: {
      'x-alt-slug': alternate.slug,
    },
  }
}

export function HotelProceduresManualPage({ locale }: { locale: Locale }) {
  const content = CONTENT[locale]
  const isEN = locale === 'en'
  const currentProductLinks = productLinks[locale]
  const currentDepartmentLinks = departmentLinks[locale]
  const currentRelatedLinks = relatedLinks[locale]
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
        <section className="bg-[#1A2E44] px-6 pt-32 pb-20 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-blue-100">
              {content.eyebrow}
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              {content.h1}
            </h1>
            <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-blue-100">
              {content.intro}
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <TrackedLink
                href={`/${locale}/playbooks`}
                eventName="playbook_cta_clicked"
                eventProperties={{
                  source_page: `/${locale}${content.slug}`,
                  placement: 'hero',
                  cta_label: content.primaryCta,
                }}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-4 text-sm font-bold text-[#1A2E44] hover:bg-blue-50"
              >
                {content.primaryCta} <ArrowRight size={16} />
              </TrackedLink>
              <TrackedLink
                href={`/${locale}/hotel-sop`}
                eventName="seo_cta_clicked"
                eventProperties={{
                  source_page: `/${locale}${content.slug}`,
                  placement: 'hero',
                  cta_label: content.secondaryCta,
                }}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-7 py-4 text-sm font-bold text-white hover:bg-white/10"
              >
                {content.secondaryCta} <ArrowRight size={16} />
              </TrackedLink>
            </div>
          </div>
        </section>

        <section className="border-b border-gray-100 bg-gray-50 px-6 py-12">
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: isEN ? 'One reference' : 'Une référence commune',
                body: isEN
                  ? 'A shared procedure manual reduces dependence on memory and verbal transmission.'
                  : 'Un manuel partagé réduit la dépendance à la mémoire et à la transmission orale.',
              },
              {
                icon: ClipboardCheck,
                title: isEN ? 'One standard' : 'Un standard clair',
                body: isEN
                  ? 'SOPs define the method, checklists verify that the result matches the standard.'
                  : 'Les SOP définissent la méthode, les checklists vérifient que le résultat correspond au standard.',
              },
              {
                icon: ShieldCheck,
                title: isEN ? 'One control system' : 'Un système de contrôle',
                body: isEN
                  ? 'Managers can train, inspect and correct against a documented operational standard.'
                  : 'Les managers peuvent former, contrôler et corriger à partir d’un standard documenté.',
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="rounded-xl border border-gray-200 bg-white p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#eef4ff] text-[#003d9b]">
                    <Icon size={20} />
                  </div>
                  <h2 className="mb-2 text-lg font-bold text-[#1A2E44]">{item.title}</h2>
                  <p className="text-sm leading-relaxed text-gray-600">{item.body}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#003d9b]">
              {isEN ? 'Definition' : 'Définition'}
            </p>
            <h2 className="mb-5 text-3xl font-bold text-[#1A2E44]">{content.whatTitle}</h2>
            <p className="text-lg leading-relaxed text-gray-600">{content.whatBody}</p>
          </div>
        </section>

        <section className="border-y border-gray-100 bg-gray-50 px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-9 max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#003d9b]">
                {isEN ? 'Clarify the terms' : 'Clarifier les termes'}
              </p>
              <h2 className="text-3xl font-bold text-[#1A2E44]">{content.differenceTitle}</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {content.blocks.map((block) => (
                <article key={block.title} className="rounded-xl border border-gray-200 bg-white p-6">
                  <h3 className="mb-3 text-xl font-bold text-[#1A2E44]">{block.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{block.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#003d9b]">
                {isEN ? 'Operational value' : 'Valeur opérationnelle'}
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[#1A2E44]">{content.whyTitle}</h2>
              <p className="leading-relaxed text-gray-600">
                {isEN
                  ? 'The value of a procedure manual is not the document itself. The value is the operational behavior it makes repeatable.'
                  : 'La valeur d’un manuel de procédures ne vient pas du document en lui-même. Elle vient du comportement opérationnel qu’il rend répétable.'}
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <ul className="grid gap-4 sm:grid-cols-2">
                {content.whyItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-gray-700">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#003d9b]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-y border-gray-100 bg-[#f7f9fc] px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#003d9b]">
              {isEN ? 'Recommended structure' : 'Structure recommandée'}
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[#1A2E44]">{content.structureTitle}</h2>
            <p className="mb-8 leading-relaxed text-gray-600">{content.structureIntro}</p>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <ol className="space-y-4">
                {content.structureItems.map((item, index) => (
                  <li key={item} className="grid grid-cols-[36px_1fr] gap-3 text-sm leading-relaxed text-gray-700">
                    <span className="flex h-8 w-8 items-center justify-center rounded bg-[#003d9b] text-xs font-bold text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="pt-1">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-9 max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#003d9b]">
                {isEN ? 'Department logic' : 'Logique par département'}
              </p>
              <h2 className="text-3xl font-bold text-[#1A2E44]">{content.departmentsTitle}</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {currentDepartmentLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-colors hover:border-[#003d9b]"
                >
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#003d9b]">{link.label}</p>
                  <h3 className="mb-2 text-xl font-bold text-[#1A2E44]">{link.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">{link.body}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#003d9b]">
                    {isEN ? 'Open page' : 'Voir la page'} <ArrowRight size={15} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-gray-100 bg-gray-50 px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-9 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#003d9b]">
                  {isEN ? 'From explanation to action' : 'De l’explication à l’action'}
                </p>
                <h2 className="text-3xl font-bold text-[#1A2E44]">{content.productTitle}</h2>
              </div>
              <p className="leading-relaxed text-gray-600">{content.productIntro}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {currentProductLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-gray-200 bg-white p-6 transition-colors hover:border-[#003d9b]"
                >
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#003d9b]">{link.label}</p>
                  <h3 className="mb-2 text-xl font-bold text-[#1A2E44]">{link.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">{link.body}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#003d9b]">
                    {isEN ? 'Continue' : 'Continuer'} <ArrowRight size={15} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#003d9b]">
              {isEN ? 'FAQ' : 'FAQ'}
            </p>
            <h2 className="mb-8 text-3xl font-bold text-[#1A2E44]">{content.faqTitle}</h2>
            <div className="space-y-6">
              {currentFaqs.map((item) => (
                <article key={item.question} className="border-b border-gray-100 pb-6 last:border-b-0">
                  <h3 className="mb-2 font-semibold text-[#1A2E44]">{item.question}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1A2E44] px-6 py-14 text-white">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-200">
                {isEN ? 'Next step' : 'Prochaine étape'}
              </p>
              <h2 className="mb-3 text-3xl font-bold">{content.finalTitle}</h2>
              <p className="leading-relaxed text-blue-100">{content.finalBody}</p>
            </div>
            <TrackedLink
              href={`/${locale}/playbooks`}
              eventName="playbook_cta_clicked"
              eventProperties={{
                source_page: `/${locale}${content.slug}`,
                placement: 'final_cta',
                cta_label: isEN ? 'View LuxOps products' : 'Voir les produits LuxOps',
              }}
              className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-7 py-4 text-sm font-bold text-[#1A2E44] hover:bg-blue-50"
            >
              {isEN ? 'View LuxOps products' : 'Voir les produits LuxOps'} <ArrowRight size={16} />
            </TrackedLink>
          </div>
        </section>

        <section className="px-6 py-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-6 text-xl font-bold text-[#1A2E44]">{content.relatedTitle}</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {currentRelatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-gray-200 bg-white p-5 transition-colors hover:border-[#003d9b]"
                >
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#003d9b]">{link.label}</p>
                  <h3 className="mb-2 font-semibold text-[#1A2E44]">{link.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{link.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
