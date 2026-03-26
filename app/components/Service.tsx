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
    description: '医師と元教師が設計に関与。「なぜ忙しい人ほど学習が続かないか」を行動・生活習慣の視点で分析し、根性に頼らない継続の仕組みをつくります。',
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

        <motion.div
          className={styles.serviceAbout}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className={styles.aboutCard}>
            <div className={styles.aboutLabel}>運営者について</div>
            <h3>医師として、自分自身が「続けられない」を経験した</h3>
            <p>
              医師として働きながら、資格取得や学び直しに何度も取り組んできました。
              時間はある。意欲もある。でも、気づけば計画倒れになっている。
            </p>
            <p>
              そこで気づいたのは、「続かない」のは意志の問題ではなく、
              設計の問題だということ。
              学習計画と習慣の仕組みを整えた途端、勉強は無理なく続くようになりました。
            </p>
            <p>
              その経験をもとに、同じ悩みを持つ忙しい社会人のために、
              シゴトモを立ち上げました。
              「先生」ではなく、「設計者・伴走者」として、あなたの学習を支えます。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
