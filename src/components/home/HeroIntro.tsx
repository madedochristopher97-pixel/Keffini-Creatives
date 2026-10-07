// @ts-nocheck – Framer exports are untyped JS
import { useEffect, useRef, useState } from 'react'
import Hero2 from '../framer/Hero2'
import WaveGradient from './WaveGradient'
import './heroIntro.css'

/**
 * Hero load sequence (matches the screen recording):
 *  1. three images rise into a centred frame one after another (Framer "presence" effects, replayed with WAAPI)
 *  2. the frame expands to cover the whole hero
 *  3. the service list + tagline fade in
 *  4. "Keffini" / "Studios" slide in from the sides
 */
const LAYERS = [
  // [delay ms, duration ms, from translateY px, from scale] – taken from Hero2.js (animation1/2/3)
  { delay: 0, duration: 1000, y: 660, scale: 0.3 },
  { delay: 800, duration: 1600, y: 1020, scale: 0.5 },
  { delay: 400, duration: 2000, y: 660, scale: 0.4 },
]
const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'
const SERVICES = ['Branding', 'Design', 'Development', 'Photography', 'Marketing']

export default function HeroIntro() {
  const stage = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState(0) // 0 hidden, 1 rising, 2 expanded, 3 list, 4 titles

  useEffect(() => {
    const el = stage.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timers: number[] = []
    let started = false

    const start = (layers: HTMLElement[]) => {
      started = true
      if (reduce) { setPhase(4); return }
      layers.forEach((layer, i) => {
        const l = LAYERS[i]
        layer.animate(
          [
            { transform: `translateY(${l.y}px) scale(${l.scale})`, opacity: 1 },
            { transform: 'translateY(0) scale(1)', opacity: 1 },
          ],
          { delay: l.delay, duration: l.duration, easing: EASE, fill: 'both' },
        )
      })
      setPhase(1)
      timers.push(window.setTimeout(() => setPhase(2), 3000))
      timers.push(window.setTimeout(() => setPhase(3), 4100))
      timers.push(window.setTimeout(() => setPhase(4), 4600))
    }

    const find = () => {
      if (started) return
      const layers = [...el.querySelectorAll<HTMLElement>('[class*="-container"]')]
        .filter(n => parseInt(getComputedStyle(n).zIndex, 10) > 0)
        .sort((a, b) => parseInt(getComputedStyle(a).zIndex, 10) - parseInt(getComputedStyle(b).zIndex, 10))
      if (layers.length >= 3) start(layers.slice(0, 3))
    }
    find()
    const mo = new MutationObserver(find)
    mo.observe(el, { childList: true, subtree: true })
    return () => { mo.disconnect(); timers.forEach(clearTimeout) }
  }, [])

  return (
    <div className={`hero-intro phase-${phase}`}>
      <WaveGradient className="hero-intro__wave" />
      <div ref={stage} className="hero-intro__stage"><Hero2 /></div>

      <ul className="hero-intro__list">
        {SERVICES.map(s => <li key={s}>{s}</li>)}
      </ul>
      <p className="hero-intro__tag">We build business solutions that drive real growth — efficient, scalable, and profit-focused.</p>

      <h1 className="hero-intro__title" aria-label="Keffini Studios">
        <span className="hero-intro__keffini">Keffini</span>
        <span className="hero-intro__studios">Studios</span>
      </h1>
    </div>
  )
}
