// Reference terminology only — one term, one short definition. Linked from star/palace
// pages that use this jargon. Not a keyword dumping ground: every term here is a real
// piece of Zi Wei Dou Shu vocabulary used elsewhere on the site.

export interface GlossaryTerm {
  term: string;
  chinese?: string;
  definition: string;
}

export const GLOSSARY_DATA: GlossaryTerm[] = [
  { term: 'Zi Wei Dou Shu', chinese: '紫微斗數', definition: 'Literally "Purple Star Numerology" — the Chinese destiny-calculation system covered by this entire site, built on 12 palaces and 14 major stars.' },
  { term: 'Purple Star Astrology', definition: 'The standard English name for Zi Wei Dou Shu, named after its anchor star, Zi Wei (紫微).' },
  { term: 'Astrolabe', chinese: '命盤', definition: 'The technical term for the full 12-palace chart diagram — the complete visual layout of your Zi Wei Dou Shu reading.' },
  { term: 'Palace', chinese: '宮', definition: 'One of the 12 houses of the chart, each governing a specific life domain (e.g. Career Palace, Spouse Palace).' },
  { term: 'Life Palace', chinese: '命宮', definition: 'The palace anchoring your core personality and general life direction — the first palace read in any chart.' },
  { term: 'Body Palace', chinese: '身宮', definition: 'A secondary anchor palace (distinct from the Life Palace) that describes what you actively work on or develop over your lifetime.' },
  { term: 'Major Star', chinese: '主星', definition: 'One of the 14 primary stars (Zi Wei, Tian Ji, Tai Yang, etc.) that anchors the interpretation of whichever palace it occupies.' },
  { term: 'Minor Star', chinese: '輔星', definition: 'A secondary star that adds nuance or support to a palace\'s major star, without anchoring the interpretation on its own.' },
  { term: 'Brightness', chinese: '廟旺利平陷', definition: 'A strength rating (from miao/brightest to xian/dimmest) describing how fully a star expresses its nature in its current earthly-branch position.' },
  { term: 'Si Hua (Four Transformations)', chinese: '四化', definition: 'Four modifiers — Hua Lu, Hua Quan, Hua Ke, Hua Ji — that attach to specific stars based on your birth Year Stem, adding prosperity, power, status, or adversity themes.' },
  { term: 'Hua Lu', chinese: '化祿', definition: 'The Transformation of Prosperity — smooth flow, opportunity, and material gain.' },
  { term: 'Hua Quan', chinese: '化權', definition: 'The Transformation of Power — drive, authority, and decisiveness.' },
  { term: 'Hua Ke', chinese: '化科', definition: 'The Transformation of Status — recognition, reputation, and refinement.' },
  { term: 'Hua Ji', chinese: '化忌', definition: 'The Transformation of Adversity — obstacles or unfinished business, and traditionally the only challenging transformation.' },
  { term: 'Flying Stars', chinese: '飛星', definition: 'The technique of calculating a second set of transformations from a specific palace\'s heavenly stem, to see how that palace projects influence onto others.' },
  { term: 'Peach Blossom Stars', chinese: '桃花星', definition: 'A group of minor stars (including Hong Luan, Tian Xi, Xian Chi) associated with romance, charm, and social magnetism.' },
  { term: 'Six Killing Stars', chinese: '六煞星', definition: 'A group of six minor/major stars — including Qi Sha — traditionally read as bringing intensity, conflict, or higher-stakes energy wherever they land.' },
];
