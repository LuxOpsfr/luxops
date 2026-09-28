import { getResendClient } from './resend'
import { buildLuxOpsEmail, emailButtonStyle, escapeEmailHtml } from './email-brand'

interface SendPlaybookEmailParams {
  to: string
  name: string
  priceIds: string[]
  locale?: string
}

type EmailLocale = 'en' | 'fr' | 'es'

const SITE_URL = 'https://www.luxops.fr'
const PURCHASE_IMAGE_URL = `${SITE_URL}/images/email/purchase-banner.jpg`

const BUNDLE_PRICE_IDS = new Set([
  'price_1TZRWjDVLJTOFkjUjIKWDnyi',
  'price_1TBZB5DVLJTOFkjUwmgvTPRW',
])

const ALL_INDIVIDUAL_PRICE_IDS = [
  'price_1TZRZZDVLJTOFkjUd3B9x44e',
  'price_1TBZ9TDVLJTOFkjUwWnoKaGk',
  'price_1TZRYvDVLJTOFkjUNuiqbADG',
  'price_1TZRY9DVLJTOFkjUfkYQJAsW',
]

const PLAYBOOK_NAMES: Record<string, Record<EmailLocale, string>> = {
  'price_1TUONHDVLJTOFkjUjE391FrX': { en: 'Front Office Starter Pack', fr: 'Starter Pack Front Office', es: 'Starter Pack Front Office' },
  'price_1TUONXDVLJTOFkjUYvR8PUiS': { en: 'Housekeeping Inspection Starter Pack', fr: 'Starter Pack Inspection Housekeeping', es: 'Starter Pack Inspección Housekeeping' },
  'price_1TVugvDVLJTOFkjUXI0cngur': { en: 'F&B Service Starter Pack', fr: 'Starter Pack F&B', es: 'Starter Pack F&B' },
  'price_1TZRZZDVLJTOFkjUd3B9x44e': { en: 'Front Office SOP Manual', fr: 'Manuel SOP Front Office', es: 'Manual SOP Front Office' },
  'price_1TBZ94DVLJTOFkjUsH59B7x7': { en: 'Front Office SOP Manual', fr: 'Manuel SOP Front Office', es: 'Manual SOP Front Office' },
  'price_1TBZ9TDVLJTOFkjUwWnoKaGk': { en: 'Housekeeping SOP Manual', fr: 'Manuel SOP Housekeeping', es: 'Manual SOP Housekeeping' },
  'price_1TZRYvDVLJTOFkjUNuiqbADG': { en: 'F&B SOP Manual', fr: 'Manuel SOP F&B', es: 'Manual SOP F&B' },
  'price_1TBZ9iDVLJTOFkjU3Os9VLRc': { en: 'F&B SOP Manual', fr: 'Manuel SOP F&B', es: 'Manual SOP F&B' },
  'price_1TZRY9DVLJTOFkjUfkYQJAsW': { en: 'Spa & Wellness SOP Manual', fr: 'Manuel SOP Spa & Wellness', es: 'Manual SOP Spa & Wellness' },
  'price_1TBZ9vDVLJTOFkjUT1FHhqUi': { en: 'Spa & Wellness SOP Manual', fr: 'Manuel SOP Spa & Wellness', es: 'Manual SOP Spa & Wellness' },
  'price_1TZRWjDVLJTOFkjUjIKWDnyi': { en: 'Complete collection: 4 SOP manuals', fr: 'Collection complète : 4 manuels SOP', es: 'Colección completa: 4 manuales SOP' },
  'price_1TBZB5DVLJTOFkjUwmgvTPRW': { en: 'Complete collection: 4 SOP manuals', fr: 'Collection complète : 4 manuels SOP', es: 'Colección completa: 4 manuales SOP' },
}

const purchaseCopy = {
  en: {
    greeting: 'Hello', thankYou: 'Your purchase is confirmed. Access your LuxOps resources anytime from your personal portal.', purchasedLabel: 'Order summary', accessLabel: 'Access to your resources', accessTitle: 'Your documents remain available in your LuxOps portal', step1Title: 'Create your account', step1Body: 'Register with the email used at checkout:', step2Title: 'Access your resources', step2Body: 'Your purchases will appear directly in your dashboard, ready to download in PDF and PPTX format at any time.', ctaLabel: 'Access my LuxOps portal', alreadyHave: 'Already registered?', signIn: 'Sign in', footerNote: 'Any questions? Reply to this email.', closing: 'The LuxOps team', eyebrow: 'Order confirmed', title: 'Your LuxOps resources are ready', subjectOne: 'Your LuxOps file is ready', subjectMany: 'Your LuxOps files are ready',
  },
  fr: {
    greeting: 'Bonjour', thankYou: 'Votre achat est confirmé. Accédez à vos ressources LuxOps à tout moment depuis votre espace personnel.', purchasedLabel: 'Récapitulatif de commande', accessLabel: 'Accès à vos ressources', accessTitle: 'Vos documents restent disponibles dans votre espace LuxOps', step1Title: 'Créez votre compte', step1Body: "Inscrivez-vous avec l'adresse utilisée lors du paiement :", step2Title: 'Accédez à vos ressources', step2Body: 'Vos achats apparaissent directement dans votre tableau de bord, téléchargeables en PDF et PPTX à tout moment.', ctaLabel: 'Accéder à mon espace LuxOps', alreadyHave: 'Déjà inscrit ?', signIn: 'Se connecter', footerNote: 'Une question ? Répondez à cet email.', closing: "L'équipe LuxOps", eyebrow: 'Commande confirmée', title: 'Vos ressources LuxOps sont disponibles', subjectOne: 'Votre fichier LuxOps est disponible', subjectMany: 'Vos fichiers LuxOps sont disponibles',
  },
  es: {
    greeting: 'Hola', thankYou: 'Tu compra está confirmada. Puedes acceder a tus recursos LuxOps en cualquier momento desde tu espacio personal.', purchasedLabel: 'Resumen del pedido', accessLabel: 'Acceso a tus recursos', accessTitle: 'Tus documentos permanecen disponibles en tu espacio LuxOps', step1Title: 'Crea tu cuenta', step1Body: 'Regístrate con el email utilizado durante el pago:', step2Title: 'Accede a tus recursos', step2Body: 'Tus compras aparecerán directamente en tu panel, listas para descargar en PDF y PPTX en cualquier momento.', ctaLabel: 'Acceder a mi espacio LuxOps', alreadyHave: '¿Ya tienes una cuenta?', signIn: 'Iniciar sesión', footerNote: '¿Tienes alguna pregunta? Responde a este email.', closing: 'El equipo LuxOps', eyebrow: 'Pedido confirmado', title: 'Tus recursos LuxOps están disponibles', subjectOne: 'Tu archivo LuxOps está disponible', subjectMany: 'Tus archivos LuxOps están disponibles',
  },
} satisfies Record<EmailLocale, Record<string, string>>

export function buildPurchaseConfirmationEmail(name: string, productNames: string[], lang: EmailLocale, recipientEmail: string) {
  const t = purchaseCopy[lang]
  const registerUrl = `https://www.luxops.fr/${lang}/portal/register`
  const loginUrl = `https://www.luxops.fr/${lang}/portal`
  const productsHtml = productNames.map(productName => `
    <tr><td style="padding:12px 8px;border-bottom:1px solid #d8d0c3;color:#24362f;font-size:14px;font-weight:700;text-align:center;">${escapeEmailHtml(productName)}</td></tr>
  `).join('')

  return {
    subject: productNames.length > 1 ? t.subjectMany : t.subjectOne,
    html: buildLuxOpsEmail({
      locale: lang,
      alignment: 'center',
      heroImage: {
        src: PURCHASE_IMAGE_URL,
        alt: lang === 'fr' ? 'Manuels et outils opérationnels LuxOps' : lang === 'es' ? 'Manuales y herramientas operativas LuxOps' : 'LuxOps operational manuals and tools',
      },
      eyebrow: t.eyebrow,
      title: t.title,
      previewText: t.thankYou,
      content: `
        <div style="text-align:center;">
          <p style="margin:0 0 10px;color:#24362f;font-size:15px;line-height:1.7;">${t.greeting} ${escapeEmailHtml(name)},</p>
          <p style="max-width:500px;margin:0 auto 28px;color:#526158;font-size:15px;line-height:1.75;">${t.thankYou}</p>
        </div>
        <p style="margin:0 0 9px;color:#a58658;font-size:10px;line-height:1.4;font-weight:700;letter-spacing:1.5px;text-align:center;text-transform:uppercase;">${t.purchasedLabel}</p>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 30px;border-top:1px solid #d8d0c3;">${productsHtml}</table>

        <p style="margin:0 0 7px;color:#a58658;font-size:10px;font-weight:700;line-height:1.4;letter-spacing:1.5px;text-transform:uppercase;">${t.accessLabel}</p>
        <h2 style="margin:0 0 22px;color:#0f211a;font-family:Georgia,'Times New Roman',serif;font-size:23px;font-weight:400;line-height:1.25;">${t.accessTitle}</h2>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 30px;">
          <tr>
            <td width="44" valign="top"><div style="width:34px;height:34px;background:#0f211a;color:#ffffff;font-family:Georgia,'Times New Roman',serif;font-size:13px;font-weight:700;line-height:34px;text-align:center;">01</div></td>
            <td valign="top" style="padding-left:12px;"><p style="margin:0 0 4px;color:#0f211a;font-size:14px;font-weight:700;line-height:1.45;">${t.step1Title}</p><p style="margin:0;color:#526158;font-size:13px;line-height:1.65;">${t.step1Body} <strong style="color:#0f211a;">${escapeEmailHtml(recipientEmail)}</strong></p></td>
          </tr>
          <tr>
            <td width="44" valign="top" style="padding-top:19px;"><div style="width:34px;height:34px;background:#e7e0d5;color:#0f211a;font-family:Georgia,'Times New Roman',serif;font-size:13px;font-weight:700;line-height:34px;text-align:center;">02</div></td>
            <td valign="top" style="padding:19px 0 0 12px;"><p style="margin:0 0 4px;color:#0f211a;font-size:14px;font-weight:700;line-height:1.45;">${t.step2Title}</p><p style="margin:0;color:#526158;font-size:13px;line-height:1.65;">${t.step2Body}</p></td>
          </tr>
        </table>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 13px;"><tr><td align="center"><a href="${registerUrl}" style="${emailButtonStyle}">${t.ctaLabel}</a></td></tr></table>
        <p style="margin:0 0 30px;color:#687169;font-size:12px;line-height:1.6;text-align:center;">${t.alreadyHave} <a href="${loginUrl}" style="color:#24362f;font-weight:700;text-decoration:underline;">${t.signIn}</a></p>
        <p style="margin:0 0 4px;color:#687169;font-size:13px;line-height:1.65;text-align:center;">${t.footerNote}</p>
        <p style="margin:0;color:#24362f;font-size:13px;font-weight:700;text-align:center;">${t.closing}</p>
      `,
    }),
  }
}

export async function sendPlaybookEmail({ to, name, priceIds, locale = 'en' }: SendPlaybookEmailParams) {
  const lang: EmailLocale = locale === 'fr' || locale === 'es' ? locale : 'en'
  const resolvedPriceIds = priceIds.some(id => BUNDLE_PRICE_IDS.has(id)) ? ALL_INDIVIDUAL_PRICE_IDS : priceIds
  const productNames = resolvedPriceIds.map(id => PLAYBOOK_NAMES[id]?.[lang]).filter((productName): productName is string => Boolean(productName))

  if (productNames.length === 0) return

  const email = buildPurchaseConfirmationEmail(name, productNames, lang, to)
  await getResendClient().emails.send({
    from: 'LuxOps <delivery@luxops.fr>',
    to,
    replyTo: 'contact@luxops.fr',
    subject: email.subject,
    html: email.html,
  })
}
