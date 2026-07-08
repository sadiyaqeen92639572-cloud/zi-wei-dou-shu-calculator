import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ARTICLES_DATA } from '@/lib/data/articles';

const SITE_URL = 'https://ziweidoushucalculator.com';

export const metadata: Metadata = {
  title: 'Zi Wei Dou Shu Blog — Purple Star Astrology Articles',
  description: 'The Zi Wei Dou Shu blog: articles on Purple Star Astrology practice, chart interpretation questions, and topics the community discusses.',
  alternates: { canonical: SITE_URL + '/blog/' },
};

const BLOG_POSTS = ['astrology-circle-past-life'];

export default function BlogIndexPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-serif text-slate-100 font-medium mb-3">Zi Wei Dou Shu Blog</h1>
      <p className="text-slate-400 mb-10 max-w-2xl">
        Articles exploring specific Zi Wei Dou Shu questions, practice notes, and topics that come up often
        in the wider Chinese astrology community.
      </p>
      <div className="space-y-4">
        {BLOG_POSTS.map(slug => {
          const post = ARTICLES_DATA[slug];
          return (
            <Link key={slug} href={`/blog/${slug}/`}
              className="group flex items-center justify-between p-5 bg-slate-900 border border-slate-800 hover:border-purple-500/50 rounded-xl transition-all">
              <div>
                <h2 className="text-lg font-serif text-slate-100 group-hover:text-purple-400 font-medium">{post.h1}</h2>
                <p className="text-lg text-slate-400 mt-1">{post.metaDesc}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-slate-500 group-hover:text-purple-400 flex-shrink-0 ml-4" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
