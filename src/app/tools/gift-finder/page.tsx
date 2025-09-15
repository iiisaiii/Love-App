'use client';
import { useState } from 'react';
import { getGiftSuggestions } from '@/lib/suggest';
import { AffiliateCard } from '@/components/affiliate-card';

export default function GiftFinderPage() {
  const [occasion, setOccasion] = useState('birthday');
  const [budget, setBudget] = useState('500-1500');
  const [interests, setInterests] = useState<string>('books, cozy, cats');
  const [results, setResults] = useState<any[]>([]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResults(getGiftSuggestions({ occasion, budget, interests }));
  };

  return (
    <section className="py-10">
      <h1 className="h2">Gift Finder</h1>
      <p className="text-rose-900/70 mt-1">Kısa bir formu doldur, uygun hediye fikirleri gelsin.</p>

      <form onSubmit={onSubmit} className="card mt-4 p-5 grid gap-4">
        <label className="grid gap-1">
          <span className="text-sm font-medium">Vesile/Occasion</span>
          <select value={occasion} onChange={(e) => setOccasion(e.target.value)} className="border rounded-xl p-2">
            <option value="birthday">Doğum Günü</option>
            <option value="anniversary">Yıldönümü</option>
            <option value="justbecause">Öylesine</option>
          </select>
        </label>

        <label className="grid gap-1">
          <span className="text-sm font-medium">Bütçe</span>
          <select value={budget} onChange={(e) => setBudget(e.target.value)} className="border rounded-xl p-2">
            <option value="0-500">0–500 TL</option>
            <option value="500-1500">500–1500 TL</option>
            <option value=">1500">1500+ TL</option>
          </select>
        </label>

        <label className="grid gap-1">
          <span className="text-sm font-medium">İlgi alanları (virgülle)</span>
          <input value={interests} onChange={(e) => setInterests(e.target.value)} className="border rounded-xl p-2" />
        </label>

        <div className="flex gap-3">
          <button className="btn" type="submit">Öneri Al</button>
          <a href="/" className="btn-ghost">Anasayfa</a>
        </div>
      </form>

      <div className="mt-6 grid gap-4">
        {results.map((r) => (<AffiliateCard key={r.id} item={r} />))}
      </div>
    </section>
  );
}
