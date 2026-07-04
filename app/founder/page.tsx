import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Award, Star, ArrowRight, Phone } from 'lucide-react'
import AnimateIn, { AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'
import ContactCTA from '@/components/home/ContactCTA'
import { founderData, gurushreeData, siteConfig } from '@/lib/data/site'
import { achievementTimeline } from '@/lib/data/achievements'

export const metadata: Metadata = {
  title: 'Our Guru — Smt. Truptismita Tarini',
  description:
    'Meet Guru Truptismita Tarini — B-Grade Doordarshan Artist, CCRT Senior Scholar 2018, and founder of Nrutyatrupti. 20 years of Odissi mastery in the Guru Deba Prasad Das lineage.',
}

export default function FounderPage() {
  return (
    <>
      <section
        className="relative overflow-hidden pt-32 pb-20 bg-heritage-deep"
        aria-label="Founder hero"
      >
        <div className="wrap relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <AnimateIn>
                <span className="eyebrow eyebrow-gold">Founder & Guru</span>
              </AnimateIn>
              <AnimateIn delay={0.15}>
                <h1
                  className="font-display font-light text-ivory mt-4 leading-none"
                  style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', letterSpacing: '-0.02em' }}
                >
                  Smt. Truptismita
                  <br />
                  <em style={{ color: 'var(--gold)' }}>Tarini</em>
                </h1>
              </AnimateIn>
              <AnimateIn delay={0.25}>
                <p className="mt-6 font-body text-ivory/60 leading-relaxed max-w-lg text-base">
                  Twenty years of devotion to the sacred classical dance of Odisha. A lineage
                  traced directly to the legendary{' '}
                  <strong className="text-ivory/80">Guru Deba Prasad Das</strong>. A stage career
                  spanning from Ganjam&apos;s district festivals to the Mukteshwar Dance Festival
                  on national television.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.35}>
                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    'B-Grade Doordarshan Artist',
                    'CCRT Senior Scholar 2018',
                    'Governor\'s Trophy Recipient',
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="flex items-center gap-2 text-xs font-body px-3 py-1.5"
                      style={{
                        border: '1px solid rgba(201,147,58,0.3)',
                        color: 'var(--gold)',
                        background: 'rgba(201,147,58,0.08)',
                      }}
                    >
                      <Award size={11} aria-hidden="true" />
                      {badge}
                    </span>
                  ))}
                </div>
              </AnimateIn>
              <AnimateIn delay={0.45}>
                <div className="mt-8 flex gap-4">
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary group"
                  >
                    <Phone size={14} aria-hidden="true" />
                    Enquire Now
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </a>
                  <Link href="/classes" className="btn-outline-light">
                    View Classes
                  </Link>
                </div>
              </AnimateIn>
            </div>
            <AnimateIn variant="scale" delay={0.2}>
              <div className="relative">
                <div
                  className="overflow-hidden"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 32px 100%, 0 calc(100% - 32px))',
                  }}
                >
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={founderData.image}
                      alt={founderData.imageAlt}
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <span className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/40" aria-hidden="true" />
                <span className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/40" aria-hidden="true" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section
        className="py-section bg-heritage-ivory"
        aria-label="Biography"
      >
        <div className="wrap relative z-10">
          <div className="max-w-3xl mx-auto">
            <AnimateIn>
              <span className="eyebrow">Biography</span>
              <h2 className="section-title mt-3" style={{ color: 'var(--dark-warm)' }}>
                A life in <em>devotion</em>
              </h2>
            </AnimateIn>

            <AnimateIn delay={0.2} className="mt-8 space-y-5 font-body leading-relaxed text-base" style={{ color: '#5C4A35' }}>
              <p>
                Smt. Truptismita Tarini has practiced Odissi classical dance for over two decades
                in the style of the eminent Guru Deba Prasad Das, under the expert personal
                guidance of her own guru,{' '}
                <strong style={{ color: 'var(--dark-warm)' }}>
                  Gurushree Swayam Pragyan Sahoo
                </strong>
                . Her training has been shaped by the philosophical depth of the tradition as
                much as by its technical demands — her dance carries the spiritual weight of a
                lineage that traces itself directly to the sculpted apsaras of the Konark Sun
                Temple.
              </p>
              <p>
                In 2016, she was formally recognised as a{' '}
                <strong style={{ color: 'var(--dark-warm)' }}>
                  B-Grade Artist by Prasar Bharati / Doordarshan Kendra, Government of India
                </strong>{' '}
                — a recognition awarded only to artists of demonstrably high calibre on the
                national stage. Two years later, the Ministry of Culture, India selected her as
                a recipient of the{' '}
                <strong style={{ color: 'var(--dark-warm)' }}>
                  CCRT Senior Scholarship (2018)
                </strong>
                , one of the country&apos;s most prestigious fellowships for classical performing
                artists.
              </p>
              <p>
                Her stage career began in earnest in 2007 and has continued without interruption
                — through Rabindra Mandap, the Mukteshwar Dance Festival organised by Odisha
                Tourism, Utkal Divas celebrations across India from Varanasi to Kolkata to
                Mumbai, and graced events from the International Dance Festival at Mamallapuram
                to Guru Purnima ceremonies before Doordarshan&apos;s cameras.
              </p>
              <p>
                She founded Nrutyatrupti in 2021 with a single belief: that the discipline and
                devotion of Odissi classical dance belong to everyone — from a five-year-old
                taking their first step to an adult returning to a lifelong dream.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.3} className="mt-10">
              <h3 className="font-display text-xl mb-6" style={{ color: 'var(--dark-warm)' }}>
                Professional Qualifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { institution: 'Akhila Bharatiya Gandharva Maha Vidyalaya Mandal, Mumbai', qualifications: 'Prathama through Visharad Ditiya (full classical graded sequence in Odissi)' },
                  { institution: 'Odisha Sangeet Natak Akademi, Bhubaneswar', qualifications: 'Prarambhik through Shastri Purna — Nrutya Shree, Nrutya Bhushan, Shastri diplomas' },
                ].map((q) => (
                  <div
                    key={q.institution}
                    className="p-5 card-lift-sm"
                    style={{
                      border: '1px solid rgba(201,147,58,0.15)',
                      background: 'rgba(201,147,58,0.04)',
                      clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
                    }}
                  >
                    <div className="font-body font-medium text-sm mb-2" style={{ color: 'var(--dark-warm)' }}>
                      {q.institution}
                    </div>
                    <div className="font-body text-sm leading-relaxed" style={{ color: '#6B5443' }}>
                      {q.qualifications}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section
        className="py-section bg-heritage-light"
        aria-label="Performance history"
      >
        <div className="wrap relative z-10">
          <AnimateIn>
            <span className="eyebrow">On Stage</span>
            <h2 className="section-title mt-3" style={{ color: 'var(--dark-warm)' }}>
              A life on <em>national stages</em>
            </h2>
            <p className="lede mt-4">
              Fifty-plus documented performances across India — from Bhubaneswar to Varanasi,
              Mumbai to Mamallapuram, Kolkata to Puttaparthi.
            </p>
          </AnimateIn>

          <AnimateStagger className="mt-12 space-y-10" staggerDelay={0.08}>
            {achievementTimeline.map((year) => (
              <AnimateStaggerItem key={year.year}>
                <div className="grid grid-cols-[4rem_1fr] gap-6">
                  <div
                    className="font-display text-3xl font-light pt-1"
                    style={{ color: 'var(--maroon)', opacity: 0.7 }}
                    aria-label={`Year ${year.year}`}
                  >
                    {year.year}
                  </div>
                  <div className="space-y-3 pt-2">
                    {year.events.map((event) => (
                      <div
                        key={event.title}
                        className="flex items-start gap-4 p-4"
                        style={{
                          border: event.featured ? '1px solid rgba(166,48,59,0.3)' : '1px solid rgba(14,75,65,0.1)',
                          background: event.featured ? 'rgba(166,48,59,0.06)' : 'rgba(250,246,239,0.6)',
                        }}
                      >
                        {event.featured && (
                          <Star size={13} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--gold)', fill: 'var(--gold)' }} aria-hidden="true" />
                        )}
                        <div>
                          <div className="font-body font-medium text-sm" style={{ color: 'var(--dark-warm)' }}>
                            {event.title}
                          </div>
                          <div className="font-body text-xs mt-1" style={{ color: '#8B7355' }}>
                            {event.detail}
                            {event.date && event.date !== year.year && (
                              <span className="ml-2" style={{ color: '#8B7355', opacity: 0.6 }}>· {event.date}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <section
        className="py-section bg-heritage-ivory"
        aria-label="Gurushree"
      >
        <div className="wrap relative z-10">
          <AnimateIn className="text-center mb-12">
            <span className="eyebrow justify-center">The Lineage</span>
            <h2 className="section-title mt-3" style={{ color: 'var(--dark-warm)' }}>
              Her <em>Guru</em>
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-4xl mx-auto">
            <AnimateIn variant="slideLeft">
              <div
                className="overflow-hidden"
                style={{ clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))' }}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={gurushreeData.image}
                    alt={gurushreeData.imageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <span className="eyebrow">Lead Artist & Guru</span>
              <h3
                className="font-display font-light mt-3"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--dark-warm)', lineHeight: 1.15 }}
              >
                {gurushreeData.name}
              </h3>
              <p className="mt-5 font-body leading-relaxed text-base" style={{ color: '#6B5443' }}>
                {gurushreeData.bio}
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
