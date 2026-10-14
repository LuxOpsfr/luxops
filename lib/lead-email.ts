import { createHash } from 'node:crypto'
import { buildLuxOpsEmail, emailButtonStyle } from './email-brand'
import { getResendClient } from './resend'

type LeadLocale = 'en' | 'fr' | 'es'
type LeadDepartment = 'fo' | 'hsk' | 'fb' | 'spa'

const SITE_URL = 'https://www.luxops.fr'
const RESOURCE_IMAGE_URL = `${SITE_URL}/images/email/resources-banner.jpg`
const MANUALS_IMAGE_URL = `${SITE_URL}/images/email/purchase-banner.jpg`
const TRAINING_IMAGE_URL = `${SITE_URL}/images/email/training-banner.jpg`

const departmentLabels: Record<LeadDepartment, string> = {
  fo: 'Front Office',
  hsk: 'Housekeeping',
  fb: 'Food & Beverage',
  spa: 'Spa & Wellness',
}

export const FREE_CHAPTER_OBJECTS: Record<LeadDepartment, { en: string; fr: string }> = {
  fo: { en: 'front-office/pdf/en/ch04-guest-communication.pdf', fr: 'front-office/pdf/fr/ch04-communication-client.pdf' },
  hsk: { en: 'housekeeping/pdf/en/ch04-public-areas.pdf', fr: 'housekeeping/pdf/fr/ch04-parties-communes.pdf' },
  fb: { en: 'fb/pdf/en/ch04-bar.pdf', fr: 'fb/pdf/fr/ch04-bar.pdf' },
  spa: { en: 'spa/pdf/en/ch04-treatment-menu.pdf', fr: 'spa/pdf/fr/ch04-carte-soins.pdf' },
}

const copy = {
  en: {
    subject: 'Your LuxOps sample is ready',
    preview: 'Your practical sample from the LuxOps hotel operations playbooks is ready.',
    eyebrow: 'Your complimentary sample',
    title: 'A practical look inside our SOP manuals',
    greeting: 'Hello,',
    intro: 'Thank you for requesting a LuxOps sample. It offers a practical look at the procedures and standards used in our hotel operations playbooks.',
    downloadTitle: 'Your selected sample',
    downloadLead: 'Your document is ready. Use the button below to open or save it.',
    downloadPrimary: 'Open the English sample',
    downloadSecondary: 'View the French version',
    offerTitle: 'To take the next step',
    manualsEyebrow: 'Complete operational reference',
    manuals: '<strong>LuxOps SOP Manuals</strong> bring together the complete procedures, standards and operational reference for each department.',
    trainingEyebrow: 'For managers and teams',
    training: '<strong>On-site or remote training</strong> helps managers and teams translate standards into consistent service habits.',
    primary: 'Explore the SOP manuals',
    secondary: 'Explore training',
    close: 'If you would like to discuss your property, reply directly to this email.',
  },
  fr: {
    subject: 'Votre extrait LuxOps est disponible',
    preview: 'Votre extrait opérationnel des playbooks hôteliers LuxOps est prêt.',
    eyebrow: 'Votre extrait offert',
    title: 'Un aperçu concret de nos manuels SOP',
    greeting: 'Bonjour,',
    intro: "Merci d'avoir demandé un extrait LuxOps. Il vous donne un aperçu concret des procédures et standards de nos playbooks hôteliers.",
    downloadTitle: 'Votre extrait sélectionné',
    downloadLead: 'Votre document est prêt. Utilisez le bouton ci-dessous pour l’ouvrir ou l’enregistrer.',
    downloadPrimary: 'Ouvrir l’extrait en français',
    downloadSecondary: 'Consulter la version anglaise',
    offerTitle: 'Pour aller plus loin',
    manualsEyebrow: 'Référence opérationnelle complète',
    manuals: '<strong>Les manuels SOP LuxOps</strong> réunissent les procédures, standards et repères opérationnels complets de chaque département.',
    trainingEyebrow: 'Pour les managers et les équipes',
    training: '<strong>Les formations sur site ou à distance</strong> aident les managers et les équipes à transformer les standards en habitudes de service durables.',
    primary: 'Découvrir les manuels SOP',
    secondary: 'Découvrir les formations',
    close: 'Pour échanger sur votre établissement, vous pouvez répondre directement à cet email.',
  },
  es: {
    subject: 'Tu muestra LuxOps está disponible',
    preview: 'Tu muestra práctica de los playbooks hoteleros LuxOps está lista.',
    eyebrow: 'Tu muestra gratuita',
    title: 'Una mirada práctica a nuestros manuales SOP',
    greeting: 'Hola,',
    intro: 'Gracias por solicitar una muestra de LuxOps. Te ofrece una visión práctica de los procedimientos y estándares de nuestros playbooks hoteleros.',
    downloadTitle: 'Tu muestra seleccionada',
    downloadLead: 'Tu documento está listo. Utiliza el botón siguiente para abrirlo o guardarlo.',
    downloadPrimary: 'Abrir la muestra en inglés',
    downloadSecondary: 'Consultar la versión francesa',
    offerTitle: 'Para dar el siguiente paso',
    manualsEyebrow: 'Referencia operativa completa',
    manuals: '<strong>Los manuales SOP LuxOps</strong> reúnen los procedimientos, estándares y referencias operativas completas de cada departamento.',
    trainingEyebrow: 'Para managers y equipos',
    training: '<strong>La formación presencial o a distancia</strong> ayuda a managers y equipos a convertir los estándares en hábitos de servicio consistentes.',
    primary: 'Descubrir los manuales SOP',
    secondary: 'Descubrir la formación',
    close: 'Si quieres hablar de tu establecimiento, puedes responder directamente a este email.',
  },
} satisfies Record<LeadLocale, Record<string, string>>

export function normalizeLeadLocale(locale?: string): LeadLocale {
  return locale === 'fr' || locale === 'es' ? locale : 'en'
}

export function normalizeLeadEmail(email: string) {
  return email.trim().toLowerCase()
}

export function leadWelcomeIdempotencyKey(email: string, requestId?: string) {
  const emailHash = createHash('sha256').update(`${normalizeLeadEmail(email)}:${requestId ?? 'welcome'}`).digest('hex').slice(0, 32)
  return `free-chapter-welcome-${emailHash}`
}

export function buildFreeChapterWelcomeEmail(
  locale: string | undefined,
  department: LeadDepartment,
  chapterUrls: { en: string; fr: string },
) {
  const lang = normalizeLeadLocale(locale)
  const t = copy[lang]
  const primaryUrl = lang === 'fr' ? chapterUrls.fr : chapterUrls.en
  const secondaryUrl = lang === 'fr' ? chapterUrls.en : chapterUrls.fr

  return {
    subject: t.subject,
    html: buildLuxOpsEmail({
      locale: lang,
      alignment: 'center',
      heroImage: {
        src: RESOURCE_IMAGE_URL,
        alt: lang === 'fr' ? 'Ressources opérationnelles LuxOps' : lang === 'es' ? 'Recursos operativos LuxOps' : 'LuxOps operational resources',
      },
      eyebrow: t.eyebrow,
      title: t.title,
      previewText: t.preview,
      content: `
        <div style="text-align:center;">
          <p style="margin:0 0 12px;color:#526158;font-size:15px;line-height:1.7;">${t.greeting}</p>
          <p style="max-width:500px;margin:0 auto 30px;color:#526158;font-size:15px;line-height:1.75;">${t.intro}</p>
        </div>

        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 30px;background:#f3efe7;border:1px solid #a58658;">
          <tr>
            <td align="center" style="padding:24px 20px;">
              <p style="margin:0 0 7px;color:#a58658;font-size:10px;line-height:1.4;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">${t.downloadTitle}</p>
              <p style="margin:0 0 5px;color:#0f211a;font-family:Georgia,'Times New Roman',serif;font-size:22px;line-height:1.35;">${departmentLabels[department]}</p>
              <p style="margin:0 auto 18px;max-width:440px;color:#526158;font-size:13px;line-height:1.6;">${t.downloadLead}</p>
              <a href="${primaryUrl}" style="${emailButtonStyle}">${t.downloadPrimary}</a>
              <p style="margin:16px 0 0;"><a href="${secondaryUrl}" style="color:#0f211a;font-size:12px;font-weight:700;text-decoration:underline;">${t.downloadSecondary}</a></p>
            </td>
          </tr>
        </table>

        <p style="margin:0 0 8px;color:#a58658;font-size:10px;line-height:1.4;font-weight:700;letter-spacing:1.5px;text-align:center;text-transform:uppercase;">${t.offerTitle}</p>
        <div style="height:1px;background:#d8d0c3;margin:0 0 24px;"></div>

        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 16px;background:#f3efe7;border:1px solid #d8d0c3;">
          <tr>
            <td class="mobile-stack" width="150" valign="middle"><img class="mobile-stack-image" src="${MANUALS_IMAGE_URL}" width="150" alt="" style="display:block;width:150px;height:112px;object-fit:cover;border:0;"></td>
            <td class="mobile-stack" valign="middle" style="padding:18px 18px 17px;">
              <p style="margin:0 0 6px;color:#a58658;font-size:9px;font-weight:700;line-height:1.4;letter-spacing:1.2px;text-transform:uppercase;">${t.manualsEyebrow}</p>
              <p style="margin:0 0 12px;color:#526158;font-size:13px;line-height:1.6;">${t.manuals}</p>
              <a href="${SITE_URL}/${lang}/playbooks" style="color:#0f211a;font-size:12px;font-weight:700;text-decoration:underline;">${t.primary}</a>
            </td>
          </tr>
        </table>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 28px;background:#f3efe7;border:1px solid #d8d0c3;">
          <tr>
            <td class="mobile-stack" width="150" valign="middle"><img class="mobile-stack-image" src="${TRAINING_IMAGE_URL}" width="150" alt="" style="display:block;width:150px;height:112px;object-fit:cover;border:0;"></td>
            <td class="mobile-stack" valign="middle" style="padding:18px 18px 17px;">
              <p style="margin:0 0 6px;color:#a58658;font-size:9px;font-weight:700;line-height:1.4;letter-spacing:1.2px;text-transform:uppercase;">${t.trainingEyebrow}</p>
              <p style="margin:0 0 12px;color:#526158;font-size:13px;line-height:1.6;">${t.training}</p>
              <a href="${SITE_URL}/${lang}/formation" style="color:#0f211a;font-size:12px;font-weight:700;text-decoration:underline;">${t.secondary}</a>
            </td>
          </tr>
        </table>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 24px;"><tr><td align="center"><a href="${SITE_URL}/${lang}/playbooks" style="${emailButtonStyle}">${t.primary}</a></td></tr></table>
        <p style="margin:0;color:#687169;font-size:13px;line-height:1.65;text-align:center;">${t.close}</p>
      `,
    }),
  }
}

export async function sendFreeChapterWelcomeEmail({
  to,
  locale,
  department,
  requestId,
  chapterUrls,
}: {
  to: string
  locale?: string
  department: LeadDepartment
  requestId?: string
  chapterUrls: { en: string; fr: string }
}) {
  const email = buildFreeChapterWelcomeEmail(locale, department, chapterUrls)

  return getResendClient().emails.send(
    {
      from: 'LuxOps <delivery@luxops.fr>',
      to,
      replyTo: 'contact@luxops.fr',
      subject: email.subject,
      html: email.html,
    },
    { idempotencyKey: leadWelcomeIdempotencyKey(to, requestId) }
  )
}
