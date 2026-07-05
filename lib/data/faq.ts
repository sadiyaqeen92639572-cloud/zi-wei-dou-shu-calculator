export interface FAQEntry {
  question: string;
  answer: string;
}

// FAQ = objections and comparisons only (mission per plan: not a keyword dumping ground).
// Every entry below answers a real question a visitor would actually ask.
export const FAQ_DATA: FAQEntry[] = [
  {
    question: 'Is this Zi Wei Dou Shu calculator accurate?',
    answer: 'The chart itself — the placement of all 14 major stars, 12 palaces, and the Four Transformations — is calculated deterministically from your birth data using the same lunar-calendar and star-placement algorithms used in professional Zi Wei Dou Shu software, not an AI guess. Accuracy of the underlying chart depends entirely on the accuracy of your birth date, time, and (for the Hour Pillar) location. The interpretation text is written from standard Zi Wei Dou Shu reference material; like any astrology system, how you apply it to your life is ultimately a matter of judgment, not a scientific prediction.',
  },
  {
    question: 'How does this compare to what people discuss on Reddit about Zi Wei Dou Shu?',
    answer: "Reddit threads on r/ChineseAstrology and similar communities tend to focus on manually plotting charts using paper templates or older desktop software, then debating interpretation with other practitioners. This calculator automates the plotting step (12 palaces, 14 major stars, minor stars, and the Four Transformations) so you can jump straight to the part Reddit discussions actually care about: what the placements mean. It won't replace a community discussion, but it removes the manual chart-plotting bottleneck that trips up most beginners.",
  },
  {
    question: 'How does this differ from Joey Yap\'s Zi Wei Dou Shu materials and software?',
    answer: "People searching \"zi wei dou shu joey yap\" are usually comparing this calculator to Joey Yap's Mastery Academy, a well-known commercial publisher of BaZi and Zi Wei Dou Shu books, courses, and paid software that primarily teaches a specific lineage's interpretive framework. This site is a free, standalone calculator: it generates the same underlying chart structure (palaces, stars, transformations) using open, deterministic calculation logic, with our own plain-English interpretation content. If you've studied Joey Yap's system, you'll recognize the chart layout immediately — the star and palace names used here follow the same traditional terminology.",
  },
  {
    question: 'Is this the same as Master Sean Chan\'s Zi Wei Dou Shu approach?',
    answer: "Master Sean Chan is a Singapore-based Zi Wei Dou Shu practitioner known for a particular consultation and teaching style. This calculator is not affiliated with any individual master's school or methodology — it presents the standard, widely-used chart structure (the same 12 palaces and 14 major stars taught across most modern lineages) with generalist interpretations, rather than one master's specific technique. If you're looking for a personalized reading in a specific lineage's style, a paid consultation with a named practitioner will go deeper than any calculator.",
  },
  {
    question: 'What is Destiny Labs and how does it relate to this calculator?',
    answer: 'Destiny Labs is a separate Chinese metaphysics platform offering its own BaZi and Zi Wei Dou Shu tools and readings, unrelated to this site. If you found this page while searching for Destiny Labs, this calculator is a free alternative that covers the same core chart-plotting functionality — 12 palaces, 14 major stars, and the Four Transformations — without an account or paywall.',
  },
  {
    question: 'What is "Five Arts" (Wu Shu) and how does it relate to Zi Wei Dou Shu?',
    answer: 'The "Five Arts" (五術 Wu Shu) is a traditional umbrella term in Chinese metaphysics covering five categories of practice: Shan (mountain/self-cultivation), Yi (medicine), Ming (destiny/fate calculation — this is where BaZi and Zi Wei Dou Shu sit), Xiang (physiognomy and feng shui), and Bu (divination, like I Ching). Zi Wei Dou Shu is one of the two major "Ming" (destiny calculation) systems, alongside BaZi. Some practitioners and platforms brand themselves around the full Five Arts framework; this calculator focuses specifically on the Zi Wei Dou Shu branch.',
  },
  {
    question: 'Will Zi Wei Dou Shu charts or interpretations change for 2026?',
    answer: "Your natal chart itself — the palaces, major stars, and Four Transformations fixed at birth — never changes; it's a permanent snapshot calculated from your birth data. What does shift year to year is your annual (流年 liu nian) overlay, which describes how that year's energy interacts with your fixed natal chart. A full 2026 annual forecast is a planned addition to this calculator; for now, the natal chart calculated here is the permanent foundation any yearly forecast builds on.",
  },
  {
    question: 'Does this calculator use AI to generate interpretations?',
    answer: 'No — the chart calculation and the star/palace interpretation text on this site are both deterministic: fixed reference content matched to your specific chart placements, not AI-generated. We are planning an optional AI-assisted personalized reading feature that synthesizes your specific combination of stars, palaces, and transformations into a narrative report, but the core calculator and all current interpretation content are rule-based, not generated.',
  },
  {
    question: 'What is Ziwei University and is this affiliated with it?',
    answer: 'Ziwei University is a paid online school offering structured Zi Wei Dou Shu courses and certification. This calculator is an independent, free tool with no affiliation — it is meant as a companion for anyone learning the system (whether through Ziwei University, a book, or self-study) who wants to generate real charts to practice reading rather than working only from static textbook examples.',
  },
];
