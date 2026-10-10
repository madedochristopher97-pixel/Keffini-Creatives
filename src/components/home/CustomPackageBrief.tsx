import { useEffect, useMemo, useRef, useState } from 'react'
import { submitEnquiry, waLink } from '../../utils/enquiry'
import './customPackageBrief.css'

type Field =
  | { kind: 'text' | 'email' | 'tel'; key: string; label: string; required?: boolean; placeholder?: string; autoComplete?: string }
  | { kind: 'textarea'; key: string; label: string; required?: boolean; placeholder?: string }
  | { kind: 'single' | 'multi'; key: string; label?: string; required?: boolean; options: string[]; columns?: 1 | 2 }

type Step = { nav: string; title: string; hint?: string; fields: Field[] }

// Questions are written around the plans on the Rate Card (2 / 3 / 4 platforms, 20 / 30 / daily posts, KES 40k / 50k / 80k).
const STEPS: Step[] = [
  {
    nav: 'Brand',
    title: 'Who are we working with?',
    hint: 'A few basics so we can see where you are starting from.',
    fields: [
      { kind: 'text', key: 'brand', label: 'Brand or business name', required: true, autoComplete: 'organization' },
      { kind: 'textarea', key: 'about', label: 'What do you do, and who do you sell to?', placeholder: 'e.g. Handmade leather bags for women in Nairobi, 25 to 40' },
      { kind: 'text', key: 'handle', label: 'Website or current social handle (optional)', placeholder: '@yourbrand or www.yourbrand.com' },
    ],
  },
  {
    nav: 'Goal',
    title: 'What should social media do for you?',
    hint: 'Pick the one that matters most right now.',
    fields: [
      {
        kind: 'single', key: 'goal', required: true, columns: 1,
        options: [
          'Get known: reach new people and grow followers',
          'Get customers: turn attention into enquiries and sales',
          'Launch something: a product, event or tournament',
          'Stay consistent: keep a steady, professional presence',
          'Reset the look: refresh pages that feel dated',
        ],
      },
    ],
  },
  {
    nav: 'Platforms',
    title: 'Where does your audience spend time?',
    hint: 'Pick all that apply. Our monthly plans cover two to four platforms.',
    fields: [
      {
        kind: 'multi', key: 'platforms', required: true,
        options: ['Instagram', 'Facebook', 'TikTok', 'LinkedIn', 'X (Twitter)', 'YouTube', 'WhatsApp Business', 'Not sure, advise me'],
      },
    ],
  },
  {
    nav: 'Content',
    title: 'What do you need made or managed?',
    hint: 'Pick all that apply.',
    fields: [
      {
        kind: 'multi', key: 'content', required: true,
        options: [
          'Branded graphics and posts', 'Reels and short video', 'Stories and highlights', 'Photography (product, service or people)',
          'Captions and copywriting', 'Paid ads (setup and management)', 'Community management (comments and DMs)', 'Influencer or creator outreach',
          'Event or tournament coverage', 'Monthly reporting and strategy calls',
        ],
      },
    ],
  },
  {
    nav: 'Pace',
    title: 'How much, and what do you already have?',
    fields: [
      {
        kind: 'single', key: 'pace', label: 'Posting pace, per platform', required: true,
        options: ['Around 20 posts a month', 'Around 30 posts a month', 'Daily posting', 'Not sure, advise me'],
      },
      {
        kind: 'single', key: 'assets', label: 'Brand assets today', columns: 1,
        options: ['Full brand guidelines (logo, colours, fonts)', 'A logo only', 'Nothing yet, we need branding too'],
      },
    ],
  },
  {
    nav: 'Budget',
    title: 'Budget and timing',
    hint: 'A range is enough. Ad spend on Meta or Google is paid separately from our monthly fee.',
    fields: [
      {
        kind: 'single', key: 'budget', label: 'Monthly budget', required: true,
        options: ['Below KES 40,000', 'KES 40,000 to 50,000', 'KES 50,000 to 80,000', 'KES 80,000 or more', 'Not sure, advise me'],
      },
      {
        kind: 'single', key: 'start', label: 'When would you like to start?',
        options: ['As soon as possible', 'Within the next month', 'In 2 to 3 months', 'Just exploring'],
      },
    ],
  },
  {
    nav: 'You',
    title: 'Where should we send the plan?',
    hint: 'We will reply with a scoped plan and a quote.',
    fields: [
      { kind: 'text', key: 'name', label: 'Your name', required: true, autoComplete: 'name' },
      { kind: 'email', key: 'email', label: 'Email', required: true, autoComplete: 'email' },
      { kind: 'tel', key: 'phone', label: 'Phone or WhatsApp number (optional)', autoComplete: 'tel' },
      { kind: 'single', key: 'channel', label: 'Best way to reach you', options: ['Email', 'WhatsApp', 'Phone call'] },
      { kind: 'textarea', key: 'notes', label: 'Anything else we should know? (optional)' },
    ],
  },
]

type Answers = Record<string, string | string[]>
const DRAFT_KEY = 'kc-custom-package-draft'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const LABELS: [string, string][] = [
  ['brand', 'Brand'], ['about', 'About'], ['handle', 'Handle'], ['goal', 'Goal'], ['platforms', 'Platforms'], ['content', 'Content'],
  ['pace', 'Posting pace'], ['assets', 'Brand assets'], ['budget', 'Budget'], ['start', 'Start'], ['notes', 'Notes'],
  ['name', 'Name'], ['email', 'Email'], ['phone', 'Phone'], ['channel', 'Prefers'],
]

function summarise(a: Answers) {
  const val = (k: string) => (Array.isArray(a[k]) ? (a[k] as string[]).join(', ') : ((a[k] as string) ?? '').trim())
  const lines = LABELS.map(([k, l]) => (val(k) ? `${l}: ${val(k)}` : '')).filter(Boolean)
  return `Hi Keffini, here is my custom package brief.\n\n${lines.join('\n')}`
}

function loadDraft(): Answers {
  try { return JSON.parse(sessionStorage.getItem(DRAFT_KEY) || '{}') } catch { return {} }
}

function problems(step: Step, a: Answers): Record<string, string> {
  const out: Record<string, string> = {}
  for (const f of step.fields) {
    const v = a[f.key]
    const empty = Array.isArray(v) ? v.length === 0 : !(v ?? '').toString().trim()
    if (f.required && empty) out[f.key] = f.kind === 'single' || f.kind === 'multi' ? 'Please choose an option to continue.' : 'This one is needed to continue.'
    else if (f.kind === 'email' && !empty && !EMAIL_RE.test((v as string).trim())) out[f.key] = 'That email does not look right.'
  }
  return out
}

export default function CustomPackageBrief({ onClose }: { onClose: () => void }) {
  const [answers, setAnswers] = useState<Answers>(loadDraft)
  const [step, setStep] = useState(0)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [phase, setPhase] = useState<'form' | 'sending' | 'sent' | 'draft'>('form')
  const [failed, setFailed] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const heading = useRef<HTMLHeadingElement>(null)
  const last = STEPS.length - 1
  const s = STEPS[step]

  // Keep a draft for the session, so closing by accident loses nothing.
  useEffect(() => {
    try { sessionStorage.setItem(DRAFT_KEY, JSON.stringify(answers)) } catch { /* private mode */ }
  }, [answers])

  // Lock page scroll, restore focus, Esc to close, keep Tab inside the dialog.
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    window.__lenis?.stop()
    document.documentElement.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key !== 'Tab' || !root.current) return
      const items = Array.from(root.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input, textarea')).filter(el => el.offsetParent !== null)
      if (!items.length) return
      const first = items[0], end = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); end.focus() }
      else if (!e.shiftKey && document.activeElement === end) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.documentElement.style.overflow = ''
      window.__lenis?.start()
      opener?.focus?.()
    }
  }, [onClose])

  useEffect(() => { heading.current?.focus({ preventScroll: true }) }, [step, phase])

  const set = (key: string, value: string | string[]) => {
    setAnswers(a => ({ ...a, [key]: value }))
    setErrors(e => (e[key] ? { ...e, [key]: '' } : e))
  }
  const toggle = (key: string, opt: string) => {
    const cur = (answers[key] as string[]) ?? []
    set(key, cur.includes(opt) ? cur.filter(o => o !== opt) : [...cur, opt])
  }

  const next = () => {
    const p = problems(s, answers)
    if (Object.values(p).some(Boolean)) { setErrors(p); return }
    setErrors({})
    setStep(n => Math.min(last, n + 1))
  }
  const back = () => { setErrors({}); setStep(n => Math.max(0, n - 1)) }

  const message = useMemo(() => summarise(answers), [answers])

  const send = async () => {
    const p = problems(s, answers)
    if (Object.values(p).some(Boolean)) { setErrors(p); return }
    setPhase('sending')
    setFailed(false)
    try {
      const how = await submitEnquiry({
        subject: `Custom package brief: ${answers.brand ?? ''}`.trim(),
        name: (answers.name as string) ?? '',
        email: (answers.email as string) ?? '',
        message,
      })
      try { sessionStorage.removeItem(DRAFT_KEY) } catch { /* ignore */ }
      setPhase(how)
    } catch (err) {
      console.error(err)
      setFailed(true)
      setPhase('form')
    }
  }

  const done = phase === 'sent' || phase === 'draft'

  return (
    <div ref={root} className="brief" role="dialog" aria-modal="true" aria-labelledby="brief-title">
      <aside className="brief__aside">
        <div className="brief__top">
          <p className="brief__eyebrow">Custom package</p>
          <button type="button" className="brief__close" aria-label="Close" onClick={onClose}>
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M3 3 21 21M21 3 3 21" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
          </button>
        </div>
        <h1 id="brief-title" className="brief__title">Build your package</h1>
        <p className="brief__lede">Answer a few questions and we will scope social media around what you actually need.</p>
        <ol className="brief__steps" aria-label="Progress">
          {STEPS.map((st, i) => (
            <li key={st.nav} className={done || i < step ? 'is-done' : i === step ? 'is-current' : ''} aria-current={!done && i === step ? 'step' : undefined}>{st.nav}</li>
          ))}
        </ol>
        <a className="brief__wa" href={waLink()} target="_blank" rel="noopener noreferrer">Prefer to talk it through? <span className="brief__wa-cta">Chat on WhatsApp <span aria-hidden="true">↗</span></span></a>
      </aside>

      <div className="brief__main">
        <div className="brief__progress" aria-hidden="true"><span style={{ width: `${((done ? STEPS.length : step + 1) / STEPS.length) * 100}%` }} /></div>

        {done ? (
          <div className="brief__scroll" data-lenis-prevent>
            <div className="brief__inner brief__done">
              <h2 ref={heading} tabIndex={-1} className="brief__q">{phase === 'sent' ? 'Thank you. We have your brief.' : 'Your email draft is ready.'}</h2>
              <p className="brief__hint">
                {phase === 'sent'
                  ? 'We will review it and come back with a scoped plan and a quote.'
                  : 'We opened your email app with the brief filled in. Press send there and it reaches us.'}
              </p>
              <div className="brief__actions">
                <a className="brief__btn brief__btn--wa" href={waLink(message)} target="_blank" rel="noopener noreferrer">Continue on WhatsApp <span aria-hidden="true">↗</span></a>
                <button type="button" className="brief__link" onClick={onClose}>Back to the site</button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="brief__scroll" data-lenis-prevent>
              <div className="brief__inner">
                <p className="brief__count">Step {step + 1} of {STEPS.length}</p>
                <h2 ref={heading} tabIndex={-1} className="brief__q">{s.title}</h2>
                {s.hint && <p className="brief__hint">{s.hint}</p>}

                {s.fields.map(f => {
                  const err = errors[f.key]
                  const id = `brief-${f.key}`
                  return (
                    <div className="brief__group" key={f.key}>
                      {f.kind === 'single' || f.kind === 'multi' ? (
                        <fieldset className="brief__fieldset" aria-describedby={err ? `${id}-err` : undefined}>
                          {f.label && <legend className="brief__label">{f.label}</legend>}
                          <div className={`brief__opts${f.columns === 1 ? ' brief__opts--one' : ''}`}>
                            {f.options.map(o => {
                              const checked = f.kind === 'multi' ? ((answers[f.key] as string[]) ?? []).includes(o) : answers[f.key] === o
                              return (
                                <label className={`brief-opt brief-opt--${f.kind}`} key={o}>
                                  <input
                                    type={f.kind === 'multi' ? 'checkbox' : 'radio'}
                                    name={f.key}
                                    checked={checked}
                                    onChange={() => (f.kind === 'multi' ? toggle(f.key, o) : set(f.key, o))}
                                  />
                                  <span className="brief-opt__mark" aria-hidden="true" />
                                  <span>{o}</span>
                                </label>
                              )
                            })}
                          </div>
                        </fieldset>
                      ) : (
                        <>
                          <label className="brief__label" htmlFor={id}>{f.label}</label>
                          {f.kind === 'textarea' ? (
                            <textarea
                              id={id} className="brief__input" rows={4} placeholder={f.placeholder}
                              value={(answers[f.key] as string) ?? ''} aria-invalid={!!err} aria-describedby={err ? `${id}-err` : undefined}
                              onChange={e => set(f.key, e.target.value)}
                            />
                          ) : (
                            <input
                              id={id} className="brief__input" type={f.kind} placeholder={f.placeholder} autoComplete={f.autoComplete}
                              value={(answers[f.key] as string) ?? ''} aria-invalid={!!err} aria-describedby={err ? `${id}-err` : undefined}
                              onChange={e => set(f.key, e.target.value)}
                            />
                          )}
                        </>
                      )}
                      {err && <p className="brief__error" id={`${id}-err`} role="alert">{err}</p>}
                    </div>
                  )
                })}

                {failed && <p className="brief__error" role="alert">Something went wrong sending your brief. Please try again, or use WhatsApp below.</p>}
              </div>
            </div>

            <div className="brief__nav">
              <button type="button" className="brief__link" onClick={back} disabled={step === 0}>Back</button>
              <div className="brief__nav-right">
                {step === last && (
                  <a className="brief__link brief__link--wa" href={waLink(message)} target="_blank" rel="noopener noreferrer">Send on WhatsApp instead</a>
                )}
                {step === last ? (
                  <button type="button" className="brief__btn" onClick={send} disabled={phase === 'sending'}>{phase === 'sending' ? 'Sending...' : 'Send brief'}</button>
                ) : (
                  <button type="button" className="brief__btn" onClick={next}>Next</button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
