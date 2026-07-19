import type { Metadata, Viewport } from 'next'
import { MotionConfig } from 'framer-motion'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import EnquiryProvider from '@/components/ui/EnquiryModal'
import { siteConfig } from '@/lib/data/site'

export const viewport: Viewport = {
  themeColor: '#C9933A',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.url),
  title: {
    default: `${siteConfig.fullName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.fullName }],
  creator: siteConfig.fullName,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.seo.url,
    siteName: siteConfig.fullName,
    title: `${siteConfig.fullName} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: siteConfig.fullName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.fullName} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.seo.ogImage],
  },
  icons: {
    icon: [
      { url: '/images/logo.png', type: 'image/png' },
    ],
    apple: [{ url: '/images/logo.png' }],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'EducationalOrganization'],
  name: siteConfig.fullName,
  description: siteConfig.description,
  url: siteConfig.seo.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  foundingDate: siteConfig.founded,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.pin,
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.address.lat,
    longitude: siteConfig.address.lng,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: siteConfig.google.rating,
    reviewCount: siteConfig.google.reviewCount,
  },
  sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  founder: {
    '@type': 'Person',
    name: 'Truptismita Tarini',
    jobTitle: 'Founder and Mentor',
    description:
      'B-Grade Doordarshan Artist and CCRT Senior Scholar with 20+ years of Odissi training in the Guru Deba Prasad Das lineage',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="stylesheet" href="https://use.typekit.net/ysq5dvr.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Noto+Sans+Oriya:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        {/* Fixed full-viewport background — the dancer stays put while content scrolls over it */}
        <div className="site-bg" aria-hidden="true" />
        <div className="page-loader" suppressHydrationWarning>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="" width={80} height={80} />
        </div>
        <MotionConfig reducedMotion="user">
          <EnquiryProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold focus:text-dark focus:font-body focus:text-sm"
            >
              Skip to content
            </a>
            <Navbar />
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
          </EnquiryProvider>
        </MotionConfig>
      </body>
    </html>
  )
}
