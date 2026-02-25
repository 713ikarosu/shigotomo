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
            勉強内容ではなく、<br />
            勉強が続く「設計」を提供するサービスです。
          </motion.p>

          <motion.div
            className={styles.heroDescription}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <p>
              やる気の出し方も、根性論も、扱いません。<br />
              シゴトモがサポートするのは、学習計画・習慣・進捗管理。<br className="sp-only" />
              「今日やること」が毎日決まっている状態をつくります。
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
