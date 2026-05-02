import { NextResponse } from 'next/server'

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
  `${SITE_URL}/en/blog/hotel-operations-playbook`,
  `${SITE_URL}/fr/blog/hotel-operations-playbook`,
  `${SITE_URL}/en/blog/how-to-write-hotel-sops`,
  `${SITE_URL}/fr/blog/how-to-write-hotel-sops`,
  `${SITE_URL}/en/blog/hotel-front-office-sop`,
  `${SITE_URL}/fr/blog/hotel-front-office-sop`,
  `${SITE_URL}/en/hotel-housekeeping-checklist`,
  `${SITE_URL}/fr/hotel-housekeeping-checklist`,
  `${SITE_URL}/en/housekeeping-sop`,
  `${SITE_URL}/fr/housekeeping-sop`,
  `${SITE_URL}/en/blog/housekeeping-room-inspection`,
  `${SITE_URL}/fr/blog/housekeeping-room-inspection`,
  `${SITE_URL}/en/blog/hotel-fb-service-standards`,
  `${SITE_URL}/fr/blog/hotel-fb-service-standards`,
]

export async function GET() {
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

    return NextResponse.json({
      success: true,
      status: response.status,
      urls: URLS.length,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}
