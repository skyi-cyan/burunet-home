import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { companyNav } from '../data/companyNav'
import CompanyMegaIllustration from './CompanyMegaIllustration'
import './Header.css'

const mainNavItems = [
  { label: '제품·솔루션', href: '/#products' },
  { label: '사업분야', href: '/#business' },
  { label: '문의하기', href: '/#contact' },
]

export default function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
    setMegaOpen(false)
  }, [location.pathname])

  const closeAll = () => {
    setMenuOpen(false)
    setMegaOpen(false)
  }

  const isCompanySection = location.pathname.startsWith('/company')

  return (
    <header
      className={`header ${megaOpen ? 'header--mega-open' : ''}`}
      onMouseLeave={() => setMegaOpen(false)}
    >
      <div className="header__bar">
        <div className="header__inner container">
          <Link to="/" className="header__logo" onClick={closeAll}>
            <span className="header__logo-mark">
              <img
                src="/images/logo.png"
                alt=""
                className="header__logo-img"
              />
            </span>
            <span className="header__logo-text">
              <strong>BURUNET</strong>
              <small>(주)부루넷</small>
            </span>
          </Link>

          <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
            <ul className="header__nav-list">
              <li
                className={`header__nav-item ${megaOpen ? 'header__nav-item--active' : ''}`}
                onMouseEnter={() => setMegaOpen(true)}
              >
                <button
                  type="button"
                  className={`header__nav-trigger ${isCompanySection ? 'header__nav-trigger--current' : ''}`}
                  aria-expanded={megaOpen}
                  aria-haspopup="true"
                  onClick={() => setMegaOpen((open) => !open)}
                >
                  회사소개
                </button>
              </li>

              {mainNavItems.map((item) => (
                <li key={item.href} className="header__nav-item">
                  <a href={item.href} onClick={closeAll}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className={`header__mobile-company ${megaOpen ? 'header__mobile-company--open' : ''}`}>
              <p className="header__mobile-company-title">회사소개</p>
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
          </nav>

          <button
            type="button"
            className={`header__toggle ${menuOpen ? 'header__toggle--open' : ''}`}
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((open) => !open)
              setMegaOpen(false)
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
        onMouseEnter={() => setMegaOpen(true)}
        aria-hidden={!megaOpen}
      >
        <div className="header__mega-panel">
          <div className="header__mega-inner container">
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
          </div>
        </div>
      </div>

      <div
        className={`header__backdrop ${megaOpen ? 'header__backdrop--open' : ''}`}
        aria-hidden="true"
        onClick={() => setMegaOpen(false)}
      />
    </header>
  )
}
