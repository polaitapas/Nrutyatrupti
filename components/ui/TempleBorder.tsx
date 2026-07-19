'use client'
import { useRef, useEffect, useId } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '@/lib/animation/reduced-motion'

gsap.registerPlugin(ScrollTrigger)

export type TempleBorderVariant = 'gold' | 'maroon' | 'teal' | 'ivory'
export type TempleBorderPosition = 'top' | 'bottom' | 'both'

interface TempleBorderProps {
  variant?: TempleBorderVariant
  position?: TempleBorderPosition
  animate?: boolean
  className?: string
  height?: number
}

const COLORS: Record<TempleBorderVariant, { primary: string; secondary: string; accent: string; shimmer: string }> = {
  gold: {
    primary: '#C9933A',
    secondary: '#8B6419',
    accent: '#E4C06A',
    shimmer: '#F0D899',
  },
  maroon: {
    primary: '#A6303B',
    secondary: '#7A1F28',
    accent: '#C2434F',
    shimmer: '#E4C06A',
  },
  teal: {
    primary: '#0E4B41',
    secondary: '#0A332C',
    accent: '#17685A',
    shimmer: '#C9933A',
  },
  ivory: {
    primary: '#C9933A',
    secondary: '#B8832E',
    accent: '#E4C06A',
    shimmer: '#FAF6EF',
  },
}

function TempleSVG({
  colors,
  height,
  id,
}: {
  colors: typeof COLORS.gold
  height: number
  id: string
}) {
  const h = height
  const motifW = 28

  return (
    <svg
      width="100%"
      height={h}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className="temple-border-svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-shimmer`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={colors.primary} stopOpacity="0" />
          <stop offset="40%" stopColor={colors.shimmer} stopOpacity="0.7" />
          <stop offset="50%" stopColor={colors.shimmer} stopOpacity="1" />
          <stop offset="60%" stopColor={colors.shimmer} stopOpacity="0.7" />
          <stop offset="100%" stopColor={colors.primary} stopOpacity="0" />
        </linearGradient>

        <pattern id={`${id}-motif`} x="0" y="0" width={motifW} height={h} patternUnits="userSpaceOnUse">
          {/* Top rule */}
          <line x1="0" y1="0.5" x2={motifW} y2="0.5" stroke={colors.primary} strokeWidth="0.5" opacity="0.6" />

          {/* Temple arch - pointed top */}
          <path
            d={`M ${motifW * 0.15} ${h - 1.5}
                L ${motifW * 0.15} ${h * 0.4}
                Q ${motifW * 0.15} ${h * 0.2}, ${motifW * 0.5} ${h * 0.08}
                Q ${motifW * 0.85} ${h * 0.2}, ${motifW * 0.85} ${h * 0.4}
                L ${motifW * 0.85} ${h - 1.5}`}
            fill="none"
            stroke={colors.primary}
            strokeWidth="0.7"
            opacity="0.65"
          />

          {/* Inner arch */}
          <path
            d={`M ${motifW * 0.28} ${h - 1.5}
                L ${motifW * 0.28} ${h * 0.48}
                Q ${motifW * 0.28} ${h * 0.32}, ${motifW * 0.5} ${h * 0.2}
                Q ${motifW * 0.72} ${h * 0.32}, ${motifW * 0.72} ${h * 0.48}
                L ${motifW * 0.72} ${h - 1.5}`}
            fill="none"
            stroke={colors.accent}
            strokeWidth="0.4"
            opacity="0.45"
          />

          {/* Kalasha finial at top */}
          <circle cx={motifW * 0.5} cy={h * 0.08} r="1" fill={colors.accent} opacity="0.7" />
          <line x1={motifW * 0.5} y1={h * 0.02} x2={motifW * 0.5} y2={h * 0.07} stroke={colors.primary} strokeWidth="0.5" opacity="0.6" />

          {/* Pillar bases - small rectangles */}
          <rect x={motifW * 0.12} y={h * 0.75} width={motifW * 0.08} height={h * 0.2} fill={colors.primary} opacity="0.12" />
          <rect x={motifW * 0.80} y={h * 0.75} width={motifW * 0.08} height={h * 0.2} fill={colors.primary} opacity="0.12" />

          {/* Tiny diamond between arches */}
          <path
            d={`M ${motifW} ${h * 0.35} L ${motifW + 2} ${h * 0.42} L ${motifW} ${h * 0.49} L ${motifW - 2} ${h * 0.42} Z`}
            fill={colors.accent}
            opacity="0.35"
          />

          {/* Lotus dot at arch base */}
          <circle cx={motifW * 0.5} cy={h * 0.88} r="0.8" fill={colors.accent} opacity="0.4" />

          {/* Bottom rule */}
          <line x1="0" y1={h - 0.5} x2={motifW} y2={h - 0.5} stroke={colors.primary} strokeWidth="0.5" opacity="0.6" />
        </pattern>
      </defs>

      {/* Fill with repeating temple motif */}
      <rect
        className="temple-border-arches"
        x="0" y="0" width="100%" height={h}
        fill={`url(#${id}-motif)`}
      />

      {/* Shimmer overlay */}
      <rect
        className="temple-border-shimmer"
        x="-100%"
        y="0"
        width="100%"
        height={h}
        fill={`url(#${id}-shimmer)`}
        opacity="0"
      />
    </svg>
  )
}

export default function TempleBorder({
  variant = 'gold',
  position = 'bottom',
  animate = true,
  className = '',
  height = 18,
}: TempleBorderProps) {
  const topRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!animate || prefersReducedMotion()) return

    const refs = [
      position !== 'bottom' ? topRef.current : null,
      position !== 'top' ? bottomRef.current : null,
    ].filter(Boolean) as HTMLDivElement[]

    if (!refs.length) return

    const ctx = gsap.context(() => {
      refs.forEach((el) => {
        const shimmer = el.querySelector('.temple-border-shimmer')
        if (!shimmer) return

        gsap.to(shimmer, {
          attr: { x: '100%' },
          opacity: 1,
          duration: 2.5,
          ease: 'power1.inOut',
          repeat: -1,
          repeatDelay: 5,
          onRepeat() {
            gsap.set(shimmer, { attr: { x: '-100%' } })
          },
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play pause resume pause',
          },
        })

      })
    })

    return () => ctx.revert()
  }, [animate, position])

  const showTop = position === 'top' || position === 'both'
  const showBottom = position === 'bottom' || position === 'both'
  const colors = COLORS[variant]
  const reactId = useId()
  const uid = `tb-${variant}-${reactId.replace(/:/g, '')}`

  return (
    <>
      {showTop && (
        <div
          ref={topRef}
          className={`temple-border temple-border--top ${className}`}
          style={{ overflow: 'hidden', lineHeight: 0, position: 'relative', zIndex: 10 }}
        >
          <TempleSVG colors={colors} height={height} id={`${uid}-t`} />
        </div>
      )}
      {showBottom && (
        <div
          ref={bottomRef}
          className={`temple-border temple-border--bottom ${className}`}
          style={{ overflow: 'hidden', lineHeight: 0, position: 'relative', zIndex: 10 }}
        >
          <TempleSVG colors={colors} height={height} id={`${uid}-b`} />
        </div>
      )}
    </>
  )
}
