import type { Metadata } from 'next';
import ChartPageContent from '@/components/ChartPageContent';

const SITE_URL = 'https://ziweidoushucalculator.com';

// Deliberately generic — the actual chart is decoded client-side from the URL hash,
// which is never sent to the server, so this prerendered shell can't be personalized.
// noindex: this is a shareable utility page, not a page we want ranking on its own.
export const metadata: Metadata = {
  title: 'Your Zi Wei Dou Shu Chart — Shareable & Printable',
  description: 'View, share, and print your Zi Wei Dou Shu chart. Bookmark this link to reopen your exact 12-palace chart anytime.',
  alternates: { canonical: SITE_URL + '/chart/' },
  robots: { index: false, follow: true },
};

export default function ChartPage() {
  return <ChartPageContent />;
}
