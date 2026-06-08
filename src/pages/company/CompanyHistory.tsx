import './CompanyPage.css'

const historyItems = [
  { date: '2025.5', title: '기업부설연구소 설립' },
  { date: '2023.9', title: '부루넷 설립' },
]

export default function CompanyHistory() {
  return (
    <article className="company-page">
      <header className="company-page__header">
        <h2 className="company-page__title">연혁</h2>
        <p className="company-page__subtitle">Burunet Corp. (주)부루넷</p>
      </header>

      <ol className="company-page__timeline">
        {historyItems.map((item, index) => (
          <li key={item.date} className="company-page__timeline-item">
            <div className="company-page__timeline-marker" aria-hidden="true">
              <span className="company-page__timeline-dot" />
              {index < historyItems.length - 1 && (
                <span className="company-page__timeline-line" />
              )}
            </div>
            <div className="company-page__timeline-content">
              <time className="company-page__timeline-date" dateTime={item.date.replace('.', '-')}>
                {item.date}
              </time>
              <p className="company-page__timeline-title">{item.title}</p>
            </div>
          </li>
        ))}
      </ol>
    </article>
  )
}
