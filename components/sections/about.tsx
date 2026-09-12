"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { about } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Counter } from "@/components/ui/counter";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.28em] inline-block">
      {children}
    </motion.span>
  );
}

export function About() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.85", "end 0.45"],
  });

  const words = about.illumination.split(" ");

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 md:py-40">
      <SectionHeading index="01" title="About" />

      <p
        ref={textRef}
        className="mt-14 max-w-4xl text-2xl font-medium leading-snug tracking-tight md:text-4xl md:leading-snug"
      >
        {words.map((w, i) => (
          <Word
            key={`${w}-${i}`}
            progress={scrollYProgress}
            range={[i / words.length, (i + 1) / words.length]}
          >
            {w}
          </Word>
        ))}
      </p>

      <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-3">
        {about.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2 bg-background p-8 md:p-10">
            <span className="text-4xl font-medium tracking-tight md:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
