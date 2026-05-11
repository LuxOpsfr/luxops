import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ClipboardCheck, Coffee, ConciergeBell, GlassWater, UtensilsCrossed } from 'lucide-react'
import TrackedLink from '@/components/TrackedLink'
import { breadcrumbSchema, faqSchema, localizedPath } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isEN = locale === 'en'

  return {
    title: isEN
      ? 'Hotel F&B SOP: Restaurant, Bar and Room Service Procedures | LuxOps'
      : 'SOP F&B hôtel : procédures restaurant, bar et room service | LuxOps',
    description: isEN
      ? 'Hotel F&B SOP guide for restaurant service standards, bar operations, breakfast, room service, allergen handling, guest recovery and daily service checklists.'
      : 'Guide SOP F&B hôtel pour standards de service restaurant, bar, petit-déjeuner, room service, allergènes, recovery client et checklists quotidiennes.',
    keywords: isEN
      ? 'hotel F&B SOP, hotel restaurant SOP, hotel food and beverage procedures, restaurant service standards hotel, room service SOP hotel, hotel bar SOP'
      : 'SOP F&B hôtel, procédures restaurant hôtel, standards service restaurant hôtel, procédures room service hôtel, SOP bar hôtel, food and beverage hôtel',
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/hotel-fb-sop`,
      languages: {
        en: 'https://www.luxops.fr/en/hotel-fb-sop',
        fr: 'https://www.luxops.fr/fr/hotel-fb-sop',
        'x-default': 'https://www.luxops.fr/en/hotel-fb-sop',
      },
    },
  }
}

type SectionItem = {
  title: string
  body: string
  points: string[]
}

type FaqItem = {
  question: string
  answer: string
}

const SOP_AREAS_EN: SectionItem[] = [
  {
    title: 'Restaurant service',
    body: 'A restaurant SOP should document the full service rhythm, not only the greeting and order taking. The team needs a clear sequence from briefing to mise en place, table approach, order flow, service recovery and closing handover.',
    points: ['Opening checklist', 'Sequence of service', 'Table inspection', 'Closing handover'],
  },
  {
    title: 'Breakfast operation',
    body: 'Breakfast needs separate procedures because volume, timing and guest expectations are different from lunch or dinner. Buffet checks, replenishment rhythm, coffee service, queue control and closing standards must be written.',
    points: ['Buffet setup', 'Replenishment rhythm', 'Coffee and tea flow', 'End of service reset'],
  },
  {
    title: 'Bar and beverage',
    body: 'The bar SOP should cover station setup, garnish preparation, glassware standards, pouring consistency, stock control, guest interaction and responsible service. It also needs clear closing and cash control steps.',
    points: ['Bar mise en place', 'Glassware and garnish', 'Beverage standards', 'Closing controls'],
  },
  {
    title: 'Room service',
    body: 'Room service fails when order taking, tray setup, delivery timing and tray collection are treated separately. A useful SOP links the full flow from phone script to tray presentation and post-delivery follow-up.',
    points: ['Order taking', 'Tray and trolley setup', 'Delivery timing', 'Tray collection'],
  },
  {
    title: 'Guest recovery',
    body: 'F&B teams need scripts and escalation rules for wrong orders, delays, allergen issues, cold dishes, billing disputes and service complaints. The goal is not a robotic script, but a clear response path.',
    points: ['Complaint scripts', 'Manager escalation', 'Recovery gestures', 'Incident log'],
  },
  {
    title: 'Allergen and dietary requests',
    body: 'Allergen handling must be documented because it is both a guest experience and safety issue. The SOP should define how requests are captured, repeated, flagged, communicated to kitchen and confirmed at service.',
    points: ['Request capture', 'Kitchen communication', 'Guest confirmation', 'Traceability'],
  },
]

const SOP_AREAS_FR: SectionItem[] = [
  {
    title: 'Service restaurant',
    body: 'Une SOP restaurant doit documenter le rythme complet du service, pas seulement l’accueil et la prise de commande. L’équipe a besoin d’une séquence claire depuis le briefing jusqu’à la mise en place, l’approche table, la prise de commande, le recovery et la passation de clôture.',
    points: ['Checklist d’ouverture', 'Séquence de service', 'Inspection table', 'Passation de clôture'],
  },
  {
    title: 'Service petit-déjeuner',
    body: 'Le petit-déjeuner mérite ses propres procédures, car le volume, le timing et les attentes client sont différents du déjeuner ou du dîner. Contrôle buffet, rythme de réassort, service café, gestion de file et standards de fermeture doivent être écrits.',
    points: ['Mise en place buffet', 'Rythme de réassort', 'Flux café et thé', 'Remise en état fin de service'],
  },
  {
    title: 'Bar et boissons',
    body: 'La SOP bar doit couvrir la mise en place du poste, les garnitures, la verrerie, la régularité des dosages, le contrôle stock, l’interaction client et le service responsable. Elle doit aussi cadrer la clôture et les contrôles caisse.',
    points: ['Mise en place bar', 'Verrerie et garnitures', 'Standards boissons', 'Contrôles de clôture'],
  },
  {
    title: 'Room service',
    body: 'Le room service se dégrade quand la prise de commande, le dressage plateau, le timing de livraison et le débarrassage sont traités séparément. Une SOP utile relie tout le flux, du script téléphone à la présentation plateau et au suivi après livraison.',
    points: ['Prise de commande', 'Dressage plateau et trolley', 'Timing de livraison', 'Débarrassage'],
  },
  {
    title: 'Recovery client',
    body: 'Les équipes F&B ont besoin de scripts et de règles d’escalade pour les erreurs de commande, retards, sujets allergènes, plats froids, écarts de facturation et plaintes de service. L’objectif n’est pas un script figé, mais un chemin de réponse clair.',
    points: ['Scripts réclamation', 'Escalade manager', 'Gestes recovery', 'Journal d’incident'],
  },
  {
    title: 'Allergènes et demandes alimentaires',
    body: 'La gestion des allergènes doit être documentée parce qu’elle touche à la fois l’expérience client et la sécurité. La SOP doit définir comment la demande est captée, reformulée, signalée, transmise en cuisine et confirmée au service.',
    points: ['Capture de la demande', 'Communication cuisine', 'Confirmation client', 'Traçabilité'],
  },
]

const DAILY_FLOW_EN = [
  {
    title: 'Before service',
    items: [
      'Briefing completed with covers, VIPs, allergies, unavailable items and upsell focus',
      'Side stations stocked to par level with linen, cutlery, glassware and service tools',
      'Tables inspected for alignment, wobble, glassware, menu condition and cleanliness',
      'Room service trays, trolleys and condiments checked before the first order',
    ],
  },
  {
    title: 'During service',
    items: [
      'Host welcome, seating and first contact follow the same timing standard',
      'Orders are repeated back when allergies, modifications or room numbers are involved',
      'Manager monitors waiting times, table satisfaction and unresolved guest signals',
      'Incidents are logged with table, room, item, action taken and follow-up owner',
    ],
  },
  {
    title: 'After service',
    items: [
      'Closing checklist completed by station, not from memory',
      'Cash, postings, voids and discounts reviewed before shift sign-off',
      'Open guest issues passed to the next shift or duty manager',
      'Recurring defects turned into the next briefing topic or coaching point',
    ],
  },
]

const DAILY_FLOW_FR = [
  {
    title: 'Avant le service',
    items: [
      'Briefing réalisé avec couverts, VIP, allergies, produits indisponibles et focus upsell',
      'Offices et consoles réassortis selon le par stock : linge, couverts, verrerie et matériel de service',
      'Tables inspectées : alignement, stabilité, verrerie, état des menus et propreté',
      'Plateaux, trolleys et condiments room service contrôlés avant la première commande',
    ],
  },
  {
    title: 'Pendant le service',
    items: [
      'Accueil, placement et premier contact suivent le même standard de timing',
      'Les commandes sont reformulées quand il y a allergie, modification ou numéro de chambre',
      'Le manager suit les temps d’attente, la satisfaction table et les signaux client non résolus',
      'Les incidents sont tracés avec table, chambre, article, action menée et responsable du suivi',
    ],
  },
  {
    title: 'Après le service',
    items: [
      'Checklist de clôture complétée par poste, pas de mémoire',
      'Caisse, postings, annulations et remises contrôlés avant validation de fin de service',
      'Les sujets client ouverts sont transmis au service suivant ou au duty manager',
      'Les défauts récurrents deviennent un sujet de briefing ou de coaching',
    ],
  },
]

const FAQS_EN: FaqItem[] = [
  {
    question: 'What should a hotel F&B SOP include?',
    answer:
      'A hotel F&B SOP should include restaurant service sequence, breakfast operation, bar setup, wine and beverage standards, room service, allergen handling, guest recovery, mise en place, closing controls and manager handover rules.',
  },
  {
    question: 'Is a restaurant SOP different from a hotel F&B SOP?',
    answer:
      'Yes. A restaurant SOP can focus on dining room service. A hotel F&B SOP normally needs to cover multiple outlets and connections with reception, housekeeping, kitchen, room service, billing and guest recovery.',
  },
  {
    question: 'Can this be used by independent hotels?',
    answer:
      'Yes. Independent hotels usually need practical procedures that are easy to adapt. The important point is to document the actual flow of service, not copy a generic brand manual.',
  },
  {
    question: 'Should I start with a starter pack or the full playbook?',
    answer:
      'Use the starter pack if you need immediate checklists, scripts and control tools. Use the full playbook if you need the complete F&B SOP reference with detailed procedures and department standards.',
  },
]

const FAQS_FR: FaqItem[] = [
  {
    question: 'Que doit contenir une SOP F&B hôtel ?',
    answer:
      'Une SOP F&B hôtel doit couvrir la séquence de service restaurant, le petit-déjeuner, la mise en place bar, les standards boissons et vin, le room service, les allergènes, le recovery client, la mise en place, les contrôles de clôture et les règles de passation manager.',
  },
  {
    question: 'Une SOP restaurant est-elle différente d’une SOP F&B hôtel ?',
    answer:
      'Oui. Une SOP restaurant peut se concentrer sur la salle. Une SOP F&B hôtel doit généralement couvrir plusieurs points de vente et les liens avec la réception, le housekeeping, la cuisine, le room service, la facturation et le recovery client.',
  },
  {
    question: 'Est-ce adapté à un hôtel indépendant ?',
    answer:
      'Oui. Les hôtels indépendants ont besoin de procédures pratiques et faciles à adapter. Le point important est de documenter le vrai flux de service, pas de copier un manuel de marque générique.',
  },
  {
    question: 'Faut-il commencer par un starter pack ou le playbook complet ?',
    answer:
      'Utilisez le starter pack si vous avez besoin de checklists, scripts et outils de contrôle immédiats. Utilisez le playbook complet si vous avez besoin de toute la référence SOP F&B avec procédures détaillées et standards de département.',
  },
]

const ARTICLE_LINKS = [
  {
    href: '/blog/hotel-fb-service-standards',
    titleEn: 'Hotel F&B Service Standards',
    titleFr: 'Standards de service F&B hôtelier',
    bodyEn: 'Restaurant, bar, room service and banquet service standards.',
    bodyFr: 'Standards restaurant, bar, room service et banquet.',
  },
  {
    href: '/blog/hotel-fb-restaurant-procedures',
    titleEn: 'Hotel Restaurant Procedures',
    titleFr: 'Procédures restaurant hôtel',
    bodyEn: 'A restaurant SOP flow from briefing to closing handover.',
    bodyFr: 'Un flux SOP restaurant du briefing à la passation de clôture.',
  },
  {
    href: '/blog/hotel-room-service-sops',
    titleEn: 'Hotel Room Service SOP',
    titleFr: 'SOP room service hôtel',
    bodyEn: 'Order taking, tray setup, delivery timing and collection.',
    bodyFr: 'Prise de commande, dressage plateau, livraison et débarrassage.',
  },
]

function localizeHref(locale: string, href: string) {
  return `/${locale}${href}`
}

export default async function HotelFbSopPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isEN = locale === 'en'
  const areas = isEN ? SOP_AREAS_EN : SOP_AREAS_FR
  const dailyFlow = isEN ? DAILY_FLOW_EN : DAILY_FLOW_FR
  const faqs = isEN ? FAQS_EN : FAQS_FR

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: isEN
          ? 'Hotel F&B SOP: Restaurant, Bar and Room Service Procedures'
          : 'SOP F&B hôtel : procédures restaurant, bar et room service',
        description: isEN
          ? 'A practical guide to hotel F&B SOPs covering restaurant service, bar operations, breakfast, room service, allergen handling and recovery.'
          : 'Guide pratique des SOP F&B hôtel couvrant service restaurant, bar, petit-déjeuner, room service, allergènes et recovery client.',
        author: { '@id': 'https://www.luxops.fr/#organization' },
        publisher: { '@id': 'https://www.luxops.fr/#organization' },
        mainEntityOfPage: localizedPath(locale, '/hotel-fb-sop'),
      },
      breadcrumbSchema([
        { name: 'LuxOps', url: localizedPath(locale) },
        { name: isEN ? 'Hotel F&B SOP' : 'SOP F&B hôtel', url: localizedPath(locale, '/hotel-fb-sop') },
      ]),
      faqSchema(faqs),
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="bg-white">
        <section className="bg-[#1A2E44] text-white px-6 pt-36 md:pt-40 pb-20">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
              <UtensilsCrossed size={15} />
              {isEN ? 'Food & Beverage SOP' : 'SOP Food & Beverage'}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {isEN
                ? 'Hotel F&B SOP: Restaurant, Bar and Room Service Procedures'
                : 'SOP F&B hôtel : procédures restaurant, bar et room service'}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
              {isEN
                ? 'A practical operating framework for hotel F&B teams: service briefing, mise en place, table standards, allergen handling, room service, closing controls and guest recovery.'
                : 'Un cadre opérationnel pratique pour les équipes F&B hôtel : briefing, mise en place, standards table, gestion allergènes, room service, contrôles de clôture et recovery client.'}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <TrackedLink
                href={`/${locale}/playbooks/fb-starter-pack`}
                eventName="fb_starter_pack_cta_clicked"
                eventProperties={{ source_page: `/${locale}/hotel-fb-sop`, position: 'hero' }}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1A2E44] px-7 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {isEN ? 'View F&B Starter Pack' : 'Voir le Starter Pack F&B'}
                <ArrowRight size={18} />
              </TrackedLink>
              <TrackedLink
                href={`/${locale}/playbooks/fb`}
                eventName="fb_playbook_cta_clicked"
                eventProperties={{ source_page: `/${locale}/hotel-fb-sop`, position: 'hero' }}
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                {isEN ? 'See Full F&B Playbook' : 'Voir le Playbook F&B complet'}
              </TrackedLink>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 border-b border-gray-100">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#0056D2] mb-4">
                {isEN ? 'Operational purpose' : 'Objectif opérationnel'}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-5">
                {isEN
                  ? 'A useful F&B SOP follows the service, not the theory'
                  : 'Une bonne SOP F&B suit le service, pas la théorie'}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {isEN
                    ? 'In a hotel, Food & Beverage is not one single operation. Breakfast, restaurant service, bar, banquets and room service all have different pressure points. A strong SOP library gives each outlet the right sequence, while keeping the same service language across the property.'
                    : 'Dans un hôtel, le Food & Beverage n’est pas une seule opération. Petit-déjeuner, restaurant, bar, banquets et room service ont chacun leurs points de tension. Une bibliothèque SOP solide donne à chaque point de vente la bonne séquence, tout en gardant le même langage de service dans l’établissement.'}
                </p>
                <p>
                  {isEN
                    ? 'The goal is simple: make the basics repeatable. Every shift should know what to prepare, what to check, what to say, when to escalate and how to close the service cleanly.'
                    : 'L’objectif est simple : rendre les bases répétables. Chaque service doit savoir quoi préparer, quoi contrôler, quoi dire, quand escalader et comment clôturer proprement.'}
                </p>
              </div>
            </div>
            <div className="bg-[#F6F8FB] border border-gray-200 rounded-xl p-6">
              <p className="text-sm font-semibold text-[#1A2E44] mb-4">
                {isEN ? 'Core F&B SOP modules' : 'Modules SOP F&B essentiels'}
              </p>
              <div className="space-y-3">
                {(isEN
                  ? ['Restaurant service sequence', 'Breakfast operation', 'Bar and beverage service', 'Room service flow', 'Allergen handling', 'Guest recovery and complaints']
                  : ['Séquence de service restaurant', 'Service petit-déjeuner', 'Bar et service des boissons', 'Flux room service', 'Gestion allergènes', 'Recovery client et réclamations']
                ).map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle2 size={17} className="text-[#0056D2] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#0056D2] mb-4">
                {isEN ? 'What to document' : 'Ce qu’il faut documenter'}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
                {isEN ? 'The six F&B areas that need written procedures' : 'Les six zones F&B qui ont besoin de procédures écrites'}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {isEN
                  ? 'The best F&B SOPs are specific enough for daily execution and simple enough for a supervisor to coach from them during service.'
                  : 'Les meilleures SOP F&B sont assez précises pour l’exécution quotidienne et assez simples pour qu’un superviseur puisse coacher l’équipe pendant le service.'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areas.map((area, index) => {
                const icons = [UtensilsCrossed, Coffee, GlassWater, ConciergeBell, ClipboardCheck, CheckCircle2]
                const Icon = icons[index]
                return (
                  <article key={area.title} className="border border-gray-200 rounded-xl p-6 hover:border-[#1A2E44] transition-colors">
                    <Icon size={24} className="text-[#0056D2] mb-4" />
                    <h3 className="text-xl font-bold text-[#111111] mb-3">{area.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-5">{area.body}</p>
                    <div className="space-y-2">
                      {area.points.map((point) => (
                        <div key={point} className="flex gap-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0056D2] mt-2 flex-shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[#F6F8FB] border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#0056D2] mb-4">
                {isEN ? 'Free operational extract' : 'Extrait opérationnel'}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
                {isEN ? 'A simple F&B daily service control flow' : 'Un flux simple de contrôle du service F&B'}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {isEN
                  ? 'This is the type of practical logic used inside the LuxOps F&B Starter Pack and F&B Playbook.'
                  : 'C’est le type de logique pratique utilisée dans le Starter Pack F&B et le Playbook F&B LuxOps.'}
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {dailyFlow.map((block) => (
                <div key={block.title} className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-[#111111] mb-5">{block.title}</h3>
                  <div className="space-y-4">
                    {block.items.map((item) => (
                      <div key={item} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                        <CheckCircle2 size={16} className="text-[#0056D2] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
            <div className="border border-[#D7E4F7] bg-[#F4F8FF] rounded-xl p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#0056D2] mb-4">
                {isEN ? 'Starter Pack' : 'Starter Pack'}
              </p>
              <h2 className="text-3xl font-bold text-[#111111] mb-4">
                {isEN ? 'F&B Service Starter Pack' : 'Starter Pack F&B'}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {isEN
                  ? 'Use this when you need immediate tools: daily service checklist, opening and closing checklists, briefing template, room service checklist, allergen tracker and recovery scripts.'
                  : 'À utiliser si vous avez besoin d’outils immédiats : checklist service quotidien, checklists ouverture et fermeture, briefing, checklist room service, suivi allergènes et scripts recovery.'}
              </p>
              <TrackedLink
                href={`/${locale}/playbooks/fb-starter-pack`}
                eventName="fb_starter_pack_cta_clicked"
                eventProperties={{ source_page: `/${locale}/hotel-fb-sop`, position: 'comparison' }}
                className="inline-flex items-center gap-2 bg-[#0056D2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0046B8] transition-colors"
              >
                {isEN ? 'View Starter Pack' : 'Voir le Starter Pack'}
                <ArrowRight size={17} />
              </TrackedLink>
            </div>
            <div className="border border-gray-200 rounded-xl p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                {isEN ? 'Full reference' : 'Référence complète'}
              </p>
              <h2 className="text-3xl font-bold text-[#111111] mb-4">
                {isEN ? 'Full F&B Playbook' : 'Playbook F&B complet'}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {isEN
                  ? 'Use this when you need the complete department reference: restaurant standards, breakfast, bar, wine service, room service, guest interaction, mise en place, team management and quality standards.'
                  : 'À utiliser si vous avez besoin de la référence complète du département : standards restaurant, petit-déjeuner, bar, service du vin, room service, interaction client, mise en place, management équipe et standards qualité.'}
              </p>
              <TrackedLink
                href={`/${locale}/playbooks/fb`}
                eventName="fb_playbook_cta_clicked"
                eventProperties={{ source_page: `/${locale}/hotel-fb-sop`, position: 'comparison' }}
                className="inline-flex items-center gap-2 border border-[#1A2E44] text-[#1A2E44] px-6 py-3 rounded-lg font-semibold hover:bg-[#1A2E44] hover:text-white transition-colors"
              >
                {isEN ? 'See Full Playbook' : 'Voir le Playbook complet'}
                <ArrowRight size={17} />
              </TrackedLink>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[#F6F8FB] border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#0056D2] mb-4">
                  {isEN ? 'F&B guides' : 'Guides F&B'}
                </p>
                <h2 className="text-3xl font-bold text-[#111111]">
                  {isEN ? 'Related F&B procedure guides' : 'Guides F&B associés'}
                </h2>
              </div>
              <Link href={`/${locale}/blog`} className="text-sm font-semibold text-[#0056D2] hover:underline">
                {isEN ? 'View all guides' : 'Voir tous les guides'}
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {ARTICLE_LINKS.map((article) => (
                <Link
                  key={article.href}
                  href={localizeHref(locale, article.href)}
                  className="group block bg-white border border-gray-200 rounded-xl p-6 hover:border-[#1A2E44] hover:shadow-sm transition-all"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                    {isEN ? 'Guide' : 'Guide'}
                  </p>
                  <h3 className="text-lg font-bold text-[#111111] group-hover:underline mb-3">
                    {isEN ? article.titleEn : article.titleFr}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {isEN ? article.bodyEn : article.bodyFr}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#111111] mb-8">
              {isEN ? 'Frequently asked questions' : 'Questions fréquentes'}
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-gray-100 pb-6 last:border-b-0">
                  <h3 className="text-lg font-bold text-[#111111] mb-2">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[#111111] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              {isEN ? 'Structure your F&B service basics' : 'Structurer les bases du service F&B'}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              {isEN
                ? 'Start with practical checklists and scripts, then move to the full F&B Playbook when you need the complete department reference.'
                : 'Commencez avec des checklists et scripts pratiques, puis passez au Playbook F&B complet lorsque vous avez besoin de toute la référence du département.'}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <TrackedLink
                href={`/${locale}/playbooks/fb-starter-pack`}
                eventName="fb_starter_pack_cta_clicked"
                eventProperties={{ source_page: `/${locale}/hotel-fb-sop`, position: 'final' }}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#111111] px-7 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {isEN ? 'View F&B Starter Pack' : 'Voir le Starter Pack F&B'}
                <ArrowRight size={18} />
              </TrackedLink>
              <TrackedLink
                href={`/${locale}/free-hotel-procedures`}
                eventName="free_chapter_cta_clicked"
                eventProperties={{ source_page: `/${locale}/hotel-fb-sop`, position: 'final' }}
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                {isEN ? 'Download a Free Chapter' : 'Télécharger un chapitre gratuit'}
              </TrackedLink>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
