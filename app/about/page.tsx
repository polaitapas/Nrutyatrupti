import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Award, ArrowRight } from 'lucide-react'
import AnimateIn, { AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'
import { founderData, gurushreeData } from '@/lib/data/site'
import { featuredHonours } from '@/lib/data/achievements'

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    "Nrutyatrupti — Bhubaneswar's home for Odissi classical dance and Odisha's folk traditions, led by Truptismita Tarini under Guru Swayam Pragnya Sahoo.",
  alternates: { canonical: '/about' },
}

const pillars = [
  { title: 'Guru–Shishya', body: 'Learning passed directly, master to student, as tradition intends — the way Odissi has been preserved for centuries, unbroken from the walls of Konark.' },
  { title: 'Temple Roots', body: "Our postures are drawn from the sculpted apsaras of the Konark Sun Temple and the devotion of the Jagannath shrine at Puri — living architecture made movement." },
  { title: 'All Ages Welcome', body: 'Children to adults — every student finds their pace, their place, and their own deep relationship with this ancient art. No upper age limit, no prior experience required.' },
  { title: 'The Stage', body: 'Regular performances at cultural festivals across Odisha and India, building confidence through the act of sharing this art with an audience.' },
  { title: 'Certification', body: 'Structured progression through recognised examinations from Pracheen Kala Kendra, Chandigarh.' },
  { title: 'Online Reach', body: 'Live, interactive classes for students across India and abroad — the same devotion and guidance, wherever you are in the world.' },
]

export default function AboutPage() {
  return (
    <>
      <section
        className="relative pt-24 pb-14 overflow-hidden bg-heritage-deep"
        aria-label="About page header"
      >
        <div className="wrap relative z-10">
          <AnimateIn>
            <span className="eyebrow eyebrow-gold"><span className="indic">ଆମ କାହାଣୀ</span> · Our Story</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <AnimateIn variant="slideLeft">
              <div className="relative">
                <div
                  className="overflow-hidden"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))' }}
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/images/FB_IMG_1705843883174.jpg"
                      alt="Founder Truptismita Tarini with a student — the guru-shishya tradition in practice"
                      fill
                      priority
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
                <div className="mt-6 space-y-4 font-body leading-relaxed text-base" style={{ color: 'var(--brown-deep)' }}>
                  <p>
                    Nrutyatrupti was founded in 2021 by{' '}
                    <strong style={{ color: 'var(--dark-warm)' }}>Truptismita Tarini</strong>,
                    our Founder &amp; Mentor, under the guidance of{' '}
                    <strong style={{ color: 'var(--dark-warm)' }}>Guru Smt. Swayam Pragnya Sahoo</strong>{' '}
                    — Our Guru, and the figure whose teaching underpins everything we do. The
                    academy is affiliated with{' '}
                    <strong style={{ color: 'var(--dark-warm)' }}>Pragnya Nrutyayan</strong>.
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
            </div>
          </div>
        </div>
      </section>

      <section className="py-section bg-heritage-deep-alt" aria-label="Our Guru">
        <div className="wrap relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimateIn variant="scale" className="lg:order-2">
              <div className="relative max-w-md mx-auto">
                <div
                  className="overflow-hidden"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 32px 100%, 0 calc(100% - 32px))',
                  }}
                >
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={gurushreeData.image}
                      alt={gurushreeData.imageAlt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                </div>
                <span className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/40" aria-hidden="true" />
                <span className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/40" aria-hidden="true" />
              </div>
            </AnimateIn>
            <div className="lg:order-1">
              <AnimateIn>
                <span className="eyebrow eyebrow-gold">Our Guru</span>
                <h2
                  className="font-display font-light text-ivory mt-3"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.15 }}
                >
                  Guru Smt. Swayam <em style={{ color: 'var(--gold)' }}>Pragnya Sahoo</em>
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.15}>
                <p className="mt-5 font-body text-ivory/60 leading-relaxed max-w-lg text-base">
                  {gurushreeData.bio}
                </p>
              </AnimateIn>
              <AnimateIn delay={0.25}>
                <span
                  className="mt-6 inline-flex items-center gap-2 text-xs font-body px-3 py-1.5"
                  style={{
                    border: '1px solid rgba(201,147,58,0.3)',
                    color: 'var(--gold)',
                    background: 'rgba(201,147,58,0.08)',
                  }}
                >
                  <Award size={11} aria-hidden="true" />
                  Deba Prasad Das Lineage
                </span>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section bg-heritage-ivory" aria-label="Founder and Mentor">
        <div className="wrap relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <AnimateIn variant="slideRight" className="lg:order-2">
              <div className="relative max-w-md mx-auto">
                <div
                  className="relative overflow-hidden"
                  style={{
                    clipPath:
                      'polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))',
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
                      style={{ background: 'linear-gradient(to top, rgba(13,9,6,0.7) 0%, transparent 60%)' }}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="font-display text-ivory text-2xl font-light">{founderData.name}</div>
                    <div className="text-xs tracking-[0.2em] uppercase font-body mt-1" style={{ color: 'var(--gold)' }}>
                      {founderData.title}
                    </div>
                  </div>
                </div>
                <span className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2" style={{ borderColor: 'var(--gold)', opacity: 0.5 }} aria-hidden="true" />
              </div>
            </AnimateIn>

            <div className="lg:order-1">
              <AnimateIn>
                <span className="eyebrow">Founder &amp; Mentor</span>
                <h2 className="section-title mt-3" style={{ color: 'var(--dark-warm)' }}>
                  {founderData.name}
                </h2>
              </AnimateIn>

              <AnimateIn delay={0.15} className="mt-6 space-y-4 font-body leading-relaxed text-base" style={{ color: 'var(--brown-deep)' }}>
                <p>{founderData.shortBio}</p>
                <p>
                  Her stage career began in 2007 and has continued without interruption —
                  through Rabindra Mandap, the Mukteshwar Dance Festival organised by Odisha
                  Tourism, Utkal Divas celebrations from Varanasi to Kolkata to Mumbai, and the
                  International Dance Festival at Mamallapuram.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.25}>
                <ul className="mt-6 space-y-3" role="list">
                  {founderData.credentials.map((cred) => (
                    <li key={cred} className="flex items-start gap-3">
                      <Award size={14} className="mt-1 flex-shrink-0" style={{ color: 'var(--gold)' }} aria-hidden="true" />
                      <span className="font-body text-sm leading-relaxed" style={{ color: 'var(--brown-deep)' }}>{cred}</span>
                    </li>
                  ))}
                </ul>
              </AnimateIn>

              <AnimateIn delay={0.3}>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {featuredHonours.map((h) => (
                    <div
                      key={h.year}
                      className="p-3 text-center card-lift-sm"
                      style={{
                        border: '1px solid rgba(201,147,58,0.2)',
                        background: 'rgba(201,147,58,0.04)',
                      }}
                    >
                      <div className="font-display text-lg" style={{ color: 'var(--gold)' }}>{h.year}</div>
                      <div className="text-[11px] font-body leading-snug mt-0.5" style={{ color: 'var(--brown-muted)' }}>{h.title}</div>
                    </div>
                  ))}
                </div>
              </AnimateIn>

              <AnimateIn delay={0.35}>
                <div className="mt-6">
                  <Link
                    href="/classes#achievements"
                    className="inline-flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-gold hover:text-gold-light transition-colors"
                  >
                    View Full Achievements &amp; Timeline
                    <ArrowRight size={12} aria-hidden="true" />
                  </Link>
                </div>
              </AnimateIn>
            </div>
          </div>

          <AnimateIn delay={0.2}>
            <div className="mt-10 max-w-3xl">
              <h3 className="font-display text-xl mb-6" style={{ color: 'var(--dark-warm)' }}>
                Professional Qualifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { institution: 'Akhila Bharatiya Gandharva Maha Vidyalaya Mandal, Mumbai', qualifications: 'Prathama through Visharad (full classical graded sequence in Odissi)' },
                  { institution: 'Pracheen Kala Kendra, Chandigarh', qualifications: 'Sangeet Bhaskar Final (7th Year), Odissi Dance — First Division (2022)' },
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
                    <div className="font-body text-sm leading-relaxed" style={{ color: 'var(--brown)' }}>
                      {q.qualifications}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="py-section bg-heritage-light" aria-label="Our pillars">
        <div className="wrap relative z-10">
          <AnimateIn>
            <span className="eyebrow"><span className="indic">ଆମ ସ୍ତମ୍ଭ</span> · What We Stand For</span>
            <h2 className="section-title mt-3" style={{ color: 'var(--dark-warm)' }}>
              Our <em>pillars</em>
            </h2>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8" staggerDelay={0.05}>
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
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--brown)' }}>{p.body}</p>
                </div>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

    </>
  )
}
