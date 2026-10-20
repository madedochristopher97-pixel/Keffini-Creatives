// @ts-nocheck
import { Navigate, useParams } from 'react-router-dom'
import Header from '../components/layout/Header'
import Legal from '../components/framer/Legal'
import Footer from '../components/framer/Footer'
import SEO from '../components/layout/SEO'
import { useBreakpoint } from '../components/framer/_responsive-runtime.js'
import { useScrollReveal } from '../utils/effects/useScrollReveal'
import { LEGAL_DOCS } from '../data/legal'
import './legal.css'

/** Privacy Policy / Terms & Conditions on the Framer `Legal` component. */
export default function LegalPage({ slug: slugProp }: { slug?: string }) {
  const params = useParams()
  const doc = LEGAL_DOCS[slugProp ?? params.slug ?? '']
  useScrollReveal()
  const bp = useBreakpoint()
  const mobile = bp === 'base' || bp === 'sm'
  const tablet = bp === 'md'
  if (!doc) return <Navigate to="/404" replace />
  const variant = mobile ? 'Phone' : tablet ? 'Tablet' : 'Desktop'
  return (
    <main className="legal-page">
      <SEO title={doc.seoTitle} description={doc.seoDescription} canonicalPath={doc.path} />
      <Header tone="light" />
      <Legal variant={variant} lkVIlJHj3={doc.title} J2m4hLUS7={`Effective ${doc.effectiveDate}`} eCbqlIgR1={doc.content} />
      <Footer variant={variant} />
    </main>
  )
}
