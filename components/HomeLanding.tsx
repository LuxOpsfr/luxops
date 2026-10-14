'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, BookOpen, CircleCheck, FileText, GraduationCap, Layers3, ShoppingCart, UsersRound } from 'lucide-react'
import AddToCartButton from '@/components/AddToCartButton'
import { BUNDLE_PRICE_ID, PLAYBOOKS } from '@/content/playbooks/data'
import { STARTER_PACKS } from '@/content/starter-packs/data'
import { useCurrency } from '@/context/CurrencyContext'
import { localizedRoutePath } from '@/lib/localized-routes'

const imageBase = '/images/editorial-hospitality'

const copy = {
  fr: {
    titleLead: 'Des standards plus clairs.',
    titleAccent: 'Des équipes mieux préparées.',
    intro: 'Des manuels opérationnels prêts à adapter et des formations conçues pour les équipes hôtelières. Gagnez du temps dans la structuration de vos procédures, renforcez l’exécution au quotidien et donnez aux managers un cadre plus clair pour former et maintenir les standards de service.',
    ctaManuals: 'Découvrir les Manuels SOP',
    ctaTraining: 'Découvrir les formations',
    proof: 'Des méthodes éprouvées sur le terrain',
    scope: 'Testées et déployées en palaces, hôtels classés, maisons Relais & Châteaux et restaurants distingués par le Guide Michelin.',
    pillarsLabel: 'Deux piliers complémentaires',
    pillarsTitle: 'Une architecture pensée pour la direction hôtelière.',
    pillarsIntro: 'Que vous souhaitiez codifier vos standards de service ou accompagner leur mise en pratique, choisissez le parcours adapté à vos priorités managériales.',
    manualTitle: 'Structurer vos procédures',
    manualText: "Des Manuels SOP prêts à l'emploi, testés sur le terrain et personnalisables selon l'organisation de votre établissement.",
    manualFacts: ['PDF et PowerPoint entièrement modifiables, en français et en anglais.', 'Des procédures éprouvées pour structurer les opérations et accompagner les équipes.'],
    from: 'Accès immédiat',
    manualAction: 'Explorer les Manuels SOP',
    trainingTitle: 'Former et accompagner vos équipes',
    trainingText: 'Formations aux standards de service, coaching managérial, développement des compétences et accompagnement au déploiement de vos outils métiers.',
    trainingFacts: ['Des interventions sur mesure, directement dans votre établissement ou à distance, en français et en anglais.', 'Des formats adaptés aux managers comme aux équipes opérationnelles.'],
    quote: 'Sur devis',
    trainingAction: 'Découvrir la formation',
    departmentsLabel: 'Référentiels métiers',
    departmentsTitle: 'Les 4 départements opérationnels',
    departmentsIntro: 'Chaque département dispose de son Manuel SOP. Les Starter Packs regroupent des outils complémentaires, vendus séparément.',
    manual: 'Manuel SOP complet',
    starter: 'Starter Pack',
    viewDossier: 'Voir le département',
    bundleLabel: 'L’ensemble des 4 Manuels SOP',
    bundleTitle: 'Une base opérationnelle commune à tout l’hôtel.',
    bundleText: 'Front Office, Housekeeping, Food & Beverage et Spa. PDF et PowerPoint modifiables, en français et en anglais.',
    addBundle: 'Ajouter le bundle au panier',
    adoptionLabel: 'Des outils conçus pour être utilisés',
    adoptionTitle: 'Des standards prêts à prendre leur place dans vos opérations.',
    adoptionFacts: [
      { title: 'Des formats modifiables', text: 'Le PowerPoint vous permet d’adapter les supports à l’identité de votre établissement.' },
      { title: 'Deux langues incluses', text: 'Les Manuels SOP sont disponibles en français et en anglais.' },
      { title: 'Une base structurée', text: 'Des procédures organisées par département et pensées pour soutenir le travail des équipes.' },
    ],
    experience: 'L’expérience derrière LuxOps',
    years: '15 ans',
    proofMetric: 'Process éprouvés',
    deploymentMetric: 'Du projet au terrain',
    experienceText: 'Une expérience opérationnelle et managériale construite dans des établissements exigeants : ouverture, montée en gamme, développement des équipes et direction des opérations.',
    finalTitle: 'Une expertise forgée sur le terrain.',
    finalText: 'Des standards testés, déployés et utilisés pour accompagner les équipes au quotidien.',
    finalAction: 'Parler de votre projet',
    finalCatalog: 'Voir tous les Manuels SOP',
  },
  en: {
    titleLead: 'Clearer standards.',
    titleAccent: 'Better prepared teams.',
    intro: 'Operational manuals ready to adapt and training designed for hotel teams. Save time structuring procedures, strengthen day-to-day execution and give managers a clearer framework to train and maintain service standards.',
    ctaManuals: 'Explore SOP Manuals',
    ctaTraining: 'Explore training',
    proof: 'Methods tested in real operations',
    scope: 'Proven in palace hotels, classified hotels, Relais & Châteaux properties and Michelin-recognised restaurants.',
    pillarsLabel: 'Two complementary pillars',
    pillarsTitle: 'An approach designed for hotel leadership.',
    pillarsIntro: 'Whether you want to structure service standards or support their day-to-day application, choose the approach that fits your priorities.',
    manualTitle: 'Structure your procedures',
    manualText: 'Ready-to-use SOP Manuals, field-tested and adaptable to the way your property operates.',
    manualFacts: ['Editable PDF and PowerPoint files in French and English.', 'Proven procedures to structure operations and support your teams.'],
    from: 'Immediate access',
    manualAction: 'Explore SOP Manuals',
    trainingTitle: 'Train your teams',
    trainingText: 'On-site or remote sessions, in French or English, for managers and operational teams.',
    trainingFacts: ['On site or remote, in French or English.', 'Programmes for managers and operational teams.'],
    quote: 'By proposal',
    trainingAction: 'Explore training',
    departmentsLabel: 'Operational references',
    departmentsTitle: 'Four operational departments',
    departmentsIntro: 'Each department has its own SOP Manual. Starter Packs bring together complementary tools and are sold separately.',
    manual: 'Complete SOP Manual',
    starter: 'Starter Pack',
    viewDossier: 'View department',
    bundleLabel: 'All four SOP Manuals',
    bundleTitle: 'One shared operational foundation across the hotel.',
    bundleText: 'Front Office, Housekeeping, Food & Beverage and Spa. Editable PDF and PowerPoint, in French and English.',
    addBundle: 'Add bundle to cart',
    adoptionLabel: 'Tools designed to be used',
    adoptionTitle: 'Standards ready to take their place in your operations.',
    adoptionFacts: [
      { title: 'Editable formats', text: 'Use the PowerPoint files to adapt the material to your property’s identity.' },
      { title: 'Two languages included', text: 'SOP Manuals are available in French and English.' },
      { title: 'A structured foundation', text: 'Procedures organised by department to support the work of your teams.' },
    ],
    experience: 'The experience behind LuxOps',
    years: '15 years',
    proofMetric: 'Proven processes',
    deploymentMetric: 'From project to practice',
    experienceText: 'Operational and management experience built across demanding properties: openings, service upgrades, team development and operational leadership.',
    finalTitle: 'Expertise built in the field.',
    finalText: 'Standards tested, deployed and used to support teams in their day-to-day work.',
    finalAction: 'Discuss your project',
    finalCatalog: 'View all SOP Manuals',
  },
  es: {
    titleLead: 'Estándares más claros.',
    titleAccent: 'Equipos mejor preparados.',
    intro: 'Manuales operativos listos para adaptar y formación diseñada para equipos hoteleros. Ahorra tiempo al estructurar procedimientos, refuerza la ejecución diaria y ofrece a los managers un marco claro para formar y mantener los estándares de servicio.',
    ctaManuals: 'Descubrir los Manuales SOP',
    ctaTraining: 'Descubrir la formación',
    proof: 'Métodos probados sobre el terreno',
    scope: 'Probados en palacios, hoteles clasificados, establecimientos Relais & Châteaux y restaurantes reconocidos por Michelin.',
    pillarsLabel: 'Dos pilares complementarios',
    pillarsTitle: 'Un enfoque pensado para la dirección hotelera.',
    pillarsIntro: 'Para estructurar los estándares o acompañar su aplicación diaria, elige el punto de partida adecuado.',
    manualTitle: 'Estructurar tus procedimientos',
    manualText: 'Manuales SOP listos para usar, probados sobre el terreno y adaptables a la organización de tu establecimiento.',
    manualFacts: ['PDF y PowerPoint editables, en francés e inglés.', 'Procedimientos probados para estructurar las operaciones y apoyar a los equipos.'],
    from: 'Acceso inmediato',
    manualAction: 'Explorar los Manuales SOP',
    trainingTitle: 'Formar a tus equipos',
    trainingText: 'Sesiones presenciales o a distancia, en francés o inglés, para managers y equipos operativos.',
    trainingFacts: ['Presencial o a distancia, en francés o inglés.', 'Programas para managers y equipos operativos.'],
    quote: 'Presupuesto personalizado',
    trainingAction: 'Descubrir la formación',
    departmentsLabel: 'Referenciales profesionales',
    departmentsTitle: 'Cuatro departamentos operativos',
    departmentsIntro: 'Cada departamento tiene su Manual SOP. Los Starter Packs reúnen herramientas complementarias y se venden por separado.',
    manual: 'Manual SOP completo',
    starter: 'Starter Pack',
    viewDossier: 'Ver departamento',
    bundleLabel: 'Los cuatro Manuales SOP',
    bundleTitle: 'Una base operativa común para todo el hotel.',
    bundleText: 'Front Office, Housekeeping, Food & Beverage y Spa. PDF y PowerPoint editables en francés e inglés.',
    addBundle: 'Añadir el bundle al carrito',
    adoptionLabel: 'Herramientas diseñadas para usarse',
    adoptionTitle: 'Estándares listos para integrarse en tus operaciones.',
    adoptionFacts: [
      { title: 'Formatos editables', text: 'Adapta los archivos PowerPoint a la identidad de tu establecimiento.' },
      { title: 'Dos idiomas incluidos', text: 'Manuales SOP disponibles en francés e inglés.' },
      { title: 'Una base estructurada', text: 'Procedimientos organizados por departamento para apoyar el trabajo de los equipos.' },
    ],
    experience: 'La experiencia detrás de LuxOps',
    years: '15 años',
    proofMetric: 'Procesos probados',
    deploymentMetric: 'Del proyecto al terreno',
    experienceText: 'Experiencia operativa y de gestión en establecimientos exigentes: aperturas, mejora de categoría, desarrollo de equipos y dirección de operaciones.',
    finalTitle: 'Experiencia construida en el terreno.',
    finalText: 'Estándares probados, implantados y utilizados para acompañar a los equipos cada día.',
    finalAction: 'Hablar de tu proyecto',
    finalCatalog: 'Ver todos los Manuales SOP',
  },
}

const departments = [
  { id: 'fo', image: 'dept-front-office-v2.jpg', label: { fr: 'Hébergement', en: 'Rooms', es: 'Alojamiento' } },
  { id: 'hsk', image: 'dept-housekeeping-v2.jpg', label: { fr: 'Gouvernance', en: 'Housekeeping', es: 'Pisos' } },
  { id: 'fb', image: 'dept-food-beverage-v2.jpg', label: { fr: 'Gastronomie', en: 'Food & Beverage', es: 'Gastronomía' } },
  { id: 'spa', image: 'dept-spa-wellness-v2.jpg', label: { fr: 'Bien-être', en: 'Wellness', es: 'Bienestar' } },
] as const

const proofItems = [
  { label: 'Palace', image: '/images/hospitality-labels/palace.jpg', alt: 'Distinction Palace' },
  { label: '4 étoiles', image: '/images/hospitality-labels/hotel-four-star.jpg', alt: 'Classement hôtel quatre étoiles Atout France' },
  { label: '5 étoiles', image: '/images/hospitality-labels/hotel-five-star.jpeg', alt: 'Classement hôtel cinq étoiles Atout France' },
  { label: 'Relais & Châteaux', image: '/images/hospitality-labels/relais-chateaux.png', alt: 'Relais & Châteaux' },
  { label: 'Michelin Guide', image: '/images/hospitality-labels/michelin-guide-2026.png', alt: 'Guide Michelin 2026' },
]

export default function HomeLanding({ locale }: { locale: string }) {
  const lang = locale === 'fr' || locale === 'es' ? locale : 'en'
  const t = copy[lang]
  const { currency, formatProductPrice, priceFor } = useCurrency()
  const manualsHref = localizedRoutePath('playbooks', lang)
  const trainingHref = localizedRoutePath('training', lang)
  const productLocale = lang === 'fr' ? 'fr' : 'en'

  return (
    <main className="bg-[#faf7f2] pt-[var(--site-header-height)] text-[#20231f]">
      <section className="px-5 pb-12 pt-8 sm:px-8 lg:px-12 lg:pb-16 lg:pt-10">
        <div className="mx-auto max-w-[1450px]">
          <div className="mx-auto max-w-[920px] text-center">
            <h1 className="mt-5 font-display text-[clamp(2.45rem,4.15vw,3.65rem)] font-medium leading-[1.02] tracking-[-.035em] text-[#111c17]">
              <span className="block">{t.titleLead}</span>
              <span className="mt-1 block font-normal italic text-[#8b6835]">{t.titleAccent}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-[790px] text-[15px] leading-7 text-[#626b64] md:text-base md:leading-7">{t.intro}</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href={manualsHref} className="inline-flex min-h-12 items-center gap-2.5 rounded-xl bg-[#0f211a] px-6 text-sm font-semibold text-white shadow-[0_9px_22px_rgba(15,33,26,.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#24362f]">
                <BookOpen size={16} />{t.ctaManuals}<ArrowRight size={15} className="text-[#c9a86e]" />
              </Link>
              <Link href={trainingHref} className="inline-flex min-h-12 items-center gap-2.5 rounded-xl border border-[#e7e1d7] bg-white px-6 text-sm font-semibold text-[#1d2923] shadow-[0_4px_14px_rgba(45,42,34,.04)] transition duration-300 hover:-translate-y-0.5 hover:border-[#c9b58d] hover:bg-[#fffdfa]">
                {t.ctaTraining}<GraduationCap size={17} className="text-[#8b6835]" />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto mt-11 grid max-w-[1360px] items-end gap-4 sm:mt-14 md:grid-cols-[1.16fr_.84fr] md:gap-0">
            <div className="relative aspect-[1.55] overflow-hidden rounded-[1.35rem] bg-[#e7e1d6] shadow-[0_18px_46px_rgba(47,43,32,.10)] sm:rounded-[1.7rem]">
              <Image src={`${imageBase}/hero-reception-natural-v4.png`} alt="Équipe hôtelière échangeant autour de la qualité de service" fill priority sizes="(min-width: 768px) 62vw, 100vw" className="object-cover object-center transition-transform duration-700 hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f211a]/20 via-transparent to-transparent" />
            </div>
            <div className="relative z-10 -mt-8 ml-auto w-[87%] overflow-hidden rounded-[1.35rem] border-[6px] border-[#faf7f2] bg-white shadow-[0_22px_50px_rgba(46,40,29,.17)] transition-transform duration-500 hover:-translate-y-1 sm:rounded-[1.7rem] md:-ml-10 md:mb-7 md:mt-0 md:w-full md:border-[8px]">
              <div className="relative aspect-[1.3] overflow-hidden rounded-[.9rem] sm:rounded-[1.2rem]">
                <Image src={`${imageBase}/fo-arrival-editorial-approved.png`} alt="Scène d’arrivée et accueil à la réception d’un hôtel" fill sizes="(min-width: 768px) 42vw, 82vw" className="object-cover object-[65%_center] transition-transform duration-700 hover:scale-[1.025]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e6dfd3] bg-white/65 px-5 py-6 sm:px-8 lg:px-12 lg:py-7">
        <div className="mx-auto grid max-w-[1450px] gap-5 md:grid-cols-[.8fr_1.2fr] md:items-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.17em] text-[#92734a]">{t.proof}</p>
            <p className="mt-1 font-display text-lg text-[#0f211a]">{t.scope}</p>
          </div>
            <div className="flex flex-wrap items-center justify-start gap-2 md:justify-end md:gap-3">
            {proofItems.map((item) => <div key={item.label} className="flex h-[58px] w-[108px] items-center justify-center rounded-xl border border-[#ece6dc] bg-[#faf7f2] px-2.5">
              <Image src={item.image} alt={item.alt} width={110} height={56} className="h-9 w-full object-contain opacity-90" />
            </div>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[1450px]">
          <div className="mb-6 max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#92734a]">{t.pillarsLabel}</p>
            <h2 className="mt-2 font-display text-2xl font-medium leading-tight tracking-[-.025em] text-[#0f211a] sm:text-3xl">{t.pillarsTitle}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#697169]">{t.pillarsIntro}</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <article className="relative flex min-h-[318px] flex-col overflow-hidden rounded-[1.25rem] border border-[#e7dfd2] border-l-[5px] border-l-[#9b7846] bg-white p-6 shadow-[0_12px_34px_rgba(44,40,31,.055)] sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1eee8] text-[#8b6835]"><FileText size={17} strokeWidth={1.7} aria-hidden="true" /></span>
              </div>
              <h3 className="mt-4 font-display text-[1.6rem] font-medium leading-tight text-[#111c17]">{t.manualTitle}</h3>
              <p className="mt-2 min-h-[44px] max-w-[590px] text-[13px] leading-[1.6] text-[#626b64]">{t.manualText}</p>
              <ul className="mt-3 space-y-2">
                {t.manualFacts.map((fact) => <li key={fact} className="flex min-h-8 items-start gap-2 text-[11px] leading-4 text-[#343b35]"><CircleCheck size={13} className="mt-0.5 shrink-0 text-[#92734a]" /><span>{fact}</span></li>)}
              </ul>
              <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-[#eee9e0] pt-4">
                <div><p className="text-[9px] font-semibold uppercase tracking-[.12em] text-[#697169]">{t.from}</p><p className="mt-0.5 font-display text-xl font-medium text-[#111c17]">{formatProductPrice('playbook')}<span className="ml-1 font-sans text-[10px] font-normal text-[#697169]">TTC</span></p></div>
                <Link href={manualsHref} className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#0f211a] px-4 text-[10px] font-semibold uppercase tracking-[.07em] text-white transition hover:bg-[#24362f]">{t.manualAction}<ArrowRight size={14} /></Link>
              </div>
            </article>
            <article className="relative flex min-h-[318px] flex-col overflow-hidden rounded-[1.25rem] border border-[#e5e1da] border-l-[5px] border-l-[#0f211a] bg-[#ebe9e4] p-6 shadow-[0_12px_34px_rgba(44,40,31,.045)] sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[#15251e]"><UsersRound size={18} strokeWidth={1.7} aria-hidden="true" /></span>
              </div>
              <h3 className="mt-4 font-display text-[1.6rem] font-medium leading-tight text-[#111c17]">{t.trainingTitle}</h3>
              <p className="mt-2 min-h-[44px] max-w-[590px] text-[13px] leading-[1.6] text-[#59635c]">{t.trainingText}</p>
              <ul className="mt-3 space-y-2">
                {t.trainingFacts.map((fact) => <li key={fact} className="flex min-h-8 items-start gap-2 text-[11px] leading-4 text-[#343b35]"><CircleCheck size={13} className="mt-0.5 shrink-0 text-[#92734a]" /><span>{fact}</span></li>)}
              </ul>
              <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-[#d9d6cf] pt-4">
                <div><p className="text-[9px] font-semibold uppercase tracking-[.12em] text-[#697169]">{lang === 'fr' ? 'Accompagnement sur mesure' : lang === 'es' ? 'Acompañamiento a medida' : 'Tailored support'}</p><p className="mt-0.5 font-display text-xl font-medium text-[#111c17]">{t.quote}</p></div>
                <Link href={trainingHref} className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#d8d4cc] bg-white px-4 text-[10px] font-semibold uppercase tracking-[.07em] text-[#19261f] transition hover:border-[#9b7846] hover:bg-[#fffdfa]">{t.trainingAction}<ArrowRight size={14} /></Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e7e1d7] bg-[#f3eee5] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[1450px]">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#92734a]">{t.departmentsLabel}</p>
              <h2 className="mt-2 font-display text-2xl font-medium leading-tight tracking-[-.025em] text-[#0f211a] sm:text-3xl">{t.departmentsTitle}</h2>
              <p className="mt-2 text-sm leading-6 text-[#697169]">{t.departmentsIntro}</p>
            </div>
            <Link href={manualsHref} className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#d9d1c4] bg-white/70 px-4 py-2 text-xs font-semibold text-[#33443a] transition hover:bg-white">{t.finalCatalog}<ArrowRight size={13} /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {departments.map((department) => {
              const manual = PLAYBOOKS.find((item) => item.id === department.id)!
              const starterPack = STARTER_PACKS.find((item) => item.fullPlaybookId === department.id)
              const detailHref = `${localizedRoutePath('playbooks', productLocale)}/${manual.id}`
              return <article key={department.id} className="group overflow-hidden rounded-[1.35rem] border border-[#e5dfd4] bg-white shadow-[0_8px_25px_rgba(43,40,32,.045)] transition duration-300 hover:-translate-y-1 hover:border-[#d5c3a1] hover:shadow-[0_18px_40px_rgba(43,40,32,.11)]">
                <div className="relative aspect-[1.72] overflow-hidden bg-[#e6dfd3]">
                  <Image src={`${imageBase}/${department.image}`} alt={manual.dept[productLocale]} fill sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.045]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101f18]/70 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/45 bg-[#faf7f2]/85 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[.15em] text-[#263a30] backdrop-blur">{department.label[lang]}</span>
                  <h3 className="absolute bottom-4 left-4 right-4 font-display text-2xl font-medium text-white">{manual.dept[productLocale]}</h3>
                </div>
                <div className="p-4">
                  <p className="line-clamp-3 min-h-[3.5rem] text-[12px] leading-[1.55] text-[#687169]">{manual.desc[productLocale]}</p>
                  <div className="mt-3 border-t border-[#eee9e0]">
                    <Link href={detailHref} className="flex items-center justify-between gap-2 py-2.5 text-[11px] text-[#59645c] transition-colors hover:text-[#0f211a]">
                      <span>{t.manual}</span><span className="shrink-0 font-semibold text-[#25382d]">{formatProductPrice('playbook')}<ArrowUpRight size={12} className="ml-1 inline" /></span>
                    </Link>
                    {starterPack && <Link href={`${localizedRoutePath('playbooks', productLocale)}/${starterPack.id}`} className="flex items-center justify-between gap-2 border-t border-[#eee9e0] py-2.5 text-[11px] text-[#59645c] transition-colors hover:text-[#0f211a]">
                      <span>{t.starter}</span><span className="shrink-0 font-semibold text-[#25382d]">{formatProductPrice('starter_pack')}<ArrowUpRight size={12} className="ml-1 inline" /></span>
                    </Link>}
                  </div>
                  <Link href={detailHref} className="mt-1 flex min-h-10 items-center justify-between rounded-full bg-[#f4f0e8] px-3.5 text-[11px] font-semibold text-[#263a30] transition-colors hover:bg-[#e9e0d2]">{t.viewDossier}<ArrowRight size={14} /></Link>
                </div>
              </article>
            })}
          </div>

          <div className="relative mt-5 overflow-hidden rounded-[1.45rem] bg-[#0f211a] px-5 py-5 text-[#f8f6f0] shadow-[0_16px_38px_rgba(16,37,29,.12)] sm:px-7 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <div aria-hidden="true" className="absolute -right-8 -top-20 h-56 w-56 rounded-full border border-white/10" />
            <div className="relative">
              <p className="text-[9px] font-semibold uppercase tracking-[.18em] text-[#d3b77f]">{t.bundleLabel}</p>
              <h3 className="mt-1.5 font-display text-xl font-medium sm:text-2xl">{t.bundleTitle}</h3>
              <p className="mt-1.5 max-w-3xl text-xs leading-5 text-white/70">{t.bundleText}</p>
            </div>
            <AddToCartButton item={{ priceId: BUNDLE_PRICE_ID, title: lang === 'fr' ? 'Bundle Complet · 4 Manuels SOP' : 'Complete Bundle · 4 SOP Manuals', price: priceFor('bundle'), currency, productType: 'bundle' }} className="relative mt-4 inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#f4ead7] px-5 text-xs font-semibold text-[#173025] transition hover:-translate-y-0.5 hover:bg-white lg:mt-0">
              <ShoppingCart size={14} />{t.addBundle} · {formatProductPrice('bundle')}
            </AddToCartButton>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto grid max-w-[1450px] gap-7 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#efe6d8] text-[#886b42]"><Layers3 size={18} /></div>
            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[.18em] text-[#92734a]">{t.adoptionLabel}</p>
            <h2 className="mt-2 font-display text-2xl font-medium leading-tight tracking-[-.025em] text-[#0f211a] sm:text-3xl">{t.adoptionTitle}</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {t.adoptionFacts.map((fact, index) => <article key={fact.title} className="rounded-[1.2rem] border border-[#e8e2d7] bg-white p-4 shadow-[0_7px_22px_rgba(40,40,30,.035)] sm:p-5">
              <span className="font-display text-xl text-[#b59b6c]">0{index + 1}</span>
              <h3 className="mt-2 font-display text-base font-medium text-[#0f211a]">{fact.title}</h3>
              <p className="mt-1.5 text-[11px] leading-5 text-[#687169]">{fact.text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="border-y border-[#24382e] bg-[#0f211a] px-5 py-11 text-[#f8f6f0] sm:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-[1450px]">
          <div className="grid gap-7 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:gap-10">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#d3b77f]">{t.experience}</p>
              <h2 className="mt-2 max-w-2xl font-display text-2xl font-medium leading-tight sm:text-3xl">{t.finalTitle}</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">{t.experienceText}</p>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-3">
              <div className="min-h-[94px] rounded-xl border border-white/15 bg-white/[.06] px-4 py-3.5"><p className="font-display text-lg text-[#d3b77f]">{t.years}</p><p className="mt-1 text-[10px] leading-4 text-white/70">{lang === 'fr' ? 'd’expérience opérationnelle' : lang === 'es' ? 'de experiencia operativa' : 'of operational experience'}</p></div>
              <div className="min-h-[94px] rounded-xl border border-white/15 bg-white/[.06] px-4 py-3.5"><p className="font-display text-lg text-[#d3b77f]">{t.proofMetric}</p><p className="mt-1 text-[10px] leading-4 text-white/70">{lang === 'fr' ? 'testés et déployés en établissement' : lang === 'es' ? 'probados e implantados' : 'tested and deployed in properties'}</p></div>
              <div className="min-h-[94px] rounded-xl border border-white/15 bg-white/[.06] px-4 py-3.5"><p className="font-display text-lg text-[#d3b77f]">{t.deploymentMetric}</p><p className="mt-1 text-[10px] leading-4 text-white/70">{lang === 'fr' ? 'ouverture, montée en gamme, management' : lang === 'es' ? 'apertura, mejora y liderazgo' : 'openings, upgrades, team leadership'}</p></div>
            </div>
          </div>
          <p className="mt-5 max-w-3xl text-xs leading-5 text-white/60">{t.finalText}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link href={manualsHref} className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-[#f4ead7] px-4 text-xs font-semibold text-[#173025] transition hover:-translate-y-0.5 hover:bg-white">{t.finalCatalog}<ArrowRight size={14} /></Link>
            <Link href={trainingHref} className="inline-flex min-h-[46px] items-center gap-2 rounded-full border border-[#e1d1ae] px-4 text-xs font-semibold text-[#f8f6f0] transition hover:bg-white/10">{t.finalAction}<ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
    </main>
  )
}
