import Image from "next/image";

type Item = {
  id: string;
  title: string;
  price: string;
  url: string;        // dış link veya /go/slug
  merchant?: string;
  tag?: string;
  image?: string;     // /products/… veya tam URL
};

export function AffiliateCard({ item }: { item: Item }) {
  return (
    <a href={item.url} className="card block hover:shadow-md transition overflow-hidden">
      {item.image && (
        <div className="relative w-full aspect-[16/9] bg-rose-50">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={false}
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-medium text-rose-950">{item.title}</div>
            <div className="text-xs text-rose-900/60">{item.merchant || 'Partner'}</div>
          </div>
          <div className="font-semibold text-rose-700 whitespace-nowrap">{item.price}</div>
        </div>
        {item.tag && <div className="text-xs text-rose-900/60 mt-1">{item.tag}</div>}
        <div className="mt-3 inline-flex items-center gap-1 text-rose-700 text-sm font-medium">
          İncele <span aria-hidden>→</span>
        </div>
      </div>
    </a>
  );
}
