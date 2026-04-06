import Link from 'next/link';
import styles from './login.module.css';

export default function LoginPage() {
  return (
    <div className={styles.wrapper}>
      {/* 상단 로고 영역 */}
      <div className={styles.logoCircle}>
        <p>for your<br/><span>Study</span></p>
      </div>

      {/* 로그인 폼 영역 */}
      <div className={styles.loginSection}>
        <div className={styles.loginHeader}>
          <h2>Login</h2>
          <button className={styles.googleBtn}>G</button>
        </div>

        <form className={styles.loginForm}>
          <input type="text" placeholder="ID" className={styles.inputField} />
          <input type="password" placeholder="Password" className={styles.inputField} />
          <div className={styles.forgotPassword}>
            <Link href="#">비밀번호를 잊으셨나요?</Link>
          </div>
        </form>
      </div>

      {/* 구분선 */}
      <hr className={styles.divider} />

      {/* 회원가입 영역 */}
      <div className={styles.signupSection}>
        <p>
          {/* 변경된 부분: href="/signup" 으로 연결 */}
          아직 계정이 없으신가요? <Link href="/signup" className={styles.signupLink}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
