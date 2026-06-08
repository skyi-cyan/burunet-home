import './About.css'

const strengths = [
  {
    title: 'AI 소프트웨어 개발',
    desc: '머신러닝과 LLM을 활용한 지능형 소프트웨어 설계·개발부터 운영까지 전 과정을 지원합니다.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'IT 인프라 자동화',
    desc: 'AI 기반 모니터링·장애 예측·자동 복구로 IT 인프라 운영 효율을 극대화합니다.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="20" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="2" y="15" width="20" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="6" cy="6" r="1" fill="currentColor"/>
        <circle cx="6" cy="18" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: '엔터프라이즈 솔루션',
    desc: 'HRM, ERP 등 기업 핵심 업무를 AI로 고도화하는 맞춤형 솔루션을 제공합니다.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: '모바일·헬스케어',
    desc: '건강관리 및 스포츠 앱 등 사용자 중심의 모바일 서비스를 개발·운영합니다.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function About() {
  return (
    <section className="about" id="strengths">
      <div className="container">
        <div className="about__intro">
          <p className="section-label">Burunet is</p>
          <h2 className="section-title">
            AI 기술로 비즈니스의
            <br />
            디지털 전환을 이끕니다
          </h2>
          <p className="section-desc">
            (주)부루넷은 AI를 활용한 소프트웨어 전문 개발 회사로,
            IT 인프라관리 AI 솔루션, Manxai(만사) HRM, 건강관리·스포츠 앱 등
            다양한 솔루션을 개발하고 공급합니다. 향후 더 많은 산업 분야로
            확장하여 고객의 성장을 함께합니다.
          </p>
        </div>

        <div className="about__grid">
          {strengths.map((item) => (
            <article key={item.title} className="about__card">
              <div className="about__card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="about__card-line" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
