import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Download,
  FileText,
  PackageCheck,
  Sparkles,
} from 'lucide-react'
import TrackedLink from '@/components/TrackedLink'
import { breadcrumbSchema, faqSchema, localizedPath } from '@/lib/seo'

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
      'Practical PDF checklists adapted from LuxOps operational resources, organized by department and ready to use on the floor.',
    intro:
      'Start with the free printable checklist when you need a simple floor tool. Use the Starter Pack when you need editable files, templates and scripts, and the full Playbook when you need the complete SOP reference.',
    downloadLabel: 'Download PDF',
    availableLabel: 'Available now',
    preparingLabel: 'PDF being prepared',
    zipTitle: 'Download the complete Housekeeping PDF pack',
    zipText:
      'The role-based Housekeeping PDFs are already available as one ZIP file for quick internal sharing.',
    zipHref: '/downloads/housekeeping-checklists/en/hotel-housekeeping-checklist-pack-en.zip',
    zipLabel: 'Download ZIP pack',
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
        starterLabel: 'View Housekeeping Inspection Kit',
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
              'Chamber reset sequence from first scan to final presentation, with lost property, linen, minibar and PMS status controls.',
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
          'Restaurant opening and room service checklists for service readiness, timing, setup and handover.',
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
    metaTitle: 'Checklists hôtel gratuites PDF | LuxOps',
    metaDescription:
      'Téléchargez des checklists hôtel gratuites à imprimer pour housekeeping, réception, night audit, ouverture restaurant et room service.',
    eyebrow: 'Ressources PDF gratuites',
    h1: 'Checklists prêtes à imprimer',
    subtitle:
      'Des checklists PDF pratiques issues des ressources opérationnelles LuxOps, organisées par département et pensées pour le terrain.',
    intro:
      'Commencez avec une checklist PDF gratuite lorsque vous avez besoin d’un outil simple à imprimer. Utilisez le Starter Pack si vous avez besoin de fichiers modifiables, de templates et de scripts, puis le Playbook complet pour toute la référence SOP.',
    downloadLabel: 'Télécharger le PDF',
    availableLabel: 'Disponible',
    preparingLabel: 'PDF en préparation',
    zipTitle: 'Télécharger le pack PDF Housekeeping complet',
    zipText:
      'Les PDF Housekeeping par poste sont déjà disponibles dans un fichier ZIP pour un partage interne rapide.',
    zipHref: '/downloads/housekeeping-checklists/fr/pack-checklists-housekeeping-fr.zip',
    zipLabel: 'Télécharger le ZIP',
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
        starterLabel: 'Voir le Kit Inspection Housekeeping',
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
          'Checklists ouverture restaurant et room service pour préparer le service, contrôler le timing et sécuriser la passation.',
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
        question: 'Est-ce adapté aux hôtels indépendants ?',
        answer:
          'Oui. Les checklists sont conçues pour les hôtels indépendants, boutique hôtels, resorts et petits groupes hôteliers.',
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
  zipTitle: string
  zipText: string
  zipHref: string
  zipLabel: string
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
            url: localizedPath(locale, item.href),
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
      <main className="bg-white">
        <section className="bg-[#1A2E44] text-white px-6 pt-36 md:pt-40 pb-16 md:pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
                <Download size={15} />
                {content.eyebrow}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{content.h1}</h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed mb-6">
                {content.subtitle}
              </p>
              <p className="text-sm md:text-base text-white/75 max-w-3xl leading-relaxed">
                {content.intro}
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-10 max-w-3xl">
              <Stat value={String(totalItems)} label={isEN ? 'Checklist cards' : 'Checklists'} />
              <Stat value={String(availableItems)} label={isEN ? 'Ready PDFs' : 'PDF prêts'} />
              <Stat value="EN + FR" label={isEN ? 'Languages' : 'Langues'} />
            </div>
          </div>
        </section>

        <section className="py-14 px-6 bg-[#F6F8FB] border-b border-gray-100">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_0.7fr] gap-8 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#0056D2] mb-3">
                {isEN ? 'Immediate downloads' : 'Téléchargements immédiats'}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">{content.zipTitle}</h2>
              <p className="text-gray-600 leading-relaxed">{content.zipText}</p>
            </div>
            <div className="lg:text-right">
              <TrackedLink
                href={content.zipHref}
                eventName="free_checklist_download_clicked"
                eventProperties={{
                  source_page: sourcePage,
                  checklist: 'housekeeping_zip_pack',
                  status: 'available',
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#0056D2] text-white px-7 py-4 rounded-lg font-semibold hover:bg-[#0046B8] transition-colors"
                download
              >
                <PackageCheck size={18} />
                {content.zipLabel}
              </TrackedLink>
            </div>
          </div>
        </section>

        {content.departments.map((department) => (
          <DepartmentSection
            key={department.id}
            department={department}
            content={content}
            locale={locale}
            sourcePage={sourcePage}
          />
        ))}

        <section className="py-16 px-6 bg-[#F6F8FB] border-y border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#111111] mb-8">
              {isEN ? 'Frequently asked questions' : 'Questions fréquentes'}
            </h2>
            <div className="space-y-5">
              {content.faqs.map((faq) => (
                <div key={faq.question} className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-[#111111] mb-2">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[#111111] text-white">
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
            <h2 className="text-3xl font-bold mb-4">
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
                className="inline-flex items-center justify-center gap-2 bg-white text-[#111111] px-7 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {isEN ? 'View Starter Packs' : 'Voir les Starter Packs'}
                <ArrowRight size={18} />
              </TrackedLink>
              <TrackedLink
                href={`/${locale}/free-hotel-procedures`}
                eventName="free_chapter_cta_clicked"
                eventProperties={{ source_page: sourcePage, position: 'final' }}
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
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
    <div className="border border-white/15 bg-white/5 rounded-xl p-5">
      <p className="text-3xl font-bold mb-1">{value}</p>
      <p className="text-xs uppercase tracking-widest text-white/65 font-semibold">{label}</p>
    </div>
  )
}

function DepartmentSection({
  department,
  content,
  locale,
  sourcePage,
}: {
  department: Department
  content: typeof CONTENT[Locale]
  locale: Locale
  sourcePage: string
}) {
  return (
    <section id={department.id} className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0056D2] mb-4">
            {department.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">{department.title}</h2>
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
    <article className="border border-gray-200 rounded-xl bg-white p-6 flex flex-col min-h-[300px]">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="w-12 h-12 rounded-xl bg-[#F4F8FF] flex items-center justify-center flex-shrink-0">
          <FileText size={23} className="text-[#0056D2]" />
        </div>
        <span
          className={
            item.available
              ? 'text-[10px] font-bold uppercase tracking-widest text-[#0056D2] bg-[#EAF2FF] px-3 py-1.5 rounded-full'
              : 'text-[10px] font-bold uppercase tracking-widest text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full'
          }
        >
          {item.available ? content.availableLabel : content.preparingLabel}
        </span>
      </div>

      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">{item.role}</p>
      <h3 className="text-2xl font-bold text-[#111111] mb-4 leading-tight">{item.title}</h3>
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
          className="w-full inline-flex items-center justify-center gap-2 bg-[#1A2E44] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#0f2235] transition-colors"
          download
        >
          <Download size={17} />
          {content.downloadLabel}
        </TrackedLink>
        <Link
          href={item.sourceHref}
          className="w-full inline-flex items-center justify-center gap-2 text-[#1A2E44] px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
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
      className="group border border-gray-200 rounded-xl p-6 hover:border-[#0056D2] hover:shadow-sm transition-all"
    >
      <div className="flex gap-4 items-start">
        <span className="w-10 h-10 rounded-lg bg-[#F4F8FF] flex items-center justify-center flex-shrink-0">
          <CheckCircle2 size={20} className="text-[#0056D2]" />
        </span>
        <span>
          <span className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
            {eyebrow}
          </span>
          <span className="text-lg font-bold text-[#111111] group-hover:text-[#0056D2] transition-colors">
            {title}
          </span>
        </span>
      </div>
    </TrackedLink>
  )
}
