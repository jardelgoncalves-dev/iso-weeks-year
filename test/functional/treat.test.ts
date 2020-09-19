import { treatMonth, treatYear } from '../../src/utils/treat';

describe('Util treats function', () => {
  it('treatMonth: should be returned 0 (January month) if the value entered is greater than 11', () => {
    expect(treatMonth(12)).toEqual(0);
  });

  it('treatMonth: should be returned 11 (December month) if the value entered is less than 0', () => {
    expect(treatMonth(-1)).toEqual(11);
  });

  it('treatMonth: should return the same value informed if it is greater than or equal to zero and less than or equal to 11', () => {
    expect(treatMonth(1)).toEqual(1);
  });

  it('treatYear: should return the incremented year if the month reported is greater than 11', () => {
    expect(treatYear(12, 2020)).toEqual(2021);
  });

  it('treatYear: should return the decremented year if the month reported is less than 0', () => {
    expect(treatYear(-1, 2020)).toEqual(2019);
  });

  it('treatYear: should return the same valueinformed for year  if it is greater than or equal to zero and less than or equal to 11', () => {
    expect(treatYear(1, 2020)).toEqual(2020);
  });
});
