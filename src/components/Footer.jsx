import { motion } from 'framer-motion'
import { Send, Linkedin, Github, Mail, ArrowUpRight, Heart } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const TelegramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.68 7.91c-.12.57-.45.71-.91.44l-2.5-1.84-1.2 1.16c-.13.13-.25.25-.51.25l.18-2.52 4.58-4.14c.2-.18-.04-.27-.31-.1L8.43 14.54 6 13.8c-.56-.17-.57-.56.12-.82l9.07-3.5c.47-.17.88.11.73.82z" />
  </svg>
)

const socials = [
  { name: 'Telegram', handle: '@autistiqz',          href: 'https://t.me/autistiqz',                                   icon: TelegramIcon, color: '#00f2ff' },
  { name: 'GitHub',   handle: '@winter-eng',          href: 'https://github.com/winter-eng',                            icon: Github,       color: '#8b5cf6' },
  { name: 'LinkedIn', handle: '@diyorbek-sodikov',    href: 'https://www.linkedin.com/in/diyorbek-sodikov-99a2ab408',   icon: Linkedin,     color: '#00f2ff' },
  { name: 'Email',    handle: 'curs3dabyss@gmail.com',href: 'mailto:curs3dabyss@gmail.com',                             icon: Mail,         color: '#8b5cf6' },
]

const SocialCard = ({ social, delay }) => {
  const Tag = 'a'
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
    >
      <Tag
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 group cursor-pointer hover:border-opacity-50"
        style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${social.color}20` }}
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
          style={{ background: `${social.color}12`, border: `1px solid ${social.color}25` }}
        >
          <social.icon size={20} style={{ color: social.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-white">{social.name}</div>
          <div className="text-xs text-slate-500 font-mono mt-0.5 truncate">{social.handle}</div>
        </div>
        <ArrowUpRight size={16} className="text-slate-600 group-hover:text-white transition-colors duration-200 flex-shrink-0" />
      </Tag>
    </motion.div>
  )
}

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer id="footer" className="py-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,242,255,0.05), transparent)' }}
      />
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.05), transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-10 lg:p-16 text-center mb-16 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0,242,255,0.05) 0%, rgba(139,92,246,0.08) 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(rgba(0,242,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,242,255,1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
          <div className="relative z-10">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(0,242,255,0.08)] border border-[rgba(0,242,255,0.2)] mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#00f2ff] animate-pulse" />
              <span className="text-xs font-mono text-[#00f2ff] tracking-wider">{t('footer.open_badge')}</span>
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-black text-white mb-4 leading-tight">
              {t('footer.cta_title')}
              <br />
              <span className="gradient-text">{t('footer.cta_accent')}</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              {t('footer.cta_desc')}
            </p>

            <motion.a
              href="https://t.me/autistiqz"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg text-black transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #00f2ff, #8b5cf6)' }}
            >
              <Send size={20} />
              {t('footer.cta_btn')}
            </motion.a>
          </div>
        </motion.div>

        {/* Socials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
          {socials.map((s, i) => (
            <SocialCard key={s.name} social={s} delay={i * 0.1} />
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[rgba(255,255,255,0.06)]"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm"
              style={{ background: 'linear-gradient(135deg, #00f2ff, #8b5cf6)', color: '#000' }}
            >
              DS
            </div>
            <span className="text-sm font-semibold text-slate-300">Diyorbek Sodikov</span>
            <span className="text-slate-700">·</span>
            <span className="text-xs font-mono text-slate-600">{t('footer.itpark')}</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-600">
            <span>{t('footer.built_with')}</span>
            <Heart size={12} className="text-[#8b5cf6]" fill="#8b5cf6" />
            <span>{t('footer.built_stack')}</span>
            <span className="text-slate-700">·</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
