'use client'
import { useMemo } from 'react'
import type { Transition } from 'framer-motion'
import type { AnimationConfig, AnimationPreset, TransformState } from './types'
import { DEFAULT_CONFIG } from './types'
import { getFramerEasing, isSpringEasing } from './easing'
import { getPreset } from './presets'
import { usePrefersReducedMotion } from './reduced-motion'

function buildTransition(config: AnimationConfig): Transition {
  const c = { ...DEFAULT_CONFIG, ...config }

  if (isSpringEasing(c.easing)) {
    return {
      type: 'spring',
      stiffness: 260,
      damping: 30,
      delay: c.delay,
      repeat: c.repeat,
      repeatType: c.reverse ? 'reverse' : 'loop',
    }
  }

  return {
    duration: c.duration,
    delay: c.delay,
    ease: getFramerEasing(c.easing) as [number, number, number, number],
    repeat: c.repeat,
    repeatType: c.reverse ? 'reverse' : 'loop',
  }
}

export interface UseFramerAnimateOptions extends AnimationConfig {
  from?: TransformState
  to?: TransformState
  preset?: AnimationPreset
}

export interface FramerAnimateResult {
  initial: Record<string, any> // eslint-disable-line @typescript-eslint/no-explicit-any
  animate: Record<string, any> // eslint-disable-line @typescript-eslint/no-explicit-any
  whileInView?: Record<string, any> // eslint-disable-line @typescript-eslint/no-explicit-any
  transition: Transition
  viewport?: { amount?: number; margin?: string; once?: boolean }
  whileHover?: Record<string, any> // eslint-disable-line @typescript-eslint/no-explicit-any
}

export function useFramerAnimate(options: UseFramerAnimateOptions): FramerAnimateResult {
  const reduced = usePrefersReducedMotion()

  return useMemo(() => {
    const preset = options.preset ? getPreset(options.preset) : null
    const fromState = { ...(options.from ?? preset?.from ?? {}) }
    const toState = { ...(options.to ?? preset?.to ?? {}) }
    const transition = buildTransition(options)

    if (reduced) {
      const safeFrom: Record<string, any> = {} // eslint-disable-line @typescript-eslint/no-explicit-any
      if ('opacity' in fromState) safeFrom.opacity = fromState.opacity
      return {
        initial: safeFrom,
        animate: { opacity: 1 },
        transition: { duration: 0 },
      }
    }

    const trigger = options.trigger ?? 'mount'

    if (trigger === 'viewport' || trigger === 'scroll') {
      return {
        initial: fromState,
        animate: {},
        whileInView: toState,
        transition,
        viewport: {
          amount: options.viewport?.amount ?? 0.15,
          margin: options.viewport?.margin,
          once: options.viewport?.once !== false,
        },
      }
    }

    if (trigger === 'hover') {
      return {
        initial: fromState,
        animate: fromState,
        whileHover: toState,
        transition,
      }
    }

    return {
      initial: fromState,
      animate: toState,
      transition,
    }
  }, [reduced]) // eslint-disable-line react-hooks/exhaustive-deps
}

type VariantMap = Record<string, Record<string, any>> // eslint-disable-line @typescript-eslint/no-explicit-any

export function useFramerVariants(
  options: UseFramerAnimateOptions & { stagger?: number },
): { parent: VariantMap; child: VariantMap } {
  const reduced = usePrefersReducedMotion()

  return useMemo(() => {
    const preset = options.preset ? getPreset(options.preset) : null
    const fromState = { ...(options.from ?? preset?.from ?? {}) }
    const toState = { ...(options.to ?? preset?.to ?? {}) }
    const transition = buildTransition(options)

    if (reduced) {
      return {
        parent: {
          hidden: {},
          visible: { transition: { staggerChildren: 0 } },
        },
        child: {
          hidden: 'opacity' in fromState ? { opacity: fromState.opacity } : {},
          visible: { opacity: 1, transition: { duration: 0 } },
        },
      }
    }

    return {
      parent: {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: options.stagger ?? 0.1,
            delayChildren: options.delay ?? 0,
          },
        },
      },
      child: {
        hidden: fromState,
        visible: { ...toState, transition },
      },
    }
  }, [reduced]) // eslint-disable-line react-hooks/exhaustive-deps
}

export function useFramerSlide(config?: AnimationConfig) {
  const reduced = usePrefersReducedMotion()

  return useMemo(() => {
    const transition = buildTransition({ easing: 'easeInOut', duration: 0.5, ...config })

    if (reduced) {
      return {
        enter: () => ({ opacity: 0 }),
        center: { opacity: 1, transition: { duration: 0.2 } },
        exit: () => ({ opacity: 0, transition: { duration: 0.2 } }),
      }
    }

    return {
      enter: (dir: number) => ({
        x: dir > 0 ? '100%' : '-100%',
        scale: 0.92,
        opacity: 0,
      }),
      center: {
        x: 0,
        scale: 1,
        opacity: 1,
        transition,
      },
      exit: (dir: number) => ({
        x: dir > 0 ? '-50%' : '50%',
        scale: 0.88,
        opacity: 0,
        transition,
      }),
    }
  }, [reduced]) // eslint-disable-line react-hooks/exhaustive-deps
}
