import { sum } from '../../src/sum';

describe('Test Sum Function', () => {
  it('should return to 2 for the sum of 1 + 1', () => {
    expect(2).toEqual(sum(1, 1));
  });
});
