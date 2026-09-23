import { ClipboardList, FileCheck2, Hotel, LockKeyhole } from 'lucide-react'

interface Props {
  locale: string
}

export default function ProductTrustSection({ locale }: Props) {
  const isEn = locale === 'en'
  const items = isEn
    ? [
        {
          icon: Hotel,
          title: 'Built through hotel operations',
          text: 'Methods developed in independent 4 and 5-star hotels, boutique groups and multi-department operations in Europe.',
        },
        {
          icon: FileCheck2,
          title: 'Usable formats',
          text: 'Print-ready PDF and editable PowerPoint files, with both English and French versions included.',
        },
        {
          icon: LockKeyhole,
          title: 'Permanent portal access',
          text: 'Your documents remain available from your LuxOps customer portal after purchase.',
        },
        {
          icon: ClipboardList,
          title: 'Built for managers',
          text: 'Structured for briefings, onboarding, refreshers and day-to-day operational reference.',
        },
      ]
    : [
        {
          icon: Hotel,
          title: 'Construit dans l’exploitation hôtelière',
          text: 'Des méthodes développées dans des établissements indépendants 4 et 5 étoiles, des groupes boutique et des environnements multi-départements en Europe.',
        },
        {
          icon: FileCheck2,
          title: 'Des formats utilisables',
          text: 'PDF prêt à imprimer et fichiers PowerPoint modifiables, avec les versions française et anglaise incluses.',
        },
        {
          icon: LockKeyhole,
          title: 'Accès permanent au portail',
          text: 'Après l’achat, vos documents restent disponibles depuis votre espace client LuxOps.',
        },
        {
          icon: ClipboardList,
          title: 'Conçu pour les managers',
          text: 'Structuré pour les briefings, l’intégration, les remises à niveau et la consultation au quotidien.',
        },
      ]

  return (
    <section className="bg-[#0f211a] px-5 py-20 text-white md:px-6 md:py-24">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#d8c4a5]">
            {isEn ? 'Why LuxOps' : 'Pourquoi LuxOps'}
          </p>
          <h2 className="mb-5 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            {isEn ? 'Documents made to be used, not stored away' : 'Des documents conçus pour être utilisés, pas seulement consultés'}
          </h2>
          <p className="leading-relaxed text-white/70">
            {isEn
              ? 'The content is structured around real shifts, operating controls and management routines, so teams can move from reference to application.'
              : 'Le contenu suit le rythme réel des services, des contrôles opérationnels et des routines de management, afin de faciliter le passage de la référence à l’application.'}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-10 border-t border-white/15 pt-10 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title}>
                <Icon size={22} className="mb-5 text-[#d8c4a5]" />
                <h3 className="mb-3 font-display text-lg font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/65">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
