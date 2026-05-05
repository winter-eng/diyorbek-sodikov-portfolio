import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'

const ReactIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <circle cx="24" cy="24" r="4" fill="#00f2ff" />
    <ellipse cx="24" cy="24" rx="20" ry="8" stroke="#00f2ff" strokeWidth="2" fill="none" />
    <ellipse cx="24" cy="24" rx="20" ry="8" stroke="#00f2ff" strokeWidth="2" fill="none" transform="rotate(60 24 24)" />
    <ellipse cx="24" cy="24" rx="20" ry="8" stroke="#00f2ff" strokeWidth="2" fill="none" transform="rotate(120 24 24)" />
  </svg>
)

const TailwindIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <path d="M12 18c2-8 8-12 12-12 0 4-2 8-4 10 2-2 6-4 10-4 0 6-4 10-8 12 4-2 8-2 12-2-2 8-8 12-12 12 0-4 2-8 4-10-2 2-6 4-10 4 0-6 4-10 8-12-4 2-8 2-12 2z" fill="#38bdf8" />
  </svg>
)

const PythonIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <path d="M24 4C14 4 16 9 16 12v4h16v2H12C8 18 4 20 4 24s4 8 8 8h4v-5c0-4 3-7 8-7s8 3 8 7v8c4 0 8-2 8-8V12c0-6-6-8-16-8z" fill="#8b5cf6" opacity="0.8" />
    <path d="M24 44C34 44 32 39 32 36v-4H16v-2h20c4 0 8-2 8-8s-4-8-8-8h-4v5c0 4-3 7-8 7s-8-3-8-7v-8c-4 0-8 2-8 8v12c0 6 6 8 16 8z" fill="#8b5cf6" opacity="0.5" />
    <circle cx="20" cy="10" r="2" fill="white" opacity="0.7" />
    <circle cx="28" cy="38" r="2" fill="white" opacity="0.7" />
  </svg>
)

const GoIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <text x="2" y="32" fontFamily="monospace" fontSize="22" fontWeight="900" fill="#00ACD7">Go</text>
  </svg>
)

const ViteIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <polygon points="24,4 44,38 4,38" fill="none" stroke="#a855f7" strokeWidth="2" />
    <polygon points="24,12 36,34 12,34" fill="none" stroke="#00f2ff" strokeWidth="1.5" opacity="0.6" />
    <line x1="24" y1="4" x2="24" y2="44" stroke="url(#vg)" strokeWidth="2" />
    <defs>
      <linearGradient id="vg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#00f2ff" />
      </linearGradient>
    </defs>
  </svg>
)

const FigmaIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect x="10" y="4" width="14" height="14" rx="7" fill="#F24E1E" />
    <rect x="24" y="4" width="14" height="14" rx="7" fill="#FF7262" />
    <rect x="10" y="18" width="14" height="14" rx="7" fill="#A259FF" />
    <rect x="10" y="32" width="14" height="14" rx="7" fill="#0ACF83" />
    <circle cx="31" cy="25" r="7" fill="#1ABCFE" />
  </svg>
)

const GitIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <circle cx="36" cy="12" r="6" fill="none" stroke="#F05032" strokeWidth="2" />
    <circle cx="12" cy="36" r="6" fill="none" stroke="#F05032" strokeWidth="2" />
    <circle cx="12" cy="12" r="6" fill="none" stroke="#F05032" strokeWidth="2" />
    <line x1="12" y1="18" x2="12" y2="30" stroke="#F05032" strokeWidth="2" />
    <path d="M18 12 L30 12 Q36 12 36 18 L36 18" stroke="#F05032" strokeWidth="2" fill="none" />
  </svg>
)

const skills = [
  { name: 'React', icon: ReactIcon, level: 90, color: '#00f2ff', category: 'Frontend' },
  { name: 'Vite', icon: ViteIcon, level: 88, color: '#a855f7', category: 'Tooling' },
  { name: 'Tailwind', icon: TailwindIcon, level: 92, color: '#38bdf8', category: 'Styling' },
  { name: 'Python', icon: PythonIcon, level: 70, color: '#8b5cf6', category: 'Backend' },
  { name: 'Go', icon: GoIcon, level: 40, color: '#00ACD7', category: 'Systems' },
  { name: 'Figma', icon: FigmaIcon, level: 75, color: '#F24E1E', category: 'Design' },
  { name: 'Git', icon: GitIcon, level: 85, color: '#F05032', category: 'DevOps' },
]

const mastering = [
  {
    title: 'AI-Agent Integration',
    desc: 'Building autonomous agent pipelines with LLM APIs, function calling, and multi-step reasoning systems.',
    icon: Sparkles,
    color: '#00f2ff',
    progress: 60,
  },
  {
    title: 'Golang Concurrency',
    desc: 'Mastering goroutines, channels, and sync primitives to build high-throughput backend services.',
    icon: ArrowRight,
    color: '#8b5cf6',
    progress: 40,
  },
]

const SkillCard = ({ skill, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="relative group flex flex-col items-center gap-3 p-5 rounded-2xl cursor-default"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)` }}
      />

      {/* Icon */}
      <div className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center"
        style={{ background: `${skill.color}12`, border: `1px solid ${skill.color}25` }}
      >
        <skill.icon />
      </div>

      <div className="relative z-10 text-center">
        <div className="text-sm font-bold text-white">{skill.name}</div>
        <div className="text-xs text-slate-600 mt-0.5">{skill.category}</div>
      </div>

      {/* Progress bar */}
      <div className="relative z-10 w-full h-1 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay + 0.3, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)` }}
        />
      </div>
      <span className="relative z-10 text-xs font-mono" style={{ color: skill.color }}>{skill.level}%</span>
    </motion.div>
  )
}

export default function TechStack() {
  return (
    <section id="stack" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <span className="text-xs font-mono tracking-[0.3em] uppercase text-slate-500 block mb-4">
          Capabilities
        </span>
        <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
          Tech <span className="gradient-text">Arsenal</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-base">
          Tools I wield daily — and the next-gen tech I'm actively conquering.
        </p>
      </motion.div>

      {/* Skills grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-16">
        {skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} delay={i * 0.07} />
        ))}
      </div>

      {/* Currently Mastering */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl p-8 lg:p-10 overflow-hidden"
        style={{
          background: 'rgba(15,23,42,0.6)',
          border: '1px solid rgba(255,255,255,0.07)',
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08), transparent)' }}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-[rgba(0,242,255,0.1)]">
              <Sparkles size={16} className="text-[#00f2ff]" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white">Currently Mastering</h3>
              <p className="text-xs text-slate-500 font-mono">Active learning tracks · 2025</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mastering.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}
                  >
                    <item.icon size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{item.title}</h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="flex-1 h-1.5 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden max-w-[80px]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: i * 0.2 + 0.4 }}
                          className="h-full rounded-full"
                          style={{ background: item.color }}
                        />
                      </div>
                      <span className="text-xs font-mono" style={{ color: item.color }}>{item.progress}%</span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed pl-[52px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
