import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.scss'

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { label: 'About',    href: '/#about' },
    { label: 'Skills',   href: '/#skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact',  href: '/#contact' },
  ]

  // 滾動偵測 → 控制陰影深淺
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>

          {/* Logo */}
          <Link to="/" className={styles.logo}>柏翔</Link>

          {/* 桌機版連結 */}
          <div className={styles.links}>
            {links.map(link => (
              <a key={link.label} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
            <button className={styles.themeBtn} onClick={toggleTheme}>
              {theme === 'light' ? <FiMoon size={15} /> : <FiSun size={15} />}
            </button>
          </div>

          {/* 手機版漢堡 */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* 手機版選單 */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className={styles.mobileThemeBtn} onClick={toggleTheme}>
              {theme === 'light'
                ? <><FiMoon size={13} /> 深色模式</>
                : <><FiSun size={13} /> 淺色模式</>
              }
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar