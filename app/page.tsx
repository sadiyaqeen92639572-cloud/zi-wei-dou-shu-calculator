import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { getSoftwareApplicationSchema, getFAQPageSchema, getHowToSchema } from '@/lib/seo';
import { FAQ_DATA } from '@/lib/data/faq';
import ZiweiCalculator from '@/components/ZiweiCalculator';

const SITE_URL = 'https://ziweidoushucalculator.com';

export const metadata: Metadata = {
  title: 'Zi Wei Dou Shu Calculator — Free & Accurate Purple Star Astrology Chart',
  description: 'Free Zi Wei Dou Shu calculator: enter your birth date and time for an accurate, deterministic Purple Star Astrology chart — 12 palaces, 14 major stars, and the Four Transformations, in English and Chinese.',
  keywords: [
    'zi wei dou shu calculator free', 'zi wei dou shu calculator in chinese', 'zi wei dou shu calculator explanation',
    'zi wei dou shu calculator english', 'zi wei dou shu calculator analysis', 'zi wei dou shu calculator ai',
    'zi wei dou shu calculator 2026', 'zi wei dou shu calculator reddit', 'best zi wei dou shu calculator',
    'accurate zi wei dou shu calculator', 'bazi zi wei dou shu calculator', 'joey yap zi wei dou shu calculator',
    'flying star zi wei dou shu calculator', 'master sean chan zi wei dou shu calculator', 'destiny labs zi wei dou shu calculator',
    'zi wei dou shu calculator and interpretation', 'chinese purple star astrology free',
  ],
  alternates: { canonical: SITE_URL + '/' },
  openGraph: {
    title: 'Zi Wei Dou Shu Calculator — Free Purple Star Astrology Chart',
    description: 'Enter your birth date and time for a deterministic Zi Wei Dou Shu chart: 12 palaces, 14 major stars, Four Transformations.',
    url: SITE_URL + '/',
    siteName: 'Zi Wei Dou Shu Calculator',
    type: 'website',
  },
};

export default function HomePage() {
  const applicationSchema = getSoftwareApplicationSchema(
    'Zi Wei Dou Shu Calculator',
    'Free, deterministic Zi Wei Dou Shu (Purple Star Astrology) calculator — 12 palaces, 14 major stars, Four Transformations, in English and Chinese.',
    SITE_URL
  );
  const faqSchema = getFAQPageSchema(FAQ_DATA.slice(0, 4));
  const howToSchema = getHowToSchema(
    'How to calculate your Zi Wei Dou Shu chart',
    'Enter your birth date, time, and gender to generate a full Zi Wei Dou Shu chart.',
    SITE_URL + '/',
    [
      { name: 'Enter your birth date', text: 'Enter your solar (Gregorian) birth date — or check the lunar box if you already have a lunar calendar date.' },
      { name: 'Select your birth hour', text: 'Choose the traditional Chinese two-hour block matching your birth time.' },
      { name: 'Select your gender', text: 'Gender affects the Life Palace direction and luck cycle calculation.' },
      { name: 'Read your chart', text: 'Your 12 palaces populate with major stars, minor stars, and the Four Transformations — click any star or palace name for a full explanation.' },
    ]
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(applicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <div className="relative overflow-hidden bg-slate-950 py-16 sm:py-24" id="home-hero-container">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-1.5 bg-purple-500/10 text-purple-300 rounded-full px-3 py-1 text-sm font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Free &middot; Deterministic &middot; English &amp; 中文</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-slate-100 tracking-tight font-medium">
            Zi Wei Dou Shu Calculator
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-lg text-slate-400 leading-relaxed">
            The best free Zi Wei Dou Shu calculator for an accurate, English-language Purple Star Astrology chart.
            Enter your birth date and time for your 12 palaces, 14 major stars, and Four Transformations —
            calculated deterministically, explained in plain English.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-10 pb-16">
        <ZiweiCalculator />
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-900">
        <h2 className="text-2xl font-serif text-slate-100 font-medium mb-4">How This Calculator Works — Algorithm &amp; Method</h2>
        <p className="text-slate-400 text-base leading-relaxed mb-4">
          Source: traditional Zi Wei Dou Shu lunar-calendar star-placement algorithm (via the open-source <code className="text-purple-300">iztro</code> engine)
          &middot; Calcul déterministe — aucune IA, aucune estimation arbitraire.
        </p>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 font-mono text-sm text-slate-300 leading-loose overflow-x-auto mb-4">
          <div className="text-emerald-400">— Chart construction —</div>
          solar_date → lunar_date (traditional Chinese calendar conversion)<br />
          lunar_date + hour_block + gender → life_palace_position, body_palace_position<br />
          life_palace_position → all_12_palaces (fixed clockwise/counter-clockwise order)<br />
          <br />
          <div className="text-emerald-400">— Star placement —</div>
          zi_wei_position = f(lunar_day, five_elements_class)<br />
          other_13_major_stars = fixed_offset_from(zi_wei_position)<br />
          <br />
          <div className="text-emerald-400">— Four Transformations (四化) —</div>
          year_stem → {'{'}hua_lu, hua_quan, hua_ke, hua_ji{'}'} → attached to 4 specific stars<br />
          <br />
          <div className="text-emerald-400">— algorithm —</div>
          lookup(birth_data) → palace_positions → star_positions → transformations → render_chart()
        </div>
        <p className="text-sm text-slate-500">
          This is the same deterministic calculation method used by professional Zi Wei Dou Shu software — the chart itself
          is fixed and reproducible; only the interpretation is a matter of reading skill.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-900">
        <h2 className="text-2xl font-serif text-slate-100 font-medium mb-6">Explore Zi Wei Dou Shu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { href: '/what-is-zi-wei-dou-shu/', title: 'What Is Zi Wei Dou Shu?', desc: 'A plain-English introduction to Purple Star Astrology.' },
            { href: '/zi-wei-dou-shu-chart-interpretation/', title: 'Chart Interpretation Guide', desc: 'How to read your chart, step by step.' },
            { href: '/zi-wei-dou-shu-stars-meaning/', title: 'Stars Meaning', desc: 'All 14 major stars explained.' },
            { href: '/zi-wei-dou-shu-palaces/', title: 'The 12 Palaces', desc: 'Every life domain in your chart.' },
            { href: '/zi-wei-dou-shu-love-compatibility/', title: 'Love Compatibility', desc: 'The Spouse (Marriage) Palace explained.' },
            { href: '/bazi-vs-zi-wei-dou-shu/', title: 'BaZi vs Zi Wei Dou Shu', desc: 'How the two systems differ.' },
          ].map(item => (
            <Link key={item.href} href={item.href}
              className="group flex items-center justify-between p-4 bg-slate-900 border border-slate-800 hover:border-purple-500/50 rounded-lg transition-all">
              <div>
                <h3 className="text-base font-semibold text-slate-100 group-hover:text-purple-400">{item.title}</h3>
                <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-purple-400 flex-shrink-0 ml-3" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
