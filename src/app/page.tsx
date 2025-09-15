import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Love App</h1>
        <p className="text-lg text-gray-600">
          Kısa bir mini test → hediye önerileri, randevu fikirleri ve kişiye özel ipuçları.
        </p>
        <div className="flex items-center justify-center gap-3 pt-4">
          <Link href="/tools/gift-finder" className="px-5 py-3 rounded-2xl border hover:shadow">Gift Finder</Link>
          <Link href="/tools/date-ideas" className="px-5 py-3 rounded-2xl border hover:shadow">Date Ideas</Link>
          <Link href="/tools/love-languages" className="px-5 py-3 rounded-2xl border hover:shadow">Love Languages</Link>
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-3 gap-6">
        {['Top Picks', 'Yeni Fikirler', 'Bütçe Dostu'].map((title) => (
          <div key={title} className="rounded-2xl border p-5">
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-600">Roz ismini belirleyene kadar placeholder öneriler.</p>
          </div>
        ))}
      </section>

      <footer className="mt-16 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Love App. Basit, hızlı, faydalı.</p>
        <p className="mt-1">Gizlilik • Şartlar • <a className="underline" href="/affiliates">Affiliate Açıklaması</a></p>
      </footer>
    </main>
  );
}
