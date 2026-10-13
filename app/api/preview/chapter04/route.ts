import { getSupabaseAdmin } from '@/lib/supabase-admin'
import { normalizeLeadEmail } from '@/lib/lead-email'

export const runtime = 'nodejs'

const PDF_OBJECTS = {
  fo: {
    fr: 'front-office/pdf/fr/ch04-communication-client.pdf',
    en: 'front-office/pdf/en/ch04-guest-communication.pdf',
  },
  hsk: {
    fr: 'housekeeping/pdf/fr/ch04-parties-communes.pdf',
    en: 'housekeeping/pdf/en/ch04-public-areas.pdf',
  },
  fb: {
    fr: 'fb/pdf/fr/ch04-bar.pdf',
    en: 'fb/pdf/en/ch04-bar.pdf',
  },
  spa: {
    fr: 'spa/pdf/fr/ch04-carte-soins.pdf',
    en: 'spa/pdf/en/ch04-treatment-menu.pdf',
  },
} as const

export async function POST(request: Request) {
  let payload: { email?: unknown; locale?: unknown; product?: unknown }
  try {
    payload = await request.json()
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 })
  }

  const email = typeof payload.email === 'string' ? payload.email.trim() : ''
  const locale = payload.locale === 'en' ? 'en' : payload.locale === 'fr' ? 'fr' : null
  const product = typeof payload.product === 'string' && Object.hasOwn(PDF_OBJECTS, payload.product)
    ? payload.product as keyof typeof PDF_OBJECTS
    : 'fo'
  if (!locale || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'A valid email address and language are required' }, { status: 400 })
  }

  try {
    const supabase = getSupabaseAdmin()
    const { data: pdfFile, error: storageError } = await supabase.storage
      .from('Playbook')
      .download(PDF_OBJECTS[product][locale])
    if (storageError || !pdfFile) throw storageError ?? new Error('Chapter PDF is unavailable')

    const { error: leadError } = await supabase
      .from('leads')
      .insert({ email: normalizeLeadEmail(email), department: product, locale })
    if (leadError) throw leadError

    const filenames = {
      fo: { fr: 'LuxOps-Chapitre-04-Communication-Client-2027.pdf', en: 'LuxOps-Chapter-04-Guest-Communication-2027.pdf' },
      hsk: { fr: 'LuxOps-Chapitre-04-Housekeeping-2027.pdf', en: 'LuxOps-Chapter-04-Housekeeping-2027.pdf' },
      fb: { fr: 'LuxOps-Chapitre-04-Bar-Boissons-2027.pdf', en: 'LuxOps-Chapter-04-Bar-Beverage-2027.pdf' },
      spa: { fr: 'LuxOps-Chapitre-04-Carte-de-Soins-2027.pdf', en: 'LuxOps-Chapter-04-Treatment-Menu-2027.pdf' },
    }
    const filename = filenames[product][locale]

    return new Response(new Uint8Array(await pdfFile.arrayBuffer()), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'no-store',
      },
    })
  } catch {
    return Response.json({ error: 'Chapter PDF is unavailable' }, { status: 404 })
  }
}
