"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import MobileNavigation from "@/src/components/MobileNavigation";
import NavigationRail from "@/src/components/NavigationRail";
import ProfessionalSigil from "@/src/components/ProfessionalSigil";

type ApplicationShellProps = {
  children: ReactNode;
};

export default function ApplicationShell({ children }: ApplicationShellProps) {
  const [heroPassed, setHeroPassed] = useState(false);

  useEffect(() => {
    const updateHeroState = () => {
      setHeroPassed(window.scrollY >= window.innerHeight * 0.8);
    };

    updateHeroState();
    window.addEventListener("scroll", updateHeroState, { passive: true });
    window.addEventListener("resize", updateHeroState);

    return () => {
      window.removeEventListener("scroll", updateHeroState);
      window.removeEventListener("resize", updateHeroState);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0b] text-white">
      <NavigationRail sigilDocked={heroPassed} />
      <MobileNavigation />
      <div className={`professional-sigil-frame${heroPassed ? " professional-sigil-frame--docked" : ""}`}>
        <ProfessionalSigil />
      </div>
      <main className="min-h-screen px-6 pb-12 pt-28 lg:pl-72 lg:pr-16 lg:pt-20">{children}</main>
    </div>
  );
}
