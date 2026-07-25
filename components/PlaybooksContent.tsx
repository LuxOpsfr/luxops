'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  PackageCheck,
} from 'lucide-react'
import Link from 'next/link'
import AddToCartButton from '@/components/AddToCartButton'
import SamePageAnchor from '@/components/SamePageAnchor'
import { PLAYBOOKS, BUNDLE_PRICE_ID } from '@/content/playbooks/data'
import { STARTER_PACKS } from '@/content/starter-packs/data'
import { useCurrency } from '@/context/CurrencyContext'
import { formatCurrencyAmount } from '@/lib/pricing'
import ProductPreviewCarousel from '@/components/ProductPreviewCarousel'
import { toActiveLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import { localizedRoutePath } from '@/lib/localized-routes'

const playbooksCopy = {
  en: {
    allFilter: 'All Playbooks',
    starterValueProps: ['Practical templates', 'PDF + PPTX', 'FR & EN included'],
    playbookValueProps: ['Complete SOP reference', 'PDF + PowerPoint', 'FR & EN included'],
    starterCta: (price: string) => `View starter packs at ${price}`,
    playbookCta: (price: string) => `View playbooks at ${price}`,
    freeChapterCta: 'Download free chapter',
    starterBadge: 'New · Starter Pack',
    practicalTools: 'practical tools',
    fullPlaybook: 'Full Playbook',
    perPlaybook: 'per playbook',
    freeChapterBanner:
      'Not ready to buy? Download a free introduction chapter before choosing a playbook.',
    downloadFreeChapter: 'Download free chapter →',
    playbooksCount: 'Playbooks',
    allPlaybooksTitle: 'All Playbooks',
    newLabel: 'New',
    starterPacksTitle: 'Starter Packs',
    starterPacksIntro: 'Practical checklists, templates and scripts designed for immediate operational use.',
    needFullSet: 'Need the full set?',
    addedLabel: 'In Cart',
    addPlaybook: (price: string) => `Add to cart · ${price}`,
    addStarterPack: (price: string) => `Add to cart · ${price}`,
    priceIdNeeded: 'Price ID needed',
    viewDetails: 'View details',
    bundleFeatures: ['4 department playbooks', 'PDF + PowerPoint', 'FR & EN included'],
    bundlePrice: 'Bundle price',
    insteadOf: (price: string) => `instead of ${price}`,
    bundleSave: 'Save when you need the full set.',
    bundleCartTitle: 'Complete Bundle · All 4 Playbooks',
    bundleCta: (price: string) => `Get the Bundle · ${price}`,
    customTitle: 'Need something more specific?',
    customText:
      'We can build department-specific SOPs around your property, your standards, and the way your teams operate.',
    customCta: 'Learn more',
    testimonialsTitle: 'What professionals say',
    testimonials: [
      {
        quote: 'The procedures clearly reflect real hotel experience. You can tell it was built from the floor up.',
        role: 'Operations Manager',
      },
      {
        quote: 'Applicable from day one, regardless of property type or size.',
        role: 'Executive Housekeeper',
      },
      {
        quote: 'We used it across two very different properties. It worked for both.',
        role: 'Hotel Group Manager',
      },
      {
        quote: 'Solid procedures you can actually adapt to your own standards without rewriting everything.',
        role: 'General Manager',
      },
    ],
    goFurther: 'Go further',
    trainingTitle: 'Deploy your playbooks with a trainer on site',
    trainingText:
      'Buying the playbooks is a strong first step. To make sure your teams understand them, apply them from day one and build lasting habits, our on-site training sessions go through each procedure with the team. Playbooks included and handed to every participant at the end of the session.',
    trainingCta: 'Discover on-site training',
  },
  fr: {
    allFilter: 'Tous les Playbooks',
    starterValueProps: ['Templates pratiques', 'PDF + PPTX', 'FR & EN inclus'],
    playbookValueProps: ['Référence SOP complète', 'PDF + PowerPoint', 'FR & EN inclus'],
    starterCta: (price: string) => `Voir les starter packs à ${price}`,
    playbookCta: (price: string) => `Voir les playbooks à ${price}`,
    freeChapterCta: 'Télécharger un chapitre gratuit',
    starterBadge: 'Nouveau · Starter Pack',
    practicalTools: 'outils pratiques',
    fullPlaybook: 'Playbook complet',
    perPlaybook: 'par playbook',
    freeChapterBanner:
      "Pas encore prêt à acheter ? Téléchargez un chapitre d'introduction gratuit avant de choisir un playbook.",
    downloadFreeChapter: 'Télécharger un chapitre →',
    playbooksCount: 'Playbooks',
    allPlaybooksTitle: 'Tous les Playbooks',
    newLabel: 'Nouveau',
    starterPacksTitle: 'Starter Packs',
    starterPacksIntro: 'Checklists, templates et scripts pratiques conçus pour un usage opérationnel immédiat.',
    needFullSet: 'Besoin du set complet ?',
    addedLabel: 'Ajouté',
    addPlaybook: (price: string) => `Ajouter au panier · ${price}`,
    addStarterPack: (price: string) => `Ajouter au panier · ${price}`,
    priceIdNeeded: 'Price ID requis',
    viewDetails: 'Voir les détails',
    bundleFeatures: ['4 playbooks département', 'PDF + PowerPoint', 'FR & EN inclus'],
    bundlePrice: 'Prix bundle',
    insteadOf: (price: string) => `au lieu de ${price}`,
    bundleSave: 'Économisez si vous avez besoin de l’ensemble.',
    bundleCartTitle: 'Bundle Complet · 4 Playbooks',
    bundleCta: (price: string) => `Acheter le Bundle · ${price}`,
    customTitle: 'Besoin de quelque chose de plus spécifique ?',
    customText:
      'Nous pouvons construire des procédures sur-mesure autour de votre établissement, de vos standards et du fonctionnement de vos équipes.',
    customCta: 'En savoir plus',
    testimonialsTitle: 'Ce que disent les professionnels',
    testimonials: [
      {
        quote: 'Les procédures reflètent une vraie expérience du terrain. Ça se sent immédiatement.',
        role: 'Responsable des opérations',
      },
      {
        quote: "Applicable dès le premier jour, quel que soit le type ou la taille de l'établissement.",
        role: 'Gouvernante Générale',
      },
      {
        quote: "Nous l'avons utilisé dans deux établissements très différents. Ça a fonctionné dans les deux cas.",
        role: 'Directeur de groupe hôtelier',
      },
      {
        quote: "Des procédures solides que l'on peut adapter à ses propres standards sans tout réécrire.",
        role: 'Directeur Général',
      },
    ],
    goFurther: 'Aller plus loin',
    trainingTitle: 'Déployez vos playbooks avec un formateur sur site',
    trainingText:
      "Acquérir les playbooks est une excellente première étape. Pour s'assurer que vos équipes les comprennent vraiment, les appliquent dès le premier service et construisent des habitudes durables, nos formations sur site parcourent chaque procédure avec l'équipe. Les playbooks sont remis à chaque participant en fin de session.",
    trainingCta: 'Découvrir la formation sur site',
  },
  es: {
    allFilter: 'Todos los Playbooks',
    starterValueProps: ['Plantillas prácticas', 'PDF + PPTX', 'FR + EN incluidos'],
    playbookValueProps: ['Referencia SOP completa', 'PDF + PowerPoint', 'FR + EN incluidos'],
    starterCta: (price: string) => `Ver starter packs a ${price}`,
    playbookCta: (price: string) => `Ver playbooks a ${price}`,
    freeChapterCta: 'Descargar capítulo gratuito',
    starterBadge: 'Nuevo · Starter Pack',
    practicalTools: 'herramientas prácticas',
    fullPlaybook: 'Playbook completo',
    perPlaybook: 'por playbook',
    freeChapterBanner:
      '¿Aún no estás listo para comprar? Descarga un capítulo de introducción gratuito antes de elegir un playbook.',
    downloadFreeChapter: 'Descargar capítulo →',
    playbooksCount: 'Playbooks',
    allPlaybooksTitle: 'Todos los Playbooks',
    newLabel: 'Nuevo',
    starterPacksTitle: 'Starter Packs',
    starterPacksIntro: 'Checklists, plantillas y scripts prácticos diseñados para uso operativo inmediato.',
    needFullSet: '¿Necesitas el set completo?',
    addedLabel: 'Añadido',
    addPlaybook: (price: string) => `Añadir al carrito · ${price}`,
    addStarterPack: (price: string) => `Añadir al carrito · ${price}`,
    priceIdNeeded: 'Price ID requerido',
    viewDetails: 'Ver detalles',
    bundleFeatures: ['4 playbooks por departamento', 'PDF + PowerPoint', 'FR + EN incluidos'],
    bundlePrice: 'Precio del pack',
    insteadOf: (price: string) => `en lugar de ${price}`,
    bundleSave: 'Ahorra si necesitas el conjunto completo.',
    bundleCartTitle: 'Pack completo · 4 Playbooks',
    bundleCta: (price: string) => `Comprar el pack · ${price}`,
    customTitle: '¿Necesitas algo más específico?',
    customText:
      'Podemos crear SOPs específicos por departamento alrededor de tu propiedad, tus estándares y la forma de trabajar de tus equipos.',
    customCta: 'Más información',
    testimonialsTitle: 'Qué dicen los profesionales',
    testimonials: [
      {
        quote: 'Los procedimientos reflejan claramente experiencia hotelera real. Se nota que están construidos desde la operación.',
        role: 'Operations Manager',
      },
      {
        quote: 'Aplicable desde el primer día, sea cual sea el tipo o tamaño de la propiedad.',
        role: 'Executive Housekeeper',
      },
      {
        quote: 'Lo usamos en dos propiedades muy diferentes. Funcionó en ambas.',
        role: 'Hotel Group Manager',
      },
      {
        quote: 'Procedimientos sólidos que puedes adaptar a tus propios estándares sin reescribirlo todo.',
        role: 'General Manager',
      },
    ],
    goFurther: 'Ir más lejos',
    trainingTitle: 'Despliega tus playbooks con un formador en sitio',
    trainingText:
      'Comprar los playbooks es un primer paso sólido. Para que tus equipos los entiendan, los apliquen desde el primer día y creen hábitos duraderos, nuestras formaciones en sitio recorren cada procedimiento con el equipo. Los playbooks se entregan a cada participante al final de la sesión.',
    trainingCta: 'Descubrir la formación en sitio',
  },
} satisfies Partial<Record<Locale, {
  allFilter: string
  starterValueProps: string[]
  playbookValueProps: string[]
  starterCta: (price: string) => string
  playbookCta: (price: string) => string
  freeChapterCta: string
  starterBadge: string
  practicalTools: string
  fullPlaybook: string
  perPlaybook: string
  freeChapterBanner: string
  downloadFreeChapter: string
  playbooksCount: string
  allPlaybooksTitle: string
  newLabel: string
  starterPacksTitle: string
  starterPacksIntro: string
  needFullSet: string
  addedLabel: string
  addPlaybook: (price: string) => string
  addStarterPack: (price: string) => string
  priceIdNeeded: string
  viewDetails: string
  bundleFeatures: string[]
  bundlePrice: string
  insteadOf: (price: string) => string
  bundleSave: string
  bundleCartTitle: string
  bundleCta: (price: string) => string
  customTitle: string
  customText: string
  customCta: string
  testimonialsTitle: string
  testimonials: { quote: string; role: string }[]
  goFurther: string
  trainingTitle: string
  trainingText: string
  trainingCta: string
}>>

const playbookListingEs = {
  fo: {
    title: 'Playbook Front Office',
    dept: 'Front Office',
    desc:
      'Secuencias de servicio, comunicación con huéspedes, gestión de quejas, upselling, night audit y la estructura procedural que mantiene una recepción consistente en cada turno.',
    highlights: [
      'SOPs de check-in/check-out',
      'Plantillas de comunicación con huéspedes',
      'Técnicas de upselling',
      'Estándares de concierge',
      'Resolución de quejas',
      'Procedimientos de night audit',
    ],
  },
  hsk: {
    title: 'Playbook Housekeeping',
    dept: 'Housekeeping',
    desc:
      'Checklists de inspección de habitaciones, gestión de ropa blanca y productos, protocolos de limpieza y estándares de control de calidad para mantener el mismo nivel operativo de la primera habitación a la última.',
    highlights: [
      'Checklists de inspección de habitaciones',
      'SOPs de gestión de ropa blanca',
      'Procedimientos de cobertura',
      'Métodos de control de calidad',
      'Integración de sistemas digitales',
      'Estándares de sostenibilidad',
    ],
  },
  fb: {
    title: 'Playbook F&B',
    dept: 'Food & Beverage',
    desc:
      'Secuencias y estándares de servicio para restaurante, bar, desayuno y room service, con un marco procedural claro para cada interacción, cada mesa y cada servicio.',
    highlights: [
      'Estándares de servicio de restaurante',
      'Guía de operaciones de bar',
      'Protocolos de servicio de vino',
      'SOPs de room service',
      'Mise en place y estaciones',
      'Métodos de service recovery',
    ],
  },
  spa: {
    title: 'Playbook Spa & Wellness',
    dept: 'Spa & Wellness',
    desc:
      'Protocolos de tratamientos, estándares del recorrido del huésped, conducta de terapeutas, retail y gestión de reservas para un spa donde la consistencia impulsa la experiencia.',
    highlights: [
      'Protocolos de tratamientos',
      'Estándares de preparación de salas',
      'Mapa del recorrido del huésped',
      'Conocimiento de producto y retail',
      'Estándares de presentación de terapeutas',
      'Métodos de control de calidad',
    ],
  },
}

const starterPackListingEs = {
  'fo-starter-pack': {
    category: 'Front Office',
    shortTitle: 'Starter Pack Front Office',
    description:
      'Checklists de recepción, plantillas de handover y herramientas de comunicación con huéspedes listas para usar, diseñadas para estructurar los básicos diarios del Front Office.',
    bullets: [
      'SOPs de check-in / check-out',
      'Plantilla de handover de turno',
      'Scripts de quejas y comunicación con huéspedes',
    ],
  },
  'hsk-starter-pack': {
    category: 'Housekeeping',
    shortTitle: 'Kit de inspección Housekeeping',
    description:
      'Checklists de inspección de habitaciones, hojas de control y herramientas de seguimiento de defectos listas para usar por equipos de housekeeping.',
    bullets: [
      'Checklists de inspección de habitación',
      'Hoja de control de supervisor',
      'Seguimiento de defectos frecuentes y mantenimiento',
    ],
  },
  'fb-starter-pack': {
    category: 'Food & Beverage',
    shortTitle: 'Starter Pack F&B',
    description:
      'Checklists, scripts y plantillas de servicio F&B listas para usar para estructurar restaurante, bar y room service.',
    bullets: [
      'Secuencias de servicio y checklists',
      'Plantillas de briefing y mise en place',
      'Scripts de comunicación y service recovery',
    ],
  },
}

export default function PlaybooksContent({ locale }: { locale: string }) {
  const t = useTranslations('playbooks_page')
  const activeLocale = toActiveLocale(locale)
  const copy = playbooksCopy[activeLocale as keyof typeof playbooksCopy] ?? playbooksCopy.en
  const lang = activeLocale === 'fr' ? 'fr' : 'en'
  const detailLocale = activeLocale === 'fr' ? 'fr' : 'en'
  const { currency, priceFor, formatProductPrice } = useCurrency()

  const [activeFilter, setActiveFilter] = useState<string>('all')
  const bundleReferencePrice = formatCurrencyAmount(priceFor('playbook') * 4, currency, locale)

  const categories = [
    { key: 'all', label: copy.allFilter },
    { key: 'fo', label: 'Front Office' },
    { key: 'hsk', label: 'Housekeeping' },
    { key: 'fb', label: 'F&B' },
    { key: 'spa', label: 'Spa & Wellness' },
  ]

  const filteredPlaybooks =
    activeFilter === 'all' ? PLAYBOOKS : PLAYBOOKS.filter((pb) => pb.id === activeFilter)
  const starterPacksForDisplay = [...STARTER_PACKS].sort((a, b) => {
    if (a.id === 'fb-starter-pack') return -1
    if (b.id === 'fb-starter-pack') return 1
    return 0
  })

  const detailPlaybooksHref = localizedRoutePath('playbooks', detailLocale)
  const freeChapterHref = localizedRoutePath('freeHotelProcedures', activeLocale)

  return (
    <div className="pt-16 bg-white">
      {/* Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div className="min-w-0">
              <h1 className="font-display text-5xl md:text-6xl font-extrabold text-[#0a1d2e] mb-5 leading-tight tracking-tight">
                {t('title')}
              </h1>
              <p className="text-lg text-[#4f6074] leading-relaxed max-w-2xl mb-8">
                {t('subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <SamePageAnchor
                  href="#starter-packs"
                  className="inline-flex justify-center items-center gap-2 px-7 py-4 bg-[#003d9b] text-white font-bold text-sm hover:bg-[#002d7a] transition-colors"
                  style={{ borderRadius: '0.125rem' }}
                >
                  {copy.starterCta(formatProductPrice('starter_pack'))}
                  <ArrowRight size={16} />
                </SamePageAnchor>
                <SamePageAnchor
                  href="#department-playbooks"
                  className="inline-flex justify-center items-center gap-2 px-7 py-4 border border-[#c3c6d6] text-[#0a1d2e] font-bold text-sm hover:border-[#003d9b] hover:text-[#003d9b] transition-colors"
                  style={{ borderRadius: '0.125rem' }}
                >
                  {copy.playbookCta(formatProductPrice('playbook'))}
                </SamePageAnchor>
                <a
                  href={freeChapterHref}
                  className="inline-flex justify-center items-center gap-2 px-7 py-4 border border-[#c3c6d6] text-[#0a1d2e] font-bold text-sm hover:border-[#003d9b] hover:text-[#003d9b] transition-colors"
                  style={{ borderRadius: '0.125rem' }}
                >
                  {copy.freeChapterCta}
                </a>
              </div>
            </div>

            <div className="min-w-0 bg-[#f8f9ff] p-6 sm:p-8" style={{ borderRadius: '0.125rem' }}>
              <div className="grid gap-4">
                <div className="min-w-0 bg-white p-6 sm:p-7 shadow-sm" style={{ borderRadius: '0.125rem' }}>
                  <div className="mb-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#003d9b]">
                      {copy.starterBadge}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-end gap-3 mb-6">
                    <span className="font-display text-6xl font-extrabold text-[#0a1d2e]">
                      {formatProductPrice('starter_pack')}
                    </span>
                    <span className="text-sm text-[#4f6074] pb-3">
                      {copy.practicalTools}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {copy.starterValueProps.map((item) => (
                      <div key={item} className="flex gap-3 text-sm text-[#4f6074]">
                        <CheckCircle2 size={18} className="text-[#003d9b] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="min-w-0 bg-white/70 p-6 border border-[#e3e8f4]" style={{ borderRadius: '0.125rem' }}>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#737685] mb-4">
                    {copy.fullPlaybook}
                  </p>
                  <div className="flex flex-wrap items-end gap-3 mb-5">
                    <span className="font-display text-4xl font-extrabold text-[#0a1d2e]">
                      {formatProductPrice('playbook')}
                    </span>
                    <span className="text-sm text-[#4f6074] pb-2">
                      {copy.perPlaybook}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {copy.playbookValueProps.map((item) => (
                      <div key={item} className="flex gap-3 text-sm text-[#4f6074]">
                        <CheckCircle2 size={16} className="text-[#003d9b] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free chapter banner */}
      <section className="px-6 pb-10">
        <div
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-7 py-5"
          style={{ backgroundColor: '#eef4ff', borderLeft: '3px solid #003d9b', borderRadius: '0.125rem' }}
        >
          <p className="text-sm text-[#0a1d2e] font-medium">
            {copy.freeChapterBanner}
          </p>
          <Link
            href={freeChapterHref}
            className="flex-shrink-0 text-xs font-bold text-[#003d9b] underline underline-offset-4 hover:text-[#002d7a] transition-colors whitespace-nowrap"
          >
            {copy.downloadFreeChapter}
          </Link>
        </div>
      </section>

      {/* Department playbooks */}
      <main className="max-w-7xl mx-auto px-6 py-16 flex flex-col">
        <div
          id="department-playbooks"
          className="scroll-mt-28 flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#003d9b] mb-4">
              {filteredPlaybooks.length} {copy.playbooksCount}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[#0a1d2e] mb-4 tracking-tight">
              {copy.allPlaybooksTitle}
            </h2>
            <p className="text-[#4f6074] leading-relaxed">{t('product_intro')}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className="px-4 py-2 text-sm font-bold transition-all"
                style={{
                  color: activeFilter === cat.key ? '#ffffff' : '#4f6074',
                  backgroundColor: activeFilter === cat.key ? '#003d9b' : '#f8f9ff',
                  border: activeFilter === cat.key ? '1px solid #003d9b' : '1px solid rgba(195,198,214,0.55)',
                  borderRadius: '0.125rem',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {filteredPlaybooks.map((pb) => {
            const esListing = activeLocale === 'es' ? playbookListingEs[pb.id] : undefined
            const pbTitle = esListing?.title ?? pb.title[lang]
            const pbDept = esListing?.dept ?? pb.dept[lang]
            const pbDesc = esListing?.desc ?? pb.desc[lang]
            const pbHighlights = esListing?.highlights ?? pb.highlights[lang]

            return (
              <article
                key={pb.id}
                className="bg-white flex flex-col transition-all duration-300 hover:shadow-2xl"
                style={{ boxShadow: '0 2px 12px rgba(10,29,46,0.06)', borderRadius: '0.125rem' }}
              >
                <Link href={`${detailPlaybooksHref}/${pb.id}`} className="block group">
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: '16/10', backgroundColor: '#dae9ff' }}
                  >
                    <ProductPreviewCarousel productId={pb.id} locale={locale} variant="card" />
                  </div>
                </Link>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 text-[#003d9b]"
                      style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
                    >
                      {pbDept}
                    </span>
                    <span className="font-display text-2xl font-extrabold text-[#0a1d2e]">
                      {formatProductPrice('playbook')}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#0a1d2e] mb-2">
                    {pbTitle}
                  </h3>
                  <p className="text-sm text-[#4f6074] leading-relaxed mb-5 flex-1">{pbDesc}</p>

                  <ul className="space-y-2 mb-6">
                    {pbHighlights.slice(0, 3).map((highlight) => (
                      <li key={highlight} className="flex gap-2 text-xs text-[#4f6074]">
                        <CheckCircle2 size={14} className="text-[#003d9b] flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <AddToCartButton
                      item={{
                        priceId: pb.priceId,
                        title: pbTitle,
                        price: priceFor('playbook'),
                        currency,
                        productType: 'playbook',
                      }}
                      addedLabel={copy.addedLabel}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-[#003d9b] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#002d7a] transition-colors rounded-[2px]"
                    >
                      {copy.addPlaybook(formatProductPrice('playbook'))}
                    </AddToCartButton>
                    <Link
                      href={`${detailPlaybooksHref}/${pb.id}`}
                      className="w-full flex items-center justify-center gap-2 py-3 text-[#003d9b] font-bold text-xs uppercase tracking-widest hover:bg-[#eef4ff] transition-colors"
                      style={{ border: '1px solid #003d9b', borderRadius: '0.125rem' }}
                    >
                      <span>{copy.viewDetails}</span>
                      <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <section id="starter-packs" className="pb-20" style={{ order: -1 }}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
            <div className="max-w-2xl">
              <p className="inline-flex items-center px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#003d9b] bg-[#eef4ff] mb-4">
                {copy.newLabel}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[#0a1d2e] mb-4 tracking-tight">
                {copy.starterPacksTitle}
              </h2>
              <p className="text-[#4f6074] leading-relaxed">
                {copy.starterPacksIntro}
              </p>
            </div>
            <SamePageAnchor
              href="#bundle"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#003d9b] underline underline-offset-4 hover:text-[#002d7a] transition-colors"
            >
              {copy.needFullSet}
              <ArrowRight size={14} />
            </SamePageAnchor>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {starterPacksForDisplay.map((pack) => {
              const isPurchasable = Boolean(pack.priceId)
              const esListing = activeLocale === 'es' ? starterPackListingEs[pack.id] : undefined
              const packCategory = esListing?.category ?? pack.category[lang]
              const packTitle = esListing?.shortTitle ?? pack.shortTitle[lang]
              const packDescription = esListing?.description ?? pack.description[lang]
              const packBullets = esListing?.bullets ?? pack.bullets[lang]

              return (
                <article
                  key={pack.id}
                  className="bg-white flex flex-col transition-all duration-300 hover:shadow-2xl"
                  style={{ boxShadow: '0 2px 12px rgba(10,29,46,0.06)', borderRadius: '0.125rem' }}
                >
                  <Link href={`${detailPlaybooksHref}/${pack.id}`} className="block group">
                    <div
                      className="relative overflow-hidden"
                      style={{ aspectRatio: '16/7', backgroundColor: '#dae9ff' }}
                    >
                      <ProductPreviewCarousel productId={pack.id} locale={locale} variant="card" />
                    </div>
                  </Link>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 text-[#003d9b]"
                        style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem' }}
                      >
                        {packCategory}
                      </span>
                      <span className="font-display text-2xl font-extrabold text-[#0a1d2e]">
                        {formatProductPrice('starter_pack')}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#0a1d2e] mb-2">
                      {packTitle}
                    </h3>
                    <p className="text-sm text-[#4f6074] leading-relaxed mb-5 flex-1">{packDescription}</p>

                    <ul className="space-y-2 mb-6">
                      {packBullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2 text-xs text-[#4f6074]">
                          <CheckCircle2 size={14} className="text-[#003d9b] flex-shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-3">
                      {isPurchasable ? (
                        <AddToCartButton
                          item={{
                            priceId: pack.priceId,
                            title: packTitle,
                            price: priceFor('starter_pack'),
                            currency,
                            productType: 'starter_pack',
                          }}
                          addedLabel={copy.addedLabel}
                          className="w-full flex items-center justify-center gap-2 py-3 bg-[#003d9b] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#002d7a] transition-colors rounded-[2px]"
                        >
                          {copy.addStarterPack(formatProductPrice('starter_pack'))}
                        </AddToCartButton>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="w-full flex items-center justify-center gap-2 py-3 bg-[#c3c6d6] text-white font-bold text-xs uppercase tracking-widest cursor-not-allowed rounded-[2px]"
                        >
                          {copy.priceIdNeeded}
                        </button>
                      )}
                      <Link
                        href={`${detailPlaybooksHref}/${pack.id}`}
                        className="w-full flex items-center justify-center gap-2 py-3 text-[#003d9b] font-bold text-xs uppercase tracking-widest hover:bg-[#eef4ff] transition-colors"
                        style={{ border: '1px solid #003d9b', borderRadius: '0.125rem' }}
                      >
                        <span>{copy.viewDetails}</span>
                        <ChevronRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      </main>

      {/* Bundle upgrade */}
      <section id="bundle" className="py-18 px-6 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto">
          <div
            className="grid lg:grid-cols-[1fr_0.72fr] gap-10 bg-white p-8 md:p-10"
            style={{ borderRadius: '0.125rem', boxShadow: '0 2px 12px rgba(10,29,46,0.06)' }}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#003d9b] mb-4">{t('bundle_label')}</p>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#0a1d2e] mb-4">
                {t('bundle_desc')}
              </h2>
              <p className="text-[#4f6074] leading-relaxed max-w-2xl mb-7">
                {t('bundle_subtitle')}
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {copy.bundleFeatures.map((item) => (
                  <div key={item} className="flex gap-2 text-sm text-[#4f6074]">
                    <PackageCheck size={17} className="text-[#003d9b] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#003d9b] text-white p-7 flex flex-col justify-between" style={{ borderRadius: '0.125rem' }}>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-3">
                  {copy.bundlePrice}
                </p>
                <div className="flex items-end gap-3 mb-3">
                  <span className="font-display text-5xl font-extrabold">{formatProductPrice('bundle')}</span>
                  <span className="text-sm opacity-75 pb-2">
                    {copy.insteadOf(bundleReferencePrice)}
                  </span>
                </div>
                <p className="text-sm opacity-75 mb-7">
                  {copy.bundleSave}
                </p>
              </div>
              <AddToCartButton
                item={{
                  priceId: BUNDLE_PRICE_ID,
                  title: copy.bundleCartTitle,
                  price: priceFor('bundle'),
                  currency,
                  productType: 'bundle',
                }}
                addedLabel={copy.addedLabel}
                className="w-full px-5 py-3 bg-white text-[#003d9b] text-sm font-bold hover:bg-[#f8f9ff] transition-colors rounded-[2px]"
              >
                {copy.bundleCta(formatProductPrice('bundle'))}
              </AddToCartButton>
            </div>
          </div>
        </div>
      </section>

      {/* Custom SOP CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div
            className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8"
            style={{ backgroundColor: '#0a1d2e', borderRadius: '0.125rem' }}
          >
            <div className="text-white max-w-2xl">
              <p className="font-display font-bold text-2xl mb-3">
                {copy.customTitle}
              </p>
              <p className="text-sm opacity-80 leading-relaxed">
                {copy.customText}
              </p>
            </div>
            <Link
              href={localizedRoutePath('bespokeProcess', activeLocale)}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-[#0a1d2e] font-bold text-sm hover:bg-[#f8f9ff] transition-colors"
              style={{ borderRadius: '0.125rem' }}
            >
              {copy.customCta}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white" style={{ borderTop: '1px solid rgba(195,198,214,0.2)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#4f6074] mb-10">
            {copy.testimonialsTitle}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {copy.testimonials.map((item) => (
              <div
                key={item.role}
                className="flex flex-col justify-between p-6"
                style={{ backgroundColor: '#f8f9ff', borderRadius: '0.125rem' }}
              >
                <p className="text-sm text-[#0a1d2e] leading-relaxed mb-6">&quot;{item.quote}&quot;</p>
                <p className="text-xs font-bold text-[#4f6074] uppercase tracking-widest">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sell Formation */}
      <section className="py-16 px-6" style={{ backgroundColor: '#f8f9ff' }}>
        <div className="max-w-7xl mx-auto">
          <div
            className="flex flex-col lg:flex-row items-center gap-10 p-10"
            style={{ backgroundColor: '#eef4ff', borderRadius: '0.125rem', borderLeft: '4px solid #003d9b' }}
          >
            <div className="flex-1">
              <div className="text-xs font-bold uppercase tracking-widest text-[#003d9b] mb-4">
                {copy.goFurther}
              </div>
              <h2 className="font-display text-2xl font-extrabold text-[#0a1d2e] mb-3">
                {copy.trainingTitle}
              </h2>
              <p className="text-[#4f6074] leading-relaxed text-sm max-w-xl">
                {copy.trainingText}
              </p>
            </div>
            <Link
              href={localizedRoutePath('training', activeLocale)}
              className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-[#003d9b] text-white font-bold text-sm hover:bg-[#002d7a] transition-colors"
              style={{ borderRadius: '0.125rem' }}
            >
              {copy.trainingCta}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
