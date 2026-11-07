import type { Metadata } from 'next'
import type { TrainingSeoPageData } from '@/components/TrainingSeoPage'
import DepartmentTrainingPage from '@/components/DepartmentTrainingPage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'

  return {
    title: isEn ? "Hotel Reception and Front Office Training | LuxOps" : "Formation Réception Hôtelière et Front Office | LuxOps",
    description: isEn
      ? "Strengthen confidence, anticipation and professional judgement so your team delivers the care expected of five-star hospitality."
      : "Renforcez l’aisance relationnelle, l’anticipation et le discernement de vos équipes pour incarner les standards d’un accueil cinq étoiles.",
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/formation-reception-hotel`,
      languages: {
        en: 'https://www.luxops.fr/en/formation-reception-hotel',
        fr: 'https://www.luxops.fr/fr/formation-reception-hotel',
        'x-default': 'https://www.luxops.fr/en/formation-reception-hotel',
      },
    },
  }
}

export default async function FormationReceptionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEn = locale === 'en'
  return <DepartmentTrainingPage department="fo" locale={locale} data={isEn ? englishData() : frenchData()} />
}

const frenchData = (): TrainingSeoPageData => ({
  "badge": "Formation réception",
  "title": "Formation réception : faire de chaque échange une expérience.",
  "intro": "Une formation sur site pour perfectionner la posture d’accueil, développer la coopération et faire des outils métier un appui à la relation client.",
  "context": "Une réception d’excellence sait conjuguer précision opérationnelle et relation naturelle. Le client doit se sentir reconnu, même lorsque l’activité s’intensifie ou qu’une situation sort du cadre habituel.",
  "primaryCta": "Demander un devis formation",
  "secondaryCta": "Voir le Playbook Front Office",
  "secondaryHref": "/fr/playbooks/fo",
  "overviewLabel": "L’art de l’accueil",
  "overviewTitle": "Un accueil maîtrisé, jamais mécanique.",
  "overviewText": "À partir de vos pratiques, vos équipes travaillent la qualité de présence, le choix des mots et la décision adaptée. Les responsables disposent de repères pour entretenir cette exigence au fil des services.",
  "modulesLabel": "Modules réception",
  "modulesTitle": "Développer la posture, le discernement et la continuité de service.",
  "modules": [
    {
      "title": "La signature de votre accueil",
      "text": "Travailler la présence, le langage et le rythme de l’échange. Traduire les standards cinq étoiles en une prise en charge chaleureuse et personnalisée, fidèle à l’identité de l’hôtel."
    },
    {
      "title": "L’anticipation et la connaissance client",
      "text": "Croiser préférences, historique et observations pour anticiper avec discrétion. Exploiter le PMS et le CRM au bénéfice de la relation, sans laisser l’écran prendre la place du client."
    },
    {
      "title": "Le discernement dans les situations délicates",
      "text": "Affiner l’écoute, la désescalade et la recherche de solutions. Renforcer la confiance et l’autonomie tout en clarifiant les décisions à partager avec le responsable."
    },
    {
      "title": "Le conseil et la contribution commerciale",
      "text": "Construire des recommandations pertinentes : surclassements, services et expériences adaptés au séjour. Développer une vente additionnelle naturelle, fondée sur la compréhension du besoin."
    },
    {
      "title": "La coopération et les outils métier",
      "text": "Fluidifier la coordination avec les étages, la conciergerie et les réservations. Simplifier les transmissions et utiliser les outils de suivi pour préserver la continuité de l’attention."
    },
    {
      "title": "Des standards partagés et durables",
      "text": "Relier procédures, supports d’intégration et briefings aux situations vécues. Outiller les chefs de brigade pour observer, accompagner et transmettre la qualité de service."
    }
  ],
  "methodLabel": "Méthode",
  "methodTitle": "Travailler la justesse de la réponse, pas réciter un script.",
  "methodText": "Les mises en situation reprennent les moments qui comptent dans votre parcours client. Les participants confrontent leurs choix, reçoivent un retour précis et expérimentent d’autres approches avec leurs responsables.",
  "outcomes": [
    "Personnaliser la relation avec assurance et naturel.",
    "Prendre des décisions adaptées aux situations complexes.",
    "Mieux coordonner l’attention portée au client entre les services.",
    "Transmettre une culture d’accueil commune grâce aux managers et aux référentiels."
  ],
  "relatedLabel": "Pages liées",
  "relatedTitle": "Compléter le travail réception",
  "related": [
    {
      "href": "/fr/methode-formation-luxops",
      "title": "Méthode de formation LuxOps",
      "text": "Voir comment les situations de réception sont transformées en cas pratiques, standards et routines de suivi."
    },
    {
      "href": "/fr/formation-equipe-hoteliere",
      "title": "Formation équipes hôtelières",
      "text": "Page large pour les standards de service, l’intégration, les passations et la coordination entre services."
    },
    {
      "href": "/fr/formation-chefs-de-service",
      "title": "Formation chefs de service",
      "text": "Briefings, suivi terrain, management opérationnel et maintien des standards dans le temps."
    },
    {
      "href": "/fr/playbooks/fo",
      "title": "Manuel SOP Front Office",
      "text": "12 checklists, passations et scripts inclus avec le Manuel SOP Front Office pour soutenir la formation."
    }
  ],
  "finalTitle": "Besoin de structurer les réflexes de votre réception ?",
  "finalText": "Envoyez quelques informations sur votre établissement, la période envisagée et le nombre de collaborateurs concernés.",
  "finalCta": "Demander un devis formation"
})

const englishData = (): TrainingSeoPageData => ({
  "badge": "Front desk training",
  "title": "Front Office training: make every interaction count.",
  "intro": "On-property training to refine service presence, strengthen collaboration and make hotel systems support the guest relationship.",
  "context": "An excellent front desk combines operational precision with a natural welcome. Guests should feel recognised even at busy times or when a situation falls outside the usual routine.",
  "primaryCta": "Request a training quote",
  "secondaryCta": "View Front Office Playbook",
  "secondaryHref": "/en/playbooks/fo",
  "overviewLabel": "The art of hospitality",
  "overviewTitle": "A confident welcome, never a mechanical one.",
  "overviewText": "Building on existing practice, teams work on presence, language and sound decisions. Managers gain shared reference points to sustain that quality across shifts.",
  "modulesLabel": "Front desk modules",
  "modulesTitle": "Develop presence, judgement and service continuity.",
  "modules": [
    {
      "title": "Your signature welcome",
      "text": "Refine presence, language and the pace of interaction. Translate five-star standards into warm, personalised care that reflects your hotel’s identity."
    },
    {
      "title": "Anticipation and guest knowledge",
      "text": "Connect preferences, history and observations to anticipate discreetly. Use PMS and CRM information to support the relationship without allowing the screen to take priority over the guest."
    },
    {
      "title": "Judgement in sensitive situations",
      "text": "Refine listening, de-escalation and solution finding. Build confidence and autonomy while clarifying which decisions require a manager’s involvement."
    },
    {
      "title": "Advice that adds commercial value",
      "text": "Make relevant recommendations for upgrades, services and experiences. Develop natural upselling grounded in a clear understanding of the guest’s stay."
    },
    {
      "title": "Collaboration and hotel systems",
      "text": "Improve coordination with Housekeeping, concierge and reservations. Simplify handovers and use tracking tools to maintain continuity of care."
    },
    {
      "title": "Shared standards that last",
      "text": "Connect procedures, onboarding materials and briefings to real situations. Equip shift leaders to observe, coach and pass on excellent service practice."
    }
  ],
  "methodLabel": "Method",
  "methodTitle": "Practise sound responses, not scripted lines.",
  "methodText": "Scenarios draw on the moments that matter in your guest journey. Participants compare decisions, receive specific feedback and explore alternative approaches with their managers.",
  "outcomes": [
    "Personalise interactions with confidence and warmth.",
    "Make appropriate decisions in complex situations.",
    "Coordinate guest care more effectively across departments.",
    "Pass on a shared hospitality culture through managers and documented standards."
  ],
  "relatedLabel": "Related pages",
  "relatedTitle": "Continue the front desk work",
  "related": [
    {
      "href": "/en/luxops-training-method",
      "title": "LuxOps training method",
      "text": "See how front desk situations become practical scenarios, standards and follow-up routines."
    },
    {
      "href": "/en/formation-equipe-hoteliere",
      "title": "Hotel team training",
      "text": "The broader page for service standards, onboarding, handovers and department coordination."
    },
    {
      "href": "/en/formation-chefs-de-service",
      "title": "Department leadership training",
      "text": "Briefings, floor follow-up, operational management and long-term standards maintenance."
    },
    {
      "href": "/en/playbooks/fo",
      "title": "Front Office SOP manual",
      "text": "12 checklists, handover tools and scripts included with the Front Office SOP Manual to support training."
    }
  ],
  "finalTitle": "Need to structure your front desk service habits?",
  "finalText": "Send a few details about your property, expected timing and the number of team members involved.",
  "finalCta": "Request a training quote"
})
