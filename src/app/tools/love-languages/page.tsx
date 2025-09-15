'use client';
import { useState } from 'react';
import { getLoveLanguageResult } from '@/lib/suggest';
import { AffiliateCard } from '@/components/affiliate-card';

export default function LoveLanguagesPage(){
  const [answers, setAnswers] = useState({a: 'quality_time'});
  const [result, setResult] = useState<any>(null);

  return (
    <section className="py-10">
      <h1 className="h2">Love Languages (Mini)</h1>
      <p className="text-rose-900/70 mt-1">En çok iyi hissettiren şeyi seç; küçük jest fikirleri al.</p>

      <div className="card mt-4 p-5 grid gap-3">
        <label className="grid gap-1">
          <span className="text-sm font-medium">Seçim</span>
          <select value={answers.a} onChange={(e)=>setAnswers({a: (e.target as HTMLSelectElement).value})} className="border rounded-xl p-2">
            <option value="quality_time">Beraber kaliteli zaman</option>
            <option value="words">Güzel sözler</option>
            <option value="gifts">Küçük hediyeler</option>
            <option value="acts">Destekleyici davranışlar</option>
            <option value="touch">Temas</option>
          </select>
        </label>
        <div className="flex gap-3">
          <button onClick={()=>setResult(getLoveLanguageResult(answers))} className="btn">Sonuç</button>
          <a href="/" className="btn-ghost">Anasayfa</a>
        </div>
      </div>

      {result && (
        <section className="mt-6 grid gap-3">
          <div className="card p-5">
            <h2 className="text-xl font-semibold">Senin dili: {result.label}</h2>
            <p className="text-sm text-rose-900/70 mt-1">{result.summary}</p>
          </div>
          <div className="grid gap-3">
            {result.products.map((r:any)=> (<AffiliateCard key={r.id} item={r} />))}
          </div>
        </section>
      )}
    </section>
  );
}
