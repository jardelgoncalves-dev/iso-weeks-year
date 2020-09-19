import { firstDayWeek } from '../../src/utils/firstDayWeek';

describe('Util firstDayWeek function', () => {
  it('should return 6 (Saturday) for February 2020', () => {
    // 0 - January, 1 - February (first day is Saturday = 6)
    // 0 - Sunday, 1 Monday..., 6 - Saturday
    expect(6).toEqual(firstDayWeek(1, 2020));
  });
  it('should return 3 (Wednesday) for July 2020', () => {
    // 0 - January.., 6 - July (first day is Wednesday = 3)
    // 0 - Sunday, 1 Monday... 4 - Wednesday..., 6 - Saturday
    expect(3).toEqual(firstDayWeek(6, 2020));
  });

  it('should return 2 (Thursday) for July 2020', () => {
    // 0 - January.., 11 - December (first day is Thursday = 2)
    // 0 - Sunday, 1 Monday... 2 - Thursday..., 6 - Saturday
    expect(2).toEqual(firstDayWeek(11, 2020));
  });

  it('should return an error if month is invalid', () => {
    // 0 - January, 1 - February... 11 - December
    expect(() => firstDayWeek(12, 2020)).toThrow('Error: invalid month!');
  });
});
