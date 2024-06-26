import { describe, test, expect } from 'vitest';
import { getPublic } from '@/utils/getPublic';

describe('getPublic 함수 테스트', () => {
  const baseURL = import.meta.env.BASE_URL;

  test(`getPublic("react-logo.svg") === ${baseURL + 'react-logo.svg'}`, () => {
    expect(getPublic('react-logo.svg')).toBe(baseURL + 'react-logo.svg');
  });
});
