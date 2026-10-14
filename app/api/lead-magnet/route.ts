import { NextRequest, NextResponse } from 'next/server'
import { getPostHogClient } from '@/lib/posthog-server'
import { getResendClient } from '@/lib/resend'
import { getSupabaseAdmin } from '@/lib/supabase-admin'
import { FREE_CHAPTER_OBJECTS, normalizeLeadEmail, normalizeLeadLocale, sendFreeChapterWelcomeEmail } from '@/lib/lead-email'

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
    const { email, department, locale, currentUrl, pathname, posthogDistinctId, posthogSessionId, requestChapterEmail, requestId } = body

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

    // Chaque téléchargement reste enregistré. Le premier déclenche l'email
    // historique de bienvenue ; le nouveau formulaire modal demande un envoi
    // explicite à chaque soumission.
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

    // Resolve both language versions from the current public Supabase bucket
    // before recording a lead. The immediate download and follow-up email then
    // use the same current 2027 sample files.
    const shouldSendWelcomeEmail = isFirstDownload || requestChapterEmail === true
    let chapterUrls: { en: string; fr: string }
    try {
      const objectPaths = FREE_CHAPTER_OBJECTS[department as keyof typeof FREE_CHAPTER_OBJECTS]
      const resolved = {} as { en: string; fr: string }
      for (const language of ['en', 'fr'] as const) {
        const objectPath = objectPaths[language]
        const folderPath = objectPath.slice(0, objectPath.lastIndexOf('/'))
        const fileName = objectPath.slice(objectPath.lastIndexOf('/') + 1)
        const { data: files, error: storageError } = await supabase.storage
          .from('Playbook')
          .list(folderPath, { search: fileName, limit: 100 })
        if (storageError || !files?.some((file) => file.name === fileName)) {
          throw storageError ?? new Error(`Missing sample file: ${objectPath}`)
        }
        resolved[language] = supabase.storage.from('Playbook').getPublicUrl(objectPath).data.publicUrl
      }
      chapterUrls = resolved
    } catch (storageError) {
      console.error('[LuxOps Lead Magnet Error: sample unavailable in Supabase]', storageError)
      return NextResponse.json({ error: 'Sample unavailable' }, { status: 503 })
    }

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
    let welcomeEmailSent = false
    if (shouldSendWelcomeEmail && chapterUrls) {
      try {
        await sendFreeChapterWelcomeEmail({
          to: normalizedEmail,
          locale: normalizedLocale,
          department: department as 'fo' | 'hsk' | 'fb' | 'spa',
          requestId: requestChapterEmail === true && typeof requestId === 'string' ? requestId : undefined,
          chapterUrls,
        })
        welcomeEmailSent = true
      } catch (emailError) {
        console.error('[LuxOps Resend Error: email de bienvenue non envoyé]', emailError)
        if (requestChapterEmail === true) {
          return NextResponse.json({ error: 'Email delivery failed' }, { status: 502 })
        }
      }
    }

    // 5. Toujours retourner succès
    return NextResponse.json({ success: true, welcomeEmailSent, downloadUrls: chapterUrls })

  } catch (error) {
    console.error('[LuxOps Lead Magnet Error]', error)
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
