import type { Metadata } from 'next'
import TrainingSeoPage, { type TrainingSeoPageData } from '@/components/TrainingSeoPage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'

  return {
    title: isEn
      ? 'Hotel Team Training: Service Standards and On-Site Methods | LuxOps'
      : 'Formation équipes hôtelières : standards de service et méthodes terrain | LuxOps',
    description: isEn
      ? 'On-site hotel team training for service standards, onboarding, SOP rollout, handovers, department coordination and operational consistency.'
      : 'Formation sur site pour équipes hôtelières : standards de service, intégration, déploiement des procédures, passations et coordination entre services.',
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/formation-equipe-hoteliere`,
      languages: {
        en: 'https://www.luxops.fr/en/formation-equipe-hoteliere',
        fr: 'https://www.luxops.fr/fr/formation-equipe-hoteliere',
        'x-default': 'https://www.luxops.fr/en/formation-equipe-hoteliere',
      },
    },
  }
}

export default async function FormationEquipeHotelierePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEn = locale === 'en'
  return <TrainingSeoPage locale={locale} data={isEn ? englishData(locale) : frenchData(locale)} />
}

const frenchData = (locale: string): TrainingSeoPageData => ({
  badge: 'Formation sur site',
  title: 'Formation équipes hôtelières',
  intro:
    'Une formation terrain pour aligner les équipes autour de standards clairs, de méthodes communes et de réflexes applicables pendant le service.',
  context:
    'L’objectif n’est pas de faire une session théorique. Il s’agit de transmettre un cadre que les collaborateurs peuvent utiliser ensuite : accueil, passations, coordination entre services, gestion des demandes client, briefings et suivi des standards.',
  primaryCta: 'Demander un devis formation',
  secondaryCta: 'Voir les pages métier',
  secondaryHref: '#pages-metier',
  overviewLabel: 'Objectif',
  overviewTitle: 'Installer une base commune entre les services',
  overviewText:
    'La régularité ne vient pas seulement de l’expérience individuelle. Elle vient d’un langage commun, de procédures expliquées, de managers capables de faire vivre les standards et de collaborateurs qui savent quoi faire lorsque la journée se complique.',
  modulesLabel: 'Axes de formation',
  modulesTitle: 'Ce que la formation peut structurer',
  modules: [
    {
      title: 'Standards de service',
      text: 'Clarifier le niveau attendu, la posture, le langage client, les points de vigilance et les comportements qui doivent rester constants d’un service à l’autre.',
    },
    {
      title: 'Intégration et montée en autonomie',
      text: 'Donner aux nouvelles recrues un cadre plus clair que l’observation seule, avec des étapes, des points de contrôle et une validation progressive.',
    },
    {
      title: 'Procédures expliquées',
      text: 'Transformer les SOP et les playbooks en méthodes comprises, pas seulement en documents remis aux équipes.',
    },
    {
      title: 'Passations et coordination',
      text: 'Sécuriser les passages de relais entre réception, housekeeping, F&B, maintenance et management pour réduire les oublis et les informations perdues.',
    },
    {
      title: 'Briefings et suivi terrain',
      text: 'Aider les responsables à tenir des briefings utiles, contrôler les points sensibles et reprendre les écarts sans transformer le management en rappel permanent.',
    },
    {
      title: 'Stabilité malgré le turnover',
      text: 'Limiter la perte de savoir-faire lorsque les équipes changent, en gardant des méthodes écrites, expliquées et reprises dans le temps.',
    },
  ],
  methodLabel: 'Méthode',
  methodTitle: 'Des standards transmis dans le contexte réel de l’établissement',
  methodText:
    'La session part du terrain : vos équipes, vos standards existants, vos points de contact client et les écarts observés. Les supports LuxOps peuvent servir de base, mais la formation peut aussi s’appuyer sur vos propres procédures, valeurs de marque et priorités opérationnelles.',
  outcomes: [
    'Des collaborateurs qui comprennent pourquoi le standard existe.',
    'Des passations plus fiables entre services et entre shifts.',
    'Des managers mieux équipés pour briefer, contrôler et accompagner.',
    'Une base écrite que l’équipe peut reprendre après la formation.',
    'Une intégration plus claire pour les nouveaux collaborateurs.',
    'Une meilleure régularité dans les moments visibles par le client.',
  ],
  relatedLabel: 'Maillage formation',
  relatedTitle: 'Pages métier à consulter',
  related: [
    {
      href: `/${locale}/formation-reception-hotel`,
      title: 'Formation réception',
      text: 'Accueil, check-in, check-out, PMS, passations, réclamations et réflexes de service au desk.',
    },
    {
      href: `/${locale}/formation-housekeeping-hotel`,
      title: 'Formation housekeeping',
      text: 'Chambre à blanc, recouche, inspection, chariot, salle de bain, briefings et contrôle qualité.',
    },
    {
      href: `/${locale}/formation-chefs-de-service`,
      title: 'Formation chefs de service',
      text: 'Briefings, leadership terrain, accompagnement des équipes et maintien des standards dans la durée.',
    },
  ],
  finalTitle: 'Besoin d’aligner vos équipes sur un même standard ?',
  finalText:
    'La page formation permet de nous transmettre quelques informations sur l’établissement, la période envisagée et le nombre de collaborateurs concernés.',
  finalCta: 'Demander un devis formation',
})

const englishData = (locale: string): TrainingSeoPageData => ({
  badge: 'On-property training',
  title: 'Hotel team training',
  intro:
    'Hands-on training to align teams around clear service standards, shared methods and practical habits they can use during real shifts.',
  context:
    'This is not designed as a generic classroom session. The goal is to give teams a working framework for guest welcome, handovers, department coordination, guest requests, briefings and daily standards follow-up.',
  primaryCta: 'Request a training quote',
  secondaryCta: 'View department pages',
  secondaryHref: '#pages-metier',
  overviewLabel: 'Objective',
  overviewTitle: 'Build a shared operating base between departments',
  overviewText:
    'Consistency does not only come from individual experience. It comes from a shared language, explained procedures, managers who can maintain standards and team members who know what to do when service pressure increases.',
  modulesLabel: 'Training scope',
  modulesTitle: 'What the training can structure',
  modules: [
    {
      title: 'Service standards',
      text: 'Clarify the expected level, posture, guest language, control points and behaviours that should remain consistent from one shift to the next.',
    },
    {
      title: 'Onboarding and autonomy',
      text: 'Give new team members more than observation, with clear steps, control points and progressive validation before independent work.',
    },
    {
      title: 'Explained procedures',
      text: 'Turn SOPs and playbooks into understood working methods, not just documents handed to the team.',
    },
    {
      title: 'Handovers and coordination',
      text: 'Secure handovers between Front Office, Housekeeping, F&B, maintenance and management to reduce missed information.',
    },
    {
      title: 'Briefings and floor follow-up',
      text: 'Help managers run useful briefings, control sensitive points and correct gaps without reducing management to repeated reminders.',
    },
    {
      title: 'Stability despite turnover',
      text: 'Reduce knowledge loss when teams change by keeping methods written, explained and reinforced over time.',
    },
  ],
  methodLabel: 'Method',
  methodTitle: 'Standards transmitted in the real context of the property',
  methodText:
    'The session starts from the floor: your teams, existing standards, guest touchpoints and observed gaps. LuxOps materials can provide structure, but training can also be built around your own procedures, brand values and operational priorities.',
  outcomes: [
    'Teams understand why the standard exists.',
    'Handovers become more reliable between departments and shifts.',
    'Managers are better equipped to brief, control and coach.',
    'The team keeps a written base after the session.',
    'New team members onboard with clearer references.',
    'Service becomes more consistent in guest-facing moments.',
  ],
  relatedLabel: 'Training cluster',
  relatedTitle: 'Related department pages',
  related: [
    {
      href: `/${locale}/formation-reception-hotel`,
      title: 'Front desk training',
      text: 'Welcome, check-in, check-out, PMS, handovers, complaints and service habits at the desk.',
    },
    {
      href: `/${locale}/formation-housekeeping-hotel`,
      title: 'Housekeeping training',
      text: 'Departure rooms, stayovers, inspection, trolley setup, bathroom standards, briefings and quality control.',
    },
    {
      href: `/${locale}/formation-chefs-de-service`,
      title: 'Department leadership training',
      text: 'Briefings, floor leadership, team support and standards follow-up over time.',
    },
  ],
  finalTitle: 'Need to align your teams around one standard?',
  finalText:
    'Use the training page to share a few details about your property, expected timing and the number of team members involved.',
  finalCta: 'Request a training quote',
})
