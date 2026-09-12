"use client";

import { site } from "@/content/site";
import { Magnetic } from "@/components/ui/magnetic";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          &copy; 2026 {site.name} &mdash; {site.role}
        </p>
        <p className="font-mono text-xs text-muted">
          Designed &amp; built with <span className="text-accent">Next.js</span>
        </p>
        <Magnetic strength={0.3}>
          <a
            href="#home"
            className="font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-accent"
          >
            Back to top &uarr;
          </a>
        </Magnetic>
      </div>
    </footer>
  );
}
