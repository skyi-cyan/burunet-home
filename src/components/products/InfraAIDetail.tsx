import { Link } from 'react-router-dom'
import './InfraAIDetail.css'

const problemItems = ['수백 개의 서버', '복잡한 네트워크', '반복되는 장애 대응']

const monitoringItems = ['서버', '네트워크', '보안장비']

const sectionImages = {
  problem: {
    src: '/images/infraai-section-problem.png',
    alt: '수많은 알람 속에서 중요한 장애를 놓치는 IT 운영 상황을 표현한 일러스트',
  },
  prediction: {
    src: '/images/infraai-section-prediction.png',
    alt: 'AI 장애 예측과 이상 패턴 분석을 상징하는 일러스트',
  },
  monitoring: {
    src: '/images/infraai-section-monitoring.png',
    alt: '서버·네트워크·보안장비 통합 모니터링을 상징하는 일러스트',
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
    <div className="infraai-detail">
      <section className="infraai-detail__section" aria-labelledby="infraai-problem-title">
        <div className="infraai-detail__inner container">
          <div className="infraai-detail__grid">
            <div className="infraai-detail__content">
              <p className="infraai-detail__label">문제 제기</p>
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
                InfraAI는 <span className="infraai-detail__accent">AI가 먼저</span> 알려줍니다.
              </p>
            </div>
            <SectionImage image={sectionImages.problem} />
          </div>
        </div>
      </section>

      <section className="infraai-detail__section" aria-labelledby="infraai-feature-title">
        <div className="infraai-detail__inner container">
          <div className="infraai-detail__grid">
            <div className="infraai-detail__content">
              <p className="infraai-detail__label">핵심 기능</p>
              <h2 id="infraai-feature-title" className="infraai-detail__title">
                <span className="infraai-detail__accent">AI 장애 예측</span>
              </h2>
              <p className="infraai-detail__desc">
                이상 패턴을 분석하여 장애 발생 가능성을 사전에 탐지합니다.
              </p>
            </div>
            <SectionImage image={sectionImages.prediction} />
          </div>
        </div>
      </section>

      <section className="infraai-detail__section" aria-labelledby="infraai-monitor-title">
        <div className="infraai-detail__inner container">
          <div className="infraai-detail__grid">
            <div className="infraai-detail__content">
              <h2 id="infraai-monitor-title" className="infraai-detail__title">
                통합 모니터링
              </h2>
              <ul className="infraai-detail__tags">
                {monitoringItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="infraai-detail__closing">
                모든 인프라를 <span className="infraai-detail__accent">하나의 화면</span>에서.
              </p>
            </div>
            <SectionImage image={sectionImages.monitoring} />
          </div>
        </div>
      </section>

      <section className="infraai-detail__cta">
        <div className="infraai-detail__inner container">
          <p>InfraAI(인프라이) 도입 및 상담이 필요하시면 문의해 주세요.</p>
          <Link to="/#contact" className="infraai-detail__cta-btn">
            문의하기
          </Link>
        </div>
      </section>
    </div>
  )
}
