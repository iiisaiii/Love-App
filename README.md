# Love App — Starter

## Kurulum
```bash
npm install
npm run dev
```

## Çevre değişkeni
Vercel'e deploy sonrası `NEXT_PUBLIC_SITE_URL` ortam değişkenini Vercel URL'inle ayarla.

## Sitemap
Lokal veya CI'da:
```bash
npm run sitemap
```
`public/robots.txt` ve `public/sitemap.xml` güncellenir. (Yerine dinamik route da eklenebilir.)

## Yapı
- `src/app` — App Router sayfaları (landing + tools)
- `src/components` — Affiliate kartı
- `src/lib` — Sahte öneri fonksiyonları (gerçekte affiliate feed ile değiştirilecek)

## Sonraki Adım
- `/go/[slug]` proxy yönlendirme ile tık takibi
- Email capture (free date ideas PDF)
- Gerçek affiliate linkleri/akışları


---

## GitHub’a webden yükleme (bilgisayarda npm gerekmez)
1. GitHub’da **New Repository** oluştur.
2. Bu klasördeki **tüm dosyaları** (node_modules yok) ZIP’ten çıkar → GitHub repo sayfasında **Add file → Upload files** ile yükle → **Commit**.
3. Vercel’de **Add New… → Project → Import Git Repository** seç → az önce oluşturduğun repo’yu bağla.
4. Deploy ayarları otomatik gelir; istersen `Environment Variables` bölümüne `NEXT_PUBLIC_SITE_URL` (ör. `https://proje-adin.vercel.app`) ekleyebilirsin (deploy sonrası güncellemek de olur).
5. **Deploy**’a bas; Vercel sunucuda `npm install` ve `next build` çalıştırıp siteyi yayınlar.

> Not: Lokal bilgisayarda hiçbir komut çalıştırmana gerek yok. Tüm kurulum Vercel tarafında yapılır.
