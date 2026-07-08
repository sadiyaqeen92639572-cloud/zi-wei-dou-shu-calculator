'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '@/lib/data/faq';
import { getFAQPageSchema } from '@/lib/seo';

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const schema = getFAQPageSchema(FAQ_DATA);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="space-y-3">
        {FAQ_DATA.map((item, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full flex items-center justify-between px-5 py-4 text-left"
            >
              <span className="text-base sm:text-lg font-medium text-slate-100 pr-4">{item.question}</span>
              <ChevronDown className={`h-4 w-4 text-slate-500 flex-shrink-0 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
            </button>
            {openIdx === idx && (
              <div className="px-5 pb-4 text-base text-slate-400 leading-relaxed">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
