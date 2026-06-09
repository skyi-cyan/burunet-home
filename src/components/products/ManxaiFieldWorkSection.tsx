import './ManxaiFieldWorkSection.css'

const fieldWorkCards = [
  {
    id: 'location-attendance',
    title: '위치 기반 스마트 근태관리',
    description:
      '현장과 사무실을 오가는 직원의 출퇴근 기록을 보다 정확하게 관리할 수 있습니다.',
  },
  {
    id: 'geofence',
    title: '지오펜스 자동 출퇴근',
    description:
      '회사 또는 지정된 현장에 도착하면 자동으로 출근 기록이 생성됩니다. 반복적인 입력 작업을 줄이고 근태 누락을 최소화합니다.',
  },
  {
    id: 'business-trip',
    title: '출장 · 외근 관리',
    description: '외근과 출장 업무도 실시간으로 관리할 수 있습니다.',
    items: ['출장 신청', '외근 관리', '업무 위치 확인', '활동 이력 조회'],
  },
  {
    id: 'location-collab',
    title: '위치 협업 기능',
    description:
      '팀원 간 위치 공유와 요청 기능을 통해 현장 업무의 가시성을 높입니다.',
    items: ['위치 요청', '위치 공유', '현장 안전 관리', '신속한 업무 지원'],
  },
]

export default function ManxaiFieldWorkSection() {
  return (
    <section className="company-page__section manxai-fieldwork">
      <h3 className="company-page__section-title manxai-fieldwork__section-title">
        <span className="manxai-fieldwork__title-accent">현장 근무</span>에 최적화된 워크플레이스
      </h3>

      <div className="manxai-fieldwork__grid">
        {fieldWorkCards.map((card) => (
          <article key={card.id} className="manxai-fieldwork__card">
            <h4 className="manxai-fieldwork__card-title">{card.title}</h4>
            <p
              className={`manxai-fieldwork__card-desc${card.items ? ' manxai-fieldwork__card-desc--with-list' : ''}`}
            >
              {card.description}
            </p>
            {card.items && (
              <ul className="manxai-fieldwork__list">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
