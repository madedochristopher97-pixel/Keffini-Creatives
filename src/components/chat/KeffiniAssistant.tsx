import { FormEvent, useEffect, useRef, useState } from 'react'
import { callNvidiaChatCompletion } from '../../lib/nvidiaAi'
import { waLink } from '../../utils/enquiry'
import './keffiniAssistant.css'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const INITIAL_GREETING =
  "Hello! I am the Keffini Creative Studio assistant, powered by NVIDIA NIM (Llama 3.2). Ask me about our brand identity work, UI/UX, software development, rate card plans, or case studies like StarCall Phones and BZK."

const SUGGESTIONS = [
  'What are your monthly social media rates?',
  'Tell me about the StarCall Phones app',
  'What is your typical turnaround time?',
  'How do we start a custom project?',
]

const STATUS_STEPS = [
  'Consulting studio knowledge base…',
  'Synthesizing answer with NVIDIA NIM…',
  'Still processing with NVIDIA model…',
]

export default function KeffiniAssistant() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [statusStep, setStatusStep] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open && !busy) {
      inputRef.current?.focus()
    }
  }, [open, busy])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, busy])

  useEffect(() => {
    if (!busy) return
    setStatusStep(0)
    const t1 = setTimeout(() => setStatusStep(1), 2500)
    const t2 = setTimeout(() => setStatusStep(2), 7000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [busy])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  async function handleSend(text: string) {
    const query = text.trim()
    if (!query || busy) return

    setError(null)
    setInput('')
    const updatedHistory: Message[] = [...messages, { role: 'user', content: query }]
    setMessages(updatedHistory)
    setBusy(true)

    try {
      const reply = await callNvidiaChatCompletion(updatedHistory)
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch (err: any) {
      console.error('Chat error:', err)
      setError(err?.message || 'The NVIDIA model is taking a moment to respond. Please try again or chat on WhatsApp.')
    } finally {
      setBusy(false)
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    handleSend(input)
  }

  return (
    <>
      <button
        type="button"
        className="kc-ai-launcher"
        aria-label="Open Keffini Studio AI Assistant"
        aria-expanded={open}
        onClick={() => setOpen(prev => !prev)}
      >
        <img className="kc-ai-launcher__icon" src="/images/bot-icon.svg" alt="" aria-hidden="true" width={20} height={18} />
        <span>{open ? 'Close Assistant' : 'Ask Studio AI'}</span>
      </button>

      {open && (
        <section
          className="kc-ai-panel"
          role="dialog"
          aria-label="Keffini Studio AI Assistant"
          aria-modal="true"
        >
          <header className="kc-ai-head">
            <div className="kc-ai-head__meta">
              <h3>
                Keffini Studio AI
                <span className="kc-ai-head__badge">NVIDIA NIM</span>
              </h3>
              <p>Grounded in verified studio works &amp; rate card</p>
            </div>
            <button
              type="button"
              className="kc-ai-head__close"
              aria-label="Close assistant"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </header>

          <div className="kc-ai-log" ref={scrollRef}>
            <div className="kc-ai-msg kc-ai-msg--system">
              {INITIAL_GREETING}
            </div>

            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`kc-ai-msg kc-ai-msg--${m.role}`}
              >
                {m.content}
              </div>
            ))}

            {busy && (
              <div className="kc-ai-msg kc-ai-msg--assistant kc-ai-thinking">
                <span className="kc-ai-thinking-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span>{STATUS_STEPS[statusStep]}</span>
              </div>
            )}

            {error && (
              <div className="kc-ai-msg kc-ai-msg--error">
                {error}
              </div>
            )}
          </div>

          {messages.length === 0 && (
            <div className="kc-ai-suggestions">
              {SUGGESTIONS.map(s => (
                <button
                  key={s}
                  type="button"
                  className="kc-ai-chip"
                  onClick={() => handleSend(s)}
                  disabled={busy}
                >
                  {s} ↗
                </button>
              ))}
            </div>
          )}

          <form className="kc-ai-form" onSubmit={onSubmit}>
            <input
              ref={inputRef}
              type="text"
              className="kc-ai-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder={busy ? 'Studio AI is thinking…' : 'Ask about services, rates, or projects…'}
              disabled={busy}
              maxLength={1000}
            />
            <button
              type="submit"
              className="kc-ai-submit"
              disabled={busy || !input.trim()}
            >
              {busy ? '…' : 'Send ↗'}
            </button>
          </form>

          <footer className="kc-ai-foot">
            <span>Direct contact:</span>
            <a href={waLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp Us ↗
            </a>
          </footer>
        </section>
      )}
    </>
  )
}
