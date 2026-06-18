import { Link, Navigate, useParams } from 'react-router-dom'
import {
  getPrivacyPolicy,
  getPrivacyPolicyPath,
  getPrivacyPolicyPublicUrl,
  normalizePrivacySlug,
} from '../../data/privacyPolicies'
import './LegalPage.css'

export default function PrivacyPolicyPage() {
  const { appSlug } = useParams()
  const slug = normalizePrivacySlug(appSlug)
  const policy = getPrivacyPolicy(slug)

  if (!policy) {
    return <Navigate to="/privacy" replace />
  }

  const { Content } = policy
  const privacyPolicyPath = getPrivacyPolicyPath(policy.slug)
  const privacyPolicyPublicUrl = getPrivacyPolicyPublicUrl(policy.slug)

  return (
    <article className="legal-page container">
      <header className="legal-page__header">
        <p className="legal-page__back">
          <Link to="/privacy">← 개인정보처리방침 목록</Link>
        </p>
        <h1 className="legal-page__title">{policy.title}</h1>
        <dl className="legal-page__meta">
          <div>
            <dt>시행일</dt>
            <dd>{policy.effectiveDate}</dd>
          </div>
          <div>
            <dt>최종 개정일</dt>
            <dd>{policy.revisedDate}</dd>
          </div>
          <div>
            <dt>운영자</dt>
            <dd>{policy.operator}</dd>
          </div>
          <div>
            <dt>문의</dt>
            <dd>
              <a href={`mailto:${policy.contactEmail}`}>{policy.contactEmail}</a>
            </dd>
          </div>
          <div>
            <dt>개인정보처리방침 URL</dt>
            <dd>
              <Link to={privacyPolicyPath}>{privacyPolicyPublicUrl}</Link>
            </dd>
          </div>
        </dl>
      </header>

      <Content policy={policy} />
    </article>
  )
}
