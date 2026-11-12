// @ts-nocheck – Framer exports are untyped JS
import ServiceList, { ServiceCard } from '../framer/ServiceList'

// Services that are not in the Framer export (01-04 live inside ServiceList).
// Each card takes up to 6 tags; Framer prop IDs: mm2TadyHO number, Pbe6da3x3 title,
// bGkBZIVtS body, CfAAh_tmR / T8OHKHHDO / vNyGjxSDH / ysnRgzmmo / c3i0_qJK1 / hQaIT36m6 tags 1-6.
export const EXTRA_SERVICES = [
  {
    title: 'Printing Services',
    body: 'Bulk and large-format printing without the quality drop. From staff and school uniforms to banners, signage and packaging, we print at volume and keep every piece true to your brand.',
    tags: ['Bulk Printing', 'Uniforms & Apparel', 'Large-Format Print', 'Branded Merchandise', 'Signage & Banners', 'Packaging Print'],
  },
  {
    title: 'Marketing Services',
    body: 'Marketing that reaches people beyond the feed. We plan launches, run activations and put your brand where your customers are, on the street, at events and in store.',
    tags: ['Market Research', 'Go-to-Market Plans', 'Brand Activations', 'Outdoor Advertising', 'Event Marketing', 'Promotions'],
  },
]

const TAG_PROPS = ['CfAAh_tmR', 'T8OHKHHDO', 'vNyGjxSDH', 'ysnRgzmmo', 'c3i0_qJK1', 'hQaIT36m6']

export default function ServicesList({ variant }: { variant: 'Desktop' | 'Tablet' | 'Mobile' }) {
  const start = 5
  return (
    <div className="kc-services">
      <ServiceList variant={variant} />
      <div className={'kc-services__extra' + (variant === 'Mobile' ? ' is-mobile' : '')}>
        {EXTRA_SERVICES.map((s, i) => {
          const tags = Object.fromEntries(TAG_PROPS.map((p, j) => [p, s.tags[j] ?? '']))
          return (
            <ServiceCard
              key={s.title}
              variant={variant === 'Mobile' ? 'Mobile' : 'Desktop'}
              mm2TadyHO={String(start + i).padStart(2, '0')}
              Pbe6da3x3={s.title}
              bGkBZIVtS={s.body}
              {...tags}
              style={{ width: '100%' }}
            />
          )
        })}
      </div>
    </div>
  )
}
