import { formatEVs } from '../../src/steps/format-team';

describe('formatEVs', () => {
  test('correctly formats spread with 0s', () => {
    const spread = '248/252/0/0/8/0';
    expect(formatEVs(spread)).toBe('248 HP / 252 Atk / 8 SpD');
  });
});