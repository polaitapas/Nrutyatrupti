export type EasingPreset =
  | 'linear'
  | 'easeIn'
  | 'easeOut'
  | 'easeInOut'
  | 'spring'
  | 'bounce'
  | 'elastic'
  | 'back'
  | 'circOut'
  | 'expo'

export type AnimationTrigger =
  | 'mount'
  | 'viewport'
  | 'scroll'
  | 'hover'
  | 'click'

export type AnimationPreset =
  | 'fadeIn'
  | 'fadeUp'
  | 'fadeDown'
  | 'fadeLeft'
  | 'fadeRight'
  | 'scaleIn'
  | 'scaleUp'
  | 'slideUp'
  | 'slideDown'
  | 'slideLeft'
  | 'slideRight'
  | 'rotateIn'
  | 'flipX'
  | 'flipY'
  | 'blur'
  | 'none'

export interface AnimationConfig {
  delay?: number
  duration?: number
  easing?: EasingPreset
  repeat?: number
  reverse?: boolean
  trigger?: AnimationTrigger
  viewport?: {
    amount?: number
    margin?: string
    once?: boolean
  }
  stagger?: number
}

export interface TransformState {
  x?: number | string
  y?: number | string
  scale?: number
  scaleX?: number
  scaleY?: number
  rotate?: number
  rotateX?: number
  rotateY?: number
  skewX?: number
  skewY?: number
  opacity?: number
  filter?: string
}

export const DEFAULT_CONFIG: Required<
  Pick<AnimationConfig, 'delay' | 'duration' | 'easing' | 'repeat' | 'reverse'>
> = {
  delay: 0,
  duration: 0.6,
  easing: 'easeOut',
  repeat: 0,
  reverse: false,
}
