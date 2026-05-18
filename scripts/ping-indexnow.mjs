// Auto-ping Bing IndexNow after each production build
import { readFile } from 'node:fs/promises'
import path from 'node:path'

const INDEXNOW_KEY = '2f961e4c4bbc4f10b0302b44e65e7c8e'
const SITE_URL = 'https://www.luxops.fr'

async function getSitemapUrls() {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml')
  const sitemap = await readFile(sitemapPath, 'utf8')
  return [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])
}

async function pingIndexNow() {
  if (process.env.VERCEL_ENV !== 'production') {
    console.log('[IndexNow] Skipping: not production build')
    return
  }

  try {
    const urls = await getSitemapUrls()
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: 'www.luxops.fr',
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    })
    console.log(`[IndexNow] Pinged ${urls.length} URLs, status: ${response.status}`)
  } catch (error) {
    console.error('[IndexNow] Error:', error)
  }
}

pingIndexNow()
