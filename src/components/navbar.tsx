import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-5xl mx-auto flex items-center gap-6 px-4 py-3">
        <Link href="/" className="font-semibold">Love App</Link>
        <div className="flex gap-4 text-sm text-gray-700">
          <Link href="/tools/gift-finder" className="hover:underline">Gift Finder</Link>
          <Link href="/tools/date-ideas" className="hover:underline">Date Ideas</Link>
          <Link href="/tools/love-languages" className="hover:underline">Love Languages</Link>
        </div>
      </div>
    </nav>
  );
}
