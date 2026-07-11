import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Home, Images } from 'lucide-react'
import AnimateIn from '@/components/ui/AnimateIn'
import TempleBorder from '@/components/ui/TempleBorder'

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
}

const wayfinding = [
  { href: '/about', label: 'Our Story & Gurus' },
  { href: '/classes', label: 'Classes & Achievements' },
  { href: '/gallery', label: 'Gallery & Contact' },
]

export default function NotFound() {
  return (
    <section
      className="relative overflow-hidden bg-heritage-deep min-h-dvh flex flex-col pt-24 lg:pt-28"
      aria-label="Page not found"
    >
      <TempleBorder variant="gold" position="top" />

      <div className="wrap relative z-10 flex-1 flex flex-col items-center justify-center text-center py-16">
        <AnimateIn variant="fadeIn">
          <span className="eyebrow eyebrow-gold justify-center">यतो हस्तस्ततो दृष्टिः</span>
        </AnimateIn>

        <AnimateIn delay={0.1} variant="scale">
          <div
            className="font-display font-light mt-6 leading-none"
            style={{
              fontSize: 'clamp(5rem, 16vw, 11rem)',
              letterSpacing: '-0.03em',
              background: 'linear-gradient(180deg, var(--gold-light) 0%, var(--gold) 55%, var(--gold-dark) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            404
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <h1
            className="font-display font-light text-ivory mt-2"
            style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.15 }}
          >
            This step isn&apos;t part of
            <br />
            <em className="not-italic" style={{ color: 'var(--gold)' }}>the recital</em>
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <p className="lede mt-5 mx-auto text-center text-ivory/55 max-w-md">
            The page you&apos;re looking for has left the stage — moved, renamed, or never
            existed. Let&apos;s find your way back to the performance.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.4}>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="btn-primary group">
              <Home size={15} aria-hidden="true" />
              Return Home
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Link>
            <Link href="/gallery" className="btn-outline-light group">
              <Images size={15} aria-hidden="true" />
              Visit the Gallery
            </Link>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.5}>
          <nav aria-label="Other pages" className="mt-14">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3" role="list">
              {wayfinding.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-xs tracking-[0.15em] uppercase text-ivory/40 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </AnimateIn>
      </div>

      <TempleBorder variant="gold" position="bottom" />
    </section>
  )
}
