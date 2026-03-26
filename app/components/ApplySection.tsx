'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './ApplySection.module.css'

// TODO: GoogleフォームのURLをここに設定する
const GOOGLE_FORM_URL = 'https://forms.gle/XXXXXXXXXX'

export default function ApplySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="apply" className={styles.apply} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.applyContent}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>
            仕組みで、続ける。<br className="sp-only" />一緒に始めませんか?
          </h2>
          <p>
            根性でもモチベーションでもなく、設計で学習を続けたい方へ。<br />
            まずは事前アンケートから、あなたの状況を聞かせてください。
          </p>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            <span>事前アンケートに回答する</span>
          </a>
          <p className={styles.applyNote}>※月15〜20名の人数制限あり。定員に達した場合はお待ちいただきます。</p>
        </motion.div>
      </div>
    </section>
  )
}
