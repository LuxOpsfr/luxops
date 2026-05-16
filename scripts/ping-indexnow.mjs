// Auto-ping Bing IndexNow after each production build
const INDEXNOW_KEY = '2f961e4c4bbc4f10b0302b44e65e7c8e'
const SITE_URL = 'https://www.luxops.fr'

const URLS = [
  `${SITE_URL}/en`,
  `${SITE_URL}/fr`,
  `${SITE_URL}/en/playbooks`,
  `${SITE_URL}/fr/playbooks`,
  `${SITE_URL}/en/notion-templates`,
  `${SITE_URL}/fr/notion-templates`,
  `${SITE_URL}/en/audit-qualite`,
  `${SITE_URL}/fr/audit-qualite`,
  `${SITE_URL}/en/process-sur-mesure`,
  `${SITE_URL}/fr/process-sur-mesure`,
  `${SITE_URL}/en/formation`,
  `${SITE_URL}/fr/formation`,
  `${SITE_URL}/en/about`,
  `${SITE_URL}/fr/about`,
  `${SITE_URL}/en/blog`,
  `${SITE_URL}/fr/blog`,
  `${SITE_URL}/en/free-hotel-checklists`,
  `${SITE_URL}/fr/checklists-hotel-gratuites`,
  `${SITE_URL}/en/blog/hotel-operations-playbook`,
  `${SITE_URL}/fr/blog/hotel-operations-playbook`,
  `${SITE_URL}/en/blog/how-to-write-hotel-sops`,
  `${SITE_URL}/fr/blog/how-to-write-hotel-sops`,
  `${SITE_URL}/en/blog/hotel-front-office-sop`,
  `${SITE_URL}/fr/blog/hotel-front-office-sop`,
  `${SITE_URL}/en/hotel-housekeeping-checklist`,
  `${SITE_URL}/fr/hotel-housekeeping-checklist`,
  `${SITE_URL}/en/blog/hotel-fb-service-standards`,
  `${SITE_URL}/fr/blog/hotel-fb-service-standards`,
  `${SITE_URL}/en/food-and-beverage-service-sequence`,
  `${SITE_URL}/fr/sequence-service-restaurant-hotel`,
  `${SITE_URL}/en/hotel-room-service-checklist`,
  `${SITE_URL}/fr/checklist-room-service-hotel`,
  `${SITE_URL}/en/restaurant-opening-checklist`,
  `${SITE_URL}/fr/checklist-ouverture-restaurant`,
  `${SITE_URL}/en/blog/housekeeping-room-inspection`,
  `${SITE_URL}/fr/blog/housekeeping-room-inspection`,
  `${SITE_URL}/en/blog/hotel-fb-restaurant-procedures`,
  `${SITE_URL}/fr/blog/hotel-fb-restaurant-procedures`,
  `${SITE_URL}/en/blog/hotel-spa-wellness-sops`,
  `${SITE_URL}/fr/blog/hotel-spa-wellness-sops`,
  `${SITE_URL}/en/blog/hotel-room-service-sops`,
  `${SITE_URL}/fr/blog/hotel-room-service-sops`,
]

async function pingIndexNow() {
  if (process.env.VERCEL_ENV !== 'production') {
    console.log('[IndexNow] Skipping: not production build')
    return
  }

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: 'www.luxops.fr',
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: URLS,
      }),
    })
    console.log(`[IndexNow] ✅ Pinged ${URLS.length} URLs, status: ${response.status}`)
  } catch (error) {
    console.error('[IndexNow] ❌ Error:', error)
  }
}

pingIndexNow()
