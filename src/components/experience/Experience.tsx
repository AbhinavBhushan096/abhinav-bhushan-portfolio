"use client";

import { Briefcase, MapPin } from "lucide-react";
import { experience } from "@/data/experience";
import { companyTenure, formatDuration, formatPeriod, monthsBetween } from "@/lib/dates";
import { Section } from "@/components/layout/Section";
import { Expandable } from "@/components/ui/Expandable";
import { Tag } from "@/components/ui/Tag";

export function Experience() {
  const tenure = companyTenure(experience.roles);

  return (
    <Section
      id="experience"
      eyebrow="03 — Experience"
      title="Cloud Operations & Client Solutions"
      description="Hands-on cloud infrastructure, technical operations, and client-facing solution work."
    >
      <ol className="relative space-y-8 border-l border-[var(--border-strong)] pl-8 md:pl-12">
        <li className="relative">
          <span
            className="absolute -left-[2.55rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] md:-left-[3.55rem]"
            aria-hidden="true"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
          </span>

          <div className="min-w-0">
            <h3 className="text-2xl font-semibold tracking-tight text-[var(--text)]">
              {experience.company.name}
            </h3>
            <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[var(--text-muted)]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {experience.company.location}
              </span>
              <span className="inline-flex items-center gap-1.5 tabular" suppressHydrationWarning>
                <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                {tenure}
              </span>
            </p>
          </div>

          <ol className="mt-6 space-y-4">
            {experience.roles.map((role) => {
              const current = role.end === null;
              return (
                <li
                  key={role.title}
                  className={
                    current
                      ? "card-surface interactive min-w-0 rounded-2xl border-[var(--border-strong)] p-5 hover:border-[var(--accent)] md:p-6"
                      : "interactive min-w-0 rounded-2xl border border-[var(--border)] p-5 hover:border-[var(--border-strong)] md:p-6"
                  }
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h4 className="text-lg font-semibold text-[var(--text)]">{role.title}</h4>
                      <p className="mt-1 text-sm text-[var(--text-muted)]">
                        {role.type}
                        <span className="mx-2" aria-hidden="true">
                          ·
                        </span>
                        <span className="tabular">{formatPeriod(role.start, role.end)}</span>
                        <span className="mx-2" aria-hidden="true">
                          ·
                        </span>
                        <span className="tabular" suppressHydrationWarning>
                          {formatDuration(monthsBetween(role.start, role.end))}
                        </span>
                      </p>
                    </div>
                    {current ? (
                      <span className="rounded-full border border-[var(--success)]/40 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-[var(--success)]">
                        Current
                      </span>
                    ) : null}
                  </div>

                  <Expandable
                    label={`More about ${role.title}`}
                    details={
                      <ul className="mt-3 space-y-2">
                        {role.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm leading-6 text-[var(--text-muted)]"
                          >
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
                    <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{role.summary}</p>
                    <ul
                      aria-label={`Technologies used as ${role.title}`}
                      className="mt-4 flex flex-wrap gap-2"
                    >
                      {role.tags.map((tag) => (
                        <li key={tag}>
                          <Tag>{tag}</Tag>
                        </li>
                      ))}
                    </ul>
                  </Expandable>
                </li>
              );
            })}
          </ol>
        </li>
      </ol>
    </Section>
  );
}
