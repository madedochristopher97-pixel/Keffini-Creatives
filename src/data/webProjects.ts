// Web development projects, built by Harry (Harrison Ndeke), Keffini's development partner.
// Shown on the Projects page as live-site showcases (they link out, no case-study page).
export interface WebProject {
  slug: string
  title: string
  client: string
  year: string
  image: string
  url: string
  summary: string
  features: string[]
  builtBy: string
}

export const WEB_PROJECTS: WebProject[] = [
  {
    slug: 'bills-on-solar',
    title: 'Bills On Solar',
    client: 'Corporate & e-commerce website',
    year: '2025',
    image: '/images/web/bills-on-solar.jpg',
    url: 'https://billsonsolar.com',
    summary:
      'Corporate and e-commerce site for a Kenyan solar provider: a product catalogue with cart and wishlist, installation services, projects, a blog, partner logos, a quote form and an AI assistant.',
    features: ['Product catalogue', 'Cart & wishlist', 'Quote form', 'AI assistant', 'Blog'],
    builtBy: 'Harry',
  },
  {
    slug: 'standout-growth',
    title: 'Standout Growth',
    client: 'Personal brand coaching website',
    year: '2025',
    image: '/images/web/standout-growth.jpg',
    url: 'https://standout4growth.com',
    summary:
      'Coaching and personal-branding site for Alice Ngatia: a quiz and toolkit funnel, course sales with a cart, testimonials, a blog and a newsletter sign-up.',
    features: ['Quiz & toolkit funnel', 'Course sales', 'Testimonials', 'Newsletter'],
    builtBy: 'Harry',
  },
]
