// Legal content. English is authoritative and is the only text so far: every locale shows it.
import type { Locale } from './i18n/index';
import { en } from './legal-content/en';
import type { LegalContent } from './legal-content/shared';

export {
  LEGAL_CONTACT,
  LEGAL_EFFECTIVE_DATE,
  type LegalContent,
  type LegalSection,
} from './legal-content/shared';

export const LEGAL_DOCS: Record<Locale, LegalContent> = { en, ru: en, pl: en, de: en, es: en };
export type LegalDoc = keyof LegalContent;
