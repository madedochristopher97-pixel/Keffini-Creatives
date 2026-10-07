import { useEffect, useRef } from 'react'
import './cursorDot.css'

/**
 * Small dot that trails the mouse with a slight lag (matches the Framer site).
 * Uses mix-blend-mode: difference so it reads dark on cream and light on dark sections.
 * Skipped on touch devices; the native cursor stays visible.
 */
export default function CursorDot() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ease = reduce ? 1 : 0.16
    let tx = 0, ty = 0, x = 0, y = 0, raf = 0, seen = false

    const tick = () => {
      x += (tx - x) * ease
      y += (ty - y) * ease
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      raf = requestAnimationFrame(tick)
    }
    const onMove = (e: PointerEvent) => {
      tx = e.clientX
      ty = e.clientY
      if (!seen) { seen = true; x = tx; y = ty; el.classList.add('is-on') }
    }
    const onLeave = () => el.classList.remove('is-on')
    const onEnter = () => seen && el.classList.add('is-on')

    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    document.documentElement.addEventListener('pointerenter', onEnter)
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
      document.documentElement.removeEventListener('pointerenter', onEnter)
    }
  }, [])

  return <div ref={ref} className="cursor-dot" aria-hidden="true" />
}
