'use client'
import { useRef, useEffect, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { AnimationConfig, TransformState, AnimationPreset } from './types'
import { DEFAULT_CONFIG } from './types'
import { getGsapEasing } from './easing'
import { getPreset } from './presets'
import { prefersReducedMotion } from './reduced-motion'

gsap.registerPlugin(ScrollTrigger)

function buildGsapVars(
  state: TransformState,
  config: AnimationConfig,
): gsap.TweenVars {
  const c = { ...DEFAULT_CONFIG, ...config }
  const vars: gsap.TweenVars = {
    ...state,
    duration: c.duration,
    delay: c.delay,
    ease: getGsapEasing(c.easing),
    repeat: c.repeat,
    yoyo: c.reverse,
  }
  if (state.filter) {
    vars.filter = state.filter
  }
  return vars
}

export interface UseGsapAnimateOptions extends AnimationConfig {
  from?: TransformState
  to?: TransformState
  preset?: AnimationPreset
}

export function useGsapAnimate<T extends HTMLElement = HTMLDivElement>(
  options: UseGsapAnimateOptions,
) {
  const ref = useRef<T>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion()) {
      const preset = options.preset ? getPreset(options.preset) : null
      const toState = options.to ?? preset?.to ?? {}
      gsap.set(el, { opacity: toState.opacity ?? 1 })
      return
    }

    const preset = options.preset ? getPreset(options.preset) : null
    const fromState = options.from ?? preset?.from ?? {}
    const toState = options.to ?? preset?.to ?? {}

    const tl = gsap.timeline({ paused: true })
    tlRef.current = tl

    const toVars = buildGsapVars(toState, options)

    if (options.trigger === 'scroll' || options.trigger === 'viewport') {
      toVars.scrollTrigger = {
        trigger: el,
        start: 'top 85%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        once: options.viewport?.once !== false,
      }
      if (options.viewport?.margin) {
        toVars.scrollTrigger.start = `top ${options.viewport.margin}`
      }
      gsap.set(el, { ...fromState, willChange: 'transform, opacity' })
      gsap.to(el, toVars)
    } else {
      tl.fromTo(el, fromState, toVars)
      tl.play()
    }

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill()
      })
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return ref
}

export interface UseGsapStaggerOptions extends AnimationConfig {
  from?: TransformState
  to?: TransformState
  preset?: AnimationPreset
  childSelector?: string
}

export function useGsapStagger<T extends HTMLElement = HTMLDivElement>(
  options: UseGsapStaggerOptions,
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const targets = options.childSelector
      ? container.querySelectorAll(options.childSelector)
      : Array.from(container.children)

    if (!targets.length) return

    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1 })
      return
    }

    const preset = options.preset ? getPreset(options.preset) : null
    const fromState = options.from ?? preset?.from ?? {}
    const toState = options.to ?? preset?.to ?? {}
    const config = { ...DEFAULT_CONFIG, ...options }

    gsap.set(targets, { ...fromState, willChange: 'transform, opacity' })

    const toVars: gsap.TweenVars = {
      ...toState,
      duration: config.duration,
      delay: config.delay,
      ease: getGsapEasing(config.easing),
      stagger: options.stagger ?? 0.1,
      repeat: config.repeat,
      yoyo: config.reverse,
    }

    if (options.trigger === 'scroll' || options.trigger === 'viewport') {
      toVars.scrollTrigger = {
        trigger: container,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: options.viewport?.once !== false,
      }
    }

    const tween = gsap.to(targets, toVars)

    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === container) st.kill()
      })
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return ref
}

export interface UseGsapTimelineStep {
  target?: string
  from?: TransformState
  to: TransformState
  position?: string | number
  duration?: number
  stagger?: number
}

export function useGsapTimeline<T extends HTMLElement = HTMLDivElement>(
  steps: UseGsapTimelineStep[],
  config?: AnimationConfig,
) {
  const ref = useRef<T>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  const play = useCallback(() => tlRef.current?.play(), [])
  const pause = useCallback(() => tlRef.current?.pause(), [])
  const restart = useCallback(() => tlRef.current?.restart(), [])
  const reverse = useCallback(() => tlRef.current?.reverse(), [])

  useEffect(() => {
    const container = ref.current
    if (!container) return

    if (prefersReducedMotion()) {
      steps.forEach((step) => {
        const targets = step.target
          ? container.querySelectorAll(step.target)
          : container
        gsap.set(targets, { opacity: step.to.opacity ?? 1 })
      })
      return
    }

    const c = { ...DEFAULT_CONFIG, ...config }
    const tl = gsap.timeline({
      paused: config?.trigger !== 'mount',
      delay: c.delay,
      repeat: c.repeat,
      yoyo: c.reverse,
    })

    steps.forEach((step) => {
      const targets = step.target
        ? container.querySelectorAll(step.target)
        : container

      const vars: gsap.TweenVars = {
        ...step.to,
        duration: step.duration ?? c.duration,
        ease: getGsapEasing(c.easing),
      }
      if (step.stagger) vars.stagger = step.stagger

      if (step.from) {
        tl.fromTo(targets, step.from, vars, step.position)
      } else {
        tl.to(targets, vars, step.position)
      }
    })

    tlRef.current = tl

    if (config?.trigger === 'scroll' || config?.trigger === 'viewport') {
      ScrollTrigger.create({
        trigger: container,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: config?.viewport?.once !== false,
        onEnter: () => tl.play(),
      })
    } else if (config?.trigger === 'mount') {
      tl.play()
    }

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === container) st.kill()
      })
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return { ref, play, pause, restart, reverse }
}

export function useGsapParallax<T extends HTMLElement = HTMLDivElement>(
  speed: number = 0.5,
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    gsap.set(el, { willChange: 'transform' })
    const tween = gsap.to(el, {
      y: () => speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill()
      })
    }
  }, [speed])

  return ref
}
