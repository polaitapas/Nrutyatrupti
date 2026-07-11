import type { EasingPreset } from './types'

export const FRAMER_EASINGS: Record<EasingPreset, number[] | string> = {
  linear: [0, 0, 1, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  spring: 'spring',
  bounce: [0.34, 1.56, 0.64, 1],
  elastic: [0.68, -0.55, 0.265, 1.55],
  back: [0.36, 0, 0.66, -0.56],
  circOut: [0, 0.55, 0.45, 1],
  expo: [0.16, 1, 0.3, 1],
}

export const GSAP_EASINGS: Record<EasingPreset, string> = {
  linear: 'none',
  easeIn: 'power2.in',
  easeOut: 'power2.out',
  easeInOut: 'power2.inOut',
  spring: 'elastic.out(1, 0.5)',
  bounce: 'bounce.out',
  elastic: 'elastic.out(1, 0.3)',
  back: 'back.out(1.7)',
  circOut: 'circ.out',
  expo: 'expo.out',
}

export function getFramerEasing(preset: EasingPreset) {
  const val = FRAMER_EASINGS[preset]
  if (val === 'spring') return undefined
  return val as number[]
}

export function isSpringEasing(preset: EasingPreset) {
  return preset === 'spring'
}

export function getGsapEasing(preset: EasingPreset) {
  return GSAP_EASINGS[preset]
}
