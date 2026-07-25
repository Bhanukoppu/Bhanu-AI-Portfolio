# Bhanu AI Portfolio

A premium, personal portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Design concept

Instead of generic numbered sections or a stock dark+neon theme, every section
is framed as a **record in a validated dataset** — a nod to your real
"Dataset Quality & Annotation Validation Tool" project:

- Section eyebrows read like dataset rows: `record 03/08 · projects · verified`
- The hero is a live "validator" panel that ticks through your profile fields
- Gold accent echoes your real Google Cloud **Gold League** badge
- Teal marks "verified" states throughout (skills, projects, certificates)

Fonts: **Space Grotesk** (display), **Inter** (body), **JetBrains Mono** (data/labels/eyebrows).

## Getting started

### Option A — drop into your existing project
If you already have a Next.js project running (the one from your earlier
setup), just copy these folders into it, overwriting what's there:

```
src/app/
src/components/
src/data/
public/profile-placeholder.svg
tailwind.config.ts
next.config.ts
```

Then install the two new packages it needs:

```bash
npm install framer-motion lucide-react react-icons
npm run dev
```

### Option B — fresh install
```bash
npm install
npm run dev
```
Then open http://localhost:3000.

## What's already done for you

Your real content is now built in:
- ✅ Profile photo (`public/profile.jpg`) — already wired up
- ✅ 5 certificate PDFs, clickable straight from the Certificates section
- ✅ Real resume data throughout: About, Education, Skills, Projects,
  Experience, Google Cloud badges, Certificates
- ✅ Your real email, GitHub, and LinkedIn links

## Still worth adding

- [ ] **Resume PDF** — export your `.docx` resume as a PDF, save it as
      `public/resume.pdf` (the "Download Resume" button already points here)
- [ ] **Project screenshots** (optional) — see the section below
- [ ] **3D avatar** (optional) — see the section below
- [ ] Double-check the two GitHub project links in `src/data/portfolio.ts`
      (`projects` array) — they currently point to your GitHub profile since
      the specific repo names weren't provided; update to the exact repo
      URLs once those projects are public

## Before you ship: personalize the content

Everything content-related lives in **`src/data/portfolio.ts`** — one file,
edit it and the whole site updates.

## Showcasing your project screenshots and 3D avatar

### Profile photo
Already done — `public/profile.jpg` is in place and wired up.

### Certificates
Already done — your 5 certificate PDFs are in `public/certificates/` and
linked from each card in the Certificates section. Your other certifications
(IBM, Tata, AWS, Wadhwani) are listed too, without a file link since those
PDFs weren't provided — add `file: "/certificates/yourfile.pdf"` to any of
those entries in `portfolio.ts` if you get copies later.

### Project screenshots
1. Take a screenshot of each project (code, terminal output, a notebook,
   or a diagram — whatever best represents it) and save it in
   `public/projects/`, e.g. `public/projects/sms-spam-detection.png`
2. The two shipped projects already expect:
   ```
   public/projects/sms-spam-detection.png
   public/projects/dataset-validation-tool.png
   ```
3. For any project without an `image:` field, the card just skips the
   screenshot area — no broken images, it degrades gracefully.

## Adding your 3D character (Avatar section)

Right after the Hero, there's now an interactive 3D section. Until you add a
real model, it shows a quiet placeholder shape (a rotating gold/teal
wireframe) — nothing breaks, it just won't look like "you" yet.

### Get a free 3D avatar (no modeling skills needed)
1. Go to **https://readyplayer.me** (free, works in browser)
2. Create an avatar — you can base it on a selfie or build one manually
3. Download it as a **.glb** file
4. Save that file as:
   ```
   public/models/character.glb
   ```
5. Refresh your browser — the placeholder shape is automatically replaced
   with your real character. No code changes needed.

### How it behaves
- If the model has an idle/breathing animation clip, it plays automatically
- It gently turns to "look" toward wherever your mouse is
- Visitors can drag to rotate the view slightly (limited range, so it can't
  be spun upside down)

### If you'd rather use a different model source
Any `.glb` file works, as long as:
- It's licensed for your use (check the source's license — Sketchfab has a
  filter for downloadable + reusable models, Mixamo works too)
- It's saved at exactly `public/models/character.glb`

If the file is missing, invalid, or too large, the section just falls back
to the placeholder shape — it won't crash your site.

## Adding a new project or certificate later

This is the point of the "living portfolio" — no redesign needed:

```ts
// in src/data/portfolio.ts
export const projects: Project[] = [
  // ...existing projects
  {
    id: "P-07",
    title: "Your New Project",
    status: "shipped",
    description: "What it does and why it matters.",
    stack: ["Python", "FastAPI"],
    github: "https://github.com/you/repo",
  },
];
```

## Contact form note

The contact form currently opens the visitor's email client with the message
prefilled (no backend required). When you're ready for real form
submissions, wire `handleSubmit` in `src/components/sections/Contact.tsx` to
a service like Formspree, Resend, or a Next.js API route.

## Deploying

Push this to GitHub, then import the repo at https://vercel.com/new — Vercel
detects Next.js automatically and needs no extra configuration.
