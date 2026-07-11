'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/data/site'

const slides = [
  {
    src: '/images/nrutyatrupti-solo-dynamic-pose.jpg',
    alt: 'Solo Odissi dancer in dynamic pose on stage — Nrutyatrupti',
    position: 'center top',
  },
  {
    src: '/images/DSC_0129.JPG.jpeg',
    alt: 'Solo Odissi dancer framed in a temple archway — Nrutyatrupti',
    position: 'center top',
  },
  {
    src: '/images/embedded-1-odissi-dancer-of-nrutya-trupti-performing-in-a-bhu.jpg',
    alt: 'Solo Odissi dancer performing before a temple mural — Nrutyatrupti',
    position: 'center top',
  },
  {
    src: '/images/0S6A7469.JPG.jpeg',
    alt: 'Solo Odissi dancer under dramatic stage lighting — Nrutyatrupti',
    position: 'center top',
  },
]

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? '100%' : '-100%',
  }),
  center: {
    x: 0,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? '-100%' : '100%',
  }),
}

const transition = {
  x: { duration: 0.85, ease: [0.65, 0, 0.35, 1] as const },
}

export default function Hero() {
  const [[current, direction], setSlide] = useState([0, 1])

  const advance = useCallback(() => {
    setSlide(([c]) => [(c + 1) % slides.length, 1])
  }, [])

  const goTo = useCallback((idx: number) => {
    setSlide(([c]) => [idx, idx > c ? 1 : -1])
  }, [])

  useEffect(() => {
    const id = setInterval(advance, 6000)
    return () => clearInterval(id)
  }, [advance])

  return (
    <section
      className="relative overflow-hidden bg-heritage-light pt-24 pb-14 lg:pt-28 lg:pb-16"
      aria-label="Hero — Nrutyatrupti Odissi Dance Academy"
    >
      <div className="wrap relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              Bhubaneswar, Odisha · Est. 2021
            </motion.span>

            <motion.h1
              className="font-display font-light mt-4"
              style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)',
                color: 'var(--dark-warm)',
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Where Tradition
              <br />
              <em className="not-italic" style={{ color: 'var(--maroon)' }}>
                Meets Grace
              </em>
              <span className="block font-display italic mt-2" style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', color: 'var(--gold)', opacity: 0.7 }}>
                ଯେଉଁଠି ପରମ୍ପରା ଲାବଣ୍ୟ ସହ ମିଳିତ ହୁଏ
              </span>
            </motion.h1>

            <motion.p
              className="mt-5 font-display italic"
              style={{ color: '#8B7355', fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              यतो हस्तस्ततो दृष्टिः — where the hand goes, the eye follows.
            </motion.p>

            <motion.p
              className="mt-5 font-body leading-relaxed max-w-md"
              style={{ color: '#5C4A35', fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)' }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              Every step, a story. Every student, an artist. Learn the sacred classical
              dance of Odisha under devoted gurus — from your very first chauka to the
              concert stage.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
            >
              <Link href="/classes" className="btn-primary group">
                Explore Classes
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Link>
              <Link href="/about" className="btn-outline">
                Meet Our Gurus
              </Link>
            </motion.div>

            <motion.a
              href={siteConfig.google.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="google-review-badge inline-flex items-center gap-3 mt-6 px-5 py-2.5 rounded-full"
              style={{ border: '1px solid rgba(201,147,58,0.4)', background: 'rgba(201,147,58,0.08)' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.04, transition: { type: 'spring', stiffness: 400, damping: 22 } }}
              whileTap={{ scale: 0.97, transition: { type: 'spring', stiffness: 500, damping: 25 } }}
              aria-label={`Rated ${siteConfig.google.rating} — Read ${siteConfig.google.reviewCount} Google Reviews`}
            >
              <span className="font-display text-base leading-none" style={{ color: 'var(--dark-warm)' }}>
                {siteConfig.google.rating}★
              </span>
              <span className="text-xs font-body" style={{ color: '#6B5443' }}>
                {siteConfig.google.reviewCount} Google Reviews
              </span>
            </motion.a>
          </div>

          {/* Image carousel — enlarged portrait frame suited to full-length dance photography */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-2xl">
            <div
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              style={{ aspectRatio: '4 / 5', background: '#0A0A0A' }}
            >
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={transition}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[current].src}
                    alt={slides[current].alt}
                    fill
                    className="object-cover"
                    style={{ objectPosition: slides[current].position }}
                    priority={current === 0}
                    sizes="(max-width: 1024px) 90vw, 640px"
                    quality={85}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>

            <div
              className="flex gap-2 justify-center mt-7"
              role="tablist"
              aria-label="Slide navigation"
            >
              {slides.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className="flex items-center justify-center cursor-pointer"
                  style={{ minWidth: 24, minHeight: 24 }}
                >
                  <span
                    className={`block h-[3px] rounded-full transition-all duration-500 ${
                      i === current ? 'w-9 bg-maroon' : 'w-4 bg-maroon/20 hover:bg-maroon/40'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
