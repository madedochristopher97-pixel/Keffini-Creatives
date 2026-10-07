import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Services', to: '/#services' },
  { label: 'Contact', to: '/contact' },
  { label: 'FAQ', to: '/#faq' },
]

function useClock() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return now
}

export default function Header({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const [open, setOpen] = useState(false)
  const now = useClock()
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const date = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
  const time = now.toLocaleTimeString('en-GB')

  return (
    <>
      <header className={`kc-header kc-header--${tone}`}>
        <Link to="/" className="kc-logo" onClick={() => setOpen(false)}>
          keffini<small>creative studio</small>
        </Link>
        <button className="kc-burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
          <span /><span />
        </button>
      </header>

      <div className={`kc-menu${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <div className="kc-menu__top">
          <Link to="/" className="kc-logo kc-logo--light" onClick={() => setOpen(false)}>
            keffini<small>creative studio</small>
          </Link>
          <dl className="kc-menu__info">
            <div><dt>Email</dt><dd>Hello@keffini.com</dd></div>
            <div><dt>Phone</dt><dd>+(254)794 388 578</dd></div>
            <div><dt>Location</dt><dd>Based in Nairobi</dd></div>
          </dl>
          <button className="kc-close" aria-label="Close menu" onClick={() => setOpen(false)}>
            <svg viewBox="0 0 52 24" width="52" height="24"><path d="M2 2 50 22M50 2 2 22" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
          </button>
        </div>
        <div className="kc-menu__body">
          <div className="kc-menu__brand">
            <h2>Keffini Creative Studio<sup>®</sup></h2>
            <p>{date}<br />{time}</p>
          </div>
          <nav className="kc-menu__nav">
            {NAV.map(n => (
              <Link key={n.label} to={n.to} onClick={() => setOpen(false)}>{n.label} <span>↗</span></Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
