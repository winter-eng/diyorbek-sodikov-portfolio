import { motion } from 'framer-motion'
import { GraduationCap, Brain, Quote, Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const TestimonialCard = ({ text, author, avatar, role, color, stars, delay }) => {
  const c = color === 'cyan'
    ? { accent: '#00f2ff', bg: 'rgba(0,242,255,0.05)', border: 'rgba(0,242,255,0.15)' }
    : { accent: '#8b5cf6', bg: 'rgba(139,92,246,0.05)', border: 'rgba(139,92,246,0.15)' }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="relative group rounded-3xl p-7 flex flex-col gap-5 overflow-hidden"
      style={{ background: c.bg, border: `1px solid ${c.border}`, backdropFilter: 'blur(20px)' }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        style={{ background: `radial-gradient(circle at 20% 20%, ${c.bg} 0%, transparent 70%)` }}
      />
      <div className="relative z-10 flex justify-between items-start">
        <Quote size={28} style={{ color: c.accent, opacity: 0.5 }} />
        <div className="flex gap-0.5">
          {Array.from({ length: stars }).map((_, i) => (
            <Star key={i} size={12} fill={c.accent} style={{ color: c.accent }} />
          ))}
        </div>
      </div>
      <p className="relative z-10 text-slate-300 text-sm leading-relaxed font-medium italic">
        "{text}"
      </p>
      <div className="relative z-10 flex items-center gap-3 pt-3 border-t border-[rgba(255,255,255,0.06)]">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${c.accent}30, ${c.accent}15)`, color: c.accent, border: `1px solid ${c.border}` }}
        >
          {avatar}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{author}</div>
          <div className="text-xs text-slate-500 mt-0.5">{role}</div>
        </div>
      </div>
    </motion.div>
  )
}

const TimelineItem = ({ item, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="relative flex gap-5 group"
  >
    <div className="flex flex-col items-center flex-shrink-0">
      <div
        className="w-10 h-10 rounded-2xl flex items-center justify-center z-10"
        style={{
          background: item.accent === 'cyan' ? 'rgba(0,242,255,0.1)' : 'rgba(139,92,246,0.1)',
          border: `1px solid ${item.accent === 'cyan' ? 'rgba(0,242,255,0.25)' : 'rgba(139,92,246,0.25)'}`,
        }}
      >
        <item.icon size={18} style={{ color: item.accent === 'cyan' ? '#00f2ff' : '#8b5cf6' }} />
      </div>
      {!item.last && (
        <div className="w-px flex-1 mt-2" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.08), transparent)' }} />
      )}
    </div>
    <div className="pb-8">
      <div className="flex items-center gap-3 flex-wrap mb-2">
        <span className="text-xs font-mono text-slate-500 tracking-wider">{item.date}</span>
        {item.badge && (
          <span
            className="text-xs px-2 py-0.5 rounded-full font-semibold"
            style={{
              background: item.accent === 'cyan' ? 'rgba(0,242,255,0.1)' : 'rgba(139,92,246,0.1)',
              color: item.accent === 'cyan' ? '#00f2ff' : '#8b5cf6',
            }}
          >
            {item.badge}
          </span>
        )}
      </div>
      <h4 className="text-white font-bold text-base mb-1">{item.title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
    </div>
  </motion.div>
)

export default function Experience() {
  const { t } = useTranslation()

  const timeline = [
    {
      icon: GraduationCap,
      date: t('experience.step_date'),
      title: t('experience.step_title'),
      desc: t('experience.step_desc'),
      badge: t('experience.step_badge'),
      accent: 'cyan',
    },
    {
      icon: Brain,
      date: t('experience.self_date'),
      title: t('experience.self_title'),
      desc: t('experience.self_desc'),
      badge: t('experience.self_badge'),
      accent: 'violet',
    },
    {
      icon: GraduationCap,
      date: t('experience.itpark_date'),
      title: t('experience.itpark_title'),
      desc: t('experience.itpark_desc'),
      badge: t('experience.itpark_badge'),
      accent: 'cyan',
      last: true,
    },
  ]

  const testimonials = [
    { text: t('experience.t1_text'), author: 'Zakharyan V.', role: t('experience.t1_role'), avatar: 'ZV', color: 'cyan',   stars: 5 },
    { text: t('experience.t2_text'), author: 'Nosirov T.',   role: t('experience.t2_role'), avatar: 'NT', color: 'violet', stars: 5 },
    { text: t('experience.t3_text'), author: 'Buranov A.',   role: t('experience.t3_role'), avatar: 'BA', color: 'cyan',   stars: 5 },
  ]

  return (
    <section id="experience" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <span className="text-xs font-mono tracking-[0.3em] uppercase text-slate-500 block mb-4">
          {t('experience.eyebrow')}
        </span>
        <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
          {t('experience.title_plain')}{' '}
          <span className="gradient-text">{t('experience.title_accent')}</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-8"
          >
            {t('experience.timeline_header')}
          </motion.h3>
          <div>
            {timeline.map((item, i) => (
              <TimelineItem key={item.title} item={item} delay={i * 0.15} />
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-8"
          >
            {t('experience.testimonials_header')}
          </motion.h3>
          <div className="space-y-4">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={testimonial.author} {...testimonial} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
