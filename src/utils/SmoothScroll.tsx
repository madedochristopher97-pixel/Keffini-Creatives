import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'

declare global { interface Window { __lenis?: Lenis } }

/** Lenis smooth scroll for the whole site. Also owns scroll-to-top / #hash scrolling on route changes. */
export default function SmoothScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.15, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true })
    window.__lenis = lenis
    let raf = 0
    const loop = (time: number) => { lenis.raf(time); raf = requestAnimationFrame(loop) }
    raf = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(raf); lenis.destroy(); delete window.__lenis }
  }, [])

  // New page: always start at the top (retry while Framer content is still laying out); #hash: scroll to the section.
  useEffect(() => {
    const jump = (y: number | HTMLElement, smooth = false) => {
      const l = window.__lenis
      if (l) l.scrollTo(y as number, { immediate: !smooth, force: true })
      else if (typeof y === 'number') window.scrollTo(0, y)
      else y.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' })
    }
    if (hash) {
      const t = setTimeout(() => { const el = document.getElementById(hash.slice(1)); if (el) jump(el, true) }, 500)
      return () => clearTimeout(t)
    }
    jump(0)
    const timers = [60, 250, 700, 1500].map(ms => setTimeout(() => { if (window.scrollY > 0 && window.scrollY < 600) jump(0) }, ms))
    return () => timers.forEach(clearTimeout)
  }, [pathname, hash])

  return null
}
