import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import TrackedLink from './TrackedLink'
import { trainingPathways, type TrainingDepartment, trainingCalendar } from '@/content/training-pathways'

export default function ArticleTrainingCard({ locale, topic, slug, placement }: { locale: 'fr' | 'en'; topic: TrainingDepartment | 'general'; slug: string; placement: string }) {
  const fr = locale === 'fr'
  const pathway = topic === 'general' ? null : trainingPathways[topic]
  const copy = pathway?.[locale]
  const href = pathway ? `/${locale}/${pathway.slug}` : fr ? '/fr/formation' : '/en/training'
  const title = copy?.name ?? (fr ? 'Formation des équipes hôtelières' : 'Hotel staff training')
  const description = copy?.promise ?? (fr ? 'Accueil, étages, restauration : transformez vos standards en gestes maîtrisés avec des mises en situation adaptées à vos équipes.' : 'Front Office, Housekeeping and F&B: turn service standards into confident practice with exercises adapted to your team.')
  return <div className="overflow-hidden rounded-[22px] border border-[#d8c8ad] bg-white shadow-[0_12px_32px_rgba(20,37,29,.06)]">
    <div className="relative aspect-video"><Image src={pathway?.image ?? (slug === 'hotel-new-hire-onboarding' ? '/images/editorial-hospitality/training-team-natural-v4.png' : slug === 'hotel-staff-turnover-training' ? '/images/editorial-hospitality/training-meeting-natural-v2.jpg' : '/images/editorial-hospitality/training-session.jpg')} alt={title} fill sizes="(min-width: 1024px) 310px, 100vw" className="object-cover" /></div>
    <div className="p-5"><p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#96764a]">{fr ? 'Développer l’excellence de service' : 'Develop service excellence'}</p><h2 className="mt-2 font-display text-2xl leading-tight">{title}</h2><p className="mt-3 text-sm leading-6 text-[#526257]">{description}</p><TrackedLink href={href} eventName="training_cta_clicked" eventProperties={{ article_slug: slug, department: topic, placement, locale }} className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#10251d] px-4 py-3 text-xs font-semibold text-white hover:bg-[#263c31]">{fr ? 'Découvrir la formation' : 'Explore the training'}<ArrowRight size={14}/></TrackedLink><TrackedLink href={trainingCalendar} eventName="training_call_clicked" eventProperties={{ locale, placement, article_slug: slug }} className="mt-3 inline-flex min-h-11 items-center text-xs font-semibold underline underline-offset-4">{fr ? 'Parlons de votre projet · 20 min' : 'Let’s discuss your project · 20 min'}</TrackedLink></div>
  </div>
}
