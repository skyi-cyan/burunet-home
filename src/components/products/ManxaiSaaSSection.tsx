import './ManxaiSaaSSection.css'

const features = [
  '안전한 데이터 관리',
  '기업별 권한 체계 지원',
  '감사 로그 제공',
  '다양한 외부 시스템 연동',
  '지속적인 기능 확장',
]

export default function ManxaiSaaSSection() {
  return (
    <section className="company-page__section manxai-saas">
      <h3 className="company-page__section-title manxai-saas__section-title">
        안전하고 <span className="manxai-saas__title-accent">확장 가능한 SaaS</span> 플랫폼
      </h3>

      <div className="manxai-saas__content">
        <p className="manxai-saas__intro">
          <span className="manxai-saas__brand">Manxai</span>는 클라우드 기반 SaaS 플랫폼으로 구축되어
          안정적인 서비스와 지속적인 기능 업데이트를 제공합니다.
        </p>

        <ul className="manxai-saas__list">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
