
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined
const TO = 'Hello@keffini.com'

/**
 * Intercepts submits of the Framer forms inside `scope` (they post to Framer's hosted
 * forms API, which doesn't exist outside Framer). Collects Name / Email / Message by field
 * order (Framer names every input "Email"), sends to VITE_CONTACT_ENDPOINT (e.g. Formspree)
 * or falls back to a mailto: draft, then redirects to /thank-you.
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
        if (ENDPOINT) {
          const res = await fetch(ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({ name, email, message }),
          })
          if (!res.ok) throw new Error(`Form endpoint responded ${res.status}`)
        } else {
          const body = `${message}\n\n— ${name || 'Website visitor'} (${email})`
          window.location.href = `mailto:${TO}?subject=${encodeURIComponent('New project enquiry')}&body=${encodeURIComponent(body)}`
        }
        navigate('/thank-you')
      } catch (err) {
        console.error(err)
        alert('Something went wrong sending your message. Please email ' + TO)
      }
    }
    document.addEventListener('submit', onSubmit, true)
    return () => document.removeEventListener('submit', onSubmit, true)
  }
}
