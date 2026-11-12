// @ts-nocheck – Framer exports are untyped JS
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProject } from '../data/projects'
import { PROJECT_ROWS } from '../data/projectRows.js'
import Header from '../components/layout/Header'
import HeroIntro from '../components/home/HeroIntro'
import Why from '../components/framer/Why'
import Subtitle from '../components/framer/Subtitle'
import Counter from '../components/framer/Counter'
import Brands from '../components/framer/Brands'
import CardWorks from '../components/framer/CardWorks'
import ServicesList from '../components/home/ServicesList'
import RateCard from '../components/framer/RateCard'
import CustomPackageBrief from '../components/home/CustomPackageBrief'
import Faq from '../components/framer/Faq'
import Footer from '../components/framer/Footer'
import SEO from '../components/layout/SEO'
import { useBreakpoint } from '../components/framer/_responsive-runtime.js'
import { useScrollReveal } from '../utils/effects/useScrollReveal'
import './home.css'

const FAQS = [
  ['What’s your typical turnaround time?', 'Most branding projects take 3–6 weeks, while websites and digital products typically take 4–10 weeks depending on scope. We share a clear timeline before we start.'],
  ['Do you offer custom design solutions?', 'Yes. Every project is designed from scratch around your brand, audience and goals — no templates.'],
  ['What industries do you specialize in?', 'We work across fashion, hospitality, beauty, lifestyle, education and technology, helping brands of every size show up with clarity.'],
  ['Can you handle both design and development?', 'Absolutely. Our team covers brand identity, UI/UX and full-stack development, so you work with one studio from concept to launch.'],
  ['Do you provide post-launch support?', 'Yes. We offer ongoing maintenance, updates and growth support after launch so your brand keeps performing.'],
]

const HOME_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.keffinicreativestudio.com/#webpage',
      'url': 'https://www.keffinicreativestudio.com/',
      'name': 'Keffini Creative Studio® | Branding, UI/UX & Software Development in Nairobi',
      'isPartOf': { '@id': 'https://www.keffinicreativestudio.com/#website' },
      'about': { '@id': 'https://www.keffinicreativestudio.com/#organization' },
      'description':
        'Keffini Creative Studio builds business solutions that drive real growth — efficient, scalable, and profit-focused. Nairobi, Kenya.',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.keffinicreativestudio.com/#faq',
      'mainEntity': FAQS.map(([q, a]) => ({
        '@type': 'Question',
        'name': q,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': a,
        },
      })),
    },
    {
      '@type': 'Service',
      'serviceType': 'Brand Identity Design',
      'provider': { '@id': 'https://www.keffinicreativestudio.com/#organization' },
      'description': 'Full brand identity systems, logos, typography, packaging design, and visual guidelines.',
    },
    {
      '@type': 'Service',
      'serviceType': 'Software & Web Development',
      'provider': { '@id': 'https://www.keffinicreativestudio.com/#organization' },
      'description': 'Full-stack web applications, e-commerce, Android mobile apps, and payment integrations.',
    },
    {
      '@type': 'Service',
      'serviceType': 'UI/UX Design',
      'provider': { '@id': 'https://www.keffinicreativestudio.com/#organization' },
      'description': 'User experience strategy, interface design, interactive prototyping, and design systems.',
    },
    {
      '@type': 'Service',
      'serviceType': 'Social Media & Digital Marketing',
      'provider': { '@id': 'https://www.keffinicreativestudio.com/#organization' },
      'description': 'Monthly social media management, motion graphics, campaign advertising, and brand strategy.',
    },
    {
      '@type': 'Service',
      'serviceType': 'Printing Services',
      'provider': { '@id': 'https://www.keffinicreativestudio.com/#organization' },
      'description': 'Bulk and large-format printing: uniforms and apparel, branded merchandise, signage, banners, and packaging.',
    },
    {
      '@type': 'Service',
      'serviceType': 'Marketing Services',
      'provider': { '@id': 'https://www.keffinicreativestudio.com/#organization' },
      'description': 'Market research, go-to-market plans, brand activations, outdoor advertising, event marketing, and promotions.',
    },
  ],
}

const WORKS = [
  { slug: 'battlezone-kenya', title: 'Battlezone Kenya - 4 Tha Kulture', category: 'Event Branding', year: '2026' },
  { slug: 'squeaky-clean', title: 'Squeaky Clean - Cleaning Services', category: 'Logo & Print Design', year: '2026' },
  { slug: 'foundations-of-movement', title: 'Foundations of Movement - F.O.M. Studio', category: 'Social Media & Branding', year: '2026' },
  { slug: 'ivory-horizons-tours', title: 'Ivory Horizons Tours - Travel Brand', category: 'Branding & Social Media', year: '2026' },
]

// Cover images for the Latest Works grid, preloaded on mount so the cards render instantly.
const WORK_COVERS = WORKS
  .map(w => PROJECT_ROWS.find(p => p.XG3otaDlZ === w.slug)?.XpFWjsiiE)
  .filter(Boolean)


const LOOP_PHOTOS = [1, 2, 3, 4, 5, 6].map(n => `/images/loop/loop-${n}.jpg`)

// Simple, reliable cross-fade through all six photos in order. Replaces the Framer
// ImageLoopCard, whose own built-in 1s auto-advance fought this parent's timer and made
// the loop stutter/jump back to the previous photo. All six <img> are in the DOM, so they
// preload together and each fade is just an opacity swap.
function ImageLoop({ interval = 2600 }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI(n => (n + 1) % LOOP_PHOTOS.length), interval)
    return () => clearInterval(id)
  }, [interval])
  return (
    <div className="home-loop">
      {LOOP_PHOTOS.map((src, j) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden={j !== i}
          loading="eager"
          className={'home-loop__img' + (j === i ? ' is-active' : '')}
        />
      ))}
    </div>
  )
}

export default function Home() {
  useScrollReveal()
  // Warm the browser cache for the Latest Works covers so they appear without a load delay.
  useEffect(() => {
    WORK_COVERS.forEach(src => { const img = new Image(); img.src = src })
  }, [])
  const bp = useBreakpoint()
  const mobile = bp === 'base' || bp === 'sm'
  const tablet = bp === 'md'
  const [briefOpen, setBriefOpen] = useState(false)

  // The Rate Card's "Custom package available" card is a Framer link to "./"; open the onboarding brief instead.
  const onRatesClick = (e) => {
    if (!(e.target as HTMLElement).closest('[data-framer-name="Custom Package"]')) return
    e.preventDefault()
    e.stopPropagation()
    setBriefOpen(true)
  }

  return (
    <main className="home">
      <SEO
        title="Branding, UI/UX & Software Development in Nairobi"
        description="We build business solutions that drive real growth — efficient, scalable, and profit-focused. Bespoke brand identity, UI/UX, software development, and digital marketing in Nairobi."
        keywords="brand identity, UI/UX design, software development, creative agency Nairobi, web development Kenya, graphic design, social media marketing, bulk printing Nairobi, uniform printing, large-format printing, brand activations, Lipa Mdogo Mdogo"
        canonicalPath="/"
        schema={HOME_SCHEMA}
      />
      <Header tone="dark" />

      <section className="home-hero"><HeroIntro /></section>

      <section className="home-section home-commitment" id="about">
        <div className="home-commitment__media">
          <ImageLoop />
        </div>
        <div className="home-commitment__body">
          <Subtitle variant="Light" uScxfp93T="(01)" dg_MYFFcN="Our Commitment" bvYUJxwf_="flex-start" />
          <h2 className="home-h2">Consistent quality in every project, blending innovative Design</h2>
          <p className="home-lede">We create digital experiences where design meets purpose — blending innovation with clarity. Every interaction is crafted to feel seamless, intuitive, and meaningful.</p>
          <div className="home-counters">
            <div className="home-counter"><Counter dTdeIinrd={'Client\nRevenue'} J7_aT4sHa={0} JQGowXigM={120} BxSFJAa6O="$" YsjZ8_Z3T="K+" /></div>
            <div className="home-counter"><Counter dTdeIinrd={'Client\nRetention'} J7_aT4sHa={0} JQGowXigM={95} YsjZ8_Z3T="%" /></div>
            <div className="home-counter"><Counter dTdeIinrd={'Individuals\nRate'} J7_aT4sHa={0} JQGowXigM={100} YsjZ8_Z3T="%" /></div>
          </div>
        </div>
      </section>

      <section className="home-brands"><Brands /></section>

      <section className="home-section home-works" id="works">
        <div className="home-works__head">
          <div>
            <Subtitle variant="Light" uScxfp93T="(02)" dg_MYFFcN="Projects" bvYUJxwf_="flex-start" />
            <h2 className="home-display">Latest<br />Works</h2>
          </div>
          <div className="home-works__intro">
            <p>We craft digital products that speak for themselves — simple, fast, and user-focused. Here’s a look at how we turn challenges into seamless design solutions.</p>
            <Link to="/projects" className="home-pill">View all works <span>↗</span></Link>
          </div>
        </div>
        <div className="home-works__grid">
          {WORKS.map(w => (
            <CardWorks key={w.title} variant={mobile ? 'Mobile' : 'Desktop'} iPMQ40_CB={"/projects/" + w.slug} V6sx94wG_={{ src: PROJECT_ROWS.find(p => p.XG3otaDlZ === w.slug)?.XpFWjsiiE, alt: w.title }} yclpiKcXE={getProject(w.slug)?.category ?? w.category} ebF1n0j2r={w.title} maK60wNg4={w.year} />
          ))}
        </div>
      </section>

      <section className="home-why" id="why"><Why variant={mobile ? 'Phone' : tablet ? 'Tablet' : 'Desktop'} /></section>

      <section className="home-services" id="services">
        <div className="home-section">
          <div className="home-sub--invert"><Subtitle variant="Light" uScxfp93T="(04)" dg_MYFFcN="Our Services" bvYUJxwf_="flex-start" /></div>
          <h2 className="home-display home-display--light">Services</h2>
          <ServicesList variant={mobile ? 'Mobile' : tablet ? 'Tablet' : 'Desktop'} />
        </div>
      </section>

      <section className="home-ratecard" id="rates" onClickCapture={onRatesClick}><RateCard variant={mobile ? 'Phone' : tablet ? 'Tablet' : 'Desktop'} /></section>
      {briefOpen && <CustomPackageBrief onClose={() => setBriefOpen(false)} />}

      <section className="home-section home-faq" id="faq">
        <div className="home-faq__head">
          <Subtitle variant="Light" uScxfp93T="(05)" dg_MYFFcN="FAQ" bvYUJxwf_="flex-start" />
          <h2 className="home-display">FAQ</h2>
        </div>
        <div className="home-faq__list">
          {FAQS.map(([q, a], i) => <div key={q} className="home-faq__item"><Faq variant={mobile ? 'Mobile' : 'Desktop'} CAMoD9Z8N={q} rz_T6n7XM={a} ejE4iIxQg={i === 0} /></div>)}
        </div>
      </section>

      <Footer variant={mobile ? 'Phone' : tablet ? 'Tablet' : 'Desktop'} />
    </main>
  )
}
