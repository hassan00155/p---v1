import { stack } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";

export function StackSection() {
  return (
    <section id="stack" className="py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="02" title="Toolbox" />
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-muted">
            The technologies I reach for daily — battle-tested on real products, real users,
            real deadlines.
          </p>
        </Reveal>

        <div className="mt-16">
          {stack.categories.map((category, categoryIndex) => (
            <Reveal key={category.title} delay={categoryIndex * 0.08}>
              <div className="grid grid-cols-1 gap-4 border-t border-hairline py-8 md:grid-cols-12 md:gap-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-accent md:col-span-3">
                  {category.title}
                </h3>
                <ul className="flex flex-wrap items-baseline gap-x-6 gap-y-2 md:col-span-9">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="text-xl font-medium tracking-tight text-muted transition-colors duration-300 hover:text-foreground md:text-2xl"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-hairline" />
        </div>
      </div>

      <div className="mt-24">
        <Marquee items={stack.marquee} />
      </div>
    </section>
  );
}
