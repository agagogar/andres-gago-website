# Andrés Gago Academic Website

Base Astro site for `andresgago.com`.

## Project Structure

- `src/pages/`: public pages and routes.
- `src/components/`: visual building blocks shared by pages.
- `src/layouts/`: page shell and shared metadata.
- `src/data/profile.ts`: profile, contact, social, and CV data.
- `src/content/research/`: academic publications, working papers, work in progress, and other research work.
- `src/content/teaching/`: teaching and supervising entries.
- `src/content/other-publications/`: non-academic publications.
- `public/andres-gago-cv.pdf`: downloadable CV file.

## Commands

```bash
npm run dev
npm run build
npm run preview
```

## Editing Content

Most content can be updated by editing Markdown frontmatter files under `src/content`.
The visible components should not need to change when adding papers, courses, or publications.
