/**
 * Map Stripe Price IDs → download links (PDF + PPT)
 * Replace PLACEHOLDER_* with real Google Drive shared links when files are ready.
 * Format: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 */

export interface PlaybookDownload {
  titleEn: string
  titleFr: string
  pdfEn: string
  pptEn: string
  pdfFr: string
  pptFr: string
}

export const DOWNLOADS: Record<string, PlaybookDownload> = {
  // Front Office Starter Pack — €29
  price_1TUONHDVLJTOFkjUjE391FrX: {
    titleEn: 'Front Office Starter Pack',
    titleFr: 'Starter Pack Front Office',
    pdfEn: 'BUNDLE',
    pptEn: 'BUNDLE',
    pdfFr: 'BUNDLE',
    pptFr: 'BUNDLE',
  },

  // Housekeeping Inspection Kit — €29
  price_1TUONXDVLJTOFkjUYvR8PUiS: {
    titleEn: 'Housekeeping Inspection Kit',
    titleFr: 'Kit Inspection Housekeeping',
    pdfEn: 'BUNDLE',
    pptEn: 'BUNDLE',
    pdfFr: 'BUNDLE',
    pptFr: 'BUNDLE',
  },

  // Front Office — €67
  price_1TBZ94DVLJTOFkjUsH59B7x7: {
    titleEn: 'Front Office Playbook',
    titleFr: 'Playbook Front Office',
    pdfEn: 'PLACEHOLDER_FO_PDF_EN',
    pptEn: 'PLACEHOLDER_FO_PPT_EN',
    pdfFr: 'PLACEHOLDER_FO_PDF_FR',
    pptFr: 'PLACEHOLDER_FO_PPT_FR',
  },

  // Housekeeping — €67
  price_1TBZ9TDVLJTOFkjUwWnoKaGk: {
    titleEn: 'Housekeeping Playbook',
    titleFr: 'Playbook Housekeeping',
    pdfEn: 'PLACEHOLDER_HSK_PDF_EN',
    pptEn: 'PLACEHOLDER_HSK_PPT_EN',
    pdfFr: 'PLACEHOLDER_HSK_PDF_FR',
    pptFr: 'PLACEHOLDER_HSK_PPT_FR',
  },

  // F&B — €67
  price_1TBZ9iDVLJTOFkjU3Os9VLRc: {
    titleEn: 'F&B Playbook',
    titleFr: 'Playbook F&B',
    pdfEn: 'PLACEHOLDER_FB_PDF_EN',
    pptEn: 'PLACEHOLDER_FB_PPT_EN',
    pdfFr: 'PLACEHOLDER_FB_PDF_FR',
    pptFr: 'PLACEHOLDER_FB_PPT_FR',
  },

  // Spa TEST 0€
  price_1TBdcNDVLJTOFkjURLNAORmJ: {
    titleEn: 'Spa & Wellness Playbook',
    titleFr: 'Playbook Spa & Wellness',
    pdfEn: 'PLACEHOLDER_SPA_PDF_EN',
    pptEn: 'PLACEHOLDER_SPA_PPT_EN',
    pdfFr: 'PLACEHOLDER_SPA_PDF_FR',
    pptFr: 'PLACEHOLDER_SPA_PPT_FR',
  },

  // Spa & Wellness — €67
  price_1TBZ9vDVLJTOFkjUT1FHhqUiY: {
    titleEn: 'Spa & Wellness Playbook',
    titleFr: 'Playbook Spa & Wellness',
    pdfEn: 'PLACEHOLDER_SPA_PDF_EN',
    pptEn: 'PLACEHOLDER_SPA_PPT_EN',
    pdfFr: 'PLACEHOLDER_SPA_PDF_FR',
    pptFr: 'PLACEHOLDER_SPA_PPT_FR',
  },

  // Bundle — €199 (all 4 playbooks)
  price_1TBZB5DVLJTOFkjUwmgvTPRW: {
    titleEn: 'Complete Bundle — All 4 Playbooks',
    titleFr: 'Bundle Complet — 4 Playbooks',
    // Bundle uses same links as individual playbooks — handled separately in email
    pdfEn: 'BUNDLE',
    pptEn: 'BUNDLE',
    pdfFr: 'BUNDLE',
    pptFr: 'BUNDLE',
  },
}

export const BUNDLE_PRICE_ID = 'price_1TBZB5DVLJTOFkjUwmgvTPRW'

export const ALL_PLAYBOOK_PRICE_IDS = [
  'price_1TBZ94DVLJTOFkjUsH59B7x7',
  'price_1TBZ9TDVLJTOFkjUwWnoKaGk',
  'price_1TBZ9iDVLJTOFkjU3Os9VLRc',
  'price_1TBZ9vDVLJTOFkjUT1FHhqUiY',
]
