import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://your-project.vercel.app'),
  title: { default: 'Love App — Hediyeler & Date Fikirleri', template: '%s | Love App' },
  description: 'Mini testler → hediye önerileri, date planları ve tatlı ilhamlar.',
  alternates: { canonical: '/' },
  openGraph: { locale: 'tr_TR' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${poppins.className} min-h-screen text-rose-950 antialiased`}>
        {/* yumuşak pembe degrade + süs kalpler */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_0%,#ffe4e6,transparent),linear-gradient(180deg,#fff,#fff5f5)]" />
        <div className="pointer-events-none fixed -top-24 right-[-80px] -z-10 opacity-40">
          <svg width="260" height="260" viewBox="0 0 200 200" fill="none">
            <path d="M100 170c60-34 72-78 48-101-18-18-42-6-48 10-6-16-30-28-48-10-24 23-12 67 48 101z" fill="#fecdd3"/>
          </svg>
        </div>

        <Navbar />
        <main className="max-w-5xl mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
