import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiLayout, FiCode, FiTool, FiDatabase
} from 'react-icons/fi'
import styles from './Skills.module.scss'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const skillGroups = [
  {
    icon: <FiLayout size={20} />,
    title: 'UI / Markup',
    color: 'brown',
    skills: [
      { name: 'HTML5',       level: 90 },
      { name: 'CSS3 / SCSS', level: 80 },
      { name: 'Bootstrap',   level: 75 },
      { name: 'RWD',         level: 80 },
    ],
  },
  {
    icon: <FiCode size={20} />,
    title: 'JavaScript',
    color: 'blue',
    skills: [
      { name: 'JavaScript ES6+', level: 70 },
      { name: 'React',           level: 70 },
      { name: 'React Router',    level: 65 },
      { name: 'Redux',           level: 55 },
    ],
  },
  {
    icon: <FiTool size={20} />,
    title: 'Tools',
    color: 'green',
    skills: [
      { name: 'Git / GitHub', level: 75 },
      { name: 'Vite',         level: 70 },
      { name: 'Figma',        level: 60 },
      { name: 'VS Code',      level: 85 },
    ],
  },
  {
    icon: <FiDatabase size={20} />,
    title: 'Backend / Others',
    color: 'muted',
    skills: [
      { name: '.NET / C#',  level: 50 },
      { name: 'MSSQL',      level: 55 },
      { name: 'jQuery',     level: 60 },
      { name: 'RESTful API', level: 65 },
    ],
  },
]

function SkillBar({ name, level, color, inView }) {
  return (
    <div className={styles.skillItem}>
      <div className={styles.skillHeader}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.barTrack}>
        <motion.div
          className={`${styles.barFill} ${styles[color]}`}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </div>
  )
}

function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className={styles.skills} id="skills" ref={ref}>
      <motion.div
        className={styles.inner}
        variants={stagger}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
      >
        {/* 標題 */}
        <motion.div className={styles.header} variants={fadeUp}>
          <span className={styles.tag}>Skills</span>
          <h2 className={styles.title}>技術能力</h2>
          <p className={styles.subtitle}>
            以 React 前端為核心，持續往 TypeScript 與 Next.js 延伸。
          </p>
        </motion.div>

        {/* 技能卡片 */}
        <div className={styles.grid}>
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              className={styles.card}
              variants={fadeUp}
            >
              <div className={styles.cardHeader}>
                <span className={`${styles.iconBox} ${styles[group.color]}`}>
                  {group.icon}
                </span>
                <h3 className={styles.cardTitle}>{group.title}</h3>
              </div>
              <div className={styles.skillList}>
                {group.skills.map((skill, j) => (
                  <SkillBar
                    key={j}
                    name={skill.name}
                    level={skill.level}
                    color={group.color}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 底部學習中標籤 */}
        <motion.div className={styles.learning} variants={fadeUp}>
          <span className={styles.learningLabel}>學習中</span>
          {['TypeScript', 'Next.js', 'Framer Motion', 'React Query'].map(item => (
            <span key={item} className={styles.learningTag}>{item}</span>
          ))}
        </motion.div>

      </motion.div>
    </section>
  )
}

export default Skills