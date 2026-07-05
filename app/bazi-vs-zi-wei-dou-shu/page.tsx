import type { Metadata } from 'next';
import ArticleView from '@/components/ArticleView';
import { articleMetadata } from '@/lib/pageMeta';

export const metadata: Metadata = articleMetadata('bazi-vs-zi-wei-dou-shu');

export default function Page() {
  return <ArticleView slug="bazi-vs-zi-wei-dou-shu" />;
}
