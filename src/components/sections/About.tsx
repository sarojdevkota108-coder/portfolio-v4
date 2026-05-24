'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SKILL_GROUPS, ACADEMIC_MODULES } from '@/data/portfolio'
import { COLOR_MAP } from '@/lib/utils'
import {
  IconCode, IconNetwork, IconBuildingSkyscraper,
} from '@tabler/icons-react'

const MANIFESTO = [
  "I refuse to be one thing.",
  "Code is architecture. Architecture is design. Design is logic.",
  "Every domain I master makes every other one sharper.",
  "The world has enough specialists. I'm building something rarer.",
  "From Kathmandu — reaching everywhere.",
]

const WORLDS = [
  {
    id: 'code',
    title: 'The Developer',
    color: '#00d4ff',
    bg: 'rgba(0,212,255,0.04)',
    border: 'rgba(0,212,255,0.15)',
    icon: IconCode,
    tagline: 'Systems that think',
    desc: 'Full-stack applications with Django & React. APIs that move data. Interfaces that disappear.',
    items: ['Python · Django · REST', 'React · Next.js · TypeScript', 'PostgreSQL · Docker · AWS'],
  },
  {
    id: 'design',
    title: 'The Designer',
    color: '#00e599',
    bg: 'rgba(0,229,153,0.04)',
    border: 'rgba(0,229,153,0.15)',
    icon: IconBuildingSkyscraper,
    tagline: 'Spaces that breathe',
    desc: '3D visualization, AutoCAD floor plans, material curation — where function meets beauty.',
    items: ['AutoCAD · 3D Visualization', 'Space Planning · Lighting', 'Material & Color Theory'],
  },
  {
    id: 'network',
    title: 'The Engineer',
    color: '#4f7fff',
    bg: 'rgba(79,127,255,0.04)',
    border: 'rgba(79,127,255,0.15)',
    icon: IconNetwork,
    tagline: 'Infrastructure that holds',
    desc: 'Enterprise topology, VLAN architecture, WAN simulation — the invisible skeleton of everything.',
    items: ['Cisco · TCP/IP · VLANs', 'Routing · Switching · Firewalls', 'AWS · Cloud · DNS/DHCP'],
  },
]

const COLLISIONS = [
  {
    a: { label: 'Network Topology', color: '#4f7fff' },
    b: { label: 'Floor Plan Layout', color: '#00e599' },
    insight: 'Both are spatial thinking — routing traffic through a building vs. routing data through infrastructure.',
  },
  {
    a: { label: 'UI/UX Design', color: '#00d4ff' },
    b: { label: 'Interior Design', color: '#00e599' },
    insight: 'Designing a room and designing a screen are the same problem: guide the person, hide the complexity.',
  },
  {
    a: { label: 'Code Architecture', color: '#00d4ff' },
    b: { label: 'Space Planning', color: '#00e599' },
    insight: 'Clean code and clean floor plans share the same principle — every element earns its place.',
  },
]

export function About() {
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true, threshold: 0.05 })
  const { ref: manifestoRef, inView: manifestoInView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const { ref: collideRef, inView: collideInView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 md:px-10" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div ref={sectionRef}>

        {/* ── SECTION HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}>
          <div className="section-eyebrow">About</div>
          <h2 className="section-title">
            THREE CRAFTS,<br />
            <span className="gradient-text-blue">ONE VISION.</span>
          </h2>
        </motion.div>

        {/* ── THREE WORLD CARDS ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-5 mb-20">
          {WORLDS.map((w, i) => {
            const Icon = w.icon
            return (
              <motion.div
                key={w.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.1, duration: 0.6 }}
                className="card glass-hover group relative overflow-hidden"
                style={{ borderColor: w.border, background: w.bg }}
              >
                {/* Top accent line */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                  background: `linear-gradient(90deg, transparent, ${w.color}, transparent)`,
                  opacity: 0.6,
                }} />

                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: `${w.color}15`, color: w.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '16px',
                }}>
                  <Icon size={20} />
                </div>

                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '9px',
                  letterSpacing: '.14em', color: w.color,
                  textTransform: 'uppercase', marginBottom: '6px',
                }}>
                  {w.tagline}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-bebas)', fontSize: '26px',
                  letterSpacing: '.04em', color: '#fff',
                  marginBottom: '12px',
                }}>
                  {w.title}
                </h3>

                <p style={{ fontSize: '13px', color: 'var(--txt2)', lineHeight: 1.7, marginBottom: '16px' }}>
                  {w.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {w.items.map(it => (
                    <div key={it} style={{
                      fontFamily: 'var(--font-mono)', fontSize: '10px',
                      color: 'var(--txt3)', letterSpacing: '.06em',
                      display: 'flex', alignItems: 'center', gap: '8px',
                    }}>
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%',
                        background: w.color, flexShrink: 0, opacity: 0.7 }} />
                      {it}
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* ── MANIFESTO ── */}
        <div ref={manifestoRef} style={{ marginBottom: '100px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={manifestoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}>
            <div className="section-eyebrow">Manifesto</div>
          </motion.div>

          <div style={{
            padding: '60px 48px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Big quote mark */}
            <div style={{
              position: 'absolute', top: '-20px', left: '40px',
              fontFamily: 'var(--font-bebas)', fontSize: '200px',
              color: 'rgba(0,212,255,0.04)', lineHeight: 1,
              pointerEvents: 'none', userSelect: 'none',
            }}>"</div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              {MANIFESTO.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={manifestoInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.12, duration: 0.6 }}
                  style={{
                    fontFamily: i === 0 ? 'var(--font-bebas)' : 'inherit',
                    fontSize: i === 0 ? 'clamp(32px, 5vw, 54px)' : '17px',
                    color: i === 0 ? '#fff' : 'var(--txt2)',
                    letterSpacing: i === 0 ? '.04em' : 'normal',
                    lineHeight: i === 0 ? 1.1 : 1.8,
                    marginBottom: i === 0 ? '28px' : '8px',
                  }}>
                  {i > 0 && (
                    <span style={{ color: 'var(--cyan)', marginRight: '10px', opacity: 0.6 }}>—</span>
                  )}
                  {line}
                </motion.p>
              ))}
            </div>
          </div>
        </div>

        {/* ── WORLDS COLLIDE ── */}
        <div ref={collideRef} style={{ marginBottom: '100px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={collideInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}>
            <div className="section-eyebrow">Intersections</div>
            <h3 style={{
              fontFamily: 'var(--font-bebas)', fontSize: 'clamp(28px, 4vw, 48px)',
              color: '#fff', letterSpacing: '.04em', marginBottom: '40px',
            }}>
              WHERE THE WORLDS <span style={{ color: 'var(--cyan)' }}>COLLIDE.</span>
            </h3>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {COLLISIONS.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={collideInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.12, duration: 0.55 }}
                style={{
                  display: 'grid', gridTemplateColumns: '1fr auto 1fr auto',
                  gap: '16px', alignItems: 'center',
                  padding: '24px 28px', borderRadius: '16px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                {/* Domain A */}
                <div style={{
                  padding: '8px 16px', borderRadius: '10px',
                  background: `${c.a.color}12`,
                  border: `1px solid ${c.a.color}30`,
                  fontFamily: 'var(--font-mono)', fontSize: '12px',
                  color: c.a.color, letterSpacing: '.06em',
                  textAlign: 'center',
                }}>
                  {c.a.label}
                </div>

                {/* Plus */}
                <div style={{
                  fontFamily: 'var(--font-bebas)', fontSize: '24px',
                  color: 'var(--txt3)', letterSpacing: '.02em',
                }}>×</div>

                {/* Domain B */}
                <div style={{
                  padding: '8px 16px', borderRadius: '10px',
                  background: `${c.b.color}12`,
                  border: `1px solid ${c.b.color}30`,
                  fontFamily: 'var(--font-mono)', fontSize: '12px',
                  color: c.b.color, letterSpacing: '.06em',
                  textAlign: 'center',
                }}>
                  {c.b.label}
                </div>

                {/* Insight */}
                <div style={{
                  paddingLeft: '20px',
                  borderLeft: '1px solid rgba(255,255,255,0.08)',
                  fontSize: '13px', color: 'var(--txt2)',
                  lineHeight: 1.6, maxWidth: '340px',
                }}>
                  {c.insight}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── SKILL GROUPS ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {SKILL_GROUPS.map((g, i) => (
            <div key={i} className="card">
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px',
                letterSpacing: '.14em', color: COLOR_MAP[g.color],
                marginBottom: '12px', textTransform: 'uppercase',
              }}>
                {g.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {g.tags.map(t => (
                  <span key={t} className={`tag tag-${g.color}`}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── ACADEMIC MODULES ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px',
            letterSpacing: '.2em', color: 'var(--txt3)',
            textTransform: 'uppercase', marginBottom: '24px',
          }}>
            Academic Modules — Herald College · University of Wolverhampton
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {ACADEMIC_MODULES.map((yr, i) => (
              <div key={i} className="card glass-hover">
                <div className="mb-4" style={{
                  fontFamily: 'var(--font-bebas)', fontSize: '20px',
                  letterSpacing: '.04em',
                  color: ['var(--cyan)', 'var(--blue)', 'var(--violet)'][i],
                }}>
                  {yr.year}
                </div>
                <ul className="space-y-2">
                  {yr.modules.map(m => (
                    <li key={m.name} className="text-[13px] flex items-start gap-2"
                      style={{ color: 'var(--txt2)', lineHeight: 1.55 }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: ['var(--cyan)', 'var(--blue)', 'var(--violet)'][i] }} />
                      {m.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
