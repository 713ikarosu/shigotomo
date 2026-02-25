'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import styles from './ApplySection.module.css'
import ApplicationForm from './ApplicationForm'

export default function ApplySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
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
            <button
              className={styles.btnPrimary}
              onClick={() => setIsFormOpen(true)}
            >
              <span>事前アンケートに回答する</span>
            </button>
            <p className={styles.applyNote}>※月15〜20名の人数制限あり。定員に達した場合はお待ちいただきます。</p>
          </motion.div>
        </div>
      </section>

      <ApplicationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}
