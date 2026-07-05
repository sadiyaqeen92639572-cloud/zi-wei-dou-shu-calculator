'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Star, Calculator, BookOpen, Heart, HelpCircle, FileText } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Calculator', href: '/', icon: Calculator },
    { name: 'Reading Guide', href: '/zi-wei-dou-shu-reading/', icon: BookOpen },
    { name: 'Stars', href: '/zi-wei-dou-shu-stars-meaning/', icon: Star },
    { name: 'Compatibility', href: '/zi-wei-dou-shu-love-compatibility/', icon: Heart },
    { name: 'Glossary', href: '/glossary/', icon: FileText },
    { name: 'FAQ', href: '/faq/', icon: HelpCircle },
  ];

  return (
    <header className="site-header sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-slate-100" id="main-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 text-purple-400 font-semibold text-lg hover:opacity-90">
              <Star className="h-6 w-6" />
              <span className="font-serif tracking-wide text-xl text-slate-100">Zi Wei <span className="text-purple-400">Dou Shu</span></span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-slate-300 hover:text-purple-400 font-medium text-sm transition-colors"
              >
                <item.icon className="h-4 w-4 text-slate-400" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white p-2"
              aria-label="Toggle Menu"
              id="menu-toggle-btn"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800" id="mobile-nav-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-purple-400 hover:bg-slate-900 transition-colors"
              >
                <item.icon className="h-5 w-5 text-slate-400" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
