export type Product = {
  id: string;
  title: string;
  price: number; // TL
  tags: string[]; // ['cozy','books','games','romance','creative','indoor','outdoor','personalized', ...]
  occasions: string[]; // ['birthday','anniversary','justbecause','valentines','newyear']
  merchants: string[]; // ['Amazon','Hepsiburada','Trendyol','Flower Co']
  image: string;       // /products/xxx.jpg
  url: string;         // /go/slug
  rating?: number;     // 1..5
  fastShipping?: boolean;
  personalized?: boolean;
};

export const CATALOG: Product[] = [
  {
    id:'journal', title:'Minimalist Journal', price:249,
    tags:['cozy','books','creative','indoor'],
    occasions:['birthday','anniversary','justbecause','valentines'],
    merchants:['Hepsiburada'], image:'/products/journal.jpg', url:'/go/aff/journal',
    rating:4.6, personalized:true
  },
  {
    id:'cards', title:'Couple Card Game', price:399,
    tags:['games','conversation','cozy','indoor'],
    occasions:['anniversary','justbecause','valentines'],
    merchants:['Trendyol'], image:'/products/cards.jpg', url:'/go/aff/cards',
    rating:4.7
  },
  {
    id:'candles', title:'Scented Candle Set', price:329,
    tags:['home','cozy','mood','indoor'],
    occasions:['birthday','anniversary','valentines','newyear','justbecause'],
    merchants:['Amazon'], image:'/products/candles.jpg', url:'/go/aff/candles',
    rating:4.4, fastShipping:true
  },
  {
    id:'roses', title:'Roses Bouquet', price:499,
    tags:['romance','gesture','outdoor'],
    occasions:['anniversary','valentines','justbecause'],
    merchants:['Flower Co'], image:'/products/roses.jpg', url:'/go/aff/roses',
    rating:4.8, fastShipping:true
  },
  {
    id:'datekit', title:'At-Home Date Kit', price:599,
    tags:['cozy','diy','creative','indoor'],
    occasions:['anniversary','valentines','justbecause','newyear'],
    merchants:['Amazon'], image:'/products/datekit.jpg', url:'/go/aff/datekit',
    rating:4.5
  },
  {
    id:'promptcards', title:'Conversation Prompts', price:279,
    tags:['talk','connection','creative','indoor'],
    occasions:['anniversary','justbecause','valentines'],
    merchants:['Hepsiburada'], image:'/products/cards.jpg', url:'/go/aff/cards',
    rating:4.3
  },
  // İstersen burada 10-15 ürün daha çoğaltabilirsin; şema aynı.
];
