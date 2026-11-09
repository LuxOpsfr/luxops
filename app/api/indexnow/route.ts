import { NextResponse } from 'next/server'

// Submission runs in the post-deployment workflow, never from a public GET.
export async function GET() {
  return NextResponse.json(
    { error: 'IndexNow submissions are managed after deployment.' },
    { status: 405, headers: { Allow: 'OPTIONS', 'Cache-Control': 'no-store' } },
  )
}
