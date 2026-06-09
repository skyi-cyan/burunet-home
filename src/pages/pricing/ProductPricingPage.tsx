import { Navigate, useParams } from 'react-router-dom'
import PricingPlans from '../../components/pricing/PricingPlans'
import { productPricingMap } from '../../data/pricingNav'
import '../company/CompanyPage.css'
import './PricingPage.css'

export default function ProductPricingPage() {
  const { slug } = useParams()
  const pricing = slug ? productPricingMap[slug] : undefined

  if (!pricing) {
    return <Navigate to="/pricing/infraai" replace />
  }

  return (
    <article className="pricing-page">
      <header className="company-page__header">
        <h2 className="company-page__title">
          <span className="pricing-page__accent">가격</span> / 라이선스 정책{' '}
          <span className="pricing-page__sub">(맞춤 협의)</span>
        </h2>
        <p className="company-page__subtitle">{pricing.name}</p>
      </header>

      <p className="pricing-page__desc">{pricing.subtitle}</p>

      <div className="pricing-page__plans">
        <PricingPlans plans={pricing.plans} />
      </div>
    </article>
  )
}
