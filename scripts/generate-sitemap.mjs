import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')

const i18n = JSON.parse(readFileSync(join(rootDir, 'lib', 'i18n-data.json'), 'utf8'))
const routes = JSON.parse(readFileSync(join(rootDir, 'lib', 'localized-routes.json'), 'utf8'))

const siteUrl = i18n.siteUrl.replace(/\/$/, '')
const activeLocales = i18n.activeLocales
const defaultLocale = i18n.defaultLocale

function normalizeRoutePath(path = '/') {
  const withSlash = path.startsWith('/') ? path : `/${path}`
  const normalized = withSlash.replace(/\/+$/, '')

  return normalized || '/'
}

function localizedPath(locale, path = '/') {
  const normalizedPath = normalizeRoutePath(path)
  return `/${locale}${normalizedPath === '/' ? '' : normalizedPath}`
}

function localizedUrl(locale, path = '/') {
  return `${siteUrl}${localizedPath(locale, path)}`
}

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function alternateLocalesFor(currentLocale, route) {
  return [
    currentLocale,
    ...activeLocales.filter((locale) => locale !== currentLocale && route.paths[locale]),
  ]
}

const blocks = []

for (const [routeId, route] of Object.entries(routes)) {
  if (route.sitemap === false) continue

  for (const locale of activeLocales) {
    const path = route.paths[locale]
    if (!path) continue

    const alternates = alternateLocalesFor(locale, route)
      .map(
        (alternateLocale) =>
          `    <xhtml:link rel="alternate" hreflang="${alternateLocale}" href="${escapeXml(
            localizedUrl(alternateLocale, route.paths[alternateLocale]),
          )}"/>`,
      )
      .join('\n')

    const xDefaultPath = route.paths[defaultLocale] ?? path
    const lastModified = route.lastModified
      ? `\n    <lastmod>${escapeXml(route.lastModified)}</lastmod>`
      : ''

    blocks.push(`  <!-- ${routeId} ${locale.toUpperCase()} -->
  <url>
    <loc>${escapeXml(localizedUrl(locale, path))}</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(localizedUrl(defaultLocale, xDefaultPath))}"/>
    <changefreq>${escapeXml(route.changeFrequency ?? 'monthly')}</changefreq>${lastModified}
    <priority>${escapeXml(route.priority ?? 0.7)}</priority>
  </url>`)
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

${blocks.join('\n\n')}
</urlset>
`

writeFileSync(join(rootDir, 'public', 'sitemap.xml'), sitemap)

console.log(`Generated public/sitemap.xml with ${blocks.length} URLs`)
