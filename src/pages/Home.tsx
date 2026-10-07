// @ts-nocheck – Framer exports are untyped JS
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProject } from '../data/projects'
import { PROJECT_ROWS } from '../data/projectRows.js'
import Header from '../components/layout/Header'
import HeroIntro from '../components/home/HeroIntro'
import Why from '../components/framer/Why'
import ImageLoopCard from '../components/framer/ImageLoopCard'
import Subtitle from '../components/framer/Subtitle'
import Counter from '../components/framer/Counter'
import Brands from '../components/framer/Brands'
import CardWorks from '../components/framer/CardWorks'
import ServiceList from '../components/framer/ServiceList'
import RateCard from '../components/framer/RateCard'
import Faq from '../components/framer/Faq'
import Footer from '../components/framer/Footer'
import { useBreakpoint } from '../components/framer/_responsive-runtime.js'
import { useScrollReveal } from '../utils/effects/useScrollReveal'
import './home.css'

const WORKS = [
  { slug: 'battlezone-kenya', title: 'Battlezone Kenya - 4 Tha Kulture', category: 'Event Branding', year: '2026' },
  { slug: 'squeaky-clean', title: 'Squeaky Clean - Cleaning Services', category: 'Logo & Print Design', year: '2026' },
  { slug: 'foundations-of-movement', title: 'Foundations of Movement - F.O.M. Studio', category: 'Social Media & Branding', year: '2026' },
  { slug: 'ivory-horizons-tours', title: 'Ivory Horizons Tours - Travel Brand', category: 'Branding & Social Media', year: '2026' },
]

const FAQS = [
  ['What’s your typical turnaround time?', 'Most branding projects take 3–6 weeks, while websites and digital products typically take 4–10 weeks depending on scope. We share a clear timeline before we start.'],
  ['Do you offer custom design solutions?', 'Yes. Every project is designed from scratch around your brand, audience and goals — no templates.'],
  ['What industries do you specialize in?', 'We work across fashion, hospitality, beauty, lifestyle, education and technology, helping brands of every size show up with clarity.'],
  ['Can you handle both design and development?', 'Absolutely. Our team covers brand identity, UI/UX and full-stack development, so you work with one studio from concept to launch.'],
  ['Do you provide post-launch support?', 'Yes. We offer ongoing maintenance, updates and growth support after launch so your brand keeps performing.'],
]

// The ImageLoopCard has 5 image slots/variants (image1..5 = bNIxmSYTX, CXo7fyVBS, YzLWPJL0x, Hu6fn5bt1, UhE81XPkg).
// We have 6 photos, so each tick puts the next photo into the slot of the variant being shown.
const LOOP_VARIANTS = [
  { variant: 'rwVy46cSw', prop: 'bNIxmSYTX' },
  { variant: 'fXz2uPEpF', prop: 'CXo7fyVBS' },
  { variant: 'SUjh3_MZT', prop: 'YzLWPJL0x' },
  { variant: 'ftDlrfWhC', prop: 'Hu6fn5bt1' },
  { variant: 'HLsNJgaQm', prop: 'UhE81XPkg' },
]
const LOOP_PHOTOS = [1, 2, 3, 4, 5, 6].map(n => `/images/loop/loop-${n}.jpg`)

// Cycles the Framer ImageLoopCard through the photos (the loop in the design)
function ImageLoop({ interval = 2000 }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI(n => n + 1), interval)
    return () => clearInterval(id)
  }, [interval])
  const { variant } = LOOP_VARIANTS[i % LOOP_VARIANTS.length]
  // Fill every slot (never fall back to the component stock photos): slot j shows the photo of the next tick that lands on j
  const images = {}
  LOOP_VARIANTS.forEach(({ prop }, j) => {
    const n = LOOP_VARIANTS.length, prev = i - 1 // keep the slot we are fading out of on its old photo
    const tick = prev + ((j - (((prev % n) + n) % n) + n) % n)
    images[prop] = { src: LOOP_PHOTOS[((tick % LOOP_PHOTOS.length) + LOOP_PHOTOS.length) % LOOP_PHOTOS.length], alt: "" }
  })
  return <ImageLoopCard variant={variant} {...images} />
}

export default function Home() {
  useScrollReveal()
  const bp = useBreakpoint()
  const mobile = bp === 'base' || bp === 'sm'
  const tablet = bp === 'md'

  return (
    <main className="home">
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
          <ServiceList variant={mobile ? 'Mobile' : tablet ? 'Tablet' : 'Desktop'} />
        </div>
      </section>

      <section className="home-ratecard" id="rates"><RateCard variant={mobile ? 'Phone' : tablet ? 'Tablet' : 'Desktop'} /></section>

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
