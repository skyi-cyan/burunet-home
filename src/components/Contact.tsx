import { useState } from 'react'
import type { FormEvent } from 'react'
import './Contact.css'

type FormData = {
  category: string
  name: string
  company: string
  email: string
  phone: string
  message: string
  privacy: boolean
}

const initialForm: FormData = {
  category: '',
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
  privacy: false,
}

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!form.privacy) return
    setSubmitted(true)
  }

  const update = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__header">
          <p className="section-label">Contact Us</p>
          <h2 className="section-title">문의하기</h2>
          <p className="section-desc">
            제품·솔루션, 기술 개발, 채용 등 궁금하신 사항을
            남겨주시면 빠르게 답변드리겠습니다.
          </p>
        </div>

        {submitted ? (
          <div className="contact__success">
            <div className="contact__success-icon" aria-hidden="true">✓</div>
            <h3>문의가 접수되었습니다</h3>
            <p>빠른 시일 내에 답변드리겠습니다. 감사합니다.</p>
            <button
              type="button"
              className="contact__reset"
              onClick={() => {
                setForm(initialForm)
                setSubmitted(false)
              }}
            >
              새 문의 작성
            </button>
          </div>
        ) : (
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__row">
              <label className="contact__field">
                <span>
                  문의 구분 <em>*</em>
                </span>
                <select
                  required
                  value={form.category}
                  onChange={(e) => update('category', e.target.value)}
                >
                  <option value="">선택</option>
                  <option value="product">제품·솔루션 문의</option>
                  <option value="tech">기술 및 개발 문의</option>
                  <option value="recruit">채용 문의</option>
                  <option value="partnership">사업제안 문의</option>
                  <option value="other">기타 문의</option>
                </select>
              </label>
              <label className="contact__field">
                <span>
                  이름 <em>*</em>
                </span>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="이름을 입력해 주세요"
                />
              </label>
            </div>

            <div className="contact__row">
              <label className="contact__field">
                <span>
                  회사명 <em>*</em>
                </span>
                <input
                  type="text"
                  required
                  value={form.company}
                  onChange={(e) => update('company', e.target.value)}
                  placeholder="회사명을 입력해 주세요"
                />
              </label>
              <label className="contact__field">
                <span>
                  이메일 <em>*</em>
                </span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="example@company.com"
                />
              </label>
            </div>

            <div className="contact__row">
              <label className="contact__field contact__field--full">
                <span>연락처</span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="010-0000-0000"
                />
              </label>
            </div>

            <label className="contact__field contact__field--full">
              <span>문의 내용</span>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                placeholder="문의 내용을 입력해 주세요"
              />
            </label>

            <label className="contact__privacy">
              <input
                type="checkbox"
                required
                checked={form.privacy}
                onChange={(e) => update('privacy', e.target.checked)}
              />
              <span>
                (필수) 개인정보 수집 및 이용에 동의합니다.
              </span>
            </label>

            <button type="submit" className="contact__submit">
              문의 보내기
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
