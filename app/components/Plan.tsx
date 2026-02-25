'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Plan.module.css'

const features = [
  {
    title: '初回ヒアリング',
    desc: 'LINE通話（20〜30分）で目標・生活状況・学習環境を確認します',
  },
  {
    title: '月次学習計画作成',
    desc: '「毎日、今日やること」が分かる形でプランを設計・共有します',
  },
  {
    title: '毎日の学習報告',
    desc: '1分でできるフォーム報告。習慣化の継続を管理します',
  },
  {
    title: '週1回の進捗チェック',
    desc: '達成度コメントと翌週の改善ポイントを提示します',
  },
  {
    title: '質問受付（週3まで）',
    desc: '学習方法・計画・モチベ維持に関する質問のみ対応します',
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
              <span className={styles.priceAmount}>2,980</span>
              <span className={styles.priceUnit}>円/月（税込）</span>
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
              <p><strong>※ 問題の解説・添削・毎日フィードバック・電話/ビデオ通話は対象外です</strong></p>
              <p>ライトプランは「習慣化と計画管理」に特化したプランです。<br />勉強が続く仕組みをつくることにフォーカスします。</p>
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
