import Link from "next/link";

export default function NavigationFooter() {
  return (
    <footer className="mt-auto space-y-3 pt-8">
      <div className="mb-1 h-px w-8 bg-white/10" />
      <Link
        href="/personal"
        className="block py-1 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-white/55 transition-colors duration-300 hover:text-violet-300"
      >
        Personal
      </Link>
      <Link
        href="/studio"
        className="block py-1 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-white/35 transition-colors duration-300 hover:text-cyan-300"
      >
        Studio
      </Link>
      <Link
        href="/studio/settings"
        className="block py-1 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-white/35 transition-colors duration-300 hover:text-white"
      >
        Settings
      </Link>
      <span className="block font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-white/30">© 2026</span>
    </footer>
  );
}
