import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { pricingNav } from '../data/pricingNav'
import './PricingLayout.css'

const pageTitles: Record<string, string> = {
  '/pricing/infraai': 'InfraAI',
  '/pricing/manxai': 'Manxai',
  '/pricing/health-sports': 'Health & Sports',
  '/pricing/custom-ai': 'Custom AI Solutions',
}

export default function PricingLayout() {
  const { pathname } = useLocation()
  const pageTitle = pageTitles[pathname] ?? '가격'

  return (
    <div className="pricing-layout">
      <section className="pricing-hero" aria-labelledby="pricing-hero-title">
        <div className="pricing-hero__bg" aria-hidden="true">
          <img src="/images/products-hero.png" alt="" className="pricing-hero__image" />
          <div className="pricing-hero__overlay" />
        </div>
        <div className="pricing-hero__content container">
          <p className="pricing-hero__breadcrumb">가격</p>
          <h1 id="pricing-hero-title" className="pricing-hero__title">
            {pageTitle}
          </h1>
          <p className="pricing-hero__desc">
            제품별 라이선스 정책과 맞춤 협의 견적을 안내합니다.
          </p>
        </div>
      </section>

      <div className="pricing-layout__body container">
        <aside className="pricing-layout__sidebar">
          <nav aria-label="가격 하위 메뉴">
            <ul>
              {pricingNav.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? 'pricing-layout__link pricing-layout__link--active'
                        : 'pricing-layout__link'
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="pricing-layout__content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
