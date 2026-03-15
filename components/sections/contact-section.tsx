"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Send } from "lucide-react";
import { contactDetails, siteConfig } from "@/data/portfolio";
import { SectionShell } from "@/components/ui/section-shell";

export function ContactSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionShell id="contact" eyebrow="Contact" title={contactDetails.heading} description={contactDetails.body}>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-white/40">Email</p>
          <a href={`mailto:${siteConfig.email}`} className="mt-3 block font-display text-2xl text-white">
            {siteConfig.email}
          </a>

          <div className="mt-10">
            <p className="text-sm uppercase tracking-[0.35em] text-white/40">Social</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {siteConfig.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:border-glow/30 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-xl"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {contactDetails.formFields.slice(0, 3).map((field) => (
              <label key={field} className="text-sm text-white/55">
                <span className="mb-2 block">{field}</span>
                <input
                  type={field === "Email" ? "email" : "text"}
                  placeholder={field}
                  className="w-full rounded-2xl border border-white/10 bg-[#0b1322] px-4 py-4 text-white outline-none transition placeholder:text-white/20 focus:border-glow/40"
                />
              </label>
            ))}
          </div>

          <label className="mt-5 block text-sm text-white/55">
            <span className="mb-2 block">{contactDetails.formFields[3]}</span>
            <textarea
              rows={5}
              placeholder="Share goals, timeline, and the kind of experience you want to create."
              className="w-full rounded-2xl border border-white/10 bg-[#0b1322] px-4 py-4 text-white outline-none transition placeholder:text-white/20 focus:border-glow/40"
            />
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-surface"
          >
            Send inquiry
            <Send size={16} />
          </button>
        </motion.form>
      </div>
    </SectionShell>
  );
}
