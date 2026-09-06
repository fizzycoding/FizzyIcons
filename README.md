# FizzyIcons

Multi-framework icon library monorepo powered by `pnpm` workspaces and `Turborepo`.

## Repository Structure

- `apps/website`: Next.js 14 web application & documentation showcase
- `packages/core`: Shared icon types and registry logic (`@fizzyicons/core`)
- `packages/react`: React component library (`@fizzyicons/react`)
- `packages/react-native`: React Native component library (`@fizzyicons/react-native`)
- `icons`: Source-of-truth SVG assets and metadata
- `scripts`: Pipeline and generation scripts

## Getting Started

```bash
pnpm install
pnpm dev
pnpm build
```
