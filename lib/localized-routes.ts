import { ACTIVE_LOCALES, DEFAULT_LOCALE, Locale, SITE_URL, isLocale, toActiveLocale } from './i18n'
import routesData from './localized-routes.json'

export type LocalizedRouteId = keyof typeof routesData

type LocalizedRoute = {
  paths: Partial<Record<Locale, string>>
  sitemap?: boolean
  changeFrequency?: string
  lastModified?: string
  priority?: number
}

const ROUTES = routesData as Record<LocalizedRouteId, LocalizedRoute>

export function normalizeRoutePath(path = '/') {
  const withoutQuery = path.split(/[?#]/)[0] || '/'
  const withSlash = withoutQuery.startsWith('/') ? withoutQuery : `/${withoutQuery}`
  const normalized = withSlash.replace(/\/+$/, '')

  return normalized || '/'
}

export function localizedPath(locale: string, path = '/') {
  const safeLocale = toActiveLocale(locale)
  const normalizedPath = normalizeRoutePath(path)

  return `/${safeLocale}${normalizedPath === '/' ? '' : normalizedPath}`
}

export function localizedUrl(locale: string, path = '/') {
  return `${SITE_URL}${localizedPath(locale, path)}`
}

export function routePath(routeId: LocalizedRouteId, locale: string) {
  const route = ROUTES[routeId]
  const safeLocale = toActiveLocale(locale)

  return route.paths[safeLocale] ?? route.paths[DEFAULT_LOCALE] ?? '/'
}

export function localizedRoutePath(routeId: LocalizedRouteId, locale: string) {
  const safeLocale = toActiveLocale(locale)
  const route = ROUTES[routeId]
  const path = route.paths[safeLocale]

  if (path) return localizedPath(safeLocale, path)

  return localizedPath(DEFAULT_LOCALE, route.paths[DEFAULT_LOCALE] ?? '/')
}

export function localizedRouteUrl(routeId: LocalizedRouteId, locale: string) {
  return `${SITE_URL}${localizedRoutePath(routeId, locale)}`
}

function splitLocalizedPathname(pathname: string) {
  const normalizedPath = normalizeRoutePath(pathname)
  const [, maybeLocale, ...segments] = normalizedPath.split('/')
  const locale = isLocale(maybeLocale) ? maybeLocale : undefined
  const routePathname = locale ? normalizeRoutePath(`/${segments.join('/')}`) : normalizedPath

  return { locale, routePathname }
}

export function routeIdFromPathname(pathname: string) {
  const { routePathname } = splitLocalizedPathname(pathname)

  for (const [routeId, route] of Object.entries(ROUTES) as [LocalizedRouteId, LocalizedRoute][]) {
    const localizedPaths = Object.values(route.paths).map(normalizeRoutePath)

    if (localizedPaths.includes(routePathname)) return routeId
  }

  return undefined
}

export function routeSupportsLocale(routeId: LocalizedRouteId, locale: string) {
  const safeLocale = toActiveLocale(locale)
  return Boolean(ROUTES[routeId].paths[safeLocale])
}

export function localizePathname(pathname: string, targetLocale: string) {
  const safeTargetLocale = toActiveLocale(targetLocale)
  const routeId = routeIdFromPathname(pathname)

  if (routeId) {
    if (routeSupportsLocale(routeId, safeTargetLocale)) {
      return localizedRoutePath(routeId, safeTargetLocale)
    }

    return localizedRoutePath('home', safeTargetLocale)
  }

  const { routePathname } = splitLocalizedPathname(pathname)
  return localizedPath(safeTargetLocale, routePathname)
}

export function alternatesForRoute(
  routeId: LocalizedRouteId,
  xDefaultLocale: Locale = DEFAULT_LOCALE,
  locales: readonly Locale[] = ACTIVE_LOCALES,
) {
  const languages: Record<string, string> = {}

  for (const locale of locales) {
    if (routeSupportsLocale(routeId, locale)) {
      languages[locale] = localizedRouteUrl(routeId, locale)
    }
  }

  languages['x-default'] = localizedRouteUrl(routeId, xDefaultLocale)

  return languages
}

export function alternatesForPath(
  path: string,
  xDefaultLocale: Locale = DEFAULT_LOCALE,
  locales: readonly Locale[] = ACTIVE_LOCALES,
) {
  const routeId = routeIdFromPathname(path)

  if (routeId) return alternatesForRoute(routeId, xDefaultLocale, locales)

  const languages: Record<string, string> = {}
  for (const locale of locales) {
    languages[locale] = localizedUrl(locale, path)
  }
  languages['x-default'] = localizedUrl(xDefaultLocale, path)

  return languages
}

export function sitemapEntries(locales: readonly Locale[] = ACTIVE_LOCALES) {
  return (Object.entries(ROUTES) as [LocalizedRouteId, LocalizedRoute][])
    .filter(([, route]) => route.sitemap !== false)
    .flatMap(([routeId, route]) =>
      locales
        .filter((locale) => route.paths[locale])
        .map((locale) => ({
          routeId,
          locale,
          path: route.paths[locale] as string,
          url: localizedRouteUrl(routeId, locale),
          alternates: alternatesForRoute(routeId, DEFAULT_LOCALE, locales),
          changeFrequency: route.changeFrequency ?? 'monthly',
          lastModified: route.lastModified,
          priority: route.priority ?? 0.7,
        })),
    )
}
