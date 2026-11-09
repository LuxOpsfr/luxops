import test from 'node:test'
import assert from 'node:assert/strict'
import { changedUrls, submit, SITE_URL } from './ping-indexnow.mjs'
test('unchanged pages are skipped; additions, changes and deletions are notified', () => {
  const previous = { entries: { [`${SITE_URL}/fr`]: 'a', [`${SITE_URL}/en`]: 'b', [`${SITE_URL}/removed`]: 'c' } }
  const current = { entries: { [`${SITE_URL}/fr`]: 'a', [`${SITE_URL}/en`]: 'd', [`${SITE_URL}/new`]: 'e' } }
  assert.deepEqual(changedUrls(previous, current), [`${SITE_URL}/en`, `${SITE_URL}/removed`, `${SITE_URL}/new`])
})
test('external URLs and preview query parameters cannot be submitted', () => {
  assert.deepEqual(changedUrls(null, { entries: { 'https://example.com': 'a', [`${SITE_URL}/fr?preview=1`]: 'b' } }), [])
})
test('IndexNow HTTP errors do not masquerade as success', async () => {
  await assert.rejects(submit([`${SITE_URL}/fr`], async () => ({ status: 403 })), /403/)
})
test('accepted batches use the canonical host and key location', async () => {
  await submit([`${SITE_URL}/fr`], async (_, options) => {
    const body = JSON.parse(options.body)
    assert.equal(body.host, 'www.luxops.fr')
    assert.ok(body.keyLocation.startsWith(`${SITE_URL}/`))
    assert.deepEqual(body.urlList, [`${SITE_URL}/fr`])
    return { status: 202 }
  })
})
