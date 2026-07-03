import { Link } from 'react-router-dom'
import { getPrivacyIndexItems } from '../../data/privacyPolicies'
import './LegalPage.css'

export default function PrivacyIndexPage() {
  const policies = getPrivacyIndexItems()

  return (
    <article className="legal-page legal-page--index container">
      <header className="legal-page__header">
        <h1 className="legal-page__title">개인정보처리방침</h1>
        <p className="legal-page__intro">
          (주)부루넷이 제공하는 앱·서비스별 개인정보처리방침입니다. 이용 중인 서비스를 선택해
          주세요.
        </p>
      </header>

      <ul className="legal-page__policy-list">
        {policies.map((policy) => (
          <li key={policy.slug}>
            {policy.kind === 'react' ? (
              <Link to={policy.path} className="legal-page__policy-card">
                <span className="legal-page__policy-name">{policy.appName}</span>
                <span className="legal-page__policy-meta">
                  시행일 {policy.effectiveDate} · 최종 개정 {policy.revisedDate}
                </span>
              </Link>
            ) : (
              <a href={policy.path} className="legal-page__policy-card">
                <span className="legal-page__policy-name">{policy.appName}</span>
                <span className="legal-page__policy-meta">
                  시행일 {policy.effectiveDate} · 최종 개정 {policy.revisedDate}
                </span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </article>
  )
}
