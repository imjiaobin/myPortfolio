import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../../components/Contact/Contact'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default Home