import { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, MessageCircle, Zap } from 'lucide-react'
import photoOfMe from '../assets/photoofme1.jpg'

const MagneticButton = ({ children, className, onClick, href }) => {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 20 })
  const springY = useSpring(y, { stiffness: 200, damping: 20 })

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.35)
    y.set((e.clientY - cy) * 0.35)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const Tag = href ? 'a' : 'button'

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
    >
      <Tag href={href} onClick={onClick} className={className}>
        {children}
      </Tag>
    </motion.div>
  )
}

const TypewriterText = ({ phrases }) => {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = phrases[currentPhrase]
    let timeout

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setCurrentPhrase((p) => (p + 1) % phrases.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, currentPhrase, phrases])

  return (
    <span className="text-neon-cyan font-mono">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  )
}

const FloatingOrb = ({ size, color, top, left, delay }) => (
  <motion.div
    className="absolute rounded-full blur-3xl pointer-events-none"
    style={{
      width: size,
      height: size,
      background: color,
      top,
      left,
      opacity: 0.15,
    }}
    animate={{
      y: [0, -30, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 7,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
)

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg">
      {/* Floating orbs */}
      <FloatingOrb size={600} color="#8b5cf6" top="10%" left="-10%" delay={0} />
      <FloatingOrb size={400} color="#00f2ff" top="60%" left="70%" delay={2} />
      <FloatingOrb size={300} color="#8b5cf6" top="80%" left="10%" delay={4} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,242,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,242,255,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left — Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass mb-8 border border-[rgba(0,242,255,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#00f2ff] animate-pulse-slow shadow-[0_0_8px_#00f2ff]" />
              <span className="text-sm font-mono text-[#00f2ff] tracking-wider">AVAILABLE FOR PROJECTS</span>
              <Zap size={14} className="text-[#00f2ff]" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight mb-6"
            >
              Engineering{' '}
              <span className="gradient-text">Digital</span>
              <br />
              Ecosystems &{' '}
              <br className="hidden sm:block" />
              <span className="gradient-text">Winning</span> Startups.
            </motion.h1>

            {/* Typewriter sub */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg sm:text-xl text-slate-400 mb-4 font-medium"
            >
              <TypewriterText phrases={[
                'React & Vite Specialist',
                'IT Park Resident',
                'Startup Founder',
                'Hackathon-Ideathon Champion',
                'AI Explorer',
              ]} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mb-10"
            >
              <span className="text-white font-semibold">Sodikov Diyorbek.</span> 16-year-old Frontend Dev, IT Park Resident, and Startup Founder.
              Specialized in React, Vite, and scaling ideas into investments.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start"
            >
              <MagneticButton
                onClick={scrollToProjects}
                className="group relative flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 cursor-pointer overflow-hidden"
                style={{}}
              >
                <span
                  className="absolute inset-0 rounded-2xl"
                  style={{ background: 'linear-gradient(135deg, #00f2ff, #8b5cf6)' }}
                />
                <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(135deg, #8b5cf6, #00f2ff)' }}
                />
                <span className="relative z-10 text-black font-bold">Explore My Lab</span>
                <ArrowRight className="relative z-10 text-black group-hover:translate-x-1 transition-transform duration-200" size={18} />
              </MagneticButton>

              <MagneticButton
                onClick={scrollToContact}
                className="flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base bg-glass border border-[rgba(255,255,255,0.1)] hover:border-[rgba(0,242,255,0.4)] transition-all duration-300 cursor-pointer"
              >
                <MessageCircle size={18} className="text-[#00f2ff]" />
                <span>Contact</span>
              </MagneticButton>
            </motion.div>

            {/* Mini stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="flex gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { val: '700+', label: 'Days coded' },
                { val: '3', label: 'National wins' },
                { val: '200M', label: 'UZS raised' },
              ].map(({ val, label }) => (
                <div key={label} className="text-center lg:text-left">
                  <div className="text-2xl font-black gradient-text">{val}</div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, type: 'spring', stiffness: 80 }}
            className="relative flex-shrink-0"
          >
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-20px] rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #00f2ff, #8b5cf6, transparent, #00f2ff)',
                mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))',
                WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))',
              }}
            />

            {/* Secondary ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-40px] rounded-full"
              style={{
                background: 'conic-gradient(from 180deg, rgba(139,92,246,0.4), transparent, rgba(0,242,255,0.4), transparent)',
                mask: 'radial-gradient(farthest-side, transparent calc(100% - 1px), #fff calc(100% - 1px))',
                WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 1px), #fff calc(100% - 1px))',
              }}
            />

            {/* Photo frame */}
            <div
              className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden"
              style={{
                boxShadow: '0 0 40px rgba(0,242,255,0.3), 0 0 80px rgba(139,92,246,0.2), inset 0 0 40px rgba(0,0,0,0.5)',
                border: '2px solid rgba(0,242,255,0.3)',
              }}
            >
              <div className="w-full h-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.9), rgba(30,41,59,0.8))' }}
              >
                {/* Placeholder — replace src with actual photo */}
                <img
                  src={photoOfMe}
                  alt="Diyorbek Sodikov"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div
                  className="hidden w-full h-full flex-col items-center justify-center gap-3"
                  style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)' }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-4xl font-black"
                    style={{ background: 'linear-gradient(135deg, #00f2ff, #8b5cf6)' }}
                  >
                    <span style={{ color: '#000' }}>DS</span>
                  </div>
                  <span className="text-slate-400 text-sm font-mono">Add photo.jpg</span>
                </div>
              </div>
            </div>

            {/* Floating badges around photo */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0 }}
              className="absolute -top-4 -right-4 px-3 py-1.5 rounded-xl bg-glass-strong border border-[rgba(0,242,255,0.3)] shadow-[0_0_20px_rgba(0,242,255,0.2)]"
            >
              <span className="text-xs font-mono text-[#00f2ff] font-semibold">IT Park ✓</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-2 -left-6 px-3 py-1.5 rounded-xl bg-glass-strong border border-[rgba(139,92,246,0.3)] shadow-[0_0_20px_rgba(139,92,246,0.2)]"
            >
              <span className="text-xs font-mono text-[#8b5cf6] font-semibold">🏆 3× Winner</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0a0f1e)' }}
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-600 font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-slate-700 flex items-center justify-center"
        >
          <div className="w-1 h-2 rounded-full bg-[#00f2ff] opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  )
}
