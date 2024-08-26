import { sum, subtract, multiply } from './Numbers';

describe('Numbers', () => {
  test('sum() should add two numbers', () => {
    expect(sum(1, 2)).toEqual(3);
  });
  it('should subtract two numbers', () => {
    expect(subtract(2, 1)).toEqual(1);
  });
  it('should multiply two numbers', () => {
    expect(multiply(2, 2)).toEqual(4);
  });
});
