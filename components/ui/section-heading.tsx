import { Reveal } from "@/components/ui/reveal";

export function SectionHeading({
  index,
  title,
  className,
}: {
  index: string;
  title: string;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <div className="flex items-center gap-5">
        <span className="font-mono text-sm text-accent">/{index}</span>
        <h2 className="text-3xl font-medium tracking-tight md:text-5xl">{title}</h2>
        <span className="h-px flex-1 bg-hairline" aria-hidden />
      </div>
    </Reveal>
  );
}
