import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ChartNoAxesCombined, ClipboardList, UsersRound } from 'lucide-react'
import TrackedLink from '@/components/TrackedLink'
import TrainingQuoteForm from '@/components/TrainingQuoteForm'
import { alternatesForRoute, localizedRouteUrl } from '@/lib/localized-routes'

const route = '/es/formacion-revenue-management-hotel'
const manual = '/en/playbooks/revenue-management'

export const metadata: Metadata = {
  title: 'Formación en Revenue Management Hotelero | LuxOps',
  description: 'Formación práctica en Revenue Management y rendimiento comercial para dirección, reservas y recepción, adaptada a las operaciones de su hotel.',
  alternates: { canonical: localizedRouteUrl('trainingRevenueManagementHotel', 'es'), languages: alternatesForRoute('trainingRevenueManagementHotel') },
  openGraph: { type: 'website', locale: 'es_ES', url: localizedRouteUrl('trainingRevenueManagementHotel', 'es'), title: 'Formación en Revenue Management y rendimiento comercial hotelero | LuxOps', description: 'Desarrolle las competencias comerciales de sus equipos con formación adaptada a su establecimiento.' },
}

const formats = [
  { number: '01', title: 'Revenue Management para dirección y responsables', icon: ChartNoAxesCombined,
    audience: 'Dirección de hotel, responsables de habitaciones, Revenue Management, Front Office y reservas.',
    points: [
      'Interpretar ocupación, ADR, RevPAR y contribución después de los costes de distribución.',
      'Analizar demanda, pickup y previsiones para las fechas prioritarias.',
      'Tomar decisiones sobre tarifas, segmentos, disponibilidad, canales, grupos y contratos negociados.',
      'Organizar reuniones de revenue, dar seguimiento a las decisiones y utilizar los sistemas disponibles.',
    ], result: 'Reforzar la autonomía de los responsables en el análisis, la toma de decisiones y el seguimiento.' },
  { number: '02', title: 'Venta adicional para reservas y recepción', icon: UsersRound,
    audience: 'Equipos de reservas, recepción, conserjería, relaciones con los huéspedes y responsables operativos.',
    points: [
      'Reconocer oportunidades de venta relevantes durante la estancia del huésped.',
      'Explicar las ventajas de categorías superiores, mejoras de habitación y servicios adicionales.',
      'Adaptar cada propuesta al huésped, a la disponibilidad y a los estándares de servicio.',
      'Analizar los resultados y acompañar al equipo sin ejercer presión comercial.',
    ], result: 'Desarrollar el rendimiento comercial manteniendo una relación atenta con el huésped.' },
]

const method = [
  { title: 'Comprender', detail: 'Analizar las prioridades comerciales, los equipos, las herramientas y los objetivos del hotel.' },
  { title: 'Adaptar', detail: 'Preparar ejercicios según las funciones, los datos autorizados y la experiencia de los participantes.' },
  { title: 'Practicar', detail: 'Trabajar previsiones, precios, distribución, mejoras de habitación y reuniones comerciales con casos concretos.' },
  { title: 'Consolidar', detail: 'Definir rutinas, responsables y materiales que permitan continuar el trabajo después de la formación.' },
]

const faq = [
  { q: '¿A quién se dirige esta formación?', a: 'A la dirección, responsables de Revenue Management y habitaciones, equipos de reservas y recepción. El programa se adapta a las responsabilidades y al nivel de los participantes.' },
  { q: '¿Pueden formar solo al equipo de recepción en venta adicional?', a: 'Sí. Se puede preparar una intervención centrada en las oportunidades comerciales, las categorías, los servicios, los ejercicios prácticos y el seguimiento.' },
  { q: '¿Se puede trabajar con nuestro PMS o RMS?', a: 'Sí, según el alcance acordado, las herramientas disponibles y los accesos autorizados. También se pueden usar datos anonimizados o didácticos.' },
  { q: '¿La formación sustituye a un Revenue Manager?', a: 'Desarrolla las competencias y la autonomía del equipo, pero no sustituye necesariamente una función especializada cuando el hotel requiere una gestión avanzada.' },
  { q: '¿Cómo mantener los avances después de la formación?', a: 'Con procedimientos compartidos, responsabilidades claras, revisiones periódicas y reglas de decisión actualizadas para los nuevos colaboradores.' },
]

const label = 'text-[10px] font-semibold uppercase tracking-[.18em] text-[#92734a]'
const heading = 'font-display text-3xl font-medium leading-tight text-[#0f211a] sm:text-4xl'

export default async function FormacionRevenueManagementPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== 'es') notFound()
  return <main className="bg-[#faf7f2] pt-[var(--site-header-height)] text-[#20231f]">
    <section className="px-5 pb-12 pt-8 sm:px-8 lg:px-12 lg:pb-16 lg:pt-12"><div className="mx-auto grid max-w-[1400px] items-center gap-8 lg:grid-cols-[.97fr_1.03fr] lg:gap-12">
      <div><Link href="/es/training" className="text-xs font-semibold text-[#806744] underline-offset-4 hover:underline">← Formación y acompañamiento</Link><p className={`${label} mt-7`}>Formación especializada · Hotelería</p><h1 className="mt-3 max-w-[700px] font-display text-4xl font-medium leading-[1.08] tracking-[-.035em] text-[#0f211a] sm:text-5xl lg:text-[3.45rem]">Formación en Revenue Management y rendimiento comercial hotelero</h1><p className="mt-5 max-w-[620px] text-base leading-7 text-[#425048]">Desarrolle las competencias de su equipo para gestionar mejor los ingresos del hotel.</p><p className="mt-3 max-w-[620px] text-sm leading-7 text-[#626b64]">Desde la estrategia tarifaria hasta la venta adicional, LuxOps acompaña a dirección, responsables, reservas y recepción. El análisis de resultados, las herramientas y los ejercicios prácticos se adaptan a las operaciones de su establecimiento.</p><div className="mt-7 flex flex-wrap gap-3"><TrackedLink href="#revenue-training-contact" eventName="training_revenue_contact_clicked" eventProperties={{ source_page: route, placement: 'hero', topic: 'revenue_management', locale: 'es' }} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0f211a] px-6 text-xs font-semibold text-white transition hover:bg-[#263d31]">Hablemos de su proyecto <ArrowRight size={15} /></TrackedLink><a href="#formats" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#d7d1c5] bg-white px-6 text-xs font-semibold text-[#24362f] transition hover:border-[#a58658]">Descubrir los formatos <ArrowRight size={15} /></a></div></div>
      <div className="relative aspect-[1.28] overflow-hidden rounded-[28px] border border-[#e8e0d3] bg-[#eee8dc] shadow-[0_18px_42px_rgba(78,63,40,.13)]"><Image src="/images/editorial-hospitality/dept-revenue-management-v1.png" alt="Espacio de trabajo hotelero para analizar ingresos y tomar decisiones" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div>
    </div></section>
    <section id="formats" className="scroll-mt-24 border-y border-[#e7e1d7] bg-white/65 px-5 py-12 sm:px-8 lg:px-12 lg:py-16"><div className="mx-auto max-w-[1400px]"><p className={label}>Dos enfoques complementarios</p><h2 className={`${heading} mt-2 max-w-3xl`}>De las decisiones sobre ingresos al rendimiento comercial diario.</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-[#626b64]">La calidad de las decisiones tarifarias es tan importante como la capacidad del equipo para aplicarlas. Los formatos pueden combinarse o seguirse por separado.</p><div className="mt-8 grid gap-4 lg:grid-cols-2">{formats.map(format => { const Icon = format.icon; return <article key={format.number} className="rounded-[1.4rem] border border-[#e8e2d7] bg-[#faf8f4] p-6 sm:p-8"><div className="flex items-center gap-3 text-[#92734a]"><Icon size={20} /><span className="font-display text-xl">{format.number}</span></div><h3 className="mt-5 font-display text-2xl font-medium text-[#0f211a]">{format.title}</h3><p className="mt-3 text-sm leading-6 text-[#626b64]"><strong className="text-[#263d31]">Para quién · </strong>{format.audience}</p><ul className="mt-5 space-y-3 border-t border-[#e2d9ca] pt-5">{format.points.map(point => <li key={point} className="flex gap-3 text-sm leading-6 text-[#4f5d54]"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a58658]" />{point}</li>)}</ul><p className="mt-6 border-t border-[#e2d9ca] pt-4 text-sm leading-6 text-[#263d31]"><strong>Objetivo · </strong>{format.result}</p></article> })}</div></div></section>
    <section className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16"><div className="mx-auto max-w-[1400px]"><p className={label}>El enfoque LuxOps</p><h2 className={`${heading} mt-2`}>Desarrollar competencias. Conservar los métodos.</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-[#626b64]">La formación debe traducirse en prácticas diarias y dejar al hotel los medios para continuar el trabajo. Nuestro enfoque conecta tres dimensiones.</p><div className="mt-8 grid gap-6 border-t border-[#d8cfc1] pt-6 md:grid-cols-3 md:gap-10"><div><h3 className="font-display text-xl text-[#0f211a]">Personas</h3><p className="mt-2 text-sm leading-6 text-[#626b64]">Ayudar a responsables y colaboradores a comprender indicadores, detectar oportunidades y asumir decisiones comerciales.</p></div><div><h3 className="font-display text-xl text-[#0f211a]">Herramientas</h3><p className="mt-2 text-sm leading-6 text-[#626b64]">Utilizar los sistemas y datos disponibles para mejorar la calidad de las decisiones.</p></div><div><h3 className="font-display text-xl text-[#0f211a]">Estándares</h3><p className="mt-2 text-sm leading-6 text-[#626b64]">Documentar reglas, rutinas y controles para que los nuevos colaboradores aprendan las prácticas.</p></div></div></div></section>
    <section className="bg-[#f0ece4] px-5 py-12 sm:px-8 lg:px-12 lg:py-16"><div className="mx-auto max-w-[1400px]"><p className={label}>Aplicación práctica</p><h2 className={`${heading} mt-2`}>Formación construida alrededor de sus operaciones.</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{method.map((step, index) => <article key={step.title} className="rounded-[1.2rem] border border-[#e2d9ca] bg-white p-6"><span className="font-display text-2xl text-[#b59b6c]">0{index + 1}</span><h3 className="mt-3 font-display text-xl text-[#0f211a]">{step.title}</h3><p className="mt-2 text-sm leading-6 text-[#626b64]">{step.detail}</p></article>)}</div></div></section>
    <section className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16"><div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-16"><div><p className={label}>Medir los avances</p><h2 className={`${heading} mt-2`}>¿Qué resultados seguir después de la formación?</h2></div><div className="text-sm leading-7 text-[#626b64]"><p>Según sus objetivos: precisión de previsiones, RevPAR, costes de distribución, conversión de solicitudes o ventas adicionales. Elegimos los indicadores con el establecimiento.</p><p className="mt-4">Cada resultado debe interpretarse en su contexto: demanda, temporada, disponibilidad, mezcla de clientes y costes. La formación proporciona métodos para detectar oportunidades, actuar y medir; no garantiza un resultado económico concreto.</p></div></div></section>
    <section className="bg-[#0f211a] px-5 py-12 text-white sm:px-8 lg:px-12 lg:py-16"><div className="mx-auto grid max-w-[1400px] items-center gap-8 lg:grid-cols-[1.2fr_.8fr] lg:gap-16"><div><p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#d3b77f]">Continuidad operativa</p><h2 className="mt-2 font-display text-3xl font-medium leading-tight sm:text-4xl">La formación desarrolla competencias. Los estándares ayudan a conservarlas.</h2><p className="mt-5 max-w-3xl text-sm leading-7 text-white/75">Los equipos y las herramientas cambian. Los métodos de previsión, decisión y seguimiento deben mantenerse accesibles después de la formación. LuxOps puede ayudar a documentarlos según el alcance acordado.</p></div><div className="rounded-[1.4rem] border border-white/15 bg-white/[.055] p-6 sm:p-8"><ClipboardList className="text-[#d3b77f]" size={25} /><h3 className="mt-4 font-display text-xl">El manual SOP Revenue Management</h3><p className="mt-3 text-sm leading-6 text-white/70">Un referente disponible por separado sobre previsiones, tarifas, disponibilidad, distribución, grupos y reuniones comerciales.</p><TrackedLink href={manual} eventName="training_revenue_manual_clicked" eventProperties={{ source_page: route, placement: 'continuity', topic: 'revenue_management', locale: 'es' }} className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#f4ead7] px-5 text-xs font-semibold text-[#173025] hover:bg-white">Descubrir el manual <ArrowRight size={14} /></TrackedLink></div></div></section>
    <section id="revenue-training-contact" className="scroll-mt-24 px-5 py-12 sm:px-8 lg:px-12 lg:py-16"><div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-16"><div><p className={label}>Inicie su proyecto</p><h2 className={`${heading} mt-2`}>Cuéntenos qué competencias desea desarrollar.</h2><p className="mt-4 max-w-lg text-sm leading-7 text-[#626b64]">Dirección, reservas o recepción: definimos la formación según sus prioridades, equipos y recursos disponibles.</p></div><div className="rounded-[1.4rem] border border-[#e8e2d7] bg-white p-6 shadow-[0_12px_36px_rgba(40,40,30,.05)] sm:p-8"><h3 className="font-display text-2xl text-[#0f211a]">Hablemos de su proyecto de formación</h3><p className="mb-6 mt-2 text-sm leading-6 text-[#626b64]">Describa su establecimiento, los equipos y las prácticas que quiere reforzar.</p><TrainingQuoteForm locale="es" topic="Revenue Management y rendimiento comercial" /></div></div></section>
    <section className="border-t border-[#e7e1d7] bg-white/65 px-5 py-12 sm:px-8 lg:px-12 lg:py-16"><div className="mx-auto max-w-[1000px]"><p className={label}>Preguntas frecuentes</p><h2 className={`${heading} mt-2`}>Sobre la formación</h2><div className="mt-6 divide-y divide-[#e7e1d7] border-t border-[#e7e1d7]">{faq.map(item => <div key={item.q} className="py-5"><h3 className="font-display text-lg text-[#0f211a]">{item.q}</h3><p className="mt-2 text-sm leading-6 text-[#626b64]">{item.a}</p></div>)}</div></div></section>
  </main>
}
