import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { PLAYBOOKS } from '@/content/playbooks/data'
import PlaybookDetailClient from '@/components/PlaybookDetailClient'

const STATS: Record<string, { value: string; label: { en: string; fr: string } }[]> = {
  fo: [
    { value: '12', label: { en: 'Chapters', fr: 'Chapitres' } },
    { value: '~250', label: { en: 'Pages', fr: 'Pages' } },
    { value: 'EN+FR', label: { en: 'Languages', fr: 'Langues' } },
    { value: 'PDF+PPT', label: { en: 'Formats', fr: 'Formats' } },
  ],
  hsk: [
    { value: '10', label: { en: 'Chapters', fr: 'Chapitres' } },
    { value: '~200', label: { en: 'Pages', fr: 'Pages' } },
    { value: 'EN+FR', label: { en: 'Languages', fr: 'Langues' } },
    { value: 'PDF+PPT', label: { en: 'Formats', fr: 'Formats' } },
  ],
  fb: [
    { value: '10', label: { en: 'Chapters', fr: 'Chapitres' } },
    { value: '~200', label: { en: 'Pages', fr: 'Pages' } },
    { value: 'EN+FR', label: { en: 'Languages', fr: 'Langues' } },
    { value: 'PDF+PPT', label: { en: 'Formats', fr: 'Formats' } },
  ],
  spa: [
    { value: '9', label: { en: 'Chapters', fr: 'Chapitres' } },
    { value: '~180', label: { en: 'Pages', fr: 'Pages' } },
    { value: 'EN+FR', label: { en: 'Languages', fr: 'Langues' } },
    { value: 'PDF+PPT', label: { en: 'Formats', fr: 'Formats' } },
  ],
}

const FAQ: Record<string, { q: { en: string; fr: string }; a: { en: string; fr: string } }[]> = {
  fo: [
    {
      q: { en: 'What format is the playbook delivered in?', fr: 'Dans quel format le playbook est-il livré ?' },
      a: { en: 'You receive a high-resolution interactive PDF and a PowerPoint file, accessible directly from your client portal.', fr: 'Vous recevez un PDF interactif haute résolution et un fichier PowerPoint, accessibles depuis votre espace client.' },
    },
    {
      q: { en: 'How do I roll out these procedures with my team?', fr: 'Comment déployer ces procédures avec mon équipe ?' },
      a: { en: 'Start with one or two modules most relevant to your current pain points. Share the PDF with your team leads, use the PowerPoint slides for briefings, and introduce procedures department meeting by department meeting. Most properties complete initial deployment in 2 to 4 weeks.', fr: "Commencez par un ou deux modules les plus pertinents pour vos besoins actuels. Partagez le PDF avec vos responsables d'équipe, utilisez les slides PowerPoint pour les briefings, et introduisez les procédures réunion par réunion. La plupart des établissements finalisent le déploiement en 2 à 4 semaines." },
    },
    {
      q: { en: 'Can I adapt the content to my property?', fr: 'Puis-je adapter le contenu à mon établissement ?' },
      a: { en: "The PowerPoint version is fully editable. Add your logo, adjust terminology, and modify procedures to match your property's specific standards and brand voice.", fr: "La version PowerPoint est entièrement modifiable. Ajoutez votre logo, adaptez la terminologie et modifiez les procédures pour correspondre aux standards et à la voix de marque de votre établissement." },
    },
    {
      q: { en: 'Do these procedures follow international hotel standards?', fr: 'Ces procédures respectent-elles les standards hôteliers internationaux ?' },
      a: { en: 'Yes. The procedures are built from real operational practice across high-end independent properties and are aligned with the service standards expected in 4- and 5-star hospitality environments internationally.', fr: "Oui. Les procédures sont issues de la pratique opérationnelle réelle dans des établissements haut de gamme et sont alignées avec les standards de service attendus dans l'hôtellerie 4 et 5 étoiles à l'international." },
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
      q: { en: 'How do I roll out these procedures with my team?', fr: 'Comment déployer ces procédures avec mon équipe ?' },
      a: { en: 'Start with the room inspection checklists and daily opening/closing procedures: these have the fastest visible impact. Use the PowerPoint for team briefings and introduce additional modules progressively over 2 to 4 weeks.', fr: "Commencez par les checklists d'inspection des chambres et les procédures d'ouverture/fermeture quotidiennes : c'est là que l'impact est le plus visible et le plus rapide. Utilisez le PowerPoint pour les briefings d'équipe et introduisez les modules supplémentaires progressivement sur 2 à 4 semaines." },
    },
    {
      q: { en: 'Can I customise the checklists and procedures?', fr: 'Puis-je personnaliser les checklists et les procédures ?' },
      a: { en: "The PowerPoint version is fully editable. Adapt all procedures, checklists and inspection criteria to your property's specific standards, room categories and brand requirements.", fr: "La version PowerPoint est entièrement modifiable. Adaptez toutes les procédures, checklists et critères d'inspection aux standards, catégories de chambres et exigences de marque de votre établissement." },
    },
    {
      q: { en: 'Do these procedures follow international hotel standards?', fr: 'Ces procédures respectent-elles les standards hôteliers internationaux ?' },
      a: { en: 'Yes. The procedures are built from real operational practice across high-end independent properties and are aligned with the service standards expected in 4- and 5-star hospitality environments internationally.', fr: "Oui. Les procédures sont issues de la pratique opérationnelle réelle dans des établissements haut de gamme et sont alignées avec les standards de service attendus dans l'hôtellerie 4 et 5 étoiles à l'international." },
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
      q: { en: 'How do I roll out these procedures with my team?', fr: 'Comment déployer ces procédures avec mon équipe ?' },
      a: { en: 'Begin with the service sequence and table management modules, then layer in bar operations and room service. Use the PowerPoint slides for team briefings and mise en place reviews. Most properties complete initial deployment in 2 to 4 weeks.', fr: "Commencez par les modules de séquence de service et gestion des tables, puis intégrez progressivement les opérations bar et room service. Utilisez les slides PowerPoint pour les briefings d'équipe et les revues de mise en place. La plupart des établissements finalisent le déploiement en 2 à 4 semaines." },
    },
    {
      q: { en: 'Does it cover fine dining and casual dining?', fr: 'Couvre-t-il la restauration gastronomique et informelle ?' },
      a: { en: 'Yes. The procedures are designed to be adaptable across all F&B formats: fine dining, brasserie, bar, room service and breakfast.', fr: 'Oui. Les procédures sont conçues pour être adaptables à tous les formats F&B : gastronomique, brasserie, bar, room service et petit-déjeuner.' },
    },
    {
      q: { en: 'Can I adapt the content to my property?', fr: 'Puis-je adapter le contenu à mon établissement ?' },
      a: { en: "The PowerPoint version is fully editable. Customise service scripts, adjust covers, add your menu formats and align all procedures with your outlet's concept and brand standards.", fr: "La version PowerPoint est entièrement modifiable. Personnalisez les scripts de service, ajustez les couverts, ajoutez vos formats de menu et alignez toutes les procédures avec le concept et les standards de marque de votre point de vente." },
    },
    {
      q: { en: 'Do these procedures follow international hotel standards?', fr: 'Ces procédures respectent-elles les standards hôteliers internationaux ?' },
      a: { en: 'Yes. The procedures are built from real operational practice across high-end independent properties and are aligned with the service standards expected in 4- and 5-star hospitality environments internationally.', fr: "Oui. Les procédures sont issues de la pratique opérationnelle réelle dans des établissements haut de gamme et sont alignées avec les standards de service attendus dans l'hôtellerie 4 et 5 étoiles à l'international." },
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
      q: { en: 'How do I roll out these procedures with my team?', fr: 'Comment déployer ces procédures avec mon équipe ?' },
      a: { en: 'Start with the guest journey and treatment sequence modules, then layer in retail and booking management. Use the PowerPoint slides for therapist briefings and weekly protocol reviews. Most properties complete initial deployment in 2 to 4 weeks.', fr: "Commencez par les modules de parcours client et séquence de soins, puis intégrez progressivement le retail et la gestion des réservations. Utilisez les slides PowerPoint pour les briefings thérapeutes et les revues de protocoles hebdomadaires. La plupart des établissements finalisent le déploiement en 2 à 4 semaines." },
    },
    {
      q: { en: 'Can I adapt the content to my spa concept?', fr: 'Puis-je adapter le contenu au concept de mon spa ?' },
      a: { en: "The PowerPoint version is fully editable. Adjust treatment protocols, replace product references with your brand's range, and align all procedures with your spa's positioning and guest journey.", fr: "La version PowerPoint est entièrement modifiable. Ajustez les protocoles de soins, remplacez les références produits par la gamme de votre marque et alignez toutes les procédures avec le positionnement et le parcours client de votre spa." },
    },
    {
      q: { en: 'Does it include retail sales protocols?', fr: 'Inclut-il des protocoles de ventes retail ?' },
      a: { en: 'Yes. The playbook includes a dedicated module on product knowledge, retail techniques and upselling scripts for therapists.', fr: 'Oui. Le playbook comprend un module dédié à la connaissance produits, aux techniques retail et aux scripts de vente additionnelle pour les thérapeutes.' },
    },
    {
      q: { en: 'Do these procedures follow international hotel standards?', fr: 'Ces procédures respectent-elles les standards hôteliers internationaux ?' },
      a: { en: 'Yes. The procedures are built from real operational practice across high-end independent properties and are aligned with the service standards expected in 4- and 5-star hospitality environments internationally.', fr: "Oui. Les procédures sont issues de la pratique opérationnelle réelle dans des établissements haut de gamme et sont alignées avec les standards de service attendus dans l'hôtellerie 4 et 5 étoiles à l'international." },
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
