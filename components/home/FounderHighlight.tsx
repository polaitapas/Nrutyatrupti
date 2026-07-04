import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, Star } from 'lucide-react'
import AnimateIn from '@/components/ui/AnimateIn'
import { founderData } from '@/lib/data/site'

export default function FounderHighlight() {
  return (
    <section
      className="relative overflow-hidden py-section bg-heritage-ivory"
      aria-label="Our Founder and Guru"
    >
      <div className="wrap relative z-10">
        <div className="text-center mb-16">
          <AnimateIn>
            <span className="eyebrow">
              Guided by Masters
            </span>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h2 className="section-title mt-3" style={{ color: 'var(--dark-warm)' }}>
              The <em>Guru</em>
            </h2>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <AnimateIn variant="slideRight" className="lg:order-2">
            <div className="relative max-w-md mx-auto">
              <div
                className="relative overflow-hidden"
                style={{
                  clipPath:
                    'polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 32px 100%, 0 calc(100% - 32px))',
                }}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={founderData.image}
                    alt={founderData.imageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(13,9,6,0.7) 0%, transparent 60%)',
                    }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div
                    className="font-display text-ivory text-2xl font-light"
                  >
                    {founderData.name}
                  </div>
                  <div className="text-xs tracking-[0.2em] uppercase font-body mt-1" style={{ color: 'var(--gold)' }}>
                    {founderData.title}
                  </div>
                </div>
              </div>
              <span
                className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2"
                style={{ borderColor: 'var(--gold)', opacity: 0.5 }}
                aria-hidden="true"
              />
            </div>
          </AnimateIn>

          <div className="lg:order-1">
            <AnimateIn delay={0.1}>
              <span className="eyebrow">Founder & Mentor</span>
              <h3 className="font-display font-light mt-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--dark-warm)', lineHeight: 1.1 }}>
                {founderData.name}
              </h3>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <p className="mt-5 font-body leading-relaxed text-base" style={{ color: '#6B5443' }}>
                {founderData.shortBio}
              </p>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <ul className="mt-7 space-y-3" role="list">
                {founderData.credentials.map((cred) => (
                  <li key={cred} className="flex items-start gap-3">
                    <Award
                      size={14}
                      className="mt-1 flex-shrink-0"
                      style={{ color: 'var(--gold)' }}
                      aria-hidden="true"
                    />
                    <span className="font-body text-sm leading-relaxed" style={{ color: '#5C4A35' }}>
                      {cred}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimateIn>

            <AnimateIn delay={0.4}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-9">
                {founderData.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="text-center p-4 card-lift-sm"
                    style={{
                      border: '1px solid rgba(201,147,58,0.2)',
                      background: 'rgba(201,147,58,0.04)',
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)',
                    }}
                  >
                    <div
                      className="font-display font-light leading-none"
                      style={{ fontSize: '2rem', color: 'var(--gold)' }}
                    >
                      {h.label}
                    </div>
                    <div className="text-xs font-body mt-1 leading-tight" style={{ color: '#8B7355' }}>
                      {h.description}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn delay={0.5}>
              <div className="mt-9 flex items-center gap-2 mb-6">
                <Star size={12} className="text-gold fill-gold" aria-hidden="true" />
                <Star size={12} className="text-gold fill-gold" aria-hidden="true" />
                <Star size={12} className="text-gold fill-gold" aria-hidden="true" />
                <Star size={12} className="text-gold fill-gold" aria-hidden="true" />
                <Star size={12} className="text-gold fill-gold" aria-hidden="true" />
                <span className="text-xs font-body ml-1" style={{ color: '#8B7355' }}>
                  On stage since 2007 · 50+ national performances
                </span>
              </div>
              <Link href="/founder" className="btn-primary group">
                Read Full Biography
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Link>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  )
}
