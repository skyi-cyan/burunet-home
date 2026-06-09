import { Link, Navigate, useParams } from 'react-router-dom'
import InfraAIDetail from '../../components/products/InfraAIDetail'
import ManxaiFeaturesStory from '../../components/products/ManxaiFeaturesStory'
import ManxaiAISection from '../../components/products/ManxaiAISection'
import ManxaiFieldWorkSection from '../../components/products/ManxaiFieldWorkSection'
import ManxaiPlatformSection from '../../components/products/ManxaiPlatformSection'
import ManxaiSaaSSection from '../../components/products/ManxaiSaaSSection'
import { productItems } from '../../data/productsNav'
import '../company/CompanyPage.css'
import './ProductPage.css'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = productItems.find((item) => item.slug === slug)

  if (!product) {
    return <Navigate to="/products" replace />
  }

  if (product.slug === 'infraai') {
    return <InfraAIDetail />
  }

  return (
    <article className="product-page">
      <header className="company-page__header">
        <h2 className="company-page__title">{product.name}</h2>
        <p className="company-page__subtitle">{product.tagline}</p>
        {product.slug === 'manxai' && (
          <p className="product-page__statement">
            사람을 관리하는 것이 아니라
            <br />
            <span className="product-page__statement-accent">성장을 지원합니다</span>
          </p>
        )}
      </header>

      <div className="company-page__intro">
        <p>{product.detailDesc}</p>
      </div>

      {product.slug === 'manxai' ? (
        <>
          <section className="company-page__section">
            <h3 className="company-page__section-title manxai-story__section-title">
              업무는 늘어나는데{' '}
              <span className="manxai-story__title-accent">관리 방식은 그대로</span>인가요?
            </h3>
            <ManxaiFeaturesStory />
          </section>
          <ManxaiPlatformSection />
          <ManxaiFieldWorkSection />
          <ManxaiAISection />
          <ManxaiSaaSSection />
        </>
      ) : (
        <section className="company-page__section">
          <h3 className="company-page__section-title">주요 기능</h3>
          <ul className="product-page__features">
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="product-page__cta">
        {product.slug === 'manxai' ? (
          <>
            <p className="product-page__cta-title">
              일하는 방식을 바꾸는 <span className="product-page__cta-accent">가장 쉬운 방법</span>
            </p>
            <p>복잡한 업무 프로세스를 단순하게.</p>
            <p>관리 업무는 줄이고 생산성은 높이십시오.</p>
            <p className="product-page__cta-strong">
              <span className="product-page__cta-accent product-page__cta-brand">Manxai</span>와 함께{' '}
              <span className="product-page__cta-accent">더 스마트한 업무 환경</span>을 시작하세요.
            </p>
            <div className="product-page__cta-actions">
              <Link to="/#contact" className="product-page__cta-btn">
                도입 문의
              </Link>
              {product.demoUrl && (
                <a
                  href={product.demoUrl}
                  className="product-page__cta-btn product-page__cta-btn--secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DEMO
                </a>
              )}
            </div>
          </>
        ) : (
          <>
            <p>제품 도입 및 상담이 필요하시면 문의해 주세요.</p>
            <Link to="/#contact" className="product-page__cta-btn">
              문의하기
            </Link>
          </>
        )}
      </section>
    </article>
  )
}
