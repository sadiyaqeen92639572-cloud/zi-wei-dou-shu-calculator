import type { Metadata } from 'next';
import ArticleView from '@/components/ArticleView';
import { articleMetadata } from '@/lib/pageMeta';

export const metadata: Metadata = articleMetadata('astrology-circle-past-life', '/blog/astrology-circle-past-life/');

export default function Page() {
  return <ArticleView slug="astrology-circle-past-life" path="/blog/astrology-circle-past-life/" />;
}
