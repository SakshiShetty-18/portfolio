# 3D Minimalist Portfolio (React + MUI + React Three Fiber)

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview
```

## Make it yours

- **All content** lives in `src/data.js` (name, headline, about, stats, skills, projects, experience, education, socials, email, resume path).
- **Resume:** drop your file at `public/resume.pdf` (or change `resumePath`).
- **Profile photo:** replace the placeholder box in `src/sections/About.jsx` with an `<img>`.
- **Project images:** set `image` on a project in `data.js` (put files in `public/`). One project has `featured3D: true` and shows a draggable 3D knot instead.
- **Hide Experience & Education:** set `experience`, `education` to `[]`.
- **Colours and fonts:** `src/theme.js`.
- **3D hero object:** `src/three/HeroScene.jsx`.
- **Contact form:** opens the visitor's email client by default. Swap `onSubmit` in `src/sections/Contact.jsx` for Formspree/EmailJS/your own API to send directly.

## Notes

- Light/dark follows the system setting on first visit, then remembers the toggle.
- Animations and 3D motion are reduced when the visitor has "reduce motion" enabled.
- The 3D code is lazy-loaded and the lighting is procedural, so no extra assets are downloaded.

## Deploy

- **Vercel / Netlify:** import the repo; build command `npm run build`, output directory `dist`.
