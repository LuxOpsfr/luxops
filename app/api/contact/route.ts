import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'ssl0.ovh.net',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await transporter.sendMail({
      from: `"LuxOps" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
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
