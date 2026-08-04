import type { Metadata } from 'next';
import ArticleView from '@/components/ArticleView';
import { articleMetadata } from '@/lib/pageMeta';

export const metadata: Metadata = articleMetadata('how-to-calculate-a-zi-wei-dou-shu-chart');

export default function Page() {
  return <ArticleView slug="how-to-calculate-a-zi-wei-dou-shu-chart" />;
}
