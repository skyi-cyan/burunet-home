import './ManxaiPlatformSection.css'

const featureBlocks = [
  {
    id: 'hr',
    title: 'HR Management',
    description: '직원 정보부터 조직 운영까지.',
    items: [
      '직원 정보 통합 관리',
      '조직도 관리',
      '권한 및 역할 관리',
      '지점 및 사업장 관리',
    ],
  },
  {
    id: 'attendance',
    title: 'Attendance',
    description: '더 정확하고 편리한 근태 관리',
    items: [
      '출퇴근 기록',
      '근무시간 자동 집계',
      '출장·외근 관리',
      '근태 승인 프로세스',
    ],
  },
  {
    id: 'leave',
    title: 'Leave Management',
    description: '복잡한 휴가 관리를 간편하게',
    items: [
      '연차 및 반차 관리',
      '휴가 신청 및 승인',
      '잔여 휴가 자동 계산',
      '휴가 사용 현황 조회',
    ],
  },
  {
    id: 'approval',
    title: 'Electronic Approval',
    description: '더 빠른 의사결정',
    items: [
      '전자결재',
      '다단계 승인 프로세스',
      '결재 이력 관리',
      '모바일 승인 지원',
    ],
  },
  {
    id: 'payroll',
    title: 'Payroll',
    description: '정확하고 효율적인 급여 관리',
    items: [
      '급여 계산',
      '지급명세서 관리',
      '급여 데이터 통합',
      '자동 리포트 제공',
    ],
  },
]

export default function ManxaiPlatformSection() {
  return (
    <section className="company-page__section manxai-platform">
      <h3 className="company-page__section-title manxai-platform__section-title">
        <span className="manxai-platform__title-accent">하나의 플랫폼</span>으로 연결되는 업무 환경
      </h3>

      <div className="manxai-platform__grid">
        {featureBlocks.map((block) => (
          <article key={block.id} className="manxai-platform__card">
            <h4 className="manxai-platform__card-title">{block.title}</h4>
            <p className="manxai-platform__card-desc">{block.description}</p>
            <ul className="manxai-platform__list">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
