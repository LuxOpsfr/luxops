const SITE_URL = 'https://www.luxops.fr'

export function escapeEmailHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export function buildLuxOpsEmail({
  locale,
  eyebrow,
  title,
  previewText,
  content,
  alignment = 'left',
  heroImage,
}: {
  locale: 'en' | 'fr' | 'es'
  eyebrow: string
  title: string
  previewText: string
  content: string
  alignment?: 'left' | 'center'
  heroImage?: { src: string; alt: string }
}) {
  const footer = {
    en: 'Operational manuals and training for hotel teams.',
    fr: 'Manuels opérationnels et formations pour les équipes hôtelières.',
    es: 'Manuales operativos y formación para equipos hoteleros.',
  }[locale]

  return `<!doctype html>
<html lang="${locale}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>${title}</title>
    <style>
      @media only screen and (max-width: 520px) {
        .email-frame { padding: 16px 8px !important; }
        .email-header { padding: 27px 22px 23px !important; }
        .email-body { padding: 32px 22px 31px !important; }
        .email-title { font-size: 27px !important; }
        .mobile-stack { display: block !important; width: 100% !important; }
        .mobile-stack-image { width: 100% !important; height: auto !important; }
      }
    </style>
  </head>
  <body style="margin:0;padding:0;background:#f3efe7;color:#0f211a;font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${previewText}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f3efe7;">
      <tr>
        <td align="center" class="email-frame" style="padding:32px 16px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:620px;background:#fcfbf8;border:1px solid #d8d0c3;">
            <tr>
              <td class="email-header" style="padding:32px 36px 28px;border-bottom:1px solid #d8d0c3;text-align:${alignment};">
                <a href="${SITE_URL}/${locale}" style="color:#0f211a;text-decoration:none;">
                  <img src="${SITE_URL}/brand/luxops-wordmark-dark.png" width="330" alt="LuxOps — Standardizing Excellence in High-End Hospitality" style="display:block;width:100%;max-width:330px;height:auto;border:0;${alignment === 'center' ? 'margin:0 auto;' : ''}">
                </a>
              </td>
            </tr>
            ${heroImage ? `
            <tr>
              <td style="padding:0;background:#0f211a;">
                <img src="${escapeEmailHtml(heroImage.src)}" width="620" alt="${escapeEmailHtml(heroImage.alt)}" style="display:block;width:100%;max-width:620px;height:auto;border:0;">
              </td>
            </tr>` : ''}
            <tr>
              <td class="email-body" style="padding:42px 36px 38px;">
                <p style="margin:0 0 12px;color:#a58658;font-size:11px;line-height:1.4;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;text-align:${alignment};">${eyebrow}</p>
                <h1 class="email-title" style="margin:0 0 26px;color:#0f211a;font-family:Georgia,'Times New Roman',serif;font-size:32px;line-height:1.18;font-weight:400;letter-spacing:0;text-align:${alignment};">${title}</h1>
                ${content}
              </td>
            </tr>
            <tr>
              <td style="padding:22px 36px;background:#0f211a;">
                <p style="margin:0 0 5px;color:#f3efe7;font-size:12px;line-height:1.5;">${footer}</p>
                <p style="margin:0;color:#aeb6af;font-size:11px;line-height:1.5;">
                  <a href="${SITE_URL}" style="color:#d8c39d;text-decoration:none;">luxops.fr</a>
                  &nbsp;&middot;&nbsp;
                  <a href="mailto:contact@luxops.fr" style="color:#d8c39d;text-decoration:none;">contact@luxops.fr</a>
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

export const emailButtonStyle = [
  'display:inline-block',
  'background:#0f211a',
  'border:1px solid #0f211a',
  'color:#ffffff',
  'font-size:13px',
  'font-weight:700',
  'line-height:1',
  'padding:15px 22px',
  'text-decoration:none',
].join(';')

export const emailSecondaryButtonStyle = [
  'display:inline-block',
  'background:#fcfbf8',
  'border:1px solid #526158',
  'color:#24362f',
  'font-size:13px',
  'font-weight:700',
  'line-height:1',
  'padding:14px 21px',
  'text-decoration:none',
].join(';')
