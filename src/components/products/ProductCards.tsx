import { Link } from 'react-router-dom'
import { productItems } from '../../data/productsNav'
import './ProductCards.css'

function renderTagline(tagline: string, accent: string) {
  const index = tagline.indexOf(accent)
  if (index === -1) return tagline

  return (
    <>
      {tagline.slice(0, index)}
      <span className="product-cards__accent">{accent}</span>
      {tagline.slice(index + accent.length)}
    </>
  )
}

export default function ProductCards() {
  return (
    <section id="products-list" className="product-cards" aria-label="주요 제품">
      <div className="product-cards__inner container">
        <div className="product-cards__grid">
          {productItems.map((product) => (
            <article key={product.id} id={product.id} className="product-cards__card">
              <div className="product-cards__visual" aria-hidden="true">
                <span className={`product-cards__orb product-cards__orb--${product.id}`} />
              </div>

              <h3 className="product-cards__name">{product.name}</h3>
              <p className="product-cards__tagline">
                {renderTagline(product.tagline, product.taglineAccent)}
              </p>
              <p className="product-cards__desc">{product.description}</p>
              <Link to={product.path} className="product-cards__link">
                자세히 보기
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M6 3l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
