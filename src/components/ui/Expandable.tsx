"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Expandable({
  children,
  details,
  label = "Show more",
  className,
  open: groupOpen,
  hideTrigger = false,
}: {
  children: ReactNode;
  details: ReactNode;
  label?: string;
  className?: string;
  open?: boolean;
  hideTrigger?: boolean;
}) {
  const [localOpen, setLocalOpen] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const grouped = groupOpen !== undefined;
  const open = grouped ? Boolean(groupOpen) || localOpen : localOpen;

  useEffect(() => {
    const media = window.matchMedia("(hover: none)");
    const update = () => setIsTouch(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  function expand() {
    if (grouped || isTouch) return;
    setLocalOpen(true);
  }

  function collapse() {
    if (grouped || isTouch) return;
    setLocalOpen(false);
  }

  return (
    <div
      className={cn("min-w-0", className)}
      onMouseEnter={expand}
      onMouseLeave={collapse}
      onFocusCapture={expand}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          collapse();
        }
      }}
    >
      {children}
      {hideTrigger ? null : (
        <button
          type="button"
          aria-expanded={open}
          aria-label={label}
          onClick={() => setLocalOpen((value) => !value)}
          className="interactive focus-ring mt-3 inline-flex h-8 items-center gap-1 rounded-md text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text)]"
        >
          More
          <ChevronDown
            className={cn("h-3.5 w-3.5 transition-transform duration-200", open && "rotate-180")}
            aria-hidden="true"
          />
        </button>
      )}
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-w-0 overflow-hidden">{details}</div>
      </div>
    </div>
  );
}
