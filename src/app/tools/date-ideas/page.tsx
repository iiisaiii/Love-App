'use client';
import { useState } from 'react';
import { getDateIdeas } from '@/lib/suggest';

export default function DateIdeasPage() {
  const [vibe, setVibe] = useState('cozy');
  const [setting, setSetting] = useState('indoor');
  const [budget, setBudget] = useState('low');
  const [ideas, setIdeas] = useState<any[]>([]);

  return (
    <section className="py-10">
      <h1 className="h2">Date Ideas</h1>
      <p className="text-rose-900/70 mt-1">Vibe, ortam ve bütçeyi seç; keyifli fikirler gelsin.</p>

      <div className="card mt-4 p-5 grid gap-3">
        <div className="grid gap-1">
          <span className="text-sm font-medium">Vibe</span>
          <select value={vibe} onChange={(e)=>setVibe(e.target.value)} className="border rounded-xl p-2">
            <option value="cozy">Sakin & Cozy</option>
            <option value="adventurous">Macera</option>
            <option value="creative">Yaratıcı</option>
          </select>
        </div>
        <div className="grid gap-1">
          <span className="text-sm font-medium">Ortam</span>
          <select value={setting} onChange={(e)=>setSetting(e.target.value)} className="border rounded-xl p-2">
            <option value="indoor">İç Mekan</option>
            <option value="outdoor">Dış Mekan</option>
          </select>
        </div>
        <div className="grid gap-1">
          <span className="text-sm font-medium">Bütçe</span>
          <select value={budget} onChange={(e)=>setBudget(e.target.value)} className="border rounded-xl p-2">
            <option value="low">Düşük</option>
            <option value="mid">Orta</option>
            <option value="high">Yüksek</option>
          </select>
        </div>
        <div className="flex gap-3">
          <button onClick={()=>setIdeas(getDateIdeas({vibe, setting, budget}))} className="btn">Fikir Üret</button>
          <a href="/" className="btn-ghost">Anasayfa</a>
        </div>
      </div>

      <ul className="mt-6 grid gap-3">
        {ideas.map((it, i)=> (
          <li key={i} className="card p-4">
            <div className="font-medium">{it.title}</div>
            <div className="text-sm text-rose-900/70">{it.desc}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
