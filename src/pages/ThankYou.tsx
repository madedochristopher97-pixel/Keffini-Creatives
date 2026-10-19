// @ts-nocheck
import ThankYouPage from '../components/framer/ThankYou'
import SEO from '../components/layout/SEO'

export default function ThankYou() {
  return (
    <>
      <SEO
        title="Enquiry Received — Thank You"
        description="Thank you for reaching out to Keffini Creative Studio. Our team will review your project brief and get in touch shortly."
        canonicalPath="/thank-you"
        noindex={true}
      />
      <ThankYouPage variant="Desktop" />
    </>
  )
}
