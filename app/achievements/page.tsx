import { Metadata } from 'next'
import { Star, Award } from 'lucide-react'
import AnimateIn, { AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'
import StatsSection from '@/components/home/StatsSection'
import ContactCTA from '@/components/home/ContactCTA'
import { achievementTimeline } from '@/lib/data/achievements'

export const metadata: Metadata = {
  title: 'Achievements & Recognition',
  description:
    "Nrutyatrupti's journey — B-Grade Doordarshan recognition, CCRT Senior Scholarship, Governor's Trophy, and performances at India's premier classical dance festivals.",
}

export default function AchievementsPage() {
  return (
    <>
      <section
        className="relative pt-32 pb-20 overflow-hidden bg-heritage-deep-alt"
        aria-label="Achievements header"
      >
        <div className="wrap relative z-10">
          <AnimateIn>
            <span className="eyebrow eyebrow-gold">A Legacy in Motion</span>
            <h1
              className="font-display font-light text-ivory mt-4 leading-none"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', letterSpacing: '-0.02em' }}
            >
              Achievements &amp;
              <br />
              <em style={{ color: 'var(--gold)' }}>Recognition</em>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="lede mt-4 text-ivory/55">
              From district festivals in Ganjam to the Mukteshwar Dance Festival on national
              television — a career of devotion documented across five decades of Odisha&apos;s
              cultural calendar.
            </p>
          </AnimateIn>
        </div>
      </section>

      <StatsSection />

      <section
        className="py-section bg-heritage-ivory"
        aria-label="Featured recognitions"
      >
        <div className="wrap">
          <AnimateIn>
            <span className="eyebrow">National Recognition</span>
            <h2 className="section-title mt-3" style={{ color: 'var(--dark-warm)' }}>
              Carried to <em>national stages</em>
            </h2>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12" staggerDelay={0.1}>
            {[
              {
                icon: Star,
                year: '2018',
                title: 'CCRT Senior Scholarship',
                body: 'Ministry of Culture, Government of India — one of the country\'s most prestigious fellowships for classical performing artists.',
              },
              {
                icon: Award,
                year: '2016',
                title: 'B-Grade Artist · Doordarshan',
                body: 'Formally recognised by Prasar Bharati / Doordarshan Kendra, Government of India — awarded only to artists of demonstrably high national calibre.',
              },
              {
                icon: Star,
                year: '2010',
                title: "Governor's Trophy",
                body: "Dept. of Culture, Odisha Sangeet Natak Akademi & Odisha Lalit Kala Akademi — among the highest cultural honours in the state of Odisha.",
              },
            ].map(({ icon: Icon, year, title, body }) => (
              <AnimateStaggerItem key={title}>
                <div
                  className="p-8 h-full card-lift"
                  style={{
                    border: '1px solid rgba(201,147,58,0.2)',
                    background: 'rgba(201,147,58,0.04)',
                    clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)',
                  }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-10 h-10 flex items-center justify-center"
                      style={{ background: 'rgba(201,147,58,0.12)', border: '1px solid rgba(201,147,58,0.3)' }}
                    >
                      <Icon size={16} style={{ color: 'var(--gold)' }} aria-hidden="true" />
                    </div>
                    <span className="font-display text-3xl font-light" style={{ color: 'var(--gold)', opacity: 0.5 }}>
                      {year}
                    </span>
                  </div>
                  <h3 className="font-display font-light text-xl mb-3" style={{ color: 'var(--dark-warm)' }}>
                    {title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#6B5443' }}>
                    {body}
                  </p>
                </div>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <section
        className="py-section bg-heritage-light"
        aria-label="Performance timeline"
      >
        <div className="wrap relative z-10">
          <AnimateIn>
            <span className="eyebrow">On Stage Since 2007</span>
            <h2 className="section-title mt-3" style={{ color: 'var(--dark-warm)' }}>
              A performance <em>timeline</em>
            </h2>
          </AnimateIn>

          <div className="mt-14 relative">
            <div
              className="absolute left-0 lg:left-20 top-0 bottom-0 w-px hidden lg:block"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(166,48,59,0.3), transparent)' }}
              aria-hidden="true"
            />

            <AnimateStagger className="space-y-10" staggerDelay={0.07}>
              {achievementTimeline.map((yearGroup) => (
                <AnimateStaggerItem key={yearGroup.year}>
                  <div className="grid grid-cols-1 lg:grid-cols-[5rem_1fr] gap-4 lg:gap-10 items-start">
                    <div
                      className="font-display text-4xl font-light hidden lg:block text-right"
                      style={{ color: 'var(--maroon)', opacity: 0.6 }}
                      aria-label={`Year ${yearGroup.year}`}
                    >
                      {yearGroup.year}
                    </div>
                    <div>
                      <div
                        className="font-display text-2xl font-light mb-4 lg:hidden"
                        style={{ color: 'var(--maroon)', opacity: 0.75 }}
                      >
                        {yearGroup.year}
                      </div>
                      <div className="space-y-3">
                        {yearGroup.events.map((event) => (
                          <div
                            key={event.title}
                            className="flex items-start gap-4 p-5"
                            style={{
                              border: event.featured ? '1px solid rgba(166,48,59,0.3)' : '1px solid rgba(14,75,65,0.1)',
                              background: event.featured ? 'rgba(166,48,59,0.06)' : 'rgba(250,246,239,0.6)',
                            }}
                          >
                            {event.featured && (
                              <Star size={13} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--gold)', fill: 'var(--gold)' }} aria-hidden="true" />
                            )}
                            <div>
                              <div className="font-body font-medium text-sm" style={{ color: 'var(--dark-warm)' }}>{event.title}</div>
                              <div className="font-body text-xs mt-1 leading-relaxed" style={{ color: '#8B7355' }}>
                                {event.detail}
                                {event.venue && (
                                  <span className="ml-2" style={{ color: '#8B7355', opacity: 0.6 }}>· {event.venue}</span>
                                )}
                              </div>
                              {event.date && event.date !== yearGroup.year && (
                                <div className="font-body text-xs mt-0.5" style={{ color: '#8B7355', opacity: 0.6 }}>{event.date}</div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimateStaggerItem>
              ))}
            </AnimateStagger>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
