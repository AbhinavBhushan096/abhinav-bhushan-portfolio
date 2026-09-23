"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { assetPath, cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Container } from "./Container";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "interactive sticky top-0 z-20 border-b",
        scrolled
          ? "border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md supports-[backdrop-filter]:bg-[var(--bg)]/70"
          : "border-transparent bg-[var(--bg)]",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#home"
          className="focus-ring interactive inline-flex h-11 items-center gap-2 rounded-md text-sm font-semibold tracking-tight text-[var(--text)]"
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--accent)] font-mono text-xs font-bold text-[var(--accent-fg)]"
            aria-hidden="true"
          >
            AB
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        <div className="flex items-center gap-1">
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="interactive focus-ring inline-flex h-10 items-center rounded-md px-3 text-sm text-[var(--text-muted)] hover:bg-[var(--bg-muted)] hover:text-[var(--text)] active:scale-[0.98]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={assetPath(site.resumePath)}
            download
            className="interactive focus-ring ml-1 hidden h-10 items-center gap-2 rounded-md border border-[var(--border-strong)] px-3 text-sm font-medium text-[var(--text)] hover:border-[var(--accent)] hover:bg-[var(--bg-muted)] active:scale-[0.98] sm:inline-flex"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Resume
          </a>

          <ThemeToggle />

          <button
            type="button"
            className="interactive focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md text-[var(--text)] hover:bg-[var(--bg-muted)] active:scale-95 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-[var(--border)] bg-[var(--bg)] lg:hidden"
      >
        <Container className="flex flex-col gap-1 py-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="interactive focus-ring flex h-11 items-center rounded-md px-3 text-sm text-[var(--text-muted)] hover:bg-[var(--bg-muted)] hover:text-[var(--text)]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={assetPath(site.resumePath)}
            download
            className="interactive focus-ring flex h-11 items-center gap-2 rounded-md px-3 text-sm font-medium text-[var(--text)] hover:bg-[var(--bg-muted)] sm:hidden"
            onClick={() => setOpen(false)}
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </a>
        </Container>
      </nav>
    </header>
  );
}
