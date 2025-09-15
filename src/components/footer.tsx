export function Footer(){
  return (
    <footer className="mt-16 mb-10 text-center text-sm text-rose-900/60">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 text-rose-700">
          <span aria-hidden>♥</span> Sevgi küçük jestlerde saklı.
        </div>
        <div className="mt-2">
          © {new Date().getFullYear()} Love App • <a className="underline" href="/affiliates">Affiliate</a> • <a className="underline" href="/privacy">Gizlilik</a> • <a className="underline" href="/terms">Şartlar</a>
        </div>
      </div>
    </footer>
  );
}
