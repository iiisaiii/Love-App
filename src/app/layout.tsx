import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://your-project.vercel.app'),
  title: { default: 'Love App — Smart Gift & Date Ideas', template: '%s | Love App' },
  description: 'Mini quiz → gift ideas, date plans, and sweet prompts. Built to be helpful, not cheesy.',
  alternates: { canonical: '/' },
  openGraph: { locale: 'tr_TR' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
