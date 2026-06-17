# React to Angular Migration Notes

This project is a runnable Angular 22 migration of the provided Yugtek React/Vite landing page.

## What was migrated

- React single-page landing structure converted to Angular standalone component architecture.
- Original sections preserved as Angular-rendered sections: Navbar, Hero, About, Services, Tech Stack, Portfolio, Process, Testimonials, Contact, and Footer.
- React state/hooks were replaced with Angular signals, host listeners, lifecycle hooks, and template binding.
- The original Yugtek logo asset was copied into `public/yugtek_logo_enhanced.png`.
- React-only dependencies such as `react`, `react-dom`, `framer-motion`, `lucide-react`, and `@react-three/fiber` were removed.
- CSS animations and responsive styling were implemented directly in Angular CSS so the app builds without Tailwind or external runtime animation packages.

## Requirements

Angular 22 requires a recent Node.js version. Use Node.js `22.22.3` or newer, `24.15.0` or newer, or `26.0.0` or newer.

## Run locally

```bash
npm install
npm start
```

Then open the local URL printed by Angular, usually `http://localhost:4200`.

## Production build

```bash
npm run build
```

This migration was validated with:

```bash
npx -p node@22.22.3 node ./node_modules/@angular/cli/bin/ng.js build
```
