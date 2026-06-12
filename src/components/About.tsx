import type { ReactNode } from 'react'
import './About.css'

const whyCards: {
  title: string
  desc: string
  icon: ReactNode
}[] = [
  {
    title: '업무 자동화',
    desc: 'AI를 활용하여 반복 업무를 줄이고 업무 생산성을 향상시킵니다.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10.5 11.5h3M11.5 10.5v3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'SaaS 플랫폼',
    desc: '언제 어디서나 사용할 수 있는 클라우드 기반 서비스를 제공합니다.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.9-1A3.5 3.5 0 1 1 18 18H7z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M8 20h8M10 22h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: '현장 중심 설계',
    desc: 'IT 운영, HR, 헬스케어 등 실제 업무 환경을 고려하여 설계합니다.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 12.5V15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: '지속 가능한 확장성',
    desc: '기업 성장에 맞춰 기능을 확장하고 새로운 서비스를 지속적으로 제공합니다.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 18V6M4 18h16M8 14v-3M12 14V9M16 14V5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 6l2-2M18 6l-2-2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

export default function About() {
  return (
    <section className="about" id="strengths">
      <div className="container">
        <div className="about__header">
          <span className="about__badge">Why Burunet</span>
          <h2 className="about__title">
            AI 기술을 <span className="about__title-accent">실제 업무 혁신</span>으로 연결합니다
          </h2>
          <p className="about__desc">
            부루넷은 AI 기술을 단순한 연구가 아닌
            <br />
            실제 업무 현장에 적용 가능한 SaaS 플랫폼으로 제공합니다.
          </p>
        </div>

        <div className="about__grid">
          {whyCards.map((item) => (
            <article key={item.title} className="about__card">
              <div className="about__card-icon">{item.icon}</div>
              <h3 className="about__card-title">{item.title}</h3>
              <p className="about__card-desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
