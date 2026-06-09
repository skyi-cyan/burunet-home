import './ManxaiAISection.css'

const aiCards = [
  {
    id: 'hr-assistant',
    title: 'AI HR Assistant',
    description: '사내 규정과 인사 정보를 쉽고 빠르게 확인할 수 있습니다.',
    items: [
      '휴가 규정 질의응답',
      '인사 정책 검색',
      '조직 정보 조회',
      '업무 가이드 제공',
    ],
  },
  {
    id: 'workforce-analytics',
    title: 'AI Workforce Analytics',
    description: '조직 데이터를 분석하여 더 나은 의사결정을 지원합니다.',
    items: [
      '근태 패턴 분석',
      '부서별 운영 현황 분석',
      '조직 생산성 리포트',
      '이상 근무 패턴 탐지',
    ],
  },
  {
    id: 'report-generator',
    title: 'AI Report Generator',
    description: '반복적인 보고서 작성 업무를 자동화합니다.',
    items: [
      '근태 리포트 자동 생성',
      '휴가 현황 보고서',
      '인사 통계 분석',
      '경영진 보고자료 생성',
    ],
  },
]

export default function ManxaiAISection() {
  return (
    <section className="company-page__section manxai-ai">
      <h3 className="company-page__section-title manxai-ai__section-title">
        <span className="manxai-ai__title-accent">AI</span>가 업무를 더 스마트하게
      </h3>

      <div className="manxai-ai__grid">
        {aiCards.map((card) => (
          <article key={card.id} className="manxai-ai__card">
            <h4 className="manxai-ai__card-title">{card.title}</h4>
            <p className="manxai-ai__card-desc">{card.description}</p>
            <ul className="manxai-ai__list">
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
