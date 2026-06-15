import './ProductsHero.css'

export default function ProductsHero() {
  return (
    <section className="products-hero" aria-labelledby="products-hero-title">
      <div className="products-hero__bg" aria-hidden="true">
        <div className="products-hero__bg-glow" />
      </div>

      <div className="products-hero__inner container">
        <div className="products-hero__content">
          <p className="products-hero__label">Our AI Platforms</p>
          <h1 id="products-hero-title" className="products-hero__title">
            기업과 사람을 위한
            <br />
            <span className="products-hero__accent">AI 플랫폼</span>
          </h1>
          <p className="products-hero__desc">
            IT 운영부터 스마트 워크플레이스, 헬스케어 서비스까지.
            <br className="products-hero__br" />
            부루넷은 실제 업무 혁신을 위한 AI SaaS 플랫폼을 제공합니다.
          </p>
        </div>

        <div className="products-hero__visual">
          <img
            src="/images/products-hero.png"
            alt=""
            className="products-hero__image"
            width={1200}
            height={675}
          />
        </div>
      </div>
    </section>
  )
}
