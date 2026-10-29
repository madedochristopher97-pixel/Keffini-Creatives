import { useEffect } from 'react'

export interface SeoProps {
  title?: string
  description?: string
  keywords?: string[] | string
  canonicalPath?: string
  ogType?: 'website' | 'article' | 'profile'
  ogImage?: string
  schema?: Record<string, unknown> | Array<Record<string, unknown>>
  noindex?: boolean
}

const DEFAULT_TITLE = 'Keffini Creative Studio® | Branding, UI/UX & Software Development in Nairobi'
const DEFAULT_DESCRIPTION =
  'Keffini Creative Studio is a Nairobi-based creative & software studio building business solutions that drive real growth — blending brand identity, UI/UX design, full-stack software development, and digital marketing.'
const DEFAULT_OG_IMAGE = 'https://www.keffinicreativestudio.com/images/og-image.jpg'
const SITE_URL = 'https://www.keffinicreativestudio.com'

function setMetaTag(selector: string, attrName: string, attrValue: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attrName, attrValue)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function setLinkTag(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  canonicalPath,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  schema,
  noindex = false,
}: SeoProps) {
  useEffect(() => {
    // 1. Document Title
    const formattedTitle = title ? `${title} | Keffini Creative Studio®` : DEFAULT_TITLE
    document.title = formattedTitle

    // 2. Standard Meta Tags
    setMetaTag('meta[name="description"]', 'name', 'description', description)

    const kw = Array.isArray(keywords)
      ? keywords.join(', ')
      : keywords ||
        'brand identity, UI/UX design, software development, creative agency Nairobi, web development Kenya, graphic design, social media marketing'
    setMetaTag('meta[name="keywords"]', 'name', 'keywords', kw)

    setMetaTag(
      'meta[name="robots"]',
      'name',
      'robots',
      noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    )

    // 3. Canonical Tag
    const resolvedPath = canonicalPath !== undefined ? canonicalPath : window.location.pathname
    const canonicalUrl = `${SITE_URL}${resolvedPath === '/' ? '' : resolvedPath}`
    setLinkTag('canonical', canonicalUrl)

    // 4. Open Graph Tags
    const resolvedOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', formattedTitle)
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description)
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType)
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Keffini Creative Studio')
    setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'en_US')
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', resolvedOgImage)
    setMetaTag('meta[property="og:image:secure_url"]', 'property', 'og:image:secure_url', resolvedOgImage)
    setMetaTag('meta[property="og:image:type"]', 'property', 'og:image:type', resolvedOgImage.endsWith('.png') ? 'image/png' : 'image/jpeg')
    setMetaTag('meta[property="og:image:width"]', 'property', 'og:image:width', '1200')
    setMetaTag('meta[property="og:image:height"]', 'property', 'og:image:height', '630')
    setMetaTag('meta[property="og:image:alt"]', 'property', 'og:image:alt', formattedTitle)

    // 5. Twitter Card Tags
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    setMetaTag('meta[name="twitter:site"]', 'name', 'twitter:site', '@keffinicreative')
    setMetaTag('meta[name="twitter:creator"]', 'name', 'twitter:creator', '@keffinicreative')
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', formattedTitle)
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', resolvedOgImage)
    setMetaTag('meta[name="twitter:image:alt"]', 'name', 'twitter:image:alt', formattedTitle)

    // 6. JSON-LD Structured Data (Schema.org)
    const scriptId = 'route-jsonld-schema'
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null

    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script')
        scriptTag.id = scriptId
        scriptTag.type = 'application/ld+json'
        document.head.appendChild(scriptTag)
      }
      scriptTag.text = JSON.stringify(schema)
    } else if (scriptTag) {
      scriptTag.remove()
    }

    return () => {
      // Clean up dynamic schema if unmounting without immediate replacement
    }
  }, [title, description, keywords, canonicalPath, ogType, ogImage, schema, noindex])

  return null
}
