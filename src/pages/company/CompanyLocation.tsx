import './CompanyPage.css'

const address = '서울특별시 금천구 벚꽃로 254 월드메르디앙1차 1203호'
const encodedAddress = encodeURIComponent(address)

const mapLinks = [
  {
    label: '네이버 지도',
    href: `https://map.naver.com/v5/search/${encodedAddress}`,
  },
  {
    label: '카카오맵',
    href: `https://map.kakao.com/?q=${encodedAddress}`,
  },
  {
    label: 'Google 지도',
    href: `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
  },
]

export default function CompanyLocation() {
  return (
    <article className="company-page">
      <header className="company-page__header">
        <h2 className="company-page__title">찾아오시는길</h2>
        <p className="company-page__subtitle">Burunet Corp. (주)부루넷</p>
      </header>

      <section className="company-page__section">
        <h3 className="company-page__section-title">주소</h3>
        <p className="company-page__address">{address}</p>
      </section>

      <section className="company-page__section">
        <h3 className="company-page__section-title">오시는 길</h3>
        <figure className="company-page__map">
          <img
            src="/images/location-map.png"
            alt={`(주)부루넷 위치 지도 - ${address}`}
            className="company-page__map-image"
            width={800}
            height={450}
          />
          <div className="company-page__map-label">
            <p className="company-page__map-label-kr">(주)부루넷</p>
            <p className="company-page__map-label-en">Burunet Corp.</p>
          </div>
        </figure>

        <ul className="company-page__map-links">
          {mapLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}에서 보기
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="company-page__section">
        <h3 className="company-page__section-title">교통 안내</h3>
        <ul className="company-page__info-list">
          <li>
            <strong>지하철</strong>
            <span>
              1호선 가산디지털단지역 또는 7호선 남구로역 하차 후 도보 또는 버스 이용
            </span>
          </li>
          <li>
            <strong>버스</strong>
            <span>벚꽃로·월드메르디앙 인근 정류장 하차</span>
          </li>
          <li>
            <strong>주차</strong>
            <span>월드메르디앙1차 건물 내 주차 가능 (방문 전 문의 권장)</span>
          </li>
        </ul>
      </section>
    </article>
  )
}
