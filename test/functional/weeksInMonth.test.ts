import { weeksInMonth } from '../../src/utils/weeksInMonth';

describe('Util weeksInMonth function', () => {
  it('should return every day of the month of September divided by week (in arrays)', () => {
    const weeks = weeksInMonth(8, 2020);

    expect(weeks.length).toEqual(5); // 5 weeks
    expect(weeks[0][0]).toEqual(30); // August 30
    expect(weeks[4][weeks[4].length - 1]).toEqual(3); // October 3
  });

  it('should return an error if month is invalid', () => {
    // 0 - January, 1 - February... 11 - December
    expect(() => weeksInMonth(12, 2020)).toThrow('Error: invalid month!');
  });
});
