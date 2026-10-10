import { CONTACT_EMAIL, submitEnquiry } from './enquiry'

/**
 * Intercepts submits of the Framer forms inside `scope` (they post to Framer's hosted
 * forms API, which doesn't exist outside Framer). Collects Name / Email / Message by field
 * order (Framer names every input "Email"), emails it to the studio inbox via `submitEnquiry`
 * (utils/enquiry.ts), then redirects to /thank-you.
 */
export function attachContactForm(navigate: (to: string) => void, scope = '.contact') {
  {
    const onSubmit = async (e: Event) => {
      const form = e.target as HTMLFormElement
      if (!form.closest(scope)) return
      e.preventDefault()
      e.stopImmediatePropagation()

      const fields = [...form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input:not([type=hidden]), textarea')]
        .filter(f => f.offsetParent !== null && f.type !== 'checkbox')
      const email = (fields.find(f => f.type === 'email') as HTMLInputElement | undefined)?.value ?? ''
      const message = (fields.find(f => f.tagName === 'TEXTAREA') as HTMLTextAreaElement | undefined)?.value ?? ''
      const name = (fields.find(f => f.type === 'text') as HTMLInputElement | undefined)?.value ?? ''
      if (!email || !message) return

      try {
        await submitEnquiry({ subject: 'New project enquiry', name: name || 'Website visitor', email, fields: { message } })
        navigate('/thank-you')
      } catch (err) {
        console.error(err)
        alert('Something went wrong sending your message. Please email ' + CONTACT_EMAIL)
      }
    }
    document.addEventListener('submit', onSubmit, true)
    return () => document.removeEventListener('submit', onSubmit, true)
  }
}
