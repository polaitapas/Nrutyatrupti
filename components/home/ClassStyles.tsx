import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimateIn, { AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'
import { danceStyles } from '@/lib/data/classes'

const preview = danceStyles.slice(0, 3)

export default function ClassStyles() {
  return (
    <section
      className="relative overflow-hidden py-section bg-heritage-ivory"
      aria-label="Dance styles taught at Nrutyatrupti"
    >
      <div className="wrap relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div>
            <AnimateIn>
              <span className="eyebrow"><span className="indic">ଆମେ କ'ଣ ଶିଖାଉ</span> · What We Teach</span>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <h2 className="section-title mt-3" style={{ color: 'var(--dark-warm)' }}>
                The forms of <em>our soil</em>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.25}>
              <p className="lede mt-4">
                Classical and folk traditions of Odisha, taught with equal devotion. A glimpse
                of three — the full curriculum has five, including online and certification tracks.
              </p>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.3}>
            <Link href="/classes" className="btn-primary group flex-shrink-0 self-start lg:self-auto">
              View All Classes
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Link>
          </AnimateIn>
        </div>

        <AnimateStagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.05}
        >
          {preview.map((style) => (
            <AnimateStaggerItem key={style.title} variant="fadeUp">
              <article
                className="p-7 h-full flex flex-col card-lift group"
                style={{
                  border: '1px solid rgba(14,75,65,0.15)',
                  background: 'rgba(250,246,239,0.7)',
                  clipPath:
                    'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase font-body font-medium px-2.5 py-1"
                    style={{
                      color: 'var(--teal)',
                      background: 'rgba(14,75,65,0.08)',
                      border: '1px solid rgba(14,75,65,0.2)',
                    }}
                  >
                    {style.tag}
                  </span>
                  <span className="font-display italic text-xl" style={{ color: 'var(--maroon)', opacity: 0.45 }}>
                    {style.odia}
                  </span>
                </div>

                <h3
                  className="font-display font-light mb-3 group-hover:text-maroon transition-colors"
                  style={{ fontSize: '1.5rem', color: 'var(--dark-warm)' }}
                >
                  {style.title}
                </h3>
                <p className="font-body text-sm leading-relaxed flex-1" style={{ color: 'var(--brown)' }}>
                  {style.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {style.levels.map((level) => (
                    <span
                      key={level}
                      className="text-[10px] tracking-wider uppercase font-body px-2 py-1"
                      style={{ color: 'var(--brown-muted)', border: '1px solid rgba(139,115,85,0.25)' }}
                    >
                      {level}
                    </span>
                  ))}
                </div>
              </article>
            </AnimateStaggerItem>
          ))}
        </AnimateStagger>
      </div>
    </section>
  )
}
