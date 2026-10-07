// @ts-nocheck
import { useSearchParams } from 'react-router-dom'
import Header from '../components/layout/Header'
import Container from '../components/framer/Container'
import Footer from '../components/framer/Footer'
import WebProjects from '../components/home/WebProjects'
import { useBreakpoint } from '../components/framer/_responsive-runtime.js'
import { useScrollReveal } from '../utils/effects/useScrollReveal'
import './projects.css'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'design', label: 'Design' },
  { key: 'web', label: 'Web Development' },
]

export default function Projects() {
  useScrollReveal()
  const bp = useBreakpoint()
  const mobile = bp === 'base' || bp === 'sm'
  const tablet = bp === 'md'
  const [params, setParams] = useSearchParams()
  const type = FILTERS.some(f => f.key === params.get('type')) ? params.get('type') : 'all'
  const choose = key => setParams(key === 'all' ? {} : { type: key }, { replace: true })

  return (
    <main className="projects">
      <Header tone="light" />
      <nav className="projects__filters" aria-label="Filter projects">
        {FILTERS.map(f => (
          <button key={f.key} className={type === f.key ? 'is-active' : ''} aria-pressed={type === f.key} onClick={() => choose(f.key)}>{f.label}</button>
        ))}
      </nav>
      {type !== 'web' && <section className="projects__list"><div><Container /></div></section>}
      {type !== 'design' && <WebProjects heading={type === 'all'} />}
      <Footer variant={mobile ? 'Phone' : tablet ? 'Tablet' : 'Desktop'} />
    </main>
  )
}
