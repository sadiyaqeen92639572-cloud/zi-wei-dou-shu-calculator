'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Calculator, Share2, Star as StarIcon } from 'lucide-react';
import { calculateChart, HOUR_LABELS, type NormalizedChart } from '@/lib/ziwei';
import { PALACES } from '@/lib/data/palaces';

export interface ChartFormValues {
  year: number;
  month: number;
  day: number;
  hourIndex: number;
  gender: 'male' | 'female';
  isLunar: boolean;
}

const DEFAULTS: ChartFormValues = {
  year: 1990, month: 1, day: 1, hourIndex: 0, gender: 'female', isLunar: false,
};

export function encodeChartHash(v: ChartFormValues): string {
  const params = new URLSearchParams({
    y: String(v.year), m: String(v.month), d: String(v.day),
    h: String(v.hourIndex), g: v.gender === 'male' ? 'm' : 'f', l: v.isLunar ? '1' : '0',
  });
  return params.toString();
}

export function decodeChartHash(hash: string): ChartFormValues | null {
  try {
    const params = new URLSearchParams(hash.replace(/^#/, ''));
    const year = parseInt(params.get('y') || '', 10);
    const month = parseInt(params.get('m') || '', 10);
    const day = parseInt(params.get('d') || '', 10);
    const hourIndex = parseInt(params.get('h') || '', 10);
    const gender = params.get('g') === 'm' ? 'male' : 'female';
    const isLunar = params.get('l') === '1';
    if (isNaN(year) || isNaN(month) || isNaN(day) || isNaN(hourIndex)) return null;
    return { year, month, day, hourIndex, gender, isLunar };
  } catch {
    return null;
  }
}

const TRANSFORMATION_COLOR: Record<string, string> = {
  A: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  B: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
  C: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
  D: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
};
const TRANSFORMATION_LABEL: Record<string, string> = { A: 'Lu (祿)', B: 'Quan (權)', C: 'Ke (科)', D: 'Ji (忌)' };

interface ZiweiCalculatorProps {
  initialValues?: ChartFormValues;
  showShare?: boolean;
}

export default function ZiweiCalculator({ initialValues, showShare = true }: ZiweiCalculatorProps) {
  const router = useRouter();
  const [values, setValues] = useState<ChartFormValues>(initialValues || DEFAULTS);
  const [chart, setChart] = useState<NormalizedChart | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  React.useEffect(() => {
    if (initialValues) {
      try {
        setChart(calculateChart(initialValues));
      } catch {
        setError('Could not calculate a chart from this link. Please check the date.');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleCalculate() {
    setError(null);
    try {
      const result = calculateChart(values);
      setChart(result);
    } catch {
      setError('Could not calculate this chart. Double-check the date is valid.');
    }
  }

  function handleShare() {
    const hash = encodeChartHash(values);
    const url = `${window.location.origin}/chart#${hash}`;
    if (showShare) {
      router.push(`/chart#${hash}`);
      return;
    }
    navigator.clipboard?.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-8">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-base font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Year</label>
            <input type="number" value={values.year} onChange={e => setValues(v => ({ ...v, year: parseInt(e.target.value) || v.year }))}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-purple-500" />
          </div>
          <div>
            <label className="block text-base font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Month</label>
            <input type="number" min={1} max={12} value={values.month} onChange={e => setValues(v => ({ ...v, month: parseInt(e.target.value) || v.month }))}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-purple-500" />
          </div>
          <div>
            <label className="block text-base font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Day</label>
            <input type="number" min={1} max={31} value={values.day} onChange={e => setValues(v => ({ ...v, day: parseInt(e.target.value) || v.day }))}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-purple-500" />
          </div>
          <div className="col-span-2 sm:col-span-2">
            <label className="block text-base font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Birth Hour (Chinese 2-hour block)</label>
            <select value={values.hourIndex} onChange={e => setValues(v => ({ ...v, hourIndex: parseInt(e.target.value) }))}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-purple-500 text-lg">
              {HOUR_LABELS.map((label, idx) => <option key={idx} value={idx}>{label}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-base font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Gender</label>
            <select value={values.gender} onChange={e => setValues(v => ({ ...v, gender: e.target.value as 'male' | 'female' }))}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-purple-500">
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
          <div className="col-span-2 sm:col-span-3 flex items-center gap-2">
            <input type="checkbox" id="isLunar" checked={values.isLunar} onChange={e => setValues(v => ({ ...v, isLunar: e.target.checked }))}
              className="rounded border-slate-700 bg-slate-950" />
            <label htmlFor="isLunar" className="text-lg text-slate-400">This date is already a lunar calendar date</label>
          </div>
        </div>

        {error && <p className="text-rose-400 text-lg mt-4">{error}</p>}

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button onClick={handleCalculate}
            className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg px-6 py-3 transition-colors">
            <Calculator className="h-4 w-4" /> Calculate My Chart
          </button>
          {chart && (
            <button onClick={handleShare}
              className="no-print flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-lg px-6 py-3 transition-colors">
              <Share2 className="h-4 w-4" /> {showShare ? (copied ? 'Link Copied!' : 'Share This Chart') : (copied ? 'Copied!' : 'Copy Link')}
            </button>
          )}
        </div>
      </div>

      {chart && <ChartDisplay chart={chart} />}
    </div>
  );
}

export function ChartDisplay({ chart }: { chart: NormalizedChart }) {
  return (
    <div className="space-y-6" id="chart-display">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-lg">
        <div><span className="text-slate-500 block text-base uppercase tracking-wider">Solar Date</span>{chart.solarDate}</div>
        <div><span className="text-slate-500 block text-base uppercase tracking-wider">Lunar Date</span>{chart.lunarDate}</div>
        <div><span className="text-slate-500 block text-base uppercase tracking-wider">Four Pillars</span>{chart.chineseDate}</div>
        <div><span className="text-slate-500 block text-base uppercase tracking-wider">Five Elements Class</span>{chart.fiveElementsClass}</div>
        <div><span className="text-slate-500 block text-base uppercase tracking-wider">Soul Star</span>{chart.soulStarChinese}</div>
        <div><span className="text-slate-500 block text-base uppercase tracking-wider">Body Star</span>{chart.bodyStarChinese}</div>
        <div><span className="text-slate-500 block text-base uppercase tracking-wider">Zodiac</span>{chart.zodiac}</div>
        <div><span className="text-slate-500 block text-base uppercase tracking-wider">Western Sign</span>{chart.sign}</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {chart.palaces.map(palace => (
          <div key={palace.index} className={`rounded-xl border p-4 ${palace.isLifePalace ? 'border-purple-500/60 bg-purple-500/5' : 'border-slate-800 bg-slate-900'}`}>
            <div className="flex items-center justify-between mb-2">
              <a href={`/palaces/${palace.slug}/`} className="font-serif text-slate-100 font-medium hover:text-purple-400 transition-colors">
                {palace.englishName}
              </a>
              <span className="text-base text-slate-500">{palace.chinese}</span>
            </div>
            {palace.isLifePalace && <div className="text-sm uppercase tracking-wider text-purple-400 font-semibold mb-2">Life Palace</div>}
            {palace.isBodyPalace && <div className="text-sm uppercase tracking-wider text-amber-400 font-semibold mb-2">Body Palace</div>}
            <div className="space-y-1.5">
              {palace.stars.filter(s => s.type === 'major').map((star, i) => (
                <div key={i} className="flex items-center gap-1.5 flex-wrap">
                  <StarIcon className="h-3 w-3 text-purple-400 flex-shrink-0" />
                  {star.key ? (
                    <a href={`/stars/${star.key}/`} className="text-lg text-slate-200 hover:text-purple-400 transition-colors">{star.displayName}</a>
                  ) : (
                    <span className="text-lg text-slate-200">{star.displayName}</span>
                  )}
                  {star.brightness && <span className="text-sm text-slate-500">{star.brightness}</span>}
                  {star.transformation && (
                    <span className={`text-sm px-1.5 py-0.5 rounded border ${TRANSFORMATION_COLOR[star.transformation]}`}>
                      {TRANSFORMATION_LABEL[star.transformation]}
                    </span>
                  )}
                </div>
              ))}
              {palace.stars.filter(s => s.type === 'major').length === 0 && (
                <div className="text-base text-slate-600 italic">Empty palace (no major star)</div>
              )}
              {palace.stars.filter(s => s.type !== 'major').slice(0, 3).map((star, i) => (
                <div key={i} className="text-base text-slate-500">{star.chinese}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { PALACES };
