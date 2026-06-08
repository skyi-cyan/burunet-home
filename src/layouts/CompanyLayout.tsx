import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { companyNav } from '../data/companyNav'
import './CompanyLayout.css'

const pageTitles: Record<string, string> = {
  '/company/overview': '회사개요',
  '/company/greeting': '인사말',
  '/company/history': '연혁',
  '/company/location': '찾아오시는길',
}

export default function CompanyLayout() {
  const { pathname } = useLocation()
  const pageTitle = pageTitles[pathname] ?? '회사소개'

  return (
    <div className="company-layout">
      <section className="company-hero" aria-labelledby="company-hero-title">
        <div className="company-hero__bg" aria-hidden="true">
          <img
            src="/images/company-hero.png"
            alt=""
            className="company-hero__image"
          />
          <div className="company-hero__overlay" />
        </div>
        <div className="company-hero__content container">
          <p className="company-hero__breadcrumb">회사소개</p>
          <h1 id="company-hero-title" className="company-hero__title">
            {pageTitle}
          </h1>
          <p className="company-hero__desc">
            AI 기술로 더 스마트한 미래를 연결하는 (주)부루넷을 소개합니다.
          </p>
        </div>
      </section>

      <div className="company-layout__body container">
        <aside className="company-layout__sidebar">
          <nav aria-label="회사소개 하위 메뉴">
            <ul>
              {companyNav.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? 'company-layout__link company-layout__link--active' : 'company-layout__link'
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="company-layout__content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
