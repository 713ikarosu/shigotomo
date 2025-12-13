'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, FormEvent } from 'react'
import styles from './ApplicationForm.module.css'

interface ApplicationFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function ApplicationForm({ isOpen, onClose }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    occupation: '',
    goal: '',
    experience: '',
    studyTime: '',
    motivation: '',
    agree: false,
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend or Google Forms
    console.log('Form submitted:', formData)
    alert('お申し込みありがとうございます。3営業日以内にご連絡いたします。')
    onClose()
    // Reset form
    setFormData({
      name: '',
      email: '',
      age: '',
      occupation: '',
      goal: '',
      experience: '',
      studyTime: '',
      motivation: '',
      agree: false,
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.modal}>
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className={styles.modalContent}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
          >
            <button className={styles.modalClose} onClick={onClose}>
              &times;
            </button>
            <div className={styles.formContainer}>
              <h2>お申し込みフォーム</h2>
              <p className={styles.formIntro}>
                シゴトモ ライトプランへのお申し込みありがとうございます。<br />
                以下の項目にご記入ください。
              </p>

              <form onSubmit={handleSubmit} className={styles.applicationForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">
                    お名前 <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="山田 太郎"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">
                    メールアドレス <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="age">
                    年齢 <span className={styles.required}>*</span>
                  </label>
                  <select id="age" name="age" required value={formData.age} onChange={handleChange}>
                    <option value="">選択してください</option>
                    <option value="20s">20代</option>
                    <option value="30s">30代</option>
                    <option value="40s">40代</option>
                    <option value="50s">50代</option>
                    <option value="60s">60代以上</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="occupation">
                    現在のご職業 <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    required
                    placeholder="例: 会社員、自営業、公務員 など"
                    value={formData.occupation}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="goal">
                    学習目標 <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    id="goal"
                    name="goal"
                    required
                    rows={4}
                    placeholder="例: 簿記2級の取得、プログラミングスキルの習得、英語のリスキリング など"
                    value={formData.goal}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="experience">これまでの学習経験や課題</label>
                  <textarea
                    id="experience"
                    name="experience"
                    rows={4}
                    placeholder="例: 独学で始めたが続かなかった、計画を立てるのが苦手、モチベーションの維持が難しい など"
                    value={formData.experience}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="studyTime">1日に確保できる学習時間(目安)</label>
                  <select id="studyTime" name="studyTime" value={formData.studyTime} onChange={handleChange}>
                    <option value="">選択してください</option>
                    <option value="30min">30分未満</option>
                    <option value="30-60min">30分〜1時間</option>
                    <option value="1-2hours">1〜2時間</option>
                    <option value="2hours+">2時間以上</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="motivation">シゴトモを選んだ理由・期待すること</label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    rows={4}
                    placeholder="自由にご記入ください"
                    value={formData.motivation}
                    onChange={handleChange}
                  />
                </div>

                <div className={`${styles.formGroup} ${styles.checkboxGroup}`}>
                  <label>
                    <input
                      type="checkbox"
                      name="agree"
                      required
                      checked={formData.agree}
                      onChange={handleChange}
                    />
                    <span>個人情報の取り扱いに同意します</span>
                  </label>
                </div>

                <div className={styles.formSubmit}>
                  <button type="submit" className={styles.btnPrimary}>
                    <span>送信する</span>
                  </button>
                </div>

                <p className={styles.formNote}>
                  ※ 送信後、3営業日以内にご登録のメールアドレスへご連絡いたします。<br />
                  ※ 人数制限のため、お申し込み順での受付となります。
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
