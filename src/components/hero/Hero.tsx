"use client";

import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { assetPath } from "@/lib/utils";
import { Container } from "@/components/layout/Container";

const focus = ["Microsoft Azure", "AWS", "Disaster Recovery", "Networking", "Cost Optimization", "Automation"];

const socialLinks = [
  { href: site.socials.github, label: "GitHub", icon: Github, external: true },
  { href: site.socials.linkedin, label: "LinkedIn", icon: Linkedin, external: true },
  { href: site.socials.email, label: "Email", icon: Mail, external: false },
];

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />

      <Container className="relative py-20 md:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--bg-elevated)]/80 px-3 py-1.5 text-xs font-medium text-[var(--text-muted)] backdrop-blur">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--success)]" />
            </span>
            {site.status}
          </div>

          <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Cloud · DevOps · Infrastructure
          </p>

          <h1
            id="hero-heading"
            className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight text-[var(--text)] sm:text-6xl lg:text-7xl"
          >
            {site.name}
          </h1>

          <p className="mt-6 text-xl font-medium text-[var(--text)] sm:text-2xl">
            {site.title}
            <span className="mx-3 text-[var(--border-strong)]" aria-hidden="true">
              /
            </span>
            <span className="text-[var(--text-muted)]">{site.secondaryTitle}</span>
          </p>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-muted)] md:text-lg md:leading-8">
            {site.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="interactive focus-ring inline-flex h-12 items-center gap-2 rounded-lg bg-[var(--accent)] px-6 text-sm font-semibold text-[var(--accent-fg)] hover:bg-[var(--accent-strong)] active:scale-[0.98]"
            >
              Explore My Work
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={assetPath(site.resumePath)}
              download
              className="interactive focus-ring inline-flex h-12 items-center gap-2 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-elevated)]/80 px-6 text-sm font-semibold text-[var(--text)] backdrop-blur hover:border-[var(--accent)] hover:bg-[var(--bg-muted)] active:scale-[0.98]"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-1">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="interactive focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg text-[var(--text-muted)] hover:bg-[var(--bg-muted)] hover:text-[var(--text)] active:scale-95"
              >
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          aria-label="Focus areas"
          className="mt-14 flex flex-wrap gap-2 border-t border-[var(--border)] pt-8"
        >
          {focus.map((item) => (
            <li
              key={item}
              className="rounded-md border border-[var(--border)] bg-[var(--bg-elevated)]/60 px-3 py-1.5 font-mono text-xs text-[var(--text-muted)]"
            >
              {item}
            </li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
