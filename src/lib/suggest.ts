export function getGiftSuggestions({ occasion, budget, interests }:{
  occasion:string; budget:string; interests:string
}){
  const tags = interests.toLowerCase();
  return [
    { id:'bk1', title:'Minimalist Journal', price:'₺249', tag:'cozy, books',
      url:'/go/aff/journal', merchant:'Hepsiburada', image:'/products/journal.jpg' },
    { id:'bk2', title:'Couple Card Game', price:'₺399', tag:'games, conversation',
      url:'/go/aff/cards', merchant:'Trendyol', image:'/products/cards.jpg' },
    { id:'bk3', title:'Scented Candle Set', price:'₺329', tag:'home, cozy',
      url:'/go/aff/candles', merchant:'Amazon', image:'/products/candles.jpg' },
  ].filter(x => tags.split(',').some(t => x.tag.includes(t.trim())) || true);
}


export function getDateIdeas({vibe, setting, budget}:{vibe:string; setting:string; budget:string}){
  const ideas = [
    { title: 'Evde kokteyl akşamı', desc: 'Basit tariflerle kendi imza kokteylinizi bulun.' },
    { title: 'Kitapçı + kahve turu', desc: 'Birbirinize rastgele bir kitap seçin.' },
    { title: 'Gün batımı yürüyüşü', desc: 'Telefonları uçak moduna alın ve sadece sohbet edin.' },
  ];
  return ideas;
}

export function getLoveLanguageResult(ans:any){
  const map:any = {
    quality_time: {
      label: 'Quality Time',
      summary: 'Aynı anda, aynı yerde — dikkat dağılmadan geçirilen zaman en değerlisi.',
      products: [
        { id:'qt1', title:'Konuşma Kartları', price:'₺399', tag:'conversation', url:'/go/aff/cards', merchant:'Trendyol' },
        { id:'qt2', title:'Evde Date Seti', price:'₺599', tag:'cozy', url:'/go/aff/datekit', merchant:'Amazon' },
      ]
    },
    gifts: {
      label: 'Gifts', summary: 'Küçük sürprizler büyük etki bırakır.', products: [
        { id:'gf1', title:'Kişiselleştirilmiş Kupa', price:'₺279', tag:'custom', url:'/go/aff/mug', merchant:'Hepsiburada' }
      ]}
  };
  return map[ans.a] || map.quality_time;
}
