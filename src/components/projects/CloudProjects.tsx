"use client";

import { ArrowRightLeft, BarChart3, TrendingDown, type LucideIcon } from "lucide-react";
import { cloudProjects } from "@/data/projects";
import { useHoverGroup } from "@/hooks/useHoverGroup";
import { Section } from "@/components/layout/Section";
import { Expandable } from "@/components/ui/Expandable";
import { Tag } from "@/components/ui/Tag";

const icons: Record<(typeof cloudProjects)[number]["id"], LucideIcon> = {
  "cost-dashboard": BarChart3,
  "cost-optimization": TrendingDown,
  migration: ArrowRightLeft,
};

export function CloudProjects() {
  const { open, bind } = useHoverGroup();

  return (
    <Section
      id="projects"
      eyebrow="05 — Projects"
      title="Cloud Delivery Work"
      description="Cost visibility, optimization, and on-prem to Azure migration."
    >
      <div className="grid gap-4 md:grid-cols-3" {...bind}>
        {cloudProjects.map((project) => {
          const headingId = `project-${project.id}`;
          const Icon = icons[project.id];
          return (
            <article
              key={project.id}
              aria-labelledby={headingId}
              className="card-surface interactive flex min-w-0 flex-col rounded-2xl p-5 hover:border-[var(--accent)] md:p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-4 font-mono text-xs uppercase tracking-wide text-[var(--text-muted)]">
                Project {project.number}
              </p>
              <h3
                id={headingId}
                className="mt-1 text-lg font-semibold tracking-tight text-[var(--text)]"
              >
                {project.title}
              </h3>
              <Expandable
                open={open}
                label={`More about ${project.title}`}
                details={
                  <ul className="mt-3 space-y-2">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--text-muted)]">
                        <span
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                          aria-hidden="true"
                        />
                        <span className="min-w-0 break-words">{item}</span>
                      </li>
                    ))}
                  </ul>
                }
              >
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{project.summary}</p>
                <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-2">
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
    </Section>
  );
}
