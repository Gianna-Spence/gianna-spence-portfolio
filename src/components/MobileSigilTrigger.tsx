"use client";

import { forwardRef } from "react";

type MobileSigilTriggerProps = {
  open: boolean;
  onClick: () => void;
};

const MobileSigilTrigger = forwardRef<HTMLButtonElement, MobileSigilTriggerProps>(function MobileSigilTrigger({ open, onClick }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      aria-label={open ? "Close navigation" : "Open navigation"}
      aria-expanded={open}
      aria-controls="mobile-navigation-overlay"
      className="mobile-sigil-trigger"
    >
      <span className={`mobile-sigil-trigger__mark${open ? " is-open" : ""}`} aria-hidden="true">
        <svg viewBox="0 0 40 52" fill="none">
          <line x1="20" y1="4" x2="20" y2="48" />
          <ellipse cx="20" cy="26" rx="15" ry="20" />
          <ellipse cx="20" cy="26" rx="11" ry="16" transform="rotate(12 20 26)" />
          <path d="M20 22 L23 26 L20 30 L17 26 Z" />
          <circle cx="12" cy="18" r="1" />
          <circle cx="28" cy="18" r="1" />
          <circle cx="14" cy="36" r="1" />
          <circle className="mobile-sigil-trigger__node" cx="20" cy="8" r="1.9" />
          <circle className="mobile-sigil-trigger__node" cx="20" cy="44" r="1.9" />
        </svg>
      </span>
      <span className="label-mono mobile-sigil-trigger__label">MENU</span>
    </button>
  );
});

export default MobileSigilTrigger;
