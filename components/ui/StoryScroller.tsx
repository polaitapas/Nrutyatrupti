'use client'
import {
  ReactNode,
  Children,
  useRef,
  useEffect,
  createContext,
  useContext,
  isValidElement,
  cloneElement,
  ReactElement,
} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '@/lib/animation/reduced-motion'

gsap.registerPlugin(ScrollTrigger)

// ---------------------------------------------------------------------------
// Context — lets StorySections read their index + total count
// ---------------------------------------------------------------------------
const StoryCtx = createContext<{ total: number }>({ total: 0 })

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export type RevealEffect =
  | 'fade'
  | 'scale'
  | 'blur'
  | 'parallax'
  | 'textReveal'
  | 'imageReveal'

export interface StorySectionProps {
  children: ReactNode
  effects?: RevealEffect[]
  className?: string
  /** 0-based index — injected by StoryScroller, don't set manually */
  _index?: number
  /**
   * Overlap with the previous section, in pixels. Default 24.
   * Deliberately a fixed px value, not vh: vh scales with viewport
   * *height* while section padding (py-section) scales with viewport
   * *width*, so on tall/narrow screens a vh-based overlap could exceed
   * the next section's top padding and pull its heading text up under
   * the previous section's border/content. A small fixed px overlap
   * stays safely inside that padding on every screen size.
   */
  overlap?: number
  /** Background color so overlapping sections stack cleanly */
  bg?: string
  /** Border rendered at top of section, outside the animated content wrapper */
  topBorder?: ReactNode
  /** Border rendered at bottom of section, outside the animated content wrapper */
  bottomBorder?: ReactNode
}

export interface StoryScrollerProps {
  children: ReactNode
  className?: string
}

// ---------------------------------------------------------------------------
// StorySection
// ---------------------------------------------------------------------------
export function StorySection({
  children,
  effects = ['fade'],
  className = '',
  _index = 0,
  overlap = 24,
  bg,
  topBorder,
  bottomBorder,
}: StorySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const { total } = useContext(StoryCtx)
  const isFirst = _index === 0
  const isLast = _index === total - 1

  useEffect(() => {
    const section = sectionRef.current
    const inner = innerRef.current
    if (!section || !inner) return
    if (prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      // ---- entrance animation (skip for first section) ----
      if (!isFirst) {
        const enterTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 95%',
            end: 'top 25%',
            scrub: 0.8,
          },
        })

        if (effects.includes('fade')) {
          enterTl.fromTo(inner, { opacity: 0 }, { opacity: 1, duration: 1 }, 0)
        }
        if (effects.includes('scale')) {
          enterTl.fromTo(
            inner,
            { scale: 0.88, transformOrigin: 'center top' },
            { scale: 1, duration: 1, ease: 'power2.out' },
            0,
          )
        }
        if (effects.includes('blur')) {
          enterTl.fromTo(
            inner,
            { filter: 'blur(10px)' },
            { filter: 'blur(0px)', duration: 1 },
            0,
          )
        }
        if (effects.includes('parallax')) {
          enterTl.fromTo(inner, { y: 80 }, { y: 0, duration: 1, ease: 'none' }, 0)
        }
      }

      // ---- text reveal: words slide up ----
      if (effects.includes('textReveal')) {
        const texts = inner.querySelectorAll('[data-story-text]')
        texts.forEach((el) => {
          const words = el.textContent?.split(/\s+/) || []
          if (!words.length) return
          el.textContent = ''
          const wrapper = document.createElement('span')
          wrapper.style.display = 'inline'
          words.forEach((word, i) => {
            const clip = document.createElement('span')
            clip.style.cssText =
              'display:inline-block;overflow:hidden;vertical-align:bottom;padding-bottom:0.05em;'
            const span = document.createElement('span')
            span.style.cssText = 'display:inline-block;will-change:transform;'
            span.textContent = word
            clip.appendChild(span)
            wrapper.appendChild(clip)
            if (i < words.length - 1) {
              wrapper.appendChild(document.createTextNode(' '))
            }
          })
          el.appendChild(wrapper)

          const spans = wrapper.querySelectorAll<HTMLElement>('span > span')
          gsap.set(spans, { yPercent: 110, opacity: 0 })
          gsap.to(spans, {
            yPercent: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.04,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          })
        })
      }

      // ---- image reveal: clip-path wipe ----
      if (effects.includes('imageReveal')) {
        const images = inner.querySelectorAll<HTMLElement>('[data-story-image]')
        images.forEach((img) => {
          gsap.set(img, {
            clipPath: 'inset(0 100% 0 0)',
            willChange: 'clip-path',
          })
          gsap.to(img, {
            clipPath: 'inset(0 0% 0 0)',
            duration: 1.2,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: img,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          })
        })
      }

      // ---- exit animation (skip for last section) ----
      // NOTE: intentionally does NOT fade opacity on exit. The entrance timeline
      // already owns `opacity`; having the exit timeline also tween opacity made
      // the two scrubbed timelines fight over the same property, leaving whole
      // sections stuck at partial/near-zero opacity while fully in view. The exit
      // now only gently recedes via scale, so sections stay readable.
      if (!isLast) {
        const exitTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'bottom 40%',
            end: 'bottom 5%',
            scrub: 0.8,
          },
        })

        if (effects.includes('scale')) {
          exitTl.to(
            inner,
            { scale: 0.96, duration: 1, ease: 'power2.in' },
            0,
          )
        }
      }
    }, section)

    return () => ctx.revert()
  }, [effects, isFirst, isLast])

  return (
    <div
      ref={sectionRef}
      className={`story-section ${className}`}
      style={{
        position: 'relative',
        zIndex: total - _index,
        marginTop: isFirst ? 0 : `-${overlap}px`,
        backgroundColor: bg,
        willChange: 'auto',
      }}
    >
      {topBorder && (
        <div style={{ position: 'relative', zIndex: 10 }}>{topBorder}</div>
      )}
      <div ref={innerRef} style={{ willChange: 'transform, opacity, filter' }}>
        {children}
      </div>
      {bottomBorder && (
        <div style={{ position: 'relative', zIndex: 10 }}>{bottomBorder}</div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// StoryScroller — wrapper that injects indices
// ---------------------------------------------------------------------------
export default function StoryScroller({ children, className = '' }: StoryScrollerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const items = Children.toArray(children).filter(isValidElement)
  const total = items.length

  useEffect(() => {
    // Sections are lazy-loaded (next/dynamic) and contain images, so their
    // heights settle AFTER ScrollTrigger first measures start/end positions.
    // Without a refresh, those stale positions leave whole sections stuck near
    // opacity 0. Refresh once things have loaded, on window load, and whenever
    // any image inside the scroller finishes decoding.
    const container = containerRef.current
    const refresh = () => ScrollTrigger.refresh()

    const timers = [
      window.setTimeout(refresh, 300),
      window.setTimeout(refresh, 1200),
    ]
    window.addEventListener('load', refresh)

    const imgs = container ? Array.from(container.querySelectorAll('img')) : []
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener('load', refresh, { once: true })
    })

    return () => {
      timers.forEach((t) => window.clearTimeout(t))
      window.removeEventListener('load', refresh)
      imgs.forEach((img) => img.removeEventListener('load', refresh))
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  const injected = items.map((child, i) => {
    if (isValidElement(child) && (child as ReactElement<StorySectionProps>).type === StorySection) {
      return cloneElement(child as ReactElement<StorySectionProps>, {
        _index: i,
      })
    }
    return child
  })

  return (
    <StoryCtx.Provider value={{ total }}>
      <div ref={containerRef} className={`story-scroller ${className}`}>
        {injected}
      </div>
    </StoryCtx.Provider>
  )
}
