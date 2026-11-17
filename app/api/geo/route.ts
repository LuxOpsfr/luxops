import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const country =
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('cf-ipcountry') ||
    request.headers.get('x-country-code') ||
    ''

  return NextResponse.json({ country }, {
    headers: { 'Cache-Control': 'private, no-store', 'Vary': 'x-vercel-ip-country, cf-ipcountry, x-country-code' },
  })
}
