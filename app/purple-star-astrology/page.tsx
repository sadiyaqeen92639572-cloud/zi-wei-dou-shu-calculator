import type { Metadata } from 'next';
import ArticleView from '@/components/ArticleView';
import { articleMetadata } from '@/lib/pageMeta';

export const metadata: Metadata = articleMetadata('purple-star-astrology');

export default function Page() {
  return <ArticleView slug="purple-star-astrology" />;
}
