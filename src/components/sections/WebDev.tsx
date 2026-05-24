'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PROJECTS, ACADEMIC_MODULES } from '@/data/portfolio'
import { COLOR_MAP } from '@/lib/utils'
import {
  IconArrowUpRight, IconBrandGithub,
  IconChevronRight, IconCheck,
} from '@tabler/icons-react'

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const c = COLOR_MAP[project.color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`card glass-hover relative overflow-hidden ${project.featured ? 'md:col-span-2' : ''}`}
      style={{
        borderColor: hovered ? `${c}30` : 'var(--line)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-xl transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${c}0c 0%, transparent 60%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      <div className={`relative ${project.featured ? 'md:flex gap-10' : ''}`}>
        {/* Left */}
        <div className={project.featured ? 'flex-1' : ''}>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div
              className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest"
              style={{
                background: `${c}12`,
                border: `1px solid ${c}25`,
                color: c,
              }}
            >
              {project.badge}
            </div>
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: project.featured ? '32px' : '24px',
              letterSpacing: '.03em',
              color: '#fff',
              lineHeight: 1.05,
              marginBottom: '10px',
            }}
          >
            {project.title}
          </h3>

          <p style={{ fontSize: '14px', color: 'var(--txt2)', lineHeight: 1.7, marginBottom: '16px' }}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.stack.map(s => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.github ? (
              <a href={project.github} className="btn-ghost text-[13px] py-2 px-4" target="_blank" rel="noreferrer">
                <IconBrandGithub size={14} /> GitHub
              </a>
            ) : (
              <span className="btn-ghost text-[13px] py-2 px-4 opacity-40 cursor-not-allowed">
                <IconBrandGithub size={14} /> GitHub
              </span>
            )}
            {project.live ? (
              <a href={project.live} className="btn-ghost text-[13px] py-2 px-4" style={{ color: c, borderColor: `${c}30` }} target="_blank" rel="noreferrer">
                Live Site <IconArrowUpRight size={13} />
              </a>
            ) : (
              <span className="btn-ghost text-[13px] py-2 px-4 opacity-40 cursor-not-allowed" style={{ color: c, borderColor: `${c}30` }}>
                Case Study <IconArrowUpRight size={13} />
              </span>
            )}
          </div>
        </div>

        {/* Right — featured metrics & features */}
        {project.featured && (
          <div className="md:w-64 mt-6 md:mt-0 flex flex-col gap-4">
            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2">
              {project.metrics.map(m => (
                <div key={m.label} className="rounded-xl p-3 text-center" style={{ background: 'var(--bg3)', border: '1px solid var(--line)' }}>
                  <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '22px', color: c, letterSpacing: '.02em' }}>
                    {m.value}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '.1em', color: 'var(--txt3)', textTransform: 'uppercase' }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
            {/* Features */}
            <div
              className="rounded-xl p-4"
              style={{ background: 'var(--bg3)', border: '1px solid var(--line)' }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.12em', color: 'var(--txt3)', marginBottom: '10px', textTransform: 'uppercase' }}>
                Core Features
              </div>
              <ul className="space-y-2">
                {project.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-[12px]" style={{ color: 'var(--txt2)' }}>
                    <IconCheck size={12} className="mt-0.5 flex-shrink-0" style={{ color: c }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

const AREA_COLORS: Record<string, string> = {
  cyan:  '#00d4ff',
  blue:  '#4f7fff',
  amber: '#ffaa00',
  green: '#00e599',
}

function AcademicModules() {
  const [openArea, setOpenArea] = useState<string | null>(null)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <div ref={ref} className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="section-eyebrow">Academic Background</div>
        <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(28px,4vw,42px)', letterSpacing: '.04em', color: '#fff', marginBottom: '8px' }}>
          WHAT I STUDIED &amp; <span className="gradient-text-blue">WHAT I BUILT.</span>
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--txt2)', maxWidth: '560px', lineHeight: 1.7 }}>
          A BSc in Web Development — each module wasn't just theory; it shaped real skills applied across projects.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        {ACADEMIC_MODULES.map((area, ai) => {
          const c = AREA_COLORS[area.color] || 'var(--cyan)'
          const isOpen = openArea === area.year
          return (
            <motion.div
              key={area.year}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ai * 0.08 }}
            >
              <button
                onClick={() => setOpenArea(isOpen ? null : area.year)}
                style={{ cursor: 'none', width: '100%', textAlign: 'left' }}
                className={`card glass-hover transition-all duration-300 ${isOpen ? '' : 'hover:border-white/10'}`}
                {...(isOpen ? { style: { cursor: 'none', width: '100%', textAlign: 'left', borderColor: `${c}30`, background: `${c}06` } as React.CSSProperties } : {})}
              >
                <div className="flex items-center justify-between gap-3 mb-1">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: c }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.12em', color: c, textTransform: 'uppercase' }}>
                      {area.year}
                    </span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '18px', color: 'var(--txt3)', lineHeight: 1, transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform .3s', display: 'inline-block' }}>+</span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--txt3)', marginLeft: '20px', marginBottom: isOpen ? '14px' : 0 }}>
                  {area.modules.length} modules
                </p>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3 ml-5">
                        {area.modules.map((mod, mi) => (
                          <motion.div
                            key={mod.name}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: mi * 0.06, duration: 0.3 }}
                            className="rounded-lg p-3"
                            style={{ background: 'var(--bg3)', border: '1px solid var(--line)' }}
                          >
                            <div style={{ fontSize: '13px', color: '#fff', fontWeight: 500, marginBottom: '4px' }}>
                              {mod.name}
                            </div>
                            <div style={{ fontSize: '12px', color: 'var(--txt2)', lineHeight: 1.6 }}>
                              {mod.detail}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export function WebDev() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="webdev" className="section max-w-7xl mx-auto px-6 md:px-10">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-eyebrow">Full Stack Development</div>
          <h2 className="section-title">
            SELECTED<br />
            <span className="gradient-text-blue">PROJECTS.</span>
          </h2>
          <p className="section-desc">
            Production-grade applications spanning full-stack development, network architecture,
            and immersive spatial design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <AcademicModules />
      </div>
    </section>
  )
}
