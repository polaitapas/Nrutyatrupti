'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import AnimateIn, { AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'
import { galleryImages } from '@/lib/data/gallery'
import { founderData, gurushreeData } from '@/lib/data/site'

interface CarouselImage {
  src: string
  alt: string
  caption: string
}

const findImage = (src: string): CarouselImage | null => {
  const img = galleryImages.find((g) => g.src === src)
  return img ? { src: img.src, alt: img.alt, caption: img.caption } : null
}

const pick = (srcs: string[]): CarouselImage[] =>
  srcs.map(findImage).filter((img): img is CarouselImage => img !== null)

type CategoryKey = 'class' | 'stage' | 'recognition' | 'founder'

const categories: {
  key: CategoryKey
  label: string
  blurb: string
  color: string
  hero: CarouselImage
  images: CarouselImage[]
}[] = [
  {
    key: 'class',
    label: 'Class',
    blurb: 'A little nervous, a little curious — every dancer starts exactly here, learning simply to stand, breathe, and belong in the studio.',
    color: 'var(--teal-light)',
    hero: findImage('/images/IMG_20220730_190441.jpg')!,
    images: pick([
      '/images/IMG_20240815_202528.jpg',
      '/images/IMG_20240818_175828.jpg',
      '/images/20260603_182826.jpg',
      '/images/IMG_20240816_185134.jpg',
      '/images/20260607_204315.jpg',
      '/images/nrutyatrupti-folk-line-formation-namaste.jpg',
    ]),
  },
  {
    key: 'stage',
    label: 'On Stage',
    blurb: 'Under real lights, before a real audience — the moment nerves turn into presence, and presence turns into pride.',
    color: 'var(--maroon)',
    hero: findImage('/images/0S6A7464.JPG.jpeg')!,
    images: pick([
      '/images/FB_IMG_1705843913115.jpg',
      '/images/IMG_20240817_173656.jpg',
      '/images/IMG_20240816_185511.jpg',
      '/images/IMG_20240816_215728.jpg',
      '/images/IMG_20221120_185214.jpg',
      '/images/20260603_183221.jpg',
      '/images/20260603_193656.jpg',
      '/images/0S6A7298.JPG.jpeg',
      '/images/0S6A7308.JPG.jpeg',
      '/images/IMG_20221120_182016.jpg',
      '/images/IMG_20221120_185108.jpg',
    ]),
  },
  {
    key: 'recognition',
    label: 'Recognition',
    blurb: 'Certificates, felicitations, standing ovations — proof of everything a student quietly worked to become.',
    color: 'var(--gold)',
    hero: findImage('/images/IMG_20250109_213200.jpg')!,
    images: pick([
      '/images/FB_IMG_1640351843454.jpg',
      '/images/FB_IMG_1659327692923.jpg',
      '/images/FB_IMG_1725034823423.jpg',
      '/images/FB_IMG_1770531932112.jpg',
      '/images/IMG-20230414-WA0009.jpg',
      '/images/FB_IMG_1640351848327.jpg',
    ]),
  },
  {
    key: 'founder',
    label: 'Founder & Guru',
    blurb: 'The lineage behind every lesson — Founder Truptismita Tarini and Gurushree Swayam Pragyan Sahoo, and the bond they share with every student.',
    color: 'var(--parchment)',
    hero: { src: founderData.image, alt: founderData.imageAlt, caption: 'Truptismita Tarini — Founder & Mentor' },
    images: [
      { src: gurushreeData.image, alt: gurushreeData.imageAlt, caption: 'Gurushree Swayam Pragyan Sahoo — Our Guru' },
      ...pick([
        '/images/DSC_0116.JPG.jpeg',
        '/images/DSC_0130.JPG.jpeg',
      ]),
    ],
  },
]

// Purely decorative per-tab vertical offsets so the row reads as unevenly
// inserted bookmark tabs rather than a uniform button bar.
const tabOffsets = [0, 18, 6, 24]

export default function StudentTransformation() {
  const [active, setActive] = useState<CategoryKey>('class')
  const scrollRef = useRef<HTMLDivElement>(null)
  const activeIndex = categories.findIndex((c) => c.key === active)
  const activeCategory = categories[activeIndex]

  return (
    <section
      className="relative overflow-hidden py-section bg-heritage-deep-alt"
      aria-label="The student journey at Nrutyatrupti"
    >
      <div className="wrap relative z-10">
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <AnimateIn>
            <span className="eyebrow eyebrow-gold justify-center">The Transformation</span>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h2 className="section-title mt-3 text-ivory">
              From <span style={{ color: 'var(--gold-light)' }}>first class</span> to center
              stage
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.25}>
            <p className="lede mt-4 mx-auto text-center text-ivory/60">
              Parents don&apos;t enrol a child in dance classes. They enrol them in who that
              child is about to become — this is what that journey actually looks like.
            </p>
          </AnimateIn>
        </div>

        {/* Staggered bookmark tabs */}
        <AnimateIn delay={0.3}>
          <div
            className="flex justify-center gap-2 sm:gap-3 -mb-px relative z-10"
            role="tablist"
            aria-label="Journey categories"
          >
            {categories.map((c, i) => {
              const isActive = c.key === active
              return (
                <button
                  key={c.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(c.key)}
                  className="font-body text-[11px] sm:text-sm tracking-[0.06em] uppercase px-3 sm:px-5 pt-3 pb-4 sm:pb-5 transition-all duration-300"
                  style={{
                    color: isActive ? 'var(--dark)' : 'rgba(250,246,239,0.75)',
                    background: isActive ? c.color : 'rgba(250,246,239,0.07)',
                    borderTop: `1px solid ${isActive ? c.color : 'rgba(250,246,239,0.2)'}`,
                    borderLeft: `1px solid ${isActive ? c.color : 'rgba(250,246,239,0.2)'}`,
                    borderRight: `1px solid ${isActive ? c.color : 'rgba(250,246,239,0.2)'}`,
                    borderBottom: 'none',
                    clipPath: 'polygon(0 0, 100% 0, 100% 78%, 50% 100%, 0 78%)',
                    transform: `translateY(${isActive ? 0 : tabOffsets[i]}px) scale(${isActive ? 1.06 : 1})`,
                    boxShadow: isActive ? '0 10px 24px -8px rgba(0,0,0,0.45)' : 'none',
                  }}
                >
                  {c.label}
                </button>
              )
            })}
          </div>
        </AnimateIn>

        {/* Content panel — left hero image, right scrollable stack */}
        <div
          key={active}
          className="relative grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-5 lg:gap-8 p-4 sm:p-6"
          style={{ background: 'rgba(250,246,239,0.04)', border: '1px solid rgba(250,246,239,0.12)' }}
        >
          {/* Left — hero image */}
          <AnimateIn variant="fadeIn" className="lg:h-[560px]">
            <div className="relative h-[320px] sm:h-[420px] lg:h-full overflow-hidden clip-chamfer">
              <Image
                src={activeCategory.hero.src}
                alt={activeCategory.hero.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 380px"
                priority={false}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(5,22,19,0.9) 0%, transparent 45%)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span
                  className="inline-block text-[10px] uppercase tracking-[0.1em] font-body px-2.5 py-1 mb-2"
                  style={{ background: activeCategory.color, color: 'var(--dark)' }}
                >
                  {activeCategory.label}
                </span>
                <p className="font-body text-ivory text-sm leading-relaxed">
                  {activeCategory.hero.caption}
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Right — scrollable stack of the section's other images */}
          <div
            ref={scrollRef}
            className="lg:h-[560px] overflow-y-auto overflow-x-hidden pr-1 sm:pr-3 -mr-1 sm:-mr-3 no-scrollbar"
          >
            <p className="font-body text-sm text-ivory/55 leading-relaxed mb-5 max-w-md">
              {activeCategory.blurb}
            </p>
            <AnimateStagger className="flex flex-col gap-4 pb-2" staggerDelay={0.05}>
              {activeCategory.images.map((img, i) => (
                <AnimateStaggerItem
                  key={img.src}
                  variant="fadeUp"
                  className="flex"
                  style={{ justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end' }}
                >
                  <div
                    className="relative card-lift-sm w-[88%]"
                    style={{
                      transform: `rotate(${i % 2 === 0 ? -1.1 : 1.1}deg)`,
                    }}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden clip-chamfer-sm img-zoom">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 92vw, 46vw"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(to top, rgba(5,22,19,0.8) 0%, transparent 55%)' }}
                      />
                      <span
                        className="absolute top-2.5 left-2.5 font-display italic text-lg"
                        style={{ color: 'var(--gold-light)', opacity: 0.85 }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="absolute bottom-2.5 left-3 right-3 font-body text-ivory/85 text-xs leading-snug">
                        {img.caption}
                      </p>
                    </div>
                  </div>
                </AnimateStaggerItem>
              ))}
            </AnimateStagger>
          </div>
        </div>
      </div>
    </section>
  )
}
