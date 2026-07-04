import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimateIn, { AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'

const pillars = [
  {
    title: 'Guru–Shishya',
    body: 'Learning passed directly, master to student, as tradition intends — the way Odissi has been preserved for centuries.',
  },
  {
    title: 'Temple Roots',
    body: "Postures drawn from the sculpted dancers of the Konark Sun Temple and the devotion of Lord Jagannath's shrine.",
  },
  {
    title: 'All Ages',
    body: 'Children to adults — every student finds their pace, their place, and their own relationship with the art.',
  },
  {
    title: 'The Stage',
    body: 'Regular performances at cultural festivals across Odisha and India — building confidence through the act of sharing.',
  },
]

export default function AcademyIntro() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-section bg-heritage-light"
      aria-label="About Nrutyatrupti"
    >
      <div className="wrap relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <AnimateIn variant="slideLeft">
            <div className="relative">
              <div
                className="relative overflow-hidden"
                style={{
                  clipPath:
                    'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))',
                }}
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/FB_IMG_1705843883174.jpg"
                    alt="Guru Truptismita Tarini with a student in a heartfelt moment on stage"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
                </div>
              </div>
              <div
                className="absolute -bottom-5 -right-5 px-5 py-4"
                style={{
                  background: 'var(--ivory)',
                  border: '1px solid rgba(166,48,59,0.2)',
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
                }}
              >
                <div
                  className="font-display text-4xl font-light"
                  style={{ color: 'var(--maroon)' }}
                >
                  2021
                </div>
                <div className="text-xs tracking-[0.2em] uppercase font-body mt-0.5" style={{ color: 'var(--teal)' }}>
                  Founded
                </div>
              </div>
              <span
                className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2"
                style={{ borderColor: 'var(--gold)', opacity: 0.6 }}
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2"
                style={{ borderColor: 'var(--gold)', opacity: 0.6 }}
                aria-hidden="true"
              />
            </div>
          </AnimateIn>

          <div>
            <AnimateIn delay={0.1}>
              <span className="eyebrow">Our Story</span>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <h2
                className="section-title mt-3"
                style={{ color: 'var(--dark-warm)' }}
                id="about-heading"
              >
                A sanctuary for the
                <br />
                <em>timeless art</em> of Odisha
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <p className="mt-5 font-body leading-relaxed text-base" style={{ color: '#5C4A35' }}>
                Nrutyatrupti is Bhubaneswar&apos;s dedicated home for Odissi classical dance and
                the folk traditions of Odisha — affiliated with{' '}
                <strong style={{ color: 'var(--dark-warm)' }}>Pragyan Nrutya Academy</strong>, founded on a
                single belief: that the discipline and devotion of this sacred art belong to
                everyone.
              </p>
              <p className="mt-4 font-body leading-relaxed text-base" style={{ color: '#5C4A35' }}>
                Under the guidance of{' '}
                <strong style={{ color: 'var(--dark-warm)' }}>Guru Truptismita Tarini</strong>, students move
                through technique, theory, and abhinaya in the unbroken{' '}
                <em style={{ color: 'var(--maroon)', fontStyle: 'italic' }}>guru–shishya</em> tradition — inspired by the sculpted
                dancers of the Konark Sun Temple and the devotion of Lord Jagannath.
              </p>
            </AnimateIn>

            <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-9" staggerDelay={0.1}>
              {pillars.map((p) => (
                <AnimateStaggerItem key={p.title}>
                  <div
                    className="p-5 card-lift-sm transition-colors duration-200 hover:border-gold/50 group"
                    style={{
                      border: '1px solid rgba(14,75,65,0.15)',
                      background: 'rgba(250,246,239,0.6)',
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)',
                    }}
                  >
                    <h4
                      className="font-display font-medium mb-2"
                      style={{ fontSize: '1.05rem', color: 'var(--dark-warm)' }}
                    >
                      {p.title}
                    </h4>
                    <p className="font-body text-sm leading-relaxed" style={{ color: '#6B5443' }}>{p.body}</p>
                  </div>
                </AnimateStaggerItem>
              ))}
            </AnimateStagger>

            <AnimateIn delay={0.5}>
              <div className="mt-9">
                <Link href="/about" className="btn-primary group">
                  Our Full Story
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  )
}
