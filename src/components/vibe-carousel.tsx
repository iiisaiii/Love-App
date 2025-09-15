import { AffiliateCard } from "@/components/affiliate-card";
import { useState } from "react";

const DATA: Record<"cozy"|"adventurous"|"creative", any[]> = {
  cozy: [
    { id:"cz1", title:"Scented Candle Set", price:"₺329", merchant:"Amazon", tag:"home, cozy", url:"/go/aff/candles", image:"/products/candles.jpg" },
    { id:"cz2", title:"At-Home Date Kit", price:"₺599", merchant:"Amazon", tag:"cozy", url:"/go/aff/datekit", image:"/products/datekit.jpg" },
    { id:"cz3", title:"Minimalist Journal", price:"₺249", merchant:"Hepsiburada", tag:"cozy, books", url:"/go/aff/journal", image:"/products/journal.jpg" },
  ],
  adventurous: [
    { id:"ad1", title:"Action Card Game", price:"₺349", merchant:"Trendyol", tag:"adventure, game", url:"/go/aff/cards", image:"/products/cards.jpg" },
    { id:"ad2", title:"Roses Bouquet", price:"₺499", merchant:"Flower Co", tag:"romance", url:"/go/aff/roses", image:"/products/roses.jpg" },
    { id:"ad3", title:"At-Home Date Kit", price:"₺599", merchant:"Amazon", tag:"challenge", url:"/go/aff/datekit", image:"/products/datekit.jpg" },
  ],
  creative: [
    { id:"cr1", title:"Minimalist Journal", price:"₺249", merchant:"Hepsiburada", tag:"creative, writing", url:"/go/aff/journal", image:"/products/journal.jpg" },
    { id:"cr2", title:"Conversation Prompts", price:"₺279", merchant:"Hepsiburada", tag:"talk, ideas", url:"/go/aff/cards", image:"/products/cards.jpg" },
    { id:"cr3", title:"Scented Candle Set", price:"₺329", merchant:"Amazon", tag:"mood", url:"/go/aff/candles", image:"/products/candles.jpg" },
  ],
};

export function VibeCarousel() {
  const [vibe, setVibe] = useState<"cozy"|"adventurous"|"creative">("cozy");
  const items = DATA[vibe];

  return (
    <section className="mt-12">
      <div className="flex items-end justify-between mb-3">
        <h2 className="text-2xl md:text-3xl font-semibold">Vibe’a göre öneriler</h2>
        <div className="flex gap-2">
          {(["cozy","adventurous","creative"] as const).map(v => (
            <button
              key={v}
              onClick={()=>setVibe(v)}
              className={`px-3 py-1.5 rounded-2xl text-sm border ${vibe===v ? "bg-rose-600 text-white border-rose-600" : "bg-white/70 border-rose-200 text-rose-700 hover:bg-rose-50"}`}
            >
              {v==="cozy" ? "Cozy" : v==="adventurous" ? "Macera" : "Yaratıcı"}
            </button>
          ))}
        </div>
      </div>

      {/* yatay kaydırma – kütüphane yok */}
      <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
        {items.map((item) => (
          <div key={item.id} className="min-w-[320px] snap-start">
            <AffiliateCard item={item as any} />
          </div>
        ))}
      </div>
    </section>
  );
}
