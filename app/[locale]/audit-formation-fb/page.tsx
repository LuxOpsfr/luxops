import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import TrainingSeoPage, { type TrainingSeoPageData } from '@/components/TrainingSeoPage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'

  return {
    title: isEn
      ? 'F&B Audit and Training: Restaurant, Bar and Room Service | LuxOps'
      : 'Audit et formation F&B : restaurant, bar et room service | LuxOps',
    description: isEn
      ? 'On-site F&B audit and training to review service standards, briefings, restaurant sequence, bar setup, room service and guest recovery.'
      : 'Audit et formation F&B sur site pour revoir standards de service, briefings, séquence restaurant, mise en place bar, room service et recovery client.',
    alternates: {
      canonical: isEn ? 'https://www.luxops.fr/en/fb-audit-training' : 'https://www.luxops.fr/fr/audit-formation-fb',
      languages: {
        en: 'https://www.luxops.fr/en/fb-audit-training',
        fr: 'https://www.luxops.fr/fr/audit-formation-fb',
        'x-default': 'https://www.luxops.fr/en/fb-audit-training',
      },
    },
  }
}

export default async function AuditFormationFbRoute({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale === 'en') redirect('/en/fb-audit-training')
  return <TrainingSeoPage locale={locale} data={frenchData(locale)} />
}

const frenchData = (locale: string): TrainingSeoPageData => ({
  badge: 'Audit et formation F&B',
  title: 'Audit et formation F&B',
  intro:
    'Observer le service réel, identifier les écarts visibles puis former les équipes sur les points qui ont un impact direct sur l’expérience client.',
  context:
    'Une prestation F&B peut sembler correcte sur le papier et perdre en régularité pendant le service : briefing incomplet, timing irrégulier, passation floue, allergies mal sécurisées, recovery tardif ou coordination fragile entre salle, bar, room service et cuisine.',
  primaryCta: 'Demander un devis formation',
  secondaryCta: 'Voir la formation F&B',
  secondaryHref: `/${locale}/formation-fb-restaurant`,
  overviewLabel: 'Objectif',
  overviewTitle: 'Relier l’observation terrain à une formation immédiatement utile',
  overviewText:
    'L’audit permet de voir ce qui se passe réellement pendant le service. La formation transforme ensuite les écarts observés en standards, gestes, phrases, contrôles et routines que les équipes peuvent appliquer dès le service suivant.',
  modulesLabel: 'Périmètre F&B',
  modulesTitle: 'Ce que l’audit et la formation peuvent couvrir',
  modules: [
    {
      title: 'Briefing et préparation',
      text: 'Qualité du briefing, répartition des rôles, tables sensibles, VIP, allergies, ruptures, priorités du service et points de vigilance.',
    },
    {
      title: 'Séquence restaurant',
      text: 'Accueil, installation, prise de commande, suivi de table, débarrassage, addition, clôture et perception du rythme côté client.',
    },
    {
      title: 'Bar et boissons',
      text: 'Mise en place, propreté visible, disponibilité produit, coordination salle-bar, annonce des délais et cohérence de service.',
    },
    {
      title: 'Room service',
      text: 'Prise de commande, délai annoncé, dressage plateau ou trolley, livraison, présentation en chambre, reprise et suivi des oublis.',
    },
    {
      title: 'Allergènes et demandes spécifiques',
      text: 'Clarification de la demande, transmission cuisine, confirmation client, vigilance pendant l’envoi et escalade manager si besoin.',
    },
    {
      title: 'Recovery client',
      text: 'Réaction face à un retard, une erreur, une insatisfaction ou une demande sensible, avec une posture calme et une solution suivie.',
    },
  ],
  methodLabel: 'Méthode',
  methodTitle: 'Observer, prioriser, former, puis ancrer',
  methodText:
    'L’intervention commence par une lecture terrain : service, passations, briefings, points de contact client et coordination. Les sujets prioritaires sont ensuite travaillés en formation courte, avec mises en situation et supports écrits adaptés au contexte de l’établissement.',
  outcomes: [
    'Une lecture claire des écarts qui nuisent à la régularité du service.',
    'Des priorités F&B faciles à expliquer aux équipes.',
    'Des briefings plus utiles avant le service.',
    'Une séquence restaurant et room service plus stable.',
    'Des réflexes plus sûrs sur les allergies et demandes sensibles.',
    'Un plan d’action simple à reprendre avec les chefs de service.',
  ],
  relatedLabel: 'Pages liées',
  relatedTitle: 'Relier audit, formation et outils F&B',
  related: [
    {
      href: `/${locale}/formation-fb-restaurant`,
      title: 'Formation F&B',
      text: 'Page dédiée à la formation restaurant, bar, petit-déjeuner et room service.',
    },
    {
      href: `/${locale}/hotel-fb-sop`,
      title: 'SOP F&B',
      text: 'Page pilier pour les standards de service, procédures restaurant, bar et room service.',
    },
    {
      href: `/${locale}/playbooks/fb-starter-pack`,
      title: 'Starter Pack F&B',
      text: 'Outils pratiques et modifiables pour structurer les basiques opérationnels F&B.',
    },
  ],
  finalTitle: 'Besoin d’un diagnostic F&B suivi d’une formation ?',
  finalText:
    'Envoyez quelques informations sur votre restaurant, bar, room service ou point de vente prioritaire. Nous revenons vers vous avec un format adapté.',
  finalCta: 'Demander un devis formation',
})

