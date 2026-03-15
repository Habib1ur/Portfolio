"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { navItems, siteConfig } from "@/data/portfolio";
import { cn } from "@/components/ui/cn";

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const ids = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const updateActive = () => {
      const offset = window.innerHeight * 0.3;
      let nextActive = ids[0] ?? "home";

      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) {
          return;
        }

        const rect = element.getBoundingClientRect();
        if (rect.top <= offset) {
          nextActive = id;
        }
      });

      setActive(nextActive);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [ids]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.7 }}
      className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8"
    >
      <div className="flex w-full items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 shadow-glass backdrop-blur-xl">
        <a href="#home" className="font-display text-sm uppercase tracking-[0.4em] text-white/80">
          {siteConfig.name}
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm text-white/60 transition hover:text-white",
                active === item.id && "bg-white/10 text-white"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="rounded-full border border-white/10 p-2 text-white/80 md:hidden"
          aria-label="Toggle navigation"
        >
          <Menu size={18} />
        </button>
      </div>

      {open ? (
        <div className="absolute left-4 right-4 top-full mt-3 rounded-3xl border border-white/10 bg-[#09101d]/95 p-4 shadow-glass backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm text-white/65 transition hover:bg-white/5 hover:text-white",
                  active === item.id && "bg-white/10 text-white"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </motion.header>
  );
}
