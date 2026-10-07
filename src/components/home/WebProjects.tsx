import { WEB_PROJECTS } from '../../data/webProjects'
import './webProjects.css'

/** Live-site showcase: browser-frame screenshot, summary, feature chips and a visit link. */
export default function WebProjects({ heading = true }: { heading?: boolean }) {
  return (
    <section className="webp" id="web-development">
      {heading && (
        <header className="webp__head">
          <h2>Web Development</h2>
          <p>Live websites built with our development partner, Harry. Open any of them to explore the real thing.</p>
        </header>
      )}
      <div className="webp__grid">
        {WEB_PROJECTS.map(p => (
          <article className="webp__card" key={p.slug}>
            <a className="webp__shot" href={p.url} target="_blank" rel="noopener noreferrer" aria-label={'Visit ' + p.title}>
              <div className="webp__chrome">
                <i /><i /><i />
                <span>{p.url.replace('https://', '')}</span>
              </div>
              <div className="webp__img"><img src={p.image} alt={p.title + ' website'} loading="lazy" /></div>
              <span className="webp__visit">Visit live site <b>↗</b></span>
            </a>
            <div className="webp__meta">
              <div className="webp__title"><h3>{p.title}</h3><span>{p.year}</span></div>
              <p className="webp__kind">{p.client}</p>
              <p className="webp__sum">{p.summary}</p>
              <ul>{p.features.map(f => <li key={f}>{f}</li>)}</ul>
              <p className="webp__by">Built by {p.builtBy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
