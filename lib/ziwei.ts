import { astro } from 'iztro';
import { STARS, getStarByKey } from './data/stars';
import { PALACES, getPalaceByIztroKey } from './data/palaces';

export interface ChartInput {
  year: number;
  month: number;
  day: number;
  hourIndex: number; // 0-11, iztro's 12 two-hour blocks (0 = 早子時 23:00-01:00)
  gender: 'male' | 'female';
  isLunar?: boolean;
  isLeapMonth?: boolean;
}

export interface ChartStar {
  key: string | null;      // slug into STARS, null if star not in our 14-major dictionary
  chinese: string;
  displayName: string;     // "Zi Wei" or raw chinese if not mapped
  type: string;            // 'major' | 'minor' | 'tianma' | 'helper' | 'adjective' | ...
  brightness: string;
  transformation: 'A' | 'B' | 'C' | 'D' | null; // natal si hua, if any
}

export interface ChartPalace {
  index: number;
  slug: string;            // e.g. "marriage" for spouse
  englishName: string;
  chinese: string;
  heavenlyStem: string;
  earthlyBranch: string;
  isLifePalace: boolean;
  isBodyPalace: boolean;
  stars: ChartStar[];
}

export interface NormalizedChart {
  solarDate: string;
  lunarDate: string;
  chineseDate: string;   // four pillars, e.g. "geng chen - jia shen - bing woo - geng yin"
  zodiac: string;
  sign: string;
  fiveElementsClass: string;
  soulStarChinese: string;
  bodyStarChinese: string;
  palaces: ChartPalace[];
}

// Reverse lookup: iztro zh-CN star name -> our canonical key
const CHINESE_TO_STAR_KEY: Record<string, string> = Object.fromEntries(
  STARS.map(s => [s.chinese, s.key])
);

function mapStar(raw: { name: string; type: string; brightness?: string; mutagen?: string }): ChartStar {
  const key = CHINESE_TO_STAR_KEY[raw.name] || null;
  const info = key ? getStarByKey(key) : undefined;
  return {
    key,
    chinese: raw.name,
    displayName: info ? `${info.pinyin} (${info.englishName})` : raw.name,
    type: raw.type,
    brightness: raw.brightness || '',
    transformation: (raw.mutagen as 'A' | 'B' | 'C' | 'D') || null,
  };
}

/**
 * Calculate a full Zi Wei Dou Shu chart, deterministically, via the iztro engine.
 * Uses zh-CN internally for unambiguous star/palace name matching against our
 * canonical dictionaries (lib/data/stars.ts, lib/data/palaces.ts), then returns
 * a normalized, English-labeled structure for rendering.
 */
export function calculateChart(input: ChartInput): NormalizedChart {
  const dateStr = `${input.year}-${input.month}-${input.day}`;
  const a = input.isLunar
    ? astro.byLunar(dateStr, input.hourIndex, input.gender, !!input.isLeapMonth, true, 'zh-CN')
    : astro.bySolar(dateStr, input.hourIndex, input.gender, true, 'zh-CN');

  const palaces: ChartPalace[] = a.palaces.map(p => {
    const palaceInfo = getPalaceByIztroKey(
      // a.palaces[].name is Chinese here; map via chinese string on PALACES
      PALACES.find(pi => pi.chinese === p.name)?.iztroKey || ''
    );
    const allStars: ChartStar[] = [
      ...p.majorStars.map(mapStar),
      ...p.minorStars.map(mapStar),
      ...p.adjectiveStars.map(mapStar),
    ];
    return {
      index: p.index,
      slug: palaceInfo?.slug || p.name,
      englishName: palaceInfo?.englishName || p.name,
      chinese: p.name,
      heavenlyStem: p.heavenlyStem,
      earthlyBranch: p.earthlyBranch,
      isLifePalace: p.isOriginalPalace,
      isBodyPalace: p.isBodyPalace,
      stars: allStars,
    };
  });

  return {
    solarDate: a.solarDate,
    lunarDate: a.lunarDate,
    chineseDate: a.chineseDate,
    zodiac: a.zodiac,
    sign: a.sign,
    fiveElementsClass: a.fiveElementsClass,
    soulStarChinese: a.soul,
    bodyStarChinese: a.body,
    palaces,
  };
}

export const HOUR_LABELS = [
  '23:00–00:59 (早子時 Early Rat)',
  '01:00–02:59 (丑時 Ox)',
  '03:00–04:59 (寅時 Tiger)',
  '05:00–06:59 (卯時 Rabbit)',
  '07:00–08:59 (辰時 Dragon)',
  '09:00–10:59 (巳時 Snake)',
  '11:00–12:59 (午時 Horse)',
  '13:00–14:59 (未時 Goat)',
  '15:00–16:59 (申時 Monkey)',
  '17:00–18:59 (酉時 Rooster)',
  '19:00–20:59 (戌時 Dog)',
  '21:00–22:59 (亥時 Pig)',
];
