import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <span className={styles.logoText}>シゴトモ</span>
            <p className={styles.footerTagline}>明日の仕事に、伴がいる</p>
          </div>
          <div className={styles.footerLinks}>
            <a href="#service">サービス</a>
            <a href="#plan">プラン</a>
            <a href="#flow">ご利用の流れ</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 シゴトモ All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
