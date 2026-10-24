import assert from 'node:assert/strict'
import test from 'node:test'

test('the RevPAR and NetRevPAR examples reconcile', () => {
  assert.equal(38 / 50, 0.76)
  assert.equal(5700 / 38, 150)
  assert.equal(5700 / 50, 114)
  assert.equal(150 * 0.76, 114)
  assert.equal((5700 - 570) / 50, 102.6)
  assert.equal((40 * 150) / 50, 120)
  assert.equal((35 * 165) / 50, 115.5)
})

test('pickup assumptions and dated forecasts reconcile', () => {
  const median = (values) => {
    const sorted = [...values].sort((a, b) => a - b)
    return (sorted[1] + sorted[2]) / 2
  }
  assert.equal(28 + 13 - 3, 38)
  assert.equal(median([12, 14, 16, 14]), 14)
  assert.equal(38 + 14, 52)
  assert.equal(38 - 4 + 18, 52)
  assert.equal(18 - 4, 14)
  assert.equal(52 / 60, 0.8666666666666667)
  assert.equal(median([6, 7, 8, 7]), 7)
  assert.equal(45 + 7, 52)
  assert.equal(40 + 14, 54)
  assert.equal(48 + 7, 55)
  assert.equal(54 + 3, 57)
})

test('illustrative channel costs and contribution reconcile', () => {
  const directCostCents = Math.round(18000 * 0.06)
  const otaCostCents = Math.round(18000 * 0.18)
  assert.equal(directCostCents, 1080)
  assert.equal(otaCostCents, 3240)
  assert.equal(Math.round(18000 * (0.03 + 0.02 + 0.01)), directCostCents)
  assert.equal(Math.round(18000 * (0.16 + 0.02)), otaCostCents)
  assert.equal((18000 - directCostCents) - (18000 - otaCostCents), 2160)
})
