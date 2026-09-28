import { NextRequest, NextResponse } from 'next/server'
import { getPostHogClient } from '@/lib/posthog-server'
import { getResendClient } from '@/lib/resend'
import { sendContactAcknowledgementEmail } from '@/lib/contact-email'
import { escapeEmailHtml } from '@/lib/email-brand'
import { normalizeLeadEmail, normalizeLeadLocale } from '@/lib/lead-email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, subject, message, need_type, locale } = body

    if (!name || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email) || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const normalizedEmail = normalizeLeadEmail(email)
    const normalizedLocale = normalizeLeadLocale(locale)
    const safeName = escapeEmailHtml(String(name))
    const safeEmail = escapeEmailHtml(normalizedEmail)
    const safeCompany = company ? escapeEmailHtml(String(company)) : ''
    const safeSubject = escapeEmailHtml(String(subject))
    const safeMessage = escapeEmailHtml(String(message))

    await getResendClient().emails.send({
      from: 'LuxOps <contact@luxops.fr>',
      to: 'contact@luxops.fr',
      replyTo: normalizedEmail,
      subject: `Nouveau message : ${String(subject)}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #111111;">Nouveau message via luxops.fr</h2>
          <p><strong>Nom :</strong> ${safeName}</p>
          <p><strong>Email :</strong> ${safeEmail}</p>
          ${safeCompany ? `<p><strong>Établissement :</strong> ${safeCompany}</p>` : ''}
          <p><strong>Sujet :</strong> ${safeSubject}</p>
          <hr style="border: 1px solid #eee;" />
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-wrap;">${safeMessage}</p>
        </div>
      `,
    })

    try {
      await sendContactAcknowledgementEmail({
        to: normalizedEmail,
        locale: normalizedLocale,
        kind: need_type === 'training' ? 'training' : 'contact',
        name: String(name),
        company: company ? String(company) : undefined,
        subject: String(subject),
      })
    } catch (acknowledgementError) {
      console.error('[LuxOps Contact Acknowledgement Error]', acknowledgementError)
    }

    try {
      const posthog = getPostHogClient()
      if (posthog) {
        posthog.capture({
          distinctId: normalizedEmail,
          event: 'contact_form_submitted',
          properties: {
            name,
            email: normalizedEmail,
            company,
            subject,
            need_type,
            source: 'server',
            $set: {
              email: normalizedEmail,
              name,
              company,
            },
          },
        })
        await posthog.flush()
      }
    } catch (posthogError) {
      console.error('[LuxOps PostHog Error: contact envoyé]', posthogError)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[LuxOps Contact Error]', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
