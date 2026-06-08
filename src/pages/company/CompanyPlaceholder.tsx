import './CompanyPage.css'

type Props = {
  title: string
}

export default function CompanyPlaceholder({ title }: Props) {
  return (
    <article className="company-page company-page--placeholder">
      <h2>{title}</h2>
      <p>콘텐츠를 준비 중입니다.</p>
    </article>
  )
}
