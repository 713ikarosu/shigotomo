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
              学びを続ける力を、<br className="sp-only" />一緒に育てませんか?
            </h2>
            <p>シゴトモは、あなたの明日の仕事に寄り添う伴走者です。</p>
            <button
              className={styles.btnPrimary}
              onClick={() => setIsFormOpen(true)}
            >
              <span>お申し込みフォームを開く</span>
            </button>
            <p className={styles.applyNote}>※人数制限があります。お早めにお申し込みください。</p>
          </motion.div>
        </div>
      </section>

      <ApplicationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}
