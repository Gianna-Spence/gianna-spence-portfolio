"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isNavigationItemActive, navigationItems } from "@/src/content/navigation";

export default function NavigationMenu() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1" aria-label="Primary navigation">
      {navigationItems.map((item) => {
        const isActive = isNavigationItemActive(pathname, item);

        return (
          <Link
            key={`${item.path}-${item.label}`}
            href={item.path}
            aria-current={isActive ? "page" : undefined}
            className={`group relative py-2 pl-4 font-mono text-[0.6875rem] uppercase tracking-[0.18em] whitespace-nowrap transition-colors duration-200 ${
              isActive ? "text-white" : "text-white/55 hover:text-white"
            }`}
          >
            {isActive && (
              <span className="absolute left-0 top-1/2 h-5 w-px -translate-y-1/2 bg-cyan-300" />
            )}
            <span className="mr-2 opacity-50">{item.number}</span>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
