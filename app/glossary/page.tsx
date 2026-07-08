import type { Metadata } from 'next';
import { FileText } from 'lucide-react';
import { GLOSSARY_DATA } from '@/lib/data/glossary';
import { getDefinedTermSetSchema } from '@/lib/seo';

const SITE_URL = 'https://ziweidoushucalculator.com';

export const metadata: Metadata = {
  title: 'Zi Wei Dou Shu Glossary — Terms & Definitions',
  description: 'A reference glossary of Zi Wei Dou Shu terminology: palace, major star, brightness, Si Hua transformations, flying stars, and more, in English and Chinese.',
  alternates: { canonical: SITE_URL + '/glossary/' },
};

export default function GlossaryPage() {
  const schema = getDefinedTermSetSchema(
    'Zi Wei Dou Shu Glossary',
    'Reference terminology for Zi Wei Dou Shu / Purple Star Astrology.',
    SITE_URL + '/glossary/',
    GLOSSARY_DATA.map(t => ({ term: t.term, definition: t.definition }))
  );

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="inline-flex items-center space-x-1 bg-purple-500/10 text-purple-400 rounded-full px-2.5 py-1 text-sm font-semibold uppercase tracking-wider mb-4">
        <FileText className="h-3 w-3" />
        <span>Glossary</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-serif text-slate-100 font-medium mb-3">Zi Wei Dou Shu Glossary</h1>
      <p className="text-slate-400 mb-10 max-w-2xl">
        Short, standalone definitions for the terminology used throughout this site — linked from star and
        palace pages wherever the jargon appears.
      </p>

      <dl className="space-y-6">
        {GLOSSARY_DATA.map(t => (
          <div key={t.term} className="border-b border-slate-900 pb-5">
            <dt className="text-lg font-semibold text-slate-100">
              {t.term} {t.chinese && <span className="text-purple-400 font-normal ml-1">{t.chinese}</span>}
            </dt>
            <dd className="text-base text-slate-400 mt-1.5 leading-relaxed">{t.definition}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
