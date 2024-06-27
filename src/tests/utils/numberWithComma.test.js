import { describe, test, expect } from 'vitest';
import { numberWithComma, currency } from '@/utils/numberWithComma';

describe('numberWithComma 함수 테스트', () => {
  test('numberWithComma(3000) === "3,000"', () => {
    expect(numberWithComma(3000)).toBe('3,000');
  });
  test('currency(3000) === "3,000원"', () => {
    expect(currency(3000)).toBe('3,000원');
  });
});
