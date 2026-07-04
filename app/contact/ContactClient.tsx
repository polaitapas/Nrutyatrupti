'use client'
import { useState } from 'react'
import { Phone, Mail, MapPin, Instagram, Facebook, Send, Check } from 'lucide-react'
import AnimateIn from '@/components/ui/AnimateIn'
import { siteConfig } from '@/lib/data/site'

const classOptions = [
  'Odissi Classical',
  'Sambalpuri Folk',
  'Odia Folk',
  'Fusion',
  'Theory & Certification',
  'Online Classes',
  'Not Sure Yet',
]

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactClient() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    preferredClass: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
      `*New Enquiry — Nrutyatrupti*\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nStudent Age: ${form.age}\nPreferred Class: ${form.preferredClass}\nMessage: ${form.message}`
    )}`, '_blank')
    setStatus('sent')
  }

  return (
    <>
      <section
        className="relative pt-32 pb-20 overflow-hidden bg-heritage-deep"
        aria-label="Contact header"
      >
        <div className="wrap relative z-10">
          <AnimateIn>
            <span className="eyebrow eyebrow-gold">Begin Your Journey</span>
            <h1
              className="font-display font-light text-ivory mt-4 leading-none"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', letterSpacing: '-0.02em' }}
            >
              Reach <em style={{ color: 'var(--gold)' }}>Out</em>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="lede mt-4 text-ivory/55">
              Whether you&apos;re enquiring about classes, a summer camp, a performance, or a
              collaboration — we&apos;d love to hear from you.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section
        className="py-section bg-heritage-light"
        aria-label="Contact form and information"
      >
        <div className="wrap relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <AnimateIn variant="slideLeft">
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Enquiry form"
                className="space-y-5"
              >
                <h2 className="font-display font-light text-2xl mb-8" style={{ color: 'var(--dark-warm)' }}>
                  Send an <em style={{ color: 'var(--maroon)' }}>enquiry</em>
                </h2>

                {[
                  { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Full name', required: true },
                  { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210', required: true },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                  { id: 'age', label: "Student's Age", type: 'text', placeholder: 'e.g. 8 years, or "Adult"' },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block font-body text-xs tracking-[0.15em] uppercase mb-2"
                      style={{ color: 'var(--teal)' }}
                    >
                      {field.label}
                      {field.required && <span style={{ color: 'var(--maroon)' }} className="ml-1" aria-label="required">*</span>}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm((f) => ({ ...f, [field.id]: e.target.value }))}
                      className="w-full px-4 py-3 font-body text-sm transition-colors focus:outline-none"
                      style={{
                        color: 'var(--dark-warm)',
                        background: 'rgba(250,246,239,0.8)',
                        border: '1px solid rgba(14,75,65,0.2)',
                        clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)',
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="preferredClass"
                    className="block font-body text-xs tracking-[0.15em] uppercase mb-2"
                    style={{ color: 'var(--teal)' }}
                  >
                    Preferred Class
                  </label>
                  <select
                    id="preferredClass"
                    value={form.preferredClass}
                    onChange={(e) => setForm((f) => ({ ...f, preferredClass: e.target.value }))}
                    className="w-full px-4 py-3 font-body text-sm transition-colors focus:outline-none"
                    style={{
                      color: 'var(--dark-warm)',
                      background: 'rgba(250,246,239,0.8)',
                      border: '1px solid rgba(14,75,65,0.2)',
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)',
                    }}
                  >
                    <option value="">Select a class type…</option>
                    {classOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-body text-xs tracking-[0.15em] uppercase mb-2"
                    style={{ color: 'var(--teal)' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about yourself, your goals, or anything else we should know…"
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-3 font-body text-sm resize-none transition-colors focus:outline-none"
                    style={{
                      color: 'var(--dark-warm)',
                      background: 'rgba(250,246,239,0.8)',
                      border: '1px solid rgba(14,75,65,0.2)',
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className="btn-primary w-full justify-center disabled:opacity-60"
                >
                  {status === 'sent' ? (
                    <>
                      <Check size={15} aria-hidden="true" /> Opening WhatsApp…
                    </>
                  ) : (
                    <>
                      <Send size={15} aria-hidden="true" /> Send via WhatsApp
                    </>
                  )}
                </button>
                <p className="text-xs font-body text-center" style={{ color: '#8B7355' }}>
                  This will open WhatsApp with your message pre-filled.
                </p>
              </form>
            </AnimateIn>

            <div>
              <AnimateIn delay={0.2}>
                <h2 className="font-display font-light text-2xl mb-8" style={{ color: 'var(--dark-warm)' }}>
                  Other ways to <em style={{ color: 'var(--maroon)' }}>connect</em>
                </h2>
              </AnimateIn>

              <AnimateIn delay={0.3} className="space-y-6">
                {[
                  {
                    icon: Phone,
                    label: 'WhatsApp / Phone',
                    value: siteConfig.phone,
                    href: `https://wa.me/${siteConfig.whatsapp}`,
                    external: true,
                  },
                  {
                    icon: Mail,
                    label: 'Email',
                    value: siteConfig.email,
                    href: `mailto:${siteConfig.email}`,
                  },
                  {
                    icon: MapPin,
                    label: 'Visit Us',
                    value: siteConfig.address.full,
                    href: siteConfig.address.mapsUrl,
                    external: true,
                  },
                  {
                    icon: Instagram,
                    label: 'Instagram',
                    value: siteConfig.social.instagramHandle,
                    href: siteConfig.social.instagram,
                    external: true,
                  },
                  {
                    icon: Facebook,
                    label: 'Facebook',
                    value: 'nrutya.trupti',
                    href: siteConfig.social.facebook,
                    external: true,
                  },
                ].map(({ icon: Icon, label, value, href, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 p-5 group transition-colors card-lift-sm"
                    style={{
                      border: '1px solid rgba(14,75,65,0.15)',
                      background: 'rgba(250,246,239,0.7)',
                      clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
                    }}
                  >
                    <div
                      className="w-9 h-9 flex items-center justify-center flex-shrink-0 transition-colors"
                      style={{
                        border: '1px solid rgba(166,48,59,0.3)',
                        background: 'rgba(166,48,59,0.07)',
                      }}
                    >
                      <Icon size={15} style={{ color: 'var(--maroon)' }} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-body text-xs tracking-[0.15em] uppercase mb-1" style={{ color: 'var(--teal)', opacity: 0.7 }}>
                        {label}
                      </div>
                      <div className="font-body text-sm transition-colors leading-relaxed" style={{ color: 'var(--dark-warm)' }}>
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </AnimateIn>

              <AnimateIn delay={0.5} className="mt-8">
                <div
                  className="overflow-hidden"
                  style={{
                    border: '1px solid rgba(14,75,65,0.18)',
                    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.9!2d85.8245!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE3JzQ2LjAiTiA4NcKwNDknMjguMiJF!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="220"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nrutyatrupti Dance Academy location map"
                    aria-label="Google Maps showing Nrutyatrupti Dance Academy location in Kalinganagar, Bhubaneswar"
                  />
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
