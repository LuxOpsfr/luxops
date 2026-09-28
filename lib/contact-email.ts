import { buildLuxOpsEmail, emailButtonStyle, escapeEmailHtml } from './email-brand'
import { getResendClient } from './resend'
import { normalizeLeadLocale } from './lead-email'

type ContactEmailKind = 'contact' | 'training'

const SITE_URL = 'https://www.luxops.fr'
const CALENDLY_URL = 'https://calendly.com/contact-luxops/30min'
const WHATSAPP_URL = 'https://wa.me/33652084739'
const TRAINING_IMAGE_URL = `${SITE_URL}/images/email/training-banner.jpg`
const CONTACT_IMAGE_URL = `${SITE_URL}/images/email/contact-banner.jpg`
const WHATSAPP_ICON_URL = `${SITE_URL}/images/email/whatsapp.png`

const copy = {
  en: {
    contact: {
      subject: 'We have received your message',
      preview: 'Your message has been received by the LuxOps team.',
      eyebrow: 'Message received',
      title: 'Thank you for contacting LuxOps',
      intro: 'Your message has been received and will be reviewed personally. We will get back to you shortly with a clear response or the most relevant next step.',
      summary: 'Your request',
      property: 'Property',
      next: 'For a time-sensitive request, you can also contact us directly on WhatsApp.',
      primary: 'Visit LuxOps',
      processLabel: 'What happens next',
      processTitle: 'A personal response, built around your request',
      step1Title: 'Your message is reviewed',
      step1Body: 'A member of the LuxOps team reads the information you shared and identifies the right point of contact.',
      step2Title: 'We reply with a clear next step',
      step2Body: 'You receive a relevant response, recommendation or proposal according to the nature of your request.',
      close: 'The LuxOps team',
    },
    training: {
      subject: 'Your LuxOps training request has been received',
      preview: 'We will review your training priorities and contact you shortly.',
      eyebrow: 'Training request received',
      title: 'Let us prepare the right training format',
      intro: 'Thank you for sharing your training needs. We will review your property, team priorities and operational objectives before recommending the most relevant format.',
      summary: 'Request summary',
      property: 'Property',
      next: 'You can also book a consultation if you would prefer to discuss the context directly.',
      primary: 'Book a consultation',
      secondary: 'Contact us on WhatsApp',
      close: 'The LuxOps team',
    },
  },
  fr: {
    contact: {
      subject: 'Nous avons bien reçu votre message',
      preview: "Votre message a bien été transmis à l'équipe LuxOps.",
      eyebrow: 'Message bien reçu',
      title: "Merci d'avoir contacté LuxOps",
      intro: "Votre message a bien été reçu et sera étudié personnellement. Nous reviendrons vers vous rapidement avec une réponse claire ou la prochaine étape la plus pertinente.",
      summary: 'Votre demande',
      property: 'Établissement',
      next: 'Pour une demande urgente, vous pouvez également nous contacter directement sur WhatsApp.',
      primary: 'Découvrir LuxOps',
      processLabel: 'La suite de votre demande',
      processTitle: 'Une réponse personnelle, adaptée à votre contexte',
      step1Title: 'Votre message est étudié',
      step1Body: "Un membre de l'équipe LuxOps prend connaissance des informations transmises et identifie le bon interlocuteur.",
      step2Title: 'Nous revenons vers vous avec une prochaine étape claire',
      step2Body: 'Vous recevez une réponse, une recommandation ou une proposition adaptée à la nature de votre demande.',
      close: "L'équipe LuxOps",
    },
    training: {
      subject: 'Votre demande de formation LuxOps est bien reçue',
      preview: 'Nous allons étudier vos priorités de formation et revenir vers vous rapidement.',
      eyebrow: 'Demande de formation reçue',
      title: 'Préparons le format de formation adapté',
      intro: "Merci de nous avoir présenté votre besoin. Nous allons étudier votre établissement, les priorités de vos équipes et vos objectifs opérationnels avant de vous recommander le format le plus pertinent.",
      summary: 'Récapitulatif de la demande',
      property: 'Établissement',
      next: 'Vous pouvez également réserver un échange si vous préférez nous présenter directement le contexte.',
      primary: 'Réserver un échange',
      secondary: 'Nous contacter sur WhatsApp',
      close: "L'équipe LuxOps",
    },
  },
  es: {
    contact: {
      subject: 'Hemos recibido tu mensaje',
      preview: 'Tu mensaje ha sido recibido por el equipo de LuxOps.',
      eyebrow: 'Mensaje recibido',
      title: 'Gracias por contactar con LuxOps',
      intro: 'Hemos recibido tu mensaje y lo revisaremos personalmente. Nos pondremos en contacto contigo en breve con una respuesta clara o el siguiente paso más adecuado.',
      summary: 'Tu solicitud',
      property: 'Establecimiento',
      next: 'Para una solicitud urgente, también puedes contactarnos directamente por WhatsApp.',
      primary: 'Descubrir LuxOps',
      processLabel: 'Próximos pasos',
      processTitle: 'Una respuesta personal, adaptada a tu contexto',
      step1Title: 'Revisamos tu mensaje',
      step1Body: 'Un miembro del equipo LuxOps revisa la información compartida e identifica al interlocutor adecuado.',
      step2Title: 'Respondemos con un siguiente paso claro',
      step2Body: 'Recibirás una respuesta, recomendación o propuesta adaptada a la naturaleza de tu solicitud.',
      close: 'El equipo LuxOps',
    },
    training: {
      subject: 'Hemos recibido tu solicitud de formación LuxOps',
      preview: 'Revisaremos tus prioridades de formación y nos pondremos en contacto contigo en breve.',
      eyebrow: 'Solicitud de formación recibida',
      title: 'Preparemos el formato de formación adecuado',
      intro: 'Gracias por compartir tus necesidades de formación. Revisaremos tu establecimiento, las prioridades del equipo y tus objetivos operativos antes de recomendarte el formato más adecuado.',
      summary: 'Resumen de la solicitud',
      property: 'Establecimiento',
      next: 'También puedes reservar una consulta si prefieres explicarnos directamente el contexto.',
      primary: 'Reservar una consulta',
      secondary: 'Contactar por WhatsApp',
      close: 'El equipo LuxOps',
    },
  },
} as const

const trainingSteps = {
  en: [
    ['01', 'Initial consultation', 'We discuss your property, the teams involved, the operating context and the standards you want to reinforce.'],
    ['02', 'Recommended training format', 'LuxOps identifies the most relevant scope, delivery format and working priorities for your managers and teams.'],
    ['03', 'Preparation and delivery', 'Once the proposal is approved, the sessions are prepared around real service situations, your standards and the expected operational outcomes.'],
  ],
  fr: [
    ['01', 'Échange de cadrage', 'Nous échangeons sur votre établissement, les équipes concernées, le contexte opérationnel et les standards que vous souhaitez renforcer.'],
    ['02', 'Recommandation du format', 'LuxOps identifie le périmètre, le format d’intervention et les priorités de travail les plus pertinents pour vos managers et vos équipes.'],
    ['03', 'Préparation et déploiement', 'Après validation de la proposition, les sessions sont préparées autour de situations de service réelles, de vos standards et des résultats opérationnels attendus.'],
  ],
  es: [
    ['01', 'Consulta inicial', 'Hablamos de tu establecimiento, los equipos implicados, el contexto operativo y los estándares que quieres reforzar.'],
    ['02', 'Recomendación del formato', 'LuxOps identifica el alcance, el formato de intervención y las prioridades de trabajo más adecuados para managers y equipos.'],
    ['03', 'Preparación y desarrollo', 'Una vez aprobada la propuesta, las sesiones se preparan a partir de situaciones reales de servicio, tus estándares y los resultados operativos esperados.'],
  ],
} as const

export function buildContactAcknowledgementEmail({
  locale,
  kind,
  name,
  company,
  subject,
}: {
  locale?: string
  kind: ContactEmailKind
  name: string
  company?: string
  subject: string
}) {
  const lang = normalizeLeadLocale(locale)
  const primaryUrl = kind === 'training' ? CALENDLY_URL : `${SITE_URL}/${lang}`
  const safeName = escapeEmailHtml(name)
  const safeCompany = company ? escapeEmailHtml(company) : ''
  const safeSubject = escapeEmailHtml(subject)

  if (kind === 'training') {
    const t = copy[lang].training
    const steps = trainingSteps[lang].map(([number, stepTitle, stepBody], index) => `
      <tr>
        <td width="44" valign="top" style="padding:${index === 0 ? '0' : '19px'} 0 0;">
          <div style="width:34px;height:34px;background:${index === 0 ? '#0f211a' : '#e7e0d5'};color:${index === 0 ? '#ffffff' : '#0f211a'};font-family:Georgia,'Times New Roman',serif;font-size:13px;font-weight:700;line-height:34px;text-align:center;">${number}</div>
        </td>
        <td valign="top" style="padding:${index === 0 ? '0' : '19px'} 0 0 12px;">
          <p style="margin:0 0 4px;color:#0f211a;font-size:14px;font-weight:700;line-height:1.45;">${stepTitle}</p>
          <p style="margin:0;color:#526158;font-size:13px;line-height:1.65;">${stepBody}</p>
        </td>
      </tr>`).join('')

    const processLabel = lang === 'fr' ? 'Déroulement et prochaines étapes' : lang === 'es' ? 'Proceso y próximos pasos' : 'Process and next steps'
    const processTitle = lang === 'fr' ? 'Une approche structurée, adaptée à votre établissement' : lang === 'es' ? 'Un enfoque estructurado, adaptado a tu establecimiento' : 'A structured approach, adapted to your property'
    return {
      subject: t.subject,
      html: buildLuxOpsEmail({
        locale: lang,
        alignment: 'center',
        heroImage: {
          src: TRAINING_IMAGE_URL,
          alt: lang === 'fr' ? 'Équipe hôtelière en session de travail' : lang === 'es' ? 'Equipo hotelero en sesión de trabajo' : 'Hotel team in a working session',
        },
        eyebrow: t.eyebrow,
        title: t.title,
        previewText: t.preview,
        content: `
          <div style="text-align:center;">
            <p style="margin:0 0 12px;color:#24362f;font-size:15px;line-height:1.7;">${lang === 'fr' ? 'Bonjour' : lang === 'es' ? 'Hola' : 'Hello'} ${safeName},</p>
            <p style="max-width:500px;margin:0 auto 26px;color:#526158;font-size:15px;line-height:1.75;">${t.intro}</p>
          </div>

          <div style="background:#f3efe7;border-top:1px solid #d8d0c3;border-bottom:1px solid #d8d0c3;padding:18px 20px;margin:0 0 30px;text-align:center;">
            ${safeCompany ? `<p style="margin:0 0 5px;color:#0f211a;font-size:14px;font-weight:700;">${safeCompany}</p>` : ''}
            <p style="margin:0;color:#687169;font-size:12px;line-height:1.6;">${safeSubject}</p>
          </div>

          <p style="margin:0 0 7px;color:#a58658;font-size:10px;font-weight:700;line-height:1.4;letter-spacing:1.5px;text-transform:uppercase;">${processLabel}</p>
          <h2 style="margin:0 0 22px;color:#0f211a;font-family:Georgia,'Times New Roman',serif;font-size:23px;font-weight:400;line-height:1.25;">${processTitle}</h2>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 30px;">${steps}</table>

          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 25px;">
            <tr><td align="center"><a href="${primaryUrl}" style="${emailButtonStyle}">${t.primary}</a></td></tr>
            <tr>
              <td align="center" style="padding-top:14px;">
                <a href="${WHATSAPP_URL}" aria-label="WhatsApp" title="WhatsApp" style="display:inline-block;width:42px;height:42px;background:#25D366;border-radius:50%;text-decoration:none;">
                  <img src="${WHATSAPP_ICON_URL}" width="20" height="20" alt="WhatsApp" style="display:block;width:20px;height:20px;margin:11px;border:0;">
                </a>
              </td>
            </tr>
          </table>
          <p style="margin:6px 0 0;color:#24362f;font-size:13px;font-weight:700;text-align:center;">${t.close}</p>
        `,
      }),
    }
  }

  const t = copy[lang].contact
  return {
    subject: t.subject,
    html: buildLuxOpsEmail({
      locale: lang,
      alignment: 'center',
      heroImage: {
        src: CONTACT_IMAGE_URL,
        alt: lang === 'fr' ? "Équipe d'accueil dans un hôtel" : lang === 'es' ? 'Equipo de recepción en un hotel' : 'Hotel front office team',
      },
      eyebrow: t.eyebrow,
      title: t.title,
      previewText: t.preview,
      content: `
        <div style="text-align:center;">
          <p style="margin:0 0 12px;color:#24362f;font-size:15px;line-height:1.7;">${lang === 'fr' ? 'Bonjour' : lang === 'es' ? 'Hola' : 'Hello'} ${safeName},</p>
          <p style="max-width:500px;margin:0 auto 26px;color:#526158;font-size:15px;line-height:1.75;">${t.intro}</p>
        </div>

        <div style="background:#f3efe7;border-top:1px solid #d8d0c3;border-bottom:1px solid #d8d0c3;padding:18px 20px;margin:0 0 30px;text-align:center;">
          <p style="margin:0 0 8px;color:#a58658;font-size:10px;line-height:1.4;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">${t.summary}</p>
          ${safeCompany ? `<p style="margin:0 0 5px;color:#0f211a;font-size:14px;font-weight:700;">${safeCompany}</p>` : ''}
          <p style="margin:0;color:#687169;font-size:12px;line-height:1.6;">${safeSubject}</p>
        </div>

        <p style="margin:0 0 7px;color:#a58658;font-size:10px;font-weight:700;line-height:1.4;letter-spacing:1.5px;text-transform:uppercase;">${t.processLabel}</p>
        <h2 style="margin:0 0 22px;color:#0f211a;font-family:Georgia,'Times New Roman',serif;font-size:23px;font-weight:400;line-height:1.25;">${t.processTitle}</h2>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 30px;">
          <tr>
            <td width="44" valign="top"><div style="width:34px;height:34px;background:#0f211a;color:#ffffff;font-family:Georgia,'Times New Roman',serif;font-size:13px;font-weight:700;line-height:34px;text-align:center;">01</div></td>
            <td valign="top" style="padding-left:12px;"><p style="margin:0 0 4px;color:#0f211a;font-size:14px;font-weight:700;line-height:1.45;">${t.step1Title}</p><p style="margin:0;color:#526158;font-size:13px;line-height:1.65;">${t.step1Body}</p></td>
          </tr>
          <tr>
            <td width="44" valign="top" style="padding-top:19px;"><div style="width:34px;height:34px;background:#e7e0d5;color:#0f211a;font-family:Georgia,'Times New Roman',serif;font-size:13px;font-weight:700;line-height:34px;text-align:center;">02</div></td>
            <td valign="top" style="padding:19px 0 0 12px;"><p style="margin:0 0 4px;color:#0f211a;font-size:14px;font-weight:700;line-height:1.45;">${t.step2Title}</p><p style="margin:0;color:#526158;font-size:13px;line-height:1.65;">${t.step2Body}</p></td>
          </tr>
        </table>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 25px;">
          <tr><td align="center"><a href="${primaryUrl}" style="${emailButtonStyle}">${t.primary}</a></td></tr>
          <tr><td align="center" style="padding-top:14px;"><a href="${WHATSAPP_URL}" aria-label="WhatsApp" title="WhatsApp" style="display:inline-block;width:42px;height:42px;background:#25D366;border-radius:50%;text-decoration:none;"><img src="${WHATSAPP_ICON_URL}" width="20" height="20" alt="WhatsApp" style="display:block;width:20px;height:20px;margin:11px;border:0;"></a></td></tr>
        </table>
        <p style="margin:0;color:#24362f;font-size:13px;font-weight:700;text-align:center;">${t.close}</p>
      `,
    }),
  }
}

export async function sendContactAcknowledgementEmail({
  to,
  locale,
  kind,
  name,
  company,
  subject,
}: {
  to: string
  locale?: string
  kind: ContactEmailKind
  name: string
  company?: string
  subject: string
}) {
  const email = buildContactAcknowledgementEmail({ locale, kind, name, company, subject })

  return getResendClient().emails.send({
    from: 'LuxOps <contact@luxops.fr>',
    to,
    replyTo: 'contact@luxops.fr',
    subject: email.subject,
    html: email.html,
  })
}
