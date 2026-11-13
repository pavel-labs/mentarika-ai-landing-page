import { describe, expect, it } from 'vitest';
import { LEGAL_CONTACT, LEGAL_DOCS, type LegalDoc } from '../legal';

const DOCS: LegalDoc[] = ['privacy', 'terms'];
const TRANSLATIONS = ['ru', 'pl', 'de', 'es'] as const;

describe('legal translations', () => {
  it.each(TRANSLATIONS)('%s has the same sections and paragraphs as English', (locale) => {
    for (const doc of DOCS) {
      const english = LEGAL_DOCS.en[doc].map((section) => section.body.length);
      const translated = LEGAL_DOCS[locale][doc].map((section) => section.body.length);

      expect(translated, `${locale} ${doc}`).toEqual(english);
    }
  });

  it.each(TRANSLATIONS)('%s keeps the section numbers of English', (locale) => {
    for (const doc of DOCS) {
      const numbers = (headings: string[]): string[] =>
        headings.map((heading) => heading.split('.')[0] ?? '');

      expect(numbers(LEGAL_DOCS[locale][doc].map((section) => section.heading))).toEqual(
        numbers(LEGAL_DOCS.en[doc].map((section) => section.heading)),
      );
    }
  });

  // The periods are facts about the product and its providers: a translation that drifts from
  // them states something untrue.
  it.each(['en', ...TRANSLATIONS] as const)('%s states every retention period', (locale) => {
    const text = LEGAL_DOCS[locale].privacy.flatMap((section) => section.body).join(' ');

    for (const period of ['30', '31', '90', '365']) expect(text, period).toContain(period);
    expect(text).toContain(LEGAL_CONTACT);
  });
});
