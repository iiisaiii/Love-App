import { CATALOG, Product } from './catalog';

export type FinderInput = {
  occasion: 'birthday'|'anniversary'|'justbecause'|'valentines'|'newyear';
  budget: '0-500'|'500-1500'|'>1500';
  interests: string;                // "books, cozy, cats"
  vibe?: 'cozy'|'adventurous'|'creative';
  setting?: 'indoor'|'outdoor'|'any';
  personalizedOnly?: boolean;
  fastShippingOnly?: boolean;
  merchants?: string[];             // filter subset
  priceSort?: 'asc'|'desc'|null;
  sortBy?: 'relevance'|'price'|'rating';
  page?: number;
  pageSize?: number;
};

const budgetRange = (b: FinderInput['budget']) => {
  if (b === '0-500') return [0, 500];
  if (b === '500-1500') return [500, 1500];
  return [1500, 1e9];
};

function scoreProduct(p: Product, q: FinderInput, interestTokens: string[]): number {
  let s = 0;
  // Occasion match
  if (p.occasions.includes(q.occasion)) s += 3;
  // Budget closeness
  const [lo, hi] = budgetRange(q.budget);
  if (p.price >= lo && p.price <= hi) s += 3;
  // Interests overlap
  for (const t of interestTokens) if (p.tags.includes(t)) s += 1.5;
  // Vibe & setting
  if (q.vibe && p.tags.includes(q.vibe)) s += 1.2;
  if (q.setting && q.setting !== 'any' && p.tags.includes(q.setting)) s += 1;
  // Bonuses
  if (q.personalizedOnly && p.personalized) s += 0.5;
  if (q.fastShippingOnly && p.fastShipping) s += 0.5;
  // Rating nudge
  if (p.rating) s += (p.rating - 3.5) * 0.6; // 4.8 => +0.78
  return s;
}

export function findGifts(input: FinderInput) {
  const {
    budget, interests, vibe, setting='any',
    personalizedOnly=false, fastShippingOnly=false,
    merchants=[], sortBy='relevance', page=1, pageSize=9
  } = input;

  const tokens = interests
    .toLowerCase()
    .split(',')
    .map(t=>t.trim())
    .filter(Boolean);

  const [lo, hi] = budgetRange(budget);

  let results = CATALOG.filter(p => {
    if (p.price < lo || p.price > hi) return false;
    if (personalizedOnly && !p.personalized) return false;
    if (fastShippingOnly && !p.fastShipping) return false;
    if (merchants.length && !p.merchants.some(m=> merchants.includes(m))) return false;
    if (setting !== 'any' && !p.tags.includes(setting)) return false;
    // soft filters (vibe/interests) skorda dikkate alınıyor, burada engelleme yok
    return true;
  }).map(p => ({
    product: p,
    score: scoreProduct(p, { ...input, setting }, tokens)
  }));

  if (sortBy === 'price') {
    results.sort((a,b)=> a.product.price - b.product.price);
  } else if (sortBy === 'rating') {
    results.sort((a,b)=> (b.product.rating||0) - (a.product.rating||0));
  } else {
    results.sort((a,b)=> b.score - a.score); // relevance
  }

  const total = results.length;
  const start = (page-1)*pageSize;
  const pageItems = results.slice(start, start + pageSize).map(r => r.product);

  return { total, items: pageItems };
}
