import { Github, Linkedin, Mail } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { Container } from "./Container";

const socials = [
  { href: site.socials.github, label: "GitHub", icon: Github, external: true },
  { href: site.socials.linkedin, label: "LinkedIn", icon: Linkedin, external: true },
  { href: site.socials.email, label: "Email", icon: Mail, external: false },
];

export function Footer() {
  return (
    <footer className="bg-[var(--bg-elevated)]/40">
      <Container className="py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0 max-w-sm">
            <p className="text-base font-semibold text-[var(--text)]">{site.name}</p>
            <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
              {site.title}
              <span className="mx-2 text-[var(--border-strong)]" aria-hidden="true">
                /
              </span>
              {site.secondaryTitle}
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="interactive focus-ring inline-flex h-9 items-center rounded-md text-sm text-[var(--text-muted)] hover:text-[var(--text)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[var(--text-muted)]">
            © <span className="tabular">{new Date().getFullYear()}</span> {site.name}. Built for
            reliable systems.
          </p>
          <ul className="flex items-center gap-1" aria-label="Social links">
            {socials.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-label={item.label}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="interactive focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md text-[var(--text-muted)] hover:bg-[var(--bg-muted)] hover:text-[var(--text)]"
                >
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
