'use client';

import React from 'react';
import Link from 'next/link';
import { Star, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Calculator & Tools',
      links: [
        { name: 'Zi Wei Dou Shu Calculator', href: '/' },
        { name: 'Purple Star Astrology', href: '/purple-star-astrology/' },
        { name: 'Save Chart as PDF', href: '/zi-wei-dou-shu-pdf/' },
        { name: 'Life Map', href: '/zi-wei-dou-shu-life-map/' },
      ],
    },
    {
      title: 'Guides',
      links: [
        { name: 'What Is Zi Wei Dou Shu', href: '/what-is-zi-wei-dou-shu/' },
        { name: 'Chart Interpretation', href: '/zi-wei-dou-shu-chart-interpretation/' },
        { name: 'Stars Meaning', href: '/zi-wei-dou-shu-stars-meaning/' },
        { name: 'The 12 Palaces', href: '/zi-wei-dou-shu-palaces/' },
        { name: 'Love Compatibility', href: '/zi-wei-dou-shu-love-compatibility/' },
        { name: 'Flying Stars & Si Hua', href: '/flying-stars-si-hua/' },
        { name: 'BaZi vs Zi Wei Dou Shu', href: '/bazi-vs-zi-wei-dou-shu/' },
        { name: 'How to Learn Zi Wei Dou Shu', href: '/learn-zi-wei-dou-shu/' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Accuracy', href: '/zi-wei-dou-shu-accuracy/' },
        { name: 'Consultation Guide', href: '/zi-wei-dou-shu-consultation/' },
        { name: 'Astrology Glossary', href: '/glossary/' },
        { name: 'Frequently Asked Questions', href: '/faq/' },
      ],
    },
  ];

  return (
    <footer className="site-footer bg-slate-950 border-t border-slate-800 text-slate-400 py-12" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-purple-400 font-semibold text-lg">
              <Star className="h-6 w-6" />
              <span className="font-serif tracking-wide text-xl text-slate-100">Zi Wei Dou Shu Calculator</span>
            </div>
            <p className="text-base text-slate-400 leading-relaxed">
              Free, deterministic Zi Wei Dou Shu (Purple Star Astrology) chart calculator — 12 palaces, 14 major stars, Four Transformations, in clear English.
            </p>
            <div className="text-sm text-slate-500">
              Disclaimer: Zi Wei Dou Shu chart interpretations are for educational, self-reflection, and entertainment purposes.
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-slate-200 font-medium text-base tracking-wider uppercase">{section.title}</h3>
              <ul className="space-y-2 text-base">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-purple-400 transition-colors flex items-center group">
                      <span>{link.name}</span>
                      <ArrowUpRight className="h-3 w-3 ml-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-slate-500">
          <div>&copy; {currentYear} Zi Wei Dou Shu Calculator. All rights reserved.</div>
          <div className="flex space-x-4">
            <Link href="/faq/" className="hover:text-slate-300">FAQ</Link>
            <Link href="/glossary/" className="hover:text-slate-300">Glossary</Link>
            <Link href="/" className="hover:text-slate-300">Calculator</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
