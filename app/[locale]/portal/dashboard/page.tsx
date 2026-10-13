'use client'

import { useEffect, useMemo, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDownToLine, ArrowRight, BookOpen, ChevronDown, FileText, Gift, Headphones, Package, Presentation, UserRound } from 'lucide-react'
import PortalShell from '@/components/portal/PortalShell'
import { PLAYBOOKS, getPlaybookIds, type Chapter, type Playbook } from '@/lib/chapters'
import { useCurrency } from '@/context/CurrencyContext'

interface Purchase { id: string; product_name: string; price_id: string; download_url: string | null; created_at: string; locale: string }
interface ClientProfile { full_name: string; hotel_name: string }
type Locale = 'fr' | 'en' | 'es'

const STORAGE = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/Playbook/`
const ui = {
  fr: { portal:'Espace client', hello:'Bonjour,', intro:'Retrouvez ici vos manuels et leurs fichiers, ainsi que les avantages associés à votre compte LuxOps.', library:'Votre bibliothèque opérationnelle', libraryBody:'Consultez vos références SOP et téléchargez les formats dont vos équipes ont besoin.', manual:'manuel', manuals:'manuels', files:'fichiers disponibles', resources:'Vos manuels', available:'Prêts à consulter et à télécharger', chapters:'chapitres', pdf:'Télécharger le PDF', pptx:'Télécharger le PPTX', open:'Voir les chapitres', close:'Masquer les chapitres', benefit:'Avantage réservé aux clients', discount:'-20 % sur un prochain manuel SOP', discountBody:'Une remise privée est associée à votre compte pour compléter votre bibliothèque.', choose:'Voir les manuels', complete:'Compléter votre bibliothèque', completeBody:'Découvrez les références qui complètent les manuels de votre espace.', discover:'Acheter avec -20 %', processing:'Préparation…', used:'Cette offre a déjà été utilisée.', unavailable:'Cette offre est momentanément indisponible.', support:"Une question sur vos fichiers ?", supportBody:'Notre équipe peut vous aider à retrouver un accès ou à choisir le bon format.', contact:'Contacter LuxOps', empty:'Votre bibliothèque est encore vide', emptyBody:'Retrouvez les manuels SOP LuxOps et choisissez les ressources adaptées à votre établissement.', browse:'Découvrir les manuels SOP', previewNote:'Aperçu local avec des données de démonstration. Les actions de téléchargement et de paiement sont désactivées.', profile:'Profil client', filesLabel:'Formats disponibles', account:'Votre espace LuxOps', noTitle:'Ressource indisponible' },
  en: { portal:'Client portal', hello:'Hello,', intro:'Your manuals and files are here, along with the benefits linked to your LuxOps account.', library:'Your operational library', libraryBody:'Consult your SOP references and download the formats your teams need.', manual:'manual', manuals:'manuals', files:'files available', resources:'Your manuals', available:'Ready to view and download', chapters:'chapters', pdf:'Download PDF', pptx:'Download PPTX', open:'View chapters', close:'Hide chapters', benefit:'Client benefit', discount:'20% off your next SOP manual', discountBody:'A private discount is linked to your account to help complete your library.', choose:'Browse manuals', complete:'Complete your library', completeBody:'Explore references that complement the manuals in your account.', discover:'Buy with 20% off', processing:'Preparing…', used:'This offer has already been used.', unavailable:'This offer is temporarily unavailable.', support:'A question about your files?', supportBody:'Our team can help restore access or choose the right format.', contact:'Contact LuxOps', empty:'Your library is waiting for its first manual', emptyBody:'Browse LuxOps SOP manuals and choose the resources that fit your property.', browse:'Discover SOP manuals', previewNote:'Local preview with sample data. Download and payment actions are disabled.', profile:'Client profile', filesLabel:'Available formats', account:'Your LuxOps account', noTitle:'Resource unavailable' },
  es: { portal:'Espacio cliente', hello:'Hola,', intro:'Aquí encontrarás tus manuales y archivos, junto con las ventajas asociadas a tu cuenta LuxOps.', library:'Tu biblioteca operativa', libraryBody:'Consulta tus referencias SOP y descarga los formatos que necesitan tus equipos.', manual:'manual', manuals:'manuales', files:'archivos disponibles', resources:'Tus manuales', available:'Listos para consultar y descargar', chapters:'capítulos', pdf:'Descargar PDF', pptx:'Descargar PPTX', open:'Ver capítulos', close:'Ocultar capítulos', benefit:'Ventaja para clientes', discount:'20% en tu próximo manual SOP', discountBody:'Tu cuenta incluye un descuento privado para completar tu biblioteca.', choose:'Ver los manuales', complete:'Completa tu biblioteca', completeBody:'Descubre referencias que complementan los manuales de tu cuenta.', discover:'Comprar con 20% de descuento', processing:'Preparando…', used:'Esta oferta ya se ha utilizado.', unavailable:'Esta oferta no está disponible temporalmente.', support:'¿Tienes una pregunta sobre tus archivos?', supportBody:'Nuestro equipo puede ayudarte a recuperar el acceso o elegir el formato adecuado.', contact:'Contactar con LuxOps', empty:'Tu biblioteca aún está vacía', emptyBody:'Descubre los manuales SOP LuxOps y elige los recursos adecuados para tu establecimiento.', browse:'Descubrir los manuales SOP', previewNote:'Vista previa local con datos de ejemplo. Las acciones de descarga y pago están desactivadas.', profile:'Perfil cliente', filesLabel:'Formatos disponibles', account:'Tu espacio LuxOps', noTitle:'Recurso no disponible' },
} as const

const presentation: Record<string, { image:string; department:string; slug:string; body:Record<Locale,string> }> = {
  'front-office': { image:'/images/editorial-hospitality/dept-front-office-v2.jpg', department:'Front Office', slug:'fo', body:{ fr:'Parcours client, communication, check-in, check-out et management de la réception.', en:'Guest journey, communication, check-in, check-out and front office management.', es:'Experiencia del cliente, comunicación, check-in, check-out y gestión de recepción.' } },
  housekeeping: { image:'/images/editorial-hospitality/dept-housekeeping-v2.jpg', department:'Housekeeping', slug:'hsk', body:{ fr:'Procédures, inspections et outils de pilotage pour structurer les opérations Housekeeping.', en:'Procedures, inspections and management tools for structured Housekeeping operations.', es:'Procedimientos, inspecciones y herramientas de gestión para las operaciones Housekeeping.' } },
  fb: { image:'/images/editorial-hospitality/dept-food-beverage-v2.jpg', department:'Food & Beverage', slug:'fb', body:{ fr:'Séquences de service, restaurant, bar, petit-déjeuner et room service.', en:'Service sequences, restaurant, bar, breakfast and room service.', es:'Secuencias de servicio, restaurante, bar, desayuno y room service.' } },
  spa: { image:'/images/editorial-hospitality/dept-spa-wellness-v2.jpg', department:'Spa & Wellness', slug:'spa', body:{ fr:'Parcours client, protocoles de soins, standards de présentation et pilotage du spa.', en:'Guest journey, treatment protocols, presentation standards and spa management.', es:'Experiencia del cliente, protocolos de tratamiento, presentación y gestión del spa.' } },
  'fo-starter-pack': { image:'/product-previews/fo-starter-pack/fr/01-sop-check-in.webp', department:'Front Office', slug:'fo-starter-pack', body:{ fr:'Checklists, scripts et outils modifiables pour les opérations de réception.', en:'Editable checklists, scripts and tools for front office operations.', es:'Checklists, guiones y herramientas editables para recepción.' } },
  'hsk-starter-pack': { image:'/product-previews/hsk-starter-pack/fr/01-inspection-depart.webp', department:'Housekeeping', slug:'hsk-starter-pack', body:{ fr:"Checklists d’inspection et outils de contrôle pour les équipes Housekeeping.", en:'Inspection checklists and control tools for Housekeeping teams.', es:'Checklists de inspección y herramientas de control para Housekeeping.' } },
  'fb-starter-pack': { image:'/product-previews/fb-starter-pack/fr/01-ouverture-restaurant.webp', department:'Food & Beverage', slug:'fb-starter-pack', body:{ fr:'Checklists et outils pratiques pour le restaurant, le bar et le room service.', en:'Practical checklists and tools for restaurant, bar and room service.', es:'Checklists y herramientas para restaurante, bar y room service.' } },
}
const mainManualIds = ['front-office', 'housekeeping', 'fb', 'spa']
const fileUrl = (path:string) => `${STORAGE}${path}`

export default function DashboardPage({preview=false}:{preview?:boolean}) {
  const router = useRouter()
  const params = useParams()
  const locale = params.locale as string
  const lang:Locale = locale === 'fr' || locale === 'es' ? locale : 'en'
  const t = ui[lang]
  const [email,setEmail] = useState('')
  const [profile,setProfile] = useState<ClientProfile>({full_name:'',hotel_name:''})
  const [purchases,setPurchases] = useState<Purchase[]>([])
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    if (preview) {
      setPurchases([
        { id:'preview-fo', product_name:'Manuel SOP Front Office', price_id:'price_1TZRZZDVLJTOFkjUd3B9x44e', download_url:null, created_at:'', locale },
        { id:'preview-hsk', product_name:'Manuel SOP Housekeeping', price_id:'price_1TBZ9TDVLJTOFkjUwWnoKaGk', download_url:null, created_at:'', locale },
      ])
      setLoading(false)
      return
    }
    const load = async () => {
      try {
        const { supabase } = await import('@/lib/supabase')
        const { data:{ session } } = await supabase.auth.getSession()
        if (!session) { router.replace(`/${locale}/portal/login`); return }
        setEmail(session.user.email ?? '')
        const [{ data:purchaseData },{ data:profileData }] = await Promise.all([
          supabase.from('purchases').select('*').order('created_at',{ascending:false}),
          supabase.from('profiles').select('full_name, hotel_name').eq('id',session.user.id).maybeSingle(),
        ])
        setPurchases(purchaseData ?? [])
        if (profileData) setProfile({full_name:profileData.full_name??'',hotel_name:profileData.hotel_name??''})
        setLoading(false)
      } catch { router.replace(`/${locale}/portal/login`) }
    }
    load()
  },[locale,router,preview])

  const unlockedIds = useMemo(() => {
    const ids = new Set<string>()
    purchases.forEach(p => getPlaybookIds(p.price_id).forEach(id => ids.add(id)))
    return ids
  },[purchases])
  const playbooks = Array.from(unlockedIds).map(id => PLAYBOOKS[id]).filter(Boolean)
  const recommendations = mainManualIds.filter(id => !unlockedIds.has(id)).slice(0,2)
  const fileCount = playbooks.reduce((n,p) => n + p.chapters.length * 2,0)

  if (loading) return <div className="flex min-h-[70vh] items-center justify-center"><div className="h-7 w-7 animate-spin rounded-full border-2 border-[#ded7c9] border-t-[#10271f]" /></div>

  return <PortalShell locale={locale} email={email} preview={preview}>
    <div className="mb-9 flex flex-col justify-between gap-5 border-b border-[#e8e3d8] pb-8 sm:flex-row sm:items-end">
      <div>
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a27c43]">{t.portal}</p>
        <h1 className="font-display text-[2.25rem] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[2.8rem]">{profile.full_name ? `${t.hello} ${profile.full_name.split(/\s+/)[0]}` : t.hello}</h1>
        <p className="mt-3 max-w-2xl text-[14px] leading-6 text-[#70786f]">{t.intro}</p>
        {preview && <p className="mt-3 inline-flex max-w-2xl rounded-full border border-[#e6d8bb] bg-[#f5efe2] px-3.5 py-2 text-xs leading-5 text-[#765d36]">{t.previewNote}</p>}
      </div>
      {(profile.hotel_name || profile.full_name) && <div className="flex items-center gap-3 sm:mb-1 sm:max-w-[250px] sm:justify-end">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#e5dece] bg-white text-[#8d6b3e]"><UserRound size={18}/></span>
        <div className="min-w-0"><p className="truncate text-sm font-semibold text-[#1c332a]">{profile.hotel_name || profile.full_name}</p><p className="mt-0.5 truncate text-xs text-[#858a82]">{t.account}</p></div>
      </div>}
    </div>

    <section className="mb-9 overflow-hidden rounded-[26px] border border-[#e8e1d4] bg-[#fffefa] shadow-[0_12px_38px_rgba(36,49,39,0.045)]">
      <div className="flex flex-col gap-6 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-8">
        <div className="max-w-2xl">
          <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.19em] text-[#a27c43]"><BookOpen size={14}/>{t.resources}</div>
          <h2 className="font-display text-2xl font-medium tracking-[-0.025em] sm:text-[1.8rem]">{t.library}</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[#727a72]">{t.libraryBody}</p>
        </div>
        {playbooks.length > 0 && <div className="flex shrink-0 gap-2.5">
          <Stat value={String(playbooks.length)} label={playbooks.length > 1 ? t.manuals : t.manual}/>
          <Stat value={String(fileCount)} label={t.files}/>
        </div>}
      </div>
    </section>

    {playbooks.length===0 ? <section className="rounded-[26px] border border-[#e8e1d4] bg-[#fffefa] px-6 py-14 text-center shadow-[0_10px_32px_rgba(36,49,39,0.04)]">
      <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f2eee5] text-[#987746]"><Package size={23}/></span>
      <h2 className="font-display text-2xl font-medium">{t.empty}</h2>
      <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#727a72]">{t.emptyBody}</p>
      <Link href={`/${locale}/playbooks`} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#10271f] px-5 py-3 text-sm font-semibold text-white no-underline shadow-[0_6px_18px_rgba(16,39,31,0.16)] transition hover:-translate-y-0.5">{t.browse}<ArrowRight size={15}/></Link>
    </section> : <>
      <div className="mb-5 flex items-end justify-between gap-4">
        <div><p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#a27c43]">{t.available}</p><h2 className="font-display text-[1.8rem] font-medium tracking-[-0.03em]">{t.resources}</h2></div>
      </div>
      <div className="grid gap-5">
        {playbooks.map((playbook,index)=><PlaybookCard key={playbook.id} playbook={playbook} lang={lang} initiallyOpen={index===0} preview={preview}/>) }
      </div>

      {recommendations.length>0 && <>
        <section className="mt-10 rounded-[24px] border border-[#e5d7bb] bg-[#f2ecdf] px-5 py-5 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:px-7">
          <div className="flex items-start gap-4">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fffaf0] text-[#987746]"><Gift size={18}/></span>
            <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#987746]">{t.benefit}</p><h2 className="mt-1 font-display text-xl font-medium">{t.discount}</h2><p className="mt-1 text-sm leading-5 text-[#6f766e]">{t.discountBody}</p></div>
          </div>
          <Link href="#recommendations" className="mt-4 inline-flex shrink-0 items-center gap-2 rounded-full border border-[#cbb78f] bg-[#fffefa] px-4 py-2.5 text-sm font-semibold text-[#263b32] no-underline transition hover:border-[#a27c43] sm:mt-0">{t.choose}<ArrowRight size={15}/></Link>
        </section>
        <section id="recommendations" className="mt-10 scroll-mt-28">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#a27c43]">LuxOps</p><h2 className="font-display text-[1.8rem] font-medium tracking-[-0.03em]">{t.complete}</h2><p className="mt-2 text-sm text-[#727a72]">{t.completeBody}</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">{recommendations.map(id=><Recommendation key={id} id={id} lang={lang} cta={t.discover} preview={preview}/>)}</div>
        </section>
      </>}
    </>}

    <section className="mt-10 flex flex-col gap-4 rounded-[22px] border border-[#e8e3d8] bg-[#fffefa] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <div className="flex items-start gap-3.5"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f2eee5] text-[#987746]"><Headphones size={18}/></span><div><h2 className="text-sm font-semibold text-[#20372d]">{t.support}</h2><p className="mt-1 text-sm leading-5 text-[#727a72]">{t.supportBody}</p></div></div>
      <Link href={`/${locale}/contact`} className="inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-[#20372d] no-underline transition hover:bg-[#f4f1ea]">{t.contact}<ArrowRight size={15}/></Link>
    </section>
  </PortalShell>
}

function Stat({value,label}:{value:string;label:string}) { return <div className="min-w-[76px] rounded-2xl border border-[#eee8dc] bg-[#f8f6f0] px-3 py-2 text-center"><p className="text-base font-semibold leading-5 text-[#243b31]">{value}</p><p className="mt-1 text-[10px] leading-3 text-[#777e75]">{label}</p></div> }

function PlaybookCard({playbook,lang,initiallyOpen,preview}:{playbook:Playbook;lang:Locale;initiallyOpen:boolean;preview:boolean}) {
  const [open,setOpen] = useState(initiallyOpen)
  const d=presentation[playbook.id]
  return <article className="overflow-hidden rounded-[24px] border border-[#e7e1d5] bg-[#fffefa] shadow-[0_8px_28px_rgba(36,49,39,0.045)] transition-shadow hover:shadow-[0_14px_38px_rgba(36,49,39,0.08)]">
    <div className="grid md:grid-cols-[210px_minmax(0,1fr)]">
      <div className="relative min-h-[190px] bg-[#e9e3d7] md:min-h-[220px]"><Image src={d?.image??'/images/editorial-hospitality/playbooks-flatlay.jpg'} alt="" fill className="object-cover" sizes="(min-width:768px) 210px, 100vw"/></div>
      <div className="flex flex-col justify-center p-5 sm:p-7">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#a27c43]">{d?.department??'LuxOps'}</p>
        <h3 className="font-display text-[1.65rem] font-medium leading-tight tracking-[-0.025em]">{playbookTitle(playbook,lang)}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#727a72]">{d?.body[lang]}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-[#69736a]">
          <span className="inline-flex items-center gap-2"><BookOpen size={14} className="text-[#9b7947]"/>{playbook.chapters.length} {ui[lang].chapters}</span>
          <span className="inline-flex items-center gap-2"><FileText size={14} className="text-[#9b7947]"/>PDF</span>
          <span className="inline-flex items-center gap-2"><Presentation size={14} className="text-[#9b7947]"/>PPTX</span>
        </div>
        <button type="button" aria-expanded={open} onClick={()=>setOpen(value=>!value)} className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#10271f] px-4 py-2.5 text-xs font-semibold text-white shadow-[0_5px_15px_rgba(16,39,31,0.12)] transition hover:-translate-y-0.5">
          {open?ui[lang].close:ui[lang].open}<ChevronDown size={15} className={`transition-transform ${open?'rotate-180':''}`}/>
        </button>
      </div>
    </div>
    {open&&<div className="border-t border-[#eee9df] bg-[#fbfaf6] px-4 py-2 sm:px-6 sm:py-3">
      {playbook.chapters.map(chapter=><ChapterRow key={chapter.number} chapter={chapter} lang={lang} preview={preview}/>)}
    </div>}
  </article>
}

function playbookTitle(playbook:Playbook,lang:Locale) {
  if (playbook.id === 'front-office') return lang==='fr' ? 'Manuel SOP Front Office' : 'Front Office SOP Manual'
  if (playbook.id === 'housekeeping') return lang==='fr' ? 'Manuel SOP Housekeeping' : 'Housekeeping SOP Manual'
  if (playbook.id === 'fb') return lang==='fr' ? 'Manuel SOP Food & Beverage' : 'Food & Beverage SOP Manual'
  if (playbook.id === 'spa') return lang==='fr' ? 'Manuel SOP Spa & Wellness' : 'Spa & Wellness SOP Manual'
  return lang==='fr' ? playbook.titleFr : playbook.titleEn
}

function ChapterRow({chapter,lang,preview}:{chapter:Chapter;lang:Locale;preview:boolean}) {
  const fr=lang==='fr'
  return <div className="flex flex-col gap-3 border-b border-[#eee9df] py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
    <div className="flex min-w-0 items-start gap-3"><span className="mt-0.5 flex h-7 min-w-7 items-center justify-center rounded-full bg-[#f0ebdf] px-1 font-display text-xs text-[#947243]">{String(chapter.number).padStart(2,'0')}</span><p className="pt-1 text-sm font-medium leading-5 text-[#293c33]">{fr?chapter.titleFr:chapter.titleEn}</p></div>
    <div className="flex flex-wrap gap-2 pl-10 sm:flex-nowrap sm:pl-0">
      {preview ? <><button type="button" disabled className="inline-flex h-9 items-center gap-2 rounded-full border border-[#e2dccf] bg-white px-3.5 text-[11px] font-semibold text-[#34463c] opacity-60"><ArrowDownToLine size={13}/>{ui[lang].pdf}</button><button type="button" disabled className="inline-flex h-9 items-center gap-2 rounded-full border border-[#e2dccf] bg-white px-3.5 text-[11px] font-semibold text-[#34463c] opacity-60"><ArrowDownToLine size={13}/>{ui[lang].pptx}</button></> : <><a href={fileUrl(fr?chapter.pdfFr:chapter.pdfEn)} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 items-center gap-2 rounded-full border border-[#e2dccf] bg-white px-3.5 text-[11px] font-semibold text-[#34463c] no-underline transition hover:border-[#bca679] hover:bg-[#fffdf8]"><ArrowDownToLine size={13}/>{ui[lang].pdf}</a><a href={fileUrl(fr?chapter.pptxFr:chapter.pptxEn)} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 items-center gap-2 rounded-full border border-[#e2dccf] bg-white px-3.5 text-[11px] font-semibold text-[#34463c] no-underline transition hover:border-[#bca679] hover:bg-[#fffdf8]"><ArrowDownToLine size={13}/>{ui[lang].pptx}</a></>}
    </div>
  </div>
}

function Recommendation({id,lang,cta,preview}:{id:string;lang:Locale;cta:string;preview:boolean}) {
  const p=PLAYBOOKS[id],d=presentation[id]
  if (!p || !d) return null
  const title=lang==='fr'?p.titleFr.replace('Playbook','Manuel SOP'):p.titleEn.replace('Playbook','SOP Manual')
  return <article className="grid overflow-hidden rounded-[22px] border border-[#e7e1d5] bg-[#fffefa] shadow-[0_7px_24px_rgba(36,49,39,0.04)] sm:grid-cols-[150px_minmax(0,1fr)]">
    <div className="relative min-h-[150px] bg-[#e9e3d7]"><Image src={d.image} alt="" fill className="object-cover" sizes="150px"/></div>
    <div className="flex flex-col justify-center p-5"><h3 className="font-display text-xl font-medium leading-tight">{title}</h3><p className="mt-2 text-xs leading-5 text-[#727a72]">{d.body[lang]}</p><PortalBenefitButton playbookId={id} lang={lang} label={cta} preview={preview}/></div>
  </article>
}

function PortalBenefitButton({playbookId,lang,label,preview}:{playbookId:string;lang:Locale;label:string;preview:boolean}) {
  const { currency } = useCurrency()
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')

  async function startCheckout() {
    setLoading(true)
    setError('')
    try {
      const { supabase } = await import('@/lib/supabase')
      const { data:{ session } } = await supabase.auth.getSession()
      if (!session) throw new Error('Authentication required')
      const response = await fetch('/api/portal-benefit-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.access_token}` },
        body: JSON.stringify({ playbookId, locale: lang, currency }),
      })
      const data = await response.json()
      if (!response.ok) {
        setError(data.error === 'Benefit already used' ? ui[lang].used : ui[lang].unavailable)
        setLoading(false)
        return
      }
      window.location.href = data.url
    } catch {
      setError(ui[lang].unavailable)
      setLoading(false)
    }
  }

  return <div className="mt-4"><button type="button" onClick={startCheckout} disabled={loading||preview} className="inline-flex items-center gap-2 rounded-full border border-[#d9c7a3] px-4 py-2 text-xs font-semibold text-[#37483e] transition hover:bg-[#f6f1e7] disabled:opacity-60">{loading?ui[lang].processing:label}<ArrowRight size={14}/></button>{error&&<p className="mt-2 text-xs text-[#8b4a3d]">{error}</p>}</div>
}
