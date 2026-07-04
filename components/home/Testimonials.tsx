import { Star, Quote } from 'lucide-react'
import AnimateIn, { AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'
import { testimonials } from '@/lib/data/testimonials'
import { siteConfig } from '@/lib/data/site'

export default function Testimonials() {
  return (
    <section
      className="relative overflow-hidden py-section bg-heritage-light"
      aria-label="What students and parents say about Nrutyatrupti"
    >
      <div className="wrap relative z-10">
        <div className="text-center mb-14">
          <AnimateIn>
            <span className="eyebrow justify-center">In Their Words</span>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h2 className="section-title mt-3" style={{ color: 'var(--dark-warm)' }}>
              What our <em>families say</em>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.25}>
            <a
              href={siteConfig.google.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-5 px-5 py-2.5 rounded-full text-sm font-body transition-colors"
              style={{ border: '1px solid rgba(201,147,58,0.4)', background: 'rgba(201,147,58,0.08)' }}
            >
              <span className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="text-gold fill-gold" aria-hidden="true" />
                ))}
              </span>
              <span style={{ color: '#6B5443' }}>
                <span className="font-medium" style={{ color: 'var(--dark-warm)' }}>{siteConfig.google.rating}</span> from{' '}
                {siteConfig.google.reviewCount} Google reviews
              </span>
            </a>
          </AnimateIn>
        </div>

        <AnimateStagger
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {testimonials.map((t) => (
            <AnimateStaggerItem key={t.name} variant="fadeUp">
              <figure
                className="flex flex-col p-8 h-full relative card-lift"
                style={{
                  background: 'rgba(250,246,239,0.75)',
                  border: '1px solid rgba(14,75,65,0.15)',
                  clipPath:
                    'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
                }}
              >
                <Quote
                  size={28}
                  style={{ color: 'rgba(166,48,59,0.25)' }}
                  className="mb-4"
                  aria-hidden="true"
                />
                <blockquote className="flex-1 font-body leading-relaxed text-[0.95rem] italic" style={{ color: '#5C4A35' }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex gap-0.5 mt-6 mb-4" aria-label={`${t.stars} stars`}>
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={12} className="text-gold fill-gold" aria-hidden="true" />
                  ))}
                </div>
                <figcaption>
                  <div className="font-body font-medium text-sm" style={{ color: 'var(--dark-warm)' }}>{t.name}</div>
                  <div className="text-xs font-body mt-0.5" style={{ color: 'var(--teal)' }}>
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            </AnimateStaggerItem>
          ))}
        </AnimateStagger>
      </div>
    </section>
  )
}
