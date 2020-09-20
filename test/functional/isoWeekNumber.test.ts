import { weekNumberToDate } from '../../src/utils/weekNumberToDate';

describe('Util weekNumberToDate function', () => {
  it('should return the number 38 of the week for date September 14, 2020', () => {
    const number = weekNumberToDate(new Date(2020, 8, 14));
    expect(number).toEqual(38);
  });

  it('should return the number 38 of the week for date September 20, 2020', () => {
    const number = weekNumberToDate(new Date(2020, 8, 20));
    expect(number).toEqual(38);
  });

  it('should return the number 39 of the week for date September 21, 2020', () => {
    const number = weekNumberToDate(new Date(2020, 8, 21));
    expect(number).toEqual(39);
  });

  it('should return an error if date is invalid', () => {
    expect(() => weekNumberToDate(new Date('aaa'))).toThrow(
      'Error: invalid date!'
    );
  });
});
