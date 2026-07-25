'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Send, Check, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/data/site'
import { enquiryClassOptions } from '@/lib/data/classes'
import { sanitizePhone } from '@/lib/utils'
import { useScrollLock, isOverlayOpen } from '@/lib/overlayLock'

type EnquiryContextValue = {
  open: () => void
}

const EnquiryContext = createContext<EnquiryContextValue | null>(null)

export function useEnquiry() {
  const ctx = useContext(EnquiryContext)
  if (!ctx) throw new Error('useEnquiry must be used within EnquiryProvider')
  return ctx
}

const POPUP_FIRST_MS = 90000

type FormState = {
  name: string
  phone: string
  email: string
  classType: string
  age: string
}

const emptyForm: FormState = { name: '', phone: '', email: '', classType: '', age: '' }

type Status = 'idle' | 'sending' | 'sent'

const fields = [
  { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Full name', required: true },
  { id: 'phone', label: 'Contact Number', type: 'tel', placeholder: '10-digit mobile number', required: true, maxLength: 10 },
  { id: 'email', label: 'Email Address (optional)', type: 'email', placeholder: 'your@email.com', required: false },
] as const

export default function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<FormState>(emptyForm)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<Status>('idle')
  const isOpenRef = useRef(isOpen)
  const fieldRefs = useRef<Record<string, HTMLInputElement | HTMLSelectElement | null>>({})

  useEffect(() => {
    isOpenRef.current = isOpen
  }, [isOpen])

  const close = useCallback(() => {
    setIsOpen(false)
    setForm(emptyForm)
    setErrors({})
    setStatus('idle')
  }, [])

  const open = useCallback(() => setIsOpen(true), [])

  // Marketing nudge: one gentle popup after 90s of browsing, then never
  // again this session — it should invite, not pester. Suppressed if the
  // visitor already opened an overlay, and never fires after conversion.
  useEffect(() => {
    if (submitted) return
    const timer = setTimeout(() => {
      if (!isOpenRef.current && !isOverlayOpen()) setIsOpen(true)
    }, POPUP_FIRST_MS)
    return () => clearTimeout(timer)
  }, [submitted])

  useScrollLock(isOpen)

  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', handler)
    const raf = requestAnimationFrame(() => fieldRefs.current.name?.focus())
    return () => {
      window.removeEventListener('keydown', handler)
      cancelAnimationFrame(raf)
    }
  }, [isOpen, close])

  const validate = () => {
    const next: Record<string, string> = {}
    if (!form.name.trim()) next.name = 'Please tell us your name.'

    if (!form.phone) {
      next.phone = 'Please add a contact number.'
    } else if (form.phone.length !== 10) {
      next.phone = 'Enter a valid 10-digit phone number.'
    }

    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Please enter a valid email address.'
    }

    if (!form.classType) next.classType = 'Please choose a class type.'

    if (!form.age.trim()) {
      next.age = "Please add the student's age."
    } else if (!/^\d+$/.test(form.age.trim()) || Number(form.age) < 2 || Number(form.age) > 100) {
      next.age = 'Enter a valid age.'
    }

    return next
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)

    const firstInvalid = ['name', 'phone', 'email', 'classType', 'age'].find((id) => validationErrors[id])
    if (firstInvalid) {
      fieldRefs.current[firstInvalid]?.focus()
      return
    }

    setStatus('sending')
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
        `*Free Demo Class Request — Nrutyatrupti*\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || '—'}\nClass Type: ${form.classType}\nAge: ${form.age}`
      )}`,
      '_blank'
    )
    setStatus('sent')
    setSubmitted(true)
    setTimeout(close, 1800)
  }

  return (
    <EnquiryContext.Provider value={{ open }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-modal-title"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: 'rgba(13,9,6,0.75)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            onClick={close}
          >
            <motion.div
              className="relative w-full max-w-md max-h-[90vh] overflow-y-auto no-scrollbar"
              style={{
                background: 'var(--ivory)',
                clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)',
              }}
              initial={{ opacity: 0, scale: 0.97, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 24 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={close}
                aria-label="Close enquiry form"
                className="absolute top-4 right-4 p-2 z-10 transition-colors"
                style={{ color: 'var(--teal)' }}
              >
                <X size={18} />
              </button>

              <div className="p-8">
                <span className="eyebrow eyebrow-gold">Limited Seats</span>
                <h2
                  id="enquiry-modal-title"
                  className="font-display font-light mt-2"
                  style={{ fontSize: '1.9rem', color: 'var(--dark-warm)' }}
                >
                  Free <em style={{ color: 'var(--maroon)' }}>Demo Class</em>
                </h2>
                <p className="font-body text-sm mt-2" style={{ color: 'var(--brown-muted)' }}>
                  Share a few details and we&apos;ll set up your complimentary trial session.
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
                      Opening WhatsApp with your request…
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                    {fields.map((field) => (
                      <div key={field.id}>
                        <label
                          htmlFor={field.id}
                          className="block font-body text-xs tracking-[0.15em] uppercase mb-2"
                          style={{ color: 'var(--teal)' }}
                        >
                          {field.label}
                          {field.required && (
                            <span style={{ color: 'var(--maroon)' }} className="ml-1" aria-label="required">
                              *
                            </span>
                          )}
                        </label>
                        <input
                          id={field.id}
                          ref={(el) => {
                            fieldRefs.current[field.id] = el
                          }}
                          type={field.type}
                          placeholder={field.placeholder}
                          maxLength={'maxLength' in field ? field.maxLength : undefined}
                          value={form[field.id]}
                          onChange={(e) => {
                            const raw = e.target.value
                            const value = field.id === 'phone' ? sanitizePhone(raw) : raw
                            setForm((f) => ({ ...f, [field.id]: value }))
                            if (errors[field.id]) setErrors((er) => ({ ...er, [field.id]: '' }))
                          }}
                          aria-invalid={!!errors[field.id]}
                          aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
                          className="w-full px-4 py-3 font-body text-sm transition-colors focus:outline-none"
                          style={{
                            color: 'var(--dark-warm)',
                            background: 'rgba(250,246,239,0.8)',
                            border: `1px solid ${errors[field.id] ? 'var(--maroon)' : 'rgba(14,75,65,0.2)'}`,
                            clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)',
                          }}
                        />
                        {errors[field.id] && (
                          <p
                            id={`${field.id}-error`}
                            role="alert"
                            className="mt-1.5 text-xs font-body"
                            style={{ color: 'var(--maroon)' }}
                          >
                            {errors[field.id]}
                          </p>
                        )}
                      </div>
                    ))}

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="classType"
                          className="block font-body text-xs tracking-[0.15em] uppercase mb-2"
                          style={{ color: 'var(--teal)' }}
                        >
                          Class Type
                          <span style={{ color: 'var(--maroon)' }} className="ml-1" aria-label="required">
                            *
                          </span>
                        </label>
                        <select
                          id="classType"
                          ref={(el) => {
                            fieldRefs.current.classType = el
                          }}
                          value={form.classType}
                          onChange={(e) => {
                            setForm((f) => ({ ...f, classType: e.target.value }))
                            if (errors.classType) setErrors((er) => ({ ...er, classType: '' }))
                          }}
                          aria-invalid={!!errors.classType}
                          className="w-full px-3 py-3 font-body text-sm transition-colors focus:outline-none"
                          style={{
                            color: 'var(--dark-warm)',
                            background: 'rgba(250,246,239,0.8)',
                            border: `1px solid ${errors.classType ? 'var(--maroon)' : 'rgba(14,75,65,0.2)'}`,
                            clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)',
                          }}
                        >
                          <option value="">Select…</option>
                          {enquiryClassOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        {errors.classType && (
                          <p role="alert" className="mt-1.5 text-xs font-body" style={{ color: 'var(--maroon)' }}>
                            {errors.classType}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="age"
                          className="block font-body text-xs tracking-[0.15em] uppercase mb-2"
                          style={{ color: 'var(--teal)' }}
                        >
                          Age
                          <span style={{ color: 'var(--maroon)' }} className="ml-1" aria-label="required">
                            *
                          </span>
                        </label>
                        <input
                          id="age"
                          ref={(el) => {
                            fieldRefs.current.age = el
                          }}
                          type="number"
                          min={2}
                          max={100}
                          placeholder="e.g. 8"
                          value={form.age}
                          onChange={(e) => {
                            setForm((f) => ({ ...f, age: e.target.value }))
                            if (errors.age) setErrors((er) => ({ ...er, age: '' }))
                          }}
                          aria-invalid={!!errors.age}
                          className="w-full px-4 py-3 font-body text-sm transition-colors focus:outline-none"
                          style={{
                            color: 'var(--dark-warm)',
                            background: 'rgba(250,246,239,0.8)',
                            border: `1px solid ${errors.age ? 'var(--maroon)' : 'rgba(14,75,65,0.2)'}`,
                            clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)',
                          }}
                        />
                        {errors.age && (
                          <p role="alert" className="mt-1.5 text-xs font-body" style={{ color: 'var(--maroon)' }}>
                            {errors.age}
                          </p>
                        )}
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 400, damping: 22 } }}
                      whileTap={{ scale: 0.97, transition: { type: 'spring', stiffness: 500, damping: 25 } }}
                      className="btn-primary w-full justify-center group disabled:opacity-60"
                    >
                      <Send size={15} aria-hidden="true" />
                      Request For Demo
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </motion.button>
                    <p className="text-xs font-body text-center" style={{ color: 'var(--brown-muted)' }}>
                      This will open WhatsApp with your request pre-filled.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </EnquiryContext.Provider>
  )
}
