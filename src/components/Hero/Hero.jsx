import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import { motion } from 'framer-motion'
import styles from './Hero.module.scss'

// 動畫變體
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.inner}>

        {/* 左側文字區 */}
        <motion.div
          className={styles.content}
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.span className={styles.tag} variants={fadeUp}>
            Frontend Engineer
          </motion.span>

          <motion.h1 className={styles.name} variants={fadeUp}>
            王柏翔
            <span className={styles.nameEn}> Bai-Xiang</span>
          </motion.h1>

          <motion.p className={styles.subtitle} variants={fadeUp}>
            React 前端工程師
          </motion.p>

          <motion.p className={styles.desc} variants={fadeUp}>
            從七年的星巴克管理經驗，到專案工程師，再到前端開發——
            我相信對人的敏銳感知，能讓介面設計走得更遠。
          </motion.p>

          <motion.div className={styles.btns} variants={fadeUp}>
            <a href="#projects" className={styles.btnPrimary}>
              查看作品集
            </a>
            <a href="#contact" className={styles.btnOutline}>
              聯絡我
            </a>
          </motion.div>

          <motion.div className={styles.socials} variants={fadeUp}>
            <a href="https://github.com/" target="_blank" rel="noreferrer"
              className={styles.socialLink} aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer"
              className={styles.socialLink} aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
            <a href="mailto:your@email.com"
              className={styles.socialLink} aria-label="Email">
              <FiMail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* 右側裝飾區 */}
        <motion.div
          className={styles.deco}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <motion.div
            className={styles.decoCircle1}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className={styles.decoCircle2}
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <div className={styles.decoCircle3} />
          <div className={styles.avatarBox}>
            <span className={styles.avatarText}>柏翔</span>
          </div>
        </motion.div>

      </div>

      {/* 往下捲動提示 */}
      <motion.a
        href="#about"
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <FiArrowDown size={18} />
        <span>Scroll</span>
      </motion.a>
    </section>
  )
}

export default Hero