"use client";

import { motion, useReducedMotion } from "framer-motion";
import { techStack } from "@/data/portfolio";
import { SectionShell } from "@/components/ui/section-shell";

export function SkillsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionShell
      id="skills"
      eyebrow="Capabilities"
      title="A toolkit built for premium interfaces, motion-led systems, and resilient frontend architecture."
      description="The stack is flexible, but the standard stays the same: clarity, polish, and performance."
    >
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {techStack.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.name}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative flex items-center justify-between">
                <div className="rounded-2xl border border-white/10 bg-[#10192b] p-4 text-glow group-hover:animate-float">
                  <Icon size={24} />
                </div>
                <span className="text-xs uppercase tracking-[0.35em] text-white/35">Core</span>
              </div>
              <h3 className="relative mt-10 font-display text-2xl text-white">{item.name}</h3>
              <p className="relative mt-4 text-sm leading-7 text-white/55">
                Applied in high-fidelity marketing sites, product interfaces, and custom design systems.
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 overflow-hidden rounded-full border border-white/10 bg-white/5 py-4 shadow-glass backdrop-blur-xl">
        <div className="flex min-w-max animate-marquee gap-8 px-8">
          {[...techStack, ...techStack].map((item, index) => (
            <span key={`${item.name}-${index}`} className="font-display text-lg text-white/50">
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
