'use client';
import { useState } from 'react';

export type Filters = {
  occasion: 'birthday'|'anniversary'|'justbecause'|'valentines'|'newyear';
  budget: '0-500'|'500-1500'|'>1500';
  interests: string;
  vibe: 'cozy'|'adventurous'|'creative'|'';
  setting: 'indoor'|'outdoor'|'any';
  personalizedOnly: boolean;
  fastShippingOnly: boolean;
  merchants: string[];
  sortBy: 'relevance'|'price'|'rating';
};

const ALL_MERCHANTS = ['Amazon','Hepsiburada','Trendyol','Flower Co'];

export function GiftFilters({
  value, onChange, onSubmit
}:{ value: Filters; onChange: (v: Filters)=>void; onSubmit: ()=>void }) {
  const v = value;
  const update = (patch: Partial<Filters>) => onChange({ ...v, ...patch });

  return (
    <aside className="card p-4 grid gap-3">
      <div className="font-semibold">Filtreler</div>

      <label className="grid gap-1">
        <span className="text-sm font-medium">Vesile</span>
        <select value={v.occasion} onChange={e=>update({occasion: e.target.value as any})} className="border rounded-xl p-2">
          <option value="birthday">Doğum Günü</option>
          <option value="anniversary">Yıldönümü</option>
          <option value="justbecause">Öylesine</option>
          <option value="valentines">Sevgililer Günü</option>
          <option value="newyear">Yılbaşı</option>
        </select>
      </label>

      <label className="grid gap-1">
        <span className="text-sm font-medium">Bütçe</span>
        <select value={v.budget} onChange={e=>update({budget: e.target.value as any})} className="border rounded-xl p-2">
          <option value="0-500">0–500 TL</option>
          <option value="500-1500">500–1500 TL</option>
          <option value=">1500">1500+ TL</option>
        </select>
      </label>

      <label className="grid gap-1">
        <span className="text-sm font-medium">İlgi alanları (virgülle)</span>
        <input value={v.interests} onChange={e=>update({interests: e.target.value})} className="border rounded-xl p-2" placeholder="books, cozy, cats" />
      </label>

      <div className="grid grid-cols-2 gap-2">
        <label className="grid gap-1">
          <span className="text-sm font-medium">Vibe</span>
          <select value={v.vibe} onChange={e=>update({vibe: e.target.value as any})} className="border rounded-xl p-2">
            <option value="">—</option>
            <option value="cozy">Cozy</option>
            <option value="adventurous">Macera</option>
            <option value="creative">Yaratıcı</option>
          </select>
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Ortam</span>
          <select value={v.setting} onChange={e=>update({setting: e.target.value as any})} className="border rounded-xl p-2">
            <option value="any">Farketmez</option>
            <option value="indoor">İç Mekan</option>
            <option value="outdoor">Dış Mekan</option>
          </select>
        </label>
      </div>

      <div className="flex items-center gap-2">
        <input id="p" type="checkbox" checked={v.personalizedOnly} onChange={e=>update({personalizedOnly: e.target.checked})}/>
        <label htmlFor="p" className="text-sm">Kişiselleştirilebilir</label>
      </div>
      <div className="flex items-center gap-2">
        <input id="f" type="checkbox" checked={v.fastShippingOnly} onChange={e=>update({fastShippingOnly: e.target.checked})}/>
        <label htmlFor="f" className="text-sm">Hızlı teslimat</label>
      </div>

      <div className="grid gap-2">
        <div className="text-sm font-medium">Satıcılar</div>
        <div className="flex flex-wrap gap-2">
          {ALL_MERCHANTS.map(m => {
            const active = v.merchants.includes(m);
            return (
              <button key={m}
                onClick={()=> {
                  const set = new Set(v.merchants);
                  active ? set.delete(m) : set.add(m);
                  update({ merchants: Array.from(set) });
                }}
                className={`px-3 py-1.5 rounded-2xl text-sm border ${active ? 'bg-rose-600 text-white border-rose-600' : 'bg-white/70 border-rose-200 text-rose-700 hover:bg-rose-50'}`}
              >{m}</button>
            );
          })}
        </div>
      </div>

      <label className="grid gap-1">
        <span className="text-sm font-medium">Sırala</span>
        <select value={v.sortBy} onChange={e=>update({sortBy: e.target.value as any})} className="border rounded-xl p-2">
          <option value="relevance">Alaka (öneri skoru)</option>
          <option value="price">Fiyat</option>
          <option value="rating">Puan</option>
        </select>
      </label>

      <div className="flex gap-2 pt-1">
        <button type="button" className="btn" onClick={onSubmit}>Önerileri Göster</button>
        <button type="button" className="btn-ghost" onClick={()=>onChange({
          occasion:'birthday', budget:'500-1500', interests:'books, cozy, cats',
          vibe:'', setting:'any', personalizedOnly:false, fastShippingOnly:false,
          merchants:[], sortBy:'relevance'
        })}>Sıfırla</button>
      </div>
    </aside>
  );
}
