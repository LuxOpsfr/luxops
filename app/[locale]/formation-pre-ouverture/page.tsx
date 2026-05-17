import type { Metadata } from 'next'
import TrainingSeoPage, { type TrainingSeoPageData } from '@/components/TrainingSeoPage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'

  return {
    title: isEn
      ? 'Pre-Opening Training: Service Standards Before Launch | LuxOps'
      : 'Formation pré-ouverture : préparer les équipes avant les premiers clients | LuxOps',
    description: isEn
      ? 'On-site pre-opening training to prepare teams before launch: service standards, guest journey, procedures, briefings and operational routines.'
      : 'Formation pré-ouverture sur site pour préparer les équipes avant lancement : standards de service, parcours client, procédures, briefings et routines opérationnelles.',
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/formation-pre-ouverture`,
      languages: {
        en: 'https://www.luxops.fr/en/formation-pre-ouverture',
        fr: 'https://www.luxops.fr/fr/formation-pre-ouverture',
        'x-default': 'https://www.luxops.fr/en/formation-pre-ouverture',
      },
    },
  }
}

export default async function FormationPreOuverturePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEn = locale === 'en'
  return <TrainingSeoPage locale={locale} data={isEn ? englishData(locale) : frenchData(locale)} />
}

const frenchData = (locale: string): TrainingSeoPageData => ({
  badge: 'Pré-ouverture',
  title: 'Formation pré-ouverture',
  intro:
    'Préparer les équipes avant l’arrivée des premiers clients, avec des standards clairs, des séquences de service et des méthodes déjà comprises avant le lancement.',
  context:
    'Une ouverture se joue avant le premier client. Si les procédures, les passations, les rôles et les standards sont flous, la pression opérationnelle amplifie chaque écart. La formation pré-ouverture sert à poser les bases avant que le service ne démarre vraiment.',
  primaryCta: 'Demander un devis formation',
  secondaryCta: 'Voir la formation générale',
  secondaryHref: `/${locale}/formation-equipe-hoteliere`,
  overviewLabel: 'Objectif',
  overviewTitle: 'Arriver au premier jour avec des équipes déjà alignées',
  overviewText:
    'La formation pré-ouverture permet de faire vivre les standards avant l’ouverture : parcours client, accueil, chambre, service, passations, briefings, escalades et coordination entre services.',
  modulesLabel: 'Préparation opérationnelle',
  modulesTitle: 'Les sujets à cadrer avant l’ouverture',
  modules: [
    {
      title: 'Parcours client',
      text: 'Clarifier les moments clés de l’expérience : arrivée, chambre, restauration, demandes spécifiques, réclamations et départ.',
    },
    {
      title: 'Standards et valeurs',
      text: 'Traduire les valeurs de marque en comportements visibles, phrases, postures, priorités et décisions pendant le service.',
    },
    {
      title: 'Procédures par département',
      text: 'Poser les méthodes de base en réception, housekeeping, F&B, spa ou autres services selon le périmètre de l’établissement.',
    },
    {
      title: 'Passations et coordination',
      text: 'Définir ce qui doit circuler entre les équipes avant que les mauvaises habitudes de communication s’installent.',
    },
    {
      title: 'Briefings d’ouverture',
      text: 'Former les responsables à préparer les premiers services, remonter les écarts, prioriser les urgences et garder le cap qualité.',
    },
    {
      title: 'Mises en situation',
      text: 'Travailler des cas concrets avant l’ouverture : arrivée VIP, chambre non prête, retard restaurant, plainte client ou demande urgente.',
    },
  ],
  methodLabel: 'Méthode',
  methodTitle: 'Une formation construite avant la pression du lancement',
  methodText:
    'La session peut être organisée avant ouverture, pendant les essais à blanc ou juste avant la montée en charge. Elle peut s’appuyer sur les process LuxOps ou sur les standards propres à l’établissement, avec un format adapté aux équipes déjà recrutées et aux chefs de service.',
  outcomes: [
    'Des équipes qui comprennent le niveau attendu avant le premier service.',
    'Des chefs de service plus prêts à briefer et accompagner.',
    'Des passations définies avant le lancement.',
    'Des procédures de base déjà testées en situation.',
    'Moins de flottement pendant les premiers jours d’exploitation.',
    'Un cadre écrit à reprendre après l’ouverture.',
  ],
  relatedLabel: 'Pages liées',
  relatedTitle: 'Préparer les départements',
  related: [
    {
      href: `/${locale}/formation-reception-hotel`,
      title: 'Formation réception',
      text: 'Préparer l’accueil, le check-in, les passations, la communication client et les situations sensibles au desk.',
    },
    {
      href: `/${locale}/formation-housekeeping-hotel`,
      title: 'Formation housekeeping',
      text: 'Préparer les standards chambre, les inspections, le chariot, les briefings et le contrôle qualité aux étages.',
    },
    {
      href: `/${locale}/formation-fb-restaurant`,
      title: 'Formation F&B',
      text: 'Préparer la séquence restaurant, le room service, les allergies, les briefings et le recovery client.',
    },
  ],
  finalTitle: 'Préparer une ouverture ou une reprise d’activité ?',
  finalText:
    'Transmettez-nous quelques informations sur le calendrier, le nombre de collaborateurs concernés et les départements prioritaires.',
  finalCta: 'Demander un devis formation',
})

const englishData = (locale: string): TrainingSeoPageData => ({
  badge: 'Pre-opening',
  title: 'Pre-opening training',
  intro:
    'Prepare teams before the first guests arrive with clear standards, service sequences and working methods understood before launch.',
  context:
    'An opening is won before the first guest. If procedures, handovers, roles and standards are unclear, operational pressure amplifies every gap. Pre-opening training sets the base before service truly starts.',
  primaryCta: 'Request a training quote',
  secondaryCta: 'View team training',
  secondaryHref: `/${locale}/formation-equipe-hoteliere`,
  overviewLabel: 'Objective',
  overviewTitle: 'Reach day one with aligned teams',
  overviewText:
    'Pre-opening training brings standards to life before launch: guest journey, welcome, rooms, service, handovers, briefings, escalation and department coordination.',
  modulesLabel: 'Operational preparation',
  modulesTitle: 'What to structure before opening',
  modules: [
    {
      title: 'Guest journey',
      text: 'Clarify key experience moments: arrival, room, F&B, specific requests, complaints and departure.',
    },
    {
      title: 'Standards and values',
      text: 'Translate brand values into visible behaviours, phrases, posture, priorities and service decisions.',
    },
    {
      title: 'Department procedures',
      text: 'Set core working methods in Front Office, Housekeeping, F&B, spa or other departments according to scope.',
    },
    {
      title: 'Handovers and coordination',
      text: 'Define what must circulate between teams before weak communication habits settle in.',
    },
    {
      title: 'Opening briefings',
      text: 'Train managers to prepare first services, report gaps, prioritise urgent issues and maintain quality focus.',
    },
    {
      title: 'Scenario practice',
      text: 'Work through concrete cases before opening: VIP arrival, room not ready, restaurant delay, complaint or urgent request.',
    },
  ],
  methodLabel: 'Method',
  methodTitle: 'Training built before launch pressure peaks',
  methodText:
    'The session can be organised before opening, during trial runs or just before ramp-up. It can use LuxOps processes or the property’s own standards, with a format adapted to recruited teams and department heads.',
  outcomes: [
    'Teams understand the expected level before the first service.',
    'Department heads are more ready to brief and support.',
    'Handovers are defined before launch.',
    'Core procedures are tested in practical situations.',
    'First operating days start with less uncertainty.',
    'The team keeps a written base after opening.',
  ],
  relatedLabel: 'Related pages',
  relatedTitle: 'Prepare each department',
  related: [
    {
      href: `/${locale}/formation-reception-hotel`,
      title: 'Front desk training',
      text: 'Prepare welcome, check-in, handovers, guest communication and sensitive situations at the desk.',
    },
    {
      href: `/${locale}/formation-housekeeping-hotel`,
      title: 'Housekeeping training',
      text: 'Prepare room standards, inspections, trolley setup, briefings and floor quality control.',
    },
    {
      href: `/${locale}/formation-fb-restaurant`,
      title: 'F&B training',
      text: 'Prepare restaurant sequence, room service, allergens, briefings and guest recovery.',
    },
  ],
  finalTitle: 'Preparing an opening or activity restart?',
  finalText:
    'Share a few details about timing, team size and priority departments.',
  finalCta: 'Request a training quote',
})
