import type { Metadata } from 'next'
import TrainingSeoPage, { type TrainingSeoPageData } from '@/components/TrainingSeoPage'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'

  return {
    title: isEn
      ? 'Front Desk Training: Reception Standards and Guest Service | LuxOps'
      : 'Formation réception : accueil, standards de service et réflexes front office | LuxOps',
    description: isEn
      ? 'On-site front desk training for check-in, check-out, PMS, handovers, guest communication, complaint handling and service standards.'
      : 'Formation réception sur site : accueil, check-in, check-out, PMS, passations, communication client, réclamations et standards de service.',
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
  return <TrainingSeoPage locale={locale} data={isEn ? englishData(locale) : frenchData(locale)} />
}

const frenchData = (locale: string): TrainingSeoPageData => ({
  badge: 'Formation réception',
  title: 'Formation réception',
  intro:
    'Former les équipes de réception aux réflexes qui tiennent vraiment au desk : accueil, check-in, check-out, demandes client, passations et gestion des situations sensibles.',
  context:
    'La réception concentre à la fois l’administratif, la relation client, la coordination avec les étages et la gestion des imprévus. La formation sert à donner un cadre clair, utilisable pendant le service, sans réduire le front office à une simple utilisation du PMS.',
  primaryCta: 'Demander un devis formation',
  secondaryCta: 'Voir le Playbook Front Office',
  secondaryHref: `/${locale}/playbooks/fo`,
  overviewLabel: 'Enjeu',
  overviewTitle: 'Garder le niveau lorsque le desk est sous pression',
  overviewText:
    'Une bonne formation réception doit travailler la précision technique et l’exécution du service. Ouvrir une réservation, clôturer un folio ou imprimer une fiche ne suffit pas. Il faut aussi savoir garder le ton, orienter clairement, gérer l’attente et transmettre la bonne information au bon moment.',
  modulesLabel: 'Modules réception',
  modulesTitle: 'Les sujets à structurer dans une formation front office',
  modules: [
    {
      title: 'Accueil et première impression',
      text: 'Installer une séquence d’accueil claire : prise de contact, posture, vérification, orientation et conclusion de l’échange.',
    },
    {
      title: 'Check-in et check-out',
      text: 'Travailler les étapes visibles par le client, les points administratifs, les écarts de facturation, les départs express et les situations de tension.',
    },
    {
      title: 'PMS et gestion du séjour',
      text: 'Réduire les erreurs qui se répercutent ensuite sur la chambre, la facturation, les demandes client ou la communication avec les autres services.',
    },
    {
      title: 'Passations entre shifts',
      text: 'Structurer les informations à transmettre : demandes en cours, VIP, litiges, arrivées sensibles, chambres à suivre et actions à relancer.',
    },
    {
      title: 'Communication client',
      text: 'Garder un langage clair au desk, au téléphone, par email et dans les messages, avec une manière cohérente d’annoncer un délai ou une contrainte.',
    },
    {
      title: 'Réclamations et recovery',
      text: 'Donner une séquence simple : écouter, reconnaître, agir, escalader si nécessaire, puis assurer un suivi pour éviter que le sujet reste ouvert.',
    },
  ],
  methodLabel: 'Méthode',
  methodTitle: 'Une formation construite autour des vrais moments de réception',
  methodText:
    'La session peut s’appuyer sur vos standards existants ou sur les procédures du Playbook Front Office. L’idée est de travailler les situations réellement vécues par les équipes : arrivée sous pression, client contrarié, file d’attente, information incomplète, demande spéciale, litige de facturation ou passation mal faite.',
  outcomes: [
    'Des équipes plus à l’aise dans les moments de pression au desk.',
    'Des passations plus propres entre shifts et avec le housekeeping.',
    'Une meilleure cohérence dans le langage client.',
    'Moins d’erreurs PMS avec impact opérationnel.',
    'Des réclamations traitées avec une séquence plus claire.',
    'Un support écrit à reprendre après la session.',
  ],
  relatedLabel: 'Pages liées',
  relatedTitle: 'Compléter le travail réception',
  related: [
    {
      href: `/${locale}/formation-equipe-hoteliere`,
      title: 'Formation équipes hôtelières',
      text: 'Page large pour les standards de service, l’intégration, les passations et la coordination entre services.',
    },
    {
      href: `/${locale}/formation-chefs-de-service`,
      title: 'Formation chefs de service',
      text: 'Briefings, suivi terrain, management opérationnel et maintien des standards dans le temps.',
    },
    {
      href: `/${locale}/playbooks/fo-starter-pack`,
      title: 'Starter Pack Front Office',
      text: 'Checklists, passations et scripts front office pour soutenir la formation avec des outils simples.',
    },
  ],
  finalTitle: 'Besoin de structurer les réflexes de votre réception ?',
  finalText:
    'Envoyez quelques informations sur votre établissement, la période envisagée et le nombre de collaborateurs concernés.',
  finalCta: 'Demander un devis formation',
})

const englishData = (locale: string): TrainingSeoPageData => ({
  badge: 'Front desk training',
  title: 'Front desk training',
  intro:
    'Train reception teams on the habits that matter at the desk: welcome, check-in, check-out, guest requests, handovers and sensitive situations.',
  context:
    'The front desk combines administration, guest relations, room coordination and incident handling. Training gives the team a practical framework for service, not only PMS use.',
  primaryCta: 'Request a training quote',
  secondaryCta: 'View Front Office Playbook',
  secondaryHref: `/${locale}/playbooks/fo`,
  overviewLabel: 'Challenge',
  overviewTitle: 'Maintain standards when the desk is under pressure',
  overviewText:
    'Good front desk training must cover technical accuracy and service execution. Opening a reservation, closing a folio or printing a registration card is not enough. Teams also need tone, clarity, waiting-time management and reliable handovers.',
  modulesLabel: 'Front desk modules',
  modulesTitle: 'What to structure in front office training',
  modules: [
    {
      title: 'Welcome and first impression',
      text: 'Install a clear welcome sequence: first contact, posture, verification, orientation and closing the interaction.',
    },
    {
      title: 'Check-in and check-out',
      text: 'Work through guest-facing steps, administrative controls, billing gaps, express departures and tense moments.',
    },
    {
      title: 'PMS and stay management',
      text: 'Reduce errors that later affect room status, billing, guest requests or communication with other departments.',
    },
    {
      title: 'Shift handovers',
      text: 'Structure what needs to be passed on: open requests, VIPs, complaints, sensitive arrivals, rooms to follow and pending actions.',
    },
    {
      title: 'Guest communication',
      text: 'Keep clear language at the desk, on the phone, by email and through messages, especially when explaining delays or constraints.',
    },
    {
      title: 'Complaint handling and recovery',
      text: 'Give teams a simple sequence: listen, acknowledge, act, escalate when needed and follow up until the issue is closed.',
    },
  ],
  methodLabel: 'Method',
  methodTitle: 'Training built around real front desk moments',
  methodText:
    'The session can use your existing standards or the Front Office Playbook procedures. The point is to practise real situations: arrivals under pressure, frustrated guests, queues, incomplete information, special requests, billing disputes and weak handovers.',
  outcomes: [
    'Teams become more confident during busy desk moments.',
    'Handovers improve between shifts and with housekeeping.',
    'Guest language becomes more consistent.',
    'PMS errors with operational impact decrease.',
    'Complaints are handled with a clearer sequence.',
    'The team keeps a written reference after the session.',
  ],
  relatedLabel: 'Related pages',
  relatedTitle: 'Continue the front desk work',
  related: [
    {
      href: `/${locale}/formation-equipe-hoteliere`,
      title: 'Hotel team training',
      text: 'The broader page for service standards, onboarding, handovers and department coordination.',
    },
    {
      href: `/${locale}/formation-chefs-de-service`,
      title: 'Department leadership training',
      text: 'Briefings, floor follow-up, operational management and long-term standards maintenance.',
    },
    {
      href: `/${locale}/playbooks/fo-starter-pack`,
      title: 'Front Office Starter Pack',
      text: 'Checklists, handover tools and scripts that support training with practical front desk resources.',
    },
  ],
  finalTitle: 'Need to structure your front desk service habits?',
  finalText:
    'Send a few details about your property, expected timing and the number of team members involved.',
  finalCta: 'Request a training quote',
})
