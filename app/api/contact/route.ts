import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'LuxOps <contact@luxops.fr>',
      to: 'contact@luxops.fr',
      replyTo: email,
      subject: `Nouveau message : ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #111111;">Nouveau message via luxops.fr</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          ${company ? `<p><strong>Établissement :</strong> ${company}</p>` : ''}
          <p><strong>Sujet :</strong> ${subject}</p>
          <hr style="border: 1px solid #eee;" />
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[LuxOps Contact Error]', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
