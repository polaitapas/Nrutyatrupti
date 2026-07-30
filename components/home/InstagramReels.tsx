import { Instagram, ExternalLink, Play } from 'lucide-react'
import AnimateIn, { AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'
import { siteConfig } from '@/lib/data/site'

export default function InstagramReels() {
  return (
    <section
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
                className="overflow-hidden relative"
                style={{
                  aspectRatio: '1 / 1',
                  border: '1px solid rgba(14,75,65,0.15)',
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
                }}
              >
                <a
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/reel flex flex-col items-center justify-center gap-3 w-full h-full p-6 text-center relative overflow-hidden"
                  aria-label={`Watch on Instagram: ${reel.caption}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={reel.poster}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/reel:scale-105"
                    aria-hidden="true"
                  />
                  {/* Legibility scrim over the poster */}
                  <span
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(10,51,44,0.85) 0%, rgba(10,51,44,0.45) 55%, rgba(10,51,44,0.35) 100%)' }}
                    aria-hidden="true"
                  />
                  <span
                    className="relative w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover/reel:scale-110"
                    style={{ background: 'var(--gold)', boxShadow: '0 4px 20px rgba(0,0,0,0.35)' }}
                    aria-hidden="true"
                  >
                    <Play size={20} className="text-dark ml-0.5" fill="currentColor" />
                  </span>
                  <span className="relative text-sm font-body text-ivory">{reel.caption}</span>
                  <span
                    className="relative inline-flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase font-body text-ivory/80"
                  >
                    <Instagram size={12} aria-hidden="true" />
                    Watch on Instagram
                  </span>
                </a>
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
