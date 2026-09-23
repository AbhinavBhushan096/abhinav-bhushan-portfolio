const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

type YearMonth = { year: number; month: number };

function parseMonth(iso: string): YearMonth {
  const [year, month] = iso.split("-").map(Number);
  return { year, month };
}

function currentMonth(now = new Date()): string {
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

function labelMonth(iso: string): string {
  const { year, month } = parseMonth(iso);
  return `${MONTHS[month - 1]} ${year}`;
}

/** Inclusive month span, LinkedIn-style. `end` null = through the current month. */
export function monthsBetween(start: string, end: string | null, now = new Date()): number {
  const from = parseMonth(start);
  const to = parseMonth(end ?? currentMonth(now));
  const span = (to.year - from.year) * 12 + (to.month - from.month) + 1;
  return Math.max(1, span);
}

export function formatDuration(months: number): string {
  if (months < 12) return months === 1 ? "1 mo" : `${months} mos`;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const yearLabel = years === 1 ? "1 yr" : `${years} yrs`;
  if (rest === 0) return yearLabel;
  const monthLabel = rest === 1 ? "1 mo" : `${rest} mos`;
  return `${yearLabel} ${monthLabel}`;
}

export function formatPeriod(start: string, end: string | null): string {
  return `${labelMonth(start)} – ${end ? labelMonth(end) : "Present"}`;
}

export function companyTenure(
  roles: readonly { start: string; end: string | null }[],
  now = new Date(),
): string {
  const start = roles.reduce((min, role) => (role.start < min ? role.start : min), roles[0].start);
  const hasPresent = roles.some((role) => role.end === null);
  const end = hasPresent
    ? null
    : roles.reduce((max, role) => {
        if (role.end === null) return max;
        return role.end > max ? role.end : max;
      }, roles[0].end ?? roles[0].start);
  return formatDuration(monthsBetween(start, end, now));
}
