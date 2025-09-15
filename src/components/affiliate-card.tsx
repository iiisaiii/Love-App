export function AffiliateCard({ item }: { item: { id:string; title:string; price:string; url:string; merchant?:string; tag?:string } }) {
  return (
    <a href={item.url} className="card p-4 block hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium text-rose-950">{item.title}</div>
          <div className="text-xs text-rose-900/60">{item.merchant || 'Partner'}</div>
        </div>
        <div className="font-semibold text-rose-700">{item.price}</div>
      </div>
      {item.tag && <div className="text-xs text-rose-900/60 mt-1">{item.tag}</div>}
    </a>
  );
}
