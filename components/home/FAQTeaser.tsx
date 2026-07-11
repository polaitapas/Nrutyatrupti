import Link from 'next/link'
import { ChevronDown, ArrowRight } from 'lucide-react'
import AnimateIn, { AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'
import { faqs } from '@/lib/data/classes'

const preview = faqs.slice(0, 4)

export default function FAQTeaser() {
  return (
    <section className="py-section bg-heritage-light" aria-label="Frequently asked questions">
      <div className="wrap relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-4">
          <AnimateIn>
            <span className="eyebrow justify-center">Good to Know</span>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h2 className="section-title mt-3" style={{ color: 'var(--dark-warm)' }}>
              Before you <em>begin</em>
            </h2>
          </AnimateIn>
        </div>

        <AnimateStagger
          className="mt-8 divide-y"
          staggerDelay={0.05}
          style={{ borderColor: 'rgba(14,75,65,0.12)' }}
        >
          {preview.map((faq) => (
            <AnimateStaggerItem key={faq.q}>
              <details className="group faq-row py-5">
                <summary
                  className="flex items-center justify-between gap-4 cursor-pointer list-none font-body font-medium text-base"
                >
                  {faq.q}
                  <ChevronDown
                    size={16}
                    className="flex-shrink-0 transition-transform group-open:rotate-180"
                    style={{ color: 'var(--maroon)' }}
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-4 font-body text-sm leading-relaxed" style={{ color: '#6B5443' }}>
                  {faq.a}
                </p>
              </details>
            </AnimateStaggerItem>
          ))}
        </AnimateStagger>

        <AnimateIn delay={0.3}>
          <div className="text-center mt-8">
            <Link href="/classes#faq" className="btn-outline group">
              All Questions & Answers
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
