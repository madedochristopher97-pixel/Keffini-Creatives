/** Shared contact details + delivery for enquiries that don't go through the Framer contact form. */

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined
export const CONTACT_EMAIL = 'Hello@keffini.com'

// +254 112 896216 (international format, digits only, as wa.me expects)
export const WHATSAPP_NUMBER = '254112896216'
export const WHATSAPP_DISPLAY = '+254 112 896 216'
export const WHATSAPP_GREETING = 'Hi Keffini, I would like to talk about a project.'

export function waLink(text: string = WHATSAPP_GREETING) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

/**
 * Sends a plain-text enquiry. Posts JSON to VITE_CONTACT_ENDPOINT when set (same endpoint the contact form
 * uses); otherwise opens a mailto: draft to Hello@keffini.com. Resolves with how it was delivered.
 */
export async function submitEnquiry(opts: {
  subject: string
  name: string
  email: string
  message: string
  extra?: Record<string, string>
}): Promise<'sent' | 'draft'> {
  if (ENDPOINT) {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ subject: opts.subject, name: opts.name, email: opts.email, message: opts.message, ...opts.extra }),
    })
    if (!res.ok) throw new Error(`Form endpoint responded ${res.status}`)
    return 'sent'
  }
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(opts.subject)}&body=${encodeURIComponent(opts.message)}`
  return 'draft'
}
