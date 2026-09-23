import { cn } from "@/lib/utils";

export function TerminalPanel({
  title,
  children,
  className,
  id,
  labelledBy,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  return (
    <div
      id={id}
      role={labelledBy ? "tabpanel" : undefined}
      aria-labelledby={labelledBy}
      tabIndex={labelledBy ? 0 : undefined}
      className={cn("panel-surface focus-ring overflow-hidden rounded-2xl", className)}
    >
      <div className="flex items-center gap-3 border-b border-[var(--border)] bg-[var(--bg-muted)]/40 px-5 py-4">
        <span className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
        <span className="text-sm font-semibold text-[var(--text)]">{title}</span>
      </div>
      <div className="p-5 md:p-6">{children}</div>
    </div>
  );
}
