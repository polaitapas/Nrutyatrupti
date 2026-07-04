import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimateIn, { AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'
import StatsSection from '@/components/home/StatsSection'
import Testimonials from '@/components/home/Testimonials'
import ContactCTA from '@/components/home/ContactCTA'
import OdissiJourney from '@/components/home/OdissiJourney'

export const metadata: Metadata = {
  title: 'About the Academy',
  description:
    'Nrutyatrupti is Bhubaneswar\'s dedicated home for Odissi classical dance and the folk traditions of Odisha. Founded 2021. Affiliated with Pragyan Nrutya Academy.',
}

const pillars = [
  { title: 'Guru–Shishya', body: 'Learning passed directly, master to student, as tradition intends — the way Odissi has been preserved for centuries, unbroken from the walls of Konark.' },
  { title: 'Temple Roots', body: "Our postures are drawn from the sculpted apsaras of the Konark Sun Temple and the devotion of the Jagannath shrine at Puri — living architecture made movement." },
  { title: 'All Ages Welcome', body: 'Children to adults — every student finds their pace, their place, and their own deep relationship with this ancient art. No upper age limit, no prior experience required.' },
  { title: 'The Stage', body: 'Regular performances at cultural festivals across Odisha and India, building confidence through the act of sharing this art with an audience.' },
  { title: 'Certification', body: 'Structured progression through recognised examinations from Akhila Bharatiya Gandharva Maha Vidyalaya Mandal and Odisha Sangeet Natak Akademi.' },
  { title: 'Online Reach', body: 'Live, interactive classes for students across India and abroad — the same devotion and guidance, wherever you are in the world.' },
]

export default function AboutPage() {
  return (
    <>
      <section
        className="relative pt-32 pb-20 overflow-hidden bg-heritage-deep"
        aria-label="About page header"
      >
        <div className="wrap relative z-10">
          <AnimateIn>
            <span className="eyebrow eyebrow-gold">Our Story</span>
            <h1
              className="font-display font-light text-ivory mt-4 leading-none"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', letterSpacing: '-0.02em' }}
            >
              A sanctuary for the
              <br />
              <em style={{ color: 'var(--gold)' }}>timeless art</em>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="lede mt-4 text-ivory/55">
              Nrutyatrupti — &ldquo;the fulfillment of dance&rdquo; — is Bhubaneswar&apos;s
              dedicated home for Odissi classical dance and the folk traditions of Odisha.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-section bg-heritage-ivory" aria-label="Academy story">
        <div className="wrap relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimateIn variant="slideLeft">
              <div className="relative">
                <div
                  className="overflow-hidden"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))' }}
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/images/FB_IMG_1705843883174.jpg"
                      alt="Guru Truptismita Tarini with a student — the guru-shishya tradition in practice"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <span className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-gold/40" aria-hidden="true" />
                <span className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-gold/40" aria-hidden="true" />
              </div>
            </AnimateIn>
            <div>
              <AnimateIn delay={0.15}>
                <h2 className="section-title" style={{ color: 'var(--dark-warm)' }}>
                  Founded in <em>devotion</em>, 2021
                </h2>
                <div className="mt-6 space-y-4 font-body leading-relaxed text-base" style={{ color: '#5C4A35' }}>
                  <p>
                    Nrutyatrupti was founded in 2021 by{' '}
                    <strong style={{ color: 'var(--dark-warm)' }}>Guru Truptismita Tarini</strong>{' '}
                    under the guidance of her own guru,{' '}
                    <strong style={{ color: 'var(--dark-warm)' }}>Gurushree Swayam Pragyan Sahoo</strong>{' '}
                    — Lead Artist and Guru of the academy and the figure whose teaching underpins
                    everything we do. The academy is affiliated with{' '}
                    <strong style={{ color: 'var(--dark-warm)' }}>Pragyan Nrutya Academy</strong>.
                  </p>
                  <p>
                    We were founded on a single belief — that the discipline and devotion of
                    Odissi classical dance belong to everyone, from a five-year-old taking their
                    first step to an adult returning to a lifelong dream. Students move through
                    technique, theory, and abhinaya in the unbroken guru–shishya tradition — the
                    way Odissi has been passed down through generations, inspired by the sculpted
                    dancers of the Konark Sun Temple.
                  </p>
                </div>
              </AnimateIn>
              <AnimateIn delay={0.3}>
                <div className="mt-8">
                  <Link href="/founder" className="btn-primary group">
                    Meet Guru Truptismita
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section bg-heritage-light" aria-label="Our pillars">
        <div className="wrap relative z-10">
          <AnimateIn>
            <span className="eyebrow">What We Stand For</span>
            <h2 className="section-title mt-3" style={{ color: 'var(--dark-warm)' }}>
              Our <em>pillars</em>
            </h2>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12" staggerDelay={0.08}>
            {pillars.map((p) => (
              <AnimateStaggerItem key={p.title}>
                <div
                  className="p-7 h-full card-lift-sm"
                  style={{
                    border: '1px solid rgba(14,75,65,0.15)',
                    background: 'rgba(250,246,239,0.7)',
                    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
                  }}
                >
                  <h3 className="font-display font-light text-xl mb-3" style={{ color: 'var(--dark-warm)' }}>{p.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#6B5443' }}>{p.body}</p>
                </div>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <StatsSection />
      <OdissiJourney />
      <Testimonials />
      <ContactCTA />
    </>
  )
}
