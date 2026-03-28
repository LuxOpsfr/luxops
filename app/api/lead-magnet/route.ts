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

const DEPT_LABELS: Record<string, { en: string; fr: string }> = {
  fo: { en: 'Front Office', fr: 'Front Office' },
  hsk: { en: 'Housekeeping', fr: 'Housekeeping' },
  fb: { en: 'Food & Beverage', fr: 'Food & Beverage' },
  spa: { en: 'Spa & Wellness', fr: 'Spa & Wellness' },
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, department, locale } = body

    if (!email || !department) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const dept = DEPT_LABELS[department]
    if (!dept) {
      return NextResponse.json({ error: 'Invalid department' }, { status: 400 })
    }

    await transporter.sendMail({
      from: `"LuxOps" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `Nouveau lead magnet : ${dept.fr} (${(locale as string)?.toUpperCase()})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #003d9b;">Nouveau téléchargement gratuit — LuxOps</h2>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Département :</strong> ${dept.fr} / ${dept.en}</p>
          <p><strong>Langue de la page :</strong> ${(locale as string)?.toUpperCase()}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[LuxOps Lead Magnet Error]', error)
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
