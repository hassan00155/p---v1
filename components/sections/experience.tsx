"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { experience } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Experience() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.72", "end 0.55"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28 md:py-40">
      <SectionHeading index="04" title="Experience" />

      <div ref={listRef} className="relative mt-16 md:mt-24">
        <div
          aria-hidden
          className="absolute bottom-2 left-[7px] top-2 w-px bg-hairline md:left-[139px]"
        />
        <motion.div
          aria-hidden
          style={{ scaleY: lineScale }}
          className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-accent md:left-[139px]"
        />

        <div className="flex flex-col gap-16 md:gap-24">
          {experience.map((entry, index) => (
            <Reveal key={entry.company} delay={index * 0.05}>
              <div className="relative grid gap-3 pl-10 md:grid-cols-12 md:gap-8 md:pl-0">
                <span
                  aria-hidden
                  className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-accent bg-background md:left-[132px]"
                />
                <div className="md:col-span-3 md:pr-14 md:text-right">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    {entry.period}
                  </p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-2xl font-medium tracking-tight">
                    {entry.role}
                    <span className="font-serif italic text-accent"> @ {entry.company}</span>
                  </h3>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted">{entry.summary}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
