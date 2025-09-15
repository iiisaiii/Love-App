import Link from 'next/link';
import { EmailCapture } from '@/components/email-capture';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="py-16 md:py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="h1">Küçük testler, büyük gülümsemeler.</h1>
          <p className="lead mt-4">
            Partnerine özel hediye önerileri ve date fikirleri. Basit, sıcak, abartısız.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link href="/tools/gift-finder" className="btn">Gift Finder’ı başlat</Link>
            <Link href="/tools/date-ideas" className="btn-ghost">Date Fikirleri</Link>
          </div>
          <div className="mt-4">
            <span className="badge">Ücretsiz • Hızlı • Reklamsız</span>
          </div>
        </div>
      </section>
      
      <section className="mt-12">
        <EmailCapture title="Haftalık 3 Date Fikri" />
      </section>


      {/* ÖZELLİKLER */}
      <section className="grid gap-6 md:grid-cols-3">
        {[
          { t:'Kişisel öneriler', d:'İlgi alanı ve bütçeye uygun hediye kartları.' },
          { t:'Date kütüphanesi', d:'Hava, bütçe ve “vibe”a göre fikir üret.' },
          { t:'Love languages', d:'Mini testle tatlı ipuçları ve jest fikirleri.' },
        ].map((f, i)=>(
          <div key={i} className="card p-6">
            <div className="text-2xl">💗</div>
            <div className="mt-2 font-semibold text-rose-900">{f.t}</div>
            <div className="mt-1 text-sm text-rose-900/70">{f.d}</div>
          </div>
        ))}
      </section>

      {/* ARAÇLAR TEASER */}
      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <ToolCard href="/tools/gift-finder" title="Gift Finder" desc="Occasion + bütçe + ilgi alanı → öneriler" />
        <ToolCard href="/tools/date-ideas" title="Date Ideas" desc="Vibe + iç/dış mekan + bütçe → fikirler" />
        <ToolCard href="/tools/love-languages" title="Love Languages" desc="Mini test sonucu → jest/ürün önerileri" />
      </section>
    </>
  );
}

function ToolCard({href, title, desc}:{href:string; title:string; desc:string}) {
  return (
    <Link href={href} className="card p-6 block hover:shadow-md transition">
      <div className="text-3xl">❤️</div>
      <div className="mt-2 text-lg font-semibold">{title}</div>
      <div className="text-sm text-rose-900/70">{desc}</div>
      <div className="mt-4 inline-flex items-center gap-1 text-rose-700 font-medium">
        Aç <span aria-hidden>→</span>
      </div>
    </Link>
  );
}
