import type { TransformState, AnimationPreset } from './types'

interface PresetPair {
  from: TransformState
  to: TransformState
}

export const PRESETS: Record<AnimationPreset, PresetPair> = {
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  fadeUp: {
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
  },
  fadeDown: {
    from: { opacity: 0, y: -40 },
    to: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    from: { opacity: 0, x: 40 },
    to: { opacity: 1, x: 0 },
  },
  fadeRight: {
    from: { opacity: 0, x: -40 },
    to: { opacity: 1, x: 0 },
  },
  scaleIn: {
    from: { opacity: 0, scale: 0.85 },
    to: { opacity: 1, scale: 1 },
  },
  scaleUp: {
    from: { opacity: 0, scale: 0.6, y: 30 },
    to: { opacity: 1, scale: 1, y: 0 },
  },
  slideUp: {
    from: { y: '100%' },
    to: { y: 0 },
  },
  slideDown: {
    from: { y: '-100%' },
    to: { y: 0 },
  },
  slideLeft: {
    from: { x: '100%' },
    to: { x: 0 },
  },
  slideRight: {
    from: { x: '-100%' },
    to: { x: 0 },
  },
  rotateIn: {
    from: { opacity: 0, rotate: -12, scale: 0.9 },
    to: { opacity: 1, rotate: 0, scale: 1 },
  },
  flipX: {
    from: { opacity: 0, rotateX: 90 },
    to: { opacity: 1, rotateX: 0 },
  },
  flipY: {
    from: { opacity: 0, rotateY: 90 },
    to: { opacity: 1, rotateY: 0 },
  },
  blur: {
    from: { opacity: 0, filter: 'blur(12px)' },
    to: { opacity: 1, filter: 'blur(0px)' },
  },
  none: {
    from: {},
    to: {},
  },
}

export function getPreset(name: AnimationPreset): PresetPair {
  return PRESETS[name]
}
