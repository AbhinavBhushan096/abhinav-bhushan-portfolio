"use client";

import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { lifecycle } from "@/data/lifecycle";
import { useHoverGroup } from "@/hooks/useHoverGroup";
import { Section } from "@/components/layout/Section";
import { Expandable } from "@/components/ui/Expandable";

function StepCard({
  item,
  index,
  open,
}: {
  item: (typeof lifecycle)[number];
  index: number;
  open?: boolean;
}) {
  return (
    <div className="card-surface interactive flex w-full min-w-0 flex-col rounded-xl p-5 hover:border-[var(--accent)]">
      <p className="font-mono text-xs text-[var(--accent)]">
        {(index + 1).toString().padStart(2, "0")}
      </p>
      <h3 className="mt-2 text-base font-semibold tracking-wide text-[var(--text)]">{item.step}</h3>
      <Expandable
        open={open}
        label={`${item.step} details`}
        details={
          <p className="pt-2 text-sm leading-6 text-[var(--text-muted)]">{item.description}</p>
        }
      >
        <span className="sr-only">{item.description}</span>
      </Expandable>
    </div>
  );
}

export function HowIWork() {
  const { open, bind } = useHoverGroup();

  return (
    <Section
      id="how-i-work"
      eyebrow="02 — Approach"
      title="How I Work"
      description="Plan, architect, build, deploy, automate, monitor, back up, and recover."
    >
      <ol className="flex flex-col md:hidden" aria-label="Engineering lifecycle">
        {lifecycle.map((item, index) => (
          <li key={item.step} className="flex flex-col items-center">
            <StepCard item={item} index={index} />
            {index < lifecycle.length - 1 ? (
              <div className="flex flex-col items-center py-2 text-[var(--accent)]" aria-hidden="true">
                <span className="h-3 w-px bg-[var(--border-strong)]" />
                <ArrowDown className="h-4 w-4" strokeWidth={2.5} />
              </div>
            ) : null}
          </li>
        ))}
      </ol>

      <ol
        className="hidden grid-cols-4 gap-x-6 gap-y-10 md:grid"
        aria-label="Engineering lifecycle"
        {...bind}
      >
        {lifecycle.map((item, index) => {
          const isLast = index === lifecycle.length - 1;
          const secondRow = index >= 4;
          const order = secondRow ? 4 + (7 - index) : index;
          const turnsDown = index === 3;
          return (
            <li key={item.step} style={{ order }} className="relative flex min-w-0 items-stretch">
              <StepCard item={item} index={index} open={open} />
              {!secondRow && !turnsDown ? (
                <span
                  className="absolute -right-[1.125rem] top-1/2 z-10 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--bg)] text-[var(--accent)]"
                  aria-hidden="true"
                >
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
              ) : null}
              {turnsDown ? (
                <span
                  className="absolute -bottom-8 left-1/2 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--bg)] text-[var(--accent)]"
                  aria-hidden="true"
                >
                  <ArrowDown className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
              ) : null}
              {secondRow && !isLast ? (
                <span
                  className="absolute -left-[1.125rem] top-1/2 z-10 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--bg)] text-[var(--accent)]"
                  aria-hidden="true"
                >
                  <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
