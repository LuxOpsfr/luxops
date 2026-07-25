import { redirect } from 'next/navigation'
import { DEFAULT_LOCALE } from '@/lib/i18n'
import { localizedRoutePath } from '@/lib/localized-routes'

export default function RootPage() {
  redirect(localizedRoutePath('home', DEFAULT_LOCALE))
}
