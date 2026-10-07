import { useEffect } from 'react'

/**
 * Framer "appear" effects render elements with inline `opacity: 0` + a transform
 * and rely on the Framer runtime to animate them in on scroll. The exported runtime
 * doesn't, so this hook finds those elements and reveals them when they scroll into view.
 */
const isHiddenAppear = (el: HTMLElement) =>
  parseFloat(el.style.opacity || '1') <= 0.01 && /^(translate|scale|rotate)/.test(el.style.transform)

export function useScrollReveal() {
  useEffect(() => {
    const seen = new WeakSet<Element>()
    const io = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          const el = e.target as HTMLElement
          io.unobserve(el)
          el.style.transition = 'opacity .9s cubic-bezier(.22,1,.36,1), transform .9s cubic-bezier(.22,1,.36,1)'
          el.style.opacity = '1'
          el.style.transform = 'none'
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -5% 0px' },
    )
    const scan = (root: ParentNode) => {
      root.querySelectorAll<HTMLElement>('[style*="opacity: 0"]').forEach(el => {
        if (seen.has(el) || !isHiddenAppear(el)) return
        seen.add(el)
        io.observe(el)
      })
    }
    scan(document)
    const mo = new MutationObserver(() => scan(document))
    mo.observe(document.body, { childList: true, subtree: true })
    return () => { io.disconnect(); mo.disconnect() }
  }, [])
}
