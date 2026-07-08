'use client';

import React from 'react';
import { ARTICLES_DATA } from '@/lib/data/articles';
import { getArticleSchema, getHowToSchema } from '@/lib/seo';
import RelatedPages from './RelatedPages';
import { BookOpen } from 'lucide-react';

interface ArticleViewProps {
  slug: string;
  path?: string; // URL path override, for pages nested under a subdirectory (e.g. /blog/[slug]/)
}

const SITE_URL = 'https://ziweidoushucalculator.com';

export default function ArticleView({ slug, path }: ArticleViewProps) {
  const article = ARTICLES_DATA[slug];

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center text-slate-400">
        Article not found.
      </div>
    );
  }

  const url = `${SITE_URL}${path || `/${slug}/`}`;
  const schema = article.schemaType === 'HowTo'
    ? getHowToSchema(
        article.title,
        article.metaDesc,
        url,
        article.sections.map(s => ({ name: s.heading, text: s.content }))
      )
    : getArticleSchema(article.title, article.metaDesc, url);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12" id={`article-${slug}`}>
        <div className="space-y-4 border-b border-slate-900 pb-8">
          <div className="inline-flex items-center space-x-1 bg-purple-500/10 text-purple-400 rounded-full px-2.5 py-1 text-base font-semibold uppercase tracking-wider">
            <BookOpen className="h-3 w-3" />
            <span>Zi Wei Dou Shu Library</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-slate-100 tracking-tight font-medium">
            {article.h1}
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl">
            {article.metaDesc}
          </p>
        </div>

        <div className="space-y-10 text-slate-300 leading-relaxed text-base sm:text-lg" id="article-body">
          {article.sections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="text-lg sm:text-xl font-serif text-slate-100 font-medium tracking-wide">
                {idx + 1}. {section.heading}
              </h2>
              <p className="text-slate-300 text-base sm:text-lg">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-900">
          <RelatedPages currentPath={path || `/${slug}/`} relatedSlugs={article.relatedSlugs} />
        </div>
      </article>
    </>
  );
}
