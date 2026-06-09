export type PricingFeature = {
  label: string
  included: boolean
}

export type PricingPlan = {
  id: string
  icon: 'users' | 'building' | 'server'
  iconColor: 'blue' | 'green' | 'orange'
  title: string
  description: string
  price: string
  priceUnit: string
  popular?: boolean
  features: PricingFeature[]
}

export type ProductPricing = {
  slug: string
  name: string
  subtitle: string
  plans: PricingPlan[]
}

export const pricingLandingPath = '/pricing/infraai' as const

export const pricingNav = [
  { label: 'InfraAI', path: '/pricing/infraai' },
  { label: 'Manxai', path: '/pricing/manxai' },
  { label: 'Health & Sports', path: '/pricing/health-sports' },
  { label: 'Custom AI Solutions', path: '/pricing/custom-ai' },
] as const

export const productPricingMap: Record<string, ProductPricing> = {
  infraai: {
    slug: 'infraai',
    name: 'InfraAI',
    subtitle: 'IT 인프라 규모와 운영 환경에 맞는 3가지 라이선스 모델',
    plans: [
      {
        id: 'per-asset',
        icon: 'server',
        iconColor: 'blue',
        title: 'Per-Asset SaaS',
        description: '모니터링 자산 수 기준',
        price: '₩3,000',
        priceUnit: '/월/자산',
        features: [
          { label: '통합 모니터링 대시보드', included: true },
          { label: '기본 알림 및 리포트', included: true },
          { label: '기술 지원', included: true },
          { label: 'AI 장애 예측', included: false },
          { label: '온프레미스 연동', included: false },
        ],
      },
      {
        id: 'enterprise',
        icon: 'building',
        iconColor: 'green',
        title: '엔터프라이즈',
        description: '조직/데이터센터 단위',
        price: '₩800,000',
        priceUnit: '/월/조직',
        popular: true,
        features: [
          { label: '무제한 자산 모니터링', included: true },
          { label: 'AI 장애 예측', included: true },
          { label: '우선 기술 지원', included: true },
          { label: 'SIEM/ERP 연동', included: true },
          { label: '맞춤형 대시보드', included: true },
        ],
      },
      {
        id: 'on-premise',
        icon: 'server',
        iconColor: 'orange',
        title: '온프레미스',
        description: '대형 IT 환경/프라이빗',
        price: '별도 협의',
        priceUnit: '/프로젝트',
        features: [
          { label: '프라이빗 클라우드', included: true },
          { label: '전용 서버 구축', included: true },
          { label: '맞춤 AI 모델', included: true },
          { label: '전담 엔지니어', included: true },
          { label: 'SLA 보장', included: true },
        ],
      },
    ],
  },
  manxai: {
    slug: 'manxai',
    name: 'Manxai',
    subtitle: '3가지 모델로 조직 규모와 요구사항에 최적화된 솔루션 제공',
    plans: [
      {
        id: 'per-user',
        icon: 'users',
        iconColor: 'blue',
        title: 'Per-User SaaS',
        description: '월 사용자 수 기준',
        price: '₩5,000',
        priceUnit: '/월/인',
        features: [
          { label: '웹 포털 + 모바일 앱', included: true },
          { label: '정기 업데이트', included: true },
          { label: '기술 지원', included: true },
          { label: '백업 옵션', included: true },
          { label: '커스텀 결제 양식', included: false },
        ],
      },
      {
        id: 'site-license',
        icon: 'building',
        iconColor: 'green',
        title: '사이트 라이선스',
        description: '지점/현장 단위',
        price: '₩500,000',
        priceUnit: '/월/지점',
        popular: true,
        features: [
          { label: '무제한 사용자', included: true },
          { label: '전 기능 포함', included: true },
          { label: '우선 기술 지원', included: true },
          { label: 'ERP 연동', included: true },
          { label: '커스텀 결제 양식', included: true },
        ],
      },
      {
        id: 'on-premise',
        icon: 'server',
        iconColor: 'orange',
        title: '온프레미스',
        description: '대형 고객/프라이빗',
        price: '별도 협의',
        priceUnit: '/프로젝트',
        features: [
          { label: '프라이빗 클라우드', included: true },
          { label: '전용 서버 구축', included: true },
          { label: '커스텀 개발', included: true },
          { label: '전담 엔지니어', included: true },
          { label: 'SLA 보장', included: true },
        ],
      },
    ],
  },
  'health-sports': {
    slug: 'health-sports',
    name: 'Health & Sports',
    subtitle: '개인부터 조직까지 건강·스포츠 서비스에 맞는 구독 모델',
    plans: [
      {
        id: 'personal',
        icon: 'users',
        iconColor: 'blue',
        title: 'Personal',
        description: '개인 사용자 기준',
        price: '₩9,900',
        priceUnit: '/월/인',
        features: [
          { label: '모바일 앱 이용', included: true },
          { label: '건강 데이터 분석', included: true },
          { label: '운동 기록 관리', included: true },
          { label: '맞춤 코칭', included: false },
          { label: '조직 리포트', included: false },
        ],
      },
      {
        id: 'team',
        icon: 'building',
        iconColor: 'green',
        title: 'Team',
        description: '팀/조직 단위',
        price: '₩300,000',
        priceUnit: '/월/팀',
        popular: true,
        features: [
          { label: '무제한 멤버', included: true },
          { label: '맞춤형 운동 프로그램', included: true },
          { label: '조직 대시보드', included: true },
          { label: 'API 연동', included: true },
          { label: '우선 지원', included: true },
        ],
      },
      {
        id: 'enterprise',
        icon: 'server',
        iconColor: 'orange',
        title: 'Enterprise',
        description: '대형 서비스/플랫폼',
        price: '별도 협의',
        priceUnit: '/프로젝트',
        features: [
          { label: '화이트라벨 앱', included: true },
          { label: '전용 AI 모델', included: true },
          { label: '커스텀 기능 개발', included: true },
          { label: '전담 PM', included: true },
          { label: 'SLA 보장', included: true },
        ],
      },
    ],
  },
  'custom-ai': {
    slug: 'custom-ai',
    name: 'Custom AI Solutions',
    subtitle: '프로젝트 규모와 요구에 맞춘 맞춤형 AI 개발 견적 모델',
    plans: [
      {
        id: 'consulting',
        icon: 'users',
        iconColor: 'blue',
        title: '컨설팅',
        description: '요구 분석 및 설계',
        price: '별도 협의',
        priceUnit: '/초기 분석',
        features: [
          { label: '비즈니스 요구 분석', included: true },
          { label: 'AI 적용 가능성 검토', included: true },
          { label: 'PoC 설계', included: true },
          { label: '개발/구축', included: false },
          { label: '운영 지원', included: false },
        ],
      },
      {
        id: 'project',
        icon: 'building',
        iconColor: 'green',
        title: '프로젝트',
        description: '맞춤 개발·구축',
        price: '별도 협의',
        priceUnit: '/프로젝트',
        popular: true,
        features: [
          { label: '맞춤 AI 모델 개발', included: true },
          { label: '웹·모바일·API 개발', included: true },
          { label: '클라우드 배포', included: true },
          { label: '교육 및 인수인계', included: true },
          { label: '유지보수 옵션', included: true },
        ],
      },
      {
        id: 'partnership',
        icon: 'server',
        iconColor: 'orange',
        title: '파트너십',
        description: '장기 협력/고도화',
        price: '별도 협의',
        priceUnit: '/연간 계약',
        features: [
          { label: '전담 개발팀', included: true },
          { label: '지속적 고도화', included: true },
          { label: '전용 인프라', included: true },
          { label: 'SLA 보장', included: true },
          { label: '공동 사업 모델', included: true },
        ],
      },
    ],
  },
}
