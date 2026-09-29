import { createHash } from 'node:crypto'
import { buildLuxOpsEmail, emailButtonStyle } from './email-brand'
import { getResendClient } from './resend'
import { normalizeLeadLocale } from './lead-email'

const copy = {
  en: {
    subject: 'Reset your LuxOps password',
    preview: 'Choose a new password for your LuxOps client portal.',
    eyebrow: 'Secure client access',
    title: 'Create a new password',
    body: 'We received a request to reset the password for your LuxOps client portal.',
    button: 'Choose a new password',
    expiry: 'For your security, this link is personal and expires after 24 hours.',
    ignore: 'If you did not request this change, you can ignore this email. Your current password will remain unchanged.',
  },
  fr: {
    subject: 'Réinitialisez votre mot de passe LuxOps',
    preview: 'Choisissez un nouveau mot de passe pour votre espace client LuxOps.',
    eyebrow: 'Accès client sécurisé',
    title: 'Créez un nouveau mot de passe',
    body: 'Nous avons reçu une demande de réinitialisation du mot de passe de votre espace client LuxOps.',
    button: 'Choisir un nouveau mot de passe',
    expiry: 'Pour votre sécurité, ce lien est personnel et expire après 24 heures.',
    ignore: "Si vous n'êtes pas à l'origine de cette demande, ignorez cet e-mail. Votre mot de passe actuel restera inchangé.",
  },
  es: {
    subject: 'Restablece tu contraseña de LuxOps',
    preview: 'Elige una nueva contraseña para tu portal de cliente LuxOps.',
    eyebrow: 'Acceso seguro de cliente',
    title: 'Crea una nueva contraseña',
    body: 'Hemos recibido una solicitud para restablecer la contraseña de tu portal de cliente LuxOps.',
    button: 'Elegir una nueva contraseña',
    expiry: 'Por tu seguridad, este enlace es personal y caduca después de 24 horas.',
    ignore: 'Si no has solicitado este cambio, puedes ignorar este correo. Tu contraseña actual seguirá siendo la misma.',
  },
} as const

export function buildPasswordRecoveryEmail(locale: string, actionLink: string) {
  const lang = normalizeLeadLocale(locale)
  const t = copy[lang]

  return {
    subject: t.subject,
    html: buildLuxOpsEmail({
      locale: lang,
      alignment: 'center',
      eyebrow: t.eyebrow,
      title: t.title,
      previewText: t.preview,
      content: `
        <p style="max-width:480px;margin:0 auto 28px;color:#526158;font-size:15px;line-height:1.75;text-align:center;">${t.body}</p>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 24px;"><tr><td align="center"><a href="${actionLink}" style="${emailButtonStyle}">${t.button}</a></td></tr></table>
        <p style="margin:0 0 14px;color:#687169;font-size:12px;line-height:1.65;text-align:center;">${t.expiry}</p>
        <p style="margin:0;color:#8a918b;font-size:11px;line-height:1.6;text-align:center;">${t.ignore}</p>
      `,
    }),
  }
}

export async function sendPasswordRecoveryEmail({
  to,
  locale,
  actionLink,
}: {
  to: string
  locale: string
  actionLink: string
}) {
  const email = buildPasswordRecoveryEmail(locale, actionLink)
  const timeWindow = Math.floor(Date.now() / (15 * 60 * 1000))
  const emailHash = createHash('sha256').update(to.trim().toLowerCase()).digest('hex').slice(0, 24)

  return getResendClient().emails.send(
    {
      from: 'LuxOps <delivery@luxops.fr>',
      to,
      replyTo: 'contact@luxops.fr',
      subject: email.subject,
      html: email.html,
    },
    { idempotencyKey: `password-recovery-${emailHash}-${timeWindow}` }
  )
}
