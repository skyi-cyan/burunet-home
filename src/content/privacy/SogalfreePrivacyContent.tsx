import { Link } from 'react-router-dom'
import type { PrivacyPolicyContentProps } from '../../data/privacyPolicies/types'
import { getPrivacyPolicyPath } from '../../data/privacyPolicies/utils'

export default function SogalfreePrivacyContent({ policy }: PrivacyPolicyContentProps) {
  const privacyPolicyPath = getPrivacyPolicyPath(policy.slug)

  return (
    <>
      <section className="legal-page__section">
        <h2>1. 총칙</h2>
        <p>
          소갈푸리 - 혈당·식단 기록(이하 «앱»)은 이용자가 혈당·식단 등 건강 관련 정보를{' '}
          <strong>자신의 스마트폰에 기록·관리</strong>할 수 있도록 하는 모바일 애플리케이션입니다.
        </p>
        <p>본 개인정보처리방침은 앱 이용과 관련하여 어떤 정보가 어떻게 처리되는지 설명합니다.</p>
      </section>

      <section className="legal-page__section">
        <h2>2. 처리하는 개인정보 항목</h2>
        <p>
          이용자가 앱에 <strong>직접 입력</strong>하는 정보가 대상입니다. 필수 가입·계정은 없습니다.
        </p>
        <div className="legal-page__table-wrap">
          <table className="legal-page__table">
            <thead>
              <tr>
                <th scope="col">구분</th>
                <th scope="col">항목</th>
                <th scope="col">목적</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>건강 기록</td>
                <td>혈당 수치, 측정 구분(공복·식전·식후 등), 인슐린·메모</td>
                <td>일상 혈당 관리</td>
              </tr>
              <tr>
                <td>건강 기록</td>
                <td>활동 종류·혈당(반응 혈당), 측정 시각</td>
                <td>활동별 혈당 변화 기록</td>
              </tr>
              <tr>
                <td>건강 기록</td>
                <td>식사·음주 내용, 시간, 칼로리 등</td>
                <td>식단 관리</td>
              </tr>
              <tr>
                <td>설정(선택)</td>
                <td>성명, 생년월일, 주소, 연락처, 보호자·병원 연락처 등</td>
                <td>당뇨병 정보·비상 연락용 표시</td>
              </tr>
              <tr>
                <td>설정(선택)</td>
                <td>혈당 목표 범위, 알림 관련 설정 값</td>
                <td>앱 내 표시·기능 설정</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>이용자가 입력하지 않은 항목은 저장되지 않습니다.</p>
      </section>

      <section className="legal-page__section">
        <h2>3. 개인정보의 처리 목적</h2>
        <ul>
          <li>혈당·식단 기록의 저장·조회·통계 제공</li>
          <li>기기 내 설정 및 비상 연락 정보 표시</li>
          <li>
            이용자가 선택한 <strong>백업 파일</strong> 생성·복구
          </li>
          <li>
            앱 안정성·기능 개선(현재 버전은 <strong>개발자 서버로 개인정보를 전송하지 않음</strong>)
          </li>
        </ul>
      </section>

      <section className="legal-page__section">
        <h2>4. 보관 및 처리 방식</h2>
        <h3>4.1 기기 내 저장</h3>
        <p>
          입력한 정보는 <strong>이용자 스마트폰 내부 저장소</strong>(AsyncStorage 등)에 저장됩니다.
          운영자가 별도의 클라우드 서버에 이용자 데이터를 수집·보관하지 <strong>않습니다</strong>.
        </p>
        <h3>4.2 백업 파일</h3>
        <p>
          이용자가 «데이터 내려받기»를 실행하면, 기록이 <strong>이용자 기기의 저장 공간</strong>
          (예: 다운로드 폴더)에 JSON 형식 파일로 저장될 수 있습니다. 해당 파일의 관리·전송·삭제는{' '}
          <strong>이용자 책임</strong>이며, 타인에게 공유하지 않도록 유의해 주세요.
        </p>
        <h3>4.3 보관 기간</h3>
        <ul>
          <li>앱을 삭제하거나 «모든 데이터 삭제»를 실행할 때까지 기기 내에 보관됩니다.</li>
          <li>운영자는 이용자 기기에 저장된 데이터에 접근할 수 없습니다.</li>
        </ul>
      </section>

      <section className="legal-page__section">
        <h2>5. 제3자 제공 및 국외 이전</h2>
        <p>
          운영자는 이용자의 개인정보를 <strong>제3자에게 제공·판매하지 않습니다.</strong> 현재 앱은{' '}
          <strong>개발자 운영 서버로 건강·연락처 데이터를 전송하지 않습니다.</strong>
        </p>
        <p className="legal-page__note">
          (Google Play를 통한 앱 배포·기기 OS 업데이트 등은 Google·기기 제조사 정책에 따릅니다.)
        </p>
      </section>

      <section className="legal-page__section">
        <h2>6. 이용자의 권리</h2>
        <p>이용자는 언제든지 다음을 할 수 있습니다.</p>
        <ul>
          <li>
            앱에서 기록·설정 <strong>열람·수정·삭제</strong>
          </li>
          <li>
            설정 메뉴의 <strong>«모든 데이터 삭제»</strong>로 저장 데이터 일괄 삭제
          </li>
          <li>
            앱 <strong>삭제</strong>로 기기 내 앱 데이터 제거
          </li>
        </ul>
        <p>
          서버에 보관하는 데이터가 없으므로, 운영자에게 «열람·삭제»를 요청할 별도 데이터는 존재하지 않을
          수 있습니다. 문의:{' '}
          <a href={`mailto:${policy.contactEmail}`}>{policy.contactEmail}</a>
        </p>
      </section>

      <section className="legal-page__section">
        <h2>7. 아동의 개인정보</h2>
        <p>
          앱은 특정 연령 이상을 대상으로 하지 않으나, 만 14세 미만 아동이 이용하는 경우 법정대리인의
          지도하에 이용할 것을 권장합니다.
        </p>
      </section>

      <section className="legal-page__section">
        <h2>8. 안전을 위한 조치</h2>
        <ul>
          <li>네트워크를 통한 개인정보 전송 기능 없음(오프라인 기록 중심)</li>
          <li>Android OS의 앱 샌드박스·기기 잠금(비밀번호·지문 등) 이용 권장</li>
          <li>백업 파일은 개인정보가 포함될 수 있으므로 안전한 위치에 보관</li>
        </ul>
      </section>

      <section className="legal-page__section">
        <h2>9. 의료 관련 안내 (중요)</h2>
        <ul>
          <li>
            본 앱은 <strong>의료기기가 아니며</strong>, 질병의 진단·치료·예방을 목적으로 하지 않습니다.
          </li>
          <li>
            앱에 표시되는 수치·통계·당화혈색소 추정치 등은 <strong>참고용</strong>이며, 의료 전문가의
            진료·검사를 대체하지 않습니다.
          </li>
          <li>
            건강 이상·응급 상황 시 <strong>119 및 의료기관</strong>에 연락하세요.
          </li>
        </ul>
      </section>

      <section className="legal-page__section">
        <h2>10. 개인정보처리방침의 변경</h2>
        <p>
          법령·앱 기능 변경 시 본 방침을 수정할 수 있습니다. 변경 시{' '}
          <Link to={privacyPolicyPath}>{policy.title}</Link> 페이지에 게시하며, 중요한 변경은 앱 내
          안내 또는 게시일을 명시합니다.
        </p>
      </section>

      <section className="legal-page__section">
        <h2>11. 데이터 삭제 안내</h2>
        <ul>
          <li>
            <strong>앱 이름:</strong> 소갈푸리
          </li>
          <li>
            <strong>삭제 방법:</strong> 앱 내 [설정] &gt; [데이터 삭제] 메뉴를 통해 사용자가 직접 모든
            데이터를 즉시 삭제할 수 있습니다.
          </li>
          <li>
            <strong>기타 문의:</strong> 삭제에 어려움이 있을 경우 개발자 이메일(
            <a href={`mailto:${policy.contactEmail}`}>{policy.contactEmail}</a>)로 요청해 주시면
            확인 후 처리해 드립니다.
          </li>
        </ul>
      </section>

      <section className="legal-page__section">
        <h2>12. 문의처</h2>
        <p>개인정보 처리와 관련한 문의:</p>
        <ul>
          <li>
            <strong>운영자:</strong> {policy.operator}
          </li>
          <li>
            <strong>이메일:</strong>{' '}
            <a href={`mailto:${policy.contactEmail}`}>{policy.contactEmail}</a>
          </li>
          <li>
            <strong>개인정보처리방침:</strong>{' '}
            <Link to={privacyPolicyPath}>{policy.appName}</Link>
          </li>
        </ul>
      </section>

      <section className="legal-page__section legal-page__section--supplement">
        <h2>부칙</h2>
        <p>본 방침은 {policy.effectiveDate}부터 적용됩니다.</p>
      </section>
    </>
  )
}
