import './Products.css'

const products = [
  {
    name: 'IT 인프라관리 AI',
    nameEn: 'Infra AI',
    desc: 'AI 기반 IT 인프라 모니터링, 장애 예측 및 자동화 운영 솔루션으로 안정적인 IT 환경을 구축합니다.',
    tags: ['모니터링', '자동화', 'AIOps'],
  },
  {
    name: 'Manxai (만사)',
    nameEn: 'HRM Solution',
    desc: '인사·조직·근태·평가를 통합 관리하는 AI 기반 HRM 플랫폼으로 HR 업무 효율을 높입니다.',
    tags: ['HRM', '인사관리', 'AI'],
  },
  {
    name: '건강관리 앱',
    nameEn: 'Health App',
    desc: '개인 맞춤형 건강 데이터 수집·분석 및 생활 습관 관리를 지원하는 모바일 헬스케어 서비스입니다.',
    tags: ['헬스케어', '모바일', '웰니스'],
  },
  {
    name: '스포츠 앱',
    nameEn: 'Sports App',
    desc: '운동 기록, 성과 분석, 커뮤니티 기능을 제공하는 스포츠·피트니스 모바일 애플리케이션입니다.',
    tags: ['피트니스', '스포츠', '앱'],
  },
]

export default function Products() {
  return (
    <section className="products" id="products">
      <div className="products__header container">
        <p className="section-label">Burunet Products</p>
        <h2 className="section-title">주요 제품 · 솔루션</h2>
        <p className="section-desc">
          AI 기술을 핵심으로 다양한 산업 분야에 적용 가능한
          소프트웨어 솔루션을 개발하고 있습니다.
        </p>
      </div>

      <div className="products__grid container">
        {products.map((product, index) => (
          <article key={product.name} className="products__card">
            <span className="products__number">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="products__card-body">
              <p className="products__name-en">{product.nameEn}</p>
              <h3>{product.name}</h3>
              <p className="products__desc">{product.desc}</p>
              <ul className="products__tags">
                {product.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
