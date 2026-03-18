# Christopher Sanchez Portfolio

Static personal portfolio built with React, Vite, and Tailwind CSS for GitHub Pages deployment.

## Stack

- React
- Vite
- Tailwind CSS

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Create a production build:

```bash
npm run build
```

## GitHub Pages Deployment

This project is configured as a fully static site. The Vite `base` setting uses relative paths, so it can be deployed either as:

- a user site such as `csanch7.github.io`
- a project site hosted from a repository subpath

### Option 1: Deploy with GitHub Pages UI

1. Run:

```bash
npm install
npm run build
```

2. Upload the contents of `dist/` to the branch GitHub Pages serves from, or configure GitHub Pages to publish that folder through your deployment workflow.

### Option 2: Deploy with GitHub Actions

1. Commit the project.
2. In GitHub, go to `Settings > Pages`.
3. Set `Source` to `GitHub Actions`.
4. Add a workflow that installs dependencies, runs `npm run build`, and publishes `dist/`.

### Notes

- `public/.nojekyll` is included so GitHub Pages serves the static assets correctly.
- No backend, database, or server-side rendering is required.
- The site uses anchor-based navigation, so it works cleanly on static hosting.
