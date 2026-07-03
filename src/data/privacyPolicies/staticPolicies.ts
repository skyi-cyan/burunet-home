export type StaticPrivacyPolicy = {
  slug: string
  appName: string
  effectiveDate: string
  revisedDate: string
  htmlPath: string
}

/** public/privacy/*.html 정적 개인정보처리방침 */
export const staticPrivacyPolicies: StaticPrivacyPolicy[] = [
  {
    slug: 'lavesco',
    appName: '라베스코 (Lavesco)',
    effectiveDate: '2026년 7월 3일',
    revisedDate: '2026년 7월 3일',
    htmlPath: '/privacy/lavesco.html',
  },
]

export function getStaticPrivacyPolicy(slug: string) {
  return staticPrivacyPolicies.find((policy) => policy.slug === slug)
}
