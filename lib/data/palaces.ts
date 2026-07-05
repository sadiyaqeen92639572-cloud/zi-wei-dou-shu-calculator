// The 12 Palaces (十二宮) of Zi Wei Dou Shu.
// iztroKey = the `name` field iztro returns when called with lang 'en-US' (stable, unambiguous slugs).
// slug = the URL slug used for /palaces/[slug] — chosen for SEO where it differs from iztroKey
// (e.g. "spouse" -> "marriage" to match the "marriage palace" / "zwds marriage" keywords).

export interface PalaceInfo {
  slug: string;
  iztroKey: string;      // matches palace.name from iztro en-US output
  chinese: string;       // matches palace.name from iztro zh-CN output
  pinyin: string;
  englishName: string;   // e.g. "Spouse Palace (Marriage Palace)"
  domain: string;        // one-line: what area of life this palace governs
  summary: string;
}

export const PALACES: PalaceInfo[] = [
  {
    slug: 'life', iztroKey: 'soul', chinese: '命宫', pinyin: 'Ming Gong', // iztro keeps the 宫 suffix only on this one
    englishName: 'Life Palace', domain: 'Core personality, destiny, and overall life direction',
    summary: 'The Life Palace (命宮) is the anchor of the entire chart — it describes your fundamental personality, the way others perceive you, and the broad shape of your destiny. Every other palace is read in relation to it.',
  },
  {
    slug: 'siblings', iztroKey: 'siblings', chinese: '兄弟', pinyin: 'Xiong Di Gong',
    englishName: 'Siblings Palace', domain: 'Relationships with brothers, sisters, and close peers',
    summary: 'The Siblings Palace (兄弟宮) describes your relationship with brothers and sisters, and by extension close peer relationships and early partnerships in life.',
  },
  {
    slug: 'marriage', iztroKey: 'spouse', chinese: '夫妻', pinyin: 'Fu Qi Gong',
    englishName: 'Spouse Palace (Marriage Palace)', domain: 'Marriage, romantic partnership, and love compatibility',
    summary: 'The Spouse Palace — often called the Marriage Palace in English-language Zi Wei Dou Shu — is the single most consulted palace for love compatibility. It describes the type of partner you attract, the overall tone of your marriage, and how the relationship tends to evolve over time. Stars like Tian Ji here suggest a partnership defined by conversation and change; Zi Wei suggests a partner with real presence and authority; Tan Lang suggests strong romantic magnetism.',
  },
  {
    slug: 'children', iztroKey: 'children', chinese: '子女', pinyin: 'Zi Nu Gong',
    englishName: 'Children Palace', domain: 'Relationship with children, and creative or legacy projects',
    summary: 'The Children Palace (子女宮) covers your relationship with your children, fertility themes, and — in a broader reading — creative projects you "birth" into the world.',
  },
  {
    slug: 'wealth', iztroKey: 'wealth', chinese: '财帛', pinyin: 'Cai Bo Gong',
    englishName: 'Wealth Palace', domain: 'Income, cash flow, and attitude toward money',
    summary: 'The Wealth Palace (財帛宮) describes how money flows through your life — not your total net worth (that\'s more the Property Palace), but your earning style, cash flow, and relationship with spending and saving.',
  },
  {
    slug: 'health', iztroKey: 'health', chinese: '疾厄', pinyin: 'Ji E Gong',
    englishName: 'Health Palace', domain: 'Physical health, vulnerabilities, and vitality',
    summary: 'The Health Palace (疾厄宮) points to physical constitution, health vulnerabilities, and overall vitality — read alongside the Life Palace for a fuller picture of wellbeing.',
  },
  {
    slug: 'travel', iztroKey: 'surface', chinese: '迁移', pinyin: 'Qian Yi Gong',
    englishName: 'Travel Palace (Migration Palace)', domain: 'Life away from home, relocation, and how you present to strangers',
    summary: 'The Travel Palace — also called the Migration Palace — describes your experience away from home: relocation, travel luck, and how you come across to people who don\'t know you well (as opposed to the Life Palace, which is closer to your true self).',
  },
  {
    slug: 'friends', iztroKey: 'friends', chinese: '仆役', pinyin: 'Jiao You Gong', // iztro's zh-CN uses the older "servants" term 仆役, not 交友
    englishName: 'Friends Palace (Servants Palace)', domain: 'Friendships, colleagues, and subordinates',
    summary: 'The Friends Palace (交友宮), sometimes translated as the Servants Palace, covers relationships with friends, colleagues, and anyone who works alongside or under you rather than above.',
  },
  {
    slug: 'career', iztroKey: 'career', chinese: '官禄', pinyin: 'Guan Lu Gong',
    englishName: 'Career Palace', domain: 'Work, professional path, and achievement',
    summary: 'The Career Palace (官祿宮) is the primary palace for professional life — the type of work you\'re suited to, how you achieve recognition, and your overall relationship with ambition.',
  },
  {
    slug: 'property', iztroKey: 'property', chinese: '田宅', pinyin: 'Tian Zhai Gong',
    englishName: 'Property Palace', domain: 'Real estate, home life, and accumulated assets',
    summary: 'The Property Palace (田宅宮) governs real estate, the home environment, and accumulated fixed assets — a longer-horizon complement to the more liquid Wealth Palace.',
  },
  {
    slug: 'wellbeing', iztroKey: 'spirit', chinese: '福德', pinyin: 'Fu De Gong',
    englishName: 'Wellbeing Palace (Spirit Palace)', domain: 'Inner peace, values, hobbies, and spiritual life',
    summary: 'The Wellbeing Palace — sometimes called the Spirit Palace — describes your inner emotional life, values, and capacity for contentment, independent of external circumstances like money or career.',
  },
  {
    slug: 'parents', iztroKey: 'parents', chinese: '父母', pinyin: 'Fu Mu Gong',
    englishName: 'Parents Palace', domain: 'Relationship with parents and authority figures',
    summary: 'The Parents Palace (父母宮) describes your relationship with your parents and, by extension, with authority figures, teachers, and superiors generally.',
  },
];

export function getPalaceBySlug(slug: string): PalaceInfo | undefined {
  return PALACES.find(p => p.slug === slug);
}

export function getPalaceByIztroKey(key: string): PalaceInfo | undefined {
  return PALACES.find(p => p.iztroKey === key);
}
