# Quick Start Guide

## Installation Complete! ✅

Your CV has been successfully converted to Eleventy with Tailwind CSS.

## Common Commands

```bash
# Development (with live reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run serve
```

## Editing Your CV

### 1. Update Personal Info
Edit `src/_data/profile.js`:
```javascript
export default {
  name: "Your Name",
  title: "Your Title",
  website: "yourwebsite.com",
  // ...
};
```

### 2. Update About Section
Edit `src/_data/about.js`:
```javascript
export default "Your about text here...";
```

### 3. Add/Edit Projects
Edit `src/_data/projects.js`:
```javascript
export default [
  {
    duration: "2025",
    title: "Project Name",
    company: "Company",
    link: "https://...", // optional
    description: [
      "Bullet point 1",
      "Bullet point 2"
    ],
    technologies: "Tech stack here"
  },
  // ...
];
```

### 4. Add/Edit Work Experience
Edit `src/_data/work.js`

### 5. Update Skills
Edit `src/_data/skills.js`

### 6. Update Links
Edit `src/_data/links.js`

## After Making Changes

1. Save your file
2. Run `npm run build`
3. Check the output in the `docs/` folder
4. Commit and push to deploy via GitHub Actions

## File Structure

```
src/
├── _data/          ← Edit content here
│   ├── about.js
│   ├── profile.js
│   ├── skills.js
│   ├── projects.js
│   ├── work.js
│   └── links.js
├── _includes/      ← Templates (usually don't need to edit)
├── css/            ← Tailwind styles
├── assets/         ← Images
└── index.njk       ← Main page layout

docs/               ← Built output (don't edit directly)
```

## Deployment

Your site is configured to deploy automatically via GitHub Actions when you push to the main branch.

The workflow:
1. You push to `main`
2. GitHub Actions runs
3. Builds the site to `docs/`
4. Generates PDF/PNG versions
5. Deploys to GitHub Pages

## What Changed?

✅ **CSS reduced by 92%** (7,318 lines → 749 lines, 200KB+ → 16KB)
✅ **Content is now structured** (easy to edit JS files)
✅ **Zero runtime JavaScript** (pure HTML/CSS)
✅ **Fast builds** (~300ms)
✅ **Dark mode support** (automatic)
✅ **Tailwind CSS** (only used utilities included)

---

**Everything is ready to go!** 🚀

Start with: `npm run dev`
