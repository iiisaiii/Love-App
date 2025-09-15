export function AffiliateCard({ item }: { item: { id:string; title:string; price:string; url:string; merchant?:string; tag?:string } }){
  return (
    <a href={item.url} className="block border rounded-2xl p-4 hover:shadow">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">{item.title}</div>
          <div className="text-xs text-gray-500">{item.merchant || 'Partner'}</div>
        </div>
        <div className="font-semibold">{item.price}</div>
      </div>
      <div className="text-xs text-gray-500 mt-1">{item.tag}</div>
    </a>
  );
}
