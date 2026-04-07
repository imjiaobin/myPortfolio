import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiGithub, FiExternalLink } from 'react-icons/fi'
import styles from './ProjectDetail.module.scss'

const projectData = {
  mofudays: {
    title: '毛日和 Mofudays',
    subtitle: '寵物訂閱盒電商平台',
    color: 'brown',
    duration: '2024・團隊專案',
    role: '前端工程師・負責前台購物流程 + 後台管理系統',
    github: 'https://github.com/',
    demo: 'https://vercel.app/',
    overview: '毛日和是六角學院的團隊畢業專案，一個以寵物主人為目標族群的訂閱盒電商平台。使用者可以瀏覽商品、加入購物車、完成結帳，後台管理員可以管理訂單與商品。',
    highlights: [
      '使用 React + React Router 建構完整 SPA 前台購物流程',
      '後台管理系統包含商品管理、訂單管理、會員管理',
      '串接 json-server-auth 模擬 RESTful API 與 JWT 驗證',
      '使用 Redux Toolkit 管理購物車全域狀態',
      'RWD 響應式設計，支援手機與桌機',
      '部署前台至 Vercel，後台至 Render',
    ],
    challenges: '最大的挑戰是後台管理系統的空白畫面 bug，最終追查到是 Chrome 環境中 window.innerHeight 異常導致的版面計算錯誤，透過改用 100svh 解決。',
    techStack: ['React', 'React Router', 'Redux Toolkit', 'SCSS', 'json-server-auth', 'Vite', 'Vercel', 'Render'],
  },
  portfolio: {
    title: '個人作品集',
    subtitle: 'Personal Portfolio Website',
    color: 'blue',
    duration: '2025・個人專案',
    role: '獨立開發・設計 + 前端實作',
    github: 'https://github.com/',
    demo: '/',
    overview: '你現在看到的這個網站。從配色系統規劃到元件實作全程獨立完成，希望透過這個作品集展現前端技術能力與設計品味。',
    highlights: [
      '莫蘭迪大地色系配色，木棕 × 橄欖綠 × 靛青藍',
      '完整深淺色模式切換，使用 CSS Custom Properties',
      'Framer Motion 實現頁面載入動畫與滾動觸發動畫',
      'SCSS Modules 模組化樣式管理',
      'React Router 多頁路由架構',
      'Vite 建構工具，部署至 Vercel',
    ],
    challenges: '配色系統的建立花了最多時間，在莫蘭迪色系中加入三個強調色（棕、綠、藍）並確保深淺模式都和諧，需要反覆調整每個色階的明度與飽和度。',
    techStack: ['React', 'React Router', 'Framer Motion', 'SCSS Modules', 'Vite', 'React Icons'],
  },
  'stock-analysis': {
    title: '台股技術分析筆記',
    subtitle: 'Stock Analysis Notes',
    color: 'green',
    duration: '2025・個人專案',
    role: '獨立開發',
    github: 'https://github.com/',
    demo: null,
    overview: '個人學習專案，將自己對台股分析的研究心得視覺化，整合技術指標、法人籌碼流向、月營收趨勢等多維度分析框架。',
    highlights: [
      '使用 Chart.js 視覺化技術指標圖表',
      '整理 P/E、PEG、法人籌碼等估值框架',
      '月營收趨勢分析模板',
    ],
    challenges: '如何把複雜的金融數據用清晰易讀的方式呈現，是這個專案最核心的 UI 挑戰。',
    techStack: ['React', 'Chart.js', 'JavaScript', 'SCSS'],
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

function ProjectDetail() {
  const { id } = useParams()
  const project = projectData[id]

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h2>找不到這個作品</h2>
        <Link to="/" className={styles.backLink}>
          <FiArrowLeft size={16} /> 回首頁
        </Link>
      </div>
    )
  }

  return (
    <motion.div
      className={styles.page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* 頂部色塊 */}
      <div className={`${styles.hero} ${styles[project.color]}`}>
        <div className={styles.heroInner}>
          <Link to="/#projects" className={styles.backLink}>
            <FiArrowLeft size={16} /> 返回作品集
          </Link>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.p className={styles.duration} variants={fadeUp}>
              {project.duration}
            </motion.p>
            <motion.h1 className={styles.title} variants={fadeUp}>
              {project.title}
            </motion.h1>
            <motion.p className={styles.subtitle} variants={fadeUp}>
              {project.subtitle}
            </motion.p>
            <motion.p className={styles.role} variants={fadeUp}>
              {project.role}
            </motion.p>
            <motion.div className={styles.heroLinks} variants={fadeUp}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer"
                  className={styles.heroBtn}>
                  <FiGithub size={16} /> GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer"
                  className={styles.heroBtn}>
                  <FiExternalLink size={16} /> Live Demo
                </a>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 內容區 */}
      <div className={styles.content}>
        <div className={styles.contentInner}>

          {/* 專案概述 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>專案概述</h2>
            <p className={styles.sectionText}>{project.overview}</p>
          </section>

          {/* 技術亮點 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>技術亮點</h2>
            <ul className={styles.highlights}>
              {project.highlights.map((item, i) => (
                <motion.li
                  key={i}
                  className={styles.highlightItem}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <span className={`${styles.highlightDot} ${styles[project.color]}`} />
                  {item}
                </motion.li>
              ))}
            </ul>
          </section>

          {/* 遇到的挑戰 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>遇到的挑戰</h2>
            <p className={styles.sectionText}>{project.challenges}</p>
          </section>

          {/* 技術堆疊 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>技術堆疊</h2>
            <div className={styles.techStack}>
              {project.techStack.map(tech => (
                <span key={tech} className={`${styles.techTag} ${styles[project.color]}`}>
                  {tech}
                </span>
              ))}
            </div>
          </section>

        </div>
      </div>
    </motion.div>
  )
}

export default ProjectDetail