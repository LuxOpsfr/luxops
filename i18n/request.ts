import { getRequestConfig } from 'next-intl/server'
import { toActiveLocale } from '@/lib/i18n'

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = toActiveLocale(await requestLocale)

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
