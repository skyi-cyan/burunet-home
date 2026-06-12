import { businessAreas } from '../../data/businessAreas'
import './CompanyPage.css'

export default function CompanyOverview() {
  return (
    <article className="company-page">
      <header className="company-page__header">
        <h2 className="company-page__title">회사개요</h2>
        <p className="company-page__subtitle">Burunet Corp. (주)부루넷</p>
      </header>

      <div className="company-page__intro">
        <p>
          (주)부루넷은 인공지능(AI) 기술을 기반으로 고객의 비즈니스 혁신을 지원하는
          SaaS 기반 소프트웨어 전문 개발 기업입니다.
        </p>
        <p>
          빠르게 변화하는 디지털 환경 속에서 기업의 운영 효율성과 경쟁력을 향상시키기 위해
          AI, 클라우드, 데이터 분석 및 자동화 기술을 접목한 다양한 솔루션을 연구·개발하고
          있습니다.
        </p>
        <p>
          특히 IT 인프라 관리, 인사관리(HRM), 건강관리 및 스포츠 분야 등 다양한 산업 영역에서
          실질적인 업무 혁신을 제공하는 솔루션을 개발하고 있으며, 고객의 요구에 맞춘 맞춤형
          소프트웨어 구축 서비스도 함께 제공하고 있습니다.
        </p>
      </div>

      <section className="company-page__section">
        <h3 className="company-page__section-title">회사명</h3>
        <ul className="company-page__list">
          <li>
            <strong>국문</strong>
            <span>주식회사 부루넷</span>
          </li>
          <li>
            <strong>영문</strong>
            <span>Burunet Corp.</span>
          </li>
        </ul>
      </section>

      <section className="company-page__section company-page__section--split">
        <h3 className="company-page__section-title">사업분야</h3>
        <div className="company-page__split">
          <figure className="company-page__figure">
            <img
              src="/images/business-areas.png"
              alt="AI SaaS, IT 인프라, HRM, 모바일 앱, 시스템 통합 사업분야를 나타내는 일러스트"
              className="company-page__figure-image"
              width={560}
              height={640}
            />
          </figure>
          <ul className="company-page__business-list">
            {businessAreas.map((item) => (
              <li key={item.title} className="company-page__business-item">
                <p className="company-page__business-title">{item.title}</p>
                <p className="company-page__business-desc">
                  <span className="company-page__business-arrow" aria-hidden="true">
                    →
                  </span>
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="company-page__section">
        <h3 className="company-page__section-title">비전</h3>
        <blockquote className="company-page__vision-quote">
          &ldquo;AI 기술로 더 스마트한 미래를 연결합니다.&rdquo;
        </blockquote>
        <p className="company-page__vision-desc">
          부루넷은 AI 기술을 활용하여 기업과 개인의 업무 효율을 높이고, 지속 가능한 디지털
          혁신을 실현하는 글로벌 소프트웨어 기업으로 성장해 나가겠습니다.
        </p>
      </section>
    </article>
  )
}
