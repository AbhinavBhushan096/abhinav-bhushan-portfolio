import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { lifecycle } from "@/data/lifecycle";
import { Highlight } from "@/components/ui/highlight";
import { SectionHead } from "@/components/section-head";

const desktopPlace = [
  "lg:col-start-1 lg:row-start-1",
  "lg:col-start-2 lg:row-start-1",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-4 lg:row-start-1",
  "lg:col-start-4 lg:row-start-2",
  "lg:col-start-3 lg:row-start-2",
  "lg:col-start-2 lg:row-start-2",
  "lg:col-start-1 lg:row-start-2",
] as const;

function sentenceStep(step: string) {
  const lower = step.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

function Connector({ index, last }: { index: number; last: boolean }) {
  if (last) return null;

  const down = (
    <span className="pointer-events-none absolute top-full left-1/2 flex h-10 -translate-x-1/2 flex-col items-center text-neutral-400 lg:hidden" aria-hidden="true">
      <span className="w-px flex-1 bg-card-edge" />
      <ArrowDown className="size-3.5 shrink-0" />
    </span>
  );

  if (index < 3) {
    return (
      <>
        {down}
        <span className="pointer-events-none absolute top-1/2 left-full hidden w-8 -translate-y-1/2 items-center text-neutral-400 lg:flex" aria-hidden="true">
          <span className="h-px flex-1 bg-card-edge" />
          <ArrowRight className="size-3.5 shrink-0" />
        </span>
      </>
    );
  }

  if (index === 3) {
    return (
      <>
        {down}
        <span className="pointer-events-none absolute top-full left-1/2 hidden h-12 -translate-x-1/2 flex-col items-center text-neutral-400 lg:flex" aria-hidden="true">
          <span className="w-px flex-1 bg-card-edge" />
          <ArrowDown className="size-3.5 shrink-0" />
        </span>
      </>
    );
  }

  return (
    <>
      {down}
      <span className="pointer-events-none absolute top-1/2 right-full hidden w-8 -translate-y-1/2 items-center text-neutral-400 lg:flex" aria-hidden="true">
        <ArrowLeft className="size-3.5 shrink-0" />
        <span className="h-px flex-1 bg-card-edge" />
      </span>
    </>
  );
}

export function WorkSection() {
  const last = lifecycle.length - 1;

  return (
    <section id="work" aria-labelledby="work-heading" className="mt-16 scroll-mt-24 sm:mt-20">
      <SectionHead id="work-heading" title="How I work">
        From the first requirement through failover, with <Highlight>recovery objectives</Highlight> kept in the plan.
      </SectionHead>

      <ol className="mt-8 grid grid-cols-1 gap-y-10 lg:grid-cols-4 lg:grid-rows-2 lg:gap-x-8 lg:gap-y-12">
        {lifecycle.map((item, index) => (
          <li
            key={item.step}
            className={`relative motion-safe:animate-chai-fade motion-safe:[animation-fill-mode:both] ${desktopPlace[index]}`}
            style={{ animationDelay: `${index * 40}ms` }}
          >
            <article className="card-chai flex h-full flex-col p-4">
              <p className="font-mono text-xs text-neutral-500 tabular-nums dark:text-neutral-400">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-montserrat text-base font-semibold">{sentenceStep(item.step)}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{item.description}</p>
              {index === last ? (
                <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">Feeds the next plan.</p>
              ) : null}
            </article>
            <Connector index={index} last={index === last} />
          </li>
        ))}
      </ol>
    </section>
  );
}
