import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const isEN = i18n.language === 'en'

  const toggle = () => {
    const next = isEN ? 'ru' : 'en'
    i18n.changeLanguage(next)
    localStorage.setItem('lang', next)
  }

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold cursor-pointer"
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(12px)',
      }}
      aria-label="Toggle language"
    >
      <Globe size={13} className="text-[#00f2ff]" />
      <motion.span
        animate={{ color: isEN ? '#00f2ff' : '#475569' }}
        transition={{ duration: 0.2 }}
      >
        EN
      </motion.span>
      <span className="text-slate-700">/</span>
      <motion.span
        animate={{ color: !isEN ? '#00f2ff' : '#475569' }}
        transition={{ duration: 0.2 }}
      >
        RU
      </motion.span>
    </motion.button>
  )
}
