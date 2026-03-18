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

### Recommended: Deploy with GitHub Actions

1. Commit and push this project to GitHub.
2. In GitHub, go to `Settings > Pages`.
3. Set `Source` to `GitHub Actions`.
4. The included workflow at `.github/workflows/deploy.yml` will install dependencies, run `npm run build`, and publish `dist/` automatically whenever you push to `main`.

### Manual Build

If you want to verify the production output before pushing:

```bash
npm install
npm run build
```

### Notes

- `public/.nojekyll` is included so GitHub Pages serves the static assets correctly.
- No backend, database, or server-side rendering is required.
- The site uses anchor-based navigation, so it works cleanly on static hosting.
