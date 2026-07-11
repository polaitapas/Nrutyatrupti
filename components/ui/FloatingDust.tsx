'use client'
import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  o: number
  oDir: number
  oSpd: number
}

interface FloatingDustProps {
  count?: number
  color?: [number, number, number]
  className?: string
}

export default function FloatingDust({
  count = 1200,
  color = [139, 100, 25],
  className = '',
}: FloatingDustProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stateRef = useRef<{
    raf: number
    particles: Particle[]
    w: number
    h: number
    dpr: number
  }>({ raf: 0, particles: [], w: 0, h: 0, dpr: 1 })

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const state = stateRef.current
    const [cr, cg, cb] = color

    function resize() {
      const rect = canvas!.getBoundingClientRect()
      state.dpr = Math.min(window.devicePixelRatio, 2)
      state.w = rect.width
      state.h = rect.height
      canvas!.width = state.w * state.dpr
      canvas!.height = state.h * state.dpr
    }

    function seed() {
      state.particles = []
      for (let i = 0; i < count; i++) {
        state.particles.push({
          x: Math.random() * state.w,
          y: Math.random() * state.h,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.12 - 0.02,
          r: Math.random() * 1.6 + 0.5,
          o: Math.random() * 0.45 + 0.15,
          oDir: Math.random() > 0.5 ? 1 : -1,
          oSpd: Math.random() * 0.003 + 0.001,
        })
      }
    }

    resize()
    seed()

    function tick() {
      if (!visible) { state.raf = 0; return }
      const { w, h, dpr, particles } = state
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx!.clearRect(0, 0, w, h)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.x += p.vx
        p.y += p.vy

        p.o += p.oDir * p.oSpd
        if (p.o > 0.6) { p.o = 0.6; p.oDir = -1 }
        else if (p.o < 0.08) { p.o = 0.08; p.oDir = 1 }

        if (p.x < -3) p.x = w + 2
        else if (p.x > w + 3) p.x = -2
        if (p.y < -3) p.y = h + 2
        else if (p.y > h + 3) p.y = -2

        ctx!.globalAlpha = p.o
        ctx!.fillStyle = `rgb(${cr},${cg},${cb})`
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, 6.2832)
        ctx!.fill()
      }

      state.raf = requestAnimationFrame(tick)
    }

    const ro = new ResizeObserver(() => { resize(); seed() })
    ro.observe(canvas)

    let visible = true
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible && !state.raf) tick()
      },
      { threshold: 0 },
    )
    io.observe(canvas)

    // Start immediately — IO callback may not fire in some environments
    tick()

    return () => {
      if (state.raf) cancelAnimationFrame(state.raf)
      state.raf = 0
      ro.disconnect()
      io.disconnect()
    }
  }, [count, color])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  )
}
