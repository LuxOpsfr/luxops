export type RevenueMetricsInput = {
  available: string
  sold: string
  revenue: string
}

export type RevenueMetricsResult =
  | { valid: true; occupancy: number; adr: number | null; revpar: number }
  | { valid: false; reason: 'available' | 'sold' | 'revenue' | 'capacity' | 'empty-sales' }

function parseWholeRoomCount(value: string): number | null {
  const normalized = value.trim().replace(/[\s\u00a0\u202f]/g, '')
  if (!/^\d+$/.test(normalized)) return null
  const number = Number(normalized)
  return Number.isSafeInteger(number) ? number : null
}

function parseRoomRevenue(value: string): number | null {
  const normalized = value.trim().replace(/[\s\u00a0\u202f]/g, '').replace(',', '.')
  if (!/^\d+(?:\.\d{1,2})?$/.test(normalized)) return null
  const number = Number(normalized)
  return Number.isFinite(number) ? number : null
}

export function calculateRevenueMetrics(input: RevenueMetricsInput): RevenueMetricsResult {
  const available = parseWholeRoomCount(input.available)
  if (available === null || available <= 0) return { valid: false, reason: 'available' }

  const sold = parseWholeRoomCount(input.sold)
  if (sold === null) return { valid: false, reason: 'sold' }
  if (sold > available) return { valid: false, reason: 'capacity' }

  const revenue = parseRoomRevenue(input.revenue)
  if (revenue === null) return { valid: false, reason: 'revenue' }
  if (sold === 0 && revenue > 0) return { valid: false, reason: 'empty-sales' }

  return {
    valid: true,
    occupancy: sold / available,
    adr: sold > 0 ? revenue / sold : null,
    revpar: revenue / available,
  }
}
