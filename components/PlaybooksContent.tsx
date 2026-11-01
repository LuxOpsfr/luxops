'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Download,
  FileText,
  Languages,
  PackageCheck,
  Presentation,
  ShoppingBag,
  Star,
} from 'lucide-react'
import AddToCartButton from '@/components/AddToCartButton'
import SampleChapterModal from '@/components/SampleChapterModal'
import SamePageAnchor from '@/components/SamePageAnchor'
import { BUNDLE_PRICE_ID, PLAYBOOKS } from '@/content/playbooks/data'
import { REVENUE_PRICE_ID, REVENUE_PRODUCT_PATH } from '@/content/revenue-management-product'
import { useCurrency } from '@/context/CurrencyContext'
import { toActiveLocale } from '@/lib/i18n'
import { localizedRoutePath } from '@/lib/localized-routes'

const departmentImages = {
  fo: '/images/editorial-hospitality/dept-front-office-v2.jpg',
  hsk: '/images/editorial-hospitality/dept-housekeeping-v2.jpg',
  fb: '/images/editorial-hospitality/dept-food-beverage-v2.jpg',
  spa: '/images/editorial-hospitality/spa-wellness.jpg',
} as const

const copy = {
  fr: {
    eyebrow: 'BOUTIQUE OPÉRATIONNELLE · FICHIERS NUMÉRIQUES',
    title: 'Les Manuels SOP, prêts à télécharger et personnaliser.',
    intro:
      'Procédures opérationnelles de référence pour l’hôtellerie de luxe. Fichiers PDF et PowerPoint (.pptx) modifiables, en français et en anglais.',
    departmentsCta: 'Choisir un manuel · dès 67 €',
    bundleCta: 'Ajouter le bundle · 199 €',
    facts: ['PDF & PowerPoint modifiables', 'Français & anglais inclus', 'Téléchargement immédiat'],
    options: ['Manuel par département', 'Catalogue complet'],
    departmentEyebrow: 'CATALOGUE DÉPARTEMENTAL',
    departmentTitle: 'Les 5 Manuels Opérationnels',
    departmentIntro: 'Cinq référentiels pour les opérations hôtelières et la performance commerciale. Le nouveau manuel Revenue Management rejoint le bundle au même prix.',
    revenueBadge: 'INCLUS DANS LE BUNDLE',
    revenueDescription: 'Prévisions de demande, stratégie tarifaire, disponibilités, distribution et gestion des groupes : des procédures pour guider les décisions commerciales et suivre la performance de l’hôtel.',
    revenueDetails: 'Découvrir les chapitres',
    manual: 'Manuel SOP complet',
    manualCta: (price: string) => `Ajouter le manuel · ${price}`,
    details: 'Voir le contenu',
    bundleTitle: 'Les 5 Manuels SOP : une suite opérationnelle complète',
    bundleText:
      'Front Office, Housekeeping, Food & Beverage, Spa & Wellness et Revenue Management, dans les deux langues et en formats modifiables. Les Starter Packs Front Office, Housekeeping et F&B sont inclus avec leurs manuels respectifs.',
    bundleSaving: () => 'Tarif maintenu à 199 €',
    bundlePrice: '199 € TTC',
    bundleCtaPrice: (price: string) => `Ajouter les 5 manuels · ${price}`,
    trainingEyebrow: 'CONSEIL & TRANSMISSION',
    trainingTitle: 'Déployer ces standards auprès de vos équipes',
    trainingText:
      'LuxOps peut accompagner vos équipes sur site ou à distance pour adapter les procédures et les faire vivre au quotidien.',
    trainingCta: 'Découvrir la formation',
    ttc: 'TTC',
  },
  en: {
    eyebrow: 'OPERATIONAL SHOP · DIGITAL FILES',
    title: 'Official SOP Manuals, ready to download and customise.',
    intro:
      'Operational reference procedures for luxury hospitality. Editable PDF and PowerPoint (.pptx) files, in English and French.',
    departmentsCta: 'Choose a manual · from €67',
    bundleCta: 'Add the bundle · €199',
    facts: ['Editable PDF & PowerPoint', 'English & French included', 'Instant download'],
    options: ['Manual by department', 'Complete catalogue'],
    departmentEyebrow: 'DEPARTMENT CATALOGUE',
    departmentTitle: 'The 5 Operating Manuals',
    departmentIntro: 'Five references for hotel operations and commercial performance. The new Revenue Management manual joins the bundle at the same price.',
    revenueBadge: 'INCLUDED IN THE BUNDLE',
    revenueDescription: 'Demand forecasting, pricing strategy, availability, distribution and group business: procedures to guide commercial decisions and track hotel performance.',
    revenueDetails: 'Explore the chapters',
    manual: 'Complete SOP Manual',
    manualCta: (price: string) => `Add the manual · ${price}`,
    details: 'View contents',
    bundleTitle: 'The 5 SOP Manuals: a complete operating suite',
    bundleText:
      'Front Office, Housekeeping, Food & Beverage, Spa & Wellness and Revenue Management, in both languages and editable formats. The Front Office, Housekeeping and F&B Starter Packs are included with their respective manuals.',
    bundleSaving: () => 'Same €199 price',
    bundlePrice: '€199 incl. tax',
    bundleCtaPrice: (price: string) => `Add all 5 manuals · ${price}`,
    trainingEyebrow: 'ADVICE & IMPLEMENTATION',
    trainingTitle: 'Put these standards into practice with your teams',
    trainingText:
      'LuxOps can support your teams on site or remotely to adapt the procedures and put them into practice every day.',
    trainingCta: 'Explore training',
    ttc: 'incl. tax',
  },
  es: {
    eyebrow: 'TIENDA OPERATIVA · ARCHIVOS DIGITALES',
    title: 'Manuales SOP oficiales, listos para descargar y personalizar.',
    intro:
      'Encuentre los procedimientos esenciales de cada departamento hotelero en manuales diseñados para adaptarse a su establecimiento.',
    departmentsCta: 'Elegir un manual · desde 67 €',
    bundleCta: 'Añadir el paquete · 199 €',
    facts: ['PDF y PowerPoint editables', 'Francés e inglés incluidos', 'Descarga inmediata'],
    options: ['Manual por departamento', 'Catálogo completo'],
    departmentEyebrow: 'CATÁLOGO POR DEPARTAMENTO',
    departmentTitle: 'Los 5 Manuales Operativos',
    departmentIntro: 'Cinco referentes para las operaciones hoteleras y el rendimiento comercial. El nuevo manual Revenue Management se añade al paquete al mismo precio.',
    revenueBadge: 'INCLUIDO EN EL PAQUETE',
    revenueDescription: 'Previsión de la demanda, estrategia de precios, disponibilidad, distribución y gestión de grupos: procedimientos para orientar las decisiones comerciales y seguir el rendimiento del hotel.',
    revenueDetails: 'Descubrir los capítulos',
    manual: 'Manual SOP completo',
    manualCta: (price: string) => `Añadir manual · ${price}`,
    details: 'Ver el contenido',
    bundleTitle: 'Los 5 Manuales SOP: una suite operativa completa',
    bundleText:
      'Front Office, Housekeeping, Food & Beverage, Spa & Wellness y Revenue Management, en ambos idiomas y en formatos editables. Los Starter Packs Front Office, Housekeeping y F&B se incluyen con sus respectivos manuales.',
    bundleSaving: () => 'Mismo precio: 199 €',
    bundlePrice: '199 € IVA incl.',
    bundleCtaPrice: (price: string) => `Añadir los 5 manuales · ${price}`,
    trainingEyebrow: 'ASESORAMIENTO Y TRANSMISIÓN',
    trainingTitle: 'Implantar estos estándares con sus equipos',
    trainingText:
      'LuxOps puede acompañar a sus equipos presencialmente o a distancia para adaptar los procedimientos y aplicarlos en el día a día.',
    trainingCta: 'Descubrir la formación',
    ttc: 'IVA incl.',
  },
} as const

function DepartmentImage({ id, title }: { id: keyof typeof departmentImages; title: string }) {
  return (
    <Image
      src={departmentImages[id]}
      alt={title}
      fill
      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
      className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
    />
  )
}

export default function PlaybooksContent({ locale }: { locale: string }) {
  const activeLocale = toActiveLocale(locale)
  const lang = activeLocale === 'fr' || activeLocale === 'es' ? activeLocale : 'en'
  const text = copy[lang]
  const dataLang = lang === 'es' ? 'en' : lang
  const { currency, priceFor, formatProductPrice } = useCurrency()
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false)
  const catalogueHref = localizedRoutePath('playbooks', lang)
  const departments = PLAYBOOKS

  return (
    <main className="bg-[#fcf9f4] pt-[var(--site-header-height)] text-[#20231f]">
      <section className="overflow-hidden border-b border-[#e9e3d8] px-5 pb-3 pt-4 sm:px-8 lg:px-10 lg:pb-3 lg:pt-4">
        <div className="mx-auto grid max-w-[1440px] items-center gap-4 lg:grid-cols-[.93fr_1.07fr] lg:gap-6 xl:gap-8">
          <div className="relative z-10 py-1">
            <p className="mb-3 flex items-center gap-2 text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-[#795d32]">
              <FileText size={13} strokeWidth={1.7} />
              {text.eyebrow}
            </p>
            <h1 className="max-w-[600px] font-display text-[clamp(2.05rem,2.9vw,2.75rem)] font-medium leading-[1.07] tracking-[-.035em] text-[#0f211a]">
              {text.title}
            </h1>
            <p className="mt-3 max-w-[570px] text-[13px] leading-5 text-[#626b64] md:text-[14px] md:leading-6">
              {text.intro}
            </p>
            <div className="mt-3 grid max-w-[620px] grid-cols-1 gap-1.5 sm:grid-cols-3">
              {text.facts.map((fact, index) => {
                const Icon = index === 0 ? FileText : index === 1 ? Languages : Download
                return (
                  <div key={fact} className="flex min-h-9 items-center gap-1.5 rounded-xl border border-[#ede8df] bg-[#f4f1eb] px-2.5 py-1.5 text-[10px] font-medium leading-4 text-[#4f5c52]">
                    <Icon size={14} className="shrink-0 text-[#8b6a36]" strokeWidth={1.7} />
                    {fact}
                  </div>
                )
              })}
            </div>
            <div className="mt-3.5 flex flex-col gap-2 sm:flex-row">
              <SamePageAnchor
                href="#department-playbooks"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#0f211a] px-5 text-[11px] font-semibold text-white shadow-[0_7px_20px_rgba(16,37,29,.13)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#263d31]"
              >
                {text.departmentsCta}<ArrowDown size={15} strokeWidth={1.7} />
              </SamePageAnchor>
              <AddToCartButton
                openCartOnAdd
                item={{
                  priceId: BUNDLE_PRICE_ID,
                  title: lang === 'fr' ? 'Bundle complet · 5 Manuels SOP' : lang === 'es' ? 'Paquete completo · 5 Manuales SOP' : 'Complete bundle · 5 SOP Manuals',
                  price: priceFor('bundle'),
                  currency,
                  productType: 'bundle',
                }}
                addedLabel={lang === 'fr' ? 'Dans le panier' : lang === 'es' ? 'En la cesta' : 'In cart'}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#d7d1c5] bg-white px-5 text-[11px] font-semibold text-[#24362f] shadow-[0_4px_12px_rgba(57,50,36,.04)] transition duration-300 hover:-translate-y-0.5 hover:border-[#b89760]"
              >
                <ShoppingBag size={15} strokeWidth={1.7} />{text.bundleCta}<ArrowRight size={14} />
              </AddToCartButton>
            </div>
            <button
              type="button"
              onClick={() => setIsSampleModalOpen(true)}
              className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full border border-[#cdb78e] bg-white px-5 text-[11px] font-semibold text-[#24362f] shadow-[0_4px_12px_rgba(57,50,36,.04)] transition duration-300 hover:-translate-y-0.5 hover:border-[#a7834d] hover:bg-[#fffdf8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b6a36]"
            >
              <Download size={15} strokeWidth={1.7} className="text-[#8b6a36]" />
              {lang === 'fr'
                ? 'Recevoir un chapitre découverte'
                : lang === 'es'
                  ? 'Recibir un capítulo de muestra'
                  : 'Get a sample chapter'}
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="relative mx-auto aspect-[1.3] w-full max-w-[740px] rounded-[28px] bg-[#eee8dc] p-3 shadow-[0_18px_42px_rgba(78,63,40,.13)] sm:rounded-[34px] sm:p-4 lg:max-w-none">
            <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(ellipse_at_52%_45%,#faf5e9_0%,#f2eadb_70%,#e8decd_100%)]" />
            <div className="absolute left-[13%] top-[17%] h-[66%] w-[32%] -rotate-[8deg] overflow-hidden rounded-[5px_9px_9px_5px] border border-[#d8c8a7] bg-[#10251d] shadow-[0_16px_32px_rgba(42,38,28,.15)] transition-transform duration-500 hover:-translate-y-1 hover:-rotate-[10deg]">
              <Image src="/images/editorial-hospitality/manual-covers-2027/fb-fr.jpg" alt="Couverture du Manuel SOP Food & Beverage, édition 2027" fill sizes="(min-width: 1024px) 18vw, 40vw" className="object-cover" />
              <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-black/25 to-transparent" />
            </div>
            <div className="absolute right-[13%] top-[17%] h-[66%] w-[32%] rotate-[8deg] overflow-hidden rounded-[5px_9px_9px_5px] border border-[#d8c8a7] bg-[#10251d] shadow-[0_16px_34px_rgba(42,38,28,.13)] transition-transform duration-500 hover:-translate-y-1 hover:rotate-[10deg]">
              <Image src="/images/editorial-hospitality/manual-covers-2027/spa-fr.jpg" alt="Couverture du Manuel SOP Spa & Wellness, édition 2027" fill sizes="(min-width: 1024px) 18vw, 40vw" className="object-cover" />
              <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-black/25 to-transparent" />
            </div>
            <div className="absolute left-[34%] top-[9%] z-10 h-[81%] w-[32%] overflow-hidden rounded-[6px_10px_10px_6px] border border-[#d8c8a7] bg-[#0f211a] shadow-[0_22px_48px_rgba(17,32,25,.27)] transition-transform duration-500 hover:-translate-y-1 hover:rotate-[-1deg]">
              <Image src="/images/editorial-hospitality/manual-covers-2027/hsk-fr.jpg" alt="Couverture du Manuel SOP Housekeeping, édition 2027" fill priority sizes="(min-width: 1024px) 20vw, 45vw" className="object-cover" />
              <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-black/25 to-transparent" />
            </div>
            <button type="button" onClick={() => setIsSampleModalOpen(true)} className="absolute bottom-[8%] left-[8%] right-[8%] z-20 flex min-h-11 items-center justify-between gap-3 rounded-2xl border border-white/70 bg-[#fffdf9]/92 px-3.5 py-2.5 text-left text-[#334137] shadow-[0_9px_24px_rgba(42,38,28,.1)] backdrop-blur-md transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(42,38,28,.16)] sm:px-4">
              <span className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f2eee5] text-[#8b6a36]"><Download size={15} /></span>
                <span className="text-[10px] font-semibold leading-4 sm:text-[11px]">{lang === 'fr' ? 'Recevoir un chapitre découverte' : lang === 'es' ? 'Recibir un capítulo de muestra' : 'Get a sample chapter'}</span>
              </span>
              <ArrowRight size={15} className="shrink-0" />
            </button>
          </div>
        </div>
      </section>

      <section aria-label={lang === 'fr' ? 'Choisir une formule' : lang === 'es' ? 'Elegir una opción' : 'Choose an option'} className="border-b border-[#e9e3d8] bg-[#f4f1eb] px-5 pt-3 pb-3 sm:px-8 lg:px-10 lg:pr-24">
        <div className="mx-auto grid max-w-[1440px] gap-2.5 md:grid-cols-2">
          <SamePageAnchor href="#department-playbooks" className="flex min-h-[66px] items-center justify-between gap-3 rounded-2xl border border-[#e8e2d7] bg-white px-4 py-3 text-left shadow-[0_3px_12px_rgba(45,42,34,.035)] transition hover:-translate-y-0.5 hover:shadow-md">
            <span className="flex min-w-0 items-center gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f1eee7] text-[#84663a]"><FileText size={16} /></span><span className="min-w-0"><span className="block truncate text-[11px] font-semibold text-[#25362c]">{text.options[0]}</span><span className="block text-[9px] text-[#6b746d]">Front Office, HK, F&B, Spa, Revenue</span></span></span>
            <span className="shrink-0 text-right text-xs font-semibold text-[#1d3026]">{formatProductPrice('playbook')}<span className="block text-[9px] font-normal text-[#828880]">{lang === 'fr' ? 'par unité' : lang === 'es' ? 'por unidad' : 'each'}</span></span>
          </SamePageAnchor>
          <AddToCartButton
            openCartOnAdd
            item={{ priceId: BUNDLE_PRICE_ID, title: lang === 'fr' ? 'Bundle complet · 5 Manuels SOP' : lang === 'es' ? 'Paquete completo · 5 Manuales SOP' : 'Complete bundle · 5 SOP Manuals', price: priceFor('bundle'), currency, productType: 'bundle' }}
            addedLabel={lang === 'fr' ? 'Dans le panier' : lang === 'es' ? 'En la cesta' : 'In cart'}
            className="flex min-h-[66px] items-center justify-between gap-3 rounded-2xl border border-[#d9c69e] bg-[#fffdf8] px-4 py-3 text-left shadow-[0_3px_12px_rgba(45,42,34,.035)] transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="flex min-w-0 items-center gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f2e5c8] text-[#806035]"><PackageCheck size={16} /></span><span className="min-w-0"><span className="block truncate text-[11px] font-semibold text-[#25362c]">{text.options[1]}</span><span className="block whitespace-nowrap text-[9px] text-[#6b746d]">{lang === 'fr' ? '5 manuels + 3 Starter Packs' : lang === 'es' ? '5 manuales + 3 Starter Packs' : '5 manuals + 3 Starter Packs'}</span></span></span>
            <span className="shrink-0 text-right text-xs font-semibold text-[#1d3026]">{formatProductPrice('bundle')}<span className="block text-[9px] font-normal text-[#828880]">{lang === 'fr' ? 'tout inclus' : lang === 'es' ? 'todo incluido' : 'all included'}</span></span>
          </AddToCartButton>
        </div>
      </section>

      <section id="department-playbooks" className="scroll-mt-24 px-5 py-10 sm:px-8 md:px-10 md:py-12 xl:px-12">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between md:mb-7">
            <div>
              <p className="mb-2.5 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#9a7844]">{text.departmentEyebrow}</p>
              <h2 className="font-display text-[1.8rem] font-medium leading-tight tracking-[-0.025em] text-[#10271e] md:text-[2.25rem]">{text.departmentTitle}</h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-[#687169] md:text-base">{text.departmentIntro}</p>
          </div>
          <div className="grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-5 xl:gap-4">
            {departments.map((manual, index) => {
              const title = manual.title[dataLang]
              const detailHref = `${catalogueHref}/${manual.id}`
              return (
                <article key={manual.id} className="group relative isolate flex h-full flex-col overflow-hidden rounded-[22px] border border-[#e6e1d7] bg-white shadow-[0_5px_20px_rgba(39,42,35,0.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(39,42,35,0.09)]">
                  <Link href={detailHref} aria-label={lang === 'fr' ? `Voir ${title}` : lang === 'es' ? `Ver ${title}` : `View ${title}`} className="absolute inset-0 z-10 rounded-[22px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a58658]" />
                  <div className="relative block aspect-[1.62] overflow-hidden bg-[#e7e0d5]">
                    <DepartmentImage id={manual.id} title={title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101b16]/75 via-transparent to-[#101b16]/10" />
                    <span className="absolute left-3.5 top-3.5 rounded-full border border-white/40 bg-[#fffdf8]/90 px-2.5 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.1em] text-[#455047] shadow-sm backdrop-blur-sm">
                      {manual.dept[dataLang]}
                    </span>
                    {manual.id === 'hsk' ? (
                      <span aria-label={lang === 'fr' ? 'Top vente' : lang === 'es' ? 'Más vendido' : 'Best seller'} title={lang === 'fr' ? 'Top vente' : lang === 'es' ? 'Más vendido' : 'Best seller'} className="absolute right-3.5 top-3.5 inline-flex items-center gap-1.5 rounded-full border border-[#d9c59d]/70 bg-[#fbf6eb]/95 px-2.5 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.08em] text-[#795d32] shadow-sm">
                        <Star size={11} fill="currentColor" strokeWidth={1.5} />{lang === 'fr' ? 'Top vente' : lang === 'es' ? 'Más vendido' : 'Best seller'}
                      </span>
                    ) : null}
                    <span className="absolute bottom-3 left-4 right-3 font-display text-[1.25rem] font-medium leading-tight tracking-[-0.02em] text-white drop-shadow-sm">{title}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <p className="line-clamp-7 min-h-[78px] overflow-hidden text-[11px] leading-[1.55] text-[#687169] sm:h-[120px]">{manual.desc[dataLang]}</p>
                    <div className="mt-3 flex items-center gap-1.5 text-[10px] font-medium text-[#4b594f]">
                      <Check size={12} className="shrink-0 text-[#a58658]" strokeWidth={2} />{lang === 'fr' ? 'PDF & PPTX modifiables · FR & EN' : lang === 'es' ? 'PDF y PPTX editables · FR y EN' : 'Editable PDF & PPTX · EN & FR'}
                    </div>
                    <p className="mt-1 text-[10px] leading-4 text-[#737a72]">{manual.pages}</p>
                    <div className="mt-3 rounded-xl border border-[#e9e3d8] bg-[#f7f5f0] p-3">
                      <div className="mb-2 flex items-center justify-between gap-2">
                        <span className="text-[9px] font-semibold uppercase tracking-[.1em] text-[#7d6540]">{text.manual}</span>
                        <span className="text-xs font-semibold text-[#25362c]">{formatProductPrice('playbook')} <span className="text-[9px] font-normal">{text.ttc}</span></span>
                      </div>
                      <AddToCartButton
                        openCartOnAdd
                        item={{ priceId: manual.priceId, title, price: priceFor('playbook'), currency, productType: 'playbook' }}
                        addedLabel={lang === 'fr' ? 'Dans le panier' : lang === 'es' ? 'En la cesta' : 'In cart'}
                        className="relative z-20 inline-flex min-h-9 w-full items-center justify-center gap-1.5 rounded-lg bg-[#10271e] px-3 py-2 text-[10px] font-semibold text-[#fffdf8] transition-colors hover:bg-[#1c3a2c]"
                      >
                        <ShoppingBag size={13} />{text.manualCta(formatProductPrice('playbook'))}
                      </AddToCartButton>
                    </div>
                    <span className="mt-auto inline-flex min-h-10 items-center justify-center gap-1.5 pt-3 text-[10px] font-semibold text-[#566158] transition-colors group-hover:text-[#10271e]">
                      {text.details}<ArrowUpRight size={13} strokeWidth={1.7} />
                    </span>
                  </div>
                  <span className="sr-only">{index + 1} / {departments.length + 1}</span>
                </article>
              )
            })}
            <article className="group relative isolate flex h-full flex-col overflow-hidden rounded-[22px] border border-[#d8c6a6] bg-white shadow-[0_5px_20px_rgba(39,42,35,0.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(39,42,35,0.09)]">
              <Link href={`/${dataLang}${REVENUE_PRODUCT_PATH}`} aria-label={lang === 'fr' ? 'Voir le manuel Revenue Management' : lang === 'es' ? 'Ver el manual Revenue Management' : 'View the Revenue Management manual'} className="absolute inset-0 z-10 rounded-[22px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a58658]" />
              <div className="relative block aspect-[1.62] overflow-hidden bg-[#e9e2d4]">
                <Image src="/images/editorial-hospitality/dept-revenue-management-v1.png" alt={lang === 'fr' ? 'Espace de travail Revenue Management dans un hôtel' : 'Hotel revenue management workspace'} fill sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101b16]/75 via-transparent to-[#101b16]/10" />
                <span className="absolute left-3.5 top-3.5 rounded-full border border-white/40 bg-[#fffdf8]/90 px-2.5 py-1 text-[.55rem] font-semibold uppercase tracking-[.1em] text-[#455047] shadow-sm backdrop-blur-sm">Revenue Management</span>
                <span className="absolute bottom-3 left-4 right-3 whitespace-nowrap font-display text-[1.25rem] font-medium leading-tight tracking-[-0.02em] text-white drop-shadow-sm">Revenue Management</span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <p className="line-clamp-7 min-h-[78px] overflow-hidden text-[11px] leading-[1.55] text-[#687169] sm:h-[120px]">{text.revenueDescription}</p>
                <div className="mt-3 flex items-center gap-1.5 text-[10px] font-medium text-[#4b594f]"><Check size={12} className="shrink-0 text-[#a58658]" />{lang === 'fr' ? 'PDF & PPTX modifiables · FR & EN' : lang === 'es' ? 'PDF y PPTX editables · FR y EN' : 'Editable PDF & PPTX · EN & FR'}</div>
                <p className="mt-1 text-[10px] leading-4 text-[#737a72]">~115 {lang === 'es' ? 'páginas' : 'pages'}</p>
                <div className="mt-3 rounded-xl border border-[#e9e3d8] bg-[#f7f5f0] p-3">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="text-[9px] font-semibold uppercase tracking-[.1em] text-[#7d6540]">{text.manual}</span>
                    <span className="text-xs font-semibold text-[#25362c]">{formatProductPrice('playbook')} <span className="text-[9px] font-normal">{text.ttc}</span></span>
                  </div>
                  <AddToCartButton
                    openCartOnAdd
                    item={{ priceId: REVENUE_PRICE_ID, title: lang === 'fr' ? 'Manuel SOP Revenue Management & Distribution' : 'Revenue Management & Distribution SOP Manual', price: priceFor('playbook'), currency, productType: 'playbook' }}
                    addedLabel={lang === 'fr' ? 'Dans le panier' : lang === 'es' ? 'En la cesta' : 'In cart'}
                    className="relative z-20 inline-flex min-h-9 w-full items-center justify-center gap-1.5 rounded-lg bg-[#10271e] px-3 py-2 text-[10px] font-semibold text-[#fffdf8] transition-colors hover:bg-[#1c3a2c]"
                  >
                    <ShoppingBag size={13} />{text.manualCta(formatProductPrice('playbook'))}
                  </AddToCartButton>
                </div>
                <span className="mt-auto inline-flex min-h-10 items-center justify-center gap-1.5 pt-3 text-[10px] font-semibold text-[#566158] transition-colors group-hover:text-[#10271e]">{text.details}<ArrowUpRight size={13} /></span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="bundle" className="scroll-mt-24 px-5 pb-12 pt-3 sm:px-8 md:px-12 md:pb-16 xl:px-16">
        <div className="relative mx-auto grid max-w-[1480px] overflow-hidden rounded-[30px] bg-[#10271e] text-[#fbf8f0] shadow-[0_24px_60px_rgba(16,39,30,0.14)] lg:grid-cols-[1fr_auto]">
          <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: 'radial-gradient(#d9c59d 0.6px, transparent 0.6px)', backgroundSize: '20px 20px' }} />
          <div className="relative px-6 py-8 sm:px-9 md:px-12 md:py-10">
            <h2 className="max-w-3xl font-display text-[2rem] font-medium leading-[1.08] tracking-[-0.025em] sm:text-[2.5rem] md:text-[3rem]">{text.bundleTitle}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base">{text.bundleText}</p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium text-white/80 sm:text-sm">
              {[
                { Icon: FileText, label: lang === 'fr' ? 'PDF & PowerPoint modifiables' : lang === 'es' ? 'PDF y PowerPoint editables' : 'Editable PDF & PowerPoint' },
                { Icon: Languages, label: lang === 'fr' ? 'Français & anglais' : lang === 'es' ? 'Francés e inglés' : 'English & French' },
                { Icon: Download, label: lang === 'fr' ? 'Téléchargement immédiat' : lang === 'es' ? 'Descarga inmediata' : 'Instant download' },
                { Icon: Check, label: lang === 'fr' ? '5 référentiels hôteliers' : lang === 'es' ? '5 referentes hoteleros' : '5 hotel references' },
              ].map(({ Icon, label }) => <span key={label} className="inline-flex items-center gap-2"><Icon size={15} className="text-[#d5ba83]" strokeWidth={1.6} />{label}</span>)}
            </div>
          </div>
          <div className="relative flex flex-col justify-center border-t border-white/15 bg-white/[0.035] px-6 py-7 sm:px-9 lg:min-w-[340px] lg:border-l lg:border-t-0 lg:px-10">
            <p className="font-display text-5xl font-medium tracking-[-0.035em]">{formatProductPrice('bundle')}</p>
            <p className="mt-2 text-xs font-medium text-[#d5ba83]">{text.bundleSaving()}</p>
            <AddToCartButton
              openCartOnAdd
              item={{
                priceId: BUNDLE_PRICE_ID,
                title: lang === 'fr' ? 'Bundle complet · 5 Manuels SOP' : lang === 'es' ? 'Paquete completo · 5 Manuales SOP' : 'Complete bundle · 5 SOP Manuals',
                price: priceFor('bundle'),
                currency,
                productType: 'bundle',
              }}
              addedLabel={lang === 'fr' ? 'Dans le panier' : lang === 'es' ? 'En la cesta' : 'In cart'}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#f4ead7] px-5 py-3 text-sm font-semibold text-[#10271e] shadow-[0_8px_22px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              {text.bundleCtaPrice(formatProductPrice('bundle'))}<ArrowRight size={16} />
            </AddToCartButton>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 md:px-12 md:py-14 xl:px-16">
        <div className="mx-auto flex max-w-[1480px] flex-col gap-6 rounded-[28px] border border-[#e6e1d7] bg-[#fffdf8] px-6 py-7 shadow-[0_8px_30px_rgba(39,42,35,0.04)] md:flex-row md:items-center md:justify-between md:px-9 md:py-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-[#9a7844]">{text.trainingEyebrow}</p>
            <h2 className="font-display text-[1.65rem] font-medium leading-tight tracking-[-0.02em] text-[#10271e] md:text-[2rem]">{text.trainingTitle}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#687169]">{text.trainingText}</p>
          </div>
          <Link href={localizedRoutePath('training', lang)} className="inline-flex min-h-11 flex-shrink-0 items-center justify-center gap-2 rounded-full border border-[#22372d] px-5 py-3 text-sm font-semibold text-[#20372c] transition-colors hover:bg-[#f1eee7]">
            <Presentation size={16} strokeWidth={1.7} />{text.trainingCta}<ArrowRight size={15} />
          </Link>
        </div>
      </section>
      {isSampleModalOpen ? <SampleChapterModal locale={lang} onClose={() => setIsSampleModalOpen(false)} /> : null}
    </main>
  )
}
