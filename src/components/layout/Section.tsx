import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  headerAside,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  headerAside?: React.ReactNode;
}) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("scroll-mt-16 border-b border-[var(--border)]", className)}
    >
      <Container className="py-12 md:py-16">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0 max-w-2xl">
            {eyebrow ? (
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                {eyebrow}
              </p>
            ) : null}
            <h2
              id={headingId}
              className="scroll-mt-20 text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl"
            >
              {title}
            </h2>
            {description ? (
              <p className="mt-4 text-base leading-7 text-[var(--text-muted)]">{description}</p>
            ) : null}
          </div>
          {headerAside ? <div className="shrink-0">{headerAside}</div> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
