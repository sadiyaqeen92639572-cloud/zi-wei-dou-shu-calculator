import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Zi Wei Dou Shu Calculator — Free Purple Star Astrology Chart & Interpretation',
  description: 'Free Zi Wei Dou Shu (Purple Star Astrology) calculator. Enter your birth date and time for a deterministic 12-palace chart with 14 major stars and Four Transformations, in English and Chinese.',
  metadataBase: new URL('https://ziweidoushucalculator.com'),
  alternates: { canonical: 'https://ziweidoushucalculator.com' },
  openGraph: {
    title: 'Zi Wei Dou Shu Calculator — Free Purple Star Astrology Chart',
    description: 'Enter your birth date and time for a deterministic Zi Wei Dou Shu chart: 12 palaces, 14 major stars, Four Transformations.',
    url: 'https://ziweidoushucalculator.com',
    siteName: 'Zi Wei Dou Shu Calculator',
    type: 'website',
    images: [{ url: 'https://ziweidoushucalculator.com/og-image.svg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['https://ziweidoushucalculator.com/og-image.svg'] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-slate-950 text-slate-100 font-sans antialiased selection:bg-purple-500/30 selection:text-purple-200" suppressHydrationWarning>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
