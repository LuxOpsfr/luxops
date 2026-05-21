import createMiddleware from 'next-intl/middleware'
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

const intlMiddleware = createMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix: 'always',
})

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

function trackLlmsFileView(request: NextRequest, event: NextFetchEvent) {
  const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
  if (!apiKey) return

  const userAgent = request.headers.get('user-agent') ?? ''
  const country =
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('cf-ipcountry') ||
    'unknown'
  const referer = request.headers.get('referer') ?? ''
  const crawlerType = getCrawlerType(userAgent)
  const path = request.nextUrl.pathname
  const isProduction = process.env.VERCEL_ENV === 'production'

  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://eu.i.posthog.com'
  const distinctId = `llms:${crawlerType}:${country}:${userAgent.slice(0, 80)}`

  event.waitUntil(
    fetch(`${host.replace(/\/$/, '')}/capture/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: apiKey,
        event: 'llms_file_viewed',
        distinct_id: distinctId,
        properties: {
          path,
          full_url: request.nextUrl.href,
          user_agent: userAgent,
          crawler_type: crawlerType,
          country,
          referer,
          environment: process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? 'unknown',
          is_test: !isProduction,
          source: 'next_proxy',
        },
      }),
    }).catch(() => undefined),
  )
}

export default function proxy(request: NextRequest, event: NextFetchEvent) {
  const pathname = request.nextUrl.pathname

  if (pathname === '/llms.txt' || pathname === '/llms-full.txt' || pathname.startsWith('/llms/')) {
    trackLlmsFileView(request, event)
    return NextResponse.next()
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: [
    '/llms.txt',
    '/llms-full.txt',
    '/llms/:path*',
    '/((?!api|ingest|_next|_vercel|.*\\..*).*)',
  ],
}
