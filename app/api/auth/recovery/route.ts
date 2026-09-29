import { NextRequest, NextResponse } from 'next/server'
import { sendPasswordRecoveryEmail } from '@/lib/auth-email'
import { normalizeLeadEmail, normalizeLeadLocale } from '@/lib/lead-email'
import { getSupabaseAdmin } from '@/lib/supabase-admin'

const SITE_URL = 'https://www.luxops.fr'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const email = typeof body.email === 'string' ? normalizeLeadEmail(body.email) : ''
    const locale = normalizeLeadLocale(body.locale)

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ success: true })
    }

    const { data, error } = await getSupabaseAdmin().auth.admin.generateLink({
      type: 'recovery',
      email,
      options: {
        redirectTo: `${SITE_URL}/${locale}/portal/update-password`,
      },
    })

    if (error || !data.properties.action_link) {
      console.error('[LuxOps Password Recovery Link Error]', error)
      return NextResponse.json({ success: true })
    }

    await sendPasswordRecoveryEmail({
      to: email,
      locale,
      actionLink: data.properties.action_link,
    })
  } catch (error) {
    // A generic success response prevents account enumeration.
    console.error('[LuxOps Password Recovery Error]', error)
  }

  return NextResponse.json({ success: true })
}
