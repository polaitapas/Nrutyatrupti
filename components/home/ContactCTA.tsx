import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import AnimateIn from '@/components/ui/AnimateIn'
import { siteConfig } from '@/lib/data/site'

export default function ContactCTA() {
  return (
    <section
      className="relative overflow-hidden py-section bg-heritage-deep"
      aria-label="Enquire about joining Nrutyatrupti"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,147,58,0.1) 0%, transparent 70%)',
        }}
      />

      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,147,58,0.3), transparent)' }}
        aria-hidden="true"
      />

      <div className="wrap text-center relative z-10">
        <AnimateIn>
          <span className="eyebrow eyebrow-gold justify-center">Begin Your Journey</span>
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <h2
            className="font-display font-light text-ivory mt-4"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            Ready to take your
            <br />
            first <em style={{ color: 'var(--gold)' }}>chauka</em>?
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.25}>
          <p className="mt-6 font-body text-ivory/55 leading-relaxed max-w-xl mx-auto text-base">
            Whether you&apos;re enrolling a child, returning to dance as an adult, or simply
            curious — we&apos;d love to have a conversation. All classes begin with a free
            trial session.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.35}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20Nrutyatrupti%2C%20I%20would%20like%20to%20enquire%20about%20dance%20classes.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              <Phone size={15} aria-hidden="true" />
              WhatsApp Us Now
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </a>
            <Link href="/contact" className="btn-outline-light group">
              Send an Enquiry
            </Link>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.45}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-ivory/35 text-sm font-body">
            <span>Online classes available</span>
            <span className="hidden sm:block w-px h-4 bg-white/20" aria-hidden="true" />
            <span>Free trial class</span>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
