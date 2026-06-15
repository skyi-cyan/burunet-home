import { Link } from 'react-router-dom'
import './Hero.css'

const highlights = [
  'AI SaaS Platform',
  'InfraAI',
  'Manxai Workplace',
  'Health AI Platform',
]

const stats = [
  { value: '3+', label: 'AI Platform' },
  { value: '100%', label: 'Cloud Native' },
  { value: '24/7', label: 'Technical Support' },
]

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-media">
          <img
            src="/images/hero-visual.png"
            alt=""
            className="hero__bg-image"
          />
        </div>
        <div className="hero__bg-overlay" />
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      <div className="hero__inner container">
        <div className="hero__content">
          <p className="hero__tag-en">Burunet Corp.</p>
          <p className="hero__tag-kr">(주)부루넷 · AI SaaS Platform Company</p>
          <h1 className="hero__title">
            <span className="hero__title-lead">IT 인프라 관리부터 스마트 워크플레이스까지</span>
            <span className="hero__title-accent">일하는 방식을 바꾸는 AI</span>
          </h1>
          <p className="hero__desc">
          AI, 클라우드, 데이터 기술을 활용하여
          기업의 운영 효율을 높이는 SaaS 플랫폼을 제공합니다.
          </p>
          <ul className="hero__highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="hero__actions">
            <Link to="/products" className="hero__btn hero__btn--primary">
              제품 살펴보기
            </Link>
          </div>
        </div>
      </div>

      <div className="hero__stats">
        <div className="container hero__stats-inner">
          {stats.map((item) => (
            <div key={item.label} className="hero__stat">
              <p className="hero__stat-value">{item.value}</p>
              <p className="hero__stat-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <a href="#strengths" className="hero__scroll" aria-label="아래로 스크롤">
        <span>scroll</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  )
}
