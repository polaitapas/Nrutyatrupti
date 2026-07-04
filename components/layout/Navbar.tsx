'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/data/site'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/founder', label: 'Our Guru' },
  { href: '/classes', label: 'Classes' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/events', label: 'Events' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

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
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled ? 'glass' : 'bg-transparent'
        )}
      >
        <nav
          className="wrap flex items-center justify-between py-4 lg:py-5"
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
                className="font-display text-ivory font-light"
                style={{ fontSize: '1.3rem' }}
              >
                Nrutyatrupti
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-gold/60 font-body hidden sm:block">
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
                        ? 'text-gold'
                        : 'text-ivory/75 hover:text-ivory'
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
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-3 px-6"
              aria-label="Enquire on WhatsApp"
            >
              <Phone size={14} aria-hidden="true" />
              Enquire Now
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-ivory/80 hover:text-ivory transition-colors"
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
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center text-sm"
                >
                  <Phone size={15} aria-hidden="true" />
                  Enquire on WhatsApp
                </a>
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
