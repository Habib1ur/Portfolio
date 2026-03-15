"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { metrics, siteConfig } from "@/data/portfolio";

const HeroScene = dynamic(
  () => import("@/components/three/hero-scene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => <div className="h-[420px] rounded-[2rem] border border-white/10 bg-white/5 md:h-[560px]" />
  }
);

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-6 pb-20 pt-32 md:px-10 lg:grid-cols-[1.05fr_0.95fr]"
    >
      <div className="relative z-10">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 36 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 1.05 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 shadow-glass backdrop-blur-xl"
        >
          <Sparkles size={14} className="text-glow" />
          Available for select collaborations in 2026
        </motion.div>

        <motion.h1
          initial={prefersReducedMotion ? false : { opacity: 0, y: 42 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15 }}
          className="mt-8 max-w-4xl font-display text-5xl font-semibold leading-[0.96] text-white md:text-7xl lg:text-[5.6rem]"
        >
          <span className="block whitespace-nowrap">{siteConfig.name}</span>
          <span className="mt-2 block bg-gradient-to-r from-white via-glow to-glowAlt bg-clip-text text-transparent">
            {siteConfig.role}
          </span>
        </motion.h1>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 1.3 }}
          className="mt-8 max-w-2xl text-lg leading-8 text-white/70 md:text-xl"
        >
          {siteConfig.intro}
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.45 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-surface transition hover:scale-[1.02]"
          >
            View selected work
            <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 shadow-glass backdrop-blur-xl transition hover:border-glow/40 hover:text-white"
          >
            Start a project
            <Download size={16} />
          </a>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-14 grid gap-4 md:grid-cols-3"
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-xl">
              <p className="font-display text-3xl text-white">{metric.value}</p>
              <p className="mt-2 text-sm leading-6 text-white/60">{metric.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-glow/20 via-transparent to-glowAlt/20 blur-2xl" />
        <HeroScene />
        <div className="absolute -bottom-4 left-6 rounded-2xl border border-white/10 bg-[#0d1727]/80 px-4 py-3 shadow-glass backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">Currently based</p>
          <p className="mt-2 font-display text-lg text-white">{siteConfig.location}</p>
        </div>
      </motion.div>
    </section>
  );
}
