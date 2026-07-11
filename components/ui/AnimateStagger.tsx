'use client'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useFramerVariants } from '@/lib/animation/framer-engine'
import type { AnimationPreset, AnimationConfig, TransformState } from '@/lib/animation/types'

export interface AnimateStaggerProps extends AnimationConfig {
  children: ReactNode
  preset?: AnimationPreset
  from?: TransformState
  to?: TransformState
  className?: string
  childClassName?: string
  as?: 'div' | 'ul' | 'ol' | 'section'
}

export default function AnimateStagger({
  children,
  preset = 'fadeUp',
  from,
  to,
  className,
  childClassName,
  as = 'div',
  stagger = 0.1,
  delay,
  duration,
  easing,
  repeat,
  reverse,
  trigger = 'viewport',
  viewport,
}: AnimateStaggerProps) {
  const { parent, child } = useFramerVariants({
    preset,
    from,
    to,
    stagger,
    delay,
    duration,
    easing,
    repeat,
    reverse,
    trigger,
    viewport,
  })

  const isViewport = trigger === 'viewport' || trigger === 'scroll'
  const Container = motion[as] as typeof motion.div

  const containerProps = isViewport
    ? {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: {
          amount: viewport?.amount ?? 0.1,
          once: viewport?.once !== false,
        },
      }
    : {
        initial: 'hidden',
        animate: 'visible',
      }

  return (
    <Container
      className={className}
      variants={parent}
      {...containerProps}
    >
      {Array.isArray(children)
        ? children.map((c, i) => (
            <motion.div
              key={i}
              variants={child}
              className={childClassName}
              style={{ willChange: 'transform, opacity' }}
            >
              {c}
            </motion.div>
          ))
        : children}
    </Container>
  )
}
