import { lavescoPrivacyPolicy } from './policies/lavesco'
import { sogalfreePrivacyPolicy } from './policies/sogalfree'
import type { PrivacyPolicyEntry } from './types'
import { getPrivacyPolicyPath, normalizePrivacySlug } from './utils'

export type { PrivacyPolicyContentProps, PrivacyPolicyEntry, PrivacyPolicyMeta } from './types'
export {
  getPrivacyPolicyHtmlPath,
  getPrivacyPolicyPath,
  getPrivacyPolicyPublicUrl,
  normalizePrivacySlug,
} from './utils'

/** 앱별 개인정보처리방침 등록 목록 */
export const privacyPolicies: PrivacyPolicyEntry[] = [
  sogalfreePrivacyPolicy,
  lavescoPrivacyPolicy,
]

const privacyPolicyMap = new Map(privacyPolicies.map((policy) => [policy.slug, policy]))

export function getPrivacyPolicy(slug?: string) {
  return privacyPolicyMap.get(normalizePrivacySlug(slug))
}

export function getAllPrivacyPolicies() {
  return privacyPolicies
}

export type PrivacyIndexItem = {
  slug: string
  appName: string
  effectiveDate: string
  revisedDate: string
  path: string
}

export function getPrivacyIndexItems(): PrivacyIndexItem[] {
  return privacyPolicies.map((policy) => ({
    slug: policy.slug,
    appName: policy.appName,
    effectiveDate: policy.effectiveDate,
    revisedDate: policy.revisedDate,
    path: getPrivacyPolicyPath(policy.slug),
  }))
}
