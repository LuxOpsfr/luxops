'use client'

import Image from 'next/image'
import { useRef, useState, type PointerEvent } from 'react'
import { X, Maximize2 } from 'lucide-react'
import styles from './ManualMockups.module.css'

const asset = (id: string, locale: string, page: string) => `/images/manual-mockups/${id}-${locale === 'fr' ? 'fr' : 'en'}-${page}.webp`

function tilt(event: PointerEvent<HTMLElement>) {
  if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const rect = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--mx', `${((event.clientX - rect.left) / rect.width - .5) * 12}deg`)
  event.currentTarget.style.setProperty('--my', `${((event.clientY - rect.top) / rect.height - .5) * -10}deg`)
}
function reset(event: PointerEvent<HTMLElement>) {
  event.currentTarget.style.setProperty('--mx', '0deg')
  event.currentTarget.style.setProperty('--my', '0deg')
}

export function ManualBook({ src, alt, priority = false, interactive = true }: { src: string; alt: string; priority?: boolean; interactive?: boolean }) {
  return <span className={styles.bookSpace} onPointerMove={interactive ? tilt : undefined} onPointerLeave={interactive ? reset : undefined}>
    <span className={styles.book}>
      <span className={styles.back} aria-hidden="true" />
      <span className={styles.edge} aria-hidden="true" />
      <span className={styles.spine} aria-hidden="true">LUXOPS · 2027</span>
      <span className={styles.cover}><Image src={src} alt={alt} fill sizes="(min-width: 1024px) 300px, 55vw" priority={priority} unoptimized /></span>
    </span>
  </span>
}

export function ManualMockupGallery({ id, locale }: { id: 'fo' | 'fb' | 'hsk' | 'spa' | 'rm'; locale: 'fr' | 'en' }) {
  const isEn = locale === 'en'
  const dialog = useRef<HTMLDialogElement>(null)
  const [selected, setSelected] = useState(0)
  const captions = isEn ? ['A shared reference', 'An excerpt from the manual', 'From standards to practice'] : ['Un référentiel commun', 'Extrait du manuel', 'Des standards à la pratique']
  const pages = [['cover'], ['left', 'right'], ['sheet']]
  const open = (index: number) => { setSelected(index); dialog.current?.showModal() }
  return <section className="border-y border-[#e8e1d6] bg-[#f4f0e8] px-5 py-14 md:px-8 md:py-18">
    <div className="mx-auto max-w-[1320px]">
      <div className="mb-7 max-w-2xl">
        <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#a58658]">{isEn ? 'The manual in practice' : 'Le manuel en pratique'}</p>
        <h2 className="mt-2 font-display text-3xl font-medium leading-tight text-[#10251d] md:text-4xl">{isEn ? 'From reference to daily practice' : 'Du référentiel à la pratique quotidienne'}</h2>
        <p className="mt-3 text-sm leading-7 text-[#626b64] md:text-base">{isEn ? 'Procedures to consult, adapt and share with your team.' : 'Des procédures à consulter, adapter et partager avec vos équipes.'}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {captions.map((caption, index) => <figure key={caption} className={styles.card}>
          <button type="button" className={styles.scene} onClick={() => open(index)} onPointerMove={tilt} onPointerLeave={reset} aria-label={`${caption} · ${isEn ? 'Click to enlarge' : 'Cliquez pour agrandir'}`}>
            {index === 0 ? <span className={styles.galleryBook}><ManualBook src={asset(id, locale, 'cover')} alt={caption} /></span>
              : index === 1 ? <span className={styles.spread}>{['left', 'right'].map(page => <span className={styles.leaf} key={page}><Image src={asset(id, locale, page)} alt={isEn ? 'Excerpt from the manual' : 'Extrait du manuel'} fill sizes="(min-width: 768px) 240px, 45vw" unoptimized /></span>)}</span>
              : <span className={styles.sheet}><Image src={asset(id, locale, 'sheet')} alt={caption} fill sizes="(min-width: 768px) 320px, 75vw" unoptimized /></span>}
            <span className={styles.enlarge}><Maximize2 size={13} />{isEn ? 'Click to enlarge' : 'Cliquez pour agrandir'}</span>
          </button>
          <figcaption className="px-5 py-4 font-display text-lg text-[#10251d]">{caption}</figcaption>
        </figure>)}
      </div>
    </div>
    <dialog ref={dialog} className={styles.dialog} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close() }}>
      <header className={styles.dialogHeader}><span>{isEn ? 'Excerpt from the manual · English edition' : 'Extrait du manuel · Édition française'}</span><button type="button" onClick={() => dialog.current?.close()} aria-label={isEn ? 'Close' : 'Fermer'} autoFocus><X size={24} /></button></header>
      <div className={styles.fullPages}>{pages[selected].map(page => <Image key={page} src={asset(id, locale, page)} alt={isEn ? 'Excerpt from the manual' : 'Extrait du manuel'} width={1071} height={1516} unoptimized />)}</div>
    </dialog>
  </section>
}
