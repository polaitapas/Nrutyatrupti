'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { statsData, achievementTimeline } from '@/lib/data/achievements'
import AnimateIn, { AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'

const timelineHighlights = achievementTimeline
  .flatMap((y) => y.events.map((e) => ({ year: y.year, ...e })))
  .filter((e) => e.featured || e.title === 'Mukteshwar Dance Festival')
  .sort((a, b) => Number(b.year) - Number(a.year))

function AnimatedNumber({ value, suffix }: { value: string; suffix: string }) {
  const [display, setDisplay] = useState('0')
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const isFloat = value.includes('.')

  useEffect(() => {
    if (!inView) return
    const target = parseFloat(value)
    const duration = 1800
    const start = performance.now()
    const raf = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = target * eased
      setDisplay(isFloat ? current.toFixed(1) : Math.round(current).toString())
      if (progress < 1) requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [inView, value, isFloat])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export default function StatsSection({
  showRecognitionTeaser = true,
}: {
  /** The "A Decade of Recognition" highlight strip + "Full Timeline" link.
   *  Disable when this component is mounted on the page that already shows
   *  the full achievements timeline (e.g. /classes), to avoid showing the
   *  same handful of highlighted years twice on one page. */
  showRecognitionTeaser?: boolean
}) {
  return (
    <section
      className="py-section-sm relative bg-heritage-deep"
      aria-label="Academy achievements in numbers"
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,147,58,0.3), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,147,58,0.3), transparent)' }}
        aria-hidden="true"
      />

      <div className="wrap">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {statsData.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 0.1} className="text-center px-4 lg:px-8">
              <div
                className="font-display font-light leading-none"
                style={{
                  fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                  color: 'var(--gold)',
                  letterSpacing: '-0.02em',
                }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 font-body font-medium text-ivory/80 text-sm">
                {stat.label}
              </div>
              <div className="mt-1 font-body text-ivory/35 text-xs">{stat.sub}</div>
            </AnimateIn>
          ))}
        </div>

        {showRecognitionTeaser && (
          <div className="mt-10 pt-8 border-t border-white/10">
            <AnimateIn>
              <p className="text-center text-xs tracking-[0.2em] uppercase font-body text-ivory/40 mb-6">
                A Decade of Recognition
              </p>
            </AnimateIn>
            <AnimateStagger
              className="flex flex-wrap justify-center gap-x-10 gap-y-6"
              staggerDelay={0.05}
            >
              {timelineHighlights.map((e) => (
                <AnimateStaggerItem key={`${e.year}-${e.title}`} variant="fadeUp">
                  <div className="text-center max-w-[9rem]">
                    <div className="font-display text-2xl" style={{ color: 'var(--gold)' }}>
                      {e.year}
                    </div>
                    <div className="mt-1 font-body text-xs leading-snug text-ivory/60">
                      {e.title}
                    </div>
                  </div>
                </AnimateStaggerItem>
              ))}
            </AnimateStagger>
            <AnimateIn delay={0.2}>
              <div className="text-center mt-9">
                <Link
                  href="/classes#achievements"
                  className="font-body text-xs tracking-[0.15em] uppercase text-gold hover:text-gold-light transition-colors inline-flex items-center gap-2"
                >
                  Full Timeline of Achievements
                  <ArrowRight size={12} aria-hidden="true" />
                </Link>
              </div>
            </AnimateIn>
          </div>
        )}
      </div>
    </section>
  )
}
