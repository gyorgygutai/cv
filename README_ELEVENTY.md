# CV - Eleventy Static Site Generator

This CV website is built with [Eleventy](https://www.11ty.dev/), a simple and flexible static site generator. Content is stored in JavaScript data files and rendered with Nunjucks templates, styled with Tailwind CSS.

## Project Structure

```
├── src/
│   ├── _data/           # Content stored in JavaScript files
│   │   ├── about.js     # About section
│   │   ├── profile.js   # Profile header info
│   │   ├── skills.js    # Technical skills
│   │   ├── projects.js  # Project portfolio
│   │   ├── work.js      # Work experience
│   │   └── links.js     # Contact links
│   ├── _includes/       # Nunjucks templates
│   │   └── base.njk     # Base layout
│   ├── css/
│   │   └── styles.css   # Tailwind CSS source
│   ├── assets/          # Images and static files
│   └── index.njk        # Main page template
├── docs/                # Built output (GitHub Pages)
├── .eleventy.js         # Eleventy configuration
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS configuration
```

## Features

- ✅ **Zero Runtime JavaScript** - Pure HTML/CSS output
- ✅ **Content in JavaScript** - Easy to edit structured data
- ✅ **Tailwind CSS** - Utility-first styling, only 16KB of CSS (reduced from 200KB+)
- ✅ **Dark Mode Support** - Automatic based on system preference
- ✅ **GitHub Actions** - Automated deployment to GitHub Pages
- ✅ **Fast Builds** - Builds in ~300ms

## Development

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Starts Eleventy in watch mode with live reload at `http://localhost:8080`.

### Build for Production

```bash
npm run build
```

Builds the site to the `docs/` folder.

### Preview Production Build

```bash
npm run serve
```

Serves the built site from `docs/` at `http://localhost:3001`.

## Editing Content

All content is stored in `src/_data/` as JavaScript files. Simply edit these files and rebuild:

- **Profile Info**: `src/_data/profile.js` - Name, title, website, photos
- **About**: `src/_data/about.js` - About section text
- **Skills**: `src/_data/skills.js` - Array of skill categories
- **Projects**: `src/_data/projects.js` - Array of projects with details
- **Work Experience**: `src/_data/work.js` - Array of work history
- **Links**: `src/_data/links.js` - Array of contact/social links

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch via GitHub Actions. The workflow:

1. Installs dependencies
2. Builds the Eleventy site to `docs/`
3. Generates PDF and PNG versions using Puppeteer
4. Deploys via GitHub Pages

## CSS

Tailwind CSS is configured with:
- Custom color variables for dark mode
- Responsive breakpoints
- Only used utilities are included in the final CSS
- Final CSS size: ~16KB (vs 200KB+ in the original)

## Technologies

- **Eleventy 3.0** - Static site generator
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Nunjucks** - Template engine
- **PostCSS** - CSS processing
- **GitHub Actions** - CI/CD
- **Puppeteer** - PDF/PNG generation

## License

Content © György Gutai
