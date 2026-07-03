import { sogalfreePrivacyPolicy } from './policies/sogalfree'
import type { PrivacyPolicyEntry } from './types'
import { normalizePrivacySlug } from './utils'

export type { PrivacyPolicyContentProps, PrivacyPolicyEntry, PrivacyPolicyMeta } from './types'
export type { StaticPrivacyPolicy } from './staticPolicies'
export {
  getPrivacyPolicyHtmlPath,
  getPrivacyPolicyPath,
  getPrivacyPolicyPublicUrl,
  normalizePrivacySlug,
} from './utils'
export { getStaticPrivacyPolicy, staticPrivacyPolicies } from './staticPolicies'

/** 앱별 개인정보처리방침 등록 목록 */
export const privacyPolicies: PrivacyPolicyEntry[] = [sogalfreePrivacyPolicy]

const privacyPolicyMap = new Map(privacyPolicies.map((policy) => [policy.slug, policy]))

export function getPrivacyPolicy(slug?: string) {
  return privacyPolicyMap.get(normalizePrivacySlug(slug))
}

export function getAllPrivacyPolicies() {
  return privacyPolicies
}
