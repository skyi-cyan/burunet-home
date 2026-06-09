import './ProductsHero.css'

export default function ProductsHero() {
  return (
    <section className="products-hero" aria-labelledby="products-hero-title">
      <div className="products-hero__content container">
        <h1 id="products-hero-title" className="products-hero__title">
          <span className="products-hero__accent">AI</span>로 업무를 더 쉽고
          <br />
          <span className="products-hero__accent">스마트하게</span>
        </h1>
        <p className="products-hero__desc">
          기업 운영부터 개인의 일상까지,{' '}
          <span className="products-hero__accent">부루넷</span>은{' '}
          <span className="products-hero__accent">인공지능</span> 기술로
          <br className="products-hero__br" />
          <span className="products-hero__accent">더 나은 경험</span>을 제공합니다.
        </p>
        <a href="#products-list" className="products-hero__cta">
          제품 살펴보기
        </a>
      </div>

      <div className="products-hero__visual">
        <img
          src="/images/products-hero.png"
          alt="AI 기반 소프트웨어 솔루션을 상징하는 프리미엄 비주얼"
          className="products-hero__image"
          width={1200}
          height={675}
        />
      </div>
    </section>
  )
}
