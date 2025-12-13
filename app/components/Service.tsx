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
            <h3>「教える」のではなく、<br />「伴走する」</h3>
            <p>
              社会人が仕事をしながら資格取得やリスキリングを継続するのは、非常に難しいことです。
              多くの人が「時間がない」「モチベーションが続かない」「計画通りに進まない」という壁に直面します。
            </p>
            <p>
              シゴトモは、勉強内容そのものを教えるサービスではありません。
              あなたの学習計画を一緒に立て、毎日の習慣を支え、進捗を管理する。
              そんな「伴走者」として、あなたの学びを継続可能にします。
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
