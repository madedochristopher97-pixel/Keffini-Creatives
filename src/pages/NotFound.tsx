// @ts-nocheck
import Header from '../components/layout/Header'
import Numbers from '../components/framer/Numbers'
import Footer from '../components/framer/Footer'
import SEO from '../components/layout/SEO'
import { useBreakpoint } from '../components/framer/_responsive-runtime.js'
import { useScrollReveal } from '../utils/effects/useScrollReveal'

/** 404 page: the Framer `Numbers` component (404 + "head home" button) with header and footer. */
export default function NotFound() {
  useScrollReveal()
  const bp = useBreakpoint()
  const mobile = bp === 'base' || bp === 'sm'
  const tablet = bp === 'md'
  const variant = mobile ? 'Phone' : tablet ? 'Tablet' : 'Desktop'
  return (
    <main className="not-found">
      <SEO
        title="404 — Page Not Found"
        description="The page you were looking for could not be found. Explore our brand identity and software design works at Keffini Creative Studio."
        noindex={true}
      />
      <Header tone="light" />
      <Numbers variant={variant} />
      <Footer variant={variant} />
    </main>
  )
}
