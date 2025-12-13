'use client'

import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const charVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  const catchphrase = ['明', '日', 'の', '仕', '事', 'に', '、']
  const mainText = [
    { char: '伴', isMain: true },
    { char: 'が', isMain: false },
    { char: 'い', isMain: false },
    { char: 'る', isMain: false },
  ]

  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroVerticalText}>
          <motion.h1
            className={styles.verticalCatchphrase}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {catchphrase.map((char, index) => (
              <motion.span
                key={index}
                className={styles.char}
                variants={charVariants}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h1
            className={styles.verticalMain}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {mainText.map((item, index) => (
              <motion.span
                key={index}
                className={item.isMain ? styles.charTomo : styles.charSmall}
                variants={charVariants}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 + index * 0.1 }}
              >
                {item.char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <div className={styles.heroContent}>
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            働きながらの学び直しを、<br />
            あなたの隣で支える伴走型教育支援サービス
          </motion.p>

          <motion.div
            className={styles.heroDescription}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <p>
              資格取得、リスキリング、スキルアップ。<br />
              仕事をしながら学び続けることは、簡単ではありません。<br />
              シゴトモは、勉強内容を教えるのではなく、<br className="sp-only" />
              あなたの学習計画・習慣・進捗を伴走します。
            </p>
          </motion.div>

          <motion.div
            className={styles.heroCta}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.1 }}
          >
            <a href="#apply" className={`${styles.btn} ${styles.btnPrimary}`}>
              <span>お申し込み</span>
              <span className={styles.btnNote}>※人数制限あり</span>
            </a>
            <a href="#service" className={`${styles.btn} ${styles.btnSecondary}`}>
              サービス詳細
            </a>
          </motion.div>
        </div>
      </div>
      <div className={styles.heroDecoration}></div>
    </section>
  )
}
