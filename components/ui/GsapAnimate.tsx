'use client'
import { ReactNode } from 'react'
import {
  useGsapAnimate,
  useGsapStagger,
  type UseGsapAnimateOptions,
  type UseGsapStaggerOptions,
} from '@/lib/animation/gsap-engine'

export interface GsapAnimateProps extends UseGsapAnimateOptions {
  children: ReactNode
  className?: string
}

export function GsapAnimate({
  children,
  className,
  ...options
}: GsapAnimateProps) {
  const ref = useGsapAnimate<HTMLDivElement>(options)

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </div>
  )
}

export interface GsapStaggerProps extends UseGsapStaggerOptions {
  children: ReactNode
  className?: string
}

export function GsapStagger({
  children,
  className,
  ...options
}: GsapStaggerProps) {
  const ref = useGsapStagger<HTMLDivElement>(options)

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
