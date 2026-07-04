'use client'
import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import AnimateIn, { AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'
import { featuredGallery } from '@/lib/data/gallery'

export default function GalleryPreview() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateArrows = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }, [])

  useEffect(() => {
    updateArrows()
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [updateArrows])

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-card]')
    const amount = card ? card.offsetWidth + 16 : 320
    el.scrollBy({ left: amount * direction, behavior: 'smooth' })
  }

  return (
    <section
      className="relative overflow-hidden py-section bg-heritage-light-alt"
      aria-label="Gallery preview — moments in motion"
    >
      <div className="wrap">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <AnimateIn>
              <span className="eyebrow">Moments in Motion</span>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <h2 className="section-title mt-3" style={{ color: 'var(--dark-warm)' }}>
                On the <em>stage</em>
              </h2>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.2}>
            <Link href="/gallery" className="btn-primary group flex-shrink-0 self-start sm:self-auto">
              Full Gallery
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Link>
          </AnimateIn>
        </div>
      </div>

      <AnimateStagger className="wrap" staggerDelay={0.06}>
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {featuredGallery.map((img) => (
            <AnimateStaggerItem key={img.src} variant="scale" className="flex-shrink-0">
              <Link
                href="/gallery"
                data-card
                className="block relative group card-lift-sm w-[240px] sm:w-[300px] snap-start"
                aria-label={`Gallery: ${img.caption}`}
              >
                <div
                  className="aspect-[4/5] relative overflow-hidden"
                  style={{
                    clipPath:
                      'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))',
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 240px, 300px"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-body text-ivory text-sm font-medium leading-snug">{img.caption}</p>
                    {img.year && (
                      <p className="font-body text-gold/70 text-xs mt-1">{img.year}</p>
                    )}
                  </div>
                </div>
              </Link>
            </AnimateStaggerItem>
          ))}
        </div>
      </AnimateStagger>

      <div className="wrap flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => scrollByCard(-1)}
          disabled={!canPrev}
          aria-label="Previous images"
          className="w-11 h-11 flex items-center justify-center border transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:border-maroon hover:text-maroon"
          style={{ borderColor: 'rgba(14,75,65,0.25)', color: 'var(--dark-warm)' }}
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <button
          onClick={() => scrollByCard(1)}
          disabled={!canNext}
          aria-label="Next images"
          className="w-11 h-11 flex items-center justify-center border transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:border-maroon hover:text-maroon"
          style={{ borderColor: 'rgba(14,75,65,0.25)', color: 'var(--dark-warm)' }}
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
