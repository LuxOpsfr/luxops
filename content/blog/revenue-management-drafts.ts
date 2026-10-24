import { distributionArticle } from './revenue-management-articles/distribution'
import { guideArticle } from './revenue-management-articles/guide'
import { learningArticle } from './revenue-management-articles/learning'
import { pickupArticle } from './revenue-management-articles/pickup'
import { pricingArticle } from './revenue-management-articles/pricing'
import { revparArticle } from './revenue-management-articles/revpar'

export type RevenueSection = {
  id: string
  heading: string
  paragraphs: string[]
  bullets?: string[]
  table?: { headings: string[]; rows: string[][] }
  note?: string
  related?: { slug: string; label: string }[]
}

export type RevenueArticleContent = {
  title: string
  seoTitle?: string
  description: string
  intro: string
  sections: RevenueSection[]
  takeaway?: string
  manualNote?: string
  sources?: { label: string; href: string }[]
}

export type RevenueDraftArticle = {
  slug: string
  en: RevenueArticleContent
  fr: RevenueArticleContent
}

// Revenue Management articles published alongside the corresponding manual.
export const revenueManagementDrafts: RevenueDraftArticle[] = [
  revparArticle,
  guideArticle,
  learningArticle,
  pickupArticle,
  distributionArticle,
  pricingArticle,
]

export const revenueManagementLaunchOrder = revenueManagementDrafts.map((article) => article.slug)

export function getRevenueManagementDraft(slug: string) {
  return revenueManagementDrafts.find((article) => article.slug === slug)
}
