import TrackedLink from './TrackedLink'

export default function TrainingContactLinks({ locale, placement }: { locale: 'fr' | 'en'; placement: string }) {
  const fr = locale === 'fr'
  const text = fr ? 'Bonjour, je souhaiterais échanger avec vous au sujet d’une formation ou d’un accompagnement pour notre établissement.' : 'Hello, I would like to discuss training or operational support for our property.'
  return <div className="mt-3 text-sm leading-6 text-[#626b64]"><TrackedLink href={`https://wa.me/33652084739?text=${encodeURIComponent(text)}`} target="_blank" rel="noopener noreferrer" eventName="training_whatsapp_clicked" eventProperties={{ locale, placement }} className="inline-flex min-h-11 items-center underline underline-offset-4">{fr ? 'Ou nous écrire sur WhatsApp' : 'Or contact us on WhatsApp'}</TrackedLink></div>
}
