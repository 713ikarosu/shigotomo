'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Service.module.css'

const features = [
  {
    icon: '📋',
    title: '学習計画の設計',
    description: 'あなたの目標・現状・生活リズムに合わせた、無理のない月次学習計画を作成します。',
  },
  {
    icon: '📅',
    title: '毎日の習慣化支援',
    description: '日々の学習報告を通じて、学習習慣の定着をサポート。継続する力を育てます。',
  },
  {
    icon: '📊',
    title: '週次進捗チェック',
    description: '週1回の進捗確認で、計画の調整や簡易フィードバックを提供。軌道修正を支援します。',
  },
  {
    icon: '🤝',
    title: '医師×教育の視点',
    description: '医師と元教師が関与。生活習慣・メンタル面も含めた、総合的な学習伴走を実現します。',
  },
]

export default function Service() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="service" className={styles.service} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleEn}>Service</span>
            <span className={styles.titleJa}>サービスについて</span>
          </h2>
        </motion.div>

        <motion.div
          className={styles.servicePhilosophy}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.philosophyCard}>
            <h3>「教える」のではなく、<br />「設計する」</h3>
            <p>
              モチベーション論は扱いません。精神論・根性論も扱いません。
            </p>
            <p>
              シゴトモは、あなたの目標・生活リズム・現状を把握したうえで、
              無理なく続けられる学習計画を設計し、毎日の進捗を管理します。
              「続けられる仕組み」を外側から整えることが、私たちの役割です。
            </p>
            <p>
              このサービスは「根性で頑張りたい人」には向いていません。
              仕組みと設計で着実に進みたい人のための、伴走型支援です。
            </p>
          </div>
        </motion.div>

        <div className={styles.serviceFeatures}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
