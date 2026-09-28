import { NextRequest, NextResponse } from 'next/server'
import { getPostHogClient } from '@/lib/posthog-server'
import { getResendClient } from '@/lib/resend'
import { getSupabaseAdmin } from '@/lib/supabase-admin'
import { normalizeLeadEmail, normalizeLeadLocale, sendFreeChapterWelcomeEmail } from '@/lib/lead-email'

const DEPT_LABELS: Record<string, { en: string; fr: string }> = {
  fo: { en: 'Front Office', fr: 'Front Office' },
  hsk: { en: 'Housekeeping', fr: 'Housekeeping' },
  fb: { en: 'Food & Beverage', fr: 'Food & Beverage' },
  spa: { en: 'Spa & Wellness', fr: 'Spa & Wellness' },
}

// Les téléchargements antérieurs au lancement de l'email de bienvenue ne
// signifient pas que cet email a déjà été envoyé.
const WELCOME_EMAIL_TRACKING_START = '2026-09-28T15:05:00.000Z'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, department, locale, currentUrl, pathname, posthogDistinctId, posthogSessionId } = body

    if (typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email) || !department) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const dept = DEPT_LABELS[department]
    if (!dept) {
      return NextResponse.json({ error: 'Invalid department' }, { status: 400 })
    }

    const normalizedEmail = normalizeLeadEmail(email)
    const normalizedLocale = normalizeLeadLocale(locale)
    const supabase = getSupabaseAdmin()

    // Chaque téléchargement reste enregistré, mais le premier sert de repère
    // pour ne jamais envoyer plusieurs fois l'email de bienvenue.
    const { data: previousLeads, error: lookupError } = await supabase
      .from('leads')
      .select('email')
      .ilike('email', normalizedEmail)
      .gte('created_at', WELCOME_EMAIL_TRACKING_START)
      .limit(1)

    if (lookupError) {
      console.error('[LuxOps Lead Lookup Error]', lookupError)
    }

    const isFirstDownload = !lookupError && (previousLeads?.length ?? 0) === 0

    // 1. Sauvegarde Supabase - priorité absolue
    const { error: insertError } = await supabase
      .from('leads')
      .insert({ email: normalizedEmail, department, locale: normalizedLocale })

    if (insertError) {
      throw insertError
    }

    // 2. Tracking serveur PostHog - non-bloquant
    try {
      const posthog = getPostHogClient()
      if (posthog) {
        posthog.capture({
          distinctId: posthogDistinctId || normalizedEmail,
          event: 'lead_magnet_submitted',
          properties: {
            email: normalizedEmail,
            department,
            department_label: dept.en,
            locale: normalizedLocale,
            current_url: currentUrl,
            pathname,
            posthog_session_id: posthogSessionId,
            source: 'server',
            $set: {
              email: normalizedEmail,
              lead_email: normalizedEmail,
            },
          },
        })
        await posthog.flush()
      }
    } catch (posthogError) {
      console.error('[LuxOps PostHog Error: lead sauvegardé en Supabase]', posthogError)
    }

    // 3. Notification Resend - non-bloquante
    try {
      await getResendClient().emails.send({
        from: 'LuxOps <delivery@luxops.fr>',
        to: 'contact@luxops.fr',
        replyTo: normalizedEmail,
        subject: `Nouveau lead : ${dept.fr} (${normalizedLocale.toUpperCase()}) : ${normalizedEmail}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px;">
            <h2 style="color: #003d9b;">Nouveau téléchargement gratuit : LuxOps</h2>
            <p><strong>Email :</strong> ${normalizedEmail}</p>
            <p><strong>Département :</strong> ${dept.fr} / ${dept.en}</p>
            <p><strong>Langue :</strong> ${normalizedLocale.toUpperCase()}</p>
            <p style="color:#888; font-size:12px;">Lead enregistré en base Supabase.</p>
          </div>
        `,
      })
    } catch (emailError) {
      console.error('[LuxOps Resend Error: lead sauvegardé en Supabase]', emailError)
    }

    // 4. Email client envoyé une seule fois, quel que soit le nombre d'extraits.
    if (isFirstDownload) {
      try {
        await sendFreeChapterWelcomeEmail({
          to: normalizedEmail,
          locale: normalizedLocale,
        })
      } catch (emailError) {
        console.error('[LuxOps Resend Error: email de bienvenue non envoyé]', emailError)
      }
    }

    // 5. Toujours retourner succès
    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('[LuxOps Lead Magnet Error]', error)
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
