"use client";

import { fullstackProjects } from "@/data/projects";
import { fullstackSkills } from "@/data/skills";
import { useHoverGroup } from "@/hooks/useHoverGroup";
import { Section } from "@/components/layout/Section";
import { Expandable } from "@/components/ui/Expandable";
import { Tag } from "@/components/ui/Tag";
import { SkillIconGrid } from "@/components/ui/SkillIcon";

const fullstackStack = [
  ...fullstackSkills.frontend,
  ...fullstackSkills.backend,
  ...fullstackSkills.database,
  ...fullstackSkills.services,
];

export function FullStack() {
  const { open, bind } = useHoverGroup();

  return (
    <Section
      id="fullstack"
      eyebrow="06 — Additional Capability"
      title="Full-Stack Development"
      description="Application work that complements cloud and infrastructure."
    >
      <div className="grid gap-4 md:grid-cols-3" {...bind}>
        {fullstackProjects.map((project) => {
          const headingId = `fs-${project.id}`;
          return (
            <article
              key={project.id}
              aria-labelledby={headingId}
              className="card-surface interactive flex min-w-0 flex-col rounded-2xl p-5 hover:border-[var(--border-strong)]"
            >
              <Expandable
                open={open}
                label={`More about ${project.title}`}
                details={
                  <p className="pt-2 text-sm leading-6 text-[var(--text-muted)]">{project.summary}</p>
                }
              >
                <h3 id={headingId} className="text-lg font-semibold text-[var(--text)]">
                  {project.title}
                </h3>
                <ul aria-label="Technologies" className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <Tag>{tag}</Tag>
                    </li>
                  ))}
                </ul>
              </Expandable>
            </article>
          );
        })}
      </div>

      <div className="mt-10">
        <h3 className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
          Full-Stack stack
          <span className="h-px flex-1 bg-[var(--border)]" aria-hidden="true" />
        </h3>
        <SkillIconGrid items={fullstackStack} label="Full-Stack skills" />
      </div>
    </Section>
  );
}
