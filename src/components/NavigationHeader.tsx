import Link from "next/link";

export default function NavigationHeader() {
  return (
    <header>
      <Link href="/" className="block">
        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-white/55">
          G.S / Field Notes
        </span>
      </Link>
    </header>
  );
}
