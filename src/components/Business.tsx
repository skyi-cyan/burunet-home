import { businessAreas } from '../data/businessAreas'
import './Business.css'

export default function Business() {
  return (
    <section className="business" id="business">
      <div className="container">
        <div className="business__header">
          <p className="section-label">Burunet Industry</p>
          <h2 className="section-title">사업 분야</h2>
          <p className="section-desc">
            AI 소프트웨어 개발 역량을 바탕으로 다양한 산업 분야에
            맞춤형 솔루션을 제공하고, 지속적으로 새로운 영역으로 확장합니다.
          </p>
        </div>

        <div className="business__split">
          <figure className="business__figure">
            <img
              src="/images/business-areas.png"
              alt="AI SaaS, IT 인프라, HRM, 모바일 앱, 시스템 통합 사업분야를 나타내는 일러스트"
              className="business__figure-image"
              width={560}
              height={640}
            />
          </figure>
          <ul className="business__list">
            {businessAreas.map((item) => (
              <li key={item.title} className="business__item">
                <p className="business__item-title">{item.title}</p>
                <p className="business__item-desc">
                  <span className="business__item-arrow" aria-hidden="true">
                    →
                  </span>
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="business__cta">
          <div className="business__cta-content">
            <p className="section-label">Recruit</p>
            <h3>함께 성장할 인재를 찾습니다</h3>
            <p>
              AI와 소프트웨어로 더 나은 미래를 만들어갈
              열정적인 동료를 기다립니다.
            </p>
          </div>
          <a href="#contact" className="business__cta-btn">
            채용 문의
          </a>
        </div>
      </div>
    </section>
  )
}
