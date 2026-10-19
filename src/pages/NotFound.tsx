import { Link } from 'react-router-dom'
import SEO from '../components/layout/SEO'

export default function NotFound() {
  return (
    <main style={{ padding: '80px 24px', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <SEO
        title="404 — Page Not Found"
        description="The page you were looking for could not be found. Explore our brand identity and software design works at Keffini Creative Studio."
        noindex={true}
      />
      <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '4rem', fontWeight: 900, color: 'var(--color-primary, #65001E)', marginBottom: 16 }}>
        404
      </h1>
      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.25rem', color: '#444', maxWidth: 480, margin: '0 auto 32px' }}>
        We couldn't find the page you were looking for. It may have moved or been renamed.
      </p>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          to="/"
          style={{ padding: '12px 24px', borderRadius: 999, background: '#65001E', color: '#FFFBEE', textDecoration: 'none', fontWeight: 600, fontSize: 15 }}
        >
          Return Home
        </Link>
        <Link
          to="/projects"
          style={{ padding: '12px 24px', borderRadius: 999, border: '1px solid #65001E', color: '#65001E', textDecoration: 'none', fontWeight: 600, fontSize: 15 }}
        >
          View Selected Works ↗
        </Link>
      </div>
    </main>
  )
}
