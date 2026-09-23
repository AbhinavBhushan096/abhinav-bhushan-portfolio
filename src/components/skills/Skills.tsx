"use client";

import { useState } from "react";
import {
  awsSkills,
  azureSkills,
  backupDrSkills,
  devopsSkills,
  monitoringSkills,
  networkingSkills,
} from "@/data/skills";
import { useHoverGroup } from "@/hooks/useHoverGroup";
import { Section } from "@/components/layout/Section";
import { Expandable } from "@/components/ui/Expandable";
import { SkillIconGrid } from "@/components/ui/SkillIcon";

const groups = [
  { title: "Microsoft Azure", items: azureSkills, primary: true },
  { title: "AWS", items: awsSkills, primary: false },
  { title: "DevOps", items: devopsSkills, primary: false },
  { title: "Networking", items: networkingSkills, primary: false },
  { title: "Monitoring", items: monitoringSkills, primary: false },
  { title: "Backup & DR", items: backupDrSkills, primary: false },
] as const;

function SkillGroup({
  group,
  groupOpen,
}: {
  group: (typeof groups)[number];
  groupOpen: boolean;
}) {
  const [tapped, setTapped] = useState(false);
  const open = groupOpen || tapped;

  return (
    <Expandable
      open={open}
      hideTrigger
      details={
        <div className="pt-3">
          <SkillIconGrid items={group.items} label={`${group.title} skills`} />
        </div>
      }
    >
      <h3>
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setTapped((value) => !value)}
          className="interactive focus-ring flex w-full items-center gap-2 rounded-md py-1 text-left text-sm font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]"
        >
          {group.title}
          {group.primary ? (
            <span className="rounded-full bg-[var(--accent-soft)] px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[var(--accent)]">
              Primary
            </span>
          ) : null}
          <span className="h-px flex-1 bg-[var(--border)]" aria-hidden="true" />
        </button>
      </h3>
    </Expandable>
  );
}

export function Skills() {
  const { open, bind } = useHoverGroup();

  return (
    <Section
      id="skills"
      eyebrow="04 — Cloud & Infrastructure"
      title="Cloud & Infrastructure"
      description="Azure first, then AWS, automation, networking, observability, and recovery."
    >
      <div className="space-y-5" {...bind}>
        {groups.map((group) => (
          <SkillGroup key={group.title} group={group} groupOpen={open} />
        ))}
      </div>
    </Section>
  );
}
