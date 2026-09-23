import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[var(--accent)] text-[var(--accent-fg)] hover:bg-[var(--accent-strong)] active:bg-[var(--accent-strong)]",
    secondary:
      "border border-[var(--border-strong)] bg-[var(--bg-elevated)] text-[var(--text)] hover:border-[var(--accent)] hover:bg-[var(--bg-muted)]",
    ghost: "text-[var(--text-muted)] hover:bg-[var(--bg-muted)] hover:text-[var(--text)]",
  };

  return (
    <button
      className={cn(
        "interactive focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
