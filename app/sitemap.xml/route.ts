import { NextRequest, NextResponse } from 'next/server';
import { STARS } from '@/lib/data/stars';
import { PALACES } from '@/lib/data/palaces';
import { ARTICLES_DATA } from '@/lib/data/articles';

export const runtime = 'edge';

const TODAY = new Date().toISOString().slice(0, 10);

// Fixed satellite routes (matches app/<slug>/page.tsx). "blog/" itself and the one post
// live under BLOG_ROUTES; faq/glossary are hand-built pages not in ARTICLES_DATA.
// /chart/ is intentionally excluded — it's noindex (personalized via URL hash, not crawlable content).
const FIXED_SLUGS = Object.keys(ARTICLES_DATA).filter(s => s !== 'astrology-circle-past-life');
const BLOG_ROUTES = ['blog/', 'blog/astrology-circle-past-life/'];
const OTHER_ROUTES = ['faq/', 'glossary/'];

export async function GET(req: NextRequest) {
  const appUrl = 'https://ziweidoushucalculator.com';

  const staticRoutes = [
    '',
    ...FIXED_SLUGS.map(s => `${s}/`),
    ...BLOG_ROUTES,
    ...OTHER_ROUTES,
  ];

  const starRoutes = STARS.map(s => `stars/${s.key}/`);
  const palaceRoutes = PALACES.map(p => `palaces/${p.slug}/`);

  const allRoutes = [...staticRoutes, ...starRoutes, ...palaceRoutes];

  const xmlUrls = allRoutes.map(route => `
  <url>
    <loc>${appUrl}/${route}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '' ? '1.0' : route.split('/').length > 2 ? '0.7' : '0.8'}</priority>
  </url>`);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xmlUrls.join('')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
