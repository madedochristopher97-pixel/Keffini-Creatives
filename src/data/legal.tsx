import type { ReactNode } from 'react'

export interface LegalDoc {
  slug: 'privacy-policy' | 'terms-and-conditions'
  path: string
  title: string
  effectiveDate: string
  seoTitle: string
  seoDescription: string
  content: ReactNode
}

const H = ({ children }: { children: ReactNode }) => (
  <h2 style={{ fontSize: 22, fontWeight: 600, margin: '36px 0 10px' }}>{children}</h2>
)
const P = ({ children }: { children: ReactNode }) => <p style={{ margin: '0 0 14px' }}>{children}</p>
const UL = ({ items }: { items: ReactNode[] }) => (
  <ul style={{ margin: '0 0 14px', paddingLeft: 22 }}>
    {items.map((it, i) => (
      <li key={i} style={{ marginBottom: 6 }}>{it}</li>
    ))}
  </ul>
)
const Mail = () => <a href="mailto:Hello@keffini.com">Hello@keffini.com</a>

const privacy = (
  <div style={{ fontSize: 16, lineHeight: 1.65 }}>
    <P>
      Keffini Creative Studio (“Keffini”, “we”, “us”) is a creative and software studio based on James Gichuru Road, Nairobi,
      Kenya. This policy explains what personal information we collect through keffini.com, why we collect it and the choices
      you have. We handle personal data in line with the Kenya Data Protection Act, 2019.
    </P>
    <H>What we collect</H>
    <UL
      items={[
        'Contact form and project brief: your name, email address, and the message or project details you choose to send.',
        'Studio AI chat: the messages you type into the assistant.',
        'WhatsApp, phone and email: whatever you share when you contact us on those channels.',
        'Basic technical data such as browser type and pages visited, which your browser and our hosting provider generate automatically.',
      ]}
    />
    <H>How we use it</H>
    <UL
      items={[
        'To reply to your enquiry and prepare quotes or proposals.',
        'To run the project work you ask us to do.',
        'To answer questions through the Studio AI assistant.',
        'To keep the website secure and working.',
      ]}
    />
    <P>We do not sell your personal data and we do not send marketing emails unless you ask us to.</P>
    <H>Who handles it for us</H>
    <UL
      items={[
        'FormSubmit delivers contact form and brief submissions to our studio inbox.',
        'NVIDIA NIM processes Studio AI chat messages so the assistant can answer. Please do not put sensitive personal information in the chat.',
        'Vercel hosts the website.',
        'WhatsApp (Meta) is used if you choose to message us there.',
      ]}
    />
    <P>These providers may process data outside Kenya. We only share what is needed for them to do their job.</P>
    <H>How long we keep it</H>
    <P>
      We keep enquiries and project correspondence for as long as needed to deal with your request and for our business and
      tax records, then delete or anonymise it.
    </P>
    <H>Your rights</H>
    <P>
      You can ask to see, correct or delete the personal data we hold about you, object to how we use it, or withdraw consent
      at any time. Email <Mail /> and we will respond promptly. You may also complain to the Office of the Data Protection
      Commissioner in Kenya.
    </P>
    <H>Cookies</H>
    <P>
      The site stores a small amount of data in your browser (for example, a draft of a project brief you have started) so it
      works as expected. It does not use advertising cookies.
    </P>
    <H>Changes and contact</H>
    <P>
      We may update this policy and will change the effective date above when we do. Questions? Write to <Mail /> or call
      +254 794 388 578.
    </P>
  </div>
)

const terms = (
  <div style={{ fontSize: 16, lineHeight: 1.65 }}>
    <P>
      These terms apply to your use of keffini.com and to enquiries you make to Keffini Creative Studio (“Keffini”, “we”,
      “us”). By using the site you agree to them.
    </P>
    <H>Our services</H>
    <P>
      We provide brand identity, UI/UX design, software development and digital marketing services. The scope, timeline, fees
      and deliverables for each project are set out in a written proposal or agreement that you approve before work starts.
      Where that agreement conflicts with these terms, the agreement applies.
    </P>
    <H>Quotes and payment</H>
    <UL
      items={[
        'Quotes and rate card prices are guides until confirmed in writing and may change with scope.',
        'Projects normally start once the agreed deposit is received. Remaining payments follow the schedule in the agreement.',
        'Late payments may pause work.',
      ]}
    />
    <H>Your content and approvals</H>
    <P>
      You confirm that any logos, text, images or other material you give us is yours to use, or that you have permission.
      Timelines depend on you providing material and feedback on time.
    </P>
    <H>Ownership</H>
    <P>
      Once a project is paid in full, you own the final approved deliverables made for you. We keep ownership of our working
      files, tools and any pre-existing materials, and we may show the finished work in our portfolio and marketing unless we
      agree otherwise in writing.
    </P>
    <H>Revisions</H>
    <P>Each package includes the number of revision rounds stated in the proposal. Extra revisions or changes in scope may be quoted separately.</P>
    <H>Website content</H>
    <P>
      The content on this site, including the studio’s work shown here, is protected by copyright. Client logos and brands
      belong to their respective owners. Please don’t copy or reuse it without permission.
    </P>
    <H>Studio AI assistant</H>
    <P>
      The chat assistant gives general information about our studio and services. It can make mistakes and its answers are not
      a quote or binding offer. Confirm details with us directly.
    </P>
    <H>Liability</H>
    <P>
      We take care with our work, but we are not liable for indirect or consequential losses, or for losses caused by
      material, third-party services or delays outside our control. Our total liability on any project is limited to the fees
      you paid us for it.
    </P>
    <H>Governing law and contact</H>
    <P>
      These terms are governed by the laws of Kenya. Questions about them? Email <Mail />.
    </P>
  </div>
)

export const LEGAL_DOCS: Record<string, LegalDoc> = {
  'privacy-policy': {
    slug: 'privacy-policy',
    path: '/privacy',
    title: 'Privacy Policy',
    effectiveDate: '20 October 2026',
    seoTitle: 'Privacy Policy',
    seoDescription:
      'How Keffini Creative Studio collects, uses and protects personal information from our website, forms and Studio AI assistant.',
    content: privacy,
  },
  'terms-and-conditions': {
    slug: 'terms-and-conditions',
    path: '/terms',
    title: 'Terms & Conditions',
    effectiveDate: '20 October 2026',
    seoTitle: 'Terms & Conditions',
    seoDescription:
      'Terms for using keffini.com and working with Keffini Creative Studio: services, payment, ownership, revisions and liability.',
    content: terms,
  },
}
