import './CompanyPage.css'

const greetingParagraphs = [
  '주식회사 부루넷 홈페이지를 방문해 주신 여러분께 진심으로 감사드립니다.',
  '부루넷은 인공지능 기술을 기반으로 고객의 업무 환경을 혁신하고 새로운 가치를 창출하는 소프트웨어 전문 기업입니다.',
  '우리는 단순한 시스템 개발을 넘어 고객의 비즈니스 문제를 이해하고, AI와 최신 IT 기술을 활용하여 보다 효율적이고 스마트한 업무 환경을 제공하는 것을 목표로 하고 있습니다.',
  '현재 IT 인프라 관리 AI 솔루션, HRM 솔루션인 「Manxai Workplace(만사)」, 건강관리 및 스포츠 플랫폼 등 다양한 분야의 솔루션을 개발하고 있으며, 앞으로도 고객이 필요로 하는 혁신적인 서비스를 지속적으로 선보일 계획입니다.',
  '급변하는 디지털 시대 속에서 부루넷은 끊임없는 연구개발과 도전을 통해 고객과 함께 성장하는 신뢰받는 파트너가 되겠습니다.',
  '여러분의 관심과 성원에 깊이 감사드리며, 더 나은 미래를 만들어 가기 위해 최선을 다하겠습니다.',
]

export default function CompanyGreeting() {
  return (
    <article className="company-page">
      <header className="company-page__header">
        <h2 className="company-page__title">인사말</h2>
        <p className="company-page__subtitle">Burunet Corp. (주)부루넷</p>
      </header>

      <div className="company-page__greeting">
        <figure className="company-page__figure company-page__figure--greeting">
          <img
            src="/images/greeting.png"
            alt="AI와 디지털 혁신을 상징하는 추상 기술 이미지"
            className="company-page__figure-image"
            width={480}
            height={640}
          />
        </figure>

        <div className="company-page__letter">
          <p className="company-page__letter-opening">안녕하십니까.</p>
          {greetingParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="company-page__letter-closing">감사합니다.</p>
          <p className="company-page__sign">주식회사 부루넷 임직원 일동</p>
        </div>
      </div>
    </article>
  )
}
