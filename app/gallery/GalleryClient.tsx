'use client'
import { useState, useCallback, useEffect, useRef } from 'react'
import Image from 'next/image'
import { X, Download, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimateIn, { AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'
import { galleryImages, type GalleryCategory } from '@/lib/data/gallery'
import { useScrollLock } from '@/lib/overlayLock'

type Bucket = 'all' | 'class' | 'summer' | 'stage' | 'recognition' | 'founder'

const categories: { value: Bucket; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'class', label: 'Class' },
  { value: 'summer', label: 'Summer Classes' },
  { value: 'stage', label: 'On Stage' },
  { value: 'recognition', label: 'Recognition' },
  { value: 'founder', label: 'Founder & Guru' },
]

const bucketOf = (category: GalleryCategory): Bucket => {
  switch (category) {
    case 'students':
      return 'class'
    case 'summer':
      return 'summer'
    case 'performance':
    case 'folk':
      return 'stage'
    case 'events':
      return 'recognition'
    case 'guru':
      return 'founder'
    default:
      return 'stage'
  }
}

export default function GalleryClient() {
  const [active, setActive] = useState<Bucket>('all')
  const [lightbox, setLightbox] = useState<number | null>(null)
  const lightboxRef = useRef<HTMLDivElement>(null)
  const lastTriggerRef = useRef<HTMLElement | null>(null)

  // Cursor-following illumination on gallery tiles (desktop / fine pointer only).
  const [finePointer, setFinePointer] = useState(false)
  const glowRaf = useRef<number | null>(null)
  const glowPending = useRef<{ el: HTMLElement; cx: number; cy: number } | null>(null)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setFinePointer(mq.matches && !reduce.matches)
    update()
    mq.addEventListener('change', update)
    reduce.addEventListener('change', update)
    return () => {
      mq.removeEventListener('change', update)
      reduce.removeEventListener('change', update)
    }
  }, [])

  const handleTileMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!finePointer) return
      glowPending.current = { el: e.currentTarget, cx: e.clientX, cy: e.clientY }
      if (glowRaf.current == null) {
        glowRaf.current = requestAnimationFrame(() => {
          const p = glowPending.current
          if (p) {
            // One layout read + write per frame, kept off the mousemove path.
            const r = p.el.getBoundingClientRect()
            p.el.style.setProperty('--gx', `${((p.cx - r.left) / r.width) * 100}%`)
            p.el.style.setProperty('--gy', `${((p.cy - r.top) / r.height) * 100}%`)
          }
          glowRaf.current = null
        })
      }
    },
    [finePointer]
  )

  useEffect(() => () => {
    if (glowRaf.current != null) cancelAnimationFrame(glowRaf.current)
  }, [])

  const filtered = active === 'all' ? galleryImages : galleryImages.filter((g) => bucketOf(g.category) === active)

  useScrollLock(lightbox !== null)

  const close = useCallback(() => setLightbox(null), [])
  const prev = useCallback(() => setLightbox((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null)), [filtered.length])
  const next = useCallback(() => setLightbox((i) => (i !== null ? (i + 1) % filtered.length : null)), [filtered.length])

  const openLightbox = (index: number) => {
    lastTriggerRef.current = document.activeElement as HTMLElement
    setLightbox(index)
  }

  useEffect(() => {
    if (lightbox === null) {
      lastTriggerRef.current?.focus()
      return
    }

    const focusables = () =>
      Array.from(
        lightboxRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ) ?? []
      )

    const raf = requestAnimationFrame(() => focusables()[0]?.focus())

    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
      } else if (e.key === 'ArrowLeft') {
        prev()
      } else if (e.key === 'ArrowRight') {
        next()
      } else if (e.key === 'Tab') {
        const els = focusables()
        if (els.length === 0) return
        const first = els[0]
        const last = els[els.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', handler)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('keydown', handler)
    }
  }, [lightbox, close, prev, next])

  return (
    <>
      <section
        className="pt-40 pb-12 relative bg-heritage-deep"
        aria-label="Gallery header"
      >
        <div className="wrap relative z-10">
          <AnimateIn>
            <h1
              className="font-display font-light text-ivory"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', letterSpacing: '-0.02em', lineHeight: 1 }}
            >
              Visit &amp; <em style={{ color: 'var(--gold)' }}>Explore</em>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="lede mt-4 text-ivory/55">
              From the studio floor to national stages — every image a moment of devotion.
              Enquire below to begin your own.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section
        className="py-9 bg-heritage-light"
        aria-label="Gallery images"
      >
        <div className="wrap relative z-10">
          <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter gallery">
            {categories.map((cat) => (
              <button
                key={cat.value}
                role="tab"
                aria-selected={active === cat.value}
                onClick={() => setActive(cat.value)}
                className="px-5 py-2 text-sm font-body transition-all duration-200"
                style={
                  active === cat.value
                    ? { background: 'var(--maroon)', color: 'var(--ivory)', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }
                    : { border: '1px solid rgba(14,75,65,0.25)', color: 'var(--teal)', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }
                }
              >
                {cat.label}
              </button>
            ))}
          </div>

          <AnimateStagger
            key={active}
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
            staggerDelay={0.04}
          >
            {filtered.map((img, i) => (
              <AnimateStaggerItem key={img.src} variant="scale">
                <button
                  className="block w-full mb-4 relative overflow-hidden group cursor-pointer text-left card-lift-sm"
                  onClick={() => openLightbox(i)}
                  onMouseMove={handleTileMove}
                  aria-label={`Open photo: ${img.caption}`}
                  style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)' }}
                >
                  <div className="relative">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      style={{ height: 'auto', width: '100%' }}
                      className="transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="gallery-tile__glow" aria-hidden="true" />
                    <div className="gallery-tile__caption">
                      <span className="font-body text-xs tracking-wide text-ivory">{img.caption}</span>
                    </div>
                  </div>
                </button>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            ref={lightboxRef}
            role="dialog"
            aria-modal="true"
            aria-label={filtered[lightbox]?.caption ? `Photo: ${filtered[lightbox].caption}` : 'Photo viewer'}
            className="fixed inset-0 z-[200] flex items-center justify-center"
            style={{ background: 'rgba(13,9,6,0.95)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              className="absolute top-4 right-4 p-2 text-ivory/60 hover:text-ivory transition-colors z-10"
              onClick={close}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-ivory/60 hover:text-ivory transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-ivory/60 hover:text-ivory transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
            <motion.div
              key={lightbox}
              className="relative max-w-4xl max-h-[85vh] mx-4"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                width={filtered[lightbox].width}
                height={filtered[lightbox].height}
                className="object-contain max-h-[75vh] w-auto mx-auto"
                style={{ maxHeight: '75vh' }}
              />
              <div className="mt-4 flex items-center justify-end">
                <a
                  href={filtered[lightbox].src}
                  download
                  className="flex items-center gap-2 px-4 py-2 text-xs font-body transition-colors text-ivory/50 hover:text-ivory border border-white/10 hover:border-white/20"
                  aria-label="Download this image"
                >
                  <Download size={13} aria-hidden="true" />
                  Download
                </a>
              </div>
              <p className="mt-3 text-center text-xs font-body text-ivory/25">
                {lightbox + 1} / {filtered.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
