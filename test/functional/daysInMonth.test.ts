import { daysInMonth } from '../../src/utils/daysInMonth';

describe('Util daysInMonth function', () => {
  it('should return the 29 days for February 2020', () => {
    // 0 - January, 1 - February
    expect(29).toEqual(daysInMonth(1, 2020));
  });

  it('should return the 28 days for February 2021', () => {
    // 0 - January, 1 - February
    expect(28).toEqual(daysInMonth(1, 2021));
  });

  it('should return the 30 days for September 2020', () => {
    // 0 - January, 1 - February... 8 - September
    expect(30).toEqual(daysInMonth(8, 2020));
  });

  it('should return the 31 days for October 2020', () => {
    // 0 - January, 1 - February... 9 - September
    expect(31).toEqual(daysInMonth(9, 2020));
  });

  it('should return an error if month is invalid', () => {
    // 0 - January, 1 - February... 11 - December
    expect(() => daysInMonth(12, 2020)).toThrow('Error: invalid month!');
  });
});
