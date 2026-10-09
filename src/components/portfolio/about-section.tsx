import { about } from "@/data/about";
import { Highlight } from "@/components/ui/highlight";
import { Chip } from "@/components/ui/chip";
import { SectionHead } from "@/components/section-head";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mt-16 scroll-mt-24 sm:mt-20">
      <SectionHead id="about-heading" title="About">
        {about.intro.split("reliable cloud environments")[0]}
        <Highlight>reliable cloud environments</Highlight>
        {about.intro.split("reliable cloud environments")[1]}
      </SectionHead>

      <p className="mt-6 max-w-3xl text-sm leading-6 text-neutral-700 dark:text-neutral-400">{about.education}</p>

      <ul aria-label="Focus areas" className="mt-6 flex flex-wrap gap-1.5">
        {about.focusAreas.map((area) => (
          <li key={area}>
            <Chip>{area}</Chip>
          </li>
        ))}
      </ul>
    </section>
  );
}
