import type Stripe from 'stripe'
import { buildLuxOpsEmail, escapeEmailHtml } from './email-brand'
import { getResendClient } from './resend'

function formatAmount(amount: number, currency: string) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(amount / 100)
}

function detailRow(label: string, value: string) {
  return `<tr>
    <td valign="top" style="padding:8px 12px 8px 0;color:#687169;font-size:13px;white-space:nowrap;">${label}</td>
    <td valign="top" style="padding:8px 0;color:#0f211a;font-size:13px;font-weight:600;overflow-wrap:anywhere;">${escapeEmailHtml(value)}</td>
  </tr>`
}

export function buildSaleNotificationEmail(session: Stripe.Checkout.Session, lineItems: Stripe.LineItem[]) {
  const buyer = session.customer_details
  const currency = session.currency ?? 'eur'
  const total = session.amount_total ?? lineItems.reduce((sum, item) => sum + item.amount_total, 0)
  const buyerEmail = buyer?.email ?? session.customer_email ?? 'Non renseigné'
  const buyerName = buyer?.name ?? 'Non renseigné'
  const address = buyer?.address
  const addressText = address
    ? [address.line1, address.line2, [address.postal_code, address.city].filter(Boolean).join(' '), address.state, address.country]
        .filter(Boolean).join(', ')
    : ''
  const purchasedAt = new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'Europe/Paris',
  }).format(new Date(session.created * 1000))
  const paymentIntentId = typeof session.payment_intent === 'string'
    ? session.payment_intent
    : session.payment_intent?.id
  const paymentUrl = paymentIntentId
    ? `https://dashboard.stripe.com/${session.livemode ? '' : 'test/'}payments/${encodeURIComponent(paymentIntentId)}`
    : null

  const productsHtml = lineItems.map(item => {
    const quantity = item.quantity ?? 1
    const product = item.description ?? 'Produit LuxOps'
    return `<tr>
      <td style="padding:12px 8px 12px 0;border-bottom:1px solid #d8d0c3;color:#0f211a;font-size:14px;font-weight:600;">${escapeEmailHtml(product)}</td>
      <td align="center" style="padding:12px 8px;border-bottom:1px solid #d8d0c3;color:#526158;font-size:13px;">${quantity}</td>
      <td align="right" style="padding:12px 0 12px 8px;border-bottom:1px solid #d8d0c3;color:#0f211a;font-size:14px;white-space:nowrap;">${formatAmount(item.amount_total, currency)}</td>
    </tr>`
  }).join('')

  const detailsHtml = [
    detailRow('Nom', buyerName),
    detailRow('Email', buyerEmail),
    ...(buyer?.phone ? [detailRow('Téléphone', buyer.phone)] : []),
    ...(addressText ? [detailRow('Adresse', addressText)] : []),
    detailRow('Date', `${purchasedAt} (Paris)`),
    detailRow('Commande Stripe', session.id),
  ].join('')

  const amountDetails = session.total_details
  const totalsHtml = [
    ...(session.amount_subtotal !== null && session.amount_subtotal !== undefined
      ? [detailRow('Sous-total', formatAmount(session.amount_subtotal, currency))] : []),
    ...(amountDetails?.amount_discount ? [detailRow('Remise', `−${formatAmount(amountDetails.amount_discount, currency)}`)] : []),
    ...(amountDetails?.amount_tax ? [detailRow('Taxes', formatAmount(amountDetails.amount_tax, currency))] : []),
    detailRow('Total payé', formatAmount(total, currency)),
  ].join('')

  const subjectEmail = buyerEmail.replace(/[\r\n]/g, ' ')
  return {
    subject: `${session.livemode ? '' : '[TEST] '}Nouvelle vente LuxOps · ${formatAmount(total, currency)} · ${subjectEmail}`,
    html: buildLuxOpsEmail({
      locale: 'fr',
      eyebrow: session.livemode ? 'Vente confirmée' : 'Paiement test confirmé',
      title: 'Nouvelle vente LuxOps',
      previewText: `${formatAmount(total, currency)} · ${subjectEmail}`,
      content: `
        <p style="margin:0 0 22px;color:#526158;font-size:15px;line-height:1.7;">Un paiement vient d’être confirmé sur LuxOps.</p>
        <p style="margin:0 0 8px;color:#a58658;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;">Acheteur</p>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 24px;">${detailsHtml}</table>
        <p style="margin:0 0 8px;color:#a58658;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;">Détail de la vente</p>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 16px;">
          <tr style="background:#f3efe7;"><th align="left" style="padding:10px 8px;font-size:12px;">Produit</th><th align="center" style="padding:10px 8px;font-size:12px;">Qté</th><th align="right" style="padding:10px 8px;font-size:12px;">Montant</th></tr>
          ${productsHtml}
        </table>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 20px;">${totalsHtml}</table>
        ${paymentUrl ? `<p style="margin:0;"><a href="${paymentUrl}" style="color:#0f211a;font-size:13px;font-weight:700;text-decoration:underline;">Voir le paiement dans Stripe</a></p>` : ''}
      `,
    }),
  }
}

export async function sendSaleNotificationEmail(session: Stripe.Checkout.Session, lineItems: Stripe.LineItem[]) {
  const email = buildSaleNotificationEmail(session, lineItems)
  const result = await getResendClient().emails.send(
    {
      from: 'LuxOps <delivery@luxops.fr>',
      to: 'contact@luxops.fr',
      replyTo: session.customer_details?.email ?? session.customer_email ?? 'contact@luxops.fr',
      subject: email.subject,
      html: email.html,
    },
    { idempotencyKey: `sale-notification-${session.id}` },
  )

  if (result.error) throw result.error
  return result
}
