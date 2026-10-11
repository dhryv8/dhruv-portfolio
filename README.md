# Dhruv Upadhyay — Portfolio

Personal portfolio for my work, education, projects, and experience as a
software engineer.

**GitHub:** [dhryv8](https://github.com/dhryv8) ·
**LinkedIn:** [dhryv8](https://linkedin.com/in/dhryv8) ·
**Email:** [udhru444@gmail.com](mailto:udhru444@gmail.com)

## About

The site includes my background, technical skills, projects, experience, and
certifications. It is built with Next.js, React, TypeScript, and Tailwind CSS,
with a responsive layout, light and dark themes, and an animated meteor
background.

## Run locally

### Requirements

- Node.js 22 or later
- Corepack with pnpm

### Setup

```bash
corepack pnpm install
corepack pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production build, install [Bun](https://bun.sh/) as well. The build
generates the component registry with Bun before building the Next.js app:

```bash
corepack pnpm build
corepack pnpm start
```

## Deploy

The site can be deployed to [Vercel](https://vercel.com/) by importing its GitHub
repository and using the detected Next.js settings. Set `NEXT_PUBLIC_APP_URL` to
the production site URL (for example, `https://dhryv8folio.vercel.app`) in the
deployment environment. The production build also requires Bun for registry
generation.

## License and community

See the [MIT license](./LICENSE) and [Code of Conduct](./CODE_OF_CONDUCT.md).
