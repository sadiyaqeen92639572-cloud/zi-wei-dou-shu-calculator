'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Printer, ArrowLeft } from 'lucide-react';
import { calculateChart, type NormalizedChart } from '@/lib/ziwei';
import { decodeChartHash, ChartDisplay, type ChartFormValues } from '@/components/ZiweiCalculator';

export default function ChartPageContent() {
  const [values, setValues] = useState<ChartFormValues | null>(null);
  const [chart, setChart] = useState<NormalizedChart | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const decoded = decodeChartHash(window.location.hash);
    if (!decoded) {
      setError('No chart data found in this link.');
      return;
    }
    setValues(decoded);
    try {
      setChart(calculateChart(decoded));
    } catch {
      setError('Could not calculate a chart from this link — the date may be invalid.');
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="no-print flex items-center justify-between mb-8">
        <Link href="/" className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-purple-400 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Calculator
        </Link>
        {chart && (
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg px-4 py-2 text-sm transition-colors"
          >
            <Printer className="h-4 w-4" /> Print / Save as PDF
          </button>
        )}
      </div>

      <h1 className="text-2xl sm:text-3xl font-serif text-slate-100 font-medium mb-6">
        Your Zi Wei Dou Shu Chart
      </h1>

      {!chart && !error && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center">
          <p className="text-slate-400 mb-4">Loading your chart…</p>
        </div>
      )}

      {error && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center">
          <p className="text-slate-400 mb-4">{error}</p>
          <Link href="/" className="text-purple-400 hover:text-purple-300 font-medium">Generate a new chart →</Link>
        </div>
      )}

      {chart && values && (
        <>
          <p className="no-print text-sm text-slate-500 mb-6">
            {values.gender === 'male' ? 'Male' : 'Female'} &middot; born {values.year}-{values.month}-{values.day} &middot;
            {' '}this link is bookmarkable — reopen it anytime to see this exact chart again.
          </p>
          <ChartDisplay chart={chart} />
        </>
      )}
    </div>
  );
}
