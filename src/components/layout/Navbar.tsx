'use client'
import { useEffect, useState } from 'react'
import { NAV_LINKS, SOCIALS } from '@/data/portfolio'
import { cn } from '@/lib/utils'
import { IconMenu2, IconX, IconBrandGithub } from '@tabler/icons-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)
  const [active,   setActive]   = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight active section on scroll
  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive('#' + e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[rgba(4,4,10,0.90)] backdrop-blur-2xl border-b border-white/5'
          : 'bg-transparent'
      )}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Brand */}
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-3"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black text-white"
              style={{
                background: 'linear-gradient(135deg,#4f7fff,#00d4ff)',
                boxShadow: '0 0 20px rgba(0,212,255,0.35)',
              }}
            >
              SD
            </div>
            <span className="hidden sm:block text-sm font-bold tracking-tight"
              style={{ color: 'var(--txt)', fontFamily: 'var(--font-jakarta)' }}>
              Saroj Devkota
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(l => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className={cn(
                  'px-3 py-2 rounded-lg text-[12px] font-medium transition-all duration-200 relative',
                  active === l.href
                    ? 'text-white'
                    : 'text-[var(--txt2)] hover:text-white hover:bg-white/5'
                )}
              >
                {active === l.href && (
                  <span
                    className="absolute inset-0 rounded-lg"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </button>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-2">
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg text-[12px] text-[var(--txt2)] hover:text-white hover:bg-white/5 transition-all"
            >
              <IconBrandGithub size={14} />
            </a>
            <button
              onClick={() => scrollTo('#contact')}
              className="hidden md:flex btn-primary text-xs px-4 py-2"
            >
              Get in touch
            </button>
            <button
              className="md:hidden p-2 rounded-lg text-[var(--txt2)] hover:text-white transition"
              onClick={() => setOpen(!open)}
            >
              {open ? <IconX size={20} /> : <IconMenu2 size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed inset-0 z-40 pt-16"
          style={{ background: 'rgba(4,4,10,0.97)', backdropFilter: 'blur(20px)' }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-6">
            {NAV_LINKS.map(l => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-2xl font-bold text-[var(--txt2)] hover:text-white transition"
                style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '.08em' }}
              >
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo('#contact')} className="btn-primary mt-4">
              Get in touch
            </button>
          </div>
        </div>
      )}
    </>
  )
}
