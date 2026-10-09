// Lightweight stand-in for particles.js, tuned to feel like v1's config: drifting dots joined by
// faint lines when close. Pauses off-screen and renders one still frame under reduced motion.
import { useEffect, useRef } from 'react'

type Dot = { x: number; y: number; vx: number; vy: number; r: number }

const LINK_DISTANCE = 130
const SPEED = 0.25

export default function Particles({ color }: { color: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const colorRef = useRef(color)
  useEffect(() => {
    colorRef.current = color
  }, [color])

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let dots: Dot[] = []
    let width = 0
    let height = 0
    let frame = 0
    let visible = true

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(Math.round((width * height) / 14000), width < 640 ? 35 : 80)
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2 * SPEED,
        vy: (Math.random() - 0.5) * 2 * SPEED,
        r: Math.random() * 1.4 + 0.6,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = colorRef.current
      ctx.strokeStyle = colorRef.current
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i]
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < LINK_DISTANCE) {
            ctx.globalAlpha = (1 - dist / LINK_DISTANCE) * 0.25
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 0.6
      for (const d of dots) {
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const step = () => {
      for (const d of dots) {
        d.x += d.vx
        d.y += d.vy
        if (d.x < -10) d.x = width + 10
        if (d.x > width + 10) d.x = -10
        if (d.y < -10) d.y = height + 10
        if (d.y > height + 10) d.y = -10
      }
      draw()
      frame = requestAnimationFrame(step)
    }

    const start = () => {
      cancelAnimationFrame(frame)
      if (reducedMotion) draw()
      else if (visible) frame = requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) start()
      else cancelAnimationFrame(frame)
    })
    observer.observe(canvas)

    const onResize = () => {
      resize()
      start()
    }
    window.addEventListener('resize', onResize)
    onResize()

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
    />
  )
}
