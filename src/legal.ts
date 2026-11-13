// Legal content. English is authoritative; the other languages are translations of it, kept
// section for section in `legal-content/`.
import type { Locale } from './i18n/index';
import { de } from './legal-content/de';
import { en } from './legal-content/en';
import { es } from './legal-content/es';
import { pl } from './legal-content/pl';
import { ru } from './legal-content/ru';
import type { LegalContent } from './legal-content/shared';

export {
  LEGAL_CONTACT,
  LEGAL_EFFECTIVE_DATE,
  type LegalContent,
  type LegalSection,
} from './legal-content/shared';

export const LEGAL_DOCS: Record<Locale, LegalContent> = { en, ru, pl, de, es };
export type LegalDoc = keyof LegalContent;
