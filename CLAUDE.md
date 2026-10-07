# Keffini Creative Studio – Vite + React + TS port of the Framer site

## Rules
- Components in `src/components/framer/` are Framer-generated. DO NOT edit them; wrap them or override via props/CSS.
- Reference screenshots: `docs/reference/`. Check every change in the browser (`npm run dev`) against them.
- Commit after each completed step.

## Fonts
- Headings/display: **Dr Boysk** (family names `'Dr Boysk DEMO VERSION'` and `'Dr Boysk DEMO VERSION Regular'`).
  Source: `~/Downloads/dr-boysk-font-1767845610-0/Dr-Boysk-DEMO-VERSION-BF695f1f3b93a77.otf`
  → copy to `public/fonts/`, declare `@font-face` in `src/styles/tokens.css`.
- Everything else (body, UI, nav, buttons, counters, FAQ): **Outfit** (NOT Inter Display). Load via Google Fonts or
  `@fontsource/outfit`. If any Framer component references Inter / "Inter Display", override with Outfit in CSS.

## Pages
Home, Projects, Contact, Thank You, Privacy.

## Known issues
- Hero/CardWorks images: props `bzGCxZlef, LFd6Pb2Zf, uD5pBfuSj, V6sx94wG_` never passed.
- Contact/Thank You/Privacy blank: Framer scroll-in effects start at opacity 0 (see `src/utils/effects/`).
- `Container.js` (Projects page; `Container2.js` is a copy) has an empty `__FRAMER_CMS_DATA__` stub.

## Layout (already imported from Framer "Design to AI" exports)
- `src/components/framer/` – all generated components + `_framer-runtime.js` (flat; components import `./_framer-runtime.js`).
  Hero.js = home, Container.js = Projects (CMS stub), Contact2.js, ThankYou.js, Legal.js = Privacy, Footer.js,
  Carousel3d*/Button* = 404 page parts. Default export per file; props use Framer IDs (see each `.d.ts`).
- `src/utils/` – LayoutIsland, ResponsiveWrapper, useStripFramerStyles.
- `src/utils/effects/<Page>Effects.tsx` – per-page FramerEffects (WAAPI replacement for scroll-in effects).
- `src/styles/tokens.css` – all 7 pages' tokens concatenated (dedupe if desired); `responsive-runtime.css`.
- Deps: react, framer-motion, @motionone/dom@10.13.1, lenis@1.1.2, react-router-dom. Run `npm install` first.
- Font file is already at `public/fonts/Dr-Boysk-DEMO-VERSION-BF695f1f3b93a77.otf` (still needs @font-face).

## Reference screenshots (docs/reference/)
- `home.webp` – cream (#FFFBEE-ish) page, burgundy (#650020-ish) services band + footer. Order: hero (dark top, red/green fashion image, stacked
  BRANDING / DESIGN / DEVELOPMENT / PHOTOGRAPHY / MARKETING, tagline "We build business solutions that drive real growth — efficient, scalable, and profit-focused."),
  (01) Our Commitment ("Consistent quality in every project, blending innovative Design", 3 counters: Client Revenue / Client Retention / Individuals Rate),
  brand logos strip, (02) Projects "Latest Works" 2x2 (Lunari Jewels – Brand Identity AI 2025, kaziCitas – Digital Agency 2025, The Podium – Street Dance 2025,
  Casa V Ramoneda – Spanish Hair 2025) + "VIEW ALL WORKS" button, (03) "Why Keffini?" 4 columns (Strategy & Research, Design & Prototype, Build, Test & Optimize,
  Launch & Support) + red texture image, (04) "Services" burgundy: Digital Marketing, Brand Identity, Software Development, UI/UX Design, each with tag pills,
  (05) FAQ accordion (5 questions), footer.
- `projects.webp` – "Selected Works" (Explore All Creations): 6 full-width cards with a label bar (category / title):
  Lunari Jewels – Brand Identity & Social Design; kazi Citas – Digital Agency; The Podium – Street Dance; Casa V Ramoneda – Spanish Family Cartel;
  Habana Barber & Spa – Brand Identity & Visual System; Wombman Africa – Brand & Packaging Design.
- `contact.webp` – "Let's Connect": hero image, form (Name, Email, Message, "Send a Message"), Address (Nairobi, James Gichuru Rd.), Contact (Hello@keffini.com),
  two photos "The Office / 2025" and "The Team / 2025", burgundy footer.
- `menu-overlay.png` – full-screen burgundy hamburger menu: logo, Email Hello@keffini.com, Phone +(254)794 388 578, Location Based in Nairobi, close X,
  huge "Keffini Creative Studio®" in Dr Boysk, live date/time, nav links Home / Projects / Services / Contact / FAQ with ↗ arrows.
- Notes: remove the "Made in Framer" badge and the edit pencil button from the port. Footer has a big scrolling marquee "KeffiniCreative® STUDIO / Design / Development".

## Port fixes (not in the Framer export)
- `_framer-runtime.js` was patched at the bottom: added `runTasksWithYield` / `runWithYield` shims (export was missing, Contact/Projects/Legal/ThankYou import them).
- Framer "Closed" FAQ variant names are inverted: use `variant="Desktop"`/`"Mobile"` for the collapsed state.
- Framer wrappers set inline `height` on their parent (Faq): wrap each Faq in its own div.
- `src/utils/effects/useScrollReveal.ts` reveals Framer appear-effect elements (inline opacity:0 + translate) on scroll. Use it on every page.
- Fonts: Outfit variable via `@fontsource-variable/outfit`; 'Inter'/'Inter Display' are aliased to Outfit in `src/styles/global.css`. Dr Boysk @font-face lives there too.
- Header + hamburger overlay are custom: `src/components/layout/Header.tsx`.
- Home placeholders still to replace: Latest Works images (CardWorks image prop `V6sx94wG_` not passed → default stock image), counter end values (120K+/95%/100% are guesses), Why/FAQ copy approximated.
- The browser pane can only screenshot ~580px wide; verify desktop with layout metrics or a real browser.
- Projects page: `Container.js`/`Container2.js` patched — `QueryData` now returns the static `__FRAMER_CMS_DATA__.k6LJv7gte` list (the Framer query engine threw "Invalid URL") and the CMS preload `.loader` was removed. Item fields: XG3otaDlZ slug, dAZk2Jaon title, XbJge9Fsp category, XpFWjsiiE image, y7hP7y7TX year. Images in `public/images/work/` are stand-ins (logos/posts), not the final cover banners.
- Contact page: `Contact2` + `Footer` + Header. Form submit is intercepted by `src/utils/contactForm.ts` (`attachContactForm`) → POSTs JSON {name,email,message} to `VITE_CONTACT_ENDPOINT` (see `.env.example`), or opens a mailto: draft to Hello@keffini.com if unset, then navigates to /thank-you. NOTE: do not name it `useXxx` and call it as a hook in a page — a hook version blew up with "Maximum call stack" in react-refresh on this Framer-heavy page.
- Phone variant of Contact2 stacks via `.framer-2x2bwp` override in `pages/contact.css` (Framer class hashes; re-check if the export is regenerated).
- Page screenshots: the in-app browser's screenshot frame is 1.5x the emulated viewport; click coordinates are in frame pixels.
- Project detail pages (`/projects/:slug`, `src/pages/ProjectDetail.tsx`): Framer `Detail` + `MoreWorks` (from the "Detail Project" zips) + Footer. Content in `src/data/projects.ts` (only Lunari has real copy; others are marked `placeholder: true`). Shared list in `src/data/projectRows.js` feeds Container, Container2 and MoreWorks (their CMS stubs import it; QueryData/loaders patched; card links patched to `/projects/<slug>`). Detail image slots: 1 hero, 2-4 first grid, 5-7 second grid, 8 closing banner. Placeholders in `public/images/placeholders/`.
- `src/utils/RouterGlue.tsx`: turns Framer `<a href="/...">` clicks into SPA navigation, handles #hash scroll and scroll-to-top on route change.
- Home hero = `src/components/home/HeroIntro.tsx` (+ `heroIntro.css`): Framer `Hero2` (3 stacked images) + custom WAAPI replay of its presence effects (delay/duration/y/scale from Hero2.js animation1-3), then frame expands full-bleed, list/tagline fade in, "Keffini"/"Studios" (Dr Boysk) slide in. Timings are the `setTimeout`s (3.0s / 4.1s / 4.6s) and CSS transitions. Matches the screen recording; the original Framer final state also had a gradient-wave moment that was NOT replicated. Old `Hero.js` is no longer used on Home.
- Home "Why Keffini" section is now the Framer `Why` component (has the video card; video is a remote framerusercontent mp4). My hand-built Cards version was removed.
- Home "(01) Our Commitment" image loop: Framer `ImageLoopCard` (5 variants/slots) cycled every 2s by `ImageLoop` in `pages/Home.tsx` with 6 photos from `public/images/loop/loop-1..6.jpg` (banana, pink visor duo, can-glasses, strawberry, red geisha, lips duo). All 5 slots are always passed so the component's stock photos never show; the slot being faded out keeps its old photo. HMR on Home.tsx can throw a react-refresh "Maximum call stack" error: do a full reload (it's dev-only).
- Lunari detail images: `public/images/lunari/` (poster hero, logo, new-collection, everyday-essentials, bags, pouches, boxes; closing banner reuses pouches; `shimmer-save.jpg` unused). Slot mapping in `src/data/projects.ts`. Reference layout: `docs/reference/project-detail-lunari*.webp`. Projects list/home card for Lunari now uses the poster.
- kazi Citas detail: real images in `public/images/kazicitas/*.webp`, copy in `src/data/projects.ts` (transcribed from a small screenshot; Timeline unknown = TBC). Reference: `docs/reference/project-detail-kazicitas.webp`. Remaining projects (Podium, Casa V Ramoneda, Habana, Wombman) still use placeholders.

- The Podium detail: images in `public/images/podium/`, copy in `src/data/projects.ts` (transcribed from a small screenshot, Year assumed 2025). Reference: `docs/reference/project-detail-podium.webp`. Still placeholder: Casa V Ramoneda, Habana Barber & Spa, Wombman Africa.

- Casa V Ramoneda detail: images in `public/images/casa/` (logo-gold.png unused; closing banner reuses the Nobel ad since the tins crop was not supplied), copy transcribed from a small screenshot (Timeline TBC). Reference: `docs/reference/project-detail-casa.webp`. Still placeholder: Habana Barber & Spa, Wombman Africa.

- Home "Rate Card" section (`RateCard.js`, id `rates`) sits between Services and FAQ. Phone variant stacks its plan/onboarding cards via `.framer-146gqai/.framer-uu27qt` overrides in `pages/home.css`. Its copy contains a different contact email (keffinicreativestudio@gmail.com) and address (Aqua Plaza, Murang'a Rd) than the rest of the site (Hello@keffini.com): confirm which is right.

- Latest Works hover (Home): Framer shows a centred white pill with the category (e.g. "Full Digital Branding") on card hover; the motion variant that drives it does not fire in the port, so `pages/home.css` shows `.framer-f25iei` on `a:hover` with pill styling.

- Projects page / "More works" cards (Card/Works Wide, class `.framer-yAaoZ`): hover zooms the thumbnail 1.1x (CSS in `src/styles/global.css`, the motion variant does not fire in the port) and the caption bar slides up (class-based, already worked; transition added).

- Latest Works hover (final, per recording): centred full-width white band across the card with the project category in black (band bg + text reveal done in `pages/home.css`; text uses mix-blend-mode difference). Category text comes from `getProject(slug).category`. The Framer site also shows a trailing black dot cursor everywhere: NOT implemented. Podium year is 2026 (seen on the live Framer site).

- Cursor dot: `src/components/layout/CursorDot.tsx` (mounted in `App.tsx`): 12px dot that trails the mouse (lerp 0.16), mix-blend-mode difference, hidden on touch devices, no lag with prefers-reduced-motion. Native cursor is kept. (Supersedes the "not implemented" note above.)

- Habana Barber & Spa detail: images in `public/images/habana/` (hero/cover = logo on white; `spa-services.jpg` used for the closing banner), copy transcribed from a small screenshot (Timeline TBC). Reference: `docs/reference/project-detail-habana.webp`. Only Wombman Africa is still placeholder.

- Wombman Africa detail: images in `public/images/wombman/` (hero/cover = beach trio with sky), copy transcribed from a small screenshot (Timeline TBC). Reference: `docs/reference/project-detail-wombman.webp`. All six project pages now have real images; Lunari alone has verified copy, the rest are transcribed from screenshots.

- Ivory Horizons Tours (newest project, added 2026-10-06): images in `public/images/ivory/`, first entry in `PROJECTS` (data/projects.ts) and `PROJECT_ROWS`. Intro/year/industry/timeline come from the user's Framer editor screenshot (`docs/reference/project-detail-ivory-editor.png`); section copy is written from the posters. The Home "Latest Works" grid (`WORKS` in `pages/Home.tsx`) shows the 4 newest projects, so Casa V Ramoneda moved out of it (still on /projects). To feature a new project: add it first in PROJECTS + PROJECT_ROWS and in WORKS, dropping the oldest card.

- Battlezone Kenya (BZK, newest): multi-chapter case study rendered by `src/pages/StoryDetail.tsx` (used when a project has `chapters`; reusable for other storyboard projects). Images `public/images/bzk/`; copy from the Framer editor screenshots (`docs/reference/bzk-editor-*`). Chapters 04 (merch tees) and 05 (winner plaques) are placeholders awaiting images. Home Latest Works now: BZK, Ivory, Lunari, kazi (Podium dropped off the grid).

- BZK chapters 04 (3 tee mockups: `merch-*.jpg`) and 05 (4 winner plaques: `plaque-*.webp`) now have real images; no placeholders left on that page.

- "Handles Link" hover (from recording): pill fills black, label + arrow turn cream (`.project-detail a.framer-j01zZ` in `pages/projectDetail.css`, `.story__btn` in `pages/storyDetail.css`). Wombman's live Handles Link on Framer points to https://www.instagram.com/_wombman/ (not yet set here).

- Foundations of Movement (F.O.M. Studio, newest): 8-chapter `StoryDetail` project, images + `merch-tee.mp4` (28 MB, lazy `preload=none`; compress before launch) in `public/images/fom/`. Copy written from the posters. Home Latest Works now: F.O.M., BZK, Ivory, Lunari (kazi Citas dropped off the grid). Chapters can have an optional `video`.

- Squeaky Clean (cleaning company; logo + thank-you cards + poster): `StoryDetail` project, images in `public/images/squeaky/`, cover/hero = Q icon on foam. Copy written from the artwork; Year/Timeline unconfirmed. IG link guessed from the card handle @Squeakyclean_. Home Latest Works now: Squeaky Clean, F.O.M., BZK, Ivory (Lunari dropped off the grid). StoryDetail grids support cols 1-4.

- Covers: Projects list, "More works" and Home Latest Works cards now read the cover from `PROJECT_ROWS[].XpFWjsiiE` (not the project's hero `images[0]`), so a cover can differ from the page header. F.O.M. cover = its logo (`fom/logo.png`); header stays the banner.

- Projects page filter (All / Design / Web Development, `?type=design|web`): Design = the Framer `Container` list, Web = `components/home/WebProjects.tsx` (browser-frame live-site showcases from `src/data/webProjects.ts`, link out in a new tab, no case-study page). Harry's two sites: Bills On Solar, Standout Growth (screenshots in `public/images/web/`). `keffini-project.zip` (Oct 7) is an OLDER snapshot: only these two projects were taken from it.

- Ivory Horizons Tours is now a 7-chapter `StoryDetail` project (branding first: logo, cards, roll-ups, vehicle, umbrellas, merch; social media last with 3 posters). Cover stays the elephant-skin logo; page hero = logo on brown. Old social images remain in `public/images/ivory/`; `ready-for-kenya`, `explore-deeper`, `day-9-10-maasai`, `journal-cover` are no longer used on the page.

- Home brands ticker (`Brands.js`): Ivory Horizons logo added as a last Image child (`.kc-brand-ivory`, `public/images/ivory/logo-transparent.png`). Second hand-edit in a generated file besides the runtime/CMS patches; re-apply if Brands is re-exported.

- Home brands ticker: Squeaky Clean, F.O.M. Studio, Cleophas & Associates and Ivory Horizons logos (`public/images/brands/`) added in `Brands.js` (`.kc-brand--*`, greyscale filters in `styles/global.css`; Cleophas uses invert+grayscale because its lettering is white).

- StarCall Phones (branding + app dev; Lipa Mdogo Mdogo phone seller): 7-chapter `StoryDetail`, images `public/images/starcall/`, Handles Link https://starphones.co.ke, Play Store link in chapter 07 (new chapter `link` field). No app screenshots yet. Listed on the Projects page only (user asked: not on the Home Latest Works grid, which stays Squeaky Clean, F.O.M., BZK, Ivory).

- Home Latest Works order (user-set): BZK, Squeaky Clean, F.O.M., Ivory (`WORKS` in pages/Home.tsx).

- Hero wave-gradient shader restored: `components/home/WaveGradient.tsx` (WebGL2, half-res, pauses off-screen) runs the exact fragment shader + settings from the original Framer `Hero.js` (`waveShader.ts`), fades in behind the photo when the hero expands; the photo is masked toward the left so the waves show through (my reading of the recording, tune the mask in heroIntro.css).

- Lenis smooth scroll: `src/utils/SmoothScroll.tsx` (mounted in App.tsx, instance on `window.__lenis`, off for reduced-motion). It also owns scroll-to-top on every route change (retries while Framer content lays out) and #hash scrolling; RouterGlue only handles link clicks now. Home counters use flex + per-counter min-widths (auto grid overlapped labels).

- Favicon: `public/favicon.svg` (maroon KF mark, from Downloads/Kf Maroon Favicon@2x.svg) linked in index.html; theme-color #65001e.
