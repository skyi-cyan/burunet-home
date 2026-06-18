import type { ComponentType } from 'react'

export type PrivacyPolicyMeta = {
  slug: string
  appName: string
  title: string
  effectiveDate: string
  revisedDate: string
  operator: string
  contactEmail: string
}

export type PrivacyPolicyContentProps = {
  policy: PrivacyPolicyEntry
}

export type PrivacyPolicyEntry = PrivacyPolicyMeta & {
  Content: ComponentType<PrivacyPolicyContentProps>
}
