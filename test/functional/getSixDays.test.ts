import { getSixDays } from '../../src/utils/getSixDays';

describe('Util getSixDays function', () => {
  it('should return the first 6 days of a month', () => {
    // Month 1 = February
    const days = getSixDays(1, 2020, false);

    expect(days.length).toEqual(6);
    expect(days).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should return the last 6 days of a month', () => {
    // Month 8 = September
    const days = getSixDays(8, 2020, true);

    expect(days.length).toEqual(6);
    expect(days).toEqual([25, 26, 27, 28, 29, 30]);
  });
});
