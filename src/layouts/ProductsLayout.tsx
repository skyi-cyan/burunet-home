import { NavLink, Outlet, useLocation } from 'react-router-dom'
import InfraAIHero from '../components/products/InfraAIHero'
import ProductCards from '../components/products/ProductCards'
import ProductsHero from '../components/products/ProductsHero'
import { productsLandingPath, productsNav } from '../data/productsNav'
import './ProductsLayout.css'

const pageTitles: Record<string, string> = {
  '/products/infraai': 'InfraAI',
  '/products/manxai': 'Manxai',
  '/products/health-sports': 'Health & Sports',
  '/products/custom-ai': 'Custom AI Solutions',
}

export default function ProductsLayout() {
  const { pathname } = useLocation()
  const pageTitle = pageTitles[pathname] ?? '제품·솔루션'
  const isLanding =
    pathname === productsLandingPath || pathname === `${productsLandingPath}/`
  const isInfraAI = pathname === '/products/infraai'

  return (
    <div className={`products-layout ${isLanding ? 'products-layout--landing' : ''}`}>
      {isLanding ? (
        <ProductsHero />
      ) : isInfraAI ? (
        <InfraAIHero />
      ) : (
        <section className="products-layout-hero" aria-labelledby="products-layout-hero-title">
          <div className="products-layout-hero__bg" aria-hidden="true">
            <img
              src="/images/products-hero.png"
              alt=""
              className="products-layout-hero__image"
            />
            <div className="products-layout-hero__overlay" />
          </div>
          <div className="products-layout-hero__content container">
            <p className="products-layout-hero__breadcrumb">제품·솔루션</p>
            <h1 id="products-layout-hero-title" className="products-layout-hero__title">
              {pageTitle}
            </h1>
            <p className="products-layout-hero__desc">
              AI 기술로 업무를 더 쉽고 스마트하게 만드는 부루넷의 제품을 소개합니다.
            </p>
          </div>
        </section>
      )}

      {!isLanding && isInfraAI && <Outlet />}

      {!isLanding && !isInfraAI && (
        <div className="products-layout__body container">
          <aside className="products-layout__sidebar">
            <nav aria-label="제품·솔루션 하위 메뉴">
              <ul>
                {productsNav.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? 'products-layout__link products-layout__link--active'
                          : 'products-layout__link'
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="products-layout__content">
            <Outlet />
          </div>
        </div>
      )}

      {isLanding && <ProductCards />}
    </div>
  )
}
