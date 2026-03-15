"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionShell } from "@/components/ui/section-shell";

function TiltCard({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

  return (
    <motion.div
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left) / rect.width - 0.5);
        y.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ProjectsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionShell
      id="projects"
      eyebrow="Selected Work"
      title="Case studies with atmosphere, interaction depth, and product intent."
      description="Each project blends visual storytelling with production-minded implementation."
    >
      <div className="grid gap-8">
        {projects.map((project, index) => {
          const Wrapper = prefersReducedMotion ? motion.div : TiltCard;

          return (
            <motion.div
              key={project.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
            >
              <Wrapper className="group relative grid gap-6 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr] lg:p-6">
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-70 transition duration-500 group-hover:opacity-100`}
                />
                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="relative flex flex-col justify-between rounded-[1.5rem] border border-white/10 bg-[#09101d]/70 p-7">
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-glow/80">Featured Project {index + 1}</p>
                    <h3 className="mt-4 font-display text-3xl text-white">{project.title}</h3>
                    <p className="mt-4 text-base leading-8 text-white/65">{project.description}</p>
                  </div>

                  <div className="mt-8">
                    <div className="flex flex-wrap gap-3">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.25em] text-white/55"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-surface"
                      >
                        Live Site
                        <ArrowUpRight size={16} />
                      </a>
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-white/75"
                      >
                        Source
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </Wrapper>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
