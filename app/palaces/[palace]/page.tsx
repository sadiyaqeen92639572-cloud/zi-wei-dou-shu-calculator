import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Home } from 'lucide-react';
import { PALACES, getPalaceBySlug } from '@/lib/data/palaces';
import { getArticleSchema } from '@/lib/seo';
import RelatedPages from '@/components/RelatedPages';

const SITE_URL = 'https://ziweidoushucalculator.com';

export function generateStaticParams() {
  return PALACES.map(p => ({ palace: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ palace: string }> }): Promise<Metadata> {
  const { palace: palaceSlug } = await params;
  const palace = getPalaceBySlug(palaceSlug);
  if (!palace) return {};
  const url = `${SITE_URL}/palaces/${palace.slug}/`;
  const title = `${palace.englishName} — Zi Wei Dou Shu Meaning`;
  const desc = `${palace.englishName} (${palace.chinese}) in Zi Wei Dou Shu: ${palace.domain}.`;
  return {
    title, description: desc,
    alternates: { canonical: url },
    openGraph: { title, description: desc, url, siteName: 'Zi Wei Dou Shu Calculator', type: 'website' },
  };
}

export default async function PalacePage({ params }: { params: Promise<{ palace: string }> }) {
  const { palace: palaceSlug } = await params;
  const palace = getPalaceBySlug(palaceSlug);
  if (!palace) return notFound();

  const url = `${SITE_URL}/palaces/${palace.slug}/`;
  const schema = getArticleSchema(palace.englishName, palace.summary, url);

  const otherPalaces = PALACES.filter(p => p.slug !== palace.slug).slice(0, 4).map(p => `palaces/${p.slug}`);
  const related = palace.slug === 'marriage'
    ? ['zi-wei-dou-shu-love-compatibility', 'zi-wei-dou-shu-palaces', ...otherPalaces.slice(0, 2)]
    : ['zi-wei-dou-shu-palaces', 'zi-wei-dou-shu-chart-interpretation', ...otherPalaces.slice(0, 3)];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="inline-flex items-center space-x-1 bg-purple-500/10 text-purple-400 rounded-full px-2.5 py-1 text-base font-semibold uppercase tracking-wider mb-4">
        <Home className="h-3 w-3" />
        <span>Palace</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-serif text-slate-100 font-medium mb-1">{palace.englishName}</h1>
      <p className="text-slate-500 text-base mb-6">{palace.chinese} ({palace.pinyin})</p>

      <p className="text-purple-300 text-lg font-medium mb-4">{palace.domain}</p>
      <p className="text-slate-300 text-lg leading-relaxed mb-8">{palace.summary}</p>

      <div className="pt-6 mt-10 border-t border-slate-900">
        <RelatedPages currentPath={`/palaces/${palace.slug}/`} relatedSlugs={related} />
      </div>
    </div>
  );
}
