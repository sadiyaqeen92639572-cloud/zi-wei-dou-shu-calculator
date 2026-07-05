import type { Metadata } from 'next';
import ArticleView from '@/components/ArticleView';
import { articleMetadata } from '@/lib/pageMeta';

export const metadata: Metadata = articleMetadata('what-is-zi-wei-dou-shu');

export default function Page() {
  return <ArticleView slug="what-is-zi-wei-dou-shu" />;
}
