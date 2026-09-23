"use client";

import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { site } from "@/data/site";
import { buildMailtoUrl } from "@/lib/mailto";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

const inputClass =
  "interactive focus-ring mt-2 w-full rounded-lg border border-[var(--border-strong)] bg-[var(--bg)] px-4 py-3 text-base text-[var(--text)] placeholder:text-[var(--text-muted)]/70 hover:border-[var(--text-muted)] focus-visible:border-[var(--accent)]";

const links = [
  {
    href: site.socials.github,
    label: "GitHub",
    detail: "AbhinavBhushan096",
    icon: Github,
    external: true,
  },
  {
    href: site.socials.linkedin,
    label: "LinkedIn",
    detail: "abhinavbhushan-ai",
    icon: Linkedin,
    external: true,
  },
  {
    href: site.socials.email,
    label: "Email",
    detail: site.email,
    icon: Mail,
    external: false,
  },
];

export function Contact() {
  const [status, setStatus] = useState<string>("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const href = buildMailtoUrl({
      to: site.email,
      name: String(data.get("name") ?? ""),
      fromEmail: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    });
    setStatus("Opening your email client…");
    window.location.href = href;
  }

  return (
    <Section
      id="contact"
      eyebrow="07 — Contact"
      title="Let’s Build Reliable Systems"
      description="Have a cloud, infrastructure, DevOps, or software project in mind? Let’s connect."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <form
          onSubmit={onSubmit}
          className="card-surface min-w-0 rounded-2xl p-6 md:p-8"
          aria-describedby="contact-note"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="text-sm font-medium text-[var(--text)]">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                required
                autoComplete="name"
                placeholder="Jane Doe…"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="text-sm font-medium text-[var(--text)]">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                inputMode="email"
                required
                autoComplete="email"
                spellCheck={false}
                placeholder="jane@company.com…"
                className={inputClass}
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="contact-message" className="text-sm font-medium text-[var(--text)]">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={6}
              autoComplete="off"
              placeholder="Tell me about the infrastructure, cloud, or application challenge…"
              className={`${inputClass} resize-y`}
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button type="submit">
              Send Message
              <Send className="h-4 w-4" aria-hidden="true" />
            </Button>
            <p id="contact-note" className="text-xs text-[var(--text-muted)]">
              Opens your email client. No data is stored.
            </p>
          </div>
          <p aria-live="polite" className="mt-3 min-h-5 text-sm text-[var(--accent)]">
            {status}
          </p>
        </form>

        <ul className="space-y-3" aria-label="Contact links">
          {links.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="card-surface interactive focus-ring flex min-w-0 items-center gap-4 rounded-2xl p-5 hover:-translate-y-0.5 hover:border-[var(--accent)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--bg-muted)] text-[var(--text)]">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-[var(--text)]">{item.label}</span>
                  <span className="block truncate text-sm text-[var(--text-muted)]" translate="no">
                    {item.detail}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
