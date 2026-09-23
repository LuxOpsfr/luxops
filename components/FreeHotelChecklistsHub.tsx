import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Download,
  FileText,
  Sparkles,
} from 'lucide-react'
import TrackedLink from '@/components/TrackedLink'
import { SITE_URL, breadcrumbSchema, faqSchema, localizedPath } from '@/lib/seo'

type Locale = 'en' | 'fr'

type ChecklistItem = {
  title: string
  role: string
  body: string
  href: string
  available: boolean
  sourceHref: string
}

type Department = {
  id: string
  label: string
  title: string
  intro: string
  starterHref: string
  playbookHref: string
  starterLabel: string
  playbookLabel: string
  items: ChecklistItem[]
}

const CONTENT = {
  en: {
    slug: '/free-hotel-checklists',
    alternateSlug: '/checklists-hotel-gratuites',
    metaTitle: 'Free Printable Hotel Checklists PDF | LuxOps',
    metaDescription:
      'Download free printable hotel checklists for housekeeping, front office, night audit, restaurant opening and room service.',
    eyebrow: 'Free PDF resources',
    h1: 'Free Printable Hotel Checklists',
    subtitle:
      'Practical PDF checklists adapted from LuxOps operational resources and organized by department for quick local adaptation on the floor.',
    intro:
      'Start with the free printable checklist when you need a simple floor tool. Use the Starter Pack when you need editable files, templates and scripts, and the full Playbook when you need the complete SOP reference.',
    downloadLabel: 'Download PDF',
    availableLabel: 'Available now',
    preparingLabel: 'PDF being prepared',
    starterPrefix: 'Need editable tools?',
    playbookPrefix: 'Need the full SOP reference?',
    sourceLabel: 'View related guide',
    departments: [
      {
        id: 'housekeeping',
        label: 'Housekeeping',
        title: 'Housekeeping checklists',
        intro:
          'Room cleaning, floor supervision, public areas and inspection controls for daily HSK operations.',
        starterHref: '/en/playbooks/hsk-starter-pack',
        playbookHref: '/en/playbooks/hsk',
        starterLabel: 'View Housekeeping Starter Pack',
        playbookLabel: 'View Housekeeping Playbook',
        items: [
          {
            title: 'Public Area Attendant Checklist',
            role: 'Public areas and houseperson tasks',
            body:
              'Lobby, corridors, elevators, public restrooms, pantries, guest requests and shift handover.',
            href: '/downloads/housekeeping-checklists/en/public-area-attendant-checklist.pdf',
            available: true,
            sourceHref: '/en/hotel-housekeeping-checklist',
          },
          {
            title: 'Room Attendant Checklist',
            role: 'Departure rooms and stayovers',
            body:
              'Trolley setup, room entry, departure room sequence, bathroom checks, stayover service and final self-inspection.',
            href: '/downloads/housekeeping-checklists/en/room-attendant-checklist.pdf',
            available: true,
            sourceHref: '/en/hotel-housekeeping-checklist',
          },
          {
            title: 'Housekeeping Supervisor Checklist',
            role: 'Floor inspection and release',
            body:
              'Room assignments, departure inspections, VIP checks, Clean vs Inspected release and quality coaching.',
            href: '/downloads/housekeeping-checklists/en/floor-housekeeping-supervisor-checklist.pdf',
            available: true,
            sourceHref: '/en/hotel-housekeeping-checklist',
          },
          {
            title: 'Bathroom Cleaning Checklist',
            role: 'Bathroom cleaning and inspection',
            body:
              'Toilet, shower, basin, mirror, floor corners, amenities, glassware and final bathroom self-check.',
            href: '/downloads/checklists/en/hotel-bathroom-cleaning-checklist.pdf',
            available: true,
            sourceHref: '/en/blog/hotel-bathroom-cleaning-sop',
          },
          {
            title: 'Departure Room Cleaning Checklist',
            role: 'Departure room reset',
            body:
              'Departure room reset sequence from first scan to final presentation, with lost property, linen, minibar and PMS status controls.',
            href: '/downloads/checklists/en/departure-room-cleaning-checklist.pdf',
            available: true,
            sourceHref: '/en/blog/hotel-room-cleaning-checklist',
          },
        ],
      },
      {
        id: 'front-office',
        label: 'Front Office',
        title: 'Front Office checklists',
        intro:
          'Reception checklists for shift opening, desk readiness, guest flow, handover and night audit controls.',
        starterHref: '/en/playbooks/fo-starter-pack',
        playbookHref: '/en/playbooks/fo',
        starterLabel: 'View Front Office Starter Pack',
        playbookLabel: 'View Front Office Playbook',
        items: [
          {
            title: 'Front Desk Daily Checklist',
            role: 'Reception shift basics',
            body:
              'Shift opening, arrivals review, room readiness, billing checks, desk systems and first-hour priorities.',
            href: '/downloads/checklists/en/front-desk-daily-checklist.pdf',
            available: true,
            sourceHref: '/en/hotel-front-office-checklist',
          },
          {
            title: 'Night Audit Checklist',
            role: 'Night audit and morning handover',
            body:
              'Pre-closing checks, PMS run, VCC, cash control, reports, night log and AM shift handover.',
            href: '/downloads/checklists/en/night-audit-checklist.pdf',
            available: true,
            sourceHref: '/en/hotel-night-audit-checklist',
          },
        ],
      },
      {
        id: 'fb',
        label: 'Food and Beverage',
        title: 'F&B checklists',
        intro:
          'Restaurant, bar and room service checklists for service readiness, timing, setup, closing and handover.',
        starterHref: '/en/playbooks/fb-starter-pack',
        playbookHref: '/en/playbooks/fb',
        starterLabel: 'View F&B Starter Pack',
        playbookLabel: 'View F&B Playbook',
        items: [
          {
            title: 'Restaurant Opening Checklist',
            role: 'Pre-service restaurant opening',
            body:
              'Team readiness, dining room setup, terrace checks, table inspection, POS, briefing and final walk-through.',
            href: '/downloads/checklists/en/restaurant-opening-checklist.pdf',
            available: true,
            sourceHref: '/en/restaurant-opening-checklist',
          },
          {
            title: 'Bar Opening Checklist',
            role: 'Pre-service bar setup',
            body:
              'Bar station setup, ice, garnishes, glassware, par levels, POS, cash float and final walk-through.',
            href: '/downloads/checklists/en/bar-opening-checklist.pdf',
            available: true,
            sourceHref: '/en/bar-opening-checklist',
          },
          {
            title: 'Restaurant Closing Checklist',
            role: 'End-of-service closing',
            body:
              'Dining room reset, cleaning, POS and cash closing, stock control, kitchen and bar handover.',
            href: '/downloads/checklists/en/restaurant-closing-checklist.pdf',
            available: true,
            sourceHref: '/en/restaurant-closing-checklist',
          },
          {
            title: 'Room Service Checklist',
            role: 'In-room dining operations',
            body:
              'Order taking, timing standards, tray and trolley setup, delivery protocol, delay recovery and collection.',
            href: '/downloads/checklists/en/room-service-checklist.pdf',
            available: true,
            sourceHref: '/en/hotel-room-service-checklist',
          },
        ],
      },
    ] satisfies Department[],
    faqs: [
      {
        question: 'Are these checklists free?',
        answer:
          'Yes. The PDFs on this page are free printable resources and are available for direct download without email registration.',
      },
      {
        question: 'Can I edit them?',
        answer:
          'The free files are designed as printable PDFs. If you need editable PPTX files, templates and trackers, use the relevant Starter Pack.',
      },
      {
        question: 'What is the difference with Starter Packs?',
        answer:
          'The free PDFs are simple floor tools. Starter Packs include editable files, scripts, trackers and more complete operational templates.',
      },
      {
        question: 'Are they suitable for independent hotels?',
        answer:
          'Yes. They are written for practical use in independent hotels, boutique properties, resorts and small hospitality groups.',
      },
      {
        question: 'Can I use them for staff training?',
        answer:
          'Yes. They can support onboarding and coaching, especially when combined with the Starter Packs or full department Playbooks.',
      },
    ],
  },
  fr: {
    slug: '/checklists-hotel-gratuites',
    alternateSlug: '/free-hotel-checklists',
    metaTitle: 'Checklists gratuites PDF | LuxOps',
    metaDescription:
      'Téléchargez des checklists gratuites à imprimer pour housekeeping, réception, night audit, ouverture restaurant et room service.',
    eyebrow: 'Ressources PDF gratuites',
    h1: 'Checklists prêtes à imprimer',
    subtitle:
      'Des checklists PDF pratiques issues des ressources opérationnelles LuxOps, organisées par département et pensées pour le terrain.',
    intro:
      'Commencez avec une checklist PDF gratuite lorsque vous avez besoin d’un outil simple à imprimer. Utilisez le Starter Pack si vous avez besoin de fichiers modifiables, de templates et de scripts, puis le Playbook complet pour toute la référence SOP.',
    downloadLabel: 'Télécharger le PDF',
    availableLabel: 'Disponible',
    preparingLabel: 'PDF en préparation',
    starterPrefix: 'Besoin d’outils modifiables ?',
    playbookPrefix: 'Besoin de la référence SOP complète ?',
    sourceLabel: 'Voir le guide lié',
    departments: [
      {
        id: 'housekeeping',
        label: 'Housekeeping',
        title: 'Checklists housekeeping',
        intro:
          'Nettoyage chambre, inspection gouvernante, lieux publics et contrôles qualité pour les opérations HSK quotidiennes.',
        starterHref: '/fr/playbooks/hsk-starter-pack',
        playbookHref: '/fr/playbooks/hsk',
        starterLabel: 'Voir le Starter Pack Housekeeping',
        playbookLabel: 'Voir le Playbook Housekeeping',
        items: [
          {
            title: 'Checklist Équipier Lieux Publics',
            role: 'Lieux publics et zones communes',
            body:
              'Hall, couloirs, ascenseurs, sanitaires publics, offices, demandes clients et passation de service.',
            href: '/downloads/housekeeping-checklists/fr/checklist-equipier-lieux-publics.pdf',
            available: true,
            sourceHref: '/fr/hotel-housekeeping-checklist',
          },
          {
            title: 'Checklist Femme / Valet de Chambre',
            role: 'Chambre à blanc et recouche',
            body:
              'Chariot, protocole d’entrée, chambre à blanc, salle de bain, recouche et auto-contrôle final.',
            href: '/downloads/housekeeping-checklists/fr/checklist-femme-valet-de-chambre.pdf',
            available: true,
            sourceHref: '/fr/hotel-housekeeping-checklist',
          },
          {
            title: 'Checklist Gouvernante d’Étage',
            role: 'Inspection étage et libération chambre',
            body:
              'Feuilles de route, inspection chambre départ, chambres importantes, libération PMS et coaching qualité.',
            href: '/downloads/housekeeping-checklists/fr/checklist-gouvernante-etage-superviseur.pdf',
            available: true,
            sourceHref: '/fr/hotel-housekeeping-checklist',
          },
          {
            title: 'Checklist Nettoyage Salle de Bain',
            role: 'Nettoyage et inspection salle de bain',
            body:
              'Toilettes, douche, vasque, miroir, angles du sol, amenities, verrerie et auto-contrôle salle de bain.',
            href: '/downloads/checklists/fr/checklist-nettoyage-salle-de-bain-hotel.pdf',
            available: true,
            sourceHref: '/fr/blog/hotel-bathroom-cleaning-sop',
          },
          {
            title: 'Checklist Chambre à Blanc',
            role: 'Remise en état chambre départ',
            body:
              'Séquence chambre départ, objets trouvés, linge, minibar, présentation finale et statut PMS.',
            href: '/downloads/checklists/fr/checklist-chambre-a-blanc.pdf',
            available: true,
            sourceHref: '/fr/blog/hotel-room-cleaning-checklist',
          },
        ],
      },
      {
        id: 'front-office',
        label: 'Front Office',
        title: 'Checklists réception',
        intro:
          'Checklists réception pour ouverture de service, préparation du desk, flux client, passation et Night Audit.',
        starterHref: '/fr/playbooks/fo-starter-pack',
        playbookHref: '/fr/playbooks/fo',
        starterLabel: 'Voir le Starter Pack Front Office',
        playbookLabel: 'Voir le Playbook Front Office',
        items: [
          {
            title: 'Checklist Quotidienne Réception',
            role: 'Bases du shift réception',
            body:
              'Ouverture de service, arrivées, chambres disponibles, facturation, systèmes du desk et priorités de la première heure.',
            href: '/downloads/checklists/fr/checklist-quotidienne-reception.pdf',
            available: true,
            sourceHref: '/fr/hotel-front-office-checklist',
          },
          {
            title: 'Checklist Night Audit',
            role: 'Clôture nuit et passation matin',
            body:
              'Contrôles avant clôture, lancement PMS, VCC, caisse, rapports, main courante et Shift Handover AM.',
            href: '/downloads/checklists/fr/checklist-night-audit.pdf',
            available: true,
            sourceHref: '/fr/hotel-night-audit-checklist',
          },
        ],
      },
      {
        id: 'fb',
        label: 'Food and Beverage',
        title: 'Checklists F&B',
        intro:
          'Checklists restaurant, bar et room service pour préparer le service, contrôler le timing, fermer proprement et sécuriser la passation.',
        starterHref: '/fr/playbooks/fb-starter-pack',
        playbookHref: '/fr/playbooks/fb',
        starterLabel: 'Voir le Starter Pack F&B',
        playbookLabel: 'Voir le Playbook F&B',
        items: [
          {
            title: 'Checklist Ouverture Restaurant',
            role: 'Pré-service restaurant',
            body:
              'Équipe prête, salle, terrasse, inspection de table, POS, briefing et dernier tour de contrôle.',
            href: '/downloads/checklists/fr/checklist-ouverture-restaurant.pdf',
            available: true,
            sourceHref: '/fr/checklist-ouverture-restaurant',
          },
          {
            title: 'Checklist Ouverture Bar',
            role: 'Mise en place pré-service',
            body:
              'Poste bar, glace, garnitures, verrerie, niveaux de par, POS, fonds de caisse et dernier tour de contrôle.',
            href: '/downloads/checklists/fr/checklist-ouverture-bar.pdf',
            available: true,
            sourceHref: '/fr/checklist-ouverture-bar',
          },
          {
            title: 'Checklist Fermeture Restaurant',
            role: 'Fermeture de service',
            body:
              'Remise en ordre de la salle, nettoyage, clôture POS et caisse, contrôle stock, passation cuisine et bar.',
            href: '/downloads/checklists/fr/checklist-fermeture-restaurant.pdf',
            available: true,
            sourceHref: '/fr/checklist-fermeture-restaurant',
          },
          {
            title: 'Checklist Room Service',
            role: 'Opérations room service',
            body:
              'Prise de commande, standards de timing, dressage plateau ou chariot, livraison, recovery retard et débarrassage.',
            href: '/downloads/checklists/fr/checklist-room-service.pdf',
            available: true,
            sourceHref: '/fr/checklist-room-service-hotel',
          },
        ],
      },
    ] satisfies Department[],
    faqs: [
      {
        question: 'Ces checklists sont-elles gratuites ?',
        answer:
          'Oui. Les PDF de cette page sont des ressources gratuites à imprimer et disponibles en téléchargement direct, sans demande d’email.',
      },
      {
        question: 'Puis-je les modifier ?',
        answer:
          'Les fichiers gratuits sont pensés comme PDF imprimables. Pour des fichiers PPTX modifiables, des templates et des trackers, utilisez le Starter Pack correspondant.',
      },
      {
        question: 'Quelle différence avec les Starter Packs ?',
        answer:
          'Les PDF gratuits sont des outils simples pour le terrain. Les Starter Packs incluent des fichiers modifiables, scripts, trackers et templates opérationnels plus complets.',
      },
      {
        question: 'Est-ce adapté aux établissements indépendants ?',
        answer:
          'Oui. Les checklists sont conçues pour les établissements indépendants, boutique hôtels, resorts, restaurants et petits groupes hôteliers.',
      },
      {
        question: 'Peut-on les utiliser pour former les équipes ?',
        answer:
          'Oui. Elles peuvent soutenir l’onboarding et le coaching, surtout lorsqu’elles sont utilisées avec les Starter Packs ou les Playbooks complets.',
      },
    ],
  },
} satisfies Record<Locale, {
  slug: string
  alternateSlug: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  h1: string
  subtitle: string
  intro: string
  downloadLabel: string
  availableLabel: string
  preparingLabel: string
  starterPrefix: string
  playbookPrefix: string
  sourceLabel: string
  departments: Department[]
  faqs: { question: string; answer: string }[]
}>

export function getFreeHotelChecklistsMetadata(locale: Locale) {
  const content = CONTENT[locale]
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `https://www.luxops.fr/${locale}${content.slug}`,
      languages: {
        en: `https://www.luxops.fr/en${CONTENT.en.slug}`,
        fr: `https://www.luxops.fr/fr${CONTENT.fr.slug}`,
        'x-default': `https://www.luxops.fr/en${CONTENT.en.slug}`,
      },
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://www.luxops.fr/${locale}${content.slug}`,
      type: 'website',
    },
  }
}

export default function FreeHotelChecklistsHub({ locale }: { locale: Locale }) {
  const content = CONTENT[locale]
  const isEN = locale === 'en'
  const sourcePage = `/${locale}${content.slug}`
  const totalItems = content.departments.reduce((sum, department) => sum + department.items.length, 0)
  const availableItems = content.departments.reduce(
    (sum, department) => sum + department.items.filter((item) => item.available).length,
    0
  )

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: content.h1,
        description: content.metaDescription,
        url: localizedPath(locale, content.slug),
        mainEntity: content.departments.flatMap((department) =>
          department.items.map((item) => ({
            '@type': 'DigitalDocument',
            name: item.title,
            description: item.body,
            url: `${SITE_URL}${item.href}`,
          }))
        ),
      },
      breadcrumbSchema([
        { name: 'LuxOps', url: localizedPath(locale) },
        { name: content.h1, url: localizedPath(locale, content.slug) },
      ]),
      faqSchema(content.faqs),
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="bg-[#fcfbf8] text-[#0f211a]">
        <section className="border-b border-[rgba(32,35,31,0.14)] bg-[#f5f1e9] px-6 pb-16 pt-[calc(var(--site-header-height)+4rem)] md:pb-20 md:pt-[calc(var(--site-header-height)+5rem)]">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl">
              <span className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">
                <Download size={15} />
                {content.eyebrow}
              </span>
              <h1 className="mb-6 max-w-4xl font-display text-4xl font-medium leading-[1.05] md:text-6xl">{content.h1}</h1>
              <p className="mb-6 max-w-3xl text-lg leading-relaxed text-[#3d4a41] md:text-xl">
                {content.subtitle}
              </p>
              <p className="max-w-3xl text-sm leading-relaxed text-[#5d665f] md:text-base">
                {content.intro}
              </p>
            </div>

            <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              <Stat value={String(totalItems)} label={isEN ? 'Checklist cards' : 'Checklists'} />
              <Stat value={String(availableItems)} label={isEN ? 'Ready PDFs' : 'PDF prêts'} />
              <Stat value="EN + FR" label={isEN ? 'Languages' : 'Langues'} />
            </div>
          </div>
        </section>

        {content.departments.map((department, index) => (
          <DepartmentSection
            key={department.id}
            department={department}
            index={index}
            content={content}
            sourcePage={sourcePage}
          />
        ))}

        <section className="border-y border-[rgba(32,35,31,0.14)] bg-[#f5f1e9] px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-10 text-center font-display text-3xl font-medium text-[#0f211a] md:text-4xl">
              {isEN ? 'Frequently asked questions' : 'Questions fréquentes'}
            </h2>
            <div className="border-t border-[rgba(32,35,31,0.2)]">
              {content.faqs.map((faq) => (
                <details key={faq.question} className="group border-b border-[rgba(32,35,31,0.2)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-semibold text-[#0f211a] marker:hidden [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span><span aria-hidden="true" className="text-2xl font-light leading-none text-[#a58658] group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-3xl pb-6 text-sm leading-7 text-[#5d665f]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0f211a] px-6 py-16 text-[#fcfbf8]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-3 mb-6">
              <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <ClipboardCheck size={21} />
              </span>
              <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <FileText size={21} />
              </span>
              <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Sparkles size={21} />
              </span>
            </div>
            <h2 className="mb-4 font-display text-3xl font-medium">
              {isEN ? 'Turn printable checklists into daily standards' : 'Transformer les checklists imprimables en standards quotidiens'}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              {isEN
                ? 'Use the free PDFs for quick floor deployment, then move to Starter Packs when you need editable tools and complete department templates.'
                : 'Utilisez les PDF gratuits pour un déploiement rapide sur le terrain, puis passez aux Starter Packs lorsque vous avez besoin d’outils modifiables et de templates complets par département.'}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <TrackedLink
                href={`/${locale}/playbooks#starter-packs`}
                eventName="starter_packs_cta_clicked"
                eventProperties={{ source_page: sourcePage, position: 'final' }}
                className="inline-flex items-center justify-center gap-2 bg-[#fcfbf8] px-7 py-4 font-semibold text-[#0f211a] transition-colors hover:bg-[#e7e0d5]"
              >
                {isEN ? 'View Starter Packs' : 'Voir les Starter Packs'}
                <ArrowRight size={18} />
              </TrackedLink>
              <TrackedLink
                href={`/${locale}/free-hotel-procedures`}
                eventName="free_chapter_cta_clicked"
                eventProperties={{ source_page: sourcePage, position: 'final' }}
                className="inline-flex items-center justify-center gap-2 border border-white/30 px-7 py-4 font-semibold text-white transition-colors hover:bg-white/10"
              >
                {isEN ? 'Download free chapters' : 'Télécharger les chapitres gratuits'}
              </TrackedLink>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t border-[rgba(32,35,31,0.2)] pt-4">
      <p className="mb-1 font-display text-3xl">{value}</p>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5d665f]">{label}</p>
    </div>
  )
}

function DepartmentSection({
  department,
  index,
  content,
  sourcePage,
}: {
  department: Department
  index: number
  content: typeof CONTENT[Locale]
  sourcePage: string
}) {
  return (
    <section id={department.id} className={`px-6 py-16 ${index % 2 === 0 ? 'bg-[#fcfbf8]' : 'bg-[#f5f1e9]'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#a58658]">
            {department.label}
          </p>
          <h2 className="mb-4 font-display text-3xl font-medium text-[#0f211a] md:text-4xl">{department.title}</h2>
          <p className="text-gray-600 leading-relaxed">{department.intro}</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {department.items.map((item) => (
            <ChecklistCard
              key={item.href}
              item={item}
              content={content}
              sourcePage={sourcePage}
              departmentId={department.id}
            />
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <CommercialCta
            eyebrow={content.starterPrefix}
            title={department.starterLabel}
            href={department.starterHref}
            eventName="starter_pack_cta_clicked"
            sourcePage={sourcePage}
          />
          <CommercialCta
            eyebrow={content.playbookPrefix}
            title={department.playbookLabel}
            href={department.playbookHref}
            eventName="playbook_cta_clicked"
            sourcePage={sourcePage}
          />
        </div>
      </div>
    </section>
  )
}

function ChecklistCard({
  item,
  content,
  sourcePage,
  departmentId,
}: {
  item: ChecklistItem
  content: typeof CONTENT[Locale]
  sourcePage: string
  departmentId: string
}) {
  return (
    <article className="flex min-h-[300px] flex-col border border-[rgba(32,35,31,0.14)] bg-[#fcfbf8] p-6">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#e7e0d5]">
          <FileText size={23} className="text-[#24362f]" />
        </div>
        <span
          className={
            item.available
              ? 'bg-[#e7e0d5] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#24362f]'
              : 'text-[10px] font-bold uppercase tracking-widest text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full'
          }
        >
          {item.available ? content.availableLabel : content.preparingLabel}
        </span>
      </div>

      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">{item.role}</p>
      <h3 className="mb-4 font-display text-2xl font-medium leading-tight text-[#0f211a]">{item.title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6 flex-1">{item.body}</p>

      <div className="space-y-3">
        <TrackedLink
          href={item.href}
          eventName="free_checklist_download_clicked"
          eventProperties={{
            source_page: sourcePage,
            department: departmentId,
            checklist: item.title,
            status: item.available ? 'available' : 'preparing',
          }}
          className="inline-flex w-full items-center justify-center gap-2 bg-[#0f211a] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#24362f]"
          download
        >
          <Download size={17} />
          {content.downloadLabel}
        </TrackedLink>
        <Link
          href={item.sourceHref}
          className="inline-flex w-full items-center justify-center gap-2 px-5 py-2.5 font-semibold text-[#24362f] transition-colors hover:bg-[#e7e0d5]"
        >
          {content.sourceLabel}
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  )
}

function CommercialCta({
  eyebrow,
  title,
  href,
  eventName,
  sourcePage,
}: {
  eyebrow: string
  title: string
  href: string
  eventName: string
  sourcePage: string
}) {
  return (
    <TrackedLink
      href={href}
      eventName={eventName}
      eventProperties={{ source_page: sourcePage, position: 'department_cta' }}
      className="group border border-[rgba(32,35,31,0.18)] p-6 transition-colors hover:border-[#a58658]"
    >
      <div className="flex gap-4 items-start">
        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-[#e7e0d5]">
          <CheckCircle2 size={20} className="text-[#24362f]" />
        </span>
        <span>
          <span className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
            {eyebrow}
          </span>
          <span className="font-display text-lg text-[#0f211a] transition-colors group-hover:text-[#a58658]">
            {title}
          </span>
        </span>
      </div>
    </TrackedLink>
  )
}
