import i18nData from './i18n-data.json'

export const LOCALES = ['en', 'fr', 'es', 'it', 'de', 'ru'] as const
export type Locale = (typeof LOCALES)[number]

export type LocaleStatus = 'active' | 'planned'

export interface LocaleMeta {
  label: string
  nativeLabel: string
  shortLabel: string
  htmlLang: string
  intlLocale: string
  defaultCurrency: string
  textDirection: 'ltr' | 'rtl'
}

export const SITE_URL = i18nData.siteUrl
export const DEFAULT_LOCALE = i18nData.defaultLocale as Locale
export const ACTIVE_LOCALES = i18nData.activeLocales as readonly Locale[]
export const PLANNED_LOCALES = i18nData.plannedLocales as readonly Locale[]
export const LOCALE_META = i18nData.locales as Record<Locale, LocaleMeta>
export const ACTIVE_LOCALE_PATTERN = ACTIVE_LOCALES.join('|')

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && LOCALES.includes(value as Locale)
}

export function isActiveLocale(value: unknown): value is Locale {
  return isLocale(value) && ACTIVE_LOCALES.includes(value)
}

export function toLocale(value: unknown, fallback: Locale = DEFAULT_LOCALE): Locale {
  return isLocale(value) ? value : fallback
}

export function toActiveLocale(value: unknown, fallback: Locale = DEFAULT_LOCALE): Locale {
  return isActiveLocale(value) ? value : fallback
}

export function localeStatus(locale: Locale): LocaleStatus {
  return ACTIVE_LOCALES.includes(locale) ? 'active' : 'planned'
}

export function localePattern(locales: readonly Locale[] = ACTIVE_LOCALES) {
  return locales.join('|')
}
