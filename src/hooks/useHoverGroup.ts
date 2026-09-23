"use client";

import { useState, type FocusEvent, type HTMLAttributes } from "react";

type HoverBind = Pick<
  HTMLAttributes<HTMLElement>,
  | "onMouseEnter"
  | "onMouseLeave"
  | "onPointerEnter"
  | "onPointerLeave"
  | "onFocusCapture"
  | "onBlurCapture"
>;

function supportsHover() {
  return (
    window.matchMedia("(hover: hover)").matches &&
    window.matchMedia("(min-width: 768px)").matches
  );
}

export function useHoverGroup() {
  const [open, setOpen] = useState(false);

  const bind: HoverBind = {
    onMouseEnter: () => {
      if (supportsHover()) setOpen(true);
    },
    onMouseLeave: () => {
      if (supportsHover()) setOpen(false);
    },
    onPointerEnter: () => {
      if (supportsHover()) setOpen(true);
    },
    onPointerLeave: () => {
      if (supportsHover()) setOpen(false);
    },
    onFocusCapture: () => {
      if (supportsHover()) setOpen(true);
    },
    onBlurCapture: (event: FocusEvent<HTMLElement>) => {
      if (!supportsHover()) return;
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
        setOpen(false);
      }
    },
  };

  return { open, bind };
}
