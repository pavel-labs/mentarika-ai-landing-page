import addFormats from 'ajv-formats';
import Ajv2020 from 'ajv/dist/2020';
import { describe, expect, it } from 'vitest';
import { LOCALES } from '../i18n';
import {
  defaultLanding,
  hasCompleteLocalizedLanding,
  safeUrl,
  storeUrl,
} from './content';
import contract from './contract.generated.json';

describe('marketing migration defaults', () => {
  const ajv = new Ajv2020({ strict: false, allErrors: true });
  addFormats(ajv);
  const validate = ajv.compile(contract.properties.landing.items);
  it.each(LOCALES)('preserves %s copy within the shared CMS contract', (locale) => {
    expect(validate(defaultLanding(locale)), JSON.stringify(validate.errors)).toBe(true);
    expect(defaultLanding(locale).features.map((feature) => feature.id)).toContain(
      'quick-practice',
    );
  });
  it('uses the same landing template until CMS content exists in every locale', () => {
    expect(hasCompleteLocalizedLanding([{ locale: 'en' }])).toBe(false);
    expect(hasCompleteLocalizedLanding(LOCALES.map((locale) => ({ locale })))).toBe(true);
  });
  it('keeps unconfigured and invalid destinations unavailable', () => {
    expect(safeUrl(undefined)).toBeNull();
    expect(safeUrl('javascript:alert(1)')).toBeNull();
    expect(safeUrl('https://user:pass@example.com')).toBeNull();
    expect(storeUrl('https://apps.apple.com/', 'apple')).toBeNull();
    expect(
      storeUrl('https://play.google.com/store/apps/details?id=ai.mentarika', 'google'),
    ).toContain('id=ai.mentarika');
  });
});
