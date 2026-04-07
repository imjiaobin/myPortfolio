import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import styles from './About.module.scss'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const timeline = [
  {
    year: '2016 – 2023',
    role: '星巴克門市督導',
    desc: '七年管理經驗，培養出對人的高度敏銳度、跨團隊溝通與現場問題解決能力。',
    color: 'brown',
  },
  {
    year: '2023 – 2024',
    role: '專案工程師',
    desc: '使用 .NET、jQuery、MSSQL 開發內部系統，首次接觸軟體開發流程與需求溝通。',
    color: 'green',
  },
  {
    year: '2024',
    role: '六角學院 Bootcamp',
    desc: '九個月密集學習 HTML、CSS、JavaScript、React，完成團隊專案「毛日和」。',
    color: 'blue',
  },
  {
    year: '2025 →',
    role: 'Frontend Engineer',
    desc: '持續學習 TypeScript、Next.js，尋求能讓技術與人文視角結合的前端職位。',
    color: 'accent',
  },
]

function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className={styles.about} id="about" ref={ref}>
      <motion.div
        className={styles.inner}
        variants={stagger}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
      >

        {/* 標題 */}
        <motion.div className={styles.header} variants={fadeUp}>
          <span className={styles.tag}>About Me</span>
          <h2 className={styles.title}>關於我</h2>
          <p className={styles.subtitle}>
            不只是工程師，也是一個相信「好的產品來自對人的理解」的開發者。
          </p>
        </motion.div>

        {/* 內容 */}
        <div className={styles.body}>

          {/* 左側文字 */}
          <motion.div className={styles.text} variants={fadeUp}>
            <p>
              我的職涯路徑不算線性，但每一段都在堆疊同一件事：
              <strong> 理解人，然後解決問題。</strong>
            </p>
            <p>
              在星巴克的七年，我學會了如何在高壓環境中讀懂客人與夥伴的需求；
              在工程師崗位，我開始把這種敏銳度轉化成對介面細節的要求——
              每一個 hover 狀態、每一段動畫，都是在和使用者對話。
            </p>
            <p>
              現在的我正在找一個能讓這兩個面向都發揮的舞台。
            </p>
            <a href="#contact" className={styles.ctaLink}>
              一起聊聊 <FiArrowRight size={14} />
            </a>
          </motion.div>

          {/* 右側 Timeline */}
          <motion.div className={styles.timeline} variants={fadeUp}>
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className={styles.timelineItem}
                variants={fadeUp}
              >
                <div className={`${styles.dot} ${styles[item.color]}`} />
                <div className={styles.timelineContent}>
                  <span className={styles.year}>{item.year}</span>
                  <h3 className={styles.role}>{item.role}</h3>
                  <p className={styles.timelineDesc}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}

export default About