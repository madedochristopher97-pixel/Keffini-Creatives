// @ts-nocheck
import { useSearchParams } from 'react-router-dom'
import Header from '../components/layout/Header'
import Container from '../components/framer/Container'
import Footer from '../components/framer/Footer'
import WebProjects from '../components/home/WebProjects'
import SEO from '../components/layout/SEO'
import { PROJECT_ROWS } from '../data/projectRows.js'
import { WEB_PROJECTS } from '../data/webProjects'
import { useBreakpoint } from '../components/framer/_responsive-runtime.js'
import { useScrollReveal } from '../utils/effects/useScrollReveal'
import './projects.css'

const PROJECTS_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://keffini.com/projects#collection',
      'url': 'https://keffini.com/projects',
      'name': 'Selected Works & Case Studies | Keffini Creative Studio®',
      'description':
        'Explore selected brand identity, UI/UX design, and software development case studies crafted by Keffini Creative Studio.',
      'isPartOf': { '@id': 'https://keffini.com/#website' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://keffini.com/projects#breadcrumb',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://keffini.com/',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Projects',
          'item': 'https://keffini.com/projects',
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://keffini.com/projects#itemlist',
      'name': 'Featured Projects & Case Studies',
      'itemListElement': [
        ...PROJECT_ROWS.map((p, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'url': `https://keffini.com/projects/${p.XG3otaDlZ}`,
          'name': p.dAZk2Jaon,
        })),
        ...WEB_PROJECTS.map((w, idx) => ({
          '@type': 'ListItem',
          'position': PROJECT_ROWS.length + idx + 1,
          'url': w.url,
          'name': `${w.title} — ${w.client}`,
        })),
      ],
    },
  ],
}

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
      <SEO
        title="Selected Works & Case Studies — Brand Identity & Software"
        description="Explore selected works by Keffini Creative Studio. Brand identity, graphic design, and full-stack software development case studies across Kenya and East Africa."
        keywords="Keffini portfolio, brand identity case studies, UI/UX case studies Nairobi, software development portfolio, logo design Kenya, Battlezone Kenya, StarCall Phones, Ivory Horizons Tours"
        canonicalPath="/projects"
        schema={PROJECTS_SCHEMA}
      />
      <h1 className="sr-only">Selected Works &amp; Case Studies — Keffini Creative Studio</h1>
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
