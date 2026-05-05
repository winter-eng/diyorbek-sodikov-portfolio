import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: t('nav.lab'), href: '#projects' },
    { label: t('nav.stack'), href: '#stack' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.contact'), href: '#footer' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(10,15,30,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm"
              style={{ background: 'linear-gradient(135deg, #00f2ff, #8b5cf6)', color: '#000' }}
            >
              Web
            </div>
            <span className="font-bold text-white hidden sm:block">
              Diyorbek<span className="text-[#00f2ff]">.</span>
            </span>
          </motion.button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-all duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side: lang switcher + CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />

            <motion.button
              onClick={() => handleNav('#footer')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-black cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #00f2ff, #8b5cf6)' }}
            >
              {t('nav.hireMe')}
            </motion.button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-xl bg-[rgba(255,255,255,0.05)] text-slate-400 hover:text-white transition-colors"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[65px] left-4 right-4 z-40 rounded-2xl p-4 space-y-1"
            style={{
              background: 'rgba(15,23,42,0.95)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-all duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-[rgba(255,255,255,0.06)]">
              <button
                onClick={() => handleNav('#footer')}
                className="w-full py-3 rounded-xl text-sm font-semibold text-black cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #00f2ff, #8b5cf6)' }}
              >
                {t('nav.hireMe')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
