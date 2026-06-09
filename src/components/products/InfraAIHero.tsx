import './InfraAIHero.css'

export default function InfraAIHero() {
  return (
    <section className="infraai-hero" aria-labelledby="infraai-hero-title">
      <div className="infraai-hero__bg" aria-hidden="true">
        <div className="infraai-hero__bg-frame">
          <img
            src="/images/infraai-hero.png"
            alt=""
            className="infraai-hero__bg-image"
          />
          <div className="infraai-hero__overlay" />
        </div>
      </div>

      <div className="infraai-hero__content container">
        <h1 id="infraai-hero-title" className="infraai-hero__headline">
          장애를 발견하는 것이 아니라
          <br />
          <span className="infraai-hero__accent">예측하는</span> IT 운영
        </h1>
        <p className="infraai-hero__name">InfraAI(인프라이)</p>
        <p className="infraai-hero__tagline">AI 기반 IT 인프라 관리 플랫폼</p>
      </div>
    </section>
  )
}
