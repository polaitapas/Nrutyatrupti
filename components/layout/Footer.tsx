import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail, Phone, Instagram, Facebook } from 'lucide-react'
import { siteConfig } from '@/lib/data/site'
import EnquiryTrigger from '@/components/ui/EnquiryTrigger'

const quickLinks = [
  { href: '/about', label: 'About & Our Gurus' },
  { href: '/classes', label: 'Classes & Achievements' },
  { href: '/gallery', label: 'Gallery' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden bg-heritage-footer"
      aria-label="Site footer"
    >
      <div className="relative z-10">
        <div className="line-gold" />
        <div className="wrap py-12 lg:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
                <div className="relative w-16 h-16 opacity-90 group-hover:opacity-100 transition-opacity flex-shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="Nrutyatrupti logo"
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <div
                    className="font-display text-ivory font-light"
                    style={{ fontSize: '1.5rem' }}
                  >
                    Nrutyatrupti
                  </div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-gold/60 font-body">
                    Odissi Dance Academy
                  </div>
                </div>
              </Link>
              <p className="font-body text-ivory/50 text-sm leading-relaxed max-w-xs mb-6">
                {siteConfig.tagline}. A sanctuary for the timeless art of Odisha — classical dance
                taught in the unbroken guru–shishya tradition.
              </p>
              <p className="font-display italic text-gold/40 text-base mb-6">
                यतो हस्तस्ततो दृष्टिः
              </p>
              <div className="flex items-center gap-2 -ml-2">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-ivory/40 hover:text-gold transition-colors"
                  style={{ minWidth: 36, minHeight: 36 }}
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-ivory/40 hover:text-gold transition-colors"
                  style={{ minWidth: 36, minHeight: 36 }}
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-body text-xs tracking-[0.2em] uppercase text-gold/60 mb-5">
                Navigate
              </h3>
              <ul className="space-y-3" role="list">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-ivory/50 hover:text-ivory transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <EnquiryTrigger className="font-body text-sm text-ivory/50 hover:text-ivory transition-colors">
                    Enquire Now
                  </EnquiryTrigger>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-body text-xs tracking-[0.2em] uppercase text-gold/60 mb-5">
                Find Us
              </h3>
              <ul className="space-y-4" role="list">
                <li>
                  <a
                    href={siteConfig.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-3 group"
                    aria-label="Open in Google Maps"
                  >
                    <MapPin
                      size={15}
                      className="text-gold/60 flex-shrink-0 mt-0.5 group-hover:text-gold transition-colors"
                      aria-hidden="true"
                    />
                    <span className="font-body text-sm text-ivory/50 group-hover:text-ivory/70 transition-colors leading-relaxed">
                      {siteConfig.address.full}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex gap-3 items-center group"
                  >
                    <Mail
                      size={15}
                      className="text-gold/60 group-hover:text-gold transition-colors"
                      aria-hidden="true"
                    />
                    <span className="font-body text-sm text-ivory/50 group-hover:text-ivory/70 transition-colors">
                      {siteConfig.email}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                    className="flex gap-3 items-center group"
                    aria-label={`Call ${siteConfig.phone}`}
                  >
                    <Phone
                      size={15}
                      className="text-gold/60 group-hover:text-gold transition-colors"
                      aria-hidden="true"
                    />
                    <span className="font-body text-sm text-ivory/50 group-hover:text-ivory/70 transition-colors">
                      {siteConfig.phone}
                    </span>
                  </a>
                </li>
              </ul>

              <a
                href={siteConfig.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block overflow-hidden border border-white/10 hover:border-gold/30 transition-colors"
                aria-label="Open Nrutyatrupti location in Google Maps"
              >
                <iframe
                  src={siteConfig.address.mapsEmbedUrl}
                  width="100%"
                  height="140"
                  style={{ border: 0, display: 'block', pointerEvents: 'none' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map showing Nrutyatrupti Dance Academy location in Kalinganagar, Bhubaneswar"
                  aria-hidden="true"
                  tabIndex={-1}
                />
              </a>

              <a
                href={siteConfig.google.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="google-review-badge mt-6 block p-4 border border-white/10 rounded"
                style={{ background: 'rgba(201,147,58,0.06)' }}
              >
                <div className="text-gold text-sm font-body font-medium mb-1">
                  ★★★★★ {siteConfig.google.rating}
                </div>
                <div className="text-ivory/40 text-xs font-body">
                  {siteConfig.google.reviewCount} Google Reviews — Leave yours
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="line-gold" />
        <div className="wrap pt-6 text-center">
          <p className="font-display italic text-gold/50 text-sm">
            ଶୁଭମ୍ ଭବତୁ · शुभम् भवतु — may grace walk with every dancer who begins here
          </p>
        </div>
        <div className="wrap py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ivory/30 font-body">
            © {year} {siteConfig.fullName}. All rights reserved.
          </p>
          <p className="text-xs text-ivory/20 font-body">
            Bhubaneswar · Odisha · India
          </p>
        </div>
      </div>
    </footer>
  )
}
