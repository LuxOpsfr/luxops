import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { PLAYBOOKS } from '@/content/playbooks/data'
import PlaybookDetailClient from '@/components/PlaybookDetailClient'

const STATS: Record<string, { value: string; label: { en: string; fr: string } }[]> = {
  fo: [
    { value: '-40%', label: { en: 'Check-in Errors', fr: 'Erreurs Check-in' } },
    { value: '-15min', label: { en: 'Onboarding Time', fr: "Temps d'Onboarding" } },
    { value: '+22%', label: { en: 'Guest Satisfaction', fr: 'Satisfaction Client' } },
    { value: '12', label: { en: 'Modules', fr: 'Modules' } },
  ],
  hsk: [
    { value: '-35%', label: { en: 'Inspection Time', fr: "Temps d'Inspection" } },
    { value: '+28%', label: { en: 'Compliance Rate', fr: 'Taux de Conformité' } },
    { value: '-20%', label: { en: 'Product Waste', fr: 'Surconsommation' } },
    { value: '10', label: { en: 'Modules', fr: 'Modules' } },
  ],
  fb: [
    { value: '-22%', label: { en: 'Staff Turnover', fr: 'Turnover Équipe' } },
    { value: '-15%', label: { en: 'Food Cost', fr: 'Coût Matières' } },
    { value: '4.8/5', label: { en: 'Service Rating', fr: 'Note de Service' } },
    { value: '10', label: { en: 'Modules', fr: 'Modules' } },
  ],
  spa: [
    { value: '+18%', label: { en: 'Retail Sales', fr: 'Ventes Retail' } },
    { value: '-25%', label: { en: 'Setup Time', fr: 'Temps Préparation' } },
    { value: '4.9/5', label: { en: 'Guest Rating', fr: 'Satisfaction Client' } },
    { value: '9', label: { en: 'Modules', fr: 'Modules' } },
  ],
}

const FAQ: Record<string, { q: { en: string; fr: string }; a: { en: string; fr: string } }[]> = {
  fo: [
    {
      q: { en: 'What format is the playbook delivered in?', fr: 'Dans quel format le playbook est-il livré ?' },
      a: { en: 'You receive a high-resolution interactive PDF and a PowerPoint file, accessible directly from your client portal.', fr: 'Vous recevez un PDF interactif haute résolution et un fichier PowerPoint, accessibles depuis votre espace client.' },
    },
    {
      q: { en: 'How long does implementation take?', fr: "Quelle est la durée d'implémentation ?" },
      a: { en: 'Most properties complete the initial deployment in 2 to 4 weeks. The modular structure allows you to prioritise the most urgent procedures first.', fr: 'La plupart des établissements finalisent le déploiement initial en 2 à 4 semaines. La structure modulaire permet de prioriser les procédures les plus urgentes en premier.' },
    },
    {
      q: { en: 'Is the playbook available in French and English?', fr: 'Le playbook est-il disponible en français et en anglais ?' },
      a: { en: 'Yes, you receive both the French and English versions with your purchase.', fr: 'Oui, vous recevez les versions française et anglaise avec votre achat.' },
    },
    {
      q: { en: 'Are updates included?', fr: 'Les mises à jour sont-elles incluses ?' },
      a: { en: 'Yes. All future updates to this playbook are included at no additional cost.', fr: 'Oui. Toutes les mises à jour futures de ce playbook sont incluses sans frais supplémentaires.' },
    },
  ],
  hsk: [
    {
      q: { en: 'What format is the playbook delivered in?', fr: 'Dans quel format le playbook est-il livré ?' },
      a: { en: 'You receive a high-resolution interactive PDF and a PowerPoint file, accessible directly from your client portal.', fr: 'Vous recevez un PDF interactif haute résolution et un fichier PowerPoint, accessibles depuis votre espace client.' },
    },
    {
      q: { en: 'Can I customise the checklists?', fr: 'Puis-je personnaliser les checklists ?' },
      a: { en: 'The PowerPoint version is fully editable, allowing you to adapt procedures to your property's specific standards.', fr: 'La version PowerPoint est entièrement modifiable, vous permettant d'adapter les procédures aux standards spécifiques de votre établissement.' },
    },
    {
      q: { en: 'Is the playbook available in French and English?', fr: 'Le playbook est-il disponible en français et en anglais ?' },
      a: { en: 'Yes, you receive both the French and English versions with your purchase.', fr: 'Oui, vous recevez les versions française et anglaise avec votre achat.' },
    },
    {
      q: { en: 'Are updates included?', fr: 'Les mises à jour sont-elles incluses ?' },
      a: { en: 'Yes. All future updates to this playbook are included at no additional cost.', fr: 'Oui. Toutes les mises à jour futures de ce playbook sont incluses sans frais supplémentaires.' },
    },
  ],
  fb: [
    {
      q: { en: 'What format is the playbook delivered in?', fr: 'Dans quel format le playbook est-il livré ?' },
      a: { en: 'You receive a high-resolution interactive PDF and a PowerPoint file, accessible directly from your client portal.', fr: 'Vous recevez un PDF interactif haute résolution et un fichier PowerPoint, accessibles depuis votre espace client.' },
    },
    {
      q: { en: 'Does it cover fine dining and casual dining?', fr: 'Couvre-t-il la restauration gastronomique et informelle ?' },
      a: { en: 'Yes. The procedures are designed to be adaptable across all F&B formats — fine dining, brasserie, bar, room service and breakfast.', fr: 'Oui. Les procédures sont conçues pour être adaptables à tous les formats F&B : gastronomique, brasserie, bar, room service et petit-déjeuner.' },
    },
    {
      q: { en: 'Is the playbook available in French and English?', fr: 'Le playbook est-il disponible en français et en anglais ?' },
      a: { en: 'Yes, you receive both the French and English versions with your purchase.', fr: 'Oui, vous recevez les versions française et anglaise avec votre achat.' },
    },
    {
      q: { en: 'Are updates included?', fr: 'Les mises à jour sont-elles incluses ?' },
      a: { en: 'Yes. All future updates to this playbook are included at no additional cost.', fr: 'Oui. Toutes les mises à jour futures de ce playbook sont incluses sans frais supplémentaires.' },
    },
  ],
  spa: [
    {
      q: { en: 'What format is the playbook delivered in?', fr: 'Dans quel format le playbook est-il livré ?' },
      a: { en: 'You receive a high-resolution interactive PDF and a PowerPoint file, accessible directly from your client portal.', fr: 'Vous recevez un PDF interactif haute résolution et un fichier PowerPoint, accessibles depuis votre espace client.' },
    },
    {
      q: { en: 'Does it include retail sales protocols?', fr: 'Inclut-il des protocoles de ventes retail ?' },
      a: { en: 'Yes. The playbook includes a dedicated module on product knowledge, retail techniques and upselling scripts for therapists.', fr: 'Oui. Le playbook comprend un module dédié à la connaissance produits, aux techniques retail et aux scripts de vente additionnelle pour les thérapeutes.' },
    },
    {
      q: { en: 'Is the playbook available in French and English?', fr: 'Le playbook est-il disponible en français et en anglais ?' },
      a: { en: 'Yes, you receive both the French and English versions with your purchase.', fr: 'Oui, vous recevez les versions française et anglaise avec votre achat.' },
    },
    {
      q: { en: 'Are updates included?', fr: 'Les mises à jour sont-elles incluses ?' },
      a: { en: 'Yes. All future updates to this playbook are included at no additional cost.', fr: 'Oui. Toutes les mises à jour futures de ce playbook sont incluses sans frais supplémentaires.' },
    },
  ],
}

export async function generateStaticParams() {
  return PLAYBOOKS.map((pb) => ({ id: pb.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: string }>
}): Promise<Metadata> {
  const { id, locale } = await params
  const pb = PLAYBOOKS.find((p) => p.id === id)
  if (!pb) return {}
  const isEn = locale === 'en'
  const lang = locale as 'en' | 'fr'
  return {
    title: `${pb.title[lang]} — LuxOps`,
    description: pb.desc[lang],
    alternates: {
      canonical: `https://www.luxops.fr/${locale}/playbooks/${id}`,
    },
  }
}

export default async function PlaybookDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>
}) {
  const { id, locale } = await params
  const pb = PLAYBOOKS.find((p) => p.id === id)
  if (!pb) notFound()

  const stats = STATS[id] || []
  const faq = FAQ[id] || []

  return (
    <PlaybookDetailClient
      playbook={pb}
      stats={stats}
      faq={faq}
      locale={locale}
    />
  )
}
