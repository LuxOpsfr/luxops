import { Resend } from 'resend'
import { DOWNLOADS, ALL_PLAYBOOK_PRICE_IDS, type PlaybookDownload } from './downloads'

const resend = new Resend(process.env.RESEND_API_KEY)

interface SendPlaybookEmailParams {
  to: string
  name: string
  priceIds: string[]
  locale?: string
}

function getDirectDownloadUrl(driveUrl: string): string {
  // Convert Google Drive view link to direct download link
  const match = driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)/)
  if (match) {
    return `https://drive.google.com/uc?export=download&id=${match[1]}`
  }
  return driveUrl
}

function buildEmailHtml(
  name: string,
  items: { download: PlaybookDownload; priceId: string }[],
  isBundle: boolean,
  lang: 'en' | 'fr'
): string {
  const isEn = lang === 'en'

  const greeting = isEn ? `Hi ${name},` : `Bonjour ${name},`
  const thankYou = isEn
    ? 'Thank you for your purchase! Your playbook(s) are ready to download below.'
    : 'Merci pour votre achat ! Vos playbooks sont disponibles en téléchargement ci-dessous.'
  const downloadLabel = isEn ? 'Download' : 'Télécharger'
  const pdfLabel = isEn ? 'PDF Version' : 'Version PDF'
  const pptLabel = isEn ? 'PowerPoint (editable)' : 'PowerPoint (modifiable)'
  const footerNote = isEn
    ? 'Links are valid for Google Drive. If you have any issues, reply to this email.'
    : 'Les liens sont valides sur Google Drive. En cas de problème, répondez à cet email.'
  const closing = isEn
    ? 'Best regards,<br/>The LuxOps Team'
    : 'Cordialement,<br/>L\'équipe LuxOps'

  const itemsHtml = items
    .map(({ download }) => {
      const title = isEn ? download.titleEn : download.titleFr
      const pdfUrl = isEn ? download.pdfEn : download.pdfFr
      const pptUrl = isEn ? download.pptEn : download.pptFr

      return `
        <div style="background:#f9f9f9;border-radius:12px;padding:20px;margin-bottom:16px;">
          <h3 style="margin:0 0 14px;font-size:16px;font-weight:700;color:#111111;">${title}</h3>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:0 8px 8px 0;width:50%;">
                <a href="${pdfUrl}"
                   style="display:block;text-align:center;background:#111111;color:#ffffff;text-decoration:none;padding:12px 16px;border-radius:8px;font-size:13px;font-weight:600;">
                  📄 ${downloadLabel} ${pdfLabel}
                </a>
              </td>
              <td style="padding:0 0 8px 8px;width:50%;">
                <a href="${pptUrl}"
                   style="display:block;text-align:center;background:#ffffff;color:#111111;text-decoration:none;padding:12px 16px;border-radius:8px;font-size:13px;font-weight:600;border:1.5px solid #111111;">
                  📊 ${downloadLabel} ${pptLabel}
                </a>
              </td>
            </tr>
          </table>
        </div>
      `
    })
    .join('')

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body style="margin:0;padding:0;background:#f4f4f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 20px;">
        <tr>
          <td align="center">
            <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">

              <!-- Header -->
              <tr>
                <td style="background:#111111;padding:28px 32px;text-align:center;">
                  <span style="color:#ffffff;font-size:22px;font-weight:800;letter-spacing:3px;">LuxOps</span>
                  <p style="color:#888888;font-size:11px;margin:6px 0 0;letter-spacing:2px;text-transform:uppercase;">
                    ${isEn ? 'Operational Excellence' : 'Excellence Opérationnelle'}
                  </p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:32px;">
                  <p style="font-size:16px;color:#111111;margin:0 0 8px;font-weight:600;">${greeting}</p>
                  <p style="font-size:14px;color:#555555;margin:0 0 24px;line-height:1.6;">${thankYou}</p>

                  ${itemsHtml}

                  <p style="font-size:12px;color:#999999;margin:24px 0 0;line-height:1.6;">${footerNote}</p>
                  <p style="font-size:14px;color:#333333;margin:24px 0 0;line-height:1.6;">${closing}</p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background:#f9f9f9;padding:20px 32px;border-top:1px solid #eeeeee;text-align:center;">
                  <p style="font-size:11px;color:#aaaaaa;margin:0;">
                    © 2026 LuxOps · <a href="https://www.luxops.fr" style="color:#aaaaaa;">luxops.fr</a>
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `
}

export async function sendPlaybookEmail({
  to,
  name,
  priceIds,
  locale = 'en',
}: SendPlaybookEmailParams) {
  const lang = locale === 'fr' ? 'fr' : 'en'
  const isEn = lang === 'en'

  // Resolve items — bundle expands to all 4 playbooks
  const resolvedPriceIds = priceIds.includes('price_1TBZB5DVLJTOFkjUwmgvTPRW')
    ? ALL_PLAYBOOK_PRICE_IDS
    : priceIds

  const isBundle = priceIds.includes('price_1TBZB5DVLJTOFkjUwmgvTPRW')

  const items = resolvedPriceIds
    .map(id => ({ download: DOWNLOADS[id], priceId: id }))
    .filter(item => item.download && item.download.pdfEn !== 'BUNDLE')

  if (items.length === 0) return

  const subject = isEn
    ? `Your LuxOps Playbook${items.length > 1 ? 's are' : ' is'} ready to download`
    : `Votre${items.length > 1 ? 's' : ''} Playbook${items.length > 1 ? 's LuxOps sont' : ' LuxOps est'} prêt${items.length > 1 ? 's' : ''} au téléchargement`

  const html = buildEmailHtml(name, items, isBundle, lang)

  await resend.emails.send({
    from: 'LuxOps <delivery@luxops.fr>',
    to,
    subject,
    html,
  })
}
