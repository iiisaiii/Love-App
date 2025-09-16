'use client';
import { useEffect, useMemo, useState } from 'react';
import { AffiliateCard } from '@/components/affiliate-card';
import { GiftFilters, Filters } from '@/components/gift-filters';
import { findGifts } from '@/lib/giftfinder';

export default function GiftFinderPage() {
  const [filters, setFilters] = useState<Filters>({
    occasion:'birthday', budget:'500-1500', interests:'books, cozy, cats',
    vibe:'', setting:'any', personalizedOnly:false, fastShippingOnly:false,
    merchants:[], sortBy:'relevance'
  });
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 9;

  const { items, total } = useMemo(()=> findGifts({
    occasion: filters.occasion,
    budget: filters.budget,
    interests: filters.interests,
    vibe: filters.vibe || undefined,
    setting: filters.setting,
    personalizedOnly: filters.personalizedOnly,
    fastShippingOnly: filters.fastShippingOnly,
    merchants: filters.merchants,
    sortBy: filters.sortBy,
    page,
    pageSize: PAGE_SIZE,
    priceSort: null
  }), [filters, page]);

  useEffect(()=> { setPage(1); }, [filters]); // filtre değişince sayfayı başa al

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <section className="py-10">
      <h1 className="h2">Gift Finder</h1>
      <p className="text-rose-900/70 mt-1">Filtrele, karşılaştır, hediye seçimini hızlandır.</p>

      <div className="mt-4 grid gap-6 md:grid-cols-[320px,1fr]">
        <GiftFilters value={filters} onChange={setFilters} onSubmit={()=>{ /* no-op, use live memo */ }} />

        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-rose-900/70">
              {total} ürün bulundu
            </div>
            <a href="/" className="btn-ghost">Anasayfa</a>
          </div>

          {/* sonuçlar */}
          {items.length === 0 ? (
            <div className="card p-6">Sonuç yok. Filtreleri gevşetmeyi dene.</div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map(p => (<AffiliateCard key={p.id} item={{
                id: p.id, title: p.title, price: `₺${p.price}`, url: p.url,
                merchant: p.merchants[0], tag: p.tags.slice(0,3).join(', '), image: p.image
              } as any} />))}
            </div>
          )}

          {/* sayfalama */}
          <div className="flex items-center justify-center gap-2 mt-2">
            <button className="btn-ghost" onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page===1}>Önceki</button>
            <span className="text-sm">Sayfa {page}/{totalPages}</span>
            <button className="btn-ghost" onClick={()=>setPage(p=>Math.min(totalPages,p+1))} disabled={page===totalPages}>Sonraki</button>
          </div>
        </div>
      </div>
    </section>
  );
}
