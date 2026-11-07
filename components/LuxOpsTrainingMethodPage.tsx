import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import TrackedLink from './TrackedLink'
import TrainingContactLinks from './TrainingContactLinks'
import { trainingCalendar, trainingPathways } from '@/content/training-pathways'

type Locale = 'fr' | 'en'
const content = {
  fr: {
    slug: 'methode-formation-luxops', title: 'Méthode de formation hôtelière : pratique et suivi | LuxOps',
    description: 'Comprendre, observer, pratiquer, recevoir un feedback et consolider : la méthode LuxOps pour transmettre les standards hôteliers avec les managers.',
    h1: 'Transmettre les standards, développer le jugement professionnel',
    intro: 'Une procédure indique quoi faire. La formation aide le collaborateur à comprendre pourquoi, à choisir une réponse adaptée et à reconnaître quand solliciter son responsable.',
    preparation: 'Cadrer → Adapter → Pratiquer → Ancrer',
    preparationText: 'Ces quatre étapes organisent l’intervention : préciser la demande, adapter les situations et les supports, conduire les exercices puis convenir du suivi avec les managers. Les cinq dimensions ci-dessous décrivent le travail pédagogique pendant et après la formation.',
    steps: [
      ['Comprendre', 'Relier le standard à son utilité pour le client, l’équipe et l’établissement. Préciser le résultat attendu, les risques et les limites de décision.'],
      ['Observer', 'Examiner une situation ou une démonstration. Repérer les gestes, les informations à vérifier et les choix du professionnel. Le responsable explique son raisonnement.'],
      ['Pratiquer', 'Faire réaliser la séquence puis introduire une variation : chambre indisponible, demande inhabituelle ou information manquante. Le collaborateur choisit une réponse et justifie ses décisions.'],
      ['Recevoir un feedback', 'Décrire un comportement observé, son effet et le point à reprendre. Donner au collaborateur l’occasion de réessayer et de vérifier la correction.'],
      ['Consolider', 'Prévoir une observation en service, un rappel en briefing ou une nouvelle mise en situation avec le manager. Ajuster le support si la pratique révèle une ambiguïté.'],
    ],
    exampleTitle: 'Une arrivée anticipée, une chambre encore indisponible',
    example: 'Le réceptionniste vérifie le statut avec les étages, identifie une solution autorisée et convient du suivi avec le client. La discussion porte autant sur la décision et la coordination que sur les mots employés. Le manager observe ensuite une situation comparable en service.',
    scopeTitle: 'Humain, innovation et référentiels',
    scope: 'Ces domaines orientent le contenu : compétences et management, usage des outils métiers, procédures et repères de contrôle. Un PMS, une checklist ou un support de formation sert le travail de l’équipe. Le programme part du besoin de l’établissement et peut utiliser ses propres standards.',
    managerTitle: 'Le rôle du manager après la formation',
    manager: 'Définir les points à observer, donner des retours précis et décider des reprises nécessaires. Les supports restent accessibles et un responsable en suit les mises à jour. Les modalités d’accompagnement sont définies lors du cadrage.',
    linksTitle: 'Choisir les situations à travailler', call: 'Parlons de votre projet · 20 min', back: 'Formation et accompagnement opérationnel',
  },
  en: {
    slug: 'luxops-training-method', title: 'Hotel Training Method: Practice and Manager Follow-Up | LuxOps',
    description: 'Understand, observe, practise, receive feedback and consolidate: the LuxOps method for teaching hotel service standards with managers.',
    h1: 'Teach service standards and develop professional judgement',
    intro: 'A procedure sets out what to do. Training helps employees understand why, choose an appropriate response and recognise when to involve their manager.',
    preparation: 'Frame → Adapt → Practise → Embed',
    preparationText: 'These four stages organise the intervention: clarify the need, adapt scenarios and materials, run the exercises and agree on follow-up with managers. The five dimensions below describe the learning process during and after training.',
    steps: [
      ['Understand', 'Connect the standard to its purpose for the guest, team and property. Define the expected outcome, risks and limits of authority.'],
      ['Observe', 'Examine a situation or demonstration. Identify actions, information checks and professional decisions. The manager explains the reasoning behind them.'],
      ['Practise', 'Have the participant perform the sequence, then introduce a variation: an unavailable room, an unusual request or missing information. The participant chooses a response and explains the decisions.'],
      ['Receive feedback', 'Describe an observed behaviour, its effect and what needs to change. Give the participant a chance to try again and check the correction.'],
      ['Consolidate', 'Arrange an observation during service, a briefing reminder or another scenario with the manager. Update the reference material if practice reveals an ambiguity.'],
    ],
    exampleTitle: 'An early arrival when the room is not ready',
    example: 'The receptionist checks the status with Housekeeping, identifies an authorised option and agrees on follow-up with the guest. The discussion covers decisions and coordination as well as language. The manager then observes a comparable situation during service.',
    scopeTitle: 'People, innovation and operational standards',
    scope: 'These areas guide the content: skills and management, use of hotel systems, procedures and quality checks. A PMS, checklist or training resource supports the team’s work. The programme starts with the property’s needs and can use its own standards.',
    managerTitle: 'The manager’s role after training',
    manager: 'Define what to observe, give specific feedback and decide what needs further practice. Keep materials accessible and assign responsibility for updates. Follow-up arrangements are agreed during the initial scoping.',
    linksTitle: 'Choose the situations to work on', call: 'Let’s discuss your project · 20 min', back: 'Training and operational support',
  },
}
export function getLuxOpsTrainingMethodMetadata(locale: Locale): Metadata {
  const c = content[locale]
  return { title: c.title, description: c.description, alternates: { canonical: `https://www.luxops.fr/${locale}/${c.slug}`, languages: { fr: 'https://www.luxops.fr/fr/methode-formation-luxops', en: 'https://www.luxops.fr/en/luxops-training-method', 'x-default': 'https://www.luxops.fr/en/luxops-training-method' } } }
}
export default function LuxOpsTrainingMethodPage({ locale }: { locale: Locale }) {
  const c = content[locale]
  return <main className="bg-[#fcfbf8] px-5 pb-20 pt-[calc(var(--site-header-height)+2rem)] text-[#10251d] sm:px-8"><div className="mx-auto max-w-[1100px]">
    <Link href={locale === 'fr' ? '/fr/formation' : '/en/training'} className="text-xs font-semibold underline underline-offset-4">← {c.back}</Link>
    <header className="max-w-4xl py-9"><p className="text-xs font-semibold uppercase tracking-[.16em] text-[#96764a]">{locale === 'fr' ? 'Méthode LuxOps' : 'The LuxOps method'}</p><h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">{c.h1}</h1><p className="mt-5 max-w-3xl text-base leading-8 text-[#526257]">{c.intro}</p></header>
    <section className="border-y border-[#e3d9ca] py-7"><h2 className="font-display text-2xl">{c.preparation}</h2><p className="mt-3 max-w-4xl text-sm leading-7 text-[#526257]">{c.preparationText}</p></section>
    <section className="py-9"><h2 className="font-display text-3xl">{locale === 'fr' ? 'Les cinq dimensions de l’apprentissage' : 'Five dimensions of learning'}</h2><ol className="mt-6 space-y-5">{c.steps.map(([title, text], index) => <li key={title} className="flex gap-5 border-b border-[#e3d9ca] pb-5"><span className="font-display text-3xl text-[#a48657]">0{index + 1}</span><div><h3 className="font-display text-xl">{title}</h3><p className="mt-2 max-w-3xl text-sm leading-7 text-[#526257]">{text}</p></div></li>)}</ol></section>
    <section className="rounded-[24px] bg-[#f2ede3] p-6 sm:p-8"><h2 className="font-display text-2xl">{c.exampleTitle}</h2><p className="mt-3 text-sm leading-7 text-[#526257]">{c.example}</p></section>
    <div className="grid gap-8 py-10 md:grid-cols-2">{[[c.scopeTitle,c.scope],[c.managerTitle,c.manager]].map(([title,text])=><section key={title}><h2 className="font-display text-2xl">{title}</h2><p className="mt-3 text-sm leading-7 text-[#526257]">{text}</p></section>)}</div>
    <section><h2 className="font-display text-2xl">{c.linksTitle}</h2><div className="mt-4 grid gap-3 md:grid-cols-3">{Object.values(trainingPathways).map(pathway=><Link key={pathway.slug} href={`/${locale}/${pathway.slug}`} className="flex min-h-14 items-center justify-between gap-3 rounded-xl border border-[#d8c8ad] bg-white p-4 text-sm font-semibold">{pathway[locale].name}<ArrowRight size={16}/></Link>)}</div></section>
    <section className="mt-10 border-t border-[#e3d9ca] pt-7"><TrackedLink href={trainingCalendar} target="_blank" rel="noopener noreferrer" eventName="training_call_clicked" eventProperties={{ locale, placement: 'method' }} className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#10251d] px-6 py-3 text-sm font-semibold text-white">{c.call}<ArrowRight size={16}/></TrackedLink><TrainingContactLinks locale={locale} placement="method"/></section>
  </div></main>
}
