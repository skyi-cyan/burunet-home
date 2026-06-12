import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

const products: {
  name: string
  subtitle: string
  desc: string
  path: string
  icon: ReactNode
}[] = [
  {
    name: 'InfraAI',
    subtitle: 'AI 기반 IT Operations Platform',
    desc: '서버, 네트워크, 보안 장비를 하나의 화면에서 관리하고 AI 기반 장애 예측으로 안정적인 IT 환경을 구축합니다.',
    path: '/products/infraai',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="20" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="2" y="14" width="20" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="6" cy="7" r="1" fill="currentColor" />
        <circle cx="6" cy="17" r="1" fill="currentColor" />
        <path
          d="M14 7h4M14 17h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M18 4v3M21 7l-3 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: 'Manxai Workplace AI',
    subtitle: 'AI Smart Workplace Platform',
    desc: '인사·근태·코칭·조직 분석을 하나의 SaaS 플랫폼으로 통합하고, 반복 업무는 자동화하여 HR 업무 효율을 높입니다.',
    path: '/products/manxai',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 9h1M14 9h1M9 13h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="17" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'Health & Sports AI',
    subtitle: 'AI Healthcare Platform',
    desc: '개인의 건강 데이터를 수집·분석하여 맞춤형 운동과 생활 습관 관리를 지원하는 AI 기반 모바일 서비스입니다.',
    path: '/products/health-sports',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 21s-5-3.5-5-9a5 5 0 0 1 9-2 5 5 0 0 1 9 2c0 5.5-5 9-5 9z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M12 8v5M9.5 10.5h5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M4 19l2-2M20 19l-2-2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

export default function Products() {
  return (
    <section className="products" id="products">
      <div className="container">
        <div className="products__header">
          <span className="products__badge">Our Products</span>
          <h2 className="products__title">
            기업과 사람을 위한 <span className="products__title-accent">AI 플랫폼</span>을 만듭니다
          </h2>
          <p className="products__desc">
            IT 운영, 스마트 워크플레이스, 헬스케어 분야의 AI 솔루션을 제공합니다.
          </p>
        </div>

        <div className="products__grid">
          {products.map((product) => (
            <article key={product.name} className="products__card">
              <div className="products__card-icon">{product.icon}</div>
              <h3 className="products__card-name">{product.name}</h3>
              <p className="products__card-subtitle">{product.subtitle}</p>
              <p className="products__card-desc">{product.desc}</p>
              <Link to={product.path} className="products__card-link">
                자세히 보기
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
