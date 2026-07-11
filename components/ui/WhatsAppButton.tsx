'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { siteConfig } from '@/lib/data/site'

export default function WhatsAppButton() {
  const reduce = useReducedMotion()

  return (
    <motion.a
      href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20Nrutyatrupti%2C%20I%20would%20like%20to%20enquire%20about%20dance%20classes.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
      style={{ background: '#25D366' }}
      animate={reduce ? undefined : { y: [0, -10, 0] }}
      transition={reduce ? undefined : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.08, transition: { type: 'spring', stiffness: 400, damping: 22 } }}
      whileTap={{ scale: 0.95, transition: { type: 'spring', stiffness: 500, damping: 25 } }}
    >
      <svg
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="white"
        aria-hidden="true"
      >
        <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.29.638 4.43 1.744 6.256L4 29l7.94-1.706A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.7c-1.95 0-3.766-.57-5.29-1.548l-.38-.234-4.71 1.012 1.03-4.59-.25-.394A9.65 9.65 0 0 1 5.3 15c0-5.905 4.8-10.7 10.704-10.7 5.902 0 10.7 4.795 10.7 10.7 0 5.904-4.798 10.7-10.7 10.7Zm5.86-8.02c-.32-.16-1.89-.933-2.183-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-1.014 1.253-.187.213-.373.24-.693.08-.32-.16-1.352-.498-2.575-1.588-.952-.849-1.595-1.898-1.782-2.218-.187-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.626-.524-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.256 3.444 5.467 4.83.764.33 1.36.527 1.826.674.767.244 1.466.21 2.018.127.616-.092 1.89-.773 2.157-1.52.267-.746.267-1.386.187-1.52-.08-.133-.293-.213-.613-.373Z" />
      </svg>
    </motion.a>
  )
}
