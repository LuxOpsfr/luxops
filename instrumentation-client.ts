import posthog from 'posthog-js'
import type { CaptureResult } from 'posthog-js'

const SENSITIVE_URL_PARAMS = [
  'access_token',
  'refresh_token',
  'expires_at',
  'expires_in',
  'token_type',
  'type',
  'sb',
  'code',
  'state',
  'session_id',
]

function sanitizeUrl(value: unknown) {
  if (typeof value !== 'string') return value

  try {
    const url = new URL(value)
    for (const param of SENSITIVE_URL_PARAMS) {
      url.searchParams.delete(param)
    }
    url.hash = ''
    return url.toString()
  } catch {
    return value.split('#')[0]
  }
}

function sanitizeEvent(event: CaptureResult | null) {
  if (!event?.properties) return event

  const properties = event.properties
  for (const key of ['$current_url', '$referrer', '$session_entry_url', '$session_entry_referrer']) {
    properties[key] = sanitizeUrl(properties[key])
  }

  return event
}

if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: `${window.location.origin}/ingest`,
    ui_host: 'https://eu.posthog.com',
    defaults: '2026-01-30',
    capture_exceptions: true,
    before_send: sanitizeEvent,
    debug: process.env.NODE_ENV === 'development',
    session_recording: {
      maskAllInputs: true,
      maskInputOptions: {
        password: true,
        email: true,
        text: true,
        textarea: true,
      },
    },
  })
}
