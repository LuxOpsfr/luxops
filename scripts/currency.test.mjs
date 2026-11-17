import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import vm from 'node:vm'
import ts from 'typescript'
import React from 'react'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
const nodeRequire = createRequire(import.meta.url)
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const root = path.resolve(__dirname, '..')
// Load the production TS modules without adding a test runner dependency.
function load(relativePath, overrides = {}, globals = {}) {
  const filename = path.join(root, relativePath)
  const source = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
  }).outputText
  const sandboxModule = { exports: {} }
  const localRequire = (id) => {
    if (Object.hasOwn(overrides, id)) return overrides[id]
    if (id.startsWith('.') || id.startsWith('@/')) {
      const resolved = id.startsWith('@/') ? path.join(root, id.slice(2)) : path.resolve(path.dirname(filename), id)
      if (resolved.endsWith('.json')) return JSON.parse(fs.readFileSync(resolved, 'utf8'))
      return load(path.relative(root, resolved + '.ts'), overrides, globals)
    }
    return nodeRequire(id)
  }
  vm.runInNewContext(source, { module: sandboxModule, exports: sandboxModule.exports, require: localRequire, ...globals }, { filename })
  return sandboxModule.exports
}
const pricing = load('lib/pricing.ts')

function provider({ stored = null, country = 'US', fetchCountry, blockedStorage = false, locale = 'en' } = {}) {
  let currency, effect, calls = 0, saved = stored
  const timers = new Map()
  const react = {
    ...React,
    useState(initial) { currency = typeof initial === 'function' ? initial() : initial; return [currency, (value) => { currency = value }] },
    useEffect(callback) { effect = callback },
    useRef(value) { return { current: value } },
    useCallback(callback) { return callback },
    useMemo(callback) { return callback() },
  }
  const { CurrencyProvider } = load('context/CurrencyContext.tsx', { react }, {
    AbortController,
    window: {
      localStorage: {
        getItem() { if (blockedStorage) throw new Error('Storage denied'); return saved },
        setItem(key, value) { if (blockedStorage) throw new Error('Storage denied'); saved = value },
      },
      setTimeout(callback) { timers.set(1, callback); return 1 },
      clearTimeout(id) { timers.delete(id) },
    },
    fetch: async (url, options) => {
      calls++
      assert.equal(url, '/api/geo')
      assert.equal(options.cache, 'no-store')
      return fetchCountry ? fetchCountry(options) : { ok: true, json: async () => ({ country }) }
    },
  })
  const element = CurrencyProvider({ children: null, locale })
  return {
    get currency() { return currency }, get calls() { return calls }, get saved() { return saved },
    start: () => effect(),
    choose: element.props.value.setCurrency,
    timeout: () => timers.get(1)?.(),
  }
}
const flush = () => new Promise((resolve) => setImmediate(resolve))

test('country rules cover the five currencies and default non-euro markets to USD', () => {
  for (const code of ['AT','BE','BG','CY','DE','EE','ES','FI','FR','GR','HR','IE','IT','LT','LU','LV','MT','NL','PT','SI','SK']) assert.equal(pricing.currencyForCountry(code), 'EUR')
  for (const [country, currency] of [['GB','GBP'],['CA','CAD'],['AU','AUD'],['US','USD'],['CH','USD'],['AE','USD'],['MX','USD'],['SE','USD'],['','USD'],[null,'USD'],[' gb ','GBP']]) assert.equal(pricing.currencyForCountry(country), currency)
})

test('automatic currency is independent of FR, EN or ES and does not save an automatic preference', async () => {
  for (const locale of ['fr','en','es']) for (const [country, expected] of [['FR','EUR'],['US','USD'],['GB','GBP'],['CA','CAD'],['AU','AUD']]) {
    const p = provider({ locale, country }); p.start(); await flush()
    assert.equal(p.currency, expected); assert.equal(p.saved, null)
  }
})

test('saved manual preference wins without fetching and the initial render stays consistent', async () => {
  const p = provider({ stored: 'CAD', country: 'FR' })
  assert.equal(p.currency, 'EUR')
  p.start(); await flush()
  assert.equal(p.currency, 'CAD'); assert.equal(p.calls, 0)
})

test('invalid preference and blocked storage still permit automatic detection', async () => {
  for (const options of [{ stored: 'CHF' }, { blockedStorage: true }]) {
    const p = provider({ ...options, country: 'GB' }); p.start(); await flush()
    assert.equal(p.currency, 'GBP')
    p.choose('AUD'); assert.equal(p.currency, 'AUD')
  }
})

test('a delayed geolocation response never overrides a new manual choice', async () => {
  let respond
  const p = provider({ fetchCountry: () => new Promise((resolve) => { respond = resolve }) })
  p.start(); p.choose('CAD')
  respond({ ok: true, json: async () => ({ country: 'GB' }) }); await flush()
  assert.equal(p.currency, 'CAD'); assert.equal(p.saved, 'CAD')
})

test('missing country, HTTP failure, malformed response and network failure fall back to USD', async () => {
  for (const fetchCountry of [async () => ({ok: true, json: async () => ({country: ''})}), async () => ({ok: false}), async () => ({ok: true, json: async () => ({country: 123})}), async () => {throw new Error('Offline')}]) {
    const p = provider({ fetchCountry }); p.start(); await flush(); assert.equal(p.currency, 'USD')
  }
})

test('timeout releases country detection and an unmounted provider ignores the response', async () => {
  const p = provider({ fetchCountry: ({signal}) => new Promise((resolve, reject) => signal.addEventListener('abort', () => reject(new Error('Timeout')))) })
  p.start(); p.timeout(); await flush(); assert.equal(p.currency, 'USD')
  let respond
  const q = provider({ fetchCountry: () => new Promise((resolve) => {respond = resolve}) })
  const cleanup = q.start(); cleanup()
  respond({ok: true, json: async () => ({country: 'GB'})}); await flush(); assert.equal(q.currency, 'EUR')
})
