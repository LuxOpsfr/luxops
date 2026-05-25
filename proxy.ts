import createMiddleware from 'next-intl/middleware'
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

const intlMiddleware = createMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix: 'always',
})

const SENSITIVE_URL_PARAMS = new Set([
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
])

function sanitizeUrl(value: string) {
  if (!value) return value

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

function getCrawlerType(userAgent: string) {
  const ua = userAgent.toLowerCase()

  if (ua.includes('gptbot')) return 'gptbot'
  if (ua.includes('chatgpt-user')) return 'chatgpt-user'
  if (ua.includes('oai-searchbot')) return 'oai-searchbot'
  if (ua.includes('perplexitybot')) return 'perplexitybot'
  if (ua.includes('claudebot')) return 'claudebot'
  if (ua.includes('google-extended')) return 'google-extended'
  if (ua.includes('googlebot')) return 'googlebot'
  if (ua.includes('bingbot')) return 'bingbot'
  if (ua.includes('bot') || ua.includes('crawler') || ua.includes('spider')) return 'other-bot'

  return 'unknown'
}

function hashString(value: string) {
  let hash = 0

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index)
    hash |= 0
  }

  return Math.abs(hash).toString(36)
}

function getCountry(request: NextRequest) {
  return (
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('cf-ipcountry') ||
    'unknown'
  )
}

function getReferer(request: NextRequest) {
  return request.headers.get('referer') ?? ''
}

function getClientFingerprint(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') ?? ''
  const forwardedFor = request.headers.get('x-forwarded-for') ?? ''
  const realIp = request.headers.get('x-real-ip') ?? ''
  const language = request.headers.get('accept-language') ?? ''

  return hashString([forwardedFor.split(',')[0], realIp, userAgent, language].join('|'))
}

function capturePostHogEvent(
  request: NextRequest,
  event: NextFetchEvent,
  eventName: string,
  distinctId: string,
  properties: Record<string, unknown>,
) {
  const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
  if (!apiKey) return

  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://eu.i.posthog.com'

  event.waitUntil(
    fetch(`${host.replace(/\/$/, '')}/capture/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: apiKey,
        event: eventName,
        distinct_id: distinctId,
        properties,
      }),
    }).catch(() => undefined),
  )
}

function trackLlmsFileView(request: NextRequest, event: NextFetchEvent) {
  const userAgent = request.headers.get('user-agent') ?? ''
  const country = getCountry(request)
  const referer = getReferer(request)
  const crawlerType = getCrawlerType(userAgent)
  const path = request.nextUrl.pathname
  const isProduction = process.env.VERCEL_ENV === 'production'
  const distinctId = `llms:${crawlerType}:${country}:${userAgent.slice(0, 80)}`

  capturePostHogEvent(request, event, 'llms_file_viewed', distinctId, {
    path,
    full_url: sanitizeUrl(request.nextUrl.href),
    user_agent: userAgent,
    crawler_type: crawlerType,
    country,
    referer: sanitizeUrl(referer),
    environment: process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? 'unknown',
    is_test: !isProduction,
    source: 'next_proxy',
  })
}

function trackServerPageRequest(request: NextRequest, event: NextFetchEvent) {
  const isProduction = process.env.VERCEL_ENV === 'production'
  if (!isProduction) return

  const userAgent = request.headers.get('user-agent') ?? ''
  const crawlerType = getCrawlerType(userAgent)
  const country = getCountry(request)
  const path = request.nextUrl.pathname
  const fingerprint = getClientFingerprint(request)

  capturePostHogEvent(
    request,
    event,
    'server_page_request',
    `server:${country}:${fingerprint}`,
    {
      path,
      full_url: sanitizeUrl(request.nextUrl.href),
      country,
      referer: sanitizeUrl(getReferer(request)),
      user_agent: userAgent,
      crawler_type: crawlerType,
      likely_bot: crawlerType !== 'unknown',
      environment: process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? 'unknown',
      is_test: !isProduction,
      source: 'next_proxy',
    },
  )
}

function trackServerDownloadRequest(request: NextRequest, event: NextFetchEvent) {
  const isProduction = process.env.VERCEL_ENV === 'production'
  if (!isProduction) return

  const userAgent = request.headers.get('user-agent') ?? ''
  const crawlerType = getCrawlerType(userAgent)
  const country = getCountry(request)
  const path = request.nextUrl.pathname
  const fingerprint = getClientFingerprint(request)

  capturePostHogEvent(
    request,
    event,
    'server_download_request',
    `server:${country}:${fingerprint}`,
    {
      path,
      file_name: path.split('/').pop() ?? path,
      full_url: sanitizeUrl(request.nextUrl.href),
      country,
      referer: sanitizeUrl(getReferer(request)),
      user_agent: userAgent,
      crawler_type: crawlerType,
      likely_bot: crawlerType !== 'unknown',
      environment: process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? 'unknown',
      is_test: !isProduction,
      source: 'next_proxy',
    },
  )
}

export default function proxy(request: NextRequest, event: NextFetchEvent) {
  const pathname = request.nextUrl.pathname

  if (pathname === '/llms.txt' || pathname === '/llms-full.txt' || pathname.startsWith('/llms/')) {
    trackLlmsFileView(request, event)
    return NextResponse.next()
  }

  if (pathname.startsWith('/downloads/')) {
    trackServerDownloadRequest(request, event)
    return NextResponse.next()
  }

  trackServerPageRequest(request, event)

  return intlMiddleware(request)
}

export const config = {
  matcher: [
    '/llms.txt',
    '/llms-full.txt',
    '/llms/:path*',
    '/downloads/:path*',
    '/((?!api|ingest|_next|_vercel|.*\\..*).*)',
  ],
}
