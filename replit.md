# CleanLink Website

CleanLink is a static marketing website for a cleaning-services marketplace.

## Run & Operate

### Local development

1. Install Node.js 20+ and pnpm.
2. Run `pnpm install` from the repository root.
3. Start the website with `pnpm dev`.
4. Open the local URL printed by Vite, normally `http://localhost:3000`.

The website supplies local defaults for `PORT` and `BASE_PATH`, so no secrets,
database, or external services are needed to run the current static site.

### Checks and deployment build

- `pnpm run typecheck` — full typecheck across all workspace packages
- `pnpm run build:web` — build only the website
- `pnpm run build` — typecheck + build all workspace packages
- `pnpm run serve:web` — preview the built website locally

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- React, Vite, TypeScript, and Tailwind CSS
- Static hosting compatible with Netlify and Replit Deployments

## Where things live

- `artifacts/cleanlink-web/src/` — website source
- `artifacts/cleanlink-web/public/` — static public files
- `artifacts/cleanlink-web/vite.config.ts` — Vite and local server configuration
- `netlify.toml` — Netlify build and SPA fallback configuration

## Architecture decisions

- The website is served as a static Vite build with an SPA fallback.
- `PORT` and `BASE_PATH` are optional locally and are provided by the Replit artifact configuration when available.

## Product

The site introduces CleanLink's cleaning marketplace, explains how the service
works, presents available service categories, communicates trust and safety,
and provides a pathway for cleaners to join.

## User preferences

- Keep the downloaded project easy to run locally with one install command and one dev command.

## Gotchas

- Use the workspace root commands above; the website workflow is the only runnable app.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
