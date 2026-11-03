import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ChartNoAxesCombined, ClipboardList, UsersRound } from 'lucide-react'
import TrackedLink from '@/components/TrackedLink'
import TrainingQuoteForm from '@/components/TrainingQuoteForm'
import { alternatesForRoute, localizedRouteUrl } from '@/lib/localized-routes'

const route = '/en/hotel-revenue-management-training'
const manual = '/en/playbooks/revenue-management'

export const metadata: Metadata = {
  title: 'Hotel Revenue Management Training | LuxOps',
  description: 'Practical hotel revenue management and commercial performance training for managers, reservations and front office teams, tailored to your property.',
  alternates: { canonical: localizedRouteUrl('trainingRevenueManagementHotel', 'en'), languages: alternatesForRoute('trainingRevenueManagementHotel') },
  openGraph: {
    type: 'website', locale: 'en_US', url: localizedRouteUrl('trainingRevenueManagementHotel', 'en'),
    title: 'Hotel Revenue Management & Commercial Performance Training | LuxOps',
    description: 'Develop pricing, forecasting, distribution and upselling skills in the context of your hotel operations.',
  },
}

const formats = [
  {
    number: '01', title: 'Revenue management for leaders and managers', icon: ChartNoAxesCombined,
    audience: 'Hotel directors, rooms division managers, revenue managers, front office managers and reservations leaders.',
    points: [
      'Read occupancy, ADR, RevPAR and contribution after distribution costs.',
      'Analyse demand, pickup and forecasts for priority stay dates.',
      'Make informed decisions on rates, segments, availability, channels, groups and negotiated contracts.',
      'Run yield meetings, follow decisions and use your PMS, RMS or reports where available.',
    ],
    result: 'Give managers a stronger method for analysis, decisions and performance follow-up.',
  },
  {
    number: '02', title: 'Upselling for reservations and front office teams', icon: UsersRound,
    audience: 'Reservations, reception, concierge, guest relations, shift leaders and operational managers.',
    points: [
      'Recognise relevant sales opportunities throughout the guest journey.',
      'Explain the benefits of higher room categories, paid upgrades and additional services.',
      'Match each offer to the guest, availability and service standards.',
      'Review results and coach teams without pressuring guests.',
    ],
    result: 'Improve commercial practice while keeping guest conversations attentive and credible.',
  },
]

const method = [
  { title: 'Understand', detail: 'Review your commercial priorities, people, systems and property objectives.' },
  { title: 'Adapt', detail: 'Shape exercises around roles, permitted data and participants’ experience.' },
  { title: 'Practise', detail: 'Work through real situations in forecasting, pricing, distribution, upgrades and yield meetings.' },
  { title: 'Embed', detail: 'Agree on routines, responsibilities and materials that support the team after training.' },
]

const faq = [
  { q: 'Who is this training for?', a: 'Hotel leadership, revenue and rooms managers, reservations teams and front office colleagues. The scope is adapted to each participant’s responsibilities and experience.' },
  { q: 'Can you train only our reception team on upselling?', a: 'Yes. A focused programme can cover relevant opportunities, room categories, services, role play and follow-up routines.' },
  { q: 'Can the training use our PMS or RMS?', a: 'Yes, subject to the agreed scope, available systems and authorised access. Anonymised or teaching data can also be used.' },
  { q: 'Does training replace a revenue manager?', a: 'It builds skills and autonomy. It does not necessarily replace a specialist role in hotels that need advanced revenue management.' },
  { q: 'How do we retain the results after training?', a: 'Use shared procedures, clear responsibilities, regular reviews and updated decision rules so new colleagues can continue the work.' },
]

const label = 'text-[10px] font-semibold uppercase tracking-[.18em] text-[#92734a]'
const heading = 'font-display text-3xl font-medium leading-tight text-[#0f211a] sm:text-4xl'

export default async function HotelRevenueTrainingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== 'en') notFound()

  return <main className="bg-[#faf7f2] pt-[var(--site-header-height)] text-[#20231f]">
    <section className="px-5 pb-12 pt-8 sm:px-8 lg:px-12 lg:pb-16 lg:pt-12"><div className="mx-auto grid max-w-[1400px] items-center gap-8 lg:grid-cols-[.97fr_1.03fr] lg:gap-12">
      <div>
        <Link href="/en/training" className="text-xs font-semibold text-[#806744] underline-offset-4 hover:underline">← Training & operational support</Link>
        <p className={`${label} mt-7`}>Specialised hotel training</p>
        <h1 className="mt-3 max-w-[700px] font-display text-4xl font-medium leading-[1.08] tracking-[-.035em] text-[#0f211a] sm:text-5xl lg:text-[3.45rem]">Hotel Revenue Management &amp; Commercial Performance Training</h1>
        <p className="mt-5 max-w-[620px] text-base leading-7 text-[#425048]">Build the skills your team needs to manage hotel revenue more confidently.</p>
        <p className="mt-3 max-w-[620px] text-sm leading-7 text-[#626b64]">From pricing strategy to upselling, LuxOps works with hotel leaders, managers, reservations and front office teams. Performance analysis, system use and practical exercises are tailored to your property’s operations.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <TrackedLink href="#revenue-training-contact" eventName="training_revenue_contact_clicked" eventProperties={{ source_page: route, placement: 'hero', topic: 'revenue_management', locale: 'en' }} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0f211a] px-6 text-xs font-semibold text-white transition hover:bg-[#263d31]">Discuss your project <ArrowRight size={15} /></TrackedLink>
          <a href="#formats" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#d7d1c5] bg-white px-6 text-xs font-semibold text-[#24362f] transition hover:border-[#a58658]">Explore the formats <ArrowRight size={15} /></a>
        </div>
      </div>
      <div className="relative aspect-[1.28] overflow-hidden rounded-[28px] border border-[#e8e0d3] bg-[#eee8dc] shadow-[0_18px_42px_rgba(78,63,40,.13)]"><Image src="/images/editorial-hospitality/dept-revenue-management-v1.png" alt="Hotel workspace for revenue analysis and decision-making" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div>
    </div></section>

    <section id="formats" className="scroll-mt-24 border-y border-[#e7e1d7] bg-white/65 px-5 py-12 sm:px-8 lg:px-12 lg:py-16"><div className="mx-auto max-w-[1400px]">
      <p className={label}>Two complementary approaches</p><h2 className={`${heading} mt-2 max-w-3xl`}>From revenue decisions to commercial performance on the floor.</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-[#626b64]">Pricing decisions matter, as does the team’s ability to understand and apply them. Choose either format or combine them around your priorities.</p>
      <div className="mt-8 grid gap-4 lg:grid-cols-2">{formats.map(format => { const Icon = format.icon; return <article key={format.number} className="rounded-[1.4rem] border border-[#e8e2d7] bg-[#faf8f4] p-6 sm:p-8">
        <div className="flex items-center gap-3 text-[#92734a]"><Icon size={20} /><span className="font-display text-xl">{format.number}</span></div>
        <h3 className="mt-5 font-display text-2xl font-medium text-[#0f211a]">{format.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[#626b64]"><strong className="text-[#263d31]">For · </strong>{format.audience}</p>
        <ul className="mt-5 space-y-3 border-t border-[#e2d9ca] pt-5">{format.points.map(point => <li key={point} className="flex gap-3 text-sm leading-6 text-[#4f5d54]"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a58658]" />{point}</li>)}</ul>
        <p className="mt-6 border-t border-[#e2d9ca] pt-4 text-sm leading-6 text-[#263d31]"><strong>Goal · </strong>{format.result}</p>
      </article> })}</div>
    </div></section>

    <section className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16"><div className="mx-auto max-w-[1400px]">
      <p className={label}>The LuxOps approach</p><h2 className={`${heading} mt-2`}>Develop skills. Keep the methods.</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-[#626b64]">Training should change daily practice and give your property a way to carry the work forward. Our approach connects three dimensions.</p>
      <div className="mt-8 grid gap-6 border-t border-[#d8cfc1] pt-6 md:grid-cols-3 md:gap-10">
        <div><h3 className="font-display text-xl text-[#0f211a]">People</h3><p className="mt-2 text-sm leading-6 text-[#626b64]">Help managers and colleagues understand indicators, spot opportunities and take responsibility for commercial decisions.</p></div>
        <div><h3 className="font-display text-xl text-[#0f211a]">Tools</h3><p className="mt-2 text-sm leading-6 text-[#626b64]">Use available systems, data and current management methods to improve the quality of decisions.</p></div>
        <div><h3 className="font-display text-xl text-[#0f211a]">Standards</h3><p className="mt-2 text-sm leading-6 text-[#626b64]">Document decision rules, routines and checks so new colleagues can learn established practices.</p></div>
      </div>
    </div></section>

    <section className="bg-[#f0ece4] px-5 py-12 sm:px-8 lg:px-12 lg:py-16"><div className="mx-auto max-w-[1400px]">
      <p className={label}>Putting it into practice</p><h2 className={`${heading} mt-2`}>Training built around your operations.</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{method.map((step, index) => <article key={step.title} className="rounded-[1.2rem] border border-[#e2d9ca] bg-white p-6"><span className="font-display text-2xl text-[#b59b6c]">0{index + 1}</span><h3 className="mt-3 font-display text-xl text-[#0f211a]">{step.title}</h3><p className="mt-2 text-sm leading-6 text-[#626b64]">{step.detail}</p></article>)}</div>
    </div></section>

    <section className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16"><div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
      <div><p className={label}>Measuring progress</p><h2 className={`${heading} mt-2`}>What should you measure after training?</h2></div>
      <div className="text-sm leading-7 text-[#626b64]"><p>Depending on your goals: forecast accuracy, RevPAR, distribution costs, enquiry conversion or additional sales. We select relevant indicators with your hotel.</p><p className="mt-4">Read each result in context: demand, seasonality, availability, guest mix and associated costs. Training provides a way to spot opportunities, act and measure; it does not promise a particular financial result.</p><Link href="/en/blog/increase-hotel-revenue" className="mt-5 inline-flex items-center gap-2 font-semibold text-[#173025] underline underline-offset-4 hover:text-[#806744]">Read the guide: 8 ways to grow hotel revenue <ArrowRight size={14} /></Link></div>
    </div></section>

    <section className="bg-[#0f211a] px-5 py-12 text-white sm:px-8 lg:px-12 lg:py-16"><div className="mx-auto grid max-w-[1400px] items-center gap-8 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
      <div><p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#d3b77f]">Operational continuity</p><h2 className="mt-2 font-display text-3xl font-medium leading-tight sm:text-4xl">Training builds capability. Documented standards help it last.</h2><p className="mt-5 max-w-3xl text-sm leading-7 text-white/75">Teams and systems change. Forecasting, rate decisions and follow-up methods need to remain accessible beyond a training session. LuxOps can help document them within the agreed scope.</p></div>
      <div className="rounded-[1.4rem] border border-white/15 bg-white/[.055] p-6 sm:p-8"><ClipboardList className="text-[#d3b77f]" size={25} /><h3 className="mt-4 font-display text-xl">The Revenue Management SOP Manual</h3><p className="mt-3 text-sm leading-6 text-white/70">A separately available reference for forecasting, pricing, availability, distribution, groups and yield meetings.</p><TrackedLink href={manual} eventName="training_revenue_manual_clicked" eventProperties={{ source_page: route, placement: 'continuity', topic: 'revenue_management', locale: 'en' }} className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#f4ead7] px-5 text-xs font-semibold text-[#173025] hover:bg-white">Explore the manual <ArrowRight size={14} /></TrackedLink></div>
    </div></section>

    <section id="revenue-training-contact" className="scroll-mt-24 px-5 py-12 sm:px-8 lg:px-12 lg:py-16"><div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
      <div><p className={label}>Start your project</p><h2 className={`${heading} mt-2`}>Tell us which skills you want to develop.</h2><p className="mt-4 max-w-lg text-sm leading-7 text-[#626b64]">Leadership, reservations or front office: we shape the training around your priorities, team and available resources.</p></div>
      <div className="rounded-[1.4rem] border border-[#e8e2d7] bg-white p-6 shadow-[0_12px_36px_rgba(40,40,30,.05)] sm:p-8"><h3 className="font-display text-2xl text-[#0f211a]">Discuss your training project</h3><p className="mb-6 mt-2 text-sm leading-6 text-[#626b64]">Tell us about your property, the people involved and the practices you want to strengthen.</p><TrainingQuoteForm locale="en" topic="Revenue Management & Commercial Performance" /></div>
    </div></section>

    <section className="border-t border-[#e7e1d7] bg-white/65 px-5 py-12 sm:px-8 lg:px-12 lg:py-16"><div className="mx-auto max-w-[1000px]"><p className={label}>Frequently asked questions</p><h2 className={`${heading} mt-2`}>About the training</h2><div className="mt-6 divide-y divide-[#e7e1d7] border-t border-[#e7e1d7]">{faq.map(item => <div key={item.q} className="py-5"><h3 className="font-display text-lg text-[#0f211a]">{item.q}</h3><p className="mt-2 text-sm leading-6 text-[#626b64]">{item.a}</p></div>)}</div></div></section>
  </main>
}
