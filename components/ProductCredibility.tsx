import { toActiveLocale } from '@/lib/i18n'

const copy = {
  en: {
    eyebrow: 'Where the content comes from',
    title: 'Built from operating experience. Designed to become yours.',
    paragraphs: [
      'These manuals are not collections of generic templates. Their structure draws on 15 years of experience designing, implementing, training and refining procedures across luxury hotel operations, including environments shaped by demanding quality frameworks such as LQA, Forbes Travel Guide and American Express Fine Hotels + Resorts program expectations.',
      'The content is independently authored and deliberately designed as a neutral operational framework, so your property can adapt the terminology, systems, service standards and local requirements to the way it actually operates.',
    ],
    reassurance:
      'A structured starting point, not a reproduction of any hotel brand or external quality standard.',
  },
  fr: {
    eyebrow: 'D’où vient le contenu',
    title: 'Issu de l’expérience opérationnelle. Conçu pour devenir le vôtre.',
    paragraphs: [
      'Ces manuels ne sont pas une compilation de modèles génériques. Leur structure s’appuie sur 15 années d’expérience dans la conception, le déploiement, la formation et l’amélioration de procédures en hôtellerie haut de gamme, notamment dans des environnements guidés par des référentiels exigeants tels que LQA, Forbes Travel Guide et les attentes du programme American Express Fine Hotels + Resorts.',
      'Le contenu est rédigé de manière indépendante et volontairement conçu comme un cadre opérationnel neutre, afin que chaque établissement puisse adapter la terminologie, les outils, les standards de service et les contraintes locales à son propre fonctionnement.',
    ],
    reassurance:
      'Une base structurée, et non la reproduction des procédures d’une marque hôtelière ou d’un référentiel externe.',
  },
  es: {
    eyebrow: 'De dónde viene el contenido',
    title: 'Nacido de la experiencia operativa. Diseñado para convertirse en suyo.',
    paragraphs: [
      'Estos manuales no son colecciones de plantillas genéricas. Su estructura se apoya en 15 años de experiencia diseñando, implementando, formando y mejorando procedimientos en operaciones hoteleras de lujo, dentro de entornos guiados por marcos de calidad exigentes.',
      'El contenido está redactado de forma independiente y concebido como un marco operativo neutral para que cada establecimiento adapte la terminología, los sistemas, los estándares de servicio y los requisitos locales a su propia operación.',
    ],
    reassurance:
      'Una base estructurada, no una reproducción de procedimientos de una marca hotelera o de un estándar externo.',
  },
}

export default function ProductCredibility({ locale }: { locale: string }) {
  const activeLocale = toActiveLocale(locale)
  const content = copy[activeLocale as keyof typeof copy] ?? copy.en

  return (
    <section className="border-y border-[rgba(32,35,31,0.14)] bg-[#f5f1e9] px-6 py-14 md:px-16 md:py-16">
      <div className="mx-auto grid max-w-screen-xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a58658]">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 max-w-xl font-display text-[2rem] font-medium leading-[1.1] text-[#0f211a] md:text-[2.55rem]">
            {content.title}
          </h2>
        </div>
        <div>
          <div className="max-w-3xl space-y-4 text-base leading-7 text-[#5d665f]">
            {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <p className="mt-7 border-l border-[#a58658] pl-5 text-sm font-semibold leading-6 text-[#24362f]">
            {content.reassurance}
          </p>
        </div>
      </div>
    </section>
  )
}
