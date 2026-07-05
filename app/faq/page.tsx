import type { Metadata } from 'next';
import { HelpCircle } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

const SITE_URL = 'https://ziweidoushucalculator.com';

export const metadata: Metadata = {
  title: 'Zi Wei Dou Shu FAQ — Accuracy, Comparisons & Common Questions',
  description: 'Frequently asked questions about this Zi Wei Dou Shu calculator: accuracy, how it compares to Joey Yap, Master Sean Chan, Destiny Labs, and more.',
  alternates: { canonical: SITE_URL + '/faq/' },
};

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="inline-flex items-center space-x-1 bg-purple-500/10 text-purple-400 rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wider mb-4">
        <HelpCircle className="h-3 w-3" />
        <span>FAQ</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-serif text-slate-100 font-medium mb-3">
        Frequently Asked Questions
      </h1>
      <p className="text-slate-400 mb-10 max-w-2xl">
        Objections, comparisons, and common questions about this calculator and how it relates to other
        Zi Wei Dou Shu resources, practitioners, and platforms.
      </p>
      <FAQAccordion />
    </div>
  );
}
