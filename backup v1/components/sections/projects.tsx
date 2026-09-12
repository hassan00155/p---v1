import type { CSSProperties } from "react";
import { projects, type Project } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { Magnetic } from "@/components/ui/magnetic";
import { ArrowUpRight } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

function artStyle(hue: number) {
  return {
    backgroundImage: `radial-gradient(120% 90% at 80% 10%, hsl(${hue} 70% 55% / 0.22), transparent 55%),
      radial-gradient(90% 90% at 15% 85%, hsl(${hue + 40} 65% 45% / 0.16), transparent 60%),
      linear-gradient(160deg, hsl(${hue} 30% 96%), hsl(${hue} 25% 88%))`,
    darkImage: `radial-gradient(120% 90% at 80% 10%, hsl(${hue} 70% 55% / 0.25), transparent 55%),
      radial-gradient(90% 90% at 15% 85%, hsl(${hue + 40} 65% 45% / 0.18), transparent 60%),
      linear-gradient(160deg, hsl(${hue} 20% 10%), hsl(${hue} 16% 6%))`,
  };
}

function ArtPanel({ project, large }: { project: Project; large?: boolean }) {
  const styles = artStyle(project.hue);
  return (
    <div
      data-art-panel
      style={
        {
          backgroundImage: styles.backgroundImage,
          "--panel-dark": styles.darkImage,
        } as CSSProperties
      }
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-2xl border border-hairline",
        large ? "aspect-[16/10]" : "aspect-[16/9]",
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none select-none font-serif italic leading-none text-foreground/10 dark:text-foreground/10"
        style={{ fontSize: large ? "9rem" : "5rem" }}
      >
        {project.title.charAt(0)}
      </span>
      <span
        aria-hidden
        className="absolute left-5 top-5 font-mono text-xs uppercase tracking-[0.25em] text-muted"
      >
        {project.year}
      </span>
    </div>
  );
}

function ProjectLinks({ links }: { links: Project["links"] }) {
  return (
    <div className="flex items-center gap-3">
      <Magnetic>
        <a
          href={links.live}
          target="_blank"
          rel="noreferrer"
          aria-label="View live site"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
        >
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </Magnetic>
      <Magnetic>
        <a
          href={links.source}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-foreground"
        >
          Source
        </a>
      </Magnetic>
    </div>
  );
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const flipped = index % 2 === 1;
  return (
    <Reveal>
      <article className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
        <TiltCard className={cn("md:col-span-7", flipped && "md:order-2")}>
          <div data-hover>
            <ArtPanel project={project} large />
          </div>
        </TiltCard>
        <div className={cn("md:col-span-5", flipped && "md:order-1")}>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Featured &mdash; 0{index + 1}
          </p>
          <h3 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.15em] text-muted">
            {project.tags.map((tag) => (
              <li key={tag} className="border-b border-hairline pb-1">
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ProjectLinks links={project.links} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28 md:py-40">
      <SectionHeading index="03" title="Selected work" />

      <div className="mt-16 flex flex-col gap-24 md:gap-32">
        {projects.featured.map((project, index) => (
          <FeaturedProject key={project.title} project={project} index={index} />
        ))}
      </div>

      <div className="mt-28 grid gap-6 md:mt-36 md:grid-cols-2">
        {projects.others.map((project, index) => (
          <Reveal key={project.title} delay={(index % 2) * 0.1}>
            <article
              data-hover
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline transition-colors duration-300 hover:border-accent/50"
            >
              <ArtPanel project={project} />
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-medium tracking-tight">{project.title}</h3>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
