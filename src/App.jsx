import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import ProjectsGrid from './components/ProjectsGrid'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import Footer from './components/Footer'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  return (
    <motion.div
      style={{ scaleX, transformOrigin: 'left' }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[60]"
      css=""
    >
      <div className="w-full h-full" style={{ background: 'linear-gradient(90deg, #00f2ff, #8b5cf6)' }} />
    </motion.div>
  )
}

function CursorGlow() {
  useEffect(() => {
    const cursor = document.getElementById('cursor-glow')
    if (!cursor) return

    const move = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      id="cursor-glow"
      className="fixed pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0,242,255,0.04) 0%, transparent 70%)',
        transition: 'left 0.15s ease, top 0.15s ease',
      }}
    />
  )
}

export default function App() {
  return (
    <div className="mesh-bg min-h-screen">
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60]">
        <ScrollProgressBar />
      </div>

      <CursorGlow />
      <Navbar />

      <main>
        <Hero />

        {/* Divider */}
        <div className="w-full h-px max-w-7xl mx-auto" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,242,255,0.2), rgba(139,92,246,0.2), transparent)' }} />

        <StatsBar />

        {/* Divider */}
        <div className="w-full h-px max-w-7xl mx-auto" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,242,255,0.1), transparent)' }} />

        <ProjectsGrid />

        {/* Divider */}
        <div className="w-full h-px max-w-7xl mx-auto" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.2), transparent)' }} />

        <TechStack />

        {/* Divider */}
        <div className="w-full h-px max-w-7xl mx-auto" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,242,255,0.15), transparent)' }} />

        <Experience />
      </main>

      <Footer />
    </div>
  )
}

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  return (
    <motion.div
      style={{ scaleX, transformOrigin: 'left' }}
      className="w-full h-full"
    >
      <div className="w-full h-full" style={{ background: 'linear-gradient(90deg, #00f2ff, #8b5cf6)' }} />
    </motion.div>
  )
}
