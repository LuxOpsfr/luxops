import type { Metadata } from 'next'
import type { TrainingSeoPageData } from '@/components/TrainingSeoPage'
import DepartmentTrainingPage from '@/components/DepartmentTrainingPage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'

  return {
    title: isEn ? "Hotel F&B Training: Restaurant, Bar & Room Service | LuxOps" : "Formation F&B : service restaurant et hôtel | LuxOps",
    description: isEn
      ? "Develop service presence, confident recommendations and team coordination for a dining experience worthy of five-star hospitality."
      : "Développez la présence en salle, la qualité du conseil et la coordination de vos équipes pour une expérience de restauration à la hauteur d’un hôtel cinq étoiles.",
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/formation-fb-restaurant`,
      languages: {
        en: 'https://www.luxops.fr/en/formation-fb-restaurant',
        fr: 'https://www.luxops.fr/fr/formation-fb-restaurant',
        'x-default': 'https://www.luxops.fr/en/formation-fb-restaurant',
      },
    },
  }
}

export default async function FormationFbPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEn = locale === 'en'
  return <DepartmentTrainingPage department="fb" locale={locale} data={isEn ? englishData() : frenchData()} />
}

const frenchData = (): TrainingSeoPageData => ({
  "badge": "Formation F&B",
  "title": "Formation F&B : précision du service, justesse de l’attention.",
  "intro": "Un accompagnement adapté au restaurant, au bar et au room service, qui associe savoir-être, maîtrise des standards et méthodes de travail plus fluides.",
  "context": "L’excellence en restauration tient à l’équilibre entre précision et naturel : une recommandation juste, un rythme de service maîtrisé et une équipe qui se coordonne sans interrompre l’expérience du client.",
  "primaryCta": "Demander un devis formation",
  "secondaryCta": "Voir le Manuel SOP F&B",
  "secondaryHref": "/fr/playbooks/fb",
  "overviewLabel": "L’expérience en restauration",
  "overviewTitle": "Un service précis qui laisse toute sa place au client.",
  "overviewText": "Vos équipes possèdent les bases du métier. La formation les aide à affiner leur sens de l’observation, enrichir leur conseil et partager une même exigence, de la salle à la cuisine.",
  "modulesLabel": "Modules F&B",
  "modulesTitle": "Élever la qualité du service et du conseil.",
  "modules": [
    {
      "title": "La présence et l’élégance du service",
      "text": "Affiner posture, gestuelle, vocabulaire et discrétion. Harmoniser les standards cinq étoiles tout en conservant une relation naturelle et la personnalité de votre établissement."
    },
    {
      "title": "La connaissance produit et le conseil",
      "text": "Faire de la maîtrise de l’offre un véritable atout de service. Construire des recommandations personnalisées et développer la vente additionnelle avec pertinence et aisance."
    },
    {
      "title": "Le rythme et la coordination du service",
      "text": "Lire les attentes d’une table, ajuster l’enchaînement et synchroniser salle, bar et cuisine. Travailler la communication pendant les temps forts sans reporter la pression sur le client."
    },
    {
      "title": "L’attention aux demandes particulières",
      "text": "Développer l’écoute, la précision des transmissions et la qualité du suivi. Aborder les préférences, demandes alimentaires et insatisfactions avec discernement et professionnalisme."
    },
    {
      "title": "Des managers et des outils qui facilitent le service",
      "text": "Renforcer les briefings et le coaching des responsables. Utiliser POS, réservations et informations clients pour simplifier la préparation et fiabiliser la coordination."
    },
    {
      "title": "Un référentiel vivant pour les équipes",
      "text": "Formaliser les séquences de service, repères de présentation et pratiques de suivi. Relier ces supports à l’intégration et aux briefings pour maintenir l’exigence d’une équipe à l’autre."
    }
  ],
  "methodLabel": "Méthode",
  "methodTitle": "Perfectionner le service dans vos espaces et avec votre offre.",
  "methodText": "Les exercices s’appuient sur votre carte, vos séquences de service et les situations rencontrées par les équipes. Les débriefings mettent en relation posture, décisions et qualité de l’expérience client.",
  "outcomes": [
    "Incarner les standards de service avec précision et naturel.",
    "Conseiller avec une meilleure connaissance du client et de l’offre.",
    "Renforcer la coordination pendant les temps forts du service.",
    "Donner aux responsables des supports pour transmettre et faire progresser."
  ],
  "relatedLabel": "Pages liées",
  "relatedTitle": "Compléter le travail F&B",
  "related": [
    {
      "href": "/fr/methode-formation-luxops",
      "title": "Méthode de formation LuxOps",
      "text": "Préparer la formation à partir des standards, des situations réelles du service et des priorités des managers."
    },
    {
      "href": "/fr/hotel-fb-sop",
      "title": "SOP F&B",
      "text": "Page pilier pour les procédures F&B, standards de service, restaurant, bar et room service."
    },
    {
      "href": "/fr/sequence-service-restaurant-hotel",
      "title": "Séquence de service",
      "text": "Page dédiée aux étapes de service restaurant, de la préparation à la clôture."
    },
    {
      "href": "/fr/playbooks/fb",
      "title": "Playbook F&B",
      "text": "Référence complète pour structurer les standards, procédures et méthodes du département."
    }
  ],
  "finalTitle": "Besoin de stabiliser vos standards F&B ?",
  "finalText": "Envoyez quelques informations sur votre établissement, la période envisagée et le nombre de collaborateurs concernés.",
  "finalCta": "Demander un devis formation"
})

const englishData = (): TrainingSeoPageData => ({
  "badge": "F&B training",
  "title": "F&B training: precise service, thoughtful attention.",
  "intro": "Support tailored to restaurant, bar and room service teams, combining service presence, exacting standards and smoother working methods.",
  "context": "Dining excellence balances precision with ease: a well-judged recommendation, carefully paced service and a team that coordinates without interrupting the guest experience.",
  "primaryCta": "Request a training quote",
  "secondaryCta": "View the F&B SOP manual",
  "secondaryHref": "/en/playbooks/fb",
  "overviewLabel": "The dining experience",
  "overviewTitle": "Precise service that keeps the guest at its heart.",
  "overviewText": "Your team already knows the fundamentals. Training helps refine observation, enrich recommendations and build shared expectations from the dining room to the kitchen.",
  "modulesLabel": "F&B modules",
  "modulesTitle": "Elevate service quality and confident advice.",
  "modules": [
    {
      "title": "Service presence and elegance",
      "text": "Refine posture, gestures, language and discretion. Align five-star standards while preserving natural interactions and your property’s personality."
    },
    {
      "title": "Product knowledge and recommendations",
      "text": "Turn knowledge of your offering into a service strength. Develop personalised recommendations and relevant, confident upselling."
    },
    {
      "title": "Service pace and coordination",
      "text": "Read a table’s expectations, adapt timing and synchronise restaurant, bar and kitchen. Practise communication during peak periods without passing the pressure on to guests."
    },
    {
      "title": "Thoughtful responses to individual needs",
      "text": "Develop listening, clear communication and attentive follow-up. Address preferences, dietary requests and dissatisfaction with sound judgement and professionalism."
    },
    {
      "title": "Managers and systems that support service",
      "text": "Strengthen briefings and manager coaching. Use POS, reservations and guest information to streamline preparation and improve coordination."
    },
    {
      "title": "A living reference for the team",
      "text": "Document service sequences, presentation standards and follow-up practices. Connect these materials to onboarding and briefings to sustain quality across teams."
    }
  ],
  "methodLabel": "Method",
  "methodTitle": "Refine service in your spaces, using your own offering.",
  "methodText": "Exercises use your menus, service sequences and situations encountered by your teams. Debriefs connect presence and decisions to the quality of the guest experience.",
  "outcomes": [
    "Deliver service standards with precision and warmth.",
    "Recommend confidently through stronger guest and product knowledge.",
    "Improve coordination at busy moments.",
    "Equip managers with materials for coaching and knowledge transfer."
  ],
  "relatedLabel": "Related pages",
  "relatedTitle": "Continue the F&B work",
  "related": [
    {
      "href": "/en/luxops-training-method",
      "title": "LuxOps training method",
      "text": "Prepare training from service standards, real operating situations and manager priorities."
    },
    {
      "href": "/en/hotel-fb-sop",
      "title": "F&B SOP",
      "text": "Pillar page for F&B procedures, service standards, restaurant, bar and room service."
    },
    {
      "href": "/en/food-and-beverage-service-sequence",
      "title": "Service sequence",
      "text": "Dedicated page for restaurant service steps, from preparation to closing."
    },
    {
      "href": "/en/playbooks/fb",
      "title": "F&B Playbook",
      "text": "Full reference to structure department standards, procedures and working methods."
    }
  ],
  "finalTitle": "Need to stabilise your F&B standards?",
  "finalText": "Send a few details about your property, expected timing and the number of team members involved.",
  "finalCta": "Request a training quote"
})
