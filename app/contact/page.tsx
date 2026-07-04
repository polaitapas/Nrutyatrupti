import { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact & Enquire',
  description:
    'Enquire about Odissi, Sambalpuri, and Odia folk dance classes at Nrutyatrupti in Kalinganagar, Bhubaneswar. WhatsApp, call, or send an enquiry — free trial class available.',
}

export default function ContactPage() {
  return <ContactClient />
}
