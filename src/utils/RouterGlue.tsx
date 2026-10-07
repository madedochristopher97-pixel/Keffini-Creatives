import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

/**
 * Framer components render plain <a href="/path"> links. Turn internal ones into SPA navigations,
 * and handle scroll position / #hash targets on route changes.
 */
export default function RouterGlue() {
  const navigate = useNavigate()
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = (e.target as HTMLElement).closest?.('a[href]') as HTMLAnchorElement | null
      if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return
      const href = a.getAttribute('href') || ''
      if (!href.startsWith('/') || href.startsWith('//')) return
      e.preventDefault()
      navigate(href)
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [navigate])

  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); return }
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 400)
    return () => clearTimeout(t)
  }, [pathname, hash])

  return null
}
