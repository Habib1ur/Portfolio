"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/components/ui/cn";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className
}: SectionShellProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id={id} className={cn("relative mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32", className)}>
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
        whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 max-w-3xl"
      >
        <p className="mb-4 font-display text-xs uppercase tracking-[0.45em] text-glow/80">{eyebrow}</p>
        <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
        {description ? <p className="mt-5 text-base leading-8 text-white/65 md:text-lg">{description}</p> : null}
      </motion.div>
      {children}
    </section>
  );
}
