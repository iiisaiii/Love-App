'use client';
import { useState } from 'react';

export function EmailCapture({ title = "Haftalık 3 Date Fikri" }:{
  title?: string;
}) {
  const [email, setEmail] = useState('');
  const [ok, setOk] = useState(false);
  const ACTION_URL = "https://buttondown.email/api/emails/embed-subscribe/LOVEAPP_PLACEHOLDER"; 
  // Beehiiv/Mailchimp kullanırsan embed action URL'sini buraya koy

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Basit POST: çoğu sağlayıcı form-POST kabul eder
    const form = new FormData();
    form.append("email", email);
    try {
      await fetch(ACTION_URL, { method: "POST", body: form, mode: "no-cors" });
      setOk(true);
    } catch (_) { setOk(true); }
  };

  if (ok) {
    return <div className="card p-4">💌 Teşekkürler! İlk e-postan çok yakında.</div>;
  }

  return (
    <form onSubmit={onSubmit} className="card p-4 grid gap-2">
      <div className="text-lg font-semibold">💌 {title}</div>
      <div className="text-sm text-rose-900/70">
        Kısa ve tatlı; gereksiz e-posta yok.
      </div>
      <div className="flex gap-2 mt-2">
        <input
          required
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="flex-1 border rounded-2xl px-3 py-2"
        />
        <button className="btn" type="submit">Katıl</button>
      </div>
    </form>
  );
}
