import { Link } from 'react-router-dom'
import type { PricingPlan } from '../../data/pricingNav'
import './PricingPlans.css'

function PlanIcon({ plan }: { plan: PricingPlan }) {
  const icons = {
    users: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M16 11a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 20a6 6 0 0 1 16 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22 20a4.5 4.5 0 0 0-6-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    building: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 20V6l7-3 7 3v14H5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 10h2M9 14h2M13 10h2M13 14h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    server: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="4" y="14" width="16" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="7" r="1" fill="currentColor" />
        <circle cx="8" cy="17" r="1" fill="currentColor" />
      </svg>
    ),
  }

  return (
    <span className={`pricing-plans__icon pricing-plans__icon--${plan.iconColor}`}>
      {icons[plan.icon]}
    </span>
  )
}

type PricingPlansProps = {
  plans: PricingPlan[]
}

export default function PricingPlans({ plans }: PricingPlansProps) {
  return (
    <div className="pricing-plans">
      <div className="pricing-plans__grid">
        {plans.map((plan) => (
          <article
            key={plan.id}
            className={`pricing-plans__card ${plan.popular ? 'pricing-plans__card--popular' : ''}`}
          >
            {plan.popular && <span className="pricing-plans__badge">인기</span>}

            <PlanIcon plan={plan} />
            <h3 className="pricing-plans__card-title">{plan.title}</h3>
            <p className="pricing-plans__card-desc">{plan.description}</p>

            <div className="pricing-plans__price-box">
              <span className="pricing-plans__price">{plan.price}</span>
              <span className="pricing-plans__price-unit">{plan.priceUnit}</span>
            </div>

            <ul className="pricing-plans__features">
              {plan.features.map((feature) => (
                <li
                  key={feature.label}
                  className={
                    feature.included
                      ? 'pricing-plans__feature'
                      : 'pricing-plans__feature pricing-plans__feature--excluded'
                  }
                >
                  {feature.included ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M3.5 8.5l3 3 6-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M5 5l6 6M11 5l-6 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                  {feature.label}
                </li>
              ))}
            </ul>

            <Link to="/#contact" className="pricing-plans__cta">
              상담 신청
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
