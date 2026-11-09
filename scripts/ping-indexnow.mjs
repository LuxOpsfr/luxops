import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'

export const SITE_URL = 'https://www.luxops.fr'
export const INDEXNOW_KEY = '2f961e4c4bbc4f10b0302b44e65e7c8e'

export function changedUrls(previous, current) {
  const old = previous?.entries ?? {}
  return [...new Set([...Object.keys(old), ...Object.keys(current.entries)])]
    .filter((url) => old[url] !== current.entries[url])
    .filter((url) => {
      const parsed = new URL(url)
      return parsed.origin === SITE_URL && !parsed.search && !parsed.hash
    })
}

export async function submit(urls, request = fetch) {
  for (let offset = 0; offset < urls.length; offset += 10000) {
    const batch = urls.slice(offset, offset + 10000)
    let accepted = false
    for (let attempt = 0; attempt < 3; attempt++) {
      const response = await request('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ host: 'www.luxops.fr', key: INDEXNOW_KEY, keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`, urlList: batch }),
        signal: AbortSignal.timeout(30000),
      })
      if ([200, 202].includes(response.status)) {
        console.log(`[IndexNow] ${batch.length} URLs received (HTTP ${response.status}); this does not confirm indexing.`)
        accepted = true
        break
      }
      if (response.status !== 429 && response.status < 500) throw new Error(`IndexNow rejected the request: HTTP ${response.status}`)
      if (attempt < 2) await new Promise((resolve) => setTimeout(resolve, 5000 * (attempt + 1)))
    }
    if (!accepted) throw new Error('IndexNow unavailable after three attempts; baseline not updated.')
  }
}

async function main() {
  const revision = process.env.INDEXNOW_EXPECTED_REVISION
  if (!revision) throw new Error('Set INDEXNOW_EXPECTED_REVISION to the production commit. Never run during build.')
  let current
  for (let attempt = 0; attempt < 80; attempt++) {
    const response = await fetch(`${SITE_URL}/indexnow-manifest.json?revision=${revision}`, { cache: 'no-store', signal: AbortSignal.timeout(20000) })
    if (response.ok) {
      const manifest = await response.json()
      if (manifest.version === 1 && manifest.revision === revision) { current = manifest; break }
    }
    if (attempt < 79) await new Promise((resolve) => setTimeout(resolve, 15000))
  }
  if (!current) throw new Error('Expected commit is not live on the production domain. No URLs submitted.')
  const keyResponse = await fetch(`${SITE_URL}/${INDEXNOW_KEY}.txt`, { signal: AbortSignal.timeout(20000) })
  if (!keyResponse.ok || (await keyResponse.text()).trim() !== INDEXNOW_KEY) throw new Error('Production IndexNow key verification failed.')
  let previous
  try { previous = JSON.parse(await readFile('.indexnow-state/manifest.json', 'utf8')) } catch (error) { if (error.code !== 'ENOENT') throw error }
  const urls = changedUrls(previous, current)
  console.log(`[IndexNow] ${urls.length} added, changed or removed URLs.`)
  if (process.argv.includes('--dry-run')) { console.log(urls.join('\n')); return }
  await submit(urls)
  await mkdir('.indexnow-state', { recursive: true })
  await writeFile('.indexnow-state/manifest.json', JSON.stringify(current) + '\n')
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => { console.error(`[IndexNow] ${error.message}`); process.exitCode = 1 })
}
