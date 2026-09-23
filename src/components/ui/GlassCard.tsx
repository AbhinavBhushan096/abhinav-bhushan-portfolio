import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
  emphasis = false,
}: {
  children: React.ReactNode;
  className?: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className={cn(
        "card-surface interactive min-w-0 rounded-2xl p-6",
        emphasis ? "border-[var(--border-strong)]" : "",
        className,
      )}
    >
      {children}
    </div>
  );
}
