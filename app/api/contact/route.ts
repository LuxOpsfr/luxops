import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Log submission (in production: integrate Resend / SendGrid / Nodemailer)
    console.log('[LUXOPS Contact]', { name, email, company, subject, message })

    // TODO: Replace with actual email service:
    // await resend.emails.send({
    //   from: 'LUXOPS <noreply@luxops.com>',
    //   to: 'contact@luxops.com',
    //   subject: `New inquiry: ${subject}`,
    //   html: `<p>From: ${name} (${email})</p><p>${message}</p>`,
    // })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
