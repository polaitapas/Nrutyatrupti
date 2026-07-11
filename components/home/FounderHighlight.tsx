import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, Star } from 'lucide-react'
import AnimateIn from '@/components/ui/AnimateIn'
import { founderData } from '@/lib/data/site'
import { achievementTimeline } from '@/lib/data/achievements'

const findEvent = (year: string, title?: string) => {
  const y = achievementTimeline.find((t) => t.year === year)
  const event = title ? y?.events.find((e) => e.title === title) : y?.events[0]
  return event?.title ?? ''
}

const guruMilestones = [
  { year: '2007', title: 'First stepped onto the stage' },
  { year: '2010', title: findEvent('2010') },
  { year: '2018', title: findEvent('2018') },
  { year: '2025', title: findEvent('2025', 'Guru Shree Samman') },
]

export default function FounderHighlight() {
  return (
    <section
      className="relative overflow-hidden py-section bg-heritage-ivory"
      aria-label="Our Founder and Mentor"
    >
      <div className="wrap relative z-10">
        <div className="text-center mb-10">
          <AnimateIn>
            <span className="eyebrow">
              <span className="indic">गुरु परम्परा</span> · Guided by Masters
            </span>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h2 className="section-title mt-3" style={{ color: 'var(--dark-warm)' }}>
              The <em>Founder</em>
            </h2>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
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

            <AnimateIn delay={0.25}>
              <blockquote
                className="mt-7 pl-5 border-l-2"
                style={{ borderColor: 'var(--gold)' }}
              >
                <p
                  className="font-display italic font-light leading-snug"
                  style={{ fontSize: 'clamp(1.15rem, 2vw, 1.5rem)', color: 'var(--maroon)' }}
                >
                  &ldquo;Odissi is not something you perform. It is something you become —
                  one mudra, one breath, one guru at a time.&rdquo;
                </p>
                <span className="mt-2 block text-xs tracking-[0.15em] uppercase font-body" style={{ color: '#8B7355' }}>
                  Guiding Philosophy
                </span>
              </blockquote>
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

            <AnimateIn delay={0.45}>
              <div className="mt-9 relative pl-1">
                <div
                  className="absolute left-1 top-2 right-0 h-px hidden sm:block"
                  style={{ background: 'rgba(201,147,58,0.25)' }}
                  aria-hidden="true"
                />
                <ol className="flex flex-wrap gap-x-8 gap-y-4" role="list">
                  {guruMilestones.map((m) => (
                    <li key={m.year} className="relative min-w-[7rem]">
                      <div className="flex items-center gap-2 sm:mb-1.5">
                        <span
                          className="hidden sm:block w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: 'var(--gold)' }}
                          aria-hidden="true"
                        />
                        <span className="font-display text-lg" style={{ color: 'var(--gold-dark)' }}>
                          {m.year}
                        </span>
                      </div>
                      <span className="font-body text-xs leading-snug" style={{ color: '#6B5443' }}>
                        {m.title}
                      </span>
                    </li>
                  ))}
                </ol>
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
              <Link href="/about" className="btn-primary group">
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
