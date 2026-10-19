import { PROJECTS } from '../data/projects'
import { WEB_PROJECTS } from '../data/webProjects'
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, waLink } from '../utils/enquiry'

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export function buildStudioKnowledgeBase(): string {
  const projectSummaries = PROJECTS.map(p => {
    return [
      `### ${p.title} (Slug: /projects/${p.slug})`,
      `Year: ${p.year} | Industry: ${p.industry} | Category: ${p.category} | Timeline: ${p.timeline}`,
      `Overview: ${p.intro}`,
      p.chapters && p.chapters.length > 0
        ? `Key Highlights: ${p.chapters.map(c => c.heading).join('; ')}`
        : `Sections: ${p.sections.map(s => s.heading).join('; ')}`,
    ].join('\n')
  }).join('\n\n')

  const webSummaries = WEB_PROJECTS.map(w => {
    return [
      `### ${w.title} (${w.client}) — Live Web Showcase`,
      `Year: ${w.year} | Built by: ${w.builtBy} (Harrison Ndeke / Harry, Keffini's Web Engineering Partner)`,
      `Summary: ${w.summary}`,
      `Features: ${w.features.join(', ')}`,
      `External URL: ${w.url}`,
    ].join('\n')
  }).join('\n\n')

  return `
# KEFFINI CREATIVE STUDIO®
- Entity: Independent Creative Agency & Software Design Studio based in Nairobi, Kenya.
- Physical Location: James Gichuru Road, Nairobi, Kenya.
- Mission: We build business solutions that drive real growth — efficient, scalable, and profit-focused.
- Key Metrics: $120K+ Client Revenue Generated, 95% Client Retention, 100% Bespoke Solutions (No templates).
- Core Contacts:
  - Email: ${CONTACT_EMAIL} (Hello@keffini.com)
  - Direct Phone: +(254) 794 388 578
  - WhatsApp: ${WHATSAPP_DISPLAY} (${waLink()})
  - Website: https://keffini.com
  - Booking & Custom Brief: /contact or /#rates

# CORE DISCIPLINES & SERVICES
1. Brand Identity: Logo design, typographic systems, brand guidelines, brand boards, packaging design, uniforms, stationery, roll-up banners, and vehicle livery.
2. UI/UX Design: Customer journeys, interactive prototyping (Framer, Figma), design systems, conversion-driven mobile & web interfaces.
3. Software & Web Development: Full-stack custom web applications, React / Vite SPAs, e-commerce storefronts, backend payment integration (M-Pesa Daraja, Lipa Mdogo Mdogo instalments), and native Android mobile apps (e.g. StarCall Phones on Google Play Store).
4. Social Media & Digital Marketing: Monthly creative management, copywriting, motion graphics, video reels, ad campaigns, and performance tracking.
5. Commercial Photography & Motion: Studio product photography, live event documentation, video teasers, and print assets.
6. Web Development Partner: Harrison Ndeke (Harry), specialized web engineer collaborating with Keffini on corporate web platforms (Bills On Solar, Standout Growth).

# RATE CARD & ENGAGEMENT TIERS
- Turnaround Times: 3–6 weeks for brand identity projects; 4–10 weeks for web & software development projects.
- Monthly Social Media & Content Packages:
  - Starter Plan: KES 40,000 / month (2 platforms, 20 custom graphics/posts, copywriting, scheduled posting).
  - Growth Plan: KES 50,000 / month (3 platforms, 30 custom posts & reels, motion graphics, ad creatives).
  - Pro Plan: KES 80,000 / month (4 platforms, daily posting, creative direction, community moderation, campaign management).
- Custom Projects (Fixed Milestone Scopes):
  - Brand Identity Systems: Typical range KES 80,000 – KES 350,000 depending on collateral requirements.
  - Software & Web Platforms: Typical range KES 100,000 – KES 600,000+ depending on architectural complexity.
  - Interactive 7-step onboarding brief available on the site at /#rates.

# DOCUMENTED CASE STUDIES & PORTFOLIO
${projectSummaries}

# CORPORATE WEB DEVELOPMENT SHOWCASES
${webSummaries}
`.trim()
}

export const SYSTEM_PROMPT = `You are the Keffini Creative Studio AI Assistant, powered by NVIDIA NIM.
Your job is to assist clients, founders, and visitors in discovering Keffini's work, understanding our services, pricing, turnaround times, and initiating new projects.

Rules:
1. Grounding: Answer strictly using facts from the studio knowledge base. Do not invent clients, metrics, revenue numbers, or deliverables.
2. Tone: Confident, creative, professional, and clear. Avoid generic hype and robotic cliché.
3. Length: Keep answers concise (2 to 4 sentences or a tidy bulleted list), easy to read on mobile.
4. Actionable: When helpful, direct the visitor to relevant portfolio pages (e.g., /projects/starcall-phones, /projects/battlezone-kenya), the interactive brief (/#rates), or WhatsApp / Contact (/contact).
5. Unrelated queries: Politely redirect visitors back to branding, design, software development, or project inquiries with Keffini.`

export async function callNvidiaChatCompletion(
  history: Array<{ role: 'user' | 'assistant'; content: string }>,
  options: { model?: string; temperature?: number; max_tokens?: number } = {}
): Promise<string> {
  const model = options.model || (import.meta as any).env?.VITE_NVIDIA_MODEL || 'meta/llama-3.2-11b-vision-instruct'
  const apiKey = ((import.meta as any).env?.VITE_NVIDIA_API_KEY as string | undefined)?.trim() || ''
  const baseUrl = (((import.meta as any).env?.VITE_NVIDIA_BASE_URL as string | undefined) || 'https://integrate.api.nvidia.com/v1').replace(/\/+$/, '')

  const messages: ChatMessage[] = [
    {
      role: 'system',
      content: `${SYSTEM_PROMPT}\n\n=== STUDIO KNOWLEDGE BASE ===\n${buildStudioKnowledgeBase()}`,
    },
    ...history,
  ]

  // 1. Try local or Vercel serverless proxy (/api/chat) first to avoid browser CORS
  try {
    const proxyHeaders: Record<string, string> = { 'Content-Type': 'application/json' }
    if (apiKey) proxyHeaders['Authorization'] = `Bearer ${apiKey}`

    const proxyRes = await fetch('/api/chat', {
      signal: AbortSignal.timeout(35000),
      method: 'POST',
      headers: proxyHeaders,
      body: JSON.stringify({
        model,
        messages,
        temperature: options.temperature ?? 0.25,
        max_tokens: options.max_tokens ?? 700,
      }),
    })

    if (proxyRes.ok) {
      const data = await proxyRes.json()
      const answer = data.choices?.[0]?.message?.content
      if (answer) return answer.trim()
    }
  } catch (proxyErr) {
    console.warn('Proxy /api/chat unavailable or failed, falling back to direct endpoint:', proxyErr)
  }

  // 2. Direct fallback to NVIDIA NIM API
  if (!apiKey) {
    throw new Error('NVIDIA API key not configured. Please set VITE_NVIDIA_API_KEY in your .env file.')
  }

  const response = await fetch(`${baseUrl}/chat/completions`, {
    signal: AbortSignal.timeout(35000),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: options.temperature ?? 0.25,
      max_tokens: options.max_tokens ?? 700,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`NVIDIA NIM API Error (${response.status}): ${errorText}`)
  }

  const data = await response.json()
  const content = data.choices?.[0]?.message?.content
  if (!content) {
    throw new Error('No response returned from the NVIDIA AI model.')
  }
  return content.trim()
}
