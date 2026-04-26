import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface SendPlaybookEmailParams {
  to: string
  name: string
  priceIds: string[]
  locale?: string
}

const BUNDLE_PRICE_ID = 'price_1TBZB5DVLJTOFkjUwmgvTPRW'

const ALL_INDIVIDUAL_PRICE_IDS = [
  'price_1TBZ94DVLJTOFkjUsH59B7x7',
  'price_1TBZ9TDVLJTOFkjUwWnoKaGk',
  'price_1TBZ9iDVLJTOFkjU3Os9VLRc',
  'price_1TBZ9vDVLJTOFkjUT1FHhqUi',
]

const PLAYBOOK_NAMES: Record<string, { en: string; fr: string }> = {
  'price_1TBZ94DVLJTOFkjUsH59B7x7': { en: 'Front Office Playbook', fr: 'Playbook Front Office' },
  'price_1TBZ9TDVLJTOFkjUwWnoKaGk': { en: 'Housekeeping Playbook', fr: 'Playbook Housekeeping' },
  'price_1TBZ9iDVLJTOFkjU3Os9VLRc': { en: 'F&B Playbook', fr: 'Playbook F&B' },
  'price_1TBZ9vDVLJTOFkjUT1FHhqUi': { en: 'Spa & Wellness Playbook', fr: 'Playbook Spa & Wellness' },
  'price_1TBZB5DVLJTOFkjUwmgvTPRW': { en: 'Complete Bundle — 4 Playbooks', fr: 'Bundle Complet — 4 Playbooks' },
}

function buildEmailHtml(
  name: string,
  playbookNames: string[],
  lang: 'en' | 'fr',
  recipientEmail: string
): string {
  const isEn = lang === 'en'

  const registerUrl = `https://www.luxops.fr/${lang}/portal/register`
  const loginUrl = `https://www.luxops.fr/${lang}/portal`

  const greeting = isEn ? `Hi ${name},` : `Bonjour ${name},`

  const thankYou = isEn
    ? 'Thank you for your purchase. Your playbook(s) are available in your personal portal, ready to download at any time.'
    : "Merci pour votre achat. Vos playbooks sont disponibles dans votre espace personnel, téléchargeables à tout moment."

  const purchasedLabel = isEn ? 'Your purchase includes:' : 'Votre achat comprend :'

  const step1Title = isEn ? 'Step 1 — Create your account' : 'Étape 1 — Créez votre compte'
  const step1Body = isEn
    ? `Visit <a href="${registerUrl}" style="color:#1A2E44;font-weight:600;">luxops.fr/portal/register</a> and sign up using the email address you used for payment: <strong>${recipientEmail}</strong>.`
    : `Rendez-vous sur <a href="${registerUrl}" style="color:#1A2E44;font-weight:600;">luxops.fr/portal/register</a> et créez votre compte avec l'adresse email utilisée lors du paiement : <strong>${recipientEmail}</strong>.`

  const step2Title = isEn ? 'Step 2 — Download your chapters' : 'Étape 2 — Téléchargez vos chapitres'
  const step2Body = isEn
    ? 'Once logged in, your playbooks appear in your dashboard. Download each chapter individually, in PDF format, whenever you need.'
    : 'Une fois connecté(e), vos playbooks apparaissent dans votre tableau de bord. Téléchargez chaque chapitre en PDF, à votre convenance.'

  const ctaLabel = isEn ? 'Create my account' : 'Créer mon compte'

  const alreadyCustomer = isEn
    ? `Already have an account? <a href="${loginUrl}" style="color:#1A2E44;font-weight:600;">Log in here</a>.`
    : `Vous avez déjà un compte ? <a href="${loginUrl}" style="color:#1A2E44;font-weight:600;">Connectez-vous ici</a>.`

  const footerNote = isEn
    ? 'For any questions or issues, simply reply to this email.'
    : 'Pour toute question ou problème, répondez simplement à cet email.'

  const closing = isEn
    ? 'Best regards,<br/>The LuxOps Team'
    : "Cordialement,<br/>L'équipe LuxOps"

  const playbooksHtml = playbookNames
    .map(n => `<li style="padding:4px 0;font-size:14px;color:#333333;">&#8226; ${n}</li>`)
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

                  <!-- Purchased items -->
                  <div style="background:#f9f9f9;border-radius:12px;padding:20px;margin-bottom:24px;">
                    <p style="font-size:13px;font-weight:600;color:#111111;margin:0 0 10px;">${purchasedLabel}</p>
                    <ul style="margin:0;padding:0;list-style:none;">
                      ${playbooksHtml}
                    </ul>
                  </div>

                  <!-- Steps -->
                  <div style="margin-bottom:24px;">

                    <!-- Step 1 -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;border:1.5px solid #e8e8e8;border-radius:12px;">
                      <tr>
                        <td style="padding:18px;vertical-align:top;">
                          <table cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="vertical-align:top;padding-right:14px;">
                                <div style="width:32px;height:32px;background:#111111;border-radius:50%;color:#ffffff;font-size:14px;font-weight:700;text-align:center;line-height:32px;">1</div>
                              </td>
                              <td style="vertical-align:top;">
                                <p style="font-size:14px;font-weight:700;color:#111111;margin:0 0 6px;">${step1Title}</p>
                                <p style="font-size:13px;color:#555555;margin:0;line-height:1.6;">${step1Body}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <!-- Step 2 -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="border:1.5px solid #e8e8e8;border-radius:12px;">
                      <tr>
                        <td style="padding:18px;vertical-align:top;">
                          <table cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="vertical-align:top;padding-right:14px;">
                                <div style="width:32px;height:32px;background:#111111;border-radius:50%;color:#ffffff;font-size:14px;font-weight:700;text-align:center;line-height:32px;">2</div>
                              </td>
                              <td style="vertical-align:top;">
                                <p style="font-size:14px;font-weight:700;color:#111111;margin:0 0 6px;">${step2Title}</p>
                                <p style="font-size:13px;color:#555555;margin:0;line-height:1.6;">${step2Body}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                  </div>

                  <!-- CTA -->
                  <div style="text-align:center;margin-bottom:16px;">
                    <a href="${registerUrl}"
                       style="display:inline-block;background:#111111;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:8px;font-size:14px;font-weight:700;letter-spacing:0.3px;">
                      ${ctaLabel}
                    </a>
                  </div>

                  <!-- Already a customer -->
                  <p style="font-size:13px;color:#777777;text-align:center;margin:0 0 28px;line-height:1.6;">${alreadyCustomer}</p>

                  <p style="font-size:12px;color:#999999;margin:0 0 20px;line-height:1.6;">${footerNote}</p>
                  <p style="font-size:14px;color:#333333;margin:0;line-height:1.6;">${closing}</p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background:#f9f9f9;padding:20px 32px;border-top:1px solid #eeeeee;text-align:center;">
                  <p style="font-size:11px;color:#aaaaaa;margin:0;">
                    &copy; 2026 LuxOps &middot; <a href="https://www.luxops.fr" style="color:#aaaaaa;">luxops.fr</a>
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

  const isBundle = priceIds.includes(BUNDLE_PRICE_ID)

  // Bundle: show all 4 individual names (clearer for the customer)
  const resolvedPriceIds = isBundle ? ALL_INDIVIDUAL_PRICE_IDS : priceIds

  const playbookNames = resolvedPriceIds
    .map(id => (isEn ? PLAYBOOK_NAMES[id]?.en : PLAYBOOK_NAMES[id]?.fr))
    .filter((n): n is string => Boolean(n))

  if (playbookNames.length === 0) return

  const count = playbookNames.length
  const subject = isEn
    ? `Your LuxOps Playbook${count > 1 ? 's are' : ' is'} ready`
    : `Votre${count > 1 ? 's' : ''} Playbook${count > 1 ? 's LuxOps sont' : ' LuxOps est'} disponible${count > 1 ? 's' : ''}`

  const html = buildEmailHtml(name, playbookNames, lang, to)

  await resend.emails.send({
    from: 'LuxOps <delivery@luxops.fr>',
    to,
    subject,
    html,
  })
}
