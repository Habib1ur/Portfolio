import { siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-center text-sm text-white/40 md:flex-row md:px-10 md:text-left">
      <p>{siteConfig.name} © 2026. Built with craft, motion, and restraint.</p>
      <p>{siteConfig.role}</p>
    </footer>
  );
}
