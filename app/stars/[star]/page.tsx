import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Star as StarIcon } from 'lucide-react';
import { STARS, getStarByKey } from '@/lib/data/stars';
import { getArticleSchema } from '@/lib/seo';
import RelatedPages from '@/components/RelatedPages';

const SITE_URL = 'https://ziweidoushucalculator.com';

export function generateStaticParams() {
  return STARS.map(s => ({ star: s.key }));
}

export async function generateMetadata({ params }: { params: Promise<{ star: string }> }): Promise<Metadata> {
  const { star: starKey } = await params;
  const star = getStarByKey(starKey);
  if (!star) return {};
  const url = `${SITE_URL}/stars/${star.key}/`;
  const title = `${star.pinyin} Star (${star.englishName}) — Zi Wei Dou Shu Meaning`;
  const desc = `${star.pinyin} (${star.chinese}) in Zi Wei Dou Shu: ${star.keyword}. Full meaning across the 12 palaces.`;
  return {
    title, description: desc,
    alternates: { canonical: url },
    openGraph: { title, description: desc, url, siteName: 'Zi Wei Dou Shu Calculator', type: 'website' },
  };
}

export default async function StarPage({ params }: { params: Promise<{ star: string }> }) {
  const { star: starKey } = await params;
  const star = getStarByKey(starKey);
  if (!star) return notFound();

  const url = `${SITE_URL}/stars/${star.key}/`;
  const schema = getArticleSchema(
    `${star.pinyin} Star (${star.englishName})`,
    star.summary,
    url
  );

  const otherStars = STARS.filter(s => s.key !== star.key).slice(0, 6).map(s => `stars/${s.key}`);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="inline-flex items-center space-x-1 bg-purple-500/10 text-purple-400 rounded-full px-2.5 py-1 text-base font-semibold uppercase tracking-wider mb-4">
        <StarIcon className="h-3 w-3" />
        <span>Major Star</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-serif text-slate-100 font-medium mb-1">
        {star.pinyin} <span className="text-purple-400">({star.englishName})</span>
      </h1>
      <p className="text-slate-500 text-base mb-6">{star.chinese} &middot; {star.nature}</p>

      <p className="text-slate-300 text-lg leading-relaxed mb-8">{star.summary}</p>

      <h2 className="text-xl font-serif text-slate-100 font-medium mb-4">
        {star.pinyin} in Each Palace
      </h2>
      <div className="space-y-4">
        {Object.entries(star.palaceMeanings).map(([palaceKey, meaning]) => (
          <div key={palaceKey} className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <h3 className="text-base font-semibold text-purple-400 capitalize mb-1.5">{palaceKey} Palace</h3>
            <p className="text-lg text-slate-400 leading-relaxed">{meaning}</p>
          </div>
        ))}
      </div>

      <div className="pt-6 mt-10 border-t border-slate-900">
        <RelatedPages currentPath={`/stars/${star.key}/`} relatedSlugs={['zi-wei-dou-shu-stars-meaning', 'zi-wei-dou-shu-chart-interpretation', ...otherStars.slice(0, 2)]} />
      </div>
    </div>
  );
}
