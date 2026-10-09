"use client";

import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";
import { buildMailtoUrl } from "@/lib/mailto";
import { Highlight } from "@/components/ui/highlight";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardBody } from "@/components/ui/card";
import { SectionHead } from "@/components/section-head";
import { CtaPanel } from "@/components/cta-panel";

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

export function ContactSection() {
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const href = buildMailtoUrl({
      to: site.email,
      name: String(data.get("name") ?? ""),
      fromEmail: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    });
    setStatus("Opening your email app.");
    window.location.href = href;
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="mt-16 scroll-mt-24 sm:mt-20">
      <SectionHead id="contact-heading" title="Contact">
        Have a cloud, infrastructure, or <Highlight>software project</Highlight> in mind?
      </SectionHead>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardBody className="p-5 sm:p-6">
            <form onSubmit={onSubmit} className="grid gap-5" aria-describedby="contact-note">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name">
                  <Input name="name" required autoComplete="name" placeholder="Your name" />
                </Field>
                <Field label="Email">
                  <Input
                    name="email"
                    type="email"
                    inputMode="email"
                    required
                    autoComplete="email"
                    spellCheck={false}
                    placeholder="you@company.com"
                  />
                </Field>
              </div>
              <Field label="Message">
                <Textarea
                  name="message"
                  required
                  rows={6}
                  autoComplete="off"
                  placeholder="Tell me about the infrastructure, cloud, or application work."
                />
              </Field>
              <div className="flex flex-wrap items-center gap-4">
                <Button type="submit">Send message</Button>
                <p id="contact-note" className="text-xs text-neutral-500 dark:text-neutral-400">
                  Opens your email app. Nothing is stored.
                </p>
              </div>
              <p aria-live="polite" className="min-h-5 text-sm text-neutral-600 dark:text-neutral-300">
                {status}
              </p>
            </form>
          </CardBody>
        </Card>

        <ul aria-label="Contact links" className="grid gap-3">
          {links.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="block rounded-xl outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                <Card>
                  <CardBody className="flex-row items-center gap-4">
                    <item.icon className="size-5 shrink-0 text-neutral-500" aria-hidden="true" />
                    <span className="min-w-0">
                      <span className="block text-sm font-medium">{item.label}</span>
                      <span className="block truncate text-sm text-neutral-500 dark:text-neutral-400" translate="no">
                        {item.detail}
                      </span>
                    </span>
                  </CardBody>
                </Card>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <CtaPanel
        className="mt-10"
        heading="Open to the next role"
        tagline="Cloud infrastructure, disaster recovery, or a product that needs both operations and application work."
        action={{ label: "Email me", href: site.socials.email }}
      />
    </section>
  );
}
