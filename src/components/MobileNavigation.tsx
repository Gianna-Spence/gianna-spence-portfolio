"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import MobileSigilTrigger from "@/src/components/MobileSigilTrigger";
import { isNavigationItemActive, navigationItems } from "@/src/content/navigation";

const focusableSelector = 'a[href], button:not([disabled])';

export default function MobileNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const triggerElement = triggerRef.current;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => firstLinkRef.current?.focus(), 200);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !overlayRef.current) return;
      const focusableElements = Array.from(
        overlayRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      );
      if (focusableElements.length === 0) return;
      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      window.setTimeout(() => {
        if (previouslyFocused && document.contains(previouslyFocused)) previouslyFocused.focus();
        else triggerElement?.focus();
      }, 0);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="mobile-navigation-header">
        <Link href="/" aria-label="Home" className="mobile-navigation-header__brand">
          <span className="label-mono">G.S / FIELD NOTES</span>
        </Link>
        <MobileSigilTrigger ref={triggerRef} open={open} onClick={() => setOpen((current) => !current)} />
      </header>

      <div
        ref={overlayRef}
        id="mobile-navigation-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`mobile-navigation-overlay${open ? " is-open" : ""}`}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        <div className="mobile-navigation-overlay__sigil" aria-hidden="true">
          <span className="mobile-navigation-overlay__sigil-wash" />
          <ProfessionalSigilBackdrop />
        </div>
        <nav className="mobile-navigation-overlay__content" aria-label="Primary navigation">
          <div className="mobile-navigation-overlay__section">
            <span className="label-mono mobile-navigation-overlay__section-label">Professional</span>
            <div className="mobile-navigation-overlay__links">
              {navigationItems.map((item, index) => {
                const active = isNavigationItemActive(pathname, item);
                return (
                  <Link
                    key={`${item.path}-${item.label}`}
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.path}
                    aria-current={active ? "page" : undefined}
                    onClick={closeMenu}
                    className={`mobile-navigation-overlay__link${active ? " is-active" : ""}`}
                  >
                    <span className="label-mono">{item.number} /</span>
                    <span className="heading-serif">{item.label[0] + item.label.slice(1).toLowerCase()}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mobile-navigation-overlay__section mobile-navigation-overlay__section--secondary">
            <span className="label-mono mobile-navigation-overlay__section-label">Personal</span>
            <Link href="/personal" onClick={closeMenu} className="mobile-navigation-overlay__secondary-link heading-serif">
              Personal
            </Link>
          </div>

          <div className="mobile-navigation-overlay__section mobile-navigation-overlay__section--secondary">
            <span className="label-mono mobile-navigation-overlay__section-label">Studio</span>
            <Link href="/studio" onClick={closeMenu} className="mobile-navigation-overlay__secondary-link heading-serif">
              Studio
            </Link>
            <Link href="/studio/settings" onClick={closeMenu} className="mobile-navigation-overlay__settings label-mono">
              Settings
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

function ProfessionalSigilBackdrop() {
  return <Image src="/assets/professional-sigil-master.svg" alt="" width={1100} height={1430} draggable={false} />;
}
