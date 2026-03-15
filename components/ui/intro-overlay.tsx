"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function IntroOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeOut" } }}
          className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-surface"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.04, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <div className="mx-auto mb-6 h-px w-28 bg-gradient-to-r from-transparent via-glow to-transparent" />
            <p className="font-display text-sm uppercase tracking-[0.7em] text-white/60">Habibur Rahman</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
