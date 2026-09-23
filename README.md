# Abhinav Bhushan — Cloud & DevOps Portfolio

Personal portfolio for **Abhinav Bhushan**, positioned primarily as a **Cloud & DevOps Engineer**, with Full-Stack Development as a secondary capability.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

The app is a static export (`out/`). Local preview:

```bash
npx serve out
```

## Live site

Hosted on GitHub Pages:

https://abhinavbhushan096.github.io/abhinav-bhushan-portfolio/

## Updating content

All portfolio content lives in `src/data/`:

| File | Purpose |
|------|---------|
| `site.ts` | Name, roles, email, socials, resume path |
| `about.ts` | About copy, education, focus chips |
| `experience.ts` | Work experience (ISO start/end months) |
| `skills.ts` | Azure / AWS / DevOps / networking / monitoring / backup / fullstack skills |
| `projects.ts` | Cloud + fullstack projects |
| `lifecycle.ts` | How I Work steps |

## Resume

Place your PDF at:

```text
public/resume/Abhinav_Bhushan_Resume.pdf
```

The navbar and hero **Download Resume** buttons already point there. A demo PDF is included so downloads work out of the box — replace the file when ready.

## Contact

The contact form uses `mailto:` (no backend). It opens the visitor's email client with a prefilled message to the address in `src/data/site.ts`.

## Deploy

Publish the static site to the `gh-pages` branch:

```bash
npm run deploy:pages
```
