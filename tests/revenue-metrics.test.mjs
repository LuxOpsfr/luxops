import assert from 'node:assert/strict'
import test from 'node:test'
import { calculateRevenueMetrics } from '../lib/revenue-metrics.ts'

test('the 50-room editorial example reconciles', () => {
  assert.deepEqual(calculateRevenueMetrics({ available: '50', sold: '38', revenue: '5700' }), {
    valid: true, occupancy: 0.76, adr: 150, revpar: 114,
  })
})

test('decimal commas and French thousands spacing are accepted', () => {
  assert.deepEqual(calculateRevenueMetrics({ available: '1 000', sold: '500', revenue: '5 700,50' }), {
    valid: true, occupancy: 0.5, adr: 11.401, revpar: 5.7005,
  })
})

test('no sold rooms leaves ADR undefined without division by zero', () => {
  assert.deepEqual(calculateRevenueMetrics({ available: '50', sold: '0', revenue: '0' }), {
    valid: true, occupancy: 0, adr: null, revpar: 0,
  })
})

test('invalid capacity, counts and revenue are rejected', () => {
  for (const input of [
    { available: '0', sold: '0', revenue: '0' },
    { available: '', sold: '0', revenue: '0' },
    { available: '50', sold: '51', revenue: '100' },
    { available: '50', sold: '1,5', revenue: '100' },
    { available: '50', sold: '-1', revenue: '100' },
    { available: '50', sold: '0', revenue: '100' },
    { available: '50', sold: '1', revenue: '-1' },
    { available: '50', sold: '1', revenue: '12,345' },
    { available: '50', sold: '1', revenue: 'Infinity' },
  ]) {
    assert.equal(calculateRevenueMetrics(input).valid, false, JSON.stringify(input))
  }
})
