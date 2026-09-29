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

const chapterUrls: Record<LeadDepartment, { en: string; fr: string }> = {
  fo: { en: `${SITE_URL}/downloads/fo-intro-en.pdf`, fr: `${SITE_URL}/downloads/fo-intro-fr.pdf` },
  hsk: { en: `${SITE_URL}/downloads/hsk-intro-en.pdf`, fr: `${SITE_URL}/downloads/hsk-intro-fr.pdf` },
  fb: { en: `${SITE_URL}/downloads/fb-intro-en.pdf`, fr: `${SITE_URL}/downloads/fb-intro-fr.pdf` },
  spa: { en: `${SITE_URL}/downloads/spa-intro-en.pdf`, fr: `${SITE_URL}/downloads/spa-intro-fr.pdf` },
}

const copy = {
  en: {
    subject: 'Your LuxOps chapter is ready',
    preview: 'Thank you for downloading a LuxOps introductory chapter.',
    eyebrow: 'Your complimentary chapter',
    title: 'A first look at the LuxOps method',
    greeting: 'Hello,',
    intro: 'Thank you for downloading an introductory chapter from LuxOps. It gives you an overview of the principles and structure behind our operational manuals.',
    downloadTitle: 'Your requested chapter',
    downloadLead: 'Your document is ready. Use the button below to open or save it.',
    downloadPrimary: 'Open the English chapter',
    downloadSecondary: 'Read the French version',
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
    subject: 'Votre chapitre LuxOps est disponible',
    preview: "Merci d'avoir téléchargé un chapitre d'introduction LuxOps.",
    eyebrow: 'Votre chapitre offert',
    title: 'Un premier aperçu de la méthode LuxOps',
    greeting: 'Bonjour,',
    intro: "Merci d'avoir téléchargé un chapitre d'introduction LuxOps. Il vous permet de découvrir les principes et la structure de nos manuels opérationnels.",
    downloadTitle: 'Votre chapitre demandé',
    downloadLead: 'Votre document est prêt. Utilisez le bouton ci-dessous pour l’ouvrir ou l’enregistrer.',
    downloadPrimary: 'Ouvrir le chapitre en français',
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
    subject: 'Tu capítulo LuxOps está disponible',
    preview: 'Gracias por descargar un capítulo de introducción de LuxOps.',
    eyebrow: 'Tu capítulo gratuito',
    title: 'Una primera visión del método LuxOps',
    greeting: 'Hola,',
    intro: 'Gracias por descargar un capítulo de introducción de LuxOps. Te permite descubrir los principios y la estructura de nuestros manuales operativos.',
    downloadTitle: 'El capítulo solicitado',
    downloadLead: 'Tu documento está listo. Utiliza el botón siguiente para abrirlo o guardarlo.',
    downloadPrimary: 'Abrir el capítulo en inglés',
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

export function leadWelcomeIdempotencyKey(email: string) {
  const emailHash = createHash('sha256').update(normalizeLeadEmail(email)).digest('hex').slice(0, 32)
  return `free-chapter-welcome-${emailHash}`
}

export function buildFreeChapterWelcomeEmail(locale?: string, department: LeadDepartment = 'hsk') {
  const lang = normalizeLeadLocale(locale)
  const t = copy[lang]
  const urls = chapterUrls[department]
  const primaryUrl = lang === 'fr' ? urls.fr : urls.en
  const secondaryUrl = lang === 'fr' ? urls.en : urls.fr

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
}: {
  to: string
  locale?: string
  department: LeadDepartment
}) {
  const email = buildFreeChapterWelcomeEmail(locale, department)

  return getResendClient().emails.send(
    {
      from: 'LuxOps <delivery@luxops.fr>',
      to,
      replyTo: 'contact@luxops.fr',
      subject: email.subject,
      html: email.html,
    },
    { idempotencyKey: leadWelcomeIdempotencyKey(to) }
  )
}
