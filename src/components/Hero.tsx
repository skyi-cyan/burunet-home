import { Link } from 'react-router-dom'
import './Hero.css'

const highlights = [
  'AI 기반 SaaS 소프트웨어',
  'IT 인프라 관리 솔루션',
  'Manxai(만사) HRM',
  '건강·스포츠 앱',
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
          <p className="hero__tag-kr">(주)부루넷 · AI 소프트웨어 전문 기업</p>
          <h1 className="hero__title">
            AI 기술로 더 스마트한
            <br />
            <span>미래를 연결합니다</span>
          </h1>
          <p className="hero__desc">
            (주)부루넷은 인공지능(AI) 기술을 기반으로 고객의 비즈니스 혁신을 지원하는
            SaaS 기반 소프트웨어 전문 개발 기업입니다. AI, 클라우드, 데이터 분석 및
            자동화 기술을 접목한 솔루션으로 기업의 디지털 전환을 함께합니다.
          </p>
          <ul className="hero__highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="hero__actions">
            <Link to="/company/overview" className="hero__btn hero__btn--primary">
              회사소개
            </Link>
            <Link to="/products" className="hero__btn hero__btn--outline">
              제품·솔루션
            </Link>
          </div>
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
