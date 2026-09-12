import { contact, site } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { CopyEmail } from "@/components/ui/copy-email";
import { Magnetic } from "@/components/ui/magnetic";
import { ArrowUpRight, GitHubIcon, LinkedInIcon, XIcon } from "@/components/ui/icons";

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
} as const;

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28 md:py-40">
      <SectionHeading index="05" title="Contact" />

      <Reveal delay={0.1}>
        <h3 className="mt-16 text-[clamp(2.4rem,6.5vw,5.5rem)] font-medium leading-[1.05] tracking-[-0.03em]">
          {contact.heading[0]}
          <br />
          <span className="font-serif italic font-normal text-accent">{contact.heading[1]}</span>
        </h3>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mt-8 max-w-xl leading-relaxed text-muted">{contact.blurb}</p>
      </Reveal>

      <Reveal delay={0.3} className="mt-12">
        <Magnetic strength={0.2}>
          <CopyEmail email={site.email} />
        </Magnetic>
      </Reveal>

      <Reveal delay={0.4}>
        <div className="mt-16 flex items-center gap-5">
          {site.socials.map((social) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap];
            return (
              <Magnetic key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </Magnetic>
            );
          })}
          <a
            href={`mailto:${site.email}`}
            className="group ml-2 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-300 hover:text-foreground"
          >
            Open mail app
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
