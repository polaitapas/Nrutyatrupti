'use client'
import { ReactNode } from 'react'
import { motion, TargetAndTransition } from 'framer-motion'
import { useFramerAnimate, type UseFramerAnimateOptions } from '@/lib/animation/framer-engine'

export interface AnimateProps extends UseFramerAnimateOptions {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function Animate({
  children,
  className,
  style,
  preset,
  from,
  to,
  delay,
  duration,
  easing,
  repeat,
  reverse,
  trigger,
  viewport: viewportConfig,
}: AnimateProps) {
  const a = useFramerAnimate({
    preset,
    from,
    to,
    delay,
    duration,
    easing,
    repeat,
    reverse,
    trigger,
    viewport: viewportConfig,
  })

  /* eslint-disable @typescript-eslint/no-explicit-any */
  return (
    <motion.div
      className={className}
      style={{ willChange: 'transform, opacity', ...style }}
      initial={a.initial as any}
      animate={a.whileInView ? undefined : (a.animate as any)}
      whileInView={a.whileInView as TargetAndTransition | undefined}
      viewport={a.viewport}
      transition={a.transition}
      whileHover={a.whileHover as TargetAndTransition | undefined}
    >
      {children}
    </motion.div>
  )
  /* eslint-enable @typescript-eslint/no-explicit-any */
}
