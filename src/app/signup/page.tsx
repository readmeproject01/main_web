import Link from 'next/link';
import styles from './signup.module.css';

export default function SignupPage() {
  return (
    <div className={styles.wrapper}>
      {/* 상단 로고 영역 */}
      <div className={styles.logoCircle}>
        <p>for your<br/><span>Study</span></p>
      </div>

      <div className={styles.formSection}>
        <div className={styles.header}>
          <h2>| Sign Up |</h2>
        </div>

        {/* 비밀번호 생성 폼 */}
        <form className={styles.form}>
          <input type="text" placeholder="새로운 ID" className={styles.inputField} />
          <input type="password" placeholder="비밀번호" className={styles.inputField} />
          <input type="password" placeholder="비밀번호 확인" className={styles.inputField} />
          
          <button type="button" className={styles.submitBtn}>계정 만들기</button>
        </form>

        {/* 로그인 페이지로 돌아가기 */}
<div className={styles.backToLogin}>
          <p>
            {/* href="/login" 을 통해 다시 로그인 페이지로 이동합니다 */}
            이미 계정이 있으신가요? <Link href="/login" className={styles.loginLink}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}