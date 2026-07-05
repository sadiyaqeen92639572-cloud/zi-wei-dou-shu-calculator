// The 14 Major Stars (十四主星) of Zi Wei Dou Shu.
// iztro returns creative en-US codenames (e.g. "rebel" for Po Jun) that don't match
// how English-language ZWDS literature refers to these stars. This dictionary is the
// single source of truth for traditional naming — keyed by the Chinese name iztro
// returns when queried with lang 'zh-CN' (unambiguous, unlike the en-US strings).

export interface StarInfo {
  key: string;          // slug used in /stars/[key]
  chinese: string;       // simplified Chinese, matches iztro zh-CN star.name
  pinyin: string;        // e.g. "Qi Sha"
  englishName: string;   // traditional English name used in Western ZWDS books, e.g. "Seven Killings"
  nature: string;        // yin/yang + element, one line
  keyword: string;       // short one-line description
  summary: string;       // 2-3 sentence overview for the star hub page
  palaceMeanings: Record<string, string>; // palaceKey -> 1-2 sentence meaning when this star sits there
}

export const STARS: StarInfo[] = [
  {
    key: 'zi-wei', chinese: '紫微', pinyin: 'Zi Wei', englishName: 'Emperor Star',
    nature: 'Yin Earth — the noblest of all 14 major stars',
    keyword: 'Leadership, authority, and the drive to be in control',
    summary: 'Zi Wei (紫微), the "Emperor Star" or "Purple Star" that gives the entire system its name, sits at the top of the Zi Wei Dou Shu star hierarchy. It represents leadership, dignity, and the innate need to be respected and in charge — but it needs supporting stars around it to translate that authority into real achievement.',
    palaceMeanings: {
      soul: 'A natural leader who expects respect and struggles to take orders from others. Success depends heavily on which stars accompany Zi Wei here.',
      spouse: 'You are drawn to a partner with status, authority, or a strong personality — and you expect to be treated with respect within the relationship.',
      career: 'Suited to leadership, management, or any role where you set the direction rather than follow one.',
      wealth: 'Wealth tends to come through position and authority rather than pure hustle — status opens the door to money.',
    },
  },
  {
    key: 'tian-ji', chinese: '天机', pinyin: 'Tian Ji', englishName: 'Strategist Star',
    nature: 'Yin Wood — the mind and movement',
    keyword: 'Intelligence, planning, and constant change',
    summary: 'Tian Ji (天机) is the strategist and thinker of the chart — sharp, analytical, and quick to adapt. Where it appears, life tends to be less stable and more mobile, because Tian Ji is fundamentally the star of movement and re-calculation rather than settling.',
    palaceMeanings: {
      soul: 'A quick, analytical mind that thrives on solving problems, but can overthink and change plans frequently.',
      spouse: 'Tian Ji in Spouse (夫妻宮, the Spouse Palace) often signals a partner who is intelligent, communicative, and mentally active — but the relationship itself may go through more changes, negotiations, or restarts than average before settling. It rewards partners who can talk things through rather than assume stability.',
      career: 'Consulting, strategy, analysis, or any field that rewards adaptability over routine.',
      siblings: 'Sibling relationships that are more intellectual than emotional, sometimes with distance or change involved.',
    },
  },
  {
    key: 'tai-yang', chinese: '太阳', pinyin: 'Tai Yang', englishName: 'Sun Star',
    nature: 'Yang Fire — warmth, visibility, giving',
    keyword: 'Generosity, public recognition, and a giving nature',
    summary: 'Tai Yang (太阳), the Sun, radiates outward — generosity, visibility, and a drive to give rather than receive. It is strongly tied to the father, to public reputation, and to men in the chart generally, and it shines brightest for the native (not necessarily for their own bank balance).',
    palaceMeanings: {
      soul: 'Warm, generous, and often more comfortable giving than receiving — reputation matters more than quiet comfort.',
      career: 'Public-facing work, teaching, or roles where visibility and reputation are assets.',
      parents: 'Strongly tied to the relationship with the father specifically.',
      spouse: 'A partner who is direct, warm, and values being seen and respected in the relationship.',
    },
  },
  {
    key: 'wu-qu', chinese: '武曲', pinyin: 'Wu Qu', englishName: 'General Star',
    nature: 'Yin Metal — discipline and money',
    keyword: 'Financial discipline, decisiveness, and hard work',
    summary: 'Wu Qu (武曲) is the "Wealth Star" of military discipline — decisive, hardworking, and highly focused on tangible results, especially money. It is one of the strongest wealth indicators in the entire system, but its no-nonsense nature can read as cold or blunt in relationships.',
    palaceMeanings: {
      soul: 'Disciplined, decisive, and money-focused — you get things done but may struggle to express emotion.',
      wealth: 'One of the strongest wealth stars in Zi Wei Dou Shu — indicates strong earning capacity through discipline and hard work.',
      spouse: 'A relationship that may feel more practical than romantic; can indicate a later or more deliberate marriage.',
    },
  },
  {
    key: 'tian-tong', chinese: '天同', pinyin: 'Tian Tong', englishName: 'Blessing Star',
    nature: 'Yang Water — comfort and contentment',
    keyword: 'Ease, contentment, and a gentle temperament',
    summary: 'Tian Tong (天同) is the "Blessing Star" — soft, easy-going, and inclined toward comfort over ambition. It brings a naturally happy, low-conflict temperament, though it can also mean a lack of drive if not activated by other stars.',
    palaceMeanings: {
      soul: 'Easy-going, optimistic, and conflict-averse — content with life\'s comforts, sometimes to the point of low ambition.',
      health: 'Generally favors good health and emotional resilience.',
      spouse: 'A gentle, low-drama relationship style; partners tend to be easy-going too.',
    },
  },
  {
    key: 'lian-zhen', chinese: '廉贞', pinyin: 'Lian Zhen', englishName: 'Judge Star',
    nature: 'Yin Fire — complexity and intensity',
    keyword: 'Intensity, ambition, and a complicated moral compass',
    summary: 'Lian Zhen (廉贞) is complex and intense — sometimes called the "second peach blossom star" for its role in romance and charisma, and sometimes tied to conflict and legal matters. Its meaning shifts dramatically depending on which stars sit alongside it.',
    palaceMeanings: {
      soul: 'Ambitious, intense, and capable of great charisma or great conflict, depending on supporting stars.',
      spouse: 'Passionate but potentially turbulent relationships; strong attraction that can run hot and cold.',
      career: 'Suited to competitive, high-stakes, or negotiation-heavy fields — law, sales, politics.',
    },
  },
  {
    key: 'tian-fu', chinese: '天府', pinyin: 'Tian Fu', englishName: 'Treasury Star',
    nature: 'Yang Earth — stability and accumulation',
    keyword: 'Stability, conservatism, and steady accumulation of resources',
    summary: 'Tian Fu (天府), the "Empress Star" or Treasury Star, is Zi Wei\'s natural counterpart — stable, cautious, and focused on preserving and accumulating rather than taking risks. Where Zi Wei leads, Tian Fu manages.',
    palaceMeanings: {
      soul: 'Cautious, responsible, and drawn to security — a natural manager and preserver of resources.',
      wealth: 'Favors steady accumulation and saving over speculative risk-taking.',
      property: 'Strong indicator for real estate and physical asset accumulation.',
    },
  },
  {
    key: 'tai-yin', chinese: '太阴', pinyin: 'Tai Yin', englishName: 'Moon Star',
    nature: 'Yin Water — receptivity and emotion',
    keyword: 'Sensitivity, nurturing, and inner emotional life',
    summary: 'Tai Yin (太阴), the Moon, governs emotion, receptivity, and the inner life — strongly tied to the mother and to women generally in the chart. Where Tai Yang shines outward, Tai Yin reflects and nurtures.',
    palaceMeanings: {
      soul: 'Sensitive, intuitive, and emotionally attuned — comfort is found in a private inner world.',
      parents: 'Strongly tied to the relationship with the mother specifically.',
      wealth: 'Favors gradual, quiet wealth accumulation, sometimes tied to property or family assets.',
    },
  },
  {
    key: 'tan-lang', chinese: '贪狼', pinyin: 'Tan Lang', englishName: 'Greedy Wolf Star',
    nature: 'Yang Wood/Water — desire and versatility',
    keyword: 'Ambition, charm, and a taste for pleasure and variety',
    summary: 'Tan Lang (贪狼) is the primary "peach blossom" (romance/charisma) star of the system — versatile, sociable, and driven by desire, whether for status, pleasure, wealth, or romance. Highly adaptable, but can spread itself thin across too many interests.',
    palaceMeanings: {
      soul: 'Charming, versatile, and drawn to variety — excels socially but can struggle with focus or moderation.',
      spouse: 'Strong romantic and social magnetism; relationships can be passionate but should watch for wandering attention.',
      career: 'Thrives in sales, entertainment, hospitality, or any people-facing, variety-rich field.',
    },
  },
  {
    key: 'ju-men', chinese: '巨门', pinyin: 'Ju Men', englishName: 'Gate Star',
    nature: 'Yin Metal/Water — words and scrutiny',
    keyword: 'Sharp communication, scrutiny, and a talent for words',
    summary: 'Ju Men (巨门), the "Gate Star," rules speech, debate, and scrutiny — brilliant for careers built on words and analysis, but prone to gossip, disputes, or a naturally suspicious streak if poorly supported.',
    palaceMeanings: {
      soul: 'Sharp-tongued and analytical, with a gift for words — but prone to overthinking or friction through speech.',
      career: 'Excellent for law, teaching, media, sales, or any word-driven profession.',
      siblings: 'Sibling relationships that can involve more debate or friction than average.',
    },
  },
  {
    key: 'tian-xiang', chinese: '天相', pinyin: 'Tian Xiang', englishName: 'Minister Star',
    nature: 'Yang Water — support and fairness',
    keyword: 'Diplomacy, fairness, and a supportive nature',
    summary: 'Tian Xiang (天相) is the loyal "Minister Star" — fair, diplomatic, and most comfortable supporting or advising rather than leading outright. It brings balance and mediation wherever it sits.',
    palaceMeanings: {
      soul: 'Fair-minded, diplomatic, and comfortable in a supporting or advisory role rather than the spotlight.',
      career: 'Well-suited to advisory, HR, legal-support, or administrative leadership roles.',
      spouse: 'A dependable, fair-minded partner who values balance in the relationship.',
    },
  },
  {
    key: 'tian-liang', chinese: '天梁', pinyin: 'Tian Liang', englishName: 'Elder Star',
    nature: 'Yang Earth — wisdom and protection',
    keyword: 'Wisdom, a protective instinct, and moral authority',
    summary: 'Tian Liang (天梁), the "Elder" or "Sage Star," carries a protective, moralistic energy — the instinct to guide, mentor, and shield others, sometimes to the point of being overly critical or self-righteous.',
    palaceMeanings: {
      soul: 'Wise, principled, and protective of others — a natural mentor figure, sometimes prone to over-worrying.',
      career: 'Favors medicine, law, education, or advisory roles where experience and judgment are valued.',
      health: 'Often associated with resilience and a tendency to recover well from illness.',
    },
  },
  {
    key: 'qi-sha', chinese: '七杀', pinyin: 'Qi Sha', englishName: 'Seven Killings Star',
    nature: 'Yin Metal — force and decisiveness',
    keyword: 'Boldness, decisive action, and a warrior temperament',
    summary: 'Qi Sha (七杀), the "Seven Killings Star," is one of the six "killing stars" (六煞星) in Zi Wei Dou Shu — bold, decisive, and built for high-stakes action rather than routine. Its reputation as an "aggressive" star is really about intensity and risk tolerance, not literal danger — the outcome depends heavily on the surrounding stars and transformations.',
    palaceMeanings: {
      soul: 'Bold, decisive, and drawn to high-stakes situations — success often comes in bursts after periods of struggle.',
      career: 'Favors entrepreneurship, the military, competitive sales, or any field that rewards calculated risk.',
      spouse: 'Relationships can be intense and transformative, sometimes arriving later or after upheaval.',
    },
  },
  {
    key: 'po-jun', chinese: '破军', pinyin: 'Po Jun', englishName: 'Army Breaker Star',
    nature: 'Yin Water — destruction and rebuilding',
    keyword: 'Breaking old patterns to rebuild something new',
    summary: 'Po Jun (破军), the "Army Breaker" or "Rebel Star," is the star of destruction-then-renewal — it tears down what no longer works to build something new, which can look chaotic up close but often leads to genuine reinvention.',
    palaceMeanings: {
      soul: 'A pioneering, unconventional streak — comfortable breaking from tradition, prone to dramatic life changes.',
      career: 'Suited to entrepreneurship, innovation, or any field being actively disrupted or rebuilt.',
      property: 'Can indicate more moves, renovations, or instability in the property/home domain.',
    },
  },
];

export function getStarByKey(key: string): StarInfo | undefined {
  return STARS.find(s => s.key === key);
}
