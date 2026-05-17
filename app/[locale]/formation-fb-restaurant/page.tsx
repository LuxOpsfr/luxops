import type { Metadata } from 'next'
import TrainingSeoPage, { type TrainingSeoPageData } from '@/components/TrainingSeoPage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'

  return {
    title: isEn
      ? 'F&B Training: Service Standards, Restaurant and Room Service | LuxOps'
      : 'Formation F&B : standards de service, restaurant et room service | LuxOps',
    description: isEn
      ? 'On-site F&B training for service sequence, restaurant opening, room service, allergens, briefings, guest communication and recovery.'
      : 'Formation F&B sur site : séquence de service, ouverture restaurant, room service, allergènes, briefings, communication client et recovery.',
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
  return <TrainingSeoPage locale={locale} data={isEn ? englishData(locale) : frenchData(locale)} />
}

const frenchData = (locale: string): TrainingSeoPageData => ({
  badge: 'Formation F&B',
  title: 'Formation F&B',
  intro:
    'Une formation terrain pour aligner les équipes de salle, bar, petit-déjeuner et room service autour d’une séquence de service claire.',
  context:
    'Le F&B exige du rythme, de la préparation, une communication fluide et des réflexes de recovery. La formation permet de travailler les moments qui font réellement la qualité perçue : mise en place, accueil, prise de commande, envoi, suivi de table, allergènes, addition et clôture du service.',
  primaryCta: 'Demander un devis formation',
  secondaryCta: 'Voir le Starter Pack F&B',
  secondaryHref: `/${locale}/playbooks/fb-starter-pack`,
  overviewLabel: 'Enjeu',
  overviewTitle: 'Rendre la séquence de service plus stable',
  overviewText:
    'Un service restaurant ou room service ne tient pas uniquement grâce à la bonne volonté des équipes. Il tient quand la préparation, les rôles, le vocabulaire client, les timings et les reprises en cas d’écart sont compris par tous.',
  modulesLabel: 'Modules F&B',
  modulesTitle: 'Les sujets à travailler en formation F&B',
  modules: [
    {
      title: 'Briefing et mise en place',
      text: 'Préparer le service avec des priorités claires : réservations, VIP, allergies, tables sensibles, ruptures, menus et points de vigilance.',
    },
    {
      title: 'Accueil et installation',
      text: 'Travailler l’arrivée du client, le rythme de prise en charge, le placement, la première boisson et les informations utiles sans surcharger l’échange.',
    },
    {
      title: 'Prise de commande',
      text: 'Sécuriser l’écoute, les questions de clarification, les allergies, les cuissons, les préférences et la transmission correcte en cuisine.',
    },
    {
      title: 'Séquence restaurant',
      text: 'Clarifier le rythme : boissons, entrées, plats, débarrassage, dessert, addition, clôture et coordination avec la cuisine.',
    },
    {
      title: 'Room service',
      text: 'Travailler la prise de commande, les délais annoncés, le dressage du plateau ou trolley, la livraison en chambre et la reprise.',
    },
    {
      title: 'Recovery client',
      text: 'Former les équipes à réagir vite lorsqu’un plat tarde, qu’une commande est incomplète ou qu’un client exprime une insatisfaction.',
    },
  ],
  methodLabel: 'Méthode',
  methodTitle: 'Des standards appliqués pendant le vrai rythme du service',
  methodText:
    'La formation peut partir du Playbook F&B, du Starter Pack F&B ou de vos standards internes. Le travail consiste à traduire les procédures en gestes, phrases, timings, contrôles et réflexes réellement utilisables pendant un service chargé.',
  outcomes: [
    'Des briefings plus utiles avant le service.',
    'Une séquence de restaurant plus fluide et régulière.',
    'Une meilleure gestion des allergies et demandes spécifiques.',
    'Des équipes plus à l’aise dans le recovery client.',
    'Un room service plus clair dans la prise de commande et la livraison.',
    'Des supports écrits à reprendre après la formation.',
  ],
  relatedLabel: 'Pages liées',
  relatedTitle: 'Compléter le travail F&B',
  related: [
    {
      href: `/${locale}/hotel-fb-sop`,
      title: 'SOP F&B',
      text: 'Page pilier pour les procédures F&B, standards de service, restaurant, bar et room service.',
    },
    {
      href: `/${locale}/food-and-beverage-service-sequence`,
      title: 'Séquence de service',
      text: 'Page dédiée aux étapes de service restaurant, de la préparation à la clôture.',
    },
    {
      href: `/${locale}/playbooks/fb`,
      title: 'Playbook F&B',
      text: 'Référence complète pour structurer les standards, procédures et méthodes du département.',
    },
  ],
  finalTitle: 'Besoin de stabiliser vos standards F&B ?',
  finalText:
    'Envoyez quelques informations sur votre établissement, la période envisagée et le nombre de collaborateurs concernés.',
  finalCta: 'Demander un devis formation',
})

const englishData = (locale: string): TrainingSeoPageData => ({
  badge: 'F&B training',
  title: 'F&B training',
  intro:
    'On-property training to align restaurant, bar, breakfast and room service teams around a clear service sequence.',
  context:
    'F&B requires pace, preparation, clear communication and recovery habits. Training focuses on the moments that shape perceived quality: setup, welcome, order taking, service flow, table follow-up, allergens, billing and closing the service.',
  primaryCta: 'Request a training quote',
  secondaryCta: 'View F&B Starter Pack',
  secondaryHref: `/${locale}/playbooks/fb-starter-pack`,
  overviewLabel: 'Challenge',
  overviewTitle: 'Make the service sequence more stable',
  overviewText:
    'Restaurant or room service consistency does not rely on goodwill alone. It holds when preparation, roles, guest language, timings and recovery habits are understood by everyone.',
  modulesLabel: 'F&B modules',
  modulesTitle: 'What to work on in F&B training',
  modules: [
    {
      title: 'Briefing and setup',
      text: 'Prepare service with clear priorities: reservations, VIPs, allergies, sensitive tables, unavailable items, menus and control points.',
    },
    {
      title: 'Welcome and seating',
      text: 'Work through guest arrival, pace of attention, seating, first drink and useful information without overloading the interaction.',
    },
    {
      title: 'Order taking',
      text: 'Secure listening, clarification questions, allergies, cooking points, preferences and correct communication with the kitchen.',
    },
    {
      title: 'Restaurant sequence',
      text: 'Clarify the rhythm: drinks, starters, mains, clearing, dessert, billing, closing and coordination with the kitchen.',
    },
    {
      title: 'Room service',
      text: 'Train order taking, promised timing, tray or trolley setup, in-room delivery and clearance.',
    },
    {
      title: 'Guest recovery',
      text: 'Help teams react quickly when a dish is delayed, an order is incomplete or a guest expresses dissatisfaction.',
    },
  ],
  methodLabel: 'Method',
  methodTitle: 'Standards applied during the real pace of service',
  methodText:
    'Training can use the F&B Playbook, the F&B Starter Pack or your internal standards. The work is to translate procedures into gestures, phrases, timings, controls and habits that teams can use during a busy service.',
  outcomes: [
    'Briefings become more useful before service.',
    'The restaurant sequence becomes more fluid and consistent.',
    'Allergens and specific requests are handled more safely.',
    'Teams are more confident with guest recovery.',
    'Room service order taking and delivery become clearer.',
    'The team keeps written references after the session.',
  ],
  relatedLabel: 'Related pages',
  relatedTitle: 'Continue the F&B work',
  related: [
    {
      href: `/${locale}/hotel-fb-sop`,
      title: 'F&B SOP',
      text: 'Pillar page for F&B procedures, service standards, restaurant, bar and room service.',
    },
    {
      href: `/${locale}/food-and-beverage-service-sequence`,
      title: 'Service sequence',
      text: 'Dedicated page for restaurant service steps, from preparation to closing.',
    },
    {
      href: `/${locale}/playbooks/fb`,
      title: 'F&B Playbook',
      text: 'Full reference to structure department standards, procedures and working methods.',
    },
  ],
  finalTitle: 'Need to stabilise your F&B standards?',
  finalText:
    'Send a few details about your property, expected timing and the number of team members involved.',
  finalCta: 'Request a training quote',
})
