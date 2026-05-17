import type { Metadata } from 'next'
import TrainingSeoPage, { type TrainingSeoPageData } from '@/components/TrainingSeoPage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'

  return {
    title: isEn
      ? 'Housekeeping Training: Room Standards, Inspection and Floor Supervision | LuxOps'
      : 'Formation housekeeping : chambre, inspection et standards d’étage | LuxOps',
    description: isEn
      ? 'On-site housekeeping training for room cleaning sequences, bathroom standards, trolley setup, floor supervision, inspections and quality control.'
      : 'Formation housekeeping sur site : chambre à blanc, recouche, salle de bain, chariot, inspection, gouvernante d’étage et contrôle qualité.',
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
  return <TrainingSeoPage locale={locale} data={isEn ? englishData(locale) : frenchData(locale)} />
}

const frenchData = (locale: string): TrainingSeoPageData => ({
  badge: 'Formation housekeeping',
  title: 'Formation housekeeping',
  intro:
    'Une formation terrain pour transmettre les bonnes séquences de chambre, les points d’inspection et les réflexes de contrôle qualité aux équipes d’étage.',
  context:
    'Le housekeeping ne se stabilise pas avec quelques jours d’observation. Il faut une méthode, un ordre de travail, des standards visibles, des contrôles compris et des responsables capables de reprendre les écarts sans casser le rythme de l’équipe.',
  primaryCta: 'Demander un devis formation',
  secondaryCta: 'Voir le Playbook Housekeeping',
  secondaryHref: `/${locale}/playbooks/hsk`,
  overviewLabel: 'Enjeu',
  overviewTitle: 'Faire tenir le standard chambre dans la durée',
  overviewText:
    'Une chambre à blanc, une recouche, une salle de bain ou une inspection gouvernante ne suivent pas la même logique. La formation doit donc transmettre des séquences distinctes, des points de contrôle précis et une manière claire de corriger les écarts.',
  modulesLabel: 'Modules housekeeping',
  modulesTitle: 'Ce que la formation peut couvrir',
  modules: [
    {
      title: 'Chambre à blanc et recouche',
      text: 'Clarifier les différences de séquence, de rythme, de retrait, de remise en place et de contrôle selon le type de chambre.',
    },
    {
      title: 'Salle de bain et surfaces',
      text: 'Travailler l’ordre de traitement, le chrome, le tartre, les miroirs, les produits d’accueil, les toilettes, les sols et les finitions visibles.',
    },
    {
      title: 'Chariot et linge',
      text: 'Structurer le chargement, les dotations, le tri du linge, la gestion des manquants et l’organisation pendant la vacation.',
    },
    {
      title: 'Auto-contrôle',
      text: 'Apprendre aux équipiers à vérifier avant de quitter la chambre, pour limiter les retours et responsabiliser le premier niveau de qualité.',
    },
    {
      title: 'Inspection gouvernante',
      text: 'Former les gouvernantes d’étage à contrôler dans un ordre clair, identifier les écarts, prioriser les reprises et libérer les chambres avec plus de confiance.',
    },
    {
      title: 'Briefings et coaching qualité',
      text: 'Utiliser les écarts constatés comme base de briefing et d’accompagnement, au lieu de refaire les mêmes corrections chaque jour.',
    },
  ],
  methodLabel: 'Méthode',
  methodTitle: 'Une formation adaptée aux étages, au rythme et au niveau attendu',
  methodText:
    'La session peut s’appuyer sur le Playbook Housekeeping, sur vos checklists internes ou sur les points qualité déjà observés. Le travail porte sur les gestes, l’ordre, le vocabulaire, les priorités et la manière dont la gouvernante fait vivre le standard après la formation.',
  outcomes: [
    'Des séquences de chambre plus régulières entre collaborateurs.',
    'Moins d’écarts visibles en salle de bain et sur les finitions.',
    'Des gouvernantes plus structurées dans leurs inspections.',
    'Des briefings plus utiles à partir des écarts observés.',
    'Une meilleure coordination avec la réception et la maintenance.',
    'Un support écrit à reprendre à l’intégration et en cours de saison.',
  ],
  relatedLabel: 'Pages liées',
  relatedTitle: 'Compléter le travail housekeeping',
  related: [
    {
      href: `/${locale}/formation-equipe-hoteliere`,
      title: 'Formation équipes hôtelières',
      text: 'Page large pour les standards de service, la coordination entre services et l’intégration des collaborateurs.',
    },
    {
      href: `/${locale}/formation-chefs-de-service`,
      title: 'Formation chefs de service',
      text: 'Briefings, suivi terrain, contrôle qualité et accompagnement des responsables opérationnels.',
    },
    {
      href: `/${locale}/playbooks/hsk-starter-pack`,
      title: 'Housekeeping Inspection Kit',
      text: 'Checklists et outils de contrôle pour soutenir le travail d’inspection et de suivi qualité.',
    },
  ],
  finalTitle: 'Besoin de stabiliser vos standards housekeeping ?',
  finalText:
    'Envoyez quelques informations sur votre établissement, la période envisagée et le nombre de collaborateurs concernés.',
  finalCta: 'Demander un devis formation',
})

const englishData = (locale: string): TrainingSeoPageData => ({
  badge: 'Housekeeping training',
  title: 'Housekeeping training',
  intro:
    'On-property training to transmit room sequences, inspection points and quality control habits to housekeeping teams.',
  context:
    'Housekeeping consistency is not built through a few days of observation. It requires a method, a work order, visible standards, understood checks and supervisors who can correct gaps without slowing the team down.',
  primaryCta: 'Request a training quote',
  secondaryCta: 'View Housekeeping Playbook',
  secondaryHref: `/${locale}/playbooks/hsk`,
  overviewLabel: 'Challenge',
  overviewTitle: 'Keep room standards consistent over time',
  overviewText:
    'A departure room, stayover, bathroom sequence or supervisor inspection do not follow the same logic. Training must therefore transmit distinct sequences, precise control points and a clear way to correct gaps.',
  modulesLabel: 'Housekeeping modules',
  modulesTitle: 'What the training can cover',
  modules: [
    {
      title: 'Departure rooms and stayovers',
      text: 'Clarify the sequence, pace, removal, setup and control differences according to room status.',
    },
    {
      title: 'Bathroom and surfaces',
      text: 'Work through surface order, chrome, limescale, mirrors, amenities, toilets, floors and visible finishing points.',
    },
    {
      title: 'Trolley and linen',
      text: 'Structure loading, par levels, linen sorting, missing items and organisation throughout the shift.',
    },
    {
      title: 'Self-inspection',
      text: 'Train attendants to check before leaving the room, limiting returns and owning the first level of quality.',
    },
    {
      title: 'Supervisor inspection',
      text: 'Train floor supervisors to inspect in a clear order, identify gaps, prioritise returns and release rooms with more confidence.',
    },
    {
      title: 'Briefings and quality coaching',
      text: 'Use observed gaps as briefing and coaching material instead of repeating the same corrections every day.',
    },
  ],
  methodLabel: 'Method',
  methodTitle: 'Training adapted to floors, pace and expected standard',
  methodText:
    'The session can use the Housekeeping Playbook, your internal checklists or existing quality observations. Work focuses on gestures, order, vocabulary, priorities and how supervisors keep the standard alive after training.',
  outcomes: [
    'Room sequences become more consistent between team members.',
    'Visible bathroom and finishing gaps decrease.',
    'Floor supervisors inspect with clearer structure.',
    'Briefings become more useful because they use observed gaps.',
    'Coordination improves with reception and maintenance.',
    'The team keeps a written reference for onboarding and seasonal refreshers.',
  ],
  relatedLabel: 'Related pages',
  relatedTitle: 'Continue the housekeeping work',
  related: [
    {
      href: `/${locale}/formation-equipe-hoteliere`,
      title: 'Hotel team training',
      text: 'The broader page for service standards, department coordination and onboarding.',
    },
    {
      href: `/${locale}/formation-chefs-de-service`,
      title: 'Department leadership training',
      text: 'Briefings, floor follow-up, quality control and support for operational managers.',
    },
    {
      href: `/${locale}/playbooks/hsk-starter-pack`,
      title: 'Housekeeping Inspection Kit',
      text: 'Checklists and control tools to support inspection and quality follow-up.',
    },
  ],
  finalTitle: 'Need to stabilise your housekeeping standards?',
  finalText:
    'Send a few details about your property, expected timing and the number of team members involved.',
  finalCta: 'Request a training quote',
})
