"use client";

import { motion, useReducedMotion } from "framer-motion";
import { journey } from "@/data/portfolio";
import { SectionShell } from "@/components/ui/section-shell";

export function ExperienceSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionShell
      id="journey"
      eyebrow="Journey"
      title="A progression through product, systems, and immersive frontend craft."
      description="The through-line has been consistent: ship work that raises the perceived value of the brand."
    >
      <div className="relative ml-2 border-l border-white/10 pl-8 md:ml-6 md:pl-12">
        {journey.map((item, index) => (
          <motion.div
            key={item.year}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, delay: index * 0.1 }}
            className="relative mb-12 last:mb-0"
          >
            <span className="absolute -left-[43px] top-2 h-4 w-4 rounded-full border border-glow/40 bg-surface shadow-[0_0_20px_rgba(94,234,212,0.45)] md:-left-[57px]" />
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-glass backdrop-blur-xl">
              <p className="font-display text-sm uppercase tracking-[0.45em] text-glow/75">{item.year}</p>
              <h3 className="mt-3 font-display text-2xl text-white">{item.title}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/45">{item.company}</p>
              <p className="mt-5 text-base leading-8 text-white/62">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
