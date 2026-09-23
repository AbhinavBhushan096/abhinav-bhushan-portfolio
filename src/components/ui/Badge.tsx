import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "success" | "learning";
}) {
  const tones = {
    default: "border-[var(--border)] bg-[var(--bg-muted)] text-[var(--text-muted)]",
    success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    learning: "border-[var(--accent)]/30 bg-[var(--accent-soft)] text-[var(--accent)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
