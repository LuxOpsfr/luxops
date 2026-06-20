import Image from 'next/image'
import { FileText, Presentation } from 'lucide-react'

interface Props {
  locale: string
}

export default function HousekeepingProductProof({ locale }: Props) {
  const isEn = locale === 'en'

  const previews = isEn
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

  return (
    <section className="bg-white px-5 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#003d9b]">
            {isEn ? 'Inside the Housekeeping Playbook' : 'Dans le Playbook Housekeeping'}
          </p>
          <h2 className="mb-5 font-display text-4xl font-extrabold tracking-tight text-[#0a1d2e] md:text-5xl">
            {isEn ? 'See the documents before you choose' : 'Visualisez les documents avant de choisir'}
          </h2>
          <p className="max-w-2xl leading-relaxed text-[#4f6074]">
            {isEn
              ? 'The playbook combines reference pages, operating frameworks, checklists and editable training slides. The examples below show the level of structure delivered across the ten chapters.'
              : "Le playbook réunit des pages de référence, des cadres opérationnels, des checklists et des slides de formation modifiables. Ces exemples montrent le niveau de structure proposé dans les dix chapitres."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {previews.map((preview, index) => (
            <figure
              key={preview.src}
              className={index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <div className="group relative aspect-[0.707] overflow-hidden border border-[#dfe5ef] bg-[#eef4ff] p-3 shadow-[0_12px_34px_rgba(10,29,46,0.08)]">
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
                  <div className="absolute bottom-6 right-6 inline-flex items-center gap-2 bg-[#003d9b] px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                    <Presentation size={14} /> PPTX
                  </div>
                ) : null}
              </div>
              <figcaption className="mt-4 flex items-center gap-2 text-sm font-bold text-[#0a1d2e]">
                {preview.editable ? <Presentation size={16} className="text-[#003d9b]" /> : <FileText size={16} className="text-[#003d9b]" />}
                {preview.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#dfe5ef] pt-6 text-sm text-[#4f6074]">
          <span><strong className="text-[#0a1d2e]">PDF</strong> {isEn ? 'for reading and printing' : 'pour la consultation et l’impression'}</span>
          <span><strong className="text-[#0a1d2e]">PowerPoint</strong> {isEn ? 'for adaptation and training' : 'pour l’adaptation et la formation'}</span>
          <span><strong className="text-[#0a1d2e]">FR + EN</strong> {isEn ? 'included' : 'inclus'}</span>
        </div>
      </div>
    </section>
  )
}
