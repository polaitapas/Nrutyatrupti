import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
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
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><g fill='none' stroke='%23C9933A' stroke-width='2'><circle cx='32' cy='32' r='28'/><circle cx='32' cy='32' r='9'/><line x1='32' y1='4' x2='32' y2='60'/><line x1='4' y1='32' x2='60' y2='32'/><line x1='12' y1='12' x2='52' y2='52'/><line x1='52' y1='12' x2='12' y2='52'/></g><circle cx='32' cy='32' r='4' fill='%23C9933A'/></svg>",
        type: 'image/svg+xml',
      },
    ],
  },
  alternates: {
    canonical: siteConfig.seo.url,
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'DanceSchool',
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
    latitude: 20.2961,
    longitude: 85.8245,
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
    jobTitle: 'Founder and Guru',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
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
      </body>
    </html>
  )
}
