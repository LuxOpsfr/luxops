import Image from 'next/image'
import { FileText, Presentation } from 'lucide-react'
import { PRODUCT_PREVIEWS } from '@/content/product-previews'
import type { PlaybookId } from '@/content/playbooks/data'

interface Props {
  locale: string
  productId: PlaybookId
}

export default function HousekeepingProductProof({ locale, productId }: Props) {
  const isEn = locale === 'en'

  const housekeepingPreviews = isEn
    ? [
        {
          src: '/product-previews/hsk-showcase/en/01-cover.webp',
          label: 'Chapter opening',
          alt: 'Housekeeping Playbook chapter opening',
        },
        {
          src: '/product-previews/hsk-showcase/en/02-contents.webp',
          label: 'Manual structure',
          alt: 'Housekeeping Playbook manual structure',
        },
        {
          src: '/product-previews/hsk-showcase/en/03-inspection-checklist.webp',
          label: 'Inspection and scoring',
          alt: 'Housekeeping Playbook inspection scoring framework',
        },
        {
          src: '/product-previews/hsk/en/03-supervisor-checklist.webp',
          label: 'Editable PowerPoint slide',
          alt: 'Editable Housekeeping Playbook management slide',
          editable: true,
        },
      ]
    : [
        {
          src: '/product-previews/hsk-showcase/fr/01-couverture.webp',
          label: 'Ouverture de chapitre',
          alt: 'Ouverture de chapitre du Playbook Housekeeping',
        },
        {
          src: '/product-previews/hsk-showcase/fr/02-sommaire.webp',
          label: 'Structure du manuel',
          alt: 'Structure du manuel du Playbook Housekeeping',
        },
        {
          src: '/product-previews/hsk-showcase/fr/03-checklist-inspection.webp',
          label: 'Inspection et notation',
          alt: "Grille de notation d'inspection du Playbook Housekeeping",
        },
        {
          src: '/product-previews/hsk/fr/02-productivite-binome.webp',
          label: 'Slide PowerPoint modifiable',
          alt: 'Slide modifiable du Playbook Housekeeping',
          editable: true,
        },
      ]

  const otherPreviews = PRODUCT_PREVIEWS[productId][isEn ? 'en' : 'fr'].map((preview, index) => ({
    src: preview.src,
    alt: preview.alt,
    label: [
      isEn ? 'Operational procedure' : 'Procédure opérationnelle',
      isEn ? 'Service standards' : 'Standards de service',
      isEn ? 'Checklist or quick reference' : 'Checklist ou fiche réflexe',
    ][index],
    editable: false,
  }))
  const previews = productId === 'hsk' ? housekeepingPreviews : otherPreviews

  return (
    <section className="bg-white px-5 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#0f211a]">
            {isEn ? 'Inside the SOP manual' : 'Dans le manuel SOP'}
          </p>
          <h2 className="mb-5 font-display text-4xl font-extrabold tracking-tight text-[#0f211a] md:text-5xl">
            {isEn ? 'See the documents before you choose' : 'Visualisez les documents avant de choisir'}
          </h2>
          <p className="max-w-2xl leading-relaxed text-[#687169]">
            {isEn
              ? 'These are real excerpts from the manual. Review the procedures, standards and practical tools before choosing the full product.'
              : 'Ces extraits proviennent du manuel. Consultez les procédures, standards et outils pratiques avant de choisir le produit complet.'}
          </p>
        </div>

        <div className={`grid grid-cols-1 gap-5 md:grid-cols-2 ${previews.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
          {previews.map((preview, index) => (
            <figure
              key={preview.src}
              className={index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <div className="group relative aspect-[0.707] overflow-hidden border border-[#e7e0d5] bg-[#e7e0d5] p-3 shadow-[0_12px_34px_rgba(10,29,46,0.08)]">
                <div className="relative h-full overflow-hidden bg-white">
                  <Image
                    src={preview.src}
                    alt={preview.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 92vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                </div>
                {preview.editable ? (
                  <div className="absolute bottom-6 right-6 inline-flex items-center gap-2 bg-[#0f211a] px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                    <Presentation size={14} /> PPTX
                  </div>
                ) : null}
              </div>
              <figcaption className="mt-4 flex items-center gap-2 text-sm font-bold text-[#0f211a]">
                {preview.editable ? <Presentation size={16} className="text-[#0f211a]" /> : <FileText size={16} className="text-[#0f211a]" />}
                {preview.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#e7e0d5] pt-6 text-sm text-[#687169]">
          <span><strong className="text-[#0f211a]">PDF</strong> {isEn ? 'for reading and printing' : 'pour la consultation et l’impression'}</span>
          <span><strong className="text-[#0f211a]">PowerPoint</strong> {isEn ? 'for adaptation and training' : 'pour l’adaptation et la formation'}</span>
          <span><strong className="text-[#0f211a]">FR + EN</strong> {isEn ? 'included' : 'inclus'}</span>
        </div>
      </div>
    </section>
  )
}
