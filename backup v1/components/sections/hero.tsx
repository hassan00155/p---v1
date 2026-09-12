"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "motion/react";
import { hero, site } from "@/content/site";
import { Magnetic } from "@/components/ui/magnetic";
import { ArrowDown } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const HeroScene = dynamic(() => import("@/components/three/hero-scene"), { ssr: false });

const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: 0.35 } },
};

const word = {
  hidden: { y: "115%", rotate: 4 },
  show: {
    y: "0%",
    rotate: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="home" className="relative flex min-h-svh flex-col overflow-hidden">
      <div className="absolute inset-0 md:left-[38%]" aria-hidden>
        <div className="absolute right-[-10%] top-1/2 h-[46vmin] w-[46vmin] -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
        {!reduced && <HeroScene />}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-8 inline-flex"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-hairline px-4 py-1.5 font-mono text-xs text-muted">
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
            {site.availability}
          </span>
        </motion.div>

        <motion.h1
          variants={wordContainer}
          initial="hidden"
          animate="show"
          className="max-w-5xl text-[clamp(2.7rem,7.5vw,6.2rem)] font-medium leading-[1.04] tracking-[-0.03em]"
        >
          {hero.headline.map((line, lineIndex) => (
            <span key={lineIndex} className="block overflow-hidden pb-1">
              {line.map((w, wordIndex) => (
                <motion.span
                  key={`${w}-${wordIndex}`}
                  variants={word}
                  className={cn(
                    "mr-[0.24em] inline-block",
                    hero.serifWords.includes(w) &&
                      "font-serif italic font-normal text-accent",
                  )}
                >
                  {w}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg"
        >
          {hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mt-12 flex flex-wrap items-center gap-6"
        >
          <Magnetic>
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-colors duration-300 hover:bg-accent hover:text-background"
            >
              View my work
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="text-sm font-medium underline decoration-hairline underline-offset-8 transition-colors duration-300 hover:decoration-accent"
            >
              Get in touch
            </a>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="relative z-10 mx-auto flex w-full max-w-6xl items-end justify-between px-6 pb-8"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {site.location}
        </p>
        <div className="flex flex-col items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
            Scroll
          </span>
          <span className="block h-12 w-px overflow-hidden">
            <span className="animate-cue-drop block h-full w-full bg-accent" />
          </span>
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">&copy; 2026</p>
      </motion.div>
    </section>
  );
}
