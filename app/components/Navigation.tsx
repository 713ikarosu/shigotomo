'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      className={styles.nav}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.navContainer}>
        <div className={styles.navLogo}>
          <span className={styles.logoText}>シゴトモ</span>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          <a href="#service">サービス</a>
          <a href="#plan">プラン</a>
          <a href="#flow">ご利用の流れ</a>
          <a href="#faq">FAQ</a>
          <a href="#apply" className={styles.navCta}>お申し込み</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.open : ''}`}
          onClick={toggleMobileMenu}
          aria-label="メニュー"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#service" onClick={closeMobileMenu}>サービス</a>
            <a href="#plan" onClick={closeMobileMenu}>プラン</a>
            <a href="#flow" onClick={closeMobileMenu}>ご利用の流れ</a>
            <a href="#faq" onClick={closeMobileMenu}>FAQ</a>
            <a href="#apply" className={styles.mobileNavCta} onClick={closeMobileMenu}>
              お申し込み
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
