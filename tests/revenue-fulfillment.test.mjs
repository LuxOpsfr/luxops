import assert from 'node:assert/strict'
import test from 'node:test'
import { getPlaybookIds, PLAYBOOKS } from '../lib/chapters.ts'
import { ALL_PLAYBOOK_PRICE_IDS, BUNDLE_PRICE_ID, DOWNLOADS } from '../lib/downloads.ts'

const revenuePriceId = 'price_1UU4ZYDVLJTOFkjUSDgIJ4pD'

test('the Revenue price unlocks the Revenue manual', () => {
  assert.deepEqual(getPlaybookIds(revenuePriceId), ['revenue-management'])
  assert.equal(DOWNLOADS[revenuePriceId].titleFr, 'Manuel Revenue Management & Distribution')
})

test('the bundle records and unlocks all five manuals', () => {
  assert.deepEqual(getPlaybookIds(BUNDLE_PRICE_ID), [
    'front-office', 'fo-starter-pack', 'housekeeping', 'hsk-starter-pack', 'fb', 'fb-starter-pack', 'spa', 'revenue-management',
  ])
  assert.equal(ALL_PLAYBOOK_PRICE_IDS.length, 5)
  assert.ok(ALL_PLAYBOOK_PRICE_IDS.includes(revenuePriceId))
  assert.ok(ALL_PLAYBOOK_PRICE_IDS.every((priceId) => DOWNLOADS[priceId]))
})

test('a Front Office manual purchase also unlocks its included Starter Pack', () => {
  for (const priceId of ['price_1TZRZZDVLJTOFkjUd3B9x44e', 'price_1TBZ94DVLJTOFkjUsH59B7x7']) {
    assert.deepEqual(getPlaybookIds(priceId), ['front-office', 'fo-starter-pack'])
  }
  assert.deepEqual(getPlaybookIds('price_1TUONHDVLJTOFkjUjE391FrX'), ['fo-starter-pack'])
})

test('Housekeeping and F&B manual purchases unlock their included Starter Packs', () => {
  assert.deepEqual(getPlaybookIds('price_1TBZ9TDVLJTOFkjUwWnoKaGk'), ['housekeeping', 'hsk-starter-pack'])
  assert.deepEqual(getPlaybookIds('price_1TZRYvDVLJTOFkjUNuiqbADG'), ['fb', 'fb-starter-pack'])
  assert.deepEqual(getPlaybookIds('price_1TBZ9iDVLJTOFkjU3Os9VLRc'), ['fb', 'fb-starter-pack'])
})

test('all Revenue chapters have four distinct Supabase objects', () => {
  const chapters = PLAYBOOKS['revenue-management'].chapters
  assert.equal(chapters.length, 8)
  const paths = chapters.flatMap((chapter) => [chapter.pdfFr, chapter.pdfEn, chapter.pptxFr, chapter.pptxEn])
  assert.equal(new Set(paths).size, 32)
  assert.ok(paths.every((path) => path.startsWith('revenue-management/')))
  assert.equal(chapters[1].pdfEn, 'revenue-management/pdf/en/ch02-reservations-demand-forecasting.pdf')
})
