import { Metadata } from 'next'
import { Clock, Users, BookOpen, Globe, ChevronDown } from 'lucide-react'
import AnimateIn, { AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'
import ContactCTA from '@/components/home/ContactCTA'
import { danceStyles, batches, faqs } from '@/lib/data/classes'

export const metadata: Metadata = {
  title: 'Dance Classes | Odissi, Folk & Online',
  description:
    'Join Odissi classical, Sambalpuri folk, Odia folk, fusion, and online dance classes at Nrutyatrupti, Bhubaneswar. Classes for children, teens, and adults. Free trial class available.',
}

export default function ClassesPage() {
  return (
    <>
      <section
        className="relative pt-32 pb-20 overflow-hidden bg-heritage-deep-alt"
        aria-label="Classes header"
      >
        <div className="wrap relative z-10">
          <AnimateIn>
            <span className="eyebrow eyebrow-gold">The Curriculum</span>
            <h1
              className="font-display font-light text-ivory mt-4 leading-none"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', letterSpacing: '-0.02em' }}
            >
              Our <em style={{ color: 'var(--gold)' }}>Classes</em>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="lede mt-4 text-ivory/55">
              Six forms. Four batches. Every age, every level. In-studio in Kalinganagar,
              Bhubaneswar — and live online for students anywhere in the world.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section
        className="py-section bg-heritage-ivory"
        aria-label="Dance styles"
      >
        <div className="wrap relative z-10">
          <AnimateIn>
            <span className="eyebrow">What We Teach</span>
            <h2 className="section-title mt-3" style={{ color: 'var(--dark-warm)' }}>
              The forms of <em>our soil</em>
            </h2>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12" staggerDelay={0.08}>
            {danceStyles.map((style) => (
              <AnimateStaggerItem key={style.title}>
                <article
                  className="p-8 h-full flex flex-col border card-lift"
                  style={{
                    borderColor: 'rgba(14,75,65,0.15)',
                    background: 'rgba(250,246,239,0.7)',
                    clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
                  }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase font-body font-medium px-3 py-1.5"
                      style={{ background: 'rgba(14,75,65,0.08)', color: 'var(--teal)', border: '1px solid rgba(14,75,65,0.2)' }}
                    >
                      {style.tag}
                    </span>
                    <span className="font-display italic text-3xl opacity-10" style={{ color: 'var(--dark-warm)' }}>
                      {style.odia}
                    </span>
                  </div>
                  <h3 className="font-display font-light mb-3" style={{ fontSize: '1.6rem', color: 'var(--dark-warm)' }}>
                    {style.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed flex-1" style={{ color: '#6B5443' }}>
                    {style.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {style.levels.map((l) => (
                      <span key={l} className="text-[10px] tracking-wider uppercase font-body px-2.5 py-1 border border-stone/40" style={{ color: '#8B7355' }}>
                        {l}
                      </span>
                    ))}
                  </div>
                </article>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <section
        className="py-section bg-heritage-light"
        aria-label="Batch timings"
      >
        <div className="wrap relative z-10">
          <AnimateIn>
            <span className="eyebrow">Batch Timings</span>
            <h2 className="section-title mt-3" style={{ color: 'var(--dark-warm)' }}>
              When do <em>classes run?</em>
            </h2>
            <p className="lede mt-4">
              Four batches through the week, grouped by age and level. A free trial class is
              available before you commit.
            </p>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12" staggerDelay={0.1}>
            {batches.map((batch, i) => (
              <AnimateStaggerItem key={batch.name}>
                <div
                  className="p-7 h-full card-lift-sm"
                  style={{
                    border: '1px solid rgba(166,48,59,0.18)',
                    background: 'rgba(250,246,239,0.7)',
                    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    {i === 3 ? <Globe size={14} style={{ color: 'var(--maroon)' }} aria-hidden="true" /> : <Clock size={14} style={{ color: 'var(--maroon)' }} aria-hidden="true" />}
                    <span className="text-[10px] tracking-[0.2em] uppercase font-body" style={{ color: 'var(--maroon)', opacity: 0.8 }}>
                      {i === 3 ? 'Online' : `Batch ${i + 1}`}
                    </span>
                  </div>
                  <h3 className="font-display font-light text-xl mb-3" style={{ color: 'var(--dark-warm)' }}>{batch.name}</h3>
                  <div className="font-body text-sm mb-2" style={{ color: '#8B7355' }}>{batch.days}</div>
                  <div className="font-body font-medium text-base mb-2" style={{ color: 'var(--dark-warm)' }}>{batch.time}</div>
                  <div className="font-body text-xs leading-relaxed" style={{ color: '#8B7355' }}>
                    <span className="flex items-center gap-1.5 mb-1">
                      <Users size={11} aria-hidden="true" /> {batch.ages}
                    </span>
                    {batch.level}
                  </div>
                </div>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
          <AnimateIn delay={0.4} className="mt-8 text-center">
            <p className="font-body text-sm" style={{ color: '#8B7355' }}>
              Fees are discussed personally.{' '}
              <a href="/contact" className="underline underline-offset-2" style={{ color: 'var(--maroon)' }}>
                Send an enquiry
              </a>{' '}
              for current batch availability.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section
        className="py-section bg-heritage-ivory"
        aria-label="Frequently asked questions"
      >
        <div className="wrap relative z-10 max-w-3xl mx-auto">
          <AnimateIn>
            <span className="eyebrow">Good to Know</span>
            <h2 className="section-title mt-3" style={{ color: 'var(--dark-warm)' }}>
              Common <em>questions</em>
            </h2>
          </AnimateIn>
          <AnimateStagger className="mt-10 divide-y" staggerDelay={0.07} style={{ borderColor: 'rgba(14,75,65,0.12)' }}>
            {faqs.map((faq) => (
              <AnimateStaggerItem key={faq.q}>
                <details className="group py-5">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-body font-medium text-base" style={{ color: 'var(--dark-warm)' }}>
                    {faq.q}
                    <ChevronDown
                      size={16}
                      className="flex-shrink-0 transition-transform group-open:rotate-180"
                      style={{ color: 'var(--maroon)' }}
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="mt-4 font-body text-sm leading-relaxed" style={{ color: '#6B5443' }}>
                    {faq.a}
                  </p>
                </details>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
