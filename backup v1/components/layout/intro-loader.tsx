"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/content/site";

const letters = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 0.6, delay: 0.15 + i * 0.05, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function IntroLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (sessionStorage.getItem("intro-seen")) return;

    sessionStorage.setItem("intro-seen", "1");

    const start = window.setTimeout(() => {
      setShow(true);
      document.body.style.overflow = "hidden";
    }, 60);
    const end = window.setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 2200);

    return () => {
      window.clearTimeout(start);
      window.clearTimeout(end);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-background"
          aria-hidden
        >
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-muted">
            Portfolio &mdash; &copy; 2026
          </p>
          <p className="mt-4 flex overflow-hidden text-5xl font-medium tracking-tight md:text-7xl">
            {site.name.split("").map((letter, i) => (
              <motion.span
                key={`${letter}-${i}`}
                custom={i}
                variants={letters}
                initial="hidden"
                animate="show"
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 + site.name.length * 0.05 }}
              className="inline-block text-accent"
            >
              .
            </motion.span>
          </p>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
            className="mt-8 h-px w-40 origin-left bg-accent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
