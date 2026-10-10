// @ts-nocheck
import Header from '../components/layout/Header'
import Contact2 from '../components/framer/Contact2'
import Footer from '../components/framer/Footer'
import WhatsAppStrip from '../components/layout/WhatsAppStrip'
import { useBreakpoint } from '../components/framer/_responsive-runtime.js'
import { useScrollReveal } from '../utils/effects/useScrollReveal'
import { useEffect } from 'react'
import { attachContactForm } from '../utils/contactForm'
import { transitionTo } from '../utils/PageTransition'
import './contact.css'

export default function Contact() {
  useScrollReveal()
  useEffect(() => attachContactForm(transitionTo, '.contact'), [])
  const bp = useBreakpoint()
  const mobile = bp === 'base' || bp === 'sm'
  const tablet = bp === 'md'
  return (
    <main className="contact">
      <Header tone="light" />
      <Contact2 variant={mobile ? 'Phone' : tablet ? 'Tablet' : 'Desktop'} />
      <WhatsAppStrip />
      <Footer variant={mobile ? 'Phone' : tablet ? 'Tablet' : 'Desktop'} />
    </main>
  )
}
