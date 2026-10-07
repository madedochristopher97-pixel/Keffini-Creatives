Run `npm install` first; project files are already in place (see CLAUDE.md Layout).
Read CLAUDE.md first (it describes each reference screenshot). This is a Vite + React + TS port of the Keffini Creative Studio
Framer site. The Framer components in src/components/framer are generated: don't edit
them, wrap them. Reference screenshots are in docs/reference/. Run `npm run dev` and
check each change in the browser against them. Work in this order, committing after each:

1. Fonts: copy my Dr Boysk font from Downloads (dr-boysk-font-1767845610-0/Dr-Boysk-DEMO-VERSION-BF695f1f3b93a77.otf)
   into public/fonts/ and add @font-face for 'Dr Boysk DEMO VERSION' and 'Dr Boysk DEMO VERSION Regular'
   in src/styles/tokens.css. Everything else is Outfit (not Inter / Inter Display): load Outfit, set it as the
   body/UI font, and override any Inter references in the Framer components' CSS.
2. Home page (src/pages/Home.tsx): match the screenshots section by section: hero, (01)
   Our Commitment with counters, brands strip, (02) Latest Works 2x2 grid, (03) Why
   Keffini 4 columns, (04) Services on a burgundy band, (05) FAQ accordion, footer.
   Fix spacing, max-width, grid and heading sizes. Replace my approximated card copy
   where a screenshot shows the real text.
3. Images: Hero and CardWorks show broken images because the image props were never
   passed (bzGCxZlef, LFd6Pb2Zf, uD5pBfuSj, V6sx94wG_). Find the original image URLs
   inside the generated component files or ask me for assets. Put them in public/
   and pass them in.
4. Contact, Thank You and Privacy render blank because of Framer scroll-in effects
   starting at opacity 0. Fix it using the files in src/utils/effects/, or override
   the CSS so they show.
5. Projects page: fill the empty __FRAMER_CMS_DATA__ stub at the top of
   src/components/framer/Container.js (and Container2.js) with Lunari Jewels, kazi Citas, The Podium,
   Casa V Ramoneda, Habana Barber & Spa and Wombman Africa (see docs/reference).
   (This is the one allowed edit inside src/components/framer.)
6. Header: replace the text logo with the real keffini SVG logo if I give it to you.
   Check the menu overlay on mobile.
7. Contact form: wire it to a real submit handler that redirects to /thank-you. Add
   real Privacy Policy text.
8. Run `npm run build` and fix anything that breaks. Tell me what's left.
