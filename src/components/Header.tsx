import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { companyNav } from '../data/companyNav'
import { pricingLandingPath, pricingNav } from '../data/pricingNav'
import { productsLandingPath, productsNav } from '../data/productsNav'
import CompanyMegaIllustration from './CompanyMegaIllustration'
import PricingMegaIllustration from './PricingMegaIllustration'
import ProductsMegaIllustration from './ProductsMegaIllustration'
import './Header.css'

type MegaMenuType = 'company' | 'products' | 'pricing' | null

const mainNavItems = [{ label: '문의하기', href: '/#contact' }]

export default function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [megaMenu, setMegaMenu] = useState<MegaMenuType>(null)

  const megaOpen = megaMenu !== null

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
    setMegaMenu(null)
  }, [location.pathname])

  const closeAll = () => {
    setMenuOpen(false)
    setMegaMenu(null)
  }

  const isCompanySection = location.pathname.startsWith('/company')
  const isProductsSection = location.pathname.startsWith('/products')
  const isPricingSection = location.pathname.startsWith('/pricing')

  return (
    <header
      className={`header ${megaOpen ? 'header--mega-open' : ''}`}
      onMouseLeave={() => setMegaMenu(null)}
    >
      <div className="header__bar">
        <div className="header__inner container">
          <Link to="/" className="header__logo" onClick={closeAll}>
            <span className="header__logo-mark">
              <img src="/images/logo.png" alt="" className="header__logo-img" />
            </span>
            <span className="header__logo-text">
              <strong>BURUNET</strong>
              <small>(주)부루넷</small>
            </span>
          </Link>

          <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
            <ul className="header__nav-list">
              <li
                className={`header__nav-item ${megaMenu === 'company' ? 'header__nav-item--active' : ''}`}
                onMouseEnter={() => setMegaMenu('company')}
              >
                <button
                  type="button"
                  className={`header__nav-trigger ${isCompanySection ? 'header__nav-trigger--current' : ''}`}
                  aria-expanded={megaMenu === 'company'}
                  aria-haspopup="true"
                  onClick={() => setMegaMenu((current) => (current === 'company' ? null : 'company'))}
                >
                  회사소개
                </button>
              </li>

              <li
                className={`header__nav-item ${megaMenu === 'products' ? 'header__nav-item--active' : ''}`}
                onMouseEnter={() => setMegaMenu('products')}
              >
                <Link
                  to={productsLandingPath}
                  className={`header__nav-trigger ${isProductsSection ? 'header__nav-trigger--current' : ''}`}
                  onClick={closeAll}
                >
                  제품·솔루션
                </Link>
              </li>

              <li
                className={`header__nav-item ${megaMenu === 'pricing' ? 'header__nav-item--active' : ''}`}
                onMouseEnter={() => setMegaMenu('pricing')}
              >
                <Link
                  to={pricingLandingPath}
                  className={`header__nav-trigger ${isPricingSection ? 'header__nav-trigger--current' : ''}`}
                  onClick={closeAll}
                >
                  가격
                </Link>
              </li>

              {mainNavItems.map((item) => (
                <li key={item.href} className="header__nav-item">
                  <a href={item.href} onClick={closeAll}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className={`header__mobile-submenu ${megaMenu === 'company' ? 'header__mobile-submenu--open' : ''}`}>
              <p className="header__mobile-submenu-title">회사소개</p>
              <ul>
                {companyNav.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} onClick={closeAll}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="header__mobile-submenu header__mobile-submenu--products">
              <p className="header__mobile-submenu-title">제품·솔루션</p>
              <ul>
                <li>
                  <Link to={productsLandingPath} onClick={closeAll}>
                    제품 개요
                  </Link>
                </li>
                {productsNav.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} onClick={closeAll}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="header__mobile-submenu header__mobile-submenu--pricing">
              <p className="header__mobile-submenu-title">가격</p>
              <ul>
                {pricingNav.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} onClick={closeAll}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <button
            type="button"
            className={`header__toggle ${menuOpen ? 'header__toggle--open' : ''}`}
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((open) => !open)
              setMegaMenu(null)
            }}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className={`header__mega ${megaOpen ? 'header__mega--open' : ''}`}
        onMouseEnter={() => setMegaMenu(megaMenu)}
        aria-hidden={!megaOpen}
      >
        <div className="header__mega-panel">
          <div className="header__mega-inner container">
            {megaMenu === 'company' && (
              <>
                <div className="header__mega-visual">
                  <h2 className="header__mega-title">회사소개</h2>
                  <p className="header__mega-desc">AI 기술로 더 스마트한 미래를 연결합니다</p>
                  <CompanyMegaIllustration />
                </div>
                <div className="header__mega-divider" aria-hidden="true" />
                <div className="header__mega-links">
                  <div className="header__mega-col">
                    <h3 className="header__mega-col-title">회사소개</h3>
                    <ul>
                      {companyNav.map((item) => (
                        <li key={item.path}>
                          <Link to={item.path} onClick={closeAll}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}

            {megaMenu === 'products' && (
              <>
                <div className="header__mega-visual">
                  <Link to={productsLandingPath} className="header__mega-title" onClick={closeAll}>
                    제품·솔루션
                  </Link>
                  <p className="header__mega-desc">
                    AI로 업무를 더 쉽고 스마트하게 만드는 부루넷의 제품을 만나보세요
                  </p>
                  <ProductsMegaIllustration />
                </div>
                <div className="header__mega-divider" aria-hidden="true" />
                <div className="header__mega-links">
                  <div className="header__mega-col">
                    <h3 className="header__mega-col-title">제품·솔루션</h3>
                    <ul>
                      <li>
                        <Link to={productsLandingPath} onClick={closeAll}>
                          제품 개요
                        </Link>
                      </li>
                      {productsNav.map((item) => (
                        <li key={item.path}>
                          <Link to={item.path} onClick={closeAll}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}

            {megaMenu === 'pricing' && (
              <>
                <div className="header__mega-visual">
                  <Link to={pricingLandingPath} className="header__mega-title" onClick={closeAll}>
                    가격
                  </Link>
                  <p className="header__mega-desc">
                    제품별 라이선스 정책과 맞춤 협의 견적을 확인하세요
                  </p>
                  <PricingMegaIllustration />
                </div>
                <div className="header__mega-divider" aria-hidden="true" />
                <div className="header__mega-links">
                  <div className="header__mega-col">
                    <h3 className="header__mega-col-title">가격</h3>
                    <ul>
                      {pricingNav.map((item) => (
                        <li key={item.path}>
                          <Link to={item.path} onClick={closeAll}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div
        className={`header__backdrop ${megaOpen ? 'header__backdrop--open' : ''}`}
        aria-hidden="true"
        onClick={() => setMegaMenu(null)}
      />
    </header>
  )
}
