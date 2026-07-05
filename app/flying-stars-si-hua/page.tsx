import type { Metadata } from 'next';
import ArticleView from '@/components/ArticleView';
import { articleMetadata } from '@/lib/pageMeta';

export const metadata: Metadata = articleMetadata('flying-stars-si-hua');

export default function Page() {
  return <ArticleView slug="flying-stars-si-hua" />;
}
