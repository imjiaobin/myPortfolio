import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import styles from './Contact.module.scss'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const contacts = [
  {
    icon: <FiMail size={20} />,
    label: 'Email',
    value: 'your@email.com',
    href: 'mailto:your@email.com',
    color: 'brown',
  },
  {
    icon: <FiGithub size={20} />,
    label: 'GitHub',
    value: 'github.com/yourname',
    href: 'https://github.com/',
    color: 'blue',
  },
  {
    icon: <FiLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourname',
    href: 'https://linkedin.com/',
    color: 'green',
  },
  {
    icon: <FiMapPin size={20} />,
    label: '地點',
    value: '台灣・台北',
    href: null,
    color: 'muted',
  },
]

function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className={styles.contact} id="contact" ref={ref}>
      <motion.div
        className={styles.inner}
        variants={stagger}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
      >
        {/* 標題 */}
        <motion.div className={styles.header} variants={fadeUp}>
          <span className={styles.tag}>Contact</span>
          <h2 className={styles.title}>聯絡我</h2>
          <p className={styles.subtitle}>
            對於新機會或合作提案保持開放，歡迎直接與我聯繫！
          </p>
        </motion.div>

        {/* 主體 */}
        <div className={styles.body}>

          {/* 左側文字 */}
          <motion.div className={styles.text} variants={fadeUp}>
            <h3 className={styles.textTitle}>一起做點有意思的事吧</h3>
            <p className={styles.textDesc}>
              我目前積極尋找 React 前端工程師職位（實習或初級），
              無論是全職、兼職或專案合作都歡迎。
            </p>
            <p className={styles.textDesc}>
              如果你覺得我們的理念相近，或者有任何想法想聊，
              隨時歡迎寄信給我，我通常在 24 小時內回覆。
            </p>

            <a href="mailto:your@email.com" className={styles.emailBtn}>
              <FiMail size={16} />
              寄信給我
            </a>
          </motion.div>

          {/* 右側聯絡卡片 */}
          <motion.div className={styles.cards} variants={stagger}>
            {contacts.map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer" className={styles.contactCard}>
                    <span className={`${styles.contactIcon} ${styles[item.color]}`}>
                      {item.icon}
                    </span>
                    <div className={styles.contactInfo}>
                      <span className={styles.contactLabel}>{item.label}</span>
                      <span className={styles.contactValue}>{item.value}</span>
                    </div>
                  </a>
                ) : (
                  <div className={styles.contactCard}>
                    <span className={`${styles.contactIcon} ${styles[item.color]}`}>
                      {item.icon}
                    </span>
                    <div className={styles.contactInfo}>
                      <span className={styles.contactLabel}>{item.label}</span>
                      <span className={styles.contactValue}>{item.value}</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Footer */}
        <motion.div className={styles.footer} variants={fadeUp}>
          <p className={styles.footerText}>
            © 2025 王柏翔・用 React 手刻，帶著對介面的熱情
          </p>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default Contact