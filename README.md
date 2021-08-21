# Simple Sveltekit

A barebones sveltekit setup with markdown files as content source.

## Writing content

Write markdown content in the `src/pages` directory. Each markdown file will be served as separate page.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
