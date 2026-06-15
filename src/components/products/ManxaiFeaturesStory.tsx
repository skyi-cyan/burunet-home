import './ManxaiFeaturesStory.css'

const painPoints = [
  { prefix: '직원 정보는', highlight: '엑셀', suffix: '에,' },
  { prefix: '휴가 신청은', highlight: '메신저', suffix: '에,' },
  { prefix: '결재는', highlight: '이메일', suffix: '에,' },
  { prefix: '급여 정산은', highlight: '또 다른 프로그램', suffix: '에.' },
]

export default function ManxaiFeaturesStory() {
  return (
    <div className="manxai-story">
      <ul className="manxai-story__pain-list">
        {painPoints.map((item) => (
          <li key={item.highlight}>
            {item.prefix}{' '}
            <span className="manxai-story__highlight">{item.highlight}</span>
            {item.suffix}
          </li>
        ))}
      </ul>

      <p className="manxai-story__desc">
        기업이 성장할수록 업무는 복잡해지고{' '}
        <span className="manxai-story__accent">관리 비용은 증가</span>합니다.
      </p>

      <p className="manxai-story__solution">
        <span className="manxai-story__brand">Manxai Workplace</span>는 기업 운영에 필요한 핵심 업무를{' '}
        <span className="manxai-story__accent">하나의 플랫폼</span>으로 통합하여 업무 효율성과
        생산성을 높입니다.
      </p>
    </div>
  )
}
