import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimateIn, { AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'

const pillars = [
  {
    title: 'Temple Roots',
    body: "Every mudra traces back to the sculpted dancers of the Konark Sun Temple and the sanctified devotion of Lord Jagannath's shrine.",
  },
  {
    title: 'Guru–Shishya',
    body: 'Learning passed directly, master to student, as tradition intends — the way Odissi has been preserved for centuries.',
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
      aria-label="Our Heritage"
    >
      <div className="wrap relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <AnimateIn>
            <span className="eyebrow justify-center"><span className="indic">ଆମ ପରମ୍ପରା</span> · Our Heritage</span>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h2
              className="section-title mt-3"
              style={{ color: 'var(--dark-warm)' }}
              id="about-heading"
            >
              Where temple stone <em>learns to move</em>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.25}>
            <p className="lede mt-4 mx-auto text-center">
              Every mudra we teach has already been carved in stone — on the wheels of the
              Konark Sun Temple, in the alcoves of Lord Jagannath&apos;s shrine. Four things
              define how we carry that architecture of devotion forward.
            </p>
          </AnimateIn>
        </div>

        <AnimateStagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          staggerDelay={0.05}
        >
          {pillars.map((p) => (
            <AnimateStaggerItem key={p.title}>
              <div
                className="p-6 h-full card-lift-sm transition-colors duration-200 hover:border-gold/50 group"
                style={{
                  border: '1px solid rgba(14,75,65,0.15)',
                  background: 'rgba(250,246,239,0.6)',
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)',
                }}
              >
                <h3
                  className="font-display font-medium mb-2"
                  style={{ fontSize: '1.1rem', color: 'var(--dark-warm)' }}
                >
                  {p.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: '#6B5443' }}>{p.body}</p>
              </div>
            </AnimateStaggerItem>
          ))}
        </AnimateStagger>

        <AnimateIn delay={0.5}>
          <div className="mt-8 text-center">
            <Link href="/about" className="btn-primary group">
              Discover Our Heritage
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
