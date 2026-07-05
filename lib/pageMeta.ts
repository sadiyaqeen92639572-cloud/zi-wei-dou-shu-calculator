import type { Metadata } from 'next';
import { ARTICLES_DATA } from './data/articles';

const SITE_URL = 'https://ziweidoushucalculator.com';

/** Builds standard Next.js Metadata for a fixed article page from ARTICLES_DATA. */
export function articleMetadata(slug: string, path?: string): Metadata {
  const article = ARTICLES_DATA[slug];
  if (!article) throw new Error(`No article data for slug: ${slug}`);
  const url = `${SITE_URL}${path || `/${slug}/`}`;
  return {
    title: article.metaTitle,
    description: article.metaDesc,
    alternates: { canonical: url },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDesc,
      url,
      siteName: 'Zi Wei Dou Shu Calculator',
      type: 'website',
    },
  };
}
