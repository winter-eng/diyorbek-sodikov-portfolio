import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Trophy, Banknote, Building2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const useCounter = (target, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return
    const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ''))
    const start = performance.now()

    const step = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * numericTarget))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [target, duration, shouldStart])

  return count
}

const colorMap = {
  cyan: {
    bg: 'rgba(0,242,255,0.06)',
    border: 'rgba(0,242,255,0.2)',
    glow: 'rgba(0,242,255,0.15)',
    text: '#00f2ff',
    iconBg: 'rgba(0,242,255,0.12)',
  },
  violet: {
    bg: 'rgba(139,92,246,0.06)',
    border: 'rgba(139,92,246,0.2)',
    glow: 'rgba(139,92,246,0.15)',
    text: '#8b5cf6',
    iconBg: 'rgba(139,92,246,0.12)',
  },
}

const StatCard = ({ icon: Icon, value, suffix, label, color, delay }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const numericPart = value.replace(/[^0-9]/g, '')
  const count = useCounter(numericPart, 2000, inView)
  const c = colorMap[color]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative flex flex-col items-center gap-4 p-8 rounded-3xl overflow-hidden group cursor-default"
      style={{ background: c.bg, border: `1px solid ${c.border}`, boxShadow: `0 8px 32px ${c.glow}` }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        style={{ background: `radial-gradient(circle at center, ${c.glow} 0%, transparent 70%)` }}
      />
      <div
        className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center"
        style={{ background: c.iconBg, border: `1px solid ${c.border}` }}
      >
        <Icon size={26} style={{ color: c.text }} />
      </div>
      <div className="relative z-10 text-center">
        <div className="text-4xl lg:text-5xl font-black tabular-nums leading-none" style={{ color: c.text }}>
          {inView ? count.toLocaleString() : '0'}
          <span className="text-2xl lg:text-3xl">{suffix}</span>
        </div>
        <div className="mt-3 text-sm font-semibold text-slate-300 tracking-wide">{label}</div>
      </div>
      <div
        className="absolute top-0 right-0 w-20 h-20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"
        style={{ background: c.text, opacity: 0.08 }}
      />
    </motion.div>
  )
}

export default function StatsBar() {
  const { t } = useTranslation()

  const stats = [
    { icon: Code2,     value: '700', suffix: '+',    labelKey: 'stats.days',       color: 'cyan',   delay: 0 },
    { icon: Trophy,    value: '3',   suffix: '',     labelKey: 'stats.wins',       color: 'violet', delay: 0.12 },
    { icon: Banknote,  value: '200', suffix: 'M UZS', labelKey: 'stats.investment', color: 'cyan',   delay: 0.24 },
    { icon: Building2, value: '1',   suffix: '',     labelKey: 'stats.itpark',     color: 'violet', delay: 0.36 },
  ]

  return (
    <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="text-xs font-mono tracking-[0.3em] uppercase text-slate-500">{t('stats.eyebrow')}</span>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.labelKey} {...stat} label={t(stat.labelKey)} />
        ))}
      </div>
    </section>
  )
}
