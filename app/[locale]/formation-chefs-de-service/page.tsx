import type { Metadata } from 'next'
import TrainingSeoPage, { type TrainingSeoPageData } from '@/components/TrainingSeoPage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'

  return {
    title: isEn
      ? 'Department Leadership Training: Briefings, Standards and Team Follow-Up | LuxOps'
      : 'Formation chefs de service : briefings, standards et accompagnement des équipes | LuxOps',
    description: isEn
      ? 'On-site department leadership training for briefings, service standards, floor follow-up, quality control, coaching and operational management.'
      : 'Formation chefs de service sur site : briefings, standards de service, suivi terrain, contrôle qualité, coaching et management opérationnel.',
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/formation-chefs-de-service`,
      languages: {
        en: 'https://www.luxops.fr/en/formation-chefs-de-service',
        fr: 'https://www.luxops.fr/fr/formation-chefs-de-service',
        'x-default': 'https://www.luxops.fr/en/formation-chefs-de-service',
      },
    },
  }
}

export default async function FormationChefsDeServicePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEn = locale === 'en'
  return <TrainingSeoPage locale={locale} data={isEn ? englishData(locale) : frenchData(locale)} />
}

const frenchData = (locale: string): TrainingSeoPageData => ({
  badge: 'Chefs de service',
  title: 'Formation chefs de service',
  intro:
    'Former les responsables opérationnels à mieux briefer, accompagner, contrôler et maintenir les standards sans s’épuiser dans la répétition.',
  context:
    'La régularité d’un établissement dépend beaucoup de ses chefs de service. Ce sont eux qui transforment les standards en habitudes visibles : briefing, présence terrain, contrôle qualité, reprise des écarts, accompagnement des collaborateurs et coordination avec les autres services.',
  primaryCta: 'Demander un devis formation',
  secondaryCta: 'Voir la formation équipes',
  secondaryHref: `/${locale}/formation-equipe-hoteliere`,
  overviewLabel: 'Enjeu',
  overviewTitle: 'Donner aux responsables une méthode de suivi terrain',
  overviewText:
    'Un chef de service ne peut pas seulement rappeler les règles. Il doit savoir observer, prioriser, expliquer, corriger, encourager et transmettre le niveau attendu sans créer de tension inutile.',
  modulesLabel: 'Modules management terrain',
  modulesTitle: 'Ce que la formation peut travailler',
  modules: [
    {
      title: 'Briefings utiles',
      text: 'Construire des briefings courts, précis et orientés service : priorités, points sensibles, VIP, incidents, objectifs et standards du jour.',
    },
    {
      title: 'Présence terrain',
      text: 'Savoir où se placer, quoi observer, quand intervenir et comment garder une présence utile sans micro-manager.',
    },
    {
      title: 'Contrôle qualité',
      text: 'Transformer les standards en points de contrôle visibles, puis utiliser les écarts pour faire progresser l’équipe.',
    },
    {
      title: 'Feedback et coaching',
      text: 'Reprendre un écart de manière claire, factuelle et constructive, sans attendre que le problème se répète plusieurs fois.',
    },
    {
      title: 'Passations managers',
      text: 'Sécuriser les informations entre responsables : sujets ouverts, collaborateurs à accompagner, incidents, clients sensibles et priorités du lendemain.',
    },
    {
      title: 'Maintien du standard',
      text: 'Installer une routine de suivi pour que la formation ne retombe pas après quelques jours de service.',
    },
  ],
  methodLabel: 'Méthode',
  methodTitle: 'Une formation orientée leadership opérationnel',
  methodText:
    'La session part des situations vécues par les chefs de service : briefing qui ne prend pas, collaborateurs qui appliquent chacun leur méthode, standards qui dérivent, écarts répétés, manque de coordination ou difficultés à faire passer un message sans tendre l’équipe.',
  outcomes: [
    'Des briefings plus clairs et plus utiles pour le service.',
    'Des responsables plus précis dans leurs contrôles.',
    'Des feedbacks mieux formulés et plus faciles à accepter.',
    'Une meilleure coordination entre chefs de service.',
    'Des standards repris avant que les écarts deviennent des habitudes.',
    'Un langage commun pour accompagner les collaborateurs.',
  ],
  relatedLabel: 'Pages liées',
  relatedTitle: 'Relier le management aux opérations',
  related: [
    {
      href: `/${locale}/formation-equipe-hoteliere`,
      title: 'Formation équipes hôtelières',
      text: 'Page large pour aligner les équipes autour des standards, passations et méthodes communes.',
    },
    {
      href: `/${locale}/formation-reception-hotel`,
      title: 'Formation réception',
      text: 'Application côté front office : accueil, passations, réclamations et gestion du desk.',
    },
    {
      href: `/${locale}/formation-housekeeping-hotel`,
      title: 'Formation housekeeping',
      text: 'Application côté étages : inspection, briefings, contrôle qualité et accompagnement des équipes.',
    },
  ],
  finalTitle: 'Besoin d’accompagner vos chefs de service ?',
  finalText:
    'Envoyez quelques informations sur votre établissement, les départements concernés et le format de formation souhaité.',
  finalCta: 'Demander un devis formation',
})

const englishData = (locale: string): TrainingSeoPageData => ({
  badge: 'Department heads',
  title: 'Department leadership training',
  intro:
    'Train operational managers to brief, support, control and maintain standards without exhausting themselves through repetition.',
  context:
    'Property consistency depends heavily on department heads. They turn standards into visible habits through briefings, floor presence, quality control, correction, team support and coordination with other departments.',
  primaryCta: 'Request a training quote',
  secondaryCta: 'View team training',
  secondaryHref: `/${locale}/formation-equipe-hoteliere`,
  overviewLabel: 'Challenge',
  overviewTitle: 'Give managers a practical floor follow-up method',
  overviewText:
    'A department head cannot only repeat rules. They need to observe, prioritise, explain, correct, encourage and transmit the expected level without creating unnecessary tension.',
  modulesLabel: 'Floor leadership modules',
  modulesTitle: 'What the training can work on',
  modules: [
    {
      title: 'Useful briefings',
      text: 'Build short, precise service-oriented briefings: priorities, sensitive points, VIPs, incidents, objectives and standards of the day.',
    },
    {
      title: 'Floor presence',
      text: 'Know where to stand, what to observe, when to intervene and how to stay useful without micromanaging.',
    },
    {
      title: 'Quality control',
      text: 'Turn standards into visible control points, then use gaps to help the team progress.',
    },
    {
      title: 'Feedback and coaching',
      text: 'Correct gaps clearly, factually and constructively before the same issue repeats several times.',
    },
    {
      title: 'Manager handovers',
      text: 'Secure information between managers: open topics, team members to support, incidents, sensitive guests and next-day priorities.',
    },
    {
      title: 'Standards maintenance',
      text: 'Install a follow-up routine so training does not fade after a few operating days.',
    },
  ],
  methodLabel: 'Method',
  methodTitle: 'Training focused on operational leadership',
  methodText:
    'The session starts from situations department heads actually face: weak briefings, team members using different methods, drifting standards, repeated gaps, poor coordination or difficulty passing a message without creating tension.',
  outcomes: [
    'Briefings become clearer and more useful for service.',
    'Managers become more precise in their controls.',
    'Feedback becomes clearer and easier to accept.',
    'Department head coordination improves.',
    'Standards are corrected before gaps become habits.',
    'Managers share a common language to support teams.',
  ],
  relatedLabel: 'Related pages',
  relatedTitle: 'Connect leadership to operations',
  related: [
    {
      href: `/${locale}/formation-equipe-hoteliere`,
      title: 'Hotel team training',
      text: 'The broader page to align teams around standards, handovers and shared working methods.',
    },
    {
      href: `/${locale}/formation-reception-hotel`,
      title: 'Front desk training',
      text: 'Front office application: welcome, handovers, complaints and desk management.',
    },
    {
      href: `/${locale}/formation-housekeeping-hotel`,
      title: 'Housekeeping training',
      text: 'Floor application: inspection, briefings, quality control and team support.',
    },
  ],
  finalTitle: 'Need to support your department heads?',
  finalText:
    'Send a few details about your property, departments involved and expected training format.',
  finalCta: 'Request a training quote',
})
