import { experience } from "@/data/experience";
import { companyTenure, formatDuration, formatPeriod, monthsBetween } from "@/lib/dates";
import { Highlight } from "@/components/ui/highlight";
import { Chip } from "@/components/ui/chip";
import { Card, CardBody, CardText, CardTitle } from "@/components/ui/card";
import { SectionHead } from "@/components/section-head";

export function ExperienceSection() {
  const tenure = companyTenure(experience.roles);

  return (
    <section id="experience" aria-labelledby="experience-heading" className="mt-16 scroll-mt-24 sm:mt-20">
      <SectionHead id="experience-heading" title="Experience">
        Cloud infrastructure and client solutions across <Highlight>Azure and AWS</Highlight>.
      </SectionHead>

      <p className="mt-6 text-base font-medium">{experience.company.name}</p>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        {experience.company.location}
        <span className="px-2" aria-hidden="true">
          ·
        </span>
        <span suppressHydrationWarning>{tenure}</span>
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {experience.roles.map((role) => (
          <Card key={role.title}>
            <CardBody>
              <div className="flex flex-wrap items-center gap-2">
                <Chip tone={role.end === null ? "success" : "default"}>{role.type}</Chip>
                <span className="text-xs text-neutral-500 dark:text-neutral-400" suppressHydrationWarning>
                  {formatPeriod(role.start, role.end)}
                  <span className="px-1.5" aria-hidden="true">
                    ·
                  </span>
                  {formatDuration(monthsBetween(role.start, role.end))}
                </span>
              </div>
              <CardTitle className="mt-3">{role.title}</CardTitle>
              <CardText className="line-clamp-none">{role.summary}</CardText>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                {role.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul aria-label={`${role.title} tools`} className="mt-4 flex flex-wrap gap-1.5">
                {role.tags.map((tag) => (
                  <li key={tag}>
                    <Chip>{tag}</Chip>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
