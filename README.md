# Douglas — Vibe Coder Portfolio

A minimalist, dark-themed portfolio and learning journal built with Astro + Tailwind CSS. This site documents my journey learning to code through "vibe coding" — building real projects by describing desired functionality in natural language and learning from AI-generated code.

<!-- TODO: Add a screenshot once the site is deployed -->

## Tech Stack

- **Framework:** [Astro](https://astro.build) — fast static site generator that ships minimal JavaScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) — utility-first CSS framework
- **Content:** MDX (Markdown + JSX) — write blog posts and project writeups in Markdown
- **Language:** TypeScript throughout
- **Deployment:** Ready for Vercel or Netlify (free tier)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18 or later
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to the project
cd portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be available at `http://localhost:4321`.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/       # Reusable UI components (Header, Footer, cards, etc.)
│   ├── content/
│   │   ├── blog/         # MDX blog posts
│   │   └── projects/     # MDX project writeups
│   ├── layouts/          # Page layouts (Base, Blog, Project)
│   ├── pages/            # Route pages (index, about, projects, blog, roadmap, contact)
│   └── styles/
│       └── global.css    # Design system + Tailwind config
├── public/               # Static assets (images, fonts, favicon)
├── astro.config.mjs      # Astro configuration
└── package.json
```

## Adding New Content

### New Blog Post

Create a new `.mdx` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "A brief description for SEO and previews"
publishDate: 2026-03-01
tags: ["tag1", "tag2"]
draft: false
---

Your post content here in Markdown...
```

### New Project

Create a new `.mdx` file in `src/content/projects/`:

```markdown
---
title: "Project Name"
description: "What this project does"
publishDate: 2026-03-01
tags: ["tech1", "tech2"]
status: "completed"
demoUrl: "https://..."
repoUrl: "https://github.com/..."
featured: true
keyLearning: "One sentence about what you learned"
sortOrder: 5
---

Your project writeup here...
```

## Deployment

### Vercel

1. Push the repo to GitHub
2. Go to [vercel.com](https://vercel.com), import the repo
3. Vercel auto-detects Astro — no configuration needed
4. Done! Updates deploy automatically on push

### Netlify

1. Push the repo to GitHub
2. Go to [netlify.com](https://netlify.com), import the repo
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Done!

## Customization

### Colors

Edit the `@theme` block in `src/styles/global.css` to change the color palette.

### Social Links

Update the GitHub and LinkedIn URLs in:
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/pages/contact.astro`

### Site URL

Update the `site` field in `astro.config.mjs` with your actual deployed URL.

## License

MIT License — see [LICENSE](LICENSE) for details.

## Inspirations

- [Brittany Chiang](https://brittanychiang.com) — clean layout and timeline sections
- [Astro Documentation](https://docs.astro.build) — framework best practices
- The "monochrome minimalism" aesthetic — muted tones and functional beauty

## Credits

Built with [Astro](https://astro.build) & [Tailwind CSS](https://tailwindcss.com).
Powered by curiosity and [Claude Code](https://claude.ai).
