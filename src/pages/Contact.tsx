// @ts-nocheck
import Header from '../components/layout/Header'
import Contact2 from '../components/framer/Contact2'
import Footer from '../components/framer/Footer'
import WhatsAppStrip from '../components/layout/WhatsAppStrip'
import SEO from '../components/layout/SEO'
import { useBreakpoint } from '../components/framer/_responsive-runtime.js'
import { useScrollReveal } from '../utils/effects/useScrollReveal'
import { useEffect } from 'react'
import { attachContactForm } from '../utils/contactForm'
import { transitionTo } from '../utils/PageTransition'
import './contact.css'

const CONTACT_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://www.keffinicreativestudio.com/contact#page',
      'url': 'https://www.keffinicreativestudio.com/contact',
      'name': 'Contact Keffini Creative Studio®',
      'description':
        'Get in touch with Keffini Creative Studio in Nairobi for brand identity, UI/UX, software development, and digital marketing inquiries.',
      'isPartOf': { '@id': 'https://www.keffinicreativestudio.com/#website' },
      'mainEntity': {
        '@type': ['Organization', 'ProfessionalService', 'LocalBusiness'],
        '@id': 'https://www.keffinicreativestudio.com/#organization',
        'name': 'Keffini Creative Studio',
        'email': 'Hello@keffini.com',
        'telephone': '+254794388578',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': "Aqua Plaza, Murang'a Road",
          'addressLocality': 'Nairobi',
          'addressRegion': 'Nairobi County',
          'addressCountry': 'KE',
        },
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.keffinicreativestudio.com/contact#breadcrumb',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://www.keffinicreativestudio.com/',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Contact',
          'item': 'https://www.keffinicreativestudio.com/contact',
        },
      ],
    },
  ],
}

export default function Contact() {
  useScrollReveal()
  useEffect(() => attachContactForm(transitionTo, '.contact'), [])
  const bp = useBreakpoint()
  const mobile = bp === 'base' || bp === 'sm'
  const tablet = bp === 'md'
  return (
    <main className="contact">
      <SEO
        title="Contact Us & Start a Project — Nairobi Studio"
        description="Get in touch with Keffini Creative Studio. Based at Aqua Plaza, Murang'a Road, Nairobi. Enquire about brand identity, UI/UX design, or full-stack software development projects."
        keywords="contact Keffini, hire creative agency Nairobi, design studio Kenya, Aqua Plaza Murang'a Road Nairobi, branding quote Kenya, software agency contact"
        canonicalPath="/contact"
        schema={CONTACT_SCHEMA}
      />
      <h1 className="sr-only">Contact Keffini Creative Studio — Start a Project</h1>
      <Header tone="light" />
      <Contact2 variant={mobile ? 'Phone' : tablet ? 'Tablet' : 'Desktop'} />
      <WhatsAppStrip />
      <Footer variant={mobile ? 'Phone' : tablet ? 'Tablet' : 'Desktop'} />
    </main>
  )
}
