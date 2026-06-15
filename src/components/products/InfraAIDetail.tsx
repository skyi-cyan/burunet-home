import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { productItems } from '../../data/productsNav'
import '../../pages/products/ProductPage.css'
import './InfraAIDetail.css'

const infraaiProduct = productItems.find((item) => item.slug === 'infraai')

const problemItems = ['수백 개의 서버', '복잡한 네트워크', '반복되는 장애 대응']

const featureCards: {
  id: string
  title: string
  icon: ReactNode
  description: ReactNode
}[] = [
  {
    id: 'prediction',
    title: 'AI 장애 예측',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 18h16M6 15l3-6 3 4 4-8 2 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    description: (
      <>
        이상 패턴을 분석하여 장애 발생 가능성을{' '}
        <span className="infraai-detail__feature-accent">사전에 탐지</span>합니다.
      </>
    ),
  },
  {
    id: 'monitoring',
    title: '통합 모니터링',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 20h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M7 11h3M7 8h6M14 11h3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    description: (
      <>
        서버, 네트워크, 보안장비를{' '}
        <span className="infraai-detail__feature-accent">하나의 화면</span>에서 관리합니다.
      </>
    ),
  },
  {
    id: 'event-analysis',
    title: 'AI 이벤트 분석',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6 5h12v14H6V5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 9h6M9 12h4M9 15h5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="17" cy="17" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19 19l1.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    description: (
      <>
        수천 건의 로그와 이벤트를 분석하여 중요한 이슈를{' '}
        <span className="infraai-detail__feature-accent">자동으로 분류</span>합니다.
      </>
    ),
  },
  {
    id: 'ticket',
    title: '자동 티켓 생성',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6 5h12a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4V7a2 2 0 0 1 2-2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M12 9v6M9 12h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    description: (
      <>
        장애 발생 시 <span className="infraai-detail__feature-accent">자동으로 티켓을 생성</span>하고
        담당자에게 전달합니다.
      </>
    ),
  },
  {
    id: 'report',
    title: '운영 리포트 자동 생성',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8 4h8l2 2v14H6V4h2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 12h6M9 16h4M9 8h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M16 4v4h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description: (
      <>
        일일·주간·월간 운영 현황을{' '}
        <span className="infraai-detail__feature-accent">자동으로 리포트</span>합니다.
      </>
    ),
  },
]

const sectionImages = {
  problem: {
    src: '/images/infraai-section-problem.png',
    alt: '수많은 알람 속에서 중요한 장애를 놓치는 IT 운영 상황을 표현한 일러스트',
  },
} as const

type SectionImageProps = {
  image: (typeof sectionImages)[keyof typeof sectionImages]
}

function SectionImage({ image }: SectionImageProps) {
  return (
    <figure className="infraai-detail__figure">
      <img
        src={image.src}
        alt={image.alt}
        className="infraai-detail__image"
        width={280}
        height={280}
        loading="lazy"
      />
    </figure>
  )
}

export default function InfraAIDetail() {
  return (
    <article className="product-page infraai-detail">
      <section className="infraai-detail__section" aria-labelledby="infraai-problem-title">
        <div className="infraai-detail__inner container">
          <div className="infraai-detail__grid">
            <div className="infraai-detail__content">
              <span className="infraai-detail__badge">문제 제기</span>
              <h2 id="infraai-problem-title" className="infraai-detail__title">
                수많은 알람 속에서
              </h2>
              <p className="infraai-detail__question">
                <span className="infraai-detail__accent">중요한 장애</span>를 놓치고 있지 않습니까?
              </p>
              <ul className="infraai-detail__list">
                {problemItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="infraai-detail__solution">
                InfraAI는 <span className="infraai-detail__accent">장애를 발견하는 것이 아니라</span> 예측합니다.
              </p>
            </div>
            <SectionImage image={sectionImages.problem} />
          </div>
        </div>
      </section>

      <section
        className="infraai-detail__section infraai-detail__section--intro"
        aria-labelledby="infraai-intro-title"
      >
        <div className="infraai-detail__inner container">
          <span className="infraai-detail__badge">핵심 기능</span>
          <h2 id="infraai-intro-title" className="infraai-detail__intro-title">
            AI가 운영을 대신 생각합니다
          </h2>
          <div className="infraai-detail__intro-box">
            <p>
              InfraAI는 서버, 네트워크,
              <br />
              보안 장비의 상태를{' '}
              <span className="infraai-detail__intro-accent">실시간 분석</span>하여
            </p>
            <p>
              <span className="infraai-detail__intro-accent">장애를 예측</span>하고,
              <br />
              <span className="infraai-detail__intro-accent">운영 업무를 자동화</span>하는
              <br />
              <span className="infraai-detail__intro-accent">AI 기반 IT Operations</span> 플랫폼입니다.
            </p>
          </div>
        </div>
      </section>

      <section
        className="infraai-detail__section infraai-detail__section--features"
        aria-labelledby="infraai-feature-title"
      >
        <div className="infraai-detail__inner container">
          <h2 id="infraai-feature-title" className="infraai-detail__features-heading">
            AI가 운영 업무를 <span className="infraai-detail__accent">자동화</span>합니다
          </h2>
          <div className="infraai-detail__features">
            {featureCards.map((feature) => (
              <article key={feature.id} className="infraai-detail__feature-card">
                <div className="infraai-detail__feature-head">
                  <span className="infraai-detail__feature-icon">{feature.icon}</span>
                  <h3 className="infraai-detail__feature-title">{feature.title}</h3>
                </div>
                <p className="infraai-detail__feature-desc">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="infraai-detail__cta">
        <div className="infraai-detail__inner container">
          <p>AI가 먼저 장애를 발견하는 운영 환경 지금 경험해 보세요.</p>
          <div className="infraai-detail__cta-actions">
            {infraaiProduct?.demoUrl && (
              <a
                href={infraaiProduct.demoUrl}
                className="infraai-detail__cta-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                데모 요청
              </a>
            )}
            <Link to="/#contact" className="infraai-detail__cta-btn infraai-detail__cta-btn--secondary">
              도입 문의
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
