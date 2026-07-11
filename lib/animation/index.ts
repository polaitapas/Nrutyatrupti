export type {
  EasingPreset,
  AnimationTrigger,
  AnimationPreset,
  AnimationConfig,
  TransformState,
} from './types'
export { DEFAULT_CONFIG } from './types'

export { getPreset, PRESETS } from './presets'
export { getFramerEasing, getGsapEasing, isSpringEasing } from './easing'
export { usePrefersReducedMotion, prefersReducedMotion } from './reduced-motion'

export {
  useFramerAnimate,
  useFramerVariants,
  useFramerSlide,
} from './framer-engine'

export {
  useGsapAnimate,
  useGsapStagger,
  useGsapTimeline,
  useGsapParallax,
} from './gsap-engine'
