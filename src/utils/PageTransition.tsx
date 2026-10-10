import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './pageTransition.css'

/** Pastel yellow, pastel green, pastel blue, maroon. Each navigation takes the next one in the list. */
export const TRANSITION_COLORS = ['#FFDE59', '#118A4C', '#277ABC', '#65001E']

const BARS = 12
const COVER_MS = 400
const REVEAL_MS = 460
const STAGGER_MS = 190 // top bar starts first, bottom bar last
const HOLD_MS = 260
const HOLD_HASH_MS = 620 // #section links: give SmoothScroll time to land before the blinds open
const EASE = 'cubic-bezier(.76,0,.24,1)'

type Go = (to: string) => void
let handler: Go | null = null

/** Navigate with the blinds wipe. Falls back to a hard navigation if the layer isn't mounted. */
export function transitionTo(to: string) {
  if (handler) handler(to)
  else window.location.assign(to)
}

const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms))

/**
 * Venetian-blind page wipe: horizontal bars grow from thin lines until the screen is one flat
 * colour, the route swaps underneath, then the bars thin out again (top to bottom) to reveal the page.
 */
export default function PageTransition() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const root = useRef<HTMLDivElement>(null)
  const navRef = useRef(navigate)
  navRef.current = navigate
  const busy = useRef(false)
  const colorIdx = useRef(0)
  const prevPath = useRef(pathname)
  const committed = useRef<(() => void) | null>(null)

  const bars = () => Array.from(root.current?.children ?? []) as HTMLElement[]

  const setColor = () => {
    const c = TRANSITION_COLORS[colorIdx.current++ % TRANSITION_COLORS.length]
    root.current?.style.setProperty('--pt-color', c)
  }

  const play = (dir: 'cover' | 'reveal') => {
    const [from, to] = dir === 'cover' ? [0, 1] : [1, 0]
    const duration = dir === 'cover' ? COVER_MS : REVEAL_MS
    return Promise.all(bars().map((bar, i) => {
      const previous = bar.getAnimations()
      const anim = bar.animate(
        [{ transform: `scaleY(${from})` }, { transform: `scaleY(${to})` }],
        { duration, delay: (i * STAGGER_MS) / (BARS - 1), easing: EASE, fill: 'both' },
      )
      previous.forEach(a => a.cancel())
      return anim.finished.catch(() => undefined)
    }))
  }

  const reset = () => {
    bars().forEach(b => b.getAnimations().forEach(a => a.cancel()))
    root.current?.classList.remove('is-active')
  }

  // Programmatic / link navigation: cover -> swap route -> hold -> reveal.
  useEffect(() => {
    const go: Go = async to => {
      const url = new URL(to, window.location.href)
      const samePage = url.pathname === window.location.pathname && url.search === window.location.search
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (samePage || reduce) { navRef.current(to); return }
      if (busy.current) return
      busy.current = true
      const lenis = window.__lenis
      lenis?.stop()
      setColor()
      root.current?.classList.add('is-active')
      try {
        await play('cover')
        const swapped = new Promise<void>(r => { committed.current = r })
        navRef.current(to)
        await Promise.race([swapped, sleep(1200)])
        committed.current = null
        await sleep(url.hash ? HOLD_HASH_MS : HOLD_MS)
        await play('reveal')
      } finally {
        reset()
        busy.current = false
        lenis?.start()
      }
    }
    handler = go
    return () => { if (handler === go) handler = null }
  }, [])

  // Route changed. If go() drove it, just release it; otherwise (browser back/forward) cover instantly
  // before paint, then reveal, so the new page never flashes in.
  useLayoutEffect(() => {
    if (prevPath.current === pathname) return
    prevPath.current = pathname
    if (committed.current) { committed.current(); return }
    if (busy.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    busy.current = true
    setColor()
    root.current?.classList.add('is-active')
    bars().forEach(b => b.getAnimations().forEach(a => a.cancel()))
    bars().forEach(b => { b.style.transform = 'scaleY(1)' })
    ;(async () => {
      await sleep(HOLD_MS)
      bars().forEach(b => { b.style.transform = '' })
      await play('reveal')
      reset()
      busy.current = false
    })()
  }, [pathname])

  return (
    <div ref={root} className="page-transition" aria-hidden="true">
      {Array.from({ length: BARS }, (_, i) => (
        <span
          key={i}
          className="page-transition__bar"
          style={{ top: `calc(${i} * 100% / ${BARS} - 1px)`, height: `calc(100% / ${BARS} + 2px)` }}
        />
      ))}
    </div>
  )
}
