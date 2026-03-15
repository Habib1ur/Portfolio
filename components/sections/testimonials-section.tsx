"use client";

import { motion, useReducedMotion } from "framer-motion";
import { achievements } from "@/data/portfolio";
import { SectionShell } from "@/components/ui/section-shell";

export function TestimonialsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionShell
      id="proof"
      eyebrow="Proof"
      title="Trusted to deliver work that looks distinct and feels commercially mature."
      description="Selected feedback from product and brand leaders."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {achievements.map((item, index) => (
          <motion.blockquote
            key={item.author}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, delay: index * 0.08 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-glass backdrop-blur-xl"
          >
            <p className="text-lg leading-8 text-white/75">“{item.quote}”</p>
            <footer className="mt-8 border-t border-white/10 pt-5">
              <p className="font-display text-lg text-white">{item.author}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.25em] text-white/45">{item.role}</p>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </SectionShell>
  );
}
