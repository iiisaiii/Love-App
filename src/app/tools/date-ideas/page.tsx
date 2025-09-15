'use client';
import { useState } from 'react';
import { getDateIdeas } from '@/lib/suggest';

export default function DateIdeasPage() {
  const [vibe, setVibe] = useState('cozy');
  const [setting, setSetting] = useState('indoor');
  const [budget, setBudget] = useState('low');
  const [ideas, setIdeas] = useState<any[]>([]);

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Date Ideas</h1>
      <div className="grid gap-3 rounded-2xl border p-4">
        <div className="grid gap-1">
          <span>Vibe</span>
          <select value={vibe} onChange={(e)=>setVibe(e.target.value)} className="border rounded-xl p-2">
            <option value="cozy">Sakin & Cozy</option>
            <option value="adventurous">Macera</option>
            <option value="creative">Yaratıcı</option>
          </select>
        </div>
        <div className="grid gap-1">
          <span>Ortam</span>
          <select value={setting} onChange={(e)=>setSetting(e.target.value)} className="border rounded-xl p-2">
            <option value="indoor">İç Mekan</option>
            <option value="outdoor">Dış Mekan</option>
          </select>
        </div>
        <div className="grid gap-1">
          <span>Bütçe</span>
          <select value={budget} onChange={(e)=>setBudget(e.target.value)} className="border rounded-xl p-2">
            <option value="low">Düşük</option>
            <option value="mid">Orta</option>
            <option value="high">Yüksek</option>
          </select>
        </div>
        <button onClick={()=>setIdeas(getDateIdeas({vibe, setting, budget}))} className="mt-2 px-4 py-2 rounded-2xl border w-fit">Fikir Üret</button>
      </div>

      <ul className="mt-6 grid gap-3">
        {ideas.map((it, i)=> (
          <li key={i} className="border rounded-2xl p-4">
            <div className="font-medium">{it.title}</div>
            <div className="text-sm text-gray-600">{it.desc}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
