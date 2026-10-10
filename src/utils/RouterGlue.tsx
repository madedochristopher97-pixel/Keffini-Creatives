import { useEffect } from 'react'
import { transitionTo } from './PageTransition'

/**
 * Framer components render plain <a href="/path"> links. Turn internal ones into SPA navigations
 * (with the blinds page transition); scroll / #hash handling lives in SmoothScroll.
 */
export default function RouterGlue() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = (e.target as HTMLElement).closest?.('a[href]') as HTMLAnchorElement | null
      if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return
      const href = a.getAttribute('href') || ''
      if (!href.startsWith('/') || href.startsWith('//')) return
      e.preventDefault()
      transitionTo(href)
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}
