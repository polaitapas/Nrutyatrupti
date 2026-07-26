import { Metadata } from 'next'
import { Clock, Users, Globe, ChevronDown, Star, Award, Calendar } from 'lucide-react'
import AnimateIn, { AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'
import EnquiryTrigger from '@/components/ui/EnquiryTrigger'
import StatsSection from '@/components/home/StatsSection'
import { danceStyles, batches, faqs, summerIntensive } from '@/lib/data/classes'
import { achievementTimeline, featuredHonours } from '@/lib/data/achievements'

const honourIcons = { Star, Award }

export const metadata: Metadata = {
  title: 'Classes, Achievements & Events',
  description:
    'Odissi classical, Sambalpuri/Folk, semi classical & online dance classes at Nrutyatrupti, Bhubaneswar — batch timings, achievements & yearly calendar.',
  alternates: { canonical: '/classes' },
}

const eventTypes = [
  { tag: 'Annual · December', title: 'Annual Dance Showcase', body: 'Our flagship evening of Odissi — students, gurus and guests share the stage in a celebration of a year\'s dedicated practice. The highlight of the academic calendar.' },
  { tag: 'Monthly · Ongoing', title: 'Nrutya Maasa', body: 'A monthly student showcase — an intimate, regular stage to perform, receive feedback, and build confidence before an audience.' },
  { tag: 'Tradition · July', title: 'Guru Purnima', body: 'A devotional offering to our teachers, with rituals, performances and the lineage blessing that binds every student to the tradition of Odissi.' },
  { tag: 'Competition · National', title: 'National Competitions', body: 'Our advanced students travel to represent Nrutyatrupti at India\'s premier classical dance competitions — continuing a tradition that began on Odisha\'s own stages.' },
  { tag: 'Certification · Year-round', title: 'Graded Examinations', body: 'Periodic structured examinations leading to recognised certificates from Pracheen Kala Kendra, Chandigarh.' },
  { tag: 'Intensive · Seasonal', title: 'Summer & Festival Camps', body: 'Focused multi-day camps built around specific ragas, abhinaya, or folk forms — open to students of all levels, run during school holidays.' },
]


export default function ClassesPage() {
  return (
    <>
      <section
        className="relative pt-40 pb-14 overflow-hidden bg-heritage-deep-alt"
        aria-label="Classes header"
      >
        <div className="wrap relative z-10">
          <AnimateIn>
            <h1
              className="font-display font-light text-ivory leading-none"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', letterSpacing: '-0.02em' }}
            >
              Classes, Achievements
              <br />
              &amp; <em style={{ color: 'var(--gold)' }}>Events</em>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="lede mt-4 text-ivory/55">
              Five forms. Three batches. A career of national recognition, and a full calendar
              of showcases and camps — everything you need to know before you enrol.
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
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8" staggerDelay={0.05}>
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
                    <span className="font-display italic text-3xl" style={{ color: 'var(--maroon)', opacity: 0.45 }}>
                      {style.odia}
                    </span>
                  </div>
                  <h3 className="font-display font-light mb-3" style={{ fontSize: '1.6rem', color: 'var(--dark-warm)' }}>
                    {style.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed flex-1" style={{ color: 'var(--brown)' }}>
                    {style.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {style.levels.map((l) => (
                      <span key={l} className="text-[10px] tracking-wider uppercase font-body px-2.5 py-1 border border-stone/40" style={{ color: 'var(--brown-muted)' }}>
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
              Tuesday &amp; Saturday sessions, grouped by experience level. A free trial class is
              available before you commit.
            </p>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8" staggerDelay={0.05}>
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
                    {i === 2 ? <Globe size={14} style={{ color: 'var(--maroon)' }} aria-hidden="true" /> : <Clock size={14} style={{ color: 'var(--maroon)' }} aria-hidden="true" />}
                    <span className="text-[10px] tracking-[0.2em] uppercase font-body" style={{ color: 'var(--maroon)', opacity: 0.8 }}>
                      {i === 2 ? 'Online' : `Batch ${i + 1}`}
                    </span>
                  </div>
                  <h3 className="font-display font-light text-xl mb-3" style={{ color: 'var(--dark-warm)' }}>{batch.name}</h3>
                  {'nameOdia' in batch && (
                    <div className="font-display italic text-xs mb-2" style={{ color: 'var(--gold)', opacity: 0.6 }}>{batch.nameOdia}</div>
                  )}
                  <div className="font-body text-sm mb-2" style={{ color: 'var(--brown-muted)' }}>{batch.days}</div>
                  <div className="font-body font-medium text-base mb-2" style={{ color: 'var(--dark-warm)' }}>{batch.time}</div>
                  <div className="font-body text-xs leading-relaxed" style={{ color: 'var(--brown-muted)' }}>
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
            <p className="font-body text-sm" style={{ color: 'var(--brown-muted)' }}>
              Fees are discussed personally.{' '}
              <EnquiryTrigger className="underline underline-offset-2" >
                <span style={{ color: 'var(--maroon)' }}>Send an enquiry</span>
              </EnquiryTrigger>{' '}
              for current batch availability.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section
        id="summer-intensive"
        className="py-section bg-heritage-deep-alt scroll-mt-24"
        aria-label="Summer intensive course"
      >
        <div className="wrap relative z-10">
          <AnimateIn className="max-w-2xl">
            <span className="eyebrow eyebrow-gold">Summer Special · {summerIntensive.duration}</span>
            <h2 className="section-title mt-3 text-ivory">
              The <em style={{ color: 'var(--gold)' }}>Summer Intensive</em>
            </h2>
            <p className="lede mt-4 text-ivory/55">
              A focused 15-day course held during the school holidays —
              open to students of all levels, covering everything from expression to stagecraft.
            </p>
          </AnimateIn>

          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8" staggerDelay={0.05}>
            {summerIntensive.curriculum.map((item) => (
              <AnimateStaggerItem key={item.title}>
                <div
                  className="p-7 h-full flex flex-col card-lift-sm"
                  style={{
                    border: '1px solid rgba(201,147,58,0.25)',
                    background: 'rgba(201,147,58,0.06)',
                    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
                  }}
                >
                  <span className="font-display italic text-2xl mb-3" style={{ color: 'var(--gold)', opacity: 0.65 }}>
                    {item.odia}
                  </span>
                  <h3 className="font-display font-light text-lg mb-2 text-ivory">{item.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-ivory/55">{item.description}</p>
                </div>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>

          <AnimateIn delay={0.3} className="mt-8 max-w-2xl">
            <div
              className="p-6 flex items-start gap-4"
              style={{ border: '1px solid rgba(201,147,58,0.3)', background: 'rgba(201,147,58,0.1)' }}
            >
              <Star size={16} className="flex-shrink-0 mt-1" style={{ color: 'var(--gold)', fill: 'var(--gold)' }} aria-hidden="true" />
              <p className="font-body text-sm leading-relaxed text-ivory/80">{summerIntensive.culmination}</p>
            </div>
            <p className="mt-6 font-body text-sm text-ivory/55">
              <EnquiryTrigger className="underline underline-offset-2">
                <span style={{ color: 'var(--gold)' }}>Enquire about the Summer Intensive</span>
              </EnquiryTrigger>{' '}
              for upcoming dates and availability.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section
        id="achievements"
        className="scroll-mt-24"
        aria-label="Achievements"
      >
        <StatsSection showRecognitionTeaser={false} />

        <div className="py-section bg-heritage-ivory">
          <div className="wrap">
            <AnimateIn className="text-center max-w-2xl mx-auto mb-4">
              <span className="eyebrow justify-center">Achievements</span>
              <h2 className="section-title mt-3" style={{ color: 'var(--dark-warm)' }}>
                Carried to <em>national stages</em>
              </h2>
              <p className="lede mt-4 mx-auto text-center">
                Two decades of practice, translated into national honours and a
                performance record that spans India&apos;s biggest classical dance stages.
              </p>
            </AnimateIn>
            <AnimateStagger className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8" staggerDelay={0.05}>
              {featuredHonours.map(({ icon, year, title, body }) => {
                const Icon = honourIcons[icon]
                return (
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
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--brown)' }}>
                      {body}
                    </p>
                  </div>
                </AnimateStaggerItem>
                )
              })}
            </AnimateStagger>
          </div>
        </div>

        <div className="py-section bg-heritage-light">
          <div className="wrap relative z-10">
            <AnimateIn>
              <span className="eyebrow">On Stage Since 2007</span>
              <h2 className="section-title mt-3" style={{ color: 'var(--dark-warm)' }}>
                A performance <em>timeline</em>
              </h2>
            </AnimateIn>

            <div className="mt-10 relative">
              <div
                className="absolute left-0 lg:left-20 top-0 bottom-0 w-px hidden lg:block"
                style={{ background: 'linear-gradient(to bottom, transparent, rgba(166,48,59,0.3), transparent)' }}
                aria-hidden="true"
              />

              <AnimateStagger className="space-y-7" staggerDelay={0.05}>
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
                                <div className="font-body text-xs mt-1 leading-relaxed" style={{ color: 'var(--brown-muted)' }}>
                                  {event.detail}
                                  {event.venue && (
                                    <span className="ml-2" style={{ color: 'var(--brown-muted)', opacity: 0.6 }}>· {event.venue}</span>
                                  )}
                                </div>
                                {event.date && event.date !== yearGroup.year && (
                                  <div className="font-body text-xs mt-0.5" style={{ color: 'var(--brown-muted)', opacity: 0.6 }}>{event.date}</div>
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
        </div>
      </section>

      <section
        id="events"
        className="py-section bg-heritage-ivory scroll-mt-24"
        aria-label="Events and camps"
      >
        <div className="wrap relative z-10">
          <AnimateIn>
            <span className="eyebrow">From the Institute</span>
            <h2 className="section-title mt-3" style={{ color: 'var(--dark-warm)' }}>
              The yearly <em>calendar</em>
            </h2>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8" staggerDelay={0.05}>
            {eventTypes.map((event) => (
              <AnimateStaggerItem key={event.title}>
                <div
                  className="p-7 h-full flex flex-col card-lift"
                  style={{
                    border: '1px solid rgba(201,147,58,0.15)',
                    background: 'rgba(201,147,58,0.03)',
                    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar size={12} style={{ color: 'var(--gold)' }} aria-hidden="true" />
                    <span className="text-[10px] tracking-[0.2em] uppercase font-body" style={{ color: 'var(--gold)', opacity: 0.7 }}>
                      {event.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-light text-xl mb-3" style={{ color: 'var(--dark-warm)' }}>{event.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--brown)' }}>{event.body}</p>
                </div>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <section
        id="faq"
        className="py-section bg-heritage-light scroll-mt-24"
        aria-label="Frequently asked questions"
      >
        <div className="wrap relative z-10 max-w-3xl mx-auto">
          <AnimateIn>
            <span className="eyebrow">Good to Know</span>
            <h2 className="section-title mt-3" style={{ color: 'var(--dark-warm)' }}>
              Common <em>questions</em>
            </h2>
          </AnimateIn>
          <AnimateStagger className="mt-8 divide-y" staggerDelay={0.05} style={{ borderColor: 'rgba(14,75,65,0.12)' }}>
            {faqs.map((faq) => (
              <AnimateStaggerItem key={faq.q}>
                <details className="group faq-row py-5">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-body font-medium text-base">
                    {faq.q}
                    <ChevronDown
                      size={16}
                      className="flex-shrink-0 transition-transform group-open:rotate-180"
                      style={{ color: 'var(--maroon)' }}
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="mt-4 font-body text-sm leading-relaxed" style={{ color: 'var(--brown)' }}>
                    {faq.a}
                  </p>
                </details>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

    </>
  )
}
