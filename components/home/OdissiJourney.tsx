import AnimateIn, { AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'
import { odissiJourney } from '@/lib/data/testimonials'

export default function OdissiJourney() {
  return (
    <section
      className="relative overflow-hidden py-section bg-heritage-light"
      aria-label="The five movements of an Odissi recital"
    >
      <div className="wrap">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <AnimateIn>
            <span className="eyebrow">The Odissi Recital</span>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h2 className="section-title mt-3" style={{ color: 'var(--dark-warm)' }}>
              Five movements to <em>liberation</em>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.25}>
            <p className="lede mt-4 mx-auto text-center" style={{ color: '#6B5443' }}>
              Every Odissi recital follows a sacred arc — from the first invocation to the final
              dissolution of self. Our curriculum walks students through each stage.
            </p>
          </AnimateIn>
        </div>

        <AnimateStagger className="relative" staggerDelay={0.12}>
          <div
            className="absolute left-8 top-0 bottom-0 w-px hidden lg:block"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,147,58,0.3), transparent)' }}
            aria-hidden="true"
          />
          <div className="space-y-6 lg:space-y-4">
            {odissiJourney.map((step, i) => (
              <AnimateStaggerItem key={step.sanskrit} variant="slideLeft">
                <div
                  className="lg:grid lg:grid-cols-[4rem_1fr] gap-8 items-start group"
                >
                  <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
                    <div
                      className="w-4 h-4 border rotate-45 flex-shrink-0 group-hover:bg-gold transition-colors"
                      style={{
                        borderColor: 'var(--gold)',
                        background: i === 0 ? 'var(--gold)' : 'transparent',
                      }}
                    />
                  </div>
                  <div
                    className="p-7 lg:p-8 card-lift-sm"
                    style={{
                      border: '1px solid rgba(201,147,58,0.12)',
                      background: 'rgba(201,147,58,0.03)',
                      clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
                    }}
                  >
                    <div className="flex items-baseline gap-4 mb-3">
                      <span
                        className="font-display italic text-2xl"
                        style={{ color: 'var(--gold)', opacity: 0.6 }}
                      >
                        {step.number}
                      </span>
                      <span
                        className="font-display font-light"
                        style={{ fontSize: '1.35rem', color: 'var(--dark-warm)' }}
                      >
                        {step.sanskrit}
                      </span>
                      <span className="font-body text-sm" style={{ color: '#8B7355' }}>
                        — {step.english}
                      </span>
                    </div>
                    <p className="font-body text-sm leading-relaxed" style={{ color: '#6B5443' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimateStaggerItem>
            ))}
          </div>
        </AnimateStagger>
      </div>
    </section>
  )
}
