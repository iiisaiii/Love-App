import { AffiliateCard } from "@/components/affiliate-card";

const PICKS = [
  { id:"tp1", title:"Minimalist Journal", price:"₺249", merchant:"Hepsiburada", tag:"cozy, books", url:"/go/aff/journal", image:"/products/journal.jpg" },
  { id:"tp2", title:"Couple Card Game",  price:"₺399", merchant:"Trendyol",    tag:"games",       url:"/go/aff/cards",   image:"/products/cards.jpg" },
  { id:"tp3", title:"Scented Candle Set",price:"₺329", merchant:"Amazon",      tag:"home, cozy",  url:"/go/aff/candles", image:"/products/candles.jpg" },
  { id:"tp4", title:"Roses Bouquet",     price:"₺499", merchant:"Flower Co",   tag:"romance",     url:"/go/aff/roses",   image:"/products/roses.jpg" },
  { id:"tp5", title:"At-Home Date Kit",  price:"₺599", merchant:"Amazon",      tag:"cozy, diy",   url:"/go/aff/datekit", image:"/products/datekit.jpg" },
  { id:"tp6", title:"Conversation Cards",price:"₺279", merchant:"Hepsiburada", tag:"talk",        url:"/go/aff/cards",   image:"/products/cards.jpg" },
];

export function TopPicks() {
  return (
    <section className="mt-12">
      <div className="flex items-end justify-between mb-3">
        <h2 className="text-2xl md:text-3xl font-semibold">Top Picks</h2>
        <div className="text-sm text-rose-900/70">Bu hafta en çok önerilenler</div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {PICKS.map(item => <AffiliateCard key={item.id} item={item as any} />)}
      </div>
    </section>
  );
}
