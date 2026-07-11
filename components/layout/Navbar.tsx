'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/data/site'
import { useEnquiry } from '@/components/ui/EnquiryModal'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/classes', label: 'Classes' },
  { href: '/gallery', label: 'Gallery' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { open: openEnquiry } = useEnquiry()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[51] origin-left pointer-events-none"
        style={{ scaleX: progress, background: 'linear-gradient(90deg, var(--gold), var(--gold-light))' }}
        aria-hidden="true"
      />
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-shadow duration-500 glass-light',
          scrolled && 'shadow-sm'
        )}
      >
        <nav
          className="nav-wrap flex items-center justify-between py-4 lg:py-5"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Nrutyatrupti — home"
          >
            <div className="relative w-16 h-16 opacity-90 group-hover:opacity-100 transition-opacity flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Nrutyatrupti logo"
                fill
                sizes="64px"
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div
                className="font-display font-light"
                style={{ fontSize: '1.3rem', color: 'var(--dark-warm)' }}
              >
                Nrutyatrupti
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-gold-dark/70 font-body hidden sm:block">
                Odissi Dance Academy
              </div>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'relative px-3 py-2 text-sm font-body transition-colors duration-200',
                      active
                        ? 'text-maroon'
                        : 'text-dark-warm/70 hover:text-dark-warm'
                    )}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute bottom-0 left-3 right-3 h-px bg-gold"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={openEnquiry}
              className="btn-primary text-xs py-3 px-6"
              aria-label="Open enquiry form"
            >
              <Phone size={14} aria-hidden="true" />
              Enquire Now
            </button>
          </div>

          <button
            className="lg:hidden p-2 text-dark-warm/80 hover:text-dark-warm transition-colors"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-[60] bg-dark/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="drawer"
              className="fixed top-0 right-0 bottom-0 z-[70] w-[85vw] max-w-sm flex flex-col"
              style={{ background: 'var(--teal-deep)' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="font-display text-ivory text-lg">Menu</span>
                <button
                  className="p-2 text-ivory/60 hover:text-ivory transition-colors"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-6">
                <ul className="space-y-1" role="list">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          'flex items-center gap-3 py-3 px-4 font-body text-base rounded transition-colors',
                          pathname === link.href
                            ? 'text-gold bg-gold/10'
                            : 'text-ivory/70 hover:text-ivory hover:bg-white/5'
                        )}
                      >
                        {pathname === link.href && (
                          <span className="w-1 h-4 bg-gold rounded-full flex-shrink-0" />
                        )}
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div className="p-6 border-t border-white/10 space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false)
                    openEnquiry()
                  }}
                  className="btn-primary w-full justify-center text-sm"
                >
                  <Phone size={15} aria-hidden="true" />
                  Enquire Now
                </button>
                <p className="text-center text-xs text-ivory/40 font-body">
                  {siteConfig.address.city}, {siteConfig.address.state}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
