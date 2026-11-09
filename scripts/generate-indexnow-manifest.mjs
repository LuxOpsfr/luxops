import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'

// Fingerprints contain no source code. Untracked work and secrets are excluded.
const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const path = `${dir}/${entry.name}`
  return entry.isDirectory() ? walk(path) : [path]
})
let tracked
try {
  tracked = execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).split('\0').filter(Boolean)
} catch {
  // Vercel may omit .git; its source tree already contains only deployed files.
  tracked = ['app', 'components', 'content', 'lib', 'messages', 'i18n', 'public'].filter(existsSync).flatMap(walk)
}

const hash = (value) => createHash('sha256').update(value).digest('hex')
const source = tracked.filter((file) => /^(app|components|content|lib|messages|i18n)\//.test(file) && /\.(tsx?|css|json)$/.test(file))
const shared = source.filter((file) => !file.startsWith('app/') || (!file.startsWith('app/api/') && !/\/page\.tsx$/.test(file)))
shared.push(...['next.config.ts', 'proxy.ts'].filter(existsSync))
const assets = tracked.filter((file) => /^public\//.test(file) && !/\.(txt|xml|json)$/.test(file))
// Shared components/data/assets can affect several routes: invalidate conservatively.
const sharedHash = hash([...shared, ...assets].sort().map((file) => `${file}:${hash(readFileSync(file))}`).join('\n'))
const routes = JSON.parse(readFileSync('lib/localized-routes.json', 'utf8'))
const urls = [...readFileSync('public/sitemap.xml', 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1])
const entries = {}
for (const url of urls) {
  const routePath = new URL(url).pathname.replace(/^\/(en|fr|es)/, '') || '/'
  const route = Object.values(routes).find((entry) => Object.values(entry.paths).includes(routePath))
  const aliases = new Set([routePath, ...Object.values(route?.paths ?? {})])
  const candidates = source.filter((file) => {
    if (!file.startsWith('app/') || !/\/(page|layout)\.tsx$/.test(file)) return false
    const template = file.replace(/^app\/\[locale\]/, '').replace(/\/(page|layout)\.tsx$/, '') || '/'
    const pattern = '^' + template.split('/').map((part) => /^\[.*\]$/.test(part) ? '[^/]+' : part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('/') + '$'
    return [...aliases].some((alias) => new RegExp(pattern).test(alias))
  })
  entries[url] = hash(sharedHash + candidates.sort().map((file) => `${file}:${hash(readFileSync(file))}`).join('\n'))
}
for (const file of tracked.filter((file) => /^public\/llms(?:-full)?\.txt$|^public\/llms\/.*\.txt$/.test(file))) {
  entries[`https://www.luxops.fr/${file.slice(7)}`] = hash(readFileSync(file))
}
const revision = process.env.VERCEL_GIT_COMMIT_SHA || execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim()
writeFileSync('public/indexnow-manifest.json', JSON.stringify({ version: 1, revision, entries }) + '\n')
console.log(`[IndexNow] Prepared ${Object.keys(entries).length} fingerprints; no submission during build.`)
