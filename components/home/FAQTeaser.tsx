'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { ChevronDown, ArrowRight, Send, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimateIn, { AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'
import { faqs, enquiryClassOptions } from '@/lib/data/classes'
import { siteConfig } from '@/lib/data/site'
import { sanitizePhone } from '@/lib/utils'

const preview = faqs.slice(0, 4)

type FormState = {
  name: string
  phone: string
  email: string
  classType: string
  message: string
}

const emptyForm: FormState = { name: '', phone: '', email: '', classType: '', message: '' }

type Status = 'idle' | 'sending' | 'sent' | 'error'

const inputStyle = {
  color: 'var(--dark-warm)',
  background: 'rgba(250,246,239,0.8)',
  border: '1px solid rgba(14,75,65,0.2)',
  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)',
}

export default function FAQTeaser() {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [status, setStatus] = useState<Status>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const data = new FormData(formRef.current!)
      const res = await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const result = await res.json()
      if (res.ok && String(result.success) === 'true') {
        setStatus('sent')
        setForm(emptyForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-section bg-heritage-light" aria-label="Frequently asked questions & enquiry">
      <div className="wrap relative z-10 max-w-5xl mx-auto">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
          {/* FAQ Column */}
          <div>
            <AnimateStagger
              className="divide-y"
              staggerDelay={0.05}
              style={{ borderColor: 'rgba(14,75,65,0.12)' }}
            >
              {preview.map((faq) => (
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

          {/* Enquiry Form Column */}
          <AnimateIn delay={0.2}>
            <div
              className="p-8"
              style={{
                background: 'rgba(250,246,239,0.75)',
                border: '1px solid rgba(14,75,65,0.15)',
                clipPath:
                  'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
              }}
            >
              <span className="eyebrow eyebrow-gold">Get In Touch</span>
              <h3
                className="font-display font-light mt-2"
                style={{ fontSize: '1.5rem', color: 'var(--dark-warm)' }}
              >
                Have a <em style={{ color: 'var(--maroon)' }}>question?</em>
              </h3>
              <p className="font-body text-sm mt-2" style={{ color: 'var(--brown-muted)' }}>
                Drop us a message and we&apos;ll get back to you shortly.
              </p>

              {status === 'sent' ? (
                <div className="mt-8 flex flex-col items-center text-center py-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ background: 'rgba(14,75,65,0.1)' }}
                  >
                    <Check size={22} style={{ color: 'var(--teal)' }} />
                  </div>
                  <p className="font-body text-sm" style={{ color: 'var(--dark-warm)' }}>
                    Thank you! We&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <input type="hidden" name="_subject" value={`New Enquiry — ${siteConfig.name}`} />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <div>
                    <label
                      htmlFor="faq-name"
                      className="block font-body text-xs tracking-[0.15em] uppercase mb-2"
                      style={{ color: 'var(--teal)' }}
                    >
                      Your Name{' '}
                      <span style={{ color: 'var(--maroon)' }} aria-label="required">*</span>
                    </label>
                    <input
                      id="faq-name"
                      name="Name"
                      type="text"
                      required
                      placeholder="Full name"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="w-full px-4 py-3 font-body text-sm transition-colors focus:outline-none"
                      style={inputStyle}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="faq-phone"
                        className="block font-body text-xs tracking-[0.15em] uppercase mb-2"
                        style={{ color: 'var(--teal)' }}
                      >
                        Phone{' '}
                        <span style={{ color: 'var(--maroon)' }} aria-label="required">*</span>
                      </label>
                      <input
                        id="faq-phone"
                        name="Phone"
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        title="Enter a 10-digit phone number"
                        placeholder="10-digit number"
                        value={form.phone}
                        onChange={(e) =>
                          setForm((f) => ({
                            ...f,
                            phone: sanitizePhone(e.target.value),
                          }))
                        }
                        className="w-full px-4 py-3 font-body text-sm transition-colors focus:outline-none"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="faq-email"
                        className="block font-body text-xs tracking-[0.15em] uppercase mb-2"
                        style={{ color: 'var(--teal)' }}
                      >
                        Email
                      </label>
                      <input
                        id="faq-email"
                        name="Email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="w-full px-4 py-3 font-body text-sm transition-colors focus:outline-none"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="faq-class"
                      className="block font-body text-xs tracking-[0.15em] uppercase mb-2"
                      style={{ color: 'var(--teal)' }}
                    >
                      Class Interest
                    </label>
                    <select
                      id="faq-class"
                      name="Class Interest"
                      value={form.classType}
                      onChange={(e) => setForm((f) => ({ ...f, classType: e.target.value }))}
                      className="w-full px-3 py-3 font-body text-sm transition-colors focus:outline-none"
                      style={inputStyle}
                    >
                      <option value="">Select…</option>
                      {enquiryClassOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="faq-message"
                      className="block font-body text-xs tracking-[0.15em] uppercase mb-2"
                      style={{ color: 'var(--teal)' }}
                    >
                      Message
                    </label>
                    <textarea
                      id="faq-message"
                      name="Message"
                      rows={3}
                      placeholder="Your question or message…"
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className="w-full px-4 py-3 font-body text-sm transition-colors focus:outline-none resize-none"
                      style={inputStyle}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{
                      scale: 1.02,
                      transition: { type: 'spring', stiffness: 400, damping: 22 },
                    }}
                    whileTap={{
                      scale: 0.97,
                      transition: { type: 'spring', stiffness: 500, damping: 25 },
                    }}
                    className="btn-primary w-full justify-center group disabled:opacity-60"
                  >
                    <Send size={15} aria-hidden="true" />
                    {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
                    <ArrowRight
                      size={15}
                      className="group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </motion.button>

                  {status === 'error' && (
                    <p className="text-xs font-body text-center" style={{ color: 'var(--maroon)' }}>
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
