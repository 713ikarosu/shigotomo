'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import styles from './FlowAndFAQ.module.css'

const steps = [
  { number: '01', title: 'お申し込み', description: '下記のフォームから必要事項をご記入いただきます。' },
  { number: '02', title: '審査・ご案内', description: '人数制限があるため、お申し込み内容を確認後、ご案内いたします。' },
  { number: '03', title: '初回ヒアリング', description: 'Googleフォームで、目標・現状・生活リズムなどを詳しくお聞きします。' },
  { number: '04', title: '学習計画作成', description: 'あなた専用の月次学習計画を作成し、共有します。' },
  { number: '05', title: '伴走スタート', description: '毎日の学習報告、週1回の進捗チェックで、あなたの学びを伴走します。' },
]

const faqs = [
  {
    question: 'どんな資格・学習内容に対応していますか?',
    answer: '資格試験、リスキリング、語学学習など、幅広く対応可能です。シゴトモは「勉強内容を教える」サービスではなく、「学習習慣・計画・進捗を管理する」伴走サービスです。そのため、どのような学習目標でもサポートできます。',
  },
  {
    question: '勉強内容を教えてもらえますか?',
    answer: 'いいえ、ライトプランでは学習内容の解説や添削は行いません。シゴトモの役割は、あなたが「自分で学び続けられる」ようになるための習慣化・計画管理のサポートです。',
  },
  {
    question: '途中でやめることはできますか?',
    answer: 'はい、月単位での解約が可能です。詳細はお申し込み後の案内でご確認ください。',
  },
  {
    question: 'どのくらいの学習時間が必要ですか?',
    answer: 'あなたの生活リズムや目標に合わせて計画を作成します。無理のない範囲で継続できるプランを一緒に設計しますので、ご安心ください。',
  },
  {
    question: '人数制限とはどういうことですか?',
    answer: 'ライトプランは15〜20名までの少人数制です。丁寧な伴走を実現するため、受け入れ人数を限定しています。定員に達した場合、お申し込みをお待ちいただく可能性があります。',
  },
  {
    question: 'プレミアムプランとは何ですか?',
    answer: 'ライトプランで一定期間継続できた方のみに招待する、より濃密な伴走プランです。毎日のフィードバック、週1回の面談、キャリア・生活習慣まで含めた完全オーダーメイド支援を提供予定です。',
  },
]

export function Flow() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="flow" className={styles.flow} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleEn}>Flow</span>
            <span className={styles.titleJa}>ご利用の流れ</span>
          </h2>
        </motion.div>

        <div className={styles.flowSteps}>
          {steps.map((step, index) => (
            <div key={index}>
              <motion.div
                className={styles.flowStep}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepContent}>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </motion.div>
              {index < steps.length - 1 && (
                <motion.div
                  className={styles.flowArrow}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  →
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className={styles.faq} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleEn}>FAQ</span>
            <span className={styles.titleJa}>よくある質問</span>
          </h2>
        </motion.div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
            >
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
                <h4>Q. {faq.question}</h4>
                <span className={styles.faqToggle}>+</span>
              </div>
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
