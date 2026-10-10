import { waLink, WHATSAPP_DISPLAY } from '../../utils/enquiry'
import './whatsAppStrip.css'

/** Quiet, typographic WhatsApp entry point. Deliberately not a floating button. */
export default function WhatsAppStrip({ message }: { message?: string }) {
  return (
    <section className="wa-strip" aria-label="WhatsApp">
      <p className="wa-strip__label">Prefer a quicker conversation?</p>
      <a className="wa-strip__link" href={waLink(message)} target="_blank" rel="noopener noreferrer">
        <span className="wa-strip__num">{WHATSAPP_DISPLAY}</span>
        <span className="wa-strip__cta">Message us on WhatsApp <span aria-hidden="true">↗</span></span>
      </a>
    </section>
  )
}
