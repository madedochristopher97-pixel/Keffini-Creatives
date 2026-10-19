// @ts-nocheck
import Legal from '../components/framer/Legal'
import SEO from '../components/layout/SEO'

const PRIVACY_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://keffini.com/privacy#page',
      'url': 'https://keffini.com/privacy',
      'name': 'Privacy Policy | Keffini Creative Studio®',
      'description': 'Privacy Policy and data collection guidelines for Keffini Creative Studio.',
      'isPartOf': { '@id': 'https://keffini.com/#website' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://keffini.com/privacy#breadcrumb',
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
          'name': 'Privacy Policy',
          'item': 'https://keffini.com/privacy',
        },
      ],
    },
  ],
}

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy and data protection commitments of Keffini Creative Studio."
        canonicalPath="/privacy"
        schema={PRIVACY_SCHEMA}
      />
      <Legal variant="Desktop" lkVIlJHj3="Privacy Policy" />
    </>
  )
}
