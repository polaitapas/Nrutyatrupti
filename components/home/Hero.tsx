'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Landscape-only photos: portrait shots get decapitated by object-cover in a
// full-viewport frame. objectPosition keeps headdresses in frame on all ratios.
const slides = [
  {
    src: '/images/0S6A7298.JPG.jpeg',
    alt: 'Odissi trio in namaskar pose before the illuminated temple — Nrutyatrupti',
    position: 'center 18%',
  },
  {
    src: '/images/0S6A7308.JPG.jpeg',
    alt: 'Full Odissi ensemble against the Konark temple backdrop — Nrutyatrupti',
    position: 'center 22%',
  },
  {
    src: '/images/0S6A7384.JPG.jpeg',
    alt: 'Expressive Odissi abhinaya duet on the festival stage — Nrutyatrupti',
    position: 'center 25%',
  },
  {
    src: '/images/0S6A7489.JPG.jpeg',
    alt: 'Dynamic Odissi ensemble performance at the Mukteshwar festival — Nrutyatrupti',
    position: 'center 30%',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [entered, setEntered] = useState(false)

  const advance = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const id = setInterval(advance, 6000)
    return () => clearInterval(id)
  }, [advance])

  return (
    <section
      className="relative h-[100svh] min-h-[560px] max-h-[1000px] overflow-hidden"
      style={{ background: 'var(--dark)' }}
      aria-label="Hero — Nrutyatrupti Odissi Dance Academy"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        >
          <Image
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            className="object-cover"
            style={{ objectPosition: slides[current].position }}
            priority={current === 0}
            sizes="100vw"
            quality={80}
          />
        </motion.div>
      </AnimatePresence>

      {/* Scrim: strong on the left text column, lighter on the right so the
          photograph stays visible — text never fights the image. */}
      <div
        className="absolute inset-0 z-[1]"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to right, rgba(13,9,6,0.88) 0%, rgba(13,9,6,0.72) 34%, rgba(13,9,6,0.28) 62%, rgba(13,9,6,0.15) 100%)',
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 z-[1]"
        aria-hidden="true"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(13,9,6,0.9))' }}
      />

      <div className="relative z-10 h-full flex items-center pt-16">
        <div className="wrap w-full">
          <div className="max-w-2xl">
            <motion.div
              className="flex items-center gap-3 mb-7"
              initial={{ opacity: 0, y: 16 }}
              animate={entered ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="block w-8 h-px bg-gold" aria-hidden="true" />
              <span className="font-body text-[11px] tracking-[0.28em] uppercase text-gold">
                Bhubaneswar, Odisha · Est. 2021
              </span>
            </motion.div>

            <motion.h1
              className="font-display font-light text-ivory"
              style={{
                fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1.08,
              }}
              initial={{ opacity: 0, y: 28 }}
              animate={entered ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Where Tradition
              <br />
              <em className="not-italic" style={{ color: 'var(--gold)' }}>
                Meets Grace
              </em>
            </motion.h1>

            <motion.p
              className="mt-6 font-body text-ivory/80 leading-relaxed max-w-md"
              style={{ fontSize: 'clamp(1rem, 1.4vw, 1.125rem)' }}
              initial={{ opacity: 0, y: 18 }}
              animate={entered ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              Learn Odissi — the sacred classical dance of Odisha — under the devoted
              guidance of Guru Truptismita Tarini.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={entered ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.75 }}
            >
              <Link href="/classes" className="btn-primary group">
                Explore Classes
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Link>
              <Link href="/founder" className="btn-outline-light">
                Meet the Guru
              </Link>
            </motion.div>

            <motion.div
              className="mt-12 inline-flex flex-wrap items-center gap-x-6 gap-y-2 border-l-2 pl-5 py-1"
              style={{ borderColor: 'rgba(201,147,58,0.5)' }}
              initial={{ opacity: 0 }}
              animate={entered ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.95 }}
            >
              {['B-Grade Doordarshan Artist', 'CCRT Senior Scholar', '20 Years of Odissi'].map(
                (badge) => (
                  <span key={badge} className="font-body text-[13px] text-ivory/70">
                    {badge}
                  </span>
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex gap-2 z-20"
        role="tablist"
        aria-label="Slide navigation"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className="py-2 px-1 cursor-pointer"
          >
            <span
              className={`block h-[3px] rounded-full transition-all duration-500 ${
                i === current ? 'w-9 bg-gold' : 'w-4 bg-ivory/40 hover:bg-ivory/70'
              }`}
            />
          </button>
        ))}
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-7 right-8 hidden lg:flex flex-col items-center gap-2 text-ivory/50 hover:text-gold transition-colors z-20"
        aria-label="Scroll to content"
        initial={{ opacity: 0 }}
        animate={entered ? { opacity: 1 } : {}}
        transition={{ delay: 1.3, duration: 0.7 }}
      >
        <span
          className="text-[9px] tracking-[0.25em] uppercase font-body"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
        <ChevronDown size={14} className="animate-bounce" aria-hidden="true" />
      </motion.a>
    </section>
  )
}
