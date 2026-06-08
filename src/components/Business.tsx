import './Business.css'

const areas = [
  { name: 'AI·소프트웨어', icon: '🤖' },
  { name: 'IT 인프라', icon: '🖥️' },
  { name: '엔터프라이즈', icon: '🏢' },
  { name: '헬스케어', icon: '💚' },
  { name: '스포츠·피트니스', icon: '⚡' },
  { name: '클라우드', icon: '☁️' },
]

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

        <div className="business__grid">
          {areas.map((area) => (
            <div key={area.name} className="business__item">
              <span className="business__icon" aria-hidden="true">
                {area.icon}
              </span>
              <span className="business__name">{area.name}</span>
            </div>
          ))}
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
