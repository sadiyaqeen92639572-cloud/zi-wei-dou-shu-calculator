'use client';

import React from 'react';
import Link from 'next/link';
import { Link2, ArrowRight } from 'lucide-react';
import { ARTICLES_DATA } from '@/lib/data/articles';
import { STARS } from '@/lib/data/stars';
import { PALACES } from '@/lib/data/palaces';

interface LinkItem {
  name: string;
  href: string;
  desc: string;
}

// Resolves a slug to a link card. Supports plain article slugs ("what-is-zi-wei-dou-shu"),
// and prefixed programmatic slugs ("stars/tian-ji", "palaces/marriage").
function resolveSlug(slug: string): LinkItem | null {
  if (slug.startsWith('stars/')) {
    const key = slug.replace('stars/', '');
    const star = STARS.find(s => s.key === key);
    if (!star) return null;
    return { name: `${star.pinyin} Star`, href: `/stars/${star.key}/`, desc: star.keyword };
  }
  if (slug.startsWith('palaces/')) {
    const key = slug.replace('palaces/', '');
    const palace = PALACES.find(p => p.slug === key);
    if (!palace) return null;
    return { name: palace.englishName, href: `/palaces/${palace.slug}/`, desc: palace.domain };
  }
  const article = ARTICLES_DATA[slug];
  if (!article) return null;
  return { name: article.h1, href: `/${slug}/`, desc: article.metaDesc };
}

interface RelatedPagesProps {
  currentPath: string;
  relatedSlugs: string[];
}

export default function RelatedPages({ relatedSlugs }: RelatedPagesProps) {
  const links = relatedSlugs.map(resolveSlug).filter((l): l is LinkItem => l !== null);

  if (links.length === 0) return null;

  return (
    <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 mt-12" id="related-pages-section">
      <div className="flex items-center space-x-2 mb-6">
        <Link2 className="h-5 w-5 text-purple-400" />
        <h2 className="text-xl font-serif text-slate-100 tracking-wide font-medium">Related Content &amp; Tools</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="related-links-grid">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex flex-col justify-between p-4 bg-slate-950 border border-slate-850 hover:border-purple-500/50 rounded-lg hover:shadow-lg transition-all"
          >
            <div>
              <h3 className="text-base font-semibold text-slate-100 group-hover:text-purple-400 transition-colors flex items-center justify-between">
                <span>{link.name}</span>
                <ArrowRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-purple-400 transform group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">{link.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
