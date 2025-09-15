import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-rose-100">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold text-rose-900">
          <span aria-hidden className="text-rose-600">♥</span>
          Love App
        </Link>
        <div className="flex gap-3 text-sm">
          <Link href="/tools/gift-finder" className="btn-ghost">Gift Finder</Link>
          <Link href="/tools/date-ideas" className="btn-ghost">Date Ideas</Link>
          <Link href="/tools/love-languages" className="btn-ghost">Love Languages</Link>
        </div>
      </div>
    </nav>
  );
}
