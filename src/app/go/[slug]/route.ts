import { NextResponse } from 'next/server';

const MAP: Record<string, string> = {
  journal: 'https://www.hepsiburada.com/…',
  cards:   'https://www.trendyol.com/…',
  candles: 'https://www.amazon.com.tr/…'
};

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const dest = MAP[params.slug];
  if (!dest) return NextResponse.redirect(new URL('/', _req.url), 302);
  // TODO: buraya tık kaydı (KV, webhook, GA) eklenebilir
  return NextResponse.redirect(dest, 307);
}
