import { motion } from 'framer-motion'
import { ExternalLink, Github, Globe, Plus, Award, Clock, Shield } from 'lucide-react'
import smartSciencesLogo from '../assets/Smart-sciences logo.png'
import nuktaLogo from '../assets/Nukta logo.png'
import smartStorageLogo from '../assets/SmartStorage logo.png'

const Badge = ({ label, type = 'default' }) => {
  const styles = {
    gov: 'bg-[rgba(0,242,255,0.1)] border-[rgba(0,242,255,0.3)] text-[#00f2ff]',
    winner: 'bg-[rgba(250,204,21,0.1)] border-[rgba(250,204,21,0.3)] text-yellow-400',
    hackathon: 'bg-[rgba(139,92,246,0.1)] border-[rgba(139,92,246,0.3)] text-[#8b5cf6]',
    stealth: 'bg-[rgba(100,116,139,0.1)] border-[rgba(100,116,139,0.3)] text-slate-400',
    default: 'bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.1)] text-slate-300',
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border ${styles[type]}`}>
      {label}
    </span>
  )
}

const LinkButton = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(0,242,255,0.3)] text-xs font-medium text-slate-400 hover:text-[#00f2ff] transition-all duration-200"
  >
    <Icon size={13} />
    {label}
  </a>
)

const ProjectCard = ({ project, className = '', style = {}, delay = 0 }) => {
  const accentColor = project.accent === 'violet' ? '#8b5cf6' : '#00f2ff'
  const accentAlpha = project.accent === 'violet' ? 'rgba(139,92,246,' : 'rgba(0,242,255,'

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className={`relative group rounded-3xl p-6 lg:p-8 overflow-hidden flex flex-col justify-between cursor-default ${className}`}
      style={{
        background: `rgba(15, 23, 42, 0.8)`,
        border: `1px solid ${accentAlpha}0.15)`,
        boxShadow: `0 8px 32px rgba(0,0,0,0.4)`,
        backdropFilter: 'blur(20px)',
        ...style,
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 30% 30%, ${accentAlpha}0.07) 0%, transparent 60%)` }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-8 right-8 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
      />

      {/* Corner number */}
      <div
        className="absolute top-6 right-6 text-7xl font-black leading-none pointer-events-none select-none"
        style={{ color: `${accentAlpha}0.06)` }}
      >
        {project.num}
      </div>

      <div className="relative z-10 flex flex-col gap-4 h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden"
            style={{ background: `${accentAlpha}0.1)`, border: `1px solid ${accentAlpha}0.2)` }}
          >
            {project.logo
              ? <img src={project.logo} alt={project.name} className="w-9 h-9 object-contain" />
              : <project.icon size={22} style={{ color: accentColor }} />
            }
          </div>
          <div className="flex flex-wrap gap-1.5 justify-end">
            {project.badges.map((b) => (
              <Badge key={b.label} {...b} />
            ))}
          </div>
        </div>

        {/* Title & category */}
        <div>
          <p className="text-xs font-mono tracking-widest uppercase mb-1.5" style={{ color: accentAlpha + '0.7)' }}>
            {project.category}
          </p>
          <h3 className="text-xl lg:text-2xl font-black text-white leading-tight">{project.name}</h3>
          <p className="text-sm font-medium mt-0.5" style={{ color: accentColor }}>{project.tagline}</p>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>

        {/* Achievements */}
        {project.achievements && (
          <ul className="space-y-1.5">
            {project.achievements.map((a) => (
              <li key={a} className="flex items-center gap-2 text-xs text-slate-300">
                <Award size={12} style={{ color: accentColor, flexShrink: 0 }} />
                {a}
              </li>
            ))}
          </ul>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md"
              style={{ background: `${accentAlpha}0.08)`, color: `${accentAlpha}0.8)`, border: `1px solid ${accentAlpha}0.12)` }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <div className="flex gap-2 flex-wrap pt-1 border-t border-[rgba(255,255,255,0.06)]">
            {project.links.map((link) => (
              <LinkButton key={link.label} {...link} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

const FutureCard = ({ delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -10 }}
    className="relative group rounded-3xl p-8 overflow-hidden flex flex-col items-center justify-center gap-5 min-h-[280px] cursor-default"
    style={{
      background: 'rgba(15,23,42,0.5)',
      border: '1px dashed rgba(255,255,255,0.1)',
      backdropFilter: 'blur(20px)',
    }}
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: 'radial-gradient(circle at center, rgba(139,92,246,0.06) 0%, transparent 70%)' }}
    />

    <motion.div
      animate={{ rotate: [0, 180, 360] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      className="absolute inset-0 rounded-3xl opacity-20"
      style={{
        background: 'conic-gradient(from 0deg, #00f2ff, #8b5cf6, transparent, #00f2ff)',
        mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))',
        WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))',
      }}
    />

    <div className="relative z-10 flex flex-col items-center gap-4 text-center">
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="w-16 h-16 rounded-2xl flex items-center justify-center"
        style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.25)' }}
      >
        <Plus size={32} className="text-[#8b5cf6]" />
      </motion.div>
      <div>
        <h3 className="text-xl font-black text-white">Future Lab</h3>
        <p className="text-slate-500 text-sm mt-1.5 leading-relaxed max-w-[200px]">
          Next Big Idea in Progress...
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] animate-pulse-slow" />
        <span className="text-xs font-mono text-slate-600 tracking-wider">STEALTH MODE</span>
      </div>
    </div>
  </motion.div>
)

import { BookOpen, Store, Lock, Layers } from 'lucide-react'

const projects = [
  {
    num: '01',
    name: 'Smart-Sciences',
    tagline: 'The Future of STEM',
    category: 'EdTech Platform',
    icon: BookOpen,
    logo: smartSciencesLogo,
    accent: 'cyan',
    description:
      'Gamified education platform for grades 5–8 that transforms complex STEM subjects into interactive quests and challenges, making learning addictive.',
    achievements: [
      '1st Place — Yangiyer Startup Contest',
      '200M UZS Investment Secured',
      'Featured in National Media',
      'Pilot Program with 3 Schools',
    ],
    badges: [
      { label: '🏆 1st Place', type: 'winner' },
      { label: 'Gov Supported', type: 'gov' },
    ],
    tech: ['React', 'Vite', 'FastAPI', 'PostgreSQL'],
    links: [
      { href: 'https://smartsciences.uz', icon: Globe, label: 'Web' },
      { href: 'https://github.com/Anub1s-67336/Website', icon: Github, label: 'GitHub' },
    ],
  },
  {
    num: '02',
    name: 'NUKTA',
    tagline: 'Safe & Share',
    category: 'Marketplace · 24h Build',
    icon: Store,
    logo: nuktaLogo,
    accent: 'violet',
    description:
      "Decentralized 'Airbnb for retail' — enabling merchants to share and sublease unused retail space on demand. Built in 24 hours at IDEATHON.",
    achievements: [
      '1st Place — IDEATHON Hackathon',
      '24h MVP Build',
    ],
    badges: [
      { label: '⚡ 24h Build', type: 'hackathon' },
      { label: '🥇 IDEATHON', type: 'winner' },
    ],
    tech: ['React', 'Node.js', 'MongoDB'],
    links: [
      { href: 'https://nukta-mvp.vercel.app/', icon: ExternalLink, label: 'Demo' },
      { href: 'https://github.com/winter-eng/nukta-mvp', icon: Github, label: 'GitHub' },
    ],
  },
  {
    num: '03',
    name: 'SmartStorage',
    tagline: 'Stealth Messenger',
    category: 'Privacy Tool',
    icon: Lock,
    logo: smartStorageLogo,
    accent: 'cyan',
    description:
      'Anonymous school file-sharing ecosystem built with end-to-end privacy principles. Enables secure document exchange without identity exposure.',
    achievements: [
      'Top 9 — "Step to Invention" Competition',
      'Best Innovation Award — Tashkent Tech Week',
    ],
    badges: [
      { label: 'Top 9 National', type: 'winner' },
      { label: '🔒 Stealth', type: 'stealth' },
    ],
    tech: ['React', 'Vite', 'Encryption API'],
    links: [
      { href: 'https://insta01.uz', icon: Globe, label: 'Web' },
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <span className="text-xs font-mono tracking-[0.3em] uppercase text-slate-500 block mb-4">
          Selected Work
        </span>
        <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
          The{' '}
          <span className="gradient-text">Lab</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-base">
          Real projects. Real wins. Each one built to solve a problem and compete at the highest level. 
          This is where the rubber meets the road — and the future takes shape.
        </p>
      </motion.div>

      {/* Bento grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {/* Card 1 — large, spans 2 rows on lg */}
        <div className="lg:row-span-2 md:col-span-2 lg:col-span-1">
          <ProjectCard project={projects[0]} delay={0} className="h-full min-h-[400px]" />
        </div>

        {/* Card 2 */}
        <ProjectCard project={projects[1]} delay={0.12} />

        {/* Card 3 */}
        <ProjectCard project={projects[2]} delay={0.24} />

        {/* Future card */}
        <FutureCard delay={0.36} />

        {/* Wide stat card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.48 }}
          whileHover={{ y: -10 }}
          className="relative group rounded-3xl p-8 overflow-hidden flex items-center gap-6"
          style={{
            background: 'linear-gradient(135deg, rgba(0,242,255,0.06), rgba(139,92,246,0.06))',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0,242,255,0.05) 0%, transparent 70%)' }}
          />
          <div
            className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, rgba(0,242,255,0.15), rgba(139,92,246,0.15))' }}
          >
            <Layers size={28} className="text-white" />
          </div>
          <div className="relative z-10">
            <p className="text-xs font-mono tracking-widest text-slate-500 uppercase mb-1">Combined Impact</p>
            <h3 className="text-2xl font-black text-white">3 Products. 3 Wins. 1 Vision.</h3>
            <p className="text-sm text-slate-400 mt-1">Building the ecosystem of tomorrow, one MVP at a time.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
