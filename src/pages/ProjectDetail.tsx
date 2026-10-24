// @ts-nocheck
import { Navigate, useParams } from 'react-router-dom'
import Header from '../components/layout/Header'
import Detail from '../components/framer/Detail'
import MoreWorks from '../components/framer/MoreWorks'
import Footer from '../components/framer/Footer'
import SEO from '../components/layout/SEO'
import { useBreakpoint } from '../components/framer/_responsive-runtime.js'
import { useScrollReveal } from '../utils/effects/useScrollReveal'
import { getProject } from '../data/projects'
import StoryDetail from './StoryDetail'
import './projectDetail.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  useScrollReveal()
  const bp = useBreakpoint()
  const project = getProject(slug)
  if (!project) return <Navigate to="/projects" replace />
  if (project.chapters) return <StoryDetail project={project} />
  const mobile = bp === 'base' || bp === 'sm'
  const tablet = bp === 'md'
  const variant = mobile ? 'Phone' : tablet ? 'Tablet' : 'Desktop'
  const [s1, s2, s3] = project.sections
  const im = project.images

  const projectUrl = `https://www.keffinicreativestudio.com/projects/${project.slug}`
  const primaryImage = im[0]?.startsWith('http') ? im[0] : `https://www.keffinicreativestudio.com${im[0] || '/images/og-image.jpg'}`

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['CreativeWork', 'Article'],
        '@id': `${projectUrl}#work`,
        'headline': project.title,
        'description': project.intro,
        'url': projectUrl,
        'genre': project.category,
        'inLanguage': 'en-US',
        'creator': {
          '@type': 'Organization',
          'name': 'Keffini Creative Studio',
          'url': 'https://www.keffinicreativestudio.com/',
        },
        'publisher': {
          '@id': 'https://www.keffinicreativestudio.com/#organization',
        },
        'image': primaryImage,
        'about': {
          '@type': 'Thing',
          'name': project.industry,
        },
        'dateCreated': project.year,
        'datePublished': `${project.year}-01-01`,
        'articleBody': project.sections?.map(s => `${s.heading} ${s.body}`).join('\n\n') || project.intro,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${projectUrl}#breadcrumb`,
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
            'name': 'Projects',
            'item': 'https://www.keffinicreativestudio.com/projects',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': project.title,
            'item': projectUrl,
          },
        ],
      },
    ],
  }

  return (
    <main className="project-detail" key={project.slug}>
      <SEO
        title={`${project.title} — ${project.category}`}
        description={project.intro}
        keywords={`${project.title}, ${project.category}, ${project.industry}, Keffini Creative Studio, brand identity Nairobi, creative design Kenya`}
        canonicalPath={`/projects/${project.slug}`}
        ogType="article"
        ogImage={primaryImage}
        schema={schema}
      />
      <h1 className="sr-only">{project.title}</h1>
      <Header tone="light" />
      <Detail
        variant={variant}
        e_vIDgxro={project.title}
        Ku9AIrxln={project.intro}
        USZgcBI1d={project.link}
        zEEFGlt3x={project.year}
        PeGnAEyMz={project.industry}
        gHL2LNF_Q={project.category}
        CjFbcsSU1={project.timeline}
        qpxAtZ1C6={im[0]}
        l1ec7Hv3D={s1.heading}
        uFgCXLc4Y={s1.body}
        v5I0BzQ7o={im[1]}
        iTU5qQ0lS={im[2]}
        spQPwXwzE={im[3]}
        MnBB9jNAJ={s2.heading}
        kce1hkBgn={s2.body}
        O3GCY1JMi={im[4]}
        F1eBZgJOm={im[5]}
        aAKLpRM5X={im[6]}
        XCsp1pYC8={s3.heading}
        tyIKWLY_A={s3.body}
        wHaRsJFBk={im[7]}
      />
      <MoreWorks variant={variant} TlufxZoEf={project.listTitle} />
      <Footer variant={variant} />
    </main>
  )
}
