import type { Metadata } from 'next';
import ArticleView from '@/components/ArticleView';
import { articleMetadata } from '@/lib/pageMeta';

export const metadata: Metadata = articleMetadata('zi-wei-dou-shu-reading');

export default function Page() {
  return <ArticleView slug="zi-wei-dou-shu-reading" />;
}
