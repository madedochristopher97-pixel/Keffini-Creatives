/** Shared contact details + delivery for every client form (contact page + custom package brief). */

/** Inbox that receives client enquiries. */
export const INBOX_EMAIL = 'keffinicreativestudio@gmail.com'
/** Public address shown to visitors (fallback when sending fails). */
export const CONTACT_EMAIL = 'Hello@keffini.com'

// FormSubmit (no account needed) relays the JSON to INBOX_EMAIL. The first submission after deploy triggers a one-time
// activation email to that inbox. Set VITE_CONTACT_ENDPOINT (e.g. a Formspree URL) to use a different relay.
const ENDPOINT = (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined) || `https://formsubmit.co/ajax/${INBOX_EMAIL}`

// +254 112 896216 (international format, digits only, as wa.me expects)
export const WHATSAPP_NUMBER = '254112896216'
export const WHATSAPP_DISPLAY = '+254 112 896 216'
export const WHATSAPP_GREETING = 'Hi Keffini, I would like to talk about a project.'

export function waLink(text: string = WHATSAPP_GREETING) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

/**
 * Emails an enquiry to the studio inbox. `email` doubles as the reply-to; `fields` become labelled rows in the
 * email (insertion order). Throws if delivery fails so callers can show a fallback.
 */
export async function submitEnquiry(opts: {
  subject: string
  name: string
  email: string
  fields?: Record<string, string>
}): Promise<void> {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      _subject: opts.subject,
      _template: 'table',
      _captcha: 'false',
      _honey: '',
      name: opts.name,
      email: opts.email,
      ...opts.fields,
    }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok || data.success === 'false' || data.success === false) {
    throw new Error(`Enquiry endpoint rejected the submission (${res.status}): ${data.message ?? 'no message'}`)
  }
}
