import type { Metadata } from 'next'
import type { TrainingSeoPageData } from '@/components/TrainingSeoPage'
import DepartmentTrainingPage from '@/components/DepartmentTrainingPage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'

  return {
    title: isEn ? "Hotel Housekeeping Training for Teams & Supervisors | LuxOps" : "Formation Housekeeping : équipes et gouvernantes | LuxOps",
    description: isEn
      ? "Sharpen your team’s eye for quality, develop professional judgement and bring five-star standards to every floor."
      : "Affinez le regard qualité, développez l’autonomie des équipes et faites vivre les standards cinq étoiles à chaque étage.",
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/formation-housekeeping-hotel`,
      languages: {
        en: 'https://www.luxops.fr/en/formation-housekeeping-hotel',
        fr: 'https://www.luxops.fr/fr/formation-housekeeping-hotel',
        'x-default': 'https://www.luxops.fr/en/formation-housekeeping-hotel',
      },
    },
  }
}

export default async function FormationHousekeepingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEn = locale === 'en'
  return <DepartmentTrainingPage department="hsk" locale={locale} data={isEn ? englishData() : frenchData()} />
}

const frenchData = (): TrainingSeoPageData => ({
  "badge": "Formation housekeeping",
  "title": "Formation Housekeeping : l’excellence dans chaque détail.",
  "intro": "Un accompagnement sur site qui associe exigence de présentation, management de proximité et méthodes de travail adaptées à votre établissement.",
  "context": "Dans l’hôtellerie de luxe, la qualité d’une chambre ne se résume pas à sa propreté. Elle se lit dans la précision des finitions, la discrétion du service et l’attention portée aux habitudes du client.",
  "primaryCta": "Demander un devis formation",
  "secondaryCta": "Voir le Playbook Housekeeping",
  "secondaryHref": "/fr/playbooks/hsk",
  "overviewLabel": "L’exigence des étages",
  "overviewTitle": "Passer d’un travail bien réalisé à une expérience irréprochable.",
  "overviewText": "La formation s’appuie sur le savoir-faire de vos équipes pour affiner leur jugement, harmoniser l’évaluation de la qualité et renforcer le rôle des gouvernantes dans la progression de chacun.",
  "modulesLabel": "Modules housekeeping",
  "modulesTitle": "Perfectionner le savoir-faire. Faire durer les standards.",
  "modules": [
    {
      "title": "Le regard qualité cinq étoiles",
      "text": "Affiner l’évaluation des finitions, de la présentation et du confort. Harmoniser les critères d’inspection pour que chaque chambre reflète l’identité et l’exigence de votre établissement."
    },
    {
      "title": "L’attention personnalisée et la discrétion",
      "text": "Anticiper les préférences, respecter les effets personnels et adapter les attentions avec justesse. Développer une posture de service attentive, y compris lorsque le client est présent."
    },
    {
      "title": "Le leadership des gouvernantes",
      "text": "Transformer l’inspection en accompagnement : expliquer les attentes, donner un feedback précis et développer l’autonomie sans multiplier les reprises ou les contrôles."
    },
    {
      "title": "Des méthodes de travail plus fluides",
      "text": "Repenser l’organisation des vacations, la circulation des informations et les priorités avec la réception et la maintenance. Identifier les étapes qui font perdre du temps sans contribuer à la qualité."
    },
    {
      "title": "Les outils au service des équipes",
      "text": "Exploiter les logiciels Housekeeping, les statuts de chambre et les signalements pour fiabiliser le suivi. Faciliter leur adoption avec des usages simples, reliés aux situations de service."
    },
    {
      "title": "Un référentiel qui se transmet",
      "text": "Formaliser les standards travaillés dans les procédures, checklists et supports de briefing. Donner aux responsables une base commune pour intégrer, accompagner et maintenir le niveau de service."
    }
  ],
  "methodLabel": "Méthode",
  "methodTitle": "Perfectionner les pratiques dans votre environnement.",
  "methodText": "Observation des pratiques, calibrage des inspections et mises en situation se déroulent au plus près de vos opérations. Les échanges avec les gouvernantes relient chaque ajustement à l’expérience client et aux conditions de travail des équipes.",
  "outcomes": [
    "Partager une même lecture des standards de présentation et de service.",
    "Développer l’autonomie et l’attention personnalisée des équipes d’étage.",
    "Renforcer le coaching quotidien des gouvernantes.",
    "Faire vivre un référentiel commun, soutenu par les outils métier."
  ],
  "relatedLabel": "Pages liées",
  "relatedTitle": "Compléter le travail housekeeping",
  "related": [
    {
      "href": "/fr/methode-formation-luxops",
      "title": "Méthode de formation LuxOps",
      "text": "Voir comment les standards d’étage deviennent des séquences, contrôles et routines reprises après la session."
    },
    {
      "href": "/fr/formation-equipe-hoteliere",
      "title": "Formation équipes hôtelières",
      "text": "Page large pour les standards de service, la coordination entre services et l’intégration des collaborateurs."
    },
    {
      "href": "/fr/formation-chefs-de-service",
      "title": "Formation chefs de service",
      "text": "Briefings, suivi terrain, contrôle qualité et accompagnement des responsables opérationnels."
    },
    {
      "href": "/fr/playbooks/hsk",
      "title": "Housekeeping SOP manual",
      "text": "Checklists et outils de contrôle pour soutenir le travail d’inspection et de suivi qualité."
    }
  ],
  "finalTitle": "Besoin de stabiliser vos standards housekeeping ?",
  "finalText": "Envoyez quelques informations sur votre établissement, la période envisagée et le nombre de collaborateurs concernés.",
  "finalCta": "Demander un devis formation"
})

const englishData = (): TrainingSeoPageData => ({
  "badge": "Housekeeping training",
  "title": "Housekeeping training: excellence in every detail.",
  "intro": "On-property development combining exacting presentation, hands-on leadership and working methods suited to your hotel.",
  "context": "In luxury hospitality, a room’s quality goes beyond cleanliness. It is reflected in precise finishing, discreet service and attention to each guest’s habits.",
  "primaryCta": "Request a training quote",
  "secondaryCta": "View Housekeeping Playbook",
  "secondaryHref": "/en/playbooks/hsk",
  "overviewLabel": "Housekeeping excellence",
  "overviewTitle": "From a well-prepared room to an exceptional guest experience.",
  "overviewText": "Training builds on your team’s existing expertise to refine judgement, align quality assessments and strengthen supervisors’ role in developing every colleague.",
  "modulesLabel": "Housekeeping modules",
  "modulesTitle": "Refine the craft. Sustain the standards.",
  "modules": [
    {
      "title": "An eye for five-star quality",
      "text": "Refine the assessment of finishing, presentation and comfort. Align inspection criteria so every room reflects your property’s identity and service expectations."
    },
    {
      "title": "Personal attention and discretion",
      "text": "Anticipate preferences, respect personal belongings and tailor thoughtful touches. Develop an attentive service style, including when guests are present."
    },
    {
      "title": "Housekeeping leadership",
      "text": "Turn inspections into coaching: communicate expectations, give specific feedback and build independence without relying on repeated corrections or checks."
    },
    {
      "title": "Smoother working methods",
      "text": "Review shift organisation, information flow and priorities with Front Office and maintenance. Identify steps that consume time without contributing to quality."
    },
    {
      "title": "Systems that support the team",
      "text": "Use Housekeeping software, room statuses and issue reporting to improve follow-up. Support adoption through straightforward uses linked to real service situations."
    },
    {
      "title": "Standards that can be passed on",
      "text": "Document the standards covered in procedures, checklists and briefing materials. Give managers a common reference for onboarding, coaching and sustaining service quality."
    }
  ],
  "methodLabel": "Method",
  "methodTitle": "Refine practice in your own environment.",
  "methodText": "Observation, inspection calibration and practical scenarios take place close to your daily operations. Discussions with supervisors connect each improvement to the guest experience and the team’s working conditions.",
  "outcomes": [
    "Share a consistent understanding of presentation and service standards.",
    "Develop independent judgement and personalised attention.",
    "Strengthen supervisors’ daily coaching.",
    "Maintain a shared reference supported by hotel systems."
  ],
  "relatedLabel": "Related pages",
  "relatedTitle": "Continue the housekeeping work",
  "related": [
    {
      "href": "/en/luxops-training-method",
      "title": "LuxOps training method",
      "text": "See how floor standards become sequences, controls and routines reinforced after the session."
    },
    {
      "href": "/en/formation-equipe-hoteliere",
      "title": "Hotel team training",
      "text": "The broader page for service standards, department coordination and onboarding."
    },
    {
      "href": "/en/formation-chefs-de-service",
      "title": "Department leadership training",
      "text": "Briefings, floor follow-up, quality control and support for operational managers."
    },
    {
      "href": "/en/playbooks/hsk",
      "title": "Housekeeping SOP manual",
      "text": "Checklists and control tools to support inspection and quality follow-up."
    }
  ],
  "finalTitle": "Need to stabilise your housekeeping standards?",
  "finalText": "Send a few details about your property, expected timing and the number of team members involved.",
  "finalCta": "Request a training quote"
})
