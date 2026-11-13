// `LEGAL_EFFECTIVE_DATE` is the single place to bump the "last updated" stamp.
export const LEGAL_EFFECTIVE_DATE = '2026-11-14';
export const LEGAL_CONTACT = 'privacy@mentarika.app';

export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalContent {
  privacy: LegalSection[];
  terms: LegalSection[];
}
