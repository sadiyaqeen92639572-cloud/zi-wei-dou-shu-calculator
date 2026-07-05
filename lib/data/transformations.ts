// The Four Transformations (四化 Si Hua) of Zi Wei Dou Shu.
// iztro returns these as single Chinese characters in zh-CN mode: 禄/权/科/忌
// (mutagen codes A/B/C/D in en-US mode — see iztro/lib/i18n/locales/en-US/mutagen.js).
// "Flying stars" (飞星 fei xing) is the technique of tracking how these four
// transformations move between palaces — the mechanism behind /flying-stars-si-hua.

export interface TransformationInfo {
  code: 'A' | 'B' | 'C' | 'D';
  chinese: string;       // matches the single-char zh-CN mutagen string
  pinyin: string;
  englishName: string;
  meaning: string;
}

export const TRANSFORMATIONS: TransformationInfo[] = [
  {
    code: 'A', chinese: '禄', pinyin: 'Hua Lu',
    englishName: 'Transformation of Wealth (Prosperity)',
    meaning: 'Hua Lu (化祿) brings smooth flow, opportunity, and material gain to whichever star and palace it touches — the most consistently "positive" of the four transformations.',
  },
  {
    code: 'B', chinese: '权', pinyin: 'Hua Quan',
    englishName: 'Transformation of Power (Authority)',
    meaning: 'Hua Quan (化權) brings drive, authority, and the ability to take control — it amplifies ambition and decisiveness wherever it lands.',
  },
  {
    code: 'C', chinese: '科', pinyin: 'Hua Ke',
    englishName: 'Transformation of Status (Recognition)',
    meaning: 'Hua Ke (化科) brings recognition, reputation, and a scholarly, refined quality — favorable for exams, public standing, and being well thought of.',
  },
  {
    code: 'D', chinese: '忌', pinyin: 'Hua Ji',
    englishName: 'Transformation of Adversity (Obstacle)',
    meaning: 'Hua Ji (化忌) is the only transformation traditionally read as challenging — it brings obstacles, entanglement, or unfinished business to the palace it touches. It is not purely negative, though: many practitioners read Hua Ji as pointing to where you must work hardest, and therefore where the deepest growth happens.',
  },
];

export function getTransformationByCode(code: string): TransformationInfo | undefined {
  return TRANSFORMATIONS.find(t => t.code === code);
}
