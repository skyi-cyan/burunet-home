export const productsLandingPath = '/products' as const

export const productsNav = [
  { label: 'InfraAI', path: '/products/infraai' },
  { label: 'Manxai', path: '/products/manxai' },
  { label: 'Health & Sports', path: '/products/health-sports' },
  { label: 'Custom AI Solutions', path: '/products/custom-ai' },
] as const

export type ProductItem = {
  id: string
  slug: string
  name: string
  tagline: string
  taglineAccent: string
  description: string
  detailDesc: string
  features: string[]
  path: string
  demoUrl?: string
}

export const productItems: ProductItem[] = [
  {
    id: 'infraai',
    slug: 'infraai',
    name: 'InfraAI',
    tagline: 'AI 기반 IT 인프라 관리 플랫폼',
    taglineAccent: 'AI 기반',
    description:
      '서버, 네트워크, 보안 장비를 하나의 화면에서 관리하고 장애를 예측합니다.',
    detailDesc:
      'InfraAI는 분산된 IT 인프라를 통합 모니터링하고, AI 기반 이상 탐지와 장애 예측으로 운영 안정성을 높이는 플랫폼입니다. 대시보드 하나로 서버·네트워크·보안 자산을 관리하고 운영 효율을 극대화할 수 있습니다.',
    features: [
      '통합 인프라 모니터링 대시보드',
      'AI 기반 장애 예측 및 알림',
      '서버·네트워크·보안 장비 일원화 관리',
      '운영 자동화 및 리포트',
    ],
    path: '/products/infraai',
  },
  {
    id: 'manxai',
    slug: 'manxai',
    name: 'Manxai',
    tagline: '사람을 위한 SaaS형 AI HRM',
    taglineAccent: 'AI HRM',
    description:
      '인사관리, 근태, 급여, 코칭까지 AI가 더 효율적으로 관리합니다.',
    detailDesc:
      'Manxai는 인사·근태·평가·조직 분석을 하나의 SaaS 플랫폼에서 제공하는 AI HRM 솔루션입니다. 반복 업무는 자동화하고, HR 담당자는 더 전략적인 의사결정에 집중할 수 있습니다.',
    features: [
      '인사·조직·근태 통합 관리',
      'AI 기반 평가 및 조직 분석',
      '급여·복리후생 연동',
      '임직원 코칭 및 성과 관리',
    ],
    path: '/products/manxai',
    demoUrl: 'https://demo.manxai.io',
  },
  {
    id: 'health-sports',
    slug: 'health-sports',
    name: 'Health & Sports',
    tagline: '건강한 일상을 위한 AI 서비스',
    taglineAccent: '건강한 일상',
    description: '건강 데이터 분석과 맞춤형 운동 관리를 제공합니다.',
    detailDesc:
      'Health & Sports는 개인의 건강 데이터를 수집·분석하여 맞춤형 운동과 생활 습관 관리를 지원하는 AI 기반 모바일 서비스입니다. 일상 속에서 지속 가능한 건강 관리를 돕습니다.',
    features: [
      '건강 데이터 수집 및 분석',
      '맞춤형 운동·식습관 추천',
      '활동 기록 및 성과 트래킹',
      '웰니스 리포트 제공',
    ],
    path: '/products/health-sports',
  },
  {
    id: 'custom-ai',
    slug: 'custom-ai',
    name: 'Custom AI Solutions',
    tagline: '기업 맞춤형 AI 솔루션 주문 개발',
    taglineAccent: '주문 개발',
    description:
      '비즈니스 요구 분석부터 설계, 개발, 배포까지 고객 환경에 최적화된 소프트웨어를 제공합니다.',
    detailDesc:
      'Custom AI Solutions는 고객의 업무 환경과 목표에 맞춘 주문형 AI 소프트웨어 개발 서비스입니다. 요구사항 분석부터 설계, 개발, 배포, 운영까지 전 과정을 함께합니다.',
    features: [
      '비즈니스 요구 분석 및 컨설팅',
      '맞춤형 AI 모델·서비스 설계',
      '웹·모바일·클라우드 기반 개발',
      '구축 후 운영 및 고도화 지원',
    ],
    path: '/products/custom-ai',
  },
]
