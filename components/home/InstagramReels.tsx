'use client'
import { useEffect, useRef } from 'react'
import { Instagram, ExternalLink } from 'lucide-react'
import AnimateIn, { AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'
import { siteConfig } from '@/lib/data/site'

export default function InstagramReels() {
  const loaded = useRef(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const loadEmbedScript = () => {
      if (loaded.current) return
      loaded.current = true
      const script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadEmbedScript()
          observer.disconnect()
        }
      },
      { rootMargin: '400px' }
    )
    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-section bg-heritage-light"
      aria-label="Instagram reels from Nrutyatrupti"
    >
      <div className="wrap relative z-10">
        <div className="text-center mb-8">
          <AnimateIn>
            <span className="eyebrow justify-center">Watch Us Perform</span>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h2 className="section-title mt-3" style={{ color: 'var(--dark-warm)' }}>
              Live on <em>Instagram</em>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.25}>
            <p className="lede mt-3 mx-auto text-center">
              A glimpse into the studio and the stage. Tap any reel to watch on Instagram.
            </p>
          </AnimateIn>
        </div>

        <AnimateStagger
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch"
          staggerDelay={0.05}
        >
          {siteConfig.instagramReels.map((reel) => (
            <AnimateStaggerItem key={reel.id} variant="fadeUp">
              <div className="card-lift-sm">
              <div
                className="instagram-embed-square overflow-hidden relative"
                style={{
                  aspectRatio: '1 / 1',
                  border: '1px solid rgba(14,75,65,0.15)',
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
                }}
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink={`${reel.url}?utm_source=ig_embed`}
                  data-instgrm-version="14"
                  style={{
                    background: 'transparent',
                    border: 0,
                    margin: 0,
                    padding: 0,
                    width: '100%',
                    minWidth: '100%',
                  }}
                >
                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 text-sm font-body transition-colors hover:text-maroon"
                    style={{ color: '#6B5443' }}
                  >
                    <Instagram size={20} className="mb-2" style={{ color: 'var(--teal)' }} aria-hidden="true" />
                    {reel.caption}
                  </a>
                </blockquote>
              </div>
              </div>
            </AnimateStaggerItem>
          ))}
        </AnimateStagger>

        <AnimateIn delay={0.4} className="text-center mt-8">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <Instagram size={15} aria-hidden="true" />
            See all reels on Instagram
            <ExternalLink size={13} aria-hidden="true" />
          </a>
        </AnimateIn>
      </div>
    </section>
  )
}
