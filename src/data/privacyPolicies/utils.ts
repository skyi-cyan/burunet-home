const SITE_ORIGIN = 'https://www.burunet.co.kr'

export function normalizePrivacySlug(slug?: string) {
  return slug?.replace(/\.html$/i, '') ?? ''
}

export function getPrivacyPolicyPath(slug: string) {
  return `/privacy/${slug}`
}

export function getPrivacyPolicyHtmlPath(slug: string) {
  return `/privacy/${slug}.html`
}

export function getPrivacyPolicyPublicUrl(slug: string) {
  return `${SITE_ORIGIN}${getPrivacyPolicyHtmlPath(slug)}`
}
