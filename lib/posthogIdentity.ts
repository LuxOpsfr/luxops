import posthog from 'posthog-js'

const INTERNAL_EMAILS = new Set([
  'belkheirb@icloud.com',
  'belkheirb@icloud.fr',
])

export function isInternalLuxOpsEmail(email?: string | null) {
  if (!email) return false
  return INTERNAL_EMAILS.has(email.trim().toLowerCase())
}

export function identifyPostHogUser(
  email?: string | null,
  properties: Record<string, unknown> = {}
) {
  if (!email) return

  const normalizedEmail = email.trim().toLowerCase()
  const isInternalUser = isInternalLuxOpsEmail(normalizedEmail)
  const identityProperties = {
    email: normalizedEmail,
    is_internal_user: isInternalUser,
    luxops_internal_user: isInternalUser,
    ...properties,
  }

  posthog.identify(normalizedEmail, identityProperties)
  posthog.register({
    is_internal_user: isInternalUser,
    luxops_internal_user: isInternalUser,
  })
}

export function resetPostHogUser() {
  posthog.reset()
}
