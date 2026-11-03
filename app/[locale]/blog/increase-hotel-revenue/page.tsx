import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check } from 'lucide-react'
import TrackedLink from '@/components/TrackedLink'
import TrackSectionExposure from '@/components/TrackSectionExposure'
import { alternatesForRoute, localizedRouteUrl } from '@/lib/localized-routes'

const route = '/en/blog/increase-hotel-revenue'
const training = '/en/hotel-revenue-management-training'
const manual = '/en/playbooks/revenue-management'

export const metadata: Metadata = {
  title: 'How to Increase Hotel Revenue: 8 Practical Strategies | LuxOps',
  description: 'Eight practical ways to increase hotel revenue through pricing, RevPAR, forecasting, distribution, booking conversion and upselling, while considering costs.',
  alternates: { canonical: localizedRouteUrl('blogIncreaseHotelRevenue', 'en'), languages: alternatesForRoute('blogIncreaseHotelRevenue') },
  openGraph: {
    type: 'article', locale: 'en_US', url: localizedRouteUrl('blogIncreaseHotelRevenue', 'en'),
    title: 'How to Increase Hotel Revenue: 8 Practical Strategies',
    description: 'A practical guide to demand, pricing, distribution, conversion and upselling without confusing revenue with profit.',
  },
}

type Lever = {
  title: string
  paragraphs: string[]
  points?: string[]
  example: { title?: string; paragraphs: string[]; points?: string[] }
  action: string
}

const levers: Lever[] = [
  {
    title: 'Understand what drives your hotel revenue',
    paragraphs: [
      'Before changing a rate, identify what is moving performance. Room revenue equals rooms sold multiplied by their average selling rate over a consistent period and inventory base.',
      'Three indicators help explain the result. Keep your treatment of out-of-service rooms and reporting conventions consistent between periods.',
    ],
    points: ['Occupancy = rooms sold ÷ rooms available for sale.', 'ADR = room revenue ÷ rooms sold.', 'RevPAR = room revenue ÷ rooms available for sale.'],
    example: { paragraphs: [
      'A hotel has 80 rooms available for one night and sells 60 at an average rate of €150. Occupancy is 75%, room revenue is €9,000 and RevPAR is €112.50.',
      'At €155 with the same volume, revenue would reach €9,300. If two fewer rooms sell, however, 58 × €155 = €8,990. A higher average rate does not automatically mean higher revenue. This illustrates the calculation, not how demand would actually respond.',
    ] },
    action: 'Break down performance by stay date, guest segment and channel before choosing an intervention.',
  },
  {
    title: 'Anticipate demand with pickup and forecasting',
    paragraphs: [
      'Do not wait until month-end to discover that a high-demand date could have been priced differently. Pickup tracks changes in bookings for the same stay date between comparable snapshots.',
      'A forecast estimates future demand or results using bookings on hand, historical patterns and currently available information.',
    ],
    example: { paragraphs: [
      'For a future date, an 80-room hotel has 52 rooms booked 14 days before arrival. Comparable dates have historically gained 17 net bookings from that point. A first estimate is 52 + 17 = 69 rooms, or 86.25% forecast occupancy.',
      'That number is not certain: local events, groups, cancellations, out-of-service rooms and differences between comparison dates may change it. With strong demand, revisit rates, availability and restrictions. With weak demand, first check that rooms are visible and bookable before cutting prices.',
    ] },
    action: 'Keep dated snapshots 30, 14 and 7 days before priority stay dates, then compare each forecast with the actual result.',
  },
  {
    title: 'Grow revenue without ignoring distribution costs',
    paragraphs: ['Two bookings with the same room rate can make different contributions. Commissions, acquisition, payment and other costs vary by channel.'],
    example: { paragraphs: [
      'Compare two €150 room bookings on the same currency basis. An OTA booking with an illustrative 18% commission (€27) leaves €123 after that commission. A direct booking with €8 of assumed acquisition and transaction costs leaves €142. The difference is €19 under these assumptions.',
      'Neither figure is net profit: other operating costs are excluded. An OTA may generate demand the hotel could not otherwise capture directly. The useful question is which channels bring profitable demand, when and at what actual cost.',
    ] },
    action: 'Compare revenue after acquisition costs for equivalent bookings and identify dates where a channel decision is genuinely possible.',
  },
  {
    title: 'Convert more booking enquiries into confirmed stays',
    paragraphs: [
      'Before buying more traffic, look at how the hotel handles enquiries already arriving by phone, email, form or booking engine.',
      'Slow replies, unclear offers, poorly presented availability, no alternative when a room category is full and incomplete follow-up can all reduce conversion.',
    ],
    example: { paragraphs: [
      'If 20 of 100 comparable enquiries become bookings, conversion is 20%. Improving the handling of enquiries so that 25 book raises it to 25%, or five additional bookings in this example.',
      'Check availability, booking value and costs before estimating the real contribution. Follow-up on unfinished enquiries must respect applicable permissions and rules.',
    ] },
    action: 'Set response standards, measure reply times, track why enquiries are lost and train teams to offer suitable alternatives.',
  },
  {
    title: 'Improve upselling and paid upgrades',
    paragraphs: [
      'Revenue management continues after the booking. Reservations and front office teams can offer a higher room category, a paid upgrade, a late checkout that operations can support or a relevant additional experience.',
      'An offer can also be made before arrival while the guest plans the stay. It should answer a real need without sales pressure.',
    ],
    example: { paragraphs: [
      'A hotel has 400 arrivals eligible for an upgrade offer in a month. If 12% accept an average €25 offer, the calculation is 400 × 12% × €25 = €1,200 in theoretical additional gross revenue.',
      'This assumes every accepted offer can be fulfilled. It excludes costs, availability of higher room categories, substitution and other commercial effects.',
    ] },
    action: 'Coach teams to recognise opportunities, explain benefits and measure conversion only for genuinely eligible offers.',
  },
  {
    title: 'Capture more value across other hotel departments',
    paragraphs: ['Depending on the property, restaurants, spa, room service and experiences contribute to total revenue. Successful selling requires coordination: front office needs to know what is available, departments must be able to deliver it, and managers need to understand the costs.'],
    example: { paragraphs: [
      'Twenty additional breakfasts at €18 generate €360 in gross revenue. Their contribution depends on food costs, any additional labour, taxes and other expenses.',
      'A promotion that increases sales but weakens margins may not be a good decision.',
    ] },
    action: 'Identify high-value services, confirm delivery capacity and review revenue and costs together.',
  },
  {
    title: 'Evaluate groups and contracts by their real contribution',
    paragraphs: ['A group secures volume but may use rooms on dates when individual demand would be strong. Review room nights, rates, cancellations, attrition, ancillary services, commissions and business that may be displaced.'],
    example: { paragraphs: [
      'A group requests 20 rooms for two nights at €120: 20 × 2 × €120 = €4,800 in room revenue. If all 40 room nights could genuinely be sold individually at €150, their theoretical value would be €6,000 before costs.',
      'That does not automatically mean the group should be declined. The likelihood of selling all rooms otherwise, distribution costs, food and beverage, private events and contract terms affect the decision.',
    ] },
    action: 'Use a consistent evaluation method that considers expected revenue, costs, risk and alternative commercial options.',
  },
  {
    title: 'Make revenue management a shared routine',
    paragraphs: [
      'A dashboard has limited value if decisions remain isolated. Leadership, reservations, front office and other departments need shared priorities and clear responsibilities.',
      'A short, prepared commercial meeting can review variances, priority dates, a small number of decisions and how they are implemented in the systems.',
    ],
    example: { title: 'A simple 30-minute meeting', points: [
      '5 min · Results and variances against forecast.',
      '10 min · Pickup, future demand, cancellations and priority dates.',
      '10 min · Rates, channels, restrictions, opportunities and decisions.',
      '5 min · Owners, distribution checks and next review.',
    ], paragraphs: ['Adapt this format to the hotel’s maturity. It does not replace existing revenue, finance or commercial reviews.'] },
    action: 'Keep a decision log with dates, evidence reviewed, action, owner and result to check.',
  },
]

const faq = [
  ['How can a hotel increase revenue without adding rooms?', 'Work on average rate, occupancy, distribution costs, enquiry conversion and additional services. Assess each option against demand, capacity and costs.'],
  ['What is the difference between revenue, RevPAR and profit?', 'Revenue measures sales. RevPAR divides room revenue by rooms available for sale. Profit also accounts for costs, so higher RevPAR does not guarantee a matching increase in profit.'],
  ['Is revenue management useful for a small hotel?', 'Yes. A smaller property can still track pickup, demand and distribution costs. The frequency and complexity of analysis should fit its resources.'],
  ['How do we train a front office team in upselling?', 'Cover room categories, appropriate situations, guest benefits, operational constraints and results, using role play and coaching.'],
  ['How do we retain good practice when staff leave?', 'Connect training with documented procedures, clear responsibilities, shared reporting templates and regular checks. New joiners can then learn established methods.'],
]

const sectionTitle = 'font-display text-2xl font-medium leading-tight text-[#0f211a] sm:text-3xl'

function PathwayLink({ kind, placement, children, className }: { kind: 'training' | 'manual'; placement: string; children: React.ReactNode; className: string }) {
  const destination = kind === 'training' ? training : manual
  return <TrackedLink href={destination} eventName={kind === 'training' ? 'revenue_article_training_clicked' : 'revenue_article_manual_clicked'} eventProperties={{ source_page: route, destination_page: destination, placement, topic: 'revenue_management', locale: 'en' }} className={className}>{children}<ArrowRight size={15} className="shrink-0" /></TrackedLink>
}

function ContextualCta({ kind, placement, title, description }: { kind: 'training' | 'manual'; placement: string; title: string; description: string }) {
  return <aside className="my-9 flex flex-col gap-4 rounded-[1.2rem] border border-[#dfd2bd] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6">
    <div><p className="text-[10px] font-semibold uppercase tracking-[.16em] text-[#92734a]">{kind === 'training' ? 'Revenue Management Training' : 'Revenue Management SOP Manual'}</p><h3 className="mt-1 font-display text-xl text-[#0f211a]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#626b64]">{description}</p></div>
    <PathwayLink kind={kind} placement={placement} className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#0f211a] px-5 text-xs font-semibold text-white hover:bg-[#263d31] sm:self-auto">{kind === 'training' ? 'Explore training' : 'Explore the manual'}</PathwayLink>
  </aside>
}

const offers = [
  { kind: 'training' as const, href: training, image: '/images/editorial-hospitality/training-roundtable-wide-v3.jpg', alt: 'Hotel team taking part in a training discussion', eyebrow: 'Develop your team', title: 'Revenue Management Training', description: 'Practical commercial skills for managers, reservations and front office.', cta: 'Explore training' },
  { kind: 'manual' as const, href: manual, image: '/images/editorial-hospitality/dept-revenue-management-v1.png', alt: 'Hotel revenue management workspace', eyebrow: 'Document your methods', title: 'Revenue Management SOP Manual', description: 'Editable procedures for forecasting, rates, distribution and reviews.', cta: 'Explore the manual · €67' },
]

function VisualOfferCards({ placement }: { placement: string }) {
  return <div role="group" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1" aria-label="LuxOps revenue management solutions">{offers.map(offer => <TrackedLink key={offer.kind} href={offer.href} eventName={offer.kind === 'training' ? 'revenue_article_training_clicked' : 'revenue_article_manual_clicked'} eventProperties={{ source_page: route, destination_page: offer.href, placement, topic: 'revenue_management', locale: 'en' }} className="group grid min-w-0 grid-cols-[104px_minmax(0,1fr)] overflow-hidden rounded-[1.2rem] border border-[#dfd4c1] bg-white text-[#0f211a] shadow-[0_10px_28px_rgba(43,40,32,.08)] transition hover:-translate-y-0.5 hover:border-[#cdb78f] hover:shadow-[0_16px_34px_rgba(43,40,32,.13)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a58658] lg:block">
    <div className="relative min-h-[132px] overflow-hidden bg-[#e9e2d4] lg:h-[100px] lg:min-h-0"><Image src={offer.image} alt={offer.alt} fill sizes="(min-width: 1024px) 285px, 104px" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" /></div>
    <div className="min-w-0 p-3.5 lg:p-4"><p className="text-[9px] font-semibold uppercase tracking-[.13em] text-[#92734a]">{offer.eyebrow}</p><h3 className="mt-1 font-display text-base leading-tight text-[#0f211a] lg:text-lg">{offer.title}</h3><p className="mt-2 hidden text-[11px] leading-5 text-[#59655b] lg:block">{offer.description}</p><span className="mt-3 inline-flex min-h-9 w-full items-center justify-between gap-1 rounded-full bg-[#f4f0e8] px-3 text-[10px] font-semibold leading-tight text-[#263a30] transition group-hover:bg-[#e9e0d2] lg:text-[11px]">{offer.cta}<ArrowRight size={13} className="shrink-0" /></span></div>
  </TrackedLink>)}</div>
}

function EditorialCta({ kind }: { kind: 'training' | 'manual' | 'final' }) {
  if (kind === 'manual') return <aside className="my-12 rounded-[1.4rem] border border-[#dfd2bd] bg-[#f5f0e7] p-6 sm:p-8">
    <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#92734a]">Operational continuity</p><h3 className="mt-2 font-display text-2xl text-[#0f211a]">A reference your commercial team can keep using.</h3>
    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#626b64]">The Revenue Management SOP Manual covers forecasting, pricing, availability, distribution, groups and results reviews. Available separately and designed to be adapted to your property.</p>
    <PathwayLink kind="manual" placement="methods" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-[#bda983] bg-white px-5 text-xs font-semibold text-[#173025] hover:bg-[#0f211a] hover:text-white">View the manual</PathwayLink>
  </aside>
  return <TrackSectionExposure eventName="revenue_article_training_cta_viewed" properties={{ source_page: route, placement: kind, topic: 'revenue_management', locale: 'en' }}><aside className={`my-12 rounded-[1.4rem] p-6 sm:p-8 ${kind === 'final' ? 'bg-[#0f211a] text-white' : 'border border-[#dfd2bd] bg-[#f5f0e7] text-[#0f211a]'}`}>
    <p className={`text-[10px] font-semibold uppercase tracking-[.18em] ${kind === 'final' ? 'text-[#d3b77f]' : 'text-[#92734a]'}`}>Tailored training</p>
    <h3 className="mt-2 font-display text-2xl">{kind === 'final' ? 'Build your team’s commercial performance.' : 'Turn commercial opportunities into team skills.'}</h3>
    <p className={`mt-3 max-w-2xl text-sm leading-7 ${kind === 'final' ? 'text-white/75' : 'text-[#626b64]'}`}>Pricing, reservations and upselling depend on both sound decisions and daily practice. LuxOps works with leaders and operational teams in the context of their property.</p>
    <div className="mt-5 flex flex-wrap gap-3"><PathwayLink kind="training" placement={kind} className={`inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-xs font-semibold ${kind === 'final' ? 'bg-[#f4ead7] text-[#173025] hover:bg-white' : 'bg-[#0f211a] text-white hover:bg-[#263d31]'}`}>Explore Revenue Management training</PathwayLink>{kind === 'final' && <PathwayLink kind="manual" placement="final" className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-white/85 underline underline-offset-4 hover:text-white">View the operational manual</PathwayLink>}</div>
  </aside></TrackSectionExposure>
}

export default async function IncreaseHotelRevenueArticle({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== 'en') notFound()
  return <main className="bg-[#faf7f2] pt-[var(--site-header-height)] text-[#20231f]">
    <header className="border-b border-[#e7e1d7] px-5 pb-11 pt-9 sm:px-8 lg:px-12 lg:pb-14 lg:pt-14"><div className="mx-auto max-w-[1080px]">
      <Link href="/en/blog" className="text-xs font-semibold text-[#806744] underline-offset-4 hover:underline">← LuxOps resources</Link>
      <p className="mt-7 text-[10px] font-semibold uppercase tracking-[.18em] text-[#92734a]">Revenue Management · Practical guide</p>
      <h1 className="mt-3 max-w-4xl font-display text-4xl font-medium leading-[1.1] tracking-[-.035em] text-[#0f211a] sm:text-5xl lg:text-[3.6rem]">How to increase hotel revenue: 8 practical strategies</h1>
      <p className="mt-6 max-w-3xl text-base leading-8 text-[#4d5a51]">Growing revenue means more than raising room rates. Pricing for demand, choosing the right channels, converting enquiries and offering relevant services all require coordinated decisions.</p>
      <div className="mt-6 flex flex-wrap gap-3"><PathwayLink kind="training" placement="article_hero" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0f211a] px-5 text-xs font-semibold text-white hover:bg-[#263d31]">Explore training</PathwayLink><PathwayLink kind="manual" placement="article_hero" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#bda983] bg-white px-5 text-xs font-semibold text-[#173025] hover:bg-[#f5f0e7]">Explore the SOP manual</PathwayLink></div>
      <p className="mt-5 max-w-3xl text-sm leading-7 text-[#626b64]">These strategies involve leadership, revenue management, reservations, front office and other departments. The examples below are illustrative. The objective is to improve the economic contribution of sales, not gross revenue alone.</p>
    </div></header>

    <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,1fr)_285px] lg:gap-12 lg:px-12 lg:py-14">
      <article className="min-w-0 max-w-[900px]">
        {levers.map((lever, index) => <div key={lever.title}>
          <section id={`strategy-${index + 1}`} className="scroll-mt-28 border-b border-[#e7e1d7] py-11 sm:py-14">
            <p className="font-display text-2xl text-[#b59b6c]">0{index + 1}</p><h2 className={`${sectionTitle} mt-2`}>{lever.title}</h2>
            {lever.paragraphs.map(p => <p key={p} className="mt-4 text-[15px] leading-8 text-[#48564d]">{p}</p>)}
            {lever.points && <ul className="mt-5 space-y-2 pl-1">{lever.points.map(point => <li key={point} className="flex gap-3 text-sm leading-7 text-[#48564d]"><Check size={16} className="mt-1.5 shrink-0 text-[#a58658]" />{point}</li>)}</ul>}
            <div className="mt-7 rounded-[1.15rem] bg-[#f0ece4] p-5 sm:p-6"><h3 className="font-display text-lg text-[#0f211a]">{lever.example.title ?? 'Worked example'}</h3>{lever.example.paragraphs.map(p => <p key={p} className="mt-3 text-sm leading-7 text-[#48564d]">{p}</p>)}{lever.example.points && <ul className="mt-3 space-y-1 text-sm leading-7 text-[#48564d]">{lever.example.points.map(point => <li key={point}>• {point}</li>)}</ul>}</div>
            <p className="mt-6 border-l-2 border-[#b59b6c] pl-4 text-sm leading-7 text-[#314238]"><strong>Put it into practice · </strong>{lever.action}</p>
            {index === 0 && <p className="mt-5 text-sm leading-7 text-[#626b64]">For the definitions, see <Link href="/en/blog/calcul-revpar-adr-taux-occupation" className="font-semibold text-[#173025] underline underline-offset-4">how to calculate RevPAR, ADR and occupancy</Link>.</p>}
            {index === 1 && <p className="mt-5 text-sm leading-7 text-[#626b64]">Read more about <Link href="/en/blog/pickup-forecast-hotelier" className="font-semibold text-[#173025] underline underline-offset-4">pickup and hotel forecasting</Link>.</p>}
          </section>
          {index === 0 && <div className="mt-8 lg:hidden"><VisualOfferCards placement="mobile_after_first_lever" /></div>}
          {index === 1 && <ContextualCta kind="manual" placement="after_forecast" title="Turn a forecast into a repeatable procedure." description="The manual brings forecasting, pricing and availability checks into one adaptable reference." />}
          {index === 3 && <ContextualCta kind="training" placement="after_conversion" title="Develop your team’s sales conversations." description="Practical training for reservations and front office teams to handle enquiries and offer suitable alternatives." />}
          {index === 4 && <EditorialCta kind="training" />}
          {index === 5 && <ContextualCta kind="manual" placement="after_other_departments" title="Connect commercial decisions with operations." description="The manual gives distribution, groups and performance reviews a shared structure." />}
        </div>)}

        <section id="retain-practice" className="scroll-mt-28 py-12"><h2 className={sectionTitle}>Training the team is only the start: how do you keep the results?</h2>
          <p className="mt-4 text-[15px] leading-8 text-[#48564d]">A team can learn to forecast, run a yield meeting and propose upgrades. If those practices live only in the heads of current staff, they can disappear when someone leaves, joins or changes systems.</p>
          <p className="mt-4 text-[15px] leading-8 text-[#48564d]">Training develops individual capability. Written standards support collective execution: how forecasts are prepared, which data informs a rate decision, how published rates and availability are checked, who owns each action and which indicators are reviewed.</p>
          <p className="mt-4 text-[15px] leading-8 text-[#48564d]">Systems complete the picture. A PMS, RMS or reporting tool can automate calculations, but people still need to understand results and validate decisions. LuxOps connects people, tools and transferable methods.</p>
          <EditorialCta kind="manual" />
        </section>

        <section id="30-day-plan" className="scroll-mt-28 border-t border-[#e7e1d7] py-12"><h2 className={sectionTitle}>A 30-day action plan for hotel revenue</h2><p className="mt-4 text-sm leading-7 text-[#626b64]">A way to begin, without promising a particular revenue increase in 30 days.</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">{[
            ['Week 1 · Diagnose', 'Reconcile PMS data, check indicators, identify priority dates, channels and segments, and map upselling opportunities.'],
            ['Week 2 · Choose', 'Select two or three realistic opportunities, assign owners, check capacity and costs, and define measures.'],
            ['Week 3 · Practise', 'Train the relevant teams, test procedures on a small scale, document decisions and check their execution in the systems.'],
            ['Week 4 · Review', 'Compare results with the baseline, consider seasonality, adjust methods and formalise the routines worth keeping.'],
          ].map(([title, description]) => <div key={title} className="rounded-[1.1rem] border border-[#e7e1d7] bg-white p-5"><h3 className="font-display text-lg text-[#0f211a]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#626b64]">{description}</p></div>)}</div>
        </section>

        <section className="border-t border-[#e7e1d7] py-12"><h2 className={sectionTitle}>Make better decisions part of everyday practice</h2><p className="mt-4 text-[15px] leading-8 text-[#48564d]">Pricing, distribution, conversion, upselling and coordination reinforce one another. Choose opportunities that fit your property, develop the relevant skills and establish methods your team can keep using.</p><p className="mt-4 text-[15px] leading-8 text-[#48564d]">More tools are not always the answer. What matters is knowing which information to review, who decides, how actions are implemented and how results are measured.</p><EditorialCta kind="final" /></section>
        <section id="questions" className="scroll-mt-28 border-t border-[#e7e1d7] py-12"><h2 className={sectionTitle}>Frequently asked questions</h2><div className="mt-5 divide-y divide-[#e7e1d7]">{faq.map(([q, a]) => <div key={q} className="py-5"><h3 className="font-display text-lg text-[#0f211a]">{q}</h3><p className="mt-2 text-sm leading-7 text-[#626b64]">{a}</p></div>)}</div></section>
      </article>
      <aside className="hidden lg:block" aria-label="LuxOps solutions"><div className="sticky top-28"><VisualOfferCards placement="sticky_visual_offers" /></div></aside>
    </div>
  </main>
}
