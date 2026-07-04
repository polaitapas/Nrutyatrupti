import { Metadata } from 'next'
import { Calendar } from 'lucide-react'
import AnimateIn, { AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'
import ContactCTA from '@/components/home/ContactCTA'

export const metadata: Metadata = {
  title: 'Events & Summer Camps',
  description:
    'Annual dance showcase, Guru Purnima, national competitions, graded examinations, and summer dance camps at Nrutyatrupti Odissi Dance Academy, Bhubaneswar.',
}

const events = [
  { tag: 'Annual · December', title: 'Annual Dance Showcase', body: 'Our flagship evening of Odissi — students, gurus and guests share the stage in a celebration of a year\'s dedicated practice. The highlight of the academic calendar.' },
  { tag: 'Monthly · Ongoing', title: 'Nrutya Maasa', body: 'A monthly student showcase — an intimate, regular stage to perform, receive feedback, and build confidence before an audience.' },
  { tag: 'Tradition · July', title: 'Guru Purnima', body: 'A devotional offering to our teachers, with rituals, performances and the lineage blessing that binds every student to the tradition of Odissi.' },
  { tag: 'Competition · National', title: 'National Competitions', body: 'Our advanced students travel to represent Nrutyatrupti at India\'s premier classical dance competitions — continuing a tradition that began on Odisha\'s own stages.' },
  { tag: 'Certification · Year-round', title: 'Graded Examinations', body: 'Periodic structured examinations leading to recognised certificates from Akhila Bharatiya Gandharva Maha Vidyalaya and Odisha Sangeet Natak Akademi.' },
  { tag: 'Intensive · Seasonal', title: 'Summer & Festival Camps', body: 'Focused multi-day camps built around specific ragas, abhinaya, or folk forms — open to students of all levels, run during school holidays.' },
]

const recentPerformances = [
  { year: '2025', event: 'Mukteshwar Dance Festival', detail: 'Organised by Odisha Tourism · 9 January 2025' },
  { year: '2025', event: 'Utkal Divas at BHU, Varanasi', detail: 'Banaras Hindu University · 1 April 2025' },
  { year: '2025', event: 'Guru Shree Samman', detail: 'Rabindra Mandap, Bhubaneswar · 29 August 2025' },
  { year: '2024', event: 'Meera Festival of Dances', detail: 'Rabindra Mandap, Bhubaneswar · 20 February 2024' },
  { year: '2024', event: 'Utkal Diwas, Kolkata', detail: '1 April 2024' },
  { year: '2024', event: '4th Bimugdha Dance Festival', detail: 'Rabindra Mandap · June 2024' },
]

export default function EventsPage() {
  return (
    <>
      <section
        className="relative pt-32 pb-20 overflow-hidden bg-heritage-deep"
        aria-label="Events header"
      >
        <div className="wrap relative z-10">
          <AnimateIn>
            <span className="eyebrow eyebrow-gold">From the Institute</span>
            <h1
              className="font-display font-light text-ivory mt-4 leading-none"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', letterSpacing: '-0.02em' }}
            >
              Events &amp; <em style={{ color: 'var(--gold)' }}>Camps</em>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="lede mt-4 text-ivory/55">
              Regular showcases, national competitions, graded examinations, and intensive
              seasonal camps — a full calendar of opportunity for every student.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-section bg-heritage-ivory" aria-label="Event types">
        <div className="wrap relative z-10">
          <AnimateIn>
            <span className="eyebrow">What We Offer</span>
            <h2 className="section-title mt-3" style={{ color: 'var(--dark-warm)' }}>
              The <em>calendar</em>
            </h2>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12" staggerDelay={0.08}>
            {events.map((event) => (
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
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#6B5443' }}>{event.body}</p>
                </div>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <section className="py-section bg-heritage-light" aria-label="Recent performances">
        <div className="wrap relative z-10">
          <AnimateIn>
            <span className="eyebrow">Recent Performances</span>
            <h2 className="section-title mt-3" style={{ color: 'var(--dark-warm)' }}>
              On national <em>stages</em>
            </h2>
          </AnimateIn>
          <AnimateStagger className="mt-12 space-y-3" staggerDelay={0.07}>
            {recentPerformances.map((p) => (
              <AnimateStaggerItem key={`${p.year}-${p.event}`}>
                <div
                  className="flex items-center gap-6 p-5"
                  style={{
                    border: '1px solid rgba(14,75,65,0.12)',
                    background: 'rgba(250,246,239,0.6)',
                  }}
                >
                  <div className="font-display text-2xl font-light flex-shrink-0 w-16 text-right" style={{ color: 'var(--maroon)', opacity: 0.6 }}>
                    {p.year}
                  </div>
                  <div>
                    <div className="font-body font-medium text-sm" style={{ color: 'var(--dark-warm)' }}>{p.event}</div>
                    <div className="font-body text-xs mt-0.5" style={{ color: '#8B7355' }}>{p.detail}</div>
                  </div>
                </div>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
