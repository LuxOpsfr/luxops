import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const font = await fs.readFile(path.join(root, 'public/fonts/cormorant-garamond-latin.woff2'))
const fontData = font.toString('base64')

const variants = {
  dark: {
    primary: '#0f211a',
    secondary: '#a58658',
    muted: '#687169',
  },
  light: {
    primary: '#f5f1e9',
    secondary: '#c3aa80',
    muted: '#aeb6af',
  },
}

for (const [name, colors] of Object.entries(variants)) {
  const svg = `
    <svg width="720" height="170" viewBox="0 0 720 170" xmlns="http://www.w3.org/2000/svg">
      <style>
        @font-face {
          font-family: 'LuxOps Signature';
          src: url(data:font/woff2;base64,${fontData}) format('woff2');
          font-weight: 400 700;
        }
        .brand { font-family: 'LuxOps Signature', Georgia, serif; }
        .tagline { font-family: Arial, Helvetica, sans-serif; }
      </style>
      <rect x="8" y="25" width="104" height="104" fill="none" stroke="${colors.primary}" stroke-width="2.5"/>
      <rect x="17" y="34" width="86" height="86" fill="none" stroke="${colors.secondary}" stroke-width="2" opacity="0.72"/>
      <text class="brand" x="60" y="89" fill="${colors.primary}" font-size="37" font-weight="600" text-anchor="middle">LO</text>
      <text class="brand" x="145" y="91" fill="${colors.primary}" font-size="78" font-weight="500">LuxOps</text>
      <text class="tagline" x="147" y="124" fill="${colors.muted}" font-size="16" font-weight="600">STANDARDIZING EXCELLENCE IN HIGH-END HOSPITALITY</text>
    </svg>`

  await sharp(Buffer.from(svg))
    .png()
    .toFile(path.join(root, `public/brand/luxops-wordmark-${name}.png`))
}

const ogPhoto = await sharp(path.join(root, 'public/images/editorial-hospitality/training-team-natural-v4.png'))
  .extract({ left: 540, top: 60, width: 1050, height: 820 })
  .resize(650, 630, { fit: 'cover' })
  .modulate({ brightness: 0.88, saturation: 0.84 })
  .png()
  .toBuffer()

const ogWordmark = await sharp(path.join(root, 'public/brand/luxops-wordmark-light.png'))
  .resize({ width: 405, height: 96, fit: 'inside' })
  .png()
  .toBuffer()

const ogOverlay = Buffer.from(`
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="photoFade" x1="0" x2="1">
        <stop offset="0" stop-color="#0f211a" stop-opacity="1"/>
        <stop offset="0.24" stop-color="#0f211a" stop-opacity="0.9"/>
        <stop offset="1" stop-color="#0f211a" stop-opacity="0.08"/>
      </linearGradient>
    </defs>
    <rect x="550" width="650" height="630" fill="url(#photoFade)"/>
    <rect x="28" y="28" width="1144" height="574" fill="none" stroke="#a58658" stroke-width="2" opacity="0.72"/>
    <text x="72" y="310" fill="#f5f1e9" font-family="Georgia, 'Times New Roman', serif" font-size="60">Turn standards into</text>
    <text x="72" y="378" fill="#f5f1e9" font-family="Georgia, 'Times New Roman', serif" font-size="60">service habits.</text>
    <text x="72" y="466" fill="#f5f1e9" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700">SOP MANUALS · OPERATIONAL TRAINING · MANAGER SUPPORT</text>
  </svg>`)

await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#0f211a' } })
  .composite([
    { input: ogPhoto, left: 550, top: 0 },
    { input: ogOverlay, left: 0, top: 0 },
    { input: ogWordmark, left: 64, top: 64 },
  ])
  .png()
  .toFile(path.join(root, 'public/og-image.png'))

console.log('LuxOps wordmarks regenerated from the website identity.')
