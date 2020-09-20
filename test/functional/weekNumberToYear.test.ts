import { weekNumberToYear } from '../../src';
import responseIsoWeeksNormalized2020 from '../fixtures/weeks_normalize_2020.json';
import responseIsoWeeksNormalized2021 from '../fixtures/weeks_normalize_2021.json';

describe('Util weekNumberToYear function', () => {
  it('should return every week in 2020', () => {
    expect(weekNumberToYear(2020)).toEqual(responseIsoWeeksNormalized2020);
  });

  it('should return every week in 2021', () => {
    expect(weekNumberToYear(2021)).toEqual(responseIsoWeeksNormalized2021);
  });
});
