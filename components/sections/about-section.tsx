"use client";

import { motion, useReducedMotion } from "framer-motion";
import { aboutCards, siteConfig } from "@/data/portfolio";
import { SectionShell } from "@/components/ui/section-shell";

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="Crafted to feel intentional, memorable, and technically sharp."
      description={siteConfig.tagline}
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-xl md:p-10"
        >
          <p className="text-lg leading-8 text-white/72 md:text-xl">
            I work at the intersection of visual design, interaction direction, and frontend engineering. My goal is
            to make products feel elevated on first impression and dependable after extended use.
          </p>
          <p className="mt-6 text-base leading-8 text-white/55">
            The strongest interfaces are not merely attractive. They clarify value, create momentum, and leave a
            lasting emotional trace. That balance is where I spend most of my time.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {aboutCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-glass backdrop-blur-xl transition hover:-translate-y-1 hover:border-glow/30"
              >
                <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-glow">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-2xl text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{card.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
