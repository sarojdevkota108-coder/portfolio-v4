'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SKILL_GROUPS, ACADEMIC_MODULES } from '@/data/portfolio'
import { COLOR_MAP } from '@/lib/utils'
import {
  IconCode, IconNetwork, IconBuildingSkyscraper,
} from '@tabler/icons-react'

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

export function About() {
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

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

        {/* ── SKILL GROUPS ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-12">
          <div className="section-eyebrow">Skill Acquisition</div>
          <h3 className="section-title">
            Skills I’ve acquired across web, networking, and interior design.
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
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
