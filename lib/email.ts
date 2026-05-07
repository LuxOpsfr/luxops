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
  'price_1TUONHDVLJTOFkjUjE391FrX': { en: 'Front Office Starter Pack', fr: 'Starter Pack Front Office' },
  'price_1TUONXDVLJTOFkjUYvR8PUiS': { en: 'Housekeeping Inspection Kit', fr: 'Kit Inspection Housekeeping' },
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

  const playbooksHtml = playbookNames
    .map(n => `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #e8edf5;">
          <span style="font-size:13px;color:#0a1d2e;font-weight:600;letter-spacing:0.2px;">${n}</span>
        </td>
      </tr>`)
    .join('')

  const greeting     = isEn ? `Hi ${name},` : `Bonjour ${name},`
  const thankYou     = isEn
    ? 'Your purchase is confirmed. Access your LuxOps resources anytime from your personal portal.'
    : 'Votre achat est confirmé. Accédez à vos ressources LuxOps à tout moment depuis votre espace personnel.'
  const purchasedLabel = isEn ? 'Order summary' : 'Récapitulatif de commande'
  const step1Title   = isEn ? 'Create your account' : 'Créez votre compte'
  const step1Body    = isEn
    ? `Go to <a href="${registerUrl}" style="color:#003d9b;font-weight:600;text-decoration:none;">luxops.fr/portal/register</a> and sign up with the email used at checkout: <strong style="color:#0a1d2e;">${recipientEmail}</strong>`
    : `Rendez-vous sur <a href="${registerUrl}" style="color:#003d9b;font-weight:600;text-decoration:none;">luxops.fr/portal/register</a> et créez votre compte avec l'adresse utilisée lors du paiement : <strong style="color:#0a1d2e;">${recipientEmail}</strong>`
  const step2Title   = isEn ? 'Access your playbooks' : 'Accédez à vos playbooks'
  const step2Body    = isEn
    ? 'Your purchases will appear directly in your dashboard, ready to download in PDF and PPTX format at any time.'
    : 'Vos achats apparaissent directement dans votre tableau de bord, téléchargeables en PDF et PPTX à tout moment.'
  const ctaLabel     = isEn ? 'Create my account' : 'Créer mon compte'
  const alreadyHave  = isEn
    ? `Already have an account? <a href="${loginUrl}" style="color:#003d9b;font-weight:600;text-decoration:none;">Sign in</a>`
    : `Vous avez déjà un compte ? <a href="${loginUrl}" style="color:#003d9b;font-weight:600;text-decoration:none;">Se connecter</a>`
  const footerNote   = isEn
    ? 'Any questions? Reply to this email.'
    : 'Une question ? Répondez à cet email.'
  const closing      = isEn ? 'The LuxOps Team' : "L'équipe LuxOps"

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
</head>
<body style="margin:0;padding:0;background:#f0f2f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f2f8;padding:48px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;">

          <!-- Header -->
          <tr>
            <td style="background:#0a1d2e;padding:32px 40px;text-align:center;border-radius:4px 4px 0 0;">
              <p style="margin:0;color:#ffffff;font-size:24px;font-weight:800;letter-spacing:4px;text-transform:uppercase;">LuxOps</p>
              <p style="margin:8px 0 0;color:#4f6074;font-size:10px;letter-spacing:3px;text-transform:uppercase;">${isEn ? 'Operational Excellence' : 'Excellence Opérationnelle'}</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:40px;">

              <p style="margin:0 0 4px;font-size:20px;font-weight:700;color:#0a1d2e;letter-spacing:-0.3px;">${greeting}</p>
              <p style="margin:12px 0 32px;font-size:14px;color:#4f6074;line-height:1.7;">${thankYou}</p>

              <!-- Order summary -->
              <p style="margin:0 0 12px;font-size:11px;font-weight:700;color:#003d9b;letter-spacing:2px;text-transform:uppercase;">${purchasedLabel}</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;border-top:1px solid #e8edf5;">
                ${playbooksHtml}
              </table>

              <!-- Divider -->
              <div style="height:1px;background:linear-gradient(90deg,#003d9b22,#003d9b55,#003d9b22);margin-bottom:32px;"></div>

              <!-- Steps -->
              <p style="margin:0 0 20px;font-size:11px;font-weight:700;color:#003d9b;letter-spacing:2px;text-transform:uppercase;">${isEn ? 'How to access your content' : 'Comment accéder à votre contenu'}</p>

              <!-- Step 1 -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td style="vertical-align:top;padding-right:16px;width:36px;">
                    <div style="width:32px;height:32px;background:#eef4ff;border-radius:50%;text-align:center;line-height:32px;font-size:13px;font-weight:800;color:#003d9b;">1</div>
                  </td>
                  <td style="vertical-align:top;padding:4px 0 0;">
                    <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#0a1d2e;">${step1Title}</p>
                    <p style="margin:0;font-size:13px;color:#4f6074;line-height:1.6;">${step1Body}</p>
                  </td>
                </tr>
              </table>

              <!-- Step 2 -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td style="vertical-align:top;padding-right:16px;width:36px;">
                    <div style="width:32px;height:32px;background:#eef4ff;border-radius:50%;text-align:center;line-height:32px;font-size:13px;font-weight:800;color:#003d9b;">2</div>
                  </td>
                  <td style="vertical-align:top;padding:4px 0 0;">
                    <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#0a1d2e;">${step2Title}</p>
                    <p style="margin:0;font-size:13px;color:#4f6074;line-height:1.6;">${step2Body}</p>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td align="center">
                    <a href="${registerUrl}"
                       style="display:inline-block;background:linear-gradient(135deg,#003d9b,#0052cc);color:#ffffff;text-decoration:none;padding:15px 40px;border-radius:4px;font-size:14px;font-weight:700;letter-spacing:0.5px;">
                      ${ctaLabel}
                    </a>
                  </td>
                </tr>
              </table>

              <p style="text-align:center;font-size:12px;color:#4f6074;margin:0 0 32px;">${alreadyHave}</p>

              <!-- Divider -->
              <div style="height:1px;background:#e8edf5;margin-bottom:24px;"></div>

              <p style="font-size:12px;color:#4f6074;margin:0 0 4px;">${footerNote}</p>
              <p style="font-size:13px;color:#0a1d2e;font-weight:600;margin:0;">${closing}</p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0a1d2e;padding:20px 40px;text-align:center;border-radius:0 0 4px 4px;">
              <p style="margin:0;font-size:11px;color:#4f6074;letter-spacing:1px;">
                &copy; 2026 LuxOps &nbsp;&middot;&nbsp;
                <a href="https://www.luxops.fr" style="color:#4f6074;text-decoration:none;">luxops.fr</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
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
    ? `Your LuxOps file${count > 1 ? 's are' : ' is'} ready`
    : `Votre${count > 1 ? 's' : ''} fichier${count > 1 ? 's LuxOps sont' : ' LuxOps est'} disponible${count > 1 ? 's' : ''}`

  const html = buildEmailHtml(name, playbookNames, lang, to)

  await resend.emails.send({
    from: 'LuxOps <delivery@luxops.fr>',
    to,
    subject,
    html,
  })
}
