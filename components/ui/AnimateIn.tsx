'use client'
import { motion, Variants } from 'framer-motion'
import { ReactNode, CSSProperties } from 'react'

interface AnimateInProps {
  children: ReactNode
  className?: string
  delay?: number
  variant?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale'
  once?: boolean
  style?: CSSProperties
}

const variants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
}

export default function AnimateIn({
  children,
  className,
  delay = 0,
  variant = 'fadeUp',
  once = true,
  style,
}: AnimateInProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  )
}

export function AnimateStagger({
  children,
  className,
  staggerDelay = 0.1,
  style,
}: {
  children: ReactNode
  className?: string
  staggerDelay?: number
  style?: CSSProperties
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function AnimateStaggerItem({
  children,
  className,
  variant = 'fadeUp',
  style,
}: {
  children: ReactNode
  className?: string
  variant?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale'
  style?: CSSProperties
}) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        ...variants[variant],
        visible: {
          ...(variants[variant].visible as object),
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
