'use client'
import { useEffect, useState } from 'react'

let cachedPrefersReduced: boolean | null = null

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  if (cachedPrefersReduced !== null) return cachedPrefersReduced
  cachedPrefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  return cachedPrefersReduced
}

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    cachedPrefersReduced = mq.matches

    const handler = (e: MediaQueryListEvent) => {
      setReduced(e.matches)
      cachedPrefersReduced = e.matches
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return reduced
}

export function getReducedMotionState(from: Record<string, unknown>) {
  const safe: Record<string, unknown> = {}
  if ('opacity' in from) safe.opacity = from.opacity
  return safe
}
