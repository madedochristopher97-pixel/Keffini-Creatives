// @ts-nocheck
import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'
import MoreWorks from '../components/framer/MoreWorks'
import Footer from '../components/framer/Footer'
import { useBreakpoint } from '../components/framer/_responsive-runtime.js'
import { useScrollReveal } from '../utils/effects/useScrollReveal'
import './storyDetail.css'

/** Multi-chapter case study (title, facts, hero, numbered chapters with image grids). Data: ProjectDetail.chapters */
export default function StoryDetail({ project }) {
  useScrollReveal()
  const bp = useBreakpoint()
  const variant = bp === 'base' || bp === 'sm' ? 'Phone' : bp === 'md' ? 'Tablet' : 'Desktop'
  const facts = [['Year', project.year], ['Industry', project.industry], ['Space of work', project.category], ['Timeline', project.timeline]]
  return (
    <main className="story">
      <Header tone="light" />
      <section className="story__top">
        <div className="story__lead">
          <h1>{project.title}</h1>
          <p>{project.intro}</p>
          {/^https?:/.test(project.link)
            ? <a href={project.link} target="_blank" rel="noopener noreferrer" className="story__btn">Handles Link <span>↗</span></a>
            : <Link to={project.link} className="story__btn">Handles Link <span>↗</span></Link>}
        </div>
        <dl className="story__facts">
          {facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
        </dl>
      </section>
      <div className="story__hero"><img src={project.images[0]} alt={project.title} style={{ objectPosition: project.heroPosition || 'center' }} /></div>
      {project.chapters.map(c => (
        <section className="story__chapter" key={c.heading}>
          <h2>{c.heading}</h2>
          <p>{c.body}</p>
          {c.banner && <div className="story__banner"><img src={c.banner} alt="" /></div>}
          {c.video && <div className="story__banner"><video src={c.video} poster={c.images[0]} controls muted loop playsInline preload="none" /></div>}
          {c.images.length > 0 && <div className={'story__grid story__grid--' + (c.cols || 2)}>
            {c.images.map((src, i) => <img key={i} src={src} alt={c.heading} loading="lazy" />)}
          </div>}
          {c.link && <a className="story__btn story__btn--inline" href={c.link.href} target="_blank" rel="noopener noreferrer">{c.link.label}</a>}
          {c.note && <p className="story__note">{c.note}</p>}
        </section>
      ))}
      <MoreWorks variant={variant} TlufxZoEf={project.listTitle} />
      <Footer variant={variant} />
    </main>
  )
}
