'use client'

import { type FormEvent, useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, BookOpen, Download, LoaderCircle, Minus, Plus, X } from 'lucide-react'

const LAST_SAMPLE_PAGE = 11 // zero-based PDF page index (the twelfth page)

const COPY = {
  fr: {
    chapter: 'Chapitre 04',
    title: 'Communication client',
    previous: 'Page précédente',
    next: 'Page suivante',
    close: 'Fermer le livre',
    singlePage: 'Une page',
    doublePage: 'Deux pages',
    zoomOut: 'Zoom arrière',
    zoomIn: 'Zoom avant',
    cover: 'Couverture du chapitre 04',
    lockedTitle: 'Lire la suite du chapitre',
    directTitle: 'Recevoir le chapitre complet',
    lockedDescription: 'Saisissez votre e-mail pour télécharger le chapitre complet en PDF',
    directDescription: 'Saisissez votre e-mail pour télécharger le chapitre complet en PDF',
    emailPlaceholder: 'Adresse e-mail',
    send: 'Télécharger le PDF complet',
    downloading: 'Préparation…',
    downloadAgain: 'Télécharger le chapitre',
    error: 'Le téléchargement n’a pas abouti. Réessayez.',
  },
  en: {
    chapter: 'Chapter 04',
    title: 'Guest Communication',
    previous: 'Previous page',
    next: 'Next page',
    close: 'Close book',
    singlePage: 'Single page',
    doublePage: 'Two pages',
    zoomOut: 'Zoom out',
    zoomIn: 'Zoom in',
    cover: 'Chapter 04 cover',
    lockedTitle: 'Continue reading',
    directTitle: 'Get the complete chapter',
    lockedDescription: 'Enter your email to download the complete chapter as a PDF',
    directDescription: 'Enter your email to download the complete chapter as a PDF',
    emailPlaceholder: 'Email address',
    send: 'Download the complete PDF',
    downloading: 'Preparing…',
    downloadAgain: 'Download the chapter',
    error: 'The download failed. Please try again.',
  },
} as const

export default function FrontOfficeExcerptDialog({
  locale,
  startPage = 1,
  productId = 'fo',
  chapterTitle = 'Guest Communication',
  chapterNumber = 4,
  chapterPages = 28,
  presentation = 'document',
  onClose,
}: {
  locale: string
  startPage?: number
  productId?: 'fo' | 'hsk' | 'fb' | 'spa' | 'revenue'
  chapterTitle?: string
  chapterNumber?: number
  chapterPages?: number
  presentation?: 'book' | 'document'
  onClose: () => void
}) {
  const lang = locale === 'fr' ? 'fr' : 'en'
  const copy = productId === 'revenue'
    ? { ...COPY[lang], chapter: lang === 'fr' ? 'Chapitre 02' : 'Chapter 02', title: lang === 'fr' ? 'Réservations, demande et forecast' : 'Reservations, demand and forecasting', cover: lang === 'fr' ? 'Couverture du chapitre 02' : 'Chapter 02 cover' }
    : COPY[lang]
  const [isOpen, setIsOpen] = useState(false)
  const [showCover, setShowCover] = useState(startPage === 1)
  const [isCompact, setIsCompact] = useState(false)
  const [viewMode, setViewMode] = useState<'single' | 'double'>('double')
  const [zoom, setZoom] = useState(100)
  const [pageIndex, setPageIndex] = useState(presentation === 'document' ? 0 : 1)
  const [gated, setGated] = useState(false)
  const [flipping, setFlipping] = useState<{ direction: 'next' | 'previous'; target: number } | null>(null)
  const [email, setEmail] = useState('')
  const [isPreparing, setIsPreparing] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const stageRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<{ x: number; y: number; left: number; top: number } | null>(null)
  const [dragging, setDragging] = useState(false)
  const [stageSize, setStageSize] = useState({ width: 900, height: 600 })
  const previewProductId = productId === 'fo' ? 'front-office' : productId
  const pageRoot = `/Previews/${previewProductId}-chapter${String(chapterNumber).padStart(2, '0')}/${lang}`
  const pageExtension = productId === 'fo' ? 'png' : 'jpg'
  const chapterCode = String(chapterNumber).padStart(2, '0')
  const directDownload = startPage > LAST_SAMPLE_PAGE
  const downloadName = lang === 'fr'
    ? `LuxOps-Chapitre-${chapterCode}-${productId}-2027.pdf`
    : `LuxOps-Chapter-${chapterCode}-${productId}-2027.pdf`
  const isSinglePage = isCompact || viewMode === 'single' || (presentation === 'document' && pageIndex === 0)
  const gateVisible = isSinglePage ? gated : pageIndex >= LAST_SAMPLE_PAGE
  const pageStart = isOpen ? pageIndex + 1 : 1
  const pageEnd = isOpen ? Math.min(pageIndex + (isSinglePage ? 1 : 2), LAST_SAMPLE_PAGE + 1) : pageStart
  const progress = gateVisible ? 100 : Math.max(8, (pageEnd / (LAST_SAMPLE_PAGE + 1)) * 100)

  const openBook = useCallback(() => {
    const pdfIndex = Math.max(0, startPage - 1)
    const spreadIndex = pdfIndex === 0 ? 1 : pdfIndex % 2 === 0 ? pdfIndex - 1 : pdfIndex
    const openAtEmailGate = startPage > LAST_SAMPLE_PAGE
    setPageIndex(presentation === 'document' && pdfIndex === 0 ? 0 : isCompact ? pdfIndex : openAtEmailGate ? LAST_SAMPLE_PAGE : Math.min(LAST_SAMPLE_PAGE - 2, spreadIndex))
    setGated(openAtEmailGate)
    setFlipping(null)
    setZoom(100)
    setShowCover(presentation === 'book' && startPage === 1)
    setIsOpen(true)
    if (presentation === 'book' && startPage === 1) {
      window.setTimeout(() => setShowCover(false), 520)
    }
  }, [isCompact, presentation, startPage, setZoom])

  useEffect(() => {
    const timer = window.setTimeout(openBook, 40)
    return () => window.clearTimeout(timer)
  }, [openBook])

  const nextPage = useCallback(() => {
    if (!isOpen) {
      openBook()
      return
    }
    if (flipping) return
    if (gateVisible) return
    if (pageIndex >= LAST_SAMPLE_PAGE) {
      setGated(true)
      return
    }

    const target = Math.min(LAST_SAMPLE_PAGE, pageIndex + (isSinglePage ? 1 : 2))
    if (isSinglePage || presentation === 'document') {
      setPageIndex(target)
      return
    }
    setFlipping({ direction: 'next', target })
    window.setTimeout(() => setPageIndex(target), 210)
    window.setTimeout(() => setFlipping(null), 420)
  }, [flipping, gateVisible, isOpen, isSinglePage, openBook, pageIndex, presentation])

  const previousPage = useCallback(() => {
    if (!isOpen || flipping) return
    if (gateVisible && (isCompact || (presentation === 'document' && isSinglePage))) {
      setGated(false)
      return
    }
    if (pageIndex <= (presentation === 'document' ? 0 : 1)) return
    const target = Math.max(presentation === 'document' ? 0 : 1, pageIndex - (isSinglePage ? 1 : 2))
    if (isSinglePage || presentation === 'document') {
      setPageIndex(target)
      return
    }
    setFlipping({ direction: 'previous', target })
    window.setTimeout(() => setPageIndex(target), 210)
    window.setTimeout(() => setFlipping(null), 420)
  }, [flipping, gateVisible, isCompact, isOpen, isSinglePage, pageIndex, presentation])

  useEffect(() => {
    if (presentation !== 'document' || !stageRef.current) return
    const stage = stageRef.current
    const update = () => setStageSize({ width: stage.clientWidth, height: stage.clientHeight })
    update()
    const observer = new ResizeObserver(update)
    observer.observe(stage)
    return () => observer.disconnect()
  }, [presentation])

  useEffect(() => {
    if (presentation !== 'document') return
    const frame = requestAnimationFrame(() => {
      const stage = stageRef.current
      if (!stage) return
      stage.scrollLeft = (stage.scrollWidth - stage.clientWidth) / 2
      stage.scrollTop = (stage.scrollHeight - stage.clientHeight) / 2
    })
    return () => cancelAnimationFrame(frame)
  }, [presentation, zoom, isSinglePage, stageSize.width, stageSize.height])

  useEffect(() => {
    const media = window.matchMedia('(max-width: 639px)')
    const updateLayout = () => setIsCompact(media.matches)
    updateLayout()
    media.addEventListener('change', updateLayout)
    return () => media.removeEventListener('change', updateLayout)
  }, [])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') previousPage()
      if (event.key === 'ArrowRight') nextPage()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose, nextPage, previousPage])

  useEffect(() => () => {
    if (downloadUrl) URL.revokeObjectURL(downloadUrl)
  }, [downloadUrl])

  async function prepareDownload(address: string) {
    setError(false)
    setIsPreparing(true)
    try {
      const response = await fetch('/api/preview/chapter04', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: address, locale: lang, product: productId }),
      })
      if (!response.ok) throw new Error('Preview download failed')
      const pdf = await response.blob()
      const objectUrl = URL.createObjectURL(pdf)
      setDownloadUrl(objectUrl)
      const link = document.createElement('a')
      link.href = objectUrl
      link.download = downloadName
      document.body.appendChild(link)
      link.click()
      link.remove()
    } catch {
      setError(true)
    } finally {
      setIsPreparing(false)
    }
  }

  function handleEmailSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim() || isPreparing) return
    void prepareDownload(email.trim())
  }

  function renderPdfPage(index: number, label: string) {
    return (
      <div className="relative h-full min-w-0 overflow-hidden bg-[#fbfaf7]">
        <Image
          src={`${pageRoot}/page-${String(index + 1).padStart(2, '0')}.${pageExtension}`}
          alt={label}
          fill
          unoptimized
          sizes="(min-width: 640px) 39vw, 88vw"
          draggable={false}
          className="pointer-events-none select-none object-contain"
        />
      </div>
    )
  }

  function renderGateContent(id: string) {
    return (
      <div className="flex h-full min-h-0 flex-col items-center justify-center overflow-y-auto bg-[#fbfaf7] px-5 py-6 text-center sm:px-8">
        <h3 className="font-display text-xl font-medium leading-tight text-[#17251e] sm:text-2xl">{directDownload ? copy.directTitle : copy.lockedTitle}</h3>
        <p className="mt-2 max-w-xs text-sm leading-5 text-[#687169]">{directDownload ? copy.directDescription : copy.lockedDescription} · {chapterPages} {lang === 'fr' ? 'pages' : 'pages'}</p>
        {downloadUrl ? (
          <a href={downloadUrl} download={downloadName} className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#10251d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#263d32]">
            <Download size={16} />{copy.downloadAgain}
          </a>
        ) : (
          <form id={id} className="mt-5 w-full max-w-sm" onSubmit={handleEmailSubmit}>
            <label htmlFor={`${id}-email`} className="sr-only">{copy.emailPlaceholder}</label>
            <input id={`${id}-email`} type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder={copy.emailPlaceholder} className="h-12 w-full rounded-full border border-[#d6d2c8] bg-white px-5 text-sm text-[#17251e] outline-none transition placeholder:text-[#999b94] focus:border-[#82704f] focus:ring-4 focus:ring-[#a58658]/10" />
            <button type="submit" disabled={isPreparing} className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#10251d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#263d32] disabled:opacity-60">
              {isPreparing ? <LoaderCircle size={16} className="animate-spin" /> : <Download size={16} />}
              {isPreparing ? copy.downloading : copy.send}
            </button>
            {error && <p role="alert" className="mt-2 text-xs text-red-700">{copy.error}</p>}
          </form>
        )}
      </div>
    )
  }

  function renderCoverLayer(compact: boolean) {
    if (!showCover) return null
    return (
      <button
        type="button"
        onClick={openBook}
        disabled={isOpen}
        aria-label={copy.title}
        className="lux-book-cover absolute top-0 z-30 h-full cursor-pointer overflow-hidden bg-[#fbfaf7]"
        style={{
          left: compact ? '0%' : isOpen ? '0%' : '25%',
          width: compact ? '100%' : '50%',
          transform: isOpen ? 'rotateY(-180deg)' : 'rotateY(0deg)',
          transformOrigin: 'left center',
          transformStyle: 'preserve-3d',
          transition: 'left 520ms cubic-bezier(.22,.72,.18,1), transform 520ms cubic-bezier(.22,.72,.18,1)',
          pointerEvents: isOpen ? 'none' : 'auto',
        }}
      >
        <span className="lux-book-face lux-book-face-front absolute inset-0">
          {renderPdfPage(0, copy.cover)}
        </span>
        <span aria-hidden="true" className="lux-book-face lux-book-face-back lux-book-cover-inside absolute inset-0 overflow-hidden">
          <span className="absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-[#d9d2c6] to-transparent" />
          <span className="absolute inset-y-0 right-0 w-[3%] bg-gradient-to-l from-[#cfc7b9]/50 to-transparent" />
        </span>
      </button>
    )
  }

  function renderPage(index: number, side: 'left' | 'right') {
    const label = `Page ${index + 1}`
    return (
      <div className={`lux-book-page relative h-full min-w-0 overflow-hidden bg-[#fbfaf7] ${side === 'left' ? 'lux-book-page-left' : 'lux-book-page-right'}`}>
        {renderPdfPage(index, label)}
        <span aria-hidden="true" className={`pointer-events-none absolute inset-y-0 z-10 w-8 ${side === 'left' ? 'left-0 bg-gradient-to-r from-[#473c2f]/[.12] to-transparent' : 'right-0 bg-gradient-to-l from-[#473c2f]/[.10] to-transparent'}`} />
      </div>
    )
  }

  if (presentation === 'document') {
    if (typeof document === 'undefined') return null
    const fitWidth = Math.max(200, Math.min((stageSize.width - 48) / (isSinglePage ? 1 : 2), (stageSize.height - 48) * 1033 / 1462))
    const pageWidth = Math.round(fitWidth * zoom / 100)
    const pageHeight = Math.round(pageWidth * 1462 / 1033)
    const documentPage = (index: number) => (
      <div key={index} className="lux-document-page relative shrink-0 overflow-hidden rounded-[3px] bg-[#fbfaf7] shadow-[0_16px_42px_rgba(5,17,11,.22)]" style={{ width: pageWidth, height: pageHeight }} aria-label={`Page ${index + 1}`}>
        <Image src={`${pageRoot}/page-${String(index + 1).padStart(2, '0')}.${pageExtension}`} alt={`${lang === 'fr' ? 'Page' : 'Page'} ${index + 1} — ${chapterTitle}`} width={1033} height={1462} unoptimized draggable={false} className="block h-full w-full select-none" />
      </div>
    )

    return createPortal(<div className="lux-reader-backdrop fixed inset-0 z-[80] flex items-center justify-center p-2 backdrop-blur-[2px] sm:p-5" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) onClose() }}>
      <section role="dialog" aria-modal="true" aria-labelledby="hsk-document-title" className="lux-reader-dialog flex h-[min(96dvh,980px)] w-full max-w-[1440px] flex-col overflow-hidden rounded-[18px] border border-[#d9c9a8]/25 bg-[#10251d] text-[#f2eee6] shadow-[0_32px_100px_rgba(13,25,19,.38)] sm:h-[min(94dvh,980px)] sm:rounded-[24px]">
        <header className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <h2 id="hsk-document-title" className="font-display text-base leading-tight sm:text-xl">{lang === 'fr' ? 'Chapitre' : 'Chapter'} {chapterCode} <span className="mx-1 text-[#b5a990]">/</span> {chapterTitle}</h2>
            <p className="mt-1 text-[10px] text-white/60">{lang === 'fr' ? `Aperçu de 12 pages sur ${chapterPages}` : `Preview of 12 of ${chapterPages} pages`}</p>
          </div>
          <div className="flex items-center gap-2">
            {!isCompact && <div className="hidden items-center rounded-full border border-white/15 bg-white/[.05] p-1 sm:flex" role="group" aria-label={lang === 'fr' ? 'Affichage' : 'Display'}>
              <button type="button" aria-pressed={viewMode === 'double'} onClick={() => { setViewMode('double'); setPageIndex(index => index > 0 && index % 2 === 0 ? index - 1 : index); setGated(false) }} className={`rounded-full px-3 py-1.5 text-xs ${viewMode === 'double' ? 'bg-[#e9dfcd] text-[#18251e]' : 'text-white/80 hover:bg-white/10'}`}>{copy.doublePage}</button>
              <button type="button" aria-pressed={viewMode === 'single'} onClick={() => { setViewMode('single'); setGated(false) }} className={`rounded-full px-3 py-1.5 text-xs ${viewMode === 'single' ? 'bg-[#e9dfcd] text-[#18251e]' : 'text-white/80 hover:bg-white/10'}`}>{copy.singlePage}</button>
            </div>}
            <button type="button" onClick={onClose} aria-label={copy.close} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 hover:bg-white/10"><X size={18} /></button>
          </div>
        </header>
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 py-2 sm:px-6">
          <p className="hidden text-xs text-white/60 sm:block">{lang === 'fr' ? 'Zoomez, puis faites glisser les pages pour lire les détails.' : 'Zoom in, then drag the pages to read details.'}</p>
          <div className="ml-auto flex items-center gap-1 rounded-full border border-white/15 bg-white/[.05] p-1">
            <button type="button" onClick={() => setZoom(value => Math.max(75, value - 25))} disabled={zoom <= 75} aria-label={copy.zoomOut} className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10 disabled:opacity-35"><Minus size={15} /></button>
            <button type="button" onClick={() => setZoom(100)} aria-label={lang === 'fr' ? 'Ajuster à la fenêtre' : 'Fit to window'} className="min-w-12 px-1 text-center text-xs tabular-nums hover:text-[#e9dfcd]">{zoom}%</button>
            <button type="button" onClick={() => setZoom(value => Math.min(250, value + 25))} disabled={zoom >= 250} aria-label={copy.zoomIn} className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10 disabled:opacity-35"><Plus size={15} /></button>
          </div>
        </div>
        <main ref={stageRef} className={`min-h-0 flex-1 overflow-auto overscroll-contain bg-[#d9d3c7] ${dragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`} style={{ touchAction: 'pan-x pan-y' }} onPointerDown={event => {
          if (event.pointerType !== 'mouse' || event.button !== 0 || (event.target as HTMLElement).closest('input,button,a,form')) return
          const stage = stageRef.current
          if (!stage) return
          dragRef.current = { x: event.clientX, y: event.clientY, left: stage.scrollLeft, top: stage.scrollTop }
          stage.setPointerCapture(event.pointerId)
          setDragging(true)
        }} onPointerMove={event => {
          const start = dragRef.current
          const stage = stageRef.current
          if (!start || !stage) return
          stage.scrollLeft = start.left - (event.clientX - start.x)
          stage.scrollTop = start.top - (event.clientY - start.y)
        }} onPointerUp={() => { dragRef.current = null; setDragging(false) }} onPointerCancel={() => { dragRef.current = null; setDragging(false) }}>
          <div className="flex min-h-full min-w-full w-max items-center justify-center gap-2 p-4 sm:gap-3 sm:p-6">
            {gateVisible && isSinglePage
              ? <div className="overflow-hidden rounded-[3px] shadow-[0_16px_42px_rgba(5,17,11,.22)]" style={{ width: pageWidth, height: pageHeight }}>{renderGateContent('hsk-document-gate')}</div>
              : <>
                {documentPage(pageIndex)}
                {!isSinglePage && (gateVisible
                  ? <div className="overflow-hidden rounded-[3px] shadow-[0_16px_42px_rgba(5,17,11,.22)]" style={{ width: pageWidth, height: pageHeight }}>{renderGateContent('hsk-document-gate')}</div>
                  : documentPage(Math.min(pageIndex + 1, LAST_SAMPLE_PAGE)))}
              </>}
          </div>
        </main>
        <footer className="flex shrink-0 items-center justify-between gap-3 border-t border-white/10 px-4 py-3 sm:px-6">
          <button type="button" onClick={previousPage} disabled={!isOpen || (!gated && pageIndex <= 0)} aria-label={copy.previous} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-4 text-xs font-semibold hover:bg-white/10 disabled:opacity-35"><ArrowLeft size={16} /><span className="hidden sm:inline">{copy.previous}</span></button>
          <span aria-live="polite" className="text-xs font-medium tabular-nums text-white/80">{gateVisible ? '12+' : `${String(pageStart).padStart(2, '0')}${pageEnd > pageStart ? `–${String(pageEnd).padStart(2, '0')}` : ''}`} / 12</span>
          <button type="button" onClick={nextPage} disabled={gateVisible} aria-label={copy.next} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#e9dfcd] px-4 text-xs font-semibold text-[#10251d] hover:bg-white disabled:opacity-35"><span className="hidden sm:inline">{copy.next}</span><ArrowRight size={16} /></button>
        </footer>
      </section>
    </div>, document.body)
  }

  return (
    <div
      className="lux-reader-backdrop fixed inset-0 z-[80] flex items-center justify-center p-3 backdrop-blur-[2px] sm:p-6 lg:p-8"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="fo-excerpt-title"
        className="lux-reader-dialog flex h-[min(90dvh,860px)] w-full max-w-[1240px] flex-col overflow-hidden rounded-[22px] border border-[#d9c9a8]/25 bg-[#0f211a] text-[#f2eee6] shadow-[0_32px_100px_rgba(13,25,19,.38)] sm:h-[min(86dvh,860px)] sm:w-[90vw] sm:rounded-[28px]"
      >
        <header className="flex shrink-0 items-center justify-between gap-3 px-4 py-3 sm:px-7 sm:py-4">
          <div className="min-w-0">
            <h2 id="fo-excerpt-title" className="font-display text-sm font-medium tracking-[-.01em] sm:text-base">
              {lang === 'fr' ? 'Chapitre' : 'Chapter'} {chapterCode}<span className="mx-2 text-[#b5a990]">/</span>{chapterTitle}
            </h2>
            <p className="mt-1 text-[9px] uppercase tracking-[.15em] text-[#c8c2b6]/65 sm:text-[10px]">{lang === 'fr' ? `Extrait consultable · 12 pages sur ${chapterPages}` : `Readable excerpt · 12 of ${chapterPages} pages`}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <div className="hidden items-center rounded-full border border-white/10 bg-white/[.045] p-1 sm:flex" role="group" aria-label={lang === 'fr' ? 'Mode de lecture' : 'Reading mode'}>
              <button type="button" aria-pressed={!isSinglePage} onClick={() => { setPageIndex((index) => index > 1 && index % 2 === 0 ? index - 1 : index); setViewMode('double') }} className={`inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-xs transition ${!isSinglePage ? 'bg-[#e9dfcd] text-[#18251e]' : 'text-white/70 hover:bg-white/[.07] hover:text-white'}`}>
                <BookOpen size={14} strokeWidth={1.7} />{copy.doublePage}
              </button>
              <button type="button" aria-pressed={isSinglePage} onClick={() => setViewMode('single')} className={`rounded-full px-3 py-2 text-xs transition ${isSinglePage ? 'bg-[#e9dfcd] text-[#18251e]' : 'text-white/70 hover:bg-white/[.07] hover:text-white'}`}>
                {copy.singlePage}
              </button>
            </div>
            <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[.045] p-1 sm:flex">
              <button type="button" onClick={() => setZoom((value) => Math.max(80, value - 10))} disabled={zoom <= 80} aria-label={copy.zoomOut} className="flex h-8 w-8 items-center justify-center rounded-full text-white/75 transition hover:bg-white/10 hover:text-white disabled:opacity-35"><Minus size={14} /></button>
              <span className="min-w-10 text-center text-[11px] tabular-nums text-white/80">{zoom}%</span>
              <button type="button" onClick={() => setZoom((value) => Math.min(150, value + 10))} disabled={zoom >= 150} aria-label={copy.zoomIn} className="flex h-8 w-8 items-center justify-center rounded-full text-white/75 transition hover:bg-white/10 hover:text-white disabled:opacity-35"><Plus size={14} /></button>
            </div>
            <button type="button" onClick={onClose} aria-label={copy.close} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[.07] text-white/75 transition hover:bg-white/15 hover:text-white">
              <X size={17} strokeWidth={1.7} />
            </button>
          </div>
        </header>

        <main className="flex min-h-0 flex-1 items-center justify-center px-2 pb-2 sm:px-5 sm:pb-3 lg:px-8">
          <div className="lux-book-stage relative flex h-full max-h-[760px] w-full items-center justify-center overflow-auto">
            <div className="relative flex h-full max-h-[min(76vh,720px)] w-max max-w-full items-center justify-center" style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'center center', transition: 'transform 220ms ease' }}>
            {!isCompact && viewMode === 'double' && <div className={`lux-book-spread relative hidden h-full max-h-full w-auto max-w-full aspect-[420/297] sm:block ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`} style={{ perspective: '2200px' }}>
              <div className={`lux-book-paper absolute inset-0 grid grid-cols-2 overflow-hidden rounded-[10px] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
                <div onClick={previousPage} onKeyDown={(event) => event.key === 'Enter' && previousPage()} role="button" tabIndex={0} aria-label={copy.previous} className="min-w-0 cursor-pointer">
                  {renderPage(pageIndex, 'left')}
                </div>
                <div onClick={nextPage} onKeyDown={(event) => event.key === 'Enter' && nextPage()} role="button" tabIndex={0} aria-label={copy.next} className="min-w-0 cursor-pointer">
                  {gateVisible ? renderGateContent('fo-chapter04-gate-desktop') : renderPage(Math.min(pageIndex + 1, LAST_SAMPLE_PAGE), 'right')}
                </div>
                <span aria-hidden="true" className="lux-book-gutter pointer-events-none absolute inset-y-0 left-1/2 z-10 w-6 -translate-x-1/2" />
                <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/2 z-10 w-px -translate-x-1/2 bg-[#887b68]/25" />
                {flipping && (
                  <div className={`lux-book-flip absolute inset-y-0 z-20 w-1/2 overflow-hidden bg-[#fbfaf7] ${flipping.direction === 'next' ? 'left-1/2 origin-left animate-book-leaf-forward' : 'left-0 origin-right animate-book-leaf-backward'}`}>
                    <div className="lux-book-face lux-book-face-front absolute inset-0">
                      {renderPdfPage(flipping.direction === 'next' ? pageIndex + 1 : pageIndex, `Page ${flipping.direction === 'next' ? pageIndex + 2 : pageIndex + 1}`)}
                    </div>
                    <div className="lux-book-face lux-book-face-back absolute inset-0">
                      {renderPdfPage(flipping.direction === 'next' ? flipping.target : flipping.target + 1, `Page ${flipping.direction === 'next' ? flipping.target + 1 : flipping.target + 2}`)}
                    </div>
                  </div>
                )}
              </div>
              {renderCoverLayer(false)}
            </div>}

            {!isCompact && viewMode === 'single' && <div className="relative hidden h-full max-h-full aspect-[210/297] w-auto max-w-full sm:block" style={{ perspective: '1800px' }}>
              <div className="lux-book-paper absolute inset-0 overflow-hidden rounded-[9px]">
                {gateVisible ? renderGateContent('fo-chapter04-gate-desktop') : renderPage(pageIndex, 'right')}
              </div>
            </div>}

            {isCompact && <div className="relative h-full max-h-full aspect-[210/297] w-auto max-w-full sm:hidden" style={{ perspective: '1800px' }}>
              <div className={`lux-book-paper absolute inset-0 overflow-hidden rounded-[9px] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
                {gateVisible ? renderGateContent('fo-chapter04-gate-mobile') : renderPage(pageIndex, 'right')}
              </div>
              {renderCoverLayer(true)}
            </div>}
            </div>
          </div>
        </main>

        <footer className="flex shrink-0 items-center justify-between gap-2 px-3 pb-3 pt-1 sm:px-7 sm:pb-4">
          <button type="button" onClick={previousPage} disabled={!isOpen || (!gated && pageIndex <= 1)} aria-label={copy.previous} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/75 text-[#273a30] shadow-sm transition hover:bg-white hover:shadow-md disabled:opacity-35 sm:h-12 sm:w-12">
            <ArrowLeft size={18} strokeWidth={1.7} />
          </button>
          <div className="flex items-center gap-1 sm:gap-3">
            <div className="flex items-center gap-0.5 sm:hidden">
              <button type="button" onClick={() => setZoom((value) => Math.max(80, value - 10))} disabled={zoom <= 80} aria-label={copy.zoomOut} className="flex h-8 w-7 items-center justify-center rounded-full text-white/75 disabled:opacity-35"><Minus size={13} /></button>
              <span className="min-w-8 text-center text-[10px] tabular-nums text-white/80">{zoom}%</span>
              <button type="button" onClick={() => setZoom((value) => Math.min(150, value + 10))} disabled={zoom >= 150} aria-label={copy.zoomIn} className="flex h-8 w-7 items-center justify-center rounded-full text-white/75 disabled:opacity-35"><Plus size={13} /></button>
            </div>
            <div aria-live="polite" className="flex items-center gap-2 text-[10px] font-medium tabular-nums text-[#d5d5ca] sm:gap-3 sm:text-xs">
              <span>{gateVisible ? '12+' : `${String(pageStart).padStart(2, '0')}${pageEnd > pageStart ? `–${String(pageEnd).padStart(2, '0')}` : ''} / 12`}</span>
              <span aria-hidden="true" className="h-[2px] w-8 overflow-hidden rounded-full bg-[#d1cabc]/35 sm:w-16">
                <span className="block h-full rounded-full bg-[#a58658] transition-[width] duration-300" style={{ width: `${progress}%` }} />
              </span>
            </div>
          </div>
          <button type="button" onClick={nextPage} disabled={gateVisible} aria-label={copy.next} className="flex h-11 w-11 items-center justify-center rounded-full bg-[#10251d] text-white shadow-[0_8px_20px_rgba(16,37,29,.22)] transition hover:-translate-y-0.5 hover:bg-[#263d32] hover:shadow-lg disabled:opacity-40 sm:h-12 sm:w-12">
            <ArrowRight size={18} strokeWidth={1.7} />
          </button>
        </footer>
      </section>
    </div>
  )
}
