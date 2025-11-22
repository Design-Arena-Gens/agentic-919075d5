# Creator Central – YouTube Channel Hub

A statically generated Next.js site that presents the look and feel of a polished YouTube channel homepage. It highlights recent uploads, curated playlists, collaborations, and key channel metrics.

## Features

- Hero section with featured upload, subscription call-to-action, and social links.
- Responsive video grid with hover effects, tags, and performance stats.
- Playlist showcase with call-outs for curated learning paths.
- Collaboration spotlight that surfaces partner projects.
- Channel metrics panel styled for a premium creator brand aesthetic.

## Tech Stack

- [Next.js 14](https://nextjs.org/) with the App Router
- React 18 + TypeScript
- CSS Modules for component-level styling
- Automatic static optimization (no backend required)

## Getting Started

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000` to explore the channel experience.

To create a production build:

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/
    page.tsx       # Home page assembly
    layout.tsx     # Global layout & metadata
    globals.css    # Design tokens and base styles
  components/      # Presentational building blocks
  lib/             # Channel data sources
```

## Deployment

The app is production-ready for hosting on Vercel. Run `npm run build` locally to validate before deploying.
