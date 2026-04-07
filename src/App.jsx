import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../src/components/Navbar/Navbar'
import Home from '../src/pages/Home/Home'
import Projects from '../src/pages/Projects/Projects'
import ProjectDetail from '../src/pages/Projects/ProjectDetail'

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute(
      'data-theme', next === 'dark' ? 'dark' : ''
    )
  }

  return (
    <BrowserRouter>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
