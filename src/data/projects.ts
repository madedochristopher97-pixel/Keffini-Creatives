// Project detail content. Lunari copy comes from the design screenshot; the other projects use
// PLACEHOLDER copy and images (marked placeholder: true) until real content is supplied.
import { PROJECT_ROWS } from './projectRows.js'

export interface ProjectDetail {
  slug: string
  listTitle: string // title used in the Projects list and More works (must match projectRows)
  title: string
  intro: string
  link: string
  year: string
  industry: string
  category: string
  timeline: string
  images: string[] // 8 slots: 1 hero banner, 2-4 and 5-7 grids, 8 closing banner
  sections: { heading: string; body: string }[] // 3 sections
  // Optional multi-chapter layout (rendered by StoryDetail instead of the 3-section Framer Detail)
  chapters?: { heading: string; body: string; images: string[]; cols?: number; banner?: string; note?: string; video?: string; link?: { label: string; href: string } }[]
  heroPosition?: string
  placeholder?: boolean
}

const W = '/images/placeholders/wide.svg'
const S = '/images/placeholders/square.svg'
const L = (name: string) => `/images/lunari/${name}.jpg`
const K = (name: string) => `/images/kazicitas/${name}.webp`
const P = (file: string) => `/images/podium/${file}`
const C = (file: string) => `/images/casa/${file}`
const H = (file: string) => `/images/habana/${file}`
const W2 = (file: string) => `/images/wombman/${file}`
const IV = (name: string) => `/images/ivory/${name}.webp`
const BZ = (n: string) => `/images/bzk/${n}.webp`
const FOM_EXT: Record<string, string> = {"banner":"webp","brick-black":"webp","brick-cream":"webp","brick-maroon":"webp","briefing-badge":"webp","community-photo":"webp","join-us":"webp","launch-poster":"webp","logo":"png","merch-tee":"webp","plans-membership":"webp","plans-payment":"webp","style-afrohouse":"webp","style-hiphop":"webp","style-popping":"webp","teachers":"webp","why-fom":"webp","workshop-ian":"webp","workshop-michael":"webp"}
const F = (n: string) => `/images/fom/${n}.${FOM_EXT[n]}`
const SQ_EXT: Record<string, string> = {"worker-duster":"webp","cards-mockup":"jpg","card-blue":"png","card-navy":"png","card-back":"png","worker-bucket":"webp","woman-apron":"webp","icon-foam":"webp","icon-blue":"webp","icon-navy":"webp","cards-bottle":"webp","logo-foam":"webp","brand-board":"webp","poster":"webp"}
const SQ = (n: string) => `/images/squeaky/${n}.${SQ_EXT[n]}`
const IV2_EXT: Record<string, string> = {"umbrella-tan":"jpg","umbrella-brown":"jpg","umbrella-street":"jpg","umbrella-folded":"jpg","spare-tire":"webp","logo-transparent":"png","logo-on-brown":"webp","cards-textured":"webp","rollup-cream":"webp","rollup-brown":"webp","cards-leather":"webp","rollup-zebra":"webp","van-brown":"webp","van-cream":"webp","merch-board":"webp"}
const IV2 = (n: string) => `/images/ivory/${n}.${IV2_EXT[n]}`
const SC_EXT: Record<string, string> = {"campaign-jacket":"webp","campaign-chair":"webp","campaign-welcome":"webp","logo-white":"webp","logo-navy":"webp","logo-yellow":"webp","lockup-yellow":"webp","lockup-white":"webp","lockup-navy":"webp","brand-board":"jpg","campaign-couch":"jpg","phone-orange":"webp","app-icon":"webp","campaign-green":"webp"}
const SC = (n: string) => `/images/starcall/${n}.${SC_EXT[n]}`
const PLACEHOLDER_IMAGES = [W, S, S, S, S, S, S, W]

const placeholderSections = (name: string) => [
  { heading: 'Project Overview:', body: `Placeholder copy. This section will introduce ${name}, the goals of the project and the audience it was designed for.` },
  { heading: 'Challenges and Approach:', body: 'Placeholder copy. This section will describe the main challenges of the brief and how the design approach answered them.' },
  { heading: 'The Final Outcome:', body: 'Placeholder copy. This section will summarise the delivered identity, assets and the results for the client.' },
]

const base = (slug: string, name: string, industry: string, category: string): ProjectDetail => {
  const row = PROJECT_ROWS.find((r: { XG3otaDlZ: string }) => r.XG3otaDlZ === slug)!
  return {
    slug,
    listTitle: row.dAZk2Jaon as string,
    title: row.dAZk2Jaon as string,
    intro: `Placeholder summary for ${name}. A short description of the client, the brief and the work delivered will go here.`,
    link: '/contact',
    year: '2025',
    industry,
    category,
    timeline: 'TBC',
    // first slot (hero) matches the cover shown on the Projects list / Home
    images: [row.XpFWjsiiE as string, ...PLACEHOLDER_IMAGES.slice(1)],
    sections: placeholderSections(name),
    placeholder: true,
  }
}

export const PROJECTS: ProjectDetail[] = [
  {
    slug: 'starcall-phones',
    listTitle: 'StarCall Phones - Branding & App',
    title: 'StarCall Phones — Branding & App Development',
    // Facts from the user's message; chapter copy written from the artwork: proofread before launch.
    intro:
      'StarCall Phones is a Kenyan phone seller that lets customers pay in small amounts, Lipa Mdogo Mdogo. Keffini Creative Studio created its brand, from the logo and app icon to the campaign imagery, and built the mobile app itself, now live on the Google Play Store.',
    link: 'https://starphones.co.ke',
    year: '2026',
    industry: 'Phone Retail & Fintech',
    category: 'Branding & Software Development',
    timeline: 'May – September 2026',
    images: [SC('campaign-couch')],
    heroPosition: 'center',
    sections: [],
    chapters: [
      {
        heading: '01 / A star that holds a phone',
        body: 'The StarCall mark starts with a four-point star, a nod to the “star” in the name, and hides a phone inside it: the star’s arms stretch like a screen being pulled open, with a small sparkle where a card or SIM would sit. In the wordmark the star becomes the S, followed by clean, friendly lettering for “tar Call” and a lighter “Phones”.',
        images: [SC('logo-navy'), SC('logo-yellow')],
        cols: 2,
      },
      {
        heading: '02 / Colourways for every surface',
        body: 'Deep navy for trust and golden yellow for energy form the core palette. The full logo sits in a phone-shaped frame with the promise “Stay Connected Everyday”, and works on yellow, white and navy, with the colours swapping so it is always readable.',
        images: [SC('lockup-yellow'), SC('lockup-white'), SC('lockup-navy')],
        cols: 3,
      },
      {
        heading: '03 / An icon made for the home screen',
        body: 'For the app, the star was cut loose from the wordmark and turned into a rounded-square icon: navy star on golden yellow, instantly recognisable among a crowd of apps. The same star is engraved on the back of the phone in the product photography.',
        images: [SC('app-icon'), SC('phone-orange')],
        cols: 2,
      },
      {
        heading: '04 / The brand system on one board',
        body: 'The brand board brings it all together: a hero portrait with the white logo, the four colourways of the logo lockup, and a pair of campaign portraits that show how the identity sits against bold yellow and navy backdrops.',
        images: [SC('brand-board')],
        cols: 1,
      },
      {
        heading: '05 / Campaign imagery that feels like a conversation',
        body: 'The campaign photography keeps people at the centre: real, joyful moments with a phone in hand, set against a giant glowing StarCall star. Vertical story formats carry the logo and the line “Welcome to StarCall Phones” for social media.',
        images: [SC('campaign-jacket'), SC('campaign-chair'), SC('campaign-welcome')],
        cols: 3,
      },
      {
        heading: '06 / One brand, many moods',
        body: 'The same system stretches from a deep navy studio set to a sunny yellow wall, showing that the brand can be playful and premium at once.',
        images: [SC('campaign-green')],
        cols: 1,
      },
      {
        heading: '07 / The app, built from the backend up',
        body: 'Beyond branding, Keffini built the StarCall app. From May to September the work was heavy backend development: the systems behind phone listings, instalment (Lipa Mdogo Mdogo) payments and customer accounts. The finished app is live on the Google Play Store.',
        images: [],
        link: { label: 'Get the app on Google Play ↗', href: 'https://play.google.com/store/apps/details?id=com.starlife.app' },
      },
    ],
  },
  {
    slug: 'squeaky-clean',
    listTitle: 'Squeaky Clean - Cleaning Services',
    title: 'Squeaky Clean Cleaning Services',
    // Copy written from the supplied artwork (services, location and contact are read off the cards and poster): proofread before launch.
    intro:
      'Squeaky Clean is a cleaning company in Kitengela offering carpet, couch, move in/out and laundry cleaning. They came to Keffini Creative Studio for three things: a logo, thank-you cards to leave with clients, and a poster to bring in bookings.',
    link: 'https://www.instagram.com/squeakyclean_/',
    year: '2026',
    industry: 'Cleaning Services',
    category: 'Logo, Print & Poster Design',
    timeline: 'TBC',
    images: [SQ('icon-foam')],
    heroPosition: 'center',
    sections: [],
    chapters: [
      {
        heading: '01 / A logo made of foam',
        body: 'The brief was a mark that says clean at a glance. The Q of “Squeaky” became the symbol: a soft, hand-poured loop that ends in two bubbles, like a drop of suds about to pop. It works on its own as an icon and sits inside the wordmark, set in a rounded, friendly typeface with “cleaning services” underneath.',
        banner: SQ('logo-foam'),
        images: [SQ('brand-board'), SQ('icon-blue'), SQ('icon-navy')],
        cols: 3,
      },
      {
        heading: '02 / A fresh, confident palette',
        body: 'Deep navy for trust, electric blue for energy and a foam-blue texture for the feeling of soap and water. The logo was built in three colourways, light on navy, white on blue and black on white, so it stays legible on uniforms, packaging, cards and social media.',
        images: [SQ('cards-bottle')],
        cols: 1,
      },
      {
        heading: '03 / Dressed for the job',
        body: 'The identity goes where the team goes. The wordmark sits on blue aprons and overalls, and the Q icon appears on the bucket and as a small corner mark on photography, so every shot of the crew is clearly Squeaky Clean.',
        images: [SQ('worker-duster'), SQ('worker-bucket'), SQ('woman-apron')],
        cols: 3,
      },
      {
        heading: '04 / A thank-you worth keeping',
        body: 'Each client receives a printed thank-you card. The front comes in navy and electric blue with the logo and a hand-lettered “Thank You” with bubbles. The back thanks the client for trusting the team with their home and lists the services, the Kitengela location, the phone number and a Snap, Share, Tag code that links to @Squeakyclean_.',
        banner: SQ('cards-mockup'),
        images: [SQ('card-blue'), SQ('card-navy'), SQ('card-back')],
        cols: 3,
      },
      {
        heading: '05 / No time to clean, no worries',
        body: 'The poster speaks to busy homeowners. A bold “No time to clean — no worries” headline sits over a cheerful, apron-clad cleaner, with the five services listed beside her, the Kitengela branch, the phone number, the Snap, Share, Tag code and a “Book us now” sticker. Yellow-green highlights against the blue keep the call to action impossible to miss.',
        images: [SQ('poster')],
        cols: 1,
      },
    ],
  },
  {
    slug: 'foundations-of-movement',
    listTitle: 'Foundations of Movement - F.O.M. Studio',
    title: 'Foundations of Movement — F.O.M. Studio',
    // Copy written from the supplied artwork (class times, prices and perks are read off the posters): proofread before launch.
    intro:
      'F.O.M. Studio is a street dance academy in Westlands, Nairobi, built on one idea: most classes teach routines, F.O.M. teaches skills. Keffini Creative Studio handled its branding and social media management, creating the full brand around it and running the content, from a brick-by-brick logo and launch posters to merchandise, membership plans, teacher profiles and workshop announcements.',
    link: 'https://www.instagram.com/foundations.of.movement/',
    year: '2026',
    industry: 'Dance Education & Studio',
    category: 'Social Media Management & Branding',
    timeline: '30 May – 2 Sep 2026',
    images: [F('banner')],
    heroPosition: 'center',
    sections: [],
    chapters: [
      {
        heading: '01 / Brick by brick',
        body: 'Every foundation starts with a single brick. The F.O.M. identity turns that idea into a logo: a stacked, hand-drawn wordmark in typewriter lettering with a maroon shadow, paired with the promise “Building better dancers, brick by brick.” A rough illustrated brick became the brand’s recurring symbol, shown here on cream, maroon and black.',
        images: [F('logo'), F('brick-cream'), F('brick-maroon'), F('brick-black')],
        cols: 2,
      },
      {
        heading: '02 / The launch',
        body: 'The launch campaign introduced the studio’s philosophy before the first class. The “Foundations of Movement” poster sets out what dancers build, the styles on offer and who the studio is for. “Why F.O.M.?” explains the progressive training system and the weekly timetable, with a launch offer of a free first week. A “Dance Classes Briefing” badge gave the same details a collectible, ID-card feel.',
        images: [F('launch-poster'), F('why-fom'), F('briefing-badge')],
        cols: 3,
      },
      {
        heading: '03 / Wear the brick',
        body: 'The brand moved onto fabric with a black oversized T-shirt. A small stacked logo sits on the chest, the sleeve carries “Foundations of Movement”, and the back shows the bricks with “Building better dancers — Brick by Brick”, finished with maroon stitching. A set of stickers and badges extends the same language.',
        images: [F('merch-tee')],
        video: '/images/fom/merch-tee.mp4',
        cols: 2,
      },
      {
        heading: '04 / Three styles, three characters',
        body: 'Each dance style got its own hand-drawn character in the brand’s black, cream and maroon palette: Hip Hop with headphones and a boombox, Afro-House mid-spin, and Popping caught in a sharp move. They became the signature of the timetable, the workshop badges and the social feed.',
        images: [F('style-hiphop'), F('style-afrohouse'), F('style-popping')],
        cols: 3,
      },
      {
        heading: '05 / Plans and membership',
        body: 'Pricing is laid out like a studio logbook so it is easy to scan. The payment plans cover the Level 1 membership, a drop-in class and a member rate per class, with Mpesa payment details. The membership benefits page explains the three 24-week levels and the Level 1 perks, a branded face towel after 4 weeks and a water bottle after 8.',
        images: [F('plans-payment'), F('plans-membership')],
        cols: 2,
      },
      {
        heading: '06 / The teachers',
        body: 'The people behind the floor are introduced on a clipboard-style roster, each with a name tag, their style, class and time: Michael “Bukachi” for Hip-Hop, Zacariah “Zack” for Popping and Ian Munene for Afro-House, all at Fluid Studio, Eden Square.',
        images: [F('teachers')],
        cols: 2,
      },
      {
        heading: '07 / Workshops',
        body: 'Special workshops are announced with ID-badge posters pinned to a notebook page. Each pairs a teacher portrait with the date, time, location and the note “RSVP required”, such as Afro-House with Ian Munene on 15 August and Michael Bukachi’s session on 29 August.',
        images: [F('workshop-ian'), F('workshop-michael')],
        cols: 2,
      },
      {
        heading: '08 / The community',
        body: 'The story closes with the people who make a studio. The class photo, held up with the “Building better dancers” T-shirt, became the invitation: “Join us on this journey of building better dancers.”',
        images: [F('community-photo'), F('join-us')],
        cols: 2,
      },
    ],
  },
  {
    slug: 'battlezone-kenya',
    listTitle: 'Battlezone Kenya - 4 Tha Kulture',
    title: 'Battlezone Kenya — 4 Tha Kulture',
    // Copy transcribed from the user's Framer editor screenshots: proofread before launch.
    intro:
      'Built for the cypher, designed for the culture. Keffini Creative Studio created a three-month visual campaign for Battlezone Kenya (BZK), bringing Hip Hop 1v1, Breaking, Kids Open Style and Dead or Alive battles into one expressive graphic world. From the first July teaser to September’s printed winner plaques, every piece carried the same unmistakable energy.',
    link: 'https://www.instagram.com/battlezonekenya/',
    year: '2026',
    industry: 'Hip-hop Culture & Live Events',
    category: 'Event Branding & Graphic Design',
    timeline: '3 months · July–September 2026',
    images: [BZ('logo-yellow')],
    heroPosition: 'center 62%',
    sections: [],
    chapters: [
      {
        heading: '01 / The first spark',
        body: 'The rollout began in July with coming-soon posters that put the date on the street before revealing the full event. Oversized lettering, textured surfaces and illustrated signposts built anticipation around one promise: purely, fully, strictly hip-hop.',
        images: [BZ('teaser-yellow'), BZ('teaser-green'), BZ('teaser-purple'), BZ('teaser-red')],
        cols: 2,
      },
      {
        heading: '02 / The battle takes shape',
        body: 'The official posters turned anticipation into an invitation. Four colour treatments brought the categories, venue and September date into a high-impact composition. A collaborating graffiti artist created the BZK title; Keffini refined and polished the lettering, then built the poster system around it without losing its hand-made character.',
        banner: BZ('logo-yellow'),
        images: [BZ('poster-orange'), BZ('poster-green'), BZ('poster-yellow'), BZ('poster-purple')],
        cols: 4,
      },
      {
        heading: '03 / Faces behind the floor',
        body: 'Judge announcements and host artwork gave the campaign a human pulse. Cut-out portraits, bold names and category-specific titles kept each announcement distinct while connecting it to the wider BZK identity.',
        images: [BZ('judges-kids-yellow'), BZ('judges-kids-purple'), BZ('judges-doa-orange'), BZ('judges-doa-yellow')],
        cols: 2,
      },
      {
        heading: '04 / Wear the culture',
        body: 'The campaign moved beyond the screen through T-shirt merchandise design and mockups. The refined graffiti title anchored the front, while the back brought the poster’s collage language into a wearable expression of the event.',
        images: ['/images/bzk/merch-maroon.jpg', '/images/bzk/merch-green.jpg', '/images/bzk/merch-black.jpg'],
        cols: 3,
      },
      {
        heading: '05 / A title worth taking home',
        body: 'The final chapter celebrated the winners. Keffini designed plaque cards for Kids Open Style, Dead or Alive, Breaking and Hip Hop, carrying the campaign’s title treatments into artwork that was later printed. What began as a teaser became something the dancers could hold onto.',
        images: [BZ('plaque-kids-open-style'), BZ('plaque-dead-or-alive'), BZ('plaque-breaking'), BZ('plaque-hiphop')],
        cols: 2,
      },
    ],
  },
  {
    slug: 'ivory-horizons-tours',
    listTitle: 'Ivory Horizons Tours - Brand Identity',
    title: 'Ivory Horizons Tours',
    // Facts from the user's Framer editor screenshot. Chapter copy is written from the artwork (contacts, countries and services are read off it): proofread before launch.
    intro: 'Travel and Tour agency that specializes in tailor-made East African safaris and custom travel experiences.',
    link: 'https://www.instagram.com/ivoryhorizons/',
    year: '2026',
    industry: 'Tour Agency',
    category: 'Branding & Social Media Management',
    timeline: '6 weeks',
    images: [IV2('logo-on-brown')],
    heroPosition: 'center',
    sections: [],
    chapters: [
      {
        heading: '01 / A wordmark with an elephant hiding in it',
        body: 'Ivory Horizons Tours plans tailor-made safaris, beach trips and city escapes across East Africa and beyond. The logo had to feel like the savannah: a bold, hand-cut wordmark where the R is shaped like an elephant head and trunk, the O doubles as the sun on the horizon, and the letters rest on a simple horizon line. A single promise sits underneath: Travel · Discover · Belong.',
        images: [IV2('logo-transparent'), IV2('merch-board')],
        cols: 2,
      },
      {
        heading: '02 / Elephant skin and sand',
        body: 'The palette comes straight from the landscape: deep elephant-skin brown, warm sand and ivory. The business cards put it to work, with the logo printed on textured brown and sand stock and a contact side with a QR code. A torn-paper edge and a bold lion and elephant illustration give the leather-and-compass version a more adventurous feel.',
        images: [IV2('cards-textured'), IV2('cards-leather')],
        cols: 2,
      },
      {
        heading: '03 / Roll-up banners for the front desk',
        body: 'For events and the office, roll-up banners tell the whole story at a glance: “Safari, Beach & City Experiences”, circular photos of the places on offer, the list of services and a QR code to connect. A sand version, a brown version and a bolder zebra-and-elephant version cover different spaces.',
        images: [IV2('rollup-cream'), IV2('rollup-brown'), IV2('rollup-zebra')],
        cols: 3,
      },
      {
        heading: '04 / A safari vehicle that sells itself',
        body: 'The brand rides along with every trip. The spare-wheel cover carries the logo, the countries served (Kenya, Uganda, Tanzania and Rwanda), the website and the phone number, in brown with a gold ring or in sand with brown lettering, and the logo repeats on the vehicle door.',
        images: [IV2('van-brown'), IV2('van-cream'), IV2('spare-tire')],
        cols: 3,
      },
      {
        heading: '05 / Umbrellas for sun and rain',
        body: 'A branded umbrella is the kind of thing guests actually carry. The elephant symbol sits on the crown and the full logo on the lower panel, in a sand and a brown colourway, with a folding version and a street-style shot to show it in use.',
        images: [IV2('umbrella-tan'), IV2('umbrella-brown'), IV2('umbrella-street'), IV2('umbrella-folded')],
        cols: 2,
      },
      {
        heading: '06 / Dressed for exploration',
        body: 'The brand board brings the kit together: sand T-shirts with the full logo on the front and back and the elephant mark on the sleeve, a canvas travel bag with a leather luggage tag, and binoculars with a branded strap, with the colour palette and the line “Where the journey is timeless and you always belong.”',
        images: [IV2('merch-board')],
        cols: 1,
      },
      {
        heading: '07 / Keeping the journey going on social media',
        body: 'After the identity, Keffini took over social media management. Campaign posters such as “Your Journey Starts Before You Board”, “The Ivory Standard” and “The Ivory Horizons Touch” carry the brand’s serif headlines and sunset photography into the feed, so every post looks like part of the same journey.',
        images: ['/images/ivory/journey-before-you-board.webp', '/images/ivory/ivory-standard.webp', '/images/ivory/ivory-touch.webp'],
        cols: 3,
      },
    ],
  },
  {
    slug: 'lunari-jewels',
    listTitle: 'Lunari Jewels - Brand Identity & Social Design',
    title: 'Lunari Jewels – Brand Identity & Social Design',
    intro:
      'Lunari Jewels was created to offer stylish, high-quality jewelry that fits into everyday life. This project involved building a refined visual identity and social media design system that communicates luxury while staying approachable.',
    link: 'https://www.instagram.com/lunarijewels/',
    year: '2025',
    industry: 'Jewelry & Fashion',
    category: 'Brand Identity',
    timeline: '4 weeks',
    // slots: 1 hero, 2-4 first grid (logo, new collection, essentials), 5-7 second grid (bags, pouches, boxes), 8 closing banner
    images: [L('poster'), L('logo'), L('new-collection'), L('everyday-essentials'), L('bags'), L('pouches'), L('boxes'), L('pouches')],
    sections: [
      {
        heading: 'Designing Everyday Elegance:',
        body:
          'Lunari Jewels was created to offer stylish, high-quality jewelry that feels accessible to everyday life. The brand needed to feel elegant and refined, while still being relatable and approachable to a wider audience.\n\nThe goal of this project was to create a visual identity that communicates beauty, confidence, and simplicity, without feeling overly luxurious or intimidating.\n\nThis meant building a system that works across branding and promotional content.',
      },
      {
        heading: 'Balancing Luxury and Accessibility:',
        body:
          'The key challenge was positioning Lunari as a premium brand without making it feel out of reach.\n\nJewelry brands often lean heavily into high-end luxury, which can distance everyday customers. For Lunari, the goal was different: to create a brand that feels elegant, but still welcoming.\n\nAnother challenge was maintaining consistency across social media designs while keeping the visual language engaging and scroll-friendly.',
      },
      {
        heading: 'A Refined and Scroll-Ready Brand System:',
        body:
          'The final outcome is a cohesive brand identity supported by a striking social media presence.\n\nThe visual direction feels elegant and refined, while being engaging enough for digital performance. The design system allows Lunari to consistently communicate its products, promotions, and brand story without losing its identity.',
      },
    ],
  },
  {
    slug: 'kazi-citas',
    listTitle: 'kazi Citas - Digital Agency',
    title: 'kazi Citas – Digital Agency',
    // Copy transcribed from a low-resolution screenshot: proofread before launch.
    intro:
      'Kazi Citas started as a vision to support local businesses with better digital visibility and stronger brand identity. This project involved designing a complete brand system and translating it into a functional, user-friendly website.',
    link: '/contact',
    year: '2025',
    industry: 'Digital Marketing Agency',
    category: 'Full Digital Branding',
    timeline: 'TBC',
    // slots: 1 hero, 2-4 first grid, 5-7 second grid, 8 closing banner
    images: [K('trusted-local-brands'), K('still-booking'), K('where-local-businesses'), K('reduce-stress'), K('something-new'), K('spa-day'), K('book-barber'), K('high-end-graphics')],
    sections: [
      {
        heading: 'From Idea to Identity: Building Kazi Citas',
        body:
          'Kazi Citas started as a vision to support local businesses with better digital visibility and stronger brand identity. The goal was to create a brand that feels modern, approachable and trustworthy, while staying simple enough for everyday business owners to use.\n\nThe challenge was to design a complete brand system and turn it into a functional, user-friendly experience.\n\nThis project focused on translating strategy into clear, consistent visuals across social media and web.',
      },
      {
        heading: 'Creating Clarity in a Multi-Service Brand',
        body:
          'Kazi Citas offers a wide range of services, from branding and design to digital marketing solutions. The main challenge was to present these services in a way that feels simple, clear and cohesive, without overwhelming potential clients.\n\nAnother key challenge was building trust. As a growing agency, the brand needed to look professional and reliable from the first interaction.\n\nThe project focused on structure and clarity, making the brand visually engaging while keeping the user experience easy to navigate.',
      },
      {
        heading: 'Impact and Outcome',
        body:
          'The project resulted in a clean and professional brand presence that positions Kazi Citas as a reliable digital partner for local businesses.\n\nThe structured visual system ensures consistency across every touchpoint, making it easier for potential clients to explore services and make inquiries.\n\nMost importantly, the brand now has a solid foundation as the agency continues to grow.',
      },
    ],
  },
  {
    slug: 'the-podium',
    listTitle: 'The Podium - Street Dance',
    title: 'The Podium – Street Dance',
    // Copy transcribed from a low-resolution screenshot: proofread before launch.
    intro:
      'The Podium is a street dance brand created as a passion project, blending graphic design, fashion, and hip-hop culture into a bold and expressive visual identity.',
    link: '/contact',
    year: '2026',
    industry: 'Streetwear / Dance Culture',
    category: 'Brand Identity & Apparel Design',
    timeline: 'Passion Project',
    // slots: 1 hero, 2-4 first grid (board labels, brand board, pattern), 5-7 second grid (hydrant, wall, DJ), 8 closing banner
    images: [P('hero-illustration.webp'), P('board-labels.webp'), P('brand-board.webp'), P('pattern.png'), P('lifestyle-hydrant.webp'), P('lifestyle-wall.webp'), P('lifestyle-dj.webp'), P('street-brand.webp')],
    sections: [
      {
        heading: 'Designing Culture, Not Just a Brand:',
        body:
          'The Podium is more than a streetwear or dance brand. It represents a space where movement, music, and identity come together.\n\nInspired by hip-hop culture, street dance, and community energy, the goal was to create a brand that feels raw, expressive, and authentically bold.\n\nThis project allowed creative freedom to explore design beyond commercial constraints and build something rooted in personal passion.',
      },
      {
        heading: 'A Platform for Expression:',
        body:
          'The Podium is built around the idea of giving dancers and creatives a space to express themselves.\n\nIt represents:\n• Individuality\n• Energy\n• Rebellion\n• Community\n\nThe brand acts as both a visual identity and a culture platform for street dance.',
      },
      {
        heading: 'Raw, Loud, and Unfiltered:',
        body:
          'As a passion project, The Podium allowed for experimentation without limitations.\n\nIt reflects a deeper connection to dance and creative expression, while also demonstrating the ability to build a complete brand system from concept to execution.',
      },
    ],
  },
  {
    slug: 'casa-v-ramoneda',
    listTitle: 'Casa V Ramoneda - Spanish Family Cartel',
    title: 'Casa V Ramoneda – Spanish Family Cartel',
    // Copy transcribed from a low-resolution screenshot: proofread before launch.
    intro:
      'Casa Ramoneda is a Spanish-inspired tobacco brand rooted in tradition, architecture, and premium craftsmanship. This project focused on creating a refined visual identity that reflects its heritage while appealing to a modern audience.',
    link: '/contact',
    year: '2025',
    industry: 'Tobacco Store',
    category: 'Brand Identity',
    timeline: 'TBC',
    // slots: 1 hero, 2-4 first grid (facade, maroon + green mockups), 5-7 second grid (V logo, black/gold mockup, Nobel ad), 8 closing banner
    images: [C('logo-black.png'), C('facade.jpg'), C('mockup-maroon.png'), C('mockup-green.webp'), C('logo-v.webp'), C('mockup-black-gold.webp'), C('nobel-ad.webp'), C('nobel-ad.webp')],
    sections: [
      {
        heading: 'Designing a Brand Inspired by Heritage:',
        body:
          'Casa Ramoneda was inspired by classic Spanish architecture, with a strong emphasis on history, elegance, and craftsmanship. The goal was to create a brand identity that feels established and timeless, something that could exist across generations.\n\nRather than following modern design trends, the focus was on building a visual language that reflects depth, culture, and authenticity.',
      },
      {
        heading: 'Balancing Tradition with Modern Appeal:',
        body:
          'The main challenge was creating a brand that feels traditional without appearing outdated.\n\nTobacco brands often risk feeling either too heavy or disconnected from modern audiences. Casa Ramoneda needed to maintain its cultural depth while still feeling relevant and visually compelling.\n\nAnother challenge was ensuring the brand held up consistently across applications, from packaging to digital platforms.',
      },
      {
        heading: 'A Premium and Timeless Brand Identity:',
        body:
          'The final identity positions Casa Ramoneda as an established and heritage-driven brand.\n\nThe use of structured layouts, refined typography, and a strong visual presence communicates quality and tradition. The brand system is flexible enough to be applied across packaging, print materials, and digital platforms without losing its clarity.',
      },
    ],
  },
  {
    slug: 'habana-barber-spa',
    listTitle: 'Habana Barber & Spa - Brand Identity & Visual System',
    title: 'Habana Barber & Spa – Brand Identity & Visual System',
    // Copy transcribed from a low-resolution screenshot: proofread before launch.
    intro:
      'Habana Barber & Spa is a modern grooming brand focused on precision, style, and experience. This project involved developing a strong visual identity and applying it across branding, interior concepts, and promotional materials.',
    link: 'https://www.instagram.com/habanabarberspa/',
    year: '2025',
    industry: 'Grooming & Lifestyle',
    category: 'Brand Identity',
    timeline: 'TBC',
    // slots: 1 hero (cover), 2-4 first grid (Professionals ad, brand board, razor), 5-7 second grid (interiors), 8 closing banner
    images: [H('logo-white.jpg'), H('professionals-signage.jpg'), H('brand-board.jpg'), H('razor.jpg'), H('interior-slats.jpg'), H('interior-mural.jpg'), H('interior-stairs.jpg'), H('spa-services.jpg')],
    sections: [
      {
        heading: 'Designing a Modern Grooming Experience:',
        body:
          'Habana Barber & Spa is more than a barber shop. It is a space built on confidence, self-expression, and personal style.\n\nThe goal of this project was to create a brand identity that feels professional and precise, while still connecting with creative, style-conscious clients.\n\nThe challenge was to build something that feels both premium and approachable, combining clean design with a strong visual presence.',
      },
      {
        heading: 'Standing Out in a Competitive Space:',
        body:
          'The design direction focused on clarity and strength.\n\nColor System\n• A combination of black, white, and gold tones was used to communicate luxury, confidence, and precision.\n\nLogo & Symbolism\n• The logo integrates barber tools into a strong, recognizable mark.\n\nTypography\n• Bold serif and structured typefaces were used to enhance the premium feel.\n\nSpatial Experience\n• Interior concepts were designed to reflect the same identity: clean layouts, modern lighting, and a comfortable yet professional environment.',
      },
      {
        heading: 'A Strong and Cohesive Brand Presence:',
        body:
          'The final outcome is a unified brand identity that works seamlessly across physical and digital spaces.\n\nFrom signage to interior design and promotional materials, every element reinforces the brand’s positioning as a premium grooming destination.\n\nThe visual system remains consistent while leaving flexibility for marketing and future expansion.',
      },
    ],
  },
  {
    slug: 'wombman-africa',
    listTitle: 'Wombman Africa - Brand & Packaging Design',
    title: 'Wombman Africa – Brand & Packaging Design',
    // Copy transcribed from a low-resolution screenshot: proofread before launch.
    intro:
      'Wombman Africa is a wellness brand focused on feminine healing, self-care, and intentional living. This project involved creating a warm, natural visual identity and packaging system that reflects calmness, care, and connection to self.',
    link: 'https://www.instagram.com/_.wombman/',
    year: '2025',
    industry: 'Wellness & Self-care',
    category: 'Brand Identity',
    timeline: 'TBC',
    // slots: 1 hero (cover), 2-4 first grid (printed labels, flat-lay, thank-you cards), 5-7 second grid (pouch shots, beach trio), 8 closing banner
    images: [W2('beach-trio-hero.jpg'), W2('labels-print.jpg'), W2('flatlay-sand.jpg'), W2('thank-you-cards.jpg'), W2('pouch-flowers.jpg'), W2('pouch-boat.jpg'), W2('beach-trio-blue.jpg'), W2('beach-trio-flowers.jpg')],
    sections: [
      {
        heading: 'Designing for Care, Ritual, and Intention:',
        body:
          'Wombman Africa is built around the idea of slowing down, reconnecting, and creating moments of care. The brand focuses on products that support wellness through intention and ritual.\n\nThe goal of this project was to create a visual identity that feels soft, grounded, and comforting, something that immediately communicates trust and calmness to the audience.\n\nThis meant leaning into natural aesthetics while creating a feeling that users experience the moment they interact with the brand.',
      },
      {
        heading: 'Creating Emotional Connection Through Design:',
        body:
          'The main challenge was designing a brand that communicates emotional depth without becoming overwhelming or overly complex.\n\nThe identity needed to feel:\n• calming, yet full\n• expressive, but still minimal\n• feminine, without being cliché\n\nAnother challenge was ensuring consistency across packaging and print materials while maintaining a hand-crafted, natural feel.',
      },
      {
        heading: 'Building Trust Through Design:',
        body:
          'The project resulted in a cohesive brand system that communicates care and emotional connection.\n\nThe packaging and print materials enhance the overall product experience, helping customers feel more connected to the brand.\n\nWombman Africa now has a strong visual foundation that supports its growth as a wellness-focused brand.',
      },
    ],
  },
]

export const getProject = (slug?: string) => PROJECTS.find(p => p.slug === slug)
