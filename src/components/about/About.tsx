"use client";

import { GraduationCap } from "lucide-react";
import { about } from "@/data/about";
import { Section } from "@/components/layout/Section";
import { Tag } from "@/components/ui/Tag";

export function About() {
  return (
    <Section id="about" eyebrow="01 — Profile" title={about.title}>
      <p className="max-w-3xl text-lg leading-8 text-[var(--text)]">{about.intro}</p>

      <div className="mt-6 flex max-w-3xl items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
          <GraduationCap className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">
            Education
          </p>
          <p className="mt-1 text-sm font-medium leading-6 text-[var(--text)]">{about.education}</p>
        </div>
      </div>

      <ul aria-label="Focus areas" className="mt-6 flex flex-wrap gap-2">
        {about.focusAreas.map((area) => (
          <li key={area}>
            <Tag>{area}</Tag>
          </li>
        ))}
      </ul>
    </Section>
  );
}
