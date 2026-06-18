import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <p className="footer__company">(주)부루넷</p>

          <div className="footer__info">
            <p className="footer__address">
              08511 서울특별시 금천구 벚꽃로 254 (가산동, 월드메르디앙1차 1203호)
            </p>
            <p className="footer__contact">
              <span>대표 : 길기용</span>
              <span>전화 : 070-8633-6645</span>
              <span>
                이메일 :{' '}
                <a href="mailto:support@burunet.co.kr">support@burunet.co.kr</a>
              </span>
            </p>
            <p className="footer__legal">
              <Link to="/privacy">개인정보처리방침</Link>
              <span className="footer__divider" aria-hidden="true">
                |
              </span>
              <a href="#">이메일무단수집거부</a>
            </p>
            <p className="footer__copyright">
              © {new Date().getFullYear()} Burunet Corp. All rights reserved.
            </p>
          </div>

          <button
            type="button"
            className="footer__top-btn"
            onClick={scrollTop}
            aria-label="맨 위로"
          >
            ↑ TOP
          </button>
        </div>
      </div>
    </footer>
  )
}
