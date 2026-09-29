import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const out = path.join(root, 'public/brand/linkedin/final')
const photo = path.join(root, 'public/images/editorial-hospitality/training-team-natural-v4.png')
const wordmarkDark = path.join(root, 'public/brand/luxops-wordmark-dark.png')
const wordmarkLight = path.join(root, 'public/brand/luxops-wordmark-light.png')

await fs.mkdir(out, { recursive: true })

const colors = {
  green: '#0f211a',
  greenSoft: '#24362f',
  ivory: '#f5f1e9',
  bright: '#fcfbf8',
  brass: '#a58658',
  muted: '#687169',
  line: '#d8d0c1',
}

const escapeXml = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

const svg = (width, height, content) => Buffer.from(`
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <style>
      .display { font-family: Georgia, 'Times New Roman', serif; letter-spacing: 0; }
      .sans { font-family: 'Avenir Next', Avenir, Arial, sans-serif; letter-spacing: 0; }
    </style>
    ${content}
  </svg>
`)

const addFooter = (label = 'LuxOps · luxops.fr') => `
  <line x1="70" y1="997" x2="1010" y2="997" stroke="${colors.brass}" stroke-width="2" opacity=".72" />
  <text x="70" y="1032" class="sans" fill="${colors.ivory}" font-size="21" font-weight="700">${escapeXml(label)}</text>
`

// LinkedIn avatar: approved LuxOps wordmark, readable at small size.
const croppedWordmark = await sharp(wordmarkDark)
  .extract({ left: 137, top: 24, width: 340, height: 72 })
  .resize({ width: 305, height: 92, fit: 'inside' })
  .png()
  .toBuffer()

await sharp({
  create: { width: 400, height: 400, channels: 4, background: colors.ivory },
})
  .composite([
    { input: svg(400, 400, `
      <rect x="18" y="18" width="364" height="364" fill="none" stroke="${colors.green}" stroke-width="3" />
      <rect x="28" y="28" width="344" height="344" fill="none" stroke="${colors.brass}" stroke-width="2" />
    `) },
    { input: croppedWordmark, left: 48, top: 151 },
  ])
  .png()
  .toFile(path.join(out, 'luxops-linkedin-profile-wordmark-400.png'))

// Banner: the approved operational photo, with the full action visible.
const bannerPhoto = await sharp(photo)
  .extract({ left: 0, top: 105, width: 1672, height: 700 })
  .resize(1780, 700, { fit: 'fill' })
  .modulate({ brightness: 0.9, saturation: 0.86 })
  .jpeg({ quality: 92 })
  .toBuffer()

const bannerWordmark = await sharp(wordmarkLight)
  .resize({ width: 650, height: 132, fit: 'inside' })
  .png()
  .toBuffer()

await sharp({ create: { width: 4200, height: 700, channels: 4, background: colors.green } })
  .composite([
    { input: bannerPhoto, left: 2420, top: 0 },
    { input: svg(4200, 700, `
      <defs>
        <linearGradient id="fade" x1="0" x2="1">
          <stop offset="0" stop-color="${colors.green}" stop-opacity="1" />
          <stop offset=".56" stop-color="${colors.green}" stop-opacity="1" />
          <stop offset=".72" stop-color="${colors.green}" stop-opacity=".72" />
          <stop offset="1" stop-color="${colors.green}" stop-opacity=".05" />
        </linearGradient>
      </defs>
      <rect width="4200" height="700" fill="url(#fade)" />
      <rect x="52" y="52" width="4096" height="596" fill="none" stroke="${colors.brass}" stroke-width="3" opacity=".72" />
      <text x="240" y="348" class="display" fill="${colors.ivory}" font-size="118">Turn standards into</text>
      <text x="240" y="470" class="display" fill="${colors.ivory}" font-size="118">service habits.</text>
      <line x1="240" y1="530" x2="365" y2="530" stroke="${colors.brass}" stroke-width="6" />
      <text x="240" y="594" class="sans" fill="${colors.ivory}" font-size="35" font-weight="700">SOP MANUALS · OPERATIONAL TRAINING · MANAGER SUPPORT</text>
    `) },
    { input: bannerWordmark, left: 220, top: 76 },
  ])
  .jpeg({ quality: 93, chromaSubsampling: '4:4:4' })
  .toFile(path.join(out, 'luxops-linkedin-banner-final-4200x700.jpg'))

const writePost = async (name, background, content, composites = []) => {
  await sharp({ create: { width: 1080, height: 1080, channels: 4, background } })
    .composite([{ input: svg(1080, 1080, content) }, ...composites])
    .png()
    .toFile(path.join(out, name))
}

await writePost('template-01-operational-insight.png', colors.green, `
  <rect x="42" y="42" width="996" height="996" fill="none" stroke="${colors.brass}" stroke-width="2" />
  <text x="70" y="104" class="sans" fill="${colors.brass}" font-size="22" font-weight="700">OPERATIONAL INSIGHT · 01</text>
  <text x="70" y="364" class="display" fill="${colors.ivory}" font-size="78">A SOP nobody uses</text>
  <text x="70" y="458" class="display" fill="${colors.ivory}" font-size="78">is not a standard.</text>
  <line x1="70" y1="540" x2="200" y2="540" stroke="${colors.brass}" stroke-width="5" />
  <text x="70" y="620" class="sans" fill="${colors.ivory}" font-size="31">The document matters only when managers</text>
  <text x="70" y="667" class="sans" fill="${colors.ivory}" font-size="31">can reinforce it and teams can apply it.</text>
  ${addFooter()}
`)

await writePost('template-02-practical-carousel.png', colors.ivory, `
  <rect x="42" y="42" width="996" height="996" fill="none" stroke="${colors.green}" stroke-width="2" />
  <text x="70" y="105" class="sans" fill="${colors.brass}" font-size="22" font-weight="700">PRACTICAL CAROUSEL</text>
  <text x="70" y="314" class="display" fill="${colors.green}" font-size="150">5</text>
  <text x="70" y="438" class="display" fill="${colors.green}" font-size="76">things every</text>
  <text x="70" y="528" class="display" fill="${colors.green}" font-size="76">FO handover needs</text>
  <line x1="70" y1="596" x2="200" y2="596" stroke="${colors.brass}" stroke-width="5" />
  <text x="70" y="685" class="sans" fill="${colors.muted}" font-size="31">A practical framework for clearer shifts</text>
  <text x="70" y="730" class="sans" fill="${colors.muted}" font-size="31">and fewer missed details.</text>
  <line x1="70" y1="997" x2="1010" y2="997" stroke="${colors.brass}" stroke-width="2" opacity=".72" />
  <text x="70" y="1032" class="sans" fill="${colors.green}" font-size="21" font-weight="700">LuxOps · luxops.fr</text>
`)

const postPhoto = await sharp(photo)
  .extract({ left: 120, top: 35, width: 1440, height: 760 })
  .resize(1080, 570, { fit: 'cover' })
  .modulate({ brightness: 0.92, saturation: 0.88 })
  .png()
  .toBuffer()

await writePost('template-03-field-note.png', colors.green, `
  <rect x="42" y="42" width="996" height="996" fill="none" stroke="${colors.brass}" stroke-width="2" />
  <rect x="42" y="42" width="996" height="570" fill="none" stroke="${colors.brass}" stroke-width="2" />
  <text x="70" y="682" class="sans" fill="${colors.brass}" font-size="22" font-weight="700">ROOM INSPECTION · FIELD NOTE 04</text>
  <text x="70" y="792" class="display" fill="${colors.ivory}" font-size="63">The final 5% is usually</text>
  <text x="70" y="870" class="display" fill="${colors.ivory}" font-size="63">what the guest notices.</text>
  ${addFooter()}
`, [{ input: postPhoto, left: 42, top: 42 }])

await writePost('template-04-luxops-framework.png', colors.ivory, `
  <rect x="42" y="42" width="996" height="996" fill="none" stroke="${colors.green}" stroke-width="2" />
  <text x="70" y="105" class="sans" fill="${colors.brass}" font-size="22" font-weight="700">LUXOPS FRAMEWORK</text>
  <text x="70" y="230" class="display" fill="${colors.green}" font-size="68">How standards</text>
  <text x="70" y="310" class="display" fill="${colors.green}" font-size="68">become habits</text>
  <rect x="70" y="390" width="940" height="105" fill="${colors.green}" />
  <text x="105" y="458" class="sans" fill="${colors.ivory}" font-size="31" font-weight="700">01 · DEFINE THE STANDARD</text>
  <rect x="70" y="515" width="940" height="105" fill="${colors.greenSoft}" />
  <text x="105" y="583" class="sans" fill="${colors.ivory}" font-size="31" font-weight="700">02 · TRAIN IN CONTEXT</text>
  <rect x="70" y="640" width="940" height="105" fill="${colors.brass}" />
  <text x="105" y="708" class="sans" fill="${colors.green}" font-size="31" font-weight="700">03 · REINFORCE ON SHIFT</text>
  <rect x="70" y="765" width="940" height="105" fill="#dcd5c9" />
  <text x="105" y="833" class="sans" fill="${colors.green}" font-size="31" font-weight="700">04 · REVIEW AND IMPROVE</text>
  <line x1="70" y1="997" x2="1010" y2="997" stroke="${colors.brass}" stroke-width="2" opacity=".72" />
  <text x="70" y="1032" class="sans" fill="${colors.green}" font-size="21" font-weight="700">LuxOps · luxops.fr</text>
`)

console.log(`LinkedIn assets written to ${out}`)
