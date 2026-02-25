'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import styles from './FlowAndFAQ.module.css'

const steps = [
  { number: '01', title: '事前アンケート回答', description: 'Googleフォームから目標・学習環境・生活状況などを入力いただきます。送信後、自動返信メールで今後の流れをご案内します。' },
  { number: '02', title: '公式LINEで日程調整', description: 'ご案内に沿って公式LINEを追加いただき、初回面談の日時を調整します。' },
  { number: '03', title: '初回面談（LINE通話）', description: 'LINE通話（20〜30分）で現状・目標・生活リズムを確認します。ここで相互に合う方のみ、利用開始となります。' },
  { number: '04', title: '学習計画の作成・共有', description: 'ヒアリング内容をもとに、「毎日やること」が明確なオリジナル学習計画を作成・共有します。' },
  { number: '05', title: '伴走スタート', description: '毎日の学習報告フォームへの入力と、週1回の進捗チェックで継続をサポートします。' },
]

const faqs = [
  {
    question: 'どんな人が対象ですか?',
    answer: '仕事をしながら資格取得・リスキリング・学び直しに取り組みたい社会人が対象です。「やる気はあるのに続かない」「何度も計画倒れになっている」という方に特に向いています。モチベーションを上げてほしい・励ましてほしいという方よりも、仕組みで継続したい方に合ったサービスです。',
  },
  {
    question: 'これまで何度も挫折してきましたが大丈夫ですか?',
    answer: 'むしろ、そのような方のためのサービスです。一人で続けられなかったのは意志の問題ではなく、仕組みがなかったからです。シゴトモは「毎日やること」を設計し、進捗を外部から管理することで、続けられる環境をつくります。',
  },
  {
    question: '忙しくても使えますか?',
    answer: 'はい。忙しい社会人を前提に設計しています。学習報告は1分でできるフォーム入力です。学習計画も、あなたの実際の生活リズムをもとに「現実的に確保できる時間」で設計するため、無理な計画にはなりません。',
  },
  {
    question: '勉強内容を教えてもらえますか?',
    answer: 'いいえ。ライトプランでは問題の解説・添削・専門的な指導は行いません。シゴトモの役割は「学習習慣・計画・進捗の管理」です。勉強内容は教材や講座で自分で学ぶ前提で、その学びが続く仕組みをつくるのが私たちの仕事です。',
  },
  {
    question: 'どんな資格・学習内容でも対応できますか?',
    answer: '資格試験・リスキリング・語学・スキルアップなど、学習内容は問いません。シゴトモは内容を問わず、あなたの目標に合わせた計画設計と進捗管理を行います。',
  },
  {
    question: '人数制限とはどういうことですか?',
    answer: 'ライトプランは月15〜20名までの少人数制です。丁寧な伴走の品質を保つために、受け入れ人数を限定しています。定員に達した場合は、空きが出るまでお待ちいただきます。',
  },
  {
    question: '解約はできますか?',
    answer: 'はい、月単位での解約が可能です。日割り・返金はありません。解約は次回更新日前日までにご自身で手続きください。詳細はお申し込み後の案内でご確認いただけます。',
  },
  {
    question: 'プレミアムプランとは何ですか?',
    answer: 'ライトプランで一定期間継続できた方のみを、こちらから招待する上位プランです。毎日のフィードバック・週1回の面談・キャリアや生活習慣まで含めた完全オーダーメイド支援を提供予定です。申し込みは受け付けておらず、招待制となります。',
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
