import { cn } from "@/lib/utils";
import { getSkillIcon } from "@/lib/skill-icons";

export function SkillChip({
  name,
  note,
  className,
}: {
  name: string;
  note?: string;
  className?: string;
}) {
  const Icon = getSkillIcon(name);

  return (
    <li
      className={cn(
        "interactive inline-flex h-9 min-w-0 items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] px-3 text-xs font-medium text-[var(--text)] hover:border-[var(--accent)] hover:bg-[var(--bg-muted)]",
        className,
      )}
    >
      <Icon className="h-4 w-4 shrink-0 text-[var(--text-muted)]" aria-hidden="true" />
      <span className="truncate">{name}</span>
      {note === "learning" ? (
        <span className="rounded-full bg-[var(--accent-soft)] px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[var(--accent)]">
          Learning
        </span>
      ) : null}
    </li>
  );
}

export function SkillIconGrid({
  items,
  label,
}: {
  items: readonly string[] | { name: string; note?: string }[];
  label: string;
}) {
  if (items.length === 0) {
    return <p className="text-sm text-[var(--text-muted)]">No skills listed yet.</p>;
  }

  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {items.map((item) => {
        const name = typeof item === "string" ? item : item.name;
        const note = typeof item === "string" ? undefined : item.note;
        return <SkillChip key={name} name={name} note={note} />;
      })}
    </ul>
  );
}
