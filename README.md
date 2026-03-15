# Premium Portfolio

A futuristic, premium personal portfolio built with Next.js, Tailwind CSS, Framer Motion, and React Three Fiber.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Where to customize content

- Main site copy, navigation, metrics, projects, testimonials, and contact text:
  `data/portfolio.ts`
- Global styling tokens, background, and shared CSS:
  `app/globals.css`
- Hero 3D scene:
  `components/three/hero-scene.tsx`
- Section layout and reusable shell:
  `components/ui/section-shell.tsx`






















  

## Notes

- Project cards currently use placeholder links and Unsplash images.
- The contact form is presentational. Connect it to your preferred form backend or email service.
- The 3D scene is client-only and loaded dynamically for smoother initial rendering.
