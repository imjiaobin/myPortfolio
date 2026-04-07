import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styles from './Projects.module.scss'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const projects = [
  {
    id: 'mofudays',
    title: '毛日和 Mofudays',
    subtitle: '寵物訂閱盒電商平台',
    desc: '六角學院團隊專案，負責前台購物流程與後台管理系統。使用 React 建構 SPA，串接 json-server-auth 模擬後端 API。',
    tags: ['React', 'React Router', 'SCSS', 'json-server'],
    color: 'brown',
    github: 'https://github.com/',
    demo: 'https://vercel.app/',
    featured: true,
  },
  {
    id: 'portfolio',
    title: '個人作品集',
    subtitle: 'Personal Portfolio',
    desc: '你現在看到的這個網站。使用 React + Vite 建構，包含深淺色模式切換、Framer Motion 動畫、SCSS 模組化樣式。',
    tags: ['React', 'Framer Motion', 'SCSS', 'Vite'],
    color: 'blue',
    github: 'https://github.com/',
    demo: '/',
    featured: true,
  },
  {
    id: 'stock-analysis',
    title: '台股技術分析筆記',
    subtitle: 'Stock Analysis Notes',
    desc: '個人學習專案，整理技術指標、法人籌碼、月營收趨勢等分析框架，以前端視覺化呈現。',
    tags: ['React', 'Chart.js', 'JavaScript'],
    color: 'green',
    github: 'https://github.com/',
    demo: null,
    featured: false,
  },
]

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className={`${styles.card} ${project.featured ? styles.featured : ''}`}
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
    >
      {/* 卡片頂部色塊 */}
      <div className={`${styles.cardTop} ${styles[project.color]}`}>
        {project.featured && (
          <span className={styles.featuredBadge}>精選作品</span>
        )}
        <span className={styles.cardIndex}>0{index + 1}</span>
      </div>

      {/* 卡片內容 */}
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <div>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardSubtitle}>{project.subtitle}</p>
          </div>
          <div className={styles.cardLinks}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer"
                className={styles.iconLink} aria-label="GitHub">
                <FiGithub size={18} />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer"
                className={styles.iconLink} aria-label="Demo">
                <FiExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className={styles.cardDesc}>{project.desc}</p>

        <div className={styles.tags}>
          {project.tags.map(tag => (
            <span key={tag} className={`${styles.tag} ${styles[project.color]}`}>
              {tag}
            </span>
          ))}
        </div>

        <Link to={`/projects/${project.id}`} className={styles.detailLink}>
          查看詳情 <FiArrowRight size={13} />
        </Link>
      </div>
    </motion.div>
  )
}

function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className={styles.projects} id="projects" ref={ref}>
      <motion.div
        className={styles.inner}
        variants={stagger}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
      >
        {/* 標題 */}
        <motion.div className={styles.header} variants={fadeUp}>
          <span className={styles.sectionTag}>Projects</span>
          <h2 className={styles.title}>作品集</h2>
          <p className={styles.subtitle}>
            每個作品都是一段學習的紀錄，也是對下一個挑戰的準備。
          </p>
        </motion.div>

        {/* 卡片 */}
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* 更多連結 */}
        <motion.div className={styles.more} variants={fadeUp}>
          <Link to="/projects" className={styles.moreLink}>
            查看所有作品 <FiArrowRight size={14} />
          </Link>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default Projects