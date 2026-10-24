export const REVENUE_PRODUCT_PATH = '/playbooks/revenue-management'
export const REVENUE_PRICE_ID = 'price_1UU4ZYDVLJTOFkjUSDgIJ4pD'

export type RevenueProductLocale = 'fr' | 'en'

type Chapter = {
  number: string
  title: Record<RevenueProductLocale, string>
  summary: Record<RevenueProductLocale, string>
  pages: Record<RevenueProductLocale, number>
}

// Titles follow the eight FR/EN chapter-cover PDFs in
// SOP_Manuals_Edition_2027/05_REVENUE_MANAGEMENT/PDF. The summaries are
// short editorial descriptions, not extracts or promises of extra files.
export const REVENUE_PRODUCT_CHAPTERS: Chapter[] = [
  {
    number: '01',
    title: { fr: 'Prendre en charge le revenue management de l’hôtel', en: 'Taking charge of your hotel’s revenue management' },
    pages: { fr: 14, en: 14 },
    summary: { fr: 'Responsabilités, premiers contrôles et rythme de suivi.', en: 'Responsibilities, first checks and the operating rhythm.' },
  },
  {
    number: '02',
    title: { fr: 'Réservations, demande et forecast', en: 'Reservations, demand and forecasting' },
    pages: { fr: 16, en: 16 },
    summary: { fr: 'Rapports PMS, pickup, demande et prévisions chambres et revenu.', en: 'PMS reports, pickup, demand and room-revenue forecasts.' },
  },
  {
    number: '03',
    title: { fr: 'Tarifs, offres et conditions de vente', en: 'Rates, offers and booking conditions' },
    pages: { fr: 16, en: 16 },
    summary: { fr: 'Grille tarifaire, offres, packages et décisions par date.', en: 'Rate structure, offers, packages and stay-date decisions.' },
  },
  {
    number: '04',
    title: { fr: 'Disponibilités, restrictions et surréservation', en: 'Availability, restrictions and overbooking' },
    pages: { fr: 14, en: 14 },
    summary: { fr: 'Stock réel, règles de séjour et traitement des risques.', en: 'Usable inventory, stay rules and risk response.' },
  },
  {
    number: '05',
    title: { fr: 'Distribution et contrôle de la mise en vente', en: 'Distribution and checks on rates and availability' },
    pages: { fr: 15, en: 15 },
    summary: { fr: 'Canaux, mapping, transmission et comparaison après coûts.', en: 'Channels, mapping, transmission and after-cost comparisons.' },
  },
  {
    number: '06',
    title: { fr: 'Groupes et contrats négociés', en: 'Groups and negotiated contracts' },
    pages: { fr: 14, en: 14 },
    summary: { fr: 'Cotation, allotements, options et transmission aux services.', en: 'Quotations, allotments, options and team handovers.' },
  },
  {
    number: '07',
    title: { fr: 'Privatisation du restaurant, du Spa et de l’hôtel', en: 'Exclusive use of the restaurant, Spa and hotel' },
    pages: { fr: 12, en: 12 },
    summary: { fr: 'Périmètre d’exclusivité, engagements et comparaison des contributions.', en: 'Exclusive-use scope, commitments and contribution comparison.' },
  },
  {
    number: '08',
    title: { fr: 'Yield meeting et suivi des résultats', en: 'Yield meetings and results reviews' },
    pages: { fr: 12, en: 11 },
    summary: { fr: 'Réunions, décisions, rapprochement mensuel et budget.', en: 'Meetings, decisions, monthly reconciliation and budget.' },
  },
]

export const REVENUE_PRODUCT_TOTAL_PAGES: Record<RevenueProductLocale, number> = {
  fr: REVENUE_PRODUCT_CHAPTERS.reduce((total, chapter) => total + chapter.pages.fr, 0),
  en: REVENUE_PRODUCT_CHAPTERS.reduce((total, chapter) => total + chapter.pages.en, 0),
}

export function revenueChapterCover(number: string, locale: RevenueProductLocale) {
  return `/product-previews/revenue/${locale}/ch${number}-cover.png`
}
