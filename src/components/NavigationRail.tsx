"use client";

import NavigationFooter from "@/src/components/NavigationFooter";
import NavigationMenu from "@/src/components/NavigationMenu";

export default function NavigationRail({ sigilDocked = false }: { sigilDocked?: boolean }) {
  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden h-screen w-56 flex-col border-r border-white/10 px-8 py-10 lg:flex">
      <div className={sigilDocked ? "pt-48" : undefined}>
        <NavigationMenu />
      </div>
      <NavigationFooter />
    </aside>
  );
}