'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Plan.module.css'

const features = [
  {
    title: '初回ヒアリング',
    desc: 'Googleフォームで目標・現状を詳しくお聞きします',
  },
  {
    title: '月次学習計画作成',
    desc: 'あなた専用の実現可能な学習プランを設計',
  },
  {
    title: '毎日の学習報告',
    desc: 'フォームで簡単報告。習慣化をサポート',
  },
  {
    title: '週1回の進捗チェック',
    desc: '簡易フィードバックと計画調整',
  },
]

export default function Plan() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="plan" className={styles.plan} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleEn}>Plan</span>
            <span className={styles.titleJa}>料金プラン</span>
          </h2>
        </motion.div>

        <motion.div
          className={styles.planCard}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.planBadge}>現在ローンチ中</div>
          <div className={styles.planHeader}>
            <h3>ライトプラン</h3>
            <div className={styles.planPrice}>
              <span className={styles.priceAmount}>3,000</span>
              <span className={styles.priceUnit}>円/月</span>
            </div>
          </div>

          <div className={styles.planLimit}>
            <p>⚠️ 人数制限あり(15〜20名まで)</p>
          </div>

          <div className={styles.planContent}>
            <h4>提供内容</h4>
            <ul className={styles.planFeatures}>
              {features.map((feature, index) => (
                <li key={index}>
                  <span className={styles.featureTitle}>{feature.title}</span>
                  <span className={styles.featureDesc}>{feature.desc}</span>
                </li>
              ))}
            </ul>

            <div className={styles.planNote}>
              <p><strong>※ 学習内容の解説や添削は行いません</strong></p>
              <p>このプランの目的は「学習習慣の定着」と「継続できる力を育てる」ことです。</p>
            </div>

            <div className={styles.planFuture}>
              <h5>今後予定のプラン</h5>
              <p className={styles.futureNote}>
                ライトプランで一定期間継続できた方を対象に、<br />
                毎日フィードバック・週1面談を含む<strong>プレミアムプラン</strong>を招待制で提供予定です。
              </p>
            </div>
          </div>

          <div className={styles.planCta}>
            <a href="#apply" className={styles.btnPrimary}>
              <span>ライトプランに申し込む</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
