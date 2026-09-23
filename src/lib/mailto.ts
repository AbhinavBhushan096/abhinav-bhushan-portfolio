export function buildMailtoUrl({
  to,
  name,
  fromEmail,
  message,
}: {
  to: string;
  name: string;
  fromEmail: string;
  message: string;
}) {
  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${fromEmail}\n\n${message}`,
  );
  return `mailto:${to}?subject=${subject}&body=${body}`;
}
