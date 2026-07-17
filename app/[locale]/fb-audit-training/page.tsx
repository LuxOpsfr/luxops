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

export default async function FbAuditTrainingRoute({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== 'en') redirect('/fr/audit-formation-fb')
  return <TrainingSeoPage locale={locale} data={englishData(locale)} />
}

const englishData = (locale: string): TrainingSeoPageData => ({
  badge: 'F&B audit and training',
  title: 'F&B audit and training',
  intro:
    'Observe the real service, identify visible gaps, then train teams on the points that directly affect the guest experience.',
  context:
    'An F&B operation can look correct on paper and lose consistency during service: incomplete briefings, uneven timing, weak handovers, unsafe allergen handling, late recovery or fragile coordination between floor, bar, room service and kitchen.',
  primaryCta: 'Request a training quote',
  secondaryCta: 'View F&B training',
  secondaryHref: `/${locale}/formation-fb-restaurant`,
  overviewLabel: 'Objective',
  overviewTitle: 'Connect floor observation to immediately useful training',
  overviewText:
    'The audit shows what really happens during service. Training then turns observed gaps into standards, gestures, phrases, controls and routines that teams can apply from the next service.',
  modulesLabel: 'F&B scope',
  modulesTitle: 'What the audit and training can cover',
  modules: [
    {
      title: 'Briefing and preparation',
      text: 'Briefing quality, role allocation, sensitive tables, VIPs, allergens, unavailable items, service priorities and control points.',
    },
    {
      title: 'Restaurant sequence',
      text: 'Welcome, seating, order taking, table follow-up, clearing, billing, closing and the pace perceived by the guest.',
    },
    {
      title: 'Bar and drinks',
      text: 'Setup, visible cleanliness, product availability, floor-bar coordination, timing communication and service consistency.',
    },
    {
      title: 'Room service',
      text: 'Order taking, promised timing, tray or trolley setup, delivery, in-room presentation, clearance and missed item follow-up.',
    },
    {
      title: 'Allergens and specific requests',
      text: 'Request clarification, kitchen communication, guest confirmation, vigilance during service and manager escalation when needed.',
    },
    {
      title: 'Guest recovery',
      text: 'Response to delay, mistake, dissatisfaction or sensitive request, with calm posture and tracked solution.',
    },
  ],
  methodLabel: 'Method',
  methodTitle: 'Observe, prioritise, train, then anchor',
  methodText:
    'The intervention starts with a field review: service, handovers, briefings, guest touchpoints and coordination. Priority topics are then worked through in focused training, with scenarios and written supports adapted to the property.',
  outcomes: [
    'A clear view of the gaps that affect service consistency.',
    'F&B priorities that managers can explain to teams.',
    'More useful pre-service briefings.',
    'More stable restaurant and room service sequences.',
    'Safer habits around allergens and sensitive requests.',
    'A simple action plan for department heads.',
  ],
  relatedLabel: 'Related pages',
  relatedTitle: 'Connect audit, training and F&B tools',
  related: [
    {
      href: `/${locale}/formation-fb-restaurant`,
      title: 'F&B training',
      text: 'Training page for restaurant, bar, breakfast and room service teams.',
    },
    {
      href: `/${locale}/hotel-fb-sop`,
      title: 'F&B SOP',
      text: 'Pillar page for service standards, restaurant, bar and room service procedures.',
    },
    {
      href: `/${locale}/playbooks/fb-starter-pack`,
      title: 'F&B Starter Pack',
      text: 'Editable practical tools to structure F&B operational basics.',
    },
  ],
  finalTitle: 'Need an F&B diagnosis followed by training?',
  finalText:
    'Share a few details about your restaurant, bar, room service or priority outlet. We will suggest the right format.',
  finalCta: 'Request a training quote',
})
